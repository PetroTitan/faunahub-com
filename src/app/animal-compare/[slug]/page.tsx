import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import DimensionTable from "@/components/compare/DimensionTable";
import SourcesSection from "@/components/educational/SourcesSection";
import { buildArticleMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  COMPARE_BASE,
  COMPARISONS,
  categoryName,
  categoryPath,
  comparisonBySlug,
  comparisonHeading,
  compareAnimalBySlug,
  hubLabel,
} from "@/lib/animal-compare";
import {
  COMPARISON_METHODOLOGY_NOTE,
  COMPARISON_SCOPE_NOTE,
  resolveComparisonSources,
} from "@/lib/animal-compare/sources";

export function generateStaticParams() {
  return COMPARISONS.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = comparisonBySlug(slug);
  if (!record) return {};
  return buildArticleMetadata({
    title: record.metaTitle,
    description: record.metaDescription,
    path: `${COMPARE_BASE}/${record.slug}`,
    publishedTime: record.lastReviewed,
    modifiedTime: record.lastReviewed,
  });
}

/** Section wrapper — one H2 per block, consistent spacing. */
function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="pt-8">
      <h2 id={id} className="text-xl sm:text-2xl font-bold text-[#17211B] mb-3">
        {heading}
      </h2>
      {children}
    </section>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base text-[#2C3A2F] leading-relaxed mb-3">{children}</p>
  );
}

