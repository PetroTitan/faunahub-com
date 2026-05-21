import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AVMA_PET_CARE, CORNELL_FELINE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Maine Coon — Cat Breed Overview, Care & Household Fit";
const description =
  "Maine Coon cat breed profile: cautious overview of temperament tendencies, large size, grooming and activity needs, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/cats/breeds/maine-coon",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("cat", "maine-coon"),
});

export default function MaineCoonPage() {
  return (
    <BreedProfileLayout
      breedName="Maine Coon"
      species="cat"
      pageTitle={title}
      description={description}
      path="/cats/breeds/maine-coon"
      tags={["Cat", "Large breed", "Longhair"]}
      image={getBreedHeroImage("cat", "maine-coon") ?? undefined}
      intro={
        <>
          <p>
            The Maine Coon is one of the largest domestic cat breeds,
            with a long history in North America. The breed is often
            described as sociable and people-oriented, with a distinctive
            long coat and substantial body size. As with all breeds,
            individual cats vary widely in personality, activity level,
            and care needs.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Maine Coons are large, muscular cats with a long, water-
            resistant coat, a heavy tail, and tufted ears. Many lines
            have a square muzzle, a broad chest, and a relatively long
            body proportion. Recognised coat colours and patterns vary
            widely.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            The breed is often described as friendly, sociable, and
            interactive — sometimes called &quot;the gentle giant&quot;.
            Some individuals are very engaged and follow people around
            the home; others are quieter. Like every breed, behaviour
            varies by individual, socialisation, and household.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Maine Coons benefit from interactive play, climbing
            structures, and engagement with their people. Sturdy cat
            trees sized for a large breed are commonly recommended, and
            puzzle feeders or play sessions can help with body
            condition and mental engagement.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The long, dense coat benefits from regular brushing — often
            several times a week — to prevent matting. Routine dental,
            nail, and ear care are sensible parts of any Maine Coon
            routine. Weight and body condition should be monitored with
            your veterinarian, especially because of the breed&apos;s
            large size.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Maine Coons can be affected by inherited
            and lifestyle health conditions. Responsible breeders
            typically test for certain conditions; rescues and shelters
            may have varying levels of background information. FaunaHub
            does not list specific medical conditions or treatments.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for the budget and time required for a long-coated
            large-breed cat — including routine grooming, sturdy
            furniture and climbing structures, preventive veterinary
            care, and the possibility of emergency vet costs. Reputable
            shelters, rescues, and breeders are appropriate sources.
          </p>
        </>
      }
      quickFacts={[
        { label: "Origin", value: "North America (long established)" },
        { label: "Size", value: "Large (one of the largest domestic cat breeds)" },
        { label: "Coat", value: "Long, dense, water-resistant" },
        { label: "Activity", value: "Often interactive and engaged" },
        { label: "Grooming", value: "Regular brushing recommended" },
        { label: "Best for", value: "Households with time for grooming and play" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific cat" },
      ]}
      faqs={[
        {
          question: "Are Maine Coons good with families?",
          answer:
            "Many Maine Coons live happily in households with children, but no breed is universally child-safe and individual cats vary. Adult supervision and respect for the cat's space matter for any breed.",
        },
        {
          question: "Are Maine Coons hypoallergenic?",
          answer:
            "No cat breed is fully hypoallergenic. Cat allergens come from skin and saliva as well as fur. Anyone with allergies should spend time with a specific cat before committing.",
        },
        {
          question: "Do Maine Coons get along with other pets?",
          answer:
            "Many Maine Coons are described as sociable with other pets when introductions are gradual and the cat has space to retreat. Individual personalities vary; structured introductions and an experienced household help.",
        },
        {
          question: "How big do Maine Coons get?",
          answer:
            "Maine Coons are among the largest domestic cat breeds, but exact size varies by individual and line. Discuss expectations for a specific cat with the breeder, shelter, or your veterinarian.",
        },
      ]}
      relatedLinks={[
        { label: "Ragdoll profile", href: "/cats/breeds/ragdoll" },
        { label: "British Shorthair profile", href: "/cats/breeds/british-shorthair" },
        { label: "Best family cats", href: "/cats/breeds/best-family-cats" },
        { label: "Pet breed selector", href: "/tools/pet-breed-selector" },
        { label: "Cat cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Cat health hub", href: "/cats/health" },
      ]}
      sources={[CORNELL_FELINE, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
