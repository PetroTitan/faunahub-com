import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/goby";
const TITLE = "Goby — Profile, the Tiny Fish with a Suction-Cup Fin & Big Partnerships";
const DESC =
  "Explore gobies (family Gobiidae): one of the largest fish families — small bottom-dwellers with fused pelvic fins forming a suction disc, famous for partnerships like the goby and shrimp.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("goby"),
});

export default function GobyPage() {
  return (
    <AnimalProfileLayout
      commonName="Goby"
      scientificName="family Gobiidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine", "Bottom-dweller"]}
      image={getAnimalImage("goby") ?? undefined}
      galleryImages={getAnimalGalleryImages("goby")}
      sources={ANIMAL_SOURCES.goby}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Gobies (family Gobiidae) are small, mostly bottom-dwelling fish that form one of the
            largest families of vertebrates on Earth, with well over a thousand species. Most are
            tiny — many just a few centimetres long, and the family includes some of the smallest
            fish (and smallest vertebrates) known. Their signature feature is hidden underneath:
            in most gobies the two pelvic fins are fused into a little cup or disc that works as a
            suction pad, letting the fish cling to rocks, coral, and other surfaces in moving water.
          </p>
          <p>
            Gobies live in seas, estuaries, and fresh water around the world, and many are famous
            for remarkable partnerships — none more so than the alliance between certain gobies and
            burrowing shrimp.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;goby&rdquo; covers a huge family; details here describe
            the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Gobies are found worldwide, mostly in shallow waters: coral and rocky reefs, seagrass
          beds, tide pools, sandy and muddy bottoms, estuaries, and many in fresh water such as
          rivers and streams. They are typically associated with the bottom and with shelter — rocks,
          burrows, crevices, and coral — where their suction disc and small size let them hold
          position and hide.
        </p>
      }
      diet={
        <p>
          Gobies have varied diets depending on the species. Many feed on small invertebrates such
          as tiny crustaceans, worms, and insect larvae, while others graze on algae, sift detritus,
          or pick parasites and dead skin from other fish (cleaner gobies). Their small size suits
          them to a diet of small prey gathered from the bottom and the water around their shelters.
        </p>
      }
      behavior={
        <p>
          Gobies are best known for their partnerships and their suction-disc lifestyle. In one
          famous mutualism, a goby shares a burrow dug and maintained by a nearly blind pistol
          shrimp: the sharp-eyed goby keeps watch at the entrance and signals danger with a flick of
          its tail, while the shrimp provides the shelter — a classic example of two very different
          animals helping each other. Cleaner gobies set up &ldquo;cleaning stations&rdquo; where
          larger fish queue to have parasites removed. Many gobies are territorial around their
          shelters, and various species show parental care of eggs. The fused pelvic-fin disc lets
          them perch and cling rather than swim constantly, suiting life on the bottom.
        </p>
      }
      humanInteraction={
        <p>
          Gobies are ecologically important as prey, cleaners, and members of reef and bottom
          communities, and many small, colourful species are popular in the marine-aquarium hobby.
          A few introduced gobies (such as the round goby in some regions) have become invasive
          outside their native range, so non-native fish should never be released. Most gobies are
          common, though some restricted-range freshwater species are of conservation concern.
          Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "What is special about a goby's fins?",
          answer:
            "In most gobies, the two pelvic fins are fused together into a small cup or disc on the underside that works like a suction pad. This lets the goby cling to rocks, coral, and other surfaces — handy for holding position in currents, perching on the bottom, and even, in some species, climbing wet surfaces. It's one of the family's defining features.",
        },
        {
          question: "Is it true that gobies live with shrimp?",
          answer:
            "Yes — it's one of the ocean's classic partnerships. Certain gobies share a burrow that a nearly blind pistol shrimp digs and maintains. The keen-eyed goby acts as a lookout at the entrance, warning the shrimp of danger with a flick of its tail, while the shrimp provides a safe home. Both animals benefit from the alliance.",
        },
        {
          question: "How small are gobies?",
          answer:
            "Most are small — many just a few centimetres long — and the family includes some of the tiniest fish (and tiniest vertebrates) ever recorded, only about a centimetre in length. Their small size suits a life of hiding among rocks, coral, and burrows, and feeding on small prey.",
        },
        {
          question: "Where do gobies live?",
          answer:
            "Just about everywhere shallow and watery: coral and rocky reefs, seagrass, tide pools, sandy and muddy bottoms, estuaries, and fresh waters like rivers and streams, all around the world. Most stay close to the bottom and to shelter, where their small size and suction disc help them cling on and hide.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Gobiidae (gobies)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Size", value: "Mostly tiny (some are the smallest fish)" },
        { label: "Signature trait", value: "Fused pelvic fins form a suction disc" },
        { label: "Famous for", value: "Goby–pistol shrimp partnership; cleaner gobies" },
        { label: "Diet", value: "Varied (small invertebrates, algae, parasites)" },
        { label: "Habitat", value: "Reefs, bottoms, estuaries & fresh water worldwide" },
        { label: "Diversity", value: "One of the largest vertebrate families" },
      ]}
      relatedLinks={[
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another reef fish famous for partnership" },
        { label: "Mudskipper Profile", href: "/animals/mudskipper", description: "An amphibious relative of gobies" },
        { label: "Damselfish Profile", href: "/animals/damselfish", description: "Another small reef fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef & bottom habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
