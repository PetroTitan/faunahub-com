import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/saki-monkey";
const TITLE = "Saki Monkey — Profile, the 'Flying Monkey' & Diet";
const DESC =
  "Explore saki monkeys (genus Pithecia): shaggy, long-tailed Amazonian monkeys famous for huge leaps — using the white-faced saki, where males and females look strikingly different.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("saki-monkey"),
});

export default function SakiMonkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Saki Monkey"
      scientificName="Pithecia pithecia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Amazon"]}
      image={getAnimalImage("saki-monkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("saki-monkey")}
      sources={ANIMAL_SOURCES["saki-monkey"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Saki monkeys (genus <em>Pithecia</em>) are shaggy-coated, long-tailed monkeys of
            the South American rainforest, related to uakaris and titis. The white-faced
            saki (<em>Pithecia pithecia</em>), shown here, is a well-known species in which
            the sexes look remarkably different: males are black with a striking pale,
            almost mask-like face, while females are a more uniform brownish-grey. Their
            thick fur and bushy, non-prehensile tail give sakis a distinctive, slightly
            wild appearance.
          </p>
          <p>
            Sakis are sometimes called &ldquo;flying monkeys&rdquo; for their spectacular
            leaping ability, bounding huge distances between trees through the forest.
          </p>
          <p>
            <strong>Note:</strong> there are several saki species; details here use the
            white-faced saki as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Saki monkeys live in the forests of northern and central South America, including
          the Amazon basin and the Guianas, in rainforest, gallery forest, and savanna
          woodland depending on the species. The white-faced saki favours the lower and
          middle levels of the forest, where it can leap among dense branches.
        </p>
      }
      diet={
        <p>
          Sakis are primarily seed predators and fruit-eaters: they specialise in seeds,
          including those inside hard, unripe fruit that they open with strong teeth, and
          they also eat ripe fruit, flowers, leaves, and some insects and small prey. This
          seed-focused diet, shared with their uakari relatives, lets them exploit foods
          many other monkeys cannot.
        </p>
      }
      behavior={
        <p>
          Saki monkeys are agile, fast-moving, and famous leapers, springing long distances
          between trunks and branches — the reason for the &ldquo;flying monkey&rdquo;
          nickname. White-faced sakis usually live in small family groups and are generally
          shy and quiet, slipping away through the canopy when disturbed. The marked
          difference in appearance between males and females (sexual dichromatism) is one of
          their most notable traits.
        </p>
      }
      humanInteraction={
        <p>
          Saki monkeys are appealing, agile rainforest animals and are sometimes seen in
          zoos, but in the wild they depend on intact forest and can be affected by
          deforestation, fragmentation, and hunting or the pet trade in some areas. Many
          remain reasonably widespread, while some species are of greater concern. Consult
          authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are saki monkeys called 'flying monkeys'?",
          answer:
            "Because of their leaping. Sakis are exceptional jumpers, able to launch themselves long distances between trees and branches in a single bound, seeming almost to fly through the forest. This agility helps them travel and escape danger in the dense canopy.",
        },
        {
          question: "Why do male and female white-faced sakis look so different?",
          answer:
            "The white-faced saki shows strong sexual dichromatism: males are black with a pale, mask-like face, while females are brownish-grey with a plainer face. This difference likely helps with recognition and mate choice. It's striking enough that males and females were once mistaken for different species.",
        },
        {
          question: "What do saki monkeys eat?",
          answer:
            "Sakis are mainly seed predators and fruit-eaters. They use strong teeth to open hard, unripe fruit and eat the seeds inside, along with ripe fruit, flowers, leaves, and some insects or small prey. This seed-focused diet, like that of uakaris, lets them use foods other monkeys can't.",
        },
        {
          question: "Do sakis have prehensile tails?",
          answer:
            "No. Despite their long, bushy tails, saki monkeys do not have prehensile (grasping) tails like some other New World monkeys. Their tails aid balance during their dramatic leaps and climbing rather than gripping branches.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Pithecia pithecia (white-faced saki)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Diet", value: "Seed predator & fruit-eater" },
        { label: "Nickname", value: "'Flying monkey' (great leaper)" },
        { label: "Sexes", value: "Look very different (dichromatism)" },
        { label: "Tail", value: "Long, bushy, NOT prehensile" },
        { label: "Range", value: "Northern & central South America" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Uakari Profile", href: "/animals/uakari", description: "A close short-tailed relative" },
        { label: "Marmoset Profile", href: "/animals/marmoset", description: "A tiny New World monkey" },
        { label: "Tamarin Profile", href: "/animals/tamarin", description: "Another small New World monkey" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
