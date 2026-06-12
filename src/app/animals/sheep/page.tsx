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

const title = "Sheep — Profile, Habitat, Diet & Behavior";
const description =
  "Domestic sheep (Ovis aries): an educational overview of the woolly grazing ruminant — flocking behaviour, grazing diet, breeds, and farm context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/sheep",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("sheep"),
});

export default function SheepPage() {
  return (
    <AnimalProfileLayout
      commonName="Sheep"
      scientificName="Ovis aries"
      pageTitle={title}
      description={description}
      path="/animals/sheep"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Domestic", "Herbivore"]}
      image={getAnimalImage("sheep") ?? undefined}
      galleryImages={getAnimalGalleryImages("sheep")}
      factsHeaderNote="This page covers the domestic sheep (Ovis aries). Hundreds of breeds exist and farm contexts vary by region. Educational only — not husbandry or veterinary advice."
      overview={
        <>
          <p>
            The domestic sheep (<em>Ovis aries</em>) is a woolly ruminant kept
            worldwide as livestock and one of the earliest animals
            domesticated for agriculture. Sheep are raised primarily for wool,
            meat, and milk, and there are hundreds of breeds adapted to
            different climates and purposes. They are best known for their
            strong flocking instinct and their fleece.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Sheep are farm and rangeland animals found on every inhabited
            continent. Different breeds suit different environments, from cool,
            wet uplands to dry rangeland, and some hardy breeds graze rough
            hill pasture with little shelter. Their distribution is a product
            of human agriculture rather than a natural range, and management
            differs widely between extensive and intensive systems.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Sheep are ruminant grazers that feed mainly on grass and other
            low-growing forage, cropping vegetation close to the ground. Like
            other ruminants they ferment plant material in a multi-chambered
            stomach and chew the cud. On farms, grazing may be supplemented
            with hay, silage, or feed, particularly in winter or during
            breeding; specific regimes vary by region and flock.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Sheep are highly social and have a strong flocking instinct,
            staying close together for safety as prey animals. They follow one
            another readily and can become stressed when isolated. Research
            has shown sheep can recognise individual faces of other sheep and
            of humans. Flock movement, vocal contact between ewes and lambs,
            and following behaviour are central to how sheep are managed.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Sheep farming is one of the oldest and most widespread forms of
            animal agriculture, supplying wool, meat, milk, and shaping many
            rural landscapes through grazing. As a domestic species, sheep are
            not given a wild conservation status; relevant issues are welfare,
            breed conservation, and grazing management. This page is
            educational and is not a substitute for qualified husbandry or
            veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Sheep are stocky ruminants typically covered in a thick wool
                fleece, though some breeds grow hair instead. Many breeds are
                naturally polled (hornless), while others have curling horns,
                usually most prominent in rams. Faces and legs are often free
                of wool and may be white, brown, or black depending on breed.
                Most domestic sheep require shearing because, unlike their wild
                ancestors, they do not shed their fleece naturally.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Sheep and goats are closely related domestic ruminants in the family
          Bovidae and are often compared, but they differ in feeding style,
          tail carriage, and coat. Sheep are also related to wild sheep such as
          the mouflon, argali, and bighorn sheep, which are separate species
          with their own ranges and behaviour.
        </p>
      }
      faqs={[
        {
          question: "Why do sheep flock together?",
          answer:
            "Sheep are prey animals, and staying in a tight group is a natural anti-predator strategy. The flocking instinct means individuals follow the group and can become stressed when separated, which is why low-stress handling keeps flocks calm and moving together.",
        },
        {
          question: "Do all sheep need shearing?",
          answer:
            "Most wool breeds do, because selective breeding has produced fleece that grows continuously rather than shedding. Without shearing, the fleece can become heavy and cause welfare problems. Some hair breeds and primitive breeds shed naturally and need little or no shearing.",
        },
        {
          question: "Are sheep wild animals?",
          answer:
            "Domestic sheep are a domesticated species, not wildlife. They descend from wild sheep of Eurasia. Feral populations exist in a few places, but the farm sheep is domestic.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ovis aries" },
        { label: "Family", value: "Bovidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Status", value: "Domesticated livestock" },
        { label: "Diet", value: "Herbivore (ruminant grazer)" },
        { label: "Social structure", value: "Strong flocking instinct" },
        { label: "Distribution", value: "Worldwide on farms and rangeland" },
      ]}
      relatedLinks={[
        { label: "Goat Profile", href: "/animals/goat", description: "The other classic small farm ruminant" },
        { label: "Cow Profile", href: "/animals/cow" },
        { label: "Horse Profile", href: "/animals/horse" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.sheep}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
