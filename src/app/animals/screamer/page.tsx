import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/screamer";
const TITLE = "Screamer — Profile, Loud Wetland Birds & Behavior";
const DESC =
  "Explore screamers (family Anhimidae): large South American wetland birds related to waterfowl, named for their loud calls, with wing spurs and air-filled bones under the skin.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("screamer"),
});

export default function ScreamerPage() {
  return (
    <AnimalProfileLayout
      commonName="Screamer"
      scientificName="Chauna torquata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wetland", "South America"]}
      image={getAnimalImage("screamer") ?? undefined}
      galleryImages={getAnimalGalleryImages("screamer")}
      sources={ANIMAL_SOURCES.screamer}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Screamers (family Anhimidae) are large, bulky wetland birds of South America,
            named for their loud, far-carrying calls. The southern screamer
            (<em>Chauna torquata</em>), shown here, is a grey, goose-sized bird with a small
            chicken-like head and a band around the neck. Despite looking nothing like a
            duck, screamers are actually relatives of waterfowl (ducks, geese, and swans) —
            one of the more surprising relationships in the bird family tree.
          </p>
          <p>
            They have some unusual anatomy too, including sharp spurs on the wings and a
            layer of tiny air sacs just beneath the skin that gives a crackling feel.
          </p>
          <p>
            <strong>Note:</strong> there are three screamer species; details here use the
            southern screamer as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Screamers live in marshes, wet grasslands, lagoons, and the edges of lakes and
          rivers across much of South America. The southern screamer is common in the
          wetlands of the south-central part of the continent, including the Pantanal and the
          plains of Argentina, Paraguay, and neighbouring areas, where it wades and grazes in
          shallow water and damp meadows.
        </p>
      }
      diet={
        <p>
          Screamers are mainly herbivores, grazing on the leaves, stems, shoots, roots, and
          seeds of water plants and grasses, with some small invertebrates taken
          incidentally. They feed by walking through marshy vegetation and shallow water,
          and despite their bulk they swim well and can also perch in trees.
        </p>
      }
      behavior={
        <p>
          Screamers are best known for their voices — loud, trumpeting or honking calls that
          carry over long distances and are often given in duet by a pair, advertising
          territory across the wetland. Each wing carries two sharp bony spurs used in
          disputes and defence. Beneath the skin lies a network of tiny air sacs that makes a
          faint crackling sound when pressed, an unusual feature among birds. Screamers are
          often seen in pairs or loose groups and can soar surprisingly well on broad wings.
        </p>
      }
      humanInteraction={
        <p>
          Screamers are conspicuous, characterful wetland birds and a familiar sight in
          South American marshes; the southern screamer is common and adapts to grazed and
          farmed wetlands, and is sometimes even kept around farms as a noisy &ldquo;guard&rdquo;
          bird. They depend on healthy wetlands, so drainage and habitat loss are the main
          concerns; most species remain reasonably widespread. Consult authoritative sources
          for current status.
        </p>
      }
      faqs={[
        {
          question: "Are screamers related to ducks?",
          answer:
            "Yes, surprisingly. Despite looking more like a strange goose-sized landfowl, screamers are part of the waterfowl group (Anseriformes), making them relatives of ducks, geese, and swans. They are an unusual, early-branching member of that group, with several features quite unlike typical waterfowl.",
        },
        {
          question: "Why are they called screamers?",
          answer:
            "For their voices. Screamers produce loud, trumpeting or honking calls that carry far across their wetland homes, often delivered as a duet by a pair. These powerful calls, used to claim territory and stay in contact, are the source of the name.",
        },
        {
          question: "What are the spurs on a screamer's wings?",
          answer:
            "Each wing has two sharp, bony spurs projecting from the bend of the wing. Screamers use these in fights with rivals and in defence. The spurs are a striking feature and can be effective weapons, though they are mostly used in displays and disputes.",
        },
        {
          question: "What do screamers eat?",
          answer:
            "Screamers are mainly plant-eaters, grazing on leaves, stems, shoots, roots, and seeds of water plants and grasses, with the odd small invertebrate. They forage by walking through marshes and shallow water, and they swim and even perch in trees.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Chauna torquata (southern screamer)" },
        { label: "Class", value: "Aves (family Anhimidae)" },
        { label: "Relatives", value: "Waterfowl (ducks, geese, swans)" },
        { label: "Diet", value: "Mainly herbivore (water plants)" },
        { label: "Signature traits", value: "Loud calls; wing spurs; air-sac skin" },
        { label: "Habitat", value: "South American marshes & wet grassland" },
        { label: "Range", value: "Much of South America" },
        { label: "Status", value: "Common (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Goose Profile", href: "/animals/goose", description: "A true waterfowl relative" },
        { label: "Duck Profile", href: "/animals/duck", description: "Another waterfowl relative" },
        { label: "Jacana Profile", href: "/animals/jacana", description: "Another tropical wetland bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
