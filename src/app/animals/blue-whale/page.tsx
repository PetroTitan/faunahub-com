import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/blue-whale";
const TITLE = "Blue Whale — Profile, Size, Krill Diet & Ocean Range";
const DESC =
  "Explore the blue whale (Balaenoptera musculus): the largest animal known to have lived, its krill lunge feeding, and its slow recovery from whaling.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("blue-whale"),
});

export default function BlueWhalePage() {
  return (
    <AnimalProfileLayout
      commonName="Blue Whale"
      scientificName="Balaenoptera musculus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal","Baleen Whale","Largest Animal"]}
      image={getAnimalImage("blue-whale") ?? undefined}
      galleryImages={getAnimalGalleryImages("blue-whale")}
      sources={ANIMAL_SOURCES["blue-whale"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The blue whale (<em>Balaenoptera musculus</em>) is the largest animal known to have existed — larger than any dinosaur described from the fossil record. It is a baleen whale of the rorqual family, slender in build, mottled blue-grey, with a small dorsal fin set far back along the body.
        </p>
        <p>
          Blue whales feed almost entirely on <strong>krill</strong>, small shrimp-like crustaceans, which they take by lunge feeding: accelerating into a swarm with the mouth open, engulfing an enormous volume of water, then forcing it out through baleen plates and swallowing what remains.
        </p>
        <p>
          <strong>Conservation note:</strong> blue whales were reduced drastically by twentieth-century industrial whaling and remain far below historic numbers. Recovery is uneven between populations. Verify current status at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Blue whales occur in all major oceans, generally in deep offshore water, and different populations follow different patterns — many move between higher-latitude feeding areas and lower-latitude breeding areas, though not all migrate in a simple way. Feeding is concentrated where oceanographic conditions concentrate krill, such as upwellings and shelf edges.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Krill, overwhelmingly. A blue whale&apos;s pleated throat expands enormously during a feeding lunge, allowing it to take in a volume of water greater than its own body, which is then filtered through baleen. Feeding is highly seasonal and concentrated in productive waters, with the animal building reserves that carry it through less productive periods.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Blue whales are usually seen alone or in small groups, though many may gather where food is abundant. They produce extremely loud, very low-frequency calls that travel long distances underwater and are among the loudest sounds made by any animal; these are thought to function in communication over great range. The blow is tall and columnar, and the animal typically shows its small dorsal fin long after the blow.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Blue whales were a principal target of industrial whaling once explosive harpoons and factory ships made them catchable, and populations collapsed before protection came into force. Present-day risks include ship strikes, entanglement in fishing gear, underwater noise, and changes in krill distribution driven by ocean conditions. Verify current status and population trends at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is the blue whale the largest animal ever?",
          answer:
            "On current evidence, yes. The blue whale is the largest animal known to have lived, exceeding any dinosaur described from the fossil record. Water supports its mass in a way that land could not, which is part of why the largest animals have been marine.",
        },
        {
          question: "What do blue whales eat?",
          answer:
            "Almost entirely krill — small shrimp-like crustaceans. They feed by lunging into dense swarms with the mouth open, taking in a huge volume of water, then pushing the water out through baleen plates and swallowing the krill left behind.",
        },
        {
          question: "How loud are blue whale calls?",
          answer:
            "Their low-frequency calls are among the loudest sounds produced by any animal and can travel very long distances through the ocean. They are thought to serve communication across great range, though researchers continue to study exactly what the different call types mean.",
        },
        {
          question: "Are blue whales endangered?",
          answer:
            "Blue whale numbers were reduced drastically by twentieth-century whaling and remain far below historic levels, with recovery differing between populations. Because assessments are revised as new data arrives, current status should be checked directly against the IUCN Red List and NOAA Fisheries.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Balaenoptera musculus" },
        { label: "Family", value: "Balaenopteridae (rorquals)" },
        { label: "Class", value: "Mammalia" },
        { label: "Claim to fame", value: "Largest animal known to have lived" },
        { label: "Feeding", value: "Lunge feeding through baleen" },
        { label: "Diet", value: "Almost entirely krill" },
        { label: "Range", value: "All major oceans" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Humpback Whale Profile", href: "/animals/humpback-whale", description: "Another rorqual" },
        { label: "Sperm Whale Profile", href: "/animals/sperm-whale", description: "The largest toothed whale" },
        { label: "Krill Profile", href: "/animals/krill", description: "The blue whale's principal prey" },
        { label: "Whale Profile", href: "/animals/whale", description: "Group-level overview" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
