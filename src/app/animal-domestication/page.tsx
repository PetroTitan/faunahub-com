import type { Metadata } from "next";
import Link from "next/link";
import DomesticationLayout, { Section, FaqBlock } from "@/components/domestication/DomesticationLayout";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import {
  DOMESTICATION_RECORDS,
  STATUS_LABEL,
  recordLink,
  type DomesticationRecord,
  type DomesticationStatus,
} from "@/lib/domestication";

const PATH = "/animal-domestication";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Domestication: How Humans and Animals Changed Each Other";
const DESC =
  "How some animals became domestic — the long, debated process behind dogs, cats, horses, livestock, and poultry, how it differs from taming and captivity, and how it shaped human societies.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const STATUS_CLASS: Record<DomesticationStatus, string> = {
  domesticated: "bg-[#E6F0D6] text-[#2F4711] border-[#CFE0A8]",
  "semi-domesticated": "bg-[#F6ECD6] text-[#5A4413] border-[#E6D2A6]",
  commensal: "bg-[#E2EEF3] text-[#16414F] border-[#BFD9E4]",
  "captive-not-domesticated": "bg-[#F3E6E2] text-[#5A2C1E] border-[#E4C9BF]",
  debated: "bg-[#EEE] text-[#444] border-[#DDD]",
};

const GROUPS: { title: string; ids: string[]; guide: string }[] = [
  { title: "Companions & commensals", ids: ["dog", "cat"], guide: "/animal-domestication/dog-domestication" },
  { title: "Transport & pastoral animals", ids: ["horse", "donkey", "camel"], guide: "/animal-domestication/horse-domestication" },
  { title: "Herd livestock", ids: ["cattle", "sheep", "goat", "pig", "llama", "alpaca", "rabbit", "guinea-pig"], guide: "/animal-domestication/livestock-domestication" },
  { title: "Birds & poultry", ids: ["chicken", "duck", "goose", "turkey", "pigeon"], guide: "/animal-domestication/birds-and-poultry-domestication" },
  { title: "Managed & semi-domesticated", ids: ["honeybee", "silkworm", "reindeer", "ferret"], guide: "/animal-domestication/commensal-and-semi-domesticated-animals" },
  { title: "Tamed & working — not domesticated", ids: ["elephant"], guide: "/animal-domestication/domestication-vs-taming" },
];

const byId = new Map(DOMESTICATION_RECORDS.map((r) => [r.id, r]));

