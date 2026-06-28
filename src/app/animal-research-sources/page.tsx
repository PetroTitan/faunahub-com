import type { Metadata } from "next";
import Link from "next/link";
import SourcePageLayout, { Section, FaqBlock } from "@/components/research/SourcePageLayout";
import { buildMetadata } from "@/lib/metadata";
import {
  SOURCE_FAMILIES,
  INSTITUTION_LABELS,
  sourcesByFamily,
  type ResearchSource,
} from "@/lib/research-sources";

const PATH = "/animal-research-sources";
const MODIFIED = "2026-06-28";
const TITLE =
  "Animal Research Sources: How to Check Taxonomy, Conservation, Range, and Images";
const DESC =
  "How FaunaHub finds and reads animal information: institution-backed sources for taxonomy, conservation status, range and ecology, animal-care boundaries, and image licensing — with their strengths and limitations.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
});

const FAMILY_GUIDE: Record<string, string> = {
  taxonomy: "/animal-research-sources/taxonomy-databases",
  conservation: "/animal-research-sources/conservation-status-sources",
  "range-habitat": "/animal-research-sources/animal-range-habitat-sources",
  ecology: "/animal-research-sources/animal-range-habitat-sources",
  "veterinary-boundary": "/animal-research-sources/animal-care-and-veterinary-boundaries",
  "image-licensing": "/animal-research-sources/image-licensing-for-animal-content",
};

const USE_LABEL: Record<ResearchSource["faunahubUse"], string> = {
  used: "Cited on FaunaHub profiles",
  referenced: "Useful reference",
  example: "Example of its family",
};

function SourceCard({ s }: { s: ResearchSource }) {
  return (
    <li className="card p-5 h-full flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-[#17211B] hover:text-[#063F2A]">
          {s.name}
        </a>
        <span className="shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full border bg-[#EEF3E6] text-[#2F4711] border-[#CFE0A8]">
          {USE_LABEL[s.faunahubUse]}
        </span>
      </div>
      <p className="text-xs text-[#5E6B63]">{INSTITUTION_LABELS[s.institutionType]}</p>
      <p className="text-sm text-[#2C3A2F] leading-snug">{s.useCase}</p>
      <p className="text-sm text-[#2C3A2F] leading-snug">
        <span className="font-medium text-[#063F2A]">Strengths:</span> {s.strengths}
      </p>
      <p className="text-sm text-[#5E6B63] leading-snug">
        <span className="font-medium text-[#8A5A00]">Limitations:</span> {s.limitations}
      </p>
      {s.cautionNote && (
        <p className="text-xs text-[#5E6B63] leading-snug">
          <span className="font-medium">Note:</span> {s.cautionNote}
        </p>
      )}
    </li>
  );
}

const HUB_FAQ = [
  {
    question: "Is FaunaHub affiliated with these institutions?",
    answer:
      "No. FaunaHub names these sources because they are useful, institution-backed references, not because of any partnership, endorsement, or certification. We are an independent educational resource and do not claim any official relationship with them.",
  },
  {
    question: "Are these sources always correct and up to date?",
    answer:
      "No source is always current or error-free. Taxonomy is revised, conservation statuses are reassessed, and occurrence data need interpretation. We treat facts as attributed and changeable and encourage readers to check the current page of the source itself for the latest information.",
  },
  {
    question: "Does FaunaHub give veterinary or legal advice?",
    answer:
      "No. FaunaHub is educational. It does not provide veterinary diagnosis, treatment, dosage, emergency protocols, or legal and regulatory compliance advice. Decisions about a specific animal belong with a qualified veterinarian, and wildlife or trade questions belong with the relevant official authority.",
  },
  {
    question: "How does FaunaHub use images from these sources?",
    answer:
      "FaunaHub stores local WebP copies only when an image's license allows commercial use and modification (Public Domain, CC0, CC BY, or CC BY-SA), preserves the author and license in the credit, and discloses captive, specimen, or staged contexts. It does not scrape or republish database text.",
  },
];

