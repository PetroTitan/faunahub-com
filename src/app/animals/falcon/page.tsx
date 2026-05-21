import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Falcon — Overview of Falcon Species, Habitat & Behavior";
const description =
  "An overview of falcons (family Falconidae): peregrine falcon as a reference species, high-speed aerial hunting, global distribution, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/falcon",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("falcon"),
});

export default function FalconPage() {
  return (
    <AnimalProfileLayout
      commonName="Falcon"
      pageTitle={title}
      description={description}
      path="/animals/falcon"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Raptor", "Aerial Predator"]}
      image={getAnimalImage("falcon") ?? undefined}
      galleryImages={getAnimalGalleryImages("falcon")}
      factsHeaderNote='Reference species for specific details below is the peregrine falcon (Falco peregrinus), the most widely distributed falcon. Other Falco species vary considerably.'
      overview={
        <>
          <p>
            Falcons are diurnal birds of prey in the family Falconidae,
            distinct from the hawks and eagles of family Accipitridae. They
            are characterised by long, pointed wings, a short hooked beak
            with a notch (the &quot;tomial tooth&quot;), and — in many
            species — exceptional flight performance. The peregrine falcon
            (<em>Falco peregrinus</em>) is the most widely distributed and
            commonly cited reference species; the genus <em>Falco</em> also
            includes kestrels, hobbies, gyrfalcons, and many other species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Falcons occupy an extraordinary range of habitats — from arctic
            tundra to tropical forest edge and dense urban environments.
            Peregrine falcons in particular have adapted to nesting on
            tall buildings and bridges in many large cities. Specific range
            and conservation status varies by species; verify on the IUCN
            Red List for any species of interest.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most falcons are predominantly bird-eating predators that hunt
            on the wing, although diet varies by species — kestrels, for
            example, take significant numbers of small mammals and large
            insects. Falcons are renowned for high-speed aerial attacks; the
            peregrine&apos;s diving &quot;stoop&quot; is widely cited as one
            of the fastest sustained movements of any animal.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Falcons are typically territorial during the breeding season
            with strong pair bonds, often returning to the same nest site
            year after year. Outside the breeding season some species are
            highly migratory. Unlike many other raptors, falcons do not
            build their own large stick nests; they use existing ledges,
            scrapes, or other birds&apos; old nests.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Falcons have a long history with humans through the practice of
            falconry. In the 20th century, populations of several falcon
            species — including the peregrine — declined sharply due to
            organochlorine pesticide use (notably DDT), which caused
            eggshell thinning. Bans on these pesticides and large-scale
            captive-breeding programmes have allowed many populations to
            recover, but several falcon species remain threatened. Local
            and international law typically protects wild falcons; any
            interaction should follow national wildlife regulations.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Falcons are often grouped with hawks and eagles under the broad
          label &quot;raptors&quot; but are in a separate evolutionary
          lineage. See <em>falcon-vs-eagle</em> for a structured comparison
          with eagles.
        </p>
      }
      faqs={[
        {
          question: "Is the peregrine falcon really the fastest bird?",
          answer:
            "The peregrine falcon's diving 'stoop' is widely cited as the fastest sustained movement recorded in an animal, with speeds estimated in excess of 300 km/h. Specific figures depend on measurement method and individual bird; cite a primary scientific source if you need an exact figure.",
        },
        {
          question: "Are falcons the same as hawks?",
          answer:
            "No. Falcons (family Falconidae) and hawks (mostly family Accipitridae) are different evolutionary lineages despite some superficial similarities. Recent genetic work places falcons closer to parrots and songbirds than to hawks.",
        },
        {
          question: "Can falcons be kept as pets?",
          answer:
            "Most jurisdictions strictly regulate falcon keeping. Falconry is a long-standing licensed practice in many countries with specific apprenticeship, permitting, and welfare requirements; casual 'pet' keeping is generally not legal. Consult national wildlife authorities and falconry associations.",
        },
        {
          question: "Why did peregrine populations crash in the mid-1900s?",
          answer:
            "Widespread use of organochlorine pesticides, particularly DDT, caused thin eggshells and breeding failure in many raptor species. After DDT bans and captive-breeding reintroductions, peregrine populations have recovered substantially in much of their range. Authoritative summaries are available from reference sources cited on this page.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Peregrine falcon (Falco peregrinus)" },
        { label: "Family", value: "Falconidae" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Carnivore (mostly birds; varies by species)" },
        { label: "Range", value: "Worldwide, all continents except Antarctica" },
        { label: "Notable behaviour", value: "High-speed aerial hunting / diving stoop" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle" },
        { label: "Falcon vs Eagle", href: "/compare/falcon-vs-eagle" },
        { label: "Owl Profile", href: "/animals/owl" },
        { label: "Birds Hub", href: "/animal-encyclopedia/birds" },
      ]}
      sources={ANIMAL_SOURCES.falcon}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
