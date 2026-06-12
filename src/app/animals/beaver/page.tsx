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

const title = "Beaver — Profile, Habitat, Diet & Behavior";
const description =
  "Beavers are large, dam-building rodents and keystone wetland engineers. A group-level overview using the North American beaver as a reference species.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/beaver",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("beaver"),
});

export default function BeaverPage() {
  return (
    <AnimalProfileLayout
      commonName="Beaver"
      pageTitle={title}
      description={description}
      path="/animals/beaver"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Herbivore"]}
      image={getAnimalImage("beaver") ?? undefined}
      galleryImages={getAnimalGalleryImages("beaver")}
      factsHeaderNote="There are two beaver species — North American and Eurasian. The reference species below is the North American beaver (Castor canadensis); the Eurasian beaver is similar but distinct."
      overview={
        <>
          <p>
            Beavers are large, semi-aquatic rodents famous for building dams
            and lodges. There are two species: the North American beaver
            (<em>Castor canadensis</em>) and the Eurasian beaver
            (<em>Castor fiber</em>). This page uses the North American beaver
            as a reference. Beavers are widely described as &quot;ecosystem
            engineers&quot; because their dam-building reshapes streams into
            ponds and wetlands that benefit many other species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Beavers live in and around fresh water — streams, rivers, ponds,
            and wetlands — usually in wooded areas that supply the trees and
            shrubs they use for food and construction. By damming watercourses
            they create their own ponds, within which they build lodges for
            shelter. Their range covers much of North America and, following
            reintroductions, expanding parts of Europe and Asia.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Beavers are herbivores. They feed on the bark, leaves, twigs, and
            buds of trees and shrubs such as willow, aspen, and birch, and on
            aquatic and herbaceous plants in summer. They fell trees with their
            powerful incisors both to eat and to build, and in colder regions
            they cache branches underwater to feed on through winter.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Beavers live in family groups (colonies) and are mainly active from
            dusk into the night. They are industrious builders, constructing
            and maintaining dams and lodges, and they store food for winter.
            Beavers communicate with scent marks and warn of danger by slapping
            the water with their broad, flat tails. Their constant
            tree-felling and damming continuously reshapes their local
            waterway.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Beavers were historically trapped extensively for fur, which
            greatly reduced their numbers, but both species have recovered in
            many areas and are increasingly valued for the wetlands they
            create, which can store water and support biodiversity. Their
            dam-building can also conflict with human land and water use.
            Conservation status should be checked against current sources; both
            species are now generally widespread but locally managed.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Beavers are heavy-bodied rodents with dense, waterproof brown
                fur, small ears and eyes, large orange-tinted incisors, webbed
                hind feet for swimming, and a distinctive broad, flat, scaly
                tail. They are the largest rodents in the Northern Hemisphere.
                The two species are very similar in appearance and are most
                reliably told apart by range and technical features rather than
                by eye.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Beavers are rodents, the same broad group as the guinea pig and
          hamster covered elsewhere on FaunaHub, though far larger. In the
          water they can be confused with otters or the smaller muskrat, but
          beavers are bulkier and have the unique flat tail. The otter, by
          contrast, is a carnivorous mustelid.
        </p>
      }
      faqs={[
        {
          question: "Why do beavers build dams?",
          answer:
            "Beavers dam streams to raise and deepen the water, creating ponds that protect their lodges, give safe underwater access, and provide year-round water near their food supply. The resulting wetlands also benefit many other species, which is why beavers are called ecosystem engineers.",
        },
        {
          question: "What is a beaver's lodge?",
          answer:
            "A lodge is the dome-shaped shelter beavers build from branches and mud, usually with underwater entrances. Inside is a dry chamber above the water line where the family rests and raises young.",
        },
        {
          question: "How many beaver species are there?",
          answer:
            "Two: the North American beaver (Castor canadensis) and the Eurasian beaver (Castor fiber). They look very similar but are separate species with different ranges; this page uses the North American beaver as its reference.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Beavers (genus Castor, 2 species)" },
        { label: "Reference species", value: "North American beaver (Castor canadensis)" },
        { label: "Family", value: "Castoridae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Herbivore" },
        { label: "Ecological role", value: "Wetland ecosystem engineer" },
        { label: "Conservation", value: "Generally widespread — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Otter Profile", href: "/animals/otter", description: "Another semi-aquatic mammal" },
        { label: "Guinea Pig Profile", href: "/animals/guinea-pig" },
        { label: "Hamster Profile", href: "/animals/hamster" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.beaver}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
