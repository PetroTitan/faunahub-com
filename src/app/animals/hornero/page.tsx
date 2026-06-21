import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hornero";
const TITLE = "Hornero — Profile, the Bird That Builds an 'Oven' Nest";
const DESC =
  "Explore horneros (genus Furnarius): South American 'ovenbirds' famous for building sturdy domed mud nests shaped like old clay ovens — using the rufous hornero, Argentina's national bird.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("hornero"),
});

export default function HorneroPage() {
  return (
    <AnimalProfileLayout
      commonName="Hornero"
      scientificName="Furnarius rufus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "South America", "Nest-builder"]}
      image={getAnimalImage("hornero") ?? undefined}
      galleryImages={getAnimalGalleryImages("hornero")}
      sources={ANIMAL_SOURCES.hornero}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The hornero (genus <em>Furnarius</em>) is a plain-looking but much-loved bird of
            South America, famous for its remarkable nest. The rufous hornero
            (<em>Furnarius rufus</em>), shown here, is a sparrow- to thrush-sized,
            reddish-brown bird best known for building a sturdy, domed nest of mud and straw
            that looks just like an old wood-fired clay oven — which is exactly what
            &ldquo;hornero&rdquo; means (from the Spanish for &ldquo;baker&rdquo; or
            &ldquo;oven-maker&rdquo;).
          </p>
          <p>
            Common in parks, gardens, and farmland, often near people, the rufous hornero is
            the national bird of Argentina and a familiar sight across much of southern South
            America.
          </p>
          <p>
            <strong>Note:</strong> there are several hornero species; details here use the
            rufous hornero as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Rufous horneros live across much of central and southern South America —
          including Argentina, Uruguay, Paraguay, Bolivia, and Brazil — in open and
          semi-open country: grassland, farmland, savanna, parks, and gardens. They are
          highly adaptable to human-modified landscapes and often nest on fence posts,
          poles, and buildings.
        </p>
      }
      diet={
        <p>
          Horneros are mainly insectivores, foraging on the ground for insects, larvae,
          spiders, and other small invertebrates, with some seeds as well. They walk and run
          over open ground and lawns, probing and picking prey from the soil and short
          vegetation — a familiar sight in their range.
        </p>
      }
      behavior={
        <p>
          The hornero&apos;s signature is its nest. A pair builds a thick-walled, domed
          structure of mud (mixed with straw and dung) that hardens in the sun into a strong
          shell, with a curved entrance leading to an inner chamber — protecting eggs and
          chicks from weather and many predators. Building can take weeks and a great many
          beak-loads of mud. Horneros are usually seen in pairs, often pairing for the long
          term, and they duet with loud, ringing calls. Old nests are frequently reused by
          other birds.
        </p>
      }
      humanInteraction={
        <p>
          Horneros live closely and amicably alongside people, nesting on posts, walls, and
          buildings, and are widely admired — the rufous hornero is the national bird of
          Argentina and Uruguay and appears in folklore and song. They are common and not of
          conservation concern, and their old mud nests benefit many other animals. Consult
          authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a hornero?",
          answer:
            "The name comes from the Spanish for 'baker' or 'oven-maker,' referring to the bird's nest. A hornero builds a domed mud nest that closely resembles a traditional wood-fired clay oven (horno), complete with a curved entrance — so the bird is named for its remarkable 'oven' architecture.",
        },
        {
          question: "How does a hornero build its nest?",
          answer:
            "A pair gathers many beak-loads of mud, mixing in straw and dung, and shapes a thick-walled domed nest that bakes hard in the sun. Inside, a curved passage leads to a sheltered chamber. The build can take weeks, and the finished nest is tough enough to protect the eggs and chicks from weather and predators.",
        },
        {
          question: "What do horneros eat?",
          answer:
            "Horneros are mainly insectivores, foraging on the ground for insects, larvae, spiders, and other small invertebrates, plus some seeds. They walk and run across lawns, fields, and open ground, picking and probing for prey.",
        },
        {
          question: "Where do horneros live?",
          answer:
            "Across central and southern South America, in open and semi-open habitats including farmland, grassland, parks, and gardens. They adapt readily to areas modified by people and often nest on fence posts, poles, and buildings, making them a familiar bird in their range.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Furnarius rufus (rufous hornero)" },
        { label: "Class", value: "Aves (an ovenbird, Furnariidae)" },
        { label: "Diet", value: "Mainly insects & invertebrates" },
        { label: "Signature trait", value: "Domed mud 'oven' nest" },
        { label: "Culture", value: "National bird of Argentina & Uruguay" },
        { label: "Habitat", value: "Open country, farmland, gardens" },
        { label: "Range", value: "Central & southern South America" },
        { label: "Status", value: "Common (verify)" },
      ]}
      relatedLinks={[
        { label: "Weaver Profile", href: "/animals/weaver", description: "Another master nest-builder (Old World)" },
        { label: "Hamerkop Profile", href: "/animals/hamerkop", description: "Another bird famous for its nest" },
        { label: "Sparrow Profile", href: "/animals/sparrow", description: "A familiar small bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
