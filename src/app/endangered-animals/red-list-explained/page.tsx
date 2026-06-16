import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import CategoryBadge from "@/components/red-list/CategoryBadge";
import MethodologyNote from "@/components/red-list/MethodologyNote";
import { buildArticleMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  RED_LIST_CATEGORY_ORDER,
  getCategoryMeta,
} from "@/lib/red-list/categories";
import {
  IUCN_ATTRIBUTION_NOTE,
  RED_LIST_LAST_REVIEW,
} from "@/lib/red-list/methodology";

const PATH = "/endangered-animals/red-list-explained";

export const metadata: Metadata = buildArticleMetadata({
  title: "The IUCN Red List Categories Explained — CR, EN, VU, NT, LC and More",
  description:
    "A plain-language guide to the IUCN Red List categories: Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern, Data Deficient, Extinct in the Wild, and Extinct.",
  path: PATH,
  publishedTime: "2026-06-16",
  modifiedTime: RED_LIST_LAST_REVIEW,
});

const FAQ = [
  {
    question: "What is the difference between Endangered and Vulnerable?",
    answer:
      "They are adjacent threat levels. Vulnerable (VU) means a high risk of extinction in the wild; Endangered (EN) means a very high risk; and Critically Endangered (CR) means an extremely high risk. The IUCN assigns them using quantitative criteria such as population size, decline rate, and range.",
  },
  {
    question: "Does 'Least Concern' mean a species is safe forever?",
    answer:
      "No. Least Concern (LC) means a species is not currently assessed as threatened, but status can change. Widespread species can decline, so the category is a current snapshot, not a permanent guarantee.",
  },
  {
    question: "What does 'Data Deficient' mean?",
    answer:
      "Data Deficient (DD) means there is not enough information to assess a species' extinction risk yet. It is not a statement that the species is safe — it is a call for more research.",
  },
  {
    question: "Is 'Extinct in the Wild' the same as 'Extinct'?",
    answer:
      "No. Extinct in the Wild (EW) means a species survives only in captivity, cultivation, or as an introduced population outside its natural range. Extinct (EX) means no reasonable doubt remains that the last individual has died.",
  },
];

export default function RedListExplainedPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
      { name: "Red List Explained", url: `https://faunahub.com${PATH}` },
    ]),
    articleSchema({
      title:
        "The IUCN Red List Categories Explained — CR, EN, VU, NT, LC and More",
      description:
        "A plain-language guide to the IUCN Red List categories of extinction risk.",
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
                { label: "Red List Explained" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              The IUCN Red List categories explained
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              The IUCN Red List sorts species into nine categories of extinction
              risk. Here is what each one means, in plain language, with the
              same badges FaunaHub uses across the site.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section
                aria-labelledby="categories-heading"
                className="space-y-4"
              >
                <h2
                  id="categories-heading"
                  className="text-2xl font-bold text-[#17211B]"
                >
                  The nine categories, from highest risk to lowest
                </h2>
                <ul className="space-y-3 list-none">
                  {RED_LIST_CATEGORY_ORDER.map((code) => {
                    const meta = getCategoryMeta(code);
                    return (
                      <li
                        key={code}
                        className="card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-3"
                      >
                        <div className="flex items-center gap-2 sm:w-44 flex-shrink-0">
                          <CategoryBadge code={code} />
                          <span className="text-sm font-semibold text-[#17211B]">
                            {meta.label}
                          </span>
                        </div>
                        <p className="text-sm text-[#2C3A2F] leading-relaxed">
                          {meta.shortDescription}
                          {meta.threatened && (
                            <span className="text-[#5E6B63]">
                              {" "}
                              FaunaHub counts this as a threatened category.
                            </span>
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section className="prose-content">
                <h2>How a species lands in a category</h2>
                <p>
                  The IUCN applies five quantitative criteria covering
                  population reduction, geographic range, small or declining
                  population size, very small populations, and quantitative
                  extinction-risk analysis. A species only needs to meet the
                  thresholds for one criterion to qualify for a threatened
                  category. Because the criteria are explicit and published,
                  assessments can be reviewed and repeated over time.
                </p>
                <h2>Why categories are not labels for life</h2>
                <p>
                  A category reflects a species&apos; situation at the time of
                  assessment. As threats change and conservation works — or
                  fails — species move between categories. The giant panda, for
                  example, was reclassified from Endangered to Vulnerable in
                  2016 after decades of habitat protection. Always treat a
                  category as a snapshot and confirm the current status on the
                  official IUCN Red List.
                </p>
              </section>

              <MethodologyNote lastVerified={RED_LIST_LAST_REVIEW} />

              <FAQBlock items={FAQ} />

              <p className="text-sm text-[#5E6B63]">{IUCN_ATTRIBUTION_NOTE}</p>

              <LastUpdated date={RED_LIST_LAST_REVIEW} />
            </div>

            <aside className="space-y-6">
              <RelatedLinks
                title="Keep reading"
                links={[
                  {
                    label: "How conservation status works",
                    href: "/endangered-animals/how-conservation-status-works",
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
                title="Browse threatened species"
                links={[
                  {
                    label: "Critically Endangered",
                    href: "/endangered-animals/critically-endangered",
                  },
                  {
                    label: "Endangered",
                    href: "/endangered-animals/endangered",
                  },
                  {
                    label: "Vulnerable",
                    href: "/endangered-animals/vulnerable",
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
