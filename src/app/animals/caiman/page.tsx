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

const title = "Caiman — Profile, Habitat, Diet & Behavior";
const description =
  "Caimans are crocodilians of Central and South America. A group-level overview using the spectacled caiman as a reference — habitat, diet, and how caimans differ from alligators.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/caiman",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("caiman"),
});

export default function CaimanPage() {
  return (
    <AnimalProfileLayout
      commonName="Caiman"
      pageTitle={title}
      description={description}
      path="/animals/caiman"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Crocodilian", "Wild"]}
      image={getAnimalImage("caiman") ?? undefined}
      galleryImages={getAnimalGalleryImages("caiman")}
      factsHeaderNote="“Caiman” covers several crocodilian species of the Americas; the reference shown is the spectacled caiman. These are wild predators, not exotic pets; this page is educational, not a care or handling guide."
      overview={
        <>
          <p>
            Caimans are crocodilians of Central and South America, related to
            alligators within the family Alligatoridae. This page is a
            group-level overview; the spectacled caiman (<em>Caiman crocodilus</em>),
            the most widespread species, is used as a reference — named for a bony
            ridge between the eyes that resembles spectacles. Caimans range from
            relatively small species to the large black caiman.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Caimans live in freshwater habitats — rivers, lakes, wetlands, and
            flooded forests — across Central and South America. The spectacled
            caiman is adaptable and occupies a wide range of such habitats, and
            has been introduced to a few areas outside its native range. Habitat
            and range vary by species, with some, like the black caiman,
            restricted to particular river systems.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Caimans are carnivores. Diet shifts with age and size: smaller and
            younger caimans take insects, crustaceans, and fish, while larger
            individuals eat fish, amphibians, reptiles, birds, and mammals. As
            predators they help regulate prey populations in their wetlands. This
            page describes general feeding ecology, not handling or care.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Like other crocodilians, caimans are ectothermic and bask to regulate
            temperature, are most active around dawn, dusk, and night, and are
            ambush predators in water. Females build nests and guard their eggs
            and young, showing notable parental care. As large wild reptiles,
            caimans can be dangerous if approached and should be observed only
            from a safe distance. Behaviour varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Caimans are wild reptiles, not exotic pets; they grow large, are
            predators, and have specialised needs that make private keeping
            inappropriate and often illegal. They have been affected by hunting
            for skins and by habitat change, though the spectacled caiman remains
            widespread. Conservation status varies by species and should be
            checked against current sources. This page is educational, not care,
            safety, or handling advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Caimans are crocodilians with armoured, scaly skin, powerful
                tails, and eyes and nostrils set high on the head for lurking at
                the surface. The spectacled caiman is named for the ridge between
                its eyes. Caimans are often confused with alligators, to which
                they are closely related; they tend to be smaller (except the
                black caiman) and differ in details of the skull and body armour.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Caimans are crocodilians, closely related to the alligator and more
          distantly to the crocodile covered separately on FaunaHub. They share
          the order Crocodilia. Caimans are most easily confused with alligators,
          their close relatives in the family Alligatoridae.
        </p>
      }
      comparisonCallouts={[
        { href: "/compare/alligator-vs-crocodile", label: "Alligator vs Crocodile" },
      ]}
      faqs={[
        {
          question: "What is the difference between a caiman and an alligator?",
          answer:
            "Caimans and alligators are closely related crocodilians in the family Alligatoridae. Caimans are mostly found in Central and South America and tend to be smaller (apart from the black caiman), with some differences in skull shape and body armour. Alligators occur in the southeastern United States and China.",
        },
        {
          question: "Can caimans be kept as pets?",
          answer:
            "No — caimans are wild crocodilians that grow large, are predators, and have specialised needs; private keeping is inappropriate and often illegal. This page is educational, not a care or handling guide.",
        },
        {
          question: "Are caimans dangerous?",
          answer:
            "Caimans are wild predators and larger species can be dangerous, so they should be observed only from a safe distance and never approached or fed. This page does not provide safety or handling instructions; follow local wildlife authority guidance.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Caimans (family Alligatoridae)" },
        { label: "Reference species", value: "Spectacled caiman (Caiman crocodilus)" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Crocodilia" },
        { label: "Diet", value: "Carnivore (varies with size)" },
        { label: "Range", value: "Central and South America" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Alligator Profile", href: "/animals/alligator", description: "A close crocodilian relative" },
        { label: "Crocodile Profile", href: "/animals/crocodile" },
        { label: "Anaconda Profile", href: "/animals/anaconda" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.caiman}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
