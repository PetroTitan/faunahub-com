import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Border Collie — Breed Overview, Care & Household Fit";
const description =
  "Border Collie breed profile: cautious overview of working-dog heritage, very high exercise and mental enrichment needs, training, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/border-collie",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "border-collie"),
});

export default function BorderColliePage() {
  return (
    <BreedProfileLayout
      breedName="Border Collie"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/border-collie"
      tags={["Dog", "Herding Group", "Working Breed"]}
      image={getBreedHeroImage("dog", "border-collie") ?? undefined}
      intro={
        <>
          <p>
            The Border Collie is a medium-sized herding breed developed
            on the Anglo-Scottish border. The breed has a strong working
            heritage and is widely described as highly active, intelligent,
            and biddable. Border Collies are often a poor choice for
            households unable to commit to substantial daily work — but
            they are a strong fit for active homes that want a deeply
            engaged dog.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Border Collies are medium-sized, athletic dogs with a double
            coat that may be rough or smooth. The classic black-and-white
            coat is familiar, but the breed comes in many recognised
            colour patterns. Working-line and show-line dogs may differ
            visibly in build.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            Border Collies are widely described as intense, focused, and
            sensitive to handler cues. The breed&apos;s working drive
            means that many individuals are happiest when given a job —
            herding, training, agility, scent work, or other structured
            activities. As with all breeds, behaviour varies by
            individual, line, and household.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Border Collies need <em>substantial</em> daily exercise
            and equally substantial mental work. Long walks alone are
            usually not enough; structured training, retrieval, scent
            tasks, agility, or herding-style work are commonly part of a
            healthy routine. Without enough engagement, dogs of this
            breed are often described as developing repetitive,
            obsessive, or destructive behaviours.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The double coat sheds throughout the year, with heavier
            seasonal sheds. Regular brushing helps manage loose hair and
            dirt. Routine dental, ear, and nail care are sensible parts
            of any Border Collie routine.
          </p>
        </>
      }
      training={
        <>
          <p>
            Border Collies are widely described as very trainable using
            consistent, positive-reinforcement methods. The breed&apos;s
            sensitivity also means harsh handling tends to backfire.
            First-time owners should plan for ongoing training time, not
            a single course; many owners benefit from working with a
            qualified force-free trainer or attending classes focused on
            the breed&apos;s typical needs.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Border Collies can be affected by
            inherited and lifestyle health conditions. Responsible
            breeders typically screen for relevant concerns. FaunaHub does
            not list specific medical conditions or treatments.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Border Collies are <em>not</em> a default choice for a quiet
            apartment, a sedentary household, or an owner whose schedule
            cannot guarantee daily mental and physical work. Mismatched
            placements are a common reason this breed shows up in
            rescues. Be honest about the time and energy you can commit
            before adopting.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Herding" },
        { label: "Size", value: "Medium" },
        { label: "Coat", value: "Double coat (rough or smooth)" },
        { label: "Energy", value: "Very high — needs daily work, not just walks" },
        { label: "Trainability", value: "Widely described as very trainable; sensitive" },
        { label: "Best for", value: "Active owners committed to daily mental and physical work" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific dog" },
      ]}
      faqs={[
        {
          question: "Are Border Collies good apartment dogs?",
          answer:
            "Border Collies are generally not a default match for apartment living. Some individuals can do well in apartments with very active owners and a long daily work plan, but the breed's energy and mental needs are substantial. Spend time with a specific dog before deciding.",
        },
        {
          question: "Do Border Collies need a job?",
          answer:
            "Many do best with structured daily activity that involves their mind as well as body — training, scent work, agility, herding-style play, or other engaging tasks. Without it, dogs of this breed often develop unwanted behaviours.",
        },
        {
          question: "Are Border Collies good with children?",
          answer:
            "Many Border Collies live happily in households with children, but no breed is universally child-safe. The breed's herding instincts can include chasing or nipping at fast-moving objects, including running children, without specific training. Adult supervision matters.",
        },
        {
          question: "Are Border Collies hypoallergenic?",
          answer:
            "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing.",
        },
      ]}
      relatedLinks={[
        { label: "German Shepherd profile", href: "/dogs/breeds/german-shepherd" },
        { label: "Best dogs for first-time owners", href: "/dogs/breeds/best-dogs-for-first-time-owners" },
        { label: "Pet breed selector", href: "/tools/pet-breed-selector" },
        { label: "Dog cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Dog health hub", href: "/dogs/health" },
        { label: "How much does a dog cost?", href: "/dogs/costs/how-much-does-a-dog-cost" },
      ]}
      sources={[AKC_BREEDS, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
