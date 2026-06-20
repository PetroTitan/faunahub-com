import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/seadragon";
const TITLE = "Leafy Seadragon — Profile, Camouflage & Biology";
const DESC =
  "Explore the leafy seadragon (Phycodurus eques): an ornate relative of the seahorse, found only in southern Australia, camouflaged as drifting seaweed with leaf-like body fronds.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("seadragon"),
});

export default function SeadragonPage() {
  return (
    <AnimalProfileLayout
      commonName="Leafy Seadragon"
      scientificName="Phycodurus eques"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Seahorse relative", "Master of camouflage"]}
      image={getAnimalImage("seadragon") ?? undefined}
      galleryImages={getAnimalGalleryImages("seadragon")}
      sources={ANIMAL_SOURCES.seadragon}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The leafy seadragon (<em>Phycodurus eques</em>) is one of the ocean&apos;s
            most extraordinary fish — a close relative of seahorses and pipefish,
            adorned with elaborate leaf-shaped projections all over its body. These
            fronds are not used for swimming; they are pure camouflage, making the
            animal look exactly like a piece of drifting seaweed as it drifts among kelp
            and seagrass.
          </p>
          <p>
            Leafy seadragons are found only along the southern coast of Australia, and
            their slow, swaying movement completes the disguise. They are emblematic of
            that region&apos;s unique marine life.
          </p>
          <p>
            <strong>Conservation note:</strong> leafy seadragons have a limited range and
            are protected in Australia; habitat loss and disturbance are the main
            concerns. Verify current status at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Leafy seadragons live only in the temperate coastal waters of southern and
          western Australia, among kelp forests, seagrass meadows, and rocky reefs in
          relatively shallow water. Their entire global range is this stretch of southern
          Australian coast.
        </p>
      }
      diet={
        <p>
          Like seahorses, leafy seadragons have no teeth and a long, tube-like snout that
          they use to suck up tiny prey — mainly mysids (&ldquo;sea lice&rdquo;), small
          crustaceans, and plankton. They feed almost constantly, vacuuming up small
          animals drifting near the seabed and within the weed.
        </p>
      }
      behavior={
        <p>
          Leafy seadragons drift slowly using nearly invisible fins, relying on
          camouflage rather than speed; they cannot curl their tails to grip like
          seahorses. As in seahorses and pipefish, the male carries the developing eggs —
          here on the underside of his tail — until the young hatch and immediately
          fend for themselves. Their leafy disguise is among the finest examples of
          camouflage in the sea.
        </p>
      }
      humanInteraction={
        <p>
          The leafy seadragon is a celebrated icon of southern Australian seas and a
          favourite of divers, and it is legally protected. Because its range is small
          and it depends on particular coastal habitats, it is sensitive to pollution,
          habitat loss, and disturbance. For current status, consult authoritative
          sources.
        </p>
      }
      faqs={[
        {
          question: "Is a leafy seadragon a seahorse?",
          answer:
            "It's a very close relative. Leafy seadragons belong to the same family group as seahorses and pipefish (Syngnathidae), sharing the long tube-snout and male egg-carrying. But they are a distinct kind of fish, with elaborate leaf-like body appendages that seahorses lack.",
        },
        {
          question: "What are the leaf-like parts for?",
          answer:
            "Camouflage, not swimming. The leaf-shaped projections make the seadragon look like floating seaweed, hiding it from predators and prey as it drifts among kelp and seagrass. It actually moves using small, almost transparent fins.",
        },
        {
          question: "Where do leafy seadragons live?",
          answer:
            "Only along the southern (and parts of the western) coast of Australia, among kelp forests, seagrass beds, and rocky reefs. That limited range makes them a special, regionally iconic species — and adds to conservation concern.",
        },
        {
          question: "Which parent carries the eggs?",
          answer:
            "The male, as in seahorses and pipefish. The female transfers her eggs to a special brood patch on the underside of the male's tail, where he carries and tends them until the young hatch.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Phycodurus eques" },
        { label: "Family", value: "Syngnathidae (with seahorses)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Signature trait", value: "Leaf-like camouflage fronds" },
        { label: "Diet", value: "Tiny crustaceans (suction feeder)" },
        { label: "Eggs carried by", value: "The male" },
        { label: "Range", value: "Southern Australia only" },
        { label: "Status", value: "Protected; verify details" },
      ]}
      relatedLinks={[
        { label: "Seahorse Profile", href: "/animals/seahorse", description: "Its close upright relative" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another iconic small reef fish" },
        { label: "Cuttlefish Profile", href: "/animals/cuttlefish", description: "Another master of camouflage" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
      ]}
    />
  );
}
