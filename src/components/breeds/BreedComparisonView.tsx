import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import { getBreedHeroImage } from "@/lib/images/breed-images";
import { AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import type { SourceLink } from "@/lib/educational/types";
import { breadcrumbSchema } from "@/lib/schema";
import {
  ORDINAL_LABEL,
  basisLabel,
  breedHubPath,
  breedPath,
  formatLifespan,
  formatMeasurement,
  getBreedSource,
  type Breed,
} from "@/lib/pet-intelligence";
import {
  COMPARISON_DIMENSIONS,
  DIMENSION_LABEL,
  comparisonPath,
  differenceSummary,
  relatedComparisons,
  sharedDimensions,
  type ComparisonDimension,
  type ComparisonPair,
} from "@/lib/pet-intelligence/comparisons";

const SITE = "https://faunahub.com";

/**
 * A breed comparison: two columns of published values, and no verdict.
 *
 * Every row shows what each registry records for each breed. There is no
 * winner, no recommendation, no "better for families", and no score — deriving
 * a verdict from two ordinal bands would manufacture a judgement out of data
 * that cannot carry one.
 *
 * Where a value is absent for one breed it renders as "not recorded" rather
 * than being omitted, because a missing row reads as "the same" and an absence
 * is not a match.
 */
function cell(breed: Breed, dimension: ComparisonDimension) {
  switch (dimension) {
    case "registryGroup": {
      const rec = breed.recognition.find((r) => r.registryGroup);
      return rec?.registryGroup ?? null;
    }
    case "sizeClass":
      return breed.sizeClass ? breed.sizeClass[0].toUpperCase() + breed.sizeClass.slice(1) : null;
    case "coatLength":
      return breed.coat?.length
        ? breed.coat.length[0].toUpperCase() + breed.coat.length.slice(1)
        : null;
    case "heightCm":
    case "weightKg": {
      const rows = breed.measurements?.[dimension];
      if (!rows?.length) return null;
      const unit = dimension === "heightCm" ? "cm" : "kg";
      return (
        <ul className="list-none p-0 m-0 space-y-0.5">
          {rows.map((m) => (
            <li key={m.statedAs}>
              <span className="text-[#5E6B63]">{basisLabel(m.basis)}: </span>
              {formatMeasurement(m, unit)}
            </li>
          ))}
        </ul>
      );
    }
    case "lifespanYears":
      return breed.lifespanYears ? formatLifespan(breed.lifespanYears) : null;
    default: {
      const trait = breed.traits[dimension];
      return trait ? ORDINAL_LABEL[trait.value] : null;
    }
  }
}

export default function BreedComparisonView({
  pair,
  lastUpdated,
}: {
  pair: ComparisonPair;
  lastUpdated: string;
}) {
  const { a, b, species } = pair;
  const speciesLabel = species === "dog" ? "Dogs" : "Cats";
  const speciesWord = species === "dog" ? "dog" : "cat";
  const title = `${a.name} vs ${b.name}`;
  const shared = new Set(sharedDimensions(a, b));
  const differences = differenceSummary(pair);
  const related = relatedComparisons(pair);

  const sources: SourceLink[] = [...new Set([...a.sources, ...b.sources])]
    .map((id) => getBreedSource(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({
      label: `${s.organization} — ${s.title}`,
      url: s.url,
      type: "breed-organization" as const,
      note: `${s.scope} Accessed ${s.accessedAt}.`,
    }));
  sources.push(AVMA_PET_CARE);

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: speciesLabel, url: `${SITE}/${species}s` },
      { name: `${speciesLabel.slice(0, -1)} Breeds`, url: `${SITE}${breedHubPath(species)}` },
      { name: title, url: `${SITE}${comparisonPath(pair)}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <div className="container-content py-10">
          <Breadcrumbs
            items={[
              { label: speciesLabel, href: `/${species}s` },
              { label: `${speciesLabel.slice(0, -1)} Breeds`, href: breedHubPath(species) },
              { label: title },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mt-2 mb-3 leading-tight">
            {title}
          </h1>

          <div className="not-prose border-l-4 border-l-[#7BAA35] bg-[#EFF4E0]/60 p-5 rounded-r-xl max-w-3xl">
            <p className="text-sm font-semibold text-[#063F2A] m-0 mb-1.5">Quick answer</p>
            <p className="text-sm text-[#2C3A2F] leading-relaxed m-0">
              {differences.length > 0 ? (
                <>
                  These two breeds differ most clearly in{" "}
                  {differences.length === 1 ? "one recorded way" : `${differences.length} recorded ways`},
                  set out below. <strong>Neither is better.</strong> FaunaHub compares what the
                  registries publish and does not pick a winner — which {speciesWord} suits a
                  household depends on the individual animal and on circumstances no registry
                  records.
                </>
              ) : (
                <>
                  On every dimension both registries record, these two breeds are noted the same
                  way. That does not make them interchangeable — it means the published data does
                  not separate them, and the difference lies in things no registry records.
                </>
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[a, b].map((breed) => {
              const img = getBreedHeroImage(breed.species, breed.slug);
              return (
                <Link
                  key={breed.id}
                  href={breedPath(breed)}
                  className="card overflow-hidden hover:border-[#CFE0A8] hover:shadow-md transition-all group hover:no-underline"
                >
                  <div className="relative w-full aspect-[4/3] bg-[#EFF1EB] border-b border-[#DDE6DD] overflow-hidden">
                    {img ? (
                      <Image
                        src={img.localPath}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 640px) 45vw, 90vw"
                        className="object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center text-3xl text-[#5E6B63]"
                      >
                        {breed.name.slice(0, 1)}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className="text-base font-semibold text-[#17211B] m-0 group-hover:text-[#063F2A]">
                      {breed.name}
                    </h2>
                    <span className="text-xs font-medium text-[#063F2A] mt-1 block">
                      Full profile →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {differences.length > 0 && (
            <section className="mt-10 max-w-3xl">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-3">
                Key differences
              </h2>
              <ul className="space-y-2 text-sm text-[#2C3A2F] list-none p-0 m-0">
                {differences.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#7BAA35] flex-shrink-0">
                      ●
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-3">
              Side by side
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[32rem]">
                <caption className="sr-only">{title} — published values</caption>
                <thead>
                  <tr className="text-left border-b border-[#DDE6DD]">
                    <th scope="col" className="py-2 pr-3 font-medium text-[#5E6B63]">
                      Dimension
                    </th>
                    <th scope="col" className="py-2 pr-3 font-semibold text-[#17211B]">
                      {a.name}
                    </th>
                    <th scope="col" className="py-2 font-semibold text-[#17211B]">
                      {b.name}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAF0EA] align-top">
                  {COMPARISON_DIMENSIONS.filter((d) => shared.has(d) || cell(a, d) || cell(b, d)).map(
                    (d) => (
                      <tr key={d}>
                        <th scope="row" className="py-2.5 pr-3 font-medium text-[#5E6B63] text-left">
                          {DIMENSION_LABEL[d]}
                        </th>
                        <td className="py-2.5 pr-3 text-[#17211B]">
                          {cell(a, d) ?? <span className="text-[#5E6B63]">not recorded</span>}
                        </td>
                        <td className="py-2.5 text-[#17211B]">
                          {cell(b, d) ?? <span className="text-[#5E6B63]">not recorded</span>}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#5E6B63] mt-3 max-w-3xl leading-relaxed">
              Trait rows are three-level bands normalised from a registry&apos;s published scale,
              never scores. &ldquo;Trainability&rdquo; describes how readily a breed is said to
              respond to structured training, not intelligence. &ldquo;Shedding&rdquo; is not an
              allergy signal — no breed is hypoallergenic. A blank means the registry records
              nothing, which is not the same as the two breeds matching.
            </p>
          </section>

          <section className="not-prose mt-10 border border-[#DDE6DD] rounded-xl bg-white overflow-hidden max-w-3xl">
            <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider px-5 py-2.5 bg-[#EFF4E0] border-b border-[#DDE6DD] m-0">
              Why these two breeds
            </h2>
            <p className="px-5 py-4 text-sm text-[#2C3A2F] leading-relaxed m-0">{pair.basis}</p>
          </section>

          {related.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-[#17211B] mb-3">Related comparisons</h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={comparisonPath(p)}
                      className="card block p-3 text-sm font-medium text-[#17211B] hover:border-[#CFE0A8] hover:shadow-sm transition-all hover:no-underline"
                    >
                      {p.a.name} vs {p.b.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="not-prose mt-10 max-w-3xl">
            <SourcesSection
              sources={sources}
              intro="Registry entries behind every value on this page. External links open in a new tab. Always confirm specific care decisions with a licensed veterinarian or reputable shelter."
            />
          </div>

          <div className="mt-8 max-w-3xl">
            <DisclaimerBlock type="general" />
          </div>
          <div className="mt-6">
            <LastUpdated date={lastUpdated} />
          </div>
        </div>
      </main>
    </>
  );
}
