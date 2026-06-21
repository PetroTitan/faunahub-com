import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chachalaca";
const TITLE = "Chachalaca — Profile, the Noisy Neotropical Bird & Diet";
const DESC =
  "Explore chachalacas (genus Ortalis): slender, long-tailed Neotropical birds of the cracid family, named for their loud, raucous chorus — adaptable, sociable, and often heard at dawn.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("chachalaca"),
});

export default function ChachalacaPage() {
  return (
    <AnimalProfileLayout
      commonName="Chachalaca"
      scientificName="Ortalis ruficauda"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Social"]}
      image={getAnimalImage("chachalaca") ?? undefined}
      galleryImages={getAnimalGalleryImages("chachalaca")}
      sources={ANIMAL_SOURCES.chachalaca}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Chachalacas (genus <em>Ortalis</em>) are slender, long-tailed, brownish birds of
            Central and South American scrub and woodland — the smallest members of the
            cracid family, which also includes the guans and curassows. The rufous-vented
            chachalaca (<em>Ortalis ruficauda</em>), shown here, is a typical example. Their
            name is famously onomatopoeic: it imitates the loud, rhythmic, raucous
            &ldquo;cha-cha-lac&rdquo; chorus that groups belt out, especially at dawn.
          </p>
          <p>
            Unlike many of their hunting-sensitive cracid relatives, chachalacas are
            adaptable, sociable, and often common, frequently living near people and even in
            gardens and towns.
          </p>
          <p>
            <strong>Note:</strong> there are several chachalaca species; details here use the
            rufous-vented chachalaca as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Chachalacas live in scrub, thickets, woodland edges, gallery forest, and
          second-growth across Mexico, Central America, and parts of South America, with one
          species (the plain chachalaca) just reaching southern Texas. They favour brushy,
          semi-open habitats and adapt readily to farmland edges, plantations, and gardens.
        </p>
      }
      diet={
        <p>
          Chachalacas are mainly herbivores, eating fruit, berries, leaves, buds, flowers,
          and seeds, with some insects. They forage both in trees and on the ground, and
          their fondness for fruit makes them useful seed dispersers. Their willingness to
          eat a wide range of plant foods helps them thrive in disturbed and human-modified
          areas.
        </p>
      }
      behavior={
        <p>
          Chachalacas are social birds, usually seen in small, noisy flocks that clamber
          through trees and bushes. They are best known for their voices: groups give a
          loud, rolling, repetitive chorus — the &ldquo;cha-cha-lac&rdquo; that names them —
          most often at dawn and dusk, with birds calling back and forth. Though they can fly
          and glide between trees, they often prefer to run and clamber through cover, and
          they roost communally in trees.
        </p>
      }
      humanInteraction={
        <p>
          Chachalacas are among the most adaptable cracids and often live close to people,
          sometimes visiting gardens and feeders; many are common and not of conservation
          concern, though they are hunted in places and a few species are more localised.
          Their loud dawn choruses are a characteristic sound of the Neotropics. Consult
          authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called chachalacas?",
          answer:
            "The name imitates their call. Chachalacas produce a loud, rhythmic, repeated chorus that sounds like 'cha-cha-lac,' especially at dawn, with groups calling raucously back and forth. This distinctive, onomatopoeic sound is the origin of the name.",
        },
        {
          question: "What do chachalacas eat?",
          answer:
            "Chachalacas are mostly plant-eaters, feeding on fruit, berries, leaves, buds, flowers, and seeds, plus some insects. They forage in trees and on the ground, and as fruit-eaters they help disperse seeds. Their broad plant diet helps them do well even in disturbed, human-altered areas.",
        },
        {
          question: "Are chachalacas related to curassows and guans?",
          answer:
            "Yes. Chachalacas are the smallest members of the cracid family (Cracidae), which also includes the larger guans and curassows. They share the family's fowl-like, fruit-eating, forest-and-scrub lifestyle, but chachalacas are slimmer, more adaptable, and often more tolerant of people.",
        },
        {
          question: "Are chachalacas common?",
          answer:
            "Many are. Unlike some of their hunting-sensitive cracid relatives, chachalacas are adaptable and sociable, often thriving near farmland, plantations, and gardens, and several species are common. A few are more localised or hunted, so status varies by species and should be checked against authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Ortalis ruficauda (rufous-vented chachalaca)" },
        { label: "Class", value: "Aves (family Cracidae)" },
        { label: "Relatives", value: "Guans & curassows (smallest cracids)" },
        { label: "Diet", value: "Mainly fruit & plant matter; some insects" },
        { label: "Signature trait", value: "Loud 'cha-cha-lac' dawn chorus" },
        { label: "Behaviour", value: "Social, noisy, adaptable" },
        { label: "Range", value: "Mexico to South America (+ S. Texas)" },
        { label: "Status", value: "Many common (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Guan Profile", href: "/animals/guan", description: "A larger cracid relative" },
        { label: "Curassow Profile", href: "/animals/curassow", description: "The largest cracids" },
        { label: "Trumpeter Profile", href: "/animals/trumpeter", description: "Another social Neotropical bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
