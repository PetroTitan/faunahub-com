import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import { buildArticleMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  FROM_WATER_TO_LAND_INTRO,
  FROM_WATER_TO_LAND_SECTIONS,
  FROM_WATER_TO_LAND_FAQ,
  FROM_WATER_TO_LAND_SOURCES,
  FROM_WATER_TO_LAND_UPDATED,
} from "@/lib/fauna/evolution";

const PATH = "/fauna/evolution/from-water-to-land";

export const metadata: Metadata = buildArticleMetadata({
  title: "From Water to Land — How Land Animals Connect to Aquatic Ancestors",
  description:
    "A careful, source-backed overview of the evolutionary journey from aquatic life to land animals — early life in water, the rise of tetrapods, and why oceans still matter for land fauna.",
  path: PATH,
  publishedTime: "2026-06-16",
  modifiedTime: FROM_WATER_TO_LAND_UPDATED,
});

const linkClass =
  "underline decoration-dotted underline-offset-2 hover:text-[#063F2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BAA35] focus-visible:ring-offset-1 rounded-sm";

export default function FromWaterToLandPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Fauna", url: "https://faunahub.com/fauna" },
      { name: "From Water to Land", url: `https://faunahub.com${PATH}` },
    ]),
    articleSchema({
      title:
        "From Water to Land — How Land Animals Connect to Aquatic Ancestors",
      description:
        "A careful, source-backed overview of the evolutionary journey from aquatic life to land animals.",
      path: PATH,
      datePublished: "2026-06-16",
      dateModified: FROM_WATER_TO_LAND_UPDATED,
    }),
    faqSchema(FROM_WATER_TO_LAND_FAQ),
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
                { label: "Fauna", href: "/fauna" },
                { label: "From Water to Land" },
              ]}
            />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              Evolutionary context
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] max-w-3xl leading-tight">
              From water to land
            </h1>
            <p className="mt-4 text-base text-[#2C3A2F] max-w-2xl leading-relaxed">
              {FROM_WATER_TO_LAND_INTRO}
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-8">
              <section className="prose-content">
                {FROM_WATER_TO_LAND_SECTIONS.map((s) => (
                  <div key={s.heading}>
                    <h2>{s.heading}</h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ))}
              </section>

              <aside
                role="note"
                className="border border-[#DDE6DD] rounded-xl bg-[#EFF1EB] p-5 text-sm text-[#2C3A2F] leading-relaxed"
              >
                <p className="font-semibold text-[#17211B] mb-1">
                  How we frame this
                </p>
                <p>
                  This page reflects accepted scientific framing: life is
                  understood to have originated in water, and land animals
                  descend from aquatic ancestors over deep time. We deliberately
                  do not present the detailed origin-of-life mechanism as settled,
                  and we distinguish the origin of life from the later evolution
                  of land vertebrates.
                </p>
              </aside>

              <section aria-labelledby="sources-heading">
                <h2
                  id="sources-heading"
                  className="text-2xl font-bold text-[#17211B] mb-3"
                >
                  Sources
                </h2>
                <ul className="space-y-2 list-none">
                  {FROM_WATER_TO_LAND_SOURCES.map((s) => (
                    <li key={s.url} className="text-sm text-[#2C3A2F]">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {s.label}
                      </a>
                      {s.note && (
                        <span className="text-[#8A958E]"> — {s.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              <FAQBlock items={FROM_WATER_TO_LAND_FAQ} />

              <LastUpdated date={FROM_WATER_TO_LAND_UPDATED} />
            </article>

            <aside className="space-y-6">
              <RelatedLinks
                title="Related fauna pages"
                links={[
                  { label: "Fauna hub", href: "/fauna" },
                  { label: "Land fauna by continent", href: "/fauna/continents" },
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
                  { label: "Wildlife & Biodiversity", href: "/wildlife" },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
