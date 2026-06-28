import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/orchid-bee";
const TITLE = "Orchid Bee: Metallic Neotropical Pollinators";
const DESC =
  "Orchid bees (tribe Euglossini) are brilliant metallic bees of the Neotropics. Males collect floral scents; some are pollinators of certain orchids and plants.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("orchid-bee"),
});

export default function OrchidBeePage() {
  return (
    <AnimalProfileLayout
      commonName="Orchid Bee"
      scientificName="Euglossini (orchid bees)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Bee","Pollinator","Neotropical"]}
      image={getAnimalImage("orchid-bee") ?? undefined}
      galleryImages={getAnimalGalleryImages("orchid-bee")}
      sources={ANIMAL_SOURCES["orchid-bee"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Orchid bees make up the tribe Euglossini, a group of bees found primarily in the Neotropics — the warm forests and lowlands of Central and South America, extending into parts of Mexico. They are best known for their dazzling, often metallic coloration in greens, blues, golds, and coppers, and for the unusual behavior of males that gather aromatic compounds from flowers and other sources.
          </p>
          <p>
            As flower visitors, orchid bees feed on nectar and collect pollen, and some species are documented pollinators of certain orchids and a range of other plants. Their pollination role varies by species and region, and not every flower visit results in pollination, so it is more accurate to describe them as flower visitors that can act as pollinators of particular plants rather than as universal pollinators.
          </p>
          <p>
            Many orchid bees are strong, fast fliers capable of moving long distances through forest, which makes them of interest to ecologists studying how plants are pollinated across fragmented Neotropical landscapes.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Orchid bees form the tribe Euglossini within the family Apidae, the same large family that also contains honey bees, bumble bees, and carpenter bees. The tribe includes several genera, among them <em>Euglossa</em>, <em>Eulaema</em>, <em>Eufriesea</em>, <em>Exaerete</em>, and <em>Aglae</em>. The common name &quot;orchid bee&quot; refers specifically to this Neotropical tribe and should not be confused with unrelated bees; &quot;Euglossini&quot; is the precise scientific scope of the group described here. Like all bees, they are insects in the order Hymenoptera.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Many orchid bees are striking in appearance, with bodies that gleam metallic green, blue, gold, bronze, or violet, though some genera (such as certain <em>Eulaema</em>) are more robust and densely hairy, resembling bumble bees in build. A distinctive feature of males is an enlarged, swollen hind leg (tibia) that houses spongy internal tissue used to store collected fragrances. Many species also have a notably long tongue (proboscis), in some cases longer than the body, which allows them to reach nectar deep within long, tubular flowers.
          </p>
        </>
      }
      habitat={
        <p>
          Orchid bees are primarily associated with the Neotropics, including tropical and subtropical forests, forest edges, and lowland and montane habitats of Central and South America, with some species reaching into Mexico. A few species occur in disturbed or secondary habitats and around forest clearings. Their distribution is centered on the American tropics, and they should not be described as a globally distributed group; for the range of any particular species, regional and taxonomic references should be consulted.
        </p>
      }
      diet={
        <p>
          Like other bees, orchid bees feed on nectar as an energy source and collect pollen, which provides protein for developing larvae. Their long tongues let many species access nectar in flowers with deep corollas. A behavior unique to the group is that males also visit flowers — especially certain orchids — and other scent sources such as resins, fungi, and decaying wood to collect volatile aromatic compounds, which they store rather than consume as food. This fragrance-collecting is distinct from feeding and is one of the most studied aspects of orchid bee biology.
        </p>
      }
      behavior={
        <>
          <p>
            Orchid bees show a range of nesting and social habits. Many species are solitary or live in small groups, and nests may be built in cavities, crevices, or other sheltered spots, often using materials such as resin, mud, or plant matter depending on the species. A defining behavior is the male fragrance-collecting habit: males visit scent sources, gather volatile compounds onto specialized leg structures, and are thought to use these accumulated scents in courtship or mating display, though the full function is still studied by researchers. Their powerful flight allows individuals to range over considerable distances in search of flowers and scent sources.
          </p>
          <p>
            Within Neotropical ecosystems, orchid bees are part of the broader community of insects that move pollen between flowering plants, and their long-distance flight may help connect plant populations across patches of forest. The specialized relationship between certain male orchid bees and the orchids they visit is a frequently cited example of close plant–pollinator interaction. Because some species depend on forest resources and many plants they visit are themselves forest-associated, orchid bees are often discussed in the context of tropical forest ecology, though the strength and specificity of any individual relationship depends on the species involved.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Orchid bees are wild insects, not pets or managed livestock, and people most often encounter them as fast-moving, brightly colored visitors to flowers in or near Neotropical forests. They are not generally aggressive toward people. As with any bee, only females possess a sting and they typically use it defensively rather than seeking out people; this page does not provide handling, medical, or first-aid guidance. Anyone with a health concern about an insect sting or an allergy should consult a qualified medical professional, and any wildlife conflict should be directed to local authorities or qualified experts.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Orchid bees are well known as flower visitors, and some species are documented pollinators of certain orchids and a variety of other Neotropical plants. In the classic case, male orchid bees collect fragrances from particular orchids and, in doing so, can transfer the orchid&#39;s pollen masses (pollinia) between flowers, forming a specialized relationship that has been widely studied. Their long tongues also let some species pollinate plants with long, tubular flowers that fewer other insects can reach. Even so, the pollination role varies by species, plant, and region, and not every flower visit results in pollination — some visits gather only nectar or scent without effective pollen transfer. It is therefore accurate to say orchid bees can be important pollinators of some plants, rather than to assume the whole tribe pollinates any flower it visits.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Conservation status varies from species to species across the tribe Euglossini, and there is no single conservation category that applies to orchid bees as a whole. Some species are widespread while others have more restricted ranges, and like many tropical insects, many have not been formally assessed. Because conservation assessments can change and are made at the species level, readers should consult the IUCN Red List and regional sources for the current status of any particular species rather than assuming a single status for the entire group.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Where are orchid bees found?",
          answer:
            "Orchid bees (tribe Euglossini) are found primarily in the Neotropics — the tropical and subtropical regions of Central and South America, with some species reaching into Mexico. They are not a globally distributed group, and the precise range depends on the species.",
        },
        {
          question: "Do orchid bees actually pollinate orchids?",
          answer:
            "Some do. In a well-studied relationship, male orchid bees collect fragrances from certain orchids and can transfer the orchid's pollen between flowers in the process. However, their pollination role varies by species, plant, and region, and not every flower visit results in pollination, so it is best described as an important role for some plants rather than a universal one.",
        },
        {
          question: "Why do male orchid bees collect scents?",
          answer:
            "Male orchid bees gather aromatic compounds from orchids and other sources such as resins and decaying wood, storing them in specialized hind-leg structures. Researchers think these accumulated fragrances play a role in courtship or mating display, though the full function is still being studied. This scent-collecting is separate from feeding.",
        },
        {
          question: "Are orchid bees dangerous to people?",
          answer:
            "Orchid bees are wild insects that are not generally aggressive toward people. As with bees in general, only females have a sting and typically use it defensively. This page does not give medical or handling advice; anyone concerned about a sting or allergy should consult a qualified medical professional.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Tribe Euglossini (family Apidae)" },
        { label: "Pollinator group", value: "Bee" },
        { label: "Pollination role", value: "Flower visitor; some species pollinate certain orchids and other plants (varies by species/region)" },
        { label: "Range", value: "Primarily Neotropical — Central and South America, into Mexico" },
        { label: "Diet / feeding", value: "Nectar and pollen; males also collect floral fragrances (not as food)" },
        { label: "Conservation note", value: "Varies by species; many unassessed — consult the IUCN Red List for current status" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Bee", href: "/animals/bee", description: "Bees as a group" },
        { label: "Bumblebee", href: "/animals/bumblebee", description: "A temperate bee" },
        { label: "Butterfly", href: "/animals/butterfly", description: "Another pollinator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
