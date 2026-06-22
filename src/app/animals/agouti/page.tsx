import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/agouti";
const TITLE = "Agouti — Profile, the Rainforest Rodent That Plants the Forest";
const DESC =
  "Explore agoutis (genus Dasyprocta): long-legged Neotropical rodents that run on tiptoe — and, by burying seeds they later forget, are key planters of rainforest trees like the Brazil nut.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("agouti"),
});

export default function AgoutiPage() {
  return (
    <AnimalProfileLayout
      commonName="Agouti"
      scientificName="genus Dasyprocta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Rainforest"]}
      image={getAnimalImage("agouti") ?? undefined}
      galleryImages={getAnimalGalleryImages("agouti")}
      sources={ANIMAL_SOURCES.agouti}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Agoutis (genus <em>Dasyprocta</em>) are sleek, long-legged rodents of the forests and
            woodlands of Central and South America, roughly the size of a large rabbit. With glossy
            brown to orange fur, a slender body, and tiny hooflike claws, an agouti looks a little
            like a cross between a guinea pig and a small deer, and it moves with surprising grace,
            running and even leaping on its toes. They are close relatives of the larger pacas and
            of guinea pigs.
          </p>
          <p>
            Agoutis are among the most important seed-planters of the Neotropical forest: by burying
            caches of seeds and nuts to eat later — and then forgetting some — they plant the next
            generation of trees, including hard-shelled nuts that few other animals can even open.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;agouti&rdquo; covers several Dasyprocta species; details
            here describe the group broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Agoutis live across Central and South America (and some Caribbean islands), in tropical
          rainforest, dry forest, savanna woodland, and thickets, often near water. They shelter in
          burrows, hollows, and dense vegetation, and many are found in forests rich in fruiting and
          nut-bearing trees, on whose seeds they depend.
        </p>
      }
      diet={
        <p>
          Agoutis are herbivores that feed mainly on fruit, seeds, and nuts, along with some leaves,
          roots, and other plant matter. They are famous for their ability to gnaw open extremely
          hard nuts — most notably Brazil nuts — with their powerful, chisel-like incisors, being
          among the very few animals that can crack them. When food is plentiful they bury surplus
          seeds in scattered caches to retrieve in leaner times.
        </p>
      }
      behavior={
        <p>
          Agoutis are mostly active by day (though they may shift toward dusk where disturbed) and
          tend to be wary and quick to flee, freezing or bolting in bounding runs when alarmed. The
          key to their ecological importance is &ldquo;scatter-hoarding&rdquo;: they bury seeds and
          nuts one by one across the forest floor for later, and the caches they fail to recover
          germinate into new plants — making agoutis crucial seed-dispersers and effectively the
          planters of hard-seeded trees like the Brazil nut, whose seeds depend on agoutis to open
          the pods and bury the nuts. They often form monogamous pairs and defend a territory, and
          they communicate with alarm calls and foot-thumping.
        </p>
      }
      humanInteraction={
        <p>
          Agoutis are hunted for meat in many areas and can raid crops, but most species remain
          common and several are quite adaptable, living in secondary forest and near settlements.
          Their role as seed-dispersers makes them ecologically valuable far beyond their numbers,
          especially for the regeneration of nut-bearing trees and the economically important Brazil
          nut. Some restricted-range species are of greater conservation concern. Consult the IUCN
          Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What is an agouti?",
          answer:
            "An agouti is a long-legged Neotropical rodent (genus Dasyprocta), about the size of a large rabbit, with glossy fur and tiny hooflike claws. Related to guinea pigs and pacas, it lives in Central and South American forests and is known for running gracefully on its toes and for being one of the rainforest's most important seed-planters.",
        },
        {
          question: "How do agoutis help plant the forest?",
          answer:
            "Through 'scatter-hoarding.' When seeds and nuts are abundant, agoutis bury surplus ones in many small caches across the forest floor to eat later. Inevitably they forget or fail to retrieve some, and those buried seeds germinate into new trees. This makes agoutis crucial seed-dispersers — effectively planting the next generation of rainforest, including hard-seeded trees.",
        },
        {
          question: "Can agoutis really open Brazil nuts?",
          answer:
            "Yes — they're among the very few animals that can. With powerful, chisel-like incisors, agoutis gnaw through the hard pods and shells of Brazil nuts to reach the seeds, then bury many of them. Because the nuts depend on agoutis both to open the tough pods and to scatter and bury the seeds, the Brazil nut tree's regeneration is closely tied to these rodents.",
        },
        {
          question: "Are agoutis related to guinea pigs?",
          answer:
            "Yes. Agoutis belong to the same broad group of South American rodents as guinea pigs and their larger relatives the pacas, capybaras, and others. So while an agouti looks rather like a small, leggy deer-guinea-pig, it's genuinely a close cousin of the familiar guinea pig.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Dasyprocta (agoutis)" },
        { label: "Class", value: "Mammalia (rodent)" },
        { label: "Relatives", value: "Guinea pigs, pacas" },
        { label: "Size", value: "About large-rabbit-sized" },
        { label: "Diet", value: "Herbivore (fruit, seeds, nuts)" },
        { label: "Superpower", value: "Cracks Brazil nuts; buries seeds" },
        { label: "Ecological role", value: "Key rainforest seed-planter" },
        { label: "Range", value: "Central & South America" },
      ]}
      relatedLinks={[
        { label: "Capybara Profile", href: "/animals/capybara", description: "A giant relative" },
        { label: "Porcupine Profile", href: "/animals/porcupine", description: "Another large rodent" },
        { label: "Beaver Profile", href: "/animals/beaver", description: "Another ecosystem-shaping rodent" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
