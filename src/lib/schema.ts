const SITE_URL = "https://faunahub.com";
const SITE_NAME = "FaunaHub";
const LOGO_URL = `${SITE_URL}/brand/faunahub-logo-horizontal.png`;
const LOGO_WIDTH = 1600;
const LOGO_HEIGHT = 900;

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Practical pet care guides, animal facts, wildlife explainers, and simple decision tools for responsible pet owners and curious readers.",
    // SearchAction intentionally omitted. /search now exists, but the sitelinks
    // searchbox works by sending readers to /search?q={search_term_string} —
    // and the site-wide WebmasterID tracker reports window.location.href, so
    // every such visit would ship the reader's typed text to a third-party
    // endpoint. FaunaHub's privacy policy lists what it collects and has no
    // user-supplied free-text category, and there is no consent banner.
    // Re-add once consent gates the tracker and the policy covers search terms;
    // /search will need to accept ?q= again at the same time.
    // See docs/search-architecture.md.
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: LOGO_WIDTH,
      height: LOGO_HEIGHT,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@helperg.com",
      contactType: "customer support",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        width: 240,
        height: 60,
      },
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Structured data for a two-animal comparison page.
 *
 * schema.org has no Comparison type, and inventing one — or reaching for
 * Product/Review to get a rating widget — would be describing the page as
 * something it is not. This stays inside Article, which the page already is,
 * and adds two properties Article genuinely inherits from CreativeWork:
 *
 *   `about`       the two animals the page is about, each linked to its real
 *                 FaunaHub page. Group-level names point at their hub rather
 *                 than at an invented /animals/ URL.
 *   `mainEntity`  an ItemList of the key differences — the page's actual
 *                 subject matter, expressed as the list it visibly is.
 *
 * No rating, no winner, no ranking: the page makes no such claim, so neither
 * does its markup.
 */
export function comparisonArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  about,
  keyDifferences,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  about: { name: string; url: string }[];
  keyDifferences: { name: string; description: string }[];
}) {
  const base = articleSchema({
    title,
    description,
    path,
    datePublished,
    dateModified,
  });

  return {
    ...base,
    about: about.map((entity) => ({
      "@type": "Thing",
      name: entity.name,
      url: entity.url,
    })),
    ...(keyDifferences.length > 0
      ? {
          mainEntity: {
            "@type": "ItemList",
            name: title,
            itemListElement: keyDifferences.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              description: item.description,
            })),
          },
        }
      : {}),
  };
}

export function itemListSchema(
  items: { name: string; url: string; position: number }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };
}
