import type { NextConfig } from "next";

/** The disposable proof prefix. NOT /journal — the real prefix stays unclaimed. */
const PROOF_BASE = "/__journal-proof";

const nextConfig: NextConfig = {
  // Variant A under test: basePath set, routes live at the app root.
  basePath: PROOF_BASE,

  // Every proof response must be unindexable even if it is crawled.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },

  // The canonical-host safeguard the ADR requires the child app to own itself.
  // NOTE: with basePath set, `source` matches INSIDE the base path, so the
  // destination must re-state the prefix or the redirect drops it.
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.faunahub.com" }],
      destination: `https://faunahub.com${PROOF_BASE}/:path*`,
      statusCode: 301,
    }];
  },
};
export default nextConfig;
