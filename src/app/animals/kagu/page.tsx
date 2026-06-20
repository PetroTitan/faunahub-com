import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kagu";
const TITLE = "Kagu — Profile, New Caledonia's Ghost Bird & Conservation";
const DESC =
  "Explore the kagu (Rhynochetos jubatus): a near-flightless, ash-grey forest bird found only in New Caledonia, with a loud dawn call and 'nasal corns' unique among birds. Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("kagu"),
});

export default function KaguPage() {
  return (
    <AnimalProfileLayout
      commonName="Kagu"
      scientificName="Rhynochetos jubatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Island endemic", "Near-flightless"]}
      image={getAnimalImage("kagu") ?? undefined}
      galleryImages={getAnimalGalleryImages("kagu")}
      sources={ANIMAL_SOURCES.kagu}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The kagu (<em>Rhynochetos jubatus</em>) is a remarkable ash-grey bird found only
            on the Pacific island of New Caledonia. About the size of a chicken, it has a
            shaggy crest, bright red legs and bill, and large, pale wings marked with bold
            bands that it shows in display. Almost flightless, the kagu lives on the forest
            floor and is so distinctive that it is placed in its own family — a living relic
            with no close relatives except, distantly, the sunbittern of the Americas.
          </p>
          <p>
            The kagu is a national symbol of New Caledonia and is famous for its loud,
            far-carrying calls at dawn, which once earned it the nickname &ldquo;ghost of the
            forest.&rdquo;
          </p>
          <p>
            <strong>Conservation note:</strong> the kagu is Endangered, devastated by
            introduced predators (especially dogs) and habitat loss, though conservation has
            helped some populations recover. Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          The kagu lives only in New Caledonia, mainly in the island&apos;s humid forests
          and, to a lesser extent, drier woodland and scrub. It is a ground bird that needs
          forest with leaf litter to forage in and cover to nest, and its range has shrunk
          to forest areas where predators are controlled.
        </p>
      }
      diet={
        <p>
          Kagus are carnivores that forage on the forest floor for invertebrates — such as
          worms, snails, insects, and larvae — and small animals including lizards. They
          hunt by standing still and watching or listening, then probing the leaf litter and
          soil with the bill, a patient style suited to their ground-dwelling life.
        </p>
      }
      behavior={
        <p>
          Kagus are nearly flightless: their wings are used for display and balance rather
          than sustained flight, and they get around by walking and running. They have a
          unique feature among birds — &ldquo;nasal corns,&rdquo; flaps that cover the
          nostrils and may keep out soil while foraging. Pairs are often long-lasting and
          fiercely territorial, announcing themselves with loud duetting calls at dawn, and
          they raise a single chick with help from both parents (and sometimes earlier
          offspring).
        </p>
      }
      humanInteraction={
        <p>
          The kagu is a beloved emblem of New Caledonia, appearing in local culture and even
          on stamps and currency. It declined steeply after humans introduced predators such
          as dogs, cats, pigs, and rats, and through habitat loss; dogs in particular kill
          adult kagus. Conservation — predator control, protected reserves, and captive
          breeding — has helped some populations recover, but it remains Endangered. Consult
          the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Can the kagu fly?",
          answer:
            "Barely. The kagu is considered nearly flightless: it has full-sized wings but uses them mainly for balance, gliding short distances, and display rather than true flight. It spends its life on the forest floor, walking and running, which also makes it very vulnerable to ground predators.",
        },
        {
          question: "What are the kagu's 'nasal corns'?",
          answer:
            "They are small flaps that cover the bird's nostrils — a feature unique to the kagu among birds. They are thought to help keep soil and debris out of the nostrils while the kagu probes leaf litter and earth for food.",
        },
        {
          question: "Why is the kagu endangered?",
          answer:
            "Because it evolved on an island without ground predators, the kagu was unprepared for the dogs, cats, pigs, and rats that humans introduced. Dogs especially kill adult kagus, and habitat loss compounded the decline. Conservation measures like predator control and reserves have helped some populations, but the species remains Endangered.",
        },
        {
          question: "What is the kagu's closest relative?",
          answer:
            "Surprisingly, its closest living relative is thought to be the sunbittern of Central and South America. The two are grouped together as an ancient, isolated lineage, despite living on opposite sides of the planet — a striking example of how old and far-flung some bird relationships are.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Rhynochetos jubatus" },
        { label: "Class", value: "Aves (its own family)" },
        { label: "Flight", value: "Nearly flightless" },
        { label: "Diet", value: "Carnivore (forest-floor invertebrates & small prey)" },
        { label: "Unique trait", value: "'Nasal corns' over the nostrils" },
        { label: "Closest relative", value: "The sunbittern (Americas)" },
        { label: "Range", value: "New Caledonia only" },
        { label: "IUCN Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Sunbittern Profile", href: "/animals/sunbittern", description: "Its closest living relative, far away" },
        { label: "Kiwi Profile", href: "/animals/kiwi", description: "Another near-flightless island bird" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "A flightless rainforest bird" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
