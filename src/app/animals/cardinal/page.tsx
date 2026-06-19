import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cardinal";
const TITLE = "Northern Cardinal — Profile, Habitat, Diet & Song";
const DESC =
  "Explore the northern cardinal (Cardinalis cardinalis): a vivid red North American songbird with a pointed crest, a familiar garden and woodland bird known for its clear whistled song.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("cardinal"),
});

export default function CardinalPage() {
  return (
    <AnimalProfileLayout
      commonName="Northern Cardinal"
      scientificName="Cardinalis cardinalis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Songbird", "Garden bird"]}
      image={getAnimalImage("cardinal") ?? undefined}
      galleryImages={getAnimalGalleryImages("cardinal")}
      sources={ANIMAL_SOURCES.cardinal}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The northern cardinal (<em>Cardinalis cardinalis</em>) is one of the
            most recognisable songbirds in North America. The male is a brilliant
            red with a black face mask and a pointed crest, while the female is a
            warm brown with red highlights. Both sexes have a stout, cone-shaped
            bill suited to cracking seeds.
          </p>
          <p>
            A common bird of gardens, woodland edges, and shrubland, the cardinal is
            a year-round resident across much of the eastern and central United
            States and beyond, and a frequent visitor to bird feeders.
          </p>
          <p>
            <strong>Conservation note:</strong> the northern cardinal is widespread,
            common, and even expanding in parts of its range; it is not of
            conservation concern. For current details, consult authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Northern cardinals favour woodland edges, thickets, shrubland, gardens,
          and parks across the eastern and central United States, parts of the
          southwest, Mexico, and Central America. They thrive in dense low cover and
          have adapted well to suburban landscapes.
        </p>
      }
      diet={
        <p>
          Cardinals feed mainly on seeds and grains, using their strong conical bill
          to crack them, along with fruit and insects — the latter especially
          important for feeding nestlings. They readily visit feeders stocked with
          seeds such as sunflower.
        </p>
      }
      behavior={
        <p>
          Cardinals are known for their clear, whistled songs, and unusually among
          North American songbirds, both males and females sing. They are generally
          seen in pairs during the breeding season and may form looser groups in
          winter. Males can be strongly territorial, sometimes even challenging
          their own reflection in windows.
        </p>
      }
      humanInteraction={
        <p>
          The northern cardinal is a much-loved backyard bird, a popular feeder
          visitor, and an emblem adopted by several US states and sports teams. It
          coexists well with people and is widespread and secure. For current status,
          consult authoritative bird references.
        </p>
      }
      faqs={[
        {
          question: "Why are male cardinals so red?",
          answer:
            "The male's bright red plumage comes from pigments obtained in its diet. The vivid colour plays a role in attracting mates and signalling quality, while the female's more subdued brown plumage offers better camouflage at the nest.",
        },
        {
          question: "Do female cardinals sing?",
          answer:
            "Yes. Unusually among North American songbirds, female northern cardinals sing as well as males. Pairs sometimes exchange song phrases, which may help coordinate breeding and territory.",
        },
        {
          question: "What do cardinals eat?",
          answer:
            "Cardinals eat mainly seeds and grains, cracked with their strong conical bill, plus fruit and insects. Insects are especially important for feeding young, and cardinals readily take seeds such as sunflower at feeders.",
        },
        {
          question: "Do cardinals migrate?",
          answer:
            "Generally no. Northern cardinals are mostly year-round residents and do not undertake long migrations, which is part of why they are such a familiar sight at feeders through winter in their range.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cardinalis cardinalis" },
        { label: "Class", value: "Aves" },
        { label: "Type", value: "Songbird (passerine)" },
        { label: "Diet", value: "Mainly seeds; fruit & insects" },
        { label: "Song", value: "Both sexes sing" },
        { label: "Movement", value: "Mostly year-round resident" },
        { label: "Habitat", value: "Woodland edge, shrubland, gardens" },
        { label: "Range", value: "Eastern & central North America" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Robin Profile", href: "/animals/robin", description: "Another familiar garden bird" },
        { label: "Sparrow Profile", href: "/animals/sparrow", description: "A common small songbird" },
        { label: "Magpie Profile", href: "/animals/magpie", description: "A bold, intelligent corvid" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing garden birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
