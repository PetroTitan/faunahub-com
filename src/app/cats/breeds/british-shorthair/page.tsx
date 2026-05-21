import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AVMA_PET_CARE, CORNELL_FELINE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "British Shorthair — Cat Breed Overview, Care & Household Fit";
const description =
  "British Shorthair cat breed profile: cautious overview of temperament tendencies, dense coat, calm activity style, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/cats/breeds/british-shorthair",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("cat", "british-shorthair"),
});

export default function BritishShorthairPage() {
  return (
    <BreedProfileLayout
      breedName="British Shorthair"
      species="cat"
      pageTitle={title}
      description={description}
      path="/cats/breeds/british-shorthair"
      tags={["Cat", "Shorthair", "Calm"]}
      image={getBreedHeroImage("cat", "british-shorthair") ?? undefined}
      intro={
        <>
          <p>
            The British Shorthair is a sturdy, dense-coated cat breed
            with British origins. The breed is often described as
            even-tempered and relatively low-key compared with the most
            interactive cat breeds — although individual cats vary
            substantially.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            British Shorthairs are medium-to-large cats with a round
            face, broad chest, and a notably dense, plush coat. The
            classic &quot;British Blue&quot; (grey) coat is familiar, but
            many other coat colours and patterns are recognised. Adults
            tend to develop a sturdy, full-bodied build.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            The breed is often described as easy-going and affectionate
            without being clingy — many British Shorthairs prefer sitting
            near their people rather than on them. As with every breed,
            individual personality varies; some are highly playful, others
            are very mellow.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most British Shorthairs need daily play and engagement but
            are often less hyperactive than some other breeds.
            Interactive toys, climbing structures, and brief structured
            play sessions help maintain body condition and mental
            engagement.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The dense double coat benefits from regular brushing,
            particularly during seasonal sheds. Routine dental, nail,
            and ear care are sensible parts of any cat&apos;s routine.
            Discuss body-condition management with a veterinarian — the
            breed&apos;s build can mask weight gain.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, British Shorthairs can be affected by
            inherited and lifestyle health conditions. Responsible
            breeders typically test for relevant concerns. FaunaHub does
            not list specific medical conditions or treatments.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Plan for routine grooming, preventive veterinary care, and a
            long-term commitment — many cats live well into their teens.
            Reputable shelters, rescues, and responsible breeders are
            appropriate sources.
          </p>
        </>
      }
      quickFacts={[
        { label: "Origin", value: "United Kingdom (long established)" },
        { label: "Coat", value: "Short, dense, plush double coat" },
        { label: "Activity", value: "Often calm to moderate" },
        { label: "Sociability", value: "Often described as affectionate but not clingy" },
        { label: "Grooming", value: "Regular brushing recommended in shedding seasons" },
        { label: "Best for", value: "Households wanting a calmer breed temperament profile" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific cat" },
      ]}
      faqs={[
        {
          question: "Are British Shorthairs good for first-time cat owners?",
          answer:
            "The breed is sometimes recommended for first-time owners because of its often even temperament and relatively independent style, but no breed is universally easy. Spend time with a specific cat before deciding.",
        },
        {
          question: "Are British Shorthairs lap cats?",
          answer:
            "Many British Shorthairs prefer sitting near their people rather than being held — though individual personality varies. Forced handling tends not to suit the breed; offering a calm presence often works better.",
        },
        {
          question: "Do British Shorthairs shed a lot?",
          answer:
            "The dense coat sheds, particularly in seasonal moults. Regular brushing helps manage loose hair. No breed is fully non-shedding.",
        },
        {
          question: "Are British Shorthairs hypoallergenic?",
          answer:
            "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing.",
        },
      ]}
      relatedLinks={[
        { label: "Persian cat profile", href: "/cats/breeds/persian-cat" },
        { label: "Ragdoll profile", href: "/cats/breeds/ragdoll" },
        { label: "Best cats for first-time owners", href: "/cats/breeds/best-cats-for-first-time-owners" },
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
