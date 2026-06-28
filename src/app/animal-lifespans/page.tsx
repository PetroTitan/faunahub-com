import type { Metadata } from "next";
import Link from "next/link";
import LifespanLayout, { Section, FaqBlock, ContextBadge } from "@/components/lifespan/LifespanLayout";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import { LIFESPAN_EXAMPLES, CONTEXT_LABEL, type LifespanExample } from "@/lib/animal-lifespans";

const PATH = "/animal-lifespans";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Lifespans and Life Stages: How Long Animals Live and Grow";
const DESC =
  "How long animals live and why it varies — average vs maximum age, wild vs captive lifespan, life stages, life cycles, and metamorphosis. Educational, source-cautious, not a prediction.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const GUIDES = [
  { label: "How long animals live", href: "/animal-lifespans/how-long-animals-live" },
  { label: "Animal life stages", href: "/animal-lifespans/animal-life-stages" },
  { label: "Animal life cycles", href: "/animal-lifespans/animal-life-cycles" },
  { label: "Metamorphosis", href: "/animal-lifespans/metamorphosis" },
  { label: "Long-lived animals", href: "/animal-lifespans/longest-living-animals" },
  { label: "Short-lived animals", href: "/animal-lifespans/shortest-living-animals" },
  { label: "Pet lifespan expectations", href: "/animal-lifespans/pet-lifespans" },
  { label: "Wild vs captive lifespan", href: "/animal-lifespans/wild-vs-captive-lifespan" },
];

const GROUPS: { title: string; ids: string[]; guide: string }[] = [
  { title: "Notable long-lived animals", ids: ["galapagos-tortoise", "aldabra-giant-tortoise", "bowhead-whale", "greenland-shark", "ocean-quahog", "lobster", "koi", "tuatara"], guide: "/animal-lifespans/longest-living-animals" },
  { title: "Notable short-lived animals", ids: ["mayfly", "drone-bee"], guide: "/animal-lifespans/shortest-living-animals" },
  { title: "Life cycle & metamorphosis", ids: ["frog", "butterfly", "dragonfly", "axolotl"], guide: "/animal-lifespans/metamorphosis" },
  { title: "Pets — lifespan varies, not a prediction", ids: ["dog", "cat", "rabbit"], guide: "/animal-lifespans/pet-lifespans" },
];

const byId = new Map(LIFESPAN_EXAMPLES.map((e) => [e.id, e]));

function ExampleCard({ e }: { e: LifespanExample }) {
  const href = e.animalSlug ? `/animals/${e.animalSlug}` : e.relatedPath;
  return (
    <li>
      <Link href={href} className="card p-4 h-full flex flex-col gap-1.5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline">
        <span className="flex items-start justify-between gap-2">
          <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">{e.commonName}</span>
          <ContextBadge label={CONTEXT_LABEL[e.context]} />
        </span>
        <span className="text-sm text-[#2C3A2F] leading-snug">{e.cautiousText}</span>
        <span className="text-xs text-[#5E6B63] leading-snug"><span className="font-medium">Caveat:</span> {e.caveat}</span>
      </Link>
    </li>
  );
}

const HUB_FAQ = [
  {
    question: "Why do some animals live so much longer than others?",
    answer:
      "Lifespan reflects a mix of factors — species, body size, metabolism, predation pressure, disease, environment, sex, and genetics, plus the care context for animals living with people. As a broad pattern, larger and slower-living animals often live longer, but there are many exceptions, so lifespan is best understood as a range shaped by many influences rather than a single fixed number.",
  },
  {
    question: "Is the maximum recorded age the same as a species' normal lifespan?",
    answer:
      "No. A maximum recorded age comes from an exceptional individual and is not what a typical animal of that species lives. FaunaHub distinguishes typical lifespan, lifespan range, and maximum recorded age, and treats famous old individuals as exceptions rather than the norm.",
  },
  {
    question: "Are wild and captive lifespans interchangeable?",
    answer:
      "No. Animals in human care often live longer than wild ones because they are protected from predators, hunger, and untreated disease, but captive records can also be biased and are not a measure of wild lifespan. The two are reported separately and should not be mixed.",
  },
  {
    question: "Can FaunaHub predict how long my pet will live?",
    answer:
      "No. These pages are educational and do not predict any individual animal's lifespan or provide a plan to extend it. Lifespan depends on many factors unique to each animal; for health questions, a qualified veterinarian is the right source.",
  },
];

