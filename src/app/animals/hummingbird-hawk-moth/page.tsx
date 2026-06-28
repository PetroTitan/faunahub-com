import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hummingbird-hawk-moth";
const TITLE = "Hummingbird Hawk-moth: Hovering Day-Flier";
const DESC =
  "The hummingbird hawk-moth (Macroglossum stellatarum) is a day-flying moth that hovers at flowers like a hummingbird. A nectar feeder and flower visitor.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("hummingbird-hawk-moth"),
});

export default function HummingbirdHawkMothPage() {
  return (
    <AnimalProfileLayout
      commonName="Hummingbird Hawk-moth"
      scientificName="Macroglossum stellatarum"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Moth","Pollinator","Day-flying"]}
      image={getAnimalImage("hummingbird-hawk-moth") ?? undefined}
      galleryImages={getAnimalGalleryImages("hummingbird-hawk-moth")}
      sources={ANIMAL_SOURCES["hummingbird-hawk-moth"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The hummingbird hawk-moth (<em>Macroglossum stellatarum</em>) is a day-flying moth in the hawk moth family, Sphingidae. It is best known for hovering in front of flowers and probing them with a long proboscis while its wings beat rapidly enough to produce an audible hum. This combination of behaviors gives it a striking resemblance to a small hummingbird, but it is an insect, not a bird, and the likeness is a case of convergent evolution rather than close relationship.
          </p>
          <p>
            Unlike many moths, which are active at dusk or after dark, the hummingbird hawk-moth flies readily in daylight and even bright sunshine, which makes it one of the more frequently noticed hawk moths across its range. It is a strong, agile flier and a seasonal migrant in parts of Eurasia, sometimes appearing well north of where it can survive cold winters.
          </p>
          <p>
            As an adult, it visits flowers and feeds on nectar, so it is often discussed as a flower visitor and possible pollinator. Its actual effectiveness as a pollinator varies with the plant and the situation, and is less thoroughly documented than for some long-tongued nocturnal hawk moths.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The hummingbird hawk-moth is the insect species <em>Macroglossum stellatarum</em>, placed in the family Sphingidae (hawk moths or sphinx moths) within the order Lepidoptera, the moths and butterflies. The genus name <em>Macroglossum</em> refers to the long &quot;tongue&quot; (proboscis) characteristic of these moths. It is one of many hawk moth species worldwide; the family Sphingidae includes both day-flying and nocturnal members, and not all of them feed as adults. The common name describes its hummingbird-like hovering and is shared loosely with some unrelated moths, so the scientific name is the most reliable way to identify this particular species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a stout, medium-sized moth with a thick, somewhat furry body and a wingspan generally in the range of about 4 to 5 centimeters. The forewings are grey-brown, while the hindwings are a warm orange that becomes visible in flight. The abdomen is broad and ends in a fan of dark and pale scales that can spread out, somewhat resembling a bird&#39;s tail. At rest the wings fold back over the body, but in flight the wings blur with rapid beats. A long, coiled proboscis, which it extends to reach into flowers, is one of the species&#39; most distinctive features.
          </p>
        </>
      }
      habitat={
        <p>
          The hummingbird hawk-moth occurs widely across the Palearctic, including much of Europe, North Africa, and temperate and subtropical parts of Asia. It is associated with open, flower-rich habitats such as meadows, gardens, scrub, woodland edges, coastlines, and other sunny places where nectar plants grow. Because the species migrates, individuals can be seen seasonally well beyond the areas where it breeds or overwinters, including farther north in Europe during warmer months. The precise limits of its breeding range, overwintering range, and migratory reach vary year to year and by region, so distribution is best described in general terms rather than as fixed borders.
        </p>
      }
      diet={
        <p>
          Adult hummingbird hawk-moths feed on flower nectar, which they reach by hovering in front of a bloom and unrolling their long proboscis, rather than landing on the flower. They visit a wide variety of tubular and open flowers and are often seen working quickly from one blossom to the next. The caterpillars have a different diet: they feed on the foliage of host plants, particularly bedstraws (<em>Galium</em>) and related plants in the family Rubiaceae. This split between a nectar-feeding adult and a leaf-feeding larva is typical of many moths and butterflies.
        </p>
      }
      behavior={
        <>
          <p>
            The hummingbird hawk-moth is most active in daylight and is a fast, maneuverable flier that can hover, dart sideways, and hold position in front of a flower, even in wind. It has well-developed vision and has been studied for its ability to learn and discriminate flower colors, which helps it locate rewarding blooms. Over its life cycle, eggs are laid on or near host plants, the caterpillars feed and grow through several stages, and they then pupate before emerging as adults. The number of generations in a year depends on climate and location, with more generations possible in warmer areas. Adults of some populations can survive cooler periods in sheltered spots, and the species is well known for its long-distance seasonal movements.
          </p>
          <p>
            Within its food web, the hummingbird hawk-moth is one of many insects that link plants and animals: as a caterpillar it is a plant-feeder and a potential food source for predators and parasites, and as an adult it is a mobile nectar feeder that interacts with flowering plants. Its hovering, day-flying habits and migratory movements mean a single individual may visit flowers across a wide area and over considerable distances. Like other flower-visiting insects, it forms part of the broader community of pollinators and herbivores, but its specific ecological importance differs from place to place and should not be generalized into a single fixed role.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The hummingbird hawk-moth is harmless to people: it has no sting, and as a nectar feeder it poses no threat to humans. It is often welcomed as a charismatic visitor to flowers and is frequently mistaken at first glance for a tiny hummingbird because of its hovering flight and humming wingbeat. Observing it from a short distance is usually easy, since it can be approachable while feeding. This profile is educational and does not offer advice on handling, attracting, controlling, or keeping insects; for any wildlife concern, contact local authorities or a qualified professional.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              As a nectar-feeding flower visitor, the hummingbird hawk-moth can pick up and carry pollen as it moves among blooms, so it is reasonably described as a potential pollinator of some plants. However, it typically hovers rather than landing, and contact with a flower&#39;s reproductive parts depends on the flower&#39;s shape and on the moth&#39;s behavior, so not every visit results in effective pollination. Its role as a pollinator varies by plant species and region and is less well documented than for certain long-tongued, night-flying hawk moths that are known to pollinate deep, tubular flowers. It is most accurate to call it a flower visitor that can contribute to pollination for some plants, rather than to assign it a fixed or major pollination role across its range.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              The hummingbird hawk-moth is a widespread and familiar species across much of its range, and it is not generally regarded as being of special conservation concern in the way some rarer or more localized insects are. That said, conservation assessments are made at the species level, can change over time, and may differ between countries or regions; population status for insects is also influenced by factors such as habitat and climate. For the current status of this or any species, consult an authoritative source such as the IUCN Red List or relevant national and regional assessments rather than treating any status as fixed.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is the hummingbird hawk-moth a bird or an insect?",
          answer:
            "It is an insect, a moth in the family Sphingidae, not a bird. Its resemblance to a hummingbird, including hovering flight and a humming sound, is an example of convergent evolution, where unrelated animals independently evolve similar traits. True hummingbirds are birds restricted to the Americas, while this moth is found across Eurasia and North Africa.",
        },
        {
          question: "Does the hummingbird hawk-moth sting or harm people?",
          answer:
            "No. The hummingbird hawk-moth has no sting and is harmless to humans. As an adult it feeds only on flower nectar. It is often noticed precisely because it hovers at flowers in daylight and can be approached fairly closely while feeding.",
        },
        {
          question: "Does the hummingbird hawk-moth pollinate flowers?",
          answer:
            "It is a nectar-feeding flower visitor that can carry pollen between blooms, so it may help pollinate some plants. Because it usually hovers rather than landing, not every visit transfers pollen effectively, and its pollination role varies by plant and region. It is best described as a possible pollinator of some plants rather than a major one everywhere.",
        },
        {
          question: "What does the hummingbird hawk-moth eat?",
          answer:
            "Adults feed on flower nectar, which they sip with a long proboscis while hovering. The caterpillars feed on the leaves of host plants, especially bedstraws in the genus Galium and related plants in the family Rubiaceae.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Macroglossum stellatarum (family Sphingidae, hawk moths)" },
        { label: "Pollinator group", value: "Moth (a day-flying hawk moth)" },
        { label: "Pollination role", value: "Flower visitor that can act as a pollinator of some plants; effectiveness varies and not every visit pollinates" },
        { label: "Range", value: "Widespread across the Palearctic (Europe, North Africa, temperate and subtropical Asia); a seasonal migrant" },
        { label: "Diet / feeding", value: "Adults feed on nectar by hovering; caterpillars feed on bedstraws (Galium) and related Rubiaceae" },
        { label: "Conservation note", value: "Widespread and familiar; status is assessed per species and can change. Consult the IUCN Red List or regional assessments for current status" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Hawk Moth", href: "/animals/hawk-moth", description: "The hawk moth family" },
        { label: "Moth", href: "/animals/moth", description: "Moths as a group" },
        { label: "Hummingbird", href: "/animals/hummingbird", description: "The bird it resembles" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
