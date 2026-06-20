import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/aye-aye";
const TITLE = "Aye-Aye — Profile, Bizarre Finger & Conservation";
const DESC =
  "Explore the aye-aye (Daubentonia madagascariensis): a strange nocturnal lemur of Madagascar that taps wood and fishes out grubs with an elongated middle finger. Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("aye-aye"),
});

export default function AyeAyePage() {
  return (
    <AnimalProfileLayout
      commonName="Aye-Aye"
      scientificName="Daubentonia madagascariensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Madagascar"]}
      image={getAnimalImage("aye-aye") ?? undefined}
      galleryImages={getAnimalGalleryImages("aye-aye")}
      sources={ANIMAL_SOURCES["aye-aye"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The aye-aye (<em>Daubentonia madagascariensis</em>) is one of the strangest
            primates in the world — a nocturnal lemur found only on Madagascar. It has
            coarse dark fur, enormous sensitive ears, continuously growing rodent-like
            front teeth, and, most remarkably, very long, thin fingers, including a
            spindly, almost skeletal middle finger that it uses in an unusual way to find
            food.
          </p>
          <p>
            With this strange combination of features, the aye-aye fills the same role
            that woodpeckers do elsewhere — finding and extracting insect grubs from
            wood — making it a striking example of how evolution can solve the same problem
            in very different ways.
          </p>
          <p>
            <strong>Conservation note:</strong> the aye-aye is Endangered, threatened by
            habitat loss and by killing linked to local superstition. Verify current
            status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          The aye-aye lives only on Madagascar, in a range of forested habitats including
          rainforest, deciduous forest, and even some plantations and degraded areas. It
          is arboreal and nocturnal, building large spherical nests of leaves and twigs in
          the forks of trees where it rests by day.
        </p>
      }
      diet={
        <p>
          Aye-ayes are omnivores. A signature food is wood-boring insect larvae, but they
          also eat seeds, fruit (including coconuts), nectar, and fungi. To find grubs,
          the aye-aye taps rapidly on wood and listens for the hollow sound of tunnels —
          then gnaws a hole and hooks the larva out with its long, thin middle finger.
        </p>
      }
      behavior={
        <p>
          The aye-aye&apos;s feeding method, called percussive foraging, is unique among
          primates: it taps bark, uses its huge ears to detect cavities by echo, bites
          through the wood with ever-growing incisors, and extracts prey with a specialised
          thin finger (which has a ball-and-socket joint for flexibility). Aye-ayes are
          mostly solitary and active at night, ranging widely through the canopy in search
          of food.
        </p>
      }
      humanInteraction={
        <p>
          In parts of Madagascar, the aye-aye is regarded with fear and superstition, and
          is sometimes killed on sight as a supposed bad omen — a serious threat alongside
          the loss of its forest habitat. Conservationists work to protect it and to
          counter the myths. Its odd appearance has also made it a flagship for
          Madagascar&apos;s unique and threatened wildlife. Consult the IUCN Red List for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Is the aye-aye really a primate?",
          answer:
            "Yes — the aye-aye is a primate, specifically a lemur, and so a distant relative of monkeys, apes, and humans. Its rodent-like teeth and strange fingers are specialised adaptations, not signs that it belongs to another group; it is the only living member of its own family.",
        },
        {
          question: "What does the aye-aye use its long finger for?",
          answer:
            "It uses a very thin, elongated middle finger to extract insect grubs from wood. The aye-aye taps on bark and listens with its large ears for the hollow sound of tunnels, gnaws a hole with its teeth, then hooks out the larva with that special finger — a feeding method called percussive foraging.",
        },
        {
          question: "Why is the aye-aye endangered?",
          answer:
            "Two main reasons: the loss and fragmentation of Madagascar's forests, and direct killing because of local superstitions that treat the aye-aye as a bad omen. Together these have made it Endangered. Conservation efforts aim to protect its habitat and dispel the myths; current status should be checked against the IUCN Red List.",
        },
        {
          question: "Why does the aye-aye fill a 'woodpecker' role?",
          answer:
            "On Madagascar there are no woodpeckers, and the aye-aye exploits the same food source — grubs hidden in wood — using tapping, sharp teeth, and a probing finger instead of a beak. It's a classic example of convergent evolution, where unrelated animals evolve similar solutions to the same ecological problem.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Daubentonia madagascariensis" },
        { label: "Class", value: "Mammalia (primate / lemur)" },
        { label: "Diet", value: "Omnivore (grubs, fruit, seeds, fungi)" },
        { label: "Signature trait", value: "Thin middle finger; percussive foraging" },
        { label: "Teeth", value: "Ever-growing, rodent-like incisors" },
        { label: "Activity", value: "Nocturnal & mostly solitary" },
        { label: "Range", value: "Madagascar only" },
        { label: "IUCN Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Lemur Profile", href: "/animals/lemur", description: "Its better-known Madagascan relatives" },
        { label: "Sifaka Profile", href: "/animals/sifaka", description: "Another distinctive lemur" },
        { label: "Fossa Profile", href: "/animals/fossa", description: "Madagascar's top predator (and lemur hunter)" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
