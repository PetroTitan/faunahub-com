import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/coconut-crab";
const TITLE = "Coconut Crab — Profile, the Giant Land Crab That Climbs Trees";
const DESC =
  "Explore the coconut crab (Birgus latro): the largest land-living arthropod, a giant island hermit-crab relative with claws strong enough to crack coconuts.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("coconut-crab"),
});

export default function CoconutCrabPage() {
  return (
    <AnimalProfileLayout
      commonName="Coconut Crab"
      scientificName="Birgus latro"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Crustacean", "Island", "Record-holder"]}
      image={getAnimalImage("coconut-crab") ?? undefined}
      galleryImages={getAnimalGalleryImages("coconut-crab")}
      sources={ANIMAL_SOURCES["coconut-crab"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The coconut crab (<em>Birgus latro</em>) is the largest land-living arthropod in
            the world — a colossal crab that can span around a metre from leg tip to leg tip
            and weigh several kilograms. Despite its name and crab-like form, it is actually a
            kind of hermit crab that has abandoned the shell-carrying habit as an adult,
            growing its own hard, armoured abdomen instead. Found on tropical islands of the
            Indian and Pacific Oceans, it has powerful claws strong enough to crack open
            coconuts — and to deliver a formidable pinch.
          </p>
          <p>
            Although it begins life in the sea, the adult coconut crab is fully terrestrial
            and will actually drown if kept underwater too long, breathing air through
            specialised organs.
          </p>
          <p>
            <strong>Note:</strong> details here cover the coconut crab as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Coconut crabs live on tropical islands and coasts of the Indian and western Pacific
          Oceans, in coastal forest, rocky shores, and vegetation near the sea. Adults shelter
          by day in burrows and rock crevices, which they line with fibres to keep humid, and
          emerge mostly at night. Although land-dwelling, they keep a link to the sea: females
          return to the shore to release their eggs.
        </p>
      }
      diet={
        <p>
          Coconut crabs are omnivores and scavengers with a famously broad diet: fleshy fruits,
          nuts and seeds (including coconuts, which they can husk and crack with their claws),
          carrion, and other organic matter, and they will take small animals and even other
          crabs. They have an excellent sense of smell to locate food across the island, and
          their immensely strong claws let them open hard items few other animals can.
        </p>
      }
      behavior={
        <p>
          Coconut crabs are excellent climbers, scaling trees to reach fruit or to escape, and
          their pinching strength is among the most powerful of any animal relative to size.
          As adults they breathe air using special organs (a modified gill chamber) and cannot
          survive long submerged. Their life cycle still ties them to the ocean: hatchlings
          spend an early larval stage at sea, then come ashore and live briefly in borrowed
          snail shells like typical hermit crabs before outgrowing the habit and hardening
          their own abdomen. Coconut crabs are long-lived and slow-growing, which makes them
          vulnerable to overharvesting.
        </p>
      }
      humanInteraction={
        <p>
          Coconut crabs are hunted for food on many islands and are considered a delicacy,
          and this — together with habitat loss and their slow growth and reproduction — has
          reduced or wiped out populations in some places, raising conservation concern. They
          can give a painful pinch and should be treated with respect, but they are not a
          danger if left alone. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the coconut crab really the biggest land arthropod?",
          answer:
            "Yes. The coconut crab is the largest land-living arthropod, with a leg span that can approach a metre and a weight of several kilograms. No insect, spider, or other land-dwelling arthropod gets as big. (Some marine arthropods, like the giant Japanese spider crab, are larger, but they live in the sea.)",
        },
        {
          question: "Can coconut crabs actually open coconuts?",
          answer:
            "Yes. With exceptionally powerful claws, coconut crabs can strip the husk from a coconut and crack the hard shell to reach the flesh inside — a feat few other animals can manage. Their pinching strength is among the strongest known relative to body size, so a bite from a large one is no joke.",
        },
        {
          question: "Is a coconut crab a hermit crab?",
          answer:
            "Essentially, yes — it's a hermit crab that grew up and gave up its shell. Young coconut crabs use borrowed snail shells like other hermit crabs, but as they grow they harden their own abdomen into protective armour and no longer need a shell. So the giant adult is a shell-free, land-living member of the hermit crab group.",
        },
        {
          question: "Do coconut crabs live in the sea?",
          answer:
            "Adults are land animals — they breathe air and will drown if kept underwater too long. But they keep a tie to the ocean: females release their eggs into the sea, where the larvae develop before coming ashore. So coconut crabs begin life in the water but spend their adult lives on tropical islands.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Birgus latro" },
        { label: "Type", value: "Crustacean (a giant land hermit crab)" },
        { label: "Claim to fame", value: "Largest land-living arthropod" },
        { label: "Claws", value: "Powerful enough to crack coconuts" },
        { label: "Diet", value: "Omnivore & scavenger (fruit, nuts, carrion)" },
        { label: "Breathing", value: "Air (drowns if submerged too long)" },
        { label: "Range", value: "Indian & Pacific tropical islands" },
        { label: "Status", value: "Reduced by harvesting (verify)" },
      ]}
      relatedLinks={[
        { label: "Hermit Crab Profile", href: "/animals/hermit-crab", description: "Its shell-carrying relatives" },
        { label: "Crab Profile", href: "/animals/crab", description: "True crabs" },
        { label: "Lobster Profile", href: "/animals/lobster", description: "Another large crustacean" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Island fauna in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
