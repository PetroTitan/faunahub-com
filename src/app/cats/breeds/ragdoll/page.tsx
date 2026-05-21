import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AVMA_PET_CARE, CORNELL_FELINE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Ragdoll — Cat Breed Overview, Care & Household Fit";
const description =
  "Ragdoll cat breed profile: cautious overview of large size, semi-long coat, often relaxed temperament, indoor-living context, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/cats/breeds/ragdoll",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("cat", "ragdoll"),
});

export default function RagdollPage() {
  return (
    <BreedProfileLayout
      breedName="Ragdoll"
      species="cat"
      pageTitle={title}
      description={description}
      path="/cats/breeds/ragdoll"
      tags={["Cat", "Large breed", "Semi-longhair"]}
      image={getBreedHeroImage("cat", "ragdoll") ?? undefined}
      intro={
        <>
          <p>
            The Ragdoll is a large, semi-longhaired cat breed developed
            in the United States in the 1960s. The breed name comes
            from the cat&apos;s often-relaxed body posture when handled,
            though individual cats vary widely. Ragdolls are typically
            kept as indoor companions.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Ragdolls are large cats with a semi-long, plush coat and
            colourpoint markings — the body is paler than the points on
            the face, ears, paws, and tail. Blue eyes are a breed
            characteristic. Recognised patterns include colourpoint,
            mitted, and bicolor.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            The breed is often described as gentle, sociable, and
            comparatively relaxed about handling. Some individuals are
            playful and engaged; others are quieter. As with every
            breed, behaviour depends on individual personality,
            socialisation, and the household.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Ragdolls benefit from regular interactive play and
            climbing options sized appropriately for a large breed.
            Many lines are typically calmer than highly active breeds,
            but they still need engagement to maintain body condition
            and mental wellbeing.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The semi-long coat benefits from several brushing sessions a
            week to prevent matting, particularly in shedding seasons.
            Routine dental, nail, and ear care are sensible parts of
            any Ragdoll routine.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Ragdolls can be affected by inherited
            and lifestyle health conditions. Responsible breeders
            typically test for relevant concerns. FaunaHub does not list
            specific medical conditions or treatments.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for regular grooming, sturdy furniture and climbing
            structures sized for a large breed, and the long-term cost
            of feline veterinary care. Many Ragdolls are kept entirely
            indoors; if any outdoor access is provided, it should be
            in a safe enclosure or under direct supervision. Reputable
            shelters, rescues, and breeders are appropriate sources.
          </p>
        </>
      }
      quickFacts={[
        { label: "Origin", value: "United States (mid-20th century)" },
        { label: "Size", value: "Large" },
        { label: "Coat", value: "Semi-long, plush; colourpoint" },
        { label: "Eye colour", value: "Blue (breed characteristic)" },
        { label: "Activity", value: "Often calm to moderate" },
        { label: "Living context", value: "Typically kept indoors" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific cat" },
      ]}
      faqs={[
        {
          question: "Do Ragdolls really go limp when you pick them up?",
          answer:
            "The breed has a reputation for relaxed handling — the source of the name 'Ragdoll' — but individual cats vary, and 'goes limp' is not a universal trait. Treat handling tolerance as a generalisation, not a guarantee.",
        },
        {
          question: "Are Ragdolls good with children?",
          answer:
            "Many Ragdolls live happily in households with children, but no breed is universally child-safe and individual personality matters. Adult supervision and respect for the cat's space are important for any cat.",
        },
        {
          question: "Are Ragdolls hypoallergenic?",
          answer:
            "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing.",
        },
        {
          question: "Can Ragdolls be outdoor cats?",
          answer:
            "Many breed sources strongly recommend keeping Ragdolls indoors because of their trusting temperament and limited self-defence in many lines. If any outdoor access is provided, a secure 'catio' or supervised harness time is generally safer than free-roaming.",
        },
      ]}
      relatedLinks={[
        { label: "Maine Coon profile", href: "/cats/breeds/maine-coon" },
        { label: "British Shorthair profile", href: "/cats/breeds/british-shorthair" },
        { label: "Best family cats", href: "/cats/breeds/best-family-cats" },
        { label: "Best cats for apartments", href: "/cats/breeds/best-cats-for-apartments" },
        { label: "Cat cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Cat health hub", href: "/cats/health" },
      ]}
      sources={[CORNELL_FELINE, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
