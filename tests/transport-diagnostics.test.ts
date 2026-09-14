import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import type { AddressInfo } from "node:net";

import {
  classifyStatus,
  describeAttempt,
  formatAttempt,
  hostOf,
  isTransientTransport,
  safeUrl,
  transportFingerprint,
} from "../scripts/lib/transport-diagnostics.mjs";
import { fetchPage } from "../scripts/lib/registry-text.mjs";

/**
 * "fetch failed" is not a diagnosis.
 *
 * Twelve FCI URLs fail intermittently on a hosted runner and the membership
 * changes between runs. Node raises `TypeError: fetch failed` for every
 * transport problem it has, so DNS failure, connect timeout, socket reset and
 * an expired certificate all reached the summary identically — and those four
 * want opposite responses.
 *
 * The cause is on `error.cause`. These tests hold the classification, the
 * retry policy that follows from it, and the rule that none of this may print
 * anything that identifies the caller.
 */

const err = (name: string, code: string, extra: Record<string, unknown> = {}) => {
  const e = new TypeError("fetch failed");
  (e as { cause?: unknown }).cause = { name, code, ...extra };
  return e;
};
const at = (e: Error, url = "https://www.fci.be/en/nomenclature/CHIHUAHUA-218.html") =>
  describeAttempt({ error: e, url, attempt: 1, elapsedMs: 42 });

/* ---------------- classification ---------------- */

test("the four failures that used to look identical are told apart", () => {
  assert.equal(at(err("Error", "ENOTFOUND", { syscall: "getaddrinfo" })).transport, "dns");
  assert.equal(at(err("Error", "UND_ERR_CONNECT_TIMEOUT")).transport, "connect-timeout");
  assert.equal(at(err("Error", "ECONNRESET", { syscall: "read" })).transport, "reset");
  assert.equal(at(err("Error", "CERT_HAS_EXPIRED")).transport, "tls");
  // All four still carry the same useless message underneath.
  for (const e of [err("Error", "ENOTFOUND"), err("Error", "ECONNRESET")]) {
    assert.equal(at(e).message, "fetch failed");
  }
});

test("body and header timeouts are distinguished from connect timeouts", () => {
  assert.equal(at(err("Error", "UND_ERR_HEADERS_TIMEOUT")).transport, "body-timeout");
  assert.equal(at(err("Error", "UND_ERR_BODY_TIMEOUT")).transport, "body-timeout");
  assert.equal(at(err("Error", "ETIMEDOUT")).transport, "connect-timeout");
});

test("HTTP statuses use the same vocabulary", () => {
  assert.equal(classifyStatus(408), "http-408");
  assert.equal(classifyStatus(429), "http-429");
  assert.equal(classifyStatus(503), "http-5xx");
  assert.equal(classifyStatus(404), "http-4xx");
  assert.equal(classifyStatus(200), null, "a success is not a failure class");
});

test("the cause's code, errno and syscall survive", () => {
  const d = at(err("Error", "ECONNRESET", { errno: -54, syscall: "read" }));
  assert.equal(d.causeCode, "ECONNRESET");
  assert.equal(d.causeErrno, -54);
  assert.equal(d.causeSyscall, "read");
  assert.equal(d.elapsedMs, 42);
  assert.equal(d.host, "www.fci.be");
});

/* ---------------- retry policy ---------------- */

test("control: a certificate failure is never retried", () => {
  /*
   * The one that matters. A trust decision that succeeds because it was asked
   * again has not been resolved — it has been retried until it gave the answer
   * we wanted.
   */
  assert.equal(isTransientTransport("tls"), false);
});

test("control: a deterministic 4xx and a DNS failure are not retried", () => {
  assert.equal(isTransientTransport("http-4xx"), false, "asking again changes nothing");
  assert.equal(isTransientTransport("dns"), false, "a name that does not resolve now will not in 2s");
});

test("control: resets, timeouts, 408, 429 and 5xx are retried", () => {
  for (const t of ["reset", "connect-timeout", "body-timeout", "http-408", "http-429", "http-5xx"]) {
    assert.equal(isTransientTransport(t), true, t);
  }
});

/* ---------------- aggregation identity ---------------- */

test("a fingerprint groups by how it failed, not by which URL", () => {
  const a = at(err("Error", "ECONNRESET"), "https://www.fci.be/en/nomenclature/CHIHUAHUA-218.html");
  const b = at(err("Error", "ECONNRESET"), "https://www.fci.be/en/nomenclature/GREAT-DANE-235.html");
  assert.equal(transportFingerprint(a), transportFingerprint(b), "same failure, different URL");
});

test("control: different failures never share a fingerprint", () => {
  const reset = at(err("Error", "ECONNRESET"));
  const dns = at(err("Error", "ENOTFOUND"));
  const otherHost = at(err("Error", "ECONNRESET"), "https://www.akc.org/dog-breeds/beagle/");
  assert.notEqual(transportFingerprint(reset), transportFingerprint(dns));
  assert.notEqual(transportFingerprint(reset), transportFingerprint(otherHost), "host is part of it");
});

/* ---------------- safety of the output ---------------- */

