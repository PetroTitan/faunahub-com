import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pheasant";
const TITLE = "Pheasant — Profile, Plumage, Ground Habits & Global Spread";
const DESC =
  "Explore the common pheasant (Phasianus colchicus): an Asian gamebird with spectacular male plumage, now established worldwide through introduction.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("pheasant"),
});

export default function PheasantPage() {
  return (
    <AnimalProfileLayout
      commonName="Pheasant"
      scientificName="Phasianus colchicus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Gamebird","Introduced Worldwide"]}
      image={getAnimalImage("pheasant") ?? undefined}
      galleryImages={getAnimalGalleryImages("pheasant")}
      sources={ANIMAL_SOURCES.pheasant}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The common pheasant (<em>Phasianus colchicus</em>) is a large, long-tailed ground bird originally native to Asia. Males are unmistakable: coppery-bronze body plumage marked with black, a dark iridescent green head, bare red facial wattles, and in many populations a white neck ring.
        </p>
        <p>
          Females are entirely different — mottled pale brown, cryptically patterned and far shorter-tailed. That difference is a textbook case of <strong>sexual dimorphism</strong>: male showiness serves display, while the female&apos;s camouflage protects her while she incubates on the ground.
        </p>
        <p>
          Pheasants are strong runners that prefer to escape on foot, but when pressed they launch into a noisy, explosive burst of flight — a startling short-range escape rather than sustained travel.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Native to a broad band of Asia from the Caucasus to China, the common pheasant has been introduced across Europe, North America, New Zealand and elsewhere. It favours farmland with hedgerows, woodland edges, scrub, reedbeds and rough grassland — habitat that combines open feeding ground with dense cover. Nesting is on the ground in a simple scrape hidden in vegetation.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Pheasants are omnivorous ground feeders, scratching and probing for seeds, grain, berries, shoots, roots and leaves, along with insects, worms and other invertebrates. Animal food is especially important for chicks, which need protein for growth, while adult diets shift toward seed and grain outside the breeding season.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Pheasants spend most of their time on the ground and roost in trees at night. Males are territorial in spring, giving a loud far-carrying crowing call followed by a rapid burst of wing-whirring, and may hold small groups of females. Females nest and incubate alone on the ground, and the chicks are precocial — down-covered, mobile and feeding themselves soon after hatching.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Few birds have been moved around the world as deliberately as the pheasant. It has been introduced widely as a gamebird, and in several countries large numbers are reared and released each year, which raises questions about ecological effects on vegetation, invertebrates and predator populations. In parts of its native Asian range some subspecies are far less secure than the global picture suggests. This profile is educational and offers no hunting, rearing or handling guidance. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why do male and female pheasants look so different?",
          answer:
            "The two sexes have different problems to solve. The male's coppery plumage, green head and red wattles serve display and competition; the female's mottled brown camouflage keeps her hidden while she incubates a ground nest alone. The contrast is a standard example of sexual dimorphism.",
        },
        {
          question: "Can pheasants fly?",
          answer:
            "Yes, but only in short bursts. A pheasant prefers to run from danger and will fly explosively — with a loud clatter of wings — when pressed at close range. That flight is a rapid short-distance escape, not a means of sustained travel.",
        },
        {
          question: "Where are pheasants originally from?",
          answer:
            "Asia, across a broad band from the Caucasus to China. Their presence in Europe, North America, New Zealand and elsewhere is the result of deliberate introduction as a gamebird, in some cases going back many centuries.",
        },
        {
          question: "What do pheasants eat?",
          answer:
            "They are omnivores that feed on the ground, scratching for seeds, grain, berries, shoots and roots, and taking insects, worms and other invertebrates. Chicks depend heavily on insect protein, while adult diets shift toward seed and grain outside the breeding season.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Phasianus colchicus" },
        { label: "Family", value: "Phasianidae" },
        { label: "Class", value: "Aves" },
        { label: "Native range", value: "Asia — Caucasus to China" },
        { label: "Introduced", value: "Europe, North America, New Zealand and beyond" },
        { label: "Dimorphism", value: "Ornate male, camouflaged female" },
        { label: "Nest", value: "Ground scrape; female incubates alone" },
        { label: "Chicks", value: "Precocial — mobile soon after hatching" },
      ]}
      relatedLinks={[
        { label: "Wild Turkey Profile", href: "/animals/wild-turkey" },
        { label: "Capercaillie Profile", href: "/animals/capercaillie" },
        { label: "Peacock Profile", href: "/animals/peacock", description: "Another ornate phasianid" },
        { label: "Chicken Profile", href: "/animals/chicken" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
