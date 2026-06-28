import type { Metadata } from "next";
import Link from "next/link";
import AnimalHeroImage from "@/components/AnimalHeroImage";
import RelatedLinks from "@/components/RelatedLinks";
import { getAnimalImage, getAnimalImageAbsoluteUrl } from "@/lib/images/animal-images";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  FLOWER_VISITOR_CAVEATS,
  POLLINATOR_GROUPS,
  POLLINATOR_RECORDS,
  POLLINATOR_SOURCES,
  getPollinatorsByGroup,
  type PollinatorConfidence,
} from "@/lib/ecology/pollinators";

const PATH = "/wildlife/pollinators";
const TITLE = "Pollinators: Bees, Butterflies, Birds, Bats, Flies, and Beetles";
const DESC =
  "Pollination is an ecological interaction, not a single animal group. Meet representative pollinators — bees, butterflies, moths, flies, beetles, wasps, birds, and bats — with source-backed, cautious notes.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  ogImage: getAnimalImageAbsoluteUrl("bumblebee") ?? undefined,
});

const CONFIDENCE_LABEL: Record<PollinatorConfidence, string> = {
  verified: "Well-established",
  "broad-group": "Group-level",
  representative: "Representative",
  "source-review-pending": "Under review",
};
const CONFIDENCE_CLASS: Record<PollinatorConfidence, string> = {
  verified: "bg-[#E6F0D6] text-[#2F4711] border-[#CFE0A8]",
  "broad-group": "bg-[#E2EEF3] text-[#16414F] border-[#BFD9E4]",
  representative: "bg-[#F6ECD6] text-[#5A4413] border-[#E6D2A6]",
  "source-review-pending": "bg-[#EEE] text-[#444] border-[#DDD]",
};

const HUB_FAQ = [
  {
    question: "Are all pollinators bees?",
    answer:
      "No. Bees are among the most important pollinators as a group, but they are not the only ones. Butterflies, moths, flies (such as hoverflies), beetles, and some wasps pollinate plants, and so do many birds, some bats, and a range of other animals. Pollination is an ecological interaction between an animal and a flower, not a single taxonomic group.",
  },
  {
    question: "Is every animal that visits a flower a pollinator?",
    answer:
      "No. Visiting a flower is not the same as pollinating it. An animal is only an effective pollinator when it reliably moves pollen between flowers in a way that leads to fertilisation. Some frequent flower visitors — including many ants, and some butterflies and moths that feed elsewhere or not at all — transfer little pollen and are minor or ineffective pollinators.",
  },
  {
    question: "Are pollinators declining?",
    answer:
      "Some pollinator species and populations have declined and are a genuine conservation concern, with pressures that published assessments often link to habitat loss, certain chemical exposures, climate change, disease, and non-native species. But trends differ by species and region, and broad claims that 'all pollinators are declining' are not accurate. For any particular species, check authoritative sources such as the IUCN Red List or the Xerces Society.",
  },
  {
    question: "What is buzz pollination?",
    answer:
      "Buzz pollination, or sonication, is a behaviour used by bumblebees and various other bees in which the insect grips a flower and rapidly vibrates its flight muscles to shake loose pollen that is held tightly inside tube-like anthers. Plants such as tomatoes, eggplants, and blueberries release pollen especially well to this kind of vibration.",
  },
  {
    question: "Do wasps and flies really pollinate?",
    answer:
      "Yes, some do. Most wasps are only minor pollinators, but fig wasps and pollen wasps are highly specialised flower pollinators. Among flies, hoverflies (family Syrphidae) are widespread and frequently underrated pollinators — they often mimic bees or wasps in colour but cannot sting.",
  },
];

