import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/deep-sea-coral";
const TITLE = "Deep-Sea Coral: Cold-Water Reef Builders of the Deep";
const DESC =
  "Deep-sea (cold-water) corals build reefs and gardens in cold, dark, deep water without sunlight, feeding on plankton and particles carried by currents.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("deep-sea-coral"),
});

export default function DeepSeaCoralPage() {
  return (
    <AnimalProfileLayout
      commonName="Deep-Sea Coral"
      scientificName="cold-water corals, class Anthozoa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate","Cnidarian","Cold-water coral"]}
      image={getAnimalImage("deep-sea-coral") ?? undefined}
      galleryImages={getAnimalGalleryImages("deep-sea-coral")}
      sources={ANIMAL_SOURCES["deep-sea-coral"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Deep-sea corals, also called cold-water corals, are reef- and garden-building animals in the class Anthozoa that live in cold, dark, deep water rather than the warm, sunlit shallows of tropical reefs. Familiar examples include the stony coral <em>Lophelia pertusa</em> (now usually written <em>Desmophyllum pertusum</em>), a well-documented builder of deep reefs. Despite the shared name, these animals are very different from the bright shallow-reef corals most people picture.
          </p>
          <p>
            Because there is no sunlight in their habitat, deep-sea corals do not host the photosynthetic algae (zooxanthellae) that power shallow reef corals. Instead, they capture food, such as plankton and organic particles, directly from the passing current. They tend to grow very slowly and can be extremely long-lived, and over time their structures form &#39;coral gardens&#39; and deep reefs that provide habitat for many other animals. They are found worldwide on seamounts, slopes, and ridges across a very wide depth range, reaching well into the deep ocean.
          </p>
          <p>
            Note: Much about deep-sea corals remains uncertain, and what is known often comes from specimens, remotely operated vehicle surveys, and expedition footage rather than long-term observation. Distribution, growth rates, and conservation status vary by species and region and are frequently poorly known. Any specific figures should be checked against authoritative marine sources such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, and WoRMS.
          </p>
        </>
      }
      habitat={
        <p>
          Deep-sea corals are reported worldwide from seamounts, continental slopes, ridges, and other hard or current-swept seafloor, typically associated with cold, dark, deep water far below the sunlit surface. They occur across a very wide depth range that extends into the deep ocean, and the exact depths vary by species, region, and local conditions, so depth zones are best treated as educational frameworks rather than rigid boundaries. Many cold-water corals favour places where currents deliver a steady supply of food particles, which helps explain their patchy distribution on raised and exposed features.
        </p>
      }
      diet={
        <p>
          Lacking the symbiotic algae that nourish shallow tropical corals, deep-sea corals are suspension feeders that capture food from the water around them. Their polyps extend tentacles to gather plankton and suspended organic particles carried past them by the current. This reliance on passing food is one reason they often grow on raised or current-exposed features where particle supply is more reliable, though feeding details differ among species and remain incompletely studied.
        </p>
      }
      behavior={
        <>
          <p>
            Deep-sea corals are colonial or solitary anthozoans that grow slowly over long periods, with some colonies and reef structures thought to be very old. As they grow, reef-building species such as <em>Desmophyllum pertusum</em> create complex three-dimensional structures that accumulate into deep reefs and coral gardens. These structures shelter and support many other animals, making cold-water coral habitats important biological features of the deep seafloor. Because they are difficult to observe directly, much of their behaviour is inferred from collected specimens and underwater imagery.
          </p>
          <p>
            Deep-sea corals are adapted to an environment defined by darkness, cold, high pressure, and limited, intermittent food. Without sunlight they cannot rely on photosynthetic partners, so they are built instead around efficient suspension feeding from the surrounding current. Very slow growth and long lifespans suit a setting where energy is scarce, but the same traits make recovery from disturbance slow. Their durable skeletons and colonial growth allow them to build lasting structures, yet these structures are physically fragile once damaged.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People rarely encounter deep-sea corals directly, since they live far below the depths reached by casual diving; most knowledge comes from research expeditions using remotely operated and human-occupied vehicles, mapping surveys, and collected specimens. Their slow growth makes them vulnerable to physical disturbance such as bottom trawling, although specific conservation status varies by species and region and is often poorly known. They are not aquarium animals, and their deep-reef habitats are studied and managed as part of broader efforts to understand and protect the deep sea. For any assessment of their status, authoritative marine sources should be consulted.
        </p>
      }
      faqs={[
        {
          question: "Are deep-sea corals the same as tropical reef corals?",
          answer:
            "They belong to the same broad group of animals (class Anthozoa), but they live very differently. Deep-sea, or cold-water, corals inhabit cold, dark, deep water rather than warm, sunlit shallows. Unlike tropical reef corals, they do not host photosynthetic algae and instead feed on particles from the current.",
        },
        {
          question: "How do deep-sea corals get food without sunlight?",
          answer:
            "Because there is no light at depth, they cannot rely on the symbiotic algae that power shallow corals. Instead, their polyps capture plankton and suspended organic particles directly from the passing water. This makes a reliable supply of food-bearing current important to where they thrive.",
        },
        {
          question: "Why are deep-sea corals considered vulnerable?",
          answer:
            "They typically grow very slowly and can be extremely long-lived, so damage is not quickly repaired. Physical disturbance such as bottom trawling can harm their fragile structures. Specific conservation status varies by species and region and is often poorly known, so figures should be checked against authoritative marine sources.",
        },
        {
          question: "Where do deep-sea corals live?",
          answer:
            "They are reported worldwide on seamounts, slopes, ridges, and other deep, cold seafloor features, often where currents supply food. Their depth range is very wide and extends into the deep ocean, and it differs by species and region. Much of their distribution is still being mapped through ongoing exploration.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Cold-water (deep-sea) corals" },
        { label: "Higher classification", value: "Class Anthozoa; e.g. Desmophyllum pertusum (formerly Lophelia pertusa)" },
        { label: "Diet", value: "Suspension feeder; plankton and organic particles from the current" },
        { label: "Notable trait", value: "Builds deep reefs and coral gardens; very slow-growing and long-lived" },
        { label: "Adaptation", value: "Lives without sunlight or symbiotic algae; feeds from passing currents" },
        { label: "Habitat", value: "Seamounts, slopes, and ridges on the cold, dark deep seafloor worldwide" },
        { label: "Depth association", value: "Deep sea; reported across a very wide depth range into the deep ocean" },
        { label: "Conservation status", value: "Varies by species/region; often not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Coral Profile", href: "/animals/coral", description: "Reef-building corals more broadly" },
        { label: "Sea Fan Profile", href: "/animals/sea-fan", description: "Flexible soft corals" },
        { label: "Glass Sponge Profile", href: "/animals/glass-sponge", description: "Another deep-seafloor animal" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
