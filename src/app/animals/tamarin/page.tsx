import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tamarin";
const TITLE = "Tamarin — Profile, the Golden Lion Tamarin & Conservation";
const DESC =
  "Explore tamarins (family Callitrichidae): small, often flamboyant South American monkeys — using the golden lion tamarin, a conservation success story still classed as Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("tamarin"),
});

export default function TamarinPage() {
  return (
    <AnimalProfileLayout
      commonName="Tamarin"
      scientificName="Leontopithecus rosalia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "South America"]}
      image={getAnimalImage("tamarin") ?? undefined}
      galleryImages={getAnimalGalleryImages("tamarin")}
      sources={ANIMAL_SOURCES.tamarin}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Tamarins are small New World monkeys of the family Callitrichidae — the same
            family as marmosets — found in the forests of Central and South America. Many
            are strikingly ornamented, with manes, moustaches, or crests. The golden lion
            tamarin (<em>Leontopithecus rosalia</em>), shown here, is one of the most
            beautiful: a small monkey wreathed in a flame-orange, lion-like mane, native to
            the Atlantic Forest of Brazil.
          </p>
          <p>
            The golden lion tamarin is also a famous conservation icon — brought back from
            the brink through captive breeding and reintroduction — though it remains
            Endangered.
          </p>
          <p>
            <strong>Conservation note:</strong> tamarin status varies by species; the
            golden lion tamarin is Endangered due to habitat loss and fragmentation. Verify
            current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Tamarins live in tropical forests from Central America through the Amazon and into
          the Atlantic Forest of Brazil, depending on the species. The golden lion tamarin
          is restricted to lowland Atlantic coastal forest in a small area of Rio de Janeiro
          state — a habitat that has been heavily reduced and fragmented, which is central
          to its conservation story.
        </p>
      }
      diet={
        <p>
          Tamarins are omnivores, eating fruit, flowers, nectar, tree gum and sap, insects,
          spiders, and small vertebrates such as frogs and lizards. The golden lion tamarin
          forages actively through the canopy, often probing bark crevices and bromeliads
          with its long fingers to extract hidden insects and other small prey.
        </p>
      }
      behavior={
        <p>
          Like marmosets, tamarins live in cooperative family groups and commonly raise
          twins, with the father and other group members helping to carry and care for the
          infants. They are agile, claw-equipped climbers active by day. Golden lion
          tamarins sleep in tree holes for safety and warmth and use scent and calls to
          defend a group territory.
        </p>
      }
      humanInteraction={
        <p>
          The golden lion tamarin is a flagship of tropical conservation: decades of
          captive breeding in zoos, reintroduction to protected forest, and habitat
          restoration (including forest corridors) helped pull it back from near-extinction.
          It is still Endangered, and its survival depends on protecting and reconnecting
          Atlantic Forest. Other tamarins face varying levels of threat. Consult the IUCN
          Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a tamarin and a marmoset?",
          answer:
            "They are close relatives in the same family (Callitrichidae) and look broadly similar, but differ in details — for example, marmosets have specialised chisel-like teeth for gnawing bark to feed on gum, while tamarins generally lack that adaptation and rely more on fruit, insects, and other foods. Both are small, group-living New World monkeys.",
        },
        {
          question: "Why is the golden lion tamarin famous in conservation?",
          answer:
            "It is a celebrated conservation success story. Reduced to very low numbers by Atlantic Forest destruction, the species was bolstered through international captive breeding, reintroduction into protected forest, and habitat restoration. Numbers recovered substantially — though it remains Endangered and dependent on ongoing protection.",
        },
        {
          question: "Why is it called a 'lion' tamarin?",
          answer:
            "Because of its mane. The golden lion tamarin has a thick, flame-orange ruff of fur around its face that resembles a lion's mane, which — together with its golden colour — inspired the name. It is one of the most striking-looking of all small monkeys.",
        },
        {
          question: "What do tamarins eat?",
          answer:
            "Tamarins are omnivores, feeding on fruit, flowers, nectar, tree gum and sap, insects, spiders, and small vertebrates like frogs and lizards. The golden lion tamarin often uses its long fingers to probe bark and bromeliads for hidden prey.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Leontopithecus rosalia (golden lion tamarin)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Family", value: "Callitrichidae (with marmosets)" },
        { label: "Diet", value: "Omnivore (fruit, insects, gum, small prey)" },
        { label: "Breeding", value: "Often twins; cooperative group care" },
        { label: "Signature trait", value: "Flame-orange lion-like mane" },
        { label: "Range", value: "Atlantic Forest, Brazil (this species)" },
        { label: "IUCN Status", value: "Endangered (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Marmoset Profile", href: "/animals/marmoset", description: "Its close relative in the same family" },
        { label: "Gibbon Profile", href: "/animals/gibbon", description: "A small ape (Old World)" },
        { label: "Sloth Profile", href: "/animals/sloth", description: "Another Atlantic Forest / Neotropical mammal" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
