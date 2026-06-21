import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/spider-monkey";
const TITLE = "Spider Monkey — Profile, Prehensile Tail & Conservation";
const DESC =
  "Explore spider monkeys (genus Ateles): long-limbed New World monkeys with a gripping prehensile tail and hook-like hands, acrobatic fruit-eaters of the rainforest canopy. Many are threatened.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("spider-monkey"),
});

export default function SpiderMonkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Spider Monkey"
      scientificName="Ateles geoffroyi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Americas"]}
      image={getAnimalImage("spider-monkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("spider-monkey")}
      sources={ANIMAL_SOURCES["spider-monkey"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Spider monkeys (genus <em>Ateles</em>) are large, extraordinarily acrobatic New
            World monkeys of Central and South American forests. With very long, slender
            arms and legs and a powerful prehensile tail that has a sensitive, gripping
            bare patch at its tip, they can hang and swing through the canopy with
            spider-like grace — the source of their name. Notably, their hands are
            hook-like, with a reduced or absent thumb, which suits fast swinging
            (brachiation) between branches. Geoffroy&apos;s spider monkey
            (<em>Ateles geoffroyi</em>) is shown here.
          </p>
          <p>
            Spider monkeys are intelligent, social fruit specialists and important seed
            dispersers, but they are also among the more vulnerable Neotropical primates.
          </p>
          <p>
            <strong>Conservation note:</strong> many spider monkeys are threatened —
            Geoffroy&apos;s spider monkey is Endangered, and several relatives are also at
            risk, mainly from habitat loss and hunting. Verify each species&apos; status at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Spider monkeys live in tropical forests from Mexico through Central America and
          across much of the Amazon and northern South America, depending on the species.
          They favour tall, mature rainforest with a continuous canopy for their swinging
          travel, and they are highly sensitive to forest disturbance and fragmentation.
        </p>
      }
      diet={
        <p>
          Spider monkeys are mainly frugivores, with ripe fruit making up most of their
          diet, supplemented by leaves, flowers, seeds, and the occasional insect. As big
          fruit-eaters that range widely through the canopy, they are valuable seed
          dispersers — important for regenerating the forests they live in.
        </p>
      }
      behavior={
        <p>
          Spider monkeys live in flexible &ldquo;fission–fusion&rdquo; societies: large
          groups split into smaller parties that change in size and membership through the
          day, often by food supply. They are superb brachiators, swinging hand-over-hand
          and using the prehensile tail as a fifth limb to hang and reach. They are
          intelligent and communicative, using calls, postures, and gestures, and they tend
          to be wary of humans. Their slow reproduction — usually a single, slowly maturing
          baby — makes populations slow to recover from losses.
        </p>
      }
      humanInteraction={
        <p>
          Spider monkeys are charismatic and important to forest health, but their reliance
          on large tracts of intact canopy, combined with slow breeding, makes them
          especially vulnerable to deforestation and hunting; they are also taken for the
          pet trade in places. Several species are Endangered or worse. Protecting large,
          connected forests is essential. Consult the IUCN Red List for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called spider monkeys?",
          answer:
            "Because of their long, spindly limbs and gripping tail, which make them look spider-like as they hang and reach in several directions at once. Their long arms, legs, and prehensile tail let them stretch across gaps and dangle from branches in a distinctive, spidery way.",
        },
        {
          question: "Why do spider monkeys have almost no thumb?",
          answer:
            "Spider monkeys have a reduced or absent thumb, and their hands work like hooks. This suits brachiation — fast, hand-over-hand swinging through the canopy — because a hook-shaped hand can grip and release branches quickly without a thumb getting in the way. They rely on their prehensile tail for fine gripping instead.",
        },
        {
          question: "What do spider monkeys eat?",
          answer:
            "They are mainly fruit-eaters, with ripe fruit forming the bulk of the diet, plus leaves, flowers, seeds, and occasional insects. Because they eat so much fruit and travel widely, spider monkeys are important seed dispersers that help keep their forests healthy.",
        },
        {
          question: "Are spider monkeys endangered?",
          answer:
            "Many are. Geoffroy's spider monkey is Endangered, and several other spider monkeys are also threatened. Their need for large areas of intact forest and their slow reproduction make them very vulnerable to deforestation and hunting. Status varies by species and should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Ateles geoffroyi (Geoffroy's spider monkey)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Diet", value: "Mainly fruit (key seed disperser)" },
        { label: "Signature traits", value: "Long limbs; prehensile tail; hook hands" },
        { label: "Society", value: "Fission–fusion groups" },
        { label: "Movement", value: "Brachiation (arm-swinging)" },
        { label: "Range", value: "Mexico to South America" },
        { label: "IUCN Status", value: "Many threatened (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Howler Monkey Profile", href: "/animals/howler-monkey", description: "Another prehensile-tailed New World monkey" },
        { label: "Gibbon Profile", href: "/animals/gibbon", description: "An Asian ape that also brachiates" },
        { label: "Marmoset Profile", href: "/animals/marmoset", description: "A tiny New World monkey" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
