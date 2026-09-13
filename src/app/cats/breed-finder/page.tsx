import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import BreedFinderClient from "@/app/dogs/breed-finder/BreedFinderClient";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { finderBreeds, finderFacets, withheldFacets } from "@/lib/pet-intelligence/finder";

const LAST_UPDATED = "2026-09-13";

export const metadata: Metadata = buildMetadata({
  title: "Cat Breed Finder — Filter Cat Breeds by Coat Length",
  description:
    "Filter FaunaHub's cat breed registry by coat length. Cat breed standards publish no numeric size or trait scores, so this Finder offers one honest filter rather than several invented ones.",
  path: "/cats/breed-finder",
});

/**
 * The cat Finder ships ONE filter, and says so.
 *
 * That is the coverage gate working rather than failing. Cat breed standards
 * describe size qualitatively — every one of the eight CFA standards behind
 * this registry was checked and none publishes a weight or height — and CFA
 * publishes no trait scale at all. Coat length is the only axis with real data
 * behind it, so it is the only axis offered.
 *
 * The alternative was to estimate cat weights from secondary sources and ship
 * a size filter that looked like the dog one. That would have been the single
 * most damaging thing this sprint could have built: a filter whose values no
 * registry stands behind, presented identically to filters that are sourced.
 */
export default function CatBreedFinderPage() {
  const breeds = finderBreeds("cat");
  const facets = finderFacets("cat");
  const withheld = withheldFacets("cat");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://faunahub.com" },
              { name: "Cats", url: "https://faunahub.com/cats" },
              { name: "Cat Breeds", url: "https://faunahub.com/cats/breeds" },
              { name: "Cat Breed Finder", url: "https://faunahub.com/cats/breed-finder" },
            ]),
          ),
        }}
      />
      <main id="main-content">
        <div className="container-content py-10">
          <Breadcrumbs
            items={[
              { label: "Cats", href: "/cats" },
              { label: "Cat Breeds", href: "/cats/breeds" },
              { label: "Cat Breed Finder" },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mt-2 mb-3 leading-tight">
            Cat Breed Finder
          </h1>
          <p className="text-[#2C3A2F] max-w-3xl leading-relaxed">
            Filter FaunaHub&apos;s {breeds.length} cat breed profiles by coat length. That is the
            only filter offered, and the reason is worth stating plainly rather than hiding behind
            a shorter list.
          </p>
          <div className="not-prose mt-5 border-l-4 border-l-[#7BAA35] bg-[#EFF4E0]/60 p-5 rounded-r-xl max-w-3xl">
            <p className="text-sm text-[#2C3A2F] leading-relaxed m-0">
              <strong className="text-[#063F2A]">
                Cat breed standards do not publish numbers.
              </strong>{" "}
              Every CFA standard behind these profiles was checked: none gives a weight or a height
              — the Maine Coon standard says only &ldquo;Size medium to large&rdquo; — and CFA
              publishes no trait scale of the kind the AKC does for dogs. FaunaHub could estimate
              those values from elsewhere and offer a size filter that looked like the dog one. It
              does not, because a filter is a promise that the values behind it are real.
            </p>
          </div>

          <BreedFinderClient breeds={breeds} facets={facets} speciesWord="cat" />

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
            <h2 className="text-xl font-semibold text-[#17211B] mb-2">
              What each profile carries instead
            </h2>
            <p className="text-sm text-[#5E6B63] leading-relaxed">
              Each cat breed page records CFA recognition and the year it was granted, the
              standard&apos;s own coat wording quoted verbatim, and a written overview of
              temperament, activity, grooming, and household considerations. Where a value is
              absent, the page says it is absent and why — a Sphynx profile that quoted an invented
              weight would be worse than one that quotes the standard saying the breed is
              &ldquo;not actually completely hairless&rdquo;.
            </p>
            <p className="text-sm text-[#5E6B63] leading-relaxed">
              Browse everything in the <Link href="/cats/breeds">Cat Breed Center</Link>.
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
