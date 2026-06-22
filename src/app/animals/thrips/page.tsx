import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/thrips";
const TITLE = "Thrips — Profile, the Minuscule Insects with Feathery Wings (and 'Thrips' Is Singular Too)";
const DESC =
  "Explore thrips (order Thysanoptera): tiny slender insects with unique fringed wings that feed by rasping plant cells — important pollinators and pests, where one bug is also a 'thrips'.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("thrips"),
});

export default function ThripsPage() {
  return (
    <AnimalProfileLayout
      commonName="Thrips"
      scientificName="order Thysanoptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Tiny", "Plant-feeder"]}
      image={getAnimalImage("thrips") ?? undefined}
      galleryImages={getAnimalGalleryImages("thrips")}
      sources={ANIMAL_SOURCES.thrips}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Thrips (order Thysanoptera) are minuscule, slender insects — most less than a couple of
            millimetres long — that are easy to miss yet enormously numerous, often found tucked inside
            flowers, on leaves, and among buds. Despite their tiny size, they have a remarkable signature
            feature: their wings (when present) are narrow straps fringed with long hairs, like tiny
            feathers, which is what the order&apos;s name (Thysanoptera, &ldquo;fringe-wing&rdquo;) refers to.
            A quirk of the word: &ldquo;thrips&rdquo; is both singular and plural — one is a thrips, many are
            thrips (never a &ldquo;thrip&rdquo;).
          </p>
          <p>
            Thrips have unusual, asymmetrical mouthparts that they use to puncture and rasp plant (or fungal)
            cells and suck out the contents, and they include both significant crop pests and useful
            pollinators.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;thrips&rdquo; covers a large order; details here describe the group
            broadly. Treat general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Thrips are found worldwide wherever plants grow — in flowers, on leaves and buds, in leaf litter,
          on fungi, and in grasslands, forests, farmland, gardens, and greenhouses. Many shelter in tight
          spaces such as the insides of flowers and leaf folds, and different species specialise on different
          plants or feed on fungal spores and other small organisms.
        </p>
      }
      diet={
        <p>
          Most thrips feed on plants, using their single functional stylet and rasping mouthparts to pierce
          individual cells of leaves, flowers, and developing fruit and suck out the contents, which can scar
          and distort the plant. Others feed on fungal spores or pollen, and a number of thrips are predators
          that hunt mites and other tiny thrips. By moving among flowers and carrying pollen, some thrips also
          act as pollinators of certain plants.
        </p>
      }
      behavior={
        <p>
          Thrips are weak fliers, but their fringed wings let them stay airborne in air currents, and huge
          numbers can be carried on the wind (they sometimes appear as the tiny &ldquo;thunderbugs&rdquo; or
          &ldquo;thunderflies&rdquo; noticed on warm, still days). They have an unusual life cycle that is
          neither fully gradual nor a true complete metamorphosis: after feeding nymph stages, they pass
          through quiescent &ldquo;pupa-like&rdquo; stages before becoming winged adults. Many reproduce
          rapidly, and some can reproduce without mating, so populations build quickly. A number of thrips
          transmit plant viruses as they feed, which can make them serious agricultural pests beyond the
          direct feeding damage; a few species, however, are reared as beneficial predators or valued for
          pollination.
        </p>
      }
      humanInteraction={
        <p>
          Thrips matter to people mainly through agriculture and gardening: several species are major pests of
          crops, flowers, and greenhouse plants, both by feeding and by spreading plant viruses, and they are a
          frequent focus of pest management. Yet thrips are also part of healthy ecosystems — pollinating some
          plants, recycling fungal and plant material, and serving as food for other small creatures — and
          predatory thrips help control mites and other pests. They are harmless to people (though large
          swarms can be a minor nuisance). Consult authoritative sources for details on specific species.
        </p>
      }
      faqs={[
        {
          question: "Is it 'a thrip' or 'a thrips'?",
          answer:
            "It's 'a thrips' — the word is both singular and plural, like 'sheep' or 'series.' One insect is a thrips and many are thrips; 'thrip' is a common mistake. The name comes from Greek for 'woodworm,' and the order is Thysanoptera, meaning 'fringe-wing.'",
        },
        {
          question: "Why are thrips' wings so unusual?",
          answer:
            "Instead of broad, flat wings, thrips have narrow strap-like wings fringed with long hairs, like tiny feathers — the feature that gives the order its name, Thysanoptera ('fringe-wing'). These fringed wings work well at the very small scale thrips operate at, helping these weak fliers stay aloft and drift on air currents.",
        },
        {
          question: "How do thrips feed and damage plants?",
          answer:
            "Thrips have asymmetrical, rasping-and-sucking mouthparts (with a single functional stylet) that puncture individual plant cells so the insect can suck out the contents. This scars and distorts leaves, flowers, and fruit. On top of the direct damage, some thrips transmit plant viruses as they feed, which is why certain species are such serious crop pests.",
        },
        {
          question: "Are thrips all pests?",
          answer:
            "No. While several thrips are important crop and garden pests, others are beneficial or neutral: some pollinate particular plants, some feed on fungi and help recycle material, and a number are predators that eat mites and other tiny pests (a few are even used in biological control). They're a diverse group, not uniformly harmful, and they're harmless to people.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Thysanoptera ('fringe-wing')" },
        { label: "Class", value: "Insecta" },
        { label: "Size", value: "Minuscule (often <2 mm)" },
        { label: "Signature trait", value: "Strap-like wings fringed with hairs" },
        { label: "Word quirk", value: "'Thrips' is both singular & plural" },
        { label: "Diet", value: "Mostly plant/fungal cells; some predatory" },
        { label: "Note", value: "Some are crop pests & virus vectors; some pollinate" },
        { label: "To humans", value: "Harmless (swarms a minor nuisance)" },
      ]}
      relatedLinks={[
        { label: "Aphid Profile", href: "/animals/aphid", description: "Another tiny sap-feeding pest" },
        { label: "Ladybug Profile", href: "/animals/ladybug", description: "A predator of tiny pests" },
        { label: "Lacewing Profile", href: "/animals/lacewing", description: "Another beneficial pest-controller" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates Taxonomy", href: "/animal-taxonomy/invertebrates" },
      ]}
    />
  );
}
