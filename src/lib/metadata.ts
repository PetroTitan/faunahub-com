import type { Metadata } from "next";

const SITE_URL = "https://faunahub.com";
const SITE_NAME = "FaunaHub";
const DEFAULT_DESCRIPTION =
  "Practical pet care guides, animal facts, wildlife explainers, and simple decision tools for responsible pet owners and curious readers.";

interface OgImageInput {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

const DEFAULT_OG_IMAGE: OgImageInput = {
  url: `${SITE_URL}/brand/faunahub-logo-horizontal.png`,
  width: 1200,
  height: 630,
};

function resolveOgImage(
  ogImage: string | OgImageInput | undefined,
  fallbackAlt: string,
): { url: string; width: number; height: number; alt: string } {
  if (typeof ogImage === "string") {
    return { url: ogImage, width: 1200, height: 630, alt: fallbackAlt };
  }
  if (ogImage) {
    return {
      url: ogImage.url,
      width: ogImage.width ?? 1200,
      height: ogImage.height ?? 630,
      alt: ogImage.alt ?? fallbackAlt,
    };
  }
  return {
    url: DEFAULT_OG_IMAGE.url,
    width: DEFAULT_OG_IMAGE.width!,
    height: DEFAULT_OG_IMAGE.height!,
    alt: fallbackAlt,
  };
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string | OgImageInput;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const img = resolveOgImage(ogImage, title);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    // `absolute` bypasses the title.template defined in the root layout,
    // preventing the brand suffix from being applied twice.
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: img.url, width: img.width, height: img.height, alt: img.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [img.url],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildArticleMetadata({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  modifiedTime?: string;
  ogImage?: string | OgImageInput;
}): Metadata {
  const base = buildMetadata({ title, description, path, ogImage });
  const img = resolveOgImage(ogImage, title);

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [SITE_URL],
      images: [{ url: img.url, width: img.width, height: img.height, alt: img.alt }],
    },
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };
