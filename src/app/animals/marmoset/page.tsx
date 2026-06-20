import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/marmoset";
const TITLE = "Marmoset — Profile, Tiny Monkeys, Diet & Behavior";
const DESC =
  "Explore marmosets (family Callitrichidae): tiny South American monkeys that gnaw tree bark to feed on gum, usually give birth to twins, and live in cooperative family groups.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("marmoset"),
});

export default function MarmosetPage() {
  return (
    <AnimalProfileLayout
      commonName="Marmoset"
      scientificName="Callithrix jacchus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "South America"]}
      image={getAnimalImage("marmoset") ?? undefined}
      galleryImages={getAnimalGalleryImages("marmoset")}
      sources={ANIMAL_SOURCES.marmoset}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Marmosets are tiny New World monkeys of the family Callitrichidae, native to
            South America. The common marmoset (<em>Callithrix jacchus</em>), shown here,
            is a familiar example, with conspicuous white ear tufts and a long banded tail.
            Among the smallest monkeys in the world, marmosets are quick, agile, and highly
            social, scampering through trees more like squirrels than like larger primates.
          </p>
          <p>
            They have an unusual diet specialisation and an unusual family life: marmosets
            gnaw holes in bark to feed on tree gum, and they typically raise twins with help
            from the whole group.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;marmoset&rdquo; covers several species; details
            here use the common marmoset as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Marmosets live in the forests, woodlands, and scrub of South America, especially
          in Brazil. The common marmoset inhabits forest edges, secondary growth, and even
          parks and gardens in parts of eastern Brazil, and is adaptable to disturbed and
          urban-edge habitats where suitable trees are present.
        </p>
      }
      diet={
        <p>
          Marmosets are specialised gum-feeders (gummivores): they have chisel-like lower
          front teeth that they use to gnaw holes in bark, then return to lap up the gum
          and sap that flows out. They round out their diet with fruit, nectar, insects,
          spiders, and small animals. This gum-gnawing ability sets them apart from most
          other monkeys.
        </p>
      }
      behavior={
        <p>
          Marmosets live in cooperative family groups and are notable for their breeding:
          females usually give birth to non-identical twins, and care is shared — the
          father and other group members help carry and rear the infants, handing them back
          to the mother only to nurse. Marmosets communicate with high-pitched calls and
          scent marks, and they are active, fast-moving, and claw-equipped (rather than
          nailed) for gripping bark.
        </p>
      }
      humanInteraction={
        <p>
          Common marmosets are adaptable and remain widespread, and they are also used in
          biomedical research and, unfortunately, kept as exotic pets in some places — which
          is restricted or discouraged because their social and dietary needs are hard to
          meet. Some other marmoset relatives are far rarer. Consult authoritative sources
          for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How small are marmosets?",
          answer:
            "Very small — marmosets are among the tiniest monkeys, with the common marmoset's body only around 20 cm long (plus a longer tail). The related pygmy marmoset is the smallest monkey of all. Their small size lets them exploit slender branches and feed in ways larger primates cannot.",
        },
        {
          question: "Why do marmosets gnaw on trees?",
          answer:
            "Marmosets are gum specialists. They use sharp, chisel-like lower front teeth to gouge holes in bark, then come back to feed on the gum and sap that seeps out. This gum-feeding (gummivory) is a defining habit of marmosets and lets them rely on a food source most monkeys can't use.",
        },
        {
          question: "Do marmosets really have twins?",
          answer:
            "Usually, yes. Common marmosets typically give birth to non-identical twins, which is unusual among primates. Raising two infants is demanding, so care is shared across the family group — fathers and older siblings help carry the babies, returning them to the mother mainly to nurse.",
        },
        {
          question: "Do marmosets make good pets?",
          answer:
            "Not really. Marmosets are highly social, have specialised diets (including tree gum), and live a long time, so their needs are very hard to meet in a home — and keeping them is restricted or illegal in many places. This profile focuses on the wild animal; expert, ethical care and local laws should guide any decision.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Callithrix jacchus (common marmoset)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Size", value: "Among the smallest monkeys" },
        { label: "Diet", value: "Gum specialist; also fruit & insects" },
        { label: "Teeth", value: "Chisel-like incisors for gnawing bark" },
        { label: "Breeding", value: "Usually twins; group care" },
        { label: "Range", value: "South America (esp. Brazil)" },
        { label: "Status", value: "Common; some relatives rarer (verify)" },
      ]}
      relatedLinks={[
        { label: "Tamarin Profile", href: "/animals/tamarin", description: "A close relative in the same family" },
        { label: "Capuchin relatives — Mammals", href: "/animal-encyclopedia/mammals", description: "Browse more primates" },
        { label: "Gibbon Profile", href: "/animals/gibbon", description: "A small ape (Old World)" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
