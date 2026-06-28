import type { Metadata } from "next";
import Link from "next/link";
import BehaviorLayout, { Section, FaqBlock } from "@/components/behavior/BehaviorLayout";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import {
  BEHAVIOR_BASE,
  BEHAVIOR_GUIDES,
  BEHAVIOR_METHODS,
  SPECIES_INDEX,
  GROUP_LABEL,
  type DisplayGroup,
} from "@/lib/animal-behavior";

const PATH = BEHAVIOR_BASE;
const MODIFIED = "2026-06-28";
const TITLE = "Animal Intelligence and Behavior: How Animals Learn, Communicate, Cooperate, and Survive";
const DESC =
  "How animals learn, remember, solve problems, use tools, communicate, cooperate, and behave — a source-cautious ethology guide. No IQ scores, no ‘smartest animal’ rankings.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const GROUP_ORDER: DisplayGroup[] = [
  "cetaceans", "primates", "mammals", "birds", "cephalopods", "insects", "invertebrates", "fish", "amphibians", "reptiles",
];

const HUB_FAQ = [
  {
    question: "What is the ‘smartest’ animal?",
    answer:
      "There is no meaningful single answer. Intelligence is not one ladder that all animals can be ranked on — it is a patchwork of abilities shaped by each species’ body, senses, and way of life. A test that suits a primate may be near-impossible for an animal that lives by smell or echolocation, so ‘smartest animal’ lists usually measure the test, not the animal. FaunaHub gives no IQ scores and no rankings.",
  },
  {
    question: "Is animal communication the same as human language?",
    answer:
      "No. Many animals have rich communication systems — alarm calls, the honeybee waggle dance, whale song, scent marks — but communication is not automatically language. These signals convey specific information (identity, location, danger, readiness to mate) without the open-ended grammar of human language, and FaunaHub describes them as signals, not speech.",
  },
  {
    question: "Can we know what animals feel or whether they are self-aware?",
    answer:
      "Only cautiously. We can observe behaviour and physiology, but inferring inner experience is hard. Emotion-like states such as stress, fear, or play are described from what is observable, not projected as human feelings. Self-recognition tests like the mirror ‘mark test’ are debated and limited — passing is not proof of human-like consciousness, and failing is not proof of no self-awareness.",
  },
  {
    question: "Is this pet-training, hunting, or survival advice?",
    answer:
      "No. This is educational ethology and comparative cognition. It is not pet-training, animal-handling, hunting, tracking, pest-control, survival, or veterinary advice, and it gives no instructions for interacting with wild animals.",
  },
];

