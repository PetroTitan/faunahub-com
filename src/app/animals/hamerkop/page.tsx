import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hamerkop";
const TITLE = "Hamerkop — Profile, the Giant-Nest Builder & Diet";
const DESC =
  "Explore the hamerkop (Scopus umbretta): a brown African wading bird with a hammer-shaped head that builds one of the largest, most elaborate nests of any bird.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("hamerkop"),
});

export default function HamerkopPage() {
  return (
    <AnimalProfileLayout
      commonName="Hamerkop"
      scientificName="Scopus umbretta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wetland", "Africa"]}
      image={getAnimalImage("hamerkop") ?? undefined}
      galleryImages={getAnimalGalleryImages("hamerkop")}
      sources={ANIMAL_SOURCES.hamerkop}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The hamerkop (<em>Scopus umbretta</em>) is a medium-sized, all-brown wading bird
            of Africa (and Madagascar and parts of Arabia), instantly known by the shape of
            its head: a stout bill and a backward-pointing crest together form a hammer-like
            silhouette, which gives the bird its Afrikaans name (&ldquo;hammerhead&rdquo;).
            It is the only species in its family.
          </p>
          <p>
            Modest-looking though it is, the hamerkop is a remarkable architect — it builds
            an enormous, domed stick nest that is among the largest and most elaborate
            structures made by any bird.
          </p>
          <p>
            <strong>Note:</strong> details here cover the hamerkop as a whole; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Hamerkops live across most of sub-Saharan Africa, plus Madagascar and southwestern
          Arabia, in a wide range of wetland habitats — riverbanks, marshes, lake edges,
          estuaries, rice paddies, and even roadside ditches and dams. They are adaptable
          and common wherever there is shallow water for feeding and trees for nesting.
        </p>
      }
      diet={
        <p>
          Hamerkops are carnivores that hunt in shallow water, feeding especially on
          amphibians (frogs and tadpoles) and small fish, plus invertebrates and the
          occasional small reptile. They forage by walking through the shallows, stirring up
          prey with their feet or making short dashes and stabs, often near where larger
          animals have disturbed the water.
        </p>
      }
      behavior={
        <p>
          The hamerkop&apos;s most famous behaviour is its nest-building. A pair constructs a
          massive domed nest of sticks, mud, and all sorts of gathered material — often more
          than a metre across and strong enough to bear a person&apos;s weight — with a
          small entrance leading to an inner chamber. A pair may build several huge nests in
          a year, and abandoned nests are used by many other animals. Hamerkops also perform
          curious social displays in which groups gather, call, and run around one another.
        </p>
      }
      humanInteraction={
        <p>
          Hamerkops are common and adaptable, often living close to people around farm dams
          and wetlands, and their giant nests are a familiar sight. They feature in the
          folklore of some African cultures, sometimes regarded with superstition. The
          species is widespread and not generally of conservation concern. Consult
          authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a hamerkop?",
          answer:
            "The name is Afrikaans for 'hammerhead.' When the bird holds its head with the stout bill pointing forward and the crest pointing back, the silhouette looks like a hammer. This distinctive head shape is the easiest way to recognise the hamerkop.",
        },
        {
          question: "How big is a hamerkop's nest?",
          answer:
            "Enormous. A hamerkop pair builds a huge domed nest of sticks and mud that can be well over a metre across and strong enough to support a person's weight, with a small entrance into an inner chamber. It is one of the largest and most elaborate nests built by any bird, and pairs may make several in a year.",
        },
        {
          question: "What do hamerkops eat?",
          answer:
            "They are carnivores that hunt in shallow water, especially for amphibians like frogs and tadpoles, plus small fish, invertebrates, and occasional small reptiles. They forage by walking through the shallows and stirring up or dashing after prey.",
        },
        {
          question: "Are hamerkops rare?",
          answer:
            "No — hamerkops are widespread and common across sub-Saharan Africa, Madagascar, and parts of Arabia, and they adapt well to human-made wetlands like farm dams and ditches. They are not generally considered of conservation concern, though local status should be checked against authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Scopus umbretta" },
        { label: "Class", value: "Aves (its own family)" },
        { label: "Signature trait", value: "Hammer-shaped head; giant nest" },
        { label: "Diet", value: "Carnivore (amphibians, fish, invertebrates)" },
        { label: "Nest", value: "Massive domed stick structure" },
        { label: "Habitat", value: "African & Malagasy wetlands" },
        { label: "Range", value: "Sub-Saharan Africa, Madagascar, Arabia" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Shoebill Profile", href: "/animals/shoebill", description: "Another distinctive African wetland bird" },
        { label: "Heron Profile", href: "/animals/heron", description: "A related wading bird" },
        { label: "Stork Profile", href: "/animals/stork", description: "Another tall waterbird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
