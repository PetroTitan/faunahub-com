import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/douroucouli";
const TITLE = "Douroucouli (Night Monkey) — Profile, the World's Only Nocturnal Monkey";
const DESC =
  "Explore the douroucouli or night monkey (genus Aotus): the only truly nocturnal monkeys — big-eyed, pair-bonding primates of the American tropics where devoted fathers carry the young.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("douroucouli"),
});

export default function DouroucouliPage() {
  return (
    <AnimalProfileLayout
      commonName="Douroucouli (Night Monkey)"
      scientificName="genus Aotus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Nocturnal"]}
      image={getAnimalImage("douroucouli") ?? undefined}
      galleryImages={getAnimalGalleryImages("douroucouli")}
      sources={ANIMAL_SOURCES.douroucouli}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The douroucouli (genus <em>Aotus</em>), better known as the night monkey or owl
            monkey, is a small primate of the forests of Central and South America — and the only
            group of monkeys in the world that is truly nocturnal. Its most obvious feature is a
            pair of enormous brown eyes, adapted for seeing in low light, set in a round face with
            owl-like markings, which give it its &ldquo;owl monkey&rdquo; nickname.
          </p>
          <p>
            Night monkeys live in close family groups built around a bonded male–female pair, and
            they are devoted parents: the father does much of the work of carrying and caring for
            the young.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;douroucouli&rdquo; / night monkey covers several Aotus
            species; details here describe the genus broadly. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Night monkeys live in a range of forests across Central and South America — tropical
          rainforest, dry forest, and secondary woodland — from Panama down through the Amazon and
          beyond. They are arboreal, sheltering by day in tree holes or dense tangles of
          vegetation and emerging at night to feed and travel through the canopy.
        </p>
      }
      diet={
        <p>
          Night monkeys are omnivores, feeding mainly on fruit, along with nectar, flowers,
          leaves, insects, and other small prey. They forage at night through the canopy, using
          their large eyes and good night vision to find food in the dark. By eating fruit and
          visiting flowers, they help disperse seeds and may aid pollination in their forests.
        </p>
      }
      behavior={
        <p>
          Being nocturnal is what sets night monkeys apart from all other monkeys. Their huge eyes
          gather what little light there is (notably, unlike most nocturnal mammals they lack the
          reflective eye layer many night animals have, relying instead on very large eyes), and
          they are most active on moonlit nights. They live in small family groups — typically a
          mated pair and their offspring — and are strongly pair-bonded and territorial,
          advertising their presence with resonant hooting calls. Fathers are exceptionally
          involved, carrying the infant for much of the time and handing it to the mother mainly to
          nurse, a level of paternal care unusual among primates.
        </p>
      }
      humanInteraction={
        <p>
          Night monkeys are affected by deforestation and habitat loss, and they have been
          captured for the pet trade and used in biomedical research, which has added pressure to
          some populations. Several species remain reasonably widespread while others, with smaller
          ranges, are of greater conservation concern. As wild, nocturnal primates with specialised
          needs, they are not suited to life as pets. Consult the IUCN Red List for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Why is the douroucouli called the 'night monkey' or 'owl monkey'?",
          answer:
            "Because it is the only group of monkeys that is truly nocturnal — active at night rather than by day. Its enormous brown eyes, adapted for low light, and round, owl-like face earned it the nickname 'owl monkey.' 'Douroucouli' is another traditional name for these same primates (genus Aotus).",
        },
        {
          question: "How does the night monkey see in the dark?",
          answer:
            "Mainly through very large eyes that gather as much light as possible. Interestingly, unlike many nocturnal mammals, night monkeys lack the reflective layer (tapetum lucidum) behind the retina that makes other animals' eyes shine; instead they rely on their oversized eyes and a retina suited to dim light. They're most active on brighter, moonlit nights.",
        },
        {
          question: "Do father night monkeys really raise the young?",
          answer:
            "Yes — they're famous for it. In night monkey families, the father takes on much of the infant care, carrying the baby for most of the time and passing it to the mother mainly so it can nurse. This high level of paternal care, within a strongly bonded pair, is unusual among primates and a hallmark of these monkeys.",
        },
        {
          question: "What do night monkeys eat?",
          answer:
            "They're omnivores, eating mostly fruit along with nectar, flowers, leaves, insects, and other small prey. Foraging at night through the canopy, they use their large, light-sensitive eyes to find food in the dark, and by eating fruit and visiting flowers they help disperse seeds in their forest home.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Aotus (night / owl monkeys)" },
        { label: "Class", value: "Mammalia (primate)" },
        { label: "Claim to fame", value: "Only truly nocturnal monkeys" },
        { label: "Signature trait", value: "Huge low-light eyes; owl-like face" },
        { label: "Social life", value: "Bonded pair + young; devoted fathers" },
        { label: "Diet", value: "Omnivore (mainly fruit)" },
        { label: "Range", value: "Central & South American forests" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Marmoset Profile", href: "/animals/marmoset", description: "Another small Neotropical primate" },
        { label: "Tarsier Profile", href: "/animals/tarsier", description: "Another huge-eyed nocturnal primate" },
        { label: "Kinkajou Profile", href: "/animals/kinkajou", description: "Another night-active forest climber" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
