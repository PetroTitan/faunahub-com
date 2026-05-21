import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "French Bulldog — Breed Overview, Care & Household Fit";
const description =
  "French Bulldog breed profile: cautious overview of temperament tendencies, exercise tolerance, grooming, the brachycephalic context, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/french-bulldog",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "french-bulldog"),
});

export default function FrenchBulldogPage() {
  return (
    <BreedProfileLayout
      breedName="French Bulldog"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/french-bulldog"
      tags={["Dog", "Companion", "Brachycephalic"]}
      image={getBreedHeroImage("dog", "french-bulldog") ?? undefined}
      intro={
        <>
          <p>
            The French Bulldog is a small companion breed with a
            distinctive flat-faced (brachycephalic) head shape and large
            erect &quot;bat ears&quot;. The breed has been very popular in
            recent decades. As with any breed, &quot;breed
            tendencies&quot; are not guarantees, and the brachycephalic
            head shape brings specific care considerations that should be
            discussed with a veterinarian before adoption.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            French Bulldogs are small, compact, muscular dogs with a short
            smooth coat, a flat face, and the breed&apos;s characteristic
            erect ears. Recognised coat colours and patterns vary;
            confirm with a reputable breeder or shelter rather than
            relying on internet marketing of unusual colours.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            French Bulldogs are often described as affectionate and
            attached to their people. Some individuals are very playful;
            others are calm and low-key. Like all breeds, behaviour
            depends on individual genetics, socialisation, training,
            health, and household environment.
          </p>
        </>
      }
      activity={
        <>
          <p>
            French Bulldogs typically need modest daily exercise — short
            walks and play sessions, often broken up across the day. The
            breed is sensitive to heat and to strenuous exercise because
            of its flat-faced anatomy; avoid hot weather, intense
            running, and unventilated travel. Specific exercise plans
            should be confirmed with a veterinarian for any individual
            dog.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The short coat is easy to brush, but the breed&apos;s facial
            folds and ears need routine cleaning and inspection. Discuss
            ear, skin-fold, and dental care with a veterinarian to avoid
            common care mistakes.
          </p>
        </>
      }
      training={
        <>
          <p>
            French Bulldogs are often described as cooperative with
            patient, positive-reinforcement training. Short, focused
            training sessions tend to work better than long, repetitive
            drills.
          </p>
        </>
      }
      health={
        <>
          <p>
            <strong>Brachycephalic context:</strong> the flat-faced head
            shape is associated with a set of health considerations
            commonly grouped as brachycephalic obstructive airway syndrome
            (BOAS). FaunaHub does not provide diagnosis or treatment.
            Anyone considering this breed should research these
            considerations with a licensed veterinarian familiar with
            brachycephalic dogs, and choose a breeder or rescue that
            takes airway health seriously.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for veterinary care that may be more involved than the
            average small dog, including monitoring for heat sensitivity,
            airway concerns, and skin-fold care. Reputable shelters,
            rescues, and breeders that prioritise health and welfare are
            appropriate sources. Avoid pet-store or unverified online
            sellers, and be cautious about &quot;rare colour&quot;
            marketing.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Companion / Non-sporting" },
        { label: "Size", value: "Small" },
        { label: "Coat", value: "Short, smooth, single-layer" },
        { label: "Energy", value: "Often modest — sensitive to heat" },
        { label: "Brachycephalic", value: "Yes — discuss airway considerations with a vet" },
        { label: "Best for", value: "Owners ready to budget for specialist veterinary care" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific dog" },
      ]}
      faqs={[
        {
          question: "Are French Bulldogs good for apartments?",
          answer:
            "Some French Bulldogs do well in apartments because of their modest exercise tolerance, but the breed is not universally suitable for every apartment — landlord rules, noise sensitivity, heat exposure, and household routines all matter. Spend time with a specific dog before deciding.",
        },
        {
          question: "Do French Bulldogs need a lot of exercise?",
          answer:
            "Most French Bulldogs benefit from short, regular exercise rather than long high-intensity sessions. The breed's brachycephalic head shape means heat and strenuous exercise can be a particular risk; confirm an exercise plan with a veterinarian.",
        },
        {
          question: "Are French Bulldogs healthy dogs?",
          answer:
            "The flat-faced head shape is associated with specific care considerations grouped as brachycephalic obstructive airway syndrome (BOAS), and various coat-colour fads have been linked to additional concerns. FaunaHub does not diagnose or treat. Discuss the breed's care considerations with a licensed veterinarian before adoption.",
        },
        {
          question: "Are French Bulldogs hypoallergenic?",
          answer:
            "No dog breed is fully hypoallergenic. Allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing.",
        },
      ]}
      relatedLinks={[
        { label: "Dachshund profile", href: "/dogs/breeds/dachshund" },
        { label: "Best dogs for apartments", href: "/dogs/breeds/best-dogs-for-apartments" },
        { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Vet care hub", href: "/vet-care" },
        { label: "Dog health hub", href: "/dogs/health" },
        { label: "How much does a dog cost?", href: "/dogs/costs/how-much-does-a-dog-cost" },
      ]}
      sources={[AKC_BREEDS, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
