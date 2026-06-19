import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/axolotl";
const TITLE = "Axolotl — Profile, Habitat, Diet & Why It's Unique";
const DESC =
  "Explore the axolotl (Ambystoma mexicanum): a neotenic salamander from Mexico City's lakes that keeps its gills for life, famous for regeneration — common in science, critically endangered in the wild.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("axolotl"),
});

export default function AxolotlPage() {
  return (
    <AnimalProfileLayout
      commonName="Axolotl"
      scientificName="Ambystoma mexicanum"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "Neotenic"]}
      image={getAnimalImage("axolotl") ?? undefined}
      galleryImages={getAnimalGalleryImages("axolotl")}
      sources={ANIMAL_SOURCES.axolotl}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The axolotl (<em>Ambystoma mexicanum</em>) is a remarkable salamander
            native to the lake system of Mexico City. Unlike most amphibians, it is
            neotenic: it keeps its larval features — including feathery external
            gills — and stays aquatic throughout its life rather than metamorphosing
            into a land-dwelling adult.
          </p>
          <p>
            Axolotls are famous for their extraordinary ability to regenerate
            limbs, parts of organs, and other tissues, which makes them important in
            scientific research. They are also widely kept in aquariums.
          </p>
          <p>
            <strong>Conservation note:</strong> there is a striking contrast between
            the wild and captive axolotl. While axolotls are abundant in laboratories
            and the aquarium trade, the wild population in its native lakes is
            considered critically endangered. Verify current status at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          In the wild, axolotls are restricted to the remnants of the ancient lake
          system around Mexico City, especially the canals and wetlands of
          Xochimilco. This habitat has been heavily reduced and altered by
          urbanisation, pollution, and introduced fish, which is central to the
          species&apos; decline in the wild.
        </p>
      }
      diet={
        <p>
          Axolotls are carnivores that feed by suction, drawing in prey such as
          worms, insect larvae, small crustaceans, molluscs, and small fish. They
          hunt mainly by detecting movement and scent in the water.
        </p>
      }
      behavior={
        <p>
          Axolotls are fully aquatic and relatively sedentary, spending their time on
          or near the bottom. Their best-known trait is regeneration: they can regrow
          lost limbs and repair a range of tissues to a degree unusual among
          vertebrates. Because they remain in a larval-like state, they breed while
          still showing juvenile features — the defining quality of neoteny.
        </p>
      }
      humanInteraction={
        <p>
          The axolotl is culturally significant in Mexico and is one of the most
          studied amphibians in biology, particularly for regeneration and
          development. Yet its wild habitat is critically threatened. Conservation
          focuses on protecting and restoring the Xochimilco wetlands and managing
          threats such as pollution and invasive species. For current status, consult
          AmphibiaWeb and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why does the axolotl keep its gills?",
          answer:
            "The axolotl is neotenic — it reaches adulthood and breeds while keeping larval features such as external gills and a fully aquatic lifestyle, rather than metamorphosing into a land salamander. This is a natural part of its biology, not a defect.",
        },
        {
          question: "Can axolotls really regrow body parts?",
          answer:
            "Yes. Axolotls are famous for an unusual capacity to regenerate, including regrowing lost limbs and repairing a range of tissues. This makes them a major model animal in research on regeneration and development.",
        },
        {
          question: "Are axolotls endangered if they're so common in aquariums?",
          answer:
            "It is a striking contrast. Axolotls are abundant in captivity — in laboratories and the aquarium trade — but the wild population in the lakes around Mexico City is considered critically endangered due to habitat loss, pollution, and introduced species. Captive abundance does not reflect the wild situation.",
        },
        {
          question: "What do axolotls eat?",
          answer:
            "Axolotls are carnivores that suck in prey such as worms, insect larvae, small crustaceans, molluscs, and small fish, locating food by movement and smell in the water.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ambystoma mexicanum" },
        { label: "Class", value: "Amphibia" },
        { label: "Order", value: "Urodela (salamanders)" },
        { label: "Special trait", value: "Neotenic; keeps gills for life" },
        { label: "Famous for", value: "Regeneration ability" },
        { label: "Diet", value: "Carnivore (suction feeder)" },
        { label: "Wild range", value: "Lakes near Mexico City (Xochimilco)" },
        { label: "IUCN Status", value: "Critically endangered in the wild (verify)" },
      ]}
      relatedLinks={[
        { label: "Salamander Profile", href: "/animals/salamander", description: "Salamanders as a whole" },
        { label: "Fire Salamander Profile", href: "/animals/fire-salamander", description: "A land-dwelling salamander" },
        { label: "Newt Profile", href: "/animals/newt", description: "Semi-aquatic salamander relatives" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
