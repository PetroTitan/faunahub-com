import Image from "next/image";
import Link from "next/link";
import {
  BREED_IMAGES,
  type BreedSpecies,
} from "@/lib/images/breed-images";

interface BreedCard {
  name: string;
  slug: string;
}

interface BreedProfileGridProps {
  species: BreedSpecies;
  breeds: BreedCard[];
  /** Section heading text. Defaults to "Specific <species> breed profiles". */
  heading?: string;
}

/**
 * Grid of specific dog or cat breed profile cards, rendered below the existing
 * decision-page hub. Each card pulls its image from the breed-images metadata;
 * if a breed has no verified image, the card falls back to a clean monogram so
 * the grid stays visually consistent.
 */
export default function BreedProfileGrid({
  species,
  breeds,
  heading,
}: BreedProfileGridProps) {
  const sectionTitle =
    heading ?? `Specific ${species === "dog" ? "dog" : "cat"} breed profiles`;
  const imageBySlug = Object.fromEntries(
    BREED_IMAGES.filter((img) => img.species === species).map((img) => [
      img.breedSlug,
      img,
    ]),
  );
  const speciesPathPrefix = species === "dog" ? "/dogs/breeds" : "/cats/breeds";

  return (
    <section
      aria-labelledby="breed-profile-grid-heading"
      className="mt-12"
    >
      <h2
        id="breed-profile-grid-heading"
        className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-3"
      >
        {sectionTitle}
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-3xl">
        Breed-specific profiles with cautious framing. Breed tendencies are
        not guarantees — individual animals vary by genetics, training,
        socialisation, health, and household environment. Spend time with
        a specific {species === "dog" ? "dog" : "cat"} before deciding.
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {breeds.map((b) => {
          const img = imageBySlug[b.slug];
          return (
            <li key={b.slug}>
              <Link
                href={`${speciesPathPrefix}/${b.slug}`}
                className="card overflow-hidden hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline flex flex-col"
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
                      {b.name.slice(0, 1)}
                    </span>
                  )}
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <h4 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                    {b.name}
                  </h4>
                  <span className="text-xs font-medium text-[#063F2A] mt-2 block">
                    Read profile →
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
