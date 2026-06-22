import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/woodlouse";
const TITLE = "Woodlouse — Profile, the Land Crustacean That Recycles the Soil";
const DESC =
  "Explore woodlice (suborder Oniscidea): the only crustaceans fully adapted to life on land — armoured, harmless decomposers (pill bugs and sow bugs) that recycle dead plant matter.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("woodlouse"),
});

export default function WoodlousePage() {
  return (
    <AnimalProfileLayout
      commonName="Woodlouse"
      scientificName="suborder Oniscidea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Crustacean", "Decomposer"]}
      image={getAnimalImage("woodlouse") ?? undefined}
      galleryImages={getAnimalGalleryImages("woodlouse")}
      sources={ANIMAL_SOURCES.woodlouse}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The woodlouse (suborder Oniscidea) is a small, oval, armoured little animal found
            under logs, stones, leaf litter, and plant pots almost everywhere — and despite living
            on land among insects, it is not an insect at all. Woodlice are crustaceans,
            relatives of crabs, shrimps, and lobsters, and they are the only major group of
            crustaceans to have fully conquered life on land. Their segmented, overlapping plates
            of armour and seven pairs of legs give them their distinctive look.
          </p>
          <p>
            Woodlice go by a wonderful array of local names — pill bugs, sow bugs, roly-polies,
            slaters, and many more — and some species (the &ldquo;pill&rdquo; woodlice) can roll
            up into a tight ball for protection.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;woodlouse&rdquo; covers many species; details here
            describe the group broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Woodlice live in damp, sheltered places on land worldwide — under logs, bark, stones,
          and leaf litter, in soil and compost, and in gardens, cellars, and greenhouses. Because
          they breathe through gill-like structures that must stay moist, they need humid
          microhabitats and avoid drying out, hiding by day and becoming active in cool, damp
          conditions.
        </p>
      }
      diet={
        <p>
          Woodlice are detritivores, feeding mainly on dead and decaying plant material — fallen
          leaves, rotting wood, and other organic debris — along with some fungi and occasionally
          their own moulted skins or droppings to recover nutrients. By breaking down dead plant
          matter, woodlice are valuable recyclers that help return nutrients to the soil and keep
          decomposition cycles turning.
        </p>
      }
      behavior={
        <p>
          As crustaceans on land, woodlice keep some watery habits: they breathe through modified
          gills that need moisture, so they cluster in damp hideaways and are most active at
          night. Pill woodlice can roll into a protective ball (conglobation) when threatened,
          shielding their soft undersides behind their armour — a trick that also helps reduce
          water loss. They moult in two stages, shedding the back half of their armour first and
          then the front, and females carry their eggs and young in a fluid-filled brood pouch on
          the underside of the body, a relic of their aquatic ancestry. Woodlice are completely
          harmless to people and do not bite or sting.
        </p>
      }
      humanInteraction={
        <p>
          Woodlice are harmless and helpful garden allies, speeding the decay of dead plant matter
          and enriching the soil; they only very rarely nibble living plants and are not pests in
          any meaningful sense. They are common and widespread, of no conservation concern as a
          group, and are a great, safe introduction to the wonders of invertebrate life for
          curious children and naturalists. Consult authoritative sources for details on specific
          species.
        </p>
      }
      faqs={[
        {
          question: "Is a woodlouse an insect?",
          answer:
            "No — it's a crustacean, more closely related to crabs, shrimps, and lobsters than to insects. Woodlice are the only major group of crustaceans fully adapted to life on land. You can tell they're not insects by their seven pairs of legs (insects have three pairs) and their segmented, overlapping armour.",
        },
        {
          question: "Why do some woodlice roll into a ball?",
          answer:
            "The 'pill' woodlice can roll up into a tight ball, a behaviour called conglobation, to protect their soft undersides behind their hard armour when threatened. It also helps reduce water loss. Not all woodlice can do this — the flatter 'sow bugs' generally can't roll up as completely as the rounder 'pill bugs.'",
        },
        {
          question: "What do woodlice eat, and are they harmful?",
          answer:
            "Woodlice are decomposers that eat dead and decaying plant material, rotting wood, and fungi, helping recycle nutrients into the soil. They're harmless — they don't bite, sting, or carry disease, and only very rarely nibble living plants. In the garden they're beneficial recyclers, not pests.",
        },
        {
          question: "How can a land animal be a crustacean?",
          answer:
            "Woodlice descend from aquatic crustaceans and still carry traces of that heritage: they breathe through gill-like structures that must stay moist, so they live in damp places, and females brood their young in a fluid-filled pouch. By keeping their gills wet and hiding from dry conditions, they manage a fully terrestrial life — a rare feat for a crustacean.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Suborder Oniscidea (woodlice)" },
        { label: "Type", value: "Crustacean (not an insect)" },
        { label: "Relatives", value: "Crabs, shrimps, lobsters" },
        { label: "Other names", value: "Pill bug, sow bug, roly-poly, slater" },
        { label: "Legs", value: "Seven pairs" },
        { label: "Diet", value: "Detritivore (dead plant matter)" },
        { label: "Trick", value: "Pill species roll into a ball" },
        { label: "To humans", value: "Harmless; helpful recyclers" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "Its crustacean relatives" },
        { label: "Crayfish Profile", href: "/animals/crayfish", description: "Another crustacean" },
        { label: "Millipede Profile", href: "/animals/millipede", description: "Another harmless litter recycler" },
        { label: "Invertebrates Taxonomy", href: "/animal-taxonomy/invertebrates" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
