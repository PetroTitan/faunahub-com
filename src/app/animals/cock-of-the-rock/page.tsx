import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cock-of-the-rock";
const TITLE = "Cock-of-the-Rock — Profile, Brilliant Display & Behavior";
const DESC =
  "Explore the cock-of-the-rock (genus Rupicola): vivid orange or red South American birds whose males gather at leks to display — using the Andean cock-of-the-rock as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("cock-of-the-rock"),
});

export default function CockOfTheRockPage() {
  return (
    <AnimalProfileLayout
      commonName="Cock-of-the-Rock"
      scientificName="Rupicola peruvianus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Lek display"]}
      image={getAnimalImage("cock-of-the-rock") ?? undefined}
      galleryImages={getAnimalGalleryImages("cock-of-the-rock")}
      sources={ANIMAL_SOURCES["cock-of-the-rock"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The cock-of-the-rock (genus <em>Rupicola</em>) is one of South America&apos;s
            most spectacular birds. The males are a blazing orange or red, topped with a
            prominent half-moon crest that can almost hide the bill. The Andean
            cock-of-the-rock (<em>Rupicola peruvianus</em>), shown here, is the national
            bird of Peru. As in many showy birds, the sexes differ sharply: females are a
            drab brown that keeps them camouflaged at the nest.
          </p>
          <p>
            These birds are famous for their courtship: males gather at communal display
            grounds called leks, where they posture, bow, and call to compete for the
            attention of visiting females.
          </p>
          <p>
            <strong>Note:</strong> there are two cock-of-the-rock species; details here use
            the Andean cock-of-the-rock as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Cocks-of-the-rock live in humid forests of South America — the Andean
          cock-of-the-rock in cloud forests along the Andes, and the Guianan species in
          lowland rainforest of the Guiana Shield. They favour areas with rocky outcrops,
          ravines, and streams, where females build mud nests on rock faces (the source of
          the name).
        </p>
      }
      diet={
        <p>
          Cocks-of-the-rock are mainly frugivores, eating a wide variety of fruits, and
          they help disperse the seeds of many rainforest plants. They also take some
          insects and small animals, especially when feeding young. By moving fruit and
          seeds around the forest, they play a useful ecological role.
        </p>
      }
      behavior={
        <p>
          The defining behaviour is the lek: males gather at traditional display sites and
          perform energetic, competitive displays — bobbing, jumping, snapping the bill, and
          giving loud, squealing and grunting calls — to impress females. A female visits,
          chooses a mate, then leaves to nest and raise the young entirely on her own,
          building a nest of mud and saliva plastered to a rock wall or cave. The males&apos;
          brilliant colour and showy behaviour are driven by this intense competition for
          mates.
        </p>
      }
      humanInteraction={
        <p>
          The Andean cock-of-the-rock is a celebrated symbol of the cloud forest, the
          national bird of Peru, and a major draw for birdwatchers who visit lek sites to
          witness the displays. The birds remain reasonably widespread but depend on healthy
          forest, so deforestation is the main concern. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a cock-of-the-rock?",
          answer:
            "The name refers to the female's nesting habit: she builds a nest of mud and saliva stuck to vertical rock faces, in caves, ravines, or rocky outcrops. Combined with the rooster-like crest of the males, this gives the bird its name.",
        },
        {
          question: "What is a lek, and how do these birds use it?",
          answer:
            "A lek is a communal display ground where males gather to compete for females. Male cocks-of-the-rock perform vivid, noisy displays — bobbing, jumping, and calling — at traditional lek sites. Females visit, compare the males, and choose a mate, then nest and raise the chicks alone.",
        },
        {
          question: "Why are the males so brightly coloured?",
          answer:
            "Their brilliant orange or red plumage and showy crest are products of strong sexual selection. Because females choose mates at leks based on appearance and performance, males have evolved to be as eye-catching as possible. Females, by contrast, are dull brown for camouflage while nesting.",
        },
        {
          question: "What do cocks-of-the-rock eat?",
          answer:
            "They are mainly fruit-eaters, consuming many kinds of rainforest fruit and helping disperse the seeds. They also take some insects and small animals, particularly when feeding nestlings, making them both colourful and ecologically useful members of the forest.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Rupicola peruvianus (Andean cock-of-the-rock)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly fruit (seed disperser)" },
        { label: "Display", value: "Males compete at leks" },
        { label: "Sexes", value: "Males vivid; females drab brown" },
        { label: "Nest", value: "Mud nest on rock faces" },
        { label: "Culture", value: "National bird of Peru" },
        { label: "Range", value: "Andean & northern South America" },
      ]}
      relatedLinks={[
        { label: "Umbrellabird Profile", href: "/animals/umbrellabird", description: "A related cotinga with its own display" },
        { label: "Motmot Profile", href: "/animals/motmot", description: "Another colourful Neotropical bird" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "An iconic rainforest bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
