import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import MethodologyNote from "@/components/red-list/MethodologyNote";
import { buildArticleMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  GLOBAL_VS_LOCAL_EXPLAINER,
  LAST_VERIFIED_EXPLAINER,
  INDEX_VS_PROFILE_EXPLAINER,
  RED_LIST_LAST_REVIEW,
} from "@/lib/red-list/methodology";

const PATH = "/endangered-animals/how-conservation-status-works";

export const metadata: Metadata = buildArticleMetadata({
  title: "How Conservation Status Works — Why It Changes and What It Doesn't Tell You",
  description:
    "Conservation status is a snapshot, not a permanent label. Learn why IUCN categories change over time, how global status differs from national status, and how FaunaHub verifies and dates each record.",
  path: PATH,
  publishedTime: "2026-06-16",
  modifiedTime: RED_LIST_LAST_REVIEW,
});

const FAQ = [
  {
    question: "Why does a species' conservation status change?",
    answer:
      "Status changes as populations recover or decline, as new survey data arrives, and as assessment methods improve. The IUCN periodically reassesses species, so a category can move up or down over the years.",
  },
  {
    question: "Can a species be endangered in one country but not globally?",
    answer:
      "Yes. IUCN Red List categories describe global extinction risk. A species can be globally secure yet legally protected in a single country, or globally threatened while still locally common somewhere in its range. National red lists and endangered-species laws are maintained separately.",
  },
  {
    question: "What does FaunaHub's 'last verified' date mean?",
    answer:
      "It is the date we last reviewed a record against its listed sources. It is not the date of the underlying IUCN assessment. Because status can change between our reviews, the live IUCN Red List is always the current source of truth.",
  },
  {
    question: "Why don't all species here have their own page?",
    answer:
      "Many records are index-only: they appear in category lists with their status and sources but do not get a standalone page. We build a full profile only when there is enough verified material, and ideally a properly licensed photograph, to support one.",
  },
];

export default function HowConservationStatusWorksPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
      {
        name: "How Conservation Status Works",
        url: `https://faunahub.com${PATH}`,
      },
    ]),
    articleSchema({
      title:
        "How Conservation Status Works — Why It Changes and What It Doesn't Tell You",
      description:
        "Why IUCN categories change over time and how global status differs from national status.",
      path: PATH,
      datePublished: "2026-06-16",
      dateModified: RED_LIST_LAST_REVIEW,
    }),
    faqSchema(FAQ),
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
                { label: "How Conservation Status Works" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              How conservation status works
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              A conservation category is one of the most useful facts you can
              know about a species — and one of the most misunderstood. Here is
              what it does and does not tell you.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section className="prose-content">
                <h2>Status is a snapshot, not a permanent label</h2>
                <p>
                  Every IUCN assessment describes a species at a moment in time.
                  As habitats shrink or recover, as new field surveys are
                  completed, and as assessment methods improve, species are
                  reassessed and can move between categories. A &ldquo;Vulnerable&rdquo;
                  listing today is not a promise about next decade. That is why
                  FaunaHub never presents conservation status as fixed and
                  always links to the live source.
                </p>

                <h2>Global status versus national status</h2>
                <p>{GLOBAL_VS_LOCAL_EXPLAINER}</p>

                <h2>How source verification works here</h2>
                <p>
                  For each record, FaunaHub records the species&apos; common and
                  scientific name, its category, and links to authoritative
                  references. We confirm that each source link resolves during a
                  review pass, and we flag how much of the record has been
                  individually re-verified. We do not copy IUCN assessment text,
                  maps, or datasets; we summarise categories in original
                  language and point you to the original.
                </p>

                <h2>What &ldquo;last verified&rdquo; means</h2>
                <p>{LAST_VERIFIED_EXPLAINER}</p>

                <h2>How existing animal profiles are linked</h2>
                <p>
                  Where FaunaHub already publishes a detailed profile for a
                  species — for example our tiger, gorilla, or red panda pages —
                  the Red List record links to that existing page instead of
                  duplicating content. This keeps conservation context and
                  natural-history content connected without creating overlapping
                  pages.
                </p>

                <h2>Why not every record has a full page</h2>
                <p>{INDEX_VS_PROFILE_EXPLAINER}</p>

                <h2>Always verify with conservation authorities</h2>
                <p>
                  FaunaHub is an educational publisher, not a conservation
                  authority. For decisions that depend on current status — research,
                  policy, travel, or trade — confirm against the official IUCN
                  Red List and the relevant national wildlife agency. Our role is
                  to orient and to point you to the right source.
                </p>
              </section>

              <MethodologyNote lastVerified={RED_LIST_LAST_REVIEW} />

              <FAQBlock items={FAQ} />

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
                    label: "Red List data methodology",
                    href: "/endangered-animals/red-list-data-methodology",
                  },
                  {
                    label: "Endangered animals hub",
                    href: "/endangered-animals",
                  },
                ]}
              />
              <RelatedLinks
                title="Browse by group"
                links={[
                  { label: "Mammals", href: "/endangered-animals/mammals" },
                  { label: "Birds", href: "/endangered-animals/birds" },
                  {
                    label: "Reptiles & Amphibians",
                    href: "/endangered-animals/reptiles-amphibians",
                  },
                  { label: "Fish", href: "/endangered-animals/fish" },
                  {
                    label: "Invertebrates",
                    href: "/endangered-animals/invertebrates",
                  },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
