import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/weevil";
const TITLE = "Weevil — Profile, the Long-Snouted Beetles (One of Earth's Biggest Families)";
const DESC =
  "Explore weevils (family Curculionidae): snout-faced beetles that make up one of the largest animal families on Earth — mostly plant-eaters, including some notorious crop pests.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("weevil"),
});

export default function WeevilPage() {
  return (
    <AnimalProfileLayout
      commonName="Weevil"
      scientificName="family Curculionidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Beetle", "Plant-eater"]}
      image={getAnimalImage("weevil") ?? undefined}
      galleryImages={getAnimalGalleryImages("weevil")}
      sources={ANIMAL_SOURCES.weevil}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Weevils are beetles, most of them members of the family Curculionidae — the true weevils —
            instantly recognised by the long, downward-curving snout (the rostrum) that extends from the
            head, with tiny mouthparts at its tip and often elbowed antennae partway along. Curculionidae
            is one of the largest families in the entire animal kingdom, with tens of thousands of
            described species, so weevils come in a vast array of shapes, sizes, and colours, from drab
            browns to brilliant metallic blues and greens.
          </p>
          <p>
            Most weevils are plant-eaters, and the snout is a key tool: females of many species use it to
            bore holes into seeds, nuts, stems, or fruit, in which they lay their eggs so the grubs can
            feed inside. This habit makes a number of weevils important agricultural and stored-food pests.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;weevil&rdquo; covers a huge group; details here describe the
            true weevils broadly. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Weevils are found almost everywhere plants grow — worldwide across forests, grasslands,
          farmland, gardens, deserts, and wetlands, and inside homes and granaries where stored grain and
          food are kept. Different species are tied to particular host plants or plant parts, so weevils
          occupy an enormous range of niches wherever there is vegetation to feed on.
        </p>
      }
      diet={
        <p>
          Weevils are overwhelmingly herbivores, feeding on plants at every stage and part — leaves,
          stems, roots, flowers, buds, seeds, nuts, grain, and fruit. Many are highly specialised on a
          single kind of plant. The larvae are typically legless grubs that develop hidden inside seeds,
          nuts, stems, or roots, eating the plant tissue around them, which is why weevil damage is often
          discovered only when produce is opened.
        </p>
      }
      behavior={
        <p>
          The snout defines weevil life: a female often chews a tiny hole into a seed, nut, or stem with
          the mouthparts at the snout&apos;s tip, then lays an egg inside so the grub can feed in safety.
          Adults are usually slow-moving and rely on camouflage, their hard, often textured or scaled
          bodies blending with bark, soil, or foliage; when disturbed, many simply drop and play dead,
          tucking in their legs and snout. Some, like the notorious cotton boll weevil and grain weevils,
          can multiply quickly and cause serious damage, while a few weevils are actually used as
          beneficial biological controls against invasive weeds. Weevils undergo complete metamorphosis,
          from egg to grub to pupa to the snouted adult.
        </p>
      }
      humanInteraction={
        <p>
          Weevils have a major relationship with people through agriculture: pests such as the boll
          weevil, grain and rice weevils, and various root and seed weevils cause significant losses to
          crops and stored food, and controlling them is a long-running challenge. Yet most weevil species
          are harmless to humans, and some are even helpful — deliberately introduced to control invasive
          weeds. They do not bite or sting. As a group they are common and in no way threatened overall.
          Consult authoritative sources for details on specific species.
        </p>
      }
      faqs={[
        {
          question: "What makes a beetle a weevil?",
          answer:
            "The snout. Weevils are beetles whose head extends into a long, often downward-curving snout (rostrum) with tiny chewing mouthparts at the tip, and many have distinctive elbowed antennae partway along it. This snouted face — used by many females to bore into seeds and stems to lay eggs — is the classic mark of a true weevil.",
        },
        {
          question: "Are there really that many kinds of weevil?",
          answer:
            "Yes — astonishingly so. The true weevil family (Curculionidae) is one of the largest families of animals on Earth, with tens of thousands of described species and many more thought to await discovery. That huge diversity means weevils range from tiny drab grain pests to large, brilliantly metallic tropical species.",
        },
        {
          question: "Why are some weevils serious pests?",
          answer:
            "Because their grubs develop hidden inside the very parts of plants we use — seeds, grain, nuts, roots, stems, and fruit. Species like the cotton boll weevil and grain and rice weevils can multiply quickly and damage crops in the field or food in storage, often unnoticed until the produce is opened. This makes certain weevils among the most economically important insect pests.",
        },
        {
          question: "Are weevils harmful to people?",
          answer:
            "Not directly — weevils don't bite or sting and aren't dangerous to humans. The problems they cause are to crops and stored food, not to people's health. In fact, while some species are damaging pests, most weevils are harmless, and a few are even used deliberately to control invasive weeds.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Curculionidae (true weevils)" },
        { label: "Class", value: "Insecta (beetles)" },
        { label: "Signature trait", value: "Long snout (rostrum); often elbowed antennae" },
        { label: "Diversity", value: "One of the largest animal families on Earth" },
        { label: "Diet", value: "Mostly herbivore (grubs develop inside plants)" },
        { label: "Defence", value: "Camouflage; many 'play dead' when disturbed" },
        { label: "Note", value: "Some major crop/grain pests; a few biocontrol allies" },
        { label: "To humans", value: "Harmless (don't bite or sting)" },
      ]}
      relatedLinks={[
        { label: "Beetle Profile", href: "/animals/beetle", description: "Weevils are a kind of beetle" },
        { label: "Ladybug Profile", href: "/animals/ladybug", description: "Another beetle (a helpful one)" },
        { label: "Aphid Profile", href: "/animals/aphid", description: "Another major plant pest" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates Taxonomy", href: "/animal-taxonomy/invertebrates" },
      ]}
    />
  );
}
