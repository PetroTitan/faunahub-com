import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-20";

const title = "Elephant — Profile, Habitat, Diet & Behavior";
const description =
  "An overview of African and Asian elephants: anatomy, range, herd structure, diet, and the conservation pressures facing the world's largest land mammals.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/elephant",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("elephant"),
});

export default function ElephantPage() {
  return (
    <AnimalProfileLayout
      commonName="Elephant"
      pageTitle={title}
      description={description}
      path="/animals/elephant"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Megafauna", "Herbivore"]}
      image={getAnimalImage("elephant") ?? undefined}
      factsHeaderNote="Three living species: African savanna, African forest, and Asian elephant. Specific figures cited below note which species they refer to."
      overview={
        <>
          <p>
            &quot;Elephant&quot; refers to three recognised living species: the African savanna
            elephant (<em>Loxodonta africana</em>), the African forest elephant (
            <em>Loxodonta cyclotis</em>) and the Asian elephant (<em>Elephas maximus</em>).
            They are the largest existing land animals and the only surviving members of the
            family Elephantidae. All three species are notable for their highly developed
            social behaviour, long lifespans, and strong evidence of complex cognition.
          </p>
          <p>
            <strong>Conservation note:</strong> All three elephant species are classified as
            threatened on the IUCN Red List, with the African forest elephant generally
            considered the most at risk. Verify current status at iucnredlist.org before
            publication, as classifications have been updated in recent years.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            African savanna elephants occupy a wide range of African habitats including
            savanna, grassland, woodland, and semi-arid environments. African forest elephants
            inhabit the dense tropical rainforests of Central and West Africa. Asian elephants
            are found across a fragmented range in South and Southeast Asia, occupying
            forests, grasslands, and scrub. All three require access to water and large
            ranges of suitable habitat.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Elephants are herbivores. Diet varies by habitat and species but includes grasses,
            leaves, bark, roots, fruits, and other plant matter. A wild adult elephant consumes
            very large quantities of vegetation each day and spends much of its waking time
            feeding. Forest elephants in particular play an important role in seed dispersal
            for many tropical tree species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Female elephants and their offspring live in long-lived, related family groups led
            by an older matriarch whose knowledge of waterholes, migration routes and seasonal
            resources is critical to the group&apos;s survival. Adult males typically live
            outside female groups, sometimes alone and sometimes in loose bachelor groups.
          </p>
          <p>
            Communication includes vocalisations across a very wide frequency range — including
            infrasonic calls below human hearing — together with chemical signals, touch, and
            body posture. Research has documented behaviours interpreted as long-term memory,
            cooperative problem-solving, and responses to the death of group members.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            The principal threats to elephants today include habitat loss and fragmentation,
            human-elephant conflict where settlements and farmland overlap with elephant
            ranges, and poaching for ivory. International ivory-trade restrictions, protected
            areas, and corridor-based landscape management are central to current conservation
            strategy. Asian elephants additionally have a long and complex history of working
            and ceremonial use by humans.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Elephants are immediately recognisable by their long, muscular trunk — a
                fusion of nose and upper lip used for breathing, smelling, drinking, feeding,
                tactile communication, and fine manipulation. African elephants generally have
                a trunk &quot;tip&quot; with two finger-like projections, while Asian elephants
                typically have one. Both groups have large fan-shaped ears, with African
                elephant ears notably larger and roughly shaped like the African continent in
                outline; Asian elephant ears are smaller and rounder.
              </p>
              <p>
                Other distinguishing features include the head shape (African elephants
                have a smoother, single-domed head; Asian elephants have a clearly twin-domed
                head), the back profile (African: dipped or concave; Asian: convex or level),
                and tusks (both sexes of African elephants commonly bear visible tusks; in
                Asian elephants, prominent tusks are typically restricted to some males).
                Skin is thick, deeply wrinkled, and largely hairless, and is often dusted with
                soil or mud as part of thermoregulation and skin care.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Elephants have no close living relatives among large mammals; their closest extant
          relatives are the much smaller hyraxes and the marine sirenians (manatees and
          dugongs). Other large savanna herbivores that share parts of their range include
          rhinoceroses, hippopotamuses, and giraffes.
        </p>
      }
      faqs={[
        {
          question: "How many elephant species exist?",
          answer:
            "Three living species are currently recognised: the African savanna elephant (Loxodonta africana), the African forest elephant (Loxodonta cyclotis) and the Asian elephant (Elephas maximus). Forest and savanna elephants were formerly grouped as one species and were separated based on genetic and morphological evidence.",
        },
        {
          question: "How long do elephants live?",
          answer:
            "In the wild, elephants are long-lived mammals; well-studied individuals have been documented living several decades. Lifespan in captivity often differs from wild lifespan, and figures vary by study. Reliable individual ages are best taken from long-term ecological studies.",
        },
        {
          question: "How big are elephant herds?",
          answer:
            "Female-led family units commonly contain a handful of related adult females and their dependent young. These units may temporarily aggregate into much larger groups at shared resources such as waterholes. Adult males generally do not live in these family groups.",
        },
        {
          question: "Are elephants intelligent?",
          answer:
            "Published research has reported a number of cognitive abilities in elephants, including tool use, mirror self-recognition (in at least some individuals), apparent long-term memory, and complex social behaviours around dying or deceased group members. As with any cognitive research on wild animals, interpretations should be taken from peer-reviewed sources.",
        },
      ]}
      quickFacts={[
        { label: "Living species", value: "3 (African savanna, African forest, Asian)" },
        { label: "Family", value: "Elephantidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Proboscidea" },
        { label: "Diet", value: "Herbivore (grasses, leaves, bark, fruit)" },
        { label: "Social structure", value: "Matriarchal family groups" },
        { label: "Primary habitats", value: "Savanna, forest, grassland, scrub" },
        { label: "Range", value: "Sub-Saharan Africa; South & Southeast Asia" },
        { label: "IUCN Status", value: "All species threatened (verify current status)" },
      ]}
      relatedLinks={[
        { label: "Giraffe Profile", href: "/animals/giraffe", description: "Tallest extant land animal" },
        { label: "Lion Profile", href: "/animals/lion", description: "African savanna apex predator" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Comparisons", href: "/compare" },
      ]}
      sources={ANIMAL_SOURCES.elephant}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
