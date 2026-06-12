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

const title = "Eel — Profile, Habitat, Diet & Behavior";
const description =
  "Eels are elongated, snake-like fish. A group-level overview of the order Anguilliformes using the moray eel as a reference: habitat, diet, life cycle, and caution.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/eel",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("eel"),
});

export default function EelPage() {
  return (
    <AnimalProfileLayout
      commonName="Eel"
      pageTitle={title}
      description={description}
      path="/animals/eel"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Elongated", "Marine & Freshwater"]}
      image={getAnimalImage("eel") ?? undefined}
      galleryImages={getAnimalGalleryImages("eel")}
      factsHeaderNote="“Eel” covers the order Anguilliformes — true eels including morays and freshwater eels. The reference shown is a moray eel. Habitat and life cycle vary; some freshwater eels are threatened. Status should be checked against current sources."
      overview={
        <>
          <p>
            Eels are elongated, snake-like fish that make up the order
            Anguilliformes, the &quot;true eels&quot;, with hundreds of species
            including moray eels, conger eels, and the migratory freshwater eels.
            This page is a group-level overview; the moray eel is used as a
            familiar reference. Despite their appearance, eels are fish, not
            reptiles, and most have long, ribbon-like fins running along the body
            rather than the separate fins of typical fish.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Eels occupy a wide range of habitats. Moray and conger eels live in
            the sea, often hiding in reef crevices and rocky holes, while
            freshwater eels live in rivers and lakes but migrate to the ocean to
            breed. Some species move between salt and fresh water across their
            lives. Habitat and range vary widely by species, so no single
            description fits all eels.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most eels are carnivorous predators. Moray eels ambush fish and
            invertebrates from their crevices, while freshwater eels take a range
            of prey including invertebrates and small fish. Many hunt by smell,
            being most active at night. Diet varies by species; this page
            describes general feeding ecology rather than husbandry details.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many eels are secretive and nocturnal, sheltering by day in burrows
            or crevices. Moray eels are often seen with their mouths opening and
            closing, which mainly pumps water over the gills for breathing rather
            than signalling aggression. The freshwater eels are famous for
            extraordinary breeding migrations, travelling long distances to spawn
            in the open ocean. Behaviour varies greatly across the group.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Eels are caught for food in many cultures and freshwater eels in
            particular support important fisheries, but several species —
            including the European and American eels — have declined sharply and
            are of serious conservation concern, affected by barriers to
            migration, habitat loss, and other pressures. Moray and other eels
            can bite defensively if disturbed and should not be handled.
            Conservation status varies by species and should be verified against
            current IUCN Red List and government sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Eels have a long, slender, often cylindrical body and typically
                lack the pelvic fins of most fish; in many species the dorsal,
                tail, and anal fins merge into a single continuous fin along the
                body. Moray eels have thick, muscular bodies and a large mouth
                with sharp teeth, while freshwater eels are more uniformly snake-
                like. Most eels are scaleless or have tiny embedded scales.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          True eels are ray-finned fish like most others on FaunaHub, but their
          elongated bodies set them apart. They are sometimes confused with
          unrelated snake-like animals; the sea snakes, for example, are reptiles,
          not fish. Other long-bodied fish, such as some catfish and the
          electric eel (which is not a true eel), can resemble them superficially.
        </p>
      }
      faqs={[
        {
          question: "Are eels fish or snakes?",
          answer:
            "Eels are fish, not snakes. Despite their snake-like shape, they breathe with gills, have fins, and belong to the order Anguilliformes. Their elongated body is an adaptation for living in crevices, burrows, and tight spaces.",
        },
        {
          question: "Why do moray eels open and close their mouths?",
          answer:
            "Moray eels frequently open and close their mouths to pump water over their gills for breathing, since their gill openings are small. It looks menacing but is usually a normal breathing action rather than a threat — though morays can bite defensively if disturbed.",
        },
        {
          question: "Are eels endangered?",
          answer:
            "Some are. Several freshwater eel species, including the European and American eels, have declined significantly and are of conservation concern, while many marine eels are more common. Status varies by species and should be checked against current IUCN and government sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "True eels (order Anguilliformes)" },
        { label: "Reference", value: "Moray eel" },
        { label: "Type", value: "Elongated fish (marine and freshwater)" },
        { label: "Diet", value: "Mostly carnivore" },
        { label: "Notable trait", value: "Snake-like body; long migrations in some species" },
        { label: "Conservation", value: "Some freshwater eels threatened — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Ray Profile", href: "/animals/ray", description: "Another distinctive marine fish" },
        { label: "Catfish Profile", href: "/animals/catfish" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.eel}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
