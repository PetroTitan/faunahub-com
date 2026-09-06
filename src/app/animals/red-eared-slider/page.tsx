import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/red-eared-slider";
const TITLE = "Red-Eared Slider — Profile, Basking, Native Range & Invasive Spread";
const DESC =
  "Explore the red-eared slider (Trachemys scripta elegans): a North American freshwater turtle named for its red head stripe, now invasive worldwide.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("red-eared-slider"),
});

export default function RedEaredSliderPage() {
  return (
    <AnimalProfileLayout
      commonName="Red-Eared Slider"
      scientificName="Trachemys scripta elegans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Turtle","Freshwater"]}
      image={getAnimalImage("red-eared-slider") ?? undefined}
      galleryImages={getAnimalGalleryImages("red-eared-slider")}
      sources={ANIMAL_SOURCES["red-eared-slider"]}
      factsHeaderNote="The red-eared slider is a subspecies of the pond slider, Trachemys scripta. Populations outside its native range in the Mississippi basin are introduced, and in many countries it is treated as an invasive species."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The red-eared slider (<em>Trachemys scripta elegans</em>) is a medium-sized freshwater turtle native to the Mississippi River basin of the United States. It takes its name from the broad <strong>red stripe behind each eye</strong> and from its habit of sliding quickly off a basking log into the water when disturbed.
        </p>
        <p>
          It is a subspecies of the pond slider, <em>Trachemys scripta</em>. Young animals are bright green with fine yellow markings; older individuals, particularly males, often darken with age until the pattern is obscured.
        </p>
        <p>
          The red-eared slider is the most widely traded pet turtle in the world, and as a result it is now established far outside its native range. <strong>This profile describes the species and is not a care guide — it offers no husbandry, feeding, tank or veterinary advice, and releasing pet turtles into the wild is harmful and often illegal.</strong>
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Natively the red-eared slider lives in warm, slow-moving fresh water in the Mississippi basin — ponds, lakes, marshes, creeks and slow rivers with soft bottoms, abundant aquatic vegetation and plentiful basking sites. Introduced populations now occur across Europe, Asia, Australia, Africa and South America, generally in similar warm, still or slow-flowing waters, often in urban parks and canals.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Red-eared sliders are omnivores whose diet shifts with age. Juveniles are strongly carnivorous, taking insects, crustaceans, tadpoles, small fish and carrion; adults eat proportionally more aquatic vegetation and algae while still taking animal prey. This dietary flexibility is one reason they establish so readily where they are introduced.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Basking is central to their biology: sliders haul out onto logs, rocks and banks for long periods to raise body temperature, and often stack on top of one another where basking sites are limited. They are wary, sliding into the water at the first sign of disturbance. In cooler parts of the range they become dormant through winter at the bottom of ponds. Males court females with an distinctive display in which they flutter elongated foreclaws in front of the female&apos;s face.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Few reptiles illustrate the pet-trade-to-invasive-species pathway so clearly. Millions of hatchlings were traded internationally, and released or escaped animals have established populations on several continents, where they compete with native turtles for basking sites and food and can spread disease. The species is listed among invasive species of concern in the European Union, and import is restricted in a number of countries. This profile offers no pet-care guidance, and releasing captive turtles into the wild is harmful and illegal in many places. Verify current status and local regulations with the IUCN Red List and national authorities.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why is it called a red-eared slider?",
          answer:
            "Two features give it the name. A broad red stripe runs behind each eye — turtles have no external ears, so this is a marking rather than an ear — and the turtle 'slides' rapidly off its basking log into the water at the first hint of disturbance.",
        },
        {
          question: "Why are red-eared sliders invasive?",
          answer:
            "Because they were traded worldwide in enormous numbers and then released or escaped. They tolerate a wide range of conditions, eat almost anything, and compete with native turtles for basking sites and food, so populations have established across Europe, Asia, Australia and elsewhere, well outside their native Mississippi basin range.",
        },
        {
          question: "Do red-eared sliders change colour as they age?",
          answer:
            "Yes. Hatchlings and juveniles are bright green with fine yellow patterning, but many adults — especially males — darken progressively with age, sometimes becoming so dark that the original markings, including the red stripe, are hard to make out.",
        },
        {
          question: "What do red-eared sliders eat?",
          answer:
            "They are omnivores, and the balance changes with age. Juveniles take mostly animal prey — insects, crustaceans, tadpoles, small fish and carrion — while adults eat proportionally more aquatic plants and algae alongside animal food.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Trachemys scripta elegans" },
        { label: "Family", value: "Emydidae" },
        { label: "Class", value: "Reptilia" },
        { label: "Identification", value: "Broad red stripe behind each eye" },
        { label: "Native range", value: "Mississippi River basin, USA" },
        { label: "Introduced", value: "Europe, Asia, Australia and beyond" },
        { label: "Diet", value: "Omnivore; more carnivorous when young" },
        { label: "Note", value: "Species profile — not a care guide" },
      ]}
      relatedLinks={[
        { label: "Turtle Profile", href: "/animals/turtle", description: "Group-level overview" },
        { label: "Box Turtle Profile", href: "/animals/box-turtle" },
        { label: "Snapping Turtle Profile", href: "/animals/snapping-turtle" },
        { label: "Tortoise Profile", href: "/animals/tortoise" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
