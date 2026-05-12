import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Tiger — Profile, Habitat, Diet & Behavior";
const description =
  "Panthera tigris: the largest living cat. Where tigers live, what they hunt, why they are solitary, and the conservation pressures they face across Asia.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/tiger",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function TigerPage() {
  return (
    <AnimalProfileLayout
      commonName="Tiger"
      scientificName="Panthera tigris"
      pageTitle={title}
      description={description}
      path="/animals/tiger"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Big Cat", "Apex Predator"]}
      overview={
        <>
          <p>
            The tiger (<em>Panthera tigris</em>) is the largest living member of the cat family
            Felidae and one of the most recognisable wild animals on Earth. Tigers are solitary
            ambush hunters built for short, powerful bursts of speed across dense forest, tall
            grassland and mangrove habitats. The species is divided into several subspecies, of
            which the Bengal and Amur (Siberian) tiger are the most widely studied.
          </p>
          <p>
            <strong>Conservation note:</strong> The tiger is currently classified as{" "}
            <strong>Endangered</strong> on the IUCN Red List (verify current status at
            iucnredlist.org before publication). Several subspecies are considered critically
            threatened, and historical range has contracted dramatically over the past century.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Tigers occupy a much wider range of habitats than their popular image suggests —
            from the snow-bound boreal forests of the Russian Far East (Amur tiger) to the
            tropical evergreen forests of South and Southeast Asia, the grasslands of central
            India, and the mangrove swamps of the Sundarbans on the India–Bangladesh border.
          </p>
          <p>
            The unifying ecological requirement is dense cover for stalking, sufficient large
            prey, and access to water. Wild tigers no longer occur naturally in West or Central
            Asia, where they were historically present.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Tigers are obligate carnivores and apex predators. Primary prey includes large
            deer species such as sambar and chital, wild pigs, gaur, and other large ungulates
            depending on region. A tiger typically hunts alone, relying on stealth, cover,
            and a powerful final charge rather than a long pursuit.
          </p>
          <p>
            A single tiger may consume large amounts of meat per kill and then go several days
            without feeding. They will also scavenge when the opportunity arises.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Unlike lions, tigers are strongly solitary. Adults maintain individual territories
            marked by scent, scrapes, and visual signs. Territories of males typically overlap
            with those of several females. Direct social contact outside of mating and the
            raising of cubs is limited.
          </p>
          <p>
            Tigers are strong swimmers, frequently entering water to cool down or to cross
            rivers and waterways — a behaviour particularly characteristic of populations in
            Sundarbans mangroves.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Tigers face severe pressures from habitat loss, prey depletion, retaliatory killing
            in response to livestock predation, and poaching driven by demand for body parts in
            illegal wildlife trade. National protected-area networks — for example India&apos;s
            Project Tiger reserves — and trans-boundary conservation efforts have stabilised
            some populations, but many remain fragmented and vulnerable.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other large cats sharing parts of the tiger&apos;s range or ecological role include
          the leopard (<em>Panthera pardus</em>) and, in different ecosystems, the lion (
          <em>P. leo</em>). The jaguar (<em>P. onca</em>) occupies a comparable apex predator
          role in the Americas.
        </p>
      }
      comparisonCallouts={[
        { href: "/compare/lion-vs-tiger", label: "Lion vs Tiger" },
      ]}
      faqs={[
        {
          question: "Which is the largest tiger subspecies?",
          answer:
            "The Amur (Siberian) tiger is generally regarded as the largest, with the Bengal tiger close behind. Subspecific weight ranges overlap, and figures vary by source and study population. Reported maximums for very large males can exceed 250 kg, but most adults fall well below this.",
        },
        {
          question: "Do tigers attack humans?",
          answer:
            "Tigers generally avoid humans. Documented human predation occurs in specific contexts — for example, in the Sundarbans, or where tigers are injured, aged, or have lost natural prey. Conflict risk increases where human settlements push into tiger habitat or where livestock is unsecured at night.",
        },
        {
          question: "How fast can a tiger run?",
          answer:
            "Tigers are capable of fast short-distance bursts, estimated in the range of 50–65 km/h. They are not built for prolonged chases and rely on closing the distance through cover before launching a final sprint.",
        },
        {
          question: "Are white tigers a separate species?",
          answer:
            "No. White tigers are not a subspecies. The white coat results from a recessive genetic variant, and almost all white tigers in captivity descend from a small number of related individuals, raising welfare and genetic-diversity concerns. They do not occur in any meaningful wild population today.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Panthera tigris" },
        { label: "Family", value: "Felidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Social structure", value: "Solitary (territorial)" },
        { label: "Primary habitat", value: "Forest, grassland, mangrove" },
        { label: "Range", value: "South & Southeast Asia, Russian Far East" },
        { label: "Diet", value: "Deer, wild pig, gaur, large ungulates" },
        { label: "IUCN Status", value: "Endangered (verify before publication)" },
      ]}
      relatedLinks={[
        { label: "Lion Profile", href: "/animals/lion", description: "Panthera leo — pride predator" },
        { label: "Leopard Profile", href: "/animals/leopard", description: "Panthera pardus — adaptable solitary cat" },
        { label: "Lion vs Tiger", href: "/compare/lion-vs-tiger", description: "Full species comparison" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
