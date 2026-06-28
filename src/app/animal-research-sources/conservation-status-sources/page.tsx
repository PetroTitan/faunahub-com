import type { Metadata } from "next";
import SourcePageLayout, { Section, FaqBlock } from "@/components/research/SourcePageLayout";
import { buildMetadata } from "@/lib/metadata";
import { sourcesByFamily } from "@/lib/research-sources";

const PATH = "/animal-research-sources/conservation-status-sources";
const MODIFIED = "2026-06-28";
const TITLE = "Conservation Status Sources: IUCN, CITES & Update Risk";
const DESC =
  "How to read animal conservation-status sources: the IUCN Red List, CITES trade context, and why FaunaHub treats statuses as attributed and changeable rather than permanent.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
  {
    question: "Is a conservation status permanent?",
    answer:
      "No. Conservation assessments are revised as new data and review cycles come in, so a species can move between categories over time. FaunaHub attributes statuses to their source and treats them as changeable, pointing readers to the current assessment for the latest listing.",
  },
  {
    question: "Is CITES the same as the IUCN Red List?",
    answer:
      "No. The IUCN Red List assesses extinction risk, while CITES is an international agreement about regulating trade. A species can be listed by CITES for trade reasons without that telling you its IUCN category, and vice versa. They answer different questions and should not be treated as interchangeable.",
  },
  {
    question: "Does FaunaHub give legal advice about protected species?",
    answer:
      "No. FaunaHub describes conservation context in general educational terms only. Questions about what is legally permitted — trade, ownership, or handling of protected species — must go to the relevant official agency, not to a summary page.",
  },
];

export default function ConservationStatusSourcesPage() {
  const sources = sourcesByFamily("conservation");
  return (
    <SourcePageLayout
      crumbs={[
        { name: "Animal Research Sources", href: "/animal-research-sources" },
        { name: "Conservation status sources", href: PATH },
      ]}
      kicker="Conservation"
      h1="Conservation status sources"
      modified={MODIFIED}
      intro={
        <p>
          Conservation-status sources tell you how threatened a species is — and, separately, whether
          its international trade is regulated. The key skill is reading them carefully: statuses are
          assessments that change over time, and trade listings are not the same as extinction risk.
        </p>
      }
      related={[
        { label: "Animal Research Sources", href: "/animal-research-sources" },
        { label: "Taxonomy databases", href: "/animal-research-sources/taxonomy-databases" },
        { label: "Range, habitat & ecology sources", href: "/animal-research-sources/animal-range-habitat-sources" },
        { label: "Endangered Animals", href: "/endangered-animals" },
        { label: "Animal Taxonomy", href: "/animal-taxonomy" },
      ]}
      faq={FAQ}
    >
      <Section id="iucn" title="The IUCN Red List">
        <p>
          The{" "}
          <a href="https://www.iucnredlist.org/" target="_blank" rel="noopener noreferrer">IUCN Red List</a>{" "}
          is the most widely used global source for species conservation assessments, with documented
          categories (such as Least Concern, Vulnerable, Endangered) and criteria. It is the reference
          FaunaHub points to most often. Two caveats matter: not every species has been assessed, and
          categories are reviewed and can change. We therefore attribute a status to the Red List and
          describe it as changeable rather than permanent.
        </p>
      </Section>

      <Section id="cites" title="CITES — trade context, not a status">
        <p>
          <a href="https://cites.org/" target="_blank" rel="noopener noreferrer">CITES</a> is an
          intergovernmental agreement that regulates international trade in listed species across its
          appendices. It is the right reference for whether trade in a species is controlled — but a
          CITES appendix is a regulatory tool, not a measure of how close a species is to extinction.
          Treating &ldquo;CITES-listed&rdquo; as if it were an IUCN category is a common mistake we
          avoid. CITES details are also legal matters: for what is actually permitted, the relevant
          authority is the right source, and this page is not legal advice.
        </p>
      </Section>

      <Section id="other" title="National and group-specific assessments">
        <p>
          Beyond global assessments, national and regional agencies and specialist bodies publish
          their own evaluations, which can differ from the global picture. FaunaHub draws on sources
          such as{" "}
          {sources.map((s, i) => (
            <span key={s.id}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
              {i < sources.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          where they are relevant, and notes when a status applies to a particular population or
          region rather than the whole species.
        </p>
      </Section>

      <Section id="wording" title="Why we avoid permanent statements">
        <p>
          Because assessments change, FaunaHub avoids phrasing like &ldquo;is endangered&rdquo; as a
          fixed fact. Instead we say a species is &ldquo;assessed by the IUCN as&rdquo; a category and
          suggest checking the current Red List page. This keeps the site honest as listings are
          updated and prevents an out-of-date label from lingering as if it were permanent.
        </p>
      </Section>

      <FaqBlock faq={FAQ} />
    </SourcePageLayout>
  );
}
