import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/peccary";
const TITLE = "Peccary — Profile, the New World 'Pig' That Isn't Really a Pig";
const DESC =
  "Explore peccaries (family Tayassuidae): pig-like, herd-living mammals of the Americas — not true pigs — with a scent gland on the back and a taste for cactus and tough plants.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("peccary"),
});

export default function PeccaryPage() {
  return (
    <AnimalProfileLayout
      commonName="Peccary"
      scientificName="family Tayassuidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Americas", "Herd animal"]}
      image={getAnimalImage("peccary") ?? undefined}
      galleryImages={getAnimalGalleryImages("peccary")}
      sources={ANIMAL_SOURCES.peccary}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Peccaries (family Tayassuidae) are sturdy, pig-like, hoofed mammals of the Americas,
            ranging from the southern United States down through Central and South America. With
            their bristly coats, large heads, and short legs, they look very much like wild pigs and
            are often called &ldquo;javelinas&rdquo; or &ldquo;skunk pigs.&rdquo; But despite the
            resemblance, peccaries are not true pigs: they belong to their own New World family, with
            several anatomical differences from the pigs and boars of the Old World.
          </p>
          <p>
            The collared peccary (<em>Dicotyles tajacu</em>), shown here, is the most widespread
            species. Peccaries live in social herds and are well known for the strong, musky scent
            produced by a gland on the back, which gives the &ldquo;skunk pig&rdquo; nickname.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;peccary&rdquo; covers a family of species; details here
            use the collared peccary as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Peccaries occupy a wide range of habitats across the Americas — deserts and dry scrub
          (where the collared peccary thrives among cacti), tropical rainforest, dry forest,
          grassland, and wetlands. Different species favour different environments, from the arid
          country of the southwestern United States and Mexico to the rainforests and swamps of South
          America, and some readily live around farmland and towns.
        </p>
      }
      diet={
        <p>
          Peccaries are omnivores with a largely plant-based diet: roots, bulbs, fruit, seeds, and
          green vegetation, famously including prickly-pear cactus pads (spines and all) in dry
          regions, along with some invertebrates and small animals. Their tough mouths and digestive
          systems let them process fibrous, spiny, and otherwise hard-to-eat plants that many other
          animals avoid.
        </p>
      }
      behavior={
        <p>
          Peccaries are social animals that live in herds — from small family bands to, in the
          white-lipped peccary, large groups of dozens or even hundreds. A scent gland on the lower
          back produces a strong, musky secretion that herd members rub on each other and on objects,
          marking territory and keeping the group bonded and recognisable by smell (hence
          &ldquo;skunk pig&rdquo;). They communicate with grunts and tooth-clacking, and can be bold
          in defending the group, sometimes forming a line against predators. They are active by day
          and night depending on species and climate, and they root and forage across their range.
        </p>
      }
      humanInteraction={
        <p>
          Peccaries are hunted for meat and hides in many areas and can come into conflict with people
          by raiding crops and gardens, especially the adaptable collared peccary, which lives close to
          some towns. The collared peccary remains common and widespread, but other species — notably
          the white-lipped peccary and the giant peccary — are declining and of conservation concern
          due to habitat loss and overhunting. They are wild animals and, in a defensive herd, can be
          formidable, so they should be observed at a respectful distance and not fed. Consult the IUCN
          Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are peccaries the same as pigs?",
          answer:
            "No — though they look very similar. Peccaries are New World mammals in their own family (Tayassuidae), separate from the true pigs and wild boars (family Suidae) of the Old World. They differ in details of their teeth, stomach, scent glands, and tail. So a peccary is a pig-like animal and a distant relative of pigs, but not a true pig.",
        },
        {
          question: "Why is the peccary called a 'skunk pig'?",
          answer:
            "Because of a scent gland on its lower back that produces a strong, musky odour. Peccaries rub this secretion on each other and on their surroundings to mark territory and keep the herd bonded and mutually recognisable by smell. The powerful musky smell, combined with their pig-like look, earned them the nickname 'skunk pig.'",
        },
        {
          question: "What do peccaries eat?",
          answer:
            "They're omnivores that eat mostly plants — roots, bulbs, fruit, seeds, and greenery — and they're famous for eating prickly-pear cactus, spines and all, in dry regions. They also take some invertebrates and small animals. Tough mouths and digestion let them handle fibrous and spiny foods that many animals can't.",
        },
        {
          question: "Are peccaries dangerous?",
          answer:
            "Peccaries are generally not aggressive toward people, but they're wild herd animals that can defend themselves with sharp tusks if cornered or threatened, and a startled herd can be formidable. They're best observed from a distance and never fed or approached. Around towns, the bold collared peccary (javelina) is best discouraged from yards rather than confronted.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Tayassuidae (peccaries)" },
        { label: "Reference species", value: "Dicotyles tajacu (collared peccary)" },
        { label: "Class", value: "Mammalia (NOT a true pig)" },
        { label: "Also called", value: "Javelina, skunk pig" },
        { label: "Signature trait", value: "Musky scent gland on the back" },
        { label: "Social life", value: "Herds (some species in large groups)" },
        { label: "Diet", value: "Omnivore (incl. prickly-pear cactus)" },
        { label: "Range", value: "Southern US to South America" },
      ]}
      relatedLinks={[
        { label: "Wild Boar Profile", href: "/animals/wild-boar", description: "A true pig it resembles" },
        { label: "Warthog Profile", href: "/animals/warthog", description: "Another pig relative (Africa)" },
        { label: "Capybara Profile", href: "/animals/capybara", description: "Another social American mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "American fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
