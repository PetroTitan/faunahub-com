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

/* ================================================================ *
 * Aggregation, through the real run loop
 * ================================================================ */

import { execFile } from "node:child_process";
import { BREEDS } from "../src/lib/pet-intelligence/index.ts";

const REPO = path.resolve(import.meta.dirname, "..");
const fciBreeds = BREEDS.filter((b) =>
  b.recognition.some((r) => r.registryId === "fci" && r.registryUrl),
);
const fciPath = (b: (typeof fciBreeds)[number]) =>
  new URL(b.recognition.find((r) => r.registryId === "fci")!.registryUrl!).pathname;

/** A minimal FCI page the checker reads without complaint. */
const fciPage = (b: (typeof fciBreeds)[number]) => {
  const rec = b.recognition.find((r) => r.registryId === "fci")!;
  const group = /Group (\d+)/.exec(rec.registryGroup ?? "")?.[1] ?? "1";
  return [
    "<html><body>",
    `<span id="ContentPlaceHolder1_NumeroLabel">${rec.registryBreedCode ?? ""}</span>`,
    `<span id="ContentPlaceHolder1_StatutLabel">Definitive</span>`,
    `<a id="ContentPlaceHolder1_GroupeHyperLink">Group n°${group}</a>`,
    "</body></html>",
  ].join("\n");
};

/** Run the verifier over FCI only, with `fail` deciding which paths break. */
async function runFci(fail: (p: string) => "reset" | "404" | null) {
  const server = http.createServer((req, res) => {
    const p = req.url ?? "";
    const mode = fail(p);
    if (mode === "reset") return void res.socket?.destroy();
    if (mode === "404") return void res.writeHead(404).end("gone");
    const breed = fciBreeds.find((b) => fciPath(b) === p);
    if (!breed) return void res.writeHead(404).end("no");
    res.writeHead(200, { "Content-Type": "text/html" }).end(fciPage(breed));
  });
  await new Promise<void>((r) => server.listen(0, "127.0.0.1", r));
  const { port } = server.address() as AddressInfo;
  try {
    const stdout = await new Promise<string>((resolve) => {
      execFile(
        "node",
        ["scripts/verify-breed-registry.mjs"],
        {
          cwd: REPO,
          maxBuffer: 32 * 1024 * 1024,
          env: {
            ...process.env,
            FAUNAHUB_FCI_BASE_URL: `http://127.0.0.1:${port}`,
            FAUNAHUB_VERIFY_ONLY: "fci",
            FAUNAHUB_VERIFY_DELAY_MS: "0",
          },
        },
        (_e, out) => resolve(out),
      );
    });
    const counts = /(\d+) disagreement\(s\), (\d+) unreachable source\(s\)/.exec(stdout);
    return {
      stdout,
      disagreements: Number(counts?.[1] ?? -1),
      unreachable: Number(counts?.[2] ?? -1),
      aggregated: /URLs failed identically at the transport layer/.test(stdout),
      breedScoped: [...stdout.matchAll(/^ {2}(dog-\S+) {2}fci {2}/gm)].map((m) => m[1]),
    };
  } finally {
    await new Promise<void>((r) => server.close(() => r()));
  }
}

const firstN = (n: number) => new Set(fciBreeds.slice(0, n).map(fciPath));

test("control: three identical transport failures become one signal", async () => {
  const bad = firstN(3);
  const r = await runFci((p) => (bad.has(p) ? "reset" : null));
  assert.equal(r.disagreements, 0, "a transport failure never contradicts a record");
  assert.equal(r.unreachable, 1, "one condition, one signal");
  assert.ok(r.aggregated, r.stdout.slice(-500));
  assert.match(r.stdout, /3 distinct URLs/);
  // The aggregate must still name every breed it covers.
  for (const b of fciBreeds.slice(0, 3)) assert.match(r.stdout, new RegExp(b.id));
});

test("control: two identical failures are NOT aggregated", async () => {
  const bad = firstN(2);
  const r = await runFci((p) => (bad.has(p) ? "reset" : null));
  assert.equal(r.unreachable, 2, "two is not a pattern");
  assert.ok(!r.aggregated);
  assert.deepEqual(r.breedScoped.sort(), fciBreeds.slice(0, 2).map((b) => b.id).sort());
});

test("control: an isolated 404 stays breed-scoped beside an aggregate", async () => {
  const reset = firstN(3);
  const gone = fciPath(fciBreeds[5]);
  const r = await runFci((p) => (reset.has(p) ? "reset" : p === gone ? "404" : null));
  assert.equal(r.disagreements, 0);
  assert.ok(r.aggregated, "the three resets still aggregate");
  assert.deepEqual(r.breedScoped, [fciBreeds[5].id], "the 404 is its own URL's problem");
  assert.equal(r.unreachable, 2, "one aggregate plus one breed-scoped");
});
