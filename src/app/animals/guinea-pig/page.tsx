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

const title = "Guinea Pig — Profile, Habitat, Diet & Behavior";
const description =
  "Cavia porcellus: the guinea pig as a companion animal. Origin, social behaviour, herbivorous diet, vitamin C requirement, and responsible-ownership guidance.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/guinea-pig",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("guinea-pig"),
});

export default function GuineaPigPage() {
  return (
    <AnimalProfileLayout
      commonName="Guinea Pig"
      scientificName="Cavia porcellus"
      pageTitle={title}
      description={description}
      path="/animals/guinea-pig"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Domesticated"]}
      image={getAnimalImage("guinea-pig") ?? undefined}
      galleryImages={getAnimalGalleryImages("guinea-pig")}
      overview={
        <>
          <p>
            The guinea pig (<em>Cavia porcellus</em>) is a domesticated rodent
            in the family Caviidae, native to South America. Despite the
            common name, guinea pigs are not pigs and are not from Guinea —
            they were domesticated in the Andean region thousands of years
            ago and have a long history alongside human communities. Today
            they are one of the most common small companion animals
            worldwide.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            As a fully domestic species, the guinea pig is kept in homes
            globally. Wild cavies — closely related but distinct species —
            still live in South America in grasslands and rocky habitats.
            The domestic guinea pig is sensitive to temperature extremes and
            generally kept indoors at moderate room temperatures.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Guinea pigs are obligate herbivores requiring continuous access
            to grass hay, a measured ration of appropriate pellets, and
            fresh vitamin-C-rich greens. Critically, guinea pigs cannot
            produce vitamin C themselves and depend on dietary intake to
            avoid serious deficiency. A qualified exotic-animal vet should
            confirm the specifics of any guinea pig&apos;s diet, especially
            young, pregnant, lactating, or older animals.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Guinea pigs are highly social and typically kept in same-sex or
            neutered pairs or small groups. They communicate using a
            distinctive range of vocalisations — including the well-known
            &quot;wheeking&quot; sound — and respond to consistent gentle
            handling. They are diurnal with quiet rest periods through the
            day and night.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Responsible ownership involves species-appropriate housing
            substantially larger than older pet-shop standards, daily fresh
            hay and greens, clean water, regular vet checks with a
            small-mammal-experienced veterinarian, and a long-term
            commitment — guinea pigs commonly live many years. Welfare
            regulations in some regions (notably Switzerland) require keeping
            guinea pigs in pairs. Verify local requirements before acquiring
            a guinea pig.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Guinea pigs are most often compared in pet-decision contexts with
          rabbits — see <em>rabbit-vs-guinea-pig</em> — and with hamsters,
          although these are very different animals with different welfare
          needs.
        </p>
      }
      faqs={[
        {
          question: "How long do guinea pigs live?",
          answer:
            "With appropriate husbandry, diet, and veterinary care, pet guinea pigs commonly live several years — longer than many first-time owners expect. Lifespan varies with husbandry and health. Discuss expectations with an exotic-animal veterinarian.",
        },
        {
          question: "Do guinea pigs really need a companion?",
          answer:
            "Most welfare and veterinary sources recommend that guinea pigs live in same-sex or neutered pairs or small groups, given their highly social biology. Some jurisdictions require this in law. Solo housing requires substantially more human interaction and is not the default recommendation.",
        },
        {
          question: "Why is vitamin C critical for guinea pigs?",
          answer:
            "Unlike most mammals, guinea pigs cannot synthesise vitamin C and depend on dietary intake. Insufficient vitamin C can cause serious health problems. Diet specifics should always be confirmed with an exotic-animal veterinarian familiar with guinea pigs.",
        },
        {
          question: "Are guinea pigs good pets for children?",
          answer:
            "Guinea pigs are sometimes assumed to be 'easy' starter pets, but they have specific dietary, social, and housing requirements and need calm, careful handling. Successful child-and-guinea-pig households generally involve close adult supervision, structured care routines, and access to a small-mammal-experienced veterinarian.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cavia porcellus" },
        { label: "Family", value: "Caviidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Rodentia" },
        { label: "Diet", value: "Strict herbivore (hay + greens, requires dietary vitamin C)" },
        { label: "Social structure", value: "Highly social; pair or group housing recommended" },
        { label: "Activity", value: "Diurnal with frequent rest periods" },
        { label: "Conservation status", value: "Domestic species" },
      ]}
      relatedLinks={[
        { label: "Guinea Pig Care Guide", href: "/small-pets/guinea-pig-care" },
        { label: "Rabbit Profile", href: "/animals/rabbit" },
        { label: "Rabbit vs Guinea Pig", href: "/compare/rabbit-vs-guinea-pig" },
        { label: "Small Pets Hub", href: "/small-pets" },
        { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
      ]}
      sources={ANIMAL_SOURCES["guinea-pig"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
