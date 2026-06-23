import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/takin";
const TITLE = "Takin — Profile of the Himalayan Goat-antelope";
const DESC =
  "Meet the takin (Budorcas taxicolor): a massive goat-antelope of the eastern Himalayas and China, with a moose-like nose and an oily coat — and Bhutan's national animal.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("takin"),
});

export default function TakinPage() {
  return (
    <AnimalProfileLayout
      commonName="Takin"
      scientificName="Budorcas taxicolor"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Goat-antelope", "Himalaya", "Asia"]}
      image={getAnimalImage("takin") ?? undefined}
      galleryImages={getAnimalGalleryImages("takin")}
      sources={ANIMAL_SOURCES.takin}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The takin (<em>Budorcas taxicolor</em>) is a large, heavily built goat-antelope of the eastern
            Himalayas and the mountains of western China, Bhutan, and Myanmar. Big males can weigh well
            over 300 kilograms, with a stocky body, sturdy legs, short curved horns, and a distinctively
            humped, moose-like muzzle.
          </p>
          <p>
            Despite a slightly ungainly appearance, the takin is a sure-footed mountain animal. It belongs
            to the subfamily that includes sheep and goats, and several colour forms occur — including the
            pale, honey-gold &ldquo;golden takin,&rdquo; which some accounts link to the legend of the
            Golden Fleece (a piece of folklore rather than established fact).
          </p>
          <p>
            The takin is the national animal of Bhutan. It is listed as Vulnerable on the IUCN Red List,
            with hunting and habitat loss the main pressures.
          </p>
        </>
      }
      habitat={
        <p>
          Takins live in rugged forested mountains and alpine meadows, often at high elevations among
          rhododendron and bamboo thickets. Many populations migrate up and down the slopes with the
          seasons — climbing to high alpine zones in summer and descending to sheltered valleys and forest
          in winter.
        </p>
      }
      diet={
        <p>
          The takin is a herbivore that browses and grazes on a wide range of plants — leaves, shoots,
          grasses, herbs, and bamboo — and reaches up on its hind legs to feed on higher foliage. It also
          visits natural mineral licks to supplement its diet with salts.
        </p>
      }
      behavior={
        <p>
          Takins are often social, gathering in herds (especially in summer), while older males may be
          more solitary. Rather than relying on scent glands, a takin&apos;s skin secretes an oily,
          strong-smelling substance that coats the whole coat and helps shed rain and fog in its damp
          mountain home. The bulky nose, with its large sinuses, is thought to help warm and moisten cold
          mountain air as the animal breathes.
        </p>
      }
      humanInteraction={
        <p>
          As Bhutan&apos;s national animal, the takin has cultural significance, but it faces hunting and the
          loss and disturbance of its mountain habitat. It is listed as Vulnerable on the IUCN Red List,
          and it benefits from protected areas across its range. Consult the IUCN Red List for the current
          assessment.
        </p>
      }
      faqs={[
        {
          question: "Is the takin a goat, an antelope, or a cow?",
          answer:
            "The takin is a 'goat-antelope' — a member of the subfamily Caprinae, which includes sheep and goats. It is not a true cow or true antelope, even though its bulk and nose can give a moose-like or cattle-like impression.",
        },
        {
          question: "Why does the takin have such a big nose?",
          answer:
            "Its large, humped muzzle contains big sinus cavities. These are thought to help warm and humidify the cold, thin mountain air the takin breathes, an advantage at high elevation.",
        },
        {
          question: "What is the 'golden takin' and the Golden Fleece story?",
          answer:
            "The golden takin is a pale, honey-coloured form of the species. Some popular accounts connect its glowing coat to the Greek legend of the Golden Fleece, but that link is folklore rather than established fact.",
        },
        {
          question: "Is the takin endangered?",
          answer:
            "The takin is listed as Vulnerable on the IUCN Red List, mainly because of hunting and habitat loss across its mountain range. Check the IUCN Red List for the latest status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Budorcas taxicolor" },
        { label: "Class", value: "Mammalia" },
        { label: "Group", value: "Goat-antelope (subfamily Caprinae)" },
        { label: "Weight", value: "Large males can exceed 300 kg" },
        { label: "Range", value: "E Himalayas, W & C China, Bhutan, Myanmar" },
        { label: "Notable", value: "National animal of Bhutan" },
        { label: "Coat", value: "Oily, water-shedding secretion (no scent glands)" },
        { label: "IUCN status", value: "Vulnerable" },
      ]}
      relatedLinks={[
        { label: "Markhor Profile", href: "/animals/markhor", description: "A spiral-horned wild goat" },
        { label: "Goat Profile", href: "/animals/goat", description: "A domestic relative in Caprinae" },
        { label: "Saiga Profile", href: "/animals/saiga", description: "Another odd-nosed hoofed mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian mountain mammals in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
