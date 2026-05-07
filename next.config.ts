import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better debugging
  reactStrictMode: true,
  // Image optimization config — extend allowed domains here as needed
  images: {
    remotePatterns: [],
  },
  // i18n routing foundation — currently English only, ready to extend
  // future: add locales: ['en', 'de', 'fr', 'es', 'pt', 'uk']
};

export default nextConfig;
