/**
 * Why a fetch failed, in a form that is safe to print.
 *
 * WHAT WAS LOST
 *
 * `fetchText` recorded `String(error.message)` and nothing else. Node's fetch
 * raises `TypeError: fetch failed` for every transport problem it has, so DNS
 * resolution failure, a connect timeout, a socket reset mid-body and an expired
 * certificate all reached the summary as the same three words. Twelve FCI URLs
 * fail intermittently on a hosted runner and the run could not say which of
 * those four things happened — which is the difference between "retry it",
 * "slow down", "this host is gone" and "do not trust this connection".
 *
 * The real cause is one level down, on `error.cause`: undici puts the system
 * error there with its `code`, `errno` and `syscall`.
 *
 * WHAT IS DELIBERATELY NOT RECORDED
 *
 *   cookies, authorization or any request header, response bodies, the runner's
 *   own address, environment values, and credentials embedded in a URL.
 *
 * Everything kept is either a system error identifier, a status, a duration, or
 * a hostname — the things needed to tell the failure classes apart, and nothing
 * that identifies the caller or reveals what was being sent.
 */

/**
 * A URL with any credentials removed.
 *
 * `https://user:secret@host/path` in a log is a leaked password, and this
 * module exists to be printed.
 */
export function safeUrl(url) {
  try {
    const parsed = new URL(url);
    parsed.username = "";
    parsed.password = "";
    parsed.search = "";
    return parsed.toString();
  } catch {
    return "(unparseable url)";
  }
}

export function hostOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "(unknown host)";
  }
}

/**
 * The failure classes worth telling apart, and what each one implies.
 *
 *   dns                 the name did not resolve — retrying rarely helps soon
 *   connect-timeout     no answer to the connection attempt — usually transient
 *   body-timeout        connected, then the response stalled — usually transient
 *   reset               the peer closed mid-exchange — usually transient
 *   tls                 certificate or handshake — NEVER retried; a failed
 *                       trust decision that succeeds on a retry is worse than
 *                       one that fails
 *   http-429 / -408     the server asked us to wait
 *   http-5xx            the server broke
 *   http-4xx            deterministic; asking again changes nothing
 *   aborted             our own timeout fired
 */
const CODE_CLASSES = [
  [/^(ENOTFOUND|EAI_AGAIN|EAI_NODATA|EAI_NONAME)$/, "dns"],
  [/^(UND_ERR_CONNECT_TIMEOUT|ETIMEDOUT|ECONNREFUSED|EHOSTUNREACH|ENETUNREACH)$/, "connect-timeout"],
  [/^(UND_ERR_HEADERS_TIMEOUT|UND_ERR_BODY_TIMEOUT)$/, "body-timeout"],
  [/^(ECONNRESET|EPIPE|UND_ERR_SOCKET)$/, "reset"],
  [/^(CERT_|UNABLE_TO_|SELF_SIGNED|ERR_TLS|EPROTO|DEPTH_ZERO)/, "tls"],
  [/^ABORT_ERR$/, "aborted"],
];

const classifyCode = (code) => {
  for (const [re, name] of CODE_CLASSES) if (re.test(String(code ?? ""))) return name;
  return null;
};

/** Classify an HTTP status the same way, so one vocabulary covers both. */
export function classifyStatus(status) {
  if (status === undefined || status === null) return null;
  if (status === 408) return "http-408";
  if (status === 429) return "http-429";
  if (status >= 500) return "http-5xx";
  if (status >= 400) return "http-4xx";
  return null;
}

/**
 * Everything knowable about one failed attempt, safely.
 *
 * @param {{error?: Error, status?: number, url: string, attempt: number,
 *   elapsedMs: number, finalUrl?: string, retryAfter?: string|null}} input
 */
export function describeAttempt({ error, status, url, attempt, elapsedMs, finalUrl, retryAfter }) {
  const cause = error?.cause;
  const code = cause?.code ?? error?.code;
  const transport = classifyCode(code) ?? classifyStatus(status);

  const record = {
    attempt,
    elapsedMs,
    host: hostOf(url),
    // Named `transport` rather than `reason` because it says HOW the exchange
    // failed, never why the registry might have wanted it to.
    transport: transport ?? (status !== undefined ? `http-${status}` : "unclassified"),
    name: error?.name,
    message: error?.message,
    causeName: cause?.name,
    causeCode: code,
    causeErrno: cause?.errno,
    causeSyscall: cause?.syscall,
  };
  if (status !== undefined) record.status = status;
  if (finalUrl && finalUrl !== url) record.finalUrl = safeUrl(finalUrl);
  if (retryAfter) record.retryAfter = String(retryAfter).slice(0, 40);

  for (const key of Object.keys(record)) {
    if (record[key] === undefined) delete record[key];
  }
  return record;
}

/**
 * Which classes are worth a second attempt.
 *
 * TLS is excluded on purpose and is the one that matters: a certificate failure
 * that passes on retry has not been resolved, it has been tried until it got
 * the answer we wanted. A deterministic 4xx is excluded because asking again
 * changes nothing. DNS is excluded because a name that does not resolve now
 * will not resolve two seconds later, and the retry only delays the report.
 */
const TRANSIENT = new Set([
  "connect-timeout",
  "body-timeout",
  "reset",
  "aborted",
  "http-408",
  "http-429",
  "http-5xx",
]);

export const isTransientTransport = (transport) => TRANSIENT.has(transport);

/**
 * A stable name for "this failed the same way".
 *
 * Aggregation across URLs is only honest if the failures really are one
 * failure, so the fingerprint is the transport class and the system code — not
 * the message, which carries no distinction, and not the URL, which is what we
 * are trying to group across.
 */
export const transportFingerprint = (record) =>
  `${record.host}:${record.transport}${record.causeCode ? `:${record.causeCode}` : ""}`;

/** One line for a human. Contains nothing that is not already in the record. */
export const formatAttempt = (a) =>
  `#${a.attempt} ${a.transport}` +
  (a.causeCode ? ` (${a.causeCode}${a.causeSyscall ? ` on ${a.causeSyscall}` : ""})` : "") +
  (a.status ? ` status ${a.status}` : "") +
  ` after ${a.elapsedMs} ms` +
  (a.retryAfter ? ` retry-after ${a.retryAfter}` : "");