function AnimalCard({ r }: { r: DomesticationRecord }) {
  const href = recordLink(r);
  return (
    <li>
      <Link href={href} className="card p-4 h-full flex flex-col gap-1.5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline">
        <span className="flex items-start justify-between gap-2">
          <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">{r.commonName}</span>
          <span className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full border ${STATUS_CLASS[r.status]}`}>
            {STATUS_LABEL[r.status]}
          </span>
        </span>
        <span className="text-xs text-[#5E6B63]">Wild relative: {r.wildAncestorOrRelative}</span>
        <span className="text-sm text-[#2C3A2F] leading-snug">{r.approximateContext}</span>
        <span className="text-xs text-[#5E6B63] leading-snug"><span className="font-medium">Still debated:</span> {r.uncertaintyNote}</span>
      </Link>
    </li>
  );
}

const HUB_FAQ = [
  {
    question: "What is the difference between a domesticated and a tame animal?",
    answer:
      "A tame animal is an individual that tolerates people; a domesticated animal belongs to a population whose biology and behaviour have been shaped by living with humans over many generations. A single tamed wolf, elephant, or big cat is not a domesticated species — domestication is a process across generations, not a trick learned by one animal.",
  },
  {
    question: "Did humans domesticate each animal at one exact moment?",
    answer:
      "No. Domestication was a gradual process, and several animals were domesticated more than once in different regions. The timing and geography are reconstructed from archaeological and genetic evidence that is debated and revised, so FaunaHub describes them cautiously rather than as fixed dates.",
  },
  {
    question: "Are domesticated animals the same as their wild relatives?",
    answer:
      "Not exactly. Domestic animals usually still have wild relatives or ancestors — wolves for dogs, the aurochs for cattle, wild boar for pigs — but generations of life with people have changed their bodies and behaviour. Some wild ancestors, like the aurochs, are now extinct.",
  },
  {
    question: "Is this animal-care or breeding advice?",
    answer:
      "No. This cluster is educational history and ecology. It does not provide pet-care, feeding, breeding, training, veterinary, or livestock-management advice. Decisions about a specific animal belong with a qualified professional.",
  },
];

export default function AnimalDomesticationHub() {
  const itemList = DOMESTICATION_RECORDS.map((r, i) => ({
    name: r.commonName,
    url: `https://faunahub.com${recordLink(r)}`,
    position: i + 1,
  }));
  const related = [
    { label: "What domestication is", href: "/animal-domestication/what-is-domestication" },
    { label: "Domestication vs taming", href: "/animal-domestication/domestication-vs-taming" },
    { label: "Dog domestication", href: "/animal-domestication/dog-domestication" },
    { label: "Cat domestication", href: "/animal-domestication/cat-domestication" },
    { label: "Horse domestication", href: "/animal-domestication/horse-domestication" },
    { label: "Livestock domestication", href: "/animal-domestication/livestock-domestication" },
    { label: "Birds & poultry domestication", href: "/animal-domestication/birds-and-poultry-domestication" },
    { label: "Commensal & semi-domesticated animals", href: "/animal-domestication/commensal-and-semi-domesticated-animals" },
  ];

  return (
    <DomesticationLayout
      crumbs={[{ name: "Animal Domestication", href: PATH }]}
      kicker="Natural & human history"
      h1="Animal domestication"
      modified={MODIFIED}
      intro={
        <p>
          Domestication is one of the deepest relationships between people and animals — a long,
          two-way process in which humans shaped animals and animals adapted to human worlds. This
          guide explains what domestication is (and is not), which animals became domestic, and how
          the process is reconstructed from evidence that is still debated.
        </p>
      }
      related={related}
      faq={HUB_FAQ}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(itemList)) }}
      />

      <Section id="meaning" title="What domestication means">
        <p>
          Domestication is an evolutionary and cultural process in which a population of animals
          becomes adapted, over many generations, to living with and around people. Humans selected
          for useful traits, but the animals were not passive: many adjusted their behaviour, diet, and
          biology to human-made environments. The result is a domestic population that differs from its
          wild relatives — not a single tamed individual.{" "}
          <Link href="/animal-domestication/what-is-domestication">What domestication is</Link>{" "}
          explores this in more depth.
        </p>
      </Section>

      <Section id="vs" title="Domestication vs taming vs captivity">
        <p>
          These are not the same. A tamed animal tolerates people; a captive animal simply lives in
          human care; a trained animal has learned behaviours — none of which makes a species
          domesticated. The working Asian elephant is the classic example: individuals are tamed and
          worked, but the species has not been reshaped over generations, so it is not domesticated.
          See <Link href="/animal-domestication/domestication-vs-taming">domestication vs taming</Link>.
        </p>
      </Section>

      <Section id="process" title="Why domestication is not a single event">
        <p>
          Domestication unfolded slowly, often beginning before anyone intended it, and several animals
          — including cattle and pigs — were domesticated more than once in different regions.
          Scholars describe broad pathways: a commensal pathway (animals such as dogs and cats drawn to
          human settlements), a prey pathway (game animals such as sheep and goats becoming herded),
          and a directed pathway (deliberate, later domestications such as the horse). Reconstructing
          this from archaeological and genetic evidence is an active, revised field, so timing and
          geography are best described cautiously.
        </p>
      </Section>

      <Section id="animals" title="Major domesticated animals">
        <p>
          A representative selection of animals and their wild relatives, with each one&apos;s status —
          fully domesticated, semi-domesticated, commensal, or tamed-but-not-domesticated — and a note
          on what remains debated. This is an overview, not a complete list.
        </p>
        {GROUPS.map((g) => {
          const recs = g.ids.map((id) => byId.get(id)).filter((r): r is DomesticationRecord => !!r);
          if (!recs.length) return null;
          return (
            <div key={g.title} className="mb-6">
              <h3 className="text-base font-semibold text-[#063F2A] mb-3">{g.title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
                {recs.map((r) => (
                  <AnimalCard key={r.id} r={r} />
                ))}
              </ul>
              <p className="text-sm mt-3">
                <Link href={g.guide} className="font-medium">Read the related guide →</Link>
              </p>
            </div>
          );
        })}
      </Section>

      <Section id="wild-relatives" title="Wild relatives and conservation">
        <p>
          Domestic animals are not sealed off from the wild. Many still have living wild relatives, and
          some of those relatives are threatened — the wild Bactrian camel and the African wild ass are
          assessed as endangered, and the aurochs (the ancestor of cattle) is extinct. Distinguishing a
          domestic animal from a feral one (descended from domestic stock) and from a genuinely wild
          ancestor matters for conservation. See FaunaHub&apos;s{" "}
          <Link href="/endangered-animals">endangered animals</Link> and{" "}
          <Link href="/domestic-animals">domestic vs wild</Link> coverage.
        </p>
      </Section>

      <Section id="checks" title="How FaunaHub checks domestication claims">
        <p>
          Domestication histories change as new finds and analyses appear, so FaunaHub words dates and
          origins cautiously, attributes claims, and avoids presenting debated timelines as settled
          facts. The{" "}
          <Link href="/animal-research-sources">animal research sources</Link> cluster explains how we
          choose and read archaeological, genetic, and taxonomic sources, and the{" "}
          <Link href="/animal-research-sources/animal-care-and-veterinary-boundaries">care-boundaries guide</Link>{" "}
          explains why this is history and ecology, not animal-care advice.
        </p>
      </Section>

      <FaqBlock faq={HUB_FAQ} />
    </DomesticationLayout>
  );
}
