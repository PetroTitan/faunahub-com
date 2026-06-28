import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BehaviorLayout, { Section, FaqBlock, Prose, EvidenceBadge } from "@/components/behavior/BehaviorLayout";
import { buildMetadata } from "@/lib/metadata";
import {
  BEHAVIOR_BASE,
  EVIDENCE_LABEL,
  groupBySlug,
  guideBySlug,
  methodBySlug,
  speciesBySlug,
  type EvidenceContext,
} from "@/lib/animal-behavior";
import { GROUP_CONTENT, groupContentBySlug } from "@/lib/behavior-group-content";

const MODIFIED = "2026-06-28";

export function generateStaticParams() {
  return GROUP_CONTENT.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = groupContentBySlug(slug);
  if (!c) return {};
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: `${BEHAVIOR_BASE}/groups/${c.slug}` });
}

export default async function BehaviorGroupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = groupContentBySlug(slug);
  const meta = groupBySlug(slug);
  if (!c || !meta) notFound();

  const related = [
    { label: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
    ...meta.relatedPillarSlugs
      .map((s) => guideBySlug(s))
      .filter((g): g is NonNullable<typeof g> => Boolean(g))
      .map((g) => ({ label: g.title, href: `${BEHAVIOR_BASE}/${g.slug}` })),
    { label: "Animal research sources", href: "/animal-research-sources" },
  ];

  return (
    <BehaviorLayout
      crumbs={[
        { name: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
        { name: meta.title, href: `${BEHAVIOR_BASE}/groups/${c.slug}` },
      ]}
      kicker="Behavior by animal group"
      h1={meta.title}
      modified={MODIFIED}
      intro={<>{c.introParas.map((p, i) => <Prose key={i} text={p} />)}</>}
      related={related}
      faq={c.faqs}
    >
      <p className="text-base text-[#2C3A2F] leading-relaxed mb-6">{c.groupFocus}</p>

      <div className="card p-4 border-l-4 border-l-[#3E7C8C] mb-8">
        <p className="text-sm text-[#2C3A2F] leading-relaxed">
          <span className="font-semibold text-[#1B4A57]">Representative, not complete:</span>{" "}
          <Prose text={c.caveat} />
        </p>
      </div>

      <Section id="themes" title="Representative behavior themes">
        <ul className="space-y-4 not-prose">
          {c.behaviorThemes.map((t, i) => (
            <li key={i} className="card p-4">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-base font-semibold text-[#17211B]">{t.theme}</span>
                <EvidenceBadge label={EVIDENCE_LABEL[t.evidenceContext as EvidenceContext] ?? t.evidenceContext} />
              </div>
              <p className="text-sm text-[#2C3A2F] leading-relaxed"><Prose text={t.detail} /></p>
            </li>
          ))}
        </ul>
      </Section>

      {c.sections.map((s, i) => (
        <Section key={i} id={`s${i}`} title={s.heading}>
          {s.paras.map((p, j) => <Prose key={j} text={p} />)}
        </Section>
      ))}

      <section aria-labelledby="notclaim-h" className="mb-10">
        <h2 id="notclaim-h" className="section-title">What this page does not claim</h2>
        <ul className="list-disc list-outside pl-5 space-y-2">
          {c.whatThisPageDoesNotClaim.map((x, i) => (
            <li key={i} className="text-[#2C3A2F] leading-relaxed"><Prose text={x} /></li>
          ))}
        </ul>
      </section>

      <Section id="profiles" title="Related animal profiles & behavior pages">
        {meta.relatedSpeciesSlugs.length > 0 && (
          <>
            <h3 className="text-base font-semibold text-[#16414F] mb-2">Species behavior profiles</h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0 not-prose mb-4">
              {meta.relatedSpeciesSlugs
                .map((s) => speciesBySlug(s))
                .filter((s): s is NonNullable<typeof s> => Boolean(s))
                .map((s) => (
                  <li key={s.slug}>
                    <Link href={`${BEHAVIOR_BASE}/species/${s.slug}`} className="inline-block text-sm px-3 py-1.5 rounded-full border border-[#DCE6E9] bg-white hover:border-[#BFD9E4] hover:bg-[#F3F8FA] hover:no-underline transition-colors">
                      {s.commonName} behavior
                    </Link>
                  </li>
                ))}
            </ul>
          </>
        )}
        <h3 className="text-base font-semibold text-[#16414F] mb-2">Animal profiles</h3>
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0 not-prose">
          {meta.relatedAnimalSlugs.map((a) => (
            <li key={a.slug}>
              <Link href={`/animals/${a.slug}`} className="inline-block text-sm px-3 py-1.5 rounded-full border border-[#DCE6E9] bg-white hover:border-[#BFD9E4] hover:bg-[#F3F8FA] hover:no-underline transition-colors">
                {a.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="methods" title="How these claims are studied">
        <p>
          Group-level behaviour is easy to overstate, so these claims are kept cautious and labelled by
          evidence context. See{" "}
          {meta.relatedMethodSlugs.map((ms, i) => {
            const m = methodBySlug(ms);
            if (!m) return null;
            return (
              <span key={ms}>
                {i > 0 ? ", " : ""}
                <Link href={`${BEHAVIOR_BASE}/methods/${m.slug}`}>{m.title.toLowerCase()}</Link>
              </span>
            );
          })}
          , and{" "}
          <Link href="/animal-research-sources">animal research sources</Link> for our methodology.
        </p>
      </Section>

      {meta.ecosystemLinks && meta.ecosystemLinks.length > 0 && (
        <Section id="ecosystem" title="Explore related FaunaHub guides">
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0 not-prose">
            {meta.ecosystemLinks.map((e) => (
              <li key={e.href}>
                <Link href={e.href} className="inline-block text-sm px-3 py-1.5 rounded-full border border-[#DCE6E9] bg-white hover:border-[#BFD9E4] hover:bg-[#F3F8FA] hover:no-underline transition-colors">
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FaqBlock faq={c.faqs} />
    </BehaviorLayout>
  );
}
