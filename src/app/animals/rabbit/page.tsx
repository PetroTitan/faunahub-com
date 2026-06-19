import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Rabbit — Profile, Habitat, Diet & Behavior";
const description =
  "Rabbits in the wild and as pets: Oryctolagus cuniculus and related Leporidae, habitat, herbivorous diet, social burrow life, and responsible-ownership context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/rabbit",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("rabbit"),
});

export default function RabbitPage() {
  return (
    <AnimalProfileLayout
      commonName="Rabbit"
      pageTitle={title}
      description={description}
      path="/animals/rabbit"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Lagomorph", "Companion", "Herbivore"]}
      image={getAnimalImage("rabbit") ?? undefined}
      galleryImages={getAnimalGalleryImages("rabbit")}
      factsHeaderNote='Reference species for specific details below is the European rabbit (Oryctolagus cuniculus), the wild ancestor of all domestic rabbit breeds. Many other rabbit and hare species exist in family Leporidae.'
      overview={
        <>
          <p>
            Rabbits are small to medium-sized mammals of the family Leporidae,
            distinguished by long ears, powerful hind legs, and a herbivorous
            diet. The European rabbit (<em>Oryctolagus cuniculus</em>) is the
            wild ancestor of all domestic rabbit breeds. Rabbits are
            lagomorphs, not rodents, and differ from rodents in several
            anatomical features including a second pair of small upper
            incisors set behind the main pair.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild European rabbits live in social groups within underground
            burrow systems known as warrens, typically in grasslands and
            scrub edge habitats. The species has been introduced — often
            problematically for native ecosystems — to many regions outside
            its native range. Other Leporidae, including cottontails and
            hares, occupy a wide variety of habitats globally.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Rabbits are obligate herbivores adapted to a high-fibre diet of
            grasses, leafy plants, bark, and twigs. The digestive system
            requires continuous fibre intake to function properly. Domestic
            rabbits should be fed a diet centred on grass hay with limited
            pellets and appropriate fresh greens. Sudden diet changes or
            inappropriate foods can cause serious illness. Veterinary or
            qualified rabbit-care guidance is essential.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Rabbits are crepuscular — most active at dawn and dusk — and
            socially complex. Wild European rabbits live in mixed-age groups
            with structured social bonds. They communicate through body
            posture, ear position, thumping with the hind feet, and a small
            range of vocalisations. As prey animals they are alert and
            startle easily; calm, patient handling matters more for rabbits
            than for many other companion animals.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Domestic rabbits are kept worldwide as companion animals.
            Responsible ownership involves species-appropriate housing
            (substantially more space than a small cage), social
            companionship, fresh hay and water, exotic-animal-qualified
            veterinary care, and a long-term commitment — pet rabbits
            commonly live many years. Wild European rabbit populations are
            also significant in agricultural and conservation contexts in
            many regions. Always check local laws and consult an
            exotic-animal vet before acquiring a rabbit.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Rabbits are closely related to hares (genus <em>Lepus</em>) and to
          cottontails (genus <em>Sylvilagus</em>). They are also frequently
          compared in pet-decision contexts with guinea pigs — see{" "}
          <em>rabbit-vs-guinea-pig</em> for a structured comparison.
        </p>
      }
      faqs={[
        {
          question: "Are rabbits rodents?",
          answer:
            "No. Rabbits are lagomorphs, in the family Leporidae. They differ from rodents in several anatomical features, including a second small pair of upper incisors set behind the front pair.",
        },
        {
          question: "How long do pet rabbits live?",
          answer:
            "With appropriate care, pet rabbits commonly live for many years — substantially longer than many small-pet owners expect. Lifespan varies with breed, husbandry, diet, and veterinary care. Discuss expectations for a specific rabbit with your exotic-animal veterinarian.",
        },
        {
          question: "Can rabbits live alone?",
          answer:
            "Most welfare and exotic-veterinary sources recommend that domestic rabbits live with at least one bonded rabbit companion, given their highly social wild behaviour. Solo housing requires more human interaction and is not the default recommendation. Confirm best practice with a qualified exotic-animal vet.",
        },
        {
          question: "What should pet rabbits eat?",
          answer:
            "The bulk of a pet rabbit's diet should be unlimited grass hay, with limited pellets, appropriate fresh greens, and clean water. Diet specifics — including which greens are safe — should always be confirmed with an exotic-animal veterinarian familiar with rabbits.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "European rabbit (Oryctolagus cuniculus)" },
        { label: "Family", value: "Leporidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Lagomorpha" },
        { label: "Diet", value: "Strict herbivore (high-fibre)" },
        { label: "Social structure", value: "Highly social in the wild" },
        { label: "Activity", value: "Crepuscular (dawn / dusk)" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Rabbit Care Guide", href: "/small-pets/rabbit-care" },
        { label: "Guinea Pig Profile", href: "/animals/guinea-pig" },
        { label: "Rabbit vs Guinea Pig", href: "/compare/rabbit-vs-guinea-pig" },
        { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
        { label: "Small Pets Hub", href: "/small-pets" },
      ]}
      sources={ANIMAL_SOURCES.rabbit}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
