import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Zebra — Profile, Habitat, Diet & Behavior";
const description =
  "Equus: three species of African equids. Stripes, habitats from plains to mountain to arid, herd behaviour, grazing ecology, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/zebra",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function ZebraPage() {
  return (
    <AnimalProfileLayout
      commonName="Zebra"
      pageTitle={title}
      description={description}
      path="/animals/zebra"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Equid", "Herbivore"]}
      factsHeaderNote="Three living zebra species are recognised: plains, mountain, and Grévy's zebra."
      overview={
        <>
          <p>
            Zebras are African members of the horse family (Equidae), genus <em>Equus</em>.
            Three living species are currently recognised: the plains zebra (
            <em>E. quagga</em>), the mountain zebra (<em>E. zebra</em>) and Grévy&apos;s zebra
            (<em>E. grevyi</em>). All three are characterised by black-and-white striping,
            though the pattern and the species&apos; ecology differ significantly.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Plains zebras are the most widespread, occupying savannas, grasslands, and open
            woodlands across much of east and southern Africa. Mountain zebras inhabit
            rugged mountainous and rocky terrain in parts of southern Africa. Grévy&apos;s
            zebra is found in the more arid landscapes of the Horn of Africa, particularly
            in northern Kenya and Ethiopia.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Zebras are grazers, feeding primarily on grasses. Plains zebras in particular
            are notable for taking coarse, fibrous grasses that other ungulates avoid, and
            for opening up grazing succession that benefits other species. Water dependence
            varies between species; Grévy&apos;s zebra is more drought-tolerant than the
            plains zebra.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Plains and mountain zebras typically live in stable family groups (&quot;harems&quot;)
            consisting of an adult stallion, several mares, and their dependent young.
            Bachelor males form separate groups. Grévy&apos;s zebra has a different social
            structure with much looser, more flexible groupings and territorial adult males.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Conservation pressures vary by species. Plains zebra populations are generally
            more resilient. Mountain and Grévy&apos;s zebras are both of considerably more
            concern, with relatively small wild populations and significant pressures from
            habitat loss, water competition with livestock, and historic hunting. Status
            should be checked species-by-species on the IUCN Red List.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Zebras are part of the horse family Equidae, which also includes domestic horses,
          donkeys, and wild asses. African ungulates that overlap with zebras in habitat and
          ecology include wildebeest, gazelles, and other grazing species.
        </p>
      }
      faqs={[
        {
          question: "Why do zebras have stripes?",
          answer:
            "Hypotheses include thermoregulation, social recognition, and visual confusion of predators or biting insects. Recent experimental work supports a role in deterring biting flies (such as tabanids) as one functional explanation. Stripes likely serve multiple purposes rather than a single one.",
        },
        {
          question: "Are zebras horses?",
          answer:
            "Zebras and horses are both members of the family Equidae, but they are not the same species. The two will not normally interbreed in the wild; intentional crossbreeding in captivity produces sterile or near-sterile hybrids ('zorses' or 'zonkeys').",
        },
        {
          question: "Can zebras be domesticated?",
          answer:
            "Despite occasional attempts, zebras have not been successfully domesticated in the way horses or donkeys have. They have a different temperament, react strongly to handling, and are difficult to train consistently. They are not suitable working or riding animals as a species.",
        },
        {
          question: "Are zebra patterns unique to each individual?",
          answer:
            "Yes. Each zebra's stripe pattern is distinctive — comparable to a fingerprint in this respect — and individual recognition by pattern is used in wild-animal research and monitoring.",
        },
      ]}
      quickFacts={[
        { label: "Genus", value: "Equus" },
        { label: "Living species", value: "3 (plains, mountain, Grévy's)" },
        { label: "Family", value: "Equidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Grazer (grasses)" },
        { label: "Social structure", value: "Varies by species" },
        { label: "Primary habitat", value: "Savanna, grassland, mountain, arid scrub" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "IUCN Status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Giraffe Profile", href: "/animals/giraffe", description: "Tallest extant land animal" },
        { label: "Elephant Profile", href: "/animals/elephant", description: "African megafauna" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
