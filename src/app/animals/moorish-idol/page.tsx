import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/moorish-idol";
const TITLE = "Moorish Idol — Profile, Dorsal Filament & Reef Habitat";
const DESC =
  "Explore the Moorish idol (Zanclus cornutus): a boldly banded Indo-Pacific reef fish with a trailing dorsal filament, and the only member of its family.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("moorish-idol"),
});

export default function MoorishIdolPage() {
  return (
    <AnimalProfileLayout
      commonName="Moorish Idol"
      scientificName="Zanclus cornutus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Reef Fish","Indo-Pacific"]}
      image={getAnimalImage("moorish-idol") ?? undefined}
      galleryImages={getAnimalGalleryImages("moorish-idol")}
      sources={ANIMAL_SOURCES["moorish-idol"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The Moorish idol (<em>Zanclus cornutus</em>) is one of the most instantly recognisable fish on Indo-Pacific reefs: a disc-shaped body crossed by broad black, white and yellow bands, a long tubular snout, and a dorsal fin drawn out into a trailing white <strong>filament</strong> that streams behind the fish as it swims.
        </p>
        <p>
          It is the only living species in the family Zanclidae — a lineage with no close living relatives beyond the surgeonfishes. Unlike surgeonfish, however, it has no scalpel spine at the base of the tail.
        </p>
        <p>
          Adults often carry small bony projections above the eyes, more pronounced in older fish, which the species name <em>cornutus</em> — &apos;horned&apos; — refers to.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Moorish idols occur widely across the Indo-Pacific, from East Africa and the Red Sea through Indonesia and the Pacific islands to Hawaii, and east to the coast of the Americas. They live on coral and rocky reefs from shallow lagoons to deeper outer slopes, favouring areas with hard structure and abundant sponge growth.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Moorish idols feed mainly on <strong>sponges</strong>, along with tunicates, other encrusting invertebrates and some algae. The long tubular snout with its small mouth and fine teeth is the tool for this: it lets the fish reach into narrow crevices in the reef and nip pieces from encrusting growth.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Moorish idols are seen singly, in pairs or in small groups, and sometimes gather in larger aggregations. They are diurnal, moving steadily over the reef and probing crevices as they feed. The species has an unusually long pelagic larval stage — young drift in open water for an extended period before settling onto a reef, which is a major reason the species is so widely distributed across the Pacific.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The Moorish idol is frequently sought for aquaria because of its appearance, but it is notoriously difficult to maintain: its specialised sponge-based diet is very hard to replicate, and survival rates in captivity are poor. It is widely regarded as unsuitable for home aquaria for that reason. In the wild it remains widespread across a very large range, with reef degradation the principal broad concern. This profile is educational and offers no aquarium husbandry guidance. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is the Moorish idol related to the butterflyfish?",
          answer:
            "No, despite the resemblance. The Moorish idol is the only living member of its own family, Zanclidae, whose closest relatives are the surgeonfishes rather than the butterflyfishes. The similar shape and bold banding are a case of unrelated reef fish arriving at a similar look.",
        },
        {
          question: "What is the long trailing part of its fin?",
          answer:
            "It is a filament — an extension of the dorsal fin drawn out into a long white streamer that trails behind the fish as it swims. It is one of the species' most distinctive features and is longer in some individuals than others.",
        },
        {
          question: "What do Moorish idols eat?",
          answer:
            "Mainly sponges, along with tunicates, other encrusting invertebrates and some algae. Their long tubular snout, small mouth and fine teeth are adapted for reaching into reef crevices and nipping pieces from encrusting growth.",
        },
        {
          question: "Why are Moorish idols hard to keep in aquaria?",
          answer:
            "Because of their diet. They feed largely on sponges and other encrusting reef invertebrates, which is extremely difficult to reproduce in a tank, and many individuals fail to feed adequately in captivity. They are widely considered unsuitable for home aquaria as a result.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Zanclus cornutus" },
        { label: "Family", value: "Zanclidae — its only living member" },
        { label: "Class", value: "Actinopterygii" },
        { label: "Dorsal fin", value: "Drawn into a long trailing filament" },
        { label: "Snout", value: "Long and tubular for reef crevices" },
        { label: "Diet", value: "Mainly sponges and encrusting invertebrates" },
        { label: "Larvae", value: "Unusually long pelagic stage" },
        { label: "Range", value: "Indo-Pacific to the eastern Pacific" },
      ]}
      relatedLinks={[
        { label: "Blue Tang Profile", href: "/animals/blue-tang" },
        { label: "Butterflyfish Profile", href: "/animals/butterflyfish", description: "A look-alike from another family" },
        { label: "Angelfish Profile", href: "/animals/angelfish" },
        { label: "Triggerfish Profile", href: "/animals/triggerfish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
