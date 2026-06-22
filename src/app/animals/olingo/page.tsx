import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/olingo";
const TITLE = "Olingo — Profile, the Kinkajou's Slender, Tree-Dwelling Cousin";
const DESC =
  "Explore olingos (genus Bassaricyon): slender, nocturnal, tree-living members of the raccoon family from the American tropics — often confused with the kinkajou but without a grasping tail.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("olingo"),
});

export default function OlingoPage() {
  return (
    <AnimalProfileLayout
      commonName="Olingo"
      scientificName="genus Bassaricyon"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rainforest", "Nocturnal"]}
      image={getAnimalImage("olingo") ?? undefined}
      galleryImages={getAnimalGalleryImages("olingo")}
      sources={ANIMAL_SOURCES.olingo}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Olingos (genus <em>Bassaricyon</em>) are slender, soft-furred, golden-brown mammals
            of the forests of Central and South America — members of the raccoon family
            (Procyonidae) and close relatives of the kinkajou. Tree-dwelling and active at night,
            olingos are so similar in appearance and habits to the kinkajou that they are
            frequently mistaken for it, and they often share the same fruiting trees.
          </p>
          <p>
            There is a key difference, though: unlike the kinkajou, the olingo does not have a
            prehensile (grasping) tail. Its long, bushy tail is used for balance rather than as a
            fifth limb, and its muzzle is more pointed.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;olingo&rdquo; covers several Bassaricyon species; details
            here describe the genus broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Olingos live in tropical forests from Central America through parts of South America,
          including lowland rainforest and montane cloud forest. They are arboreal, spending their
          lives in the canopy, and depend on intact, well-connected forest with plenty of
          fruiting trees.
        </p>
      }
      diet={
        <p>
          Olingos are mainly frugivores, feeding heavily on ripe fruit, along with nectar,
          insects, and occasionally small animals. Like other fruit-eating, flower-visiting
          members of the raccoon family, they can help disperse seeds and may visit flowers for
          nectar. They forage at night through the canopy, often at the same fruiting trees used
          by kinkajous and other animals.
        </p>
      }
      behavior={
        <p>
          Olingos are nocturnal and arboreal, leaping and climbing nimbly through the canopy.
          Lacking a grasping tail, they rely on agility and their long, bushy tail for balance
          rather than hanging from it as a kinkajou does. They are generally solitary or seen in
          small numbers, and they shelter in tree hollows by day. Quiet and elusive, olingos are
          not well known to most people and are easily overlooked or mistaken for kinkajous, which
          is part of why some olingo species were only recently recognised by science.
        </p>
      }
      humanInteraction={
        <p>
          Olingos are little-known forest animals, not commonly encountered, and their main
          conservation challenge is the loss and fragmentation of tropical forest. Some species
          are reasonably widespread while others, with smaller ranges, are more vulnerable;
          protecting connected forest is key. As wild, specialised forest animals, they are not
          suited to life as pets. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What's the difference between an olingo and a kinkajou?",
          answer:
            "They look and live very similarly — both are golden-brown, nocturnal, fruit-eating tree-dwellers in the raccoon family — but the key difference is the tail. The kinkajou has a prehensile (grasping) tail it uses like a fifth limb, while the olingo's long, bushy tail is used only for balance. Olingos also tend to have a more pointed muzzle. They're close relatives, not the same animal.",
        },
        {
          question: "Is an olingo a kind of raccoon?",
          answer:
            "Yes, in the broad sense — the olingo belongs to the raccoon family (Procyonidae), which also includes raccoons, coatis, and kinkajous. So while it doesn't look much like a typical raccoon, it's part of that family group, with the kinkajou as its closest well-known relative.",
        },
        {
          question: "What do olingos eat?",
          answer:
            "Mostly fruit, supplemented with nectar, insects, and occasionally small animals. As night-active canopy foragers, olingos visit fruiting (and sometimes flowering) trees, and like other fruit-eating procyonids they can help disperse seeds through the forest.",
        },
        {
          question: "Why are olingos so little known?",
          answer:
            "Because they're quiet, nocturnal, high-canopy animals that closely resemble the more familiar kinkajou, olingos are easily overlooked or misidentified. In fact, their similarity caused confusion for a long time — one olingo species (the olinguito) was only formally described by scientists relatively recently, highlighting how much remains to be learned about them.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Bassaricyon (olingos)" },
        { label: "Class", value: "Mammalia (raccoon family)" },
        { label: "Closest kin", value: "Kinkajou" },
        { label: "Key difference", value: "Tail NOT prehensile (used for balance)" },
        { label: "Diet", value: "Mainly fruit (also nectar, insects)" },
        { label: "Activity", value: "Nocturnal, arboreal" },
        { label: "Range", value: "Central & South American forests" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Kinkajou Profile", href: "/animals/kinkajou", description: "Its closest, look-alike relative" },
        { label: "Coati Profile", href: "/animals/coati", description: "Another raccoon-family member" },
        { label: "Raccoon Profile", href: "/animals/raccoon", description: "The family's namesake" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
