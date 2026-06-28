import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import DomesticationBadge from "@/components/animals/DomesticationBadge";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  domesticByRole,
  COMPANION_CARE_CLUSTERS,
  DOMESTIC_ANIMALS,
  type AnimalClassification,
} from "@/lib/animals/classification";
import { SRC_ADW, SRC_BRITANNICA_ANIMALS } from "@/lib/educational/animal-sources";

const PATH = "/domestic-animals";
const LAST_REVIEW = "2026-06-19";

export const metadata: Metadata = buildMetadata({
  title: "Domestic & Companion Animals — Pets, Livestock & Working Animals",
  description:
    "How FaunaHub separates domestic and companion animals from wild fauna — companion pets, farm livestock, and working animals — with links to dedicated care and feeding guides.",
  path: PATH,
});

const companions = domesticByRole("companion");
const livestock = domesticByRole("livestock");
const working = domesticByRole("working");

const FAQ = [
  {
    question: "How does FaunaHub separate domestic animals from wild animals?",
    answer:
      "Every animal profile is classified as either wild or domestic. Domestic animals — companion pets, farm livestock, and working animals — are grouped here and clearly badged, while the rest of the site covers wild fauna. Some species, such as rabbits, are kept as companions but also live wild; we note that distinction rather than blurring it.",
  },
  {
    question: "Where do care and feeding guides live?",
    answer:
      "Practical care lives in dedicated clusters: dogs, cats, small pets, aquarium and fish care, and bird care, plus a cross-species pet nutrition hub. Those are the right places for feeding and nutrition guidance. Wild-animal profiles are educational and do not include pet-keeping or feeding advice.",
  },
  {
    question: "Are wild animals ever recommended as pets here?",
    answer:
      "No. FaunaHub does not present wild animals as pets or encourage keeping or trading them. The separation on this page exists precisely so that companion-animal care is never confused with wildlife information.",
  },
  {
    question: "Why distinguish livestock from companion pets?",
    answer:
      "They have very different needs, contexts, and audiences. Livestock such as cattle, goats, sheep, and pigs are farm animals raised in agriculture, while companion animals are kept as pets. Keeping them clearly separated keeps the information honest and useful.",
  },
];

function AnimalChip({ c }: { c: AnimalClassification }) {
  return (
    <Link
      href={`/animals/${c.slug}`}
      className="card p-4 flex flex-col gap-2 h-full hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-base font-semibold text-[#17211B] capitalize group-hover:text-[#063F2A]">
          {c.slug.replace(/-/g, " ")}
        </span>
        <DomesticationBadge classification={c} />
      </div>
      {c.note && <p className="text-xs text-[#5E6B63] leading-snug">{c.note}</p>}
      {c.careHubUrl && (
        <span className="text-[11px] text-[#063F2A] mt-auto pt-1">
          Care: {c.careHubLabel} →
        </span>
      )}
    </Link>
  );
}

