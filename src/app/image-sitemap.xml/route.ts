import { ANIMAL_IMAGES } from "@/lib/images/animal-images";
import { BREED_IMAGES } from "@/lib/images/breed-images";
import { ENDANGERED_ANIMAL_IMAGES } from "@/lib/images/endangered-animal-images";

const BASE_URL = "https://faunahub.com";

/**
 * Dedicated Google image sitemap.
 *
 * Format reference: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 *
 * Emits one <url> entry per animal page, with one <image:image> per associated
 * image (hero + gallery) including the title, caption, and license URL where
 * applicable. The main `/sitemap.xml` continues to handle URL discovery; this
 * route is purely an image-SEO companion.
 */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface SitemapImage {
  pagePath: string;
  localPath: string;
  alt: string;
  caption: string;
  licenseUrl: string;
}

export function GET(): Response {
  // Group images by page so each <url> gets all its <image:image> entries.
  const byPage = new Map<string, SitemapImage[]>();
  const all: SitemapImage[] = [
    ...ANIMAL_IMAGES.map((img) => ({
      pagePath: img.pagePath,
      localPath: img.localPath,
      alt: img.alt,
      caption: img.caption,
      licenseUrl: img.licenseUrl,
    })),
    ...BREED_IMAGES.map((img) => ({
      pagePath: img.pagePath,
      localPath: img.localPath,
      alt: img.alt,
      caption: img.caption,
      licenseUrl: img.licenseUrl,
    })),
    ...ENDANGERED_ANIMAL_IMAGES.map((img) => ({
      pagePath: img.pagePath,
      localPath: img.localPath,
      alt: img.alt,
      caption: img.caption,
      licenseUrl: img.licenseUrl,
    })),
  ];
  for (const img of all) {
    const list = byPage.get(img.pagePath) ?? [];
    list.push(img);
    byPage.set(img.pagePath, list);
  }

  const urls: string[] = [];
  for (const [pagePath, images] of byPage.entries()) {
    const imageBlocks = images
      .map((img) => {
        const loc = `${BASE_URL}${img.localPath}`;
        const title = escapeXml(img.caption || img.alt);
        const caption = escapeXml(img.alt);
        const licenseTag = img.licenseUrl
          ? `      <image:license>${escapeXml(img.licenseUrl)}</image:license>\n`
          : "";
        return [
          "    <image:image>",
          `      <image:loc>${escapeXml(loc)}</image:loc>`,
          `      <image:title>${title}</image:title>`,
          `      <image:caption>${caption}</image:caption>`,
          licenseTag.trimEnd(),
          "    </image:image>",
        ]
          .filter((line) => line.length > 0)
          .join("\n");
      })
      .join("\n");

    urls.push(
      [
        "  <url>",
        `    <loc>${escapeXml(`${BASE_URL}${pagePath}`)}</loc>`,
        imageBlocks,
        "  </url>",
      ].join("\n"),
    );
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    urls.join("\n"),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
