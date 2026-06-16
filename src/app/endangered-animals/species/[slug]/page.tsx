import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import RelatedLinks from "@/components/RelatedLinks";
import LastUpdated from "@/components/LastUpdated";
import ImageCredit from "@/components/ImageCredit";
import CategoryBadge from "@/components/red-list/CategoryBadge";
import ConfidenceBadge from "@/components/red-list/ConfidenceBadge";
import SourceList from "@/components/red-list/SourceList";
import MethodologyNote from "@/components/red-list/MethodologyNote";
import { buildArticleMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getBySlug, getDetailedSlugs } from "@/lib/red-list/helpers";
import { getGroupMeta, trendLabel } from "@/lib/red-list/categories";
import { RED_LIST_PROFILES } from "@/lib/red-list/profiles";
import { RED_LIST_LAST_REVIEW } from "@/lib/red-list/methodology";
import {
  getEndangeredHero,
  getEndangeredGallery,
} from "@/lib/images/endangered-animal-images";

export const dynamicParams = false;

export function generateStaticParams() {
  return getDetailedSlugs().map((slug) => ({ slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = getBySlug(slug);
  if (!record) return {};
  const hero = getEndangeredHero(slug);
  const path = `/endangered-animals/species/${slug}`;
  return buildArticleMetadata({
    title: `${record.commonName} (${record.scientificName}) — ${record.redListCategoryLabel}`,
    description: `Conservation overview of the ${record.commonName} (${record.scientificName}), assessed as ${record.redListCategoryLabel} on the IUCN Red List, with verified sources and clear data limitations.`,
    path,
    publishedTime: "2026-06-16",
    modifiedTime: RED_LIST_LAST_REVIEW,
    ogImage: hero
      ? {
          url: `https://faunahub.com${hero.localPath}`,
          width: hero.width,
          height: hero.height,
          alt: hero.alt,
        }
      : undefined,
  });
}

export default async function EndangeredSpeciesProfilePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const record = getBySlug(slug);
  if (!record || record.profileStatus !== "detailed-profile") notFound();

  const content = RED_LIST_PROFILES[slug];
  const hero = getEndangeredHero(slug);
  const gallery = getEndangeredGallery(slug);
  const trend = trendLabel(record.populationTrend);
  const group = getGroupMeta(record.taxonGroup);
  const path = `/endangered-animals/species/${slug}`;

  const faq = content?.faq ?? [];
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      {
        name: "Endangered Animals",
        url: "https://faunahub.com/endangered-animals",
      },
      { name: record.commonName, url: `https://faunahub.com${path}` },
    ]),
    articleSchema({
      title: `${record.commonName} (${record.scientificName})`,
      description: `Conservation overview of the ${record.commonName}, assessed as ${record.redListCategoryLabel} on the IUCN Red List.`,
      path,
      datePublished: "2026-06-16",
      dateModified: RED_LIST_LAST_REVIEW,
    }),
    ...(faq.length > 0 ? [faqSchema(faq)] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD]">
          <div className="container-content pt-4 pb-8">
            <Breadcrumbs
              items={[
                { label: "Endangered Animals", href: "/endangered-animals" },
                {
                  label: group.label,
                  href: `/endangered-animals/${record.taxonGroup}`,
                },
                { label: record.commonName },
              ]}
            />
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <CategoryBadge code={record.redListCategory} showLabel />
              <ConfidenceBadge confidence={record.dataConfidence} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] leading-tight">
              {record.commonName}
            </h1>
            <p className="mt-1 text-lg italic text-[#5E6B63]">
              {record.scientificName}
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid gap-10 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-8">
              {hero && (
                <figure className="not-prose overflow-hidden rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] shadow-sm">
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: `${hero.width} / ${hero.height}` }}
                  >
                    <Image
                      src={hero.localPath}
                      alt={hero.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 700px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 sm:px-5 sm:py-4 bg-white border-t border-[#DDE6DD]">
                    <p className="text-sm text-[#2C3A2F] leading-relaxed">
                      {hero.caption}
                    </p>
                    <ImageCredit image={hero} className="mt-1.5" />
                  </figcaption>
                </figure>
              )}

              {/* Quick facts */}
              <section
                aria-labelledby="facts-heading"
                className="card p-5 sm:p-6"
              >
                <h2
                  id="facts-heading"
                  className="text-base font-semibold text-[#17211B] mb-4"
                >
                  At a glance
                </h2>
                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <div>
                    <dt className="text-[#8A958E] uppercase tracking-wider text-[11px]">
                      IUCN category
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      {record.redListCategory} · {record.redListCategoryLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#8A958E] uppercase tracking-wider text-[11px]">
                      Animal group
                    </dt>
                    <dd className="text-[#2C3A2F]">{group.label}</dd>
                  </div>
                  {trend && (
                    <div>
                      <dt className="text-[#8A958E] uppercase tracking-wider text-[11px]">
                        Population trend
                      </dt>
                      <dd className="text-[#2C3A2F]">
                        <span aria-hidden="true">{trend.symbol}</span>{" "}
                        {trend.label}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-[#8A958E] uppercase tracking-wider text-[11px]">
                      Last verified
                    </dt>
                    <dd className="text-[#2C3A2F]">
                      <time dateTime={record.lastVerified}>
                        {record.lastVerified}
                      </time>
                    </dd>
                  </div>
                </dl>
              </section>

              {content && (
                <section className="prose-content">
                  <h2>Conservation overview</h2>
                  {content.summary.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </section>
              )}

              {record.rangeSummary && (
                <section className="prose-content">
                  <h2>Range &amp; habitat</h2>
                  <p>{record.rangeSummary}</p>
                </section>
              )}

              {record.primaryThreats && record.primaryThreats.length > 0 && (
                <section className="prose-content">
                  <h2>Major threats</h2>
                  <p className="text-sm text-[#5E6B63]">
                    Threats below are drawn from the authoritative sources listed
                    on this page. For the current, complete assessment, see the
                    IUCN Red List.
                  </p>
                  <ul>
                    {record.primaryThreats.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </section>
              )}

              {content && (
                <section className="prose-content">
                  <h2>Why it matters</h2>
                  <p>{content.whyItMatters}</p>
                </section>
              )}

              {record.notes && (
                <p className="text-sm text-[#5E6B63] border-l-2 border-[#DDE6DD] pl-4">
                  {record.notes}
                </p>
              )}

              {/* Gallery */}
              {gallery.length > 0 && (
                <section aria-labelledby="gallery-heading">
                  <h2
                    id="gallery-heading"
                    className="text-2xl font-bold text-[#17211B] mb-4"
                  >
                    Gallery
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {gallery.map((img) => (
                      <figure
                        key={img.id}
                        className="overflow-hidden rounded-xl border border-[#DDE6DD] bg-[#EFF1EB]"
                      >
                        <div
                          className="relative w-full"
                          style={{ aspectRatio: `${img.width} / ${img.height}` }}
                        >
                          <Image
                            src={img.localPath}
                            alt={img.alt}
                            fill
                            sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="px-4 py-3 bg-white border-t border-[#DDE6DD]">
                          <p className="text-sm text-[#2C3A2F]">{img.caption}</p>
                          <ImageCredit image={img} className="mt-1.5" />
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              <section aria-labelledby="sources-heading" className="card p-5 sm:p-6">
                <h2
                  id="sources-heading"
                  className="text-base font-semibold text-[#17211B] mb-3"
                >
                  Sources
                </h2>
                <SourceList record={record} />
              </section>

              <MethodologyNote lastVerified={record.lastVerified} />

              {faq.length > 0 && <FAQBlock items={faq} />}

              <LastUpdated date={record.lastVerified} />
            </article>

            <aside className="space-y-6">
              {content?.relatedAnimal && (
                <RelatedLinks
                  title="On FaunaHub"
                  links={[content.relatedAnimal]}
                />
              )}
              <RelatedLinks
                title="Browse endangered animals"
                links={[
                  {
                    label: `Endangered ${group.label.toLowerCase()}`,
                    href: `/endangered-animals/${record.taxonGroup}`,
                  },
                  {
                    label: record.redListCategoryLabel,
                    href:
                      record.redListCategory === "CR"
                        ? "/endangered-animals/critically-endangered"
                        : record.redListCategory === "EN"
                          ? "/endangered-animals/endangered"
                          : record.redListCategory === "VU"
                            ? "/endangered-animals/vulnerable"
                            : "/endangered-animals",
                  },
                  { label: "Endangered animals hub", href: "/endangered-animals" },
                ]}
              />
              <RelatedLinks
                title="Understand the data"
                links={[
                  {
                    label: "Red List categories explained",
                    href: "/endangered-animals/red-list-explained",
                  },
                  {
                    label: "How conservation status works",
                    href: "/endangered-animals/how-conservation-status-works",
                  },
                  {
                    label: "Data methodology",
                    href: "/endangered-animals/red-list-data-methodology",
                  },
                  { label: "Image credits", href: "/image-credits" },
                ]}
              />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
