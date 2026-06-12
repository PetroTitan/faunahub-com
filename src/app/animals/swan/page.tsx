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

const title = "Swan — Profile, Habitat, Diet & Behavior";
const description =
  "Swans are large, long-necked waterfowl. A group-level overview using the mute swan (Cygnus olor) as a reference: wetland habitat, diet, and protective behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/swan",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("swan"),
});

export default function SwanPage() {
  return (
    <AnimalProfileLayout
      commonName="Swan"
      pageTitle={title}
      description={description}
      path="/animals/swan"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Waterfowl", "Wild"]}
      image={getAnimalImage("swan") ?? undefined}
      galleryImages={getAnimalGalleryImages("swan")}
      factsHeaderNote="“Swan” covers several species in the genus Cygnus. The reference shown is the mute swan (Cygnus olor). Other swans differ in colour, bill, voice, and range."
      overview={
        <>
          <p>
            Swans are the largest members of the waterfowl family Anatidae,
            which also includes ducks and geese. This page is a group-level
            overview; the mute swan (<em>Cygnus olor</em>) is used as a familiar
            reference. Swans are recognised by their very long necks, large size,
            and graceful presence on the water, and most species are at least
            partly white as adults.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Swans live on and around fresh and brackish water — lakes, rivers,
            ponds, and coastal wetlands — and graze on adjacent land. Different
            species occur across Europe, Asia, the Americas, and the Southern
            Hemisphere, and many northern swans migrate. The mute swan is widely
            associated with parks and rivers in Europe and has been introduced
            elsewhere. Habitat and range vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Swans are largely herbivorous, feeding on aquatic vegetation reached
            by up-ending in shallow water, as well as grasses and grain grazed on
            land. They use their long necks to reach submerged plants. Diet
            varies by species, season, and habitat; this page describes general
            feeding ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Swans are known for forming strong, often long-lasting pair bonds and
            for being highly protective of their nests and young (cygnets),
            sometimes displaying or driving off intruders. Outside the breeding
            season some species gather in flocks. They are strong fliers despite
            their size. Behaviour and voice vary — the &quot;mute&quot; swan is
            actually not silent, but is quieter than some other swans.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Swans are wild birds, not pets, and are protected by wildlife law in
            many countries. They are admired in parks and feature in culture and
            folklore. Most swan species are not currently of major conservation
            concern, but status varies and should be checked against current
            sources. Keep a respectful distance, especially during nesting, and
            contact a licensed wildlife rehabilitator or local authority for an
            injured wild bird.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The mute swan is a large white bird with an orange bill marked by
                a black base and a prominent black knob, and it often holds its
                neck in a graceful S-curve with wings slightly raised. Other
                swans differ: some have black-and-yellow bills, and the black swan
                of Australia is largely black. Bill colour and pattern, posture,
                and voice help distinguish the swan species.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Swans share the family Anatidae with the geese and ducks covered
          separately on FaunaHub. They are larger and longer-necked than geese.
          Young swans (cygnets) are grey-brown and can be mistaken for other
          waterfowl before they gain adult plumage.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
        { href: "/birdwatching/bird-nesting-season-basics", label: "Nesting season cautions" },
      ]}
      faqs={[
        {
          question: "Do swans mate for life?",
          answer:
            "Swans are well known for forming strong, often long-lasting pair bonds, and many pairs stay together across breeding seasons. \"For life\" is a simplification — bonds can change — but long-term pairing is characteristic of the group.",
        },
        {
          question: "Are swans aggressive?",
          answer:
            "Swans can be very protective of their nests and cygnets and may display or drive off perceived threats, especially during the breeding season. They are wild birds; keep a respectful distance and do not disturb nesting swans.",
        },
        {
          question: "Why is it called a \"mute\" swan if it makes sounds?",
          answer:
            "The mute swan is not truly silent — it hisses, grunts, and makes other sounds — but it is generally quieter and less vocal than some other swans, such as the whooper or trumpeter swans, which give loud bugling calls.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Swans (genus Cygnus)" },
        { label: "Reference species", value: "Mute swan (Cygnus olor)" },
        { label: "Family", value: "Anatidae (waterfowl)" },
        { label: "Diet", value: "Mainly herbivorous (aquatic plants, grasses)" },
        { label: "Behaviour", value: "Strong pair bonds; protective of young" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Goose Profile", href: "/animals/goose", description: "A related waterfowl" },
        { label: "Duck Profile", href: "/animals/duck" },
        { label: "Pelican Profile", href: "/animals/pelican" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.swan}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
