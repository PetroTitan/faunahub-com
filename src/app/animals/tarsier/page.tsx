import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tarsier";
const TITLE = "Tarsier — Profile, Giant Eyes, Diet & Behavior";
const DESC =
  "Explore tarsiers (family Tarsiidae): tiny, huge-eyed nocturnal primates of Southeast Asia that are pure carnivores — using the Philippine tarsier as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("tarsier"),
});

export default function TarsierPage() {
  return (
    <AnimalProfileLayout
      commonName="Tarsier"
      scientificName="Carlito syrichta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Nocturnal"]}
      image={getAnimalImage("tarsier") ?? undefined}
      galleryImages={getAnimalGalleryImages("tarsier")}
      sources={ANIMAL_SOURCES.tarsier}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Tarsiers (family Tarsiidae) are tiny nocturnal primates of Southeast Asia,
            instantly recognisable by their enormous eyes — each eye is about as big as the
            animal&apos;s brain, the largest eyes relative to body size of any mammal. The
            Philippine tarsier (<em>Carlito syrichta</em>), shown here, can fit in a human
            hand, yet it is a formidable little hunter with long legs, grasping fingers,
            and a long tail.
          </p>
          <p>
            Tarsiers are unusual among primates for being entirely carnivorous, and they
            can rotate their heads remarkably far — roughly 180 degrees each way — to scan
            for prey without moving their fixed eyes.
          </p>
          <p>
            <strong>Note:</strong> there are several tarsier species; details here use the
            Philippine tarsier as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tarsiers live in forests and dense vegetation on islands of Southeast Asia,
          including the Philippines, Borneo, Sumatra, Sulawesi, and nearby islands. They
          favour areas with plenty of vertical stems and saplings to cling to, and dense
          cover for hiding by day. The Philippine tarsier inhabits forests and secondary
          growth in the southern Philippines.
        </p>
      }
      diet={
        <p>
          Tarsiers are strict carnivores — unusual for primates — feeding mainly on
          insects such as crickets, beetles, and moths, and also taking small vertebrates
          like lizards and even small birds. They hunt by sight and sound at night,
          pouncing on prey with a quick leap and seizing it in their hands.
        </p>
      }
      behavior={
        <p>
          Tarsiers are nocturnal vertical clingers and leapers, springing between stems
          with powerful hind legs and landing precisely thanks to padded fingertips. Their
          eyes cannot move in their sockets, so they compensate by turning their heads
          almost all the way around. They communicate with calls, including very
          high-pitched sounds, and are mostly solitary or live in small groups. Their large
          eyes give them keen night vision for catching prey.
        </p>
      }
      humanInteraction={
        <p>
          Tarsiers are popular with tourists and are a point of national pride in the
          Philippines, but they are sensitive animals that fare badly when stressed,
          handled, or kept as pets — captive tarsiers can even harm themselves under
          stress. Habitat loss is a major threat, and responsible, hands-off sanctuaries
          are promoted over close contact. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why do tarsiers have such enormous eyes?",
          answer:
            "Tarsiers are nocturnal hunters, and their huge eyes gather as much light as possible for seeing prey in the dark. Each eye is roughly the size of the animal's brain — the largest eyes relative to body size of any mammal. Because these eyes can't move in their sockets, tarsiers turn their heads instead.",
        },
        {
          question: "Are tarsiers really carnivores?",
          answer:
            "Yes, and that's unusual for a primate. Tarsiers eat only animal prey — mainly insects, plus small vertebrates like lizards and occasionally small birds. Unlike most primates, they don't eat fruit or leaves at all, making them the only entirely carnivorous primates.",
        },
        {
          question: "Can a tarsier turn its head all the way around?",
          answer:
            "Almost. Because their large eyes are fixed in place, tarsiers can rotate their heads roughly 180 degrees in each direction — owl-like — to look around and track prey. This neck flexibility makes up for eyes that cannot swivel.",
        },
        {
          question: "Do tarsiers make good pets?",
          answer:
            "No. Tarsiers are delicate, easily stressed wild animals that do very poorly in captivity — stressed individuals may even injure themselves — and they have specialised diets and needs. Keeping them as pets is harmful (and often illegal); responsible sanctuaries emphasise observation without handling.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Carlito syrichta (Philippine tarsier)" },
        { label: "Class", value: "Mammalia (primate)" },
        { label: "Diet", value: "Carnivore (insects & small vertebrates)" },
        { label: "Eyes", value: "Largest of any mammal, relative to size" },
        { label: "Neck", value: "Turns ~180° each way" },
        { label: "Movement", value: "Vertical clinger & leaper" },
        { label: "Range", value: "Southeast Asian islands" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Slow Loris Profile", href: "/animals/slow-loris", description: "Another nocturnal Asian primate" },
        { label: "Lemur Profile", href: "/animals/lemur", description: "Another group of small primates" },
        { label: "Colugo Profile", href: "/animals/colugo", description: "A gliding Southeast Asian mammal (primate relative)" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Southeast Asian fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
