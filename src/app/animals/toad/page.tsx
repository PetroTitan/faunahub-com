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

const title = "Toad — Profile, Habitat, Diet & Behavior";
const description =
  "Toads are warty-skinned amphibians, a kind of frog. A group-level overview using the common toad as a reference — habitat, diet, and why amphibians should not be handled.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/toad",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("toad"),
});

export default function ToadPage() {
  return (
    <AnimalProfileLayout
      commonName="Toad"
      pageTitle={title}
      description={description}
      path="/animals/toad"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog Relative", "Wild"]}
      image={getAnimalImage("toad") ?? undefined}
      galleryImages={getAnimalGalleryImages("toad")}
      factsHeaderNote="Toads are amphibians (a kind of frog), not reptiles, included in this combined section. The reference shown is the common toad (Bufo bufo). Wild amphibians have sensitive, sometimes toxic skin and should not be handled; local rules vary."
      overview={
        <>
          <p>
            &quot;Toad&quot; is a common name for frogs with relatively dry,
            warty skin and shorter legs, especially those in the family
            Bufonidae. Toads are amphibians, not reptiles. This page is a
            group-level overview; the common toad (<em>Bufo bufo</em>) of Europe
            and Asia is used as a familiar reference. There is no strict
            scientific line between &quot;frogs&quot; and &quot;toads&quot; — all
            toads are frogs.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Toads live in a range of damp and dry habitats — woodland, grassland,
            gardens, and farmland — and return to ponds and slow water to breed.
            Many tolerate drier conditions than typical frogs thanks to their
            tougher skin. The common toad is widespread across Europe and into
            Asia. Habitat and range vary by species, and amphibians remain
            dependent on water for breeding.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Toads are carnivores that eat invertebrates such as insects, worms,
            slugs, and snails, which they catch with a sticky tongue. Because they
            consume many garden invertebrates, toads are often welcomed in
            gardens within their range. This page describes general feeding
            ecology rather than care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Toads are mostly nocturnal and often walk or make short hops rather
            than the long leaps of many frogs. Many have glands that produce
            toxins as a defence, which is one reason they should not be handled.
            They typically gather at breeding ponds in spring, where males call
            to attract females. Some undertake notable seasonal migrations to
            breeding sites. Behaviour varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Toads are wild amphibians, not pets to be collected. Their skin is
            permeable and many produce toxins, so handling can harm the animal
            and irritate or poison people and pets; many are also protected, with
            local rules varying. Amphibians face serious global declines from
            habitat loss, disease, and pollution, so conservation status varies
            by species and should be checked against current sources. This page is
            educational, not care advice — observe toads without disturbing them.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The common toad is a stocky amphibian with dry-looking, warty
                brown or olive skin, golden-orange eyes, and prominent glands
                behind the eyes. Compared with typical frogs, toads tend to have
                drier, rougher skin and shorter hind legs, and they often crawl
                rather than leap. Size and colour vary across the many toad
                species, but the warty skin and squat build are characteristic.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Toads are amphibians, closely related to the frog covered separately on
          FaunaHub — indeed toads are a kind of frog. They share the amphibian
          class with newts and salamanders. The dry, warty skin distinguishes
          typical toads from smoother-skinned frogs.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a frog and a toad?",
          answer:
            "All toads are frogs, but \"toad\" usually refers to frogs with drier, warty skin and shorter legs, especially in the family Bufonidae. \"Frog\" and \"toad\" are common-name distinctions rather than strict scientific groups.",
        },
        {
          question: "Can touching a toad give you warts?",
          answer:
            "No — the idea that toads cause warts is a myth. However, many toads have glands that produce toxins, which can irritate skin and harm pets, and amphibian skin is delicate, so wild toads should not be handled.",
        },
        {
          question: "Are toads good for the garden?",
          answer:
            "Toads eat many invertebrates that gardeners consider pests, so they are often welcomed where they occur naturally. The best way to support them is to provide suitable wild habitat and avoid disturbing or handling them.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Toads (frogs, esp. family Bufonidae)" },
        { label: "Reference species", value: "Common toad (Bufo bufo)" },
        { label: "Class", value: "Amphibia" },
        { label: "Diet", value: "Carnivore (invertebrates)" },
        { label: "Defence", value: "Toxin-producing skin glands in many species" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Frog Profile", href: "/animals/frog", description: "The wider frog group" },
        { label: "Salamander Profile", href: "/animals/salamander" },
        { label: "Newt Profile", href: "/animals/newt" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.toad}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