export default function DomesticAnimalsPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Domestic & Companion Animals", url: `https://faunahub.com${PATH}` },
    ]),
    itemListSchema(
      DOMESTIC_ANIMALS.map((c, i) => ({
        name: c.slug.replace(/-/g, " "),
        url: `https://faunahub.com/animals/${c.slug}`,
        position: i + 1,
      })),
    ),
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
          <div className="container-content pt-4 pb-12">
            <Breadcrumbs items={[{ label: "Domestic & Companion Animals" }]} />
            <p className="text-xs uppercase tracking-wider text-[#7BAA35] font-semibold mb-3">
              Domestic vs wild
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] max-w-3xl leading-tight">
              Domestic &amp; companion animals
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#2C3A2F] max-w-2xl leading-relaxed">
              FaunaHub keeps domestic animals clearly separate from wild fauna.
              This hub gathers companion pets, farm livestock, and working
              animals, and points to the dedicated guides where their care and
              feeding are covered. Wild animals live in the{" "}
              <Link href="/wildlife" className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]">
                wildlife
              </Link>{" "}
              and{" "}
              <Link href="/animal-encyclopedia" className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]">
                encyclopedia
              </Link>{" "}
              sections.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          {/* Companion animals */}
          <section aria-labelledby="companion-heading">
            <h2 id="companion-heading" className="text-2xl font-bold text-[#17211B] mb-2">
              Companion animals
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              Animals commonly kept as pets. Dogs and cats have their own full
              care clusters; other companions are profiled individually and link
              to the right care guide.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {companions.map((c) => (
                <li key={c.slug}>
                  <AnimalChip c={c} />
                </li>
              ))}
            </ul>
          </section>

          {/* Care & feeding clusters (future pet-food / nutrition home) */}
          <section aria-labelledby="care-heading">
            <div className="card p-6 sm:p-8 border-l-4 border-l-[#7BAA35]">
              <h2 id="care-heading" className="text-2xl font-bold text-[#17211B] mb-2">
                Care &amp; feeding guides
              </h2>
              <p className="text-base text-[#2C3A2F] leading-relaxed max-w-3xl mb-5">
                Practical care — including feeding and nutrition — lives in these
                dedicated clusters. This is where companion-animal guidance
                belongs, kept separate from wild-animal information.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {COMPANION_CARE_CLUSTERS.map((cl) => (
                  <li key={cl.href}>
                    <Link
                      href={cl.href}
                      className="card p-4 flex flex-col gap-1 h-full hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                    >
                      <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A]">
                        {cl.label}
                      </span>
                      <span className="text-xs text-[#5E6B63] leading-snug">{cl.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Livestock */}
          <section aria-labelledby="livestock-heading">
            <h2 id="livestock-heading" className="text-2xl font-bold text-[#17211B] mb-2">
              Farm &amp; livestock animals
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              Domesticated animals raised in agriculture for food, fibre, or
              work. These are farm animals, not companion pets, and are treated
              as a distinct group.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {livestock.map((c) => (
                <li key={c.slug}>
                  <AnimalChip c={c} />
                </li>
              ))}
            </ul>
          </section>

          {/* Working / other domestic */}
          <section aria-labelledby="working-heading">
            <h2 id="working-heading" className="text-2xl font-bold text-[#17211B] mb-2">
              Working &amp; other domestic animals
            </h2>
            <p className="text-sm text-[#5E6B63] mb-5 max-w-2xl">
              Domesticated animals kept primarily for riding, transport, or work.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {working.map((c) => (
                <li key={c.slug}>
                  <AnimalChip c={c} />
                </li>
              ))}
            </ul>
          </section>

          {/* How this differs from wild animals */}
          <section className="prose-content max-w-3xl">
            <h2>How this differs from wild animals</h2>
            <p>
              Most animals on FaunaHub are <strong>wild</strong> and are covered
              as educational profiles, with no pet-keeping or feeding advice. The
              animals on this page are <strong>domestic</strong> — bred and kept
              by people — which is why they have, or link to, dedicated care
              content. FaunaHub does not present wild animals as pets or encourage
              keeping or trading them.
            </p>
            <p>
              To explore wild fauna instead, see the{" "}
              <Link href="/animal-encyclopedia">animal encyclopedia</Link>,{" "}
              <Link href="/wildlife">wildlife</Link>, and the{" "}
              <Link href="/animal-taxonomy">animal taxonomy</Link> overview.
            </p>
          </section>

          {/* Sources & FAQ */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section aria-labelledby="src-heading">
                <h2 id="src-heading" className="text-2xl font-bold text-[#17211B] mb-3">
                  Sources
                </h2>
                <ul className="space-y-2 list-none">
                  {[SRC_ADW, SRC_BRITANNICA_ANIMALS].map((s) => (
                    <li key={s.url} className="text-sm text-[#2C3A2F]">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
                      >
                        {s.label}
                      </a>
                      {s.note && <span className="text-[#8A958E]"> — {s.note}</span>}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#8A958E] mt-3">
                  Domestication status reflects how each species is kept and used;
                  some domestic animals also have wild relatives or wild
                  populations, which is noted per animal.
                </p>
              </section>
              <FAQBlock items={FAQ} />
            </div>
            <aside className="space-y-6">
              <RelatedLinks
                title="Care clusters"
                links={COMPANION_CARE_CLUSTERS.map((c) => ({ label: c.label, href: c.href }))}
              />
              <RelatedLinks
                title="Wild fauna"
                links={[
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
                  { label: "Wildlife & Biodiversity", href: "/wildlife" },
                  { label: "Animal Taxonomy", href: "/animal-taxonomy" },
                  { label: "Fauna by Continent", href: "/fauna" },
                ]}
              />
              <RelatedLinks
                title="History & sources"
                links={[
                  { label: "Animal Domestication", href: "/animal-domestication" },
                  { label: "Animal Research Sources", href: "/animal-research-sources" },
                ]}
              />
            </aside>
          </div>

          <LastUpdated date={LAST_REVIEW} />
        </div>
      </main>
    </>
  );
}
