import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kea";
const TITLE = "Kea — Profile, the Clever Alpine Parrot of New Zealand";
const DESC =
  "Explore the kea (Nestor notabilis): the world's only alpine parrot — a famously intelligent, curious, and mischievous mountain bird of New Zealand's South Island.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("kea"),
});

export default function KeaPage() {
  return (
    <AnimalProfileLayout
      commonName="Kea"
      scientificName="Nestor notabilis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Parrot", "New Zealand"]}
      image={getAnimalImage("kea") ?? undefined}
      galleryImages={getAnimalGalleryImages("kea")}
      sources={ANIMAL_SOURCES.kea}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The kea (<em>Nestor notabilis</em>) is a large, olive-green parrot found in the
            mountains of New Zealand&apos;s South Island — the only true alpine parrot in the
            world. At first glance it looks fairly plain, but in flight it flashes brilliant
            orange feathers under its wings. The kea is best known for its extraordinary
            intelligence, boldness, and curiosity: it investigates, manipulates, and
            problem-solves with a flair that has made it famous (and sometimes infamous) among
            mountain visitors.
          </p>
          <p>
            Tough enough to thrive in cold, snowy high country, the kea is a playful, inquisitive
            opportunist — qualities that delight observers but also lead it into mischief around
            people and their belongings.
          </p>
          <p>
            <strong>Note:</strong> details here cover the kea as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Kea live in the high country of New Zealand&apos;s South Island — alpine and
          subalpine zones, mountain forests, scrub, and tussock above and around the tree line,
          including snowy areas in winter. They range across rugged mountain landscapes and are
          a familiar sight around ski fields, car parks, and alpine huts, where their curiosity
          brings them into contact with people.
        </p>
      }
      diet={
        <p>
          Kea are omnivores with a very broad, opportunistic diet: leaves, buds, roots, berries,
          nectar, seeds, and insects and their larvae, plus carrion and other scraps. Their
          strong, hooked, narrow upper beak is a versatile tool for digging, prying, and tearing.
          Around people they readily scavenge food, which — while it makes for memorable
          encounters — is unhealthy for them and is discouraged.
        </p>
      }
      behavior={
        <p>
          The kea is one of the most intelligent birds known, with problem-solving and
          tool-related abilities that rival those of great apes in some tests, and it is highly
          social and playful, especially as a juvenile. Kea are notorious for their curiosity
          and destructiveness around human gear — investigating, pulling, and dismantling
          rubber, rucksacks, and car parts with their powerful beaks. They are strong fliers,
          well insulated against cold, and nest in burrows and crevices among rocks and roots.
          Their loud, soaring &ldquo;keee-aa&rdquo; call (which gives them their name) rings
          across the mountains.
        </p>
      }
      humanInteraction={
        <p>
          Kea have a complicated history with people: once persecuted and killed in large
          numbers over claims they attacked sheep, they are now protected and recognised as a
          treasured, intelligent native bird. Today they face threats from introduced predators,
          lead poisoning from old buildings, and harm from being fed human food, and their
          numbers have declined, raising conservation concern. Visitors are urged not to feed
          kea and to protect their belongings rather than the birds being blamed. Consult the
          IUCN Red List and New Zealand conservation authorities for current status.
        </p>
      }
      faqs={[
        {
          question: "What makes the kea so special?",
          answer:
            "The kea is the world's only alpine parrot, living in cold, snowy mountains where few parrots could survive, and it's renowned as one of the most intelligent birds known. Its curiosity, playfulness, and problem-solving — rivalling great apes in some tests — combined with its mountain home and flashing orange underwings, make it truly unique.",
        },
        {
          question: "Why are kea considered so intelligent?",
          answer:
            "Because they excel at problem-solving, learning, and even cooperative and tool-related tasks in experiments, sometimes performing on a par with great apes. In the wild this shows as relentless curiosity and ingenuity — figuring out latches, dismantling objects, and exploiting new food sources. Their big-brained, playful behaviour fascinates scientists and visitors alike.",
        },
        {
          question: "Are kea destructive?",
          answer:
            "Famously so. Kea use their powerful, curious beaks to investigate and take apart human belongings — chewing rubber, opening packs, and pulling at car windscreen wipers and seals. It's driven by curiosity and play rather than malice, but it means mountain visitors are advised to keep gear secured and never to feed the birds.",
        },
        {
          question: "Are kea endangered?",
          answer:
            "Kea numbers have declined and the species is of conservation concern, protected in New Zealand. Threats include introduced predators, lead poisoning from old building materials they chew, and problems caused by being fed human food. Conservation efforts focus on predator control, removing lead, and asking people not to feed them. Check the IUCN Red List for the current category.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Nestor notabilis" },
        { label: "Class", value: "Aves (parrot)" },
        { label: "Claim to fame", value: "World's only alpine parrot" },
        { label: "Known for", value: "High intelligence; curiosity; mischief" },
        { label: "Hidden colour", value: "Bright orange underwings" },
        { label: "Diet", value: "Omnivore (very broad, opportunistic)" },
        { label: "Range", value: "Mountains of NZ's South Island" },
        { label: "Status", value: "Of conservation concern (verify)" },
      ]}
      relatedLinks={[
        { label: "Kakapo Profile", href: "/animals/kakapo", description: "New Zealand's flightless night parrot" },
        { label: "Parrot Profile", href: "/animals/parrot", description: "Parrots as a group" },
        { label: "Kiwi Profile", href: "/animals/kiwi", description: "Another iconic NZ bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "New Zealand fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
