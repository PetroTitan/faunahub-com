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

const title = "Tapir — Profile, Habitat, Diet & Behavior";
const description =
  "Tapirs are large browsing mammals with a short prehensile snout. A group-level overview using the South American tapir as a reference — habitat, diet, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/tapir",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("tapir"),
});

export default function TapirPage() {
  return (
    <AnimalProfileLayout
      commonName="Tapir"
      pageTitle={title}
      description={description}
      path="/animals/tapir"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Herbivore", "Wild"]}
      image={getAnimalImage("tapir") ?? undefined}
      galleryImages={getAnimalGalleryImages("tapir")}
      factsHeaderNote="“Tapir” covers several species in the Americas and Southeast Asia; the reference shown is the South American tapir. Tapirs are wild animals, not pets; several species are threatened — check current IUCN sources."
      overview={
        <>
          <p>
            Tapirs are large, herbivorous mammals with a distinctive short,
            flexible, prehensile snout. There are several living species, found in
            Central and South America and in Southeast Asia. This page is a
            group-level overview; the South American (lowland) tapir
            (<em>Tapirus terrestris</em>) is used as a reference. Despite a
            pig-like appearance, tapirs are most closely related to horses and
            rhinoceroses.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Tapirs live in forests and grasslands near water across their ranges,
            and they are strong swimmers that often take to rivers and pools.
            South American tapirs inhabit rainforest and other wooded habitats of
            tropical South America, while the Malayan tapir lives in Southeast
            Asian forests. Habitat and range vary by species, and all depend on
            relatively undisturbed habitat.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Tapirs are herbivores that browse on leaves, shoots, fruit, and
            aquatic plants, using the mobile snout to grasp vegetation. By eating
            fruit and dispersing seeds, tapirs play an important role as seed
            dispersers in their ecosystems. This page describes general feeding
            ecology, not care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Tapirs are generally solitary and most active around dusk and at
            night, following well-worn trails through their habitat. They are
            shy and tend to flee to water when threatened, and they are capable
            swimmers and divers. Young tapirs of most species have a striped-and-
            spotted coat that provides camouflage. Behaviour varies among the
            tapir species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Tapirs are wild animals, not pets. Several tapir species are
            threatened by habitat loss, fragmentation, and hunting, and they are
            the focus of conservation concern, while their slow reproduction makes
            recovery difficult. Because conservation status varies by species and
            is actively monitored, it should be verified against current IUCN Red
            List sources rather than assumed. This page is educational, not care
            or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Tapirs are stocky, rounded-bodied mammals with short legs, a short
                tail, small eyes, and a distinctive short, mobile snout formed
                from the nose and upper lip. The South American tapir is dark
                brown to grey with a low crest along the neck; the Malayan tapir
                is boldly patterned in black and white. Young tapirs are
                camouflaged with stripes and spots. The flexible snout is the most
                recognisable feature.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Tapirs may look pig-like, but they are odd-toed ungulates most closely
          related to the horse covered on FaunaHub and to rhinoceroses. Among site
          profiles, their browsing, forest lifestyle is comparable to other large
          herbivores, though their snout sets them apart.
        </p>
      }
      faqs={[
        {
          question: "What are tapirs related to?",
          answer:
            "Despite a pig-like or anteater-like appearance, tapirs are odd-toed ungulates, most closely related to horses and rhinoceroses. They are not closely related to pigs or elephants, even though the snout may invite comparison.",
        },
        {
          question: "What is a tapir's snout for?",
          answer:
            "The short, flexible, prehensile snout — formed from the nose and upper lip — is used to grasp leaves, shoots, and fruit while browsing. It is a versatile feeding tool, a bit like a very short trunk.",
        },
        {
          question: "Are tapirs endangered?",
          answer:
            "Several tapir species are threatened by habitat loss and hunting, and their slow reproduction makes them vulnerable. Status varies by species and is actively monitored, so it should be checked against current IUCN sources rather than assumed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Tapirs (several living species)" },
        { label: "Reference species", value: "South American tapir (Tapirus terrestris)" },
        { label: "Class", value: "Mammalia" },
        { label: "Relatives", value: "Odd-toed ungulates (horses, rhinos)" },
        { label: "Diet", value: "Herbivore (browser); seed disperser" },
        { label: "Conservation", value: "Several threatened — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Horse Profile", href: "/animals/horse", description: "A close relative among odd-toed ungulates" },
        { label: "Sloth Profile", href: "/animals/sloth" },
        { label: "Hyena Profile", href: "/animals/hyena" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.tapir}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
