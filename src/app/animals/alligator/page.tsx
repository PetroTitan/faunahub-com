import type { Metadata } from "next";
import Link from "next/link";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-18";

const title = "Alligator — Profile, Habitat, Diet & Behavior";
const description =
  "Alligatoridae: alligators of North America and China. Habitats, ambush hunting, parental nest care, and the differences between alligators and crocodiles.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/alligator",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function AlligatorPage() {
  return (
    <AnimalProfileLayout
      commonName="Alligator"
      pageTitle={title}
      description={description}
      path="/animals/alligator"
      parentCategory="Reptiles"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Crocodilian", "Apex Predator"]}
      factsHeaderNote="Two living alligator species exist: the American alligator and the much rarer Chinese alligator. Caimans are in the same family but a separate genus."
      overview={
        <>
          <p>
            Alligators are crocodilians of the family Alligatoridae. Two living alligator
            species exist: the American alligator (<em>Alligator mississippiensis</em>),
            widely distributed in the southeastern United States, and the much rarer
            Chinese alligator (<em>Alligator sinensis</em>), restricted to a small area in
            eastern China. Caimans, often confused with alligators, are also in family
            Alligatoridae but belong to separate genera and occur in Central and South
            America.
          </p>
          <p>
            <strong>Conservation note:</strong> The American alligator has recovered
            substantially from earlier 20th-century lows and is no longer of major species-
            level conservation concern in much of its range. The Chinese alligator, by
            contrast, is classified as Critically Endangered. Verify current statuses on the
            IUCN Red List before publication.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            American alligators inhabit freshwater wetlands, swamps, slow rivers, and lakes
            across the southeastern United States, particularly Florida and Louisiana. They
            are generally restricted to freshwater and only occasionally enter brackish
            water. The Chinese alligator occupies freshwater wetland habitats in a small
            number of Chinese provinces and is heavily dependent on conservation programmes.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Alligators are carnivorous and opportunistic. Diet shifts substantially with age
            and size — juveniles feed on insects, crustaceans, small fish and amphibians,
            while large adults are capable of taking larger fish, turtles, birds and
            mammals at the water&apos;s edge. As with other crocodilians, they hunt by
            ambush rather than active pursuit.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Alligators are largely solitary outside of breeding but tolerate one another at
            basking sites and abundant food. Females construct mound nests of vegetation and
            mud, defend the nest against intruders, and provide notable parental care after
            hatching — including transporting hatchlings to water in the jaws and remaining
            attentive to the young for an extended period.
          </p>
          <p>
            Alligators are ectothermic and thermoregulate behaviourally, basking to warm up
            and retreating to water or shade to cool. They can survive cold-water conditions
            including the well-known &quot;snorkel up&quot; behaviour through ice, which is
            documented in northern parts of the American alligator&apos;s range.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            The American alligator&apos;s historical recovery is widely cited as a
            conservation success — driven by federal protection, regulated harvest, habitat
            management, and public education. The Chinese alligator, in contrast, depends
            on intensive captive-breeding and habitat-restoration programmes. Both species
            require careful management of human-wildlife interaction where their range
            overlaps with people.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Adult alligators are recognisable by a <strong>broad, rounded U-shaped
                snout</strong> — broader than in most true crocodiles — and by an upper jaw
                that <em>overhangs</em> the lower jaw so that, in most cases, none of the
                lower-jaw teeth are visible when the mouth is closed. The body is heavy and
                muscular, with bony osteoderm armor on the back, less prominent armor on
                the belly, and a strong laterally compressed tail.
              </p>
              <p>
                In the American alligator the adult body is typically dark grey to nearly
                black, while juveniles often show pale yellowish or cream cross-bands that
                fade with age. The much rarer Chinese alligator is generally lighter and
                smaller and rarely seen in the wild. Apparent colour can vary considerably
                with water clarity, light, and surface algae or mud, so colour alone is not
                a reliable diagnostic — snout shape and tooth visibility are more
                trustworthy. For the side-by-side decision between alligator and crocodile,
                see <Link href="/compare/alligator-vs-crocodile">Alligator vs Crocodile</Link>.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Alligators&apos; closest relatives are caimans, also in family Alligatoridae. They
          are also closely related to crocodiles (family Crocodylidae) and the gharial
          (family Gavialidae); together these families make up the modern crocodilians.
        </p>
      }
      comparisonCallouts={[
        { href: "/compare/alligator-vs-crocodile", label: "Alligator vs Crocodile" },
      ]}
      faqs={[
        {
          question: "What's the difference between an alligator and a crocodile?",
          answer:
            "Alligators (family Alligatoridae) and crocodiles (family Crocodylidae) are different but related families. Reliable practical differences include snout shape (alligators more U-shaped, crocodiles more V-shaped) and visible dentition (the fourth lower-jaw tooth is typically visible in crocodiles when the mouth is closed but not in alligators). Range is also informative — alligators are restricted to a small number of regions.",
        },
        {
          question: "Where do American alligators live?",
          answer:
            "American alligators are distributed across the southeastern United States, particularly Florida, Louisiana, Georgia and other Gulf and southeastern Atlantic states. They favour freshwater wetlands, swamps, marshes, slow rivers and lakes.",
        },
        {
          question: "Are alligators endangered?",
          answer:
            "The American alligator is no longer considered of major species-level conservation concern across most of its range, after a substantial mid-to-late 20th-century recovery. The Chinese alligator is classified as Critically Endangered. Verify current statuses on the IUCN Red List before quoting.",
        },
        {
          question: "Can alligators and crocodiles interbreed?",
          answer:
            "No. Alligators and crocodiles belong to different families and are reproductively isolated; documented hybridisation does not occur in the wild and is not biologically expected.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Alligatoridae" },
        { label: "Living alligator species", value: "American and Chinese alligators" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Crocodilia" },
        { label: "Diet", value: "Carnivore (shifts with age and size)" },
        { label: "Social structure", value: "Largely solitary; parental nest care" },
        { label: "Primary habitat", value: "Freshwater wetlands, swamps, slow rivers, lakes" },
        { label: "Range", value: "Southeastern USA; small range in eastern China" },
        { label: "IUCN Status", value: "Varies by species (American: lower concern; Chinese: Critically Endangered)" },
      ]}
      relatedLinks={[
        { label: "Crocodile Profile", href: "/animals/crocodile", description: "Family Crocodylidae" },
        { label: "Alligator vs Crocodile", href: "/compare/alligator-vs-crocodile" },
        { label: "Reptile Encyclopedia", href: "/animal-encyclopedia/reptiles" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
