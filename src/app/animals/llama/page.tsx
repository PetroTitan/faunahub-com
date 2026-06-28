import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/llama";
const TITLE = "Llama: Andean Domesticated Camelid Profile";
const DESC =
  "Learn about the llama (Lama glama), a domesticated South American camelid descended from the wild guanaco, long used in the Andes for transport and wool.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("llama"),
});

export default function LlamaPage() {
  return (
    <AnimalProfileLayout
      commonName="Llama"
      scientificName="Lama glama"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Domestic camelid","Andes"]}
      image={getAnimalImage("llama") ?? undefined}
      galleryImages={getAnimalGalleryImages("llama")}
      sources={ANIMAL_SOURCES["llama"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The llama (<em>Lama glama</em>) is a domesticated South American camelid that has been kept by people in the Andean region for thousands of years. Descended from the wild guanaco, it was developed by Andean communities primarily as a pack animal and as a source of wool and meat. As a domestic animal rather than a wild species, the llama exists today mainly in association with human management and husbandry.
          </p>
          <p>
            Llamas belong to the camel family and are closely related to the alpaca, guanaco, and vicuna. They are often described as calm in demeanor, surefooted on mountainous terrain, and able to carry loads across high-altitude landscapes. Because the llama is a domesticated animal, it is not assessed in the same way as wild species, and discussions of its status focus on breeding, husbandry, and cultural use rather than on a conservation category.
          </p>
          <p>
            This profile presents the llama in an educational context, describing its biology, history of domestication, and ecological and cultural role. It is not a guide to keeping, breeding, or managing llamas, and any practical questions about animal husbandry fall outside its scope.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The llama is classified as <em>Lama glama</em>, a domesticated member of the family Camelidae within the order Artiodactyla (the even-toed ungulates). It is one of the South American, or &quot;New World,&quot; camelids, a group that also includes the alpaca, the wild guanaco, and the wild vicuna. The llama is widely understood to be the domesticated descendant of the guanaco (<em>Lama guanicoe</em>). Because it is a domestic animal, the llama is generally treated as a managed form rather than as an independent wild species, and it does not carry an IUCN Red List category in the manner that wild animals do.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The llama is a large, long-necked camelid with a slender body, long legs, and a distinctive upright posture. It has a woolly coat that varies widely in color, from white and cream through shades of brown, gray, and black, often in mixed or patterned combinations. The face is relatively narrow with large eyes and prominent, gently curved ears, and the lips are mobile and well suited to gathering vegetation. Llamas are generally larger than alpacas and tend to have coarser wool and a longer, leaner build, which are among the features commonly used to tell the two domesticated camelids apart.
          </p>
        </>
      }
      habitat={
        <p>
          As a domesticated animal, the llama is associated chiefly with the Andean highlands of parts of South America, where it has long been kept by mountain communities at high elevations. Its wild ancestor, the guanaco, occurs in parts of southern and western South America, and the llama&#39;s domestic range historically centered on the high plateaus and grasslands of the central Andes. Today, llamas are also kept in managed settings well beyond the Andes, in various regions where people raise them, but in every case their presence reflects human husbandry rather than a self-sustaining wild population. References to the llama&#39;s &quot;range&quot; therefore describe where it is kept and used, not a natural distribution.
        </p>
      }
      diet={
        <p>
          Llamas are herbivores and, like other camelids, are adapted to digesting fibrous plant material efficiently. Their diet consists largely of grasses and other low, tough vegetation typical of high-altitude pastures, and they are able to make use of relatively sparse forage. They are foregut fermenters with a chambered stomach, allowing them to break down coarse plant matter through microbial digestion, and they typically chew cud after feeding. This efficient processing of rough vegetation is part of what made them well suited to the demanding Andean environments where they were domesticated.
        </p>
      }
      behavior={
        <>
          <p>
            Llamas are social animals that are often described as calm and curious, and in managed settings they are commonly kept in groups. They communicate through body posture, ear and tail positions, and a range of soft vocalizations, including a humming sound. When they feel threatened or are competing over food or status, they may spit, a behavior also seen among themselves as a form of social signaling. Llamas can live for many years, and reproduction typically involves a single offspring, called a cria, born after a long gestation. As a domesticated species, the patterns of their breeding are shaped by human management rather than by wild population dynamics.
          </p>
          <p>
            In its domesticated role, the llama functions less as a component of a wild ecosystem and more as part of Andean agricultural and pastoral systems. Its grazing helps people use high-altitude grasslands that are difficult to farm, and historically the animal allowed transport and trade across rugged terrain that other livestock could not easily traverse. The llama&#39;s wild ancestor and relatives, such as the guanaco and vicuna, play more direct ecological roles in natural grassland systems of parts of South America. The llama itself is best understood as a long-standing example of how a wild species can be shaped through domestication to support human livelihoods in a challenging landscape.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The llama has a deep cultural and economic history in the Andes, where it has served as a pack animal and as a source of wool, meat, and other materials for thousands of years, and it remains important to many communities today. Because it is a domesticated animal, the llama is not assigned an IUCN Red List conservation category in the way wild species are; its continuation depends on ongoing breeding and husbandry rather than on the protection of a wild population. This profile is educational and is not a guide to keeping, handling, or managing llamas. Practical questions about animal husbandry or veterinary care fall outside its scope and are matters for qualified agricultural and veterinary professionals.
        </p>
      }
      faqs={[
        {
          question: "Is the llama a wild or domestic animal?",
          answer:
            "The llama is a domesticated animal, developed by Andean communities from the wild guanaco. It is not a wild species, and it depends on human husbandry rather than living in self-sustaining wild populations.",
        },
        {
          question: "What is the llama's conservation status?",
          answer:
            "Because it is a domesticated animal, the llama is not assessed on the IUCN Red List in the way wild species are. Its future is tied to breeding and management rather than to a conservation category.",
        },
        {
          question: "What is the difference between a llama and an alpaca?",
          answer:
            "Both are domesticated South American camelids, but llamas are generally larger, leaner, and longer-necked, with coarser wool, and were used mainly as pack animals. Alpacas are smaller and were valued especially for their finer fleece.",
        },
        {
          question: "Where did llamas originally come from?",
          answer:
            "Llamas were domesticated in the Andean highlands of parts of South America from the wild guanaco. Their long history there centers on high-altitude grasslands and plateaus, though they are now also kept in managed settings elsewhere.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lama glama" },
        { label: "Animal group", value: "Mammal (domesticated camelid)" },
        { label: "Family/order", value: "Camelidae; Artiodactyla" },
        { label: "Size", value: "Large; long-necked, long-legged build" },
        { label: "Diet", value: "Herbivore (grasses, fibrous vegetation)" },
        { label: "Habitat", value: "Andean highlands and managed pastures" },
        { label: "Range", value: "Kept across parts of South America and beyond (domestic)" },
        { label: "Conservation status", value: "Domesticated; not assessed by the IUCN" },
      ]}
      relatedLinks={[
        { label: "Guanaco", href: "/animals/guanaco", description: "Its wild ancestor" },
        { label: "Vicuna", href: "/animals/vicuna", description: "A wild Andean camelid" },
        { label: "Camel", href: "/animals/camel", description: "An Old World relative" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
