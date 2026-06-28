import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/guanaco";
const TITLE = "Guanaco: Wild Camelid of South America";
const DESC =
  "Learn about the guanaco (Lama guanicoe), a wild South American camelid of the Andes and Patagonian steppe and the wild ancestor of the domestic llama.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("guanaco"),
});

export default function GuanacoPage() {
  return (
    <AnimalProfileLayout
      commonName="Guanaco"
      scientificName="Lama guanicoe"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Wild camelid","Andes/Patagonia"]}
      image={getAnimalImage("guanaco") ?? undefined}
      galleryImages={getAnimalGalleryImages("guanaco")}
      sources={ANIMAL_SOURCES["guanaco"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The guanaco (<em>Lama guanicoe</em>) is a wild camelid found in parts of South America, particularly across the Andes and the open Patagonian steppe. Slender, long-necked, and well adapted to cold, dry, high-elevation and windswept country, it is one of the continent&#39;s most recognizable wild grazing mammals. It lives in herds and is noted for being sure-footed across rough, uneven terrain.
          </p>
          <p>
            The guanaco is widely regarded as the wild ancestor of the domestic llama, and it is closely related to other South American camelids. Because of this connection, it is sometimes confused with the llama, but the guanaco is a wild animal that occurs in natural habitats rather than a domesticated one kept by people. This profile keeps that distinction clear throughout.
          </p>
          <p>
            On the IUCN Red List, the guanaco is currently assessed as Least Concern. Like all conservation assessments, this status reflects a snapshot in time and can be revised as new information becomes available. The guanaco remains an educational example of how a wild species and its domesticated relative can share ancestry while leading very different lives.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The guanaco&#39;s scientific name is <em>Lama guanicoe</em>, and it belongs to the camel family, Camelidae, within the order Artiodactyla (even-toed ungulates). It is placed in the genus <em>Lama</em> and is one of the South American camelids, a group that also includes the wild vicuna (<em>Vicugna vicugna</em>) and the domesticated llama and alpaca. The guanaco is the wild species most often identified as the ancestor of the domestic llama, which means the two are very closely related even though one is wild and the other has been bred and kept by people for a long time. Calling the guanaco a camelid simply places it among the long-necked, even-toed grazing mammals adapted to the Americas.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The guanaco is a medium to large camelid with a slender build, a long neck, long legs, and a small, upright head with large eyes and pointed ears. Its coat is typically warm tan to light brown across the back and upper body, fading to paler, often whitish underparts, with a greyish face. Compared with a domestic llama, the guanaco usually looks leaner and more uniformly colored, lacking the patchwork or variable coloring that selective breeding has produced in llamas. Its padded, two-toed feet and balanced proportions help explain its reputation for being sure-footed on rocky and uneven ground.
          </p>
        </>
      }
      habitat={
        <p>
          The guanaco is associated with open landscapes in parts of South America, including the Andean highlands, the Patagonian steppe, and various grasslands and shrublands. It tends to occur in dry, open country where low vegetation, wide visibility, and room to move suit a herd-living grazer. Its range spans a notable spread of elevations, from high mountain zones to lower steppe, though it is best described as occurring in parts of these regions rather than across any continent in full. As with many wide-ranging species, distribution is patchy and shaped by terrain, vegetation, and local conditions, so cautious, region-based descriptions are more accurate than sweeping range claims.
        </p>
      }
      diet={
        <p>
          The guanaco is a herbivore that feeds on the plants available in its often sparse, dry habitats, including grasses, low shrubs, and other ground vegetation. As a grazing and browsing camelid, it is adapted to extract nourishment from tough, fibrous plant material typical of steppe and highland environments. Its feeding habits are shaped by what these arid and semi-arid landscapes offer, and herds tend to move across the terrain as they forage. This plant-based diet places the guanaco among the grazing mammals that help shape open grassland and shrubland ecosystems.
        </p>
      }
      behavior={
        <>
          <p>
            Guanacos are social animals that live in herds, a structure that supports vigilance and helps individuals respond to disturbance across open terrain. They are noted for being alert and sure-footed, moving capably over rough ground and broken slopes. When alarmed, guanacos can be fast-moving and may give vocal alarm calls, and herds often shift across the landscape in response to forage and conditions. Their herd-based life cycle, in which young are raised within the group, reflects a pattern common among open-country grazing mammals that rely on numbers and watchfulness for safety.
          </p>
          <p>
            As a native grazer of open country, the guanaco plays a meaningful ecological role in the habitats of parts of South America. By feeding on grasses and shrubs, it influences vegetation patterns and participates in nutrient cycling across steppe, grassland, and highland systems. As a herbivore, it also forms part of the food web that supports native predators and scavengers in these regions. In this way the guanaco is woven into the functioning of the dry, open ecosystems it inhabits, much as other large grazers shape the landscapes they depend on.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The guanaco has a long-standing connection to people through its relationship with the domestic llama, which is widely considered to descend from it; the llama, however, is a domesticated animal, while the guanaco is wild and should be understood as such. The guanaco is currently listed as Least Concern on the IUCN Red List, a status that can change as conditions and assessments are updated. As with all wild animals, observation is best done at a respectful distance and within the guidance of protected areas and local rules; concerns about wildlife or any human-wildlife conflict should be directed to local wildlife authorities. Keeping the wild guanaco distinct from the domestic llama is the most important point for accurate, educational understanding.
        </p>
      }
      faqs={[
        {
          question: "Is the guanaco the same as a llama?",
          answer:
            "No. The guanaco is a wild camelid and is widely regarded as the wild ancestor of the domestic llama. The llama is a domesticated animal kept by people, while the guanaco lives in natural habitats.",
        },
        {
          question: "Where is the guanaco found?",
          answer:
            "It is associated with parts of South America, including the Andes, the Patagonian steppe, and various grasslands and shrublands. Its distribution is patchy, so it is best described as occurring in parts of these regions rather than across an entire continent.",
        },
        {
          question: "What is the conservation status of the guanaco?",
          answer:
            "The guanaco is currently assessed as Least Concern on the IUCN Red List. This is a snapshot assessment that can be revised over time as new information becomes available.",
        },
        {
          question: "What does the guanaco eat?",
          answer:
            "The guanaco is a herbivore that feeds on grasses, low shrubs, and other ground vegetation found in its dry, open habitats. It is adapted to forage on the tough plant material typical of steppe and highland environments.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lama guanicoe" },
        { label: "Animal group", value: "Mammal (camelid)" },
        { label: "Family/order", value: "Camelidae; Artiodactyla" },
        { label: "Size", value: "Medium to large, slender camelid with long neck and legs" },
        { label: "Diet", value: "Herbivore (grasses, shrubs, ground vegetation)" },
        { label: "Habitat", value: "Andes, Patagonian steppe, grasslands and shrublands" },
        { label: "Range", value: "Parts of South America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; subject to change)" },
      ]}
      relatedLinks={[
        { label: "Vicuna", href: "/animals/vicuna", description: "Another wild Andean camelid" },
        { label: "Llama", href: "/animals/llama", description: "Its domesticated descendant" },
        { label: "Camel", href: "/animals/camel", description: "An Old World relative" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
