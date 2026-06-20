import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/centipede";
const TITLE = "Centipede — Profile, Legs, Venom & Behavior";
const DESC =
  "Explore centipedes (class Chilopoda): fast, many-legged predatory arthropods with venomous claws — one pair of legs per body segment, unlike the millipedes they resemble.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("centipede"),
});

export default function CentipedePage() {
  return (
    <AnimalProfileLayout
      commonName="Centipede"
      scientificName="class Chilopoda"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Myriapod", "Predator"]}
      image={getAnimalImage("centipede") ?? undefined}
      galleryImages={getAnimalGalleryImages("centipede")}
      sources={ANIMAL_SOURCES.centipede}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Centipedes (class Chilopoda) are elongated, fast-moving arthropods with many
            legs — but, contrary to the name, never exactly one hundred. They are
            myriapods, a group separate from insects and arachnids, and are active
            predators. The reference shown here is a large <em>Scolopendra</em>, among
            the biggest centipedes.
          </p>
          <p>
            A key feature: centipedes have <strong>one pair of legs per body
            segment</strong>, which is the easiest way to tell them from the similar-looking
            millipedes (which have two pairs per segment). Just behind the head, a
            centipede&apos;s first pair of legs is modified into venomous claws used to
            seize prey.
          </p>
          <p>
            <strong>Note:</strong> larger tropical centipedes can give a painful,
            medically significant bite, so wild centipedes should not be handled. This is
            an educational profile and does not provide medical or first-aid advice.
          </p>
        </>
      }
      habitat={
        <p>
          Centipedes are found worldwide, from tropical forests to deserts and temperate
          gardens. They favour dark, humid microhabitats — under stones, bark, logs, and
          leaf litter, or in soil — because they lose moisture easily and mostly hunt at
          night.
        </p>
      }
      diet={
        <p>
          Centipedes are carnivores. They hunt insects, spiders, worms, and other small
          invertebrates, and the largest species can take small vertebrates such as
          lizards or rodents. They subdue prey with the venomous claws (forcipules)
          behind the head, then hold and consume it.
        </p>
      }
      behavior={
        <p>
          Centipedes are quick and agile, using their many legs for rapid, coordinated
          movement as they search for prey in the dark. They are mostly solitary.
          Mothers in some groups guard their eggs and young. Like other arthropods,
          centipedes moult to grow, and some add leg-bearing segments as they develop.
        </p>
      }
      humanInteraction={
        <p>
          Centipedes are valuable natural predators of insects and other small pests.
          Smaller house centipedes are harmless to people and even helpful, while large
          tropical species deserve respect because of their venomous bite. For any bite
          or reaction, follow professional and local medical guidance rather than this
          page. Consult authoritative sources for species details.
        </p>
      }
      faqs={[
        {
          question: "Do centipedes really have 100 legs?",
          answer:
            "No — the name is misleading. Centipedes have one pair of legs per body segment, and the total varies widely by species, but it is always an odd number of leg pairs and is rarely exactly fifty pairs (100 legs). Some have far fewer, others many more.",
        },
        {
          question: "What's the difference between a centipede and a millipede?",
          answer:
            "The clearest difference is legs per segment: centipedes have one pair per segment and are fast predators with venomous claws, while millipedes have two pairs per segment, move slowly, and feed mostly on decaying plant matter. Centipedes are generally flatter and quicker; millipedes are more rounded.",
        },
        {
          question: "Are centipedes dangerous to humans?",
          answer:
            "Small centipedes are harmless and even useful pest controllers. Large tropical species, however, can deliver a painful, medically significant bite, so they should not be handled. This page is educational only and does not provide medical advice — for any bite, seek appropriate local medical care.",
        },
        {
          question: "What do centipedes eat?",
          answer:
            "Centipedes are carnivores that prey on insects, spiders, worms, and other small invertebrates, with the largest species taking small vertebrates. They capture prey using venomous claws (forcipules) located just behind the head.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Chilopoda (myriapods)" },
        { label: "Reference", value: "Scolopendra (giant centipedes)" },
        { label: "Legs", value: "One pair per segment (not 100)" },
        { label: "Diet", value: "Carnivore (venomous claws)" },
        { label: "Vs millipede", value: "1 leg pair/segment; fast predator" },
        { label: "Activity", value: "Mostly nocturnal; solitary" },
        { label: "Habitat", value: "Damp microhabitats worldwide" },
        { label: "Caution", value: "Large species bite; don't handle" },
      ]}
      relatedLinks={[
        { label: "Spider Profile", href: "/animals/spider", description: "Another many-legged predator (arachnid)" },
        { label: "Tarantula Profile", href: "/animals/tarantula", description: "A large spider" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "A diverse insect group" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
