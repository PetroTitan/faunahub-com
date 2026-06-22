import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/butterflyfish";
const TITLE = "Butterflyfish — Profile, the Colourful Coral-Reef Jewels";
const DESC =
  "Explore butterflyfish (family Chaetodontidae): disc-shaped, brilliantly patterned reef fish, often seen in faithful pairs, with many specialised to feed on living coral.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("butterflyfish"),
});

export default function ButterflyfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Butterflyfish"
      scientificName="family Chaetodontidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coral reef", "Marine"]}
      image={getAnimalImage("butterflyfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("butterflyfish")}
      sources={ANIMAL_SOURCES.butterflyfish}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Butterflyfish (family Chaetodontidae) are among the most beautiful and recognisable
            fish of the world&apos;s coral reefs — small, thin, disc-shaped fish painted in
            brilliant yellows, whites, oranges, and blacks, with bold stripes, spots, and bands.
            Many sport a dark band running through the eye and a contrasting eye-like spot near
            the tail, a pattern thought to confuse predators about which end is the head.
          </p>
          <p>
            Graceful and active by day, butterflyfish flit among the corals on their tall,
            flattened bodies, and many species are famously seen swimming in pairs that stay
            together for long periods.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;butterflyfish&rdquo; covers a large family; details
            here describe the group broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Butterflyfish live mainly on coral reefs in the warm waters of the Indian, Pacific, and
          Atlantic Oceans, with the greatest variety in the Indo-Pacific. Most are shallow-water
          reef dwellers, closely tied to healthy coral, though some live on rocky reefs or in
          deeper water. Their strong link to coral makes many of them sensitive indicators of
          reef health.
        </p>
      }
      diet={
        <p>
          Butterflyfish have varied diets. Many are specialised coral-feeders (corallivores) that
          use a small, pointed, tweezer-like mouth to pick coral polyps and other tiny prey from
          crevices; others feed on small invertebrates, worms, plankton, or algae. The slender
          snout and fine teeth — features that give the family its scientific name — are perfectly
          suited to plucking small food from the nooks and crannies of the reef.
        </p>
      }
      behavior={
        <p>
          Butterflyfish are day-active reef fish that shelter among coral and rocks at night. A
          striking feature of their biology is pairing: many species form long-lasting pairs that
          forage and defend a feeding territory together, swimming side by side over the reef.
          Their bright patterns help them recognise their own kind, while the eye-stripe and false
          eyespot may misdirect predators. Because so many depend on living coral for food and
          shelter, butterflyfish are closely studied as barometers of coral-reef condition — their
          numbers and diversity often decline when reefs are damaged.
        </p>
      }
      humanInteraction={
        <p>
          Butterflyfish are beloved by divers and snorkellers and are popular (though often
          challenging) marine-aquarium fish, especially the coral-eating species, which can be
          very hard to feed in captivity and are best left on the reef. Their main threat is the
          loss and degradation of coral reefs from warming, bleaching, pollution, and destructive
          practices; some species remain common while reef decline puts specialists at risk.
          Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "Why do butterflyfish often have an eyespot near the tail?",
          answer:
            "Many butterflyfish have a dark band hiding the real eye and a contrasting eye-like spot toward the rear. This is thought to confuse predators about which end is the head, so an attack aimed at the 'fake eye' hits the tail and the fish darts away in the opposite, unexpected direction. It's a clever bit of visual trickery.",
        },
        {
          question: "What do butterflyfish eat?",
          answer:
            "It depends on the species. Many are specialised coral-feeders that pluck coral polyps with a slender, tweezer-like mouth; others eat small invertebrates, worms, plankton, or algae. The narrow snout and fine teeth that give the family its name are ideal for picking tiny food out of crevices on the reef.",
        },
        {
          question: "Do butterflyfish really swim in pairs?",
          answer:
            "Many do. Numerous butterflyfish species form long-lasting pairs that forage together, swim side by side, and jointly defend a feeding territory on the reef. This faithful pairing is one of their most charming and well-known behaviours, often noticed by divers.",
        },
        {
          question: "Why are butterflyfish important for coral reefs?",
          answer:
            "Because so many are tightly linked to living coral for food and shelter, their abundance and variety reflect the health of a reef. Scientists use butterflyfish as 'indicator species' — a drop in coral-feeding butterflyfish can be an early sign that a reef is in trouble from bleaching, pollution, or other damage.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Chaetodontidae" },
        { label: "Reference genus", value: "Chaetodon" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Look", value: "Disc-shaped, vividly patterned" },
        { label: "Trick", value: "Eye-stripe + false eyespot near tail" },
        { label: "Diet", value: "Many eat coral; others inverts/plankton" },
        { label: "Behaviour", value: "Day-active; many form faithful pairs" },
        { label: "Habitat", value: "Coral reefs (esp. Indo-Pacific)" },
      ]}
      relatedLinks={[
        { label: "Angelfish Profile", href: "/animals/angelfish", description: "Close reef-fish relatives" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another iconic reef fish" },
        { label: "Coral Profile", href: "/animals/coral", description: "The reef they depend on" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
