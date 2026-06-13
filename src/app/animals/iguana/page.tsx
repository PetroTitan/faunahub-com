import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Iguana — Profile, Habitat, Diet & Behavior";
const description =
  "The green iguana (Iguana iguana) and its relatives: an educational profile of these large, mostly herbivorous lizards — appearance, range, behaviour, and wild vs pet context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/iguana",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("iguana"),
});

export default function IguanaPage() {
  return (
    <AnimalProfileLayout
      commonName="Iguana"
      pageTitle={title}
      description={description}
      path="/animals/iguana"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Wild"]}
      image={getAnimalImage("iguana") ?? undefined}
      galleryImages={getAnimalGalleryImages("iguana")}
      factsHeaderNote="“Iguana” covers several species; the reference shown is the green iguana (Iguana iguana). This is an educational wildlife profile, not a care guide — pet iguana keeping is demanding and should follow qualified reptile-vet/expert guidance."
      overview={
        <>
          <p>
            Iguanas are large lizards of the family Iguanidae, native to the
            Americas and the Caribbean. This page is a group-level overview; the
            green iguana (<em>Iguana iguana</em>) is used as a familiar reference.
            Green iguanas are among the largest lizards in their range, with a
            crest of spines, a prominent dewlap, and (despite their size and
            claws) a largely plant-based diet.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Green iguanas live in tropical forests and along waterways in Central
            and South America, spending much of their time in trees near water,
            into which they may dive to escape danger. They have also been
            introduced to parts of the United States and elsewhere, where they
            can become invasive. Other iguana species occupy deserts, rocky
            coasts, and islands. Habitat and range vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Adult green iguanas are largely herbivorous, feeding on leaves,
            flowers, and fruit, with diet varying by age and species. This page
            describes general feeding ecology and does not give pet feeding
            instructions or quantities, which are specialised and should follow
            qualified reptile-veterinary guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Iguanas are good climbers and, in the case of the green iguana,
            strong swimmers. Males can be territorial, using head-bobbing and
            dewlap displays. They bask to regulate body temperature, as reptiles
            rely on external heat. Large iguanas have sharp claws and a powerful
            tail and can defend themselves when stressed or cornered. Behaviour
            varies among the iguana species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Iguanas are wild reptiles; green iguanas are also widely kept as
            exotic pets, but they grow large, live long, and have demanding care
            needs, so they are not casual pets. Introduced green iguanas are a
            problem in some regions. Some other iguanas, such as certain island
            species, are threatened. Conservation status varies by species and
            should be checked against current sources. This page is educational,
            not care or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The green iguana is a large lizard with a row of spines along the
                back and tail, a large round scale on the cheek, and a prominent
                throat fan (dewlap) used in display and temperature regulation.
                Despite the name, colour varies from green to grey, orange, or
                bluish depending on age, region, and individual. Other iguanas
                differ — some are stocky desert or rock species. A long tail and
                strong claws are common features.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Iguanas are lizards, related to the chameleon, gecko, and monitor
          lizard covered on FaunaHub, though they form their own family. Green
          iguanas are sometimes confused with other large lizards, but the
          dewlap, dorsal crest, and cheek scale are helpful clues.
        </p>
      }
      faqs={[
        {
          question: "Are iguanas herbivores?",
          answer:
            "Adult green iguanas are largely herbivorous, eating leaves, flowers, and fruit. Diet can vary by age and species. This page describes general ecology rather than pet diets, which are specialised and should follow qualified reptile-veterinary guidance.",
        },
        {
          question: "Do iguanas make good pets?",
          answer:
            "Green iguanas are commonly kept as exotic pets, but they grow large, are long-lived, and have demanding housing, heat, lighting, and diet needs, so they are not casual pets. This page is educational, not care advice; consult a qualified reptile veterinarian or specialist before keeping any reptile.",
        },
        {
          question: "Why are iguanas a problem in some places?",
          answer:
            "Green iguanas introduced outside their native range, such as in parts of the United States, can become invasive, damaging vegetation and infrastructure and competing with native species. Their management is a regional wildlife issue.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Green iguana (Iguana iguana)" },
        { label: "Family", value: "Iguanidae" },
        { label: "Class", value: "Reptilia" },
        { label: "Diet", value: "Largely herbivorous (green iguana)" },
        { label: "Habitat", value: "Tropical forests near water (green iguana)" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "Another distinctive lizard" },
        { label: "Monitor Lizard Profile", href: "/animals/monitor-lizard" },
        { label: "Gecko Profile", href: "/animals/gecko" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.iguana}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
