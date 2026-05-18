import Script from "next/script";

/**
 * WebmasterID analytics tracker.
 *
 * Loaded once site-wide from the root layout. Uses next/script with
 * strategy="afterInteractive" so it never blocks first paint or
 * client hydration of the calculator pages.
 *
 * The data-wmid value is the public site identifier and is intentionally
 * visible in client HTML. The matching server-side secret key must never
 * be added to client code, public files, or committed env files.
 */
export default function WebmasterIdTracker() {
  return (
    <Script
      id="webmasterid-tracker"
      src="https://webmasterid.com/tracker.iife.min.js"
      strategy="afterInteractive"
      data-wmid="wm_shem93khz4zeyi0u"
      data-endpoint="https://webmasterid-ingest-api.vercel.app/api/events"
    />
  );
}
