/**
 * HELPERG Ecosystem — central product registry.
 *
 * Single source of truth for every HELPERG website and mobile application
 * surfaced in the global ecosystem banner, the full product directory, and the
 * mobile sheet. Nothing in the ecosystem UI hardcodes a product link — every
 * link is derived from this registry.
 *
 * Rules enforced here (see `validateEcosystemRegistry` + tests):
 *   - unique product ids
 *   - unique, valid HTTPS platform urls
 *   - no empty urls, no placeholder "#" links
 *   - no invented links (products without a verified url expose no platform)
 *
 * Verified 2026-07-20: all 16 web domains below returned HTTP 200 (Cash
 * Workspace's verified website https://www.cashworkspace.com was confirmed
 * and added). CV & Resume Builder is iOS-only — no Android link is invented.
 */

export type PlatformType = "website" | "web-app" | "ios" | "android";

export type ProductCategory =
  | "business"
  | "productivity"
  | "communications"
  | "knowledge"
  | "finance"
  | "career"
  | "creator"
  | "utility";

export type ProductStatus = "live" | "beta" | "coming-soon";

export type ProductPlatform = {
  type: PlatformType;
  /** Human-visible label, e.g. "Website", "App Store", "Google Play". */
  label: string;
  url: string;
};

export type EcosystemProduct = {
  id: string;
  name: string;
  /** Optional compact label for tight surfaces (timeline nodes). */
  shortName?: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  platforms: ProductPlatform[];
  /** Highlighted in the timeline + "Featured platforms" directory section. */
  featured?: boolean;
  /** Deterministic ordering; unique across the registry. */
  timelineOrder: number;
};

const web = (url: string): ProductPlatform => ({
  type: "website",
  label: "Website",
  url,
});
const appStore = (url: string): ProductPlatform => ({
  type: "ios",
  label: "App Store",
  url,
});
const googlePlay = (url: string): ProductPlatform => ({
  type: "android",
  label: "Google Play",
  url,
});

/**
 * The full HELPERG product ecosystem.
 *
 * `timelineOrder` is unique and defines both the timeline node order (for
 * featured products) and the within-section ordering in the directory.
 */