export default function AnimalResearchSourcesHub() {
  const related = [
    { label: "Taxonomy databases", href: "/animal-research-sources/taxonomy-databases" },
    { label: "Conservation status sources", href: "/animal-research-sources/conservation-status-sources" },
    { label: "Range, habitat & ecology sources", href: "/animal-research-sources/animal-range-habitat-sources" },
    { label: "Animal-care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
    { label: "Image licensing for animal content", href: "/animal-research-sources/image-licensing-for-animal-content" },
    { label: "How FaunaHub uses sources", href: "/animal-research-sources/how-faunahub-uses-sources" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Animal Taxonomy", href: "/animal-taxonomy" },
    { label: "Animal Domestication", href: "/animal-domestication" },
    { label: "Animal Lifespans", href: "/animal-lifespans" },
    { label: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations" },
  ];

  return (
    <SourcePageLayout
      crumbs={[{ name: "Animal Research Sources", href: PATH }]}
      kicker="Research methodology"
      h1="Animal research sources"
      modified={MODIFIED}
      intro={
        <p>
          Good animal information depends on good sources. This guide explains the kinds of
          institution-backed references FaunaHub uses for <strong>taxonomy</strong>,{" "}
          <strong>conservation status</strong>, <strong>range and ecology</strong>, and{" "}
          <strong>image licensing</strong> — what each is good for, where it falls short, and where
          animal-specific decisions belong with a qualified professional instead.
        </p>
      }
      related={related}
      faq={HUB_FAQ}
    >
      <Section id="why" title="Why animal sources matter">
        <p>
          Animal facts are not fixed. Scientific names are revised as classification improves,
          conservation statuses are reassessed, ranges shift and are mapped at different levels of
          detail, and occurrence records can include captive or historical sightings. Naming a
          credible source — and reading it carefully — is what separates a reliable summary from a
          confident-sounding guess. FaunaHub leans on institution-backed databases and reference
          works, cites more than one where it can, and words claims cautiously.
        </p>
      </Section>

      {SOURCE_FAMILIES.filter((f) => f.key !== "ecology").map((fam) => {
        const sources =
          fam.key === "range-habitat"
            ? Array.from(
                new Map(
                  [...sourcesByFamily("range-habitat"), ...sourcesByFamily("ecology")].map((s) => [s.id, s]),
                ).values(),
              )
            : sourcesByFamily(fam.key);
        return (
          <Section key={fam.key} id={fam.key} title={`${fam.label} sources`}>
            <p>{fam.blurb}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
              {sources.map((s) => (
                <SourceCard key={s.id} s={s} />
              ))}
            </ul>
            <p className="text-sm">
              <Link href={FAMILY_GUIDE[fam.key]} className="font-medium">
                Read the {fam.label.toLowerCase()} guide →
              </Link>
            </p>
          </Section>
        );
      })}

      <Section id="how" title="How FaunaHub uses sources">
        <p>
          Each animal profile is built from one or more authoritative references, with taxonomy,
          range, and conservation status drawn from them and worded cautiously. Images are
          license-checked before use, captions disclose captive or specimen contexts, and routes are
          de-duplicated so the same species is not split across competing pages. The{" "}
          <Link href="/animal-research-sources/how-faunahub-uses-sources">source workflow guide</Link>{" "}
          describes this in detail, and the{" "}
          <Link href="/editorial-policy">editorial policy</Link> covers the wider review process.
        </p>
      </Section>

      <Section id="avoids" title="What FaunaHub avoids">
        <ul className="list-disc list-outside pl-5 space-y-1.5">
          <li>Claiming any official endorsement, certification, or partnership with an institution.</li>
          <li>Copying long passages of text from source websites or republishing their data.</li>
          <li>Presenting taxonomy or conservation status as permanent or guaranteed current.</li>
          <li>Using images under non-commercial, no-derivatives, or unclear licenses.</li>
          <li>Giving veterinary, medical, legal, or regulatory advice of any kind.</li>
          <li>Inventing ratings, trust scores, or authority badges for sources.</li>
        </ul>
      </Section>

      <Section id="limits" title="Source limitations and update risk">
        <p>
          Even the best databases have gaps: not every species is assessed by the IUCN, occurrence
          points are not the same as a range map, aggregated checklists vary in recency, and any page
          can contain an error or be out of date. Treat what you read here — and on FaunaHub — as a
          starting point, and confirm anything important against the current page of the source
          itself.
        </p>
      </Section>

      <FaqBlock faq={HUB_FAQ} />
    </SourcePageLayout>
  );
}
