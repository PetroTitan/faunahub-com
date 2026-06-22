import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bird-of-paradise";
const TITLE = "Bird-of-Paradise — Profile, the Ornate Dancers of New Guinea";
const DESC =
  "Explore birds-of-paradise (family Paradisaeidae): New Guinea's spectacularly plumed birds whose males perform extravagant courtship displays — using the Raggiana bird-of-paradise.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("bird-of-paradise"),
});

export default function BirdOfParadisePage() {
  return (
    <AnimalProfileLayout
      commonName="Bird-of-Paradise"
      scientificName="e.g. Paradisaea raggiana"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "New Guinea", "Courtship display"]}
      image={getAnimalImage("bird-of-paradise") ?? undefined}
      galleryImages={getAnimalGalleryImages("bird-of-paradise")}
      sources={ANIMAL_SOURCES["bird-of-paradise"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Birds-of-paradise (family Paradisaeidae) are among the most spectacular birds on
            Earth, found mainly in New Guinea and nearby islands, with a few in eastern
            Australia. The family is famous for the breathtaking ornaments and plumes of the
            males — cascades of golden flank feathers, iridescent breast shields, wires, fans,
            and capes — and for the elaborate dances they perform to show them off. The Raggiana
            bird-of-paradise (<em>Paradisaea raggiana</em>), shown here, is the national bird of
            Papua New Guinea and a classic example, the male flaunting a spray of orange plumes
            in a treetop display.
          </p>
          <p>
            These extravagant feathers and performances are the result of intense sexual
            selection: over generations, female choice has driven the evolution of ever more
            astonishing male finery.
          </p>
          <p>
            <strong>Note:</strong> the family is large and varied; details here use the Raggiana
            bird-of-paradise as a reference and describe the group broadly. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Most birds-of-paradise live in the rainforests of New Guinea and its surrounding
          islands, with some species in the forests of eastern Australia and the Moluccas. They
          occupy a range of forest types from lowland jungle to montane cloud forest, and many
          are canopy birds; some species are restricted to particular mountains or islands.
        </p>
      }
      diet={
        <p>
          Birds-of-paradise are mainly frugivores, eating a great deal of fruit, and many also
          take insects and other small invertebrates, with some feeding on nectar. The abundant
          fruit of New Guinea&apos;s forests is thought to help support the family&apos;s
          spectacular evolution, by giving males the time and energy to invest in display rather
          than in helping raise young. As fruit-eaters, they also disperse seeds through the
          forest.
        </p>
      }
      behavior={
        <p>
          The hallmark of the family is the courtship display. Males show off their ornate
          plumes through ritualised dances, poses, and sounds — at traditional perches, cleared
          forest-floor &ldquo;courts,&rdquo; or in groups — transforming their bodies into
          shimmering shapes to dazzle watching females. In many species the brilliantly adorned
          males take no part in nesting, and the comparatively drab females build the nest and
          raise the young alone. Different species have wildly different ornaments and routines,
          making the family a textbook showcase of how mate choice can shape extraordinary
          forms.
        </p>
      }
      humanInteraction={
        <p>
          Birds-of-paradise hold deep cultural significance in New Guinea, where their plumes
          feature in traditional dress and ceremony, and they are celebrated worldwide for their
          beauty. Historically the plume trade took a heavy toll, and today habitat loss and
          hunting are the main pressures; many species remain reasonably secure while some
          restricted-range ones are of greater concern. Trade is now regulated. Consult the IUCN
          Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are birds-of-paradise so ornate?",
          answer:
            "Because of intense sexual selection driven by female choice. Over many generations, females have favoured males with ever more striking plumes and displays, so the males evolved spectacular ornaments — golden flank plumes, iridescent shields, wires, and fans — used purely to attract mates. The result is some of the most extravagant feathering in the entire bird world.",
        },
        {
          question: "Where do birds-of-paradise live?",
          answer:
            "Mainly in New Guinea and its surrounding islands, with a few species in the rainforests of eastern Australia and the Moluccas. They inhabit forests from lowland jungle to high montane cloud forest, and many are canopy birds. Some species are confined to particular mountains or islands, making them local specialities.",
        },
        {
          question: "What is the Raggiana bird-of-paradise?",
          answer:
            "It's one of the best-known birds-of-paradise and the national bird of Papua New Guinea. The male has a spray of ornate orange flank plumes that it flaunts in energetic treetop displays to attract females. It's a classic representative of the family's beauty and courtship behaviour.",
        },
        {
          question: "Do male birds-of-paradise help raise the young?",
          answer:
            "In many species, no. The ornate males typically focus entirely on display and mating, while the plainer females alone build the nest, incubate the eggs, and raise the chicks. This division — flashy, display-only males and hard-working, camouflaged females — is closely tied to the family's strong sexual selection.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Paradisaeidae" },
        { label: "Reference species", value: "Paradisaea raggiana (Raggiana)" },
        { label: "Class", value: "Aves (perching birds)" },
        { label: "Known for", value: "Spectacular male plumes & dances" },
        { label: "Driver", value: "Intense sexual selection (female choice)" },
        { label: "Diet", value: "Mostly fruit (also insects)" },
        { label: "Range", value: "Mainly New Guinea; also E Australia" },
        { label: "Note", value: "Raggiana = PNG's national bird" },
      ]}
      relatedLinks={[
        { label: "Bowerbird Profile", href: "/animals/bowerbird", description: "Relatives with their own courtship art" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "Another iconic New Guinea bird" },
        { label: "Peacock Profile", href: "/animals/peacock", description: "Another bird of extravagant male display" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australasian fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