export const ECOSYSTEM_PRODUCTS: readonly EcosystemProduct[] = [
  {
    id: "webmasterid",
    name: "WebmasterID",
    description:
      "Search visibility and website growth intelligence for site owners.",
    category: "business",
    status: "live",
    platforms: [web("https://webmasterid.com")],
    featured: true,
    timelineOrder: 1,
  },
  {
    id: "geobusinessiq",
    name: "GeoBusinessIQ",
    description: "Location and market intelligence for business decisions.",
    category: "business",
    status: "live",
    platforms: [web("https://geobusinessiq.com")],
    featured: true,
    timelineOrder: 2,
  },
  {
    id: "talentpartnerid",
    name: "TalentPartnerID",
    description: "Recruiting and talent-partnership tools for hiring teams.",
    category: "career",
    status: "live",
    platforms: [web("https://talentpartnerid.com")],
    featured: true,
    timelineOrder: 3,
  },
  {
    id: "hrhelperg",
    name: "HRHelperG",
    description: "HR workflows and people-management tools.",
    category: "career",
    status: "live",
    platforms: [web("https://hrhelperg.com")],
    timelineOrder: 4,
  },
  {
    id: "twin-phone",
    name: "Twin Phone",
    description: "A second phone number and calling tools for one device.",
    category: "communications",
    status: "live",
    platforms: [web("https://twin-phone.com")],
    featured: true,
    timelineOrder: 5,
  },
  {
    id: "faunahub",
    name: "FaunaHub",
    description: "Pet care, animal facts, and wildlife intelligence.",
    category: "knowledge",
    status: "live",
    platforms: [web("https://faunahub.com")],
    featured: true,
    timelineOrder: 6,
  },
  {
    id: "socialsporthub",
    name: "SocialSportHub",
    description: "Sports knowledge, athletes, and a sports knowledge graph.",
    category: "creator",
    status: "live",
    platforms: [web("https://socialsporthub.com")],
    timelineOrder: 7,
  },
  {
    id: "agricultureid",
    name: "AgricultureID",
    description: "Agriculture knowledge and practical reference.",
    category: "knowledge",
    status: "live",
    platforms: [web("https://agricultureid.com")],
    timelineOrder: 8,
  },
  {
    id: "asteriastar",
    name: "AsteriaStar",
    description: "Astronomy and celestial reference knowledge.",
    category: "knowledge",
    status: "live",
    platforms: [web("https://asteriastar.com")],
    timelineOrder: 9,
  },
  {
    id: "builddesignhub",
    name: "BuildDesignHub",
    description: "Construction, design, and home-improvement guides.",
    category: "knowledge",
    status: "live",
    platforms: [web("https://builddesignhub.com")],
    timelineOrder: 10,
  },
  {
    id: "printerarchive",
    name: "PrinterArchive",
    description: "Printer resources, references, and archives.",
    category: "knowledge",
    status: "live",
    platforms: [web("https://printerarchive.net")],
    timelineOrder: 11,
  },
  {
    id: "virtue-and-power",
    name: "Virtue & Power",
    shortName: "Virtue & Power",
    description: "Ethics, philosophy, and personal-development reference.",
    category: "knowledge",
    status: "live",
    platforms: [web("https://virtueandpower.com")],
    timelineOrder: 12,
  },
  {
    id: "globalcityintelligence",
    name: "GlobalCityIntelligence",
    shortName: "Global City IQ",
    description: "City data and urban intelligence reference.",
    category: "knowledge",
    status: "live",
    platforms: [web("https://globalcityintelligence.com")],
    timelineOrder: 13,
  },
  {
    id: "petrohrys",
    name: "PetroHrys",
    description: "Personal portfolio and creative projects.",
    category: "creator",
    status: "live",
    platforms: [web("https://petrohrys.com")],
    timelineOrder: 14,
  },
  {
    id: "helperg",
    name: "HELPERG",
    description: "The home of the HELPERG product ecosystem.",
    category: "business",
    status: "live",
    platforms: [web("https://helperg.com")],
    timelineOrder: 15,
  },
  {
    id: "cash-workspace",
    name: "Cash Workspace",
    description: "A workspace for personal finances and money management.",
    category: "finance",
    status: "live",
    platforms: [web("https://www.cashworkspace.com")],
    timelineOrder: 16,
  },

  // ── Mobile applications ────────────────────────────────────────────────
  {
    id: "zip-archive",
    name: "Zip Archive",
    description: "Compress, extract, and manage archive files on mobile.",
    category: "utility",
    status: "live",
    platforms: [
      appStore("https://apps.apple.com/app/id6753772583"),
      googlePlay(
        "https://play.google.com/store/apps/details?id=com.ziparchivator.zip&pcampaignid=web_share",
      ),
    ],
    timelineOrder: 17,
  },
  {
    id: "smart-printer",
    name: "Smart Printer",
    description: "Mobile printing for documents and photos.",
    category: "productivity",
    status: "live",
    platforms: [
      appStore("https://apps.apple.com/app/id6746067890"),
      googlePlay(
        "https://play.google.com/store/apps/details?id=com.helperg.smart.printer",
      ),
    ],
    timelineOrder: 18,
  },
  {
    id: "fax",
    name: "Fax",
    description: "Send and receive faxes from your phone.",
    category: "communications",
    status: "live",
    platforms: [
      appStore("https://apps.apple.com/app/id6760895885"),
      googlePlay(
        "https://play.google.com/store/apps/details?id=com.helperg.fax.app&pcampaignid=web_share",
      ),
    ],
    timelineOrder: 19,
  },
  {
    id: "pdf-editor",
    name: "PDF Editor",
    description: "Edit, convert, and manage PDF documents.",
    category: "productivity",
    status: "live",
    platforms: [
      appStore("https://apps.apple.com/app/id6747341672"),
      googlePlay(
        "https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share",
      ),
    ],
    timelineOrder: 20,
  },
  {
    // iOS only — no Android link supplied, and none is invented.
    id: "cv-resume-builder",
    name: "CV & Resume Builder",
    shortName: "CV & Resume",
    description: "Build professional resumes and CVs.",
    category: "career",
    status: "live",
    platforms: [appStore("https://apps.apple.com/app/id6745150815")],
    timelineOrder: 21,
  },
  {
    id: "invoice-maker",
    name: "Invoice Maker",
    description: "Create and send professional invoices.",
    category: "finance",
    status: "live",
    platforms: [
      appStore("https://apps.apple.com/app/id6747311276"),
      googlePlay(
        "https://play.google.com/store/apps/details?id=com.helperg.invoicer",
      ),
    ],
    timelineOrder: 22,
  },
  {
    id: "pocket-manager",
    name: "Pocket Manager",
    description: "Track spending and manage personal money.",
    category: "finance",
    status: "live",
    platforms: [
      appStore("https://apps.apple.com/app/id6743084126"),
      googlePlay(
        "https://play.google.com/store/apps/details?id=com.helperg.money",
      ),
    ],
    timelineOrder: 23,
  },
];

