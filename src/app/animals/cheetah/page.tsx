import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Cheetah — Profile, Habitat, Diet & Behavior";
const description =
  "Acinonyx jubatus: the fastest land animal. Sprint-adapted anatomy, savanna habitats, diurnal hunting, the cheetah's slender build, and conservation pressures.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/cheetah",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function CheetahPage() {
  return (
    <AnimalProfileLayout
      commonName="Cheetah"
      scientificName="Acinonyx jubatus"
      pageTitle={title}
      description={description}
      path="/animals/cheetah"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Cat", "Sprint Predator"]}
      overview={
        <>
          <p>
            The cheetah (<em>Acinonyx jubatus</em>) is the fastest land animal and a wild
            cat distinct in build and behaviour from the &quot;big cats&quot; of genus{" "}
            <em>Panthera</em>. Cheetahs are slender, long-legged, and built for sprinting
            rather than wrestling. They have small heads, semi-retractile claws used to
            improve traction, and a distinctive set of black &quot;tear lines&quot; from the
            inner corner of the eye down the side of the face.
          </p>
          <p>
            <strong>Conservation note:</strong> The cheetah is currently classified as{" "}
            <strong>Vulnerable</strong> on the IUCN Red List (verify current status at
            iucnredlist.org before publication). Some regional populations — notably the
            Asiatic cheetah — are considered Critically Endangered.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Cheetahs are primarily associated with open and semi-open habitats — savanna,
            grassland, light woodland and arid scrub — where their high-speed pursuit
            strategy is most effective. The bulk of the wild population is in sub-Saharan
            Africa, with a very small relict Asiatic cheetah population in Iran.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Cheetahs are predominantly carnivorous and hunt medium-sized antelopes such as
            Thomson&apos;s gazelle and impala, depending on region. They are diurnal hunters
            — using the morning and late afternoon to avoid larger nocturnal competitors
            such as lions and spotted hyenas — and they rely on a short, very high-speed
            chase rather than ambush or endurance pursuit.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Female cheetahs are typically solitary outside of raising cubs. Males may live
            alone or, in some populations, form small coalitions of related individuals.
            Cheetahs lack the vocal apparatus required to roar; they communicate through
            chirps, purrs, and other softer calls.
          </p>
          <p>
            High-speed sprinting carries a metabolic cost, and cheetahs commonly need to rest
            after a successful chase before they can feed. This rest period makes them
            vulnerable to kleptoparasitism — losing the kill to larger predators or
            scavengers.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Conservation pressures on the cheetah include habitat loss, prey depletion,
            conflict with livestock owners, and a long history of illegal trade in cubs.
            Genetic studies have also documented unusually low genetic diversity across the
            species, which has implications for long-term population health.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Cheetahs are often confused with leopards (<em>Panthera pardus</em>) but are
          distinct in build, coat pattern, and behaviour: cheetahs are slimmer, have solid
          round black spots rather than rosettes, and are sprint-adapted diurnal hunters.
        </p>
      }
      comparisonCallouts={[
        { href: "/compare/cheetah-vs-leopard", label: "Cheetah vs Leopard" },
      ]}
      faqs={[
        {
          question: "How fast is a cheetah?",
          answer:
            "Cheetahs are the fastest land animals. Top speeds are commonly cited around 100–115 km/h in short sprints, with the exact peak varying by source and individual. Sprint runs are short — typically a few hundred metres at most — because of the metabolic cost involved.",
        },
        {
          question: "Are cheetahs big cats?",
          answer:
            "Cheetahs are not part of the genus Panthera, which contains the lion, tiger, leopard, jaguar and snow leopard — the cats traditionally called 'big cats'. Cheetahs are placed in their own genus Acinonyx and differ anatomically and behaviourally from those species.",
        },
        {
          question: "Why do cheetahs have tear lines?",
          answer:
            "The distinctive black 'tear lines' on a cheetah's face are most commonly explained as a glare-reduction adaptation that helps the animal hunt in bright daylight, similar in function to the eye-black used by some athletes. Other hypotheses exist; the trait is also visually diagnostic.",
        },
        {
          question: "Can cheetahs roar?",
          answer:
            "No. Cheetahs are not built to roar. They communicate using chirps, purrs, hisses and a range of other vocalisations. Roaring is anatomically restricted to lions, tigers, leopards and jaguars (and is partial in snow leopards).",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Acinonyx jubatus" },
        { label: "Family", value: "Felidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Body type", value: "Slender, sprint-adapted" },
        { label: "Social structure", value: "Solitary females; male coalitions in some populations" },
        { label: "Primary habitat", value: "Savanna, grassland, arid scrub" },
        { label: "Range", value: "Sub-Saharan Africa; small relict population in Iran" },
        { label: "IUCN Status", value: "Vulnerable (verify before publication)" },
      ]}
      relatedLinks={[
        { label: "Leopard Profile", href: "/animals/leopard", description: "Panthera pardus — adaptable spotted cat" },
        { label: "Lion Profile", href: "/animals/lion", description: "Apex predator of African savannas" },
        { label: "Cheetah vs Leopard", href: "/compare/cheetah-vs-leopard" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
