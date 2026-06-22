import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/blenny";
const TITLE = "Blenny — Profile, the Big-Eyed Little Fish That Peeks from Reef Holes";
const DESC =
  "Explore blennies (family Blenniidae): small, characterful reef and tide-pool fish with blunt heads, big eyes, and often feathery 'eyebrows' — including the mimic that copies the cleaner wrasse.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("blenny"),
});

export default function BlennyPage() {
  return (
    <AnimalProfileLayout
      commonName="Blenny"
      scientificName="family Blenniidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coral reef", "Marine"]}
      image={getAnimalImage("blenny") ?? undefined}
      galleryImages={getAnimalGalleryImages("blenny")}
      sources={ANIMAL_SOURCES.blenny}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Blennies (family Blenniidae, the combtooth blennies) are small, charming fish of reefs,
            rocky shores, and tide pools, full of personality. Most are only a few centimetres long,
            with blunt, rounded heads, large high-set eyes, and a tapering, scaleless body, and many
            sport feathery skin flaps (cirri) above the eyes like little eyebrows. They are typically
            bottom-dwellers that perch on rocks and coral or peer out from holes, often with just the
            head poking out.
          </p>
          <p>
            Blennies are a large and varied group, and some are remarkable: the sabre-toothed
            &ldquo;fang blennies&rdquo; and the famous mimic blenny that copies the cleaner wrasse to
            sneak bites from bigger fish.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;blenny&rdquo; covers a large family (and the name is loosely
            used for other small elongate fish too); details here describe the combtooth blennies
            broadly. Treat general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Blennies live in shallow seas around the world — coral reefs, rocky reefs, seagrass beds,
          and intertidal rock pools — with the greatest variety in warm tropical waters. They keep
          close to the bottom and to shelter, occupying small holes, empty worm and barnacle shells,
          and crevices into which they can dart, and a few even venture briefly out of water on wet
          rocks.
        </p>
      }
      diet={
        <p>
          Blennies have varied diets: many are grazers that nibble algae and tiny organisms from rocks
          and coral with their comb-like rows of teeth, while others feed on small invertebrates or
          plankton. The fang blennies are different again — armed with venomous fangs and, in some, a
          taste for biting chunks of skin, scales, or mucus from other fish.
        </p>
      }
      behavior={
        <p>
          Blennies are entertaining to watch: alert and inquisitive, they perch on the bottom, dart
          between shelters, and often back into a hole to peek out with just their big-eyed face
          showing. Many are territorial, and males of various species guard nests of eggs laid in a
          crevice or shell. The family includes some famous tricksters — fang blennies have grooved,
          venomous fangs, and the sabre-toothed mimic blenny imitates the colours and &ldquo;dance&rdquo;
          of the cleaner wrasse so it can approach larger fish expecting to be cleaned, then dash in to
          bite off a mouthful of skin or fin before fleeing. Tide-pool blennies are remarkably hardy,
          tolerating the heat, low oxygen, and exposure of shoreline pools.
        </p>
      }
      humanInteraction={
        <p>
          Blennies are favourites of divers, snorkellers, and tide-pool explorers for their bold,
          characterful behaviour, and many small species are popular and useful algae-grazers in marine
          aquariums. They are harmless to people (the fang blennies&apos; venom is used defensively and is
          not dangerous to humans). As reef and shore fish they depend on healthy coastal habitats, so
          reef degradation and pollution are the main concerns, while most species remain common.
          Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "What does a blenny look like?",
          answer:
            "Most blennies are small fish, just a few centimetres long, with a blunt, rounded head, large high-set eyes, and a smooth, scaleless, tapering body. Many have feathery skin flaps (cirri) over the eyes that look like little eyebrows. They're usually seen perched on the bottom or peeking out of a hole with just their face showing.",
        },
        {
          question: "Is it true some blennies mimic cleaner fish?",
          answer:
            "Yes — the sabre-toothed mimic blenny is famous for it. It copies the colours and swimming 'dance' of the cleaner wrasse, a fish that bigger fish let approach to remove parasites. Fooled into expecting a cleaning, a large fish lets the mimic come close — and the blenny dashes in to bite off a mouthful of skin, scales, or fin before darting away. It's a remarkable case of deceptive mimicry.",
        },
        {
          question: "Do blennies bite or sting people?",
          answer:
            "No, blennies are harmless to humans. Some 'fang blennies' do have venomous fangs, but the venom is used to deter predators (and to make biting other fish easier), not against people, and it isn't dangerous to us. Most blennies are peaceful little grazers that are far more likely to hide in a hole than to bother a diver.",
        },
        {
          question: "What do blennies eat?",
          answer:
            "It varies. Many blennies are grazers that nibble algae and tiny organisms off rocks and coral with comb-like teeth; others eat small invertebrates or plankton. The unusual fang blennies feed in part by biting skin, scales, or mucus from other fish. As a family, blennies fill a wide range of small-fish feeding roles on the reef and shore.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Blenniidae (combtooth blennies)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Size", value: "Mostly small (a few cm)" },
        { label: "Look", value: "Blunt head, big eyes, feathery 'eyebrows'" },
        { label: "Diet", value: "Often algae-grazers; some eat invertebrates/skin" },
        { label: "Famous trick", value: "Mimic blenny imitates the cleaner wrasse" },
        { label: "Habitat", value: "Reefs, rocky shores & tide pools" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Goby Profile", href: "/animals/goby", description: "Another small bottom-dwelling reef fish" },
        { label: "Wrasse Profile", href: "/animals/wrasse", description: "Includes the cleaner wrasse blennies mimic" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another small reef fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef & shore habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
