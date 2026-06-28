import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dingo";
const TITLE = "Dingo: Australia's Wild Canid Explained";
const DESC =
  "Learn about the dingo, a wild canid of parts of mainland Australia, including its debated taxonomy, ecology, behaviour and conservation picture.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("dingo"),
});

export default function DingoPage() {
  return (
    <AnimalProfileLayout
      commonName="Dingo"
      scientificName="Canis (dingo)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Wild canid","Australia"]}
      image={getAnimalImage("dingo") ?? undefined}
      galleryImages={getAnimalGalleryImages("dingo")}
      sources={ANIMAL_SOURCES["dingo"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The dingo is a wild canid associated with parts of mainland Australia, where it has lived for thousands of years. It is descended from ancient domestic dogs that arrived on the continent long ago, and over time it established free-living populations across many environments. Today it occupies an unusual position in discussions of animal classification, sitting between the categories of wild animal and feral descendant of domestic stock.
          </p>
          <p>
            Its exact taxonomy and its status as native, feral, or wild are genuinely debated among scientists. Different authorities have treated the dingo as <em>Canis familiaris</em>, as <em>Canis lupus dingo</em>, or as a distinct species <em>Canis dingo</em>, and there is no single agreed answer. This profile presents the dingo as an educational subject rather than a pet, and treats these open questions as ongoing scientific discussion rather than settled fact.
          </p>
          <p>
            Because of this complexity, the dingo is best understood as a long-established free-living canid whose origins, classification, and management raise questions that researchers continue to study. Conservation and management are likewise complicated, particularly by interbreeding with domestic dogs.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The dingo&#39;s taxonomy is unresolved and actively debated. It is a member of the genus <em>Canis</em> within the dog family, Canidae, and it descends from ancient domestic dogs rather than from a separate wild lineage. Different scientific sources classify it in different ways: some treat it as the domestic dog <em>Canis familiaris</em>, some as a subspecies <em>Canis lupus dingo</em>, and some as a distinct species <em>Canis dingo</em>. The anchor name used here, <em>Canis (dingo)</em>, reflects this uncertainty. Rather than asserting a single definitive classification, it is most accurate to say that the dingo is a canid whose placement among species and subspecies remains a matter of legitimate, ongoing scientific disagreement.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The dingo is a medium-sized, lean canid with a wedge-shaped head, erect ears, and a relatively broad skull compared with many domestic dogs. Its coat is typically described as sandy or ginger in colour, though black-and-tan and paler variations also occur, often with lighter markings on the feet, chest, and tail tip. It has a bushy tail and a generally athletic, sparing build suited to covering distance. Because it can closely resemble some domestic dogs and their crosses, visual identification alone is not always reliable, and interbreeding has blurred some distinguishing features in parts of its range.
          </p>
        </>
      }
      habitat={
        <p>
          The dingo is found in parts of mainland Australia and was historically present in some nearby areas as well. Across parts of the continent it occupies a wide range of environments, including arid interior, grasslands, woodlands, and the edges of forests and wetlands, showing considerable flexibility in where it can live. It is important to note that the dingo is associated with mainland Australia specifically and should not be assumed to occur across all of Oceania, nor conflated with the fauna of Tasmania, New Zealand, New Guinea, or the wider Pacific islands. Its distribution within Australia is uneven and has been shaped by both landscape and human activity.
        </p>
      }
      diet={
        <p>
          The dingo is a flexible carnivore whose feeding ecology shifts with what is locally available. Its diet can include a range of mammals from small to relatively large, as well as birds, reptiles, and other prey, supplemented at times by carrion. In some areas it takes smaller animals opportunistically, while in others it may hunt larger prey, sometimes cooperatively within a group. This adaptability in diet is one reason the dingo has persisted across such varied environments.
        </p>
      }
      behavior={
        <>
          <p>
            Dingoes may live alone or form social groups, and their behaviour varies with environment, food availability, and season. Within a group, breeding and the rearing of young follow a social structure, and pups are raised in dens before gradually becoming independent. They communicate through vocalisations, including howling, as well as scent and body language, and they can range widely across a home territory. Their social and reproductive patterns are flexible rather than fixed, which has helped them adapt to different conditions across their range.
          </p>
          <p>
            As a relatively large predator across much of mainland Australia, the dingo can influence the ecosystems it inhabits. By preying on various animals and interacting with other species, it may affect the numbers and behaviour of prey and of smaller predators, and researchers study its role as part of broader food-web dynamics. Such influences are complex and context-dependent, varying from place to place, and the dingo&#39;s ecological effects remain an active area of scientific investigation rather than a simple, uniform outcome.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The dingo&#39;s relationship with people is long and complicated, and its management involves competing considerations across conservation, agriculture, and land use. A central concern is hybridisation with domestic dogs, which can blur the distinctiveness of dingo populations and complicates both conservation and policy. The dingo is a wild animal and not a pet, and it should not be approached, fed, or handled. Where dingoes and people or livestock come into conflict, such situations are best referred to local wildlife authorities, who can advise on lawful and appropriate responses for a given area. Any bite, injury, or other medical concern involving wildlife should be directed to a qualified medical professional or local health authority. Because its taxonomy and its native, feral, or wild status are debated, its protection and management differ between jurisdictions and continue to evolve.
        </p>
      }
      faqs={[
        {
          question: "Is the dingo a native, wild, or feral animal?",
          answer:
            "Its status is genuinely debated. The dingo descends from ancient domestic dogs that arrived in Australia thousands of years ago, and it is variously described as native, wild, or feral depending on the authority, so no single label is universally agreed.",
        },
        {
          question: "What is the dingo's scientific name?",
          answer:
            "There is no single agreed name. The dingo has been classified as Canis familiaris, Canis lupus dingo, and Canis dingo, and its exact taxonomic placement remains an open scientific question.",
        },
        {
          question: "Can a dingo be kept as a pet?",
          answer:
            "The dingo is a wild canid, not a pet, and this profile does not provide any keeping or handling guidance. It should not be approached, fed, or handled, and questions about wildlife should be directed to local wildlife authorities.",
        },
        {
          question: "Why is hybridisation with domestic dogs a concern?",
          answer:
            "Interbreeding between dingoes and domestic dogs can blur the distinctiveness of dingo populations, which complicates their conservation and management. It is one of the main reasons dingo management is considered complex.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Debated; treated as Canis dingo, Canis lupus dingo, or Canis familiaris" },
        { label: "Animal group", value: "Mammal (canid)" },
        { label: "Family/order", value: "Canidae; order Carnivora" },
        { label: "Size", value: "Medium-sized, lean canid" },
        { label: "Diet", value: "Flexible carnivore (mammals, birds, reptiles, carrion)" },
        { label: "Habitat", value: "Varied environments from arid interior to woodland edges" },
        { label: "Range", value: "Parts of mainland Australia (and historically nearby)" },
        { label: "Conservation status", value: "Not currently assessed on the IUCN Red List; status, taxonomy and management contested and vary by jurisdiction" },
      ]}
      relatedLinks={[
        { label: "Wolf", href: "/animals/wolf", description: "A wild canid relative" },
        { label: "Fox", href: "/animals/fox", description: "Another canid" },
        { label: "Kangaroo", href: "/animals/kangaroo", description: "A common dingo prey species" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
