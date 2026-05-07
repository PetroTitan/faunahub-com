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
};

export default nextConfig;
