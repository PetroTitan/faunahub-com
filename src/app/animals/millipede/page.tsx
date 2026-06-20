import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/millipede";
const TITLE = "Millipede — Profile, Legs, Diet & Defences";
const DESC =
  "Explore millipedes (class Diplopoda): slow, many-legged arthropods with two leg pairs per segment that recycle leaf litter and curl up or release chemicals to defend themselves.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("millipede"),
});

export default function MillipedePage() {
  return (
    <AnimalProfileLayout
      commonName="Millipede"
      scientificName="class Diplopoda"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Myriapod", "Detritivore"]}
      image={getAnimalImage("millipede") ?? undefined}
      galleryImages={getAnimalGalleryImages("millipede")}
      sources={ANIMAL_SOURCES.millipede}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Millipedes (class Diplopoda) are slow-moving, many-legged arthropods of the
            myriapod group — relatives of centipedes, but very different in lifestyle.
            Their name means &ldquo;thousand feet,&rdquo; though no species actually has
            that many. The key feature that defines them is having <strong>two pairs of
            legs on most body segments</strong> (whereas centipedes have one), giving the
            body a rippling, rolling wave of legs as it moves.
          </p>
          <p>
            Unlike the predatory centipedes, millipedes are gentle recyclers that feed on
            decaying plant material and help build healthy soil.
          </p>
          <p>
            <strong>Note:</strong> millipedes are diverse, with many shapes and sizes;
            treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Millipedes live in damp habitats worldwide — in leaf litter, under logs and
          stones, in soil, and in rotting wood — wherever there is decaying plant matter
          and moisture. They lose water easily, so they stay in humid microhabitats and
          are most active at night.
        </p>
      }
      diet={
        <p>
          Most millipedes are detritivores, feeding on dead leaves, rotting wood, and
          other decaying plant material. By breaking this matter down, they recycle
          nutrients and improve soil — an important, if quiet, ecological service. A few
          eat fungi or living plant tissue.
        </p>
      }
      behavior={
        <p>
          Millipedes move slowly, with their many legs working in coordinated waves to
          push the body through soil and litter. Rather than running from danger like a
          centipede, a millipede typically coils into a tight spiral to protect its soft
          underside, and many also release defensive chemicals from glands along the body
          to deter predators. They are harmless to people, though the defensive secretions
          of some can irritate skin.
        </p>
      }
      humanInteraction={
        <p>
          Millipedes are valuable decomposers that enrich soil, and most are completely
          harmless. Occasionally large numbers gather in gardens or homes in damp
          conditions, and the defensive fluids of some species can stain or irritate
          skin, so it is best not to handle them roughly. Consult authoritative sources
          for specific species.
        </p>
      }
      faqs={[
        {
          question: "Do millipedes really have a thousand legs?",
          answer:
            "No — the name exaggerates. Most millipedes have a few dozen to a few hundred legs, with two pairs on most body segments. The total varies by species and grows as the animal adds segments while moulting, but it is far below a thousand for almost all of them.",
        },
        {
          question: "How do you tell a millipede from a centipede?",
          answer:
            "Count the legs per segment and watch how it behaves. Millipedes have two pairs of legs on most segments, move slowly, and eat decaying plants; centipedes have one pair per segment, move quickly, and are venomous predators. Millipedes are also usually more rounded, centipedes flatter.",
        },
        {
          question: "Are millipedes dangerous?",
          answer:
            "Millipedes are harmless to people — they don't bite or sting. Their defence is to curl up and release deterrent chemicals, and in some species these secretions can irritate or stain skin, so it's best not to handle them roughly or rub your eyes afterwards. This page is educational only.",
        },
        {
          question: "What do millipedes eat?",
          answer:
            "Most millipedes are detritivores that feed on dead leaves, rotting wood, and other decaying plant material, recycling nutrients back into the soil. A few species eat fungi or, occasionally, living plant matter.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Diplopoda (myriapods)" },
        { label: "Legs", value: "Two pairs per most segments" },
        { label: "Diet", value: "Detritivore (decaying plants)" },
        { label: "Vs centipede", value: "Slow; two leg pairs/segment; no venom" },
        { label: "Defence", value: "Coils up; releases chemicals" },
        { label: "Role", value: "Recycles litter; builds soil" },
        { label: "Activity", value: "Nocturnal; needs moisture" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Centipede Profile", href: "/animals/centipede", description: "A fast, venomous myriapod cousin" },
        { label: "Earthworm Profile", href: "/animals/earthworm", description: "Another soil recycler" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "A diverse insect group" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
