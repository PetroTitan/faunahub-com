import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-squirt";
const TITLE = "Sea Squirt — Profile, Filter-Feeding Tunicates & Our Distant Kin";
const DESC =
  "Explore sea squirts (class Ascidiacea): sac-like marine filter feeders that, despite looking like sponges, are surprisingly close relatives of backboned animals — including us.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("sea-squirt"),
});

export default function SeaSquirtPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Squirt"
      scientificName="class Ascidiacea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate", "Tunicate", "Filter feeder"]}
      image={getAnimalImage("sea-squirt") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-squirt")}
      sources={ANIMAL_SOURCES["sea-squirt"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Sea squirts (class Ascidiacea) are sac-like marine animals — a kind of tunicate —
            that live attached to the seabed, rocks, reefs, jetties, and shells. The adult
            looks like a small, often colourful bag or barrel with two openings (siphons), and
            it spends its life filtering food from seawater. The name &ldquo;sea squirt&rdquo;
            comes from the way many of them shoot out a jet of water when touched or lifted
            from the sea.
          </p>
          <p>
            They may look like simple, sponge-like blobs, but sea squirts hold a big
            evolutionary surprise: tunicates are among the closest living invertebrate
            relatives of the vertebrates — the group that includes fish, amphibians, reptiles,
            birds, and mammals, us included.
          </p>
          <p>
            <strong>Note:</strong> sea squirts are a large, varied group, both solitary and
            colonial; details here cover them broadly. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sea squirts live in oceans all over the world, from shallow tide pools and rocky
          shores to coral reefs and the deep sea. They attach to hard surfaces — rocks,
          reefs, shells, pilings, boat hulls, and the seabed — and many grow in clusters or
          spreading colonies. Some live in cold polar seas, others on tropical reefs.
        </p>
      }
      diet={
        <p>
          Sea squirts are filter feeders. They draw seawater in through one siphon, pass it
          through a basket-like internal filter that traps tiny particles — plankton, bacteria,
          and bits of organic matter — and then expel the filtered water out the other siphon.
          By straining huge volumes of water, sea squirts help keep it clean and recycle
          nutrients, acting as living water filters of the sea.
        </p>
      }
      behavior={
        <p>
          The adult sea squirt is sessile — fixed in place — and does little but pump and
          filter water, contracting to squirt water out if disturbed. The real twist is in its
          life history: the larva is a tiny, tadpole-like swimmer with a nerve cord and a
          stiffening rod (a notochord) in its tail, the same basic features that mark the
          ancestors of backboned animals. After a short swim, the larva settles head-down,
          attaches, and reabsorbs its tail and much of its &ldquo;brain,&rdquo; transforming
          into the stationary adult. This larva is the key clue to the tunicates&apos; close
          kinship with vertebrates.
        </p>
      }
      humanInteraction={
        <p>
          Sea squirts are important members of marine communities and useful natural water
          filters, and they are of great interest to scientists studying the evolution of
          vertebrates and for compounds in their bodies explored in medicine. Some are eaten in
          parts of the world, while certain species are problematic foulers of boats and
          aquaculture or invasive when spread by shipping. They are harmless to people. Consult
          authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a sea squirt?",
          answer:
            "Because of what it does when disturbed. Many sea squirts forcefully contract and shoot out a jet of water through their siphons when touched or lifted out of the sea — a little 'squirt' that gives the animal its name. The rest of the time they sit quietly, pumping water through their bodies to feed.",
        },
        {
          question: "Are sea squirts really related to humans?",
          answer:
            "Surprisingly closely, for an invertebrate. Sea squirts are tunicates, which are among the nearest living relatives of the vertebrates — the group that includes fish, amphibians, reptiles, birds, and mammals like us. The clue is the larva: it's a tiny tadpole-like swimmer with a nerve cord and a notochord, the same features that define our own broad lineage.",
        },
        {
          question: "How do sea squirts eat?",
          answer:
            "They filter their food from seawater. A sea squirt draws water in through one siphon, strains out tiny particles — plankton, bacteria, and organic bits — using a basket-like internal filter, and expels the cleaned water through the other siphon. In doing so, they process large volumes of water and help keep it clean.",
        },
        {
          question: "Do sea squirts move?",
          answer:
            "Adults don't — they're fixed in place on rocks, reefs, or other surfaces and just pump and filter water (squirting when disturbed). It's the larva that moves: a brief, free-swimming, tadpole-like stage that finds a spot to settle, then attaches and transforms into the stationary adult, even reabsorbing its tail and much of its simple brain.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Ascidiacea (tunicates)" },
        { label: "Big surprise", value: "Close invertebrate kin of vertebrates" },
        { label: "Body", value: "Sac-like with two siphons; sessile adult" },
        { label: "Diet", value: "Filter feeder (plankton, bacteria)" },
        { label: "Larva", value: "Tadpole-like, with a notochord" },
        { label: "Forms", value: "Solitary or colonial" },
        { label: "Habitat", value: "Seabeds & reefs worldwide" },
        { label: "To humans", value: "Harmless; some invasive foulers" },
      ]}
      relatedLinks={[
        { label: "Sea Cucumber Profile", href: "/animals/sea-cucumber", description: "Another soft-bodied seabed animal" },
        { label: "Coral Profile", href: "/animals/coral", description: "Another sessile reef animal" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "Another attached marine invertebrate" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Seabed habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
