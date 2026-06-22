import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/whiptail";
const TITLE = "Whiptail Lizard — Profile, the Fast Racers, Some All-Female & Cloning";
const DESC =
  "Explore whiptail lizards (genus Aspidoscelis): slender, striped, long-tailed New World racers — famous because several species are all-female and reproduce by cloning (parthenogenesis).";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("whiptail"),
});

export default function WhiptailPage() {
  return (
    <AnimalProfileLayout
      commonName="Whiptail Lizard"
      scientificName="genus Aspidoscelis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Americas"]}
      image={getAnimalImage("whiptail") ?? undefined}
      galleryImages={getAnimalGalleryImages("whiptail")}
      sources={ANIMAL_SOURCES.whiptail}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Whiptail lizards (genus <em>Aspidoscelis</em>) are slim, alert, fast-moving lizards of the
            Americas, named for their very long, whip-like tails. Usually marked with bold pale stripes (and
            sometimes spots) running down a slender body, they are restless, twitchy foragers, constantly
            flicking their tongues and probing the ground as they dash about in warm, open country. They are
            close relatives of the tropical tegus and the South American whiptails.
          </p>
          <p>
            Whiptails are biologically famous for a remarkable reason: several species are
            <em> all-female</em> and reproduce by parthenogenesis — cloning — with no males involved at all.
            These unisexual species arose from hybridisation between other whiptails, and their populations
            consist entirely of females that lay fertile eggs producing more females.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;whiptail&rdquo; covers many species (some sexual, some all-female);
            details here describe the genus broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Whiptails live across the warmer parts of the Americas — from the United States through Mexico and
          into South America — in open, sunny, often arid habitats such as deserts, grasslands, scrub, dry
          woodland, and rocky areas. They favour warm ground where they can bask and forage actively, and
          they shelter in burrows or under cover when inactive.
        </p>
      }
      diet={
        <p>
          Whiptails are carnivores that feed on insects, spiders, and other small invertebrates, including
          termites, beetles, grasshoppers, and larvae, which they find by actively searching and digging
          through soil and leaf litter rather than waiting in ambush. Their busy, nose-to-the-ground
          foraging style suits a diet of abundant small prey.
        </p>
      }
      behavior={
        <p>
          Whiptails are among the most active and fast-moving of lizards, racing across open ground and
          rarely staying still, foraging energetically and basking to stay warm. The genus&apos;s most famous
          feature is reproduction: in the all-female (parthenogenetic) species, every individual is female and
          produces clones of itself without mating. Intriguingly, even these all-female whiptails sometimes
          perform mock-mating behaviour with one another, which can help stimulate egg-laying. Sexual whiptail
          species, by contrast, have both males and females and reproduce normally. Like many lizards,
          whiptails can shed the tail to escape a predator and regrow it.
        </p>
      }
      humanInteraction={
        <p>
          Whiptails are harmless, fascinating lizards, and the all-female cloning species in particular are a
          celebrated subject in biology for what they reveal about reproduction and evolution. Most whiptails
          are common and adaptable, though some restricted-range species can be affected by habitat loss.
          They are beneficial as insect-eaters and pose no threat to people. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is it true some whiptails are all female?",
          answer:
            "Yes — and it's one of the most famous facts in herpetology. Several whiptail species are entirely female and reproduce by parthenogenesis, meaning a female's eggs develop into more females without any fertilisation by a male. These all-female species arose from past hybridisation between other whiptails, and their populations contain no males at all.",
        },
        {
          question: "How do all-female whiptails reproduce without males?",
          answer:
            "Through parthenogenesis — a form of 'virgin birth' in which a female produces fertile eggs that develop into genetically near-identical daughters (clones), with no sperm involved. Remarkably, individuals in some all-female species even go through mock-mating behaviour with each other, which appears to help stimulate egg production.",
        },
        {
          question: "Why are they called whiptails?",
          answer:
            "Because of their tails — very long, thin, and whip-like, often much longer than the body. Combined with their slender, striped bodies and quick, darting movements, the distinctive long tail gives these fast-running lizards their name.",
        },
        {
          question: "What do whiptails eat, and how do they hunt?",
          answer:
            "They're carnivores that eat insects, spiders, and other small invertebrates — termites, beetles, grasshoppers, and larvae. Rather than ambushing prey, whiptails are active foragers, restlessly searching, probing, and digging through soil and leaf litter with constant tongue-flicking to find food.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Aspidoscelis (whiptails)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Look", value: "Slender, striped, very long whip-like tail" },
        { label: "Famous trait", value: "Several species all-female (cloning)" },
        { label: "Reproduction", value: "Parthenogenesis in unisexual species" },
        { label: "Behaviour", value: "Fast, restless active foragers" },
        { label: "Diet", value: "Carnivore (insects & small invertebrates)" },
        { label: "Range", value: "Warm Americas (US to South America)" },
      ]}
      relatedLinks={[
        { label: "Tegu Profile", href: "/animals/tegu", description: "A large tropical relative" },
        { label: "Wall Lizard Profile", href: "/animals/wall-lizard", description: "Another fast, active lizard" },
        { label: "Agama Profile", href: "/animals/agama", description: "Another sun-loving ground lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "American dryland fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
