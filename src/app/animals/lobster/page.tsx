import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Lobster — Profile, Habitat, Diet & Behavior";
const description =
  "Lobsters are large seabed crustaceans with powerful claws. A group-level overview using the American lobster as a reference species: habitat, diet, and moulting.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/lobster",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("lobster"),
});

export default function LobsterPage() {
  return (
    <AnimalProfileLayout
      commonName="Lobster"
      pageTitle={title}
      description={description}
      path="/animals/lobster"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine", "Crustacean", "Invertebrate"]}
      image={getAnimalImage("lobster") ?? undefined}
      galleryImages={getAnimalGalleryImages("lobster")}
      factsHeaderNote="This page focuses on clawed lobsters (family Nephropidae), using the American lobster (Homarus americanus) as a reference. Spiny lobsters are a separate, clawless group."
      overview={
        <>
          <p>
            Lobsters are large marine crustaceans that live on the seabed. The
            best-known are the clawed lobsters of the family Nephropidae, such
            as the American lobster (<em>Homarus americanus</em>), used here as
            a reference species. They have a hard exoskeleton, ten legs, and a
            pair of large front claws. (Spiny lobsters, which lack big claws,
            belong to a separate group.) Lobsters are long-lived, slow-growing
            animals.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Clawed lobsters live on the ocean floor, typically among rocks,
            crevices, and burrows that provide shelter, from shallow coastal
            waters to deeper offshore zones. The American lobster occurs in the
            cool waters of the northwest Atlantic. Other lobster species occupy
            different regions and depths, so habitat varies by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Lobsters are omnivores and opportunistic feeders, eating a mix of
            fish, molluscs, crustaceans, worms, and some plant material, as
            well as scavenging dead animals. They forage mainly at night, using
            their claws to capture and break apart food. Diet varies by species
            and what is locally available.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Lobsters are generally solitary and most active at night, sheltering
            by day in crevices and burrows. The two front claws are often
            specialised — typically a heavier &quot;crusher&quot; and a finer
            &quot;pincer&quot; claw. Like all crustaceans, lobsters grow by
            moulting their shell, and they can regenerate lost limbs over
            successive moults. Some species undertake seasonal movements.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Lobsters are the basis of valuable fisheries in several regions and
            are widely harvested for food, which makes sustainable management
            important. The American lobster fishery, for example, is regulated
            through measures such as size limits and protection of egg-bearing
            females. Conservation and stock status vary by species and region
            and should be checked against current fisheries-science sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                A clawed lobster has a long body divided into a head-and-thorax
                region protected by a carapace and a muscular, segmented
                abdomen (the &quot;tail&quot;). The first pair of legs forms
                large claws, and the animal has long antennae and stalked eyes.
                Living lobsters are often dark greenish-brown or blue-black for
                camouflage rather than the red colour seen only after cooking.
                Sizes vary, and some lobsters grow very large and old.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Lobsters are crustaceans, closely related to the crab covered
          separately on FaunaHub, as well as shrimp and the freshwater
          crayfish, which look like small lobsters. Spiny and slipper lobsters
          resemble clawed lobsters but lack the large pincers and belong to
          different families.
        </p>
      }
      faqs={[
        {
          question: "Are lobsters actually red?",
          answer:
            "Usually not when alive. Many lobsters are dark greenish-brown, blue-black, or mottled, which camouflages them on the seabed. The familiar bright red appears only after cooking, when heat changes the shell pigments.",
        },
        {
          question: "Why do lobsters have two different claws?",
          answer:
            "In clawed lobsters the two front claws are often specialised: a larger, blunt \"crusher\" claw for breaking hard shells and a slimmer \"pincer\" or \"cutter\" claw for gripping and tearing. Which side is the crusher can vary between individuals.",
        },
        {
          question: "How do lobsters grow?",
          answer:
            "Lobsters grow by moulting — shedding their hard exoskeleton and forming a larger one. They are soft and vulnerable just after moulting. Over repeated moults lobsters can also regenerate claws and legs lost to injury.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Clawed lobsters (family Nephropidae)" },
        { label: "Reference species", value: "American lobster (Homarus americanus)" },
        { label: "Type", value: "Crustacean (invertebrate)" },
        { label: "Diet", value: "Omnivore / scavenger" },
        { label: "Habitat", value: "Seabed — rocks, crevices, burrows" },
        { label: "Growth", value: "Moults its exoskeleton" },
        { label: "Conservation", value: "Managed by fisheries — verify per species/region" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "A fellow crustacean" },
        { label: "Octopus Profile", href: "/animals/octopus" },
        { label: "Squid Profile", href: "/animals/squid" },
        { label: "Animal Encyclopedia — Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.lobster}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
