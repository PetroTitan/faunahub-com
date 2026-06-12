import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Cow — Profile, Habitat, Diet & Behavior";
const description =
  "Domestic cattle (Bos taurus): an educational overview of the farm cow — herd behaviour, grazing diet, breeds, and the difference between domestic and wild bovines.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/cow",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("cow"),
});

export default function CowPage() {
  return (
    <AnimalProfileLayout
      commonName="Cow"
      scientificName="Bos taurus"
      pageTitle={title}
      description={description}
      path="/animals/cow"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Domestic", "Herbivore"]}
      image={getAnimalImage("cow") ?? undefined}
      galleryImages={getAnimalGalleryImages("cow")}
      factsHeaderNote="“Cow” usually refers to domestic cattle (Bos taurus). Breeds, sizes, and farm contexts vary widely by region. This page is educational, not farming or veterinary advice."
      overview={
        <>
          <p>
            The cow is a domesticated, even-toed ungulate kept worldwide as
            livestock. Strictly, a &quot;cow&quot; is an adult female of
            domestic cattle (<em>Bos taurus</em>, and the humped zebu often
            treated as <em>Bos taurus indicus</em>); males are bulls or
            steers, and young animals are calves. Cattle were domesticated
            thousands of years ago from the now-extinct wild aurochs and are
            among the most numerous large mammals on Earth.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Domestic cattle are not wild animals; they live in pastures,
            rangeland, and managed farms across most of the world. Hardy
            breeds tolerate a wide range of climates, from cool temperate
            uplands to hot, dry rangeland. Their distribution reflects human
            agriculture rather than a natural range, and conditions differ
            greatly between extensive grazing systems and intensive
            operations.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Cattle are ruminant herbivores. They graze grasses and other
            forage, then re-chew partially digested food (&quot;cud&quot;)
            and ferment it in a four-chambered stomach, allowing them to
            extract nutrients from fibrous plant material that many animals
            cannot digest. Diets on farms may be supplemented with hay,
            silage, or formulated feed; specific feeding regimes vary by
            region and production system.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Cattle are social herd animals that form stable groups and
            recognise individual herd-mates. They communicate through
            vocalisations, body posture, and scent, and tend to follow
            established routines for grazing and resting. Cattle can show
            curiosity, but as large prey animals they are also easily
            startled; calm, low-stress handling is widely recommended in
            animal-welfare guidance.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Cattle have been central to human agriculture for millennia, kept
            for milk, meat, leather, draught power, and cultural roles. They
            are a domestic species rather than wildlife, so conservation
            status does not apply in the way it does to wild animals;
            attention instead focuses on welfare, breed diversity, and the
            environmental footprint of cattle farming. This page is
            educational and does not provide husbandry or veterinary advice —
            consult qualified agricultural and veterinary sources for care.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Cattle are large, heavily built mammals with a broad muzzle,
                cloven hooves, and (in many breeds) horns in both sexes. Adult
                body size varies enormously between breeds, from compact
                dairy and heritage breeds to very large beef breeds. Coat
                colour and pattern are breed-dependent — for example the
                black-and-white of Holstein dairy cattle, solid reds and
                browns, or the loose dewlap and shoulder hump of zebu cattle.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Cattle belong to the family Bovidae alongside other wild and
          domestic bovines such as bison, buffalo, yak, and the wild gaur.
          Domestic cattle should not be confused with their wild relatives,
          which have different ecology, behaviour, and conservation status.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a cow, a bull, and cattle?",
          answer:
            "\"Cattle\" is the general term for the domestic species Bos taurus. A cow is an adult female (typically one that has had a calf), a bull is an intact adult male, a steer is a castrated male, and a calf is a young animal. In everyday speech \"cow\" is often used loosely for any of these.",
        },
        {
          question: "Are cows wild animals?",
          answer:
            "No. Domestic cattle are a domesticated species kept as livestock. Their wild ancestor, the aurochs, is extinct. Some cattle live in feral or free-ranging herds, but the species as a whole is domestic, not wildlife.",
        },
        {
          question: "Why do cows chew cud?",
          answer:
            "Cattle are ruminants. They swallow forage quickly, then later regurgitate it as cud and chew it again to break down tough plant fibre. Microbial fermentation in their multi-chambered stomach lets them digest grasses that many animals cannot use efficiently.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Bos taurus" },
        { label: "Family", value: "Bovidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Status", value: "Domesticated livestock" },
        { label: "Diet", value: "Herbivore (ruminant grazer)" },
        { label: "Social structure", value: "Herd animal" },
        { label: "Distribution", value: "Worldwide on farms and rangeland" },
      ]}
      relatedLinks={[
        { label: "Horse Profile", href: "/animals/horse", description: "Another large domesticated farm mammal" },
        { label: "Goat Profile", href: "/animals/goat" },
        { label: "Sheep Profile", href: "/animals/sheep" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.cow}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
