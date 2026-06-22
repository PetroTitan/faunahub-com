import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/manakin";
const TITLE = "Manakin — Profile, the Tiny Dancing Birds of the Tropics";
const DESC =
  "Explore manakins (family Pipridae): small, brightly marked Neotropical birds whose males perform astonishing courtship dances — including 'moonwalks' and mechanical wing sounds.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("manakin"),
});

export default function ManakinPage() {
  return (
    <AnimalProfileLayout
      commonName="Manakin"
      scientificName="e.g. Ceratopipra mentalis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Courtship display"]}
      image={getAnimalImage("manakin") ?? undefined}
      galleryImages={getAnimalGalleryImages("manakin")}
      sources={ANIMAL_SOURCES.manakin}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Manakins (family Pipridae) are small, plump, short-tailed birds of the forests of
            Central and South America, famous not for size but for spectacle. The males of many
            species are boldly patterned — like the red-capped manakin
            (<em>Ceratopipra mentalis</em>) shown here, a velvety black bird with a glowing red
            head — and they are renowned for performing some of the most elaborate and acrobatic
            courtship dances in the entire bird world.
          </p>
          <p>
            From rapid &ldquo;moonwalk&rdquo; slides along a branch to snapping, buzzing
            mechanical sounds made with specially modified wing feathers, male manakins put on
            astonishing displays to win the attention of watching females.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;manakin&rdquo; covers many species; details here use
            the red-capped manakin as a reference and describe the group broadly. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Manakins live in the forests of the Neotropics — from Mexico and Central America
          through much of tropical South America — mainly in the understorey of humid lowland
          and foothill rainforest, with some species in other wooded habitats. They tend to keep
          to the lower and middle levels of the forest, where the males clear and defend their
          display sites.
        </p>
      }
      diet={
        <p>
          Manakins are mainly frugivores, feeding largely on small fruits and berries that they
          often pluck in quick, fluttering sallies, and they also take insects, especially to
          feed their young. By eating fruit and dispersing the seeds, manakins help regenerate
          their forests — and their fruit-rich diet helps fuel the energetic males&apos; long
          hours of display.
        </p>
      }
      behavior={
        <p>
          Manakins are best known for their courtship. Males of most species display at
          &ldquo;leks&rdquo; — traditional gathering sites where several males perform — using a
          dazzling repertoire of dances, posturing, and sounds to attract females, which choose
          a mate and then nest and raise the young entirely on their own. The displays are
          remarkably varied and athletic: the red-capped manakin&apos;s rapid backward slide
          along a perch is often likened to a &ldquo;moonwalk,&rdquo; while other species snap,
          whirr, and buzz using uniquely modified wing feathers, and some even cooperate, with
          two males performing together. These intense displays have made manakins a favourite
          subject for studying sexual selection.
        </p>
      }
      humanInteraction={
        <p>
          Manakins are a delight to birdwatchers and a celebrated example of evolution by mate
          choice, and as fruit-eaters they help keep tropical forests healthy. Like many forest
          birds they depend on intact woodland, so deforestation is the main concern; many
          species remain common, while some restricted-range ones are of greater concern.
          Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are manakins famous?",
          answer:
            "For their courtship dances. Male manakins perform some of the most elaborate and acrobatic displays of any birds — sliding, snapping, buzzing, and posturing at communal sites to impress females. Combined with the bright, bold plumage of the males, these dances have made manakins icons of animal courtship and favourites for studying how mate choice drives evolution.",
        },
        {
          question: "Do manakins really 'moonwalk'?",
          answer:
            "Some do, in effect. The red-capped manakin is famous for a display in which the male rapidly slides backward along a branch with quick, shuffling steps, looking strikingly like a moonwalk. Other manakins have their own signature moves, but this smooth backward glide is one of the most celebrated dances in the bird world.",
        },
        {
          question: "How do manakins make those mechanical sounds?",
          answer:
            "With their wings, not just their voices. Several manakins have specially modified, stiffened or thickened wing feathers that they snap or vibrate together at high speed to produce snaps, buzzes, and even sustained tones during display. It's a striking example of feathers evolving into musical instruments for courtship.",
        },
        {
          question: "What do manakins eat?",
          answer:
            "Mostly small fruits and berries, plucked in quick fluttering flights, along with insects (especially for feeding chicks). This fruit-rich diet not only powers the males' demanding displays but also makes manakins useful seed-dispersers that help regenerate the tropical forests where they live.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Pipridae (Neotropical)" },
        { label: "Reference species", value: "Ceratopipra mentalis (red-capped manakin)" },
        { label: "Class", value: "Aves (perching birds)" },
        { label: "Known for", value: "Elaborate courtship dances" },
        { label: "Famous move", value: "Red-capped manakin's 'moonwalk'" },
        { label: "Sounds", value: "Mechanical snaps/buzzes from wing feathers" },
        { label: "Diet", value: "Mostly fruit (also insects)" },
        { label: "Range", value: "Central & South American forests" },
      ]}
      relatedLinks={[
        { label: "Cotinga Profile", href: "/animals/cotinga", description: "Related displaying Neotropical birds" },
        { label: "Cock-of-the-rock Profile", href: "/animals/cock-of-the-rock", description: "Another lekking forest bird" },
        { label: "Bowerbird Profile", href: "/animals/bowerbird", description: "Another master of courtship display" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
