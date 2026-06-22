import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/puffbird";
const TITLE = "Puffbird — Profile, the Big-Headed Sit-and-Wait Hunters of the Neotropics";
const DESC =
  "Explore puffbirds (family Bucconidae): stocky, large-headed Neotropical birds that perch motionless for long spells, then sally out to grab insects and small prey with a stout, hooked bill.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("puffbird"),
});

export default function PuffbirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Puffbird"
      scientificName="family Bucconidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Forest"]}
      image={getAnimalImage("puffbird") ?? undefined}
      galleryImages={getAnimalGalleryImages("puffbird")}
      sources={ANIMAL_SOURCES.puffbird}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Puffbirds (family Bucconidae) are stocky, large-headed birds of the forests of the American
            tropics, named for their habit of sitting with their loose, fluffy plumage puffed out, looking
            rounded and rather sleepy. With big heads, short tails, and stout, often slightly hooked bills,
            they are relatives of the jacamars but built quite differently — chunky and still where jacamars
            are slender and dashing.
          </p>
          <p>
            Puffbirds are classic sit-and-wait predators: they perch quietly and motionless for long
            periods, easily overlooked, then suddenly sally out to seize an insect or small animal and carry
            it back to a perch, often bashing it before swallowing.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;puffbird&rdquo; covers a family of species (which also includes the
            nunbirds and nunlets); details here describe the group broadly. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Puffbirds live in the Neotropics, from Mexico through Central America and across much of tropical
          South America, mainly in humid lowland and foothill rainforest, forest edge, and woodland. They
          perch at various levels from the understorey to the canopy, depending on the species, and are tied
          to forested habitats.
        </p>
      }
      diet={
        <p>
          Puffbirds are carnivores that feed largely on insects — including large ones such as beetles,
          cicadas, and grasshoppers — and other small prey like spiders, small lizards, and even tiny
          vertebrates. Hunting by ambush, a puffbird watches from a perch and then makes a quick sally to
          grab the prey, frequently returning to beat larger or harder prey against the branch before eating
          it.
        </p>
      }
      behavior={
        <p>
          The hallmark of puffbirds is their stillness. They can sit motionless and unobtrusive for long
          stretches, which makes them easy to miss despite often being tame and approachable, then explode
          into a brief, purposeful flight to capture prey. Many are quiet, though some — especially the
          nunbirds — are notably noisy and social, calling in choruses. Like their relatives the jacamars,
          kingfishers, and todies, puffbirds are cavity nesters: many dig burrows into the ground, earth
          banks, or termite nests, laying their eggs in a chamber at the end. They are usually seen alone or
          in pairs, except for the more gregarious nunbirds.
        </p>
      }
      humanInteraction={
        <p>
          Puffbirds are a quiet delight for birdwatchers, who prize spotting these unobtrusive perchers, and
          they are harmless, beneficial insect-eaters. Like most forest birds they depend on healthy tropical
          forest, so deforestation is the main threat, and some restricted-range species are of conservation
          concern, while many remain reasonably common. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called puffbirds?",
          answer:
            "Because of their habit of sitting with their loose, soft plumage puffed out, which makes them look rounded, fluffy, and rather sleepy as they perch. Combined with their big heads and short tails, this puffed-up posture gives the family its name.",
        },
        {
          question: "How do puffbirds hunt?",
          answer:
            "By sit-and-wait ambush. A puffbird perches quietly and motionless, watching, then sallies out in a quick flight to grab an insect or other small prey with its stout bill, usually returning to a perch — and often whacking larger prey against the branch before swallowing it. Their stillness makes them easy to overlook between strikes.",
        },
        {
          question: "Where do puffbirds nest?",
          answer:
            "In cavities, like their relatives the jacamars, kingfishers, and todies. Many puffbirds dig burrows into the ground, earthen banks, or termite nests and lay their eggs in a chamber at the end. This hidden nest helps protect the eggs and chicks from predators.",
        },
        {
          question: "Are puffbirds related to jacamars?",
          answer:
            "Yes — puffbirds and jacamars are close relatives in the same broad group of Neotropical birds. They share traits like burrow-nesting and catching insects by sallying from a perch, but they look quite different: jacamars are slim and glittering, while puffbirds are chunky, big-headed, and more soberly coloured.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Bucconidae (puffbirds, incl. nunbirds)" },
        { label: "Class", value: "Aves" },
        { label: "Look", value: "Stocky, big-headed, puffed-out plumage" },
        { label: "Hunting", value: "Sit-and-wait ambush; sallies from a perch" },
        { label: "Diet", value: "Insects & small prey" },
        { label: "Nests", value: "In burrows (ground, banks, termite nests)" },
        { label: "Relatives", value: "Jacamars" },
        { label: "Range", value: "Neotropical forests" },
      ]}
      relatedLinks={[
        { label: "Jacamar Profile", href: "/animals/jacamar", description: "Its slim, glittering relative" },
        { label: "Tody Profile", href: "/animals/tody", description: "Another sallying, burrow-nesting relative" },
        { label: "Trogon Profile", href: "/animals/trogon", description: "Another Neotropical forest bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
