import type { Metadata } from "next";
import Link from "next/link";
import SensesLayout, { Section, FaqBlock, TypeBadge } from "@/components/senses/SensesLayout";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import { ADAPTATION_EXAMPLES, TYPE_LABEL, type AdaptationExample } from "@/lib/animal-adaptations";

const PATH = "/animal-senses-and-adaptations";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Senses and Adaptations: How Animals See, Hear, Navigate, Hide, and Survive";
const DESC =
  "How animals sense the world and survive — vision, smell, hearing, echolocation, camouflage, mimicry, bioluminescence, migration, and hibernation. Educational biology, source-cautious.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const GUIDES = [
  { label: "Animal senses", href: "/animal-senses-and-adaptations/animal-senses" },
  { label: "Animal vision", href: "/animal-senses-and-adaptations/animal-vision" },
  { label: "Smell & chemical senses", href: "/animal-senses-and-adaptations/smell-and-chemical-senses" },
  { label: "Hearing & echolocation", href: "/animal-senses-and-adaptations/hearing-and-echolocation" },
  { label: "Camouflage & mimicry", href: "/animal-senses-and-adaptations/camouflage-and-mimicry" },
  { label: "Bioluminescence", href: "/animal-senses-and-adaptations/bioluminescence" },
  { label: "Migration & navigation", href: "/animal-senses-and-adaptations/migration-and-navigation" },
  { label: "Hibernation & torpor", href: "/animal-senses-and-adaptations/hibernation-and-torpor" },
];

const GROUPS: { title: string; guide: string }[] = [
  { title: "Vision", guide: "/animal-senses-and-adaptations/animal-vision" },
  { title: "Smell & chemical senses", guide: "/animal-senses-and-adaptations/smell-and-chemical-senses" },
  { title: "Hearing & echolocation", guide: "/animal-senses-and-adaptations/hearing-and-echolocation" },
  { title: "Camouflage & mimicry", guide: "/animal-senses-and-adaptations/camouflage-and-mimicry" },
  { title: "Bioluminescence", guide: "/animal-senses-and-adaptations/bioluminescence" },
  { title: "Migration & navigation", guide: "/animal-senses-and-adaptations/migration-and-navigation" },
  { title: "Hibernation & torpor", guide: "/animal-senses-and-adaptations/hibernation-and-torpor" },
];

function AdaptationCard({ e }: { e: AdaptationExample }) {
  const href = e.animalSlug ? `/animals/${e.animalSlug}` : e.relatedGuidePath;
  return (
    <li>
      <Link href={href} className="card p-4 h-full flex flex-col gap-1.5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline">
        <span className="flex items-start justify-between gap-2">
          <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">{e.commonName}</span>
          <TypeBadge label={TYPE_LABEL[e.type]} />
        </span>
        <span className="text-sm text-[#2C3A2F] leading-snug">{e.summary}</span>
        <span className="text-xs text-[#5E6B63] leading-snug"><span className="font-medium">Caveat:</span> {e.caveat}</span>
      </Link>
    </li>
  );
}

const HUB_FAQ = [
  {
    question: "Do animals sense the world the same way humans do?",
    answer:
      "No. Many animals have senses tuned very differently from ours — some see ultraviolet light, follow scent in ways we cannot, hear far below or above our range, or detect electric or magnetic fields. Humans cannot directly experience most of these, so descriptions are interpretations of what research suggests, not a window into the animal's actual experience.",
  },
  {
    question: "Which animal has the 'best' senses?",
    answer:
      "There is no meaningful single answer. 'Best' depends on what is being measured and the animal's way of life — sharp distance vision suits a soaring raptor, while scent or echolocation suits others. FaunaHub describes notable abilities cautiously and avoids ranking animals or calling any sense a 'superpower'.",
  },
  {
    question: "Can a trait in one species be assumed for its whole group?",
    answer:
      "No. A striking adaptation in one species often does not apply to its whole class, order, or family. Not all bats echolocate, not all frogs tolerate freezing, and not all squid glow, for example. We word group statements carefully and note exceptions.",
  },
  {
    question: "Is this hunting, tracking, or pet-care information?",
    answer:
      "No. This is educational biology about how animals sense and adapt. It is not hunting, tracking, pest-control, pet-training, handling, survival, or veterinary advice, and it gives no instructions for interacting with wild animals.",
  },
];

