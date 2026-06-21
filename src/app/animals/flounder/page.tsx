import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/flounder";
const TITLE = "Flounder — Profile, the Flatfish with Both Eyes on One Side";
const DESC =
  "Explore flounders (flatfish, order Pleuronectiformes): seabed ambush fish that start life symmetrical and then have one eye migrate so both sit on top — masters of camouflage.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("flounder"),
});

export default function FlounderPage() {
  return (
    <AnimalProfileLayout
      commonName="Flounder"
      scientificName="Platichthys flesus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Flatfish", "Camouflage"]}
      image={getAnimalImage("flounder") ?? undefined}
      galleryImages={getAnimalGalleryImages("flounder")}
      sources={ANIMAL_SOURCES.flounder}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Flounders are flatfish (order Pleuronectiformes) — bottom-dwelling fish with one
            of the strangest body plans in the animal kingdom. As an adult, a flounder lies
            flat on the seabed on one side of its body, with both eyes on the upper side and
            a pale, blind underside. The European flounder (<em>Platichthys flesus</em>),
            shown here, is a typical example, with a flat, oval, mottled body that blends into
            sand and mud.
          </p>
          <p>
            The truly remarkable part is how it gets that way: a flounder begins life as an
            ordinary, symmetrical larva with one eye on each side, and as it grows, one eye
            gradually migrates across the head to join the other — a dramatic transformation
            few other animals undergo.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;flounder&rdquo; covers several flatfish species;
            details here use the European flounder as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Flounders live on soft seabeds — sand, mud, and gravel — in coastal seas,
          estuaries, and bays, and several species (including the European flounder) move
          into brackish and even fresh water. They favour shallow waters where they can lie
          camouflaged on the bottom, and they are found across many temperate and tropical
          coasts depending on the species.
        </p>
      }
      diet={
        <p>
          Flounders are carnivores that ambush prey from the seabed. They eat worms,
          crustaceans, molluscs, and small fish, lying hidden and snapping up prey that comes
          within reach, or rooting through the sediment for buried invertebrates. Their
          upturned eyes let them watch for both food and danger while the rest of the body
          stays concealed.
        </p>
      }
      behavior={
        <p>
          Camouflage is central to a flounder&apos;s life: it can change the colour and
          pattern of its upper side to match the seabed and often flicks sand over its body to
          hide further, leaving just the eyes exposed. Lying still and concealed, it ambushes
          passing prey and avoids predators. Flounders swim with an undulating, rippling
          motion of the body and fins, gliding low over the bottom. The eye-migration that
          reshapes the larva into a flatfish is one of the most striking transformations in
          the fish world.
        </p>
      }
      humanInteraction={
        <p>
          Flounders and other flatfish are important food fishes caught around the world, and
          their camouflage and unusual anatomy fascinate scientists and divers. Many
          populations support fisheries; some are affected by overfishing and habitat
          degradation, so status varies by species and region. Consult NOAA Fisheries and the
          IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does a flounder have both eyes on one side?",
          answer:
            "It's an adaptation for life lying flat on the seabed. With both eyes on the upper surface, a flounder can watch for prey and predators while the rest of its body stays hidden against the bottom. Remarkably, it isn't born this way — one eye migrates across the head as the young fish develops into its flatfish form.",
        },
        {
          question: "How does a flounder change shape as it grows?",
          answer:
            "A flounder starts life as a normal, symmetrical larva that swims upright with one eye on each side. As it matures, it begins to lie on one side, and one eye gradually moves across the top of the head to join the other. The body flattens and the underside becomes pale, completing the transformation into a bottom-dwelling flatfish.",
        },
        {
          question: "How do flounders camouflage themselves?",
          answer:
            "Flounders can change the colour and pattern of their upper side to match the seabed, and they often flick sand over their bodies so only the eyes show. Lying motionless and concealed, they blend almost perfectly into sand or mud, which helps them ambush prey and hide from predators.",
        },
        {
          question: "What do flounders eat?",
          answer:
            "Flounders are carnivores that ambush prey from the bottom, eating worms, crustaceans, molluscs, and small fish. They lie hidden and snap up prey that comes close, or root through the sediment for buried invertebrates, using their upward-facing eyes to spot food.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Platichthys flesus (European flounder)" },
        { label: "Group", value: "Flatfish (order Pleuronectiformes)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Signature trait", value: "Both eyes on one side; lies flat" },
        { label: "Development", value: "One eye migrates as it grows" },
        { label: "Diet", value: "Carnivore (seabed ambush)" },
        { label: "Habitat", value: "Soft seabeds; some enter fresh water" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Stonefish Profile", href: "/animals/stonefish", description: "Another camouflaged seabed fish" },
        { label: "Ray Profile", href: "/animals/ray", description: "Another flattened bottom-dweller" },
        { label: "Cod Profile", href: "/animals/cod", description: "Another important food fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Seabed habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
