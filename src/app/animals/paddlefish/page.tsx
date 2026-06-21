import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/paddlefish";
const TITLE = "Paddlefish — Profile, the Plankton-Sensing River Giant";
const DESC =
  "Explore paddlefish (family Polyodontidae): ancient river fish with a long sensory paddle snout that filter plankton from the water — using the American paddlefish. Conservation concern.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("paddlefish"),
});

export default function PaddlefishPage() {
  return (
    <AnimalProfileLayout
      commonName="Paddlefish"
      scientificName="Polyodon spathula"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Living fossil"]}
      image={getAnimalImage("paddlefish") ?? undefined}
      galleryImages={getAnimalGalleryImages("paddlefish")}
      sources={ANIMAL_SOURCES.paddlefish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Paddlefish (family Polyodontidae) are large, ancient freshwater fish instantly
            recognised by the long, flat, paddle-shaped snout (the rostrum) that extends from
            the front of the head. The American paddlefish (<em>Polyodon spathula</em>), shown
            here, is a smooth, scaleless, shark-like fish of the big rivers of central North
            America. Like sturgeons — their close relatives — paddlefish are survivors of a
            very old lineage, true &ldquo;living fossils.&rdquo;
          </p>
          <p>
            Despite their size, paddlefish are gentle giants: they feed not by hunting but by
            filtering tiny plankton from the water, swimming with the mouth open like a living
            net, and they use the remarkable paddle to sense their prey.
          </p>
          <p>
            <strong>Conservation note:</strong> the American paddlefish has declined from
            dams, habitat loss, and overfishing for its roe (caviar), and a second species
            (the Chinese paddlefish) is now considered extinct. Verify current status at
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          The American paddlefish lives in the large, slow rivers and connected lakes and
          reservoirs of the Mississippi River basin and other central North American waters.
          It needs big, free-flowing rivers with the open water it filter-feeds in and the
          gravel-bar spawning sites it migrates to — needs that dams and river changes have
          disrupted.
        </p>
      }
      diet={
        <p>
          Paddlefish are filter feeders that eat zooplankton — tiny drifting animals such as
          water fleas and copepods. A feeding paddlefish swims with its huge mouth gaping,
          straining plankton from the water with comb-like gill rakers, much like some sharks
          and whales do. They do not hunt or bite prey; their whole feeding apparatus is built
          for sieving the smallest food.
        </p>
      }
      behavior={
        <p>
          The paddle is far more than decoration: it is covered in thousands of sensory
          receptors that detect the weak electric fields given off by swarms of tiny plankton,
          helping the paddlefish locate dense food in murky water where it cannot see. The
          fish then opens its mouth to filter the plankton as it swims through. Paddlefish are
          long-lived and slow to mature, and they undertake upstream migrations to spawn over
          gravel bars when river conditions are right — which is why barriers to migration hit
          them so hard.
        </p>
      }
      humanInteraction={
        <p>
          Paddlefish have long been valued by people — for food and especially for their roe,
          sold as caviar — and this, together with the damming and alteration of their rivers,
          has driven serious declines. The American paddlefish is now managed and protected in
          much of its range, while the Chinese paddlefish was declared extinct, a stark warning
          about river-fish conservation. Restoring river connectivity is key. Consult
          authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "What is the paddlefish's 'paddle' for?",
          answer:
            "The long, flat snout (rostrum) is a sensory organ. It's covered with thousands of receptors that detect the faint electric fields produced by swarms of tiny plankton, letting the paddlefish find dense patches of food in murky water where eyesight is useless. It isn't used to dig or hit prey — it's essentially an antenna for locating plankton.",
        },
        {
          question: "What do paddlefish eat?",
          answer:
            "Tiny plankton. Paddlefish are filter feeders: they swim with their large mouths open and strain zooplankton (like water fleas and copepods) from the water using comb-like gill rakers, much as some sharks and whales do. They don't hunt or bite — they sieve the smallest food from the river.",
        },
        {
          question: "Are paddlefish related to sturgeons?",
          answer:
            "Yes, closely. Paddlefish and sturgeons belong to the same ancient group of fish, sharing features like a mostly cartilage skeleton and a 'living fossil' heritage stretching back to the age of the dinosaurs. Paddlefish are essentially the filter-feeding, paddle-snouted cousins of the bottom-feeding sturgeons.",
        },
        {
          question: "Why are paddlefish threatened?",
          answer:
            "Mainly because of dams, river alteration, and overfishing for their roe (caviar). They need big, connected rivers and migrate to spawn, so barriers and habitat loss hit them hard, and slow maturity makes recovery difficult. The American paddlefish is now managed and protected, and the related Chinese paddlefish has been declared extinct. Current status should be checked against authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Polyodontidae" },
        { label: "Reference species", value: "Polyodon spathula (American paddlefish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Relatives", value: "Sturgeons ('living fossils')" },
        { label: "Signature trait", value: "Long sensory paddle snout" },
        { label: "Diet", value: "Filter feeder (plankton)" },
        { label: "Habitat", value: "Large North American rivers" },
        { label: "Status", value: "Declined/protected; Chinese sp. extinct" },
      ]}
      relatedLinks={[
        { label: "Sturgeon Profile", href: "/animals/sturgeon", description: "Its close 'living fossil' relative" },
        { label: "Gar Profile", href: "/animals/gar", description: "Another ancient North American river fish" },
        { label: "Whale Shark relatives — Shark Profile", href: "/animals/shark", description: "Other filter-feeding fish" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
