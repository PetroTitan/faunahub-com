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

const title = "Bee — Profile, Habitat, Diet & Behavior";
const description =
  "Bees are flying insects vital to pollination. A group-level overview using the honey bee as a reference species: flowers, diet, social and solitary species.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/bee",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("bee"),
});

export default function BeePage() {
  return (
    <AnimalProfileLayout
      commonName="Bee"
      pageTitle={title}
      description={description}
      path="/animals/bee"
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Pollinator", "Invertebrate"]}
      image={getAnimalImage("bee") ?? undefined}
      galleryImages={getAnimalGalleryImages("bee")}
      factsHeaderNote="There are thousands of bee species, most of them solitary. The reference species shown is the western honey bee (Apis mellifera). Many statements about honey bees do not apply to wild and solitary bees."
      overview={
        <>
          <p>
            Bees are flying insects of the clade Anthophila, closely related to
            wasps and ants. There are roughly 20,000 described species
            worldwide, the great majority of which are solitary rather than
            living in hives. This page is a group-level overview; the western
            honey bee (<em>Apis mellifera</em>) is used as a familiar reference
            species. Bees are among the most important pollinators of wild
            plants and crops.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Bees live almost everywhere there are flowering plants — meadows,
            forests, gardens, farmland, and deserts — on every continent except
            Antarctica. Honey bees nest in cavities such as hollow trees or
            managed hives, while most wild bees nest individually in the ground,
            in hollow stems, or in cavities. Habitat needs vary widely by
            species, and many depend on specific plants or nesting sites.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Bees feed mainly on two products of flowers: nectar, an
            energy-rich sugar source, and pollen, which provides protein. As
            they move between flowers to collect these, bees transfer pollen
            and pollinate the plants. Larvae are generally fed on pollen and
            nectar provided by adults. Specific flower preferences vary, and
            some bees are specialists tied to particular plants.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Social bees such as honey bees and bumble bees live in colonies
            with a queen and workers and show complex behaviour, including the
            honey bee&apos;s famous &quot;waggle dance&quot; used to share the
            location of food. The majority of bee species, however, are
            solitary: a single female builds and provisions her own nest.
            Because of this range, social behaviour described for honey bees
            should not be assumed for bees in general.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Bees are enormously important to ecosystems and agriculture through
            pollination, and honey bees are also kept for honey and crop
            pollination. Many wild bee species face pressures from habitat loss,
            pesticides, disease, and climate change, and supporting pollinators
            is a significant conservation focus. Conservation status varies
            greatly by species and should be checked against current sources
            such as the Xerces Society and the IUCN.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Bees typically have a furry body, two pairs of wings, and
                branched body hairs that help trap pollen; many also carry
                pollen on specialised structures on their legs or underside.
                They vary from tiny species a few millimetres long to large,
                robust bumble bees. Bees are often confused with wasps, but
                tend to be hairier and stouter, whereas wasps are usually
                smoother and narrower-waisted.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Bees belong to the order Hymenoptera alongside wasps and the ants
          covered separately on FaunaHub. They are frequently mistaken for
          wasps and for some bee-mimicking hoverflies, which have only one pair
          of wings and do not sting. The honey bee is just one of thousands of
          bee species.
        </p>
      }
      faqs={[
        {
          question: "Are all bees social and do they all make honey?",
          answer:
            "No. Most of the world's roughly 20,000 bee species are solitary, and only a small number — chiefly honey bees — produce honey in quantity. Bumble bees are social but store little honey. Statements about honey bees often do not apply to bees in general.",
        },
        {
          question: "Why are bees important?",
          answer:
            "Bees are key pollinators. As they collect nectar and pollen, they transfer pollen between flowers, which many wild plants and crops rely on to reproduce. This makes bees important to both natural ecosystems and food production.",
        },
        {
          question: "What is the difference between a bee and a wasp?",
          answer:
            "Both are in the order Hymenoptera, but bees are generally hairier and stouter and feed their young on pollen and nectar, while wasps tend to be smoother, more slender-waisted, and many are predators. Not all bees can sting repeatedly, and honey bee workers can sting only once.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Bees (clade Anthophila)" },
        { label: "Reference species", value: "Western honey bee (Apis mellifera)" },
        { label: "Type", value: "Insect (invertebrate)" },
        { label: "Diet", value: "Nectar and pollen from flowers" },
        { label: "Ecological role", value: "Major pollinators" },
        { label: "Social structure", value: "Most species are solitary" },
        { label: "Conservation", value: "Varies by species — verify (Xerces / IUCN)" },
      ]}
      relatedLinks={[
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "Another important pollinator" },
        { label: "Ant Profile", href: "/animals/ant", description: "A fellow hymenopteran" },
        { label: "Ladybug Profile", href: "/animals/ladybug" },
        { label: "Animal Encyclopedia — Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.bee}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
