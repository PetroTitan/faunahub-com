import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/barbet";
const TITLE = "Barbet — Profile, the Chunky, Colourful Bristle-Faced Birds";
const DESC =
  "Explore barbets: stout, vividly coloured tropical birds named for the bristles around their heavy bills — relatives of toucans that chisel nest holes in trees and feast on fruit.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("barbet"),
});

export default function BarbetPage() {
  return (
    <AnimalProfileLayout
      commonName="Barbet"
      scientificName="e.g. Psilopogon, Capito, Lybius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Tropical", "Fruit-eater"]}
      image={getAnimalImage("barbet") ?? undefined}
      galleryImages={getAnimalGalleryImages("barbet")}
      sources={ANIMAL_SOURCES.barbet}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Barbets are stout, large-headed, brightly coloured birds of the tropics, found in Africa, Asia,
            and the Americas. They take their name from the prominent bristles (&ldquo;barbs&rdquo;) around
            the base of their heavy, often slightly notched bills. Many are spectacular — clad in greens,
            reds, yellows, and blues — like the little coppersmith barbet (<em>Psilopogon
            haemacephalus</em>) and the large great barbet. They are close relatives of the toucans, with a
            similarly chunky, big-billed look on a smaller scale.
          </p>
          <p>
            Barbets are mostly fruit-eaters and accomplished hole-makers, chiselling nest cavities into tree
            trunks and dead wood with their stout bills, and several are known for loud, monotonously
            repeated calls that ring through the forest.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;barbet&rdquo; covers several families across different continents;
            details here describe them broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Barbets live in tropical and subtropical regions of Africa, South and Southeast Asia, and Central
          and South America, mainly in forests, woodland, and forest edge, with some in gardens, plantations,
          and wooded savanna. They favour areas with fruiting trees and with dead or soft wood suitable for
          excavating nest holes.
        </p>
      }
      diet={
        <p>
          Barbets are mostly frugivores, eating a great deal of fruit (figs are a particular favourite of
          many), along with buds and flowers, and they also take insects and other small invertebrates,
          especially when feeding their young. By eating fruit and dispersing the seeds, barbets help
          regenerate the forests they live in.
        </p>
      }
      behavior={
        <p>
          Barbets are cavity nesters: using their robust bills, they chisel out nest holes in tree trunks,
          branches, or dead wood (some African barbets dig into earth banks or termite mounds instead),
          excavating a chamber where they raise their young. Many are highly vocal, giving loud, repetitive
          calls — the coppersmith barbet, for instance, is named for its persistent, metallic
          &ldquo;tonk... tonk...&rdquo; that sounds like a coppersmith tapping metal. They are often heard
          far more easily than seen, as their green plumage blends into foliage. Some barbets are social and
          may nest cooperatively, while others are more solitary or live in pairs.
        </p>
      }
      humanInteraction={
        <p>
          Barbets are popular with birdwatchers for their bold colours and characterful calls, and they are
          beneficial as seed-dispersers and, in part, insect-eaters; some readily visit fruiting trees in
          gardens and parks. Many species are common and adaptable, though those tied to particular forests
          can be affected by deforestation, and some restricted-range species are of greater conservation
          concern. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called barbets?",
          answer:
            "Because of the bristles — sometimes likened to a beard — around the base of their heavy bills. These prominent facial bristles (the 'barbs') give the family its name and are a recognisable feature of these stout, big-billed birds.",
        },
        {
          question: "Are barbets related to toucans?",
          answer:
            "Yes, closely. Barbets and toucans belong to the same broad group of birds and share a chunky build and an outsized bill — the toucans are essentially the giant, huge-billed members of that lineage. In the Americas, barbets and toucans are especially close relatives.",
        },
        {
          question: "What does the coppersmith barbet's call sound like?",
          answer:
            "Like a coppersmith tapping metal — a persistent, metallic, monotonously repeated 'tonk... tonk... tonk...' that can go on for long stretches, which is exactly how the bird got its name. Many barbets share this habit of loud, repetitive calling, so they're often heard long before they're spotted in the foliage.",
        },
        {
          question: "How do barbets make their nests?",
          answer:
            "By chiselling. Using their stout, powerful bills, barbets excavate nest holes in tree trunks, branches, or dead wood, hollowing out a chamber for their eggs and young (some African barbets dig into earth banks or termite mounds instead). This cavity-nesting habit is shared with their relatives the toucans and woodpeckers.",
        },
      ]}
      quickFacts={[
        { label: "Reference genera", value: "Psilopogon (Asia), Capito (Americas), Lybius (Africa)" },
        { label: "Class", value: "Aves" },
        { label: "Name from", value: "Bristles ('barbs') around the bill" },
        { label: "Relatives", value: "Toucans" },
        { label: "Diet", value: "Mostly fruit (esp. figs); also insects" },
        { label: "Nests", value: "Chisel holes in wood (or banks/termite nests)" },
        { label: "Voice", value: "Loud, repetitive calls (e.g. coppersmith's 'tonk')" },
        { label: "Range", value: "Tropical Africa, Asia & the Americas" },
      ]}
      relatedLinks={[
        { label: "Toucan Profile", href: "/animals/toucan", description: "Its big-billed relatives" },
        { label: "Woodpecker Profile", href: "/animals/woodpecker", description: "Another wood-chiselling relative" },
        { label: "Hornbill Profile", href: "/animals/hornbill", description: "Another big-billed fruit-eater" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Tropical-forest fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
