import type { ReactNode } from "react";
import BreedProfileLayout, { type BreedFact } from "@/components/BreedProfileLayout";
import BreedAttributes from "@/components/breeds/BreedAttributes";
import { getBreedHeroImage } from "@/lib/images/breed-images";
import { AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import type { SourceLink } from "@/lib/educational/types";
import {
  ORDINAL_LABEL,
  breedFinderPath,
  breedHubPath,
  breedPath,
  formatLifespan,
  getBreedSource,
  getRegistry,
  relatedBreeds,
  span,
  type Breed,
  type Prose,
} from "@/lib/pet-intelligence";

/**
 * Renders one breed from its registry record.
 *
 * This is the ONLY breed profile renderer. The fourteen breed pages that
 * previously existed as hand-written TSX now come through here, which is what
 * makes a registry of hundreds of breeds possible without hundreds of files —
 * and, more importantly, what makes it impossible for two breed pages to
 * describe the same attribute in two different vocabularies.
 */

function paragraphs(prose: Prose | undefined): ReactNode {
  if (!prose?.length) return null;
  return (
    <>
      {prose.map((text) => (
        <p key={text.slice(0, 48)}>{text}</p>
      ))}
    </>
  );
}

/**
 * Sidebar facts, derived from the structured record.
 *
 * Before this migration these were hand-typed per page, which is why the dog
 * pages carried "Energy" and the cat pages carried "Activity" for the same
 * idea, and why every one of the fourteen said "Typical lifespan: Verify with a
 * veterinarian" — a row that answered nothing. Deriving them means the label
 * set is identical across every breed, and a row appears only when there is a
 * value behind it.
 */
function quickFacts(breed: Breed): BreedFact[] {
  const facts: BreedFact[] = [];
  const group = breed.recognition.find(
    (r) => r.registryId === "akc" || r.registryId === "cfa",
  );
  if (group?.registryGroup) {
    const registry = getRegistry(group.registryId);
    facts.push({
      label: `${registry?.shortName ?? group.registryId} group`,
      value: group.registryGroup,
    });
  }
  if (breed.originCountries?.length) {
    facts.push({ label: "Origin", value: breed.originCountries.join(" · ") });
  }
  if (breed.sizeClass) {
    const weights = breed.measurements?.weightKg;
    const { min, max } = span(weights);
    const range =
      min !== undefined && max !== undefined
        ? ` (${min}–${max} kg)`
        : max !== undefined
          ? ` (up to ${max} kg)`
          : min !== undefined
            ? ` (over ${min} kg)`
            : "";
    facts.push({ label: "Adult size", value: `${label(breed.sizeClass)}${range}` });
  }
  if (breed.coat?.length) {
    facts.push({
      label: "Coat",
      value: breed.coat.types?.length
        ? `${label(breed.coat.length)} · ${breed.coat.types.join(", ")}`
        : label(breed.coat.length),
    });
  }
  for (const [key, label] of [
    ["exerciseNeeds", "Exercise needs"],
    ["groomingNeeds", "Grooming needs"],
    ["shedding", "Shedding"],
    ["trainability", "Trainability"],
    ["vocality", "Vocality"],
  ] as const) {
    const trait = breed.traits[key];
    if (trait) facts.push({ label, value: ORDINAL_LABEL[trait.value] });
  }
  if (breed.lifespanYears) {
    facts.push({ label: "Published lifespan", value: formatLifespan(breed.lifespanYears) });
  }
  return facts;
}

/** Sentence-cases a controlled-vocabulary value for display. */
function label(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function sourceLinks(breed: Breed): SourceLink[] {
  const links: SourceLink[] = breed.sources
    .map((id) => getBreedSource(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({
      label: `${s.organization} — ${s.title}`,
      url: s.url,
      type: "breed-organization" as const,
      note: `${s.scope} Accessed ${s.accessedAt}.`,
    }));
  // A veterinary reference sits alongside the registries on every breed page,
  // because the registries are authorities on breed standards and are not
  // authorities on care decisions for an individual animal.
  links.push(AVMA_PET_CARE);
  return links;
}

export default function BreedProfileView({
  breed,
  pageTitle,
  description,
  tags,
}: {
  breed: Breed;
  pageTitle: string;
  description: string;
  tags: string[];
}) {
  const image = getBreedHeroImage(breed.species, breed.slug);
  const related = relatedBreeds(breed);
  const speciesWord = breed.species === "dog" ? "dog" : "cat";

  return (
    <BreedProfileLayout
      breedName={breed.name}
      species={breed.species}
      pageTitle={pageTitle}
      description={description}
      path={breedPath(breed)}
      tags={tags}
      image={image ?? undefined}
      intro={paragraphs(breed.editorial.intro)}
      structuredSection={<BreedAttributes breed={breed} />}
      appearance={paragraphs(breed.editorial.appearance)}
      temperament={
        <>
          {paragraphs(breed.editorial.temperament)}
          {breed.editorial.householdContext?.length ? (
            <>
              <h3>Household considerations</h3>
              {paragraphs(breed.editorial.householdContext)}
            </>
          ) : null}
        </>
      }
      hasHouseholdContext={Boolean(breed.editorial.householdContext?.length)}
      activity={paragraphs(breed.editorial.activity)}
      grooming={paragraphs(breed.editorial.grooming)}
      training={
        breed.editorial.training?.length ? paragraphs(breed.editorial.training) : undefined
      }
      health={paragraphs(breed.editorial.health)}
      responsibility={paragraphs(breed.editorial.responsibility)}
      quickFacts={quickFacts(breed)}
      faqs={breed.editorial.faqs}
      relatedLinks={[
        ...related.map((b) => ({
          label: `${b.name} profile`,
          href: breedPath(b),
        })),
        {
          label: `All ${speciesWord} breeds`,
          href: breedHubPath(breed.species),
        },
        {
          label: `${breed.species === "dog" ? "Dog" : "Cat"} Breed Finder`,
          href: breedFinderPath(breed.species),
        },
        {
          label: breed.species === "dog" ? "Dog health hub" : "Cat health hub",
          href: breed.species === "dog" ? "/dogs/health" : "/cats/health",
        },
        {
          label: breed.species === "dog" ? "Dog food & nutrition" : "Cat food & nutrition",
          href: breed.species === "dog" ? "/dogs/food" : "/cats/food",
        },
      ]}
      sources={sourceLinks(breed)}
      publishedDate={breed.publishedAt}
      modifiedDate={breed.reviewedAt}
    />
  );
}

