import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pink-river-dolphin";
const TITLE = "Pink River Dolphin (Boto): Amazon Facts";
const DESC =
  "Learn about the pink river dolphin or boto (Inia geoffrensis), an endangered freshwater dolphin of the Amazon and Orinoco river systems in South America.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("pink-river-dolphin"),
});

export default function PinkRiverDolphinPage() {
  return (
    <AnimalProfileLayout
      commonName="Pink River Dolphin"
      scientificName="Inia geoffrensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","River dolphin","Amazon"]}
      image={getAnimalImage("pink-river-dolphin") ?? undefined}
      galleryImages={getAnimalGalleryImages("pink-river-dolphin")}
      sources={ANIMAL_SOURCES["pink-river-dolphin"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The pink river dolphin, also called the boto or Amazon river dolphin (<em>Inia geoffrensis</em>), is a freshwater dolphin associated with the Amazon and Orinoco river systems in parts of South America. Unlike the familiar ocean dolphins, it spends its entire life in rivers, lakes, and the seasonally flooded forests that border them, where its body and senses are shaped for navigating murky, slow-moving water.
          </p>
          <p>
            Adults are often noted for a pinkish or mottled coloration that can become more pronounced with age, alongside a long, slender beak and an unusually flexible neck. These features help the animal move through tight channels and submerged vegetation as water levels rise and fall through the year.
          </p>
          <p>
            The pink river dolphin is listed as Endangered on the IUCN Red List. As with all such assessments, this status reflects current understanding and can be revised as new information becomes available. The species holds a notable place in regional folklore and in the broader study of freshwater ecosystems.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The pink river dolphin is a mammal and a cetacean, placed in the family Iniidae within the toothed whales (order Cetartiodactyla, suborder Odontoceti). Its scientific name is <em>Inia geoffrensis</em>, the recognized species of the genus <em>Inia</em>, and it is grouped with the river dolphins, a distinctive assemblage of freshwater cetaceans that diverged from the dolphins of the open ocean. Researchers recognize several subspecies or regional forms, and the exact number of species and subspecies within <em>Inia</em> is still debated.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a robust freshwater dolphin recognized by its long, narrow beak lined with teeth, a bulbous forehead, and small eyes. The neck vertebrae are not fused as they are in many marine dolphins, giving the animal an unusually flexible neck that lets it turn its head from side to side. Coloration ranges from grey to a striking pink, and the pink tones tend to be more apparent in older or more active individuals. Instead of a tall dorsal fin, it has a low ridge along the back, and its broad flippers aid slow, precise maneuvering through flooded forests and shallow channels.
          </p>
        </>
      }
      habitat={
        <p>
          The pink river dolphin occurs in parts of the Amazon and Orinoco river systems in South America, including associated tributaries, lakes, and seasonally flooded forests. It is a freshwater species and is not found in the open ocean; its range is tied to these river basins rather than to the continent as a whole. As rivers rise during the wet season, the dolphins move into inundated forest, and as waters recede they return to main river channels and deeper pools. Its distribution should be understood as patchy and shaped by water level, river connectivity, and habitat conditions across these systems.
        </p>
      }
      diet={
        <p>
          The pink river dolphin feeds mainly on fish, taking a wide variety of species found in its river habitats, and it is also reported to eat crustaceans and other small aquatic prey. Its long, toothed beak and flexible neck help it pursue prey among submerged roots, vegetation, and the muddy bottoms of flooded forests. Because river water is often turbid, the dolphin relies heavily on echolocation, producing sound pulses and interpreting the returning echoes to locate food in low-visibility conditions.
        </p>
      }
      behavior={
        <>
          <p>
            Pink river dolphins are often seen alone or in small, loose groups rather than the large, tight pods typical of some marine dolphins. They are generally slow-moving and maneuverable, well suited to weaving through narrow channels and flooded woodland. Communication and navigation depend strongly on sound and echolocation. Females give birth to a single calf after a long gestation, and the calf remains dependent on its mother for an extended period, a pattern that contributes to the species&#39; slow reproductive pace.
          </p>
          <p>
            As a predator of fish and other aquatic animals, the pink river dolphin occupies an upper position in the food webs of Amazon and Orinoco freshwater habitats, and its presence is often regarded as an indicator of the broader health of these river systems. Its seasonal movements between main channels and flooded forests link different parts of the aquatic environment. Changes in fish populations, water quality, or river connectivity can affect the dolphin, making it a useful focus for understanding the condition of freshwater ecosystems in the region.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The pink river dolphin features prominently in the folklore and cultural traditions of river communities, and it is the subject of ongoing scientific study and conservation attention. It is listed as Endangered on the IUCN Red List, a status that can change as monitoring continues. Pressures discussed in conservation literature include habitat alteration, river infrastructure, pollution, and interactions with fishing activity. This profile is educational and is not a guide to approaching, feeding, handling, or keeping wild dolphins. Anyone who encounters an injured or stranded animal, or who has concerns about wildlife conflict, should contact local wildlife authorities rather than intervening directly.
        </p>
      }
      faqs={[
        {
          question: "Why is the Amazon river dolphin pink?",
          answer:
            "Adults often show pink or mottled coloration that can become more pronounced with age and activity, ranging from grey to distinct pink tones. The exact shade varies between individuals.",
        },
        {
          question: "Where do pink river dolphins live?",
          answer:
            "They are found in parts of the Amazon and Orinoco river systems in South America, including tributaries, lakes, and seasonally flooded forests. They are a freshwater species and do not live in the open ocean.",
        },
        {
          question: "Is the pink river dolphin endangered?",
          answer:
            "Yes, it is listed as Endangered on the IUCN Red List. This is a current assessment that can be revised as new information about the species becomes available.",
        },
        {
          question: "What do pink river dolphins eat?",
          answer:
            "They feed mainly on fish and also take crustaceans and other small aquatic prey. Because river water is often murky, they rely heavily on echolocation to find food.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Inia geoffrensis" },
        { label: "Animal group", value: "Mammal (freshwater dolphin, cetacean)" },
        { label: "Family/order", value: "Iniidae; Cetartiodactyla (Odontoceti)" },
        { label: "Size", value: "A large freshwater dolphin with a long beak" },
        { label: "Diet", value: "Carnivore; mainly fish, also crustaceans" },
        { label: "Habitat", value: "Rivers, lakes, and flooded forests" },
        { label: "Range", value: "Parts of the Amazon and Orinoco river systems, South America" },
        { label: "Conservation status", value: "Endangered (IUCN Red List; subject to change)" },
      ]}
      relatedLinks={[
        { label: "Dolphin", href: "/animals/dolphin", description: "Dolphins more broadly" },
        { label: "Giant Otter", href: "/animals/giant-otter", description: "Another Amazon river mammal" },
        { label: "Whale", href: "/animals/whale", description: "A fellow cetacean" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
