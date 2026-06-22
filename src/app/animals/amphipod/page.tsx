import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/amphipod";
const TITLE = "Amphipod — Profile, the Tiny Sideways Shrimp That Feeds the Seas";
const DESC =
  "Explore amphipods (order Amphipoda): small, sideways-flattened crustaceans — sandhoppers, scuds, and deep-sea giants — that are abundant recyclers and a vital food source in water worldwide.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("amphipod"),
});

export default function AmphipodPage() {
  return (
    <AnimalProfileLayout
      commonName="Amphipod"
      scientificName="order Amphipoda"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Crustacean", "Invertebrate", "Food web"]}
      image={getAnimalImage("amphipod") ?? undefined}
      galleryImages={getAnimalGalleryImages("amphipod")}
      sources={ANIMAL_SOURCES.amphipod}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Amphipods (order Amphipoda) are small crustaceans — typically just a few millimetres long —
            with bodies that are flattened from side to side, giving them a curved, shrimp-like shape and
            a habit of lying or hopping on their sides. They are enormously diverse and abundant: the
            sandhoppers (beach fleas) that jump in seaweed on the shore, the &ldquo;scuds&rdquo; that
            swarm in streams and ponds, the clinging skeleton shrimps of the reef, and strange deep-sea
            and cave species are all amphipods.
          </p>
          <p>
            Though individually tiny, amphipods are everywhere in water and damp places, and in sheer
            numbers they are one of the most important groups in aquatic food webs — recycling dead
            material and feeding a huge range of fish, birds, and other animals.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;amphipod&rdquo; covers a vast order; details here describe the
            group broadly (the photos show a freshwater example). Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Amphipods are found in water and moist habitats around the world — in the sea from the
          shoreline to the deepest ocean trenches, in fresh waters such as streams, lakes, and
          groundwater, and even in damp places on land (the terrestrial sandhoppers). They are
          especially abundant among seaweed, sediment, leaf litter, and on the seabed, where many burrow,
          cling, or scavenge.
        </p>
      }
      diet={
        <p>
          Most amphipods are detritivores and scavengers, feeding on decaying plant and animal matter,
          algae, and organic debris, while some graze, filter particles, or prey on smaller animals. By
          breaking down dead material — including, in the deep sea, falling carcasses, which deep-sea
          amphipods swarm in huge numbers — they are key recyclers that return nutrients to aquatic
          ecosystems.
        </p>
      }
      behavior={
        <p>
          The sideways-flattened body is the amphipod hallmark, and it shapes how they move: shore
          sandhoppers flick their bodies to leap, freshwater scuds scoot and swim on their sides among
          plants, and skeleton shrimps cling to seaweed and hydroids with grasping limbs, swaying like
          tiny mantises. Many amphipods are important to people indirectly, as a major food for fish
          (including farmed and game fish), shorebirds, whales, and countless other animals. Deep-sea
          species include surprising giants — &ldquo;supergiant&rdquo; amphipods that grow far larger than
          their shallow-water relatives. Females typically carry their eggs and young in a brood pouch
          beneath the body until the young are ready to fend for themselves.
        </p>
      }
      humanInteraction={
        <p>
          Amphipods are harmless to people and are ecologically vital, forming a huge part of the diet of
          fish and other wildlife and helping recycle organic matter in seas and fresh waters; some are
          even used as indicators of water quality. A few species can become invasive when carried to new
          regions, and some shore amphipods are familiar as the &ldquo;sand fleas&rdquo; that hop in beach
          wrack. As a group they are extremely common and not of conservation concern, though specialised
          cave and spring species can be vulnerable. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "What is an amphipod?",
          answer:
            "An amphipod is a small crustacean (order Amphipoda) with a body flattened from side to side, giving it a curved, shrimp-like look and a habit of lying or hopping on its side. The group includes beach sandhoppers, freshwater 'scuds,' clinging skeleton shrimps, and deep-sea species — tiny animals that are hugely abundant in water and damp places worldwide.",
        },
        {
          question: "Are amphipods the same as the 'sand fleas' on the beach?",
          answer:
            "Many beach 'sand fleas' or 'sand hoppers' are indeed amphipods — small crustaceans that leap about in piles of washed-up seaweed along the shore. Despite the name, they're not fleas or insects and they don't bite people; they're harmless crustaceans feeding on the decaying seaweed.",
        },
        {
          question: "Why are amphipods important?",
          answer:
            "Because of their abundance and their role in food webs. Amphipods recycle dead plant and animal matter and, in turn, are a major food source for fish, shorebirds, whales, and many other animals in both salt and fresh water. In the deep sea they swarm to consume sinking carcasses. Their sheer numbers make them ecological linchpins despite their tiny size.",
        },
        {
          question: "How big do amphipods get?",
          answer:
            "Most are only a few millimetres long, but size varies enormously across the group. The deep sea is home to 'supergiant' amphipods that dwarf their shallow-water relatives, reaching many times the typical size. Still, the vast majority of amphipods are small, sideways-flattened animals you'd need to look closely to see.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Amphipoda (amphipods)" },
        { label: "Type", value: "Crustacean (related to crabs, shrimp)" },
        { label: "Body", value: "Flattened side-to-side; shrimp-like" },
        { label: "Includes", value: "Sandhoppers, scuds, skeleton shrimps" },
        { label: "Size", value: "Usually a few mm (deep-sea 'supergiants' big)" },
        { label: "Diet", value: "Mostly detritivores & scavengers" },
        { label: "Role", value: "Key food source & recyclers in water" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Krill Profile", href: "/animals/krill", description: "Another tiny, vital crustacean of the seas" },
        { label: "Shrimp Profile", href: "/animals/shrimp", description: "A larger crustacean relative" },
        { label: "Woodlouse Profile", href: "/animals/woodlouse", description: "A related crustacean (an isopod) on land" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "From shore to deep-sea trenches" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
