import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kodkod";
const TITLE = "Kodkod — Profile of the Smallest Wild Cat in the Americas";
const DESC =
  "Meet the kodkod or guiña (Leopardus guigna): the smallest wild cat in the Americas, a spotted forest hunter of Chile and Argentina, where dark (melanistic) individuals are common.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("kodkod"),
});

export default function KodkodPage() {
  return (
    <AnimalProfileLayout
      commonName="Kodkod"
      scientificName="Leopardus guigna"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "South America"]}
      image={getAnimalImage("kodkod") ?? undefined}
      galleryImages={getAnimalGalleryImages("kodkod")}
      sources={ANIMAL_SOURCES.kodkod}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The kodkod (<em>Leopardus guigna</em>), also called the guiña, is the smallest wild cat in
            the Americas — a compact, spotted feline barely larger than a domestic kitten, weighing only
            around 1.5 to 3 kilograms. It lives in the temperate rainforests and scrub of central and
            southern Chile and adjoining parts of Argentina, one of the most restricted ranges of any cat.
          </p>
          <p>
            Kodkods have a small rounded head, big eyes, and a thick tail, and their tawny coats are
            marked with small dark spots. Dark (melanistic) individuals — almost entirely black — are
            unusually common in this species, making up a notable share of the population.
          </p>
          <p>
            Despite its tiny size, the kodkod is a capable climber and hunter. It is listed as Vulnerable
            on the IUCN Red List, mainly because its forest home is being cleared and broken up.
          </p>
        </>
      }
      habitat={
        <p>
          Kodkods are closely tied to moist temperate forest — especially the Valdivian and Araucaria
          forests of Chile — along with bamboo thickets, forest edges, and scrubby ravines. They can
          persist in landscapes partly altered by people, such as pine plantations and farmland, provided
          patches of native forest and cover remain. Their world is small: the species occurs over a far
          narrower area than most wild cats.
        </p>
      }
      diet={
        <p>
          The kodkod is a carnivore that hunts small prey — rodents, birds (including poultry near farms),
          lizards, and large insects. An agile climber, it can pursue prey into trees and is comfortable
          moving through dense vegetation, but it does much of its hunting on the ground.
        </p>
      }
      behavior={
        <p>
          Kodkods are solitary and secretive, active mainly at night and twilight but sometimes by day,
          especially in undisturbed forest. They are excellent climbers and use trees for resting and
          refuge. Like other small cats they mark and patrol home ranges, and they rely on stealth and
          cover rather than speed to catch food and avoid larger predators.
        </p>
      }
      humanInteraction={
        <p>
          The greatest threat to the kodkod is the loss and fragmentation of its forest habitat for
          logging, agriculture, and development. Because it sometimes takes domestic poultry, it is
          occasionally killed by farmers. Conservation depends on protecting and reconnecting native
          forest. Consult the IUCN Red List and regional wildlife authorities for current status and
          guidance.
        </p>
      }
      faqs={[
        {
          question: "Is the kodkod really the smallest cat in the Americas?",
          answer:
            "Yes. The kodkod (Leopardus guigna) is the smallest wild cat in the Western Hemisphere, weighing only about 1.5 to 3 kg — comparable to a small house cat. It is closely related to other small South American cats such as the oncilla and Geoffroy's cat.",
        },
        {
          question: "Why are so many kodkods black?",
          answer:
            "Melanism — an all-dark coat caused by extra dark pigment — is unusually frequent in kodkods, with dark individuals making up a notable portion of the population in some areas. Both spotted and melanistic kodkods belong to the same species.",
        },
        {
          question: "Where do kodkods live?",
          answer:
            "They have one of the most restricted ranges of any cat, confined mainly to central and southern Chile and small adjacent areas of Argentina, where they depend on temperate rainforest and scrub.",
        },
        {
          question: "Are kodkods endangered?",
          answer:
            "The kodkod is listed as Vulnerable on the IUCN Red List. Its small range and ongoing loss and fragmentation of native forest make it sensitive to habitat change. Check the IUCN Red List for the latest assessment.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Leopardus guigna" },
        { label: "Also called", value: "Guiña" },
        { label: "Class", value: "Mammalia" },
        { label: "Weight", value: "~1.5–3 kg (smallest American cat)" },
        { label: "Range", value: "Central & southern Chile, adjacent Argentina" },
        { label: "Habitat", value: "Temperate rainforest, scrub, forest edge" },
        { label: "Colour", value: "Spotted; melanistic (dark) form common" },
        { label: "IUCN status", value: "Vulnerable" },
      ]}
      relatedLinks={[
        { label: "Oncilla Profile", href: "/animals/oncilla", description: "Another tiny spotted South American cat" },
        { label: "Margay Profile", href: "/animals/margay", description: "A small tree-climbing cat of the Americas" },
        { label: "Ocelot Profile", href: "/animals/ocelot", description: "A larger spotted relative" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American mammals in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
