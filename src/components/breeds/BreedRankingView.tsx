import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { breedHubPath, breedPath, type BreedSpecies } from "@/lib/pet-intelligence";
import { rankingPath, type BreedRanking, type RankingResult } from "@/lib/pet-intelligence/rankings";

const SITE = "https://faunahub.com";

/**
 * A measured ranking page.
 *
 * Every row shows the RANGE it was ordered by, not just a position. That is the
 * design's whole point: breed standards overlap constantly, and a bare ordered
 * list invites a reader to believe #4 is meaningfully taller than #9 when their
 * published ranges may overlap almost entirely.
 *
 * The excluded count is rendered too. A ranking that quietly dropped a third of
 * the corpus would read as complete.
 */
export default function BreedRankingView({
  ranking,
  result,
  lastUpdated,
}: {
  ranking: BreedRanking;
  result: RankingResult;
  lastUpdated: string;
}) {
  const species: BreedSpecies = ranking.species;
  const speciesLabel = species === "dog" ? "Dogs" : "Cats";
  const speciesWord = species === "dog" ? "dog" : "cat";
  const hubLabel = species === "dog" ? "Dog Breeds" : "Cat Breeds";

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: speciesLabel, url: `${SITE}/${species}s` },
      { name: hubLabel, url: `${SITE}${breedHubPath(species)}` },
      { name: ranking.title, url: `${SITE}${rankingPath(ranking)}` },
    ]),
    itemListSchema(
      result.rows.map((row, i) => ({
        name: row.breed.name,
        url: `${SITE}${breedPath(row.breed)}`,
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
              { label: ranking.title },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mt-2 mb-3 leading-tight">
            {ranking.title}
          </h1>
          <p className="text-[#2C3A2F] max-w-3xl leading-relaxed">{ranking.description}</p>

          <section className="not-prose mt-5 border border-[#DDE6DD] rounded-xl bg-white overflow-hidden max-w-3xl">
            <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider px-5 py-2.5 bg-[#EFF4E0] border-b border-[#DDE6DD] m-0">
              Methodology, and what this ranking cannot tell you
            </h2>
            <p className="px-5 py-4 text-sm text-[#2C3A2F] leading-relaxed m-0">
              {ranking.methodology}
            </p>
            <p className="px-5 pb-4 text-sm text-[#5E6B63] leading-relaxed m-0">
              {result.excluded.length} {speciesWord} breed{result.excluded.length === 1 ? "" : "s"} in FaunaHub&apos;s registry are{" "}
              <strong>excluded</strong> from this ranking because their standard gives no
              comparable figure. They are not at the bottom of the list — they are not on it.
            </p>
          </section>

          {result.notableExclusions.length > 0 && (
            <section
              aria-labelledby="notable-exclusions"
              className="not-prose mt-4 border border-[#E3D4A8] rounded-xl bg-[#FBF7EA] p-5 max-w-3xl"
            >
              <h2
                id="notable-exclusions"
                className="text-sm font-semibold text-[#6B5310] uppercase tracking-wider m-0 mb-2"
              >
                Breeds you might expect here, and why they are not
              </h2>
              <p className="text-sm text-[#2C3A2F] leading-relaxed m-0 mb-3">
                These {speciesWord} breeds would plausibly belong at this end of the list, but their
                standard publishes only one side of the figure — so there is no second end to order
                them on. Their published wording is given so you can place them yourself.
              </p>
              <ul className="text-sm space-y-1.5 list-none p-0 m-0">
                {result.notableExclusions.map(({ breed, statedAs }) => (
                  <li key={breed.id} className="text-[#2C3A2F]">
                    <Link href={breedPath(breed)}>{breed.name}</Link>
                    <span className="text-[#5E6B63]"> — {statedAs.join("; ")}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[34rem]">
              <caption className="sr-only">{ranking.title}</caption>
              <thead>
                <tr className="text-left text-[#5E6B63] border-b border-[#DDE6DD]">
                  <th scope="col" className="py-2 pr-3 font-medium w-10">
                    #
                  </th>
                  <th scope="col" className="py-2 pr-3 font-medium">
                    Breed
                  </th>
                  <th scope="col" className="py-2 pr-3 font-medium whitespace-nowrap">
                    {ranking.columnLabel}
                  </th>
                  <th scope="col" className="py-2 font-medium">
                    As published
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAF0EA]">
                {result.rows.map((row, i) => (
                  <tr key={row.breed.id}>
                    <td className="py-2.5 pr-3 text-[#5E6B63] tabular-nums">{i + 1}</td>
                    <th scope="row" className="py-2.5 pr-3 font-medium text-left">
                      <Link href={breedPath(row.breed)}>{row.breed.name}</Link>
                    </th>
                    <td className="py-2.5 pr-3 text-[#17211B] whitespace-nowrap tabular-nums">
                      {row.min === row.max
                        ? `${row.min} ${ranking.unit}`
                        : `${row.min}–${row.max} ${ranking.unit}`}
                    </td>
                    <td className="py-2.5 text-[#5E6B63]">
                      {row.statedAs.join("; ")}
                      {/*
                        A breed with several published figures was ordered on ONE of
                        them. Without this the American Eskimo Dog's position looks
                        like a statement about the breed rather than about its toy
                        variety's floor.
                      */}
                      {row.multiBasis && row.orderedOn && (
                        <span className="block mt-0.5 text-xs text-[#5E6B63]">
                          Ordered on “{row.orderedOn}”
                        </span>
                      )}
                      {row.pointFigure && (
                        <span className="block mt-0.5 text-xs text-[#5E6B63]">
                          A single published figure, not a range
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="not-prose mt-8 border-l-4 border-l-[#7BAA35] bg-[#EFF4E0]/60 p-5 rounded-r-xl max-w-3xl">
            <p className="text-sm text-[#2C3A2F] leading-relaxed m-0">
              <strong className="text-[#063F2A]">This ranks standards, not animals.</strong> A
              breed standard describes an ideal, and individual {speciesWord}s routinely fall
              outside it. Two breeds a few places apart usually have overlapping published ranges —
              the range column is there so you can see that rather than infer a difference the data
              does not support. Where a standard gives one figure rather than a range, that row says
              so — a point figure is placed against other breeds&apos; range ends, which is the
              closest comparison available and not a like-for-like one.
            </p>
          </div>

          <section className="mt-10 max-w-3xl">
            <h2 className="text-xl font-semibold text-[#17211B] mb-2">Keep exploring</h2>
            <ul className="text-sm space-y-1.5">
              <li>
                <Link href={breedHubPath(species)}>All {speciesWord} breeds</Link>
              </li>
              <li>
                <Link href={`/${species}s/breed-finder`}>
                  {species === "dog" ? "Dog" : "Cat"} Breed Finder
                </Link>
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
