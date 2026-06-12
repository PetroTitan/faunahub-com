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

const title = "Toucan — Profile, Habitat, Diet & Behavior";
const description =
  "Toucans are tropical birds with huge, colourful bills. A group-level overview using the toco toucan as a reference: rainforest habitat, fruit diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/toucan",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("toucan"),
});

export default function ToucanPage() {
  return (
    <AnimalProfileLayout
      commonName="Toucan"
      pageTitle={title}
      description={description}
      path="/animals/toucan"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Tropical", "Wild"]}
      image={getAnimalImage("toucan") ?? undefined}
      galleryImages={getAnimalGalleryImages("toucan")}
      factsHeaderNote="“Toucan” covers many species in the family Ramphastidae. The reference shown is the toco toucan (Ramphastos toco). Bill size, colour, and range vary by species. These are wild rainforest birds, not casual pets."
      overview={
        <>
          <p>
            Toucans are tropical American birds in the family Ramphastidae,
            instantly recognised by their large, often brightly coloured bills.
            There are many species. This page is a group-level overview; the toco
            toucan (<em>Ramphastos toco</em>) — the largest toucan, with a huge
            orange bill — is used as a familiar reference. Despite its size, the
            bill is surprisingly light, built from a honeycomb-like structure.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Most toucans live in the tropical forests of Central and South
            America, where they move through the canopy, though the toco toucan
            also uses more open woodland and savanna edges. Toucans are
            cavity-nesters, often using natural holes or old woodpecker holes in
            trees. Habitat and range vary widely by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Toucans are mainly fruit-eaters, using their long bills to reach and
            handle fruit, and they also take insects, eggs, and small animals.
            By eating fruit and passing the seeds, they help disperse rainforest
            plants. Diet varies by species; this page describes general feeding
            ecology rather than husbandry.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Toucans are social, often seen in small, noisy groups, and they give
            loud croaking or yelping calls. They move through the canopy in a
            series of hops and short flights rather than sustained flying. The
            large bill is also thought to help with temperature regulation, as
            well as reaching food and in social interactions. Behaviour varies
            among the many species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Toucans are wild rainforest birds, not casual pets, and some are
            affected by habitat loss and the wildlife trade. Several species are
            protected, and keeping them is regulated in many places. Conservation
            status varies by species — some are common, others of concern — and
            should be checked against current sources. This profile is
            educational and does not encourage keeping wild birds; wild toucans
            should be enjoyed in their habitat or accredited facilities.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The toco toucan is mostly black with a white throat, blue eye
                ring, and an enormous orange bill with a black tip. Other toucans
                vary widely in size and in bill colour, which can include green,
                red, yellow, and multicoloured patterns. The oversized,
                lightweight bill and the hopping movement through the canopy make
                toucans easy to recognise as a group.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Toucans are most closely related to the woodpeckers and barbets — the
          woodpecker is covered separately on FaunaHub. Smaller relatives within
          the toucan family include the aracaris and toucanets. Their giant bills
          set toucans apart from other tropical birds.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "Why do toucans have such big bills?",
          answer:
            "The large bill helps toucans reach and handle fruit, and may play roles in social signalling and in regulating body temperature. Despite its size, the bill is lightweight, with a honeycomb-like internal structure, so it is not as heavy as it looks.",
        },
        {
          question: "Are toucans good pets?",
          answer:
            "Toucans are wild rainforest birds with specialised diets and needs, and many are protected or regulated. They are not casual pets. This page is educational and does not encourage keeping wild birds; enjoy wild toucans in their habitat or at accredited facilities.",
        },
        {
          question: "What do toucans eat?",
          answer:
            "Toucans are mainly fruit-eaters but also take insects, eggs, and small animals. By eating fruit and dispersing the seeds, they play an important role in rainforest ecosystems. Diet varies among the many toucan species.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Toucans (family Ramphastidae)" },
        { label: "Reference species", value: "Toco toucan (Ramphastos toco)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly fruit; also insects and small animals" },
        { label: "Habitat", value: "Tropical American forests" },
        { label: "Ecological role", value: "Seed dispersal" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Woodpecker Profile", href: "/animals/woodpecker", description: "A close relative" },
        { label: "Parrot Profile", href: "/animals/parrot" },
        { label: "Hummingbird Profile", href: "/animals/hummingbird" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.toucan}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
