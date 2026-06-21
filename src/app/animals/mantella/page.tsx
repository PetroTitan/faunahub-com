import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mantella";
const TITLE = "Mantella — Profile, Madagascar's Jewel-Like Toxic Frogs";
const DESC =
  "Explore mantellas (genus Mantella): tiny, brilliantly coloured toxic frogs of Madagascar — a striking parallel to South America's poison dart frogs. Several are Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("mantella"),
});

export default function MantellaPage() {
  return (
    <AnimalProfileLayout
      commonName="Mantella"
      scientificName="Mantella aurantiaca"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Madagascar"]}
      image={getAnimalImage("mantella") ?? undefined}
      galleryImages={getAnimalGalleryImages("mantella")}
      sources={ANIMAL_SOURCES.mantella}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Mantellas (genus <em>Mantella</em>) are tiny, jewel-like frogs found only on
            Madagascar, famous for their brilliant colours — vivid oranges, yellows, greens,
            reds, blacks, and blues. The golden mantella (<em>Mantella aurantiaca</em>), shown
            here, is a dazzling solid-orange species barely a couple of centimetres long.
            Like the unrelated poison dart frogs of South America, mantellas are small,
            day-active, toxic frogs whose bright colours are a warning to predators —
            a striking case of two distant groups evolving the same lifestyle.
          </p>
          <p>
            Their beauty and rarity make mantellas favourites of frog enthusiasts, but also
            put pressure on wild populations through collection and habitat loss.
          </p>
          <p>
            <strong>Conservation note:</strong> several mantellas are threatened, and the
            golden mantella is Critically Endangered, with a tiny range. Verify each
            species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Mantellas live in a range of habitats across Madagascar, from rainforest and
          montane forest to swampy clearings and bamboo forest, depending on the species. The
          golden mantella is restricted to a small area of pandanus-filled forest swamps in
          eastern Madagascar, which is part of why it is so vulnerable. Most mantellas live on
          the forest floor near water.
        </p>
      }
      diet={
        <p>
          Mantellas are insectivores that eat tiny invertebrates — ants, termites, mites,
          fruit flies, and other small prey — caught on the forest floor. As with poison dart
          frogs, their toxicity is thought to come from their diet: they take up defensive
          compounds (alkaloids) from the small invertebrates they eat, so captive-raised
          mantellas on a different diet are generally not toxic.
        </p>
      }
      behavior={
        <p>
          Mantellas are active by day, hopping about the forest floor in search of tiny prey
          and advertising themselves with their bold colours rather than hiding. Males call
          with clicking or buzzing sounds to attract females and defend small territories.
          Breeding is tied to the rainy season; eggs are laid in moist spots on land, and the
          tadpoles develop in nearby pools or slow water. Their warning coloration
          (aposematism) tells predators they taste bad or are toxic, so they don&apos;t need
          to flee or hide.
        </p>
      }
      humanInteraction={
        <p>
          Mantellas are popular in the international pet trade, prized for their colour, but
          wild collection and especially the loss of Madagascar&apos;s forests and wetlands
          have pushed several species toward extinction; the golden mantella in particular is
          Critically Endangered. Captive-breeding programs help reduce pressure on wild
          frogs. As toxic animals they should not be handled carelessly. Consult the IUCN Red
          List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are mantellas the same as poison dart frogs?",
          answer:
            "No, though they look and live remarkably alike. Mantellas are from Madagascar, while poison dart frogs are from Central and South America, and the two groups are not closely related. They independently evolved the same package of traits — tiny size, brilliant warning colours, daytime activity, and diet-derived toxicity — a classic example of convergent evolution.",
        },
        {
          question: "Why are mantellas so brightly coloured?",
          answer:
            "Their vivid colours are a warning (aposematism). Mantellas are toxic, and their bold oranges, yellows, reds, and blues advertise to predators that they are unpleasant or dangerous to eat. This lets them be active in the open by day instead of hiding, because predators learn to leave them alone.",
        },
        {
          question: "Where does a mantella's toxicity come from?",
          answer:
            "From its diet, as in poison dart frogs. Wild mantellas take up defensive compounds (alkaloids) from the small invertebrates they eat, such as ants and mites. Because of this, mantellas raised in captivity on a different diet generally don't become toxic — the poison comes from what they eat in the wild.",
        },
        {
          question: "Are mantellas endangered?",
          answer:
            "Several are. Many mantellas have small ranges in Madagascar's threatened forests and wetlands, and the golden mantella is Critically Endangered. Habitat loss and collection for the pet trade are the main threats, though captive breeding helps. Status varies by species and should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Mantella aurantiaca (golden mantella)" },
        { label: "Class", value: "Amphibia (frog)" },
        { label: "Lookalike of", value: "Poison dart frogs (convergent, unrelated)" },
        { label: "Colours", value: "Bright warning colours (aposematic)" },
        { label: "Toxicity", value: "Diet-derived (from prey)" },
        { label: "Diet", value: "Insectivore (ants, mites, tiny prey)" },
        { label: "Range", value: "Madagascar only" },
        { label: "IUCN Status", value: "Several threatened; golden mantella CR" },
      ]}
      relatedLinks={[
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "Its New World counterpart (unrelated)" },
        { label: "Glass Frog Profile", href: "/animals/glass-frog", description: "Another small Neotropical frog" },
        { label: "Tree Frog Profile", href: "/animals/tree-frog", description: "A climbing frog" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
