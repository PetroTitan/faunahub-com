import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import BreedFinderClient from "./BreedFinderClient";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { finderBreeds, finderFacets, withheldFacets } from "@/lib/pet-intelligence/finder";

const LAST_UPDATED = "2026-09-13";

export const metadata: Metadata = buildMetadata({
  title: "Dog Breed Finder — Filter Breeds by Size, Coat, Exercise & Grooming",
  description:
    "Filter FaunaHub's dog breed registry by registry group, adult size, coat length, exercise needs, grooming needs, shedding, trainability, and vocality. Results are alphabetical — no rankings, no scores.",
  path: "/dogs/breed-finder",
});

export default function DogBreedFinderPage() {
  const breeds = finderBreeds("dog");
  const facets = finderFacets("dog");
  const withheld = withheldFacets("dog");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://faunahub.com" },
              { name: "Dogs", url: "https://faunahub.com/dogs" },
              { name: "Dog Breeds", url: "https://faunahub.com/dogs/breeds" },
              { name: "Dog Breed Finder", url: "https://faunahub.com/dogs/breed-finder" },
            ]),
          ),
        }}
      />
      <main id="main-content">
        <div className="container-content py-10">
          <Breadcrumbs
            items={[
              { label: "Dogs", href: "/dogs" },
              { label: "Dog Breeds", href: "/dogs/breeds" },
              { label: "Dog Breed Finder" },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mt-2 mb-3 leading-tight">
            Dog Breed Finder
          </h1>
          <p className="text-[#2C3A2F] max-w-3xl leading-relaxed">
            Filter FaunaHub&apos;s {breeds.length} dog breed profiles by attributes a named registry
            publishes. Every filter below exists because the underlying data covers the whole
            registry — and the panel at the foot of this page lists what the Finder deliberately
            cannot offer.
          </p>
          <div className="not-prose mt-5 border-l-4 border-l-[#7BAA35] bg-[#EFF4E0]/60 p-5 rounded-r-xl max-w-3xl">
            <p className="text-sm text-[#2C3A2F] leading-relaxed m-0">
              <strong className="text-[#063F2A]">This is a filter, not a recommendation.</strong>{" "}
              It narrows a list by recorded attributes. It cannot tell you which dog suits your
              household, and it deliberately offers no &ldquo;best breed for&rdquo; filters —
              suitability depends on the individual dog, your circumstances, and things no registry
              records. Results are alphabetical, never ranked.
            </p>
          </div>

          <BreedFinderClient breeds={breeds} facets={facets} speciesWord="dog" />

          {withheld.length > 0 && (
            <section className="mt-12 border border-[#DDE6DD] rounded-xl bg-white overflow-hidden max-w-3xl">
              <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider px-5 py-2.5 bg-[#EFF4E0] border-b border-[#DDE6DD] m-0">
                Filters this Finder does not offer
              </h2>
              <dl className="px-5 py-4 m-0 divide-y divide-[#EAF0EA]">
                {withheld.map((f) => (
                  <div key={f.label} className="py-2.5 first:pt-0 last:pb-0">
                    <dt className="text-sm font-medium text-[#17211B]">{f.label}</dt>
                    <dd className="text-sm text-[#5E6B63] m-0 mt-0.5 leading-relaxed">
                      {f.reason}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="mt-10 max-w-3xl">
            <h2 className="text-xl font-semibold text-[#17211B] mb-2">What the filters mean</h2>
            <p className="text-sm text-[#5E6B63] leading-relaxed">
              Trait filters use three levels — lower, moderate, higher — normalised from the AKC&apos;s
              published trait scale. FaunaHub stores the band and never a score, because a registry
              trait scale is an editorial judgement rather than a measurement, and re-publishing it
              as a number would imply a precision it never had. &ldquo;Trainability&rdquo; describes
              how readily a breed is said to respond to structured training, not intelligence.
              &ldquo;Shedding&rdquo; is not an allergy signal: no breed is hypoallergenic. Adult size
              is banded from published weight, and each profile shows the measurements themselves.
            </p>
            <p className="text-sm text-[#5E6B63] leading-relaxed">
              Full definitions are in FaunaHub&apos;s{" "}
              <Link href="/dogs/breeds">Dog Breed Center</Link>, and every profile links the registry
              page each value came from.
            </p>
          </section>

          <div className="mt-8 max-w-3xl">
            <DisclaimerBlock type="general" />
          </div>
          <div className="mt-6">
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </main>
    </>
  );
}
