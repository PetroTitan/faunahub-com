import Link from "next/link";
import { breedPath, type Breed, type BreedSpecies } from "@/lib/pet-intelligence";

/**
 * The complete, crawlable A–Z index of every published breed.
 *
 * This is the load-bearing discovery surface, and it is deliberately plain text.
 *
 * The rich card grid above it renders a BOUNDED window, because 300 cards means
 * 300 `next/image` elements in the initial HTML — an unacceptable payload and an
 * unusable accessibility tree. But bounding the cards must not bound
 * DISCOVERY: if the only route to breed 250 were a "Load more" button, that
 * breed would be reachable by a crawler only through the sitemap, and by a
 * keyboard user only after 200 tab stops.
 *
 * So every breed appears here, as an ordinary server-rendered `<a href>`, with
 * no image and no JavaScript. At 300 breeds this is roughly 12 KB of markup —
 * about the cost of four card images — and it is what lets the card grid stay
 * small without hiding anything.
 */
export default function BreedDirectory({
  species,
  breeds,
}: {
  species: BreedSpecies;
  breeds: readonly Breed[];
}) {
  const sorted = [...breeds].sort((a, b) => a.name.localeCompare(b.name));

  const groups = new Map<string, Breed[]>();
  for (const breed of sorted) {
    const first = breed.name.charAt(0).toUpperCase();
    // Anything not A–Z shares one bucket rather than creating a letter nobody
    // can navigate to.
    const letter = /[A-Z]/.test(first) ? first : "#";
    const bucket = groups.get(letter);
    if (bucket) bucket.push(breed);
    else groups.set(letter, [breed]);
  }
  const letters = [...groups.keys()].sort((a, b) =>
    a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b),
  );

  const speciesWord = species === "dog" ? "dog" : "cat";

  return (
    <section aria-labelledby="breed-directory-heading" className="mt-14">
      <h2
        id="breed-directory-heading"
        className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-2"
      >
        Every {speciesWord} breed, A–Z
      </h2>
      <p className="text-sm text-[#5E6B63] mb-5 max-w-3xl">
        All {breeds.length} published {speciesWord} breed profiles. Every entry is a plain link —
        nothing here needs JavaScript, and nothing is hidden behind a button.
      </p>

      <nav aria-label={`Jump to a letter in the ${speciesWord} breed directory`} className="mb-6">
        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
          {letters.map((letter) => (
            <li key={letter}>
              <a
                href={`#breeds-${letter === "#" ? "other" : letter.toLowerCase()}`}
                className="inline-flex items-center justify-center min-w-[36px] min-h-[36px] px-2 rounded-lg border border-[#DDE6DD] bg-white text-sm font-semibold text-[#063F2A] hover:border-[#7BAA35] hover:no-underline"
              >
                {letter}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-6">
        {letters.map((letter) => {
          const id = `breeds-${letter === "#" ? "other" : letter.toLowerCase()}`;
          const bucket = groups.get(letter) ?? [];
          return (
            <div key={letter} id={id} className="scroll-mt-24">
              <h3 className="text-sm font-bold text-[#063F2A] uppercase tracking-wider border-b border-[#DDE6DD] pb-1.5 mb-3">
                {letter === "#" ? "Other" : letter}
                <span className="ml-2 font-medium text-[#5E6B63] normal-case tracking-normal">
                  {bucket.length}
                </span>
              </h3>
              <ul className="columns-2 sm:columns-3 lg:columns-4 gap-x-6 list-none p-0 m-0">
                {bucket.map((breed) => (
                  <li key={breed.id} className="break-inside-avoid mb-1.5">
                    <Link
                      href={breedPath(breed)}
                      className="text-sm text-[#2C3A2F] hover:text-[#063F2A] underline decoration-transparent hover:decoration-[#7BAA35] underline-offset-2 transition-colors"
                    >
                      {breed.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
