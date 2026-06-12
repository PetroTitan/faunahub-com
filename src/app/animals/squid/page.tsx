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

const title = "Squid — Profile, Habitat, Diet & Behavior";
const description =
  "Squid are fast-swimming cephalopod molluscs. A group-level overview using the Caribbean reef squid as a reference: tentacles, jet propulsion, and ocean habitats.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/squid",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("squid"),
});

export default function SquidPage() {
  return (
    <AnimalProfileLayout
      commonName="Squid"
      pageTitle={title}
      description={description}
      path="/animals/squid"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine", "Cephalopod", "Invertebrate"]}
      image={getAnimalImage("squid") ?? undefined}
      galleryImages={getAnimalGalleryImages("squid")}
      factsHeaderNote="“Squid” covers hundreds of cephalopod species, from tiny reef squid to the giant squid. The reference species shown is the Caribbean reef squid. Size, depth, and behaviour vary enormously."
      overview={
        <>
          <p>
            Squid are fast-swimming marine molluscs of the class Cephalopoda,
            the same broad group as octopuses and cuttlefish. There are
            hundreds of species, ranging from small reef squid to the deep-sea
            giant and colossal squids. This page is a group-level overview; the
            Caribbean reef squid is shown as a familiar reference. Squid have
            eight arms and two longer tentacles, large eyes, and a soft body
            supported by an internal structure called a pen.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Squid are found throughout the world&apos;s oceans, from shallow
            coastal waters and coral reefs to the open ocean and the deep sea.
            Some species form large schools near the surface, while others live
            in the cold, dark waters of the deep, where they are difficult to
            study. Habitat and depth range vary widely by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Squid are carnivorous predators. They typically seize prey such as
            fish, crustaceans, and other squid using their two extendable
            tentacles, then hold and bite it with a sharp beak. Diet and
            hunting style vary by species and size, from small reef squid
            taking tiny prey to large oceanic squid hunting sizeable fish.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Squid move by jet propulsion, drawing water into the body cavity
            and forcing it out through a funnel to dart rapidly, often
            backwards. Many can change colour and pattern almost instantly
            using specialised skin cells, which they use for camouflage and,
            in some species, for communication. Some squid school in large
            numbers, and several can release a cloud of ink to escape
            predators. Behaviour differs greatly across the group.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Squid are ecologically important as both predators and prey in
            ocean food webs, and many species are harvested commercially for
            food. Deep-sea squid in particular remain poorly understood because
            they are so hard to observe in their natural environment.
            Conservation status varies by species, and for most squid it is
            not well established, so it should not be assumed; consult current
            marine-science sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Squid have an elongated, streamlined body (the mantle) with a
                pair of fins, a head bearing large, well-developed eyes, eight
                arms, and two longer feeding tentacles. Unlike the shelled
                nautilus or the internal-shelled cuttlefish, a squid&apos;s
                only internal support is a thin, flexible &quot;pen&quot;. Many
                species can flush with rapidly shifting colours. Sizes span
                from a few centimetres to the giant squid, one of the largest
                invertebrates known.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Squid are cephalopods, closely related to the octopus covered
          separately on FaunaHub, as well as cuttlefish and the nautilus.
          Octopuses have eight arms and no tentacles and tend to live on the
          seabed, while squid have ten appendages and are generally
          fast-swimming open-water animals.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a squid and an octopus?",
          answer:
            "Both are cephalopods, but squid have eight arms plus two longer feeding tentacles (ten appendages in total), a more streamlined body with fins, and an internal pen, and they are generally fast open-water swimmers. Octopuses have eight arms, no tentacles, no internal shell, and usually live on the seabed.",
        },
        {
          question: "How do squid move so fast?",
          answer:
            "Squid use jet propulsion. They draw water into the mantle cavity and expel it forcefully through a funnel, shooting the body in the opposite direction — often backwards — which allows rapid bursts of speed.",
        },
        {
          question: "How big do squid get?",
          answer:
            "It depends entirely on the species. Many squid are only a few centimetres to tens of centimetres long, while the deep-sea giant squid and colossal squid are among the largest invertebrates known. This page is a group-level overview rather than a single-species account.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Squid (class Cephalopoda)" },
        { label: "Reference species", value: "Caribbean reef squid (Sepioteuthis sepioidea)" },
        { label: "Type", value: "Marine mollusc (invertebrate)" },
        { label: "Appendages", value: "Eight arms + two tentacles" },
        { label: "Diet", value: "Carnivore" },
        { label: "Movement", value: "Jet propulsion" },
        { label: "Conservation", value: "Often not well established — verify per species" },
      ]}
      relatedLinks={[
        { label: "Octopus Profile", href: "/animals/octopus", description: "A close cephalopod relative" },
        { label: "Jellyfish Profile", href: "/animals/jellyfish" },
        { label: "Crab Profile", href: "/animals/crab" },
        { label: "Animal Encyclopedia — Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.squid}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
