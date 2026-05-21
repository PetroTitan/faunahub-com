import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Labrador Retriever — Breed Overview, Care & Household Fit";
const description =
  "Labrador Retriever breed profile: cautious overview of temperament tendencies, exercise needs, grooming, training, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/labrador-retriever",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "labrador-retriever"),
});

export default function LabradorRetrieverPage() {
  return (
    <BreedProfileLayout
      breedName="Labrador Retriever"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/labrador-retriever"
      tags={["Dog", "Retriever", "Sporting Group"]}
      image={getBreedHeroImage("dog", "labrador-retriever") ?? undefined}
      intro={
        <>
          <p>
            The Labrador Retriever is one of the most popular dog breeds in
            many countries. It was originally developed as a working
            retriever for hunters and water work, and modern Labradors are
            often described as friendly, active, and trainable. As with any
            breed, &quot;breed tendencies&quot; describe what is sometimes
            seen in members of the breed — not what is guaranteed in any
            specific dog.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Labradors are medium-to-large, athletically built dogs with a
            short, dense double coat. Recognised coat colours typically
            include black, yellow, and chocolate. The breed is known for an
            otter-like tail, a broad head, and an alert, friendly
            expression. Show-line and working-line Labradors may differ
            visibly in build.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            Labradors are often described as sociable and people-oriented,
            with a strong play and retrieve drive in many lines. Individual
            dogs vary; some Labradors are calm and gentle, others are very
            high-energy and need consistent exercise and training. Early
            socialisation and structured training shape adult behaviour far
            more than breed alone.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Labradors benefit from substantial daily exercise — a
            combination of walks, off-lead activity in safe environments,
            and mental enrichment. Many Labradors enjoy water and fetching
            games. Without enough physical and mental work, dogs of this
            breed can become bored and develop unwanted behaviours.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The short double coat sheds throughout the year, with heavier
            shedding seasons. Regular brushing helps manage loose hair.
            Routine ear checks, dental care, and nail trimming are sensible
            parts of any Labrador care routine.
          </p>
        </>
      }
      training={
        <>
          <p>
            Labradors are widely described as trainable, with consistent
            positive-reinforcement methods working well for most
            individuals. Early socialisation with people, other dogs, and
            varied environments matters for any breed. The breed&apos;s
            food motivation is a useful training tool but also means body
            condition needs attention to avoid weight gain.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Labradors can be affected by inherited and
            lifestyle health conditions. Responsible breeders typically
            screen for joint and other conditions; rescue/adoption sources
            may have varying levels of health history. FaunaHub does not
            list specific medical conditions or treatments. Discuss
            preventive care, weight management, and any specific concerns
            with a licensed veterinarian.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Before adopting any dog, consider time, budget, housing,
            exercise capacity, and long-term commitment — typically more
            than a decade for many breeds. Reputable shelters, rescues, and
            responsible breeders are appropriate sources; avoid pet-store
            or unverified online sellers. Local laws and landlord rules may
            also affect breed choice.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Sporting / Gun dog" },
        { label: "Size", value: "Medium to large" },
        { label: "Coat", value: "Short, dense double coat" },
        { label: "Energy", value: "Often high — needs daily exercise" },
        { label: "Trainability", value: "Often considered trainable; varies by individual" },
        { label: "Common colours", value: "Black, yellow, chocolate" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific dog" },
      ]}
      faqs={[
        {
          question: "Are Labradors good with children?",
          answer:
            "Many Labradors are described as friendly with people, including children, but no breed is universally safe with children. Behaviour depends on the individual dog, training, socialisation, supervision, and the children's experience around dogs. Always supervise interactions between children and any dog.",
        },
        {
          question: "Do Labradors need a lot of exercise?",
          answer:
            "Most Labradors benefit from substantial daily exercise and mental enrichment. Specific needs vary by age, health, and individual energy level. Discuss exercise planning for a specific dog with your veterinarian.",
        },
        {
          question: "Are Labradors easy for first-time dog owners?",
          answer:
            "Labradors are sometimes recommended for first-time owners because of their reputation for trainability and sociability, but they are a substantial commitment — high energy as young dogs, food-motivated (so weight management matters), and large enough to need consistent training. First-time owners should plan time and budget realistically.",
        },
        {
          question: "Are Labradors hypoallergenic?",
          answer:
            "No dog breed is fully hypoallergenic. Allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing.",
        },
      ]}
      relatedLinks={[
        { label: "Golden Retriever profile", href: "/dogs/breeds/golden-retriever" },
        { label: "Best family dogs", href: "/dogs/breeds/best-family-dogs" },
        { label: "Best dogs for first-time owners", href: "/dogs/breeds/best-dogs-for-first-time-owners" },
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
