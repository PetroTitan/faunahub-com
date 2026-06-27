import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/gulper-eel";
const TITLE = "Gulper Eel (Pelican Eel): Deep-Sea Fish Profile";
const DESC =
  "Meet the gulper eel (Eurypharynx pelecanoides), or pelican eel, a deep-sea fish with an enormous expandable mouth and slender whip-like tail.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("gulper-eel"),
});

export default function GulperEelPage() {
  return (
    <AnimalProfileLayout
      commonName="Gulper Eel"
      scientificName="Eurypharynx pelecanoides"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Marine fish","Deep sea","Pelican eel"]}
      image={getAnimalImage("gulper-eel") ?? undefined}
      galleryImages={getAnimalGalleryImages("gulper-eel")}
      sources={ANIMAL_SOURCES["gulper-eel"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The gulper eel, also known as the pelican eel, is a deep-sea fish in the order Anguilliformes. Its scientific name is <em>Eurypharynx pelecanoides</em>, and it is instantly recognisable by its oversized, loosely hinged mouth and a balloon-like, expandable lower jaw. The rest of the body is slender and whip-like, ending in a long tail tipped with a small light organ. Compared with many fish, its eyes are tiny, reflecting a life spent in near-total darkness where vision is of limited use.
          </p>
          <p>
            The huge gape gives the gulper eel its name and its reputation, but the mouth is best understood as a flexible tool for gulping water and engulfing prey that arrives unpredictably in food-poor deep water. Despite the dramatic appearance, this is a soft-bodied, weakly built animal suited to slow drifting and ambush rather than fast pursuit. It is found in the deep open ocean worldwide, and is known mainly from net-caught specimens and occasional remotely operated vehicle (ROV) footage rather than from sustained observation.
          </p>
          <p>
            Note: Much about <em>Eurypharynx pelecanoides</em> remains uncertain. What is known comes largely from preserved specimens and rare expedition footage, so details of its behaviour, range, and life history are incompletely documented. Figures and descriptions should be checked against authoritative marine sources such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, and WoRMS, and depth zones here are educational frameworks rather than rigid boundaries.
          </p>
        </>
      }
      habitat={
        <p>
          The gulper eel is a creature of the deep open ocean and is commonly associated with bathypelagic waters, the so-called &quot;midnight&quot; depths far below the sunlit surface where no daylight reaches. It is reported worldwide rather than from a single region, drifting through the cold, dark, high-pressure mid-water rather than living on the seafloor. As with many deep-sea animals, its exact depth distribution can vary by life stage, region, and source, so it is most honest to describe it as a deep open-ocean species typically associated with the bathypelagic zone rather than confined to a single precise band.
        </p>
      }
      diet={
        <p>
          Despite its enormous mouth, the gulper eel mainly eats small crustaceans and small fish. The large, expandable gape appears to help it capture relatively large or unpredictable prey when it appears, and to gulp in water, but day-to-day feeding seems to focus on small items that are easier to find in food-poor deep water. The mismatch between the dramatic mouth and the modest diet is one of the more interesting puzzles of this animal, and detailed feeding observations remain limited.
        </p>
      }
      behavior={
        <>
          <p>
            Behaviourally, the gulper eel is built for patience rather than speed. Its soft, weakly muscled body suits a lifestyle of slow drifting and ambush in deep water where food is scarce and energy must be conserved. The small light organ at the tip of its long tail is thought to play a role in attracting prey or in signalling, though its exact use is not firmly established. Because the species is so rarely observed alive, much of its natural behaviour is inferred rather than directly documented.
          </p>
          <p>
            The gulper eel shows several adaptations to life in darkness, cold, pressure, and chronic food scarcity. Its tiny eyes reflect an environment where vision matters little, while the expandable mouth and pouch-like lower jaw allow it to take advantage of whatever prey drifts within reach. A slender, lightweight, soft-bodied build conserves energy in a setting where meals are unpredictable, and the luminous tail tip represents the kind of bioluminescent feature common among deep-sea animals. Together these traits describe a fish finely tuned to the constraints of the deep midwater rather than to active hunting near the surface.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People very rarely encounter gulper eels. Most knowledge comes from specimens caught in deep nets and from a handful of ROV encounters during deep-sea research expeditions, which is why so much about the species remains poorly known. The gulper eel is not an aquarium animal and is not kept as a pet; it is a wild deep-sea fish studied through science and exploration. Its conservation status is not well assessed, as is typical for deep-sea species, and any claims about its population or threats should be treated cautiously and verified against authoritative marine sources.
        </p>
      }
      faqs={[
        {
          question: "Why does the gulper eel have such a huge mouth?",
          answer:
            "The enormous, loosely hinged mouth and expandable lower jaw let the gulper eel engulf relatively large or unpredictable prey and gulp in water in the food-poor deep ocean. Even so, it mainly eats small crustaceans and small fish, so the giant gape seems to be more about flexibility than about routinely swallowing large animals.",
        },
        {
          question: "How deep does the gulper eel live?",
          answer:
            "It is a deep open-ocean fish commonly associated with the bathypelagic, or \"midnight,\" depths far below the sunlit surface, and it is reported worldwide. Exact depths can vary by life stage, region, and source, so it is best described qualitatively rather than as a single fixed range.",
        },
        {
          question: "Is the gulper eel dangerous to humans?",
          answer:
            "No. It is a soft-bodied, weakly built deep-sea fish that lives far from people and is suited to slow drifting and ambush rather than pursuit. Humans almost never encounter it except as net-caught specimens or in rare expedition footage.",
        },
        {
          question: "What is the light at the end of its tail for?",
          answer:
            "The long tail ends in a small light organ, a form of bioluminescence common among deep-sea animals. It is thought to help attract prey or to signal, but because the species is so rarely seen alive, its exact function is not firmly established.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Deep-sea eel (pelican eel)" },
        { label: "Higher classification", value: "Order Anguilliformes; Eurypharynx pelecanoides" },
        { label: "Diet", value: "Mainly small crustaceans and small fish" },
        { label: "Notable trait", value: "Enormous, loosely hinged, expandable mouth and pouch-like lower jaw" },
        { label: "Adaptation", value: "Tiny eyes, soft lightweight body, and a luminous tail tip for life in darkness" },
        { label: "Habitat", value: "Deep open ocean, worldwide" },
        { label: "Depth association", value: "Deep sea; commonly associated with bathypelagic (\"midnight\") depths" },
        { label: "Conservation status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "Another deep-sea predator" },
        { label: "Lanternfish Profile", href: "/animals/lanternfish", description: "A glowing deep-sea fish" },
        { label: "Eel Profile", href: "/animals/eel", description: "Eels more broadly" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