// ── Derived helpers ────────────────────────────────────────────────────────

/** A product is a "mobile app" when it ships app platforms and no website. */
export function isMobileApp(product: EcosystemProduct): boolean {
  const hasApp = product.platforms.some(
    (p) => p.type === "ios" || p.type === "android",
  );
  const hasWeb = product.platforms.some(
    (p) => p.type === "website" || p.type === "web-app",
  );
  return hasApp && !hasWeb;
}

/** The single canonical web (website / web-app) link for a product, if any. */
export function primaryWebPlatform(
  product: EcosystemProduct,
): ProductPlatform | undefined {
  return (
    product.platforms.find((p) => p.type === "website") ??
    product.platforms.find((p) => p.type === "web-app")
  );
}

const STATUS_LABEL: Record<ProductStatus, string> = {
  live: "Available",
  beta: "Beta",
  "coming-soon": "Coming soon",
};

export function statusLabel(status: ProductStatus): string {
  return STATUS_LABEL[status];
}

const CATEGORY_LABEL: Record<ProductCategory, string> = {
  business: "Business",
  productivity: "Productivity",
  communications: "Communications",
  knowledge: "Knowledge",
  finance: "Finance",
  career: "Career",
  creator: "Creator",
  utility: "Utility",
};

export function categoryLabel(category: ProductCategory): string {
  return CATEGORY_LABEL[category];
}

export function getProductById(id: string): EcosystemProduct | undefined {
  return ECOSYSTEM_PRODUCTS.find((p) => p.id === id);
}

const byTimelineOrder = (a: EcosystemProduct, b: EcosystemProduct) =>
  a.timelineOrder - b.timelineOrder;

/**
 * Products shown as timeline nodes in the banner. Featured web products in
 * order, with the current product guaranteed present (appended if it is not
 * itself featured), capped at `max`.
 */
export function getTimelineProducts(
  currentProductId: string,
  max = 6,
): EcosystemProduct[] {
  const featured = ECOSYSTEM_PRODUCTS.filter(
    (p) => p.featured && !isMobileApp(p),
  ).sort(byTimelineOrder);

  const current = getProductById(currentProductId);
  const list = [...featured];
  if (current && !list.some((p) => p.id === current.id)) {
    list.push(current);
  }
  return list.slice(0, max);
}

export type DirectorySection = {
  id: string;
  title: string;
  products: EcosystemProduct[];
};

type SectionRule = {
  id: string;
  title: string;
  match: (p: EcosystemProduct) => boolean;
};

