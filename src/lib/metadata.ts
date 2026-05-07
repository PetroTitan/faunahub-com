import type { Metadata } from "next";

const SITE_URL = "https://faunahub.com";
const SITE_NAME = "FaunaHub";
const DEFAULT_DESCRIPTION =
  "Practical pet care guides, animal facts, wildlife explainers, and simple decision tools for responsible pet owners and curious readers.";

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
  ogImage?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? `${SITE_URL}/og-default.png`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
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
  ogImage?: string;
}): Metadata {
  const base = buildMetadata({ title, description, path, ogImage });
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? `${SITE_URL}/og-default.png`;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [SITE_URL],
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };
