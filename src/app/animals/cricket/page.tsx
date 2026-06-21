import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cricket";
const TITLE = "Cricket — Profile, Chirping Songs, Diet & Behavior";
const DESC =
  "Explore crickets (family Gryllidae): jumping insects famous for the males' chirping songs, made by rubbing their wings together — important in food webs, folklore, and even as food.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("cricket"),
});

export default function CricketPage() {
  return (
    <AnimalProfileLayout
      commonName="Cricket"
      scientificName="family Gryllidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Singer"]}
      image={getAnimalImage("cricket") ?? undefined}
      galleryImages={getAnimalGalleryImages("cricket")}
      sources={ANIMAL_SOURCES.cricket}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Crickets (family Gryllidae) are familiar jumping insects best known for the
            cheerful chirping songs the males make on warm evenings. Typically brown or
            black, with a somewhat flattened body, long antennae, powerful hind legs for
            jumping, and (in females) a long needle-like egg-laying tube, crickets are
            relatives of grasshoppers and katydids. The field cricket
            (<em>Gryllus campestris</em>), shown here, is a classic example.
          </p>
          <p>
            Unlike cicadas, crickets sing by rubbing their wings together rather than
            buzzing, and they have long been woven into human culture as symbols of luck,
            home, and the sounds of summer and autumn nights.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;cricket&rdquo; covers many species; details here use
            the field cricket as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Crickets are found almost worldwide in grasslands, fields, woodlands, gardens, and
          around buildings, with different species in habitats from meadows to caves to
          forest floors. Many live in or on the ground, sheltering in burrows, under stones,
          or in vegetation and leaf litter, and some readily come indoors in cooler weather.
        </p>
      }
      diet={
        <p>
          Most crickets are omnivores, eating a mix of plant material — leaves, seeds, and
          fruit — along with fungi, decaying matter, and small invertebrates or insect eggs.
          This flexible diet helps them thrive in many habitats and makes them easy to rear,
          which is one reason crickets are widely farmed as food for pets and, increasingly,
          for people.
        </p>
      }
      behavior={
        <p>
          The male cricket&apos;s song is made by &ldquo;stridulation&rdquo; — rubbing a
          scraper on one wing against a file-like ridge on the other, producing the familiar
          chirp. Different species have distinct songs, and males use them to attract females
          and warn off rivals; remarkably, the chirp rate of some crickets rises with
          temperature, so their song can roughly indicate how warm it is. Crickets are mostly
          active at dusk and night, use their strong hind legs to leap from danger, and many
          males defend a burrow or small territory.
        </p>
      }
      humanInteraction={
        <p>
          Crickets are an important food source for many animals — birds, reptiles,
          amphibians, and small mammals — and a key part of many food webs. People keep them
          as &ldquo;singing&rdquo; pets in some cultures (notably parts of East Asia), rear
          them in huge numbers as feeder insects, and increasingly farm them as a sustainable
          protein for human food. They are harmless to people. Consult authoritative sources
          for species-specific details.
        </p>
      }
      faqs={[
        {
          question: "How do crickets make their chirping sound?",
          answer:
            "Male crickets sing by stridulation — rubbing a hard scraper on one forewing across a file-like ridge on the other, like running a fingernail along a comb. This produces the familiar chirp. Different species have distinctive songs, used mainly to attract females and ward off rival males.",
        },
        {
          question: "Can you tell the temperature from a cricket's chirp?",
          answer:
            "Roughly, yes, for some species. Because crickets are cold-blooded, the rate of their chirping tends to increase as it gets warmer. There are even rule-of-thumb formulas (such as counting chirps over a set time) that estimate the air temperature from a snowy tree cricket's song — a fun reflection of how their biology responds to heat.",
        },
        {
          question: "What do crickets eat?",
          answer:
            "Most crickets are omnivores, eating plant material like leaves, seeds, and fruit, along with fungi, decaying matter, and small invertebrates or eggs. Their broad, flexible diet helps them live in many habitats and makes them easy to farm as feeder insects and, increasingly, as food for people.",
        },
        {
          question: "Are crickets the same as grasshoppers?",
          answer:
            "They're related but different. Crickets and grasshoppers both belong to the order Orthoptera and have powerful jumping hind legs, but crickets typically have longer antennae, are often active at night, and sing by rubbing their wings together, whereas grasshoppers are usually day-active and make sound differently. Crickets are actually closer kin to katydids.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Gryllidae" },
        { label: "Reference species", value: "Gryllus campestris (field cricket)" },
        { label: "Order", value: "Orthoptera (with grasshoppers)" },
        { label: "Diet", value: "Mostly omnivore" },
        { label: "Sound", value: "Males chirp by rubbing wings (stridulation)" },
        { label: "Hind legs", value: "Powerful, for jumping" },
        { label: "Uses", value: "Feeder insect; farmed as food; 'singing' pets" },
        { label: "Range", value: "Almost worldwide" },
      ]}
      relatedLinks={[
        { label: "Grasshopper Profile", href: "/animals/grasshopper", description: "A close jumping relative" },
        { label: "Cicada Profile", href: "/animals/cicada", description: "Another loud singer (sings differently)" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "The most diverse insect group" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Insect fauna in context" },
      ]}
    />
  );
}
