import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mason-bee";
const TITLE = "Mason Bee (Osmia): Solitary Spring Pollinator";
const DESC =
  "Mason bees (Osmia spp.) are gentle, solitary cavity-nesting bees that seal nests with mud. Learn how these early-spring flower visitors live and pollinate.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("mason-bee"),
});

export default function MasonBeePage() {
  return (
    <AnimalProfileLayout
      commonName="Mason Bee"
      scientificName="Osmia spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Bee","Pollinator","Solitary"]}
      image={getAnimalImage("mason-bee") ?? undefined}
      galleryImages={getAnimalGalleryImages("mason-bee")}
      sources={ANIMAL_SOURCES["mason-bee"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Mason bees are solitary bees in the genus <em>Osmia</em>, named for their habit of building and sealing their nest cells with mud or other masticated material. Unlike honey bees, they do not form large colonies, produce honey, or live in managed hives by default; each female typically works alone to construct and provision her own nest. There are many <em>Osmia</em> species worldwide, and the group is best known for its early-season activity, often appearing in spring when fruit trees and other early flowers bloom.
          </p>
          <p>
            Many mason bees are compact, stout-bodied bees, and a number of species have a distinctly metallic blue, green, or dark coloration rather than the yellow-and-black banding people often associate with bees. They are frequently described as gentle and reluctant to sting, which makes them a familiar example when explaining wild, non-honey-bee pollinators. As flower visitors that gather pollen and nectar, mason bees can act as pollinators of various plants, though the strength of that role varies by species, region, and the plants involved.
          </p>
          <p>
            Because they nest in pre-existing cavities rather than excavating large burrows or wood, mason bees are often used to illustrate cavity-nesting bee biology. This profile describes their general appearance, life cycle, feeding, and ecological role in cautious, source-aware terms, and avoids any guidance on keeping, attracting, managing, or controlling them.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Mason bees belong to the genus <em>Osmia</em>, within the family Megachilidae, the same broad family that includes leafcutter bees (genus <em>Megachile</em>). Like other megachilid bees, <em>Osmia</em> females generally carry pollen on dense hairs (a scopa) on the underside of the abdomen rather than on the hind legs. The genus <em>Osmia</em> contains many described species distributed across multiple continents, and identifying them to species usually requires specialist examination. The common name &quot;mason bee&quot; reflects nesting behavior (building with mud-like material) rather than a single species, so statements about &quot;the mason bee&quot; are really generalizations across a diverse genus; details can differ from one <em>Osmia</em> species to another.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Mason bees are typically small to medium-sized, robust bees, often somewhat rounder and more compact than honey bees. Many species are darkly colored, and a number have a notable metallic blue, blue-green, or bronze sheen, while others are duller black or brown; coloration varies considerably across the genus. Females usually carry pollen on a brush of hairs (the scopa) on the underside of the abdomen, which can appear bright with collected pollen. As in many bees, females and males can differ in size and in features such as antenna length and facial hair. Precise identification of <em>Osmia</em> species relies on close examination of structural details and is best left to specialists.
          </p>
        </>
      }
      habitat={
        <p>
          Mason bees in the genus <em>Osmia</em> occur across many temperate and other regions, and different species are associated with different habitats, including woodland edges, meadows, scrub, gardens, and orchard areas. Because they are cavity nesters, their presence is often tied to the availability of suitable pre-existing holes, such as hollow stems, beetle borings in wood, and similar narrow cavities, along with a source of the mud or masticated material used to build partitions. The genus as a whole is widely distributed, but the specific native range, distribution, and habitat preferences differ among species; for any particular <em>Osmia</em> species, regional and local references should be consulted rather than assuming a single global pattern.
        </p>
      }
      diet={
        <p>
          Adult mason bees feed on nectar and gather pollen from flowers. Females collect pollen and nectar primarily to provision their nest cells, forming a food store on which each egg is laid so the developing larva can feed after hatching. Many <em>Osmia</em> species visit a range of flowers, while some may favor particular plant groups; the breadth of flowers used varies by species and season. As with bees generally, the nectar provides energy for the adults and the pollen supplies protein for the larvae. This feeding activity is what brings mason bees into repeated contact with flowers, and it underlies their potential role in moving pollen between blooms.
        </p>
      }
      behavior={
        <>
          <p>
            Mason bees are solitary: rather than a queen and workers sharing one nest, each female generally builds and provisions her own nest. A female finds a suitable narrow cavity and constructs a linear series of cells, placing a mass of pollen and nectar and an egg in each, then sealing the cells with partitions of mud or similar material and capping the nest entrance. The larvae hatch and feed on the stored provisions, develop within the cell, and typically pass through a resting stage before emerging, with many species producing one generation per year and overwintering inside their cells. Adults of these spring-active species are often present for a relatively short window timed to early flowering. Males commonly emerge before females and do not build nests. Specific timing and details vary among <em>Osmia</em> species.
          </p>
          <p>
            As flower-visiting insects, mason bees participate in plant–pollinator interactions and form part of the wider community of wild pollinators alongside other solitary bees, bumblebees, flies such as hoverflies, and various other insects. Their cavity-nesting habit also links them to the availability of dead stems, old wood, and the small holes left by other organisms, integrating them into the ecology of these microhabitats. Like other bees, their populations interact with the plants they visit, with natural enemies and nest associates such as parasitic insects and mites, and with the seasonal availability of flowers. Their broader ecological importance is best described in general terms, since the magnitude of any single species&#39; contribution depends on local conditions and is not uniform across the genus.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Mason bees are frequently described as gentle and unlikely to sting; as solitary bees, they have no large colony to defend, and they are generally not aggressive toward people. As in bees generally, males cannot sting, and females have a sting but rarely use it except under direct provocation such as being handled or trapped. This profile does not provide instructions for handling, attracting, keeping, moving, or controlling mason bees or their nests. Anyone with a health concern such as a sting reaction or an allergy should seek advice from a qualified medical professional, and any situation involving an unwanted nest or a conflict with insects should be referred to local authorities or qualified professionals rather than addressed using do-it-yourself measures.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Because mason bees carry pollen loosely on body hairs and move among flowers while foraging, they can act as pollinators, and several <em>Osmia</em> species are widely cited as effective early-spring pollinators of fruit trees and other plants in some regions. Their habit of contacting flower reproductive parts as they collect pollen can make them efficient at transferring pollen for certain crops and wild plants. However, pollination effectiveness varies by species, region, plant, and conditions, and not every flower visit results in pollination. Mason bees should be understood as one part of a broader pollinator community that includes other wild bees, flies, and additional insects; honey bees are managed in many settings and are not a substitute for, or a measure of, this wild bee diversity. Where a specific pollination role is claimed for a crop or region, it is best confirmed against local agricultural or ecological sources rather than assumed for the whole genus.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              There is no single conservation status that applies to all mason bees, because <em>Osmia</em> is a large genus of many species whose situations differ from one another and from region to region. Some bees are well studied while others are poorly known, and conservation assessments can change over time. For this reason, this profile does not assign a fixed status, population trend, or numerical figure to mason bees as a group. Anyone seeking the current conservation status of a particular <em>Osmia</em> species should consult authoritative, up-to-date sources such as the IUCN Red List and relevant regional or national assessments, recognizing that such evaluations are periodically revised.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are mason bees aggressive, and do they sting?",
          answer:
            "Mason bees are generally regarded as gentle and not aggressive. As solitary bees they have no large colony to defend. Males cannot sting, and females have a sting but rarely use it except under direct provocation such as being handled. Any sting reaction or allergy concern should be directed to a qualified medical professional.",
        },
        {
          question: "How are mason bees different from honey bees?",
          answer:
            "Mason bees (genus Osmia) are solitary: each female typically builds and provisions her own nest rather than living in a large colony, and they do not produce honey or live in managed hives by default. They seal their nest cells with mud-like material. Honey bees are managed in many settings and are not a stand-in for the diversity of wild bees like mason bees.",
        },
        {
          question: "Do mason bees pollinate fruit trees?",
          answer:
            "Several Osmia species are widely cited as effective early-spring pollinators of fruit trees and other plants in some regions, because they contact flower parts while gathering pollen. However, pollination effectiveness varies by species, region, and plant, and not every flower visit results in pollination, so specific claims are best confirmed against local sources.",
        },
        {
          question: "Why are they called mason bees?",
          answer:
            "The name refers to their nesting behavior. Females build partitions between nest cells and seal the nest using mud or other masticated material, much like a mason working with mortar. The name applies to the genus Osmia broadly rather than to a single species.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Genus Osmia (family Megachilidae)" },
        { label: "Pollinator group", value: "Bee (solitary, cavity-nesting)" },
        { label: "Pollination role", value: "Can act as a pollinator; several species cited as effective early-spring pollinators in some regions (varies)" },
        { label: "Range", value: "Many species across temperate and other regions; specifics vary by species" },
        { label: "Diet / feeding", value: "Nectar and pollen from flowers; pollen provisions the larvae" },
        { label: "Conservation note", value: "No single status for the genus; check the IUCN Red List and regional assessments for a given species (changeable)" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Bee", href: "/animals/bee", description: "Bees as a group" },
        { label: "Leafcutter Bee", href: "/animals/leafcutter-bee", description: "Another solitary bee" },
        { label: "Bumblebee", href: "/animals/bumblebee", description: "A social bee" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
