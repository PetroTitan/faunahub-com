import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leopard-gecko";
const TITLE = "Leopard Gecko — Profile, Eyelids, Tail Storage & Dry Habitat";
const DESC =
  "Explore the leopard gecko (Eublepharis macularius): a ground-dwelling gecko of South Asian drylands that has movable eyelids and a fat-storing tail.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("leopard-gecko"),
});

export default function LeopardGeckoPage() {
  return (
    <AnimalProfileLayout
      commonName="Leopard Gecko"
      scientificName="Eublepharis macularius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Gecko","South Asia"]}
      image={getAnimalImage("leopard-gecko") ?? undefined}
      galleryImages={getAnimalGalleryImages("leopard-gecko")}
      sources={ANIMAL_SOURCES["leopard-gecko"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The leopard gecko (<em>Eublepharis macularius</em>) is a stocky, ground-dwelling gecko from the rocky drylands of Afghanistan, Pakistan, northwestern India and Iran. Adults are pale yellow with dark spots — the pattern that gives the species its name — while juveniles are boldly banded and develop spots as they mature.
        </p>
        <p>
          It belongs to the eyelid geckos, and that is its defining oddity. Most geckos have no eyelids and clean their eyes by licking a transparent spectacle; a leopard gecko has <strong>movable eyelids and blinks</strong>.
        </p>
        <p>
          It also lacks the adhesive toe pads that let many geckos climb glass and ceilings — it has claws instead, suited to a life on the ground — and it stores fat reserves in its noticeably thick <strong>tail</strong>. <strong>This profile describes the wild species and is not a care guide; it offers no husbandry, heating, feeding or veterinary advice.</strong>
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Leopard geckos live in arid and semi-arid rocky habitat — stony desert, dry grassland, scrub and rocky hillsides — across Afghanistan, Pakistan, northwestern India and parts of Iran. They avoid loose sand, preferring firm ground with rocks and crevices, and shelter by day in burrows and under stones to escape the heat.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Leopard geckos are insectivores, taking insects and other invertebrates — crickets, beetles, spiders, scorpions and larvae. They hunt actively at night, and larger individuals may take small vertebrates. Fat stored in the tail is a buffer against periods when prey is scarce.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Leopard geckos are crepuscular and nocturnal, emerging at dusk to hunt and spending the hottest part of the day sheltered. They are ground animals rather than climbers, using claws rather than adhesive pads. Like many lizards they can shed the tail when attacked; the regrown tail is typically shorter, blunter and different in pattern from the original. Vocalisation includes chirps and squeaks, particularly when disturbed.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The leopard gecko was one of the first reptile species to be established as a widely bred companion animal, and captive-bred animals now dominate the trade in a great many colour and pattern morphs. In its native range it is a wild animal of rocky drylands, subject to habitat pressures and collection. This profile covers the wild species only; questions about housing, temperature, lighting, diet, shedding or the health of a captive gecko belong with a qualified reptile veterinarian and specialist husbandry sources. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Can leopard geckos blink?",
          answer:
            "Yes, and among geckos that is unusual. Leopard geckos belong to the eyelid geckos and have movable eyelids, so they blink and close their eyes to sleep. Most other geckos have no eyelids at all and keep their eyes clean by licking a fixed transparent scale.",
        },
        {
          question: "Why can't leopard geckos climb glass?",
          answer:
            "Because they lack the adhesive toe pads that other geckos use. Those pads are covered in microscopic structures that grip smooth surfaces; leopard geckos have claws instead, which suit a ground-dwelling life among rocks and crevices but do not stick to glass.",
        },
        {
          question: "Why is a leopard gecko's tail so thick?",
          answer:
            "It is a fat store. The tail holds reserves that the gecko draws on when food is scarce, which matters in the dry, seasonal habitats it occupies. The tail can also be shed if the animal is attacked, and the replacement usually grows back shorter, blunter and differently patterned.",
        },
        {
          question: "Where do leopard geckos live in the wild?",
          answer:
            "In arid and semi-arid rocky country across Afghanistan, Pakistan, northwestern India and parts of Iran. They prefer firm stony ground with rocks and crevices rather than loose sand, sheltering in burrows and under stones by day and hunting at dusk and night.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Eublepharis macularius" },
        { label: "Family", value: "Eublepharidae (eyelid geckos)" },
        { label: "Class", value: "Reptilia" },
        { label: "Unusual for a gecko", value: "Has movable eyelids; blinks" },
        { label: "Feet", value: "Claws, not adhesive pads" },
        { label: "Tail", value: "Thick — stores fat reserves" },
        { label: "Activity", value: "Crepuscular and nocturnal" },
        { label: "Note", value: "Wild species profile — not a care guide" },
      ]}
      relatedLinks={[
        { label: "Gecko Profile", href: "/animals/gecko", description: "Group-level overview" },
        { label: "Tokay Gecko Profile", href: "/animals/tokay-gecko" },
        { label: "Bearded Dragon Profile", href: "/animals/bearded-dragon" },
        { label: "Skink Profile", href: "/animals/skink" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