export default function AnimalSensesAndAdaptationsHub() {
  const itemList = GUIDES.map((g, i) => ({
    name: g.label,
    url: `https://faunahub.com${g.href}`,
    position: i + 1,
  }));

  return (
    <SensesLayout
      crumbs={[{ name: "Animal Senses & Adaptations", href: PATH }]}
      kicker="Senses & adaptation biology"
      h1="Animal senses & adaptations"
      modified={MODIFIED}
      intro={
        <p>
          Animals experience the world in ways people often cannot imagine — seeing ultraviolet light,
          mapping space with echoes, following invisible scent trails, or sensing Earth&apos;s magnetic
          field. These guides explain how animals sense their surroundings and survive through
          adaptations like camouflage, bioluminescence, migration, and hibernation, in plain,
          source-cautious terms.
        </p>
      }
      related={GUIDES}
      faq={HUB_FAQ}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(itemList)) }}
      />

      <Section id="differ" title="Why animal senses differ from human senses">
        <p>
          Senses are shaped by ecology and evolution: an animal&apos;s perception fits the life it
          leads, not ours. Some animals detect signals we cannot — ultraviolet light, very high or low
          sounds, electric or magnetic fields — while lacking abilities we take for granted. Because we
          cannot directly experience these senses, descriptions are careful interpretations of
          research, and FaunaHub avoids implying an animal &ldquo;sees exactly like&rdquo; a person or a
          photograph.{" "}
          <Link href="/animal-senses-and-adaptations/animal-senses">Animal senses</Link> gives the
          overview.
        </p>
      </Section>

      <Section id="not-best" title="Adaptations are context-specific, not a ranking">
        <p>
          It is tempting to ask which animal has the &ldquo;best&rdquo; eyesight or sense of smell, but
          that framing rarely holds up: an ability is &ldquo;good&rdquo; only in relation to a task and
          a habitat. FaunaHub describes notable abilities factually and avoids superlatives, rankings,
          and &ldquo;superpower&rdquo; language. It also avoids generalising one species&apos; trait to
          its whole group — not all bats echolocate, and not all squid glow.
        </p>
      </Section>

      <Section id="examples" title="Adaptation examples across animal groups">
        <p>
          A small, representative set of well-documented examples — each labelled by adaptation type and
          paired with a caveat. These illustrate the variety of animal senses and adaptations; they are
          not a ranking or a complete list.
        </p>
        {GROUPS.map((g) => {
          const recs = ADAPTATION_EXAMPLES.filter((e) => e.relatedGuidePath === g.guide);
          if (!recs.length) return null;
          return (
            <div key={g.title} className="mb-6">
              <h3 className="text-base font-semibold text-[#063F2A] mb-3">{g.title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
                {recs.map((e) => (
                  <AdaptationCard key={e.id} e={e} />
                ))}
              </ul>
              <p className="text-sm mt-3"><Link href={g.guide} className="font-medium">Read the related guide →</Link></p>
            </div>
          );
        })}
      </Section>

      <Section id="navigation" title="Migration, navigation, and seasonal survival">
        <p>
          Some adaptations work at the scale of whole journeys and seasons. Migratory animals navigate
          using cues such as the sun, the stars, landmarks, odour, and Earth&apos;s magnetic field,
          though exactly how the magnetic sense works is still debated. Others survive harsh seasons
          through hibernation or shorter bouts of torpor. Explore{" "}
          <Link href="/animal-senses-and-adaptations/migration-and-navigation">migration &amp; navigation</Link>{" "}
          and{" "}
          <Link href="/animal-senses-and-adaptations/hibernation-and-torpor">hibernation &amp; torpor</Link>.
        </p>
      </Section>

      <Section id="sources" title="How FaunaHub checks adaptation claims">
        <p>
          Animal-ability claims are easy to exaggerate, so FaunaHub keeps them cautious, caveated, and
          source-backed, flagging where mechanisms are still debated. The{" "}
          <Link href="/animal-research-sources">animal research sources</Link> cluster explains how we
          choose and read sources, and the{" "}
          <Link href="/animal-research-sources/how-faunahub-uses-sources">source workflow</Link> covers
          our checks. Related biology lives in{" "}
          <Link href="/animal-lifespans">animal lifespans</Link>, the{" "}
          <Link href="/fauna/ocean">ocean fauna</Link> pages, and the{" "}
          <Link href="/wildlife/pollinators">pollinators</Link> guide.
        </p>
      </Section>

      <FaqBlock faq={HUB_FAQ} />
    </SensesLayout>
  );
}
