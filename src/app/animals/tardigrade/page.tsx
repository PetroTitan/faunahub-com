import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tardigrade";
const TITLE = "Tardigrade (Water Bear) — Profile, Extreme Survival & Biology";
const DESC =
  "Explore tardigrades (phylum Tardigrada): microscopic eight-legged 'water bears' that can survive boiling, freezing, drying out, radiation, and even the vacuum of space by entering a dormant state.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("tardigrade"),
});

export default function TardigradePage() {
  return (
    <AnimalProfileLayout
      commonName="Tardigrade (Water Bear)"
      scientificName="phylum Tardigrada"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Micro-animal", "Extremophile"]}
      image={getAnimalImage("tardigrade") ?? undefined}
      galleryImages={getAnimalGalleryImages("tardigrade")}
      sources={ANIMAL_SOURCES.tardigrade}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Tardigrades — affectionately known as &ldquo;water bears&rdquo; or
            &ldquo;moss piglets&rdquo; — are microscopic animals that form their own phylum
            (Tardigrada). Usually well under a millimetre long, they have plump, segmented
            bodies and eight stubby legs ending in tiny claws, and they trundle along under
            the microscope with a bear-like gait. Despite being so small and obscure, they
            are among the most famous animals in science for one astonishing reason: they are
            nearly indestructible.
          </p>
          <p>
            Tardigrades can endure conditions that would kill almost any other creature — from
            boiling heat and near-absolute-zero cold to crushing pressure, intense radiation,
            being completely dried out, and even exposure to the vacuum of outer space.
          </p>
          <p>
            <strong>Note:</strong> there are over a thousand tardigrade species with differing
            tolerances; details here cover them broadly. Images of tardigrades are microscope
            views, since the animals are too small to see with the naked eye.
          </p>
        </>
      }
      habitat={
        <p>
          Tardigrades live almost everywhere on Earth — from the deep sea and high mountains to
          tropical forests, polar ice, and hot springs. Most familiar are the ones living in
          the thin film of water on mosses, lichens, and leaf litter, and in soil and
          freshwater sediment. Wherever there is at least a little moisture, tardigrades are
          likely present, often in large numbers.
        </p>
      }
      diet={
        <p>
          Most tardigrades feed by piercing the cells of plants, algae, mosses, or other
          tiny organisms with sharp mouthparts and sucking out the contents. Some are
          predators that eat other tiny animals, including other tardigrades and microscopic
          roundworms. They need a film of water around them to be active and to feed.
        </p>
      }
      behavior={
        <p>
          The tardigrade&apos;s superpower is a survival trick called cryptobiosis. When its
          environment dries out (or becomes otherwise hostile), a tardigrade pulls in its legs,
          loses almost all its body water, and curls into a shrivelled, dormant ball called a
          &ldquo;tun.&rdquo; In this state its metabolism essentially stops, and it can persist
          for years — possibly decades — until water returns and revives it. In tun form,
          tardigrades have survived extreme heat and cold, high doses of radiation, immense
          pressure, and exposure to the vacuum and radiation of space in experiments. When
          conditions improve, they rehydrate and carry on as if nothing happened.
        </p>
      }
      humanInteraction={
        <p>
          Tardigrades are harmless and have become beloved science icons, studied intensely
          for how they survive drying out and radiation — research with possible applications
          in preserving cells, vaccines, and biological materials, and in understanding life&apos;s
          limits. They are not of conservation concern as a group. Their toughness has even made
          them a fixture of popular culture. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "What is a tardigrade?",
          answer:
            "A tardigrade, or 'water bear,' is a microscopic animal — usually under a millimetre long — with a plump, segmented body and eight clawed legs. They form their own animal phylum (Tardigrada) and live in water films on mosses, in soil, and in seas and fresh water all over the world. They're famous for being almost impossible to kill.",
        },
        {
          question: "Can tardigrades really survive in space?",
          answer:
            "In experiments, yes — at least in their dormant 'tun' state. When dried out, tardigrades have survived being exposed to the vacuum and radiation of outer space and revived afterward. They've also withstood boiling, freezing near absolute zero, intense radiation, and crushing pressure. They aren't truly invincible, but their survival abilities are extraordinary.",
        },
        {
          question: "How do tardigrades survive extreme conditions?",
          answer:
            "Through a dormant state called cryptobiosis. When their surroundings dry out, tardigrades expel almost all their water and curl into a shrivelled ball called a 'tun,' nearly shutting down their metabolism. In this state they can endure conditions that would kill active animals, sometimes for years, then rehydrate and revive when water returns.",
        },
        {
          question: "Are tardigrades dangerous to humans?",
          answer:
            "Not at all. Tardigrades are harmless microscopic animals that feed on plant cells, algae, or other tiny organisms. They don't bite, sting, or carry disease relevant to people. They're famous purely for their incredible survival abilities, which make them a favourite subject of scientific research and popular fascination.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Phylum Tardigrada (its own phylum)" },
        { label: "Nicknames", value: "'Water bear', 'moss piglet'" },
        { label: "Size", value: "Microscopic (usually < 1 mm)" },
        { label: "Body", value: "Plump, segmented; eight clawed legs" },
        { label: "Superpower", value: "Cryptobiosis (dormant 'tun' state)" },
        { label: "Survives", value: "Heat, cold, radiation, drying, vacuum" },
        { label: "Habitat", value: "Almost everywhere with moisture" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Velvet Worm relatives — Earthworm Profile", href: "/animals/earthworm", description: "Another soft-bodied invertebrate" },
        { label: "Nematode relatives — browse invertebrates", href: "/animal-encyclopedia/insects", description: "More invertebrates" },
        { label: "Mantis Shrimp Profile", href: "/animals/mantis-shrimp", description: "Another remarkable invertebrate" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates overview", href: "/animal-taxonomy/invertebrates", description: "Invertebrate taxonomy groups" },
      ]}
    />
  );
}
