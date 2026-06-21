import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lamprey";
const TITLE = "Lamprey — Profile, the Ancient Jawless Fish & Sucker Mouth";
const DESC =
  "Explore lampreys (order Petromyzontiformes): ancient, eel-shaped jawless fish with a round, toothed sucker mouth — some parasitic, all part of a 350-million-year-old lineage.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("lamprey"),
});

export default function LampreyPage() {
  return (
    <AnimalProfileLayout
      commonName="Lamprey"
      scientificName="e.g. Petromyzon marinus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Jawless", "Living fossil"]}
      image={getAnimalImage("lamprey") ?? undefined}
      galleryImages={getAnimalGalleryImages("lamprey")}
      sources={ANIMAL_SOURCES.lamprey}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Lampreys are ancient, eel-shaped fish that belong to one of the oldest surviving
            lineages of vertebrates. They are jawless — instead of jaws, they have a round,
            funnel-like sucker mouth lined with rings of horny teeth and a rasping tongue.
            Lampreys have no scales, no paired fins, and a skeleton of cartilage rather than
            bone, and they are not closely related to true (bony) fish despite their similar
            shape. The sea lamprey (<em>Petromyzon marinus</em>) is shown here.
          </p>
          <p>
            Many of the well-known lampreys are parasitic as adults, latching onto other fish
            with the sucker mouth to feed on blood and body fluids — though a number of
            lamprey species do not feed at all as adults.
          </p>
          <p>
            <strong>Note:</strong> there are many lamprey species with different habits;
            details here use the sea lamprey as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Lampreys live in temperate fresh and coastal waters of the Northern and Southern
          Hemispheres. Many are anadromous — adults live in the sea or large lakes and
          migrate up rivers to spawn — while some species spend their whole lives in fresh
          water. Their larvae burrow in the soft beds of rivers and streams, so clean,
          flowing fresh water is essential to their life cycle.
        </p>
      }
      diet={
        <p>
          Parasitic adult lampreys feed by attaching to a host fish with their sucker mouth,
          rasping through the skin, and drinking blood and body fluids, often without killing
          the host immediately. Their long-lived larvae, by contrast, are harmless filter
          feeders, buried in river sediment and straining tiny food particles from the water.
          Some lamprey species do not feed at all in the brief adult stage and simply spawn
          and die.
        </p>
      }
      behavior={
        <p>
          The lamprey life cycle is remarkable: eggs hatch into blind, toothless larvae
          (called ammocoetes) that spend years buried in river beds filter-feeding. They then
          transform into the familiar toothed adult, and parasitic species head out to feed
          on fish before returning to fresh water to spawn — after which the adults die. With
          their cartilage skeleton, sucker mouth, and jawless anatomy, lampreys preserve
          features of very early vertebrates, making them important &ldquo;living
          fossils&rdquo; for understanding the origins of backboned animals.
        </p>
      }
      humanInteraction={
        <p>
          Lampreys have a long and varied relationship with people: some have been eaten as a
          delicacy for centuries, many native lampreys are of conservation concern as rivers
          are dammed and polluted, and yet sea lampreys became a notorious invasive pest in
          the North American Great Lakes, where they devastated fish populations and are now
          actively controlled. So lamprey status ranges from threatened to invasive depending
          on the species and place. Consult authoritative sources for specifics.
        </p>
      }
      faqs={[
        {
          question: "What is a lamprey's mouth like?",
          answer:
            "Instead of jaws, a lamprey has a round, funnel-shaped sucker disc lined with concentric rings of horny teeth, plus a rasping tongue. Parasitic lampreys use this to clamp onto a host fish, file through the skin, and feed on blood and body fluids. The jawless sucker mouth is the lamprey's most distinctive feature.",
        },
        {
          question: "Are lampreys fish?",
          answer:
            "They are often grouped with 'fish,' but lampreys are jawless vertebrates, quite different from the true (bony and cartilaginous) fish. They lack jaws, scales, and paired fins, and have a cartilage skeleton. Lampreys belong to an ancient lineage that branched off very early in vertebrate evolution, which is why they're studied as living relics of early backboned animals.",
        },
        {
          question: "Do all lampreys suck blood?",
          answer:
            "No. Many familiar lampreys are parasitic as adults, feeding on the blood and fluids of other fish, but a substantial number of species are non-parasitic — their brief adult stage doesn't feed at all; they simply spawn and die. And all lampreys spend years as harmless, filter-feeding larvae buried in river beds.",
        },
        {
          question: "Why are sea lampreys a problem in the Great Lakes?",
          answer:
            "Sea lampreys invaded the North American Great Lakes (helped by shipping canals) and, with no natural controls, attacked native fish in huge numbers, contributing to the collapse of important fisheries. They are now the target of an extensive, ongoing control program, even as native lampreys elsewhere are protected — a striking contrast in how the same group of animals is managed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Petromyzontiformes (jawless)" },
        { label: "Reference species", value: "Petromyzon marinus (sea lamprey)" },
        { label: "Body", value: "Eel-shaped; cartilage skeleton; no jaws/scales" },
        { label: "Mouth", value: "Round toothed sucker" },
        { label: "Diet", value: "Many parasitic (blood); larvae filter-feed" },
        { label: "Life cycle", value: "Larvae burrow for years; adults spawn & die" },
        { label: "Range", value: "Temperate fresh & coastal waters" },
        { label: "Status", value: "Some threatened; some invasive (verify)" },
      ]}
      relatedLinks={[
        { label: "Eel Profile", href: "/animals/eel", description: "A true (bony) eel of similar shape" },
        { label: "Hagfish relatives — Coelacanth Profile", href: "/animals/coelacanth", description: "Another ancient fish lineage" },
        { label: "Sturgeon Profile", href: "/animals/sturgeon", description: "Another 'living fossil' fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Aquatic habitats in context" },
      ]}
    />
  );
}
