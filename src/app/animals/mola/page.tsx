import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mola";
const TITLE = "Ocean Sunfish (Mola) — Profile, the Heaviest Bony Fish";
const DESC =
  "Explore the ocean sunfish (Mola mola): the heaviest bony fish in the world — a huge, disc-shaped, almost tailless fish that basks at the surface and feeds largely on jellyfish.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("mola"),
});

export default function MolaPage() {
  return (
    <AnimalProfileLayout
      commonName="Ocean Sunfish (Mola)"
      scientificName="Mola mola"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Open ocean", "Record-holder"]}
      image={getAnimalImage("mola") ?? undefined}
      galleryImages={getAnimalGalleryImages("mola")}
      sources={ANIMAL_SOURCES.mola}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The ocean sunfish (<em>Mola mola</em>) is one of the strangest fish in the sea —
            a huge, flattened, almost circular fish that looks like a giant swimming head.
            It has tall dorsal and anal fins, no real tail (instead a rounded rudder-like
            structure called a clavus), and a tough, leathery skin. The ocean sunfish is the
            heaviest bony fish in the world, with the largest individuals weighing well over
            a tonne.
          </p>
          <p>
            Despite its enormous size, the mola is a gentle, slow-moving drifter, often seen
            lying on its side at the surface as if sunbathing — the behaviour behind its
            name.
          </p>
          <p>
            <strong>Note:</strong> a couple of closely related giant sunfish exist; details
            here use Mola mola. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Ocean sunfish live in temperate and tropical oceans worldwide, ranging through the
          open sea from the surface down into deep, cold water. They often come up to bask at
          the surface, but they also dive deep to feed, moving between warm upper waters and
          the chilly depths.
        </p>
      }
      diet={
        <p>
          Ocean sunfish were long thought to feed mainly on jellyfish and other gelatinous
          animals, and these do form a large part of the diet; however, studies show molas
          also eat a varied menu including small fish, crustaceans, squid, and seafloor
          invertebrates. Because jelly-like prey is low in nutrients, the sunfish must eat a
          great deal to sustain its huge body.
        </p>
      }
      behavior={
        <p>
          The ocean sunfish swims by sculling its tall dorsal and anal fins from side to
          side, an unusual style for such a large fish, and steers with the clavus. It is
          famous for basking flat at the surface, which may help it warm up after deep,
          cold-water dives and may let seabirds and other fish pick off its many skin
          parasites. Sunfish are extraordinarily fecund — a large female can carry an
          enormous number of tiny eggs — yet only a few survive to adulthood.
        </p>
      }
      humanInteraction={
        <p>
          Ocean sunfish are harmless to people and a favourite sight for divers and
          boaters. They are caught (sometimes as bycatch) and eaten in some regions, and
          they can be harmed by floating plastic, which resembles their jellyfish prey, and
          by entanglement in fishing gear. Their conservation status varies by region.
          Consult NOAA Fisheries and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the ocean sunfish called a sunfish?",
          answer:
            "Because of its habit of basking. Ocean sunfish are often seen lying flat on their sides at the sea surface, seeming to sunbathe. This behaviour — which may help them rewarm after deep dives and let other animals clean parasites off them — is the origin of the name 'sunfish.'",
        },
        {
          question: "How big does an ocean sunfish get?",
          answer:
            "Very big — the ocean sunfish is the heaviest bony fish in the world, with the largest individuals weighing well over a tonne and measuring a few metres across including the fins. (The closely related bump-head sunfish can be even heavier.) Despite this bulk, molas are gentle and slow.",
        },
        {
          question: "What do ocean sunfish eat?",
          answer:
            "Jellyfish and other gelatinous animals are an important part of the diet, but molas actually eat a varied menu including small fish, squid, crustaceans, and seafloor invertebrates. Because jelly-like prey is low in energy, the sunfish needs to eat large amounts to fuel its enormous body.",
        },
        {
          question: "Are ocean sunfish dangerous?",
          answer:
            "Not at all — ocean sunfish are completely harmless to people. They are slow, placid drifters with tiny mouths suited to soft prey. The main risks run the other way: molas can be harmed by fishing gear and by floating plastic that they mistake for jellyfish.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Mola mola" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Claim to fame", value: "Heaviest bony fish in the world" },
        { label: "Shape", value: "Disc-like; no real tail (clavus)" },
        { label: "Diet", value: "Jellyfish & varied small prey" },
        { label: "Behaviour", value: "Basks at the surface; dives deep" },
        { label: "Habitat", value: "Open temperate & tropical oceans" },
        { label: "Status", value: "Varies by region (verify)" },
      ]}
      relatedLinks={[
        { label: "Jellyfish Profile", href: "/animals/jellyfish", description: "A key part of the mola's diet" },
        { label: "Tuna Profile", href: "/animals/tuna", description: "Another large open-ocean fish" },
        { label: "Whale Shark relatives — Shark Profile", href: "/animals/shark", description: "Other giant fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
