import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/batfish";
const TITLE = "Batfish (Spadefish) — Profile, the Tall, Disc-Shaped Reef Drifters";
const DESC =
  "Explore reef batfish (genus Platax): tall, flat, disc-shaped reef fish whose flowing-finned juveniles mimic leaves and flatworms — not to be confused with the deep-sea walking batfish.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("batfish"),
});

export default function BatfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Batfish (Spadefish)"
      scientificName="genus Platax"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coral reef", "Marine"]}
      image={getAnimalImage("batfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("batfish")}
      sources={ANIMAL_SOURCES.batfish}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Reef batfish (genus <em>Platax</em>), also called spadefish, are tall, strongly flattened,
            disc-shaped fish of tropical reefs in the Indian and Pacific Oceans. Adults have a rounded,
            silvery body with high, sweeping dorsal and anal fins, often cruising in midwater over reefs
            and wrecks, sometimes in shoals. Their juveniles look completely different — and that
            transformation is one of the most charming things about them.
          </p>
          <p>
            Young batfish have enormously elongated, flowing fins and dark colours, and they mimic
            things that predators leave alone: drifting dead leaves, or even toxic flatworms, drifting
            and wobbling to complete the disguise. As they grow, the long fins shrink and the fish takes
            on its tall, disc-like adult shape.
          </p>
          <p>
            <strong>Note:</strong> these are the reef batfish (spadefish, family Ephippidae) — not the
            unrelated deep-sea &ldquo;walking&rdquo; batfish (Ogcocephalidae). &ldquo;Batfish&rdquo;
            covers several Platax species; details here describe the group broadly. Verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Reef batfish live in warm waters of the Indo-Pacific, on and around coral reefs, rocky reefs,
          wrecks, lagoons, and drop-offs, generally in fairly shallow water. Adults often hang in
          midwater near reef structure or shipwrecks, while the leaf-mimicking juveniles tend to shelter
          in calm, sheltered spots such as mangroves, lagoons, and among floating debris.
        </p>
      }
      diet={
        <p>
          Batfish are omnivores, feeding on a mix of algae, small invertebrates, zooplankton, and
          organic matter. Some are useful grazers of algae and have even been studied for their role in
          helping keep reefs from being overgrown by seaweed. Their varied diet and midwater-to-reef
          lifestyle let them exploit a range of food on and above the reef.
        </p>
      }
      behavior={
        <p>
          The standout feature of batfish is their dramatic change from juvenile to adult. A young
          batfish has greatly extended, flowing fins and a dark, drifting form that imitates a dead leaf
          floating in the water — or, in some species, mimics the appearance and wobbling movement of a
          toxic flatworm — both excellent ways to be ignored by predators. As the fish matures, the long
          fins become proportionally shorter and it develops the tall, round, silvery adult shape, often
          becoming a curious, confident reef cruiser that may approach divers. Adults are frequently seen
          singly, in pairs, or in shoals around reefs and wrecks.
        </p>
      }
      humanInteraction={
        <p>
          Reef batfish are popular with divers for their curious, approachable nature and striking shape,
          and they appear in the aquarium trade (where their large adult size and changing form should be
          considered). Some are valued ecologically as algae-grazers that can help maintain reef health.
          They depend on healthy reefs, so reef degradation is the main concern, while many species remain
          reasonably common. Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "Are these batfish the same as the 'walking' batfish?",
          answer:
            "No — they're completely different fish that share a name. The reef batfish here (genus Platax, also called spadefish) are tall, disc-shaped reef fish. The deep-sea 'walking' batfish (family Ogcocephalidae) are flattened, bottom-dwelling anglerfish relatives that prop themselves on fin 'legs.' Same word, unrelated groups — this profile is about the reef spadefish.",
        },
        {
          question: "Why do baby batfish look so different from adults?",
          answer:
            "Because the juveniles mimic things predators avoid. Young batfish have long, flowing fins and dark colours, and they drift to imitate a dead leaf floating in the water — or, in some species, a toxic flatworm — so predators leave them alone. As they grow, the elongated fins shrink and the fish develops its tall, round, silvery adult shape.",
        },
        {
          question: "What do reef batfish eat?",
          answer:
            "They're omnivores, taking a mix of algae, small invertebrates, zooplankton, and organic matter. Some are notable algae-grazers, and researchers have even highlighted their potential role in helping keep reefs from being smothered by seaweed — a handy ecological service.",
        },
        {
          question: "Are batfish dangerous or shy?",
          answer:
            "Neither, really. Reef batfish are harmless to people and often quite the opposite of shy — adults can be curious and confident, sometimes approaching divers closely. The leaf-mimicking juveniles, by contrast, are secretive, drifting quietly in sheltered spots to keep up their disguise.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Platax (reef batfish / spadefish)" },
        { label: "Family", value: "Ephippidae (NOT deep-sea walking batfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Adult shape", value: "Tall, flat, silvery disc with high fins" },
        { label: "Juvenile", value: "Long flowing fins; mimics leaves/flatworms" },
        { label: "Diet", value: "Omnivore (algae, invertebrates, plankton)" },
        { label: "Habitat", value: "Indo-Pacific reefs, lagoons & wrecks" },
        { label: "To humans", value: "Harmless; often curious" },
      ]}
      relatedLinks={[
        { label: "Butterflyfish Profile", href: "/animals/butterflyfish", description: "Another tall, disc-shaped reef fish" },
        { label: "Angelfish Profile", href: "/animals/angelfish", description: "Another flat-bodied reef fish" },
        { label: "Frogfish Profile", href: "/animals/frogfish", description: "A true anglerfish (the 'other' batfish kin)" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
