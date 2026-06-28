import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leafcutter-ant";
const TITLE = "Leafcutter Ant: Fungus-Farming Insect Facts";
const DESC =
  "Learn about the leafcutter ant (Atta and Acromyrmex), Neotropical insects that cut leaves to farm fungus in vast underground colonies across the Americas.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("leafcutter-ant"),
});

export default function LeafcutterAntPage() {
  return (
    <AnimalProfileLayout
      commonName="Leafcutter Ant"
      scientificName="Atta and Acromyrmex"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Ant","Fungus-farmer"]}
      image={getAnimalImage("leafcutter-ant") ?? undefined}
      galleryImages={getAnimalGalleryImages("leafcutter-ant")}
      sources={ANIMAL_SOURCES["leafcutter-ant"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Leafcutter ants are among the most remarkable insects of the Americas, and the name is usually applied to two related genera, <em>Atta</em> and <em>Acromyrmex</em>. Rather than eating leaves directly, these ants cut and carry fragments of vegetation back to underground nests, where the plant material is used to cultivate a fungus that the colony feeds on. This makes leafcutter ants one of the few animals known to practice a form of agriculture.
          </p>
          <p>
            Leafcutter ants live in very large, highly organized colonies that can become extensive over time. Their societies are divided into different worker castes, each specialized for tasks such as cutting, transporting, processing leaves, or tending the fungus garden. The familiar sight of long columns of ants carrying green leaf fragments has made them one of the most recognizable invertebrates of the Neotropical region.
          </p>
          <p>
            Because leafcutter ants are studied as a group spanning many species across these genera, they are not assessed by the IUCN Red List as a single entity. They are nevertheless ecologically important as herbivores and soil engineers, and they remain a subject of ongoing scientific interest for their complex social behavior and farming lifestyle.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Leafcutter ants are not a single species but a grouping of ants usually placed in the genera <em>Atta</em> and <em>Acromyrmex</em>, within the family Formicidae (the ants) and the order Hymenoptera, which also includes bees and wasps. They belong to a larger group of fungus-growing ants known as the tribe Attini. Many distinct species exist across these genera, and they share the defining behavior of cultivating fungus on cut plant material. Because the term covers numerous species, it should be understood as a functional group rather than one organism, and the scientific names <em>Atta</em> and <em>Acromyrmex</em> refer to the genera as a whole rather than to any individual species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Leafcutter ants are typically reddish-brown to brown in color and vary considerably in size within a single colony, a feature known as polymorphism. Small workers may be only a few millimeters long, while the largest soldiers and the queen can be substantially bigger. Many have spines on the thorax and a somewhat textured or sculptured body surface, with <em>Acromyrmex</em> generally bearing more prominent spines than <em>Atta</em>. They are most easily recognized in the field not by close detail but by behavior: long, moving columns of ants, many of them holding aloft cut sections of leaf or flower that can appear to flow like a green ribbon across the ground.
          </p>
        </>
      }
      habitat={
        <p>
          Leafcutter ants occur across much of the Neotropics, from parts of the southern United States and Mexico through Central America and into large parts of South America, where they are associated with a range of warm habitats including tropical and subtropical forests, woodland edges, and open grasslands and savannas. They build extensive underground nests that can include many connected chambers and tunnels, sometimes marked at the surface by large mounds of excavated soil. Because the name covers many species, the group as a whole is spread across parts of these regions rather than throughout any single continuous range. Their presence is generally tied to climates and vegetation that supply both suitable soil for nesting and a steady supply of leaves for their fungus gardens.
        </p>
      }
      diet={
        <p>
          Although leafcutter ants gather large quantities of leaves, the ants themselves do not digest the leaf tissue. Instead, they use the cut fragments as a growing medium for a specialized fungus, which the colony cultivates in underground gardens. Worker ants clean and process the plant material, add it to the garden, and tend the fungus, which in turn produces nutrient-rich structures that the ants consume. This mutual relationship between the ants and their fungus is central to the colony&#39;s survival, and the ants rely on the fungus as their primary food source rather than on the leaves directly.
        </p>
      }
      behavior={
        <>
          <p>
            Leafcutter ant colonies are organized into castes that divide the labor of running the nest. Some workers forage and cut leaves, others carry fragments home, smaller workers process the material and tend the fungus, and large soldiers help defend the colony. A colony is founded by a single reproductive queen, who establishes a fungus garden from a small starter culture carried from her birth nest during a mating flight. Over time the colony can grow very large and persist for years, with the queen producing the workers that sustain it. Communication relies heavily on chemical signals and physical contact, allowing large numbers of individuals to coordinate their activity.
          </p>
          <p>
            As major herbivores, leafcutter ants remove and process substantial amounts of plant material, influencing the growth and composition of surrounding vegetation. Their extensive digging mixes and aerates the soil, redistributes nutrients, and creates underground structures, which is why they are often described as soil engineers. Discarded leaf material and spent fungus garden contribute organic matter to the soil, and their nests can affect drainage and root growth nearby. Through these activities, leafcutter ants play an influential role in nutrient cycling and ecosystem dynamics across the Neotropical regions where they occur.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Leafcutter ants are sometimes regarded as agricultural pests where their foraging affects crops or planted vegetation, and at the same time they are valued by scientists studying social insects and symbiosis. They are not aggressive toward people in the way that some sensational accounts suggest, though larger workers can deliver a defensive bite if a nest is disturbed; anyone with concerns about bites should consult qualified medical professionals or local health authorities, and questions about ants near crops or property should be directed to local agricultural or wildlife authorities rather than attempting to handle the ants. As a group spanning many species across <em>Atta</em> and <em>Acromyrmex</em>, leafcutter ants are not assessed by the IUCN Red List as a single unit, and no overall conservation status is assigned here. This profile is for educational purposes and does not provide guidance on keeping, controlling, or handling these insects.
        </p>
      }
      faqs={[
        {
          question: "Do leafcutter ants eat the leaves they cut?",
          answer:
            "No. They use the cut leaves to grow a fungus inside their nests, and it is the fungus, not the leaves, that the colony eats.",
        },
        {
          question: "Where are leafcutter ants found?",
          answer:
            "They occur across parts of the Neotropics, from the southern United States and Mexico through Central America and into much of South America, in habitats ranging from tropical and subtropical forests to grasslands and savannas. The name covers many species across these genera.",
        },
        {
          question: "Are leafcutter ants dangerous to people?",
          answer:
            "They are not generally aggressive toward humans, though larger workers can bite defensively if their nest is disturbed. Anyone concerned about bites should seek advice from qualified medical professionals or local health authorities.",
        },
        {
          question: "What is the conservation status of leafcutter ants?",
          answer:
            "Because leafcutter ants include many species across the genera Atta and Acromyrmex, they are not assessed by the IUCN Red List as a single group, so no overall status is given. Conservation assessments can change as more research is done.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Atta and Acromyrmex (genera)" },
        { label: "Animal group", value: "Insects (fungus-growing ants)" },
        { label: "Family/order", value: "Formicidae; Hymenoptera" },
        { label: "Size", value: "A few millimeters to over a centimeter, varying by caste" },
        { label: "Diet", value: "Cultivated fungus grown on cut leaves" },
        { label: "Habitat", value: "Forests, woodlands, grasslands and savannas" },
        { label: "Range", value: "Southern US, Mexico, Central and South America (Neotropics)" },
        { label: "Conservation status", value: "Not assessed by the IUCN as a group" },
      ]}
      relatedLinks={[
        { label: "Ant", href: "/animals/ant", description: "Ants more broadly" },
        { label: "Termite", href: "/animals/termite", description: "Another social insect" },
        { label: "Bee", href: "/animals/bee", description: "Another social insect" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
