import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import BirdDisclaimer from "@/components/birds/BirdDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { BIRDWATCHING_ARTICLES, BIRDWATCHING_HUB_SOURCES } from "@/lib/birdwatching/data";
import { BIRD_SOURCE_NOTE } from "@/lib/birds/guide-types";

const SITE = "https://faunahub.com";
const LAST_UPDATED = "2026-06-12";

export const metadata: Metadata = buildMetadata({
  title: "Birdwatching — Responsible, Ethical Bird Observation",
  description:
    "Watch birds responsibly: ethical observation, backyard identification, feeding and local responsibility, nesting-season cautions, and what to do (and not do) with injured wild birds.",
  path: "/birdwatching",
});

const bySlug = Object.fromEntries(BIRDWATCHING_ARTICLES.map((a) => [a.slug, a]));

interface CardLink {
  label: string;
  href: string;
  description: string;
}

function articleCard(slug: string): CardLink {
  const a = bySlug[slug];
  return { label: a.pageHeading, href: a.path, description: a.description };
}

const ARTICLE_CARDS: CardLink[] = [
  articleCard("how-to-watch-birds-ethically"),
  articleCard("backyard-bird-identification"),
  articleCard("bird-feeding-basics"),
  articleCard("bird-nesting-season-basics"),
  articleCard("what-to-do-if-you-find-an-injured-bird"),
  articleCard("bird-photography-ethics"),
];

const BIRD_PROFILES: CardLink[] = [
  { label: "Robin", href: "/animals/robin", description: "A familiar garden songbird." },
  { label: "Sparrow", href: "/animals/sparrow", description: "Common, social seed-eaters." },
  { label: "Crow", href: "/animals/crow", description: "Intelligent corvids." },
  { label: "Raven", href: "/animals/raven", description: "The large corvid relative." },
  { label: "Hummingbird", href: "/animals/hummingbird", description: "Tiny hovering nectar feeders." },
  { label: "Woodpecker", href: "/animals/woodpecker", description: "Tree-climbing drummers." },
];

const WILDLIFE_LINKS: CardLink[] = [
  { label: "Bird encyclopedia", href: "/animal-encyclopedia/birds", description: "All bird profiles." },
  { label: "Wildlife hub", href: "/wildlife", description: "Source-reviewed wildlife context." },
  { label: "Bird care basics", href: "/bird-care", description: "Cautious pet-bird care planning." },
  { label: "Pet safety & emergencies", href: "/pet-safety", description: "Household safety and escalation." },
  { label: "Vet care hub", href: "/vet-care", description: "Routine and emergency vet planning." },
  { label: "Observation checklist tool", href: "/tools/backyard-bird-observation-checklist", description: "Plan an ethical backyard watch." },
];

const HUB_FAQS = [
  {
    question: "What is responsible birdwatching?",
    answer:
      "Responsible birdwatching puts the birds first: keeping a respectful distance, staying quiet, never disturbing nests, eggs, chicks, or roosts, avoiding baiting and overusing playback, respecting property, and following local wildlife rules. If a bird changes its behaviour because of you, you are too close.",
  },
  {
    question: "Should I feed wild birds?",
    answer:
      "It depends on where you live, the species, and local guidance — there is no universal rule. If feeding is appropriate where you are, hygiene matters most, because dirty feeders and crowding can spread disease. Check trusted local bird organisations and wildlife authorities.",
  },
  {
    question: "What should I do if I find an injured or baby bird?",
    answer:
      "Keep your distance, keep pets and children away, and contact a licensed wildlife rehabilitator or local wildlife authority. Do not feed, water, treat, or raise a wild bird yourself. Many young birds on the ground are not abandoned, so check with an expert before intervening.",
  },
  {
    question: "Is this veterinary or wildlife-handling advice?",
    answer:
      "No. These pages are educational. They do not diagnose or treat birds and do not instruct you to handle wild birds. For injured or sick wild birds, contact a licensed rehabilitator or authority; for a pet bird in distress, contact an avian veterinarian.",
  },
];

export default function BirdwatchingHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Birdwatching", url: `${SITE}/birdwatching` },
  ]);
  const itemList = itemListSchema(
    BIRDWATCHING_ARTICLES.map((a, i) => ({
      name: a.pageHeading,
      url: `${SITE}${a.path}`,
      position: i + 1,
    }))
  );
  const faqLd = faqSchema(HUB_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList, faqLd]) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <Breadcrumbs items={[{ label: "Birdwatching" }]} />
            <p className="mb-3">
              <span className="tag">Birdwatching</span>{" "}
              <span className="tag ml-1">Ethical observation</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Birdwatching — Responsible, Ethical Bird Observation
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Enjoy wild birds the right way — watching from a respectful
              distance, never disturbing nests or roosts, and following local
              wildlife rules. These pages are educational; they do not instruct
              you to handle wild birds. For an injured or sick wild bird, contact
              a licensed wildlife rehabilitator or local authority.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          <BirdDisclaimer />

          <section aria-labelledby="basics-heading">
            <h2 id="basics-heading" className="section-title">
              Responsible Birdwatching Basics
            </h2>
            <p className="section-subtitle max-w-3xl">
              A few principles protect the birds you enjoy. When in doubt, give
              them more space.
            </p>
            <ul className="not-prose space-y-2 rounded-xl border border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A] p-4 sm:p-5 text-sm sm:text-base text-[#2C3A2F]">
              {[
                "Keep your distance and use binoculars or a scope instead of approaching.",
                "Never disturb nests, eggs, chicks, or roosts — many are protected by law.",
                "Avoid baiting, and limit or avoid call playback, especially near rare or breeding birds.",
                "If feeding birds, follow local guidance and keep feeders scrupulously clean.",
                "If a bird reacts to you, step back — and never handle injured or sick wild birds yourself.",
              ].map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden="true" className="flex-shrink-0 mt-0.5 text-[#063F2A]">→</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="guides-heading">
            <h2 id="guides-heading" className="section-title">
              Birdwatching Guides
            </h2>
            <p className="section-subtitle max-w-3xl">
              Practical, ethical guidance for identifying, feeding, and observing
              birds — and for the nesting season and injured birds.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ARTICLE_CARDS.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                  >
                    <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">{c.label}</p>
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">{c.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="profiles-heading">
            <h2 id="profiles-heading" className="section-title">
              Related Bird Profiles
            </h2>
            <p className="section-subtitle max-w-3xl">
              Educational profiles of birds you may see, with licensed photos and
              cautious, source-reviewed wording.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BIRD_PROFILES.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-4 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-base font-semibold text-[#17211B] leading-snug">{c.label} →</p>
                  <p className="text-xs text-[#5E6B63] mt-1 leading-relaxed">{c.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="wildlife-heading">
            <h2 id="wildlife-heading" className="section-title">
              Related Wildlife Resources
            </h2>
            <p className="section-subtitle max-w-3xl">
              Explore the wider encyclopedia, wildlife context, and cautious bird
              care planning.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WILDLIFE_LINKS.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-base font-semibold text-[#17211B]">{c.label} →</p>
                  <p className="text-sm text-[#5E6B63] mt-1 leading-relaxed">{c.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="sources-heading">
            <SourcesSection sources={BIRDWATCHING_HUB_SOURCES} intro={BIRD_SOURCE_NOTE} headingId="sources-heading" />
          </section>

          <FAQBlock items={HUB_FAQS} title="Birdwatching — Frequently Asked Questions" />

          <LastUpdated date={LAST_UPDATED} />
        </div>
      </main>
    </>
  );
}
