import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/longhorn-beetle";
const TITLE = "Longhorn Beetle: Cerambycid Pollinators";
const DESC =
  "Longhorn beetles (family Cerambycidae) are long-antennaed wood-borers; some flower-visiting lineages feed on pollen and nectar and can act as pollinators.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("longhorn-beetle"),
});

export default function LonghornBeetlePage() {
  return (
    <AnimalProfileLayout
      commonName="Longhorn Beetle"
      scientificName="Family Cerambycidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Beetle","Pollinator","Flower longhorn"]}
      image={getAnimalImage("longhorn-beetle") ?? undefined}
      galleryImages={getAnimalGalleryImages("longhorn-beetle")}
      sources={ANIMAL_SOURCES["longhorn-beetle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Longhorn beetles make up the family Cerambycidae, one of the largest and most recognizable beetle families. Their common name comes from their antennae, which are often very long — in many species as long as the body or considerably longer. As beetles, they belong to the order Coleoptera, the most species-rich group of animals on Earth, and they share that order&#39;s hallmark hardened forewings (elytra) that fold over the back.
          </p>
          <p>
            The family is enormous and ecologically varied, so generalizations should be made carefully. The larvae of most longhorn beetles are wood-borers or stem-borers, tunneling in living, dying, or dead plant tissue, while the adults of many species are best known as flower visitors. It is among these flower-visiting adults that a pollination role becomes relevant, though that role varies considerably from one lineage to another.
          </p>
          <p>
            This profile focuses on the pollination ecology of longhorn beetles: which kinds visit flowers, how beetle pollination works, and why it is best described cautiously. Not every longhorn beetle is a pollinator, and not every flower visit results in pollination.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Longhorn beetles are the family <em>Cerambycidae</em>, within the order Coleoptera (beetles) and the class Insecta. It is a very large family, with many thousands of described species worldwide and numerous subfamilies. Among the groups most associated with flower visiting are the flower longhorns, subfamily <em>Lepturinae</em>, whose adults are frequently seen on blossoms; other subfamilies include <em>Cerambycinae</em>, <em>Lamiinae</em>, and <em>Prioninae</em>, which are more often associated with wood-boring habits than with flowers. Because the family is so diverse, traits described for one subfamily should not be assumed to apply to all longhorn beetles. Classification within Cerambycidae continues to be revised as research progresses.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The most distinctive feature of a longhorn beetle is its antennae, which are typically long and slender and in many species exceed the body length; they are often held curving back over the body. Body shapes range from narrow and elongate to robust, and sizes span from small beetles a few millimeters long to large tropical species several centimeters in length. The hardened forewings (elytra) cover membranous flying wings, and coloration is highly variable — some species are drab and bark-like, while others are brightly patterned or marked in ways that resemble wasps or other insects. Many flower-visiting longhorns, such as those in the subfamily <em>Lepturinae</em>, have a somewhat tapered, wedge-shaped body and are commonly seen resting on open blossoms.
          </p>
        </>
      }
      habitat={
        <p>
          Longhorn beetles occur on every continent except Antarctica and are especially diverse in forested and wooded regions, since their larvae are closely tied to woody plants. Because the family is so large and widespread, no single habitat description fits all of them. Adults that visit flowers are often found in sunny clearings, woodland edges, meadows, and other places where flowering plants are abundant, while the larvae develop hidden within wood, branches, roots, or stems. Particular species have particular ranges and host-plant associations; for any individual species, regional field guides, museum resources, or databases such as GBIF are the appropriate place to check distribution rather than assuming a family-wide pattern.
        </p>
      }
      diet={
        <p>
          Diet differs sharply between life stages and between species. The larvae of most longhorn beetles feed on plant tissue, chiefly wood and other woody material, boring through living, stressed, or dead and decaying plants. Adult feeding is more varied: some adults feed little, some chew bark, leaves, or sap, and others — notably many flower longhorns (<em>Lepturinae</em>) — visit flowers to feed on pollen and nectar. It is this adult flower-feeding behavior that connects certain longhorn beetles to pollination. The degree to which any given species depends on flowers, and what it consumes there, varies, so feeding habits are best confirmed at the species level.
        </p>
      }
      behavior={
        <>
          <p>
            Like all beetles, longhorn beetles undergo complete metamorphosis, passing through egg, larva, pupa, and adult stages. Females typically lay eggs on or in woody plant material, and the larvae — pale, grub-like, and often legless or short-legged — tunnel and feed within wood, sometimes for an extended period before pupating. Adults emerge, and many are active by day, particularly the flower-visiting species, which fly between blossoms in sunny weather. Some longhorn beetles can produce squeaking or rasping sounds by rubbing body parts together. Adult lifespans are generally short relative to the larval stage, and behaviors such as flower visiting, mate-finding, and host-plant selection occupy much of that adult period.
          </p>
          <p>
            Longhorn beetles play several ecological roles that go beyond pollination. As larvae, the many wood-boring species contribute to the decomposition of dead and dying wood and to nutrient cycling in forests, and they serve as food for woodpeckers, parasitic wasps, and other predators. Adults are prey for birds, spiders, and other animals, and flower-visiting adults form part of the broader community of insects that move among blossoms. Some species are regarded as economically significant where their larvae develop in timber or living trees, while others are uncommon and habitat-specific. As with the rest of the family, these roles vary by species and should not be generalized across all longhorn beetles.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Longhorn beetles are frequently encountered as striking, harmless insects, and the flower-visiting kinds are a pleasant sight on blossoms in gardens, meadows, and woodland edges. They are not aggressive toward people; a large beetle can pinch with its jaws as a defensive response if it is held, but this is not a danger. This page is educational and does not offer advice on handling, attracting, removing, controlling, or keeping insects. Anyone with concerns about trees, timber, or insect activity on their property should consult local agricultural, forestry, or extension authorities or other qualified professionals, and any health concern should be directed to a qualified medical professional.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Pollination by beetles, sometimes called cantharophily, is an ancient interaction and is thought to predate the rise of bees; beetles were among the early flower visitors as flowering plants diversified. Within longhorn beetles, the flower-visiting lineages — especially the flower longhorns (<em>Lepturinae</em>) — feed on pollen and nectar, and in doing so they can transfer pollen between flowers and act as pollinators of some plants. Their role is best described cautiously: it varies by species, by region, and by plant, and a longhorn beetle visiting a flower is not automatically an effective pollinator of it. Beetles can be messy feeders that consume or damage pollen and floral parts, so for some plants they are incidental or secondary visitors rather than primary pollinators. For other plants, beetles — including some longhorns — are among the relevant flower visitors. The honest summary is that some longhorn beetles can act as pollinators of some plants, that this is one part of a broader community of pollinators, and that flower-visiting should not be equated with effective pollination without species-specific study.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Cerambycidae is an extremely large and diverse family, and there is no single conservation status that applies to longhorn beetles as a whole. Conservation concern is meaningful only at the level of individual species: some are widespread and common, while others are localized or rare, and threats such as habitat loss and the removal of dead wood that larvae depend on can affect particular species. The IUCN Red List assesses only a subset of insect species, so most longhorn beetles have not been evaluated. For the current status of any specific species, consult the IUCN Red List and regional or national conservation authorities, and treat any status as subject to change as new assessments are made.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are all longhorn beetles pollinators?",
          answer:
            "No. The larvae of most longhorn beetles are wood-borers, and many adults are not strongly associated with flowers. Pollination is relevant mainly to the flower-visiting lineages, especially the flower longhorns (subfamily Lepturinae), whose adults feed on pollen and nectar and can act as pollinators of some plants. A pollination role varies by species and region, and flower-visiting does not always result in effective pollination.",
        },
        {
          question: "How do longhorn beetles get their name?",
          answer:
            "The name refers to their antennae, which are often very long — in many species as long as the body or longer. These conspicuous antennae are a key feature of the family Cerambycidae and an easy way to recognize many of its members.",
        },
        {
          question: "Is beetle pollination important?",
          answer:
            "Beetle pollination, sometimes called cantharophily, is an ancient interaction that is thought to predate bees, and beetles — including some longhorn beetles — are among the flower visitors of certain plants. Its importance varies by plant and region, and beetles are one part of a broad community of pollinators rather than a universal one, so the role is best described cautiously and confirmed at the species level.",
        },
        {
          question: "Do longhorn beetles harm people?",
          answer:
            "Longhorn beetles are not aggressive toward people. A large beetle may pinch with its jaws as a defensive response, but they are generally harmless. This page does not provide handling, control, or medical guidance; direct property concerns to local agricultural, forestry, or extension authorities and any health concern to a medical professional.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Family Cerambycidae (Coleoptera)" },
        { label: "Pollinator group", value: "Beetle (some flower-visiting lineages)" },
        { label: "Pollination role", value: "Some species can act as pollinators; varies by species and region" },
        { label: "Range", value: "Worldwide except Antarctica; check species-level sources" },
        { label: "Diet / feeding", value: "Larvae mostly wood-borers; some adults feed on pollen and nectar" },
        { label: "Conservation note", value: "No single family-wide status; most species unassessed — consult the IUCN Red List per species" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Beetle", href: "/animals/beetle", description: "Beetles as a group" },
        { label: "Ladybug", href: "/animals/ladybug", description: "Another beetle" },
        { label: "Bee", href: "/animals/bee", description: "Another pollinator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
