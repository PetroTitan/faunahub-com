import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BehaviorLayout, { Section, FaqBlock, Prose, BehaviorBadge, EvidenceBadge } from "@/components/behavior/BehaviorLayout";
import { buildMetadata } from "@/lib/metadata";
import { BEHAVIOR_BASE, BEHAVIOR_TYPE_LABEL, EVIDENCE_LABEL, speciesBySlug, SPECIES_INDEX } from "@/lib/animal-behavior";
import { SPECIES_CONTENT, speciesContentBySlug } from "@/lib/behavior-species-content";

const MODIFIED = "2026-06-28";

export function generateStaticParams() {
  return SPECIES_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = speciesContentBySlug(slug);
  if (!c) return {};
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: `${BEHAVIOR_BASE}/species/${c.slug}` });
}

function relatedFor(slug: string, animalSlug: string, commonName: string) {
  const others = SPECIES_INDEX.filter((s) => s.slug !== slug).slice(0, 3);
  return [
    { label: `${commonName} profile`, href: `/animals/${animalSlug}` },
    { label: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
    ...others.map((s) => ({ label: `${s.commonName} behavior`, href: `${BEHAVIOR_BASE}/species/${s.slug}` })),
    { label: "Animal research sources", href: "/animal-research-sources" },
  ];
}

export default async function SpeciesBehaviorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = speciesContentBySlug(slug);
  const index = speciesBySlug(slug);
  if (!c || !index) notFound();

  return (
    <BehaviorLayout
      crumbs={[
        { name: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
        { name: `${c.commonName} behavior`, href: `${BEHAVIOR_BASE}/species/${c.slug}` },
      ]}
      kicker="Species behavior profile"
      h1={`${c.commonName}: behavior & cognition`}
      modified={MODIFIED}
      intro={<>{c.introParas.map((p, i) => <Prose key={i} text={p} />)}</>}
      related={relatedFor(c.slug, index.animalSlug, c.commonName)}
      faq={c.faqs}
    >
      <p className="text-sm mb-8">
        <Link href={`/animals/${index.animalSlug}`} className="font-medium">
          ← See the full {c.commonName.toLowerCase()} profile
        </Link>
      </p>

      {c.behaviors.map((b, i) => (
        <section key={i} aria-labelledby={`b${i}-h`} className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <BehaviorBadge label={BEHAVIOR_TYPE_LABEL[b.behaviorType]} />
            <EvidenceBadge label={EVIDENCE_LABEL[b.evidenceContext]} />
          </div>
          <h2 id={`b${i}-h`} className="section-title">{b.heading}</h2>
          <div className="space-y-4 text-[#2C3A2F] leading-relaxed">
            {b.paras.map((p, j) => <Prose key={j} text={p} />)}
          </div>
          <p className="mt-3 text-sm text-[#5E6B63] leading-snug">
            <span className="font-medium">Caveat:</span> {b.caveat}
          </p>
        </section>
      ))}

      <Section id="sources" title="How this profile is sourced">
        <p>
          Behavior claims here are drawn cautiously from institution-backed references and described
          with their evidence context and limits. See{" "}
          <Link href="/animal-research-sources">animal research sources</Link> for the methodology, the{" "}
          <Link href={BEHAVIOR_BASE}>behavior cluster hub</Link> for the wider topic, and{" "}
          <Link href="/animal-senses-and-adaptations">animal senses &amp; adaptations</Link> for the
          underlying biology.
        </p>
      </Section>

      <FaqBlock faq={c.faqs} />
    </BehaviorLayout>
  );
}
