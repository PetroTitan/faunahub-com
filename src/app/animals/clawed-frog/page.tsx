import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/clawed-frog";
const TITLE = "African Clawed Frog — Profile, Lab Famous & Invasive";
const DESC =
  "Explore the African clawed frog (Xenopus laevis): a fully aquatic, tongueless African frog that became a famous lab animal and pregnancy test — and a problematic invader where released.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("clawed-frog"),
});

export default function ClawedFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="African Clawed Frog"
      scientificName="Xenopus laevis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Africa"]}
      image={getAnimalImage("clawed-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("clawed-frog")}
      sources={ANIMAL_SOURCES["clawed-frog"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The African clawed frog (<em>Xenopus laevis</em>) is a smooth-skinned, fully
            aquatic frog from sub-Saharan Africa, with a flattened body, upward-facing eyes,
            no tongue, and three short claws on each hind foot (the source of its name).
            Unremarkable to look at, it has nonetheless become one of the most important
            animals in the history of science — a workhorse of biology labs around the world.
          </p>
          <p>
            Its hardiness, ease of breeding, and large, accessible eggs made it invaluable
            for research, and earlier in the 20th century it even served as a living
            pregnancy test. But the same toughness that makes it a great lab animal has made
            it a damaging invader where it has escaped or been released.
          </p>
          <p>
            <strong>Note:</strong> several Xenopus species exist; details here use the African
            clawed frog. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          In its native range, the African clawed frog lives in warm, still or slow fresh
          waters — ponds, pools, streams, and ditches — across much of southern and central
          Africa. It is highly tolerant of poor conditions and can move overland between
          waters or burrow into mud during droughts, which helps it survive harsh seasons —
          and colonise new places.
        </p>
      }
      diet={
        <p>
          African clawed frogs are voracious carnivores and scavengers, eating insects,
          worms, small fish, tadpoles, other frogs, and carrion. Being tongueless, they push
          food into the mouth with their front limbs and use a suction gulp, and their
          sensitive system detects vibrations and chemicals in the water to find prey. Their
          broad, hungry appetite is part of why they harm native wildlife when introduced.
        </p>
      }
      behavior={
        <p>
          Clawed frogs are almost entirely aquatic, rarely leaving the water, and they swim
          powerfully with strongly webbed hind feet. They detect prey and danger partly
          through a lateral-line system (like fish) that senses water movement. They are
          hardy and adaptable, tolerating a wide range of temperatures and water quality.
          Their fame in science comes from these qualities plus their easy breeding: injecting
          a hormone reliably triggers egg-laying, which is how they were once used to test for
          human pregnancy and why they remain a key model organism in developmental and cell
          biology.
        </p>
      }
      humanInteraction={
        <p>
          The African clawed frog has contributed enormously to science, from early pregnancy
          testing to modern research on cells, genes, and development. However, escaped or
          released frogs (from labs, the pet trade, and former medical use) have established
          invasive populations on several continents, where they prey on and compete with
          native species and can spread amphibian diseases. They should never be released
          into the wild. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Why is the African clawed frog so important in science?",
          answer:
            "It is hardy, easy to keep, and breeds readily — a hormone injection reliably makes females lay eggs — and its large, robust eggs and embryos are ideal for studying development, cells, and genes. These traits made it a foundational laboratory animal, and it remains a key 'model organism' in biology today.",
        },
        {
          question: "Was the clawed frog really used as a pregnancy test?",
          answer:
            "Yes. In the mid-20th century, a woman's urine was injected into a female African clawed frog; if she was pregnant, hormones in the urine caused the frog to lay eggs within a day or so. This 'frog test' was a widely used pregnancy test for years before chemical tests replaced it.",
        },
        {
          question: "Why are African clawed frogs a problem when introduced?",
          answer:
            "They are tough, adaptable, and voracious. Escaped or released clawed frogs establish invasive populations that eat and outcompete native animals (including other amphibians and fish) and can spread amphibian diseases such as the deadly chytrid fungus. This is why they must never be released into the wild.",
        },
        {
          question: "What do African clawed frogs eat?",
          answer:
            "They are aggressive carnivores and scavengers, eating insects, worms, small fish, tadpoles, other frogs, and carrion. Lacking a tongue, they shove food into the mouth with their forelimbs and use a suction gulp, finding prey by sensing vibrations and chemicals in the water.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Xenopus laevis" },
        { label: "Class", value: "Amphibia (frog, family Pipidae)" },
        { label: "Signature trait", value: "Clawed hind feet; tongueless; fully aquatic" },
        { label: "Diet", value: "Voracious carnivore & scavenger" },
        { label: "Famous for", value: "Lab model; former pregnancy test" },
        { label: "Native range", value: "Sub-Saharan Africa" },
        { label: "Note", value: "Invasive where released" },
        { label: "Status", value: "Widespread; verify" },
      ]}
      relatedLinks={[
        { label: "Surinam Toad Profile", href: "/animals/surinam-toad", description: "A relative in the same tongueless family" },
        { label: "Bullfrog Profile", href: "/animals/bullfrog", description: "Another frog invasive where introduced" },
        { label: "Axolotl Profile", href: "/animals/axolotl", description: "Another aquatic amphibian used in research" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
