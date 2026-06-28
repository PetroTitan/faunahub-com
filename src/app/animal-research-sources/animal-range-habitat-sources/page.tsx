import type { Metadata } from "next";
import Link from "next/link";
import SourcePageLayout, { Section, FaqBlock } from "@/components/research/SourcePageLayout";
import { buildMetadata } from "@/lib/metadata";
import { sourcesByFamily } from "@/lib/research-sources";

const PATH = "/animal-research-sources/animal-range-habitat-sources";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Range & Habitat Sources: Reading Distribution Data";
const DESC =
  "How to read animal range and habitat sources: range vs occurrence records, native vs introduced vs captive, and why FaunaHub continent pages are representative, not complete range maps.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
  {
    question: "Is an occurrence record the same as a species' range?",
    answer:
      "No. An occurrence record is a single observation at one place and time. A range is the broader area where a species lives. Occurrence datasets are valuable but include captive animals, historical records, vagrants, and misidentifications, so they describe range only after careful interpretation.",
  },
  {
    question: "Why does FaunaHub use confidence labels on continent records?",
    answer:
      "Because distribution evidence varies. A confidence label shows how well-supported a record is and flags broad, introduced, or domestic contexts, so readers are not given a false sense of precision. Continent pages present a representative, source-backed selection — not a complete range map.",
  },
  {
    question: "Does a zoo sighting mean an animal lives there in the wild?",
    answer:
      "No. Captive presence in a zoo, aquarium, or collection is not wild range. FaunaHub never treats captive locations as native range, and image captions disclose captive or specimen contexts.",
  },
];

export default function RangeHabitatSourcesPage() {
  const sources = Array.from(
    new Map([...sourcesByFamily("range-habitat"), ...sourcesByFamily("ecology")].map((s) => [s.id, s])).values(),
  );
  return (
    <SourcePageLayout
      crumbs={[
        { name: "Animal Research Sources", href: "/animal-research-sources" },
        { name: "Range, habitat & ecology sources", href: PATH },
      ]}
      kicker="Range & habitat"
      h1="Animal range, habitat & ecology sources"
      modified={MODIFIED}
      intro={
        <p>
          Where an animal lives sounds simple, but distribution data are subtle. The most useful
          sources distinguish mapped range from scattered occurrence records, and native range from
          introduced or captive presence. Reading them well is what keeps a range claim honest.
        </p>
      }
      related={[
        { label: "Animal Research Sources", href: "/animal-research-sources" },
        { label: "Conservation status sources", href: "/animal-research-sources/conservation-status-sources" },
        { label: "How FaunaHub uses sources", href: "/animal-research-sources/how-faunahub-uses-sources" },
        { label: "Fauna by Continent", href: "/fauna/continents" },
        { label: "Wildlife & Biodiversity", href: "/wildlife" },
      ]}
      faq={FAQ}
    >
      <Section id="range-vs-occurrence" title="Range vs occurrence records">
        <p>
          A range map shows the area a species generally occupies; an occurrence record is one
          observation at a point. Large aggregators such as occurrence databases are powerful, but
          their points are not a range on their own — they need interpretation to remove captive,
          historical, or misidentified records. FaunaHub uses institution-backed accounts such as{" "}
          {sources.map((s, i) => (
            <span key={s.id}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
              {i < sources.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          for distribution and ecology, and treats occurrence aggregations as supporting evidence, not
          a finished map.
        </p>
      </Section>

      <Section id="native-introduced" title="Native, introduced, domestic, and captive">
        <p>
          The same species can be native in one place and introduced in another, kept domestically, or
          present only in captivity. These are different kinds of &ldquo;found here,&rdquo; and
          conflating them produces misleading range claims. FaunaHub flags introduced and domestic
          contexts and never treats captive presence as wild range. The Burmese python is a good
          example: native to South and Southeast Asia, and separately an introduced population in
          Florida — two facts that should not be merged.
        </p>
      </Section>

      <Section id="seasonal" title="Seasonal and migratory range">
        <p>
          Many animals move. A migratory species may breed in one region and winter in another, so a
          single map can hide an annual cycle. Good sources describe these movements, and FaunaHub
          words range cautiously rather than implying a species sits in one place year-round.
        </p>
      </Section>

      <Section id="representative" title="Why continent pages are representative">
        <p>
          FaunaHub&apos;s <Link href="/fauna/continents">continent pages</Link> feature a curated,
          source-backed selection of animals — not a complete inventory or a precise range map. Each
          record carries a confidence label and cautious distribution note, and widespread or
          introduced ranges are flagged. The goal is an honest overview, not a false impression of
          completeness.
        </p>
      </Section>

      <FaqBlock faq={FAQ} />
    </SourcePageLayout>
  );
}