const GROUP_CLUSTERS: { title: string; groups: typeof POLLINATOR_GROUPS[number]["key"][] }[] = [
  { title: "Bees", groups: ["bee"] },
  { title: "Butterflies and moths", groups: ["butterfly", "moth"] },
  { title: "Flies and beetles", groups: ["fly", "beetle"] },
  { title: "Wasps and specialist pollinators", groups: ["wasp"] },
  { title: "Birds and bats", groups: ["bird", "bat"] },
];

export default function PollinatorsHubPage() {
  const heroImage = getAnimalImage("bumblebee");
  const itemList = POLLINATOR_RECORDS.map((r, i) => ({
    name: r.commonName,
    url: `https://faunahub.com/animals/${r.animalSlug}`,
    position: i + 1,
  }));
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Wildlife", url: "https://faunahub.com/wildlife" },
      { name: "Pollinators", url: `https://faunahub.com${PATH}` },
    ]),
    itemListSchema(itemList),
    faqSchema(HUB_FAQ),
  ];

  const groupMeta = (key: string) =>
    POLLINATOR_GROUPS.find((g) => g.key === key)!;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main id="main-content">
        {/* Hero */}
        <header className="bg-gradient-to-b from-[#EFF4E0] via-[#f7faf7] to-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex flex-wrap gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/wildlife" className="hover:text-[#063F2A] hover:no-underline">Wildlife</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Pollinators</span>
            </nav>
            <div className="max-w-3xl">
              <span className="tag mb-4 inline-block">Pollinator Ecology Guide</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17211B] mb-4 leading-tight">
                Pollinators: bees, butterflies, birds, bats, flies, and beetles
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Pollination is an <strong>ecological interaction</strong> between animals and
                flowers — not a single group of species. This guide introduces a representative,
                source-backed selection of pollinators across many animal groups, with careful,
                cautious notes on what each one actually does.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-12">
          {/* Scope / about */}
          <aside
            role="note"
            aria-label="About this guide"
            className="card p-5 sm:p-6 mb-12 border-l-4 border-l-[#7BAA35]"
          >
            <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2">
              About this guide
            </h2>
            <ul className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed space-y-1.5 list-disc list-outside pl-5">
              <li>Bees are important pollinators, but they are not the only ones — and not all bees are honey bees.</li>
              <li>Not every animal that visits a flower is an effective pollinator.</li>
              <li>Pollination roles vary by plant, region, season, and behaviour; this is representative coverage, not a complete global list.</li>
              <li>Conservation status and trends are real concerns but should be verified against current authoritative sources.</li>
              <li>This is an educational ecology guide. It contains no gardening, beekeeping, pest-control, or medical instructions.</li>
            </ul>
          </aside>

          {heroImage && (
            <div className="max-w-2xl mb-12">
              <AnimalHeroImage image={heroImage} />
            </div>
          )}

          {/* 1. What pollinators are */}
          <section aria-labelledby="what-heading" className="mb-14 max-w-3xl">
            <h2 id="what-heading" className="section-title">What pollinators are</h2>
            <div className="space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                A pollinator is an animal that moves pollen from one flower to another (or within a
                flower), helping flowering plants reproduce. The relationship is ecological: it
                depends on the animal&apos;s behaviour, body, and the plant it visits, rather than on
                the animal belonging to any one family. Because of that, pollinators are spread
                across many unrelated groups — insects such as bees, butterflies, moths, flies,
                beetles, and some wasps, as well as many birds, some bats, and other animals.
              </p>
              <p>
                Some pollination partnerships are generalist, with many kinds of animals visiting the
                same open flowers. Others are specialised, such as fig trees and their fig wasps, or
                long-tubed night flowers and the hawk moths that reach their nectar. Animal
                pollination is also different from wind pollination, which moves pollen through the
                air without an animal and is common in grasses and many trees.
              </p>
            </div>
          </section>

          {/* Group clusters (sections 2-6 + 11) */}
          <section aria-labelledby="groups-heading" className="mb-14">
            <div className="mb-6 max-w-3xl">
              <h2 id="groups-heading" className="section-title">Representative pollinators by group</h2>
              <p className="section-subtitle mb-0">
                A curated selection of pollinator animals with a FaunaHub profile. Each card notes a
                cautious pollination role, its scope, and how well-established that framing is.
              </p>
            </div>

            {GROUP_CLUSTERS.map((cluster) => (
              <div key={cluster.title} className="mb-10">
                <h3 className="text-xl font-semibold text-[#17211B] mb-4 pb-2 border-b border-[#DDE6DD]">
                  {cluster.title}
                </h3>
                {cluster.groups.map((gk) => {
                  const meta = groupMeta(gk);
                  const records = getPollinatorsByGroup(gk);
                  if (!records.length) return null;
                  return (
                    <div key={gk} className="mb-6">
                      {cluster.groups.length > 1 && (
                        <h4 className="text-base font-semibold text-[#063F2A] mb-1">{meta.label}</h4>
                      )}
                      <p className="text-sm text-[#5E6B63] leading-relaxed mb-4 max-w-3xl">{meta.blurb}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
                        {records.map((r) => (
                          <li key={r.animalSlug}>
                            <Link
                              href={`/animals/${r.animalSlug}`}
                              className="card p-5 h-full flex flex-col gap-2 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <h5 className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                                  {r.commonName}
                                </h5>
                                <span
                                  className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full border ${CONFIDENCE_CLASS[r.confidence]}`}
                                >
                                  {CONFIDENCE_LABEL[r.confidence]}
                                </span>
                              </div>
                              <p className="text-sm text-[#2C3A2F] leading-snug">{r.pollinationRole}</p>
                              <p className="text-xs text-[#5E6B63] leading-snug">{r.scopeNote}</p>
                              {r.safetyNote && (
                                <p className="text-xs text-[#5E6B63] leading-snug">
                                  <span className="font-medium text-[#063F2A]">Safety:</span> {r.safetyNote}
                                </p>
                              )}
                              <span className="text-xs font-medium text-[#063F2A] mt-auto flex items-center gap-2">
                                Read profile
                                <span aria-hidden="true">→</span>
                                {r.isNewProfile && (
                                  <span className="text-[10px] uppercase tracking-wide text-[#7BAA35] font-semibold">New</span>
                                )}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ))}
          </section>

          {/* 7. Pollination vs flower visiting */}
          <section aria-labelledby="visiting-heading" className="mb-14 max-w-3xl">
            <h2 id="visiting-heading" className="section-title">Pollination vs flower visiting</h2>
            <div className="space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                Seeing an insect or bird on a flower does not, by itself, mean it is pollinating.
                Many animals visit flowers only to feed and move little pollen, or even take nectar
                without touching the flower&apos;s reproductive parts. Calling every flower visitor a
                pollinator overstates their role, so this guide distinguishes effective pollinators
                from incidental flower visitors. A few well-known examples make the point:
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {FLOWER_VISITOR_CAVEATS.map((c) => (
                  <li key={c.animalSlug} className="card p-4 border-l-4 border-l-[#C9D2C2]">
                    <Link href={`/animals/${c.animalSlug}`} className="font-semibold text-[#17211B] hover:text-[#063F2A]">
                      {c.commonName}
                    </Link>
                    <p className="text-sm text-[#5E6B63] leading-snug mt-1">{c.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Why pollinators matter */}
          <section aria-labelledby="matter-heading" className="mb-14 max-w-3xl">
            <h2 id="matter-heading" className="section-title">Why pollinators matter</h2>
            <div className="space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                Animal pollination supports the reproduction of a large share of the world&apos;s
                flowering plants, shaping wild plant communities and the animals that depend on their
                fruits and seeds. It also contributes to the production of many of the crops people
                grow, from fruits and nuts to oilseeds and some vegetables. The exact proportion of
                plants or crops involved varies between sources and regions, so specific figures and
                economic values should be taken from authoritative agricultural and scientific
                assessments rather than assumed.
              </p>
              <p>
                Because pollinators are so varied, healthy pollination usually depends on a community
                of different animals rather than any single species — one reason that the diversity
                of wild pollinators, not just managed honey bees, matters ecologically.
              </p>
            </div>
          </section>

          {/* 9. Conservation context */}
          <section aria-labelledby="conservation-heading" className="mb-14 max-w-3xl">
            <h2 id="conservation-heading" className="section-title">Conservation context</h2>
            <div className="space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                Some pollinators face documented pressures, which published assessments commonly
                associate with habitat loss and fragmentation, certain land-use and chemical
                exposures, climate change, disease, and the spread of non-native species. The picture
                differs by species and place: some pollinators remain common, while a number of
                others have declined and a few are formally assessed as threatened.
              </p>
              <p>
                For the status of any particular species, consult authoritative sources such as the{" "}
                <a href="https://www.iucnredlist.org/" target="_blank" rel="noopener noreferrer">IUCN Red List</a>{" "}
                or the{" "}
                <a href="https://www.xerces.org/" target="_blank" rel="noopener noreferrer">Xerces Society</a>.
                Concerns about local pollinator declines are best directed to qualified conservation
                organisations and relevant authorities.
              </p>
            </div>
          </section>

          {/* 10. Safety and human interaction */}
          <section aria-labelledby="safety-heading" className="mb-14 max-w-3xl">
            <h2 id="safety-heading" className="section-title">Safety and human interaction</h2>
            <div className="card p-5 sm:p-6 border-l-4 border-l-[#7BAA35] space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                Most pollinators are harmless to people and are focused on flowers, not humans. Some
                bees and wasps can sting in defence of themselves or their nests, but many of the
                animals in this guide — including male carpenter bees and the solitary mason and
                leafcutter bees — rarely or cannot sting, and hoverflies cannot sting at all despite
                their bee-like or wasp-like colours.
              </p>
              <p>
                FaunaHub does not provide sting, allergy, or other medical advice; instructions for
                removing nests or hives; or pest-control, pesticide, or beekeeping guidance. Anyone
                with a sting reaction or allergy concern should seek advice from a qualified medical
                professional, and questions about managing bees, wasps, or nests near a home should
                go to a qualified local professional or the relevant authority.
              </p>
            </div>
          </section>

          {/* 12. FAQ */}
          <section aria-labelledby="faq-heading" className="mb-14 max-w-3xl">
            <h2 id="faq-heading" className="section-title">Frequently asked questions</h2>
            <dl className="space-y-4">
              {HUB_FAQ.map((f) => (
                <div key={f.question} className="card p-5">
                  <dt className="font-semibold text-[#17211B] mb-1.5">{f.question}</dt>
                  <dd className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 13. Sources / methodology */}
          <section aria-labelledby="sources-heading" className="mb-14 max-w-3xl">
            <h2 id="sources-heading" className="section-title">Sources &amp; methodology</h2>
            <div className="space-y-4 text-[#2C3A2F] leading-relaxed">
              <p>
                This guide presents a representative, curated selection of pollinators that have a
                FaunaHub profile. Pollination roles are described cautiously and are not assigned
                invented scores or rankings; each profile links to authoritative references. The
                organisations below are general, reachable starting points for pollinator ecology and
                conservation.
              </p>
              <ul className="space-y-2 list-disc list-outside pl-5">
                {POLLINATOR_SOURCES.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium">
                      {s.label}
                    </a>
                    {s.note && <span className="text-sm text-[#5E6B63]"> — {s.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <RelatedLinks
            title="Explore more"
            links={[
              { label: "Wildlife & Biodiversity Hub", href: "/wildlife" },
              { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
              { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
              { label: "Birds", href: "/animal-encyclopedia/birds" },
              { label: "Mammals", href: "/animal-encyclopedia/mammals" },
              { label: "Animal Taxonomy", href: "/animal-taxonomy" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
