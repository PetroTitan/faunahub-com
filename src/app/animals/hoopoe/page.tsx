import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hoopoe";
const TITLE = "Hoopoe — Profile, Crest, Diet & Behavior";
const DESC =
  "Explore the Eurasian hoopoe (Upupa epops): an unmistakable pinkish-brown bird with a fan-like crest, barred wings, and a long curved bill for probing the ground for insects.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("hoopoe"),
});

export default function HoopoePage() {
  return (
    <AnimalProfileLayout
      commonName="Hoopoe"
      scientificName="Upupa epops"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Insectivore", "Migratory"]}
      image={getAnimalImage("hoopoe") ?? undefined}
      galleryImages={getAnimalGalleryImages("hoopoe")}
      sources={ANIMAL_SOURCES.hoopoe}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The Eurasian hoopoe (<em>Upupa epops</em>) is one of the most distinctive birds
            of the Old World — a pinkish-brown bird with boldly black-and-white barred
            wings and tail, a long, slender, down-curved bill, and a spectacular fan-shaped
            crest that it can raise into a crown. Its undulating, butterfly-like flight and
            soft &ldquo;oop-oop-oop&rdquo; call (the source of its name) make it equally
            unmistakable in the air.
          </p>
          <p>
            Hoopoes are widespread across Europe, Asia, and Africa, and have featured in
            human culture and folklore for thousands of years.
          </p>
          <p>
            <strong>Note:</strong> several hoopoe forms exist across this huge range;
            details here use the Eurasian hoopoe. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Hoopoes favour open and semi-open country with bare or lightly vegetated ground
          for feeding and holes for nesting — farmland, orchards, vineyards, pastures,
          parkland, and warm scrub. They are found across much of Europe, Asia, and
          Africa; northern populations are migratory, wintering in warmer regions.
        </p>
      }
      diet={
        <p>
          Hoopoes are insectivores that feed mainly on the ground, using the long curved
          bill to probe soil, dung, and leaf litter for insects and their larvae —
          especially large prey such as beetle grubs, mole crickets, and caterpillars.
          They also take other invertebrates and occasionally small reptiles. They often
          deal with large prey by bashing it before swallowing.
        </p>
      }
      behavior={
        <p>
          The hoopoe raises its crest when alarmed or excited and folds it back at rest.
          It nests in cavities — tree holes, walls, or banks — and is notable for its
          pungent nest defence: the female&apos;s preen gland produces a foul-smelling
          secretion, and nestlings can direct droppings at intruders, both of which deter
          predators. Despite this, hoopoes are widely regarded with affection and
          fascination.
        </p>
      }
      humanInteraction={
        <p>
          Hoopoes have a rich place in human culture, appearing in ancient Egyptian art,
          the Bible and the Quran, classical literature, and folklore across their range;
          the hoopoe is the national bird of Israel. They are generally welcomed for eating
          garden and farmland pests. Many populations are stable, though changes in
          farming and habitat can affect them locally. Consult authoritative sources for
          current status.
        </p>
      }
      faqs={[
        {
          question: "How did the hoopoe get its name?",
          answer:
            "From its call. The hoopoe's soft, far-carrying \"oop-oop-oop\" song is the origin of both its English name and its scientific name, Upupa epops — both are essentially imitations of the sound it makes.",
        },
        {
          question: "What is the hoopoe's crest for?",
          answer:
            "The fan-shaped crest is used in communication and display. The bird usually keeps it folded back, but raises it into a striking crown when alarmed, excited, or displaying — for example on landing or during interactions with other hoopoes.",
        },
        {
          question: "What do hoopoes eat?",
          answer:
            "Mostly insects taken from the ground. Using its long, curved bill, a hoopoe probes soil, dung, and litter for grubs, mole crickets, caterpillars, and beetles, plus other invertebrates and the odd small reptile. It often strikes large prey against the ground before eating it.",
        },
        {
          question: "Why do hoopoe nests smell bad?",
          answer:
            "It's a defence. During breeding, the female's preen gland produces a foul-smelling secretion, and the nestlings can squirt droppings at intruders. Together these make the nest unpleasant and help deter predators and parasites — an unusual but effective strategy.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Upupa epops" },
        { label: "Class", value: "Aves" },
        { label: "Signature trait", value: "Fan-shaped crest; barred wings" },
        { label: "Bill", value: "Long, slender, down-curved" },
        { label: "Diet", value: "Insectivore (ground-probing)" },
        { label: "Range", value: "Europe, Asia & Africa" },
        { label: "Migration", value: "Northern birds migratory" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "Another vivid Old World insect-eater" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "A related, brightly coloured bird" },
        { label: "Woodpecker Profile", href: "/animals/woodpecker", description: "Another cavity-nesting bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
