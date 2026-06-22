import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/gelada";
const TITLE = "Gelada — Profile, the Grass-Eating 'Bleeding-Heart' Monkey of Ethiopia";
const DESC =
  "Explore the gelada (Theropithecus gelada): a primate of the Ethiopian highlands that lives in huge herds, grazes on grass, and signals with a red 'bleeding-heart' chest patch.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("gelada"),
});

export default function GeladaPage() {
  return (
    <AnimalProfileLayout
      commonName="Gelada"
      scientificName="Theropithecus gelada"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Ethiopia"]}
      image={getAnimalImage("gelada") ?? undefined}
      galleryImages={getAnimalGalleryImages("gelada")}
      sources={ANIMAL_SOURCES.gelada}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The gelada (<em>Theropithecus gelada</em>) is a large, shaggy primate found only
            in the high grasslands of the Ethiopian highlands. Often called the
            &ldquo;bleeding-heart monkey,&rdquo; it is named for the striking patch of bare red
            skin on its chest — an hourglass shape that is brightest in dominant males and in
            breeding females. Males also sport a magnificent cape of long brown hair. Though
            commonly called a monkey, the gelada is the last surviving species of its genus,
            once far more widespread.
          </p>
          <p>
            Geladas are unusual among primates for being dedicated grazers: they spend their
            days sitting on alpine meadows, plucking and chewing grass, and they live in some
            of the largest gatherings of any primate.
          </p>
          <p>
            <strong>Note:</strong> details here cover the gelada as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Geladas live only in the Ethiopian highlands, in open alpine grassland and montane
          meadows at high elevation, often near steep cliffs and gorges. They graze on the
          grassy plateaus by day and retreat to sleep on cliff ledges at night, where the
          steep rock keeps them safe from predators.
        </p>
      }
      diet={
        <p>
          The gelada is the most herbivorous and grass-dependent of all primates. Grass — both
          the blades and the underground parts such as roots, bulbs, and rhizomes — makes up
          the great bulk of its diet, supplemented by seeds, herbs, and the occasional insect.
          Geladas have strong hands suited to rapidly picking grass, and small, efficient
          chewing teeth, and they spend many hours a day seated and feeding, shuffling along on
          their rumps as they graze.
        </p>
      }
      behavior={
        <p>
          Geladas have a complex, layered society. The basic unit is a small group of related
          females with one dominant male and sometimes a few followers; many of these units
          come together into bands, and bands can aggregate into herds of hundreds of animals —
          among the largest groupings of any primate. They are highly vocal and
          &ldquo;chatty,&rdquo; using a rich range of calls and lip movements to communicate,
          and the bright chest patch signals status and reproductive condition without the need
          for the rump displays seen in many other primates (handy for an animal that sits all
          day). Strong males defend their females from rivals, and bachelor males form their own
          groups.
        </p>
      }
      humanInteraction={
        <p>
          Geladas are a famous sight in Ethiopia&apos;s highlands, including in the Simien
          Mountains, where they are relatively approachable and draw wildlife tourism. They can
          come into conflict with farmers where they feed on crops, and they depend on intact
          highland grassland, so habitat loss and human pressure are the main long-term
          concerns. They remain reasonably numerous overall. Consult the IUCN Red List for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the gelada called the 'bleeding-heart monkey'?",
          answer:
            "Because of the patch of bare red skin on its chest, shaped a bit like an hourglass or heart. The colour intensifies in dominant males and in females that are ready to breed, acting as a visual signal of status and reproductive condition — so the 'bleeding heart' is really a communication badge worn on the chest.",
        },
        {
          question: "What do geladas eat?",
          answer:
            "Mostly grass. The gelada is the most grass-dependent of all primates, grazing on blades plus underground roots, bulbs, and rhizomes, with some seeds, herbs, and occasional insects. It uses nimble fingers to pick grass quickly and small grinding teeth to chew it, spending much of the day seated and feeding.",
        },
        {
          question: "Is a gelada a baboon?",
          answer:
            "Not exactly. Geladas are close relatives of baboons and look superficially similar, but they belong to their own genus (Theropithecus) and are the last surviving species of a once-widespread group. Their grass-grazing lifestyle, chest patch, and highland home set them apart from true baboons.",
        },
        {
          question: "How big do gelada groups get?",
          answer:
            "Very big. Geladas have a layered society: small core units of females with a dominant male join into bands, and bands gather into herds that can number in the hundreds — among the largest aggregations of any primate. These huge, noisy assemblies graze together across the alpine meadows by day.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Theropithecus gelada" },
        { label: "Class", value: "Mammalia (primate)" },
        { label: "Nickname", value: "Bleeding-heart monkey" },
        { label: "Signature trait", value: "Red hourglass chest patch" },
        { label: "Diet", value: "Mostly grass (most grazing primate)" },
        { label: "Society", value: "Layered; herds of hundreds" },
        { label: "Range", value: "Ethiopian highlands only" },
        { label: "Sleeps", value: "On cliff ledges" },
      ]}
      relatedLinks={[
        { label: "Baboon Profile", href: "/animals/baboon", description: "Its close relatives" },
        { label: "Mandrill Profile", href: "/animals/mandrill", description: "Another colourful Old World primate" },
        { label: "Macaque Profile", href: "/animals/macaque", description: "Another adaptable monkey" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African highland fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
