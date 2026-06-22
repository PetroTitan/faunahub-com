import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kinkajou";
const TITLE = "Kinkajou — Profile, the 'Honey Bear' with a Prehensile Tail";
const DESC =
  "Explore the kinkajou (Potos flavus): a golden, nocturnal rainforest mammal of the Americas with a grasping tail and a sweet tooth for fruit and nectar — and a role as a pollinator.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("kinkajou"),
});

export default function KinkajouPage() {
  return (
    <AnimalProfileLayout
      commonName="Kinkajou"
      scientificName="Potos flavus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rainforest", "Nocturnal"]}
      image={getAnimalImage("kinkajou") ?? undefined}
      galleryImages={getAnimalGalleryImages("kinkajou")}
      sources={ANIMAL_SOURCES.kinkajou}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The kinkajou (<em>Potos flavus</em>) is a small, golden-brown, tree-dwelling mammal
            of the rainforests of Central and South America. With its big dark eyes, round ears,
            soft woolly fur, and long grasping tail, it is sometimes called a &ldquo;honey
            bear,&rdquo; but despite that name — and a diet full of fruit and nectar — the
            kinkajou is not a bear or a primate at all. It is a member of the raccoon family
            (Procyonidae), related to coatis and olingos.
          </p>
          <p>
            Kinkajous are night-active acrobats of the treetops, and their prehensile tail —
            which they can use as a fifth limb to grip and hang from branches — makes them
            superbly adapted to life high in the canopy.
          </p>
          <p>
            <strong>Note:</strong> details here cover the kinkajou as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Kinkajous live in tropical forests from southern Mexico through Central America and
          into much of South America, spending almost their whole lives in the trees. They
          favour the canopy of rainforest and other wooded habitats, sheltering in tree hollows
          or dense foliage by day and moving through the branches at night.
        </p>
      }
      diet={
        <p>
          Kinkajous are mainly frugivores with a famous sweet tooth: ripe fruit makes up most
          of their diet, along with nectar, flowers, and the occasional insect or other small
          food. They have a remarkably long, extendable tongue that they use to lap nectar from
          flowers and scoop soft fruit and honey — which is where the &ldquo;honey bear&rdquo;
          nickname comes from. By visiting flowers for nectar, kinkajous can act as pollinators
          and, by eating fruit, as seed-dispersers in the forest.
        </p>
      }
      behavior={
        <p>
          Kinkajous are nocturnal and arboreal, sleeping by day and foraging through the canopy
          at night. The prehensile tail is the key to their lifestyle: they use it as a fifth
          limb to grip branches, hang down to reach fruit, and steady themselves as they climb,
          and they can also turn their hind feet around to climb down trees head-first. They are
          generally solitary foragers but may gather at good feeding trees and are quite vocal,
          giving a range of calls. Though they look gentle, kinkajous are wild animals with
          sharp teeth and claws and can bite or scratch if handled.
        </p>
      }
      humanInteraction={
        <p>
          Kinkajous are sometimes kept as exotic pets, but they are wild animals that can be
          difficult to care for and may bite, so this is discouraged (and regulated in many
          places). They are hunted in some areas for fur and meat and are affected by
          deforestation, but they remain reasonably widespread. As fruit-eaters and flower-
          visitors they play a useful ecological role in their forests. Consult the IUCN Red
          List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a kinkajou a bear or a monkey?",
          answer:
            "Neither. Despite the nickname 'honey bear' and a very monkey-like, tree-swinging lifestyle, the kinkajou is a member of the raccoon family (Procyonidae), related to coatis and olingos. Its bear- and primate-like traits are examples of similar lifestyles producing similar looks, not close kinship.",
        },
        {
          question: "Why is the kinkajou called a 'honey bear'?",
          answer:
            "Because of its golden colour and its love of sweet foods. Kinkajous eat lots of ripe fruit and use a long, extendable tongue to lap up nectar — and reportedly honey — from flowers and hives. Combined with their rounded, teddy-bear-ish look, this earned them the affectionate name 'honey bear,' even though they aren't bears.",
        },
        {
          question: "What is the kinkajou's tail for?",
          answer:
            "It's a prehensile 'fifth limb.' The kinkajou can wrap its long tail around branches to grip, hang, and balance as it moves and feeds high in the canopy, freeing its hands to gather fruit. This grasping tail, along with feet that can rotate to let it climb down head-first, makes it an expert treetop acrobat.",
        },
        {
          question: "Do kinkajous make good pets?",
          answer:
            "Generally no. Although they're cute, kinkajous are wild, nocturnal animals with sharp teeth and claws; they can bite, need specialised care, and are active at night when owners sleep. Keeping them is discouraged and is regulated or restricted in many places. They're best appreciated in the wild or in proper sanctuaries.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Potos flavus" },
        { label: "Class", value: "Mammalia (raccoon family)" },
        { label: "Not a", value: "Bear or primate (despite looks)" },
        { label: "Nickname", value: "Honey bear" },
        { label: "Tail", value: "Prehensile (grips like a fifth limb)" },
        { label: "Diet", value: "Mainly fruit & nectar (pollinator)" },
        { label: "Activity", value: "Nocturnal, arboreal" },
        { label: "Range", value: "Central & South American forests" },
      ]}
      relatedLinks={[
        { label: "Coati Profile", href: "/animals/coati", description: "Its raccoon-family relative" },
        { label: "Raccoon Profile", href: "/animals/raccoon", description: "Another procyonid" },
        { label: "Red Panda Profile", href: "/animals/red-panda", description: "Another fruit-eating climber (separate family)" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
