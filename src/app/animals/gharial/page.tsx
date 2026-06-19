import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/gharial";
const TITLE = "Gharial — Profile, Habitat, Diet & Conservation";
const DESC =
  "Explore the gharial (Gavialis gangeticus): a critically endangered, fish-eating crocodilian of South Asian rivers, recognised by its extremely long, narrow snout.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("gharial"),
});

export default function GharialPage() {
  return (
    <AnimalProfileLayout
      commonName="Gharial"
      scientificName="Gavialis gangeticus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Crocodilian", "Conservation priority"]}
      image={getAnimalImage("gharial") ?? undefined}
      galleryImages={getAnimalGalleryImages("gharial")}
      sources={ANIMAL_SOURCES.gharial}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The gharial (<em>Gavialis gangeticus</em>) is a large, fish-eating
            crocodilian of South Asian rivers, immediately recognisable by its
            extremely long, slender snout lined with many interlocking teeth. Mature
            males develop a distinctive bulbous growth at the tip of the snout, called
            a &ldquo;ghara,&rdquo; from which the animal takes its name.
          </p>
          <p>
            Among the most aquatic of all crocodilians, the gharial is poorly suited
            to moving on land and spends most of its life in the water. It is one of
            the most threatened large reptiles in the world.
          </p>
          <p>
            <strong>Conservation note:</strong> the gharial is widely recognised as
            critically endangered, having declined drastically due to habitat loss,
            river changes, fishing nets, and other pressures. Verify current status at
            iucnredlist.org and rely on authoritative conservation sources.
          </p>
        </>
      }
      habitat={
        <p>
          Gharials live in clean, flowing rivers with deep pools and sandy banks
          across parts of the Indian subcontinent, with the most important surviving
          populations in a few protected river stretches. They depend on sandbanks
          for basking and nesting and on healthy fish populations for food.
        </p>
      }
      diet={
        <p>
          Gharials are specialised fish-eaters. The long, narrow snout offers little
          water resistance and can be swept sideways quickly to snap up fish, which
          the many sharp, interlocking teeth grip securely. This specialisation
          distinguishes the gharial from broader-snouted crocodiles and alligators
          that take a wider range of prey.
        </p>
      }
      behavior={
        <p>
          Gharials are highly aquatic and bask on sandbanks to regulate their
          temperature. They are generally not considered a danger to people, given
          their fish-focused diet and narrow snout. Females nest in sandbanks and
          may guard nesting areas, and in places adults have been seen carrying or
          guarding groups of young.
        </p>
      }
      humanInteraction={
        <p>
          The gharial&apos;s decline has been driven by dams and river engineering,
          loss of sandbanks, entanglement in fishing nets, egg collection, and
          pollution. Conservation depends on protecting river habitat, reducing net
          mortality, and rearing and releasing young. For current status, consult
          authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why does the gharial have such a thin snout?",
          answer:
            "The long, narrow snout is a specialisation for catching fish. Its slim shape meets little resistance in water, so the gharial can sweep it sideways very quickly to snap up fish, which are then held by the many sharp, interlocking teeth.",
        },
        {
          question: "What is the bump on a male gharial's snout?",
          answer:
            "Mature males develop a bulbous structure at the tip of the snout called a ghara (from a Hindi word for a pot). It is thought to play a role in communication and display, including producing sounds and signalling to other gharials.",
        },
        {
          question: "Are gharials dangerous to people?",
          answer:
            "Gharials are generally not considered dangerous to humans. Their narrow, fish-catching snout and diet are poorly suited to taking large prey, and they tend to avoid people. As with any large wild animal, they should still be observed from a distance.",
        },
        {
          question: "Why are gharials endangered?",
          answer:
            "Gharials have declined sharply due to the loss and alteration of river habitat (including dams and removal of sandbanks), drowning in fishing nets, egg collection, and pollution. They are widely recognised as critically endangered; verify current status against IUCN Red List data.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Gavialis gangeticus" },
        { label: "Class", value: "Reptilia" },
        { label: "Group", value: "Crocodilian (family Gavialidae)" },
        { label: "Diet", value: "Fish specialist" },
        { label: "Distinctive feature", value: "Very long, thin snout; male's ghara" },
        { label: "Lifestyle", value: "Highly aquatic" },
        { label: "Range", value: "South Asian rivers" },
        { label: "IUCN Status", value: "Critically endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Crocodile Profile", href: "/animals/crocodile", description: "Broader-snouted crocodilians" },
        { label: "Alligator Profile", href: "/animals/alligator", description: "Another crocodilian group" },
        { label: "Caiman Profile", href: "/animals/caiman", description: "American crocodilians" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
