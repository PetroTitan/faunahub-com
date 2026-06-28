import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BehaviorLayout, { Section, FaqBlock, Prose } from "@/components/behavior/BehaviorLayout";
import { buildMetadata } from "@/lib/metadata";
import { BEHAVIOR_BASE, BEHAVIOR_GUIDES, guideBySlug } from "@/lib/animal-behavior";
import { PILLAR_CONTENT, pillarBySlug } from "@/lib/behavior-pillar-content";

const MODIFIED = "2026-06-28";

export function generateStaticParams() {
  return PILLAR_CONTENT.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = pillarBySlug(slug);
  if (!c) return {};
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: `${BEHAVIOR_BASE}/${c.slug}` });
}

// A few related pillar links per guide, plus the cluster hub and research sources.
function relatedFor(slug: string) {
  const siblings = BEHAVIOR_GUIDES.filter((g) => g.slug !== slug).slice(0, 3);
  return [
    { label: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
    ...siblings.map((g) => ({ label: g.title, href: `${BEHAVIOR_BASE}/${g.slug}` })),
    { label: "Animal research sources", href: "/animal-research-sources" },
  ];
}

export default async function BehaviorPillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = pillarBySlug(slug);
  const guide = guideBySlug(slug);
  if (!c || !guide) notFound();

  return (
    <BehaviorLayout
      crumbs={[
        { name: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
        { name: guide.title, href: `${BEHAVIOR_BASE}/${c.slug}` },
      ]}
      kicker="Behavior & cognition"
      h1={guide.title}
      modified={MODIFIED}
      intro={<>{c.introParas.map((p, i) => <Prose key={i} text={p} />)}</>}
      related={relatedFor(c.slug)}
      faq={c.faqs}
    >
      {c.sections.map((s, i) => (
        <Section key={i} id={`s${i}`} title={s.heading}>
          {s.paras.map((p, j) => <Prose key={j} text={p} />)}
        </Section>
      ))}

      <Section id="more" title="Explore more behavior guides">
        <p>
          This guide is part of FaunaHub&apos;s{" "}
          <Link href={BEHAVIOR_BASE}>animal intelligence &amp; behavior</Link> cluster. For how these
          claims are sourced, see{" "}
          <Link href="/animal-research-sources">animal research sources</Link>, and for the biology
          behind behavior, see{" "}
          <Link href="/animal-senses-and-adaptations">animal senses &amp; adaptations</Link>.
        </p>
      </Section>

      <FaqBlock faq={c.faqs} />
    </BehaviorLayout>
  );
}
