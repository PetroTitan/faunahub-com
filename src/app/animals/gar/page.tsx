import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/gar";
const TITLE = "Gar — Profile, the Armored 'Living Fossil' Fish & Diet";
const DESC =
  "Explore gars (family Lepisosteidae): long, armor-scaled, ancient predatory fish of the Americas that gulp air to breathe — using the giant alligator gar as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("gar"),
});

export default function GarPage() {
  return (
    <AnimalProfileLayout
      commonName="Gar"
      scientificName="e.g. Atractosteus spatula"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Living fossil"]}
      image={getAnimalImage("gar") ?? undefined}
      galleryImages={getAnimalGalleryImages("gar")}
      sources={ANIMAL_SOURCES.gar}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Gars (family Lepisosteidae) are ancient, long-bodied predatory fish of North and
            Central America, easily known by their cylindrical shape, long jaws full of sharp
            teeth, and tough armour of hard, diamond-shaped scales. They belong to a very old
            lineage and are often called &ldquo;living fossils&rdquo; — their relatives swam
            in the age of the dinosaurs. The alligator gar (<em>Atractosteus spatula</em>),
            shown here, is the largest, a true freshwater giant that can exceed 2–3 metres.
          </p>
          <p>
            Gars are also remarkable for breathing air: they can gulp air at the surface into
            a specialised swim bladder that works like a lung, letting them survive in warm,
            stagnant, low-oxygen water.
          </p>
          <p>
            <strong>Note:</strong> there are several gar species; details here use the
            alligator gar as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Gars live in fresh and brackish waters of North and Central America — rivers, lakes,
          swamps, backwaters, and floodplains — generally favouring slow, warm, often weedy
          water. The alligator gar inhabits large rivers, reservoirs, and coastal bays of the
          southern United States and into Mexico, sometimes venturing into brackish or marine
          water.
        </p>
      }
      diet={
        <p>
          Gars are ambush predators that feed mainly on fish, plus crustaceans, waterbirds,
          and small animals at the surface. They hang motionless near the surface or in cover,
          looking like a floating log, then strike sideways with their long, tooth-lined jaws
          to seize prey. The giant alligator gar can take quite large fish and other sizeable
          prey.
        </p>
      }
      behavior={
        <p>
          Gars are slow, patient hunters that rely on stealth and a sudden sideways snap
          rather than active pursuit. Their air-gulping ability lets them thrive where other
          fish would suffocate, and they can often be seen rising to break the surface for a
          breath. Their hard, interlocking scales (made of a tough, enamel-like material)
          form effective armour against predators. Gars are long-lived and slow to mature,
          and the alligator gar in particular grows very large over many years.
        </p>
      }
      humanInteraction={
        <p>
          Gars have often been wrongly persecuted as &ldquo;trash fish&rdquo; or threats to
          game fish, but they are now increasingly valued as native predators that help keep
          ecosystems balanced, and the alligator gar is a prized catch in recreational
          fishing. They are harmless to people (their eggs, however, are toxic if eaten).
          Some populations, especially of the slow-breeding alligator gar, have declined and
          are now managed and protected in places. Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "Why are gars called 'living fossils'?",
          answer:
            "Because they belong to a very ancient lineage that has changed little over a vast span of time — gar relatives lived alongside the dinosaurs, and modern gars keep many primitive features, including their armour of hard, enamel-coated scales and an air-breathing swim bladder. They offer a living glimpse of very old fish.",
        },
        {
          question: "Can gars breathe air?",
          answer:
            "Yes. Gars can gulp air at the surface into a specialised, lung-like swim bladder, which lets them get oxygen even in warm, stagnant water where dissolved oxygen is low. This is why they often rise to break the surface, and it helps them survive in habitats that would suffocate many other fish.",
        },
        {
          question: "How big do gars get?",
          answer:
            "It varies by species, but the alligator gar is enormous — one of the largest freshwater fish in North America, capable of exceeding 2–3 metres and weighing well over 100 kg. Other gars are smaller. Their great size, armour, and toothy jaws make the big ones look genuinely prehistoric.",
        },
        {
          question: "Are gars dangerous to people?",
          answer:
            "Not really. Despite their fearsome, toothy appearance, gars are not a danger to humans and attacks are essentially unheard of. One caution: gar eggs are toxic to people and other animals if eaten, so the roe should never be consumed — but the fish itself poses no threat to swimmers.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Lepisosteidae" },
        { label: "Reference species", value: "Atractosteus spatula (alligator gar)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Nickname", value: "'Living fossil'" },
        { label: "Body", value: "Long jaws; hard diamond-shaped armour scales" },
        { label: "Breathing", value: "Gulps air (lung-like swim bladder)" },
        { label: "Diet", value: "Ambush predator (mainly fish)" },
        { label: "Range", value: "North & Central America" },
      ]}
      relatedLinks={[
        { label: "Sturgeon Profile", href: "/animals/sturgeon", description: "Another armored 'living fossil' fish" },
        { label: "Paddlefish Profile", href: "/animals/paddlefish", description: "A related ancient river fish" },
        { label: "Pike relatives — Snakehead Profile", href: "/animals/snakehead", description: "Another air-breathing predator" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
      ]}
    />
  );
}
