import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/paca";
const TITLE = "Paca — Profile, the Spotted Rainforest Rodent with Sound-Boosting Cheeks";
const DESC =
  "Explore the paca (Cuniculus paca): a large, spotted, nocturnal Neotropical rodent with unique resonating cheekbones — a seed-disperser and one of the region's prized game animals.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("paca"),
});

export default function PacaPage() {
  return (
    <AnimalProfileLayout
      commonName="Paca"
      scientificName="Cuniculus paca"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Rainforest"]}
      image={getAnimalImage("paca") ?? undefined}
      galleryImages={getAnimalGalleryImages("paca")}
      sources={ANIMAL_SOURCES.paca}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The paca (<em>Cuniculus paca</em>), or lowland paca, is a large, stout rodent of the forests of
            Central and South America — among the biggest rodents in its range, after the capybara and a
            few others. It has a chunky body, short legs, almost no visible tail, and a handsome
            dark-brown coat marked with several rows of pale spots and dashes along each side. A relative of
            the agouti, it is mostly solitary and active by night.
          </p>
          <p>
            One of the paca&apos;s most remarkable features is hidden in its skull: greatly enlarged,
            hollow cheekbones (zygomatic arches) that act as resonating chambers, amplifying the sounds it
            makes. By grinding its teeth and using these built-in amplifiers, a paca can produce a
            surprisingly loud, low rumble — an unusual trait among mammals.
          </p>
          <p>
            <strong>Note:</strong> details here cover the lowland paca; treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Pacas live across much of the Neotropics, from Mexico through Central America and into South
          America, in tropical forests and well-vegetated areas, almost always near water — rivers,
          streams, swamps, and lakes. They shelter by day in burrows (often near water, sometimes with
          underwater or hidden entrances) and emerge at night to forage along the forest floor.
        </p>
      }
      diet={
        <p>
          The paca is a herbivore that feeds mainly on fallen fruit, along with seeds, leaves, roots, and
          other plant matter. As a major fruit-eater of the forest floor, it helps disperse seeds — and,
          like the agouti, it may bury some, contributing to the regeneration of forest trees. Its strong
          attraction to fallen fruit makes it a familiar visitor beneath fruiting trees.
        </p>
      }
      behavior={
        <p>
          Pacas are nocturnal, mostly solitary, and shy, foraging alone along regular paths and retreating
          to a burrow by day. They are excellent swimmers and readily take to water to escape danger,
          diving and hiding beneath the surface. The enlarged, hollow cheekbones that amplify their
          tooth-grinding rumbles are a striking and unusual adaptation, used in communication and threat
          displays. Pacas are alert and quick to flee, relying on their burrows, swimming ability, and the
          cover of darkness to avoid predators such as big cats.
        </p>
      }
      humanInteraction={
        <p>
          The paca is one of the most prized game animals in the Neotropics, widely hunted for its meat,
          which is highly regarded across much of its range, and it is increasingly raised in managed or
          farmed settings in some areas. The lowland paca remains relatively widespread and is not currently
          considered globally threatened overall, though heavy hunting and habitat loss can deplete local
          populations. As an important seed-disperser, it also matters ecologically. Consult the IUCN Red
          List for current status.
        </p>
      }
      faqs={[
        {
          question: "What are the paca's special 'sound-boosting' cheeks?",
          answer:
            "The paca has greatly enlarged, hollow cheekbones (zygomatic arches) in its skull that act as resonating chambers. By grinding its teeth and using these built-in amplifiers, it can produce a surprisingly loud, low rumbling sound for communication and threat displays. This skull adaptation is unusual among mammals and one of the paca's most distinctive features.",
        },
        {
          question: "How big is a paca, and is it related to the agouti?",
          answer:
            "The paca is a large rodent — one of the biggest in the Neotropics after the capybara and a few relatives — with a stout, spotted body and almost no tail. Yes, it's a close relative of the agouti; both are large South American rodents, though the paca is heavier and nocturnal while the agouti is more slender and active by day.",
        },
        {
          question: "What does a paca eat?",
          answer:
            "Mostly fallen fruit, plus seeds, leaves, roots, and other plant matter. As a major fruit-eater of the forest floor, the paca helps disperse seeds — and may bury some — which supports the regeneration of forest trees. It often forages beneath fruiting trees at night.",
        },
        {
          question: "Can pacas swim?",
          answer:
            "Yes, very well. Pacas live near water and are strong swimmers that readily dive and hide beneath the surface to escape predators. Their burrows are often near water, sometimes with concealed or underwater entrances, and swimming is a key part of how they avoid danger.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cuniculus paca (lowland paca)" },
        { label: "Class", value: "Mammalia (rodent)" },
        { label: "Relatives", value: "Agouti" },
        { label: "Signature trait", value: "Hollow cheekbones amplify its calls" },
        { label: "Coat", value: "Dark brown with rows of pale spots" },
        { label: "Diet", value: "Herbivore (mainly fallen fruit; seed-disperser)" },
        { label: "Activity", value: "Nocturnal, solitary; strong swimmer" },
        { label: "Range", value: "Mexico through South America" },
      ]}
      relatedLinks={[
        { label: "Agouti Profile", href: "/animals/agouti", description: "Its close, day-active relative" },
        { label: "Capybara Profile", href: "/animals/capybara", description: "The largest rodent, a relative" },
        { label: "Porcupine Profile", href: "/animals/porcupine", description: "Another large rodent" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
