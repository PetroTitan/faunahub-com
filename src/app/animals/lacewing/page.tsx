import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lacewing";
const TITLE = "Lacewing — Profile, the Delicate Insect Whose Larvae Devour Aphids";
const DESC =
  "Explore lacewings (order Neuroptera): delicate, lacy-winged insects whose voracious larvae — nicknamed 'aphid lions' — are prized natural pest controllers in gardens and farms.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("lacewing"),
});

export default function LacewingPage() {
  return (
    <AnimalProfileLayout
      commonName="Lacewing"
      scientificName="order Neuroptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Beneficial", "Predator"]}
      image={getAnimalImage("lacewing") ?? undefined}
      galleryImages={getAnimalGalleryImages("lacewing")}
      sources={ANIMAL_SOURCES.lacewing}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Lacewings are delicate, soft-bodied insects named for their large, transparent,
            finely net-veined wings, which they hold roof-like over the body at rest. The common
            green lacewings (such as <em>Chrysoperla</em>) are slender and pale green with
            shimmering golden or coppery eyes; brown lacewings and other relatives belong to the
            same broad order (Neuroptera). Gentle and harmless as adults, lacewings are gardeners&apos;
            friends — but their young are anything but gentle.
          </p>
          <p>
            Lacewing larvae are ferocious little predators, nicknamed &ldquo;aphid lions&rdquo;
            for the huge numbers of aphids and other soft pests they devour, making lacewings one
            of the most valued beneficial insects in gardens and on farms.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;lacewing&rdquo; covers many species; details here use
            the common green lacewing as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Lacewings are found worldwide in gardens, meadows, hedgerows, fields, woodlands, and
          almost anywhere with plants and the small insects their larvae eat. Adults are often
          drawn to lights at night and shelter in vegetation by day; many overwinter as adults in
          sheltered spots, sometimes turning brownish or pink for the cold season.
        </p>
      }
      diet={
        <p>
          The larvae are voracious predators, feeding on aphids, mites, scale insects, small
          caterpillars, insect eggs, and other soft-bodied pests, which they seize with large,
          curved, pincer-like jaws and drain. Adults vary: some are predators too, while many
          green lacewings feed mainly on nectar, pollen, and honeydew, with their pest-eating role
          concentrated in the larval stage. Either way, lacewings are a powerful natural check on
          plant pests.
        </p>
      }
      behavior={
        <p>
          Lacewings have a complete life cycle — egg, larva, pupa, adult. Green lacewings famously
          lay each egg on a fine, hair-like stalk, lifting it above the leaf surface to protect it
          from predators (including their own hungry siblings). The hatched larvae roam plants
          hunting pests with their pincer jaws, and some species camouflage themselves by piling
          the drained husks of their prey and other debris onto their backs. After pupating in a
          silken cocoon, the adult emerges, flying weakly on its lacy wings, mostly at dusk and
          night. Some lacewings even communicate by tiny body vibrations during courtship.
        </p>
      }
      humanInteraction={
        <p>
          Lacewings are among the most welcome insects in gardens and agriculture: their
          aphid-eating larvae provide valuable natural pest control, and they are reared and sold
          commercially to help manage pests without chemicals. Encouraging lacewings — by
          providing flowers, reducing pesticide use, and offering shelter — supports healthier,
          more balanced gardens. They are harmless to people. Consult authoritative sources for
          details on specific species.
        </p>
      }
      faqs={[
        {
          question: "Why are lacewings good for the garden?",
          answer:
            "Because their larvae are voracious predators of aphids, mites, scale insects, and other soft-bodied pests — earning the nickname 'aphid lions.' A single lacewing larva can eat large numbers of aphids as it grows, so lacewings provide powerful, chemical-free natural pest control, which is why they're reared and sold to help protect crops and gardens.",
        },
        {
          question: "Why do green lacewings lay eggs on stalks?",
          answer:
            "Each egg is placed on top of a fine, hair-like stalk that raises it above the leaf surface. This helps protect the egg from predators — including the lacewing's own newly hatched, cannibalistic larvae, which would otherwise eat their unhatched siblings. It's a neat trick to give more of the eggs a chance to survive.",
        },
        {
          question: "Are lacewings harmful to people?",
          answer:
            "No, lacewings are harmless. The adults are gentle, delicate insects that don't bite or sting in any meaningful way, and they're beneficial rather than pests. The only 'fierce' part of their lives is the larval stage, and that ferocity is aimed at garden pests like aphids, not at humans.",
        },
        {
          question: "What do adult lacewings eat?",
          answer:
            "It varies by species. Some adult lacewings are predators like their larvae, but many common green lacewings feed mainly on nectar, pollen, and honeydew (the sugary excretion of aphids). In those species, the main pest-eating happens in the larval stage, while the adults focus on feeding lightly and reproducing.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Neuroptera (lacewings)" },
        { label: "Reference genus", value: "Chrysoperla (green lacewings)" },
        { label: "Class", value: "Insecta" },
        { label: "Look", value: "Lacy net-veined wings; golden eyes" },
        { label: "Larva nickname", value: "'Aphid lion'" },
        { label: "Larval diet", value: "Aphids, mites, soft-bodied pests" },
        { label: "Role", value: "Valued natural pest controller" },
        { label: "To humans", value: "Harmless; beneficial" },
      ]}
      relatedLinks={[
        { label: "Ladybug Profile", href: "/animals/ladybug", description: "Another aphid-eating garden ally" },
        { label: "Aphid relatives — Ant Profile", href: "/animals/ant", description: "Ants that farm aphids" },
        { label: "Dragonfly Profile", href: "/animals/dragonfly", description: "Another net-winged insect predator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates Taxonomy", href: "/animal-taxonomy/invertebrates" },
      ]}
    />
  );
}
