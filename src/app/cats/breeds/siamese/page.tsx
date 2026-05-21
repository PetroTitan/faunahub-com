import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AVMA_PET_CARE, CORNELL_FELINE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Siamese — Cat Breed Overview, Care & Household Fit";
const description =
  "Siamese cat breed profile: cautious overview of temperament tendencies, colourpoint coat, vocal style, activity needs, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/cats/breeds/siamese",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("cat", "siamese"),
});

export default function SiamesePage() {
  return (
    <BreedProfileLayout
      breedName="Siamese"
      species="cat"
      pageTitle={title}
      description={description}
      path="/cats/breeds/siamese"
      tags={["Cat", "Shorthair", "Colourpoint"]}
      image={getBreedHeroImage("cat", "siamese") ?? undefined}
      intro={
        <>
          <p>
            The Siamese is one of the oldest recognised cat breeds, with
            roots in Thailand. Modern Siamese cats are often described as
            social, vocal, and people-oriented, with the breed&apos;s
            familiar colourpoint coat and blue eyes. Both traditional and
            modern (more slender) body types exist depending on registry
            and breeder.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Siamese cats are slim to athletically built, with a short
            single-layer coat and the classic colourpoint pattern —
            darker on the face, ears, paws, and tail — over a lighter
            body. Blue eyes are a defining feature. Coat-point colours
            include seal, blue, chocolate, lilac, and other recognised
            variations.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            The breed is often described as sociable, talkative, and
            attached to its people. Some Siamese cats prefer constant
            interaction; others are more independent. As with every
            breed, behaviour varies by individual, socialisation, and
            household.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Many Siamese cats benefit from interactive play, climbing
            opportunities, and consistent engagement with their people.
            The breed is often described as more active than average and
            may not thrive in households where it spends long stretches
            alone.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The short coat is low-maintenance compared with longhaired
            breeds — typically weekly brushing is enough. Routine dental,
            nail, and ear care are sensible parts of any Siamese routine.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Siamese cats can be affected by inherited
            and lifestyle health conditions. Discuss preventive care and
            any specific concerns with a licensed veterinarian. FaunaHub
            does not list specific medical conditions or treatments.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for a sociable, often vocal cat that does best with
            consistent daily interaction. Reputable shelters, rescues,
            and breeders are appropriate sources. Households that travel
            often or work very long hours should plan reliable care.
          </p>
        </>
      }
      quickFacts={[
        { label: "Origin", value: "Thailand (long established)" },
        { label: "Coat", value: "Short, single-layer; colourpoint" },
        { label: "Eye colour", value: "Blue (breed characteristic)" },
        { label: "Activity", value: "Often above-average for cats" },
        { label: "Vocal", value: "Often described as talkative" },
        { label: "Grooming", value: "Low (weekly brushing typically enough)" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific cat" },
      ]}
      faqs={[
        {
          question: "Are Siamese cats talkative?",
          answer:
            "The breed is widely described as vocal — many Siamese cats use their voice frequently with people. Individual variation is substantial; spend time with a specific cat before deciding if this trait fits your household.",
        },
        {
          question: "Are Siamese cats hypoallergenic?",
          answer:
            "No cat breed is fully hypoallergenic. Allergens come from skin and saliva as well as fur. Anyone with allergies should spend time with a specific cat before committing.",
        },
        {
          question: "Do Siamese cats need a companion?",
          answer:
            "Some Siamese cats are described as preferring company — another cat or attentive human household — and may not thrive in long-alone homes. Individual personality matters; discuss with a shelter or breeder.",
        },
        {
          question: "What is the difference between traditional and modern Siamese?",
          answer:
            "Different registries recognise different body-type variations of the breed, from rounder 'traditional' types to more slender modern types. They are the same breed under most major registries; specifics vary by registry.",
        },
      ]}
      relatedLinks={[
        { label: "Bengal cat profile", href: "/cats/breeds/bengal-cat" },
        { label: "Ragdoll profile", href: "/cats/breeds/ragdoll" },
        { label: "Best cats for first-time owners", href: "/cats/breeds/best-cats-for-first-time-owners" },
        { label: "Cat cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Cat health hub", href: "/cats/health" },
        { label: "Pet breed selector", href: "/tools/pet-breed-selector" },
      ]}
      sources={[CORNELL_FELINE, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
