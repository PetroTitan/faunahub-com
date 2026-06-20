import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/weaver";
const TITLE = "Weaver — Profile, Woven Nests, Diet & Behavior";
const DESC =
  "Explore weavers (family Ploceidae): small, often bright-yellow Old World birds famous for elaborately woven, knotted nests — using the southern masked weaver as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("weaver"),
});

export default function WeaverPage() {
  return (
    <AnimalProfileLayout
      commonName="Weaver"
      scientificName="family Ploceidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Nest-builder", "Old World"]}
      image={getAnimalImage("weaver") ?? undefined}
      galleryImages={getAnimalGalleryImages("weaver")}
      sources={ANIMAL_SOURCES.weaver}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Weavers (family Ploceidae) are small, finch-like Old World birds, many of them
            bright yellow with black markings, named for their extraordinary nest-building
            skill. The southern masked weaver (<em>Ploceus velatus</em>), shown here, is a
            classic example: the male knots and weaves strips of grass and leaves into an
            intricate, enclosed hanging nest, tying real knots with his beak and feet.
          </p>
          <p>
            This building ability is among the most sophisticated of any bird, and weaver
            colonies — sometimes with many nests in a single tree — are a familiar sight
            across Africa and parts of Asia.
          </p>
          <p>
            <strong>Note:</strong> the weaver family is large and varied; details here use
            the southern masked weaver as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Weavers occur across sub-Saharan Africa and into parts of Asia, in habitats from
          savanna, grassland, and wetlands to woodland and gardens. Many nest near water or
          in isolated trees, and the southern masked weaver is widespread and adaptable
          across southern Africa, including in towns and gardens.
        </p>
      }
      diet={
        <p>
          Weavers are mainly seed-eaters, feeding on grass and other seeds, but they also
          take insects (especially when feeding chicks), as well as nectar and fruit in
          some species. Their stout, conical bills are well suited to handling seeds — and,
          remarkably, also to the delicate work of weaving nest material.
        </p>
      }
      behavior={
        <p>
          The male weaver&apos;s nest-building is the family&apos;s signature behaviour: he
          strips fresh greenery and weaves it into a rounded, often flask-shaped nest with
          a downward entrance, frequently hanging from a branch tip where it is hard for
          predators to reach. He may build several nests and display at them to attract a
          female, who inspects the work and may reject a poor effort. Many weavers are
          social and nest in noisy colonies; some species even build huge communal
          structures.
        </p>
      }
      humanInteraction={
        <p>
          Weavers are popular and conspicuous birds, admired for their building skill and
          often welcomed in gardens. A few seed-eating species can be agricultural pests
          where they gather in large flocks. Most weavers are common, though some
          restricted species are of conservation concern. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How do weavers build their nests?",
          answer:
            "Male weavers strip thin lengths of grass or leaves and literally weave and knot them together using their beak and feet, creating an enclosed, often hanging nest with a narrow entrance. It is one of the most complex nest-building behaviours of any bird, and males may practise and improve over time.",
        },
        {
          question: "Why do male weavers build several nests?",
          answer:
            "Nest-building is central to courtship. A male often constructs multiple nests and displays at them to attract females; a female inspects the workmanship and may accept a good nest or reject a sloppy one, sometimes prompting the male to tear it down and start again. Good building skill helps him breed.",
        },
        {
          question: "What do weavers eat?",
          answer:
            "Most weavers are primarily seed-eaters, with stout conical bills for cracking grass and other seeds. They also eat insects — important protein for growing chicks — and some take nectar or fruit, depending on the species and season.",
        },
        {
          question: "Do all weavers nest in colonies?",
          answer:
            "Many do, gathering in noisy colonies where a single tree can hold numerous nests, but not all. Some weavers are more solitary. A few species build enormous communal nests housing many pairs, which are among the most impressive structures made by any bird.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Ploceidae" },
        { label: "Reference species", value: "Ploceus velatus (southern masked weaver)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly seeds; also insects" },
        { label: "Signature trait", value: "Elaborate woven, knotted nests" },
        { label: "Nesting", value: "Often colonial; male builds" },
        { label: "Range", value: "Africa & parts of Asia" },
        { label: "Status", value: "Many common (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Sparrow Profile", href: "/animals/sparrow", description: "A related small seed-eater" },
        { label: "Sunbird Profile", href: "/animals/sunbird", description: "Another vivid Old World bird" },
        { label: "Oxpecker Profile", href: "/animals/oxpecker", description: "Another African bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
