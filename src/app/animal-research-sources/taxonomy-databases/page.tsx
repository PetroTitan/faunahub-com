import type { Metadata } from "next";
import Link from "next/link";
import SourcePageLayout, { Section, FaqBlock } from "@/components/research/SourcePageLayout";
import { buildMetadata } from "@/lib/metadata";
import { sourcesByFamily } from "@/lib/research-sources";

const PATH = "/animal-research-sources/taxonomy-databases";
const MODIFIED = "2026-06-28";
const TITLE = "Taxonomy Databases: Checking Animal Names & Classification";
const DESC =
  "How taxonomy databases help verify scientific names, synonyms, and species groups — why animal classification changes, and why FaunaHub avoids duplicate same-species pages.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
  {
    question: "Why do animal scientific names change?",
    answer:
      "Classification is a living science. As researchers study anatomy, genetics, and geography, species are sometimes split, merged, or moved between genera, and older names become synonyms. A good taxonomy database records these changes and the currently accepted name, which is why we check one rather than assume a name is final.",
  },
  {
    question: "What is the difference between a common name and a scientific name?",
    answer:
      "A common name (like \"boa\") is an everyday term that can refer to different animals in different places, while a scientific name (like Boa constrictor) follows international rules and aims to identify one species unambiguously. Common names are friendlier; scientific names are more precise.",
  },
  {
    question: "Is one taxonomy database the final word?",
    answer:
      "No. Different databases can reflect different, equally reasonable classifications, and all are revised over time. We use them as references for accepted names and synonyms, not as a permanent authority, and we word taxonomy cautiously.",
  },
];

export default function TaxonomyDatabasesPage() {
  const sources = sourcesByFamily("taxonomy");
  return (
    <SourcePageLayout
      crumbs={[
        { name: "Animal Research Sources", href: "/animal-research-sources" },
        { name: "Taxonomy databases", href: PATH },
      ]}
      kicker="Taxonomy"
      h1="Taxonomy databases"
      modified={MODIFIED}
      intro={
        <p>
          Taxonomy databases are reference works for animal names: which scientific name is currently
          accepted, what its synonyms are, and how a species fits into larger groups. Because
          classification changes as science advances, checking a taxonomy reference is the first step
          in getting an animal&apos;s identity right.
        </p>
      }
      related={[
        { label: "Animal Research Sources", href: "/animal-research-sources" },
        { label: "Conservation status sources", href: "/animal-research-sources/conservation-status-sources" },
        { label: "How FaunaHub uses sources", href: "/animal-research-sources/how-faunahub-uses-sources" },
        { label: "Animal Taxonomy", href: "/animal-taxonomy" },
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians" },
      ]}
      faq={FAQ}
    >
      <Section id="what" title="What taxonomy databases are good for">
        <p>
          They help answer practical questions: Is this the accepted scientific name, or an older
          synonym? Which genus and family does the species belong to? Has it been split from, or
          lumped with, another species? FaunaHub uses references such as{" "}
          {sources.map((s, i) => (
            <span key={s.id}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
              {i < sources.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          for these checks, alongside editor-reviewed encyclopedias for general framing.
        </p>
      </Section>

      <Section id="change" title="Names and groups change over time">
        <p>
          Taxonomy is periodically revised. A species can be reassigned to a different genus, a
          well-known name can become a synonym, and a single &ldquo;species&rdquo; can turn out to be
          several. That is normal and healthy — but it means a name copied from an old page may be out
          of date. We treat the accepted name as the current best answer, not a permanent fact, and we
          note when a group is broad or under revision.
        </p>
      </Section>

      <Section id="group-vs-species" title="Group pages vs species pages">
        <p>
          Some FaunaHub pages describe a whole group (for example, &ldquo;snake&rdquo; or
          &ldquo;tree frog&rdquo;), while others describe a single species. A group page gives an
          overview of many related animals; a species page focuses on one. Keeping the two distinct
          avoids implying that a broad group is a single species, and it keeps the scientific scope
          honest.
        </p>
      </Section>

      <Section id="dedupe" title="Why we avoid duplicate same-species pages">
        <p>
          When a common name and a &ldquo;more specific&rdquo; name actually refer to the same animal,
          publishing both would create two competing pages for one species. Checking the scientific
          name in a taxonomy reference prevents that. A few real examples from FaunaHub:
        </p>
        <ul className="list-disc list-outside pl-5 space-y-1.5">
          <li><Link href="/animals/viper">viper</Link> already centres on the gaboon viper (<em>Bitis gabonica</em>), so a separate &ldquo;gaboon viper&rdquo; page would duplicate it.</li>
          <li><Link href="/animals/mamba">mamba</Link> is the black mamba (<em>Dendroaspis polylepis</em>), so a separate &ldquo;black mamba&rdquo; page is unnecessary.</li>
          <li><Link href="/animals/boa">boa</Link> is the boa constrictor (<em>Boa constrictor</em>), so &ldquo;boa constrictor&rdquo; would be the same species.</li>
          <li><Link href="/animals/anaconda">anaconda</Link> represents the anaconda (the green anaconda is the default), so a separate &ldquo;green anaconda&rdquo; page is avoided.</li>
        </ul>
        <p>
          In each case we integrate the existing page instead of creating a near-duplicate — a
          decision driven by the scientific name, not the common name.
        </p>
      </Section>

      <FaqBlock faq={FAQ} />
    </SourcePageLayout>
  );
}
