import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Peacock — Profile, Habitat, Diet & Behavior";
const description =
  "The peacock is the male peafowl, famous for its iridescent display train. An educational profile of the Indian peafowl (Pavo cristatus): appearance, diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/peacock",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("peacock"),
});

export default function PeacockPage() {
  return (
    <AnimalProfileLayout
      commonName="Peacock"
      scientificName="Pavo cristatus"
      pageTitle={title}
      description={description}
      path="/animals/peacock"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Galliform", "Wild & Ornamental"]}
      image={getAnimalImage("peacock") ?? undefined}
      galleryImages={getAnimalGalleryImages("peacock")}
      factsHeaderNote="“Peacock” is the male; the female is a peahen, and the species is the peafowl. This page uses the Indian peafowl (Pavo cristatus). Peafowl are wild birds also kept ornamentally — they are not casual house pets."
      overview={
        <>
          <p>
            The peacock is the male of the peafowl, a large, ground-dwelling
            bird in the pheasant family, best known for the spectacular
            iridescent &quot;train&quot; the male fans in courtship. The most
            familiar species is the Indian peafowl (<em>Pavo cristatus</em>),
            used here as a reference. Strictly, &quot;peacock&quot; refers to the
            male, &quot;peahen&quot; to the female, and &quot;peafowl&quot; to
            the species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild Indian peafowl live in forests, scrub, and farmland of the
            Indian subcontinent, often near water and human settlements. Peafowl
            are also kept ornamentally in parks, gardens, and estates around the
            world, and feral populations exist in some areas. Other peafowl
            species occur in Southeast Asia and Africa. Habitat and range vary by
            species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Peafowl are omnivores that forage on the ground for seeds, grains,
            insects, small invertebrates, and plant matter, and occasionally
            small reptiles or amphibians. They scratch and peck much like other
            ground-feeding fowl. Diet varies by habitat and season; this page
            describes general feeding ecology rather than husbandry.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            The male&apos;s courtship display — raising and fanning the long
            train of eye-spotted feathers and shivering it to attract peahens —
            is among the most famous in the bird world. Peafowl roost in trees,
            give loud, far-carrying calls, and are generally wary. The train is
            grown and shed annually. Behaviour differs between wild and
            ornamentally kept birds.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Peafowl have been admired and kept for their beauty for thousands of
            years and hold cultural and religious significance, especially in
            South Asia. They are wild birds that are also kept ornamentally, but
            they are large, loud, and have specific needs — not casual house
            pets. The Indian peafowl is generally not of conservation concern,
            though status varies by species and should be checked against current
            sources. This profile is educational, not care advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The male Indian peafowl is unmistakable: a shimmering blue neck
                and breast, a fan-shaped crest, and an enormous train of
                bronze-green feathers tipped with colourful eye-spots, raised in
                display. The peahen is more subdued, mostly brown and grey with a
                white belly and a shorter tail, which camouflages her while
                nesting. The train belongs to the male alone.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Peafowl are galliform birds in the pheasant family (Phasianidae),
          related to pheasants, junglefowl, and the domestic chicken. They share
          the ground-feeding, tree-roosting habits of that group. Their
          extravagant train sets the peacock apart from other large birds.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "Are peacocks and peahens different species?",
          answer:
            "No. \"Peacock\" is the male and \"peahen\" is the female of the same species; together they are peafowl. The famous train belongs to the male. This page uses the Indian peafowl (Pavo cristatus) as its reference.",
        },
        {
          question: "Why do peacocks have such large tails?",
          answer:
            "The male's train is used in courtship display to attract peahens, fanned and shivered to show off its iridescent eye-spots. It is grown and shed each year. The display is a classic example of a trait shaped by mate choice.",
        },
        {
          question: "Can peacocks be kept as pets?",
          answer:
            "Peafowl are sometimes kept ornamentally on estates and farms, but they are large, very loud, and have specific space and care needs — they are not casual house pets. This page is educational and does not provide care advice; consult qualified guidance before keeping any bird.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Indian peafowl (Pavo cristatus)" },
        { label: "Family", value: "Phasianidae (pheasant family)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Omnivore (ground forager)" },
        { label: "Display", value: "Male's iridescent train (grown yearly)" },
        { label: "Conservation", value: "Indian peafowl generally common — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Toucan Profile", href: "/animals/toucan", description: "Another spectacular bird" },
        { label: "Parrot Profile", href: "/animals/parrot" },
        { label: "Birdwatching Hub", href: "/birdwatching" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.peacock}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
