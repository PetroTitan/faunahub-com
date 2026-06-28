import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/macaw";
const TITLE = "Macaw: Large Neotropical Parrots Explained";
const DESC =
  "Macaws are large, long-tailed Neotropical parrots of Central and South America. Learn their appearance, ecology, and varying conservation status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("macaw"),
});

export default function MacawPage() {
  return (
    <AnimalProfileLayout
      commonName="Macaw"
      scientificName="Ara and related genera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Parrot","Neotropical"]}
      image={getAnimalImage("macaw") ?? undefined}
      galleryImages={getAnimalGalleryImages("macaw")}
      sources={ANIMAL_SOURCES["macaw"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Macaws are among the most recognisable parrots in the world: large, long-tailed birds with strong, hooked beaks and, in many species, vivid plumage. The name &quot;macaw&quot; does not refer to a single species but to a group of related parrots placed in several genera, including <em>Ara</em>, <em>Anodorhynchus</em>, and <em>Primolius</em>. They are associated mainly with the forests and woodlands of Central and South America, a region often described as part of the Neotropics.
          </p>
          <p>
            Because &quot;macaw&quot; covers many different species, their characteristics and circumstances vary considerably from one to the next. Some are widespread and currently of lower conservation concern, while others face serious pressures and are classed as threatened. This profile treats macaws as a group, noting shared features while making clear where members differ in size, colour, range, and conservation status.
          </p>
          <p>
            Powerful beaks adapted for cracking hard nuts and seeds, strong feet for climbing and handling food, and a generally social nature are recurring themes across the group. These traits make macaws important members of the forest communities in which they live, and a long-standing subject of interest in natural history and conservation.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Macaws belong to the parrot family Psittacidae, within the order Psittaciformes. The term &quot;macaw&quot; is applied to a group of large, long-tailed New World parrots spread across several genera rather than to one species. Well-known examples include members of the genus <em>Ara</em>, the large blue species of <em>Anodorhynchus</em> (such as the hyacinth macaw, <em>Anodorhynchus hyacinthinus</em>), and the smaller macaws of <em>Primolius</em>; other genera, including <em>Cyanopsitta</em>, <em>Orthopsittaca</em>, and <em>Diopsittaca</em>, are also placed among the macaws. Because the grouping spans multiple genera and many species, statements about macaws are best understood as generalisations, with important differences existing between individual species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Macaws are typically large parrots with long, tapering tail feathers, broad wings, and heavy, strongly hooked beaks suited to cracking hard food items. Many species are brightly coloured, with combinations of blue, red, yellow, and green, while some, such as the hyacinth macaw, are a deep cobalt blue. A common recognition feature is the area of bare or lightly feathered facial skin around the eyes and beak, which can vary in pattern between species. Size differs widely across the group, from the smaller macaws to some of the largest parrots in the world, so overall length and wingspan should be read as ranges rather than fixed figures.
          </p>
        </>
      }
      habitat={
        <p>
          Macaws are associated with parts of Central and South America, where different species occur in tropical and subtropical environments. Depending on the species, they may be found in parts of lowland rainforest, gallery forest along rivers, palm groves, woodland, and more open savanna with scattered trees. Their ranges vary greatly: some species occur across parts of several countries, while others are restricted to comparatively small regions. As a group they are best described as Neotropical, and no single macaw should be assumed to range across an entire continent; each species has its own more limited distribution within these broad regions.
        </p>
      }
      diet={
        <p>
          Macaws feed largely on plant material, with seeds, nuts, and fruits forming a major part of the diet for many species. Their powerful beaks allow them to open hard shells and palm nuts that many other animals cannot access, and their dexterous feet help them hold and manipulate food. Some macaws also eat flowers, leaves, and other vegetable matter as availability changes through the seasons. In several regions, macaws are known to visit exposed riverbank clay, a behaviour often linked to mineral intake and the processing of their plant-based diet.
        </p>
      }
      behavior={
        <>
          <p>
            Macaws are generally social birds, often seen in pairs or in larger groups, and many species are noted for loud calls used to communicate across distances in dense forest. Pairs frequently form long-term bonds and may be observed flying and foraging together. Nesting commonly takes place in tree cavities or, for some species, cliff faces, where eggs are laid and young are raised over an extended period of parental care. Like many parrots, macaws can be long-lived, and their young typically depend on adults for some time before becoming independent.
          </p>
          <p>
            As seed and fruit eaters, macaws play a role in the ecology of the forests they inhabit. By feeding on fruits and moving through the canopy, they can contribute to seed dispersal, while their handling of hard nuts links them to particular trees and palms. Their reliance on mature trees for nesting cavities ties them to older, structurally complex forest. In this way, macaws are both shaped by and help to shape the plant communities around them, making them useful indicators of forest health in many parts of their range.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People have long valued macaws for their colour, intelligence, and social behaviour, but this attention has also created pressures. Conservation status varies by species: some are assessed as being of lower concern, the hyacinth macaw is listed as Vulnerable on the IUCN Red List, several macaws are Critically Endangered, and at least one is considered extinct in the wild. These are assessments that can change over time as new information emerges. Habitat loss and capture for the wildlife and pet trade are widely recognised as serious concerns for many macaws; trade in wild parrots is a conservation problem rather than a hobby, and macaws are wild birds, not pets. Anyone encountering apparent illegal trade, or a macaw in distress, should contact local wildlife authorities rather than intervene directly.
        </p>
      }
      faqs={[
        {
          question: "Is a macaw a single species?",
          answer:
            "No. \"Macaw\" refers to a group of large, long-tailed parrots spread across several genera, such as Ara, Anodorhynchus, and Primolius, so it covers many different species rather than one.",
        },
        {
          question: "What is the conservation status of macaws?",
          answer:
            "It varies by species. Some macaws are of lower conservation concern, the hyacinth macaw is listed as Vulnerable on the IUCN Red List, several are Critically Endangered, and at least one is considered extinct in the wild; these assessments can change over time.",
        },
        {
          question: "Where are macaws found?",
          answer:
            "Macaws are associated with parts of Central and South America, in habitats such as rainforest, gallery forest, palm groves, and wooded savanna. Each species has its own more limited range, and no single macaw occurs across an entire continent.",
        },
        {
          question: "Why are some macaws threatened?",
          answer:
            "Habitat loss and capture for the wildlife and pet trade are widely recognised as major pressures on many macaws. Concerns about illegal trade or about a bird in distress are best directed to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ara and related genera (e.g. Anodorhynchus, Primolius)" },
        { label: "Animal group", value: "Birds (parrots)" },
        { label: "Family/order", value: "Psittacidae; order Psittaciformes" },
        { label: "Size", value: "Varies widely by species, from smaller macaws to some of the largest parrots" },
        { label: "Diet", value: "Mainly seeds, nuts, and fruits; some flowers and other plant matter" },
        { label: "Habitat", value: "Tropical and subtropical forests, woodlands, and wooded savanna" },
        { label: "Range", value: "Parts of Central and South America (Neotropical); varies by species" },
        { label: "Conservation status", value: "Varies by species (IUCN Red List): some lower concern, hyacinth macaw Vulnerable, some Critically Endangered, one extinct in the wild" },
      ]}
      relatedLinks={[
        { label: "Parrot", href: "/animals/parrot", description: "Parrots more broadly" },
        { label: "Toucan", href: "/animals/toucan", description: "Another colourful rainforest bird" },
        { label: "Scarlet Ibis", href: "/animals/scarlet-ibis", description: "Another vivid South American bird" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
