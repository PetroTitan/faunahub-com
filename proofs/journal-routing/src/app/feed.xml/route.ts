/** XML route handler — the shape a real Journal RSS feed would use. */
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>FaunaHub Journal Routing Proof</title>
    <link>https://faunahub.com/__journal-proof</link>
    <description>Disposable routing proof. No content. PROOF-APP-MARKER.</description>
  </channel>
</rss>`;
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8", "X-Robots-Tag": "noindex, nofollow" },
  });
}
