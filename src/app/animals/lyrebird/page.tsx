import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lyrebird";
const TITLE = "Lyrebird — Profile, Astonishing Mimicry & Display";
const DESC =
  "Explore the superb lyrebird (Menura novaehollandiae): an Australian songbird famed for jaw-dropping vocal mimicry and an ornate lyre-shaped tail used in courtship.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("lyrebird"),
});

export default function LyrebirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Lyrebird"
      scientificName="Menura novaehollandiae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Songbird", "Mimic"]}
      image={getAnimalImage("lyrebird") ?? undefined}
      galleryImages={getAnimalGalleryImages("lyrebird")}
      sources={ANIMAL_SOURCES.lyrebird}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The superb lyrebird (<em>Menura novaehollandiae</em>) is a large Australian
            songbird celebrated as one of the world&apos;s finest vocal mimics. A
            ground-dwelling bird of eastern forests, the male sports an elaborate tail
            that, when fanned in display, can resemble a lyre. But it is the
            lyrebird&apos;s voice that astonishes most: males can imitate the calls of many
            other bird species — and a range of other sounds — with uncanny accuracy.
          </p>
          <p>
            A male&apos;s song is a virtuoso medley of mimicked calls woven together,
            performed to impress females, and it makes the lyrebird a true icon of
            Australian wildlife.
          </p>
          <p>
            <strong>Note:</strong> there are two lyrebird species; details here use the
            superb lyrebird. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          The superb lyrebird lives in moist forests and rainforests of southeastern
          Australia, including wet eucalypt forest with dense, damp understorey and deep
          leaf litter. It spends most of its time on the forest floor, where it finds food
          and builds display sites, and it roosts in trees at night.
        </p>
      }
      diet={
        <p>
          Lyrebirds are insectivores/invertebrate-eaters that forage on the forest floor,
          raking through leaf litter and soil with strong feet and claws to uncover insects,
          worms, spiders, and other small invertebrates. This vigorous scratching turns over
          large amounts of litter and soil, which can benefit the forest.
        </p>
      }
      behavior={
        <p>
          In the breeding season, a male clears or builds display mounds and performs there,
          fanning his ornate tail forward over his head while delivering a long, complex
          song packed with mimicry of other birds and forest sounds. Females, which also
          sing but less elaborately, build a domed nest and raise the single chick largely
          alone. Lyrebirds are generally shy and more often heard than seen, despite their
          size.
        </p>
      }
      humanInteraction={
        <p>
          The lyrebird&apos;s remarkable mimicry and display have made it a beloved symbol
          of Australia, featuring on currency and in countless nature films. There are
          well-known accounts and recordings of lyrebirds imitating human-made sounds in
          some settings, which has fascinated the public — though such imitations are best
          understood as part of their natural mimicry, and claims should be checked against
          reliable sources. Their forest habitat and ground-foraging role make them
          ecologically important. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "How good is a lyrebird's mimicry?",
          answer:
            "Exceptional. Male superb lyrebirds can imitate the songs and calls of many other bird species with remarkable accuracy, stringing them together into a long, complex performance. They are considered among the most accomplished vocal mimics in the animal kingdom.",
        },
        {
          question: "Why is it called a lyrebird?",
          answer:
            "The name comes from the male's tail. When fanned during display, the tail's shape and the arrangement of its special feathers were thought to resemble a lyre, the ancient stringed instrument. The tail is central to the male's courtship display.",
        },
        {
          question: "Can lyrebirds imitate non-bird sounds?",
          answer:
            "Lyrebirds are famous for incorporating a wide variety of sounds into their songs, and there are popular recordings of individuals imitating mechanical or human-made noises in certain situations. These are striking examples of their natural mimicry; as always, specific viral claims are best checked against reliable sources.",
        },
        {
          question: "What do lyrebirds eat?",
          answer:
            "They feed on invertebrates found in the forest floor — insects, worms, spiders, and the like — which they expose by raking through leaf litter and soil with their strong feet. This energetic scratching also helps turn over and aerate the forest floor.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Menura novaehollandiae" },
        { label: "Class", value: "Aves (songbird)" },
        { label: "Famous for", value: "Vocal mimicry; lyre-shaped tail" },
        { label: "Diet", value: "Invertebrates (forest-floor forager)" },
        { label: "Habitat", value: "Moist forests of SE Australia" },
        { label: "Behaviour", value: "Ground-dwelling; males display & sing" },
        { label: "Nesting", value: "Domed nest; female raises one chick" },
        { label: "Status", value: "Verify (forest-dependent)" },
      ]}
      relatedLinks={[
        { label: "Magpie Profile", href: "/animals/magpie", description: "Another vocal, intelligent bird" },
        { label: "Crow Profile", href: "/animals/crow", description: "A clever, adaptable bird" },
        { label: "Kookaburra Profile", href: "/animals/kookaburra", description: "Another iconic Australian bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
