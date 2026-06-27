import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dung-beetle";
const TITLE = "Dung Beetle: Scarabaeinae Beetles That Recycle Dung";
const DESC =
  "Dung beetles, of subfamily Scarabaeinae, roll, tunnel, and bury animal dung — recycling nutrients in African savannas and across most of the world.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("dung-beetle"),
});

export default function DungBeetlePage() {
  return (
    <AnimalProfileLayout
      commonName="Dung Beetle"
      scientificName="subfamily Scarabaeinae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Beetle","Decomposer"]}
      image={getAnimalImage("dung-beetle") ?? undefined}
      galleryImages={getAnimalGalleryImages("dung-beetle")}
      sources={ANIMAL_SOURCES["dung-beetle"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Dung beetles are beetles of the subfamily Scarabaeinae (and related groups) that feed on the dung of other animals, especially large herbivores. Among the best known are the &quot;rollers,&quot; which shape a portion of dung into a ball and roll it away to bury — either as a food store or as a place to lay an egg. Other dung beetles take different approaches: some tunnel directly beneath a dung pat to bury fragments, while others simply live and feed within the dung itself.
          </p>
          <p>
            These insects are quietly important to the ecosystems they inhabit. By burying dung they recycle nutrients back into the soil, improve soil structure, help disperse seeds, and reduce the numbers of flies and parasites that would otherwise breed in surface dung. In African savannas, dung beetles process the waste of elephants, buffalo, and other large grazers. They have also drawn human attention for a long time — the ancient Egyptians revered the scarab — and some species famously orient themselves using the sun, the moon, or even the band of the Milky Way.
          </p>
          <p>
            Dung beetles occur on every continent except Antarctica, with especially high diversity in Africa, but specific ranges, habits, and conservation assessments differ enormously from species to species. The details in this profile describe the group broadly; for any particular species, range, ecology, and status should be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, and museum or university zoology references.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Dung beetles are insects in the order Coleoptera (beetles), and the dung-feeding scarabs are grouped mainly in the subfamily Scarabaeinae within the family Scarabaeidae. The classic ball-rolling beetles include the genus <em>Scarabaeus</em>, the same group celebrated as the sacred scarab in ancient Egypt. The common name &quot;dung beetle&quot; is a behavioural label rather than a single tidy taxon — it spans many genera and species that share the habit of feeding on or breeding in dung, and not all members of Scarabaeidae feed this way.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Dung beetles are typically robust, oval or rounded beetles with hard wing cases (elytra) and stout, spade-like legs adapted for digging and manipulating dung. Many are dark brown or black, though some species are strikingly metallic in green, blue, or bronze. Ball-rolling species such as <em>Scarabaeus</em> often have a broad, toothed front edge to the head and forelegs that work like rakes to gather and pack dung into a sphere. Sizes vary widely across the group, from small species a few millimetres long to large, heavily built beetles; some males bear horns or other projections used in contests over dung and mates.
          </p>
        </>
      }
      habitat={
        <p>
          Dung beetles are found wherever suitable dung is available, which links them closely to the animals that produce it. As a group they occur on every continent except Antarctica, and Africa in particular supports a great diversity of species. Within Africa they are strongly associated with savannas and grasslands grazed by large herbivores, though dung beetles also live in forests, woodlands, and other habitats across parts of the continent. Distribution varies by species rather than spanning the whole continent uniformly, and ranges are shaped by climate, soil type, vegetation, and the presence of dung-producing mammals. For any individual species, the documented native range should be checked against authoritative sources.
        </p>
      }
      diet={
        <p>
          As their name suggests, dung beetles feed primarily on the dung of other animals, particularly that of herbivorous and omnivorous mammals. Adults often consume the nutrient-rich liquid component of fresh dung, while the buried dung balls or masses serve as food for developing larvae. Some species are generalists that use many kinds of dung, whereas others specialise on the droppings of particular animals. A number of related beetles also feed on decaying plant matter, carrion, or fungi, but the dung-feeding habit is the defining feature of the group covered here.
        </p>
      }
      behavior={
        <>
          <p>
            Dung beetles are usually divided by behaviour into rollers, tunnellers, and dwellers. Rollers, such as many <em>Scarabaeus</em> species, sculpt a ball of dung and roll it away from the source before burying it, partly to escape competition at the crowded pat. Tunnellers dig down beneath the dung and drag portions into underground chambers, while dwellers live and breed within the dung itself. In ball-rolling species, a female typically lays an egg inside a buried brood ball; the larva hatches and feeds on the dung from within, then pupates underground before emerging as an adult. Some species are remarkable navigators, using celestial cues — the position of the sun or moon, patterns of polarised light, and even the faint glow of the Milky Way — to roll their balls in a straight line.
          </p>
          <p>
            Dung beetles play a substantial ecological role wherever they are abundant. By rapidly burying dung, they return nitrogen and other nutrients to the soil, aerate and enrich it, and reduce fouling of grazing land. This burial also helps disperse and plant seeds that pass through herbivores, and it removes the breeding material that flies and many parasites depend on, which can lower their numbers. In African savannas, where large herds of elephants, buffalo, antelope, and other grazers produce enormous quantities of dung, dung beetles are key recyclers that keep nutrients cycling through the ecosystem. These contributions make them an often-cited example of the quiet, essential work performed by insects.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Dung beetles are harmless to people and have long been valued by humans, both culturally and practically. The ancient Egyptians revered the scarab as a powerful symbol, and today these insects are widely appreciated for the natural services they provide in recycling waste and maintaining healthy soils. Because they depend on the dung of larger animals, dung beetle communities can be affected by changes in land use, livestock management, and the decline of wild herbivore populations, so they are of interest to conservation and ecological research. Conservation status varies greatly among the many species and is not well assessed for most; for specific species, authoritative sources such as the IUCN Red List should be consulted.
        </p>
      }
      faqs={[
        {
          question: "What do dung beetles do with dung?",
          answer:
            "They feed on it and bury it. Rollers shape a ball of dung and roll it away to bury, tunnellers drag dung into burrows beneath the pat, and dwellers live within the dung. Buried dung often becomes food for their larvae, and the burying itself recycles nutrients into the soil.",
        },
        {
          question: "Why are dung beetles important to ecosystems?",
          answer:
            "By burying dung they return nutrients to the soil, improve and aerate it, help disperse seeds, and reduce the flies and parasites that breed in surface dung. In African savannas they process the waste of large herbivores, making them important recyclers.",
        },
        {
          question: "Is it true dung beetles navigate using the stars?",
          answer:
            "Yes — some species use celestial cues such as the position of the sun or moon, polarised light, and even the band of the Milky Way to roll their dung balls in a straight line away from competition at the dung source.",
        },
        {
          question: "Are dung beetles found only in Africa?",
          answer:
            "No. As a group, dung beetles occur on every continent except Antarctica, though Africa is especially rich in species. The range of any individual species varies, and specific distributions should be checked against authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Beetles (dung-feeding scarabs)" },
        { label: "Higher classification", value: "Subfamily Scarabaeinae, family Scarabaeidae, order Coleoptera" },
        { label: "Diet", value: "Primarily the dung of other animals; larvae feed on buried dung" },
        { label: "Notable trait", value: "Roll, tunnel, or dwell in dung; some navigate by celestial cues" },
        { label: "Habitat", value: "Grasslands, savannas, forests and other habitats where dung is available" },
        { label: "Africa distribution", value: "Diverse across parts of Africa; associated with savannas; varies by species" },
        { label: "Human interaction", value: "Harmless to people; revered in ancient Egypt; valued for nutrient recycling" },
        { label: "Conservation status", value: "Varies by species; not well assessed for most" },
      ]}
      relatedLinks={[
        { label: "Beetle Profile", href: "/animals/beetle", description: "Beetles more broadly" },
        { label: "Termite Profile", href: "/animals/termite", description: "Another key recycler" },
        { label: "Ant Profile", href: "/animals/ant", description: "A social insect" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
