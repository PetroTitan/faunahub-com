import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/comb-jelly";
const TITLE = "Comb Jelly — Profile, Rainbow Combs & an Ancient Lineage";
const DESC =
  "Explore comb jellies (phylum Ctenophora): shimmering, jellyfish-like ocean drifters that swim with rainbow-flickering 'comb' rows — not true jellyfish, and possibly the oldest animal branch.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("comb-jelly"),
});

export default function CombJellyPage() {
  return (
    <AnimalProfileLayout
      commonName="Comb Jelly"
      scientificName="phylum Ctenophora"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate", "Marine", "Plankton"]}
      image={getAnimalImage("comb-jelly") ?? undefined}
      galleryImages={getAnimalGalleryImages("comb-jelly")}
      sources={ANIMAL_SOURCES["comb-jelly"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Comb jellies (phylum Ctenophora) are delicate, transparent, gelatinous animals
            that drift through the world&apos;s oceans, looking superficially like small
            jellyfish. Their name comes from eight rows of tiny beating hair-plates, called
            combs (or ctenes), that run down the body and propel them through the water. As
            these combs beat, they scatter light into shimmering, flickering rainbows — one
            of the most beautiful sights in the sea — even though most comb jellies are not
            themselves brightly coloured.
          </p>
          <p>
            Despite the resemblance, comb jellies are not true jellyfish; they belong to a
            completely separate, very ancient animal group, and unlike jellyfish they do not
            sting.
          </p>
          <p>
            <strong>Note:</strong> there are many comb jelly species; details here cover them
            broadly. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Comb jellies live throughout the world&apos;s seas, from coastal waters to the open
          ocean and from the surface down into the deep sea. Most drift as part of the
          plankton, carried by currents, and they can be found from the tropics to polar
          waters. Some are surface-dwellers; many others live in the dark depths.
        </p>
      }
      diet={
        <p>
          Comb jellies are carnivores that feed on plankton — tiny crustaceans, larvae, fish
          eggs, and other small animals — and some eat other comb jellies or jellyfish. Many
          capture prey with sticky cells (colloblasts) on trailing tentacles, rather than the
          stinging cells used by true jellyfish; others simply engulf prey with a large mouth.
          Despite their fragile look, comb jellies can be voracious and ecologically powerful
          predators.
        </p>
      }
      behavior={
        <p>
          Comb jellies are the largest animals to swim using cilia (the tiny beating combs),
          rather than muscles or fins, and the rainbow shimmer of their beating comb rows is
          simply light being split as it passes through the moving plates. Many comb jellies
          are also bioluminescent, producing their own blue or green glow in the dark. Most
          are hermaphrodites and can reproduce prolifically. Their soft, watery bodies leave
          almost no fossils, which is one reason their place in the animal family tree —
          possibly one of the very earliest branches — is still debated by scientists.
        </p>
      }
      humanInteraction={
        <p>
          Comb jellies are harmless to people — they do not sting — and are admired in
          aquariums for their hypnotic shimmer. Ecologically, however, they can be powerful:
          one species, the warty comb jelly, was accidentally carried to the Black Sea, where
          it bloomed in huge numbers, devoured plankton and fish eggs, and contributed to the
          collapse of local fisheries — a striking example of how a delicate-looking animal can
          reshape an ecosystem when introduced. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Are comb jellies the same as jellyfish?",
          answer:
            "No. Comb jellies look a bit like jellyfish but belong to an entirely separate phylum (Ctenophora). The big differences: comb jellies swim using rows of beating hair-plates ('combs') rather than pulsing a bell, and most catch prey with sticky cells instead of stinging cells. Crucially, comb jellies don't sting, so they're harmless to swimmers.",
        },
        {
          question: "Why do comb jellies shimmer with rainbow colours?",
          answer:
            "The rainbow flicker comes from their combs — eight rows of tiny beating hair-plates that propel the animal. As these plates move, they split passing light into shifting colours, producing a shimmering, rainbow-like effect. It isn't pigment or bioluminescence; it's light being scattered by the moving combs (though many comb jellies can also glow in the dark separately).",
        },
        {
          question: "Do comb jellies sting?",
          answer:
            "No. Unlike true jellyfish, comb jellies lack stinging cells. Many capture prey using special sticky cells (colloblasts) on their tentacles instead. This means comb jellies are completely harmless to people, even though they can be effective predators of plankton.",
        },
        {
          question: "Can comb jellies harm ocean ecosystems?",
          answer:
            "They can, especially when introduced somewhere new. The warty comb jelly, carried in ships' ballast water to the Black Sea, multiplied enormously and ate vast amounts of plankton and fish eggs, helping crash local fisheries. It shows how a fragile-looking, harmless-to-humans animal can become a serious ecological disruptor as an invader.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Phylum Ctenophora (its own phylum)" },
        { label: "Not", value: "A true jellyfish (and doesn't sting)" },
        { label: "Swimming", value: "Rows of beating 'combs' (cilia)" },
        { label: "Shimmer", value: "Light scattered by the moving combs" },
        { label: "Diet", value: "Carnivore (plankton; some eat other jellies)" },
        { label: "Extras", value: "Many are bioluminescent" },
        { label: "Habitat", value: "All oceans, surface to deep sea" },
        { label: "To humans", value: "Harmless; can be invasive" },
      ]}
      relatedLinks={[
        { label: "Jellyfish Profile", href: "/animals/jellyfish", description: "A true jellyfish (a different group)" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "A stinging cnidarian relative of jellyfish" },
        { label: "Nautilus Profile", href: "/animals/nautilus", description: "Another drifting ocean invertebrate" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
