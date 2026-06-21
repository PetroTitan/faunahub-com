import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/crayfish";
const TITLE = "Crayfish — Profile, Freshwater Crustaceans, Diet & Ecology";
const DESC =
  "Explore crayfish (crawfish/yabbies): lobster-like freshwater crustaceans that clean up streams and ponds — clean-water indicators in some places, damaging invaders in others.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("crayfish"),
});

export default function CrayfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Crayfish"
      scientificName="e.g. Astacus astacus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Crustacean", "Freshwater", "Recycler"]}
      image={getAnimalImage("crayfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("crayfish")}
      sources={ANIMAL_SOURCES.crayfish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Crayfish — also called crawfish, crawdads, or yabbies — are freshwater crustaceans
            that look like small lobsters, with a hard exoskeleton, a pair of large pincing
            claws, and several pairs of walking legs. The European crayfish
            (<em>Astacus astacus</em>), shown here, is one well-known species among hundreds
            worldwide. Closely related to true lobsters, crayfish live in rivers, streams,
            lakes, and ponds, where they hide among rocks and in burrows and come out to
            forage, mostly at night.
          </p>
          <p>
            Crayfish are important members of freshwater ecosystems — both as recyclers and
            predators, and as prey for many other animals — and in clean habitats their
            presence can signal good water quality.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;crayfish&rdquo; covers many species on several
            continents; details here use the European crayfish as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Crayfish live in fresh water on most continents — in streams, rivers, lakes, ponds,
          and wetlands — wherever there is suitable cover and reasonably oxygenated water. Many
          dig burrows in banks or beds, and some can survive in seasonal waters by burrowing
          down to stay moist. They generally avoid strong light, sheltering by day and
          foraging at night.
        </p>
      }
      diet={
        <p>
          Crayfish are omnivores and scavengers with broad appetites. They eat water plants,
          algae, insects and their larvae, worms, snails, small fish, and dead and decaying
          matter, helping recycle nutrients in their habitat. Their strong claws let them
          handle a wide range of food, from tearing plants to seizing small prey.
        </p>
      }
      behavior={
        <p>
          Crayfish are mostly solitary and territorial, defending shelters and using their
          claws in disputes and displays as well as for feeding and defence. Like other
          crustaceans they grow by moulting — shedding the old exoskeleton and hardening a new,
          larger one — and they can regrow a lost claw or leg over successive moults. If
          startled, a crayfish can shoot backwards rapidly by flipping its muscular tail (the
          &ldquo;tail-flip&rdquo; escape). They are mainly nocturnal foragers, retreating to
          cover during the day.
        </p>
      }
      humanInteraction={
        <p>
          Crayfish have a complicated relationship with people. They are widely caught and
          farmed for food, and many native species are valued — some are sensitive to pollution
          and act as indicators of clean water, and several are of conservation concern. At
          the same time, certain crayfish introduced outside their native range (such as the
          signal and red swamp crayfish) have become serious invaders, outcompeting natives,
          damaging banks by burrowing, and spreading disease, so they should never be released.
          Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are crayfish related to lobsters?",
          answer:
            "Yes, closely. Crayfish are freshwater crustaceans in the same broad group (decapods) as true lobsters and look like miniature versions of them, with a hard shell, big claws, and a muscular tail. The main difference is habitat: crayfish live in fresh water, while true lobsters are marine.",
        },
        {
          question: "What do crayfish eat?",
          answer:
            "Crayfish are omnivores and scavengers, eating water plants and algae, insects and larvae, worms, snails, small fish, and dead or decaying material. This broad diet makes them useful recyclers in freshwater habitats and lets them thrive in many different waters.",
        },
        {
          question: "Can crayfish regrow lost claws?",
          answer:
            "Yes. Like other crustaceans, crayfish grow by moulting — shedding their old exoskeleton for a larger new one — and over successive moults they can regenerate a lost claw or leg. They can also escape danger with a rapid backward 'tail-flip,' flexing the muscular tail to shoot away from a threat.",
        },
        {
          question: "Why are some crayfish a problem?",
          answer:
            "Certain crayfish moved outside their native range — such as the signal crayfish and red swamp crayfish — have become damaging invasive species. They outcompete and prey on native wildlife, undermine banks with their burrowing, and can spread diseases (like crayfish plague) that wipe out native crayfish. That's why introduced crayfish should never be released into the wild.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Astacus astacus (European crayfish)" },
        { label: "Type", value: "Freshwater crustacean (decapod)" },
        { label: "Relatives", value: "True lobsters" },
        { label: "Diet", value: "Omnivore & scavenger" },
        { label: "Growth", value: "Moults; can regrow claws/legs" },
        { label: "Escape", value: "Rapid backward tail-flip" },
        { label: "Role", value: "Recycler; clean-water indicator (some)" },
        { label: "Note", value: "Some species invasive where introduced" },
      ]}
      relatedLinks={[
        { label: "Lobster Profile", href: "/animals/lobster", description: "Its marine relative" },
        { label: "Crab Profile", href: "/animals/crab", description: "Another decapod crustacean" },
        { label: "Shrimp Profile", href: "/animals/shrimp", description: "A smaller decapod" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Freshwater fauna in context" },
      ]}
    />
  );
}
