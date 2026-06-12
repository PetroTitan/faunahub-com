import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Robin — Profile, Habitat, Diet & Behavior";
const description =
  "The robin: an educational profile using the European robin (Erithacus rubecula) as a reference, with a clear note that the American robin is an unrelated species.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/robin",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("robin"),
});

export default function RobinPage() {
  return (
    <AnimalProfileLayout
      commonName="Robin"
      pageTitle={title}
      description={description}
      path="/animals/robin"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Songbird", "Wild"]}
      image={getAnimalImage("robin") ?? undefined}
      galleryImages={getAnimalGalleryImages("robin")}
      factsHeaderNote="“Robin” refers to two unrelated birds: the European robin (Erithacus rubecula), shown here, and the larger American robin (Turdus migratorius), a thrush. This page uses the European robin as a reference."
      overview={
        <>
          <p>
            The name &quot;robin&quot; is used for two quite different birds.
            This page uses the European robin (<em>Erithacus rubecula</em>) as a
            reference — a small songbird with a distinctive orange-red face and
            breast, common across Europe and a familiar garden visitor. The
            American robin (<em>Turdus migratorius</em>) is a larger,
            unrelated thrush; the two share only a name, so descriptions of one
            do not apply to the other.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            The European robin lives in woodland, hedgerows, parks, and gardens
            across much of Europe, parts of North Africa, and western Asia. It
            adapts readily to human-altered landscapes and is a frequent visitor
            to gardens. Ranges and habitats differ between the European robin
            and the American robin, and among other birds called &quot;robin&quot;
            around the world.
          </p>
        </>
      }
      diet={
        <>
          <p>
            European robins are largely insectivorous, feeding on invertebrates
            such as worms, beetles, and caterpillars, and supplementing this with
            seeds and fruit, especially in colder months. They often forage on
            the ground and are known for following gardeners to take disturbed
            invertebrates. Diet varies by season and species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            European robins are well known for their melodic song, which both
            males and females may use, and for being strongly territorial,
            sometimes confronting rivals vigorously. They are often confiding
            around people in gardens. Many northern robins migrate, while others
            are resident. Behaviour and migration vary by population and species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            The European robin is a much-loved garden bird and a cultural symbol
            in parts of Europe. Like other wild birds it is protected by wildlife
            law in many countries, and nests, eggs, and chicks should never be
            disturbed. It is a wild bird, not a pet. If you find an injured wild
            bird, keep your distance and contact a licensed wildlife
            rehabilitator or local authority rather than handling it. Conservation
            status varies by species and should be checked against current
            sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The European robin is a small, rounded songbird with a brown
                back, pale belly, and a characteristic orange-red face and
                breast bordered with grey. The sexes look alike, and juveniles
                are mottled brown without the red, which they develop later. The
                American robin, by contrast, is larger, with a dark head, grey-
                brown back, and a brick-red breast — a useful reminder that the
                two &quot;robins&quot; are different birds.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The European robin is a small member of the Old World flycatcher
          family, related to chats and nightingales. The sparrow, also a small
          garden bird covered on FaunaHub, is from a different family. The
          American robin is a thrush, more closely related to blackbirds than to
          the European robin.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
        { href: "/birdwatching/backyard-bird-identification", label: "Backyard bird identification" },
      ]}
      faqs={[
        {
          question: "Are the European robin and American robin the same bird?",
          answer:
            "No. They share the name \"robin\" because both have reddish breasts, but they are unrelated. The European robin is a small Old World flycatcher (Erithacus rubecula); the American robin is a larger thrush (Turdus migratorius). This page uses the European robin as its reference.",
        },
        {
          question: "Why do robins seem so tame in gardens?",
          answer:
            "European robins often forage close to people, a behaviour thought to stem from following large animals (and gardeners) that disturb the soil and expose invertebrates. They remain wild birds, however, and should not be handled or treated as pets.",
        },
        {
          question: "Do robins sing in winter?",
          answer:
            "European robins are notable for holding territories and singing through much of the year, including winter, when many other birds are quiet. Both males and females may sing. Song patterns vary by season and individual.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "European robin (Erithacus rubecula)" },
        { label: "Class", value: "Aves" },
        { label: "Type", value: "Small songbird" },
        { label: "Diet", value: "Mainly insectivore; also seeds and fruit" },
        { label: "Habitat", value: "Woodland, hedgerows, parks, gardens" },
        { label: "Note", value: "American robin is an unrelated thrush" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Sparrow Profile", href: "/animals/sparrow", description: "Another familiar garden bird" },
        { label: "Crow Profile", href: "/animals/crow" },
        { label: "Birdwatching Hub", href: "/birdwatching", description: "Watch garden birds responsibly" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.robin}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
