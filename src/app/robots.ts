import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /search-index.json is the data file the search overlay fetches. It is a
      // machine artifact, not a page, and every title and description in it
      // already lives on a real indexable URL.
      //
      // /animal-finder-index.json is deliberately NOT blocked, even though it is
      // the same kind of artifact. The two cases are not equivalent: /search is
      // noindex and fetches its index only after a reader opens the overlay, so
      // a blocked fetch is never rendered. /animal-finder IS indexable and
      // fetches its index on mount, so blocking it would make Google's renderer
      // hit the failure path and index the words "The animal index did not
      // load" on a page that otherwise renders 48 animals correctly. Saving a
      // crawl request is not worth publishing an error state.
      disallow: ["/api/", "/_next/", "/search-index.json"],
    },
    sitemap: [
      "https://faunahub.com/sitemap.xml",
      "https://faunahub.com/image-sitemap.xml",
    ],
    host: "https://faunahub.com",
  };
}
