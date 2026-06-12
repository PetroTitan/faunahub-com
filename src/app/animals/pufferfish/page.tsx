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

const title = "Pufferfish — Profile, Habitat, Diet & Behavior";
const description =
  "Pufferfish can inflate their bodies and many are highly toxic. A group-level overview of the family Tetraodontidae: habitat, diet, defences, and strong safety caution.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/pufferfish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("pufferfish"),
});

export default function PufferfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Pufferfish"
      pageTitle={title}
      description={description}
      path="/animals/pufferfish"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine & Freshwater", "Toxic"]}
      image={getAnimalImage("pufferfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("pufferfish")}
      factsHeaderNote="“Pufferfish” covers the family Tetraodontidae. Many pufferfish carry a potent natural toxin and should never be handled or eaten outside expert, regulated preparation. This page is educational only — it is not a food-safety or care guide."
      overview={
        <>
          <p>
            Pufferfish are fish of the family Tetraodontidae, famous for their
            ability to inflate their bodies into a ball when threatened. There
            are many species, found in marine, brackish, and some freshwater
            habitats. This page is a group-level overview. Beyond inflation, many
            pufferfish carry a powerful natural toxin, which makes them one of the
            most hazardous groups of fish to handle or eat.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Pufferfish are found mainly in warm and temperate seas worldwide,
            especially around coral reefs and coastal waters, with some species
            living in brackish estuaries or fresh water. Many are slow-moving
            inhabitants of reefs, seagrass, and sandy areas. Habitat and range
            vary by species, so a description of one pufferfish does not apply to
            all.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Many pufferfish are carnivores that feed on hard-shelled prey such as
            molluscs, crustaceans, and coral, using strong, fused beak-like teeth
            to crush shells — the family name refers to these teeth. Others take a
            broader diet. Their feeding shapes some reef and seabed communities.
            Diet varies by species; this page describes general feeding ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            The pufferfish&apos;s signature defence is to rapidly gulp water (or
            air) to inflate into a much larger, rounder shape that is hard for
            predators to swallow; some also have spines that stand out when
            inflated. This is a stress response, not a trick to provoke. Many
            pufferfish are slow but manoeuvrable swimmers. Some species perform
            remarkable behaviours, such as the elaborate seabed &quot;circles&quot;
            built by certain males. Behaviour varies among species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Many pufferfish contain tetrodotoxin, a potent natural toxin for
            which there is no simple antidote; for this reason they should never
            be handled casually or eaten outside expert, licensed preparation
            where that is legally practised. Some species are kept by specialist
            aquarists but have demanding needs and the same safety considerations.
            Conservation status varies by species. This profile is educational
            only and is not a food-safety, handling, or care guide — treat wild
            pufferfish with caution and seek qualified guidance.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Pufferfish have rounded, often stout bodies, small fins, and large
                expressive eyes, and they swim with a distinctive sculling motion
                rather than fast bursts. Their most famous feature only appears
                under threat, when they inflate dramatically. The fused teeth form
                a beak-like structure suited to crushing shells. Colours and
                patterns range from drab camouflage to bold spots and stripes,
                and some carry spines.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Pufferfish belong to the order Tetraodontiformes alongside porcupinefish
          (which have prominent spines), boxfish, and triggerfish. They are
          sometimes confused with the spiny porcupinefish, but the two are
          different families. They share reef habitats with other marine fish on
          FaunaHub such as clownfish and seahorses.
        </p>
      }
      faqs={[
        {
          question: "How do pufferfish inflate?",
          answer:
            "When threatened, a pufferfish rapidly takes water (or sometimes air) into a highly expandable stomach, swelling into a much larger, rounder shape that is difficult for a predator to bite or swallow. It is a stress response, and repeatedly forcing a puffer to inflate is harmful to the fish.",
        },
        {
          question: "Are pufferfish poisonous?",
          answer:
            "Many pufferfish contain tetrodotoxin, a potent natural toxin, in their organs and tissues. There is no simple antidote, which is why they should never be handled casually or eaten except where prepared by specially trained, licensed professionals. This page is educational, not a food-safety guide.",
        },
        {
          question: "Can pufferfish be kept in aquariums?",
          answer:
            "Some pufferfish are kept by experienced aquarists, but they have demanding care needs and the same toxicity considerations, so they are not suitable for casual fishkeeping. This page is educational and not care advice; anyone considering them should research thoroughly and seek qualified guidance.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Pufferfish (family Tetraodontidae)" },
        { label: "Order", value: "Tetraodontiformes" },
        { label: "Type", value: "Marine, brackish, and some freshwater fish" },
        { label: "Defence", value: "Inflates; many carry potent toxin" },
        { label: "Diet", value: "Often carnivore (crushes hard-shelled prey)" },
        { label: "Safety", value: "Do not handle or eat — many are highly toxic" },
      ]}
      relatedLinks={[
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another reef fish" },
        { label: "Seahorse Profile", href: "/animals/seahorse" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.pufferfish}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
