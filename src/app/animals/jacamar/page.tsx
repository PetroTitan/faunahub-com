import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/jacamar";
const TITLE = "Jacamar — Profile, the Glittering Insect-Hawk of the Neotropics";
const DESC =
  "Explore jacamars (family Galbulidae): slender, iridescent Neotropical birds with long needle-like bills that catch butterflies and other flying insects in dazzling aerial sallies.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("jacamar"),
});

export default function JacamarPage() {
  return (
    <AnimalProfileLayout
      commonName="Jacamar"
      scientificName="family Galbulidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Insectivore"]}
      image={getAnimalImage("jacamar") ?? undefined}
      galleryImages={getAnimalGalleryImages("jacamar")}
      sources={ANIMAL_SOURCES.jacamar}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Jacamars (family Galbulidae) are slim, elegant birds of the American tropics, often
            likened to oversized, glittering hummingbirds or to bee-eaters because of their brilliant,
            metallic green-and-gold plumage and long, fine, dagger-like bills. The rufous-tailed
            jacamar (<em>Galbula ruficauda</em>), shown here, is a widespread and typical example,
            with shining green upperparts, a rufous belly, and a needle-thin bill.
          </p>
          <p>
            Jacamars are aerial insect-hunters, and they are especially famous for catching
            butterflies and other large flying insects in swift, acrobatic sallies from a perch — then
            beating the prey against a branch before swallowing it.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;jacamar&rdquo; covers a family of species; details here use
            the rufous-tailed jacamar as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Jacamars live in the Neotropics — from Mexico through Central America and across much of
          tropical South America — in forests, forest edges, woodland, and clearings, often near rivers
          and openings where flying insects are plentiful. They favour places with perches overlooking
          open space, from which they can launch their aerial hunts.
        </p>
      }
      diet={
        <p>
          Jacamars are insectivores that specialise in flying insects, particularly butterflies,
          dragonflies, wasps, bees, and beetles. A jacamar perches alertly, watches for a passing
          insect, then darts out to seize it in mid-air with its long bill before returning to its
          perch. It typically whacks larger prey against the branch to subdue it and, with butterflies
          and stinging insects, to remove wings or stingers before eating.
        </p>
      }
      behavior={
        <p>
          Jacamars are sit-and-sally hunters, spending much of their time perched upright and still,
          scanning for insects, then making rapid, agile flights to snatch prey on the wing — a style
          that, with their iridescent colours, invites comparison to giant hummingbirds. They are
          often seen singly or in pairs and can be quite vocal, with sharp calls and trills. Unusually
          for such glittering birds, jacamars nest in burrows: they dig tunnels into earth banks or
          into termite mounds, laying their eggs at the end of the tunnel. Many are tame and approachable,
          allowing close views as they hunt from a favourite perch.
        </p>
      }
      humanInteraction={
        <p>
          Jacamars are favourites of birdwatchers for their beauty and their dramatic insect-catching,
          and they are harmless and beneficial as predators of insects. Like most tropical-forest birds
          they depend on healthy forest and forest edge, so deforestation is the main concern, though
          many jacamars remain reasonably common and some tolerate edge and secondary habitats. Consult
          the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are jacamars compared to hummingbirds?",
          answer:
            "Because of their glittering, metallic green-and-gold plumage and long, fine bills, jacamars look like oversized, jewel-toned hummingbirds. The resemblance is only superficial, though — jacamars aren't related to hummingbirds and don't hover to feed on nectar. Instead they're aerial insect-hunters that sally out from a perch to catch flying prey.",
        },
        {
          question: "What do jacamars eat, and how do they hunt?",
          answer:
            "They specialise in flying insects — butterflies, dragonflies, wasps, bees, and beetles. A jacamar perches and watches, then darts out to snatch an insect in mid-air with its long, needle-like bill, returning to its perch to eat. It often beats larger prey against the branch and, with butterflies or stinging insects, removes the wings or stinger first.",
        },
        {
          question: "Where do jacamars nest?",
          answer:
            "In burrows — which is surprising for such ornate birds. Jacamars dig tunnels into earthen banks or into termite mounds and lay their eggs at the end of the burrow. This hidden, underground nest helps protect the eggs and young from many predators.",
        },
        {
          question: "Where do jacamars live?",
          answer:
            "In the American tropics, from Mexico through Central America and across much of tropical South America. They inhabit forests, forest edges, woodland, and clearings — often near rivers and open areas where flying insects are abundant — favouring perches that overlook open space for their aerial hunts.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Galbulidae (jacamars)" },
        { label: "Reference species", value: "Galbula ruficauda (rufous-tailed jacamar)" },
        { label: "Class", value: "Aves" },
        { label: "Look", value: "Slim; iridescent green-gold; needle bill" },
        { label: "Diet", value: "Flying insects (esp. butterflies)" },
        { label: "Hunting", value: "Sit-and-sally; catches prey in mid-air" },
        { label: "Nests", value: "In burrows (banks or termite mounds)" },
        { label: "Range", value: "Neotropics (Mexico to South America)" },
      ]}
      relatedLinks={[
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "A similar aerial insect-hunter" },
        { label: "Trogon Profile", href: "/animals/trogon", description: "Another jewel-toned tropical bird" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "Another burrow-nesting sally-hunter" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
