import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leafcutter-bee";
const TITLE = "Leafcutter Bee: Megachile Pollinator Profile";
const DESC =
  "Leafcutter bees (Megachile, family Megachilidae) are solitary bees that cut leaf discs to line nests and carry pollen on belly hairs. Not the leafcutter ant.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("leafcutter-bee"),
});

export default function LeafcutterBeePage() {
  return (
    <AnimalProfileLayout
      commonName="Leafcutter Bee"
      scientificName="Megachile spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Bee","Pollinator","Solitary"]}
      image={getAnimalImage("leafcutter-bee") ?? undefined}
      galleryImages={getAnimalGalleryImages("leafcutter-bee")}
      sources={ANIMAL_SOURCES["leafcutter-bee"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Leafcutter bees are solitary bees in the family Megachilidae, most familiar in the large genus <em>Megachile</em>. They get their name from a distinctive habit: females snip neat, rounded or oval pieces from leaves and petals and use them to line and seal the cells of their nests. The cut edges they leave behind are often the first sign that leafcutter bees are nearby.
          </p>
          <p>
            Unlike honey bees, leafcutter bees do not live in large colonies, store honey, or have a worker caste. Each female generally builds and provisions her own nest. They are widely described as gentle and non-aggressive, and they carry pollen in a different way from many other bees — on dense hairs beneath the abdomen rather than on the hind legs.
          </p>
          <p>
            It is worth stating clearly that the leafcutter bee is a bee and is not the leafcutter ant. Leafcutter ants (which farm fungus on cut vegetation) are unrelated insects; the similar common name causes frequent confusion.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Leafcutter bees belong to the family Megachilidae within the order Hymenoptera. The common name is used most often for members of the genus <em>Megachile</em>, a large and globally distributed group containing many hundreds of described species. Megachilidae also includes related bees such as the mason bees (<em>Osmia</em>), and the family as a whole is recognized for carrying pollen on a brush of hairs under the abdomen rather than on the legs. Because &quot;leafcutter bee&quot; spans many species, traits such as size, coloring, and the exact plants used for leaf material vary considerably across the group. For the current classification of any particular species, consult a taxonomic authority such as the Integrated Taxonomic Information System or a regional bee fauna reference.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Leafcutter bees are typically small to moderate-sized, robust bees, often roughly the size of a honey bee or a little smaller, though size varies by species. Many are dark-bodied with pale hair bands across the abdomen. A useful identifying feature in females is the scopa, a dense patch of pollen-carrying hairs on the underside of the abdomen; when loaded with pollen this area can look bright yellow or orange. Because they carry pollen on the belly rather than the legs, a foraging female often appears to have a colorful &quot;underside.&quot; They have relatively large heads and strong jaws (mandibles) used to cut leaf and petal pieces. As with most bees, appearance overlaps with other groups, so confident identification of a particular species usually requires close examination by someone familiar with regional bee fauna.
          </p>
        </>
      }
      habitat={
        <p>
          Leafcutter bees are found across many parts of the world, in habitats ranging from natural meadows, woodlands, and shrublands to parks, gardens, and other green spaces. As cavity-nesters, many species use pre-existing holes — hollow plant stems, beetle borings in dead wood, gaps in masonry, and similar narrow spaces — which they line with cut leaf pieces. Because the genus <em>Megachile</em> is so large and widespread, distribution and preferred habitat differ greatly from species to species. This profile describes the group in general terms and does not assign a native or introduced status to any particular region; some species are widespread while others are local, and a few have been moved well beyond their original ranges. For where a specific species occurs, consult a regional bee guide or a recognized biodiversity database such as GBIF.
        </p>
      }
      diet={
        <p>
          Like other bees, leafcutter bees feed on floral resources. Adults take nectar as an energy source, and females also gather pollen, which serves as the protein-rich food provisioned for their developing larvae. Females pack pollen (often mixed with some nectar) into each nest cell before laying an egg, so the larva feeds on this stored &quot;bee bread&quot; as it grows. Different leafcutter species visit different ranges of flowers; some are generalists that use many plant types, while others are more specialized. The cut leaf and petal pieces are used as building material for the nest, not as food.
        </p>
      }
      behavior={
        <>
          <p>
            Most leafcutter bees are solitary, meaning each female typically constructs and provisions her own nest without workers or a shared colony. A female cuts pieces of leaf or petal with her mandibles, carries each piece back to a narrow cavity, and uses them to form a series of thimble-like cells arranged end to end. She stocks each cell with pollen and nectar, lays an egg, and seals it before starting the next. The larvae develop inside their cells, and many species overwinter as mature larvae or pre-pupae, emerging as adults the following warm season; the number of generations per year varies by species and climate. Males generally emerge before females and do not build nests. Leafcutter bees are widely regarded as calm and not prone to aggression around their nesting sites.
          </p>
          <p>
            As flower visitors, leafcutter bees are part of the broader community of wild pollinators that contribute to the reproduction of many flowering plants. They are one example of the great diversity of wild bees — a diversity that is distinct from managed honey bees, which are kept by people in many places and should not be treated as a stand-in for wild bee variety. Through their nesting in cavities and their use of cut vegetation, leafcutter bees also interact with the plants they harvest leaves from; this leaf-cutting generally removes only small pieces. Their developing larvae and the bees themselves can serve as food for predators and parasites, linking them into wider food webs. The specific ecological role of any one species depends on its local flora, the other pollinators present, and regional conditions.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People most often notice leafcutter bees because of the neat semicircular notches the females cut from leaves and flower petals; this is normal foraging for nest material and the plants involved usually continue growing. Leafcutter bees are widely described as gentle and not aggressive: males cannot sting, and females sting only rarely and are not inclined to do so away from being handled or trapped. This profile does not provide guidance on handling, capturing, keeping, removing, or controlling bees, and it offers no medical advice. Anyone with concerns about a possible sting reaction or an allergy should seek advice from a qualified medical professional, and questions about insects around a property are best directed to local authorities or qualified professionals.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Leafcutter bees visit flowers to collect nectar and pollen, and in doing so they can transfer pollen between flowers and act as pollinators of some plants. Their habit of carrying loose, dry pollen on belly hairs means pollen is comparatively exposed and can brush onto flowers as they forage, and several <em>Megachile</em> species are recognized as effective pollinators of certain crops and wild plants. The alfalfa leafcutting bee (<em>Megachile rotundata</em>) is a well-documented example managed for pollination of alfalfa grown for seed in some regions. That said, pollination effectiveness varies by bee species, plant species, and region, and not every flower visit results in successful pollination — a visitor can take nectar or pollen without effectively pollinating a given flower. Leafcutter bees are best described as important pollinators of some plants rather than universal pollinators of all flowers they visit.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Because &quot;leafcutter bee&quot; covers a large number of species in the family Megachilidae, there is no single conservation status that applies to the whole group, and it would be misleading to assign one. Many individual species have not been formally assessed, and conservation status differs from species to species and over time. For wild bees generally, habitat change and other pressures are widely discussed as conservation concerns, but specific trends should not be assumed for every leafcutter species. For the current status of any particular species, consult the IUCN Red List or relevant regional assessments, and treat any status as subject to change as new information becomes available.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is a leafcutter bee the same as a leafcutter ant?",
          answer:
            "No. The leafcutter bee is a true bee in the family Megachilidae (especially the genus Megachile) that cuts leaf pieces to build its nest cells. The leafcutter ant is an unrelated ant that cuts vegetation to grow fungus. They share part of a common name but are very different insects.",
        },
        {
          question: "Why do leafcutter bees cut pieces out of leaves?",
          answer:
            "Females cut neat, often semicircular pieces of leaf or petal to line and seal the cells of their nests, where they store pollen and nectar for their larvae. The cut pieces are used as building material, not eaten, and the harvested plants usually keep growing.",
        },
        {
          question: "Are leafcutter bees good pollinators?",
          answer:
            "They visit flowers for nectar and pollen and can act as pollinators of some plants; certain species, such as the alfalfa leafcutting bee, are recognized as effective crop pollinators. However, pollination effectiveness varies by bee species, plant, and region, and not every flower visit results in pollination.",
        },
        {
          question: "Do leafcutter bees sting?",
          answer:
            "Leafcutter bees are widely described as gentle and not aggressive. Males cannot sting, and females sting only rarely. This page does not give handling or medical advice; anyone concerned about a sting or an allergy should consult a qualified medical professional.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Family Megachilidae, esp. genus Megachile" },
        { label: "Pollinator group", value: "Bee (solitary, wild)" },
        { label: "Pollination role", value: "Visits flowers; can pollinate some plants — effectiveness varies by species and region" },
        { label: "Range", value: "Widely distributed worldwide; varies greatly by species (see regional guides)" },
        { label: "Diet / feeding", value: "Nectar and pollen; pollen provisioned for larvae" },
        { label: "Conservation note", value: "No single status for the group; varies by species and changeable — consult the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Bee", href: "/animals/bee", description: "Bees as a group" },
        { label: "Mason Bee", href: "/animals/mason-bee", description: "Another solitary bee" },
        { label: "Bumblebee", href: "/animals/bumblebee", description: "A social bee" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