/** Calm, non-procedural boundary callout. */
function Boundary({ title, body }: { title: string; body: string }) {
  return (
    <aside className="rounded-2xl border border-[#DDE6DD] border-l-4 border-l-[#075FA8] bg-white p-4 sm:p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-[#075FA8] mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-[#2C3A2F] leading-relaxed">{body}</p>
    </aside>
  );
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = comparisonBySlug(slug);
  if (!record) notFound();

  const animalA = compareAnimalBySlug(record.animalA.slug);
  const animalB = compareAnimalBySlug(record.animalB.slug);
  const path = `${COMPARE_BASE}/${record.slug}`;
  const url = `https://faunahub.com${path}`;
  const heading = comparisonHeading(record);
  const sources = resolveComparisonSources(
    record.animalA.slug,
    record.animalB.slug,
    record.sourceIds,
  );

  const related = record.relatedComparisonSlugs
    .map((s) => comparisonBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const { narrative } = record;

  return (
    <main id="main-content" className="mx-auto w-full max-w-4xl px-4 sm:px-6 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Animal Compare Center", url: `https://faunahub.com${COMPARE_BASE}` },
              {
                name: categoryName(record.primaryCategory),
                url: `https://faunahub.com${categoryPath(record.primaryCategory)}`,
              },
              { name: record.title, url },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: heading,
              description: record.metaDescription,
              path,
              datePublished: record.lastReviewed,
              dateModified: record.lastReviewed,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(record.faqs)),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Animal Compare Center", href: COMPARE_BASE },
          {
            label: categoryName(record.primaryCategory),
            href: categoryPath(record.primaryCategory),
          },
          { label: record.title },
        ]}
      />

      <header className="pt-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#5E6B63] mb-2">
          {categoryName(record.primaryCategory)} comparison
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] leading-tight mb-4">
          {heading}
        </h1>

        <div className="rounded-2xl border border-[#CFE0A8] bg-[#EFF4E0] p-5 sm:p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#063F2A] mb-2">
            The short answer
          </h2>
          <p className="text-base sm:text-lg text-[#17211B] leading-relaxed">
            {record.shortAnswer}
          </p>
        </div>
      </header>

      <Section id="main-difference" heading="The main difference">
        <p className="text-base text-[#2C3A2F] leading-relaxed border-l-4 border-l-[#7BAA35] pl-4 mb-3">
          {record.centralDifference}
        </p>
        <Prose>{record.whyCompare}</Prose>
      </Section>

      <Section id="at-a-glance" heading="At a glance">
        <DimensionTable
          labelA={record.animalA.name}
          labelB={record.animalB.name}
          dimensions={record.dimensions}
          caption={`Comparison of ${record.animalA.name} and ${record.animalB.name} across ${record.dimensions.length} dimensions, with an interpretation of each difference.`}
        />
      </Section>

      <Section id="taxonomy" heading="How they are related">
        <Prose>{narrative.taxonomy}</Prose>
        {record.taxonomyCaveat && (
          <p className="text-sm text-[#5E6B63] leading-relaxed bg-[#EFF1EB] rounded-xl p-4">
            <strong className="font-semibold text-[#17211B]">
              A note on naming:{" "}
            </strong>
            {record.taxonomyCaveat}
          </p>
        )}
      </Section>

      <Section id="identification" heading="Telling them apart">
        <Prose>{narrative.identification}</Prose>
        <Prose>{narrative.whichIsWhich}</Prose>
      </Section>

      <Section id="habitat" heading="Habitat and distribution">
        <Prose>{narrative.habitat}</Prose>
      </Section>

      <Section id="diet" heading="Diet and ecological role">
        <Prose>{narrative.diet}</Prose>
      </Section>

      <Section id="behaviour" heading="Behaviour">
        <Prose>{narrative.behavior}</Prose>
      </Section>

      {narrative.sensesAdaptations && (
        <Section id="senses" heading="Senses and adaptations">
          <Prose>{narrative.sensesAdaptations}</Prose>
          <p className="text-sm text-[#5E6B63]">
            More on this topic:{" "}
            <Link href="/animal-senses-and-adaptations">
              Animal senses and adaptations
            </Link>
            .
          </p>
        </Section>
      )}

      {narrative.lifespan && (
        <Section id="lifespan" heading="Lifespan and life stages">
          <Prose>{narrative.lifespan}</Prose>
          <p className="text-sm text-[#5E6B63]">
            More on this topic: <Link href="/animal-lifespans">Animal lifespans</Link>
            .
          </p>
        </Section>
      )}

      <Section id="human-relationship" heading="People and these animals">
        <Prose>{narrative.humanRelationship}</Prose>
      </Section>

      {narrative.petContext && (
        <Section id="pet-context" heading="Keeping them: what to understand first">
          <Prose>{narrative.petContext}</Prose>
        </Section>
      )}

      {narrative.conservation && (
        <Section id="conservation" heading="Conservation context">
          <Prose>{narrative.conservation}</Prose>
          {record.conservationCaveat && (
            <p className="text-sm text-[#5E6B63] leading-relaxed bg-[#EFF1EB] rounded-xl p-4">
              {record.conservationCaveat}
            </p>
          )}
        </Section>
      )}

      <Section id="similarities" heading="What they have in common">
        <ul className="space-y-2">
          {record.similarities.map((item) => (
            <li
              key={item}
              className="text-base text-[#2C3A2F] leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#7BAA35]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="key-differences" heading="Key differences">
        <ul className="grid gap-3 sm:grid-cols-2">
          {record.keyDifferences.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-[#DDE6DD] bg-white p-4 text-sm text-[#2C3A2F] leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="confusions" heading="Where people go wrong">
        <ul className="space-y-2">
          {record.commonConfusions.map((item) => (
            <li
              key={item}
              className="text-base text-[#2C3A2F] leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#075FA8]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {(record.safetyBoundary || record.petBoundary) && (
        <div className="pt-8 space-y-4">
          {record.safetyBoundary && (
            <Boundary title="Safety note" body={record.safetyBoundary} />
          )}
          {record.petBoundary && (
            <Boundary
              title="Before considering either as an animal in your care"
              body={record.petBoundary}
            />
          )}
        </div>
      )}

      <div className="pt-8">
        <FAQBlock items={record.faqs} title="Frequently asked questions" />
      </div>

      <Section id="profiles" heading="Read the full profiles">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[animalA, animalB].map(
            (animal) =>
              animal && (
                <li key={animal.slug}>
                  <Link
                    href={animal.profilePath}
                    className="block rounded-xl border border-[#DDE6DD] bg-white p-4 text-sm font-semibold text-[#063F2A] transition-colors hover:border-[#CFE0A8] hover:no-underline"
                  >
                    {animal.name}
                    <span className="block text-xs font-normal text-[#5E6B63] mt-0.5">
                      {animal.profileKind === "hub"
                        ? "FaunaHub guide hub"
                        : "Animal profile"}
                    </span>
                  </Link>
                </li>
              ),
          )}
        </ul>
      </Section>

      {related.length > 0 && (
        <Section id="related-comparisons" heading="Related comparisons">
          <ul className="flex flex-wrap gap-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`${COMPARE_BASE}/${item.slug}`}
                  className="inline-block rounded-full border border-[#CFE0A8] bg-[#EFF4E0] px-3.5 py-1.5 text-sm font-medium text-[#063F2A] transition-colors hover:bg-[#E3EDCB] hover:no-underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="related-guides" heading="Related FaunaHub guides">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href={categoryPath(record.primaryCategory)}
              className="inline-block rounded-full border border-[#DDE6DD] bg-white px-3.5 py-1.5 text-sm text-[#2C3A2F] transition-colors hover:border-[#CFE0A8] hover:no-underline"
            >
              All {categoryName(record.primaryCategory).toLowerCase()} comparisons
            </Link>
          </li>
          {record.relatedHubPaths.map((hub) => (
            <li key={hub}>
              <Link
                href={hub}
                className="inline-block rounded-full border border-[#DDE6DD] bg-white px-3.5 py-1.5 text-sm text-[#2C3A2F] transition-colors hover:border-[#CFE0A8] hover:no-underline"
              >
                {hubLabel(hub) ?? hub}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="methodology" heading="Sources and methodology">
        <p className="text-sm text-[#5E6B63] leading-relaxed mb-3">
          {COMPARISON_METHODOLOGY_NOTE}
        </p>
        <p className="text-sm text-[#5E6B63] leading-relaxed mb-5">
          {COMPARISON_SCOPE_NOTE}
        </p>
        <SourcesSection sources={sources} />
      </Section>

      <div className="pt-6">
        <LastUpdated date={record.lastReviewed} />
      </div>
    </main>
  );
}
