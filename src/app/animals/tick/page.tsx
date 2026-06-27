import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tick";
const TITLE = "Tick: Facts About These Eight-Legged Arachnid Parasites";
const DESC =
  "Ticks are eight-legged arachnids in the order Ixodida that feed on blood. Learn about their biology, life cycle, questing behaviour, and habitats here.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("tick"),
});

export default function TickPage() {
  return (
    <AnimalProfileLayout
      commonName="Tick"
      scientificName="order Ixodida"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Parasite","Invertebrate"]}
      image={getAnimalImage("tick") ?? undefined}
      galleryImages={getAnimalGalleryImages("tick")}
      sources={ANIMAL_SOURCES.tick}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Ticks are small arachnids in the order Ixodida, and despite often being filed alongside insects, they are not insects at all. As adults they have eight legs and are more closely related to mites, spiders, and scorpions. They live as external parasites, feeding on the blood of mammals, birds, and sometimes reptiles or amphibians, and a tick&#39;s body can swell dramatically once it is engorged with a blood meal.
          </p>
          <p>
            The group is broadly split into hard ticks (family Ixodidae, including genera such as <em>Ixodes</em> and <em>Dermacentor</em>), which carry a hard dorsal shield, and soft ticks (family Argasidae), which lack one. Ticks are best known for a behaviour called &quot;questing,&quot; in which they climb vegetation and wait with their front legs outstretched to grab onto a passing host. They develop through egg, larva, nymph, and adult stages, taking a blood meal at each active stage.
          </p>
          <p>
            Details of tick biology, behaviour, and the diseases some species can transmit vary considerably by species and region, so specific figures should be checked against authoritative sources such as Animal Diversity Web, the Smithsonian, or Britannica. This page is educational and does not provide medical or first-aid advice; for bites, reactions, or disease concerns, contact a qualified medical professional or local health authority.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Ticks belong to the order Ixodida within the class Arachnida, the same broad group that includes mites, spiders, and scorpions. They are not insects: insects have six legs and three body regions, whereas adult ticks have eight legs and a more fused body plan. Within Ixodida, the two main families are the hard ticks (Ixodidae), which include familiar genera such as <em>Ixodes</em> and <em>Dermacentor</em>, and the soft ticks (Argasidae). Their close relationship to mites is reflected in their small size and parasitic lifestyle, though the two groups differ in many details.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Ticks are small, rounded arachnids with eight legs in the adult stage. Hard ticks, such as the American dog tick (<em>Dermacentor variabilis</em>) and members of the genus <em>Ixodes</em>, have a hard dorsal shield, often called a scutum, on the upper surface of the body. Soft ticks (family Argasidae) lack this shield and have a more leathery appearance. A distinctive feature of ticks is how greatly the body swells when engorged with blood, changing from flat and disc-like when unfed to rounded and balloon-like after feeding. Colour, patterning, and size vary by species, life stage, and how recently the tick has fed.
          </p>
        </>
      }
      habitat={
        <p>
          Ticks are associated with a wide range of environments, commonly including grasslands, woodland edges, leaf litter, and vegetation where hosts are likely to pass. Many species favour humid, sheltered microhabitats that help them avoid drying out between meals. The specific habitats, preferred hosts, and geographic ranges differ markedly by tick species and region, and broad generalisations across the group can be misleading. For accurate, locality-specific distribution information, consult authoritative regional and scientific sources rather than assuming all ticks occupy the same settings.
        </p>
      }
      diet={
        <p>
          Ticks are obligate blood feeders, meaning they obtain nutrition by feeding on the blood of vertebrate hosts, including mammals, birds, and sometimes reptiles or amphibians. A tick typically takes one blood meal at each active stage of its life cycle, attaching to a host, feeding over a period of time, and then dropping off. Through this feeding role, ticks form part of the broader ecological web as parasites, and they in turn serve as prey for various birds, reptiles, and other small predators. The range of hosts a given tick uses varies by species and region.
        </p>
      }
      behavior={
        <p>
          A defining tick behaviour is questing, in which the tick climbs onto grass or other vegetation and waits with its front legs outstretched, ready to grasp a host that brushes past. Ticks do not jump or fly; they rely on contact with a passing animal. Their life cycle passes through four stages: egg, larva, nymph, and adult, with a blood meal taken at each active stage to fuel development and, in adults, reproduction. Between meals ticks may remain inactive for extended periods, and the pace and timing of the life cycle vary by species and environmental conditions.
        </p>
      }
      humanInteraction={
        <p>
          People encounter ticks most often in grassy, brushy, or wooded areas where the arachnids quest for hosts. Some tick species can transmit disease-causing microbes to people and animals; which diseases are involved, and the level of risk, vary by tick species and region. It is sensible to avoid handling wild individuals. For bites, reactions, or disease concerns, contact a qualified medical professional or local health authority. This page is educational and does not provide medical, first-aid, or removal advice.
        </p>
      }
      faqs={[
        {
          question: "Are ticks insects?",
          answer:
            "No. Ticks are arachnids in the order Ixodida, more closely related to mites, spiders, and scorpions than to insects. As adults they have eight legs, whereas insects have six. They are filed under the \"insects\" category on many sites for convenience, but biologically they are not insects.",
        },
        {
          question: "What do ticks eat?",
          answer:
            "Ticks are external parasites that feed on the blood of vertebrate hosts, including mammals, birds, and sometimes reptiles or amphibians. They typically take one blood meal at each active life stage. A tick's body swells noticeably as it becomes engorged with blood.",
        },
        {
          question: "What is the difference between hard ticks and soft ticks?",
          answer:
            "Hard ticks belong to the family Ixodidae and have a hard dorsal shield, or scutum, on the upper body; examples include genera such as Ixodes and Dermacentor. Soft ticks belong to the family Argasidae and lack this shield, giving them a more leathery look. The two families also differ in aspects of their feeding and life cycles.",
        },
        {
          question: "Can ticks transmit diseases?",
          answer:
            "Some tick species can transmit disease-causing microbes to people and animals, but which diseases are involved and how much risk exists vary by tick species and region. This page is educational and does not provide medical advice. For bites, reactions, or disease concerns, contact a qualified medical professional or local health authority.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Ticks (order Ixodida), arachnids" },
        { label: "Higher classification", value: "Class Arachnida; families Ixodidae (hard ticks) and Argasidae (soft ticks)" },
        { label: "Diet", value: "Blood of mammals, birds, and sometimes reptiles or amphibians" },
        { label: "Notable trait", value: "\"Quest\" for hosts with front legs outstretched; body swells greatly when engorged" },
        { label: "Habitat", value: "Commonly grassland, woodland edges, and vegetation; varies by species and region" },
        { label: "Distribution", value: "Widespread; specific ranges vary by tick species and region" },
        { label: "Human interaction", value: "Some ticks can transmit disease; risk varies by species and region — seek a medical professional for concerns" },
        { label: "Conservation status", value: "Not assessed as a broad group" },
      ]}
      relatedLinks={[
        { label: "Mite Profile", href: "/animals/mite", description: "Close arachnid relatives of ticks" },
        { label: "Spider Profile", href: "/animals/spider", description: "Another eight-legged arachnid" },
        { label: "Scorpion Profile", href: "/animals/scorpion", description: "An arachnid with pincers and a sting" },
        { label: "Invertebrates (taxonomy)", href: "/animal-taxonomy/invertebrates", description: "How invertebrate groups fit together" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
    />
  );
}
