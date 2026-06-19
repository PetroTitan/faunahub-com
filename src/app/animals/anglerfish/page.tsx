import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/anglerfish";
const TITLE = "Anglerfish — Profile, Glowing Lure, Diet & Deep-Sea Life";
const DESC =
  "Explore deep-sea anglerfish (suborder Ceratioidei): dark-water predators that dangle a glowing, bacteria-powered lure to attract prey, with one of nature's strangest mating systems.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("anglerfish"),
});

export default function AnglerfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Anglerfish"
      scientificName="suborder Ceratioidei (deep-sea anglerfish)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine fish", "Deep sea", "Bioluminescent lure"]}
      image={getAnimalImage("anglerfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("anglerfish")}
      sources={ANIMAL_SOURCES.anglerfish}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Deep-sea anglerfish are among the most iconic animals of the dark ocean.
            Females carry a modified fin spine that acts as a fishing rod, tipped with
            a glowing lure (the <em>esca</em>) that draws prey within reach of an
            enormous, tooth-filled mouth. The reference species here is the humpback
            anglerfish (<em>Melanocetus johnsonii</em>), one of many species in the
            deep-sea anglerfish group.
          </p>
          <p>
            The lure&apos;s light is produced by glowing bacteria living inside it —
            a partnership between the fish and the microbes. Anglerfish live where
            sunlight never reaches and food is scarce, and their bodies are shaped
            entirely around catching whatever passes by.
          </p>
          <p>
            <strong>Note:</strong> deep-sea anglerfish are rarely observed alive, and
            much is known from preserved specimens, so details should be treated as
            general and verified against authoritative marine sources.
          </p>
        </>
      }
      habitat={
        <p>
          Deep-sea anglerfish live in the dark midwater and deep zones of oceans
          worldwide, far below the sunlit surface. This is a vast, cold, food-poor
          environment, and anglerfish are spread thinly through it.
        </p>
      }
      diet={
        <p>
          Anglerfish are ambush carnivores. Rather than chasing prey, a female hangs
          almost motionless and uses her glowing lure to attract fish and
          invertebrates, then engulfs them with a sudden gape. Large mouths,
          expandable stomachs, and long teeth let many species take prey nearly their
          own size — a valuable ability where meals are rare.
        </p>
      }
      behavior={
        <p>
          The most famous feature of deep-sea anglerfish is their extreme mating
          system. In many species the males are tiny compared with the females; a male
          finds a female in the vast dark and, in some species, bites on and fuses to
          her body, becoming a permanent, attached mate that supplies sperm. This
          remarkable adaptation helps solve the problem of finding a partner in the
          enormous, sparsely populated deep sea.
        </p>
      }
      humanInteraction={
        <p>
          Anglerfish are almost never encountered by people except through deep-sea
          trawls, research expeditions, and rare ROV footage, which is why they remain
          so mysterious and capture the public imagination. They are not a fishery
          target, and the broad concern is the health of deep-ocean ecosystems.
          Consult authoritative marine sources for current information.
        </p>
      }
      faqs={[
        {
          question: "How does an anglerfish's glowing lure work?",
          answer:
            "A female anglerfish's lure (the esca) glows because it houses bioluminescent bacteria. The fish and the bacteria live in partnership: the bacteria produce light, and the anglerfish uses that light to attract prey in the dark deep sea. The exact way the fish controls the light is still studied.",
        },
        {
          question: "Why are male anglerfish so small?",
          answer:
            "In many deep-sea anglerfish, males are tiny compared with females. Finding a mate in the vast, dark ocean is extremely hard, so males are specialised for one job — locating a female. In some species the male bites on and fuses to the female, becoming a permanent attached mate that provides sperm.",
        },
        {
          question: "What do anglerfish eat?",
          answer:
            "They are ambush predators that lure prey close with the glowing esca, then engulf it with a large, gaping mouth. With expandable stomachs and long teeth, many anglerfish can swallow prey close to their own size — important where food is scarce.",
        },
        {
          question: "Where do deep-sea anglerfish live?",
          answer:
            "In the dark midwater and deep zones of oceans around the world, far below where sunlight reaches. Because this environment is so hard to study, specific depths and details should be checked against current marine references.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Suborder Ceratioidei (deep-sea anglerfish)" },
        { label: "Reference species", value: "Melanocetus johnsonii" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Diet", value: "Ambush carnivore (lure + large gape)" },
        { label: "Lure light", value: "Bioluminescent bacteria (symbiosis)" },
        { label: "Mating", value: "Tiny males; some fuse to females" },
        { label: "Habitat", value: "Dark deep ocean" },
        { label: "Status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Frilled Shark Profile", href: "/animals/frilled-shark", description: "Another deep-sea predator" },
        { label: "Giant Squid Profile", href: "/animals/giant-squid", description: "A deep-ocean cephalopod" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Dumbo Octopus Profile", href: "/animals/dumbo-octopus", description: "A deep-sea cephalopod" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
