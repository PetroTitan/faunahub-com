import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Crocodile — Profile, Habitat, Diet & Behavior";
const description =
  "Crocodylidae: the true crocodiles. Tropical and subtropical aquatic predators across multiple continents. Anatomy, ambush hunting, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/crocodile",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function CrocodilePage() {
  return (
    <AnimalProfileLayout
      commonName="Crocodile"
      pageTitle={title}
      description={description}
      path="/animals/crocodile"
      parentCategory="Reptiles"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Crocodilian", "Apex Predator"]}
      factsHeaderNote='"Crocodile" properly refers to species in family Crocodylidae. Alligators, caimans and gharials are related but separate.'
      overview={
        <>
          <p>
            Crocodiles are large reptiles of the family Crocodylidae, part of the broader
            crocodilian group that also includes alligators, caimans, and gharials. They are
            ambush predators with a flattened body plan, long muscular tail, and powerful
            jaws. Crocodylians are the closest living relatives of birds within the broader
            archosaur lineage that also included the dinosaurs.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Crocodile species occupy freshwater and brackish habitats — rivers, lakes,
            wetlands, mangroves — across tropical and subtropical regions of Africa, Asia,
            Australia and the Americas. The saltwater crocodile (<em>Crocodylus porosus</em>)
            is notable for using estuarine and coastal marine habitats and for the very long
            range it can cover at sea.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Crocodiles are carnivorous. Diet shifts with age and size — juveniles feed on
            insects, small fish, frogs and crustaceans, while large adults can take mammals
            and other vertebrates at the water&apos;s edge. The classic ambush strategy
            involves long periods of motionless waiting, followed by a sudden burst of
            speed at the water surface.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Crocodiles are predominantly solitary outside of breeding, although some species
            tolerate close proximity at basking sites or near abundant food. Females exhibit
            parental care: they typically construct or guard a nest, and many species
            transport hatchlings to the water and remain attentive to the young for some
            period.
          </p>
          <p>
            Crocodiles are ectothermic and rely on behavioural thermoregulation. They alter
            their activity levels with temperature and can go long periods without feeding.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Crocodile conservation has involved both protection of populations under serious
            threat — for example several Crocodylus species in Asia and the Americas — and
            management of populations that have recovered to a point where conflict with
            people occurs. Saltwater crocodiles in northern Australia and Nile crocodiles in
            parts of Africa are well-known examples of populations that require careful
            human-wildlife management.
          </p>
        </>
      }
      similarAnimals={
        <p>
          The closest relatives of crocodiles are alligators and caimans (family
          Alligatoridae) and the gharial (family Gavialidae). All three families together
          make up the modern crocodilians.
        </p>
      }
      comparisonCallouts={[
        { href: "/compare/alligator-vs-crocodile", label: "Alligator vs Crocodile" },
      ]}
      faqs={[
        {
          question: "What is the difference between a crocodile and an alligator?",
          answer:
            "Crocodiles (family Crocodylidae) and alligators (family Alligatoridae) are different but related groups. Among the most reliable practical differences are snout shape (crocodiles more V-shaped, alligators more U-shaped) and visible dentition (the fourth tooth of the lower jaw is usually visible when the mouth is closed in crocodiles). Geographic range is also informative — alligators are restricted to a small number of regions.",
        },
        {
          question: "How fast can a crocodile move on land?",
          answer:
            "Crocodiles can move surprisingly fast over short distances on land, particularly when escaping from or charging toward water, but they are not built for sustained running. The widely repeated 'galloping crocodiles' image is partly true for some species (notably some Australian freshwater crocodiles) but is not characteristic of all.",
        },
        {
          question: "Are crocodiles dangerous to humans?",
          answer:
            "Several large species — notably the Nile crocodile and the saltwater crocodile — are capable of and have been responsible for human fatalities. In areas where these species are present, regional guidance about safe behaviour near water is essential.",
        },
        {
          question: "Can crocodiles live in saltwater?",
          answer:
            "Yes. The saltwater crocodile is the most marine-tolerant; it has salt-secreting glands and is regularly recorded in estuaries, mangrove systems, and at sea. Other species may use brackish habitats but are not as marine in habit.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Crocodylidae" },
        { label: "Class", value: "Reptilia" },
        { label: "Order", value: "Crocodilia" },
        { label: "Diet", value: "Carnivore (varies with age and size)" },
        { label: "Social structure", value: "Largely solitary; parental nest care" },
        { label: "Primary habitat", value: "Freshwater, brackish, and some marine" },
        { label: "Range", value: "Tropical and subtropical regions worldwide" },
        { label: "IUCN Status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Alligator Profile", href: "/animals/alligator", description: "Family Alligatoridae" },
        { label: "Alligator vs Crocodile", href: "/compare/alligator-vs-crocodile" },
        { label: "Reptile Encyclopedia", href: "/animal-encyclopedia/reptiles" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