test("control: credentials and query strings never reach the output", () => {
  assert.equal(safeUrl("https://user:secret@www.fci.be/x?token=abc"), "https://www.fci.be/x");
  const d = describeAttempt({
    error: err("Error", "ECONNRESET"),
    url: "https://user:secret@www.fci.be/en/nomenclature/CHIHUAHUA-218.html",
    attempt: 1,
    elapsedMs: 1,
    finalUrl: "https://user:secret@www.fci.be/elsewhere?token=abc",
  });
  const printed = JSON.stringify(d) + formatAttempt(d);
  assert.ok(!printed.includes("secret"), "a password must never be logged");
  assert.ok(!printed.includes("token=abc"));
  assert.equal(d.host, "www.fci.be");
});

test("control: no header, cookie or body ever enters a diagnostic", () => {
  const e = err("Error", "ECONNRESET");
  (e as { cause: Record<string, unknown> }).cause.headers = { cookie: "session=zzz" };
  (e as { cause: Record<string, unknown> }).cause.body = "<html>secret page</html>";
  const printed = JSON.stringify(at(e));
  for (const leak of ["session=zzz", "cookie", "secret page", "<html>"]) {
    assert.ok(!printed.includes(leak), `leaked ${leak}`);
  }
  // The record is a fixed, reviewed shape — not a dump of whatever was attached.
  assert.deepEqual(
    Object.keys(at(e)).sort(),
    ["attempt", "causeCode", "causeName", "elapsedMs", "host", "message", "name", "transport"].sort(),
  );
});

/* ---------------- through a real socket ---------------- */

async function against(handler: (req: http.IncomingMessage, res: http.ServerResponse) => void) {
  const server = http.createServer(handler);
  await new Promise<void>((r) => server.listen(0, "127.0.0.1", r));
  const { port } = server.address() as AddressInfo;
  try {
    return await fetchPage(`http://127.0.0.1:${port}/x`, { retries: 1, backoffMs: 10 })
      .then((r) => ({ ok: true as const, ...r }))
      .catch((e) => ({ ok: false as const, error: e, attempts: e.attempts ?? [] }));
  } finally {
    await new Promise<void>((r) => server.close(() => r()));
  }
}

test("control: a socket reset keeps its cause and is retried", async () => {
  let hits = 0;
  const r = await against((_req, res) => {
    hits += 1;
    res.socket?.destroy();
  });
  assert.equal(r.ok, false);
  assert.equal(hits, 2, "attempted twice");
  const codes: Array<string | undefined> = r.attempts.map(
    (a: { causeCode?: string }) => a.causeCode,
  );
  assert.ok(
    codes.every((c: string | undefined) => c !== undefined),
    `cause lost: ${JSON.stringify(r.attempts)}`,
  );
  assert.ok(r.attempts.every((a: { elapsedMs?: number }) => typeof a.elapsedMs === "number"));
});

test("control: a 503 is retried and a 404 is not", async () => {
  let n = 0;
  const five = await against((_q, res) => {
    n += 1;
    res.writeHead(503).end("busy");
  });
  assert.equal(five.ok, false);
  assert.equal(n, 2, "503 is retried");

  let m = 0;
  const four = await against((_q, res) => {
    m += 1;
    res.writeHead(404).end("gone");
  });
  assert.equal(four.ok, false);
  assert.equal(m, 1, "404 is asked once — asking again changes nothing");
});

test("control: recovering on the second attempt is not a failure", async () => {
  let n = 0;
  const r = await against((_q, res) => {
    n += 1;
    if (n === 1) return void res.writeHead(503).end("busy");
    res.writeHead(200, { "Content-Type": "text/html" }).end("<html>ok</html>");
  });
  assert.equal(r.ok, true, "a recovered fetch returns a body");
  assert.equal(n, 2);
  assert.equal(r.attempts.length, 2, "both attempts stay visible in the summary");
  assert.equal(r.attempts[0].ok, false);
  assert.equal(r.attempts[1].ok, true);
});

test("control: Retry-After is captured when the server sends one", async () => {
  const r = await against((_q, res) => {
    res.writeHead(429, { "Retry-After": "7" }).end("slow down");
  });
  assert.equal(r.ok, false);
  assert.equal(r.attempts[0].retryAfter, "7");
  assert.equal(r.attempts[0].transport, "http-429");
});

test("control: no test in this suite reaches a live registry", () => {
  const dir = path.join(path.resolve(import.meta.dirname, ".."), "tests");
  const offenders: string[] = [];
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    const src = fs.readFileSync(path.join(dir, file), "utf8");
    src.split("\n").forEach((line, i) => {
      if (line.trim().startsWith("*") || line.trim().startsWith("//")) return;
      if (/https?:\/\/(www\.)?(akc\.org|cfa\.org|fci\.be|fifeweb\.org)/.test(line) &&
          /\bfetch\b|fetchText|fetchPage|fetchBytes/.test(line)) {
        offenders.push(`${file}:${i + 1}`);
      }
    });
  }
  assert.deepEqual(offenders, [], offenders.join("\n"));
});
