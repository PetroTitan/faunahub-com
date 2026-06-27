import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/yeti-crab";
const TITLE = "Yeti Crab (Kiwa): Hairy Deep-Sea Vent Squat Lobster";
const DESC =
  "Yeti crabs (genus Kiwa) are pale, hairy deep-sea squat lobsters that live near hydrothermal vents and seeps and appear to farm chemosynthetic bacteria.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("yeti-crab"),
});

export default function YetiCrabPage() {
  return (
    <AnimalProfileLayout
      commonName="Yeti Crab"
      scientificName="genus Kiwa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate","Crustacean","Hydrothermal vents"]}
      image={getAnimalImage("yeti-crab") ?? undefined}
      galleryImages={getAnimalGalleryImages("yeti-crab")}
      sources={ANIMAL_SOURCES["yeti-crab"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Yeti crabs are pale, deep-sea squat lobsters in the genus <em>Kiwa</em> (family Kiwaidae), named for the dense, hair-like bristles called setae that cover their claws and limbs. The first species, <em>Kiwa hirsuta</em>, was described in 2005, and the group is young in scientific terms, with several species recognised only recently. These animals live in the deep sea around hydrothermal vents and cold seeps, environments far below the sunlit surface where sunlight never reaches and food is scarce.
          </p>
          <p>
            What makes <em>Kiwa</em> especially notable is its apparent relationship with bacteria. The setae host mats of chemosynthetic bacteria, and evidence indicates that the crabs effectively &#39;farm&#39; and feed on these microbes rather than hunting in the usual sense. Crabs have been observed waving their bristled claws over vent fluid, behaviour that may help the bacteria grow. One species, <em>Kiwa tyleri</em> (the &#39;Hoff crab&#39;) from Antarctic vents, crowds into the relatively warm patches close to vents to survive water that is otherwise near freezing.
          </p>
          <p>
            Note: Much about yeti crabs remains uncertain. They are known mainly from a small number of specimens and from expedition footage gathered by deep-sea research vehicles, and several species were described only within the last two decades. Details of their biology, ranges, and conservation status are still being studied, and any figures should be checked against authoritative marine sources such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, and WoRMS.
          </p>
        </>
      }
      habitat={
        <p>
          Yeti crabs are associated with the deep seafloor, where they cluster around hydrothermal vents and cold seeps. These habitats are part of chemosynthetic ecosystems: communities fuelled not by sunlight but by chemicals emerging from the seabed, which microbes convert into energy. Rather than a single precise depth, <em>Kiwa</em> species are best described as deep-sea animals reported from vent and seep sites in several oceans, including the Pacific, the Southern Ocean, and elsewhere. Conditions in these places vary sharply over short distances, from the warmer water nearest active vents to the near-freezing surroundings, and the crabs are typically found in the narrow, livable zones between these extremes. Depth zones are educational frameworks rather than rigid boundaries, and distribution can differ by species, region, and life stage.
        </p>
      }
      diet={
        <p>
          Yeti crabs appear to rely heavily on the chemosynthetic bacteria growing on their own setae. Evidence indicates that the crabs farm these bacterial mats and then graze them off using specialised mouthparts, making the animal both gardener and consumer. The waving of their bristled claws over vent fluid is thought to bathe the bacteria in the chemicals they need, potentially encouraging growth. This strategy suits a setting where conventional food is limited, though scientists are still working out exactly how much of the diet comes from farmed bacteria versus other sources, and details may vary between <em>Kiwa</em> species.
        </p>
      }
      behavior={
        <>
          <p>
            In the wild, yeti crabs have been seen gathering in dense aggregations near vents and seeps, sometimes piling together where conditions are tolerable. For <em>Kiwa tyleri</em>, this crowding into warm patches is understood as a way to avoid the lethally cold water just beyond the vent field. Their characteristic claw-waving behaviour over vent fluid is among the most-discussed observations, interpreted as part of tending their bacterial mats. Because these animals are observed almost entirely through remotely operated vehicles and brief expeditions, much of their day-to-day behaviour remains poorly documented and open to further study.
          </p>
          <p>
            Yeti crabs are adapted to a world of darkness, cold, high pressure, and limited food. Their eyes are reduced, and they are effectively blind, which fits an environment where sunlight is absent and vision offers little advantage. The dense setae are central to their way of life, providing the surface on which chemosynthetic bacteria grow, an arrangement that ties the crab directly into the vent&#39;s chemical energy supply. By living within the narrow comfortable margins around vents, species such as <em>Kiwa tyleri</em> tolerate conditions that shift from warm to near freezing over a short distance. Together, these traits illustrate how deep-sea life can exploit chemically powered ecosystems rather than depending on the sun.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People essentially never encounter yeti crabs directly; they live in remote deep-sea habitats reached only by research submersibles and remotely operated vehicles, and they are known mainly to scientists studying vent and seep communities. They are not aquarium animals, and there is no meaningful context for keeping or handling them. Their conservation status is not well assessed, which is typical for deep-sea species described so recently, and population trends are largely unknown. Research interest centres on understanding how these animals farm bacteria and survive extreme conditions, and any claims about their numbers or threats should be treated cautiously and checked against authoritative marine sources.
        </p>
      }
      faqs={[
        {
          question: "Why are yeti crabs covered in hair?",
          answer:
            "The 'hair' is actually dense bristles called setae on their claws and limbs. These bristles host mats of chemosynthetic bacteria, which the crabs appear to farm and eat. So the hairy appearance is closely tied to how Kiwa species feed in the deep sea.",
        },
        {
          question: "Where do yeti crabs live?",
          answer:
            "They live in the deep sea around hydrothermal vents and cold seeps on the seafloor, far below the sunlit surface. Different Kiwa species have been reported from sites in several oceans, including the Pacific and the Southern Ocean. These are chemosynthetic habitats powered by chemicals rather than sunlight.",
        },
        {
          question: "Can yeti crabs see?",
          answer:
            "Their eyes are reduced, and they are considered effectively blind. In the permanent darkness of the deep sea, vision provides little benefit, so they rely on other senses. This is a common pattern among animals adapted to lightless environments.",
        },
        {
          question: "Are yeti crabs endangered?",
          answer:
            "Their conservation status is not well assessed, which is typical for deep-sea species described only recently. Population sizes and trends are largely unknown because the animals are so difficult to study. Any statements about their status should be checked against authoritative marine sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Squat lobsters (deep-sea decapod crustaceans)" },
        { label: "Higher classification", value: "Genus Kiwa, family Kiwaidae" },
        { label: "Diet", value: "Chemosynthetic bacteria farmed on their bristles" },
        { label: "Notable trait", value: "Claws and limbs covered in dense hair-like setae" },
        { label: "Adaptation", value: "Reduced eyes; effectively blind in the dark" },
        { label: "Habitat", value: "Deep-sea hydrothermal vents and cold seeps" },
        { label: "Depth association", value: "Deep sea; hydrothermal vents and seeps on the deep seafloor" },
        { label: "Conservation status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Hydrothermal Vent Tubeworm", href: "/animals/hydrothermal-vent-tubeworm", description: "Another vent animal" },
        { label: "Giant Isopod Profile", href: "/animals/giant-isopod", description: "A deep-sea crustacean" },
        { label: "Crab Profile", href: "/animals/crab", description: "Crabs more broadly" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
