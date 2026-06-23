import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/flat-headed-cat";
const TITLE = "Flat-headed Cat — Profile of a Fishing Wild Cat of Southeast Asia";
const DESC =
  "Discover the flat-headed cat (Prionailurus planiceps): a small, endangered wetland cat of Southeast Asia with a low flat head and part-webbed feet, adapted for catching fish and frogs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("flat-headed-cat"),
});

export default function FlatHeadedCatPage() {
  return (
    <AnimalProfileLayout
      commonName="Flat-headed Cat"
      scientificName="Prionailurus planiceps"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Wetland", "Asia"]}
      image={getAnimalImage("flat-headed-cat") ?? undefined}
      galleryImages={getAnimalGalleryImages("flat-headed-cat")}
      sources={ANIMAL_SOURCES["flat-headed-cat"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The flat-headed cat (<em>Prionailurus planiceps</em>) is a small, secretive wild cat of
            Southeast Asia, named for its distinctive long, low, flattened head and close-set, forward
            eyes. About the size of a small domestic cat, it is one of the most water-loving cats in the
            world and is strongly tied to rivers, swamps, and other wetlands.
          </p>
          <p>
            Several features mark it as a fishing specialist: partly webbed feet, claws that do not fully
            retract into their sheaths, and sharp, pointed teeth well suited to gripping slippery prey.
            Its eyes are set high and far forward, helpful for judging the position of prey at the water&apos;s
            surface.
          </p>
          <p>
            The flat-headed cat lives on the Malay Peninsula, Borneo, and Sumatra, and is listed as
            Endangered on the IUCN Red List, largely because the lowland wetlands it needs are being
            drained, polluted, and converted.
          </p>
        </>
      }
      habitat={
        <p>
          This cat is a wetland specialist, found chiefly in lowland tropical forest close to water —
          along rivers and streams and in swampy areas and peat swamp forest. It rarely strays far from
          freshwater, and the destruction of these lowland wetlands for agriculture (including oil-palm
          plantations), aquaculture, and settlement is the main pressure on the species.
        </p>
      }
      diet={
        <p>
          The flat-headed cat feeds heavily on aquatic prey — fish, frogs, and crustaceans — and also
          takes small rodents and other small animals. Its teeth and partly webbed paws suit a diet of
          slippery, wriggling prey caught in or beside the water, and captive cats have been seen
          &ldquo;washing&rdquo; food and dipping their heads to grab items underwater.
        </p>
      }
      behavior={
        <p>
          Flat-headed cats are nocturnal and rarely seen, which keeps much of their natural behaviour
          poorly known. They are thought to be solitary and to forage along watercourses at night. Their
          strong association with water sets them apart from most cats, which tend to avoid getting wet.
        </p>
      }
      humanInteraction={
        <p>
          The flat-headed cat is Endangered, and its decline is driven mainly by the loss and degradation
          of lowland freshwater habitats, along with water pollution and reduced fish stocks. Protecting
          intact wetland and riverine forest is central to its survival. Consult the IUCN Red List for the
          current assessment.
        </p>
      }
      faqs={[
        {
          question: "Why is it called the flat-headed cat?",
          answer:
            "Because of its unusually long, low, and flattened head, with eyes set close together and far forward. This profile, together with part-webbed feet and non-fully-retractable claws, suits a cat that hunts in and around water.",
        },
        {
          question: "Does the flat-headed cat really catch fish?",
          answer:
            "Yes. It is one of the most aquatic of the small cats and feeds largely on fish, frogs, and crustaceans. Its pointed teeth and partly webbed paws are adaptations for gripping slippery prey at the water's edge.",
        },
        {
          question: "How is it related to the fishing cat?",
          answer:
            "Both belong to the genus Prionailurus, the Asian leopard-cat group, and both are wetland hunters — but they are separate species. The fishing cat is larger; the flat-headed cat is smaller and has its characteristic low, flat head.",
        },
        {
          question: "Is the flat-headed cat endangered?",
          answer:
            "Yes — it is listed as Endangered on the IUCN Red List, primarily because the lowland wetlands it depends on are being drained, polluted, and converted to other uses. Check the IUCN Red List for the latest status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Prionailurus planiceps" },
        { label: "Class", value: "Mammalia" },
        { label: "Group", value: "Prionailurus (Asian leopard-cat group)" },
        { label: "Range", value: "Malay Peninsula, Borneo, Sumatra" },
        { label: "Habitat", value: "Lowland wetlands, riverbanks, swamp forest" },
        { label: "Diet", value: "Fish, frogs, crustaceans, small animals" },
        { label: "Adaptations", value: "Flat head, part-webbed feet, gripping teeth" },
        { label: "IUCN status", value: "Endangered" },
      ]}
      relatedLinks={[
        { label: "Fishing Cat Profile", href: "/animals/fishing-cat", description: "A larger water-hunting relative" },
        { label: "Kodkod Profile", href: "/animals/kodkod", description: "The smallest wild cat in the Americas" },
        { label: "Ocelot Profile", href: "/animals/ocelot", description: "Another small spotted cat" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian wetland mammals in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
