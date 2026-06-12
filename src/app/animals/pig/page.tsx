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

const title = "Pig — Profile, Habitat, Diet & Behavior";
const description =
  "Domestic pig (Sus domesticus): an educational overview of the intelligent, omnivorous farm pig — rooting behaviour, social life, breeds, and the wild boar ancestry.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/pig",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("pig"),
});

export default function PigPage() {
  return (
    <AnimalProfileLayout
      commonName="Pig"
      scientificName="Sus domesticus"
      pageTitle={title}
      description={description}
      path="/animals/pig"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Domestic", "Omnivore"]}
      image={getAnimalImage("pig") ?? undefined}
      galleryImages={getAnimalGalleryImages("pig")}
      factsHeaderNote="This page covers the domestic pig (Sus domesticus), descended from the wild boar. Breeds and farm contexts vary. Educational only — not husbandry or veterinary advice."
      overview={
        <>
          <p>
            The domestic pig (<em>Sus domesticus</em>, descended from the wild
            boar <em>Sus scrofa</em>) is an omnivorous, even-toed ungulate kept
            worldwide as livestock and, in some places, as a companion animal.
            Pigs are intelligent and social, with a strong sense of smell and
            a natural rooting behaviour. They have been domesticated for
            thousands of years and exist in many breeds.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Domestic pigs are farm animals raised in a range of systems, from
            outdoor pasture and woodland to indoor housing. They are adaptable
            but sensitive to heat because they cannot sweat effectively, which
            is why access to shade, water, and wallows matters in warm
            conditions. Their distribution reflects agriculture worldwide
            rather than a wild range; their wild relative, the boar, occupies
            forests and is a separate animal.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Pigs are omnivores with a varied diet. In farm settings they are
            usually fed formulated rations, grain, and forage, and when given
            access to pasture or woodland they root in soil for roots, tubers,
            invertebrates, and fallen food. Their flexible diet was one reason
            pigs were domesticated. Specific feeding depends on region,
            production system, and welfare standards.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Pigs are social animals that live in groups, form bonds, and
            establish hierarchies. They are frequently cited among the more
            cognitively capable domestic mammals, able to learn tasks and
            respond to training. Rooting — using the flat, sensitive snout to
            dig and explore — is a strong natural behaviour. Pigs use a range
            of grunts and squeals to communicate and wallow in mud to cool down
            and protect their skin.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Pigs are among the most economically important livestock species
            globally and also feature widely in culture and, increasingly, as
            kept companion animals such as pot-bellied pigs. As a domestic
            species, the pig is not assigned a wild conservation status;
            relevant concerns are welfare, housing, and management. This page
            is educational and does not provide husbandry or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Pigs have a stout, barrel-shaped body, short legs, cloven
                hooves, small eyes, and a distinctive flat, mobile snout used
                for rooting. Coat colour and density vary by breed, from the
                pink of many commercial breeds to black, spotted, or hairy
                coats in heritage and pot-bellied types. Adult size ranges
                widely, from compact miniature pigs to very large commercial
                breeds.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Domestic pigs belong to the family Suidae alongside wild boar,
          warthogs, and other wild pigs. The domestic pig should not be
          confused with the wild boar — although closely related and capable
          of interbreeding, they differ in behaviour, ecology, and management.
        </p>
      }
      faqs={[
        {
          question: "Are pigs intelligent?",
          answer:
            "Pigs are widely regarded as one of the more cognitively capable domestic mammals. Studies and educational sources describe them learning tasks, remembering routines, and responding to training, which is part of why they are kept both as livestock and as companion animals.",
        },
        {
          question: "Why do pigs roll in mud?",
          answer:
            "Pigs cannot sweat effectively, so they wallow in mud to cool down. A coating of mud also helps protect their skin from sunburn and parasites. Access to a wallow or shade is an important welfare consideration in warm weather.",
        },
        {
          question: "Are domestic pigs the same as wild boar?",
          answer:
            "They are very closely related — the domestic pig descends from the wild boar — but they are treated as a domestic form. Wild boar live in forests as wildlife and differ in build and behaviour. This page is about the domestic pig, not advice on keeping or approaching wild boar.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Sus domesticus" },
        { label: "Family", value: "Suidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Status", value: "Domesticated livestock" },
        { label: "Diet", value: "Omnivore" },
        { label: "Social structure", value: "Social group animal" },
        { label: "Distribution", value: "Worldwide on farms" },
      ]}
      relatedLinks={[
        { label: "Cow Profile", href: "/animals/cow", description: "Another major farm mammal" },
        { label: "Goat Profile", href: "/animals/goat" },
        { label: "Sheep Profile", href: "/animals/sheep" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.pig}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
