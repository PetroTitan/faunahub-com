import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Dachshund — Breed Overview, Care & Household Fit";
const description =
  "Dachshund breed profile: cautious overview of size varieties, temperament tendencies, back-health considerations, grooming, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/dachshund",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "dachshund"),
});

export default function DachshundPage() {
  return (
    <BreedProfileLayout
      breedName="Dachshund"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/dachshund"
      tags={["Dog", "Hound", "Small"]}
      image={getBreedHeroImage("dog", "dachshund") ?? undefined}
      intro={
        <>
          <p>
            The Dachshund — also known as the Teckel or sausage dog — is
            a small German hound originally developed to follow scent
            into burrows. The breed is recognised in standard and
            miniature sizes and in smooth, longhaired, and wirehaired
            coat varieties.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Dachshunds are distinctively long-bodied and short-legged,
            with a deep chest and long head. Their build is iconic but
            also brings specific back-care considerations that should be
            discussed with a veterinarian. Coat colours and patterns
            vary widely between varieties.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            Dachshunds are often described as bold and curious. Some
            individuals are affectionate companions; others can be more
            independent or reserved with strangers. Like all dogs,
            behaviour varies by individual, line, training, and
            household.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Dachshunds benefit from moderate daily exercise spread
            across short walks and play. The breed&apos;s long-back
            anatomy means that high-impact activity — extensive jumping
            on and off furniture, stairs, or rough play — should be
            managed carefully and on veterinary advice.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            Grooming varies sharply by coat variety: smooth Dachshunds
            need minimal coat care, longhaired need regular brushing,
            and wirehaired benefit from periodic hand-stripping or
            professional grooming. All varieties need routine ear,
            dental, and nail care.
          </p>
        </>
      }
      training={
        <>
          <p>
            Dachshunds are often described as cooperative learners with
            positive-reinforcement training, although the breed&apos;s
            independent streak can make consistency more important than
            with very biddable breeds. Short, engaging sessions and
            food-motivated rewards work for many individuals.
          </p>
        </>
      }
      health={
        <>
          <p>
            <strong>Back-health context:</strong> the long-bodied
            build is associated with specific spinal-care considerations
            that should be discussed with a licensed veterinarian. Avoid
            jumping from heights, use ramps where appropriate, manage
            body condition carefully, and follow vet guidance for any
            individual dog. FaunaHub does not provide diagnosis or
            treatment.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for routine veterinary care and weight management as
            ongoing priorities. Reputable shelters, rescues, and
            responsible breeders are appropriate sources. Avoid pet-store
            or unverified online sellers.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Hound (scent hound origin)" },
        { label: "Size varieties", value: "Standard, Miniature" },
        { label: "Coat varieties", value: "Smooth, Longhaired, Wirehaired" },
        { label: "Energy", value: "Often moderate — needs daily exercise" },
        { label: "Back-health context", value: "Discuss long-back care with a veterinarian" },
        { label: "Trainability", value: "Cooperative but can be independent" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific dog" },
      ]}
      faqs={[
        {
          question: "Are Dachshunds good apartment dogs?",
          answer:
            "Many Dachshunds do well in apartments because of their small size and modest exercise needs, but landlord rules, neighbour noise tolerance, stairs, and the breed's back-care considerations all matter. Spend time with a specific dog before deciding.",
        },
        {
          question: "Do Dachshunds bark a lot?",
          answer:
            "The breed is often described as alert and vocal. Some individuals are noticeably barky, others much less so. This matters for apartment living and for shared-wall housing.",
        },
        {
          question: "What about their long backs?",
          answer:
            "The long-bodied build brings spinal-care considerations that should be discussed with a licensed veterinarian. Many owners use ramps to reduce jumping impact, manage body condition carefully, and limit stairs. FaunaHub does not diagnose or treat.",
        },
        {
          question: "Are Dachshunds good with children?",
          answer:
            "Many Dachshunds live happily in families, but no breed is universally child-safe. Behaviour varies by individual, training, supervision, and the child's experience around dogs.",
        },
      ]}
      relatedLinks={[
        { label: "Beagle profile", href: "/dogs/breeds/beagle" },
        { label: "French Bulldog profile", href: "/dogs/breeds/french-bulldog" },
        { label: "Best small dog breeds", href: "/dogs/breeds/best-small-dog-breeds" },
        { label: "Best dogs for apartments", href: "/dogs/breeds/best-dogs-for-apartments" },
        { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Dog health hub", href: "/dogs/health" },
      ]}
      sources={[AKC_BREEDS, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
