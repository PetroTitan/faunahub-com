import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leopard-frog";
const TITLE = "Northern Leopard Frog — Profile, Spots, Habitat & Declines";
const DESC =
  "Explore the northern leopard frog (Lithobates pipiens): a spotted North American frog of wet meadows, and an early case in amphibian decline research.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("leopard-frog"),
});

export default function LeopardFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Northern Leopard Frog"
      scientificName="Lithobates pipiens"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian","Frog","North America"]}
      image={getAnimalImage("leopard-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("leopard-frog")}
      sources={ANIMAL_SOURCES["leopard-frog"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The northern leopard frog (<em>Lithobates pipiens</em>) is a slender, long-legged North American frog named for the pattern that covers it: rounded dark spots, each ringed with a pale halo, scattered across a green or brown back.
        </p>
        <p>
          A pair of pale, raised ridges — the dorsolateral folds — run down each side of the back, and these help separate it from similar spotted frogs. It is a strong jumper and, unusually for a frog, often forages well away from water in damp grassland, which has earned it the name meadow frog.
        </p>
        <p>
          This was once one of the most abundant frogs in North America and a staple of school and university biology classes. Marked declines across parts of its range from the 1960s onward made it an early and prominent case in the study of <strong>global amphibian decline</strong>.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Northern leopard frogs live across much of Canada and the northern United States. They breed in permanent and semi-permanent still water — ponds, marshes, slow streams and ditches with plentiful vegetation — and spend much of the summer in damp meadows, fields and grassland away from open water, returning to water to overwinter.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Adults are generalist predators of invertebrates: beetles, flies, ants, crickets, spiders, worms and snails, taken with a rapid tongue strike. Larger individuals may take small vertebrates. Tadpoles graze algae and organic material before metamorphosis.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Males call in spring from breeding ponds with a low snore-like sound followed by chuckling notes. Leopard frogs are powerful jumpers and rely on speed and erratic leaping to escape, often heading for water in a series of zig-zag hops. In summer they disperse into meadows to feed, and in winter they return to water, overwintering on the bottom of ponds and streams where oxygen levels remain adequate.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The northern leopard frog was historically collected in large numbers for teaching, research and bait, and it remains a familiar species in North American natural history. Declines beginning in the mid-twentieth century — particularly severe in western populations — were linked to a combination of habitat loss, wetland drainage, disease including chytrid fungus, pollution and introduced predators, and helped bring amphibian declines to wider scientific attention. Amphibian skin is highly permeable, so wild frogs should not be handled unnecessarily. This profile offers no handling or keeping guidance. Status varies regionally; verify at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "How do you identify a northern leopard frog?",
          answer:
            "By the combination of rounded dark spots each surrounded by a pale halo, a green or brown background, and a pair of raised pale ridges — the dorsolateral folds — running down each side of the back. Those folds are useful for separating it from other spotted frogs.",
        },
        {
          question: "Why is it also called a meadow frog?",
          answer:
            "Because it spends much of the summer away from open water. Unlike frogs that stay close to a pond, northern leopard frogs disperse into damp meadows, fields and grassland to feed, returning to water to breed in spring and to overwinter.",
        },
        {
          question: "Why did northern leopard frogs decline?",
          answer:
            "Declines from the mid-twentieth century onward, especially in western populations, have been linked to a combination of factors — wetland drainage and habitat loss, disease including chytrid fungus, pollution, and introduced predators. The species became an early prominent case in the study of global amphibian decline.",
        },
        {
          question: "What do northern leopard frogs eat?",
          answer:
            "Adults are generalist invertebrate predators, taking beetles, flies, ants, crickets, spiders, worms and snails, with larger individuals occasionally taking small vertebrates. Tadpoles graze algae and organic material until they metamorphose.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lithobates pipiens" },
        { label: "Family", value: "Ranidae (true frogs)" },
        { label: "Class", value: "Amphibia" },
        { label: "Identification", value: "Haloed dark spots; dorsolateral folds" },
        { label: "Also called", value: "Meadow frog" },
        { label: "Summer habitat", value: "Damp meadows away from water" },
        { label: "Winter", value: "At the bottom of ponds and streams" },
        { label: "Status", value: "Varies regionally — verify" },
      ]}
      relatedLinks={[
        { label: "Common Frog Profile", href: "/animals/common-frog" },
        { label: "Bullfrog Profile", href: "/animals/bullfrog" },
        { label: "Wood Frog Profile", href: "/animals/wood-frog" },
        { label: "Frog Profile", href: "/animals/frog", description: "Group-level overview" },
        { label: "Endangered Animals", href: "/endangered-animals" },
      ]}
    />
  );
}
