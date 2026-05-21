import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Horse — Profile, Habitat, Diet & Behavior";
const description =
  "Equus caballus: domestic horse profile covering origin, body plan, social behaviour, diet, and the modern relationship between horses and humans.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/horse",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("horse"),
});

export default function HorsePage() {
  return (
    <AnimalProfileLayout
      commonName="Horse"
      scientificName="Equus caballus"
      pageTitle={title}
      description={description}
      path="/animals/horse"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Equid", "Domesticated"]}
      image={getAnimalImage("horse") ?? undefined}
      galleryImages={getAnimalGalleryImages("horse")}
      overview={
        <>
          <p>
            The domestic horse (<em>Equus caballus</em>) is a large odd-toed
            ungulate of the family Equidae, the same family that includes
            zebras, donkeys, and the only surviving truly wild horse, Przewalski&apos;s
            horse. Horses were domesticated several thousand years ago on the
            Eurasian steppe and have since been bred into a wide range of
            breeds for work, transport, sport, and companionship.
          </p>
          <p>
            Horses are obligate herbivores with a single-stomach, hindgut
            fermentation digestive system that requires near-continuous access
            to forage. They are highly social, communicate using a rich
            repertoire of body language, and form stable bonds with both
            other horses and people who handle them consistently.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            As a domesticated species, the horse is found across most of the
            inhabited world wherever humans keep livestock or companion
            animals. Feral populations descended from escaped or released
            domestic horses live in several regions, including parts of the
            western United States and the Australian outback. Truly wild
            equids — such as Przewalski&apos;s horse — are a separate, much
            rarer story and survive only in small reintroduced populations.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Horses are grazers adapted to eat large quantities of low-energy
            grasses and forages. A healthy ration typically centres on grass
            or hay, with concentrates and supplements used selectively to
            meet the needs of work, growth, age, or specific veterinary
            conditions. Sudden diet changes can cause serious digestive
            problems. Anyone caring for a horse should work with a qualified
            equine veterinarian or experienced equine nutritionist on a
            specific feeding plan.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Horses are herd animals. In free-ranging conditions they live in
            small social groups with strong individual relationships and a
            clear social structure. They communicate using ear position,
            posture, tail position, facial expression, and vocalisations
            including neighs, whinnies, and nickers. Like all prey animals
            they are vigilant; sudden movement, novel objects, and confined
            spaces can trigger flight responses if not introduced calmly.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Horses are involved in transport, agriculture, sport, equine-
            assisted therapy, and recreational riding worldwide. Responsible
            ownership involves substantial commitments of space, time,
            veterinary care, and budget — including routine farrier visits,
            dental work, parasite management, and emergency veterinary
            access. Local welfare regulations and breed-society guidance vary
            by country; readers should consult licensed equine veterinarians,
            certified instructors, and reputable welfare organisations before
            acquiring or caring for a horse.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Horses share a clearly equine body plan: a single, central
                hoof on each foot, long limbs built for sustained running, a
                deep chest, a long neck, and an expressive head with large
                eyes set high on the skull and mobile, forward-facing ears.
                Coat colours and breed-specific builds vary widely, from
                compact ponies under 14.2 hands tall to draft horses
                exceeding 17 hands at the withers.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Other equids include the donkey (<em>Equus africanus asinus</em>),
          the various species of zebra, and the critically endangered
          Przewalski&apos;s horse. Mules and hinnies are interspecies hybrids
          between horse and donkey.
        </p>
      }
      faqs={[
        {
          question: "How long do horses typically live?",
          answer:
            "Domestic horses commonly live into their twenties when given good veterinary, nutritional, and hoof care. Individual lifespan varies with breed, work history, and underlying health. Verify expectations for a specific horse with your equine veterinarian.",
        },
        {
          question: "Are horses considered pets?",
          answer:
            "Legally and culturally, horses sit between livestock and companion animals. Owners typically have a much closer working bond with a horse than with most livestock species, but the housing, transport, veterinary, and welfare requirements are very different from those of dogs or cats.",
        },
        {
          question: "What is the difference between a horse and a pony?",
          answer:
            "By common convention a 'pony' is generally an equine of mature height at or below about 14.2 hands at the withers, while a 'horse' is above. The distinction is not strict and breed organisations may define it differently. Both are the same species (Equus caballus).",
        },
        {
          question: "Where did horses come from?",
          answer:
            "Genetic and archaeological evidence places horse domestication on the Eurasian steppe several thousand years ago. The detailed story is still being refined by ongoing research. Authoritative summaries are available from sources such as Animal Diversity Web and Britannica.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Equus caballus" },
        { label: "Family", value: "Equidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Perissodactyla" },
        { label: "Diet", value: "Herbivore (grazer)" },
        { label: "Social structure", value: "Highly social herd animal" },
        { label: "Domestication", value: "Long-established (Eurasian steppe)" },
        { label: "Conservation status", value: "Domestic species — verify subspecies and wild relatives separately" },
      ]}
      relatedLinks={[
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Zebra Profile", href: "/animals/zebra", description: "Wild African equids" },
        { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
        { label: "Vet Care", href: "/vet-care" },
      ]}
      sources={ANIMAL_SOURCES.horse}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
