import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/snail";
const TITLE = "Snail — Profile, Shell, Diet & Behavior";
const DESC =
  "Explore snails: shelled gastropod molluscs of land, fresh water, and sea that glide on a muscular foot, rasp food with a toothed tongue, and retreat into a coiled shell.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("snail"),
});

export default function SnailPage() {
  return (
    <AnimalProfileLayout
      commonName="Snail"
      scientificName="class Gastropoda (shelled)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Mollusc", "Gastropod"]}
      image={getAnimalImage("snail") ?? undefined}
      galleryImages={getAnimalGalleryImages("snail")}
      sources={ANIMAL_SOURCES.snail}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Snails are soft-bodied molluscs (gastropods) that carry a coiled shell into
            which they can withdraw. They are an enormous and varied group living on
            land, in fresh water, and in the sea — the garden snail
            (<em>Cornu aspersum</em>) is a familiar land example. A snail glides on a
            single muscular &ldquo;foot,&rdquo; leaving a trail of mucus, and senses the
            world with tentacles, including eyes on stalks in many land species.
          </p>
          <p>
            Snails and their shell-less relatives, the slugs, are closely related; the
            main difference is the prominent external shell that snails carry.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;snail&rdquo; spans countless species with
            different habits, so general statements vary. Treat details as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Snails are found almost everywhere — gardens, forests, grasslands, deserts (as
          dormant survivors), ponds and rivers, and across the oceans from shore to deep
          sea. Land snails need moisture and shelter and are most active in damp, cool
          conditions; many seal their shells and wait out dry or cold periods.
        </p>
      }
      diet={
        <p>
          Diets vary widely. Many land snails are herbivores or detritivores, grazing on
          plants, algae, fungi, and decaying matter, while some aquatic and marine
          snails are predators or scavengers. Snails feed using a unique structure called
          a radula — a ribbon covered in tiny teeth that rasps food into the mouth.
        </p>
      }
      behavior={
        <p>
          Snails move slowly by rippling waves of muscle along the foot, lubricated by
          mucus. When threatened or in harsh conditions they withdraw into the shell, and
          many land snails can seal the opening with a mucus &ldquo;door&rdquo; and
          become dormant for long periods. Many snails are hermaphrodites, and they often
          have elaborate courtship.
        </p>
      }
      humanInteraction={
        <p>
          Snails matter to people in many ways: some are garden and crop pests, others
          are farmed as food, certain freshwater snails are important in disease ecology,
          and many are valued in the pet and aquarium hobby. Some land snails are also of
          serious conservation concern. Consult authoritative sources for specific
          species.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a snail and a slug?",
          answer:
            "Both are gastropod molluscs and close relatives. The main difference is the shell: snails carry a prominent external coiled shell they can withdraw into, while slugs have lost or greatly reduced the external shell. Otherwise they share the muscular foot, mucus trail, and rasping radula.",
        },
        {
          question: "How do snails eat?",
          answer:
            "Snails feed with a radula — a flexible ribbon covered in many tiny teeth — which they use to scrape and rasp food into the mouth. Depending on the species, that food might be plants, algae, fungi, decaying matter, or even other animals.",
        },
        {
          question: "Why do snails leave a slimy trail?",
          answer:
            "The trail is mucus the snail secretes to glide on. It reduces friction, helps the snail move over rough or dry surfaces (even upside down), and protects the soft foot. The mucus also helps retain moisture, which land snails need.",
        },
        {
          question: "How do snails survive dry or cold weather?",
          answer:
            "Many land snails withdraw into the shell and seal the opening with dried mucus, then become dormant — waiting out heat and drought (estivation) or cold (hibernation) until conditions improve. This lets them survive periods when activity would be dangerous.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Gastropoda (shelled)" },
        { label: "Reference species", value: "Cornu aspersum (garden snail)" },
        { label: "Phylum", value: "Mollusca" },
        { label: "Body", value: "Muscular foot; coiled shell" },
        { label: "Feeding", value: "Radula (toothed ribbon)" },
        { label: "Diet", value: "Varies (herbivore to predator)" },
        { label: "Habitat", value: "Land, fresh water & sea" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Slug Profile", href: "/animals/slug", description: "A shell-less relative" },
        { label: "Nudibranch Profile", href: "/animals/nudibranch", description: "A colourful sea slug" },
        { label: "Octopus Profile", href: "/animals/octopus", description: "A very different mollusc" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
