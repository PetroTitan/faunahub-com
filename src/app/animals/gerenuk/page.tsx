import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/gerenuk";
const TITLE = "Gerenuk — Profile, the Long-Necked 'Giraffe Gazelle' That Stands to Feed";
const DESC =
  "Explore the gerenuk (Litocranius walleri): an East African gazelle with a giraffe-like neck that rears up on its hind legs to browse high leaves — and can live without drinking water.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("gerenuk"),
});

export default function GerenukPage() {
  return (
    <AnimalProfileLayout
      commonName="Gerenuk"
      scientificName="Litocranius walleri"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Antelope", "Africa"]}
      image={getAnimalImage("gerenuk") ?? undefined}
      galleryImages={getAnimalGalleryImages("gerenuk")}
      sources={ANIMAL_SOURCES.gerenuk}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The gerenuk (<em>Litocranius walleri</em>) is a slender, elegant gazelle of the dry bush of the
            Horn of Africa and East Africa, instantly recognised by its extraordinarily long, thin neck and
            long legs — features that have earned it the nickname &ldquo;giraffe gazelle.&rdquo; Its name
            comes from a Somali word meaning &ldquo;giraffe-necked.&rdquo; With a small head, large eyes and
            ears, and a reddish-fawn coat, the gerenuk looks delicate, but it is a tough survivor of arid
            country. Only the males carry horns.
          </p>
          <p>
            The gerenuk&apos;s signature behaviour is to rear up and stand on its hind legs, using its long
            neck to browse leaves and shoots high in thorny bushes that other gazelles cannot reach. Even more
            remarkably, it gets nearly all its water from the plants it eats and can live without ever
            drinking.
          </p>
          <p>
            <strong>Note:</strong> details here cover the gerenuk as a species; treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Gerenuks live in the dry thornbush, scrub, and semi-desert of East Africa and the Horn of Africa —
          including Somalia, Ethiopia, Kenya, and Tanzania — favouring arid and semi-arid country with plenty
          of bushes and small trees to browse. They avoid dense forest and very open grassland, sticking to
          the bushland where their high-browsing lifestyle pays off.
        </p>
      }
      diet={
        <p>
          The gerenuk is a browser, feeding on the leaves, shoots, buds, flowers, and fruit of bushes and
          small trees (including many acacias). By standing on its hind legs and stretching its long neck, it
          reaches foliage above the height available to most other browsers, exploiting a feeding niche of its
          own. Crucially, it obtains the moisture it needs from this vegetation, so it can survive in dry
          country without drinking free water.
        </p>
      }
      behavior={
        <p>
          The gerenuk&apos;s hallmark is bipedal browsing: it rises onto its hind legs, propping itself
          against or among branches and using its long neck and narrow muzzle to delicately pluck leaves high
          in thorny bushes, a posture it can hold for some time. This lets it feed above competitors and
          thrive where water and ground forage are scarce. Gerenuks are usually found alone or in small
          groups — females with young, or small bachelor or mixed parties — and males defend territories.
          Alert and graceful, they rely on keen senses and quick flight to avoid predators in the open
          bushland.
        </p>
      }
      humanInteraction={
        <p>
          The gerenuk is considered Near Threatened, affected by habitat loss and degradation (from
          expanding settlement, livestock, and agriculture) and by hunting in parts of its range, though it
          remains reasonably widespread in suitable bushland. Its water independence and high-browsing niche
          make it a remarkable example of adaptation to arid Africa. As a wild antelope, it is not suited to
          life as a pet. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the gerenuk stand on its hind legs?",
          answer:
            "To reach food other browsers can't. By rearing up on its hind legs and extending its already long neck, the gerenuk can pluck leaves, shoots, and buds high in thorny bushes and small trees, feeding above the height available to most other gazelles. This unique high-browsing posture lets it exploit a feeding niche all its own.",
        },
        {
          question: "Can a gerenuk really live without drinking water?",
          answer:
            "Essentially yes. The gerenuk gets nearly all the moisture it needs from the leaves, shoots, and other vegetation it eats, so it can survive in dry bushland without drinking free water. This water independence is a key adaptation that lets it thrive in arid parts of East Africa and the Horn of Africa.",
        },
        {
          question: "Why is it called the 'giraffe gazelle'?",
          answer:
            "Because of its build. The gerenuk has an unusually long, slender neck and long legs that give it a giraffe-like silhouette, and its name comes from a Somali word meaning 'giraffe-necked.' Combined with its high, hind-leg browsing, the resemblance to a tiny giraffe is striking — hence the nickname.",
        },
        {
          question: "Do female gerenuks have horns?",
          answer:
            "No — only the males carry horns, which are relatively short, stout, and curved. Females are hornless. This difference between the sexes is common among gazelles and their relatives, where the males' horns are used in territorial and mating contests.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Litocranius walleri" },
        { label: "Class", value: "Mammalia (gazelle / antelope)" },
        { label: "Nickname", value: "'Giraffe gazelle' (Somali: giraffe-necked)" },
        { label: "Signature trait", value: "Long neck; stands on hind legs to browse" },
        { label: "Water", value: "Gets moisture from plants; needn't drink" },
        { label: "Horns", value: "Males only" },
        { label: "Range", value: "East Africa & Horn of Africa (dry bush)" },
        { label: "Status", value: "Near Threatened (verify)" },
      ]}
      relatedLinks={[
        { label: "Fennec Fox Profile", href: "/animals/fennec-fox", description: "Another water-thrifty dryland species" },
        { label: "Deer Profile", href: "/animals/deer", description: "Other hoofed browsers" },
        { label: "Giraffe relatives — Saiga Profile", href: "/animals/saiga", description: "Another distinctive antelope" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African dryland fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
