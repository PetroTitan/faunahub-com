import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sturgeon";
const TITLE = "Sturgeon — Profile, the Ancient Armored Fish & Conservation";
const DESC =
  "Explore sturgeons (family Acipenseridae): ancient, armored, long-lived fish that have changed little since the age of dinosaurs — slow-growing bottom-feeders, and among the most threatened animals.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("sturgeon"),
});

export default function SturgeonPage() {
  return (
    <AnimalProfileLayout
      commonName="Sturgeon"
      scientificName="family Acipenseridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Living fossil", "Freshwater"]}
      image={getAnimalImage("sturgeon") ?? undefined}
      galleryImages={getAnimalGalleryImages("sturgeon")}
      sources={ANIMAL_SOURCES.sturgeon}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Sturgeons (family Acipenseridae) are ancient, large, and unmistakable fish that
            have changed remarkably little since the time of the dinosaurs, earning them the
            label &ldquo;living fossils.&rdquo; Instead of ordinary scales, they have rows of
            bony plates (scutes) running along the body like armour, a long shovel-like snout
            with whisker-like barbels underneath, a toothless protrusible mouth, and a
            shark-like tail. The lake sturgeon (<em>Acipenser fulvescens</em>) is shown here.
          </p>
          <p>
            Sturgeons are slow-growing, late-maturing, and very long-lived — some live well
            over a century — and several rank among the largest freshwater fish in the world.
          </p>
          <p>
            <strong>Conservation note:</strong> sturgeons are among the most threatened groups
            of animals on Earth, heavily affected by overfishing (especially for caviar),
            dams, and habitat loss. Verify each species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Sturgeons live across the Northern Hemisphere — in rivers, lakes, and coastal seas
          of North America, Europe, and Asia. Many are anadromous, living in the sea or large
          lakes and migrating up rivers to spawn, while others stay in fresh water all their
          lives. They are bottom-dwellers, needing clean rivers with suitable gravel beds for
          spawning.
        </p>
      }
      diet={
        <p>
          Sturgeons are bottom-feeders. They cruise along the riverbed or seafloor, using the
          sensitive barbels under the snout to detect prey, then extend their tube-like,
          toothless mouth to suck up food — mainly invertebrates such as insect larvae,
          worms, molluscs, and crustaceans, plus small fish in some larger species. They feed
          by suction rather than biting.
        </p>
      }
      behavior={
        <p>
          Sturgeons are generally slow-moving and long-lived, growing throughout much of their
          lives and not breeding until they are many years old — sometimes decades. They make
          long spawning migrations up rivers, and females may release enormous numbers of
          eggs, though they spawn only every few years. Some sturgeons are famous for leaping
          clear out of the water, a striking and not fully explained behaviour. Their slow,
          late reproduction makes populations very slow to recover from losses.
        </p>
      }
      humanInteraction={
        <p>
          Sturgeons have been prized for centuries for their flesh and especially their roe,
          sold as caviar — a value that has driven catastrophic overfishing and poaching.
          Combined with dams that block their spawning migrations and the loss of clean river
          habitat, this has pushed most sturgeon species into serious decline, making them a
          conservation priority worldwide. Sustainable, legal sourcing and habitat protection
          are essential. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are sturgeons called 'living fossils'?",
          answer:
            "Because they have changed very little over a vast span of time. Sturgeons belong to an ancient lineage that dates back to the age of the dinosaurs, and modern sturgeons still keep many primitive features — bony plates instead of scales, a cartilaginous skeleton, and a shark-like tail. They offer a living glimpse of very old fish forms.",
        },
        {
          question: "How long do sturgeons live?",
          answer:
            "A very long time. Many sturgeons live for decades, and some species can live well over a hundred years. They also grow slowly and mature late, not breeding until they are many years (sometimes decades) old — which is part of why they are so vulnerable to overfishing.",
        },
        {
          question: "What do sturgeons eat?",
          answer:
            "Sturgeons are bottom-feeders. They search the riverbed or seafloor with sensitive barbels and then suck up prey through a tube-like, toothless mouth — mainly invertebrates like insect larvae, worms, molluscs, and crustaceans, plus small fish in some larger species. They feed by suction, not biting.",
        },
        {
          question: "Why are sturgeons endangered?",
          answer:
            "Sturgeons are among the most threatened groups of animals in the world. They have been heavily overfished — especially for caviar (their roe) — while dams block their river spawning migrations and habitat loss degrades their breeding grounds. Their slow growth and late maturity make recovery very slow. Status varies by species and should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Acipenseridae" },
        { label: "Reference species", value: "Acipenser fulvescens (lake sturgeon)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Nickname", value: "'Living fossil'" },
        { label: "Body", value: "Bony plates (scutes); barbels; suction mouth" },
        { label: "Lifespan", value: "Decades — some over 100 years" },
        { label: "Diet", value: "Bottom-feeder (invertebrates)" },
        { label: "IUCN Status", value: "Many threatened (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Coelacanth Profile", href: "/animals/coelacanth", description: "Another famous 'living fossil' fish" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "Another barbel-bearing bottom fish" },
        { label: "Electric Eel Profile", href: "/animals/electric-eel", description: "Another remarkable freshwater fish" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
