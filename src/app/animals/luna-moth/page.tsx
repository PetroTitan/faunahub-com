import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/luna-moth";
const TITLE = "Luna Moth (Actias luna): Facts & Field Guide";
const DESC =
  "Learn about the luna moth (Actias luna), a large pale green silk moth of eastern North American forests, with long trailing tails and a brief adult life.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("luna-moth"),
});

export default function LunaMothPage() {
  return (
    <AnimalProfileLayout
      commonName="Luna Moth"
      scientificName="Actias luna"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Silk moth","Forest"]}
      image={getAnimalImage("luna-moth") ?? undefined}
      galleryImages={getAnimalGalleryImages("luna-moth")}
      sources={ANIMAL_SOURCES["luna-moth"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The luna moth (<em>Actias luna</em>) is one of the most recognizable large moths found in parts of eastern North America. A member of the silk moth family Saturniidae, it is known for its broad, pale green wings, sweeping hindwing tails, and distinctive eyespots. The species is harmless to people and is most often noticed at night, when adults may be drawn to outdoor lights.
          </p>
          <p>
            Much of the luna moth&#39;s appeal comes from its delicate, short-lived adult stage. Adults emerge with only vestigial mouthparts and do not feed, surviving on energy stored during the caterpillar stage. This brief adulthood, lasting roughly a week, is devoted almost entirely to finding a mate and, for females, laying eggs.
          </p>
          <p>
            Though widely admired, the luna moth has not been formally assessed by the IUCN Red List, and no special conservation category should be assumed for it. This profile is purely educational and focuses on the moth&#39;s biology, ecology, and place within forest ecosystems of eastern North America.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The luna moth&#39;s scientific name is <em>Actias luna</em>, placing it within the genus <em>Actias</em> and the family Saturniidae, a group commonly called the giant silk moths or saturniids. Saturniids are insects (class Insecta) in the order Lepidoptera, which includes both moths and butterflies. As an invertebrate, the luna moth has no internal skeleton and instead relies on a hardened exoskeleton. It is a true moth, not a butterfly, and is related to other large North American silk moths such as the polyphemus and cecropia moths.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult luna moths are large and pale green, with a wingspan that makes them among the more striking moths a person may encounter at night. Each hindwing extends into a long, trailing tail, and the wings carry eyespots that stand out against the soft green coloration. The leading edges of the forewings are often bordered in a darker tone, and the body is fuzzy and pale. Males and females can be distinguished by their antennae, with males typically having broader, more feathery antennae used to detect mates. The overall combination of green color, trailing tails, and eyespots makes the species relatively easy to recognize.
          </p>
        </>
      }
      habitat={
        <p>
          The luna moth is associated with deciduous and mixed hardwood forests in parts of eastern North America, where its caterpillars&#39; host trees grow. It is generally tied to wooded areas and forest edges rather than open or treeless landscapes. Its presence in a given area depends on suitable hardwood trees and habitat conditions, and it should not be assumed to occur uniformly across the whole region. As a nocturnal insect, it is encountered far more often by night than by day, sometimes near artificial lights at the edges of forested areas.
        </p>
      }
      diet={
        <p>
          Feeding in the luna moth happens almost entirely during the larval, or caterpillar, stage. The caterpillars feed on the leaves of various hardwood trees, with the specific host plants varying across the moth&#39;s range. By eating steadily and growing through several stages, the caterpillar stores the energy reserves it will rely on for the rest of its life. Adult luna moths, by contrast, have only vestigial mouthparts and do not feed at all; they neither eat nor drink during their brief adult lives.
        </p>
      }
      behavior={
        <>
          <p>
            The luna moth is nocturnal and passes through a complete life cycle of egg, caterpillar, pupa, and adult. After hatching, caterpillars feed and grow on host tree foliage before spinning a silken cocoon in which they pupate. When adults emerge, they live only about a week, a span devoted chiefly to reproduction; males locate females using their feathery antennae to sense chemical signals. Because adults do not feed, their behavior centers on mating and, for females, depositing eggs on suitable host plants before the short adult stage ends.
          </p>
          <p>
            As both caterpillar and adult, the luna moth is part of forest food webs in the areas where it occurs. The leaf-eating caterpillars are one of many herbivores that consume tree foliage, while the moths and their larvae serve as food for birds, bats, small mammals, and other predators. The eyespots and tails of the adults are widely thought to play a role in deflecting or confusing predators. In this way the species contributes to the broader cycling of energy through eastern North American forest ecosystems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The luna moth is harmless to people; it does not bite, sting, or carry venom, and it poses no danger to humans or pets. People most often interact with it simply by observing it resting near outdoor lights or in wooded areas, where it can be appreciated without handling. The species has not been formally assessed by the IUCN Red List, so no specific conservation status should be assigned to it, though general concerns about habitat loss and light pollution apply to many night-flying insects. Anyone who finds a moth in distress or has questions about local insect populations can contact local wildlife or natural resource authorities for guidance.
        </p>
      }
      faqs={[
        {
          question: "Is the luna moth dangerous to humans?",
          answer:
            "No. The luna moth is harmless to people and pets; it does not bite, sting, or carry venom. It can be observed safely and does not need to be handled.",
        },
        {
          question: "Why don't adult luna moths eat?",
          answer:
            "Adult luna moths have only vestigial mouthparts and cannot feed. They survive about a week on energy stored during the caterpillar stage, focusing that time on finding a mate.",
        },
        {
          question: "Where are luna moths found?",
          answer:
            "Luna moths are associated with hardwood and mixed forests in parts of eastern North America. Their presence depends on suitable host trees and habitat, so they do not occur uniformly across the whole region.",
        },
        {
          question: "What is the conservation status of the luna moth?",
          answer:
            "The luna moth has not been formally assessed by the IUCN Red List, so no specific conservation category should be assumed for it. As with many night-flying insects, broad concerns such as habitat loss and light pollution may be relevant.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Actias luna" },
        { label: "Animal group", value: "Invertebrate (insect, moth)" },
        { label: "Family", value: "Saturniidae (giant silk moths)" },
        { label: "Size", value: "Large moth with broad wings and long hindwing tails" },
        { label: "Diet", value: "Caterpillars eat hardwood tree leaves; adults do not feed" },
        { label: "Habitat", value: "Hardwood and mixed forests" },
        { label: "Range", value: "Parts of eastern North America" },
        { label: "Conservation status", value: "Not formally assessed by the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Moth Profile", href: "/animals/moth", description: "Moths more broadly" },
        { label: "Monarch Butterfly", href: "/animals/monarch-butterfly", description: "A North American butterfly" },
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "Butterflies, for contrast" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
