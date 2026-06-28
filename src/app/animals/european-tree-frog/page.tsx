import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-tree-frog";
const TITLE = "European Tree Frog: A Small Green Climber";
const DESC =
  "The European tree frog (Hyla arborea) is a small, bright-green climbing amphibian of waterside vegetation in parts of Europe, listed as Least Concern.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-tree-frog"),
});

export default function EuropeanTreeFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="European Tree Frog"
      scientificName="Hyla arborea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian","Frog","Climbing"]}
      image={getAnimalImage("european-tree-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-tree-frog")}
      sources={ANIMAL_SOURCES["european-tree-frog"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European tree frog (<em>Hyla arborea</em>) is a small, vividly green amphibian known for its climbing habits and the loud chorus of calling males during the breeding season. Unlike many frogs that spend most of their lives at ground level or in water, this species often perches among shrubs, reeds and the foliage of trees, helped by adhesive pads on its toes that allow it to cling to leaves and smooth stems.
          </p>
          <p>
            It is one of the more familiar tree frogs associated with parts of Europe, where it occupies a range of vegetated habitats near still or slow-moving water. Adults are typically heard before they are seen, especially on warm evenings in spring when males gather near breeding ponds and inflate their vocal sacs to call.
          </p>
          <p>
            On the IUCN Red List, the European tree frog is currently assessed as Least Concern. As with all conservation assessments, this status reflects the best available information at the time of evaluation and can be revised as new data on populations and habitats become available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European tree frog is an amphibian in the family Hylidae, the group commonly known as tree frogs, within the order Anura (frogs and toads). Its scientific name is <em>Hyla arborea</em>, and it is one of several closely related green tree frogs in the genus <em>Hyla</em>. Some populations once grouped under this species have since been recognised as separate species in modern taxonomy, so regional field references should be consulted for the precise identity of frogs in a given area. As a true tree frog, it differs from typical pond frogs of the family Ranidae by its small size, smooth bright-green skin and the expanded adhesive discs at the tips of its toes.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a small, slender frog, usually only a few centimetres in body length, with smooth skin that is most often a bright leaf-green, though individuals can shift toward grey, brown or olive tones depending on temperature, surroundings and condition. A characteristic dark stripe, often bordered above by a paler line, runs along each side of the head and body from the nostril past the eye and toward the hip. The most distinctive features are the rounded adhesive pads on the tips of the fingers and toes, which give the species its climbing ability. Males in breeding condition show a loose, often darker throat where the inflatable vocal sac is located.
          </p>
        </>
      }
      habitat={
        <p>
          The European tree frog is associated with parts of Europe, where it occurs in a mosaic of habitats that combine vegetation for perching with nearby water for breeding. It is found in parts of central, southern and eastern Europe in places such as woodland edges, scrub, reed beds, damp meadows, hedgerows and gardens, typically close to ponds, ditches, marshes or other still or slow-moving water. Its distribution within the continent is patchy rather than continuous, and it is absent from many areas; populations depend on a network of suitable breeding sites and connecting vegetation. It should not be described as occurring across the entire continent, and local atlases give the most reliable picture of where it is present.
        </p>
      }
      diet={
        <p>
          The European tree frog is an insectivore that feeds on a variety of insects and other small invertebrates. Its diet commonly includes flies, beetles, moths, spiders and other arthropods that it encounters among foliage and at the edges of vegetation. Like other frogs, it captures prey with a quick movement of its sticky tongue and tends to respond to moving rather than stationary prey. Tadpoles, by contrast, are aquatic and feed largely on algae, plant material and organic debris in the water before completing metamorphosis.
        </p>
      }
      behavior={
        <>
          <p>
            Outside the breeding season, European tree frogs are largely nocturnal and spend much of their time resting or foraging among vegetation, where their green coloration helps them remain inconspicuous. In spring, males gather at breeding waters and produce a loud, repetitive call using an inflatable vocal sac, often forming noisy choruses on warm, humid evenings. After mating, females deposit clumps of eggs in the water, where the larvae hatch as tadpoles and develop over a period of weeks before transforming into small froglets that move into surrounding vegetation. In cooler regions the species overwinters in sheltered spots on land, becoming inactive during the coldest months.
          </p>
          <p>
            As both predator and prey, the European tree frog forms part of the food webs of the wetland and edge habitats it occupies. By feeding on insects and other invertebrates it contributes to controlling their numbers, while eggs, tadpoles and adults provide food for fish, birds, snakes, mammals and other predators. Because it depends on both aquatic breeding sites and surrounding vegetated land, the species is sensitive to changes in water quality and habitat connectivity, and its presence is often regarded as one indicator of the condition of these freshwater-associated landscapes.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European tree frog is a small, harmless amphibian that poses no danger to people, though like all amphibians it has sensitive, permeable skin and is best observed without handling. It is currently assessed as Least Concern on the IUCN Red List, but local populations can be affected by the loss or pollution of wetlands, drainage of breeding ponds and fragmentation of habitat, and the species receives legal protection in a number of countries. Anyone with questions about a frog found in a garden or near water should contact their local wildlife authorities rather than attempting to relocate or keep it. This profile is for educational purposes and is not a guide to keeping or handling the species.
        </p>
      }
      faqs={[
        {
          question: "Is the European tree frog dangerous to humans?",
          answer:
            "No. It is a small, harmless insect-eating amphibian with no venom or sting. As with all amphibians, it has delicate skin and is best observed in place rather than handled. For any health concern after contact with wildlife, consult a qualified medical professional.",
        },
        {
          question: "Why do European tree frogs call so loudly?",
          answer:
            "During the breeding season males call to attract females and establish themselves at breeding sites. They use an inflatable vocal sac that amplifies the sound, often forming loud choruses on warm spring evenings.",
        },
        {
          question: "Where is the European tree frog found?",
          answer:
            "It is associated with parts of Europe, occurring in scattered populations across central, southern and eastern regions near ponds, marshes and other still water. Its distribution is patchy rather than continent-wide, so local atlases give the most accurate picture.",
        },
        {
          question: "What is the conservation status of the European tree frog?",
          answer:
            "The IUCN Red List currently assesses it as Least Concern. This is an assessment that can change as new information becomes available, and local populations may still be affected by habitat loss and pollution.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Hyla arborea" },
        { label: "Animal group", value: "Amphibian (frog)" },
        { label: "Family or order", value: "Hylidae; order Anura" },
        { label: "Size", value: "Small; typically a few centimetres in body length" },
        { label: "Diet", value: "Insectivore; insects and other invertebrates" },
        { label: "Habitat", value: "Shrubs, reeds and trees near still or slow water" },
        { label: "Range", value: "Found in parts of Europe (patchy distribution)" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Frog Profile", href: "/animals/frog", description: "Frogs more broadly" },
        { label: "Fire Salamander", href: "/animals/fire-salamander", description: "Another European amphibian" },
        { label: "Toad Profile", href: "/animals/toad", description: "Toads, for contrast" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
