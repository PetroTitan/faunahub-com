import type { Metadata } from "next";
import Link from "next/link";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-20";

const title = "Dolphin — Overview of Dolphin Species, Habitat & Behavior";
const description =
  "An overview of dolphins: family Delphinidae, social pods, echolocation, the common bottlenose dolphin as a reference species, and human-impact context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/dolphin",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("dolphin"),
});

export default function DolphinPage() {
  return (
    <AnimalProfileLayout
      commonName="Dolphin"
      pageTitle={title}
      description={description}
      path="/animals/dolphin"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal", "Cetacean", "Social"]}
      image={getAnimalImage("dolphin") ?? undefined}
      factsHeaderNote={
        'Reference species for specific details below is the common bottlenose dolphin (Tursiops truncatus). "Dolphin" applies to many species in family Delphinidae and the river-dolphin families.'
      }
      overview={
        <>
          <p>
            &quot;Dolphin&quot; is a common name applied to a number of small to medium-sized
            toothed whales (suborder Odontoceti). The majority of species belong to the family
            Delphinidae, the oceanic dolphins, which includes the well-known common bottlenose
            dolphin (<em>Tursiops truncatus</em>) used as the reference species on this page.
            Several distinct families of freshwater &quot;river dolphins&quot; are also recognised.
          </p>
          <p>
            Dolphins are marine mammals — warm-blooded, air-breathing, viviparous and
            milk-producing — and they are notable for sophisticated echolocation, complex
            social behaviour, and high reported cognitive performance in research settings.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Dolphins occupy a wide variety of marine habitats including coastal waters, open
            pelagic ocean, estuaries, and some tropical river systems (in the case of river
            dolphins). The common bottlenose dolphin is widely distributed in temperate and
            tropical waters of the world&apos;s oceans, often using coastal and near-shore
            habitats.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Dolphins are predominantly piscivorous, with diets centred on fish and squid. Prey
            selection varies by species and region. Foraging behaviours can be highly developed
            and include cooperative herding of fish schools, &quot;mud-ring&quot; feeding in
            some bottlenose populations, and the use of echolocation to detect and locate
            buried or hidden prey.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Most dolphin species are highly social, living in groups known as pods. Pod
            composition varies — from small stable family-related units to large temporary
            aggregations of hundreds of individuals. Communication uses a wide repertoire of
            whistles, clicks and burst-pulsed sounds; individually distinctive &quot;signature
            whistles&quot; have been documented in bottlenose dolphins.
          </p>
          <p>
            Echolocation — the production of high-frequency clicks and the interpretation of
            returning echoes — is central to navigation and prey detection in low-visibility
            water.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Conservation pressures vary by species and region but commonly include bycatch in
            fishing gear, habitat degradation, chemical and noise pollution, prey depletion,
            and direct hunts in some areas. Several river dolphin populations are particularly
            threatened. Status should be checked species-by-species on the IUCN Red List.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Dolphins share a clearly mammalian, streamlined body plan: a torpedo-shaped
                torso, a single dorsal fin, two pectoral flippers, and a horizontal tail fluke
                used for propulsion. The snout is typically extended into a beak (the
                &quot;rostrum&quot;) of variable length depending on species — long and slender
                in spinner and common dolphins, shorter and blunter in bottlenose dolphins,
                and almost absent in some species such as the orca and Risso&apos;s dolphin.
              </p>
              <p>
                Colouration is typically counter-shaded — darker above, lighter below — which
                provides camouflage against both sunlit surface waters and deeper water. Many
                species carry distinctive cape patterns, eye markings, or flank stripes.
                Field identification at sea usually combines dorsal-fin shape and position,
                overall body proportions, behavioural cues (e.g. bow-riding, surface
                acrobatics), and group size rather than any single feature.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Other cetaceans include whales (large baleen and toothed whales) and porpoises (a
          separate family of small cetaceans). <strong>Sharks</strong> are sometimes confused
          with dolphins by casual observers but are cartilaginous fish, not mammals — see the{" "}
          <Link href="/animals/shark">shark profile</Link> for the practical distinguishing features.
        </p>
      }
      faqs={[
        {
          question: "Are dolphins fish or mammals?",
          answer:
            "Dolphins are mammals. They are warm-blooded, breathe air through lungs (via a blowhole), give birth to live young, and nurse their offspring with milk. They evolved from land-dwelling ancestors over tens of millions of years.",
        },
        {
          question: "How intelligent are dolphins?",
          answer:
            "Dolphins, particularly bottlenose dolphins, show behaviours associated with high cognition in research settings — including mirror self-recognition reported in some individuals, problem-solving, tool use in certain populations, and complex social learning. Discussion of intelligence in non-human animals is best framed in terms of specific documented behaviours rather than ranking.",
        },
        {
          question: "How does echolocation work?",
          answer:
            "Dolphins produce high-frequency clicks from structures in their forehead. The returning echoes are received primarily through fatty tissues in the lower jaw and conducted to the inner ear. By interpreting these echoes, dolphins can detect, locate, and characterise objects — including prey hidden in sediment.",
        },
        {
          question: "Are dolphins dangerous?",
          answer:
            "Wild dolphins are generally not dangerous to humans, but they are large, powerful, wild animals. Interactions with habituated individuals, captive animals, or stressed animals can cause injury. Most marine authorities discourage approaching, feeding, or swimming directly with wild dolphins.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Common bottlenose dolphin (Tursiops truncatus)" },
        { label: "Family", value: "Delphinidae (oceanic dolphins)" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Cetacea (Artiodactyla)" },
        { label: "Diet", value: "Fish, squid, varies by species" },
        { label: "Social structure", value: "Pods (highly social)" },
        { label: "Primary habitat", value: "Coastal and open ocean; some rivers" },
        { label: "Range", value: "Worldwide, temperate to tropical seas" },
        { label: "IUCN Status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark", description: "Cartilaginous marine predators" },
        { label: "Penguin Profile", href: "/animals/penguin", description: "Flightless aquatic seabirds" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.dolphin}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
