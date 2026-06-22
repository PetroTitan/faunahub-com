import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/girdled-lizard";
const TITLE = "Girdled Lizard — Profile, the Armoured Lizard That Bites Its Own Tail";
const DESC =
  "Explore girdled lizards (family Cordylidae): spiny, armour-plated African lizards — the armadillo girdled lizard rolls into a ball by biting its tail, like a tiny dragon.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("girdled-lizard"),
});

export default function GirdledLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Girdled Lizard"
      scientificName="family Cordylidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Africa"]}
      image={getAnimalImage("girdled-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("girdled-lizard")}
      sources={ANIMAL_SOURCES["girdled-lizard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Girdled lizards (family Cordylidae) are heavily armoured lizards of Africa, named for
            the &ldquo;girdles&rdquo; of rectangular, spiny scales (osteoderms) that ring their
            bodies and tails like bands of plate armour. The most famous is the armadillo girdled
            lizard (<em>Ouroborus cataphractus</em>), a small, golden-brown lizard from South
            Africa that looks remarkably like a tiny dragon — and that has one of the most
            charming defences of any reptile.
          </p>
          <p>
            When threatened, the armadillo girdled lizard curls up and bites its own tail, forming
            a tight, spiky ring (much like an armadillo rolling into a ball), so a predator is met
            with a hard, prickly circle and no soft parts to grab.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;girdled lizard&rdquo; covers a family of species; details
            here use the armadillo girdled lizard as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Girdled lizards live in Africa, many in the rocky drylands of southern Africa. The
          armadillo girdled lizard inhabits arid, rocky scrubland along parts of western South
          Africa, sheltering in rock cracks and crevices. Other girdled lizards occupy a range of
          rocky habitats, where their flattened bodies let them wedge into narrow gaps for safety.
        </p>
      }
      diet={
        <p>
          Girdled lizards are mainly insectivores, eating beetles, termites, and other small
          invertebrates, with some species taking a little plant material too. The armadillo
          girdled lizard feeds heavily on termites and other insects, foraging near its rocky
          shelter and dashing back to cover at any sign of danger.
        </p>
      }
      behavior={
        <p>
          The armadillo girdled lizard&apos;s tail-biting ball is its signature trick, but its
          armour and rock-dwelling habits are just as important: when alarmed it usually first
          bolts into a crevice and puffs up to wedge itself in tightly, making it very hard to
          extract; rolling into a ball is a defence used when caught in the open. Unusually for a
          lizard, this species is social, living in groups in the same rock cracks, and it gives
          birth to live young (rather than laying eggs), typically just one or two at a time, which
          makes for slow reproduction. Girdled lizards are day-active and bask to warm up before
          foraging.
        </p>
      }
      humanInteraction={
        <p>
          The armadillo girdled lizard&apos;s dragon-like looks have unfortunately made it a target
          for the illegal pet trade, which — together with its slow reproduction and limited range —
          has been a conservation concern, and it is legally protected in South Africa; collection
          from the wild should never be supported. Other girdled lizards vary in status. Protecting
          their rocky habitats and curbing illegal collection are key. Consult the IUCN Red List
          for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why does the armadillo girdled lizard bite its own tail?",
          answer:
            "It's a defence. When caught in the open and threatened, the armadillo girdled lizard curls up and grips its tail in its mouth, forming a tight, spiky ring — much like an armadillo rolling into a ball. This presents a predator with a hard, prickly circle and tucks away the lizard's soft belly and head, making it very awkward to attack or swallow.",
        },
        {
          question: "Why are they called 'girdled' lizards?",
          answer:
            "Because of their armour. Their bodies and tails are ringed with girdles — bands — of rectangular, often spiny, bony-cored scales, arranged in rows around the body like belts of plate armour. These protective scales give the family its name and its tough, armoured appearance.",
        },
        {
          question: "Do girdled lizards lay eggs?",
          answer:
            "The armadillo girdled lizard doesn't — it gives birth to live young, usually just one or two at a time, which is unusual among lizards and means it reproduces slowly. (Reproduction varies across the girdled lizard family.) This low birth rate is part of why over-collection for the pet trade is such a concern for the species.",
        },
        {
          question: "Are girdled lizards good pets?",
          answer:
            "The armadillo girdled lizard is best left in the wild. Its dragon-like looks have driven illegal collection that, combined with slow reproduction and a limited range, threatens wild populations, and it's legally protected in South Africa. Buying wild-caught girdled lizards fuels this harm, so they should be admired in nature or only ever sourced through strictly legal, responsible channels.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Cordylidae (girdled lizards)" },
        { label: "Reference species", value: "Ouroborus cataphractus (armadillo girdled lizard)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Armour", value: "Girdles of spiny, bony-cored scales" },
        { label: "Signature defence", value: "Bites tail, rolls into a spiky ball" },
        { label: "Reproduction", value: "Armadillo sp. gives live birth (1–2 young)" },
        { label: "Diet", value: "Mainly insectivore (esp. termites)" },
        { label: "Range", value: "Africa (armadillo sp.: South Africa)" },
      ]}
      relatedLinks={[
        { label: "Thorny Devil Profile", href: "/animals/thorny-devil", description: "Another spiky, armoured lizard" },
        { label: "Skink Profile", href: "/animals/skink", description: "Related armoured-scaled lizards" },
        { label: "Agama Profile", href: "/animals/agama", description: "Another African rock lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Southern African fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
