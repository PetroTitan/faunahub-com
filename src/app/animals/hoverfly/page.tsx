import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hoverfly";
const TITLE = "Hoverfly: Flower Fly Pollinator Profile";
const DESC =
  "Hoverflies (family Syrphidae) are true flies that mimic bees and wasps but cannot sting. Learn how these flower flies visit blooms and pollinate.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("hoverfly"),
});

export default function HoverflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Hoverfly"
      scientificName="Family Syrphidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Fly","Pollinator","Bee mimic"]}
      image={getAnimalImage("hoverfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("hoverfly")}
      sources={ANIMAL_SOURCES["hoverfly"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Hoverflies, also called flower flies, make up the family Syrphidae, a large group of true flies in the order Diptera. Like all flies, they have a single pair of functional wings (the hind pair is reduced to small balancing organs called halteres), which sets them apart from bees and wasps. Many hoverflies are striking bee or wasp mimics, with yellow-and-black or orange banding, yet they have no sting and are harmless to people.
          </p>
          <p>
            The family is large and diverse, with thousands of described species found across most of the world. Adults are frequently seen hovering in mid-air near flowers, a hallmark behaviour that gives the group its common name. Because they feed at flowers as adults, hoverflies are widely recognised as flower visitors and, for some plants, as useful pollinators alongside bees and other insects.
          </p>
          <p>
            Hoverflies are often described as underrated flower visitors: they are abundant, mobile, and visit a wide range of open, accessible flowers. Their ecological importance is not limited to flowers, however, because the larvae of many species are predators of aphids and other soft-bodied insects, while others feed on decaying organic matter or live in water.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Hoverflies belong to the family Syrphidae within the order Diptera, the true flies. They are not bees or wasps, despite the resemblance many species show; bees and wasps belong to a different order, Hymenoptera, and have two pairs of wings. The clearest way to recognise a hoverfly as a fly is its single pair of functional wings and short, often stubby antennae. Syrphidae is divided into several subfamilies and many genera, and common, well-studied examples include the drone flies (<em>Eristalis</em>), the marmalade hoverfly (<em>Episyrphus balteatus</em>), and members of the genus <em>Syrphus</em>. Because the family is so large, traits such as larval diet and adult appearance vary considerably from one lineage to another.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Hoverflies vary widely in size and colour, but many are small to medium-sized flies with flattened or rounded bodies marked in yellow, orange, brown, and black. A large number of species are convincing mimics of bees or wasps, copying their banding and sometimes their body shape, which can deter predators. Despite the resemblance, hoverflies can be told apart by features typical of flies: one pair of functional wings rather than two, large rounded eyes that often meet on top of the head in males, and short antennae instead of the longer, elbowed antennae of many bees and wasps. Many hoverflies also have a distinctive false vein (the &quot;spurious vein&quot;) in the wing, a feature used by specialists to identify the family. Crucially, hoverflies lack a sting.
          </p>
        </>
      }
      habitat={
        <p>
          Hoverflies occur in a broad range of habitats, including meadows, grasslands, woodlands, wetlands, farmland, parks, and gardens, essentially wherever flowering plants and suitable larval conditions are found. The family is widely distributed across much of the world, with species present on most continents; individual species, however, have their own particular ranges and habitat preferences, so distribution should be considered species by species rather than generalised across the whole family. Some hoverflies are strong fliers and a number of species are known to migrate, moving across regions seasonally. Larval habitats are remarkably varied: depending on the species, larvae may live among aphid colonies on plants, in decaying wood or compost, in the nests of social insects, or in water and water-saturated organic matter.
        </p>
      }
      diet={
        <p>
          Adult hoverflies feed at flowers, taking nectar as an energy source and pollen, which is an important source of protein for egg development in many species. As they move among open, accessible blooms to feed, they pick up and carry pollen. Larval diets differ sharply by lineage and are one of the most ecologically interesting features of the family: the larvae of many species are active predators of aphids and other small, soft-bodied insects, while others are detritivores that feed on decaying plant matter, dung, or rotting wood, and some (such as the aquatic &quot;rat-tailed maggot&quot; larvae of drone flies) feed in nutrient-rich water. This means a single family can contribute to both pollination and the control of plant pests through different life stages.
        </p>
      }
      behavior={
        <>
          <p>
            The most familiar hoverfly behaviour is their precise, stationary hovering in mid-air, frequently in sunlit spots or near flowers, from which they dart and reposition with great agility. Adults are active by day and are drawn to flowers for feeding, with some species also moving long distances during seasonal migrations. Their bee- and wasp-like colouration is thought to be a form of protective mimicry that discourages predators, even though hoverflies are entirely harmless. The life cycle follows complete metamorphosis: eggs hatch into larvae, which feed and grow before pupating and emerging as winged adults. Females often lay eggs in places suited to their larvae, for example near aphid colonies in predatory species, reflecting the varied larval lifestyles within the family.
          </p>
          <p>
            Hoverflies can play several roles in ecosystems through their different life stages. As adults they are flower visitors and contribute to the pollination of some wild and cultivated plants. As larvae, the aphid-eating species act as natural enemies of plant pests, while detritivorous and aquatic larvae help break down decaying organic matter and recycle nutrients. Adults and larvae also form part of food webs as prey for birds, spiders, and other predators. Because the family combines flower visiting, predation, and decomposition across its species, hoverflies are often highlighted as a useful example of how a single insect group can support multiple ecological processes. The relative importance of each role depends on which species are present and on local conditions.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Hoverflies are harmless to people: they have no sting and do not bite, even though many species closely resemble bees or wasps. This mimicry can cause them to be mistaken for stinging insects, but a hovering, flower-visiting fly with a single pair of wings poses no threat. There is no need to handle, capture, or remove them, and this profile does not offer any control, removal, or pest-management guidance. If you have concerns about stinging insects or an allergic reaction, consult a qualified medical professional, and for any wildlife or insect conflict around a home or property, contact local authorities or a qualified professional. Observed calmly, hoverflies are a rewarding and approachable group to watch at flowers.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Hoverflies are frequently cited as important flower visitors, and for some plants they can act as effective pollinators. By feeding on nectar and pollen, adults can transfer pollen between flowers, and their abundance, mobility, and tendency to visit many open, shallow flowers make them valuable contributors to pollination in both wild and agricultural settings. That said, the strength of their pollination role varies by species, by plant, and by region, and not every flower visit results in pollination; some visitors remove pollen or nectar without effectively transferring pollen. Hoverflies generally lack the dense, branched body hairs and specialised pollen-carrying structures of many bees, so for some plants they may be less efficient per visit, even where their sheer numbers can make them locally important. Their contribution is best understood as complementary to bees and other pollinators rather than a substitute for them.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Conservation status varies from species to species across this large family, and there is no single status that applies to all hoverflies. Like many insect groups, most hoverfly species have not been formally assessed at the family level, so it is not accurate to assign one conservation category to the group as a whole. Some species are widespread and common, while others are more localised or specialised and may be of greater conservation concern; broader pressures on insects, such as habitat loss and land-use change, are relevant to many flower-visiting insects. For the current status of any particular species, consult authoritative, up-to-date sources such as the IUCN Red List and regional assessments, and treat any status as changeable over time.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are hoverflies bees or wasps?",
          answer:
            "No. Hoverflies are true flies in the order Diptera, family Syrphidae. Many species mimic the colours of bees or wasps, but they have only one pair of functional wings and no sting. Bees and wasps belong to a different order (Hymenoptera) and have two pairs of wings.",
        },
        {
          question: "Can hoverflies sting?",
          answer:
            "No. Hoverflies have no sting and do not bite, so they are harmless to people despite their bee- or wasp-like appearance. If you are worried about stinging insects or an allergic reaction, consult a qualified medical professional; this page does not provide medical or pest-control advice.",
        },
        {
          question: "Are hoverflies good pollinators?",
          answer:
            "Hoverflies are widely regarded as important flower visitors, and for some plants they can act as useful pollinators. Their effectiveness varies by species, plant, and region, and they are best seen as complementary to bees rather than a replacement, since not every flower visit results in pollination.",
        },
        {
          question: "What do hoverfly larvae eat?",
          answer:
            "It depends on the species. The larvae of many hoverflies are predators of aphids and other soft-bodied insects, while others feed on decaying plant matter, dung, or rotting wood, and some live in nutrient-rich water. This varied larval diet is one of the most distinctive features of the family.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Family Syrphidae (true flies, order Diptera)" },
        { label: "Pollinator group", value: "Fly (flower fly / hoverfly)" },
        { label: "Pollination role", value: "Important flower visitor; can act as a pollinator of some plants, though this varies by species, plant, and region" },
        { label: "Range", value: "Widely distributed across most of the world; ranges differ by species" },
        { label: "Diet / feeding", value: "Adults feed on nectar and pollen; larvae vary (aphid predators, detritivores, or aquatic)" },
        { label: "Conservation note", value: "Varies by species; most are not assessed at family level. Check the IUCN Red List and regional sources for current status" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Bee", href: "/animals/bee", description: "A group it often mimics" },
        { label: "Wasp", href: "/animals/wasp", description: "Another mimicry model" },
        { label: "Bumblebee", href: "/animals/bumblebee", description: "A bee pollinator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
