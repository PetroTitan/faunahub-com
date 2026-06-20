import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/stoat";
const TITLE = "Stoat (Ermine) — Profile, Winter Coat, Diet & Behavior";
const DESC =
  "Explore the stoat (Mustela erminea): a small, bold mustelid that turns white in winter (ermine), hunts prey larger than itself, and ranges across northern continents.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("stoat"),
});

export default function StoatPage() {
  return (
    <AnimalProfileLayout
      commonName="Stoat (Ermine)"
      scientificName="Mustela erminea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Mustelid", "Northern"]}
      image={getAnimalImage("stoat") ?? undefined}
      galleryImages={getAnimalGalleryImages("stoat")}
      sources={ANIMAL_SOURCES.stoat}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The stoat (<em>Mustela erminea</em>) is a small, slender, and famously bold
            member of the weasel family (Mustelidae), also known as the short-tailed
            weasel and — in its white winter coat — the ermine. It has a long, low-slung
            body, a brown back and pale belly in summer, and a black tip to the tail that
            it keeps year-round, even when the rest of the coat turns white.
          </p>
          <p>
            Despite its small size, the stoat is a determined and effective predator,
            capable of killing prey considerably larger than itself, and it ranges widely
            across the cold north of the world.
          </p>
          <p>
            <strong>Conservation note:</strong> stoats are widespread and generally common
            in their native range, but where introduced (notably New Zealand) they are a
            serious invasive predator of native birds. Verify status and regional context
            at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Stoats live across northern Europe, Asia, and North America, in a wide range of
          habitats — woodland, grassland, moorland, farmland, marshes, and mountains —
          wherever there is cover and prey. They are well adapted to cold climates and are
          found from lowlands to high altitudes and far north.
        </p>
      }
      diet={
        <p>
          Stoats are carnivores that feed heavily on small mammals, especially rodents and
          rabbits, along with birds, eggs, and other small prey. They are renowned for
          tackling animals such as rabbits that are much bigger than themselves, killing
          with a precise bite. Their high-energy lifestyle means they must hunt
          frequently.
        </p>
      }
      behavior={
        <p>
          Stoats are active, curious, and largely solitary hunters, moving with a
          bounding gait and investigating burrows and crevices for prey. In colder regions
          their coat moults to white in winter (the ermine), providing camouflage in
          snow, while the tail tip stays black. They are agile climbers and swimmers, and
          some have been observed using distracting movements while hunting.
        </p>
      }
      humanInteraction={
        <p>
          Ermine fur — the stoat&apos;s white winter coat with its black tail tip — has a
          long history in ceremonial robes and heraldry. Ecologically, stoats help control
          rodent numbers in their native range. However, where they have been introduced,
          such as in New Zealand, they are a damaging invasive predator of vulnerable
          native birds and are subject to intensive control. Consult authoritative sources
          for current status.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a stoat and an ermine?",
          answer:
            "They are the same animal. \"Stoat\" is the usual name for Mustela erminea, while \"ermine\" traditionally refers to the stoat in its white winter coat (and to that white fur). So an ermine is simply a stoat that has moulted to white for the snowy season.",
        },
        {
          question: "Why does a stoat turn white in winter?",
          answer:
            "In colder parts of its range, the stoat moults from a brown summer coat to a white winter coat for camouflage against snow, which helps it both hunt and avoid predators. The very tip of the tail stays black year-round — a consistent identifying feature.",
        },
        {
          question: "Can a stoat really kill a rabbit?",
          answer:
            "Yes. Despite being small and slender, stoats are powerful, determined predators that regularly kill rabbits — prey much larger than themselves — with a precise bite. Rabbits and rodents are important parts of their diet in many areas.",
        },
        {
          question: "Are stoats harmful to wildlife?",
          answer:
            "In their native northern range, stoats are a natural part of the ecosystem and help control rodents. But where they have been introduced — most notably in New Zealand — they are a serious invasive predator of native birds, and considerable effort goes into controlling them there.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Mustela erminea" },
        { label: "Also called", value: "Short-tailed weasel; ermine (in white coat)" },
        { label: "Family", value: "Mustelidae (weasels)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Carnivore (rodents, rabbits, birds)" },
        { label: "Winter trait", value: "Turns white; black tail tip stays" },
        { label: "Range", value: "Northern Eurasia & N. America" },
        { label: "Note", value: "Invasive where introduced (e.g. NZ)" },
      ]}
      relatedLinks={[
        { label: "Weasel Profile", href: "/animals/weasel", description: "Its smaller, closest relative" },
        { label: "Pine Marten Profile", href: "/animals/pine-marten", description: "A larger woodland mustelid" },
        { label: "Wolverine Profile", href: "/animals/wolverine", description: "The largest land mustelid" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Northern fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
