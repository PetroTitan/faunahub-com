import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leafhopper";
const TITLE = "Leafhopper — Profile of the Jumping, Sap-sucking Insects";
const DESC =
  "Meet the leafhoppers (Cicadellidae): a huge family of small, often colourful sap-sucking insects that jump powerfully, coat themselves in water-repelling 'brochosomes', and include many crop pests.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("leafhopper"),
});

export default function LeafhopperPage() {
  return (
    <AnimalProfileLayout
      commonName="Leafhopper"
      scientificName="Family Cicadellidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Plant-feeder"]}
      image={getAnimalImage("leafhopper") ?? undefined}
      galleryImages={getAnimalGalleryImages("leafhopper")}
      sources={ANIMAL_SOURCES.leafhopper}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Leafhoppers (family Cicadellidae) are small, slender, wedge-shaped insects that suck sap from
            plants. With tens of thousands of described species, it is one of the largest of all insect
            families, and its members come in an astonishing range of colours and patterns, from drab greens
            to vivid stripes and spots.
          </p>
          <p>
            Leafhoppers are true bugs in the same broad group as cicadas, treehoppers, froghoppers, and
            planthoppers. They are powerful jumpers, springing away with a flick of their spiny hind legs,
            and they often shuffle sideways around a stem to keep out of sight.
          </p>
          <p>
            <strong>Note:</strong> Cicadellidae is a vast family; details here describe leafhoppers broadly.
          </p>
        </>
      }
      habitat={
        <p>
          Leafhoppers are found almost everywhere plants grow — grasslands, meadows, forests, wetlands,
          gardens, and farmland — on every continent except Antarctica. Different species specialise on
          different host plants, from grasses and herbs to shrubs and trees, and many can be found simply by
          sweeping a net through vegetation.
        </p>
      }
      diet={
        <p>
          Leafhoppers feed on plants, using needle-like mouthparts to pierce leaves and stems and draw out
          fluids — many tap the sugary contents of the phloem, while others feed on water-conducting xylem
          or on leaf cell contents. As they feed, some species excrete sticky, sugary &ldquo;honeydew.&rdquo;
        </p>
      }
      behavior={
        <p>
          Leafhoppers are quick and wary. They jump explosively when disturbed and side-step around stems to
          hide. Many species are remarkable for producing brochosomes — tiny, intricately structured granules
          that the insect smears over its body as a water-repellent, self-cleaning coating that helps keep it
          from getting stuck in its own honeydew. Many also communicate through plant-borne vibrations rather
          than airborne sound. Young leafhoppers (nymphs) resemble wingless versions of the adults.
        </p>
      }
      humanInteraction={
        <p>
          Leafhoppers are of major importance in agriculture. By feeding on crops and, crucially, by
          transmitting plant diseases (such as phytoplasmas and various plant viruses) from plant to plant,
          some species cause significant damage to grains, vegetables, fruit, and ornamentals. Many other
          leafhoppers are harmless and simply form part of the diverse insect life of grasslands and
          woodlands.
        </p>
      }
      faqs={[
        {
          question: "What is a leafhopper?",
          answer:
            "A leafhopper is a small, sap-sucking insect in the family Cicadellidae, one of the largest insect families. Leafhoppers are true bugs, related to cicadas and treehoppers, and are named for the way they hop and jump from plant foliage.",
        },
        {
          question: "Are leafhoppers harmful to plants?",
          answer:
            "Some are. Many leafhoppers are harmless, but a number of species damage crops by feeding on them and, more importantly, by spreading plant diseases such as viruses and phytoplasmas as they move between plants. These pest species can be a serious problem in agriculture.",
        },
        {
          question: "What are brochosomes?",
          answer:
            "Brochosomes are tiny, intricately shaped granules that leafhoppers produce and spread over their bodies. This coating is water-repellent and self-cleaning, helping the insect stay dry and avoid getting trapped in its own sticky honeydew.",
        },
        {
          question: "How do leafhoppers jump so well?",
          answer:
            "Leafhoppers have muscular hind legs lined with rows of spines, which act like a catapult to launch the insect into a rapid jump when it is startled. Combined with sideways shuffling around stems, this helps them escape predators.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Cicadellidae (tens of thousands of species)" },
        { label: "Class", value: "Insecta" },
        { label: "Group", value: "True bugs (with cicadas, treehoppers)" },
        { label: "Range", value: "Worldwide, except Antarctica" },
        { label: "Diet", value: "Plant sap (phloem, xylem, cell contents)" },
        { label: "Special trait", value: "Coats itself in water-repelling brochosomes" },
        { label: "Movement", value: "Powerful jumper; sidesteps around stems" },
        { label: "Note", value: "Some species are crop pests & disease vectors" },
      ]}
      relatedLinks={[
        { label: "Cicada Profile", href: "/animals/cicada", description: "A larger relative in the same group" },
        { label: "Aphid Profile", href: "/animals/aphid", description: "Another sap-sucking plant bug" },
        { label: "Grasshopper Profile", href: "/animals/grasshopper", description: "Another powerful insect jumper" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Insect life in context" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
