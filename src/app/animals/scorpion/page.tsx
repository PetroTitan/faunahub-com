import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/scorpion";
const TITLE = "Scorpion — Profile, Venom, Diet & Behavior";
const DESC =
  "Explore scorpions (order Scorpiones): ancient arachnids with pincers and a venomous tail sting, mostly harmless to people, that glow under ultraviolet light.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("scorpion"),
});

export default function ScorpionPage() {
  return (
    <AnimalProfileLayout
      commonName="Scorpion"
      scientificName="order Scorpiones"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Arachnid", "Venomous"]}
      image={getAnimalImage("scorpion") ?? undefined}
      galleryImages={getAnimalGalleryImages("scorpion")}
      sources={ANIMAL_SOURCES.scorpion}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Scorpions (order Scorpiones) are arachnids — relatives of spiders, ticks,
            and mites — recognised by their grasping pincers (pedipalps) and a long,
            segmented tail tipped with a venomous sting. They are an ancient group that
            has existed for hundreds of millions of years. The reference species here
            is the emperor scorpion (<em>Pandinus imperator</em>), one of the largest.
          </p>
          <p>
            This is an educational profile. Although all scorpions are venomous, the
            great majority are not dangerous to healthy adults; only a small number of
            species have venom of serious medical concern. Wild scorpions should not be
            handled, and this page does not provide medical or first-aid advice.
          </p>
          <p>
            <strong>Note:</strong> a famous quirk of scorpions is that they glow a
            bright blue-green under ultraviolet (UV) light, a property still being
            researched.
          </p>
        </>
      }
      habitat={
        <p>
          Scorpions live on every continent except Antarctica, and although they are
          most associated with deserts, they also occupy grasslands, forests, caves,
          and mountains. They shelter under rocks, in burrows, or in crevices by day
          and are mostly active at night.
        </p>
      }
      diet={
        <p>
          Scorpions are carnivores that prey on insects, spiders, and other small
          animals. They seize prey with their pincers and, when needed, use the
          venomous sting to subdue it. Many can survive long periods between meals and
          have very low metabolic rates, which helps them endure harsh environments.
        </p>
      }
      behavior={
        <p>
          Scorpions are mostly solitary, nocturnal hunters that detect prey through
          vibrations and touch using fine sensory hairs and comb-like organs on the
          underside of the body. The sting is used both to subdue prey and in defence.
          Females give birth to live young, which often ride on the mother&apos;s back
          until their first moult.
        </p>
      }
      humanInteraction={
        <p>
          Scorpions are widely feared, but most species pose little danger to people,
          and they play a useful role controlling insect populations. A minority of
          species do have medically significant venom, so caution is warranted in
          regions where those occur. For any sting or medical concern, follow
          professional and local medical guidance rather than advice from this page.
        </p>
      }
      faqs={[
        {
          question: "Are scorpions dangerous to humans?",
          answer:
            "Most are not. All scorpions are venomous, but the great majority deliver a sting roughly comparable to a bee or wasp for a healthy adult. Only a small number of species have venom of serious medical concern. This page is educational only — for any sting, follow professional and local medical guidance.",
        },
        {
          question: "Why do scorpions glow under UV light?",
          answer:
            "Scorpions fluoresce a bright blue-green under ultraviolet light because of substances in their outer cuticle. The reason is still studied — suggested ideas include helping scorpions detect light levels or find one another — but the glow is widely used by researchers to locate scorpions at night.",
        },
        {
          question: "Are scorpions insects?",
          answer:
            "No. Scorpions are arachnids, in the same broad group as spiders, ticks, and mites — not insects. Like other arachnids they have eight legs (plus a pair of pincers), rather than the six legs of insects.",
        },
        {
          question: "What do scorpions eat?",
          answer:
            "Scorpions are carnivores that prey on insects, spiders, and other small animals, grabbing them with their pincers and using the sting when necessary. Their slow metabolism lets many species go a long time between meals.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Scorpiones" },
        { label: "Reference species", value: "Pandinus imperator (emperor scorpion)" },
        { label: "Class", value: "Arachnida" },
        { label: "Diet", value: "Carnivore (insects, spiders, small prey)" },
        { label: "Venom", value: "All venomous; most harmless to people" },
        { label: "Curiosity", value: "Fluoresce under UV light" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Range", value: "All continents except Antarctica" },
      ]}
      relatedLinks={[
        { label: "Spider Profile", href: "/animals/spider", description: "Another arachnid group" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "A diverse invertebrate group" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Desert and arid-land fauna in context" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
