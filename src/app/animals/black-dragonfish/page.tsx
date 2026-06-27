import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/black-dragonfish";
const TITLE = "Black Dragonfish (Idiacanthus): Deep-Sea Barbeled Predator";
const DESC =
  "Meet the black dragonfish (genus Idiacanthus), a slender deep-sea predator with a glowing chin barbel, extreme sex differences, and stalk-eyed larvae.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("black-dragonfish"),
});

export default function BlackDragonfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Black Dragonfish"
      scientificName="genus Idiacanthus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Marine fish","Deep sea","Bioluminescent"]}
      image={getAnimalImage("black-dragonfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("black-dragonfish")}
      sources={ANIMAL_SOURCES["black-dragonfish"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Black dragonfish (genus <em>Idiacanthus</em>, in the barbeled dragonfish family Stomiidae) are slender, dark, deep-sea predatory fish built for life in near-total darkness. They are perhaps best known for their fang-like teeth and their many light organs, called photophores, including a luminous barbel that hangs from the chin of females and is thought to work as a lure. The Pacific blackdragon (<em>Idiacanthus antrostomus</em>) is a familiar representative of the group, with its long, ribbon-like, deeply pigmented body.
          </p>
          <p>
            One of the most striking things about these fish is how different individuals can look depending on sex and life stage. Females are long, dark, and well-armed with teeth; males stay small, lack functional jaws and a working gut, and do not feed as adults, with their role focused on reproduction. The larvae are remarkable in their own right, famously carrying their eyes on long stalks that are later reabsorbed as the young fish develops. Some related dragonfishes can both produce and detect red light, which is nearly invisible to most other deep-sea animals, effectively giving them a private searchlight in the dark.
          </p>
          <p>
            Note: Much about black dragonfishes remains uncertain, and they are known mainly from preserved specimens and limited expedition footage rather than from sustained observation of living animals. Details of behaviour, range, and the exact depths they occupy vary by species, region, and source. Readers should treat any specific figures with care and check them against authoritative marine references such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, or WoRMS.
          </p>
        </>
      }
      habitat={
        <p>
          Black dragonfishes are animals of the deep open ocean, commonly associated with the mesopelagic and extending into the bathypelagic zone, far below the sunlit surface. Rather than living on the seafloor, they inhabit the open midwater, a vast, cold, dark, and food-limited environment. Females are reported to migrate upward toward shallower water at night to hunt, then return to deeper water by day, a pattern of vertical movement seen in many midwater animals. Depth zones are best understood as educational frameworks rather than rigid boundaries, and the precise range can differ between species and regions, so it is most accurate to describe these fish as deep-sea midwater predators rather than as residents of a single fixed depth.
        </p>
      }
      diet={
        <p>
          Female black dragonfishes are active predators, equipped with large, fang-like teeth suited to seizing prey in the dark midwater, where meals are scarce and unpredictable. The glowing barbel beneath the chin is generally interpreted as a lure to draw prey within reach, a common strategy among barbeled dragonfishes. In an environment where food is encountered only occasionally, such adaptations help a hunter make the most of each opportunity. Adult males, by contrast, lack functional jaws and a working gut and are not thought to feed, so the feeding role within the species falls almost entirely to the females.
        </p>
      }
      behavior={
        <>
          <p>
            Because these fish are known mainly from specimens and brief footage, much of their behaviour is inferred rather than directly observed. Females appear to undertake nightly upward movements to feed before descending again, consistent with the broad pattern of vertical migration documented in midwater communities. Light production from photophores is thought to play roles in luring prey, and possibly in signalling or camouflage, though the full picture is not well understood for every species. The dramatic differences between long, toothy females, tiny non-feeding males, and stalk-eyed larvae mean that an individual&#39;s appearance and behaviour depend heavily on its sex and stage of life.
          </p>
          <p>
            Life in the deep midwater means coping with darkness, cold, high pressure, and limited food, and black dragonfishes show several adaptations matched to these conditions. Their numerous photophores allow them to generate their own light, and some related dragonfishes can produce and perceive red light that most deep-sea animals cannot see, which may let them illuminate prey without being noticed. Dark pigmentation helps a predator stay hidden in the gloom, while large teeth and a lure-bearing barbel improve the odds of capturing rare prey. The stalked eyes of the larvae and their later reabsorption, along with the reduced, non-feeding adult males, reflect how strongly this lineage is shaped by the demands of a sparse, energy-poor environment.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People very rarely encounter black dragonfishes in the wild, since these are small, deep-living open-ocean fish known largely from net-caught specimens and occasional deep-sea expedition footage. They are not aquarium animals, and there is no meaningful direct interaction between them and humans. Their conservation status is not well assessed, which is typical for deep-sea species whose populations and distributions are difficult to survey. As with much of the deep ocean, our understanding is still developing, and what we know comes mostly from research collections and exploration rather than from watching living animals over time.
        </p>
      }
      faqs={[
        {
          question: "Why do female black dragonfishes have a glowing barbel?",
          answer:
            "The luminous barbel hanging from the chin is generally thought to act as a lure, drawing prey close enough to be caught in the dark midwater. It is one of several light-producing structures, called photophores, found on these fish. Much of this interpretation comes from studying specimens and related species, so some details remain uncertain.",
        },
        {
          question: "Why are male and female black dragonfishes so different?",
          answer:
            "These fish show extreme differences between the sexes. Females grow long, dark, and toothy and act as the predators, while males stay small, lack functional jaws and a working gut, and do not feed as adults. This division means the feeding and hunting role belongs almost entirely to the females.",
        },
        {
          question: "Is it true the larvae have eyes on stalks?",
          answer:
            "Yes. The larvae of black dragonfishes famously carry their eyes on long stalks, which are later reabsorbed as the young fish matures. It is one of the more unusual developmental features known in deep-sea fishes, though it is documented mainly from preserved specimens.",
        },
        {
          question: "How deep do black dragonfishes live?",
          answer:
            "They are deep-sea midwater fish, commonly associated with the mesopelagic and extending into the bathypelagic zone, well below the sunlit surface. Females are reported to migrate upward at night to hunt and return deeper by day. Exact depths vary by species and region, so these ranges are best treated as general frameworks and checked against authoritative marine sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Barbeled dragonfishes (Stomiidae)" },
        { label: "Higher classification", value: "Family Stomiidae; genus Idiacanthus" },
        { label: "Diet", value: "Predatory; females hunt prey in the dark midwater" },
        { label: "Notable trait", value: "Glowing chin barbel in females; stalk-eyed larvae" },
        { label: "Adaptation", value: "Photophores and bioluminescence; some kin use red light" },
        { label: "Habitat", value: "Deep open ocean (midwater), not the seafloor" },
        { label: "Depth association", value: "Deep sea; commonly mesopelagic into bathypelagic" },
        { label: "Conservation status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "Another deep-sea predator" },
        { label: "Lanternfish Profile", href: "/animals/lanternfish", description: "A glowing deep-sea fish" },
        { label: "Hatchetfish Profile", href: "/animals/hatchetfish", description: "A silvery twilight-zone fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
