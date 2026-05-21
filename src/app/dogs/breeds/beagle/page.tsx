import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Beagle — Breed Overview, Care & Household Fit";
const description =
  "Beagle breed profile: cautious overview of temperament tendencies, exercise needs, grooming, training, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/beagle",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "beagle"),
});

export default function BeaglePage() {
  return (
    <BreedProfileLayout
      breedName="Beagle"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/beagle"
      tags={["Dog", "Hound", "Small to medium"]}
      image={getBreedHeroImage("dog", "beagle") ?? undefined}
      intro={
        <>
          <p>
            The Beagle is a small-to-medium scent hound originally
            developed for hunting in packs. Modern Beagles are often
            described as friendly and curious, with a strong nose. As
            with all breeds, &quot;breed tendencies&quot; are
            generalisations — individual Beagles vary widely.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Beagles are compact, sturdily built dogs with a short
            tri-colour or two-colour coat, large drop ears, and a gently
            curved tail often carried upright. Breed standards recognise
            different size varieties; confirm size expectations with a
            reputable source for any specific dog.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            Beagles are often described as sociable, playful, and pack-
            oriented. The breed&apos;s strong scenting drive can mean that
            a Beagle on a trail follows their nose rather than the human
            calling them. Like all dogs, behaviour varies by individual,
            socialisation, training, and environment.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Beagles benefit from substantial daily exercise — walks,
            safe off-lead time in enclosed areas, and scent-based
            enrichment. The breed&apos;s nose can lead to wandering, so
            secure fencing and reliable recall training matter.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The short coat sheds throughout the year. Regular brushing
            and routine ear, dental, and nail care help keep the dog in
            good condition. The long drop ears benefit from regular
            inspection and gentle cleaning under veterinary guidance.
          </p>
        </>
      }
      training={
        <>
          <p>
            Beagles are often described as cooperative with patient,
            positive-reinforcement training, although the breed&apos;s
            scenting drive can make outdoor recall a recurring training
            challenge. Short, engaging sessions and food-motivated
            rewards work well for many individuals.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Beagles can be affected by inherited and
            lifestyle health conditions. Body-condition management and
            ear care are common discussion points with veterinarians.
            FaunaHub does not list specific medical conditions or
            treatments.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for a vocal, scent-driven dog with substantial exercise
            and enrichment needs. Reputable shelters, rescues, and
            responsible breeders are appropriate sources. Beagles
            historically have been used in laboratory research; some
            rescues specifically place ex-laboratory Beagles and can be a
            meaningful adoption option for committed homes.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Hound / Scent hound" },
        { label: "Size", value: "Small to medium" },
        { label: "Coat", value: "Short, dense" },
        { label: "Energy", value: "Often moderate to high — needs scent and exercise" },
        { label: "Vocal", value: "Often vocal (baying)" },
        { label: "Trainability", value: "Cooperative; scenting drive complicates recall" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific dog" },
      ]}
      faqs={[
        {
          question: "Are Beagles good with families?",
          answer:
            "Many Beagles are described as sociable with people, but no breed is universally safe with children. Behaviour depends on individual, training, supervision, and the child's familiarity with dogs.",
        },
        {
          question: "Are Beagles loud?",
          answer:
            "Beagles can be vocal — the breed includes baying as part of its hound heritage. This matters for apartment living and for neighbours. Spend time with a specific dog and check landlord rules before adopting.",
        },
        {
          question: "Are Beagles easy to train?",
          answer:
            "Many Beagles respond well to positive-reinforcement training, but the breed's scenting drive can make recall and off-lead reliability harder to achieve. Plan for ongoing training and secure outdoor environments.",
        },
        {
          question: "Are Beagles hypoallergenic?",
          answer:
            "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing.",
        },
      ]}
      relatedLinks={[
        { label: "Dachshund profile", href: "/dogs/breeds/dachshund" },
        { label: "Best dogs for first-time owners", href: "/dogs/breeds/best-dogs-for-first-time-owners" },
        { label: "Best small dog breeds", href: "/dogs/breeds/best-small-dog-breeds" },
        { label: "Pet breed selector", href: "/tools/pet-breed-selector" },
        { label: "Dog health hub", href: "/dogs/health" },
        { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
      ]}
      sources={[AKC_BREEDS, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
