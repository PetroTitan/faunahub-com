import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/alligator-lizard";
const TITLE = "Alligator Lizard — Profile, the Armoured Lizard with a Fold in Its Side";
const DESC =
  "Explore alligator lizards (genus Elgaria and relatives): long-tailed North American lizards with armoured, alligator-like scales and a stretchy skin fold along each side.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("alligator-lizard"),
});

export default function AlligatorLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Alligator Lizard"
      scientificName="e.g. Elgaria multicarinata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "North America"]}
      image={getAnimalImage("alligator-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("alligator-lizard")}
      sources={ANIMAL_SOURCES["alligator-lizard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Alligator lizards (genus <em>Elgaria</em> and relatives) are slender, long-tailed
            lizards of North and Central America, named for their tough, armoured scales and
            somewhat broad heads, which give them a passing resemblance to a tiny alligator. The
            southern alligator lizard (<em>Elgaria multicarinata</em>), shown here, is a common
            example in the western United States. Their scales are stiffened by bony plates
            (osteoderms), making the body rather inflexible.
          </p>
          <p>
            To get around that stiff armour, alligator lizards have a distinctive feature: a fold of
            loose, soft, granular skin running along each side of the body, which expands to let them
            breathe, feed, and carry eggs despite the rigid scales.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;alligator lizard&rdquo; covers several species; details
            here use the southern alligator lizard as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Alligator lizards live in western North America and into Central America, in a range of
          habitats — woodland, grassland, chaparral, oak savanna, rocky slopes, and gardens — often
          in cooler, moister, or more shaded spots than many other lizards prefer. The southern
          alligator lizard is common in California and adjacent areas, including suburban yards.
        </p>
      }
      diet={
        <p>
          Alligator lizards are carnivores that eat insects, spiders, snails, and other small
          invertebrates, and larger individuals take small vertebrates such as tiny lizards, baby
          mice, and eggs, including occasionally raiding birds&apos; nests. They hunt on the ground
          and in low vegetation, using a strong bite to subdue prey.
        </p>
      }
      behavior={
        <p>
          The lateral skin fold is the key to the alligator lizard&apos;s body plan: because the
          armoured scales make the trunk stiff, the expandable groove of soft skin along each flank
          allows the body to swell when the lizard breathes deeply, eats a big meal, or fills with
          eggs. They are mostly ground-dwelling but climb well, and they can shed their long tail to
          escape a predator, regrowing a shorter replacement. When threatened, an alligator lizard may
          bite firmly, thrash, and smear the attacker with musk and droppings. They are active by day
          in mild weather and shelter under logs, rocks, and debris.
        </p>
      }
      humanInteraction={
        <p>
          Alligator lizards are harmless and beneficial garden residents, helping control insects and
          other small pests, and they are a familiar sight in parts of the western United States. They
          are common and adaptable, not generally of conservation concern, though like all wildlife
          they benefit from intact habitat and from cats being kept indoors. A large one can give a
          firm but harmless nip if handled. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called an alligator lizard?",
          answer:
            "Because of its tough, armoured scales and rather broad, plated head, which give it a superficial resemblance to a tiny alligator. It's a true lizard, not related to alligators — the name simply reflects its armoured, reptilian-looking body and long tail.",
        },
        {
          question: "What is the fold along an alligator lizard's side?",
          answer:
            "It's a groove of loose, soft, granular skin running down each flank. Because the lizard's scales are stiffened by bony plates and make the body rigid, this expandable fold lets the trunk swell when the animal breathes deeply, eats a large meal, or is carrying eggs. It's a neat solution to living inside inflexible armour.",
        },
        {
          question: "What do alligator lizards eat?",
          answer:
            "They're carnivores that eat insects, spiders, snails, and other small invertebrates, and larger ones also take small vertebrates like tiny lizards and baby mice, plus eggs — they'll even raid birds' nests on occasion. They hunt on the ground and in low plants, using a strong bite to handle their prey.",
        },
        {
          question: "Are alligator lizards dangerous?",
          answer:
            "No, they're harmless to people. A large alligator lizard can deliver a firm, surprisingly strong nip if grabbed, and may thrash or smear musk to escape, but it's not venomous and poses no real threat. In gardens they're useful, harmless allies that eat insects and other small pests.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Elgaria multicarinata (southern alligator lizard)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Name from", value: "Armoured scales & broad head" },
        { label: "Signature trait", value: "Soft expandable skin fold along each side" },
        { label: "Diet", value: "Carnivore (insects, snails, small vertebrates)" },
        { label: "Defence", value: "Sheds tail; bites & smears musk" },
        { label: "Range", value: "Western North & Central America" },
        { label: "To humans", value: "Harmless; useful in gardens" },
      ]}
      relatedLinks={[
        { label: "Glass Lizard Profile", href: "/animals/glass-lizard", description: "A legless relative with a similar skin fold" },
        { label: "Skink Profile", href: "/animals/skink", description: "Other smooth, armoured-scaled lizards" },
        { label: "Gila Monster relatives — Iguana Profile", href: "/animals/iguana", description: "Another North American lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