// Evaluated top-to-bottom; each product lands in the FIRST matching section,
// so sections are mutually exclusive and the result is deterministic.
const SECTION_RULES: SectionRule[] = [
  {
    id: "featured",
    title: "Featured platforms",
    match: (p) => Boolean(p.featured) && !isMobileApp(p),
  },
  {
    id: "mobile",
    title: "Mobile applications",
    match: (p) => isMobileApp(p),
  },
  {
    id: "knowledge",
    title: "Knowledge platforms",
    match: (p) => p.category === "knowledge",
  },
  {
    id: "business-finance",
    title: "Business & finance",
    match: (p) => p.category === "business" || p.category === "finance",
  },
  {
    id: "career-productivity",
    title: "Career & productivity",
    match: (p) => p.category === "career" || p.category === "productivity",
  },
  {
    id: "communications-creator",
    title: "Communication & creator tools",
    match: (p) =>
      p.category === "communications" || p.category === "creator",
  },
  // Catch-all so placement is total by construction: any product not matched
  // above (e.g. a future non-mobile "utility" product) still lands somewhere
  // instead of being silently dropped. Empty sections are filtered out below,
  // so this never renders while every current product matches an earlier rule.
  {
    id: "more",
    title: "More platforms",
    match: () => true,
  },
];

/**
 * Groups the full registry into the directory sections rendered in the
 * "Explore all products" panel. Empty sections are omitted.
 */
export function getDirectorySections(): DirectorySection[] {
  const sections: DirectorySection[] = SECTION_RULES.map((r) => ({
    id: r.id,
    title: r.title,
    products: [] as EcosystemProduct[],
  }));

  for (const product of ECOSYSTEM_PRODUCTS) {
    // The trailing catch-all rule matches everything, so idx is never -1;
    // the guard is belt-and-braces.
    const idx = SECTION_RULES.findIndex((r) => r.match(product));
    if (idx >= 0) sections[idx].products.push(product);
  }

  for (const s of sections) s.products.sort(byTimelineOrder);
  return sections.filter((s) => s.products.length > 0);
}

export function totalProductCount(): number {
  return ECOSYSTEM_PRODUCTS.length;
}

// ── Validation (used by tests and can be run as a build-time guard) ─────────

export type RegistryIssue = { productId: string; issue: string };

const HTTPS_URL = /^https:\/\/[^\s#]+$/;

/**
 * Pure validation of the registry. Returns a list of issues (empty = valid).
 * Never throws, so it is safe to call anywhere.
 */
export function validateEcosystemRegistry(
  products: readonly EcosystemProduct[] = ECOSYSTEM_PRODUCTS,
): RegistryIssue[] {
  const issues: RegistryIssue[] = [];
  const seenIds = new Set<string>();
  const seenUrls = new Set<string>();
  const seenOrders = new Set<number>();

  for (const p of products) {
    if (seenIds.has(p.id)) {
      issues.push({ productId: p.id, issue: "duplicate product id" });
    }
    seenIds.add(p.id);

    if (!p.name.trim()) {
      issues.push({ productId: p.id, issue: "empty product name" });
    }
    if (!p.description.trim()) {
      issues.push({ productId: p.id, issue: "empty description" });
    }

    if (seenOrders.has(p.timelineOrder)) {
      issues.push({
        productId: p.id,
        issue: `duplicate timelineOrder ${p.timelineOrder}`,
      });
    }
    seenOrders.add(p.timelineOrder);

    for (const platform of p.platforms) {
      const url = platform.url.trim();
      if (!url || url === "#") {
        issues.push({
          productId: p.id,
          issue: `placeholder/empty url on ${platform.type}`,
        });
        continue;
      }
      if (!HTTPS_URL.test(url)) {
        issues.push({
          productId: p.id,
          issue: `non-HTTPS or malformed url on ${platform.type}: ${url}`,
        });
      }
      if (!platform.label.trim()) {
        issues.push({
          productId: p.id,
          issue: `missing label on ${platform.type}`,
        });
      }
      if (seenUrls.has(url)) {
        issues.push({ productId: p.id, issue: `duplicate url ${url}` });
      }
      seenUrls.add(url);
    }

    // A "live" product should have at least one real platform to link to.
    if (p.status === "live" && p.platforms.length === 0) {
      issues.push({
        productId: p.id,
        issue: "live product has no linkable platform",
      });
    }
  }

  return issues;
}
