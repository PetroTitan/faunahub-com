import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/termite";
const TITLE = "Termite — Profile, Colonies, Mounds & Ecological Role";
const DESC =
  "Explore termites (order Isoptera): social insects that recycle dead wood and build towering mounds — sometimes pests, but vital ecosystem engineers, and actually a kind of cockroach.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("termite"),
});

export default function TermitePage() {
  return (
    <AnimalProfileLayout
      commonName="Termite"
      scientificName="order Isoptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Eusocial"]}
      image={getAnimalImage("termite") ?? undefined}
      galleryImages={getAnimalGalleryImages("termite")}
      sources={ANIMAL_SOURCES.termite}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Termites are small, pale, social insects that live in large colonies and feed on
            wood and other plant material. Often nicknamed &ldquo;white ants,&rdquo; they are
            not ants at all — in fact, modern science classes termites within the cockroach
            group (they are essentially highly social, wood-eating cockroaches). Like ants and
            some bees and wasps, termites are <em>eusocial</em>: a colony is divided into
            castes, including reproductive kings and queens, workers, and soldiers, each with
            its own role.
          </p>
          <p>
            Termites are famous both as destructive pests of timber and as remarkable
            ecosystem engineers — recyclers of dead plant matter and builders of some of the
            largest structures made by any animal.
          </p>
          <p>
            <strong>Note:</strong> there are many termite species with varied habits; details
            here cover them broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Termites are found mainly in tropical and subtropical regions worldwide, with some
          in temperate areas, living in soil, dead wood, and the structures they build. Some
          species nest underground, others inside wood, and many build mounds or nests of
          soil, saliva, and droppings — including the towering earthen mounds that dot some
          African and Australian landscapes.
        </p>
      }
      diet={
        <p>
          Termites eat cellulose — the tough material in wood, dead leaves, grass, and other
          plant matter. Because cellulose is very hard to digest, termites depend on microbes
          (bacteria and protozoa) living in their guts, or on fungi they cultivate in special
          gardens, to break it down. This lets them recycle huge amounts of dead plant
          material that few other animals can use — and is also why they damage wooden
          buildings.
        </p>
      }
      behavior={
        <p>
          A termite colony works as a coordinated unit. Blind, wingless workers do the
          building, foraging, and feeding; soldiers, with enlarged heads or jaws (or
          chemical-spraying snouts in some species), defend the nest; and a king and a
          long-lived queen — who can lay enormous numbers of eggs — reproduce. Their mounds are
          marvels of natural engineering, with networks of tunnels that help ventilate and
          regulate the temperature and humidity of the nest. New colonies start when winged
          reproductives swarm out, pair up, shed their wings, and found a nest.
        </p>
      }
      humanInteraction={
        <p>
          Termites have a dual reputation. A small number of species are serious pests that
          damage timber buildings, crops, and stored materials, costing a great deal
          worldwide. But the vast majority are hugely beneficial: by breaking down dead wood
          and plant litter, aerating and enriching soil, and recycling nutrients, termites are
          among the most important decomposers and ecosystem engineers on land, especially in
          the tropics — and they are food for many animals. Consult authoritative sources for
          details.
        </p>
      }
      faqs={[
        {
          question: "Are termites a kind of ant?",
          answer:
            "No, despite the nickname 'white ants.' Termites are not closely related to ants at all — modern classification places them within the cockroach group, making them essentially highly social, wood-eating cockroaches. They resemble ants mainly because both are eusocial insects with workers, soldiers, and reproductive castes, an example of similar lifestyles producing similar societies.",
        },
        {
          question: "How do termites digest wood?",
          answer:
            "They get help. Cellulose, the main substance in wood, is very hard to digest, so termites rely on microbes (bacteria and protozoa) in their guts, or on fungi they farm in special gardens, to break it down for them. This partnership lets termites live on dead plant material that most animals can't use.",
        },
        {
          question: "How do termites build such big mounds?",
          answer:
            "Colonies of millions of workers build mounds from soil, saliva, and droppings, shaping intricate networks of tunnels and chambers. Many mounds are designed to ventilate the nest and regulate its temperature and humidity, almost like natural air conditioning. The largest termite mounds are among the biggest structures built by any animal relative to its size.",
        },
        {
          question: "Are termites good or bad?",
          answer:
            "Both, depending on the species. A few are destructive pests of wooden buildings and crops, which is why they're feared by homeowners. But the great majority are highly beneficial decomposers that recycle dead wood and plant litter, enrich and aerate soils, and feed countless other animals — making termites vital, if under-appreciated, members of land ecosystems.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Isoptera (within cockroaches)" },
        { label: "Society", value: "Eusocial (king, queen, workers, soldiers)" },
        { label: "Not", value: "Ants (despite 'white ant' nickname)" },
        { label: "Diet", value: "Cellulose (wood, plant litter) via gut microbes/fungi" },
        { label: "Building", value: "Mounds & nests (natural 'air conditioning')" },
        { label: "Role", value: "Key decomposers & ecosystem engineers" },
        { label: "Range", value: "Mainly tropics & subtropics" },
        { label: "Reputation", value: "Few pests; most beneficial" },
      ]}
      relatedLinks={[
        { label: "Ant Profile", href: "/animals/ant", description: "Another eusocial insect (not a relative)" },
        { label: "Cockroach relatives — Beetle Profile", href: "/animals/beetle", description: "Browse more insects" },
        { label: "Aardvark Profile", href: "/animals/aardvark", description: "A mammal that eats termites" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Insect fauna in context" },
      ]}
    />
  );
}
