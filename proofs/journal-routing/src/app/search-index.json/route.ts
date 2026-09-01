/**
 * The shape `search-integration.md` proposes for the real Journal index: a route
 * handler under the mounted prefix, never a file in public/. Proving it here is
 * the point — it must not be reachable at the site root.
 */
export function GET() {
  return Response.json(
    { marker: "faunahub-journal-proof", version: 0, documents: [] },
    { headers: { "X-Robots-Tag": "noindex, nofollow" } },
  );
}
