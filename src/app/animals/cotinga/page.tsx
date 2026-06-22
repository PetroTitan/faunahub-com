import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cotinga";
const TITLE = "Cotinga — Profile, the Dazzling Birds of the Neotropical Canopy";
const DESC =
  "Explore cotingas (family Cotingidae): a diverse family of Neotropical birds famous for spectacular colours and bizarre displays — using the brilliant turquoise spangled cotinga.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("cotinga"),
});

export default function CotingaPage() {
  return (
    <AnimalProfileLayout
      commonName="Cotinga"
      scientificName="e.g. Cotinga cayana"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Rainforest"]}
      image={getAnimalImage("cotinga") ?? undefined}
      galleryImages={getAnimalGalleryImages("cotinga")}
      sources={ANIMAL_SOURCES.cotinga}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Cotingas (family Cotingidae) are a varied family of perching birds found in the
            forests of Central and South America, celebrated for including some of the most
            spectacularly coloured and strangely ornamented birds in the world. The spangled
            cotinga (<em>Cotinga cayana</em>), shown here, is a classic example: the male is a
            shimmering turquoise-blue with a deep wine-purple throat, glowing among the green
            of the Amazon canopy.
          </p>
          <p>
            The family is wonderfully diverse, ranging from these jewel-like blue species to
            brilliant orange cocks-of-the-rock, snow-white bellbirds with bizarre wattles, and
            more — many of them with extraordinary courtship displays and sounds.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;cotinga&rdquo; covers a large, varied family; details
            here use the spangled cotinga as a reference and describe the group broadly. Treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Cotingas live in the forests of the Neotropics — from Mexico and Central America
          through the Amazon basin and into South America — mostly in tropical rainforest, where
          many species favour the canopy and forest edge. Some are lowland birds, others live in
          montane cloud forest, and the family as a whole is closely tied to intact tropical
          woodland.
        </p>
      }
      diet={
        <p>
          Most cotingas are primarily frugivores, eating a great deal of fruit, and many also
          take insects, especially when feeding their young. By swallowing fruit and later
          dispersing the seeds, fruit-eating cotingas play an important role in regenerating
          tropical forests. Feeding habits vary across the family, but the strong link to fruit
          is a recurring theme.
        </p>
      }
      behavior={
        <p>
          Cotingas are best known for the dramatic courtship of their males. In many species
          the brilliantly coloured or ornamented males display at communal sites called
          &ldquo;leks,&rdquo; competing through visual show and sometimes astonishing sounds —
          the screaming-piha&apos;s ringing call and the bellbirds&apos; clanging, metallic
          notes are among the loudest in the bird world. Males of many cotingas are vividly
          coloured while females are duller and well camouflaged, reflecting the family&apos;s
          emphasis on male display. Outside the breeding season many cotingas are quiet,
          inconspicuous canopy birds.
        </p>
      }
      humanInteraction={
        <p>
          Cotingas are prized by birdwatchers for their beauty and remarkable displays, and they
          contribute to forest health as seed-dispersers. Because so many depend on intact
          tropical forest, deforestation is the chief threat, and some species — particularly
          restricted-range or montane ones — are of conservation concern, while others remain
          widespread. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What is a cotinga?",
          answer:
            "A cotinga is a member of the Neotropical bird family Cotingidae — a diverse group of perching birds from the forests of Central and South America. The family is famous for containing some of the most spectacularly coloured and bizarrely ornamented birds anywhere, from jewel-like blue cotingas to flame-orange cocks-of-the-rock and strange-wattled bellbirds.",
        },
        {
          question: "Why are male cotingas so colourful?",
          answer:
            "It's largely about courtship. In many cotingas the males display to females — often at communal 'lek' sites — and brilliant colours or elaborate ornaments help them stand out and compete for mates. Females, by contrast, are usually drab and well camouflaged for nesting. This strong difference between the sexes is a hallmark of the family.",
        },
        {
          question: "What do cotingas eat?",
          answer:
            "Most cotingas are mainly fruit-eaters, consuming lots of fruit and often taking insects too, especially to feed their chicks. As they eat fruit and later drop or pass the seeds elsewhere, fruit-eating cotingas help disperse seeds and regenerate the tropical forests they live in.",
        },
        {
          question: "Are cotingas loud?",
          answer:
            "Some are astonishingly loud. While many cotingas are quiet canopy birds, the family also includes record-breakers: bellbirds produce clanging, metallic calls and the screaming piha gives a ringing whistle — among the loudest sounds in the bird world, used by males to attract mates across the forest.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Cotingidae (Neotropical)" },
        { label: "Reference species", value: "Cotinga cayana (spangled cotinga)" },
        { label: "Class", value: "Aves (perching birds)" },
        { label: "Known for", value: "Spectacular colours & displays" },
        { label: "Diet", value: "Mostly fruit (also insects)" },
        { label: "Courtship", value: "Many display at leks; loud calls" },
        { label: "Range", value: "Central & South American forests" },
        { label: "Main threat", value: "Deforestation (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Cock-of-the-rock Profile", href: "/animals/cock-of-the-rock", description: "A brilliant orange cotinga relative" },
        { label: "Manakin Profile", href: "/animals/manakin", description: "Another displaying Neotropical bird" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "Another colourful rainforest bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
