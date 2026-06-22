import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/boat-billed-heron";
const TITLE = "Boat-billed Heron — Profile, the Night Heron with a Scoop-Shaped Bill";
const DESC =
  "Explore the boat-billed heron (Cochlearius cochlearius): a stocky, big-eyed nocturnal heron of American wetlands whose broad, boat-shaped bill scoops prey from the water in the dark.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("boat-billed-heron"),
});

export default function BoatBilledHeronPage() {
  return (
    <AnimalProfileLayout
      commonName="Boat-billed Heron"
      scientificName="Cochlearius cochlearius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wetland", "Nocturnal"]}
      image={getAnimalImage("boat-billed-heron") ?? undefined}
      galleryImages={getAnimalGalleryImages("boat-billed-heron")}
      sources={ANIMAL_SOURCES["boat-billed-heron"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The boat-billed heron (<em>Cochlearius cochlearius</em>) is an unusual, stocky heron of
            the American tropics, instantly known by its enormous, broad, scoop-like bill — shaped
            rather like an upturned boat — and its big, dark eyes. Mostly grey, white, and black
            with a shaggy black crest, it is a kind of night heron, active in the dim hours, and the
            big eyes are an adaptation for hunting in low light.
          </p>
          <p>
            That remarkable wide bill is the bird&apos;s signature tool: instead of the dagger-like
            bill most herons use to spear prey, the boat-billed heron uses its broad bill to scoop
            and grab small animals from the water, often by touch in the dark.
          </p>
          <p>
            <strong>Note:</strong> details here cover the boat-billed heron as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Boat-billed herons live in wetlands across the American tropics — from Mexico through
          Central America and into much of South America — favouring mangroves, swamps, wooded
          riverbanks, and the margins of slow streams and pools. They like areas with dense
          waterside vegetation where they can roost by day and forage along the water at night.
        </p>
      }
      diet={
        <p>
          The boat-billed heron is a carnivore that eats fish, shrimp and other crustaceans,
          insects, amphibians, and small animals of the water&apos;s edge. Rather than spearing
          prey, it uses its wide, sensitive bill to scoop and snap up small animals, often
          detecting them by touch in murky water or darkness. It typically forages quietly and
          patiently along the shallows at night.
        </p>
      }
      behavior={
        <p>
          Being largely nocturnal sets the boat-billed heron apart from many of its day-active
          heron relatives, and its huge eyes gather light for hunting after dusk. It tends to stand
          and wait or move slowly through the shallows, then scoop prey with a quick sweep of the
          broad bill. By day boat-billed herons usually roost in groups in waterside trees and
          mangroves, and they nest colonially. They are generally quiet but can give croaks and
          other calls, and a clattering of the bill, especially around the nest. Their broad bill
          and night-time, touch-based foraging make them one of the more distinctive herons.
        </p>
      }
      humanInteraction={
        <p>
          Boat-billed herons are widespread across the American tropics and are not currently
          considered globally threatened, though like all wetland birds they depend on healthy
          marshes and mangroves and can be affected by habitat loss and disturbance. They are a
          favourite find for birdwatchers thanks to their odd bill and big-eyed look. Conserving
          mangroves and wetlands supports them. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the boat-billed heron have such a wide bill?",
          answer:
            "Its broad, scoop-shaped bill is a feeding adaptation. Instead of spearing prey like a typical heron, the boat-billed heron uses the wide bill to scoop and grab small animals from the water — often by touch in the dark. The shape, a bit like an upturned boat, gives the bird both its name and its unusual hunting style.",
        },
        {
          question: "Is the boat-billed heron a true heron?",
          answer:
            "Yes — it's a member of the heron family, generally regarded as a specialised kind of night heron. It differs from most herons in its huge scoop-like bill and its strongly nocturnal habits, but it shares the family's wetland lifestyle and overall body plan.",
        },
        {
          question: "Why does it have such big eyes?",
          answer:
            "Because it's largely nocturnal. The boat-billed heron's large eyes gather as much light as possible, helping it see and hunt in the dim hours around dusk and at night. Combined with its touch-sensitive bill, the big eyes suit a bird that forages along the water's edge after dark.",
        },
        {
          question: "What does the boat-billed heron eat?",
          answer:
            "It's a carnivore that takes fish, shrimp and other crustaceans, insects, amphibians, and other small animals from the shallows. Foraging mostly at night, it scoops prey with its broad bill, frequently detecting it by touch in murky or dark water rather than by sight alone.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cochlearius cochlearius" },
        { label: "Class", value: "Aves (heron; a night heron)" },
        { label: "Signature trait", value: "Broad, boat-shaped scooping bill" },
        { label: "Eyes", value: "Large, for low-light hunting" },
        { label: "Activity", value: "Mainly nocturnal" },
        { label: "Diet", value: "Fish, crustaceans, insects, amphibians" },
        { label: "Habitat", value: "Mangroves, swamps & wooded waters" },
        { label: "Range", value: "American tropics (Mexico to S. America)" },
      ]}
      relatedLinks={[
        { label: "Heron Profile", href: "/animals/heron", description: "Herons as a group" },
        { label: "Stork Profile", href: "/animals/stork", description: "Another large wading bird" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "Another waterside hunter" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical wetland fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
