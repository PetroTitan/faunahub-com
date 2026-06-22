import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/serval";
const TITLE = "Serval — Profile, the Long-Legged Cat with the Best Pounce in Africa";
const DESC =
  "Explore the serval (Leptailurus serval): a slender, long-legged African wild cat with huge ears, famous for using sound to locate prey and a spectacular high, arcing pounce.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("serval"),
});

export default function ServalPage() {
  return (
    <AnimalProfileLayout
      commonName="Serval"
      scientificName="Leptailurus serval"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Africa"]}
      image={getAnimalImage("serval") ?? undefined}
      galleryImages={getAnimalGalleryImages("serval")}
      sources={ANIMAL_SOURCES.serval}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The serval (<em>Leptailurus serval</em>) is a slender, elegant African wild cat built
            for hunting in tall grass. It has the longest legs relative to body size of any cat,
            a small head with very large, rounded ears, and a tawny coat boldly marked with black
            spots and bars. Those long legs and tall ears are no accident: they let the serval
            see and — above all — hear small prey hidden in dense vegetation.
          </p>
          <p>
            The serval is one of the most successful hunters among cats, and is famous for a
            spectacular hunting move: a high, arcing pounce, leaping up and bringing its forepaws
            down to pin prey it has pinpointed by sound alone.
          </p>
          <p>
            <strong>Note:</strong> details here cover the serval as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Servals live across much of sub-Saharan Africa, strongly associated with well-watered
          grassland, wetlands, reedbeds, and savanna with tall grass and good cover. They favour
          areas near water and avoid dense forest and true desert, thriving where long grass
          hides the rodents and other small prey they hunt.
        </p>
      }
      diet={
        <p>
          The serval is a carnivore that specialises in small prey, above all rodents, plus
          birds, frogs, reptiles, insects, and other small animals. It hunts mainly by sound,
          using its huge ears to detect the faint rustles of a rodent in the grass, then either
          stalking close or springing into its trademark high pounce to land on the hidden prey.
          Servals are remarkably successful hunters, catching a high proportion of the prey they
          go after.
        </p>
      }
      behavior={
        <p>
          Servals are mostly solitary and active around dawn, dusk, and at night, resting in
          cover during the heat of the day. They are superb at locating and catching prey: the
          oversized ears can pinpoint a rodent underground or in thick grass, and the long legs
          power a vertical leap of several metres in distance and well over a metre high, ending
          in a forepaw strike. They also use their long legs to reach into burrows and to flush
          prey. Servals are territorial, marking their ranges, and females raise their kittens
          alone in sheltered dens. They are generally shy of people.
        </p>
      }
      humanInteraction={
        <p>
          Servals are widespread and not currently considered globally threatened, though they
          face habitat loss (especially the draining of wetlands), persecution where blamed for
          taking poultry, and hunting for their skins in places. They are sometimes kept as exotic
          pets or bred into hybrid domestic cats, which is discouraged — they are wild animals with
          specialised needs. Observe them at a distance. Consult the IUCN Red List for current
          status.
        </p>
      }
      faqs={[
        {
          question: "Why does the serval have such big ears and long legs?",
          answer:
            "Both are adaptations for hunting small prey in tall grass. The very large ears give the serval exceptional hearing, letting it locate rodents by the faint sounds they make, even when hidden or underground. The long legs (the longest of any cat relative to body size) raise its head for a better view over the grass and power its high pounce. Together they make the serval a specialist grass-hunter.",
        },
        {
          question: "How does a serval catch its prey?",
          answer:
            "Mostly by listening, then leaping. The serval uses its huge ears to pinpoint a rodent or other small animal hidden in vegetation, then performs a high, arcing pounce — springing into the air and bringing its forepaws straight down to pin the prey. It's one of the most effective hunting techniques among cats, with a high success rate.",
        },
        {
          question: "What does a serval eat?",
          answer:
            "It specialises in small prey — especially rodents — along with birds, frogs, reptiles, insects, and other small animals. Its sound-based hunting and high pounce are perfectly suited to catching numerous small, hidden creatures rather than tackling large prey.",
        },
        {
          question: "Are servals good pets?",
          answer:
            "No. Although they're sometimes kept as exotic pets or used to create hybrid domestic-cat breeds, servals are wild animals with specialised needs for space, diet, and behaviour, and they don't make suitable household pets. Keeping them is discouraged and regulated in many places; they're best appreciated in the wild or proper sanctuaries.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Leptailurus serval" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Signature traits", value: "Longest legs of any cat; huge ears" },
        { label: "Hunting", value: "Locates prey by sound; high arcing pounce" },
        { label: "Diet", value: "Carnivore (esp. rodents)" },
        { label: "Habitat", value: "Grassland & wetlands near water" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Caracal Profile", href: "/animals/caracal", description: "Its tufted-eared relative" },
        { label: "Cheetah Profile", href: "/animals/cheetah", description: "Another African cat" },
        { label: "Margay Profile", href: "/animals/margay", description: "A small spotted cat of the Americas" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African grassland fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
