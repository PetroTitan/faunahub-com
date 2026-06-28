import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/atlantic-salmon";
const TITLE = "Atlantic Salmon: Migratory North Atlantic Fish";
const DESC =
  "Learn about the Atlantic salmon (Salmo salar), an anadromous fish of North Atlantic rivers and seas, including its life cycle, ecology, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("atlantic-salmon"),
});

export default function AtlanticSalmonPage() {
  return (
    <AnimalProfileLayout
      commonName="Atlantic Salmon"
      scientificName="Salmo salar"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Anadromous","Salmonid"]}
      image={getAnimalImage("atlantic-salmon") ?? undefined}
      galleryImages={getAnimalGalleryImages("atlantic-salmon")}
      sources={ANIMAL_SOURCES["atlantic-salmon"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Atlantic salmon (<em>Salmo salar</em>) is an anadromous fish, meaning it is born in fresh water, migrates to the sea to feed and grow, and returns to fresh water to spawn. This life history links rivers and the open ocean across much of the species&#39; range, and it has made the Atlantic salmon one of the most studied migratory fishes in the world.
          </p>
          <p>
            Atlantic salmon are associated with rivers that drain into the North Atlantic, occurring in parts of Europe and parts of North America. Beyond wild native populations, the species is also very widely farmed, and farmed and wild contexts are distinct: this profile focuses on the wild animal and its natural ecology rather than aquaculture.
          </p>
          <p>
            Wild populations have declined in many areas, and on the IUCN Red List the species was reassessed as Near Threatened in 2023. A conservation assessment of this kind reflects current understanding and can change as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Atlantic salmon belongs to the family Salmonidae, within the order Salmoniformes, a group of ray-finned fishes that also includes trouts, chars, and other salmons. Its scientific name is <em>Salmo salar</em>, and it shares the genus <em>Salmo</em> with several species commonly called trout, such as the brown trout (<em>Salmo trutta</em>). It should not be confused with the various Pacific salmons placed in the genus <em>Oncorhynchus</em>, which are a separate group with their own life histories. As a salmonid, the Atlantic salmon is characterized by a small fleshy adipose fin set on the back behind the dorsal fin.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Atlantic salmon is a streamlined, torpedo-shaped fish with a forked tail and the small adipose fin typical of its family. Coloration changes through life and habitat: fish at sea are generally silvery with a darker back and a paler belly, often marked with scattered dark spots on the upper body. As adults return to fresh water and approach spawning, their colors typically become darker and more mottled, and breeding males may develop a hooked lower jaw, known as a kype. Juveniles in rivers, called parr, show a distinct pattern of dark vertical bars along the flanks before they transform into silvery smolts ahead of their seaward migration.
          </p>
        </>
      }
      habitat={
        <p>
          Atlantic salmon are linked to clean, well-oxygenated rivers and streams that drain toward the North Atlantic, where they spawn and where their young develop, as well as the cooler waters of the North Atlantic Ocean, where they feed and grow. The species occurs in parts of Europe and parts of North America rather than across any entire region, and individual populations are tied to particular river systems. Because the animal moves between fresh water and the sea over its life cycle, suitable habitat depends on both healthy rivers and accessible marine feeding areas. Specific migration routes vary among populations and are not detailed here.
        </p>
      }
      diet={
        <p>
          Diet shifts with life stage and habitat. In rivers, young salmon feed largely on aquatic invertebrates, including insect larvae and other small drifting prey. Once they reach the sea, growing salmon become more predatory, taking small fish and other marine organisms that support their growth in the ocean. Adults that have returned to fresh water to spawn typically feed little or not at all during this phase, relying on energy reserves built up at sea.
        </p>
      }
      behavior={
        <>
          <p>
            The Atlantic salmon&#39;s life cycle is defined by long-distance movement between fresh water and the sea. Eggs are laid in gravel nests, called redds, in river beds, where they hatch and the young pass through alevin, fry, and parr stages before becoming smolts adapted to salt water. After a feeding period at sea that may last one or more years, mature fish navigate back toward fresh water to spawn. Unlike many Pacific salmons, some Atlantic salmon can survive spawning and return to the sea, with a portion of individuals spawning more than once over their lives.
          </p>
          <p>
            As a migratory fish, the Atlantic salmon connects freshwater and marine ecosystems, moving energy and nutrients between rivers and the ocean over its life cycle. Its eggs, juveniles, and adults serve as prey for a range of other animals, while adults are predators of invertebrates and smaller fish, placing the species within both river and ocean food webs. Spawning runs can also deliver marine-derived nutrients into river systems. Because the salmon depends on healthy rivers and seas alike, it is often regarded as an indicator of the condition of the waters it uses.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Atlantic salmon has a long cultural and economic history, and the species is very widely farmed, which is a context distinct from wild native populations. On the IUCN Red List, the wild species was reassessed as Near Threatened in 2023, and pressures discussed for salmon commonly include barriers to migration, habitat changes, and conditions in both rivers and the sea; this assessment reflects current understanding and can change over time. The Atlantic salmon is not dangerous to people and is not a pet. Anyone with questions about local fishing rules, river management, or wildlife concerns should contact local wildlife or fisheries authorities, who can provide guidance specific to a given area.
        </p>
      }
      faqs={[
        {
          question: "What does it mean that the Atlantic salmon is anadromous?",
          answer:
            "Anadromous means the fish is born in fresh water, migrates to the sea to feed and grow, and returns to fresh water to spawn. This movement between rivers and the ocean is central to the Atlantic salmon's life cycle.",
        },
        {
          question: "Where are Atlantic salmon found?",
          answer:
            "Wild Atlantic salmon are associated with rivers that drain into the North Atlantic, occurring in parts of Europe and parts of North America, together with North Atlantic ocean waters where they feed. They are also very widely farmed, which is separate from their wild native range.",
        },
        {
          question: "What is the conservation status of the Atlantic salmon?",
          answer:
            "On the IUCN Red List, the species was reassessed as Near Threatened in 2023. Such assessments reflect current understanding and can change as new information becomes available.",
        },
        {
          question: "How is the Atlantic salmon different from Pacific salmon?",
          answer:
            "The Atlantic salmon is the single species Salmo salar in the genus Salmo, while Pacific salmons belong to the separate genus Oncorhynchus. Unlike many Pacific salmons, some Atlantic salmon can survive spawning and may spawn more than once.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Salmo salar" },
        { label: "Animal group", value: "Anadromous ray-finned fish" },
        { label: "Family / order", value: "Salmonidae / Salmoniformes" },
        { label: "Size", value: "Adults often around 0.7-1 m long (varies)" },
        { label: "Diet", value: "Invertebrates in rivers; small fish and marine prey at sea" },
        { label: "Habitat", value: "North Atlantic rivers for spawning; ocean for feeding" },
        { label: "Range", value: "Parts of Europe and North America; also widely farmed" },
        { label: "Conservation status", value: "Near Threatened (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Salmon Profile", href: "/animals/salmon", description: "Salmon more broadly" },
        { label: "Brown Trout", href: "/animals/brown-trout", description: "A close salmonid relative" },
        { label: "European Eel", href: "/animals/european-eel", description: "Another migratory fish" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
