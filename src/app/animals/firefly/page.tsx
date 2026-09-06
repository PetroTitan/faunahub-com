import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/firefly";
const TITLE = "Firefly — Profile, Bioluminescence, Flash Signals & Habitat";
const DESC =
  "Explore fireflies (Lampyridae): beetles that make cold light by chemical reaction, using species-specific flash patterns to find mates in the dark.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("firefly"),
});

export default function FireflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Firefly"
      scientificName="family Lampyridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Beetle","Bioluminescent"]}
      image={getAnimalImage("firefly") ?? undefined}
      galleryImages={getAnimalGalleryImages("firefly")}
      sources={ANIMAL_SOURCES.firefly}
      factsHeaderNote="“Firefly” covers over two thousand species in the family Lampyridae. Not all of them glow as adults, and the flightless glowing females of some species are called glow-worms."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Fireflies are not flies. They are <strong>beetles</strong> — soft-bodied members of the family Lampyridae — and there are more than two thousand species worldwide. What unites them in the popular imagination is light.
        </p>
        <p>
          Firefly light is produced in a specialised organ in the abdomen, where the compound luciferin reacts with oxygen under the control of the enzyme luciferase. The result is remarkable for being almost entirely light and almost no heat, which is why it is described as <strong>cold light</strong>.
        </p>
        <p>
          Not every firefly glows as an adult, and in several species the flightless, larva-like female is the one that shines — these are the animals called glow-worms. Firefly larvae are predators, and many of them glow too.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Fireflies occur on every continent except Antarctica, with the greatest diversity in warm and humid regions. Most species need moisture: damp meadows, woodland edges, marshes, stream banks, ditches and gardens with undisturbed leaf litter. Larvae live in soil, leaf litter, rotting wood or damp ground, and this larval stage lasts far longer than the brief adult phase.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Firefly larvae are predators, feeding on snails, slugs, earthworms and other soft-bodied invertebrates, which they subdue with digestive secretions. Adults differ widely: some feed on nectar or pollen, many barely feed at all during their short lives, and the females of some genera prey on the males of other firefly species by mimicking their flash signals.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          The flashing is a courtship signal, and each species has its own pattern — a particular flash duration, interval and flight path — which lets males and females of the same species recognise one another in the dark. In some parts of the world, notably Southeast Asia and a few sites elsewhere, thousands of males <strong>synchronise</strong> their flashes across a stretch of habitat. A darker twist is aggressive mimicry: females of the genus <em>Photuris</em> imitate the answering flash of other species to lure and eat the responding males.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Fireflies are among the most-loved insects, and firefly-watching supports tourism at some synchronous display sites. Many populations are declining, with habitat loss, pesticide use and — distinctively for this group — <strong>light pollution</strong> identified as major pressures, since artificial light drowns out the flash signals the insects need to find mates. Reducing outdoor lighting, leaving leaf litter undisturbed and maintaining damp habitat are the measures usually recommended. Status varies by species; verify at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Are fireflies flies?",
          answer:
            "No — they are beetles, in the family Lampyridae. The name is misleading in the same way as 'ladybug' or 'dragonfly'. Their soft wing cases and the way the body is built are typical of beetles rather than of true flies.",
        },
        {
          question: "How do fireflies make light?",
          answer:
            "Through a chemical reaction in a light organ in the abdomen, where a compound called luciferin reacts with oxygen under the control of the enzyme luciferase. Almost all the energy is released as light rather than heat, which is why firefly light is described as cold light.",
        },
        {
          question: "Why do fireflies flash in patterns?",
          answer:
            "The pattern is a species signal used in courtship. Each species has a characteristic flash duration, rhythm and flight path, which allows males and females of the same species to recognise each other in the dark and avoid wasting effort on the wrong species.",
        },
        {
          question: "Why is light pollution a problem for fireflies?",
          answer:
            "Because their entire mating system depends on being able to see one another's flashes. Artificial light at night washes out those signals, so males and females fail to find each other. Along with habitat loss and pesticides, light pollution is one of the main pressures identified in firefly declines.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Lampyridae — over 2,000 species" },
        { label: "What they are", value: "Beetles, not flies" },
        { label: "Class", value: "Insecta" },
        { label: "Light chemistry", value: "Luciferin + oxygen, via luciferase" },
        { label: "Light quality", value: "Cold light — almost no heat" },
        { label: "Larvae", value: "Predators of snails, slugs and worms" },
        { label: "Flash patterns", value: "Species-specific courtship signals" },
        { label: "Key threat", value: "Habitat loss, pesticides, light pollution" },
      ]}
      relatedLinks={[
        { label: "Beetle Profile", href: "/animals/beetle", description: "Group-level overview" },
        { label: "Bioluminescence", href: "/animal-senses-and-adaptations/bioluminescence", description: "How animals make light" },
        { label: "Stag Beetle Profile", href: "/animals/stag-beetle" },
        { label: "Deep-Sea Coral Profile", href: "/animals/deep-sea-coral" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
