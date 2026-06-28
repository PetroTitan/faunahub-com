import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tree-kangaroo";
const TITLE = "Tree Kangaroo: Tree-Dwelling Macropod Guide";
const DESC =
  "Learn about tree kangaroos (genus Dendrolagus), arboreal macropods of New Guinea and northeastern Australia, their habitat, diet, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("tree-kangaroo"),
});

export default function TreeKangarooPage() {
  return (
    <AnimalProfileLayout
      commonName="Tree Kangaroo"
      scientificName="Dendrolagus (several species)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Marsupial","Rainforest"]}
      image={getAnimalImage("tree-kangaroo") ?? undefined}
      galleryImages={getAnimalGalleryImages("tree-kangaroo")}
      sources={ANIMAL_SOURCES["tree-kangaroo"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Tree kangaroos are a group of marsupial mammals in the genus <em>Dendrolagus</em>, a name often translated as &quot;tree hare.&quot; Unlike their ground-dwelling relatives, these macropods have adapted to a life spent largely in the canopy and branches of forests, making them unusual among kangaroos and wallabies.
          </p>
          <p>
            &quot;Tree kangaroo&quot; is not a single species but a label covering several species within <em>Dendrolagus</em>. They are associated with the rainforests of New Guinea and parts of far northeastern Australia, where they climb, feed, and rest among the trees. Their arboreal lifestyle has shaped distinctive features in their limbs, balance, and movement.
          </p>
          <p>
            Because the name covers multiple species, broad generalizations should be made carefully. Individual species differ in size, coloration, range, and conservation outlook, so descriptions here are offered as general patterns across the group rather than fixed traits of any one species.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Tree kangaroos belong to the genus <em>Dendrolagus</em> within the family Macropodidae, the macropods, which also includes kangaroos, wallabies, and related marsupials in the order Diprotodontia. The genus contains several recognized species rather than one, and the common name &quot;tree kangaroo&quot; applies to all of them collectively. As marsupials, they carry and nurse their young in a pouch. Their classification places them among the macropods despite their tree-dwelling habits, which set them apart from the better-known ground-living members of the family.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Tree kangaroos are generally recognized by a compact, muscular build suited to climbing, with forelimbs that are proportionally stronger than those of ground kangaroos and a long, often loosely curling tail used for balance. Their fur is typically dense and can range across browns, golden, reddish, and grey tones depending on the species, sometimes with paler underparts or contrasting markings on the face, limbs, or tail. They have curved claws and flexible, padded feet that grip bark and branches. Compared with terrestrial kangaroos, they tend to look shorter-legged and rounder, an impression created by their adaptations for moving through trees rather than bounding across open ground.
          </p>
        </>
      }
      habitat={
        <p>
          Tree kangaroos are associated with tropical and montane rainforests, where the canopy and understorey provide food and shelter. As a group they are found in parts of New Guinea and in parts of far northeastern Australia, and their distribution should be understood as patchy and species-specific rather than continuous. They are not native to all of Oceania, and the genus is tied specifically to New Guinea and a limited area of northeastern Australia rather than to the wider Pacific region. Different species occupy different elevations and forest types, with some associated with lowland forests and others with cooler highland habitats.
        </p>
      }
      diet={
        <p>
          Tree kangaroos are primarily herbivorous, feeding mainly on leaves and fruit gathered from the trees and surrounding vegetation. Their diet may also include flowers, buds, bark, and other plant material, with the exact mix varying by species and by what is locally available. Like other macropods, they have a digestive system suited to processing fibrous plant matter, allowing them to extract nutrients from foliage that is otherwise difficult to break down. Feeding generally takes place within the forest layers they inhabit, where they browse among branches and the canopy.
        </p>
      }
      behavior={
        <>
          <p>
            Tree kangaroos are well adapted to arboreal life, capable of climbing, walking along branches, and making controlled leaps between trees, and they can also move on the ground when needed. Many species are reported to be relatively solitary or to live in small, loose social groupings, and some are active during cooler parts of the day or night. As marsupials, females give birth to highly underdeveloped young that continue developing in the pouch, where a single joey is typically raised for an extended period before becoming independent. Their behavior, like much of their biology, varies across the several species in the genus.
          </p>
          <p>
            As forest-dwelling herbivores, tree kangaroos take part in the ecology of rainforest canopies, where their feeding on leaves and fruit can contribute to the movement of seeds and the natural dynamics of the vegetation they browse. They form one part of complex rainforest communities in New Guinea and northeastern Australia, interacting with the plants they feed on and with other animals that share their habitat. Their presence is closely tied to the health and continuity of intact forest, and changes to those forests can ripple through the wider ecological systems in which they live.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Because &quot;tree kangaroo&quot; covers several species, conservation status varies by species: according to the IUCN Red List, a number of them are assessed as threatened, with some listed as Endangered, while others differ in their outlook, and these assessments can change over time as new information becomes available. The pressures most often cited for the group include habitat loss and hunting pressure across parts of their range. These are wild animals, not pets, and concerns about wildlife, habitat, or human-wildlife interaction are best directed to local wildlife authorities and conservation organizations. Supporting the protection of intact rainforest is generally regarded as central to the future of these species.
        </p>
      }
      faqs={[
        {
          question: "Are tree kangaroos really kangaroos?",
          answer:
            "Yes. Tree kangaroos are macropods in the family Macropodidae, the same family as kangaroos and wallabies, but they belong to the genus Dendrolagus and are adapted to living in trees rather than on open ground.",
        },
        {
          question: "Where are tree kangaroos found?",
          answer:
            "As a group they are associated with rainforests in parts of New Guinea and parts of far northeastern Australia. They are not found across all of Oceania, and different species occupy different forests and elevations.",
        },
        {
          question: "What do tree kangaroos eat?",
          answer:
            "They are primarily herbivorous, feeding mainly on leaves and fruit, and may also eat flowers, buds, and other plant material depending on the species and what is locally available.",
        },
        {
          question: "Are tree kangaroos endangered?",
          answer:
            "Because the name covers several species, conservation status varies. According to the IUCN Red List, several are assessed as threatened, with some listed as Endangered, mainly due to habitat loss and hunting pressure, and these assessments can change over time.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Dendrolagus (several species)" },
        { label: "Animal group", value: "Mammal (marsupial macropod)" },
        { label: "Family/order", value: "Macropodidae; Diprotodontia" },
        { label: "Size", value: "Varies by species; compact, climbing-adapted build" },
        { label: "Diet", value: "Herbivore: mainly leaves and fruit" },
        { label: "Habitat", value: "Tropical and montane rainforest" },
        { label: "Range", value: "Parts of New Guinea and far northeastern Australia" },
        { label: "Conservation status", value: "Varies by species (IUCN Red List); some Endangered" },
      ]}
      relatedLinks={[
        { label: "Kangaroo", href: "/animals/kangaroo", description: "A ground-dwelling macropod" },
        { label: "Wallaby", href: "/animals/wallaby", description: "Another macropod" },
        { label: "Koala", href: "/animals/koala", description: "Another tree-dwelling marsupial" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
