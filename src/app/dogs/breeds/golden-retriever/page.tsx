import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Golden Retriever — Breed Overview, Care & Household Fit";
const description =
  "Golden Retriever breed profile: cautious overview of temperament tendencies, exercise and grooming needs, training notes, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/golden-retriever",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "golden-retriever"),
});

export default function GoldenRetrieverPage() {
  return (
    <BreedProfileLayout
      breedName="Golden Retriever"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/golden-retriever"
      tags={["Dog", "Retriever", "Sporting Group"]}
      image={getBreedHeroImage("dog", "golden-retriever") ?? undefined}
      intro={
        <>
          <p>
            The Golden Retriever is a medium-to-large sporting breed
            originally developed in Scotland in the 19th century as a
            hunting retriever. Modern Goldens are often described as
            sociable, eager to please, and active. Temperament and
            behaviour vary between individuals, lines, and training.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Goldens have a dense, water-repellent double coat in shades
            from light cream to dark gold, with a feathered tail and
            distinctive friendly expression. Show-line and working-line
            Goldens often differ in coat length and overall build, and
            adult body weights vary substantially across responsible
            breeders.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            Goldens are widely described as people-oriented and eager to
            engage. Some individuals are calm and gentle; others are very
            high-energy through young adulthood. Like all dogs, behaviour
            depends on socialisation, training, environment, exercise
            outlets, and the experience of the people around the dog.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Goldens benefit from substantial daily activity — walks,
            off-lead exercise in safe environments, and mental enrichment
            such as scent work or fetch. Many Goldens enjoy swimming.
            Bored or under-exercised dogs of this breed often develop
            unwanted behaviours.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The long double coat sheds year-round, with heavier seasonal
            sheds. Regular brushing several times a week, periodic baths,
            and routine ear/dental/nail care help keep the coat and skin
            in good condition. The feathered legs and tail can pick up
            mud and debris, so wipe-downs after outdoor activity are
            common.
          </p>
        </>
      }
      training={
        <>
          <p>
            Goldens are often described as trainable, with positive-
            reinforcement methods working well for many individuals. Early
            socialisation with people, other dogs, and varied environments
            matters for any breed.
          </p>
        </>
      }
      health={
        <>
          <p>
            Like all breeds, Goldens can be affected by inherited and
            lifestyle health conditions. Responsible breeders typically
            screen for joint and other concerns; rescues and shelters may
            have varying levels of background information. FaunaHub does
            not list specific medical conditions or treatments; discuss
            preventive care with a licensed veterinarian.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for a long-term commitment — many large dogs live well
            beyond a decade — and for substantial recurring costs
            including food, preventive vet care, grooming, training, and
            potentially emergency care. Reputable shelters, rescues, and
            responsible breeders are appropriate sources; avoid
            pet-store or unverified online sellers.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Sporting / Gun dog" },
        { label: "Size", value: "Medium to large" },
        { label: "Coat", value: "Long, water-repellent double coat" },
        { label: "Energy", value: "Often high — needs daily exercise" },
        { label: "Grooming", value: "Regular brushing recommended" },
        { label: "Trainability", value: "Often considered trainable; varies by individual" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific dog" },
      ]}
      faqs={[
        {
          question: "Are Golden Retrievers good with families?",
          answer:
            "Goldens are widely described as people-oriented, but no breed is universally safe with children, and behaviour varies by individual, age, training, and household. Adult supervision and gentle handling matter for any breed.",
        },
        {
          question: "How much exercise does a Golden Retriever need?",
          answer:
            "Most Goldens benefit from substantial daily exercise as adults; puppies and senior dogs have different needs. Discuss specifics with your veterinarian for an individual dog.",
        },
        {
          question: "Do Goldens shed a lot?",
          answer:
            "Yes — Goldens have a long double coat that sheds year-round, with heavier seasonal sheds. Regular brushing helps manage this. No breed is fully non-shedding.",
        },
        {
          question: "Are Goldens hypoallergenic?",
          answer:
            "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing.",
        },
      ]}
      relatedLinks={[
        { label: "Labrador Retriever profile", href: "/dogs/breeds/labrador-retriever" },
        { label: "Best family dogs", href: "/dogs/breeds/best-family-dogs" },
        { label: "Best dogs for first-time owners", href: "/dogs/breeds/best-dogs-for-first-time-owners" },
        { label: "Pet breed selector", href: "/tools/pet-breed-selector" },
        { label: "Dog cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Dog health hub", href: "/dogs/health" },
      ]}
      sources={[AKC_BREEDS, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
