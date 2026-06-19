import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bullfrog";
const TITLE = "American Bullfrog — Profile, Habitat, Diet & Call";
const DESC =
  "Explore the American bullfrog (Lithobates catesbeianus): one of the largest North American frogs, a powerful, deep-voiced predator that is also invasive where introduced.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("bullfrog"),
});

export default function BullfrogPage() {
  return (
    <AnimalProfileLayout
      commonName="American Bullfrog"
      scientificName="Lithobates catesbeianus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Carnivore"]}
      image={getAnimalImage("bullfrog") ?? undefined}
      galleryImages={getAnimalGalleryImages("bullfrog")}
      sources={ANIMAL_SOURCES.bullfrog}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The American bullfrog (<em>Lithobates catesbeianus</em>) is one of the
            largest frogs in North America, a heavy-bodied amphibian of ponds,
            lakes, and slow waterways. It is named for the male&apos;s deep,
            resonant call, often likened to the bellow of a bull, which carries far
            across the water on warm nights.
          </p>
          <p>
            A powerful, opportunistic predator, the bullfrog will eat almost any
            animal it can overpower. Native to eastern and central North America, it
            has also been introduced to many other regions, where it can become a
            damaging invasive species.
          </p>
          <p>
            <strong>Conservation note:</strong> in its native range the American
            bullfrog is widespread and not of concern, but where introduced it is
            often managed as an invasive species that harms native wildlife. Verify
            status and regional context through authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Bullfrogs favour warm, permanent fresh water with plenty of vegetation —
          ponds, lakes, marshes, and slow streams. Native to eastern and central
          North America, introduced populations are now established in parts of the
          western US and in many countries around the world.
        </p>
      }
      diet={
        <p>
          The American bullfrog is a voracious, opportunistic carnivore. It eats
          insects and other invertebrates, but also fish, other frogs, small
          reptiles, small mammals, and birds when it can catch them. This broad,
          aggressive appetite is part of why introduced bullfrogs can disrupt native
          ecosystems.
        </p>
      }
      behavior={
        <p>
          Bullfrogs are largely aquatic and most active in warm months, with males
          calling to defend territories and attract mates. The aquatic tadpoles are
          large and can take a year or more to transform into froglets. In cold
          regions, bullfrogs overwinter in a dormant state.
        </p>
      }
      humanInteraction={
        <p>
          American bullfrogs are familiar in their native range and are sometimes
          farmed or harvested. The main ecological concern is their role as an
          introduced invasive species: outside their native range they prey on and
          compete with native amphibians and other wildlife and can help spread
          amphibian diseases. Management follows regional guidance and authoritative
          sources.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a bullfrog?",
          answer:
            "The name comes from the male's deep, resonant call, which can sound like the distant bellow of a bull. The call carries a long way across water and is used to defend territory and attract mates.",
        },
        {
          question: "What do American bullfrogs eat?",
          answer:
            "Almost anything they can overpower. Bullfrogs are opportunistic carnivores that take insects and other invertebrates as well as fish, other frogs, small reptiles, small mammals, and birds. This aggressive appetite contributes to their impact where introduced.",
        },
        {
          question: "Why are bullfrogs considered invasive in some places?",
          answer:
            "Outside their native North American range, introduced American bullfrogs can prey heavily on and outcompete native amphibians and other small animals, and may help spread amphibian diseases. For these reasons they are managed as an invasive species in many regions.",
        },
        {
          question: "How big do bullfrogs get?",
          answer:
            "The American bullfrog is among the largest North American frogs. Exact size varies with age, sex, and conditions, with females often reaching larger sizes, and the species is notably heavy-bodied compared with many other frogs.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lithobates catesbeianus" },
        { label: "Class", value: "Amphibia" },
        { label: "Order", value: "Anura (frogs)" },
        { label: "Diet", value: "Opportunistic carnivore" },
        { label: "Call", value: "Deep, bellowing (males)" },
        { label: "Native range", value: "Eastern & central North America" },
        { label: "Elsewhere", value: "Invasive where introduced" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Frog Profile", href: "/animals/frog", description: "Frogs as a whole (order Anura)" },
        { label: "Tree Frog Profile", href: "/animals/tree-frog", description: "Climbing frogs" },
        { label: "Toad Profile", href: "/animals/toad", description: "Drier-skinned frog relatives" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
      ]}
    />
  );
}
