import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/woolly-monkey";
const TITLE = "Woolly Monkey — Profile, Diet & Conservation";
const DESC =
  "Explore woolly monkeys (genus Lagothrix): thickset, woolly-furred Amazon monkeys with a strong prehensile tail — important fruit-eating seed dispersers, and threatened by hunting.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("woolly-monkey"),
});

export default function WoollyMonkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Woolly Monkey"
      scientificName="Lagothrix lagothricha"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Amazon"]}
      image={getAnimalImage("woolly-monkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("woolly-monkey")}
      sources={ANIMAL_SOURCES["woolly-monkey"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Woolly monkeys (genus <em>Lagothrix</em>) are large, robust New World monkeys of
            the South American rainforest, named for their thick, dense, woolly fur. Heavily
            built compared with their relatives the spider monkeys, they have a rounded head,
            a stocky body, and a powerful prehensile tail — bare and gripping on the
            underside of its tip — that acts as a true fifth limb. The Humboldt&apos;s (or
            common brown) woolly monkey (<em>Lagothrix lagothricha</em>) is shown here.
          </p>
          <p>
            Woolly monkeys are major fruit-eaters and important seed dispersers, but their
            size and slow breeding make them especially vulnerable to hunting.
          </p>
          <p>
            <strong>Conservation note:</strong> woolly monkeys are threatened — several
            species and populations are Vulnerable or Endangered, mainly from hunting and
            habitat loss. Verify each species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Woolly monkeys live in the rainforests of the Amazon basin and the adjoining
          Andean foothills in northern and western South America. They favour tall, mature,
          humid forest with a continuous canopy and abundant fruit, and they range over
          large areas, making them sensitive to forest loss and fragmentation.
        </p>
      }
      diet={
        <p>
          Woolly monkeys are mainly frugivores, eating large quantities of ripe fruit and
          supplementing it with seeds, leaves, flowers, and some insects. Because they
          consume so much fruit and travel widely through the canopy, they are among the
          more important seed dispersers in their forests, helping many tree species
          regenerate.
        </p>
      }
      behavior={
        <p>
          Woolly monkeys live in groups that can be fairly large and may split into smaller
          parties to forage. They move steadily through the canopy by climbing and by using
          the strong prehensile tail to hang and reach, rather than swinging as acrobatically
          as spider monkeys. They are generally peaceable and social, communicating with
          calls and gestures. Like other large monkeys, they reproduce slowly — usually a
          single, slow-maturing infant — so populations recover slowly from losses.
        </p>
      }
      humanInteraction={
        <p>
          Woolly monkeys are heavily affected by hunting: they are large, conspicuous, and
          favoured as bushmeat, and infants are often taken for the pet trade after their
          mothers are killed. Combined with deforestation and their slow reproduction, this
          has made several woolly monkeys threatened. Protecting large tracts of forest and
          managing hunting are essential. Consult the IUCN Red List for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called woolly monkeys?",
          answer:
            "For their fur. Woolly monkeys have thick, dense, soft coats that look and feel woolly, which sets them apart from the sleeker spider monkeys they are related to. The woolly coat, stocky build, and gripping tail are their most distinctive features.",
        },
        {
          question: "Do woolly monkeys have prehensile tails?",
          answer:
            "Yes. Woolly monkeys have a strong prehensile tail with a bare, sensitive gripping patch on the underside of the tip, which works like a fifth limb. They use it to hang, reach for food, and steady themselves while moving and feeding in the canopy.",
        },
        {
          question: "Why are woolly monkeys threatened?",
          answer:
            "They are large, visible, and slow-breeding, which makes them highly vulnerable to hunting for bushmeat; infants are also taken for the pet trade. Together with deforestation, this has pushed several woolly monkeys into Vulnerable or Endangered status. Protecting forests and controlling hunting are key, and current status should be checked against the IUCN Red List.",
        },
        {
          question: "What do woolly monkeys eat?",
          answer:
            "Mainly ripe fruit, plus seeds, leaves, flowers, and some insects. Because they eat so much fruit and range widely, woolly monkeys are important seed dispersers that help keep their Amazonian forests healthy and regenerating.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Lagothrix lagothricha (Humboldt's woolly monkey)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Diet", value: "Mainly fruit (key seed disperser)" },
        { label: "Build", value: "Stocky; thick woolly fur" },
        { label: "Tail", value: "Strong & prehensile (a 'fifth limb')" },
        { label: "Reproduction", value: "Slow (single infant)" },
        { label: "Range", value: "Amazon & Andean-foothill forests" },
        { label: "IUCN Status", value: "Several threatened (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Spider Monkey Profile", href: "/animals/spider-monkey", description: "Its close, more acrobatic relative" },
        { label: "Muriqui Profile", href: "/animals/muriqui", description: "The 'woolly spider monkey'" },
        { label: "Howler Monkey Profile", href: "/animals/howler-monkey", description: "Another large New World monkey" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
