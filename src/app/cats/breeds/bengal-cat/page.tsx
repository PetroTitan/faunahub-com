import type { Metadata } from "next";
import BreedProfileLayout from "@/components/BreedProfileLayout";
import { AVMA_PET_CARE, CORNELL_FELINE } from "@/lib/educational/animal-sources";
import { getBreedHeroImage, getBreedOgImage } from "@/lib/images/breed-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Bengal — Cat Breed Overview, Care & Household Fit";
const description =
  "Bengal cat breed profile: cautious overview of distinctive spotted coat, very high activity needs, enrichment requirements, and responsible-ownership planning.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/cats/breeds/bengal-cat",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getBreedOgImage("cat", "bengal-cat"),
});

export default function BengalCatPage() {
  return (
    <BreedProfileLayout
      breedName="Bengal"
      species="cat"
      pageTitle={title}
      description={description}
      path="/cats/breeds/bengal-cat"
      tags={["Cat", "Hybrid origin", "High-energy"]}
      image={getBreedHeroImage("cat", "bengal-cat") ?? undefined}
      intro={
        <>
          <p>
            The Bengal is a domestic cat breed developed through
            crossbreeding programmes with the wild Asian leopard cat
            (<em>Prionailurus bengalensis</em>) several generations
            back. Modern registered Bengals are generally many
            generations removed from the wild ancestor and are
            considered domestic cats. Bengals are widely described as
            high-energy and demanding — a poor match for low-engagement
            households.
          </p>
        </>
      }
      appearance={
        <>
          <p>
            Bengals are athletic, muscular cats with a distinctive
            spotted or marbled coat, often with glittery-looking guard
            hairs. Coat colours include brown, silver, snow, and other
            recognised variations. Generational labels (F1, F2, F3,
            etc.) describe how many generations a cat is from a wild
            ancestor — most cats sold as pets are F4 and later.
          </p>
        </>
      }
      temperament={
        <>
          <p>
            Bengals are widely described as intelligent, active, and
            interactive — many are demanding of their owners&apos; time
            and engagement. Some individuals are friendly and confident;
            others are reserved with strangers. Like every breed,
            behaviour varies by individual, generation, and household.
          </p>
        </>
      }
      activity={
        <>
          <p>
            Most Bengals need <em>substantial</em> daily play, climbing,
            and mental enrichment. Tall cat trees, puzzle feeders,
            interactive toys, and reliable daily play sessions help
            keep the cat engaged. Bored Bengals are commonly described
            as developing unwanted behaviours — opening cupboards,
            knocking things off shelves, vocal demands.
          </p>
        </>
      }
      grooming={
        <>
          <p>
            The short coat is low-maintenance — weekly brushing is
            typically enough. Routine dental, nail, and ear care are
            sensible parts of any cat&apos;s routine.
          </p>
        </>
      }
      health={
        <>
          <p>
            As with all breeds, Bengals can be affected by inherited and
            lifestyle health conditions. Responsible breeders typically
            test for relevant concerns. FaunaHub does not list specific
            medical conditions or treatments. Discuss preventive care
            with a licensed veterinarian.
          </p>
        </>
      }
      responsibility={
        <>
          <p>
            Bengals are not a default match for households unable to
            commit substantial daily engagement. Local law in some
            jurisdictions also restricts ownership of early-generation
            hybrid cats — verify before acquiring. Reputable breeders
            who prioritise welfare, and rescues that specialise in the
            breed, are appropriate sources.
          </p>
        </>
      }
      quickFacts={[
        { label: "Origin", value: "Domestic cat developed via hybrid crossbreeding (later generations)" },
        { label: "Coat", value: "Short; spotted or marbled" },
        { label: "Activity", value: "Very high — needs daily enrichment" },
        { label: "Intelligence", value: "Often described as very engaged with people" },
        { label: "Best for", value: "Active households committed to daily play and enrichment" },
        { label: "Legal status", value: "Early-generation hybrids restricted in some jurisdictions" },
        { label: "Typical lifespan", value: "Verify with a veterinarian for any specific cat" },
      ]}
      faqs={[
        {
          question: "Are Bengal cats good for first-time cat owners?",
          answer:
            "Bengals are generally not a default match for first-time owners because of their high activity and engagement needs. Some experienced cat households thrive with the breed; others find the energy level overwhelming. Be realistic about your daily time and engagement capacity.",
        },
        {
          question: "Are Bengals legal to own?",
          answer:
            "Most modern registered Bengals are many generations from any wild ancestor and are treated as domestic cats. However, some jurisdictions restrict ownership of early-generation hybrid cats. Verify local laws before acquiring a Bengal, particularly if a breeder mentions a low F-generation.",
        },
        {
          question: "Do Bengals get along with other pets?",
          answer:
            "Some Bengals live happily with other cats or with dogs after gradual, supervised introductions. Others prefer to be the only pet. Individual personality and structured introductions matter.",
        },
        {
          question: "Are Bengals hypoallergenic?",
          answer:
            "No cat breed is fully hypoallergenic. Anyone with allergies should spend time with a specific cat before committing.",
        },
      ]}
      relatedLinks={[
        { label: "Siamese profile", href: "/cats/breeds/siamese" },
        { label: "Maine Coon profile", href: "/cats/breeds/maine-coon" },
        { label: "Pet breed selector", href: "/tools/pet-breed-selector" },
        { label: "Cat cost calculator", href: "/tools/pet-cost-calculator" },
        { label: "Cat health hub", href: "/cats/health" },
        { label: "How much does a cat cost?", href: "/cats/costs/how-much-does-a-cat-cost" },
      ]}
      sources={[CORNELL_FELINE, AVMA_PET_CARE]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
