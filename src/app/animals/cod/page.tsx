import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cod";
const TITLE = "Cod — Profile, Habitat, Diet & Fisheries";
const DESC =
  "Explore the Atlantic cod (Gadus morhua): a cold-water bottom fish of huge historical and economic importance, recognised by its chin barbel and once-vast North Atlantic stocks.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("cod"),
});

export default function CodPage() {
  return (
    <AnimalProfileLayout
      commonName="Cod"
      scientificName="Gadus morhua"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coldwater", "Commercial species"]}
      image={getAnimalImage("cod") ?? undefined}
      galleryImages={getAnimalGalleryImages("cod")}
      sources={ANIMAL_SOURCES.cod}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The Atlantic cod (<em>Gadus morhua</em>) is a large, cold-water bottom fish
            of the North Atlantic and one of the most historically and economically
            important fish in the world. It is recognised by a stout, tapering body, a
            pale lateral line, three rounded dorsal fins, and a single whisker-like
            barbel under the chin used to sense food.
          </p>
          <p>
            Cod live near the seabed over continental shelves and have supported major
            fisheries — and shaped human history and settlement — for centuries.
          </p>
          <p>
            <strong>Conservation note:</strong> several cod stocks were severely depleted
            by overfishing and some have been slow to recover, so management and status
            vary sharply by region. Verify current stock status at NOAA Fisheries and
            the IUCN Red List.
          </p>
        </>
      }
      habitat={
        <p>
          Atlantic cod live in cool waters of the North Atlantic, on both the European
          and North American sides, generally near the bottom over continental shelves
          and banks. Different populations (stocks) occupy distinct regions, from the
          Barents Sea to the Grand Banks off Newfoundland.
        </p>
      }
      diet={
        <p>
          Cod are carnivores with a broad appetite. Young cod eat small invertebrates,
          while larger cod take fish such as herring, capelin, and sand eels, along with
          crustaceans and molluscs. They are important mid-to-upper predators in cold
          shelf ecosystems.
        </p>
      }
      behavior={
        <p>
          Cod often form schools and may undertake seasonal migrations between feeding
          and spawning grounds. They are highly fecund — a large female can release an
          enormous number of eggs in a single spawning season — yet this high output has
          not protected heavily fished stocks from collapse. Cod can be long-lived and
          grow large under good conditions.
        </p>
      }
      humanInteraction={
        <p>
          Few fish have shaped human affairs like cod: it drove exploration, trade, and
          conflict across the North Atlantic. Intense fishing led to dramatic stock
          collapses — most famously off Newfoundland — and recovery has been uneven,
          making cod a leading example of both the value and the fragility of fisheries.
          Consult NOAA Fisheries and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why was cod so historically important?",
          answer:
            "Cod is abundant, nutritious, and (when dried and salted) keeps for a long time, which made it a vital traded food for centuries. It fuelled North Atlantic exploration, trade, and settlement, and even featured in political disputes — few fish have had a comparable impact on human history.",
        },
        {
          question: "What is the barbel under a cod's chin?",
          answer:
            "It's a single whisker-like sensory organ called a barbel. Cod use it to taste and feel for food on or near the seabed, which suits their bottom-feeding lifestyle. The prominent chin barbel is a quick way to recognise a cod.",
        },
        {
          question: "Are cod endangered?",
          answer:
            "It depends on the stock. Some cod populations were severely overfished and have struggled to recover, while others are managed more sustainably. Because status varies so much by region, it should always be checked against current NOAA Fisheries and IUCN Red List assessments.",
        },
        {
          question: "What do cod eat?",
          answer:
            "Cod are carnivores. Smaller individuals eat invertebrates, while larger cod prey on fish such as herring, capelin, and sand eels, plus crustaceans and molluscs, making them important predators in cold shelf seas.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Gadus morhua" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Identifying feature", value: "Chin barbel; pale lateral line" },
        { label: "Diet", value: "Carnivore (fish & invertebrates)" },
        { label: "Habitat", value: "Cold North Atlantic; near seabed" },
        { label: "Significance", value: "Major historical fishery" },
        { label: "Note", value: "Some stocks overfished" },
        { label: "Status", value: "Varies by stock (verify)" },
      ]}
      relatedLinks={[
        { label: "Mackerel Profile", href: "/animals/mackerel", description: "Another key commercial fish" },
        { label: "Tuna Profile", href: "/animals/tuna", description: "A fast open-ocean fish" },
        { label: "Salmon Profile", href: "/animals/salmon", description: "A migratory food fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Shelf-sea habitats in context" },
      ]}
    />
  );
}
