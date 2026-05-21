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

const title = "Whale — Overview of Whale Species, Habitat & Behavior";
const description =
  "Whales as marine mammals (infraorder Cetacea). Baleen and toothed whale split, humpback whale as a reference, vocalisation, migration, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/whale",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("whale"),
});

export default function WhalePage() {
  return (
    <AnimalProfileLayout
      commonName="Whale"
      pageTitle={title}
      description={description}
      path="/animals/whale"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal", "Cetacean", "Migratory"]}
      image={getAnimalImage("whale") ?? undefined}
      galleryImages={getAnimalGalleryImages("whale")}
      factsHeaderNote='"Whale" covers a wide range of cetaceans. Reference species below is the humpback whale (Megaptera novaeangliae); blue, sperm, beluga, narwhal, and orca biology differ considerably.'
      overview={
        <>
          <p>
            Whales are large marine mammals of the infraorder Cetacea,
            divided broadly into baleen whales (Mysticeti) and toothed
            whales (Odontoceti, which also includes dolphins and
            porpoises). Like all cetaceans, whales are fully aquatic
            descendants of land-dwelling ancestors and breathe air through
            blowholes at the top of the head.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Whales inhabit every major ocean. Many baleen whale species —
            including the humpback whale (<em>Megaptera novaeangliae</em>)
            — undertake very long seasonal migrations between high-latitude
            feeding grounds and warmer breeding grounds. Several toothed
            whale species occupy specific habitats, from coastal shelves to
            deep open ocean.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Baleen whales filter feed on krill, small fish, and other
            small marine prey, using baleen plates instead of teeth.
            Toothed whales are active predators of fish, squid, and — in
            some species — other marine mammals. Diet specifics vary
            widely between species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many whale species exhibit complex acoustic behaviour. Humpback
            whale &quot;songs&quot; — long, structured vocal sequences
            produced primarily by males on breeding grounds — are well
            documented and show year-to-year cultural change. Other species
            use echolocation, complex clicks, and social vocalisations.
            Breaching and surface behaviour are commonly observed, although
            their precise function is still studied.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Commercial whaling in the 19th and 20th centuries devastated
            populations of many large whale species. The International
            Whaling Commission imposed a moratorium on commercial whaling
            in 1986; some species have since recovered substantially, while
            others remain depleted. Modern threats include ship strikes,
            entanglement in fishing gear, ocean noise, climate change, and
            pollution. Conservation status varies sharply by species; check
            the IUCN Red List for any specific species of interest.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other cetaceans include dolphins and porpoises. The orca or
          killer whale (<em>Orcinus orca</em>) is, by classification, the
          largest member of the dolphin family Delphinidae rather than a
          baleen whale.
        </p>
      }
      faqs={[
        {
          question: "Are whales fish?",
          answer:
            "No. Whales are mammals — they breathe air, give birth to live young, nurse with milk, and are warm-blooded. They share an ancient land-mammal ancestry with hippos and other artiodactyls.",
        },
        {
          question: "How long can whales hold their breath?",
          answer:
            "Diving capacity varies dramatically by species. Sperm whales and beaked whales can dive for over an hour to great depths; smaller cetaceans surface much more frequently. Authoritative species accounts give specific figures.",
        },
        {
          question: "Do whales sleep?",
          answer:
            "Yes, but in modified ways. Many whale species sleep with one hemisphere of the brain at a time, allowing breathing to continue. Sleep patterns have been studied most thoroughly in toothed whales such as dolphins.",
        },
        {
          question: "Are whales endangered?",
          answer:
            "Status varies sharply by species. Some, like the North Atlantic right whale and vaquita (a porpoise), are critically endangered. Others, like the humpback whale, have recovered substantially since the 1986 moratorium on commercial whaling. Verify per species on the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Humpback whale (Megaptera novaeangliae)" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Cetacea (Artiodactyla)" },
        { label: "Major groups", value: "Baleen whales (Mysticeti), toothed whales (Odontoceti)" },
        { label: "Diet", value: "Varies (filter feeding or active predation)" },
        { label: "Habitat", value: "All major oceans" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Dolphin Profile", href: "/animals/dolphin" },
        { label: "Seal Profile", href: "/animals/seal" },
        { label: "Octopus Profile", href: "/animals/octopus" },
        { label: "Marine Animals Hub", href: "/animal-encyclopedia/marine-animals" },
      ]}
      sources={ANIMAL_SOURCES.whale}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
