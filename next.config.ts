import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Enable strict mode for better debugging
  reactStrictMode: true,
  // Image optimization config — extend allowed domains here as needed
  images: {
    remotePatterns: [],
  },
  // Pin the workspace root to this project folder so Next.js does not
  // walk up to /Users/titan and confuse itself with stray lockfiles
  // outside the repository.
  outputFileTracingRoot: path.join(__dirname),
  // i18n routing foundation — currently English only, ready to extend
  // future: add locales: ['en', 'de', 'fr', 'es', 'pt', 'uk']

  // Canonical host: enforce the non-www apex (https://faunahub.com), which is
  // what every canonical tag, metadataBase, robots host, and sitemap URL uses.
  // Without this, www.faunahub.com also serves 200s, so Google crawls every
  // page twice and files the www copies under "Alternate page with proper
  // canonical tag" — wasting crawl budget. A 301 from www -> apex consolidates
  // all signals on the canonical host. Query strings are preserved automatically.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.faunahub.com" }],
        destination: "https://faunahub.com/:path*",
        // 301 (Moved Permanently) is the conventional, universally-recognised
        // status for canonical-host consolidation. Google treats 301 and 308
        // identically, but 301 avoids confusing older SEO tooling.
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
