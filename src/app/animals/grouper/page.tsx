import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/grouper";
const TITLE = "Grouper — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore groupers (family Serranidae): large, heavy-bodied ambush predators of reefs and rocky bottoms, including the giant goliath grouper, with remarkable suction-feeding jaws.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("grouper"),
});

export default function GrouperPage() {
  return (
    <AnimalProfileLayout
      commonName="Grouper"
      scientificName="family Serranidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Reef predator", "Ambush hunter"]}
      image={getAnimalImage("grouper") ?? undefined}
      galleryImages={getAnimalGalleryImages("grouper")}
      sources={ANIMAL_SOURCES.grouper}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Groupers are large, robust predatory fish of warm seas, part of the
            family Serranidae. They have stout bodies, broad heads, and big mouths,
            and they hunt by ambush near reefs, wrecks, and rocky bottoms. The animal
            shown here is the Atlantic goliath grouper
            (<em>Epinephelus itajara</em>), one of the largest reef fish, which can
            grow to a very heavy size.
          </p>
          <p>
            Rather than chasing prey, groupers rely on a powerful, sudden suction:
            by opening the mouth explosively they draw in water and prey together.
          </p>
          <p>
            <strong>Conservation note:</strong> some groupers, including the goliath
            grouper, were heavily overfished and are of conservation concern, with
            protections in place in various regions; status varies by species. Verify
            specifics at iucnredlist.org and NOAA Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Groupers occur in tropical and subtropical seas worldwide, on coral and
          rocky reefs, around wrecks and ledges, and in mangroves and estuaries as
          juveniles. Many are strongly site-attached, holding to a particular reef or
          structure.
        </p>
      }
      diet={
        <p>
          Groupers are carnivores that eat fish and crustaceans, and larger species
          take correspondingly large prey. They are ambush feeders: a grouper opens
          its large mouth extremely quickly, creating powerful suction that pulls prey
          in whole. Some groupers have even been observed cooperating with moray eels
          during hunts.
        </p>
      }
      behavior={
        <p>
          Groupers are generally solitary and territorial, sheltering in caves and
          crevices. Many are protogynous hermaphrodites — individuals can change from
          female to male as they grow — and a number of species gather in large
          spawning aggregations at specific times and places, which historically made
          them very vulnerable to fishing.
        </p>
      }
      humanInteraction={
        <p>
          Groupers are important food and sport fish, and large species like the
          goliath grouper are also a draw for divers. Their slow growth, late
          maturity, site fidelity, and spawning aggregations make some species
          sensitive to overfishing, which has led to protections in several regions.
          For current status, consult NOAA Fisheries and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "How do groupers catch prey if they're not fast swimmers?",
          answer:
            "Groupers are ambush predators that rely on suction rather than speed. By opening their large mouths explosively, they create a sudden inrush of water that pulls nearby prey straight in. They lie in wait near cover and strike at close range.",
        },
        {
          question: "How big do groupers get?",
          answer:
            "It varies a lot by species. Many groupers are moderate-sized reef fish, but the largest — such as the goliath grouper — are among the biggest bony reef fish, reaching a very heavy body mass. Exact sizes depend on species, age, and conditions.",
        },
        {
          question: "Do groupers change sex?",
          answer:
            "Many do. A number of grouper species are protogynous hermaphrodites, meaning individuals typically mature first as females and some later become males. This is a common reproductive strategy among groupers and their relatives.",
        },
        {
          question: "Are groupers endangered?",
          answer:
            "It depends on the species. Some groupers are widespread, but others — including the goliath grouper — were heavily overfished and are of conservation concern, with fishing protections in various regions. Status should be checked against current IUCN Red List and NOAA Fisheries data.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Serranidae" },
        { label: "Reference species", value: "Epinephelus itajara (goliath grouper)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Diet", value: "Carnivore (fish & crustaceans)" },
        { label: "Hunting style", value: "Suction-feeding ambush" },
        { label: "Reproduction", value: "Often sex-changing (protogynous)" },
        { label: "Habitat", value: "Reefs, wrecks, rocky bottoms" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Moray Eel Profile", href: "/animals/moray-eel", description: "A reef predator groupers may hunt with" },
        { label: "Barracuda Profile", href: "/animals/barracuda", description: "Another marine ambush predator" },
        { label: "Pufferfish Profile", href: "/animals/pufferfish", description: "A very different reef fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
      ]}
    />
  );
}
