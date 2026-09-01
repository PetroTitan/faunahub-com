/**
 * The parenthesised binomial beside an animal's name in its <h1>.
 *
 * This component exists for a reason that is not visual: it makes a profile's
 * scientific name MACHINE-READABLE without changing a pixel.
 *
 * FaunaHub has two kinds of animal profile. Pages built on
 * `AnimalProfileLayout` pass `scientificName` as a prop, and
 * `scripts/lib/harvest-page-metadata.mjs` reads that JSX attribute at build
 * time to populate the search and Animal Finder indexes. Bespoke pages —
 * profiles that hand-roll their own layout — used to write the same thing as
 * literal JSX:
 *
 *   <h1>Lion <span className="italic …">(Panthera leo)</span></h1>
 *
 * which renders identically and harvests as NOTHING. The harvester reads
 * attributes, not prose, and that is deliberate: FaunaHub's group-level pages
 * ("Butterfly", "Shark", "Crocodile") also print a binomial — a REFERENCE
 * species shown under an explicit `factsHeaderNote` disclaimer — and scraping
 * those out of the text would turn a hedged example into a false claim that the
 * page is that species. So the absence of an attribute is the safe default.
 *
 * The cost of that safe default was that 109 of 642 profiles had no scientific
 * name in the index, and searching "Panthera leo" returned nothing at all. This
 * component closes the gap for the profiles where a single binomial IS the
 * page's subject, by giving a bespoke <h1> the same declarative surface the
 * shared layout already has. Output is byte-identical to the markup it
 * replaces; only the index changes.
 *
 * WHEN NOT TO USE THIS: never on a page that covers a genus, family or order.
 * Those pages state their rank in the <h1> instead — "Skunk (family
 * Mephitidae)", "Weasel (genus Mustela)" — and must keep no `scientificName`,
 * so that search never presents a group page as a species. Both rules are
 * enforced by tests/scientific-names.test.ts.
 */
export default function ScientificName({
  scientificName,
}: {
  /** A species binomial, e.g. "Panthera leo". Never a genus, family or order. */
  scientificName: string;
}) {
  return (
    <span className="italic font-normal text-[#5E6B63]">({scientificName})</span>
  );
}
