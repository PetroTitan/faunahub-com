import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/titi-monkey";
const TITLE = "Titi Monkey — Profile, Pair Bonds, Tail-Twining & Diet";
const DESC =
  "Explore titi monkeys (genera Plecturocebus, Callicebus, Cheracebus): small South American monkeys famous for devoted lifelong pairs that twine their tails together.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("titi-monkey"),
});

export default function TitiMonkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Titi Monkey"
      scientificName="Plecturocebus cupreus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "South America"]}
      image={getAnimalImage("titi-monkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("titi-monkey")}
      sources={ANIMAL_SOURCES["titi-monkey"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Titi monkeys are small, soft-furred New World monkeys of South American forests,
            now split among several genera (such as <em>Plecturocebus</em>,
            <em> Callicebus</em>, and <em>Cheracebus</em>). The coppery titi
            (<em>Plecturocebus cupreus</em>), shown here, is a typical species — a modestly
            sized, long-tailed monkey, often reddish or grey-brown, that lives in the
            forest understorey. Titis are best known not for flashy looks but for their
            remarkable family life.
          </p>
          <p>
            They form strong, lasting pair bonds, and a bonded pair will often sit pressed
            together and intertwine their long tails — a behaviour that has made titi
            monkeys a model for studying pair bonding in primates.
          </p>
          <p>
            <strong>Note:</strong> there are many titi species; details here use the coppery
            titi as a reference. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Titi monkeys live in forests across much of tropical South America, including the
          Amazon basin and the Atlantic Forest, depending on the species. Many favour dense,
          tangled vegetation in the lower and middle levels of the forest, often near water,
          where thick cover suits their quiet, close-knit family life.
        </p>
      }
      diet={
        <p>
          Titis are mainly frugivores, eating a lot of fruit and supplementing it with
          leaves, seeds, flowers, and insects. Their diet varies by species and season, and
          their reliance on fruit makes them useful seed dispersers in the forests they
          inhabit.
        </p>
      }
      behavior={
        <p>
          Titi monkeys live in small family groups — typically a bonded adult pair and their
          offspring — and are strongly territorial, advertising their range with loud,
          coordinated dawn duets between the pair. The bond between partners is famously
          close: they spend much time together, groom one another, and often twine their
          tails when resting side by side. Fathers are heavily involved in care, frequently
          carrying the infant and only handing it to the mother to nurse. This devoted
          pair-bonding has made titis important in research on the biology of attachment.
        </p>
      }
      humanInteraction={
        <p>
          Titi monkeys are appealing, gentle forest monkeys and are studied for what their
          strong pair bonds reveal about social attachment. In the wild they depend on
          forest cover; many species remain reasonably widespread, but some — especially in
          the heavily cleared Atlantic Forest — are threatened by habitat loss. Consult the
          IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why do titi monkeys twine their tails?",
          answer:
            "Bonded titi pairs often sit pressed together and intertwine their long tails, especially when resting. It's a sign of their strong social bond and helps reinforce the close relationship between partners. This endearing behaviour is one of the most recognisable things about titi monkeys.",
        },
        {
          question: "Do titi monkeys mate for life?",
          answer:
            "Titis form strong, often long-lasting pair bonds and live in small family groups built around a bonded pair. They spend a great deal of time together, groom each other, duet at dawn, and share parenting. Because of this, they are a key model for scientists studying pair bonding and attachment in primates.",
        },
        {
          question: "Do father titi monkeys help raise the young?",
          answer:
            "Yes, a great deal. In titi families the father typically does most of the infant-carrying, handing the baby to the mother mainly to nurse. This strong paternal care is part of what makes titi monkeys' family life so notable among primates.",
        },
        {
          question: "What do titi monkeys eat?",
          answer:
            "Titis are mainly fruit-eaters, adding leaves, seeds, flowers, and insects to their diet depending on the species and season. Their fruit-eating helps disperse seeds through the forest understorey where they live.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Plecturocebus cupreus (coppery titi)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Diet", value: "Mainly fruit; also leaves & insects" },
        { label: "Signature trait", value: "Strong pair bonds; tail-twining" },
        { label: "Family", value: "Small groups; heavy paternal care" },
        { label: "Communication", value: "Loud dawn duets" },
        { label: "Range", value: "Tropical South America" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Marmoset Profile", href: "/animals/marmoset", description: "Another small New World monkey" },
        { label: "Saki Monkey Profile", href: "/animals/saki-monkey", description: "A related New World monkey" },
        { label: "Tamarin Profile", href: "/animals/tamarin", description: "Another small monkey with shared parental care" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
