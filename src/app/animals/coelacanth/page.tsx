import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/coelacanth";
const TITLE = "Coelacanth — Profile, the “Living Fossil” Fish & Conservation";
const DESC =
  "Explore the coelacanth (Latimeria): a lobe-finned fish once thought extinct for tens of millions of years until it was found alive in 1938 — a deep-water living fossil and conservation priority.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("coelacanth"),
});

export default function CoelacanthPage() {
  return (
    <AnimalProfileLayout
      commonName="Coelacanth"
      scientificName="genus Latimeria"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine fish", "Lobe-finned", "Living fossil"]}
      image={getAnimalImage("coelacanth") ?? undefined}
      galleryImages={getAnimalGalleryImages("coelacanth")}
      sources={ANIMAL_SOURCES.coelacanth}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The coelacanth (genus <em>Latimeria</em>) is one of the most famous fish
            in the world — a large, deep-water, lobe-finned fish long known only from
            fossils and assumed to have died out tens of millions of years ago, until
            a living one was caught off South Africa in 1938. Its rediscovery was one
            of the great zoological surprises of the twentieth century.
          </p>
          <p>
            Two living species are recognised: the West Indian Ocean coelacanth
            (<em>Latimeria chalumnae</em>) and the Indonesian coelacanth
            (<em>Latimeria menadoensis</em>). Coelacanths belong to the lobe-finned
            fishes, the group more closely related to four-limbed land vertebrates than
            to typical ray-finned fish.
          </p>
          <p>
            <strong>Conservation note:</strong> coelacanths are of serious
            conservation concern — the West Indian Ocean species in particular is
            considered critically endangered — and they are protected. Verify each
            species&apos; current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Coelacanths live in deep, cool waters along steep ocean slopes, sheltering
          by day in underwater caves and ledges at depth and moving to feed at night.
          Populations are known from parts of the western Indian Ocean (including
          around the Comoros) and from Indonesian waters.
        </p>
      }
      diet={
        <p>
          Coelacanths are carnivores that feed on fish and cephalopods such as squid.
          They are slow, drifting hunters that are thought to use a passive
          &ldquo;drift-feeding&rdquo; approach, conserving energy in their deep, cold
          habitat rather than chasing prey actively.
        </p>
      }
      behavior={
        <p>
          Coelacanths move with a distinctive style, paddling with their fleshy,
          limb-like lobed fins in a coordinated pattern. They shelter communally in
          caves during the day. They are slow-growing and long-lived, give birth to
          live young after a very long gestation, and have changed relatively little
          in overall body plan over a vast span of geological time — which is why they
          are described as &ldquo;living fossils.&rdquo;
        </p>
      }
      humanInteraction={
        <p>
          Coelacanths are of immense scientific interest for what they reveal about
          the evolution of lobe-finned fishes and the origins of land vertebrates.
          They are rare, slow to reproduce, and vulnerable to accidental capture in
          deep-set fishing gear, which makes their small populations fragile.
          Conservation and legal protection are in place; for current, species-specific
          status, consult the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why is the coelacanth called a living fossil?",
          answer:
            "Coelacanths were known only from fossils and were thought to have gone extinct tens of millions of years ago — until a living one was discovered in 1938. Because the modern fish retains a body plan broadly similar to ancient relatives, it is popularly called a \"living fossil,\" though it is a fully modern, evolving animal.",
        },
        {
          question: "How many kinds of coelacanth are there?",
          answer:
            "Two living species are recognised: the West Indian Ocean coelacanth (Latimeria chalumnae) and the Indonesian coelacanth (Latimeria menadoensis). Both are deep-water fish, found in different parts of the world.",
        },
        {
          question: "Is the coelacanth related to land animals?",
          answer:
            "Yes, in a broad evolutionary sense. Coelacanths are lobe-finned fishes, a group more closely related to the ancestors of four-limbed land vertebrates (tetrapods) than to the familiar ray-finned fishes. This is part of why they are so scientifically important.",
        },
        {
          question: "Are coelacanths endangered?",
          answer:
            "Yes. Coelacanths are of serious conservation concern — the West Indian Ocean species is considered critically endangered — owing to their rarity, slow reproduction, and vulnerability to accidental capture. Status should be checked per species against current IUCN Red List data.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Latimeria (2 species)" },
        { label: "Class", value: "Sarcopterygii (lobe-finned fish)" },
        { label: "Famous for", value: "Rediscovered alive in 1938" },
        { label: "Diet", value: "Carnivore (fish & cephalopods)" },
        { label: "Reproduction", value: "Live birth; very long gestation" },
        { label: "Habitat", value: "Deep ocean slopes & caves" },
        { label: "Range", value: "W. Indian Ocean; Indonesia" },
        { label: "IUCN Status", value: "Concern — verify by species" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark", description: "Another ancient lineage of fish" },
        { label: "Giant Squid Profile", href: "/animals/giant-squid", description: "A deep-ocean cephalopod" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Deep-water habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
