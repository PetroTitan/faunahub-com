import Image from "next/image";
import Link from "next/link";
import { getBreedHeroImage } from "@/lib/images/breed-images";
import { ORDINAL_LABEL, breedPath, type Breed, type BreedSpecies } from "@/lib/pet-intelligence";

interface BreedProfileGridProps {
  species: BreedSpecies;
  breeds: readonly Breed[];
  /** Section heading text. Defaults to "<Species> breed profiles". */
  heading?: string;
  /** Hide the cautionary intro where the surrounding page already carries it. */
  compact?: boolean;
}

/**
 * Grid of breed cards, rendered straight from registry records.
 *
 * The card's second line is structured — registry group and adult size, or
 * coat length where no size is published — rather than a snippet of prose.
 * That is what lets the same component serve the hub and the Finder results
 * without the two disagreeing about what a breed is.
 */
export default function BreedProfileGrid({
  species,
  breeds,
  heading,
  compact = false,
}: BreedProfileGridProps) {
  const speciesWord = species === "dog" ? "dog" : "cat";
  const sectionTitle = heading ?? `${species === "dog" ? "Dog" : "Cat"} breed profiles`;

  return (
    <section aria-labelledby="breed-profile-grid-heading" className={compact ? "" : "mt-12"}>
      <h2
        id="breed-profile-grid-heading"
        className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-3"
      >
        {sectionTitle}
      </h2>
      {!compact && (
        <p className="text-sm text-[#5E6B63] mb-6 max-w-3xl">
          Every profile carries registry-sourced measurements and recognition alongside its written
          overview. Breed tendencies are not guarantees — individual animals vary by genetics,
          training, socialisation, health, and household environment. Spend time with a specific{" "}
          {speciesWord} before deciding.
        </p>
      )}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none p-0 m-0">
        {breeds.map((breed) => {
          const img = getBreedHeroImage(breed.species, breed.slug);
          const group = breed.recognition.find(
            (r) => r.registryId === "akc" || r.registryId === "cfa",
          )?.registryGroup;
          const cap = (v: string) => v.charAt(0).toUpperCase() + v.slice(1);
          const detail = [
            breed.sizeClass ? cap(breed.sizeClass) : undefined,
            breed.coat?.length ? `${cap(breed.coat.length)} coat` : undefined,
          ]
            .filter(Boolean)
            .join(" · ");
          const exercise = breed.traits.exerciseNeeds;
          return (
            <li key={breed.id}>
              <Link
                href={breedPath(breed)}
                className="card overflow-hidden hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline flex flex-col h-full"
              >
                <div className="relative w-full aspect-[4/3] bg-[#EFF1EB] border-b border-[#DDE6DD] overflow-hidden">
                  {img ? (
                    <Image
                      src={img.localPath}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center text-2xl text-[#8A958E]"
                    >
                      {breed.name.slice(0, 1)}
                    </span>
                  )}
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors m-0">
                      {breed.name}
                    </h3>
                    {detail ? <p className="text-xs text-[#5E6B63] mt-1 mb-0">{detail}</p> : null}
                    {group && (
                      <p className="text-[11px] text-[#8A958E] mt-0.5 mb-0 truncate" title={group}>
                        {group}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-medium text-[#063F2A] block">
                    {exercise ? `${ORDINAL_LABEL[exercise.value]} exercise →` : "Read profile →"}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