export default function AnimalLifespansHub() {
  const itemList = GUIDES.map((g, i) => ({
    name: g.label,
    url: `https://faunahub.com${g.href}`,
    position: i + 1,
  }));

  return (
    <LifespanLayout
      crumbs={[{ name: "Animal Lifespans", href: PATH }]}
      kicker="Lifespan & life-cycle biology"
      h1="Animal lifespans & life stages"
      modified={MODIFIED}
      intro={
        <p>
          How long do animals live, and why does it differ so much — from mayflies that fly for a day
          to tortoises and whales measured in centuries? These guides explain lifespan variation, life
          stages, life cycles, and metamorphosis in plain, source-cautious terms, while keeping figures
          broad and honest and pointing animal-specific health questions to a veterinarian.
        </p>
      }
      related={GUIDES}
      faq={HUB_FAQ}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(itemList)) }}
      />

      <Section id="why" title="Why animal lifespan varies">
        <p>
          There is no single answer to &ldquo;how long do animals live?&rdquo; Lifespan depends on
          species, body size, metabolism, predation, disease, environment, sex, and genetics, and for
          animals in human care it also depends on the care they receive. Because of this, FaunaHub
          describes lifespans as broad, source-backed ranges and examples rather than fixed numbers.{" "}
          <Link href="/animal-lifespans/how-long-animals-live">How long animals live</Link> goes deeper.
        </p>
      </Section>

      <Section id="average-vs-max" title="Average lifespan vs maximum recorded age">
        <p>
          A typical (average) lifespan, a lifespan range, and a maximum recorded age are three different
          things. The oldest individual ever recorded is an exception, not the norm, and figures are
          revised as records improve. Throughout this cluster, examples are labelled — typical, range,
          maximum recorded, or estimate — so they are not mistaken for one another.
        </p>
      </Section>

      <Section id="wild-captive" title="Wild vs captive vs domestic lifespan">
        <p>
          Wild, captive, and domestic lifespans are not interchangeable. Animals in human care are often
          longer-lived because they avoid predation and hunger and may receive veterinary care, but
          captive records can be biased and do not measure wild lifespan. See{" "}
          <Link href="/animal-lifespans/wild-vs-captive-lifespan">wild vs captive lifespan</Link>.
        </p>
      </Section>

      <Section id="stages" title="Life stages and life cycles">
        <p>
          Animals pass through life stages — beginning as eggs or live young, often a juvenile stage,
          then adulthood and, eventually, aging (senescence). Many also have distinct life cycles, and
          some insects and amphibians undergo metamorphosis, a developmental transformation that is part
          of the life cycle rather than a form of aging. Explore{" "}
          <Link href="/animal-lifespans/animal-life-stages">life stages</Link>,{" "}
          <Link href="/animal-lifespans/animal-life-cycles">life cycles</Link>, and{" "}
          <Link href="/animal-lifespans/metamorphosis">metamorphosis</Link>.
        </p>
      </Section>

      <Section id="examples" title="Lifespan examples across animal groups">
        <p>
          A small, representative set of well-documented examples — each labelled by context and paired
          with a caveat. These illustrate the range of animal lifespans; they are not a ranking or a
          complete list.
        </p>
        {GROUPS.map((g) => {
          const recs = g.ids.map((id) => byId.get(id)).filter((e): e is LifespanExample => !!e);
          if (!recs.length) return null;
          return (
            <div key={g.title} className="mb-6">
              <h3 className="text-base font-semibold text-[#063F2A] mb-3">{g.title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
                {recs.map((e) => (
                  <ExampleCard key={e.id} e={e} />
                ))}
              </ul>
              <p className="text-sm mt-3"><Link href={g.guide} className="font-medium">Read the related guide →</Link></p>
            </div>
          );
        })}
      </Section>

      <Section id="pets" title="Pets and lifespan expectations">
        <p>
          Pet lifespans vary widely by species and within a species, and many factors are involved. These
          pages are educational and do <strong>not</strong> predict any individual animal&apos;s lifespan
          or offer a plan to extend it. For an animal&apos;s health, consult a qualified veterinarian; our{" "}
          <Link href="/animal-research-sources/animal-care-and-veterinary-boundaries">care &amp; veterinary boundaries</Link>{" "}
          guide explains the line between education and advice, and{" "}
          <Link href="/animal-lifespans/pet-lifespans">pet lifespan expectations</Link> covers this in
          more depth.
        </p>
      </Section>

      <Section id="conservation" title="Conservation and lifespan">
        <p>
          Lifespan and life history matter for conservation: slow-growing, late-maturing, long-lived
          animals such as many tortoises, sharks, and large whales can be especially vulnerable, because
          populations recover slowly when too many adults are lost. See FaunaHub&apos;s{" "}
          <Link href="/endangered-animals">endangered animals</Link> and{" "}
          <Link href="/wildlife">wildlife</Link> coverage.
        </p>
      </Section>

      <Section id="sources" title="How FaunaHub checks lifespan claims">
        <p>
          Lifespan figures are easy to exaggerate, so FaunaHub keeps them broad, labelled, and
          source-cautious, distinguishing typical lifespan from maximum recorded age and wild from
          captive. The{" "}
          <Link href="/animal-research-sources">animal research sources</Link> cluster explains how we
          choose and read sources, and the{" "}
          <Link href="/animal-research-sources/how-faunahub-uses-sources">source workflow</Link> covers
          our checks.
        </p>
      </Section>

      <FaqBlock faq={HUB_FAQ} />
    </LifespanLayout>
  );
}
