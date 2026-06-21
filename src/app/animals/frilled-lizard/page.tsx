import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/frilled-lizard";
const TITLE = "Frilled Lizard — Profile, the Umbrella Frill & Behavior";
const DESC =
  "Explore the frilled lizard (Chlamydosaurus kingii): an Australian and New Guinean reptile that flares a huge neck frill and runs on two legs to bluff its way out of danger.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("frilled-lizard"),
});

export default function FrilledLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Frilled Lizard"
      scientificName="Chlamydosaurus kingii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Australasia"]}
      image={getAnimalImage("frilled-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("frilled-lizard")}
      sources={ANIMAL_SOURCES["frilled-lizard"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The frilled lizard (<em>Chlamydosaurus kingii</em>), also called the frill-necked
            lizard, is one of the most theatrical reptiles in the world. A fairly large,
            slender tree-dwelling lizard of northern Australia and southern New Guinea, it is
            named for the spectacular ruff of skin folded around its neck. Most of the time
            the frill lies flat against the body, but when the lizard is alarmed it snaps the
            frill open into a wide, startling &ldquo;umbrella&rdquo; around its head.
          </p>
          <p>
            The display is pure bluff: combined with gaping its bright mouth, hissing, and
            sometimes rearing up and dashing away on its hind legs, the frill makes the
            lizard look bigger and more dangerous than it really is.
          </p>
          <p>
            <strong>Note:</strong> details here cover the frilled lizard as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Frilled lizards live in tropical and warm-temperate savanna woodland and dry
          forest across northern Australia and parts of southern New Guinea. They are
          strongly arboreal, spending much of their time clinging to tree trunks, where
          their grey-brown colour blends with the bark, and they are most active during the
          warmer, wetter months.
        </p>
      }
      diet={
        <p>
          Frilled lizards are carnivores, feeding mainly on insects and other invertebrates —
          such as beetles, ants, termites, spiders, and cicadas — along with the occasional
          small vertebrate. They hunt both up in trees and on the ground, watching for prey
          and dashing to seize it.
        </p>
      }
      behavior={
        <p>
          The frill is supported by rods of cartilage connected to the jaw, so opening the
          mouth wide also spreads the frill. A threatened frilled lizard erects this collar,
          gapes to show the pink-to-yellow lining of its mouth, hisses, and may lash its
          tail — and if the bluff fails, it can rear up and sprint away on its hind legs to
          the nearest tree, a striking bipedal run. The frill may also help with
          temperature regulation and in social and courtship displays. Despite the drama,
          frilled lizards are not dangerous to people.
        </p>
      }
      humanInteraction={
        <p>
          The frilled lizard is an icon of northern Australia — it has appeared on currency
          and in popular culture — and is a favourite for its dramatic display. It is
          generally harmless to humans and remains reasonably widespread, though it depends
          on healthy woodland and can be affected by habitat change, fire regimes, and
          introduced predators. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "What is the frilled lizard's frill for?",
          answer:
            "Mainly for bluff and display. The frill is a large fold of skin that normally lies flat but can snap open into a wide collar around the head when the lizard is threatened, making it look much bigger and scarier. It's also used in social and courtship displays and may help with regulating body temperature.",
        },
        {
          question: "Can frilled lizards run on two legs?",
          answer:
            "Yes. When a frilled lizard's threat display fails to deter a predator, it often rears up and sprints away on its hind legs in a comical, upright bipedal run, heading for the nearest tree to climb to safety. This dramatic dash is one of its best-known behaviours.",
        },
        {
          question: "Are frilled lizards dangerous?",
          answer:
            "No — they are harmless to people. The wide frill, gaping mouth, and hissing are all a bluff designed to scare off predators; the lizard has no venom and prefers to flee. Its fearsome-looking display is essentially theatre to make a mostly insect-eating lizard seem more threatening.",
        },
        {
          question: "What do frilled lizards eat?",
          answer:
            "They are carnivores that eat mainly insects and other invertebrates — beetles, ants, termites, spiders, and cicadas, for example — plus the odd small vertebrate. They hunt both in trees and on the ground, relying on camouflage and quick dashes to catch prey.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Chlamydosaurus kingii" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Signature trait", value: "Large neck frill (display bluff)" },
        { label: "Extra trick", value: "Runs away on its hind legs" },
        { label: "Diet", value: "Carnivore (insects & invertebrates)" },
        { label: "Lifestyle", value: "Arboreal (tree-clinging)" },
        { label: "Range", value: "N. Australia & S. New Guinea" },
        { label: "Harmless", value: "Yes (display is bluff)" },
      ]}
      relatedLinks={[
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "Another display-and-camouflage lizard" },
        { label: "Iguana Profile", href: "/animals/iguana", description: "Another large arboreal lizard" },
        { label: "Komodo Dragon Profile", href: "/animals/komodo-dragon", description: "The largest living lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
