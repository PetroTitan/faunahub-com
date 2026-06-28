import type { Metadata } from "next";
import Link from "next/link";
import SourcePageLayout, { Section, FaqBlock } from "@/components/research/SourcePageLayout";
import { buildMetadata } from "@/lib/metadata";
import { RESEARCH_SOURCE_COUNT } from "@/lib/research-sources";

const PATH = "/animal-research-sources/how-faunahub-uses-sources";
const MODIFIED = "2026-06-28";
const TITLE = "How FaunaHub Uses Sources: Our Verification Workflow";
const DESC =
  "The workflow behind a FaunaHub animal page: multiple authoritative sources, cautious wording, license-checked images, duplicate-route checks, safety checks, and honest limitations.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
  {
    question: "How many sources does a FaunaHub profile use?",
    answer:
      "Profiles are built on more than one authoritative reference where possible — typically at least three credible, institution-backed sources covering taxonomy, ecology, and conservation, so no single page is the only basis for a claim.",
  },
  {
    question: "How does FaunaHub keep facts honest as sources change?",
    answer:
      "By wording claims cautiously and attributing them. Taxonomy, range, and conservation status are described as current best answers from a named source, with language that invites checking the source's current page rather than treating a fact as permanent.",
  },
  {
    question: "How are new pages checked before publishing?",
    answer:
      "Each batch goes through automated and review steps: source checks, image-license verification, duplicate-route and duplicate-record scans, safety-claim review, schema and accessibility checks, and a build. Issues are fixed before anything is published.",
  },
];

export default function HowFaunaHubUsesSourcesPage() {
  return (
    <SourcePageLayout
      crumbs={[
        { name: "Animal Research Sources", href: "/animal-research-sources" },
        { name: "How FaunaHub uses sources", href: PATH },
      ]}
      kicker="Source workflow"
      h1="How FaunaHub uses sources"
      modified={MODIFIED}
      intro={
        <p>
          Behind each animal page is a repeatable workflow: gather authoritative sources, word claims
          cautiously, verify image licenses, and run duplicate and safety checks before publishing.
          This page describes that process so readers can see how the site is put together.
        </p>
      }
      related={[
        { label: "Animal Research Sources", href: "/animal-research-sources" },
        { label: "Taxonomy databases", href: "/animal-research-sources/taxonomy-databases" },
        { label: "Image licensing for animal content", href: "/animal-research-sources/image-licensing-for-animal-content" },
        { label: "Editorial Policy", href: "/editorial-policy" },
        { label: "Coverage roadmap", href: "/animal-taxonomy/coverage-roadmap" },
      ]}
      faq={FAQ}
    >
      <Section id="multiple" title="Multiple sources per profile">
        <p>
          A profile is built on more than one reference where possible, drawing on a set of{" "}
          {RESEARCH_SOURCE_COUNT} institution-backed source families described across this cluster —
          peer-edited species accounts, taxonomy databases, conservation assessments, and government or
          museum resources. Using several reduces the chance that one out-of-date page shapes the whole
          summary.
        </p>
      </Section>

      <Section id="cautious" title="Source-backed, cautiously worded">
        <p>
          Taxonomy, range, and conservation status are taken from named sources and worded carefully:
          ranges are &ldquo;found in parts of&rdquo; rather than exhaustive, statuses are
          &ldquo;assessed by the IUCN as&rdquo; rather than permanent, and group-level claims carry
          caveats. The aim is to be accurate about uncertainty, not to sound more definitive than the
          evidence allows.
        </p>
      </Section>

      <Section id="images" title="License-checked images">
        <p>
          Every image is checked against the{" "}
          <Link href="/animal-research-sources/image-licensing-for-animal-content">image-licensing rules</Link>{" "}
          before use: a permitted license, a preserved author and attribution, an optimised local WebP
          copy, and an honest caption that discloses captive or specimen contexts. Images that fail any
          of these are not used.
        </p>
      </Section>

      <Section id="dedupe" title="Duplicate route and record checks">
        <p>
          Before a new page is added, FaunaHub checks that it does not duplicate an existing route or
          represent the same species as an existing page under a different name — a check driven by the
          scientific name, as the{" "}
          <Link href="/animal-research-sources/taxonomy-databases">taxonomy guide</Link> describes.
          Continent and category records are de-duplicated against the current data set, not just
          against whether a page exists.
        </p>
      </Section>

      <Section id="safety" title="Safety-claim checks">
        <p>
          Pages that touch venomous or toxic animals, dangerous wildlife, or sensitive topics are
          reviewed so they stay calm and educational: no sensational &ldquo;deadliest&rdquo; framing,
          no invented potency or attack statistics, and no medical, first-aid, handling, or pest-control
          instructions. Such concerns are routed to qualified professionals or official authorities, as
          set out in the{" "}
          <Link href="/animal-research-sources/animal-care-and-veterinary-boundaries">care-boundaries guide</Link>.
        </p>
      </Section>

      <Section id="verify-future" title="How future pages should be verified">
        <p>
          The same steps apply going forward: gather and cite credible sources, word claims cautiously,
          verify image licenses, run duplicate and safety checks, confirm schema and accessibility, and
          build before publishing. The{" "}
          <Link href="/animal-taxonomy/coverage-roadmap">coverage roadmap</Link> tracks what is planned,
          honestly labelled as representative rather than complete.
        </p>
      </Section>

      <Section id="limits" title="Limitations and update risk">
        <p>
          Even with this process, FaunaHub is a secondary educational summary, not a primary database.
          Sources change, some species are thinly documented, and any page can fall out of date.
          Readers should treat FaunaHub as a starting point and confirm anything important against the
          current page of the underlying source.
        </p>
      </Section>

      <FaqBlock faq={FAQ} />
    </SourcePageLayout>
  );
}
