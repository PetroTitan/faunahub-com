import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /search-index.json is the data file the search overlay fetches. It is a
      // machine artifact, not a page, and every title and description in it
      // already lives on a real indexable URL.
      disallow: ["/api/", "/_next/", "/search-index.json"],
    },
    sitemap: [
      "https://faunahub.com/sitemap.xml",
      "https://faunahub.com/image-sitemap.xml",
    ],
    host: "https://faunahub.com",
  };
}
