import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/limpkin";
const TITLE = "Limpkin — Profile, the Snail-Eating Wader & Wailing Call";
const DESC =
  "Explore the limpkin (Aramus guarauna): a brown, white-flecked American wetland bird with a curved bill specialised for extracting apple snails, famous for its eerie wailing cry.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("limpkin"),
});

export default function LimpkinPage() {
  return (
    <AnimalProfileLayout
      commonName="Limpkin"
      scientificName="Aramus guarauna"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wetland", "Americas"]}
      image={getAnimalImage("limpkin") ?? undefined}
      galleryImages={getAnimalGalleryImages("limpkin")}
      sources={ANIMAL_SOURCES.limpkin}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The limpkin (<em>Aramus guarauna</em>) is a tall, brown, white-flecked wetland
            bird of the Americas, from the southeastern United States through Central America
            to South America. With its long legs, long neck, and long, slightly down-curved
            bill, it looks like a cross between a heron and a rail or crane — and indeed it
            is the only species in its family, with the cranes and rails among its closest
            relatives. It wades through marshes and along waterways hunting its very
            particular prey.
          </p>
          <p>
            The limpkin is a snail specialist, and it is just as famous for its voice: a
            loud, eerie, wailing scream that has been used as a jungle sound effect in films
            and rings out over wetlands at night.
          </p>
          <p>
            <strong>Note:</strong> details here cover the limpkin as a whole; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Limpkins live in freshwater wetlands — marshes, swamps, lake and river margins, and
          flooded forest — across the Americas, from Florida and the Gulf states southward
          through the Caribbean, Central America, and much of South America. They need
          shallow water with plenty of their snail prey, and their distribution closely
          tracks where those snails are abundant.
        </p>
      }
      diet={
        <p>
          The limpkin is a specialist predator of large freshwater snails, particularly
          apple snails, and also takes freshwater mussels and other invertebrates. Its bill
          is adapted for the job: the long mandibles have a slight curve and a gap that helps
          it carry and manipulate a snail, and the tip is suited to slipping into the shell
          and detaching the body. A limpkin often leaves neat piles of emptied shells at
          favoured feeding spots.
        </p>
      }
      behavior={
        <p>
          Limpkins wade slowly and deliberately through shallow water, probing and peering
          for snails, which they pluck out and extract from the shell with practised skill.
          They are most vocal at night and at dawn and dusk, giving the loud, wailing,
          screaming calls that make them easy to detect even when unseen. The spread of
          introduced apple snails has actually helped limpkins expand their range in parts of
          the United States in recent years.
        </p>
      }
      humanInteraction={
        <p>
          Limpkins are striking, vocal wetland birds and a favourite of birdwatchers,
          especially in places like the Florida Everglades. They depend on healthy wetlands
          and abundant snails, so wetland drainage and pollution can harm them, though they
          have recently expanded in some areas. Their eerie calls have long featured in
          folklore and film soundtracks. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "What does a limpkin eat?",
          answer:
            "Limpkins are specialists in large freshwater snails — especially apple snails — and also eat freshwater mussels and other invertebrates. Their bill is shaped to carry a snail and slip into its shell to detach the body, and they often leave tidy piles of emptied shells where they feed.",
        },
        {
          question: "Why is the limpkin's call so famous?",
          answer:
            "The limpkin gives a loud, eerie, wailing scream, most often at night, that carries far across wetlands. The haunting sound has been used as a 'jungle' or spooky sound effect in films and recordings, and it makes the limpkin easy to detect by ear even when the bird itself is hidden.",
        },
        {
          question: "What kind of bird is a limpkin?",
          answer:
            "The limpkin is the only member of its own family (Aramidae), looking somewhat like a heron but most closely related to the cranes and rails. It's a wading wetland bird of the Americas, neither a true heron nor a true crane, occupying its own distinct branch of the bird family tree.",
        },
        {
          question: "Why are limpkins spreading in the United States?",
          answer:
            "Partly because of their food. The spread of introduced apple snails in parts of the southeastern U.S. has given limpkins abundant prey, helping them expand their range northward in recent years. Their fortunes are closely tied to the availability of large freshwater snails.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Aramus guarauna" },
        { label: "Class", value: "Aves (its own family, Aramidae)" },
        { label: "Relatives", value: "Cranes & rails" },
        { label: "Diet", value: "Specialist on apple snails" },
        { label: "Signature trait", value: "Loud, eerie wailing call" },
        { label: "Habitat", value: "American freshwater wetlands" },
        { label: "Range", value: "SE USA to South America" },
        { label: "Status", value: "Widespread; expanding in places (verify)" },
      ]}
      relatedLinks={[
        { label: "Heron Profile", href: "/animals/heron", description: "A similar-looking wetland wader" },
        { label: "Jacana Profile", href: "/animals/jacana", description: "Another wetland bird of the Americas" },
        { label: "Flamingo Profile", href: "/animals/flamingo", description: "Another specialised wetland feeder" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
