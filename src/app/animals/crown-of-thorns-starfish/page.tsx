import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/crown-of-thorns-starfish";
const TITLE = "Crown-of-thorns Starfish: Coral-Feeding Sea Star";
const DESC =
  "Learn about the crown-of-thorns starfish, a native coral-feeding sea star of Indo-Pacific reefs, with notes on its ecology, outbreaks, and safety.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("crown-of-thorns-starfish"),
});

export default function CrownOfThornsStarfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Crown-of-thorns Starfish"
      scientificName="Acanthaster (e.g. Acanthaster planci)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate","Sea star","Reef"]}
      image={getAnimalImage("crown-of-thorns-starfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("crown-of-thorns-starfish")}
      sources={ANIMAL_SOURCES["crown-of-thorns-starfish"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The crown-of-thorns starfish (genus <em>Acanthaster</em>, often referenced as <em>Acanthaster planci</em>) is a large, many-armed sea star found on coral reefs across parts of the Indo-Pacific, including the Great Barrier Reef off northeastern Australia. It is named for the numerous long, sharp spines that cover its upper surface. Unlike most familiar five-armed sea stars, it typically bears many arms radiating from a broad central disc, giving it a distinctive flattened, spiny appearance.
          </p>
          <p>
            It is a native member of these reef ecosystems and feeds on living coral. Under normal conditions it is part of the natural reef community. At times, however, its populations can rise sharply in events known as outbreaks, during which large numbers of individuals can consume substantial areas of coral. Scientists study these population swings to better understand reef health and the factors that may influence them.
          </p>
          <p>
            Because of its spines and feeding habits, the crown-of-thorns starfish is closely monitored by reef researchers and management agencies. It is best understood not as a villain but as a natural reef organism whose population dynamics can have significant effects on the coral communities it inhabits.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The crown-of-thorns starfish belongs to the genus <em>Acanthaster</em>, with the form most commonly referenced as <em>Acanthaster planci</em>. Ongoing research suggests the group may include more than one species or distinct regional lineages across the Indo-Pacific, so it is best treated as a genus-level grouping whose internal divisions are still being examined. It is an echinoderm (phylum Echinodermata), placing it in the same broad phylum as other sea stars, sea urchins, brittle stars and sea cucumbers. Within that group it is a sea star (class Asteroidea), and it is placed in the family Acanthasteridae. The precise number of species recognized continues to be reviewed by taxonomists.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is one of the larger sea stars, with a soft, flattened body and many tapering arms rather than the typical five. Its most recognizable feature is the dense covering of long, sharp spines on the upper surface, which give the animal its common name. Coloration varies widely between individuals and regions, ranging from grayish and reddish-brown to purplish or blue-green tones. Beneath the body, like other sea stars, it bears numerous tube feet used for movement and for gripping the reef surface.
          </p>
        </>
      }
      habitat={
        <p>
          The crown-of-thorns starfish is a marine, reef-dwelling species associated with tropical coral reefs in parts of the Indo-Pacific, broadly from the western Indian Ocean and Red Sea region eastward across the Pacific, and including reefs of the Great Barrier Reef off northeastern Australia. It is a native component of these reef systems rather than an introduced one. It is typically found in shallow to moderately deep reef waters where living coral is present, sheltering among reef structure and moving over coral surfaces to feed. Its distribution should be understood as patchy across suitable reef habitat rather than uniform throughout any single region.
        </p>
      }
      diet={
        <p>
          This sea star feeds primarily on living coral polyps, making it one of the relatively few animals that consume hard, reef-building corals directly. It feeds by everting its stomach out through its mouth and spreading it over the coral surface, digesting the soft tissue externally and leaving behind the pale coral skeleton. Individuals often show feeding preferences for certain fast-growing coral types, though they can consume a wider range of corals when preferred types are scarce. Through this feeding it plays a direct role in shaping the living coral cover of the reefs it inhabits.
        </p>
      }
      behavior={
        <>
          <p>
            Crown-of-thorns starfish are often more active at night and may shelter within reef crevices during the day, especially as juveniles. They move slowly across the reef using their tube feet. Reproduction occurs through external spawning, in which adults release eggs and sperm into the water; fertilized eggs develop into free-swimming larvae that drift in the plankton before settling onto the reef and transforming into the recognizable spiny form. The survival of eggs and larvae is thought to be one of several factors that may influence whether populations remain low or build toward an outbreak.
          </p>
          <p>
            As a native coral predator, the crown-of-thorns starfish is part of the natural functioning of Indo-Pacific reefs. At normal population levels its feeding can contribute to coral diversity by limiting fast-growing corals and creating space for slower-growing or less competitive species. During outbreaks, however, concentrated feeding can remove coral cover across large reef areas, with knock-on effects for the many animals that depend on healthy coral. Its eggs, larvae and juveniles serve as food for various reef animals, linking it into the wider reef food web at multiple life stages.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The crown-of-thorns starfish has venomous spines that can cause painful injury if a person makes contact with them, so it should not be handled or touched. Anyone who is injured or experiences a reaction after contact should seek qualified medical professionals or local health authorities; this profile does not provide first-aid, treatment or diagnostic guidance. It is a native reef species, and questions about reef management, monitoring or outbreaks are matters for marine scientists and relevant wildlife and reef authorities rather than for individual intervention. It is best appreciated calmly as a natural part of coral reef ecosystems rather than framed sensationally.
        </p>
      }
      faqs={[
        {
          question: "Is the crown-of-thorns starfish native or invasive?",
          answer:
            "It is a native species of Indo-Pacific coral reefs, including the Great Barrier Reef. It is not an introduced animal, though its populations can sometimes rise sharply in natural outbreaks.",
        },
        {
          question: "Why does it have so many arms and spines?",
          answer:
            "Unlike many sea stars that have five arms, the crown-of-thorns typically has many arms around a broad central disc. Its upper surface is densely covered with long, sharp spines, which give it its common name.",
        },
        {
          question: "Are crown-of-thorns starfish dangerous to people?",
          answer:
            "Their spines are venomous and can cause painful injury, so they should not be handled or touched. Anyone injured or reacting after contact should seek qualified medical professionals or local health authorities.",
        },
        {
          question: "What is its conservation status?",
          answer:
            "The crown-of-thorns starfish has not been assessed by the IUCN Red List. As with any species, conservation framing can change as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Acanthaster (e.g. Acanthaster planci)" },
        { label: "Animal group", value: "Invertebrate (sea star / echinoderm)" },
        { label: "Family/class", value: "Family Acanthasteridae, class Asteroidea" },
        { label: "Body form", value: "Many-armed, spiny, flattened sea star" },
        { label: "Diet", value: "Living coral polyps (coral-feeding)" },
        { label: "Habitat", value: "Tropical coral reefs, shallow to moderately deep" },
        { label: "Range", value: "Parts of the Indo-Pacific, including the Great Barrier Reef" },
        { label: "Conservation status", value: "Not assessed by the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Starfish", href: "/animals/starfish", description: "Sea stars more broadly" },
        { label: "Coral", href: "/animals/coral", description: "Its main food" },
        { label: "Octopus", href: "/animals/octopus", description: "Another reef invertebrate" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
