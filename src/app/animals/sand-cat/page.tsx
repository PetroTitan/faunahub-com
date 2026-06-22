import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sand-cat";
const TITLE = "Sand Cat — Profile, the Tiny Desert Cat That Thrives Where Others Can't";
const DESC =
  "Explore the sand cat (Felis margarita): a small desert cat with broad ears and fur-soled feet, superbly adapted to extreme deserts — and able to live with almost no drinking water.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("sand-cat"),
});

export default function SandCatPage() {
  return (
    <AnimalProfileLayout
      commonName="Sand Cat"
      scientificName="Felis margarita"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Desert"]}
      image={getAnimalImage("sand-cat") ?? undefined}
      galleryImages={getAnimalGalleryImages("sand-cat")}
      sources={ANIMAL_SOURCES["sand-cat"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The sand cat (<em>Felis margarita</em>) is a small, pale, deceptively cute wild cat that is
            the only cat truly at home in the open desert. Roughly the size of a domestic cat but stockier,
            it has a broad head with large, low-set ears, a sandy-coloured coat that blends perfectly into
            its surroundings, and dense fur covering the soles of its feet. These adaptations let it survive
            in some of the harshest deserts of North Africa, the Middle East, and Central Asia.
          </p>
          <p>
            The sand cat is wonderfully built for desert life: its huge ears give acute hearing for prey
            beneath the sand, its furred foot-pads protect against scorching ground and grip loose dunes,
            and it can get nearly all the water it needs from its food, surviving where there is little or
            no liquid water to drink.
          </p>
          <p>
            <strong>Note:</strong> details here cover the sand cat as a species; treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sand cats live in true deserts and arid scrub across North Africa (including the Sahara), the
          Arabian Peninsula and Middle East, and into Central Asia. They favour sandy and stony deserts with
          sparse vegetation, coping with extreme heat by day and cold at night, and they dig or use burrows
          to shelter from the temperature extremes.
        </p>
      }
      diet={
        <p>
          The sand cat is a carnivore that preys on small desert animals — rodents (such as gerbils and
          jerboas), birds, reptiles, and insects — and it is a noted hunter of snakes, including venomous
          ones. It locates much of its prey by sound, using its large ears to detect animals moving on or
          under the sand, then digging them out. It gets most of its moisture from its prey, an essential
          adaptation in a habitat where free water is scarce.
        </p>
      }
      behavior={
        <p>
          Sand cats are mostly nocturnal, spending the hot day in a burrow and emerging at night to hunt
          across the desert, where they can travel long distances. Their oversized ears and keen hearing let
          them pinpoint prey hidden in the sand, and the thick fur on their foot-pads both insulates against
          hot or cold ground and helps spread their weight on loose sand (it also blurs their tracks). They
          are solitary outside the breeding season, and their sandy camouflage and habit of flattening
          themselves to the ground make them very hard to spot. They tolerate extreme temperatures
          remarkably well for their size.
        </p>
      }
      humanInteraction={
        <p>
          Sand cats live in remote, sparsely populated deserts and are not currently considered globally
          threatened, though they face localised pressures from habitat degradation, hunting, the
          live-animal trade, and disturbance, and their secretive desert life makes them hard to study. As
          wild desert animals with very specialised needs, they are not suited to life as pets. Consult the
          IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "How does the sand cat survive in the desert without water?",
          answer:
            "It gets nearly all the moisture it needs from its prey, so it can live where there's little or no water to drink. Combined with a suite of adaptations — large heat-detecting ears, sandy camouflage, fur-soled feet for hot sand, nocturnal habits, and the use of burrows to escape temperature extremes — this lets the sand cat thrive in deserts that would defeat most cats.",
        },
        {
          question: "Why does the sand cat have fur on the bottom of its feet?",
          answer:
            "The dense fur covering its foot-pads protects against scorching or freezing desert ground, helps it grip and move over loose sand, and even blurs its footprints, making the cat harder to track. It's one of several features that make the sand cat a true desert specialist.",
        },
        {
          question: "Do sand cats really hunt snakes?",
          answer:
            "Yes — they're noted snake hunters, taking even venomous species, along with rodents, birds, reptiles, and insects. They rely heavily on their acute hearing to locate prey on or under the sand, then pounce or dig it out. Their varied desert diet also supplies almost all the water they need.",
        },
        {
          question: "Aren't sand cats just cute desert versions of house cats?",
          answer:
            "They look endearing, but the sand cat is a wild animal superbly specialised for extreme deserts, not a pet. Its size is similar to a domestic cat, yet its biology — water independence, heat tolerance, fur-soled feet, and snake-hunting — is built for a harsh life few cats could endure. It should be admired in the wild, not kept.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Felis margarita" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Claim to fame", value: "The only true desert-dwelling cat" },
        { label: "Adaptations", value: "Big ears, sandy coat, fur-soled feet" },
        { label: "Water", value: "Gets most moisture from prey" },
        { label: "Diet", value: "Rodents, birds, reptiles (incl. snakes), insects" },
        { label: "Activity", value: "Nocturnal; solitary; uses burrows" },
        { label: "Range", value: "Deserts of N Africa, Middle East, C Asia" },
      ]}
      relatedLinks={[
        { label: "Fennec Fox Profile", href: "/animals/fennec-fox", description: "Another big-eared desert specialist" },
        { label: "Caracal Profile", href: "/animals/caracal", description: "Another dryland cat" },
        { label: "Serval Profile", href: "/animals/serval", description: "Another sound-hunting cat" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Desert fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
