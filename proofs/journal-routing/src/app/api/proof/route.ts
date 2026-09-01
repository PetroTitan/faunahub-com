import { headers } from "next/headers";

/** JSON route handler — proves route handlers survive the routing boundary. */
export async function GET() {
  const h = await headers();
  return Response.json(
    {
      marker: "faunahub-journal-proof",
      kind: "json-route-handler",
      matchedPath: h.get("x-matched-path"),
      forwardedHost: h.get("x-forwarded-host"),
      host: h.get("host"),
    },
    { headers: { "X-Robots-Tag": "noindex, nofollow" } },
  );
}