export default function AnimalIntelligenceAndBehaviorHub() {
  const itemList = BEHAVIOR_GUIDES.map((g, i) => ({
    name: g.title,
    url: `https://faunahub.com${BEHAVIOR_BASE}/${g.slug}`,
    position: i + 1,
  }));

  return (
    <BehaviorLayout
      crumbs={[{ name: "Animal Intelligence & Behavior", href: PATH }]}
      kicker="Behavior & cognition"
      h1="Animal intelligence & behavior"
      modified={MODIFIED}
      intro={
        <p>
          Animals learn, remember, solve problems, signal to one another, cooperate, raise young, and
          navigate the world in remarkable ways. These guides explain animal behavior and cognition as
          biologists actually study it — through observation, experiments, and comparative biology —
          while avoiding IQ scores, &ldquo;smartest animal&rdquo; rankings, and the temptation to read
          human minds into other species.
        </p>
      }
      related={BEHAVIOR_GUIDES.map((g) => ({ label: g.title, href: `${BEHAVIOR_BASE}/${g.slug}` }))}
      faq={HUB_FAQ}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(itemList)) }}
      />

      <Section id="what" title="What animal behavior means">
        <p>
          Behavior is what an animal does — how it feeds, moves, signals, and interacts — and how those
          actions help it survive and reproduce. Ethology and comparative cognition study behavior
          through field observation, controlled experiments, and comparison across species, always
          distinguishing what is observed from what is inferred about an animal&apos;s inner life.
        </p>
      </Section>

      <Section id="not-ranking" title="Intelligence without a human ranking">
        <p>
          It is tempting to rank animals from &ldquo;dumb&rdquo; to &ldquo;genius,&rdquo; but
          comparative cognition does not support a single ladder of intelligence. Abilities are
          plural and context-specific: a food-caching bird may have extraordinary spatial memory, a
          social mammal may excel at tracking relationships, and neither sits &ldquo;above&rdquo; the
          other. FaunaHub gives no IQ scores, no &ldquo;smartest animal&rdquo; lists, and no fake
          rankings. Start with{" "}
          <Link href={`${BEHAVIOR_BASE}/animal-intelligence`}>animal intelligence</Link>.
        </p>
      </Section>

      <Section id="guides" title="Pillar guides">
        <p>Eighteen guides to the core themes of animal behavior and cognition.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
          {BEHAVIOR_GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`${BEHAVIOR_BASE}/${g.slug}`}
                className="card p-4 h-full flex flex-col gap-1.5 hover:shadow-md hover:border-[#BFD9E4] transition-all group hover:no-underline"
              >
                <span className="text-base font-semibold text-[#17211B] group-hover:text-[#16414F] transition-colors">{g.title}</span>
                <span className="text-sm text-[#2C3A2F] leading-snug">{g.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="species" title="Species behavior profiles">
        <p>
          Source-backed behavior profiles for individual animals, each labelled by behavior type and
          evidence context, with a caveat on every claim. These are a first set; more are added only
          when they meet the same quality and sourcing standards.
        </p>
        {GROUP_ORDER.map((grp) => {
          const recs = SPECIES_INDEX.filter((s) => s.displayGroup === grp);
          if (!recs.length) return null;
          return (
            <div key={grp} className="mb-5">
              <h3 className="text-base font-semibold text-[#16414F] mb-2">{GROUP_LABEL[grp]}</h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0 not-prose">
                {recs.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`${BEHAVIOR_BASE}/species/${s.slug}`}
                      className="inline-block text-sm px-3 py-1.5 rounded-full border border-[#DCE6E9] bg-white hover:border-[#BFD9E4] hover:bg-[#F3F8FA] hover:no-underline transition-colors"
                    >
                      {s.commonName} behavior
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </Section>

      <Section id="emotions" title="Emotions and self-recognition: cautious interpretation">
        <p>
          Questions about animal feelings and self-awareness are fascinating and easy to get wrong.
          FaunaHub treats emotion-like states as inferences from observable behaviour, not as proven
          human feelings, and presents self-recognition tests such as the mirror &ldquo;mark
          test&rdquo; as debated and limited. See{" "}
          <Link href={`${BEHAVIOR_BASE}/animal-emotions`}>animal emotions</Link> and{" "}
          <Link href={`${BEHAVIOR_BASE}/self-recognition`}>self-recognition</Link>.
        </p>
      </Section>

      <Section id="methods" title="Research methods & source literacy">
        <p>
          Good behavior writing depends on how the evidence is read. These short methodology guides
          explain how animal minds are studied and how to avoid the most common errors — IQ
          rankings, mirror-test overclaims, mistaking communication for language, and projecting human
          feelings onto animals.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
          {BEHAVIOR_METHODS.map((m) => (
            <li key={m.slug}>
              <Link
                href={`${BEHAVIOR_BASE}/methods/${m.slug}`}
                className="card p-4 h-full flex flex-col gap-1.5 hover:shadow-md hover:border-[#BFD9E4] transition-all group hover:no-underline"
              >
                <span className="text-base font-semibold text-[#17211B] group-hover:text-[#16414F] transition-colors">{m.title}</span>
                <span className="text-sm text-[#2C3A2F] leading-snug">{m.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="sources" title="How FaunaHub checks behavior claims">
        <p>
          Behavior and intelligence claims are easy to exaggerate, so FaunaHub keeps them cautious,
          caveated, and source-backed, separating wild observation from captive studies and flagging
          where findings are debated. The{" "}
          <Link href="/animal-research-sources">animal research sources</Link> cluster explains how we
          choose and read sources. Related biology lives in{" "}
          <Link href="/animal-senses-and-adaptations">animal senses &amp; adaptations</Link>,{" "}
          <Link href="/animal-lifespans">animal lifespans</Link>, and{" "}
          <Link href="/animal-domestication">animal domestication</Link>.
        </p>
      </Section>

      <FaqBlock faq={HUB_FAQ} />
    </BehaviorLayout>
  );
}
