import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Poodle — Breed Overview, Care & Household Fit";
const description =
  "Poodle breed profile: cautious overview of standard, miniature and toy varieties, temperament tendencies, grooming and training needs, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/poodle",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "poodle"),
});

export default function PoodlePage() {
  return (
    <BreedProfileLayout
      breedName="Poodle"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/poodle"
      tags={["Dog", "Working / Companion", "Multi-size variety"]}
      image={getBreedHeroImage("dog", "poodle") ?? undefined}
      intro={
        <>
          <p>
            The Poodle is a long-established breed recognised in three
            main size varieties — standard, miniature, and toy — sharing
            the same breed standard apart from size. The breed has a
            history as a working water-retriever and is widely kept today
            as a companion dog.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Poodles have a distinctive curly or corded single-layer
            coat, an elegantly proportioned build, and a refined head
            with long drop ears. Standards are the largest, toy Poodles
            the smallest. Coat colours include white, black, brown,
            apricot, silver, and various recognised patterns.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            Poodles are widely described as alert, trainable, and
            people-oriented. Some individuals are calm and quiet; others
            are very playful and active. Behaviour varies by individual,
            line, training, and household environment.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Poodles benefit from substantial daily activity — walks,
            play, and mental enrichment. Standard Poodles in particular
            often enjoy structured activities such as obedience or scent
            work. Toy and miniature varieties still need consistent daily
            exercise, even though their needs are smaller in absolute
            terms.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The single-layer curly coat does not shed in the same way as
            many double-coated breeds, but it does need regular
            maintenance — brushing several times a week and professional
            grooming every several weeks. Mat formation is a common issue
            without routine care. Despite popular belief, no breed is
            fully hypoallergenic.
          </p>
        </>
      }
      training={
        <>
          <p>
            Poodles are often described as very trainable using positive-
            reinforcement methods. They tend to respond well to varied,
            engaging training rather than repetitive drills. First-time
            owners typically benefit from structured classes with a
            qualified force-free trainer.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Poodles can be affected by inherited and
            lifestyle health conditions, with some differing across size
            varieties. Responsible breeders typically screen for relevant
            conditions; rescues and shelters may have varying levels of
            background information. FaunaHub does not list specific
            medical conditions or treatments.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for substantial grooming costs and time, ongoing
            training time, and a long-term commitment. Reputable
            shelters, rescues, and responsible breeders are appropriate
            sources. Avoid pet-store or unverified online sellers.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Non-sporting / Companion (origin: working water-retriever)" },
        { label: "Size varieties", value: "Standard, Miniature, Toy" },
        { label: "Coat", value: "Curly or corded single-layer coat — needs regular grooming" },
        { label: "Energy", value: "Often moderate to high — varies by variety and individual" },
        { label: "Trainability", value: "Widely described as very trainable" },
        { label: "Shedding", value: "Generally low loose-hair shedding; not hypoallergenic" },
        { label: "Typical lifespan", value: "Varies by size variety; confirm with a vet" },
      ]}
      faqs={[
        {
          question: "Are Poodles hypoallergenic?",
          answer:
            "No dog breed is fully hypoallergenic. Poodle coats may shed less loose hair than many double-coated breeds, but allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing.",
        },
        {
          question: "Which Poodle variety is right for me?",
          answer:
            "Standard, miniature, and toy Poodles share the same breed standard apart from size, but their housing, exercise, and grooming costs scale differently. Discuss specifics with a reputable breeder, shelter, or your veterinarian.",
        },
        {
          question: "Do Poodles need professional grooming?",
          answer:
            "Most Poodles benefit from professional grooming on a regular schedule, in addition to home brushing several times a week. Budget for this when planning the long-term cost of the breed.",
        },
        {
          question: "Are Poodles easy for first-time owners?",
          answer:
            "Many Poodles are described as cooperative learners and can do well with first-time owners who are ready to commit to regular grooming, ongoing training, and consistent daily care.",
        },
      ]}
      relatedLinks={[
        { label: "Golden Retriever profile", href: "/dogs/breeds/golden-retriever" },
        { label: "Low-maintenance dogs", href: "/dogs/breeds/low-maintenance-dogs" },
        { label: "Best dogs for first-time owners", href: "/dogs/breeds/best-dogs-for-first-time-owners" },
        { label: "Pet breed selector", href: "/tools/pet-breed-selector" },
        { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Dog health hub", href: "/dogs/health" },
      ]}
      sources={[AKC_BREEDS, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
