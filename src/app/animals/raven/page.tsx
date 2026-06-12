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

const title = "Raven — Profile, Habitat, Diet & Behavior";
const description =
  "The common raven (Corvus corax): an educational profile of this large, intelligent corvid — appearance, wide range, omnivorous diet, and behaviour, with crow comparison.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/raven",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("raven"),
});

export default function RavenPage() {
  return (
    <AnimalProfileLayout
      commonName="Raven"
      scientificName="Corvus corax"
      pageTitle={title}
      description={description}
      path="/animals/raven"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Corvid", "Wild"]}
      image={getAnimalImage("raven") ?? undefined}
      galleryImages={getAnimalGalleryImages("raven")}
      factsHeaderNote="This page focuses on the common raven (Corvus corax), the largest of the all-black corvids. It is larger than the crow, which is covered separately."
      overview={
        <>
          <p>
            The common raven (<em>Corvus corax</em>) is a large, all-black bird
            in the corvid family and one of the most widespread of all birds,
            found across the Northern Hemisphere. It is closely related to the
            crow but noticeably larger, with a heavier bill and shaggy throat
            feathers. Ravens are renowned for their intelligence, acrobatic
            flight, and prominent place in mythology and folklore worldwide.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Ravens occupy an exceptionally wide range of habitats — forests,
            mountains, coasts, deserts, tundra, farmland, and towns — across
            North America, Europe, Asia, and North Africa. They are adaptable
            and can live from sea level to high mountains. This broad tolerance
            is one reason the common raven is so widely distributed.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Ravens are opportunistic omnivores and scavengers. Their diet may
            include carrion, small animals, eggs, insects, grain, fruit, and
            human food waste. They are resourceful foragers and will cache food.
            Diet varies with habitat and season; this page describes general
            feeding ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Ravens are highly intelligent and have been studied for
            problem-solving, planning, and complex social behaviour. They are
            strong, acrobatic fliers that perform rolls and tumbles, and they
            produce a wide range of deep, croaking calls. Ravens often form
            long-term pair bonds and hold territories, while younger birds may
            gather in groups. Behaviour is rich and varied.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Ravens are wild birds, not pets, and are protected by wildlife law
            in many regions. They appear across human cultures as symbols of
            intelligence, mystery, and more. The common raven is widespread and
            generally not of conservation concern, though local situations vary
            and status should be checked against current sources. Do not disturb
            nests or roosts, and contact a licensed wildlife rehabilitator or
            local authority for any injured wild bird.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The common raven is a large, entirely glossy-black bird with a
                heavy, slightly curved bill, shaggy feathers on the throat
                (&quot;hackles&quot;), and a distinctive wedge-shaped tail seen in
                flight. It is considerably larger than a crow and gives a deep,
                resonant croak rather than the crow&apos;s higher caw. Size, bill
                shape, throat hackles, tail shape, and voice together separate
                ravens from crows.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The raven is a corvid, the same family as the crow covered separately
          on FaunaHub, along with jays and magpies. The crow is the bird most
          often confused with the raven; the raven is larger with a wedge-shaped
          tail and deeper call.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "How can I tell a raven from a crow?",
          answer:
            "Ravens are larger than crows, with a heavier bill, shaggy throat feathers, a wedge-shaped tail (versus the crow's fan-shaped tail), and a deeper, croaking call. Watching size, tail shape, and listening to the voice are the most reliable ways to tell them apart.",
        },
        {
          question: "Are ravens intelligent?",
          answer:
            "Ravens are among the most studied birds for cognition, with research documenting problem-solving, planning, and complex social behaviour. They are widely regarded as highly intelligent, alongside other corvids.",
        },
        {
          question: "Are ravens rare?",
          answer:
            "The common raven is one of the most widespread birds in the world and is generally not of conservation concern, though local situations vary. As always, check current sources such as the IUCN Red List for specific status rather than assuming.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Corvus corax" },
        { label: "Family", value: "Corvidae (corvids)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Opportunistic omnivore / scavenger" },
        { label: "Notable trait", value: "High intelligence; very wide range" },
        { label: "Conservation", value: "Widespread — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Crow Profile", href: "/animals/crow", description: "The smaller corvid relative" },
        { label: "Hawk Profile", href: "/animals/hawk" },
        { label: "Birdwatching Hub", href: "/birdwatching" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.raven}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
