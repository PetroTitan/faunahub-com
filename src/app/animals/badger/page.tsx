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

const title = "Badger — Profile, Habitat, Diet & Behavior";
const description =
  "Badgers are stocky, burrowing mammals. A group-level overview using the European badger as a reference species: setts, omnivorous diet, and nocturnal behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/badger",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("badger"),
});

export default function BadgerPage() {
  return (
    <AnimalProfileLayout
      commonName="Badger"
      pageTitle={title}
      description={description}
      path="/animals/badger"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Mustelid", "Omnivore"]}
      image={getAnimalImage("badger") ?? undefined}
      galleryImages={getAnimalGalleryImages("badger")}
      factsHeaderNote="“Badger” refers to several burrowing species across different regions. The reference species below is the European badger (Meles meles). Other badgers differ in range and habits."
      overview={
        <>
          <p>
            Badgers are stocky, short-legged burrowing mammals found across
            parts of Europe, Asia, North America, and Africa. Most belong to
            the weasel family, Mustelidae. This page is a group-level overview;
            the European badger (<em>Meles meles</em>) is used as a familiar
            reference species. Badgers are powerful diggers, generally
            nocturnal, and best known for their striking black-and-white facial
            markings (in several species).
          </p>
        </>
      }
      habitat={
        <>
          <p>
            European badgers favour woodland and woodland edges, hedgerows,
            and pasture where they dig extensive underground burrow systems
            called &quot;setts&quot;. Other badger species occupy grassland,
            scrub, and semi-arid habitats in their own regions. Ranges and
            preferred habitats vary by species, so descriptions of one badger
            do not necessarily apply to all.
          </p>
        </>
      }
      diet={
        <>
          <p>
            European badgers are omnivores with a varied diet in which
            earthworms often feature heavily, alongside insects, small animals,
            fruit, and plant material. Other badger species are more strongly
            carnivorous; the American badger, for example, is a specialist
            predator of burrowing rodents. Diet varies by species, season, and
            local food availability.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Badgers are largely nocturnal and spend daylight hours
            underground. European badgers are notably social for mustelids,
            living in family groups that share a sett, whereas several other
            badgers are more solitary. Strong forelimbs and large claws make
            them efficient diggers, and they maintain networks of tunnels and
            chambers that can be used for many years.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Badgers interact with people through agriculture, road traffic, and
            in some regions debates over disease and wildlife management. They
            are protected by law in some countries and managed in others.
            Conservation status varies by species — several are widespread —
            but local protections and population trends should be checked
            against current wildlife-agency and IUCN sources. Badgers are
            wildlife, not pets.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The European badger has a low, heavy body, short legs, and a
                grizzled grey coat, with an unmistakable white head marked by
                two broad black stripes running through the eyes. Other badgers
                vary: the American badger is flatter and sandy-coloured with a
                white head stripe, while the honey badger (a separate lineage)
                is black below and pale grey above. Powerful claws on the
                forefeet are a shared digging adaptation.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Most badgers belong to the weasel family, Mustelidae, alongside
          otters, weasels, and martens — the otter is covered separately on
          FaunaHub. The honey badger, despite its name, sits in its own
          subfamily. Badgers are sometimes confused with raccoons because of
          their facial markings, but the two are unrelated.
        </p>
      }
      faqs={[
        {
          question: "What is a badger's burrow called?",
          answer:
            "A badger's underground burrow system is called a sett. European badger setts can be large and long-established, with multiple tunnels and chambers used by a family group over many years.",
        },
        {
          question: "Are all badgers the same?",
          answer:
            "No. \"Badger\" covers several species across different regions and even different subfamilies. They differ in diet, social behaviour, and range — for example, the European badger is social and omnivorous, while the American badger is more solitary and a specialist rodent hunter.",
        },
        {
          question: "Are badgers dangerous?",
          answer:
            "Badgers are generally shy and avoid people, being mostly active at night. Like any wild animal they can defend themselves if cornered or handled, so they should be observed at a distance and never approached or fed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Badgers (mostly family Mustelidae)" },
        { label: "Reference species", value: "European badger (Meles meles)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Omnivore (varies by species)" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Shelter", value: "Underground setts/burrows" },
        { label: "Conservation", value: "Varies by species — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Otter Profile", href: "/animals/otter", description: "A fellow mustelid" },
        { label: "Raccoon Profile", href: "/animals/raccoon" },
        { label: "Hedgehog Profile", href: "/animals/hedgehog" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.badger}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
