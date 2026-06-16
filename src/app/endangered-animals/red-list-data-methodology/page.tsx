import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import ConfidenceBadge from "@/components/red-list/ConfidenceBadge";
import { buildArticleMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  DATA_CONFIDENCE_NOTES,
  RED_LIST_METHODOLOGY_SUMMARY,
  IUCN_ATTRIBUTION_NOTE,
  RED_LIST_PRIMARY_SOURCES,
  METHODOLOGY_FAQ,
  RED_LIST_LAST_REVIEW,
} from "@/lib/red-list/methodology";
import { RED_LIST_SPECIES_COUNT } from "@/lib/red-list/species";
import type { RedListDataConfidence } from "@/lib/red-list/types";

const PATH = "/endangered-animals/red-list-data-methodology";

export const metadata: Metadata = buildArticleMetadata({
  title: "Red List Data Methodology — Sources, Verification and Limitations",
  description:
    "How FaunaHub sources, verifies, dates, and flags its endangered-species data — including confidence levels, IUCN compliance, image standards, and known limitations.",
  path: PATH,
  publishedTime: "2026-06-16",
  modifiedTime: RED_LIST_LAST_REVIEW,
});

const CONFIDENCE_ORDER: RedListDataConfidence[] = [
  "verified",
  "partial",
  "source-review-pending",
];

export default function RedListDataMethodologyPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
      { name: "Data Methodology", url: `https://faunahub.com${PATH}` },
    ]),
    articleSchema({
      title: "Red List Data Methodology — Sources, Verification and Limitations",
      description:
        "How FaunaHub sources, verifies, dates, and flags its endangered-species data.",
      path: PATH,
      datePublished: "2026-06-16",
      dateModified: RED_LIST_LAST_REVIEW,
    }),
    faqSchema(METHODOLOGY_FAQ),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD]">
          <div className="container-content pt-4 pb-10">
            <Breadcrumbs
              items={[
                { label: "Endangered Animals", href: "/endangered-animals" },
                { label: "Data Methodology" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Red List data methodology
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              How we build and maintain FaunaHub&apos;s endangered-species data —
              what we include, what we deliberately leave out, and how to read
              the confidence and freshness signals on every record.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section className="prose-content">
                <h2>What each record contains</h2>
                <p>{RED_LIST_METHODOLOGY_SUMMARY}</p>
                <p>
                  The Phase 1 dataset covers {RED_LIST_SPECIES_COUNT} species
                  across mammals, birds, reptiles and amphibians, fish, and
                  invertebrates, with a mix of Critically Endangered,
                  Endangered, and Vulnerable records.
                </p>
              </section>

              <section aria-labelledby="confidence-heading">
                <h2
                  id="confidence-heading"
                  className="text-2xl font-bold text-[#17211B] mb-4"
                >
                  Data confidence flags
                </h2>
                <ul className="space-y-3 list-none">
                  {CONFIDENCE_ORDER.map((c) => (
                    <li
                      key={c}
                      className="card p-4 flex flex-col sm:flex-row sm:items-start gap-3"
                    >
                      <div className="sm:w-44 flex-shrink-0">
                        <ConfidenceBadge confidence={c} />
                      </div>
                      <p className="text-sm text-[#2C3A2F] leading-relaxed">
                        {DATA_CONFIDENCE_NOTES[c]}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="prose-content">
                <h2>How we verify sources</h2>
                <p>
                  Every source link on a record was confirmed reachable during a
                  review pass, matching the standard used across the rest of
                  FaunaHub. We prioritise the IUCN Red List, Animal Diversity Web
                  (University of Michigan Museum of Zoology), NOAA Fisheries, the
                  U.S. Fish &amp; Wildlife Service, the National Park Service, and
                  museum and university references. We do not rely on listicles,
                  pet shops, tourism pages, or AI-generated fact pages.
                </p>

                <h2>IUCN compliance</h2>
                <p>{IUCN_ATTRIBUTION_NOTE}</p>
                <p>
                  We link to the official IUCN Red List for every species rather
                  than reproducing its proprietary assessment text, maps, or
                  detailed datasets. Where automated access is restricted, our
                  IUCN links are human-facing lookups — we never fabricate
                  assessment identifiers or invent a category.
                </p>

                <h2>Images and licensing</h2>
                <p>
                  Detailed species profiles use only photographs we can legally
                  reuse — Public Domain, CC0, CC BY, or CC BY-SA, including
                  U.S. federal public-domain photography. We never use
                  AI-generated images, watermarked images, social-media
                  screenshots, or images with unclear or non-commercial
                  licenses. Full attribution for every image is published on the{" "}
                  <Link href="/image-credits">image credits</Link> page.
                </p>

                <h2>Known limitations</h2>
                <ul>
                  <li>
                    This is a curated educational snapshot, not a complete or
                    live conservation database.
                  </li>
                  <li>
                    Some subspecies and sub-populations are assessed differently
                    from the species as a whole.
                  </li>
                  <li>
                    Categories can change between our review passes; the live
                    IUCN entry is always authoritative.
                  </li>
                  <li>
                    Index-only records intentionally do not have standalone
                    pages.
                  </li>
                </ul>
              </section>

              <section className="prose-content">
                <h2>Primary sources</h2>
                <ul>
                  {RED_LIST_PRIMARY_SOURCES.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>

              <FAQBlock items={METHODOLOGY_FAQ} />

              <LastUpdated date={RED_LIST_LAST_REVIEW} />
            </div>

            <aside className="space-y-6">
              <RelatedLinks
                title="Keep reading"
                links={[
                  {
                    label: "Red List categories explained",
                    href: "/endangered-animals/red-list-explained",
                  },
                  {
                    label: "How conservation status works",
                    href: "/endangered-animals/how-conservation-status-works",
                  },
                  {
                    label: "Endangered animals hub",
                    href: "/endangered-animals",
                  },
                ]}
              />
              <RelatedLinks
                title="Transparency"
                links={[
                  { label: "Image credits", href: "/image-credits" },
                  { label: "Editorial policy", href: "/editorial-policy" },
                  { label: "About FaunaHub", href: "/about" },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
