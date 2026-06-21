import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/baboon";
const TITLE = "Baboon — Profile, Complex Societies, Diet & Behavior";
const DESC =
  "Explore baboons (genus Papio): large, ground-living African monkeys with dog-like muzzles, powerful builds, and some of the most complex social lives of any non-human primate.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("baboon"),
});

export default function BaboonPage() {
  return (
    <AnimalProfileLayout
      commonName="Baboon"
      scientificName="Papio anubis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Africa"]}
      image={getAnimalImage("baboon") ?? undefined}
      galleryImages={getAnimalGalleryImages("baboon")}
      sources={ANIMAL_SOURCES.baboon}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Baboons (genus <em>Papio</em>) are among the largest and most familiar of the
            Old World monkeys — sturdy, ground-dwelling primates with long, dog-like
            muzzles, powerful jaws with large canine teeth, and close-set eyes. The olive
            baboon (<em>Papio anubis</em>), shown here, is one of the most widespread
            species. Baboons are mainly terrestrial, spending much of the day foraging on
            the ground across the savannas, woodlands, and rocky areas of Africa (and a
            corner of Arabia).
          </p>
          <p>
            They are highly intelligent and intensely social, living in large troops with
            elaborate hierarchies, alliances, and relationships that make them a major
            subject in the study of primate behaviour.
          </p>
          <p>
            <strong>Note:</strong> there are several baboon species with somewhat different
            habits; details here use the olive baboon as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Baboons live across much of sub-Saharan Africa (with the hamadryas baboon also
          reaching Arabia), in savanna, grassland, open woodland, and rocky hills and
          cliffs. They are adaptable and can live near people and farmland, needing safe
          sleeping sites — typically tall trees or cliffs — and access to food and water
          within their range.
        </p>
      }
      diet={
        <p>
          Baboons are opportunistic omnivores with very broad diets: grasses, seeds, roots,
          tubers, fruit, flowers, and bulbs, plus insects, eggs, and small animals — and
          even, occasionally, prey such as young antelope or other small mammals. This
          dietary flexibility lets them thrive in many habitats, but can also bring them
          into conflict with farmers when they raid crops.
        </p>
      }
      behavior={
        <p>
          Baboon societies are famously complex. Troops can number from a dozen to well
          over a hundred, structured by dominance hierarchies among both females (whose
          rank is often inherited) and males, and held together by grooming, alliances,
          friendships, and constant social negotiation. They communicate with a rich range
          of calls, facial expressions, and gestures. Such sophisticated social lives have
          made baboons a central model for understanding stress, cooperation, and
          relationships in primates.
        </p>
      }
      humanInteraction={
        <p>
          Baboons live close to people across much of Africa, which makes them familiar but
          also a frequent source of conflict — they raid crops and, where habituated (for
          example by tourists feeding them), can become bold around food. Most baboon
          species remain widespread and are not of major conservation concern, though
          habitat change and conflict are issues. Feeding wild baboons is strongly
          discouraged. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are baboons apes or monkeys?",
          answer:
            "Baboons are monkeys — specifically large Old World monkeys in the genus Papio. They have tails (apes do not) and the body plan of monkeys, although their size and ground-living habits can make people mistake them for apes. They are relatives of macaques and mandrills.",
        },
        {
          question: "How complex are baboon societies?",
          answer:
            "Very. Baboons live in large troops with detailed dominance hierarchies among both males and females, plus alliances, friendships, and inherited social ranks. They manage these relationships through grooming, calls, and gestures, and their social lives are sophisticated enough to be a major model for studying primate behaviour, stress, and cooperation.",
        },
        {
          question: "What do baboons eat?",
          answer:
            "Baboons are opportunistic omnivores. They eat grasses, seeds, roots, tubers, fruit, flowers, and bulbs, along with insects, eggs, and small animals, and they will occasionally hunt small prey. This very broad diet is a big reason baboons succeed in so many habitats.",
        },
        {
          question: "Are baboons dangerous to people?",
          answer:
            "Wild baboons usually avoid people, but they are large, strong, and bold, especially where they have learned to associate humans with food. Habituated baboons can raid homes and crops and may behave aggressively around food. Keeping your distance and never feeding them is the safest approach for both people and baboons.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Papio anubis (olive baboon)" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Build", value: "Large; dog-like muzzle, big canines" },
        { label: "Diet", value: "Opportunistic omnivore" },
        { label: "Society", value: "Large troops; complex hierarchies" },
        { label: "Lifestyle", value: "Mainly ground-dwelling" },
        { label: "Range", value: "Sub-Saharan Africa (+ Arabia)" },
        { label: "Status", value: "Mostly widespread (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Mandrill Profile", href: "/animals/mandrill", description: "A close, vividly coloured relative" },
        { label: "Macaque Profile", href: "/animals/macaque", description: "Another adaptable Old World monkey" },
        { label: "Chimpanzee Profile", href: "/animals/chimpanzee", description: "A great ape known for complex society" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
