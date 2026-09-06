import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/discus";
const TITLE = "Discus — Profile, Amazon Habitat & Parental Skin Feeding";
const DESC =
  "Explore discus fish (Symphysodon): disc-shaped Amazonian cichlids whose parents feed their newly hatched fry on a secretion from their own skin.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("discus"),
});

export default function DiscusPage() {
  return (
    <AnimalProfileLayout
      commonName="Discus"
      scientificName="genus Symphysodon"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Cichlid","Amazon"]}
      image={getAnimalImage("discus") ?? undefined}
      galleryImages={getAnimalGalleryImages("discus")}
      sources={ANIMAL_SOURCES.discus}
      factsHeaderNote="“Discus” covers the species of the genus Symphysodon from the Amazon basin. Taxonomy within the genus has been revised repeatedly and the number of valid species is still debated; the many colour varieties in the aquarium trade are captive-bred lines, not wild forms."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Discus are cichlids of the genus <em>Symphysodon</em>, native to the Amazon basin. Their body is laterally compressed into a near-circular disc — a shape that lets them slip between submerged roots and branches in the flooded forest they inhabit.
        </p>
        <p>
          Wild discus are patterned in browns, greens, blues and reds with vertical bars that can darken or fade with mood. The intensely coloured varieties familiar from aquarium shops are the product of decades of selective breeding, not wild appearance.
        </p>
        <p>
          Their most remarkable trait is parental: discus feed their newly hatched young on a <strong>secretion produced from the parents&apos; own skin</strong>, with the fry grazing directly on the flanks of the adults for the first weeks of life.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Discus live in the Amazon basin in slow-moving blackwater and clearwater tributaries, floodplain lakes and flooded forest. They are strongly associated with submerged structure — root tangles, fallen branches and leaf litter — in soft, warm, often acidic water. Water chemistry and levels shift dramatically with the flood cycle, and discus move into flooded forest as waters rise.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Wild discus are omnivores that feed on small invertebrates, insect larvae, crustaceans, plant material and detritus taken from among submerged structure and the substrate. Their small mouths suit picking small items rather than taking large prey.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Discus are social outside breeding, forming groups in the wild, and pair off to breed. Eggs are laid on a vertical surface such as a root or leaf, and both parents guard and fan them. Once the fry become free-swimming they attach to the parents&apos; flanks and feed on the mucus-like secretion the adults produce for the purpose — the parents take turns, and the transition off this food onto other prey is gradual. This form of parental care is unusual among fishes.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Discus are among the most prized aquarium fish in the world and are the subject of extensive selective breeding for colour and pattern; virtually all trade animals are captive-bred. In the wild they are affected by habitat change in the Amazon basin, and taxonomy within the genus continues to be revised. This profile is educational and covers the wild fish — it offers no aquarium husbandry, water-chemistry, feeding or breeding advice. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Do discus really feed their young on their skin?",
          answer:
            "Yes. Once discus fry become free-swimming they attach to the flanks of their parents and graze on a mucus-like secretion produced by the adults' skin. Both parents take turns carrying the fry, and the young shift gradually onto other food as they grow — a form of parental care that is very unusual among fishes.",
        },
        {
          question: "Why are discus shaped like a disc?",
          answer:
            "The flattened, near-circular body suits the habitat. Discus live among submerged roots, branches and leaf litter in Amazon backwaters and flooded forest, and a laterally compressed shape lets them move through tight structure that a deeper-bodied or more torpedo-shaped fish could not.",
        },
        {
          question: "Are wild discus as colourful as aquarium ones?",
          answer:
            "No. Wild discus are patterned in browns, greens, blues and reds with vertical bars, but the intense solid blues, reds and other colours seen in shops are the result of decades of selective breeding in captivity. Nearly all discus in the trade are captive-bred lines rather than wild-caught fish.",
        },
        {
          question: "Where do discus live?",
          answer:
            "In the Amazon basin — slow blackwater and clearwater tributaries, floodplain lakes and flooded forest, in soft, warm and often acidic water. They stay close to submerged structure such as root tangles and fallen branches, moving into flooded forest as water levels rise.",
        },
      ]}
      quickFacts={[
        { label: "Genus", value: "Symphysodon" },
        { label: "Family", value: "Cichlidae" },
        { label: "Class", value: "Actinopterygii" },
        { label: "Native range", value: "Amazon basin" },
        { label: "Body shape", value: "Laterally compressed disc" },
        { label: "Parental care", value: "Fry feed on parental skin secretion" },
        { label: "Aquarium colours", value: "Selectively bred, not wild forms" },
        { label: "Habitat", value: "Blackwater tributaries and flooded forest" },
      ]}
      relatedLinks={[
        { label: "Angelfish Profile", href: "/animals/angelfish", description: "Another Amazonian cichlid" },
        { label: "Arapaima Profile", href: "/animals/arapaima" },
        { label: "Piranha Profile", href: "/animals/piranha" },
        { label: "Aquarium Care Guides", href: "/aquarium-care" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
