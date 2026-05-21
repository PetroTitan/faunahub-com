import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AVMA_PET_CARE, CORNELL_FELINE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Persian — Cat Breed Overview, Care & Household Fit";
const description =
  "Persian cat breed profile: cautious overview of long-coat care, flat-faced (brachycephalic) considerations, temperament tendencies, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/cats/breeds/persian-cat",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("cat", "persian-cat"),
});

export default function PersianCatPage() {
  return (
    <BreedProfileLayout
      breedName="Persian"
      species="cat"
      pageTitle={title}
      description={description}
      path="/cats/breeds/persian-cat"
      tags={["Cat", "Longhair", "Brachycephalic"]}
      image={getBreedHeroImage("cat", "persian-cat") ?? undefined}
      intro={
        <>
          <p>
            The Persian is a long-coated cat breed with a distinctive
            flat-faced (brachycephalic) profile in many modern lines.
            The breed is often described as calm and affectionate. Coat
            care and breed-specific anatomical considerations make the
            Persian a higher-maintenance choice than most short-haired
            breeds.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Persians are medium-to-large cats with a long, dense
            double coat, a sturdy round body, short legs, and a
            characteristically flat face in most modern lines. Some
            traditional or &quot;doll-face&quot; lines have a less
            extreme facial profile. Recognised coat colours and patterns
            vary widely.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            The breed is widely described as gentle, calm, and
            affectionate, often preferring quiet indoor environments to
            high-energy households. Individual personality varies — some
            Persians are very playful, others very mellow.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Persians need modest daily play and engagement.
            Interactive toys and gentle climbing options work well.
            Avoid stressful or chaotic environments — the breed often
            does best in calmer households.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The long coat needs <em>daily</em> brushing to prevent
            matting, particularly under the legs and around the rear.
            Routine eye care is important in many lines — discuss
            specifics with a veterinarian, especially for any cat with a
            pronounced flat-faced profile. Some owners use professional
            grooming periodically.
          </p>
        </>
      }
      health={
        <>
          <p>
            <strong>Brachycephalic context:</strong> the flat-faced head
            shape is associated with specific care considerations in
            some lines. FaunaHub does not provide diagnosis or
            treatment. Anyone considering this breed should research
            these considerations with a licensed veterinarian and choose
            a breeder or rescue that prioritises health and welfare.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for daily grooming time and budget for veterinary care
            that may include attention to airway, eye, and skin-fold
            health in some lines. Reputable shelters, rescues, and
            responsible breeders are appropriate sources. Avoid pet-store
            or unverified online sellers and be cautious about &quot;rare
            colour&quot; marketing.
          </p>
        </>
      }
      quickFacts={[
        { label: "Origin", value: "Long established" },
        { label: "Coat", value: "Long, dense double coat — high grooming need" },
        { label: "Activity", value: "Often calm to moderate" },
        { label: "Brachycephalic", value: "Many modern lines — discuss with a vet" },
        { label: "Grooming", value: "Daily brushing recommended" },
        { label: "Best for", value: "Calm households ready for daily coat care" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific cat" },
      ]}
      faqs={[
        {
          question: "Do Persians need daily grooming?",
          answer:
            "Most Persians need daily brushing to prevent matting, particularly under the legs and around the rear. Some owners also use periodic professional grooming. Plan time for this if considering the breed.",
        },
        {
          question: "Are Persians good for apartments?",
          answer:
            "Many Persians do well in apartments because of their typically calm activity level, but landlord rules, household noise, and the breed's grooming and veterinary care needs all matter. Spend time with a specific cat before deciding.",
        },
        {
          question: "Are Persians healthy cats?",
          answer:
            "The flat-faced head shape in many modern lines is associated with specific care considerations. FaunaHub does not diagnose or treat. Discuss the breed's care considerations with a licensed veterinarian and choose breeders/rescues that prioritise health.",
        },
        {
          question: "Are Persians hypoallergenic?",
          answer:
            "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing.",
        },
      ]}
      relatedLinks={[
        { label: "British Shorthair profile", href: "/cats/breeds/british-shorthair" },
        { label: "Ragdoll profile", href: "/cats/breeds/ragdoll" },
        { label: "Maine Coon profile", href: "/cats/breeds/maine-coon" },
        { label: "Low-maintenance cat breeds", href: "/cats/breeds/low-maintenance-cat-breeds" },
        { label: "Cat cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Cat health hub", href: "/cats/health" },
      ]}
      sources={[CORNELL_FELINE, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
