import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/impala";
const TITLE = "Impala — Profile, Leaping, Herds & African Savanna Habitat";
const DESC =
  "Explore the impala (Aepyceros melampus): an African antelope known for explosive leaps, mixed grazing and browsing, and a striking black-and-white rump.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("impala"),
});

export default function ImpalaPage() {
  return (
    <AnimalProfileLayout
      commonName="Impala"
      scientificName="Aepyceros melampus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Antelope","Africa"]}
      image={getAnimalImage("impala") ?? undefined}
      galleryImages={getAnimalGalleryImages("impala")}
      sources={ANIMAL_SOURCES.impala}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The impala (<em>Aepyceros melampus</em>) is a slender, reddish-brown antelope of eastern and southern Africa and one of the most abundant and visible animals of the savanna. Only males carry the long, lyre-shaped ridged horns.
        </p>
        <p>
          Impalas are marked by a distinctive rump pattern — white with a black vertical stripe on each side and a third down the tail — which is thought to help a fleeing herd stay coordinated. A tuft of black hair on each hind leg covers a scent gland.
        </p>
        <p>
          The impala is unusual among antelopes in being a genuine <strong>mixed feeder</strong>: it grazes grass when grass is good and switches to browsing leaves and shoots when it is not. That flexibility is a large part of why it does so well across a wide range of savanna conditions.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Impalas live in savanna woodland, open woodland edges and thicket across eastern and southern Africa. They depend on access to water and are usually found within reach of it, favouring the transition zones between grassland and woodland where both grazing and browsing are available. A separate, more restricted subspecies, the black-faced impala, occurs in Namibia and southwestern Angola.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Impalas take grasses, leaves, shoots, herbs, fruit and seed pods, shifting the balance with the seasons — grass when it is green and nutritious, browse when the dry season sets in. This dietary flexibility lets them use habitats where strict grazers or strict browsers would struggle.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Impalas are famous for leaping: when alarmed a herd explodes outward in high, long bounds that can clear substantial distances and heights, a display that confuses pursuing predators. Social structure shifts through the year — females and young form herds, young males form bachelor groups, and in the rut dominant males hold territories and are highly vocal, giving loud roaring and snorting calls. Impalas also groom one another, an unusual behaviour among antelopes.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Impalas are common in protected areas across their range and are a familiar sight on safari, as well as being important prey for leopards, cheetahs, lions, wild dogs and hyenas. The species overall is widespread and abundant, but the black-faced subspecies is far more restricted. This profile offers no hunting or handling guidance. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "How high can an impala jump?",
          answer:
            "Impalas make spectacular leaps when alarmed, clearing considerable height and distance in a single bound and often changing direction mid-air. Exact figures vary between sources and individuals, so it is better to describe the leaps qualitatively than to quote a precise record.",
        },
        {
          question: "Do female impalas have horns?",
          answer:
            "No. Only males carry horns, which are long, ridged and lyre-shaped and are used in displays and in fights during the rut. Females are hornless, which makes the sexes easy to tell apart at a distance.",
        },
        {
          question: "What do impalas eat?",
          answer:
            "Both grass and browse. Impalas are mixed feeders: they graze grasses when these are green and nutritious and switch to leaves, shoots, herbs, fruit and pods as the dry season advances. That flexibility is a major reason they thrive across varied savanna habitats.",
        },
        {
          question: "Why do impalas have black stripes on the rump?",
          answer:
            "The white rump carries a black stripe on each side and one down the tail, forming a distinctive pattern. It is generally interpreted as a signal that helps a fleeing herd stay together and coordinated, since the pattern is highly visible from behind during a scattering escape.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Aepyceros melampus" },
        { label: "Family", value: "Bovidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Horns", value: "Males only — ridged and lyre-shaped" },
        { label: "Feeding", value: "Mixed feeder — grazes and browses" },
        { label: "Signature behaviour", value: "Explosive leaping when alarmed" },
        { label: "Range", value: "Eastern and southern Africa" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Gerenuk Profile", href: "/animals/gerenuk", description: "A browsing antelope of dry country" },
        { label: "Dik-Dik Profile", href: "/animals/dik-dik", description: "A tiny antelope" },
        { label: "Wildebeest Profile", href: "/animals/wildebeest", description: "A migratory grazer" },
        { label: "Cheetah Profile", href: "/animals/cheetah", description: "A major impala predator" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
