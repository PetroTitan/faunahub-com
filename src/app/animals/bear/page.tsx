import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Bear — Overview of Bear Species, Habitat & Behavior";
const description =
  "An overview of bears (family Ursidae): the eight living species, their diverse diets and habitats, hibernation, and the conservation pressures across their range.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/bear",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function BearPage() {
  return (
    <AnimalProfileLayout
      commonName="Bear"
      pageTitle={title}
      description={description}
      path="/animals/bear"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Carnivora", "Omnivore"]}
      factsHeaderNote="Eight living bear species exist. Specific traits cited below note which species they refer to."
      overview={
        <>
          <p>
            Bears are large mammals of the family Ursidae, with eight living species:
            brown bear, American black bear, Asian black bear, polar bear, sun bear,
            sloth bear, spectacled bear, and giant panda. They are members of the order
            Carnivora but exhibit a remarkable range of dietary strategies, from the
            largely herbivorous giant panda to the heavily carnivorous polar bear.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Bears occupy strikingly different habitats. Polar bears are circumpolar Arctic
            specialists associated with sea ice. Brown bears are widely distributed across
            northern Eurasia and North America in forests, tundra, and mountain habitats.
            Spectacled bears occupy Andean cloud forest. Sun bears and sloth bears are
            tropical forest species. Giant pandas are restricted to bamboo forests in
            mountainous parts of central China.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most bears are omnivores. Brown bears and American black bears, for example,
            commonly consume berries, nuts, roots, insects, fish (notably salmon during
            spawning runs), and ungulate prey or carrion as opportunity allows. Sloth bears
            specialise in termites and ants. Polar bears are predominantly carnivorous and
            hunt seals, particularly ringed seals. Giant pandas are almost exclusively
            bamboo-eaters despite their carnivoran ancestry.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Most adult bears are solitary outside of breeding and mother-cub care. Several
            species — including brown bears and American black bears in temperate and
            northern regions — enter a state of winter dormancy (often loosely called
            hibernation) characterised by metabolic suppression, lowered body temperature,
            and survival on stored fat reserves. Polar bears do not hibernate, although
            pregnant females enter dens for cub-rearing.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Conservation status varies substantially by species. Polar bears are particularly
            threatened by climate change and the loss of sea ice. Sun bears and sloth bears
            face significant habitat loss and trade pressures. Brown bears and American black
            bears include some populations that are relatively secure and others that are
            highly threatened. Status should always be checked species-by-species on the IUCN
            Red List.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Bears are part of the order Carnivora, which also includes felids (cats), canids
          (dogs), and mustelids (weasels and otters). Despite the name, the giant panda is a
          true bear, not a separate family. Koalas, sometimes called &quot;koala bears&quot;,
          are marsupials and not bears at all.
        </p>
      }
      faqs={[
        {
          question: "How many bear species exist?",
          answer:
            "Eight species of bears are currently recognised: brown bear, American black bear, Asian black bear, polar bear, sun bear, sloth bear, spectacled bear, and giant panda.",
        },
        {
          question: "Do all bears hibernate?",
          answer:
            "No. Many bear species — particularly brown bears, American black bears, and Asian black bears in temperate and northern regions — enter a state of winter dormancy, but the physiological definition of true hibernation varies between sources. Tropical bears and polar bears do not hibernate, although pregnant polar bear females enter dens to give birth.",
        },
        {
          question: "Is the giant panda really a bear?",
          answer:
            "Yes. Genetic evidence places the giant panda firmly within the family Ursidae. Its bamboo-based diet and unusual morphology long made its classification contested, but molecular work has resolved it as a true bear.",
        },
        {
          question: "Are bears dangerous to humans?",
          answer:
            "Most bear species avoid humans where possible. Risk of injury varies by species, context, and behaviour: surprise encounters, mothers with cubs, food-conditioned individuals, and certain regions of high overlap with humans carry the highest risk. Follow regionally specific bear-safety guidance in any area where bears are present.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Ursidae" },
        { label: "Living species", value: "8" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Carnivora" },
        { label: "Diet", value: "Most species omnivorous; varies by species" },
        { label: "Social structure", value: "Typically solitary (mothers with cubs)" },
        { label: "Range", value: "All continents except Africa, Australia, Antarctica" },
        { label: "IUCN Status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Panda Profile", href: "/animals/panda", description: "Ailuropoda melanoleuca — giant panda" },
        { label: "Wolf Profile", href: "/animals/wolf", description: "Other large carnivore of the north" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
