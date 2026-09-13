import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import BreedProfileGrid from "@/components/breeds/BreedProfileGrid";
import BreedDirectory from "@/components/breeds/BreedDirectory";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import {
  breedFinderPath,
  breedHubPath,
  breedPath,
  type Breed,
  type BreedSpecies,
} from "@/lib/pet-intelligence";
import {
  collectionPath,
  relatedCollections,
  type BreedCollection,
} from "@/lib/pet-intelligence/collections";

const SITE = "https://faunahub.com";

/**
 * A breed collection page: one registry query, rendered.
 *
 * The page is deliberately shaped like a CATEGORY rather than an article. It
 * leads with what the membership test is, shows a bounded card grid, then lists
 * every member as plain crawlable links — the same split the Breed Center uses,
 * for the same reason: a collection can have 143 members and must not put 143
 * images into the initial HTML.
 *
 * Members are alphabetical and there is no score column. A "Dog Breeds With
 * Higher Grooming Needs" page that ordered its members would be asserting a
 * ranking within a band that the three-level data cannot support.
 */
export default function BreedCollectionView({
  collection,
  members,
  lastUpdated,
}: {
  collection: BreedCollection;
  members: Breed[];
  lastUpdated: string;
}) {
  const species: BreedSpecies = collection.species;
  const speciesLabel = species === "dog" ? "Dogs" : "Cats";
  const speciesWord = species === "dog" ? "dog" : "cat";
  const hubLabel = species === "dog" ? "Dog Breeds" : "Cat Breeds";
  const related = relatedCollections(collection);
  const CARDS = 12;

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: speciesLabel, url: `${SITE}/${species}s` },
      { name: hubLabel, url: `${SITE}${breedHubPath(species)}` },
      { name: collection.title, url: `${SITE}${collectionPath(collection)}` },
    ]),
    itemListSchema(
      members.map((breed, i) => ({
        name: breed.name,
        url: `${SITE}${breedPath(breed)}`,
        position: i + 1,
      })),
    ),
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
              { label: hubLabel, href: breedHubPath(species) },
              { label: collection.title },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mt-2 mb-3 leading-tight">
            {collection.title}
          </h1>
          <p className="text-[#2C3A2F] max-w-3xl leading-relaxed">
            {members.length} {speciesWord} breed{members.length === 1 ? "" : "s"} match.{" "}
            {collection.description}
          </p>

          <section className="not-prose mt-5 border border-[#DDE6DD] rounded-xl bg-white overflow-hidden max-w-3xl">
            <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider px-5 py-2.5 bg-[#EFF4E0] border-b border-[#DDE6DD] m-0">
              How this list is decided
            </h2>
            <p className="px-5 py-4 text-sm text-[#2C3A2F] leading-relaxed m-0">
              {collection.methodology}
            </p>
          </section>

          <div className="not-prose mt-4 border-l-4 border-l-[#7BAA35] bg-[#EFF4E0]/60 p-5 rounded-r-xl max-w-3xl">
            <p className="text-sm text-[#2C3A2F] leading-relaxed m-0">
              <strong className="text-[#063F2A]">This is a category, not a recommendation.</strong>{" "}
              Members are listed alphabetically and nothing here is ranked or scored. Breed
              tendencies describe what a registry records about a breed — not what any individual{" "}
              {speciesWord} will be like. Spend time with a specific animal before deciding.
            </p>
          </div>

          <div className="mt-10">
            <BreedProfileGrid
              species={species}
              breeds={members}
              limit={CARDS}
              heading="In this group"
            />
          </div>

          <BreedDirectory species={species} breeds={members} />

          {related.length > 0 && (
            <section aria-labelledby="related-collections" className="mt-14">
              <h2
                id="related-collections"
                className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-3"
              >
                Related groupings
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={collectionPath(c)}
                      className="card block p-4 hover:border-[#CFE0A8] hover:shadow-sm transition-all hover:no-underline"
                    >
                      <span className="text-sm font-semibold text-[#17211B]">{c.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12 max-w-3xl">
            <h2 className="text-xl font-semibold text-[#17211B] mb-2">Keep exploring</h2>
            <ul className="text-sm space-y-1.5">
              <li>
                <Link href={breedHubPath(species)}>All {speciesWord} breeds</Link> — the complete
                A–Z directory
              </li>
              <li>
                <Link href={breedFinderPath(species)}>
                  {species === "dog" ? "Dog" : "Cat"} Breed Finder
                </Link>{" "}
                — combine this filter with others
              </li>
            </ul>
          </section>

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
