import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sunbird";
const TITLE = "Sunbird — Profile, Nectar Diet & Iridescent Plumage";
const DESC =
  "Explore sunbirds (family Nectariniidae): small, dazzlingly iridescent nectar-feeding birds of Africa, Asia, and Australasia — the Old World counterparts of hummingbirds.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("sunbird"),
});

export default function SunbirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Sunbird"
      scientificName="family Nectariniidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Nectarivore", "Iridescent"]}
      image={getAnimalImage("sunbird") ?? undefined}
      galleryImages={getAnimalGalleryImages("sunbird")}
      sources={ANIMAL_SOURCES.sunbird}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Sunbirds (family Nectariniidae) are small, slender, nectar-feeding birds of
            the Old World, famous for the brilliant metallic, iridescent plumage of the
            males. With fine, often down-curved bills and brush-tipped tongues, they are
            the Old World ecological counterparts of the Americas&apos; hummingbirds — a
            striking example of similar lifestyles producing similar birds on different
            continents. The southern double-collared sunbird
            (<em>Cinnyris chalybeus</em>), shown here, is a vivid African example.
          </p>
          <p>
            There are many sunbird species across Africa, Asia, and into Australasia, most
            of them closely tied to flowering plants.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;sunbird&rdquo; spans a large, diverse family;
            details here use the southern double-collared sunbird as a reference. Treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sunbirds occupy a wide range of habitats with flowering plants — forests,
          woodlands, scrub, gardens, and mountainsides — across sub-Saharan Africa,
          southern Asia, and parts of Australasia. Many are common in gardens and
          cultivated areas, wherever nectar-rich flowers are available through the year.
        </p>
      }
      diet={
        <p>
          Sunbirds feed mainly on nectar, which they sip from flowers using a long,
          curved bill and a specialised tongue. Unlike hummingbirds, most sunbirds usually
          perch beside a flower to feed rather than hovering, though they can hover briefly.
          They also eat insects and spiders, especially when feeding their young, which
          need protein to grow.
        </p>
      }
      behavior={
        <p>
          As they feed, sunbirds transfer pollen between flowers, making them important
          pollinators of many plants. Males are often boldly territorial around good nectar
          sources and use their glittering plumage in display. Sunbirds build neat, often
          purse-shaped hanging nests. Their iridescent colours, like those of many
          dazzling birds, come from feather microstructure rather than pigment, so they
          flash and shift with the light.
        </p>
      }
      humanInteraction={
        <p>
          Sunbirds are popular garden visitors across much of Africa and Asia, welcomed for
          their colour and their role in pollinating flowers. Many species are common and
          adapt well to gardens and farmland, though some specialised or restricted species
          are of greater conservation concern. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are sunbirds the same as hummingbirds?",
          answer:
            "No, though they are often compared. Sunbirds (Old World) and hummingbirds (Americas) are not closely related; they independently evolved similar nectar-feeding lifestyles, slim curved bills, and brilliant plumage. A key difference is that sunbirds usually perch to feed, while hummingbirds typically hover.",
        },
        {
          question: "What do sunbirds eat?",
          answer:
            "Mainly nectar, sipped from flowers with a long bill and brush-tipped tongue. They also eat insects and spiders — an important protein source, especially when raising chicks. Their nectar feeding makes them valuable pollinators for many plants.",
        },
        {
          question: "Why are male sunbirds so colourful?",
          answer:
            "The males' shimmering, metallic colours come from the microscopic structure of their feathers rather than pigment, which is why they flash and change with the light. These iridescent colours are used in territorial display and courtship; females are usually much plainer.",
        },
        {
          question: "Do sunbirds help plants?",
          answer:
            "Yes. As sunbirds move between flowers to drink nectar, they pick up and transfer pollen, pollinating many Old World plants. Some plants are specially adapted to sunbird pollination, making these birds an important part of their ecosystems.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Nectariniidae" },
        { label: "Reference species", value: "Cinnyris chalybeus (S. double-collared sunbird)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly nectar; also insects/spiders" },
        { label: "Feeding style", value: "Usually perches (rarely hovers)" },
        { label: "Role", value: "Important plant pollinators" },
        { label: "Range", value: "Africa, Asia & Australasia" },
        { label: "Parallel to", value: "Hummingbirds (unrelated)" },
      ]}
      relatedLinks={[
        { label: "Hummingbird Profile", href: "/animals/hummingbird", description: "Its New World ecological counterpart" },
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "Another vivid Old World bird" },
        { label: "Hoopoe Profile", href: "/animals/hoopoe", description: "A distinctive Old World bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African & Asian fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
