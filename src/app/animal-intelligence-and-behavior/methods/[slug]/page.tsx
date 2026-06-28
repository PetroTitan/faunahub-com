import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BehaviorLayout, { Section, FaqBlock, Prose } from "@/components/behavior/BehaviorLayout";
import { buildMetadata } from "@/lib/metadata";
import {
  BEHAVIOR_BASE,
  methodBySlug,
  guideBySlug,
  speciesBySlug,
} from "@/lib/animal-behavior";
import { METHOD_CONTENT, methodContentBySlug } from "@/lib/behavior-method-content";

const MODIFIED = "2026-06-28";

export function generateStaticParams() {
  return METHOD_CONTENT.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = methodContentBySlug(slug);
  if (!c) return {};
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: `${BEHAVIOR_BASE}/methods/${c.slug}` });
}

export default async function BehaviorMethodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = methodContentBySlug(slug);
  const meta = methodBySlug(slug);
  if (!c || !meta) notFound();

  const related = [
    { label: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
    ...meta.relatedPillarSlugs
      .map((s) => guideBySlug(s))
      .filter((g): g is NonNullable<typeof g> => Boolean(g))
      .map((g) => ({ label: g.title, href: `${BEHAVIOR_BASE}/${g.slug}` })),
    ...meta.relatedSourcePages,
  ];

  return (
    <BehaviorLayout
      crumbs={[
        { name: "Animal Intelligence & Behavior", href: BEHAVIOR_BASE },
        { name: meta.title, href: `${BEHAVIOR_BASE}/methods/${c.slug}` },
      ]}
      kicker="Research methods & source literacy"
      h1={meta.title}
      modified={MODIFIED}
      intro={<>{c.introParas.map((p, i) => <Prose key={i} text={p} />)}</>}
      related={related}
      faq={c.faqs}
    >
      <p className="text-base text-[#2C3A2F] leading-relaxed mb-8">{c.methodFocus}</p>

      <Section id="concepts" title="Key concepts">
        <dl className="space-y-3 not-prose">
          {c.keyConcepts.map((k) => (
            <div key={k.term} className="card p-4">
              <dt className="font-semibold text-[#17211B] mb-1">{k.term}</dt>
              <dd className="text-sm text-[#2C3A2F] leading-relaxed"><Prose text={k.explain} /></dd>
            </div>
          ))}
        </dl>
      </Section>

      {c.sections.map((s, i) => (
        <Section key={i} id={`s${i}`} title={s.heading}>
          {s.paras.map((p, j) => <Prose key={j} text={p} />)}
        </Section>
      ))}

      <Section id="why" title="Why this matters for reading behavior claims">
        {c.whyItMatters.map((p, i) => <Prose key={i} text={p} />)}
      </Section>

      <Section id="mistakes" title="Common mistakes this helps you avoid">
        <ul className="list-disc list-outside pl-5 space-y-2">
          {c.commonMistakes.map((m, i) => (
            <li key={i} className="text-[#2C3A2F] leading-relaxed"><Prose text={m} /></li>
          ))}
        </ul>
      </Section>

      <section aria-labelledby="boundary-h" className="mb-10">
        <h2 id="boundary-h" className="section-title">What this page does not establish</h2>
        <div className="card p-5 border-l-4 border-l-[#3E7C8C]">
          <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed"><Prose text={c.evidenceBoundary} /></p>
        </div>
      </section>

      {meta.relatedSpeciesSlugs.length > 0 && (
        <Section id="examples" title="See these ideas in our behavior profiles">
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0 not-prose">
            {meta.relatedSpeciesSlugs
              .map((s) => speciesBySlug(s))
              .filter((s): s is NonNullable<typeof s> => Boolean(s))
              .map((s) => (
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
        </Section>
      )}

      <Section id="sources" title="How FaunaHub uses sources">
        <p>
          These methodology notes sit alongside FaunaHub&apos;s wider source practice. See{" "}
          <Link href="/animal-research-sources">animal research sources</Link> and{" "}
          <Link href="/animal-research-sources/how-faunahub-uses-sources">how FaunaHub uses sources</Link>,
          and return to the{" "}
          <Link href={BEHAVIOR_BASE}>animal intelligence &amp; behavior hub</Link>.
        </p>
      </Section>

      <FaqBlock faq={c.faqs} />
    </BehaviorLayout>
  );
}
