import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fishing-cat";
const TITLE = "Fishing Cat — Profile, the Wild Cat That Dives for Its Dinner";
const DESC =
  "Explore the fishing cat (Prionailurus viverrinus): a stocky Asian wetland cat that swims, dives, and scoops fish from the water — a wetland specialist now threatened by habitat loss.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("fishing-cat"),
});

export default function FishingCatPage() {
  return (
    <AnimalProfileLayout
      commonName="Fishing Cat"
      scientificName="Prionailurus viverrinus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Wetland"]}
      image={getAnimalImage("fishing-cat") ?? undefined}
      galleryImages={getAnimalGalleryImages("fishing-cat")}
      sources={ANIMAL_SOURCES["fishing-cat"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The fishing cat (<em>Prionailurus viverrinus</em>) is a stocky, powerful wild cat of
            South and Southeast Asia that has broken one of the great clichés about cats: it loves
            water. About twice the size of a domestic cat, with a robust body, short legs, a short
            tail, and an olive-grey coat marked with dark spots and stripes, the fishing cat is a
            wetland specialist that swims readily, dives, and — true to its name — catches fish.
          </p>
          <p>
            Far from avoiding water, this cat wades into shallows and ponds to hunt, scooping fish
            with its paws and even plunging in head-first after prey, making it one of the most
            aquatic of all cats.
          </p>
          <p>
            <strong>Conservation note:</strong> the fishing cat is classified as Vulnerable,
            threatened above all by the loss and degradation of wetlands. Verify current status at
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Fishing cats live in wetlands across South and Southeast Asia — marshes, swamps,
          mangroves, reedbeds, and the densely vegetated margins of rivers, lakes, and tidal creeks.
          They are tightly tied to these waterlogged habitats, which provide the fish and other prey
          they depend on, so they are largely absent from drier country.
        </p>
      }
      diet={
        <p>
          As its name says, the fishing cat eats a lot of fish, but it is a broad carnivore that
          also takes frogs, crabs, crayfish, snakes, rodents, birds, and other small animals, and
          will scavenge or raid for larger prey. It hunts in and around water, often crouching at
          the edge and scooping fish out with a paw, or diving in to seize prey, using its keen
          senses to detect movement in the water.
        </p>
      }
      behavior={
        <p>
          The fishing cat is built for an aquatic life: it is a strong swimmer, reportedly able to
          dive and even swim underwater short distances after prey, and it has slightly webbed feet
          and a dense, two-layered, water-resistant coat. It is mostly nocturnal and solitary, and
          it hunts along waterways, sometimes tapping the surface with a paw — possibly to mimic
          insect movement and lure fish closer — before striking. Females raise their kittens in
          dense cover near water. Though not large, the fishing cat is a bold and capable predator
          of its watery world.
        </p>
      }
      humanInteraction={
        <p>
          The fishing cat is classified as Vulnerable and declining, chiefly because the wetlands it
          depends on are being drained, polluted, and converted for agriculture, aquaculture, and
          development across Asia; it also suffers from hunting and conflict with people. Protecting
          and restoring wetlands is central to its survival, and it has become something of a flagship
          for wetland conservation in parts of its range. As a wild cat, it is not suited to life as a
          pet. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Do fishing cats really catch fish?",
          answer:
            "Yes — it's central to their lives. Fishing cats hunt in and around water, crouching at the edge to scoop fish out with a paw and even diving in after prey. Fish are a major part of their diet, though they also eat frogs, crabs, snakes, rodents, birds, and other small animals. Few cats are as at home in the water.",
        },
        {
          question: "Don't cats hate water?",
          answer:
            "Many domestic cats avoid it, but the fishing cat is a striking exception. It's a wetland specialist that swims strongly, can dive, and may even pursue prey underwater for short distances. Adaptations like slightly webbed feet and a dense, water-resistant double coat show just how thoroughly this cat has embraced an aquatic life.",
        },
        {
          question: "How big is a fishing cat?",
          answer:
            "It's a medium-small wild cat, roughly twice the size of a typical house cat, but stockier and more powerfully built, with short legs and a short tail. This solid, muscular frame suits a life of wading, swimming, and wrestling slippery prey from the water.",
        },
        {
          question: "Why is the fishing cat threatened?",
          answer:
            "Mainly because its wetland home is disappearing. Marshes, swamps, and mangroves across Asia are being drained, polluted, and converted for farming, aquaculture, and development, which destroys the habitat and prey the fishing cat depends on; hunting and conflict with people add further pressure. It's classified as Vulnerable — check the IUCN Red List for the current status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Prionailurus viverrinus" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Signature trait", value: "Swims, dives & catches fish" },
        { label: "Adaptations", value: "Slightly webbed feet; water-resistant coat" },
        { label: "Diet", value: "Fish, frogs, crabs, rodents, birds & more" },
        { label: "Activity", value: "Mainly nocturnal; solitary" },
        { label: "Habitat", value: "Asian wetlands, marshes & mangroves" },
        { label: "Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Ocelot Profile", href: "/animals/ocelot", description: "Another spotted small wild cat" },
        { label: "Tiger Profile", href: "/animals/tiger", description: "A big Asian cat that also likes water" },
        { label: "Serval Profile", href: "/animals/serval", description: "Another wetland-edge hunting cat" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
