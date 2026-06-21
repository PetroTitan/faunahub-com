import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/oarfish";
const TITLE = "Oarfish — Profile, the Giant 'Sea Serpent' of the Deep";
const DESC =
  "Explore the oarfish (Regalecus glesne): the longest bony fish in the world, a ribbon-like deep-sea giant rarely seen alive — and the likely source of many 'sea serpent' legends.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("oarfish"),
});

export default function OarfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Oarfish"
      scientificName="Regalecus glesne"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Deep sea", "Record-holder"]}
      image={getAnimalImage("oarfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("oarfish")}
      sources={ANIMAL_SOURCES.oarfish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The oarfish (<em>Regalecus glesne</em>) is the longest bony fish in the world — a
            spectacular, ribbon-like giant of the open ocean that can reach lengths of around
            8 metres or more. Its silvery, scaleless body is extremely long and slender,
            topped by a striking red dorsal fin that runs the whole length of the back and
            rises into a crest above the head. With this serpentine shape and shimmering
            appearance, the oarfish is almost certainly the source of many old &ldquo;sea
            serpent&rdquo; stories.
          </p>
          <p>
            Oarfish live in the deep, open sea and are rarely seen alive; most are known from
            individuals that wash up on shore or are filmed on rare occasions, so much about
            their lives remains mysterious. (The image here shows a stranded oarfish, the way
            they are usually encountered.)
          </p>
          <p>
            <strong>Note:</strong> oarfish are seldom observed, so knowledge is limited; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Oarfish live in the open ocean worldwide, in temperate and tropical waters,
          typically in the deep &ldquo;twilight&rdquo; zone hundreds of metres down. They are
          rarely encountered because they live far from shore and at depth, coming near the
          surface only occasionally — and individuals that do appear at the surface or wash
          ashore are often sick or dying.
        </p>
      }
      diet={
        <p>
          Oarfish are filter-style feeders that eat mainly tiny prey — krill, other small
          crustaceans, small fish, and squid — straining or gulping zooplankton from the
          water. Despite their enormous length they have small mouths and no true teeth,
          suited to a diet of small, drifting animals rather than large prey.
        </p>
      }
      behavior={
        <p>
          The little that is known suggests oarfish drift and swim vertically as well as
          horizontally, often hanging head-up in the water, and they move by rippling their
          long red dorsal fin while keeping the body fairly straight. They are not the
          dangerous monsters of legend — they are gentle, slow-living deep-sea fish. A popular
          belief in some cultures links the appearance of oarfish near shore to coming
          earthquakes, but scientific studies have found no reliable connection; their rare
          strandings are better explained by ocean conditions and the fish being unwell.
        </p>
      }
      humanInteraction={
        <p>
          Oarfish are harmless to people and of little fishing value, but they capture the
          public imagination whenever one strands or is filmed, thanks to their size and
          serpent-like looks. Because they are so seldom seen, each encounter adds to limited
          scientific knowledge. They are not considered of major conservation concern, though
          their deep-sea world is hard to study. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "How big does an oarfish get?",
          answer:
            "The oarfish is the longest bony fish in the world, reaching around 8 metres and reportedly longer in some accounts. Its body is extremely slender and ribbon-like, so even a very long oarfish is not especially heavy — but its sheer length, topped by a red crest and fin, makes it look like a sea serpent.",
        },
        {
          question: "Are oarfish dangerous sea monsters?",
          answer:
            "No. Despite inspiring 'sea serpent' legends with their long, snaking bodies, oarfish are gentle, slow deep-sea fish that feed on tiny prey like krill and small fish. They have small mouths, no real teeth, and pose no threat to humans — the monster reputation is pure myth.",
        },
        {
          question: "Do oarfish really predict earthquakes?",
          answer:
            "There's a popular belief, especially in Japanese folklore, that oarfish appearing near shore foretell earthquakes, but scientific studies have found no reliable link between oarfish strandings and seismic events. The rare appearances are better explained by ocean currents, weather, and the fish being sick or dying, rather than any earthquake warning.",
        },
        {
          question: "Why are oarfish so rarely seen?",
          answer:
            "They live in the open ocean at considerable depth, far from where people usually observe marine life, and they don't form fisheries. As a result, most oarfish are known only from individuals that wash ashore or are caught on rare camera footage, which is why so much about their lives remains a mystery.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Regalecus glesne" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Claim to fame", value: "Longest bony fish in the world (~8 m+)" },
        { label: "Body", value: "Ribbon-like; silvery; long red dorsal fin" },
        { label: "Diet", value: "Tiny prey (krill, small fish, squid)" },
        { label: "Habitat", value: "Deep open ocean worldwide" },
        { label: "Legends", value: "Likely source of 'sea serpent' tales" },
        { label: "Earthquake myth", value: "No reliable scientific link" },
      ]}
      relatedLinks={[
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "Another strange deep-sea fish" },
        { label: "Giant Squid Profile", href: "/animals/giant-squid", description: "Another deep-ocean giant of legend" },
        { label: "Coelacanth Profile", href: "/animals/coelacanth", description: "A rarely seen 'living fossil' fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Deep-sea habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
