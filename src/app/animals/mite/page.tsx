import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mite";
const TITLE = "Mite (Acari): The Red Velvet Mite and a Diverse Group";
const DESC =
  "Mites are tiny arachnids in the subclass Acari. Meet the harmless red velvet mite (Trombidium) and learn how diverse and varied this ancient group really is.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("mite"),
});

export default function MitePage() {
  return (
    <AnimalProfileLayout
      commonName="Mite"
      scientificName="subclass Acari"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Invertebrate","Soil life"]}
      image={getAnimalImage("mite") ?? undefined}
      galleryImages={getAnimalGalleryImages("mite")}
      sources={ANIMAL_SOURCES.mite}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Mites are tiny arachnids that belong to the subclass Acari, the same broad group that also contains ticks. They form one of the most diverse and ancient assemblages of arthropods on Earth, with an enormous range of lifestyles. Many mites are free-living predators or scavengers in soil and leaf litter, some live in fresh water, some feed on plants, and some are parasites of animals or live harmlessly on hosts. Most species are microscopic and go entirely unnoticed by people.
          </p>
          <p>
            The reference animal for this page is the bright red velvet mite (genus <em>Trombidium</em> and its relatives), a conspicuous and harmless soil-dwelling predator. Its larvae are parasitic on insects, while the adults hunt small invertebrates and eggs. Unusually for a mite, the velvet mite is large enough to be seen easily with the naked eye, which is why it is one of the few mites people readily recognise.
          </p>
          <p>
            Because &quot;mite&quot; covers such a vast range of species, generalisations do not apply to all of them: only some mites affect people, crops, or animals, and biology varies widely by species and region. Details on this page should be checked against authoritative sources such as the Animal Diversity Web, the Smithsonian, or Britannica. Only some mites can affect human health; for any bite, reaction, or health concern, contact a qualified medical professional or local health authority. This page is educational and does not provide medical or first-aid advice.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Mites are placed in the subclass Acari within the class Arachnida, the arthropod group that also includes spiders, scorpions, and harvestmen. Acari brings together both mites and ticks, but it is not a single tidy lineage so much as a huge and varied collection of related forms. The red velvet mite belongs to the genus <em>Trombidium</em> and its relatives within this assemblage. Because the group is so large and diverse, classification continues to be studied and refined by specialists.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Most mites are microscopic, with rounded, often sac-like bodies and four pairs of legs as adults, like other arachnids. The red velvet mite stands out as an exception: it is comparatively large and clothed in dense, bright red, velvety hairs that make it easy to spot moving across soil or moss. This vivid colouring and plush texture give the velvet mite its common name. Across the wider group, body shape, size, and colour vary enormously by species, so the velvet mite is recognisable but not representative of mites as a whole.
          </p>
        </>
      }
      habitat={
        <p>
          Mites occupy a remarkable breadth of habitats. Many are free-living in soil and leaf litter, where they are among the most abundant small animals; others live in fresh water, on plants, or in close association with animal hosts. The red velvet mite is typically associated with soil and surface litter, where it is often seen after rain. Because the group is so diverse and widely distributed, specific habitat and range details vary by species and region and are best confirmed against authoritative sources rather than generalised.
        </p>
      }
      diet={
        <p>
          Feeding habits across mites are extremely varied. Many soil-dwelling species are predators or scavengers, some feed on plants or fungi, and some live as parasites on animal hosts. The red velvet mite illustrates how a single species can change its role through life: the larvae are parasitic on insects, while the adults are active predators that hunt small invertebrates and consume eggs. As free-living predators and scavengers, many mites contribute to nutrient cycling and the breakdown of organic matter in soil ecosystems.
        </p>
      }
      behavior={
        <p>
          Behaviour and life cycles differ widely among mites, reflecting the diversity of the group. A common pattern includes an egg, a larval stage with three pairs of legs, one or more nymphal stages, and the adult. The red velvet mite follows a striking version of this: its larvae attach to insect hosts, while later stages and adults live independently as ground predators. Velvet mites are often most visible at the surface in damp conditions, particularly after rainfall, when they move about in search of prey.
        </p>
      }
      humanInteraction={
        <p>
          Most mite species are never noticed by people, and the red velvet mite in particular is a harmless soil predator. Because &quot;mite&quot; is such a vast and varied group, generalisations do not apply: only some mites affect people, plants, or animals, and any such effects vary by species and region. It is best to avoid handling wild individuals. For any bite, skin reaction, allergy, or health concern that you think may involve mites, contact a qualified medical professional or local health authority. This page is educational and does not provide medical or first-aid advice.
        </p>
      }
      faqs={[
        {
          question: "Are mites the same as ticks?",
          answer:
            "Mites and ticks both belong to the subclass Acari, so they are closely related arachnids. However, they are not identical, and the two are treated as distinct groups within Acari. Mites are far more diverse and include vast numbers of tiny, free-living species, while ticks are a more specialised group.",
        },
        {
          question: "Is the red velvet mite dangerous to people?",
          answer:
            "The red velvet mite is a harmless soil-dwelling predator and is not considered a threat to people. It is one of the few mites large enough to notice easily. As with any wild animal, it is best simply to observe it rather than handle it.",
        },
        {
          question: "Why are most mites so hard to see?",
          answer:
            "The great majority of mite species are microscopic, which is why people rarely notice them even though they can be extremely abundant in soil and leaf litter. The red velvet mite is an unusual exception because of its comparatively large size and bright colour. Many mites carry out important roles in ecosystems entirely out of sight.",
        },
        {
          question: "Do all mites affect people, plants, or animals?",
          answer:
            "No. Mites are an enormous and diverse group, and only some species affect people, crops, or animals, while most are never noticed. Whether and how a mite interacts with humans varies by species and region. For any health concern you think may involve mites, contact a qualified medical professional or local health authority.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Mites (arachnids)" },
        { label: "Higher classification", value: "Subclass Acari, class Arachnida (with ticks)" },
        { label: "Diet", value: "Varies by species; many are predators or scavengers, some feed on plants or are parasitic" },
        { label: "Notable trait", value: "Vast, ancient, mostly microscopic group; the red velvet mite (Trombidium) is a large, conspicuous exception" },
        { label: "Habitat", value: "Soil, leaf litter, fresh water, plants, and animal hosts; varies by species" },
        { label: "Distribution", value: "Widespread; specifics vary by species and region" },
        { label: "Human interaction", value: "Only some mites affect people; the red velvet mite is harmless. Risk varies by species and region; seek a medical professional for concerns" },
        { label: "Conservation status", value: "Not assessed as a broad group; varies by species" },
      ]}
      relatedLinks={[
        { label: "Tick Profile", href: "/animals/tick", description: "Close relatives of mites in the Acari" },
        { label: "Spider Profile", href: "/animals/spider", description: "Another arachnid" },
        { label: "Scorpion Profile", href: "/animals/scorpion", description: "An arachnid with pincers and a sting" },
        { label: "Invertebrates (taxonomy)", href: "/animal-taxonomy/invertebrates", description: "How invertebrate groups fit together" },
        { label: "Wildlife & Biodiversity", href: "/wildlife" },
      ]}
    />
  );
}
