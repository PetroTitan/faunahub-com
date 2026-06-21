import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tegu";
const TITLE = "Tegu — Profile, Large South American Lizards & Behavior";
const DESC =
  "Explore tegus (genera Salvator, Tupinambis): large, intelligent South American lizards — using the Argentine black-and-white tegu, which is unusual for being partly warm-bodied.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("tegu"),
});

export default function TeguPage() {
  return (
    <AnimalProfileLayout
      commonName="Tegu"
      scientificName="Salvator merianae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "South America"]}
      image={getAnimalImage("tegu") ?? undefined}
      galleryImages={getAnimalGalleryImages("tegu")}
      sources={ANIMAL_SOURCES.tegu}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Tegus are large, robust lizards of South America, with powerful limbs, strong
            jaws, a long tail, and a beaded, often boldly patterned skin. The Argentine
            black-and-white tegu (<em>Salvator merianae</em>), shown here, is the
            best-known species — among the largest of all tegus, marked with bands and
            speckles of black and white. Intelligent and alert, tegus are sometimes compared
            to monitor lizards in behaviour and are often described as among the more
            &ldquo;clever&rdquo; reptiles.
          </p>
          <p>
            One species, the Argentine tegu, is remarkable for a trait once thought
            impossible in lizards: during its breeding season it can keep its body
            noticeably warmer than its surroundings, a partial, seasonal form of
            warm-bloodedness.
          </p>
          <p>
            <strong>Note:</strong> there are several tegu species; details here use the
            Argentine black-and-white tegu as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tegus live across much of South America, from tropical forests and savannas to
          scrub and the edges of farmland, depending on the species. The Argentine
          black-and-white tegu favours open and semi-open habitats in central South America,
          digging burrows for shelter and to escape the heat and cold, and it hibernates
          (brumates) underground during cooler months.
        </p>
      }
      diet={
        <p>
          Tegus are omnivores with a broad appetite: fruit, seeds, insects, snails, eggs,
          small vertebrates such as rodents, frogs, and other reptiles, and carrion. The
          Argentine tegu is notable for raiding nests for eggs, including those of other
          reptiles and ground-nesting birds. This dietary flexibility helps tegus thrive in
          many settings — and contributes to their impact where they have been introduced.
        </p>
      }
      behavior={
        <p>
          Tegus are active by day, terrestrial, and good diggers, sheltering in burrows and
          basking to warm up. They are alert and inquisitive, and the Argentine tegu in
          particular shows a striking seasonal physiology: in the breeding season it can
          raise its body temperature several degrees above its surroundings through internal
          heat production — a partial endothermy unusual among reptiles. When threatened,
          tegus may inflate the body, hiss, lash with the tail, or bite, but they often flee
          to a burrow.
        </p>
      }
      humanInteraction={
        <p>
          Tegus are kept as exotic pets (where legal) and are generally hardy, and the
          Argentine tegu is widespread in its native range. However, escaped or released
          pets have established invasive populations in places such as Florida, where they
          prey on the eggs and young of native wildlife — a serious conservation concern that
          underlines why exotic pets should never be released. Consult authoritative sources
          for species-specific and regional status.
        </p>
      }
      faqs={[
        {
          question: "Are tegus warm-blooded?",
          answer:
            "Partly and seasonally, in at least one species. The Argentine black-and-white tegu can raise its body temperature several degrees above its surroundings during the breeding season through internal heat production — a partial, temporary endothermy that was surprising to find in a lizard. Outside that season, like other reptiles, it relies on external warmth.",
        },
        {
          question: "What do tegus eat?",
          answer:
            "Tegus are omnivores with very broad diets: fruit, seeds, insects, snails, eggs, small vertebrates such as rodents and frogs, and carrion. The Argentine tegu is especially known for raiding nests to eat eggs, which is part of why introduced tegus can harm native wildlife.",
        },
        {
          question: "Are tegus dangerous or invasive?",
          answer:
            "In their native South America, tegus are a natural part of the ecosystem. But escaped or released pet tegus have become invasive in places like Florida, where they eat the eggs and young of native animals (including threatened species). They aren't especially dangerous to people, but as invaders they are a real conservation problem — a reminder never to release exotic pets.",
        },
        {
          question: "Are tegus intelligent?",
          answer:
            "Tegus are often regarded as among the more intelligent and alert lizards, showing curiosity and problem-solving, and they can become quite tame in captivity. They are sometimes compared to monitor lizards in their active, inquisitive behaviour, though such comparisons are general rather than precise.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Salvator merianae (Argentine tegu)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Diet", value: "Omnivore (fruit, insects, eggs, small prey)" },
        { label: "Special trait", value: "Seasonal partial warm-bloodedness" },
        { label: "Behaviour", value: "Day-active digger; alert & inquisitive" },
        { label: "Range", value: "South America (native)" },
        { label: "Note", value: "Invasive where released (e.g. Florida)" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Monitor Lizard Profile", href: "/animals/monitor-lizard", description: "A similar large, active lizard" },
        { label: "Iguana Profile", href: "/animals/iguana", description: "Another large lizard of the Americas" },
        { label: "Skink Profile", href: "/animals/skink", description: "A smooth-scaled lizard family" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
