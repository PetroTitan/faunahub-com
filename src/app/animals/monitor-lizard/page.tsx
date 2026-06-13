import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Monitor Lizard — Profile, Habitat, Diet & Behavior";
const description =
  "Monitor lizards (genus Varanus) are large, active reptiles. A group-level overview using the Nile monitor as a reference — habitat, diet, behaviour, and the Komodo dragon link.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/monitor-lizard",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("monitor-lizard"),
});

export default function MonitorLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Monitor Lizard"
      pageTitle={title}
      description={description}
      path="/animals/monitor-lizard"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Wild"]}
      image={getAnimalImage("monitor-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("monitor-lizard")}
      factsHeaderNote="“Monitor lizard” covers the genus Varanus, from small species to the Komodo dragon. The reference shown is the Nile monitor. These are wild reptiles with demanding needs; this page is educational, not a care or handling guide."
      overview={
        <>
          <p>
            Monitor lizards are large, active lizards of the genus
            <em> Varanus</em>, found across Africa, Asia, and Australasia, with
            dozens of species ranging from small forms to the giant Komodo
            dragon. This page is a group-level overview; the Nile monitor
            (<em>Varanus niloticus</em>) of Africa is used as a reference.
            Monitors are agile, intelligent reptiles with long necks, powerful
            limbs, and forked tongues used to track scent.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Monitor lizards occupy a wide range of habitats — rivers, wetlands,
            savanna, forest, rocky areas, and desert — depending on the species.
            The Nile monitor is strongly associated with water across much of
            Africa and is a capable swimmer and climber. Some monitors have been
            introduced outside their native ranges, where they can affect local
            wildlife. Habitat and range vary widely across the genus.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Monitors are carnivores with broad diets that, depending on species
            and size, can include insects, crustaceans, fish, eggs, smaller
            reptiles, birds, mammals, and carrion. Their active foraging and keen
            senses make them effective hunters and scavengers. This page describes
            general feeding ecology, not care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Monitor lizards are among the more active and inquisitive reptiles,
            using a forked tongue and good vision to find food. Many are strong
            swimmers, climbers, and diggers. They bask to regulate temperature and
            can be fast-moving. Large monitors are powerful animals with sharp
            claws and strong tails and can defend themselves, so they should be
            observed at a distance and not handled. Behaviour varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Monitor lizards are wild reptiles; some are kept by experienced
            reptile keepers but grow large and have demanding, specialised needs,
            so they are not casual pets, and this page is not a care guide. Some
            monitors are affected by hunting and the skin and pet trades, while
            others are widespread, and a few introduced populations are invasive.
            Conservation status varies by species and should be checked against
            current sources. This page is educational, not care or handling
            advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Monitor lizards have long bodies and necks, well-developed limbs
                with strong claws, muscular tails, and a long, deeply forked
                tongue. The Nile monitor is patterned with bands and spots of
                yellow on a darker background. Size ranges enormously across the
                genus, from modest species to the Komodo dragon, the largest
                living lizard. The forked tongue and active build help identify
                monitors.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Monitor lizards form the genus <em>Varanus</em>, which includes the
          Komodo dragon covered separately on FaunaHub. They are related to other
          lizards such as the iguana, gecko, and chameleon, but their active,
          carnivorous lifestyle and forked tongue set them apart.
        </p>
      }
      comparisonCallouts={[
        { href: "/animals/komodo-dragon", label: "The Komodo dragon — the largest monitor" },
      ]}
      faqs={[
        {
          question: "Is the Komodo dragon a monitor lizard?",
          answer:
            "Yes. The Komodo dragon is a monitor lizard — the largest living species in the genus Varanus. Monitor lizards as a group range from small species to this giant, which is covered separately on FaunaHub.",
        },
        {
          question: "Do monitor lizards make good pets?",
          answer:
            "Monitor lizards are wild reptiles that grow large and have demanding, specialised housing, heat, and diet needs, so they are not casual pets. This page is educational, not a care guide; consult a qualified reptile veterinarian or specialist before keeping any reptile.",
        },
        {
          question: "What do monitor lizards eat?",
          answer:
            "Monitors are carnivores with broad diets that vary by species and size, ranging from insects and crustaceans to fish, eggs, other reptiles, birds, mammals, and carrion. This page describes general feeding ecology rather than care instructions.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Monitor lizards (genus Varanus)" },
        { label: "Reference species", value: "Nile monitor (Varanus niloticus)" },
        { label: "Class", value: "Reptilia" },
        { label: "Diet", value: "Carnivore (broad)" },
        { label: "Range", value: "Africa, Asia, Australasia" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Komodo Dragon Profile", href: "/animals/komodo-dragon", description: "The largest monitor lizard" },
        { label: "Iguana Profile", href: "/animals/iguana" },
        { label: "Chameleon Profile", href: "/animals/chameleon" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES["monitor-lizard"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
