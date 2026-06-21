import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cicada";
const TITLE = "Cicada — Profile, the Loud Singer with a Long Hidden Life";
const DESC =
  "Explore cicadas (family Cicadidae): big-eyed insects famous for the males' loud buzzing song and for nymphs that live underground for years — including the periodical cicadas.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("cicada"),
});

export default function CicadaPage() {
  return (
    <AnimalProfileLayout
      commonName="Cicada"
      scientificName="family Cicadidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Singer"]}
      image={getAnimalImage("cicada") ?? undefined}
      galleryImages={getAnimalGalleryImages("cicada")}
      sources={ANIMAL_SOURCES.cicada}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Cicadas (family Cicadidae) are sturdy, big-eyed insects best known for the loud,
            droning, buzzing song the males produce on warm days — one of the classic sounds
            of summer in much of the world. They have stout bodies, two pairs of clear,
            membranous wings held tent-like over the back, and prominent, wide-set eyes.
            Cicadas are not crickets or locusts; they belong to the true-bug order
            (Hemiptera), and feed by sucking sap from plants.
          </p>
          <p>
            Their most extraordinary feature is hidden underground: cicada nymphs spend years
            — in some species many years — buried before emerging to become adults.
          </p>
          <p>
            <strong>Note:</strong> there are thousands of cicada species; details here cover
            them broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Cicadas are found on every continent except Antarctica, mainly in warm and
          temperate regions, in forests, woodlands, grasslands, gardens, and farmland —
          anywhere with suitable trees or other plants. The adults live in the vegetation
          above ground, while the nymphs develop in the soil among plant roots.
        </p>
      }
      diet={
        <p>
          Cicadas are sap-feeders. Both the underground nymphs and the adults use piercing
          mouthparts to drink xylem sap — the watery fluid in plants — from roots (nymphs)
          and from stems and branches (adults). This dilute diet is part of why nymphs take
          so long to grow. Cicadas are generally not considered serious pests, though heavy
          egg-laying can damage young twigs.
        </p>
      }
      behavior={
        <p>
          The male cicada&apos;s song is produced not by rubbing body parts (as crickets do)
          but by rapidly buckling special drum-like membranes called tymbals on the abdomen,
          which can be amplified by largely hollow internal air sacs — making cicadas among
          the loudest of all insects. After years underground, nymphs dig to the surface,
          climb a plant, and moult into winged adults, often leaving their empty brown
          nymphal skins clinging to bark. The famous periodical cicadas of North America take
          this to an extreme, emerging together in vast numbers only once every 13 or 17
          years, overwhelming predators by sheer abundance.
        </p>
      }
      humanInteraction={
        <p>
          Cicadas are harmless to people — they do not bite or sting — and their summer chorus
          is a familiar and even celebrated sound in many cultures; they feature in poetry,
          art, and folklore, and are eaten in some regions. The mass emergences of periodical
          cicadas are spectacular natural events. They are generally common, though some
          species depend on particular habitats. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "How do cicadas make their loud sound?",
          answer:
            "Male cicadas sing using special structures called tymbals — drum-like membranes on the abdomen that they buckle in and out very rapidly, producing clicks that merge into a loud buzz. Hollow air spaces inside the body amplify the sound, making cicadas among the loudest insects. Females are usually silent; the song attracts them to the males.",
        },
        {
          question: "How long do cicadas live underground?",
          answer:
            "A long time. Cicada nymphs live underground feeding on root sap for years — often several years in common 'annual' cicadas, and famously 13 or 17 years in the periodical cicadas of North America. The winged adult stage that we see and hear, by contrast, lasts only a few weeks.",
        },
        {
          question: "What are periodical cicadas?",
          answer:
            "Periodical cicadas are North American cicadas whose nymphs stay underground for exactly 13 or 17 years, then emerge all at once in enormous synchronised numbers. Emerging together overwhelms predators (which can't eat them all), giving the survivors a better chance to breed. These mass emergences are dramatic, much-anticipated events.",
        },
        {
          question: "Are cicadas harmful?",
          answer:
            "Not to people — cicadas don't bite or sting and are harmless to humans and pets. They feed on plant sap and are not generally serious pests, although large numbers laying eggs can damage the thin twigs of young trees. Mostly they are simply a loud, harmless, and iconic part of summer.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Cicadidae" },
        { label: "Order", value: "Hemiptera (true bugs)" },
        { label: "Diet", value: "Plant sap (xylem)" },
        { label: "Sound", value: "Males 'sing' with tymbal drums" },
        { label: "Nymphs", value: "Live underground for years" },
        { label: "Periodical species", value: "Emerge every 13 or 17 years" },
        { label: "To humans", value: "Harmless (no bite or sting)" },
        { label: "Range", value: "Worldwide (warm regions)" },
      ]}
      relatedLinks={[
        { label: "Cricket Profile", href: "/animals/cricket", description: "Another singing insect (sings differently)" },
        { label: "Grasshopper Profile", href: "/animals/grasshopper", description: "A related plant-feeding insect" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "The most diverse insect group" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Insect fauna in context" },
      ]}
    />
  );
}
