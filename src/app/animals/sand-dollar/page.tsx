import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sand-dollar";
const TITLE = "Sand Dollar — Profile, Living Animal vs Beach Test & Ecology";
const DESC =
  "Explore sand dollars (Clypeasteroida): flattened burrowing sea urchins whose living form is covered in dark moving spines, unlike the white beach test.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("sand-dollar"),
});

export default function SandDollarPage() {
  return (
    <AnimalProfileLayout
      commonName="Sand Dollar"
      scientificName="order Clypeasteroida"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate","Echinoderm","Seabed"]}
      image={getAnimalImage("sand-dollar") ?? undefined}
      galleryImages={getAnimalGalleryImages("sand-dollar")}
      sources={ANIMAL_SOURCES["sand-dollar"]}
      factsHeaderNote="“Sand dollar” covers many species in the order Clypeasteroida. The white disc familiar from beaches is the bleached skeleton, or test, of a dead animal — the living animal looks quite different."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Sand dollars are flattened sea urchins — echinoderms in the order Clypeasteroida — that live on and in sandy seabeds. They are close relatives of the spiny, globe-shaped urchins found on rocky shores, redesigned for a life of burrowing in soft sediment.
        </p>
        <p>
          The white or grey disc that people pick up on beaches is <strong>not the living animal</strong>. It is the test: the bleached internal skeleton of a dead sand dollar, stripped of its covering. The five-petalled flower pattern on it marks where tube feet emerged.
        </p>
        <p>
          A living sand dollar is quite different — covered in a dense velvety coat of short, dark, constantly moving spines, usually purple, brown or grey, which it uses to move, burrow and pass food particles along the body.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Sand dollars live on sandy and muddy seabeds from the intertidal zone down into deeper water, in temperate and tropical seas worldwide. They are usually found in beds, sometimes at high density, either lying flat on the surface or partly buried. In areas with strong currents, young animals may swallow heavy sand grains that act as ballast to keep them from being swept away.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Sand dollars feed on fine organic particles: plankton, diatoms, algae, detritus and other material in the sediment and water. Food is caught on the spines and tube feet, moved along ciliated grooves toward the mouth on the underside, and processed by a chewing structure known as Aristotle&apos;s lantern.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Sand dollars burrow using their spines, moving slowly across and through the sediment. In calm water they often lie flat, while in currents many species stand on edge, partly buried, to filter food from the passing flow. Dense beds are a characteristic sight in some areas. Their movement is slow and continuous, driven by the spines and tube feet rather than by any rapid locomotion.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Sand dollar tests are widely collected as beach souvenirs, and the important distinction is between a bleached, dead test and a living animal: a live sand dollar is dark and its spines move. Collecting live animals is discouraged and is regulated or prohibited in many places. Sand dollars also matter as prey for sea stars, fish and crabs, and their beds influence the structure of soft-sediment communities. This profile offers no collecting guidance; follow local rules.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a sand dollar a shell?",
          answer:
            "No. Sand dollars are animals — flattened sea urchins in the phylum Echinodermata, related to sea stars and sea cucumbers, not molluscs. The white disc found on beaches is the animal's internal skeleton, called the test, left behind after it dies.",
        },
        {
          question: "What does a living sand dollar look like?",
          answer:
            "Quite unlike the beach version. A living sand dollar is covered in a dense, velvety coat of short dark spines — usually purple, brown or grey — which move constantly. If a sand dollar is dark and its surface is moving, it is alive and should be left where it is.",
        },
        {
          question: "What is the flower pattern on a sand dollar?",
          answer:
            "It is the petaloid: five petal-shaped areas of tiny pores through which the animal's tube feet emerged in life. Those tube feet are used for gas exchange and for handling food, so the pattern is a record of the living animal's plumbing rather than decoration.",
        },
        {
          question: "What do sand dollars eat?",
          answer:
            "Fine particles — plankton, diatoms, algae and organic detritus. Food is trapped by the spines and tube feet and carried along ciliated grooves to the mouth on the underside, where a chewing structure called Aristotle's lantern processes it.",
        },
      ]}
      quickFacts={[
        { label: "Order", value: "Clypeasteroida" },
        { label: "Group", value: "Flattened sea urchins (Echinoidea)" },
        { label: "Phylum", value: "Echinodermata" },
        { label: "Beach 'shell'", value: "The test — a dead animal's skeleton" },
        { label: "Living animal", value: "Dark, densely spined, spines move" },
        { label: "Habitat", value: "Sandy and muddy seabeds" },
        { label: "Diet", value: "Fine organic particles and plankton" },
        { label: "Feeding structure", value: "Aristotle's lantern" },
      ]}
      relatedLinks={[
        { label: "Sea Urchin Profile", href: "/animals/sea-urchin", description: "The closest relatives" },
        { label: "Starfish Profile", href: "/animals/starfish" },
        { label: "Brittle Star Profile", href: "/animals/brittle-star" },
        { label: "Sea Cucumber Profile", href: "/animals/sea-cucumber" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
