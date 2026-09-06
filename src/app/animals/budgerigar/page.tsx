import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/budgerigar";
const TITLE = "Budgerigar — Profile, Wild Flocks, Nomadic Habits & Origins";
const DESC =
  "Explore the budgerigar (Melopsittacus undulatus): a small Australian grass parrot that forms huge nomadic flocks, and the wild ancestor of the budgie.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("budgerigar"),
});

export default function BudgerigarPage() {
  return (
    <AnimalProfileLayout
      commonName="Budgerigar"
      scientificName="Melopsittacus undulatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Parrot","Australia"]}
      image={getAnimalImage("budgerigar") ?? undefined}
      galleryImages={getAnimalGalleryImages("budgerigar")}
      sources={ANIMAL_SOURCES.budgerigar}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The budgerigar (<em>Melopsittacus undulatus</em>) is a small, long-tailed parrot native to the arid and semi-arid interior of Australia. Wild budgerigars are green and yellow with fine black barring across the head, nape and wings — the barring is the origin of the species name <em>undulatus</em>.
        </p>
        <p>
          It is the only species in its genus and belongs to the group known as grass parakeets. In the wild it is a bird of open country, feeding on the ground on grass seed and travelling in flocks that can be enormous.
        </p>
        <p>
          The budgerigar is also the wild ancestor of the domesticated &apos;budgie&apos;. Captive-bred colour varieties — blue, white, yellow, grey and many others — are the product of selective breeding and do not occur as the normal wild type. <strong>This profile covers the wild species; it is not a pet-care guide and offers no husbandry, feeding or veterinary advice.</strong>
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Budgerigars live across the dry interior of Australia — open grassland, scrub, mallee, savanna woodland and dry farmland — and are largely absent from the wetter coastal fringes and dense forest. They depend on access to water and on grass seed, and their distribution shifts with rainfall rather than staying fixed.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Budgerigars are seed eaters, taking the seeds of grasses and low plants almost entirely from the ground. Feeding is concentrated in the cooler parts of the day, and flocks visit water regularly — a dependence that shapes where they can be at any given time.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Wild budgerigars are highly gregarious and <strong>nomadic</strong> rather than migratory: they move in response to rainfall and seeding, so flocks appear where conditions are good and vanish when they are not. After good rains, flocks can reach spectacular sizes. They nest in tree hollows, especially in eucalypts, and breeding is triggered by rainfall rather than by a fixed season. Budgerigars are vocal, with constant chattering contact calls, and are capable of mimicry.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The budgerigar is one of the most widely kept pet birds in the world, and captive populations vastly outnumber attention paid to the wild species. In the wild it remains common and widespread within Australia, where it is protected and export is prohibited. Feral populations have established in a few places outside Australia. This profile covers the wild bird only and gives no advice on keeping, feeding, breeding or the health of pet birds — those questions belong with an avian veterinarian. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "What colour are wild budgerigars?",
          answer:
            "Green and yellow, with fine black barring across the head, nape and wings. The blue, white, grey, yellow and other colour varieties seen in pet birds are the result of selective breeding in captivity and are not the normal wild appearance.",
        },
        {
          question: "Are budgerigars nomadic or migratory?",
          answer:
            "Nomadic. Rather than following a fixed seasonal route like a migratory bird, budgerigars move in response to rainfall and the seeding of grasses. Flocks appear in an area when conditions are good and leave when they deteriorate, so their distribution shifts year to year.",
        },
        {
          question: "What do wild budgerigars eat?",
          answer:
            "Grass seed, taken almost entirely from the ground, along with seeds of other low plants. They feed mainly in the cooler parts of the day and must drink regularly, which strongly influences where flocks can be found in arid country.",
        },
        {
          question: "Where do budgerigars nest?",
          answer:
            "In tree hollows, particularly in eucalypts along watercourses. Breeding is triggered by rainfall rather than by a fixed calendar, so after good rains large numbers may nest at once, taking advantage of the flush of grass seed that follows.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Melopsittacus undulatus" },
        { label: "Family", value: "Psittaculidae" },
        { label: "Class", value: "Aves" },
        { label: "Wild colour", value: "Green and yellow with black barring" },
        { label: "Range", value: "Arid and semi-arid interior Australia" },
        { label: "Movement", value: "Nomadic, following rainfall" },
        { label: "Nesting", value: "Tree hollows; rainfall-triggered" },
        { label: "Note", value: "Wild species profile — not a care guide" },
      ]}
      relatedLinks={[
        { label: "Cockatiel Profile", href: "/animals/cockatiel", description: "Another Australian parrot" },
        { label: "Parrot Profile", href: "/animals/parrot", description: "Group-level overview" },
        { label: "Galah Profile", href: "/animals/galah" },
        { label: "Bird Care Guides", href: "/bird-care", description: "Pet bird care hub" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
