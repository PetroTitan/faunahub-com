import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mantis-shrimp";
const TITLE = "Mantis Shrimp — Profile, Super-Punch, Eyes & Behavior";
const DESC =
  "Explore mantis shrimp (order Stomatopoda): dazzlingly coloured marine crustaceans with one of the fastest, most powerful strikes in nature and possibly the most complex eyes of any animal.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("mantis-shrimp"),
});

export default function MantisShrimpPage() {
  return (
    <AnimalProfileLayout
      commonName="Mantis Shrimp"
      scientificName="Odontodactylus scyllarus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Crustacean", "Reef", "Predator"]}
      image={getAnimalImage("mantis-shrimp") ?? undefined}
      galleryImages={getAnimalGalleryImages("mantis-shrimp")}
      sources={ANIMAL_SOURCES["mantis-shrimp"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Mantis shrimp (order Stomatopoda) are among the most extraordinary animals in the
            sea — colourful marine crustaceans that are not true shrimp, but a distinct ancient
            group of predators. The peacock mantis shrimp
            (<em>Odontodactylus scyllarus</em>), shown here, is a rainbow-hued reef species and
            a famous example. Two features make mantis shrimp legendary: an astonishingly fast
            and powerful strike, and a pair of eyes thought to be among the most complex of any
            animal.
          </p>
          <p>
            Depending on the species, the striking appendages are either spears for impaling
            soft prey (&ldquo;spearers&rdquo;) or club-like hammers for smashing hard shells
            (&ldquo;smashers&rdquo;) — and the smashers punch with truly remarkable force.
          </p>
          <p>
            <strong>Note:</strong> there are many mantis shrimp species; details here use the
            peacock mantis shrimp as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Mantis shrimp live in warm and temperate seas around the world, mostly in shallow
          tropical and subtropical waters on coral reefs, rubble, and seabeds. Many live in
          burrows or crevices, which they defend and use as a base from which to ambush or
          chase prey. The peacock mantis shrimp is an Indo-Pacific reef-dweller.
        </p>
      }
      diet={
        <p>
          Mantis shrimp are carnivores. &ldquo;Smashers&rdquo; like the peacock mantis shrimp
          use their hammer-like clubs to crack open hard-shelled prey — crabs, snails, clams,
          and other molluscs and crustaceans — while &ldquo;spearers&rdquo; impale soft prey
          such as fish and worms with spiny, harpoon-like appendages. Their powerful weapons let
          them tackle prey that many predators cannot.
        </p>
      }
      behavior={
        <p>
          The mantis shrimp&apos;s strike is one of the fastest movements in the animal
          kingdom: a smasher&apos;s club accelerates so rapidly that it can shatter shells, and
          the strike is so fast it briefly boils the surrounding water, creating tiny collapsing
          bubbles (cavitation) that add a second, shockwave-like blow. Equally remarkable are
          the eyes: mounted on mobile stalks, they have many types of colour receptors and can
          detect polarised light, giving mantis shrimp a way of seeing the world quite unlike
          our own. Many species are solitary and fiercely territorial.
        </p>
      }
      humanInteraction={
        <p>
          Mantis shrimp are admired by divers and aquarists for their colour and behaviour,
          though large ones are handled with care — a smasher can crack aquarium glass and
          deliver a painful blow. They are part of healthy reef ecosystems as predators of
          shelled invertebrates. Most are not of major conservation concern, though reef
          degradation affects them. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "How powerful is a mantis shrimp's strike?",
          answer:
            "Extraordinarily powerful for its size. A 'smasher' mantis shrimp swings its club-like appendage with one of the fastest accelerations known in the animal world — fast enough to crack hard shells and even aquarium glass. The strike is so quick that it briefly vaporises the surrounding water; the resulting collapsing bubbles (cavitation) deliver a second shockwave-like hit.",
        },
        {
          question: "Are mantis shrimp's eyes really special?",
          answer:
            "Yes — they are among the most complex eyes known. Mounted on movable stalks, they contain many types of light receptors (far more than human eyes) and can detect polarised light. Rather than blending colours the way we do, mantis shrimp seem to process colour in an unusual, hardware-based way, giving them a very different view of the world.",
        },
        {
          question: "Is a mantis shrimp a real shrimp?",
          answer:
            "No. Despite the name, mantis shrimp are not true shrimp. They belong to their own ancient group of crustaceans, the stomatopods, separate from the prawns and shrimp people usually picture. The 'mantis' part of the name comes from their folded, praying-mantis-like raptorial appendages.",
        },
        {
          question: "What do mantis shrimp eat?",
          answer:
            "They are carnivores. 'Smashers' crack open hard-shelled prey such as crabs, snails, and clams with their clubs, while 'spearers' impale soft-bodied prey like fish and worms with harpoon-like appendages. Their powerful weapons let them take prey that would be too tough or too fast for many other predators.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Stomatopoda" },
        { label: "Reference species", value: "Odontodactylus scyllarus (peacock mantis shrimp)" },
        { label: "Type", value: "Crustacean (not a true shrimp)" },
        { label: "Weapon", value: "Smashing clubs or spearing appendages" },
        { label: "Strike", value: "Among the fastest in nature (+ cavitation)" },
        { label: "Eyes", value: "Possibly the most complex of any animal" },
        { label: "Diet", value: "Carnivore (shelled & soft prey)" },
        { label: "Habitat", value: "Warm seas; reefs & burrows" },
      ]}
      relatedLinks={[
        { label: "Shrimp Profile", href: "/animals/shrimp", description: "True shrimp (a different group)" },
        { label: "Crab Profile", href: "/animals/crab", description: "Both prey and fellow crustacean" },
        { label: "Lobster Profile", href: "/animals/lobster", description: "Another large crustacean" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
