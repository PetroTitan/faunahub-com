import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/oncilla";
const TITLE = "Oncilla — Profile, the Little Spotted Cat of South American Forests";
const DESC =
  "Explore the oncilla (Leopardus tigrinus): one of the smallest wild cats in the Americas — a delicate, spotted, little-known forest hunter facing growing conservation concern.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("oncilla"),
});

export default function OncillaPage() {
  return (
    <AnimalProfileLayout
      commonName="Oncilla"
      scientificName="Leopardus tigrinus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Vulnerable"]}
      image={getAnimalImage("oncilla") ?? undefined}
      galleryImages={getAnimalGalleryImages("oncilla")}
      sources={ANIMAL_SOURCES.oncilla}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The oncilla (<em>Leopardus tigrinus</em>), also called the little spotted cat or tigrina, is
            one of the smallest wild cats in the Americas — a slender, delicate creature only a little
            larger than a domestic cat, with a tawny coat patterned in dark rosettes and spots and a long
            tail. It belongs to the same group of small Neotropical cats as the ocelot and margay, which it
            closely resembles in miniature.
          </p>
          <p>
            The oncilla is shy, nocturnal, and one of the least-known of all cats; even its classification is
            still being worked out, with what was long treated as one species now thought to include more
            than one. As with several small cats, dark (melanistic) individuals occur.
          </p>
          <p>
            <strong>Conservation note:</strong> the oncilla is classified as Vulnerable, with declining
            populations. Verify current status and the latest taxonomy at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Oncillas live in Central and South America, in a range of forest and scrub habitats — montane
          cloud forest, rainforest, dry forest, and savanna woodland — with different populations favouring
          different environments. They depend on natural habitat with good cover and are sensitive to its
          loss and fragmentation.
        </p>
      }
      diet={
        <p>
          The oncilla is a carnivore that hunts small prey — rodents and other small mammals, birds,
          lizards, and invertebrates. Small and agile, it forages mostly at night, taking prey on the
          ground and in low vegetation, and it climbs well. Its diet of abundant small animals suits its
          delicate build.
        </p>
      }
      behavior={
        <p>
          Oncillas are solitary, secretive, and mainly nocturnal, which — together with their small size
          and forest home — makes them very hard to observe, so much of their natural behaviour is still
          poorly known. They are agile climbers as well as ground hunters. Their spotted coat provides
          camouflage in dappled forest light, and melanistic (all-dark) individuals are not uncommon. The
          oncilla&apos;s taxonomy has been repeatedly revised: studies suggest the traditional
          &ldquo;oncilla&rdquo; actually comprises more than one species (such as a northern and a southern
          form), and research into where one ends and another begins is ongoing.
        </p>
      }
      humanInteraction={
        <p>
          The oncilla is classified as Vulnerable and declining, threatened mainly by deforestation and
          habitat fragmentation, along with historical hunting for fur, road deaths, and pressures from
          expanding farmland and settlement. Its small populations, patchy distribution, and unresolved
          taxonomy complicate conservation. As a wild cat, it is not suited to life as a pet. Consult the
          IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "How big is an oncilla?",
          answer:
            "Very small — it's one of the smallest cats in the Americas, only a little larger than a domestic cat but more slender and delicate, with a long tail. It looks like a miniature version of its relatives the ocelot and margay, sharing their spotted, rosetted coat at a smaller scale.",
        },
        {
          question: "Is the oncilla one species or several?",
          answer:
            "That's actively debated. What was long treated as a single species (Leopardus tigrinus) is now thought to include more than one — for example a northern and a southern form — and the boundaries are still being studied. So 'oncilla' is best understood as a small-cat complex whose taxonomy is being revised, which is why sources may differ.",
        },
        {
          question: "Why is the oncilla so little known?",
          answer:
            "Because it's small, shy, mostly nocturnal, and lives in forests, the oncilla is rarely seen and hard to study, so many details of its behaviour and ecology remain uncertain. Its patchy distribution and the ongoing taxonomic uncertainty add to how little is firmly known about it.",
        },
        {
          question: "Is the oncilla endangered?",
          answer:
            "It's classified as Vulnerable and declining. The main threats are deforestation and habitat fragmentation, plus historical fur hunting, road deaths, and pressure from farmland and settlement. Its small, scattered populations and unresolved taxonomy make conservation harder. Always check the IUCN Red List for the current status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Leopardus tigrinus" },
        { label: "Also called", value: "Little spotted cat, tigrina" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Size", value: "Among the smallest American cats" },
        { label: "Relatives", value: "Ocelot, margay" },
        { label: "Taxonomy", value: "Likely more than one species (under study)" },
        { label: "Activity", value: "Nocturnal, solitary, secretive" },
        { label: "Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Margay Profile", href: "/animals/margay", description: "Its small, tree-climbing relative" },
        { label: "Ocelot Profile", href: "/animals/ocelot", description: "A larger relative in the same group" },
        { label: "Jaguarundi Profile", href: "/animals/jaguarundi", description: "Another small Neotropical cat" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
