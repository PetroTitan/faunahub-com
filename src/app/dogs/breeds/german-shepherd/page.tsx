import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AKC_BREEDS, AVMA_PET_CARE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "German Shepherd — Breed Overview, Care & Household Fit";
const description =
  "German Shepherd breed profile: cautious overview of temperament tendencies, exercise and training needs, grooming, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/dogs/breeds/german-shepherd",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("dog", "german-shepherd"),
});

export default function GermanShepherdPage() {
  return (
    <BreedProfileLayout
      breedName="German Shepherd"
      species="dog"
      pageTitle={title}
      description={description}
      path="/dogs/breeds/german-shepherd"
      tags={["Dog", "Working Group", "Large"]}
      image={getBreedHeroImage("dog", "german-shepherd") ?? undefined}
      intro={
        <>
          <p>
            The German Shepherd is a large herding-origin working breed
            developed in Germany in the late 19th and early 20th centuries.
            Modern German Shepherds are widely used in service, working,
            and companion roles. As with all breeds, &quot;breed
            tendencies&quot; describe what is sometimes seen — not what is
            guaranteed in any specific dog.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            German Shepherds are large, athletically built dogs with a
            double coat that can be medium or long depending on line. The
            most familiar coat pattern is black-and-tan, but many other
            recognised colour patterns exist. Show-line and working-line
            German Shepherds often differ in build, with working lines
            typically more straight-backed and squarer.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            German Shepherds are often described as alert, intelligent,
            and trainable, with a strong bond to handlers. Some lines and
            individuals can be reserved with strangers; others are more
            outgoing. Like every breed, early socialisation, consistent
            training, and household routines shape adult behaviour far
            more than breed alone.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most German Shepherds benefit from substantial daily exercise
            and mental work — long walks, structured training, scent or
            obedience tasks. Bored, under-exercised dogs of this breed
            often develop unwanted behaviours.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The double coat sheds throughout the year, with heavier
            seasonal sheds. Regular brushing helps manage loose hair.
            Routine ear, dental, and nail care are sensible parts of any
            German Shepherd routine.
          </p>
        </>
      }
      training={
        <>
          <p>
            German Shepherds are widely described as trainable using
            consistent positive-reinforcement methods. They tend to
            respond well to structured routines, clear cues, and engaged
            handlers. First-time owners should plan for ongoing training
            time, not a single course; classes with a qualified
            force-free trainer are commonly recommended.
          </p>
        </>
      }
      health={
        <>
          <p>
            German Shepherds can be affected by inherited and lifestyle
            health conditions. Responsible breeders typically screen for
            joint and other concerns. FaunaHub does not list specific
            medical conditions or treatments; discuss preventive care with
            a licensed veterinarian.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            A German Shepherd is a substantial commitment in time, space,
            exercise, training, and budget. They are not a default choice
            for an apartment, a busy first-time owner, or a household that
            cannot guarantee daily mental engagement. Reputable shelters,
            rescues, and responsible breeders are appropriate sources.
          </p>
        </>
      }
      quickFacts={[
        { label: "Group", value: "Working / Herding origin" },
        { label: "Size", value: "Large" },
        { label: "Coat", value: "Medium or long double coat" },
        { label: "Energy", value: "Often high — needs structured exercise" },
        { label: "Trainability", value: "Often considered very trainable; needs consistency" },
        { label: "Best for", value: "Owners with time, space, and training commitment" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific dog" },
      ]}
      faqs={[
        {
          question: "Are German Shepherds good family dogs?",
          answer:
            "Many German Shepherds live successfully in families, but no breed is universally child-safe and the breed's size, energy, and training needs require committed adult oversight. Behaviour varies by individual, training, and household.",
        },
        {
          question: "Do German Shepherds need professional training?",
          answer:
            "Many owners benefit from working with a qualified force-free trainer, particularly for first-time owners or for dogs with specific behaviour concerns. Professional training is not a substitute for daily handler engagement.",
        },
        {
          question: "How big do German Shepherds get?",
          answer:
            "German Shepherds are typically large dogs, though exact size varies between lines and individuals. Discuss expectations for a specific dog with the breeder, shelter, or your veterinarian.",
        },
        {
          question: "Are German Shepherds aggressive?",
          answer:
            "Aggression is not a universal breed trait. Behaviour depends on individual genetics, socialisation, training, environment, and handler experience. Any dog can show concerning behaviour if its needs are not met; consult a qualified behaviour professional for individual concerns.",
        },
      ]}
      relatedLinks={[
        { label: "Border Collie profile", href: "/dogs/breeds/border-collie" },
        { label: "Labrador Retriever profile", href: "/dogs/breeds/labrador-retriever" },
        { label: "Dog cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Dog health hub", href: "/dogs/health" },
        { label: "How much does a dog cost?", href: "/dogs/costs/how-much-does-a-dog-cost" },
        { label: "Best dogs for first-time owners", href: "/dogs/breeds/best-dogs-for-first-time-owners" },
      ]}
      sources={[AKC_BREEDS, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
