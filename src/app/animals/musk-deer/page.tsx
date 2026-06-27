import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/musk-deer";
const TITLE = "Musk Deer (Moschus): Tusked Mammals of Asian Forests";
const DESC =
  "Musk deer (genus Moschus) are small, antlerless hoofed mammals of forested and alpine parts of Asia. Learn their biology, ecology, and conservation concerns.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("musk-deer"),
});

export default function MuskDeerPage() {
  return (
    <AnimalProfileLayout
      commonName="Musk Deer"
      scientificName="genus Moschus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Hoofed","Not a true deer"]}
      image={getAnimalImage("musk-deer") ?? undefined}
      galleryImages={getAnimalGalleryImages("musk-deer")}
      sources={ANIMAL_SOURCES["musk-deer"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Musk deer are small, primitive hoofed mammals of the genus <em>Moschus</em>, placed in their own family, Moschidae. Despite the name, they are not true deer: they lack antlers, and instead the males grow long, tusk-like upper canine teeth that protrude below the lips. They are shy, solitary browsers found in forested and alpine habitats across parts of Asia, including the Himalayas, Siberia, China, and nearby regions.
          </p>
          <p>
            Males of the genus possess a musk gland, and the strongly scented secretion it produces, known as musk, has long been valued in perfumery and traditional medicine. This demand has driven heavy hunting pressure, and several musk deer species are now considered threatened, though the conservation status varies from species to species within the genus.
          </p>
          <p>
            Because the number of recognized species, their precise ranges, and their individual conservation statuses differ across the genus and continue to be refined, the details here are presented cautiously. Readers should verify specific range, taxonomic, and status claims against authoritative sources such as the IUCN Red List, Animal Diversity Web, and museum and university zoology references.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Musk deer belong to the genus <em>Moschus</em>, the only living genus in the family Moschidae. Although they are hoofed mammals and superficially resemble small deer, they are not true deer and are not members of the deer family, Cervidae. The clearest distinction is anatomical: musk deer have no antlers, and males instead develop elongated, tusk-like upper canine teeth. They are sometimes described as primitive or ancient in body plan, retaining features that set them apart from the cervids. Several species are recognized within <em>Moschus</em>, and the exact number and boundaries of these species are subjects of ongoing study.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Musk deer are small and compactly built, with relatively short forelimbs and longer, more powerful hind limbs that give the body a hunched, rounded outline. They lack antlers entirely. The most distinctive feature is found in the males, whose upper canine teeth grow long and curve downward as tusk-like projections used in contests with rival males. The coat is typically coarse and provides insulation in cold, mountainous conditions. Males also carry a musk gland on the abdomen, the source of the scented secretion for which the animals are named.
          </p>
        </>
      }
      habitat={
        <p>
          Musk deer are associated with forested and alpine habitats across parts of Asia, including the Himalayas, mountainous regions of China, and parts of Siberia and adjacent areas. They are often linked to steep, rugged terrain with cover such as coniferous and mixed forest, scrub, and alpine zones at higher elevations. Because the genus contains several species with differing distributions, broad continent-wide statements should be avoided; the precise range of any given species is best confirmed against authoritative sources rather than generalized across all of Asia.
        </p>
      }
      diet={
        <p>
          Musk deer are browsers with a selective, plant-based diet. They feed on leaves, grasses, mosses, and lichens, along with other available vegetation depending on season and habitat. Their preference for lichens and mosses is consistent with the cold, forested, and alpine environments many populations occupy, where such growth is common. Feeding is generally quiet and unobtrusive, in keeping with the animal&#39;s shy and solitary habits.
        </p>
      }
      behavior={
        <>
          <p>
            Musk deer are typically solitary and secretive, tending to be most active around dawn and dusk and keeping to cover during the day. Males use their tusk-like canine teeth in contests with one another rather than using antlers, as true deer do. The animals rely heavily on concealment and a cautious, alert demeanor to avoid predators in their rugged habitats. Scent, produced in part by the male&#39;s musk gland, is thought to play a role in communication and marking within their environment.
          </p>
          <p>
            As small browsing mammals, musk deer form part of the herbivore community of Asian forest and alpine ecosystems, consuming vegetation including lichens and mosses and serving as prey for larger predators in their range. Their distribution across mountainous and forested parts of Asia ties them closely to relatively intact, cover-rich habitats. Habitat change and hunting pressure can affect their populations, making them a useful indicator of the condition of the forested and alpine systems they inhabit.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The principal human interaction with musk deer concerns the musk produced by the male&#39;s gland, which has long been used in perfumery and traditional medicine. This demand has driven heavy hunting and remains a major conservation concern for the genus, with several species considered threatened. FaunaHub presents this trade strictly as a conservation issue, not as a recommendation or instruction of any kind. Musk deer are wild animals, not pets, and questions about their protection, the legality of musk products, or wildlife conflict should be directed to qualified conservation bodies and local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Are musk deer actually deer?",
          answer:
            "No. Despite the name, musk deer are not true deer. They belong to the family Moschidae, not the deer family, and they lack antlers. Males instead grow long, tusk-like upper canine teeth, which is one of the clearest differences from true deer.",
        },
        {
          question: "Why are they called musk deer?",
          answer:
            "The name comes from the musk gland carried by males, whose strongly scented secretion is known as musk. This musk has long been used in perfumery and traditional medicine, and that demand has driven much of the hunting pressure the animals face.",
        },
        {
          question: "Are musk deer endangered?",
          answer:
            "Several musk deer species are considered threatened, but the status varies by species within the genus. Hunting for musk is a major conservation concern. For accurate, species-specific status, consult authoritative sources such as the IUCN Red List.",
        },
        {
          question: "Where in Asia are musk deer found?",
          answer:
            "Musk deer occur in forested and alpine habitats across parts of Asia, including the Himalayas, mountainous regions of China, and parts of Siberia and nearby areas. Because the genus includes several species with different ranges, specific distributions should be checked against authoritative references.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Musk deer (genus Moschus)" },
        { label: "Higher classification", value: "Family Moschidae; not true deer (Cervidae)" },
        { label: "Diet", value: "Browser: leaves, grasses, mosses, and lichens" },
        { label: "Notable trait", value: "No antlers; males have tusk-like canines and a musk gland" },
        { label: "Habitat", value: "Forested and alpine terrain, often mountainous" },
        { label: "Asia distribution", value: "Parts of Asia, incl. the Himalayas, China, and Siberia" },
        { label: "Human interaction", value: "Hunted for musk; a conservation concern, not a pet" },
        { label: "Conservation status", value: "Varies by species; several threatened" },
      ]}
      relatedLinks={[
        { label: "Deer Profile", href: "/animals/deer", description: "True deer, for contrast" },
        { label: "Takin Profile", href: "/animals/takin", description: "An Asian mountain bovid" },
        { label: "Saiga Profile", href: "/animals/saiga", description: "An Asian steppe antelope" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
