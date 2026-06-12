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

const title = "Starfish — Profile, Habitat, Diet & Behavior";
const description =
  "Starfish (sea stars) are five-armed marine echinoderms. A group-level overview: tube feet, seabed habitats, feeding, and the ability to regenerate arms.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/starfish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("starfish"),
});

export default function StarfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Starfish"
      pageTitle={title}
      description={description}
      path="/animals/starfish"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine", "Echinoderm", "Invertebrate"]}
      image={getAnimalImage("starfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("starfish")}
      factsHeaderNote="“Starfish” (sea stars) are echinoderms in the class Asteroidea, with thousands of species. Arm number, colour, and habits vary; many biologists prefer the name “sea star” because they are not fish."
      overview={
        <>
          <p>
            Starfish, also called sea stars, are marine animals in the class
            Asteroidea, part of the echinoderm group that also includes sea
            urchins and sea cucumbers. There are thousands of species. This
            page is a group-level overview. Most have a central disc and five
            arms, though some have many more. Because they are not fish, many
            scientists prefer the name &quot;sea star&quot;.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Starfish are found only in the sea, never in fresh water, and live
            on the seabed from rocky shores and tide pools to coral reefs and
            the deep ocean floor. Different species are adapted to different
            depths, temperatures, and substrates, so habitat varies
            considerably across the group. Some are common in the intertidal
            zone, where they can be exposed at low tide.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Many starfish are carnivores or scavengers. A number of species
            feed on shellfish such as mussels and clams, and some can push
            their stomach out through their mouth to digest prey externally.
            Others graze on algae, sponges, or detritus. Feeding strategies
            vary widely by species; the crown-of-thorns starfish, for example,
            is a notable coral predator.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Starfish move using hundreds of tiny tube feet on the underside of
            their arms, powered by an internal water-based hydraulic system
            called the water vascular system. They are slow-moving but can
            right themselves if turned over and grip surfaces firmly. Many
            starfish can regenerate arms lost to predators or injury, and in
            some species a detached arm can even regrow into a new individual.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Starfish are an important part of many seabed ecosystems, and some
            are considered keystone predators whose feeding shapes the
            community around them. A few, such as the crown-of-thorns starfish,
            can damage coral reefs during population outbreaks. Some sea-star
            populations have also been hit by disease events. Conservation
            status varies by species and for most is not well established, so it
            should not be assumed.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                A typical starfish has a flattened, star-shaped body with a
                central disc and (usually) five tapering arms, though some
                species have six, many, or even dozens. The upper surface is
                often tough or spiny, while the underside carries rows of tube
                feet and a central mouth. Colours range from drab browns to
                vivid oranges, reds, purples, and blues. The body is supported
                by an internal skeleton of small calcified plates.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Starfish are echinoderms, related to brittle stars, sea urchins, sand
          dollars, and sea cucumbers. Brittle stars look similar but have a
          small disc with thin, snake-like arms and move quite differently.
          Despite the shared &quot;star&quot; shape, starfish are unrelated to
          jellyfish or other groups covered on FaunaHub.
        </p>
      }
      faqs={[
        {
          question: "Are starfish actually fish?",
          answer:
            "No. Starfish are not fish at all — they are echinoderms, invertebrates with no backbone, brain, or blood in the usual sense. Because the name is misleading, many scientists prefer to call them \"sea stars\".",
        },
        {
          question: "Can a starfish regrow a lost arm?",
          answer:
            "Many can. Starfish are well known for regeneration and can regrow arms lost to predators or injury over time. In some species, a detached arm that includes part of the central disc can even develop into a whole new starfish.",
        },
        {
          question: "How do starfish move and feed without a brain?",
          answer:
            "Starfish lack a central brain but have a nerve network and a water vascular system that operates hundreds of tube feet, letting them move slowly and grip prey. Some species feed by everting their stomach to digest prey such as shellfish externally.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sea stars (class Asteroidea)" },
        { label: "Type", value: "Echinoderm (marine invertebrate)" },
        { label: "Arms", value: "Usually five; some have many more" },
        { label: "Movement", value: "Tube feet (water vascular system)" },
        { label: "Diet", value: "Often carnivore/scavenger; varies" },
        { label: "Notable trait", value: "Can regenerate lost arms" },
        { label: "Conservation", value: "Mostly not well established — verify per species" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "Another seabed invertebrate" },
        { label: "Octopus Profile", href: "/animals/octopus" },
        { label: "Jellyfish Profile", href: "/animals/jellyfish" },
        { label: "Animal Encyclopedia — Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.starfish}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
