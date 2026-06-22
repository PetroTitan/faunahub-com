import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/aardwolf";
const TITLE = "Aardwolf — Profile, the Little Hyena That Eats Only Termites";
const DESC =
  "Explore the aardwolf (Proteles cristata): a small, striped, insect-eating member of the hyena family that laps up tens of thousands of termites a night with a long, sticky tongue.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("aardwolf"),
});

export default function AardwolfPage() {
  return (
    <AnimalProfileLayout
      commonName="Aardwolf"
      scientificName="Proteles cristata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Insectivore", "Africa"]}
      image={getAnimalImage("aardwolf") ?? undefined}
      galleryImages={getAnimalGalleryImages("aardwolf")}
      sources={ANIMAL_SOURCES.aardwolf}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The aardwolf (<em>Proteles cristata</em>) is a small, slender, striped mammal of Africa
            that looks like a delicate, scaled-down striped hyena — and, in fact, it belongs to the
            hyena family. But unlike its larger, bone-crushing relatives, the aardwolf is a gentle
            specialist with one of the most unusual diets among carnivores: it eats almost nothing
            but termites. Its name is Afrikaans for &ldquo;earth-wolf,&rdquo; reflecting its
            burrowing habits.
          </p>
          <p>
            With a long, sticky tongue, an aardwolf can lap up many tens of thousands of termites in
            a single night, focusing on particular kinds of termites that other animals avoid. It has
            small, simple, peg-like cheek teeth — useless for chewing meat, but all it needs for a
            life of insect-lapping.
          </p>
          <p>
            <strong>Note:</strong> details here cover the aardwolf as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Aardwolves live in the dry, open country of Africa — savanna, scrubland, and grassland —
          in two separate populations, one in eastern and northeastern Africa and one in southern
          Africa. They favour areas with plenty of the termites they eat, and they shelter by day in
          burrows (often ones dug by other animals, such as aardvarks or porcupines), which they may
          enlarge for their own use.
        </p>
      }
      diet={
        <p>
          The aardwolf is a highly specialised insectivore, feeding overwhelmingly on termites —
          especially certain surface-foraging, nasute (snouted) termites that release chemical
          defences many predators dislike. It does not dig into termite mounds like an aardvark;
          instead it licks termites from the ground surface with its long, broad, sticky tongue,
          consuming enormous numbers in a night. It gets nearly all its water from this insect diet.
        </p>
      }
      behavior={
        <p>
          Aardwolves are nocturnal and largely solitary foragers, though a male and female form a
          mated pair that shares and defends a territory, which they mark with scent. They follow the
          movements of their termite prey across the landscape, and because some termites are
          seasonally scarce, aardwolves may build up fat reserves and become less active in lean,
          cold periods. They are shy and non-aggressive: rather than fight, a threatened aardwolf
          raises the long mane of hair along its back to look bigger, and may release a smelly
          secretion from its scent glands. Despite belonging to the hyena family, they pose no threat
          to livestock and do not scavenge carcasses the way true hyenas do.
        </p>
      }
      humanInteraction={
        <p>
          Aardwolves are harmless and even beneficial — by eating vast numbers of termites they can
          help control termite populations on rangeland — yet they are sometimes wrongly persecuted by
          people who mistake them for livestock-killers or confuse them with other predators. They are
          also affected by habitat loss, road deaths, and the use of pesticides that reduce their
          termite prey. Overall the species remains fairly widespread and is not currently considered
          globally threatened. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the aardwolf really a type of hyena?",
          answer:
            "Yes. Despite its small size and gentle, insect-eating habits, the aardwolf belongs to the hyena family. It's the smallest and most specialised member, looking like a slender, scaled-down striped hyena. Unlike its bone-crushing relatives, though, it has tiny, simple teeth and lives almost entirely on termites.",
        },
        {
          question: "What does an aardwolf eat?",
          answer:
            "Almost exclusively termites — particularly certain surface-foraging, snouted termites that many other animals avoid because of their chemical defences. Using a long, sticky tongue, an aardwolf can lap up many tens of thousands of termites in a single night. It doesn't dig into mounds like an aardvark; it licks the insects off the ground surface.",
        },
        {
          question: "How is the aardwolf different from the aardvark?",
          answer:
            "They're unrelated animals that share a termite-and-insect lifestyle and a similar-sounding Afrikaans name ('earth-wolf' vs 'earth-pig'). The aardvark is a large, pig-like burrowing mammal in its own order that digs into mounds; the aardwolf is a small member of the hyena family that licks termites from the surface. Convergent diets, very different animals.",
        },
        {
          question: "Are aardwolves dangerous to livestock or people?",
          answer:
            "Not at all. Aardwolves are shy, harmless insectivores that don't hunt livestock or scavenge carcasses, and they pose no threat to people. When frightened they bluff — raising the mane on their back to look larger and releasing a smelly secretion — rather than attacking. Sadly they're sometimes persecuted by mistake, even though they actually help control termites.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Proteles cristata" },
        { label: "Class", value: "Mammalia (hyena family)" },
        { label: "Name meaning", value: "'Earth-wolf' (Afrikaans)" },
        { label: "Diet", value: "Almost only termites (insectivore)" },
        { label: "Feeding", value: "Long sticky tongue; ~tens of thousands/night" },
        { label: "Defence", value: "Raises mane to bluff; smelly secretion" },
        { label: "Activity", value: "Nocturnal; pairs share a territory" },
        { label: "Range", value: "E & southern Africa (two populations)" },
      ]}
      relatedLinks={[
        { label: "Hyena Profile", href: "/animals/hyena", description: "Its larger family relatives" },
        { label: "Aardvark Profile", href: "/animals/aardvark", description: "A look-alike-named termite eater" },
        { label: "Meerkat Profile", href: "/animals/meerkat", description: "Another small African insectivore" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African savanna fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
