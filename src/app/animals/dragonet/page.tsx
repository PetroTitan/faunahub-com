import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dragonet";
const TITLE = "Dragonet — Profile, the Tiny Reef Fish with 'Living Colour' (the Mandarinfish)";
const DESC =
  "Explore dragonets (family Callionymidae): small, bottom-dwelling reef fish — including the dazzling mandarinfish, one of very few animals whose blue comes from true blue pigment.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("dragonet"),
});

export default function DragonetPage() {
  return (
    <AnimalProfileLayout
      commonName="Dragonet"
      scientificName="family Callionymidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coral reef", "Marine"]}
      image={getAnimalImage("dragonet") ?? undefined}
      galleryImages={getAnimalGalleryImages("dragonet")}
      sources={ANIMAL_SOURCES.dragonet}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Dragonets (family Callionymidae) are small, bottom-dwelling fish of mostly tropical seas, with
            flattened heads, eyes set high, and fins they use to perch and hop along the seabed. Most are
            cryptic and easily overlooked, but the family includes one of the most spectacular fish in the
            ocean: the mandarinfish or mandarin dragonet (<em>Synchiropus splendidus</em>), shown here,
            swirled in electric blue, orange, and green like a living painting.
          </p>
          <p>
            The mandarinfish is famous for a rare biological fact: in most blue animals the colour is a trick
            of light (structural colour), but the mandarinfish is one of the very few known animals whose
            vivid blue comes from a true blue pigment in its skin. Many dragonets also produce a bitter,
            smelly mucus that deters predators instead of relying on scales.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;dragonet&rdquo; covers a family of species; details here use the
            mandarinfish as a striking reference. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Dragonets live in warm and temperate seas, mostly on or near the bottom — coral reefs, rubble,
          sandy and muddy flats, and seagrass — generally in shallow coastal waters, with the greatest
          diversity in the Indo-Pacific. The mandarinfish favours sheltered lagoons and inshore reefs, where
          it lives low among coral rubble and branching corals.
        </p>
      }
      diet={
        <p>
          Dragonets are carnivores that feed on tiny bottom-living invertebrates — small crustaceans
          (such as copepods and amphipods), worms, mollusc and fish eggs, and other minute prey — which they
          pick steadily from the seabed and reef surfaces. Their slow, methodical, almost constant grazing of
          small prey suits their bottom-hugging lifestyle.
        </p>
      }
      behavior={
        <p>
          Dragonets are mostly slow, secretive bottom-dwellers that hop and perch on the seabed using their
          fins, often well camouflaged — apart from the gaudy mandarinfish, whose bright colours instead
          serve as a warning, backed by its distasteful, smelly skin mucus. The mandarinfish is especially
          known for its courtship: at dusk, pairs rise together a little way off the reef in a slow, ascending
          &ldquo;dance,&rdquo; release eggs and sperm into the water, then dart back down — a brief, nightly
          spectacle prized by divers and photographers. Lacking ordinary scales, many dragonets rely on their
          protective mucus coat for defence.
        </p>
      }
      humanInteraction={
        <p>
          Dragonets — above all the mandarinfish — are popular in the marine-aquarium trade and a favourite
          subject for underwater photographers, though the mandarinfish&apos;s specialised diet of tiny live
          prey makes it difficult to keep, so wild-caught individuals often fare poorly and responsible
          sourcing matters. They are harmless to people. As reef and coastal fish they depend on healthy
          habitats, so reef degradation and collection pressure are the main concerns; most species remain
          reasonably common. Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "What is the mandarinfish, and why is it special?",
          answer:
            "The mandarinfish (mandarin dragonet) is a small, dazzlingly patterned dragonet swirled in blue, orange, and green. It's special not just for its beauty but for a rare fact: it's one of the very few animals whose blue colour comes from true blue pigment in the skin, rather than from the light-scattering 'structural colour' that produces blue in most animals.",
        },
        {
          question: "How do dragonets defend themselves without normal scales?",
          answer:
            "Many dragonets, including the mandarinfish, lack ordinary scales and instead are covered in a thick, often bitter and foul-smelling mucus that deters predators. In the brightly coloured mandarinfish, vivid colours act as a warning of this distastefulness — a chemical-and-colour defence rather than armour.",
        },
        {
          question: "What is the mandarinfish's famous 'dance'?",
          answer:
            "It's their courtship. At dusk, mandarinfish pairs rise together a short way above the reef in a slow, ascending movement, release their eggs and sperm into the water at the top, then quickly descend. This brief nightly spawning 'dance' is a celebrated sight for divers, who time visits to reefs to witness it.",
        },
        {
          question: "Do dragonets make good aquarium fish?",
          answer:
            "They're popular but challenging. The mandarinfish in particular needs a steady supply of tiny live prey (like copepods), which is hard to provide, so wild-caught individuals often struggle in tanks. This makes responsible, sustainable sourcing important, and many experts consider them suitable only for well-established aquariums that can feed them properly.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Callionymidae (dragonets)" },
        { label: "Star species", value: "Synchiropus splendidus (mandarinfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Rare trait", value: "Mandarinfish blue = true blue pigment" },
        { label: "Defence", value: "Bitter, smelly mucus (no normal scales)" },
        { label: "Diet", value: "Tiny bottom invertebrates" },
        { label: "Courtship", value: "Mandarinfish's dusk spawning 'dance'" },
        { label: "Habitat", value: "Seabeds & reefs (esp. Indo-Pacific)" },
      ]}
      relatedLinks={[
        { label: "Goby Profile", href: "/animals/goby", description: "Another small bottom-dwelling reef fish" },
        { label: "Blenny Profile", href: "/animals/blenny", description: "Another characterful reef-bottom fish" },
        { label: "Seahorse Profile", href: "/animals/seahorse", description: "Another small, ornate reef fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
