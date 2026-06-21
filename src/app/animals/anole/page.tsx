import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/anole";
const TITLE = "Anole — Profile, Dewlap Displays, Colour Change & Diversity";
const DESC =
  "Explore anoles (genus Anolis): small, agile American lizards famous for the male's throat fan (dewlap) and a textbook example of rapid evolution — using the green anole as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("anole"),
});

export default function AnolePage() {
  return (
    <AnimalProfileLayout
      commonName="Anole"
      scientificName="Anolis carolinensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Americas"]}
      image={getAnimalImage("anole") ?? undefined}
      galleryImages={getAnimalGalleryImages("anole")}
      sources={ANIMAL_SOURCES.anole}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Anoles (genus <em>Anolis</em>) are small, slender, agile lizards of the
            Americas, with adhesive toe pads for climbing and, in males, a colourful
            extendable throat fan called a dewlap. The green anole
            (<em>Anolis carolinensis</em>), shown here, is the only anole native to the
            United States, a bright-green (sometimes brown) lizard common in the
            southeastern states. With hundreds of species, anoles are one of the most
            diverse groups of lizards in the world.
          </p>
          <p>
            Anoles are famous in biology as a textbook example of adaptive radiation:
            different species have repeatedly evolved similar &ldquo;types&rdquo; suited to
            particular perches — tree trunks, twigs, grass, the canopy — on different
            Caribbean islands.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;anole&rdquo; covers a huge number of species;
            details here use the green anole as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Anoles live across the Americas, especially in the Caribbean, Central and South
          America, and the southeastern United States, in forests, scrub, gardens, and urban
          areas. The green anole favours shrubs, trees, vines, fences, and walls in warm,
          humid habitats, where it climbs and basks. Anoles are well known for thriving in
          gardens and around buildings.
        </p>
      }
      diet={
        <p>
          Anoles are mainly insectivores, eating a variety of small insects and other
          invertebrates such as spiders, which they catch with quick dashes and grabs. Some
          also take a little nectar or soft fruit. Their appetite for small insects makes
          them welcome in many gardens.
        </p>
      }
      behavior={
        <p>
          The dewlap is central to anole life: males extend and flash this colourful throat
          fan, often combined with head-bobbing and &ldquo;push-up&rdquo; displays, to defend
          territory and attract mates. Green anoles can also change colour between green and
          brown, depending on temperature, mood, and other factors (they are sometimes
          misleadingly called &ldquo;chameleons,&rdquo; though they are not true chameleons).
          Anoles are agile climbers thanks to sticky toe pads, and many can shed the tail to
          escape a predator and later regrow it.
        </p>
      }
      humanInteraction={
        <p>
          Anoles are familiar, harmless garden lizards across much of the warm Americas and
          are popular subjects in biology for studying evolution and behaviour. The native
          green anole has declined in places where the introduced brown anole has spread,
          illustrating how introduced species can affect natives. Many anoles are common,
          though some island endemics are restricted. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What is the colourful fan on an anole's throat?",
          answer:
            "It's the dewlap, an extendable flap of skin under the throat, usually brightest in males. Anoles flash the dewlap — often with head-bobs and push-ups — to defend territory and attract mates. Its colour and the display pattern can be specific to each species, helping anoles recognise their own kind.",
        },
        {
          question: "Are green anoles chameleons?",
          answer:
            "No, despite the nickname 'American chameleon.' Green anoles can change between green and brown, which is why people compare them to chameleons, but they are not true chameleons (an Old World group). Their colour change is more limited and is driven by temperature, mood, and similar factors rather than the elaborate signalling of real chameleons.",
        },
        {
          question: "Why are anoles important in science?",
          answer:
            "Anoles are a classic example of adaptive radiation. On different Caribbean islands, anoles have repeatedly and independently evolved the same set of 'ecomorphs' — body types suited to specific perches like trunks, twigs, or grass. This makes them a textbook system for studying how evolution produces similar solutions in similar environments.",
        },
        {
          question: "What do anoles eat?",
          answer:
            "Mostly small insects and other invertebrates, such as spiders, caught with quick dashes. Some anoles also take a little nectar or soft fruit. Their insect-eating makes them helpful, harmless visitors in gardens across the warm parts of the Americas.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Anolis carolinensis (green anole)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Diversity", value: "Hundreds of species" },
        { label: "Signature trait", value: "Male's colourful dewlap" },
        { label: "Colour change", value: "Green ↔ brown (not a true chameleon)" },
        { label: "Diet", value: "Insectivore" },
        { label: "Science", value: "Classic adaptive-radiation example" },
        { label: "Range", value: "The Americas (esp. Caribbean)" },
      ]}
      relatedLinks={[
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "The true colour-changing lizards" },
        { label: "Gecko Profile", href: "/animals/gecko", description: "Another small climbing lizard" },
        { label: "Iguana Profile", href: "/animals/iguana", description: "A large American lizard relative" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
