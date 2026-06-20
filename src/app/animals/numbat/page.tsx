import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/numbat";
const TITLE = "Numbat — Profile, Termite Diet & Conservation";
const DESC =
  "Explore the numbat (Myrmecobius fasciatus): a small, striped, termite-eating marsupial of Western Australia — uniquely day-active among marsupials, and Endangered in the wild.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("numbat"),
});

export default function NumbatPage() {
  return (
    <AnimalProfileLayout
      commonName="Numbat"
      scientificName="Myrmecobius fasciatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Termite-eater"]}
      image={getAnimalImage("numbat") ?? undefined}
      galleryImages={getAnimalGalleryImages("numbat")}
      sources={ANIMAL_SOURCES.numbat}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The numbat (<em>Myrmecobius fasciatus</em>) is a small, beautifully marked
            marsupial of Australia, instantly recognisable by the bold white bars across
            its reddish-brown back, its pointed snout, and its bushy tail. It is a
            termite specialist, and it is unusual among marsupials in being active by day —
            a schedule tied directly to when termites are near the surface and easiest to
            reach.
          </p>
          <p>
            The numbat is also notable for what it lacks: unlike most marsupials, the
            female has no pouch, and her tiny young simply cling to her underside,
            sheltered by surrounding hair.
          </p>
          <p>
            <strong>Conservation note:</strong> the numbat is Endangered, with a small wild
            population reduced by habitat loss and introduced predators. Verify current
            status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Numbats once ranged widely across southern Australia but are now restricted to a
          few areas of Western Australia (with reintroduced populations elsewhere). They
          favour eucalypt woodlands and forests where termites are plentiful and where
          fallen hollow logs provide shelter and refuge from predators.
        </p>
      }
      diet={
        <p>
          The numbat feeds almost exclusively on termites, eating large numbers each day.
          It uses a keen sense of smell to find termite galleries near the surface, digs
          them open with its claws, and laps up the insects with a remarkably long, sticky
          tongue. Unlike many termite- and ant-eaters, it has small, simple teeth and does
          not chew its prey effectively.
        </p>
      }
      behavior={
        <p>
          Numbats are solitary and diurnal (day-active), foraging when termites move into
          the upper galleries of their nests. At night and when threatened, a numbat
          retreats into a hollow log or burrow, and it can use the thickened rump to block
          the entrance against predators. Its long, bushy tail is often held raised. The
          species is a striking example of a marsupial specialised for a very particular
          diet.
        </p>
      }
      humanInteraction={
        <p>
          The numbat is a beloved symbol of Western Australia and the focus of dedicated
          conservation work. Its decline was driven by habitat clearing and especially by
          introduced predators such as foxes and cats; recovery efforts include predator
          control, fenced reserves, and reintroductions. Consult the IUCN Red List and
          Australian wildlife authorities for current status.
        </p>
      }
      faqs={[
        {
          question: "What does a numbat eat?",
          answer:
            "Almost only termites. A numbat can eat many thousands of termites in a day, sniffing out their shallow galleries, digging in with its claws, and collecting them on a long, sticky tongue. It does not eat ants as a staple, despite sometimes being confused with anteaters.",
        },
        {
          question: "Why is the numbat active during the day?",
          answer:
            "Its daytime activity is tied to its food. Termites move into the upper, more accessible parts of their nests during the warmer daylight hours, so the numbat forages then. This makes it unusual among marsupials, most of which are active at night.",
        },
        {
          question: "Does the numbat have a pouch?",
          answer:
            "No. Unlike most marsupials, the female numbat lacks a true pouch. Her tiny newborn young attach to teats on her underside and are protected by surrounding hair (and, when she is in a burrow, by the nest) rather than by an enclosed pouch.",
        },
        {
          question: "Is the numbat endangered?",
          answer:
            "Yes — it is assessed as Endangered, with only a small wild population. Habitat loss and introduced predators such as foxes and cats caused steep declines. Conservation measures including predator control, protected reserves, and reintroductions aim to recover it; current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Myrmecobius fasciatus" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Diet", value: "Termites (specialist)" },
        { label: "Activity", value: "Diurnal — unusual for a marsupial" },
        { label: "Pouch", value: "None; young cling to underside" },
        { label: "Tongue", value: "Long and sticky" },
        { label: "Range", value: "Western Australia (+ reintroductions)" },
        { label: "IUCN Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Tasmanian Devil Profile", href: "/animals/tasmanian-devil", description: "Another endangered marsupial" },
        { label: "Echidna Profile", href: "/animals/echidna", description: "Another Australian insect-eater" },
        { label: "Pangolin Profile", href: "/animals/pangolin", description: "A distant termite/ant specialist" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
