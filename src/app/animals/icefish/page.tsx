import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/icefish";
const TITLE = "Icefish: White-Blooded Southern Ocean Fish";
const DESC =
  "Icefish (family Channichthyidae) are Southern Ocean fish that lack haemoglobin and have nearly colourless, white blood. Explore their biology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("icefish"),
});

export default function IcefishPage() {
  return (
    <AnimalProfileLayout
      commonName="Icefish"
      scientificName="Channichthyidae (crocodile icefishes)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Channichthyidae","White-blooded"]}
      image={getAnimalImage("icefish") ?? undefined}
      galleryImages={getAnimalGalleryImages("icefish")}
      sources={ANIMAL_SOURCES["icefish"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Icefish, more precisely the crocodile icefishes of the family <em>Channichthyidae</em>, are a group of cold-water fishes found in the Southern Ocean around Antarctica and the Scotia Sea. They are best known for a striking trait shared across the family: they lack haemoglobin and have almost colourless, near-transparent blood. This makes them the only known vertebrates without functional red blood cells, a feature that has made them a long-standing subject of scientific study.
          </p>
          <p>
            Because &quot;icefish&quot; refers to a whole family rather than a single species, generalisations should be made carefully. The group contains roughly two dozen recognised species across several genera, and they differ in size, depth preference, and detailed distribution. What unites them is a shared evolutionary history in the cold, oxygen-rich waters of the Southern Ocean, along with specialised adaptations that let them live where most fishes could not.
          </p>
          <p>
            These fishes survive in part by carrying antifreeze glycoproteins in their body fluids, which help prevent ice crystals from forming in their tissues, and by relying on the high dissolved-oxygen content of very cold seawater to compensate for the absence of haemoglobin. Their biology offers a window into how life can be reshaped by extreme and stable cold.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Crocodile icefishes make up the family <em>Channichthyidae</em>, placed within the suborder Notothenioidei, the dominant group of fishes in Antarctic and Southern Ocean waters. They are ray-finned fishes (class Actinopterygii) and are sometimes referred to collectively as white-blooded fishes because of their haemoglobin-free blood. The family includes around a dozen genera and roughly two dozen species; as a group-level entry, this profile describes shared family traits rather than the particulars of any one species, since members vary in their exact classification, size, and range.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Many crocodile icefishes are recognised by an elongated body and a broad, somewhat flattened, pike-like or crocodile-like head with a wide mouth, a shape that gives the family its common name. Their gills and tissues often appear pale, and freshly drawn blood is nearly colourless or faintly milky rather than red, reflecting the absence of haemoglobin. Coloration of the body is typically muted, in greys, browns, or silvery tones suited to dim, cold waters. Sizes vary among species, with many adults measuring roughly in the tens of centimetres and some larger forms approaching or reaching around half a metre.
          </p>
        </>
      }
      habitat={
        <p>
          Icefishes of this family are marine fishes associated with the cold waters of the Southern Ocean around Antarctica and the Scotia Sea, including waters over the Antarctic continental shelf and around some subantarctic islands. They are not land animals; they live in the sea, with different species occupying different depths from relatively shallow shelf waters to deeper slopes. Their distribution should be described cautiously: individual species occupy particular sectors and depth ranges rather than the entire region uniformly, and the family as a whole is tied to the consistently cold, oxygen-rich conditions of these high-latitude southern waters.
        </p>
      }
      diet={
        <p>
          Crocodile icefishes are predatory fishes. Depending on the species and life stage, their diet generally includes krill, other small crustaceans, and small fishes, which they capture with their wide, well-armed mouths. As ambush and pursuit predators within the cold shelf and slope waters they inhabit, they form part of the chain of consumers that depend, directly or indirectly, on the abundant Antarctic krill of the Southern Ocean. Specific prey preferences vary between species and with local conditions.
        </p>
      }
      behavior={
        <>
          <p>
            Members of this family live slow-paced lives shaped by very cold, stable temperatures, which tend to lower metabolic rates. To move oxygen through the body without haemoglobin, many species have relatively large hearts, wide blood vessels, and high blood volume, and they take up some oxygen through the skin in addition to the gills. Reproduction in several studied species involves laying comparatively large, yolk-rich eggs, with some species reported to guard their nests; embryos and young develop slowly in the cold. Behavioural details differ across the family and are still being studied.
          </p>
          <p>
            Within the Southern Ocean food web, icefishes occupy a middle-to-upper position as predators of krill and smaller animals while themselves serving as prey for larger fishes, seals, and seabirds. Their presence links the immense production of Antarctic krill to higher predators, making them part of the energy flow that supports much of Antarctic marine life. Because they are tightly adapted to narrow, cold-water conditions, scientists regard the group as ecologically informative for understanding how Antarctic shelf ecosystems are structured and how they may respond to environmental change.
          </p>
        </>
      }
      humanInteraction={
        <p>
          This page is educational and offers no fishing, harvesting, or food guidance of any kind. Icefishes are of strong interest to physiologists and evolutionary biologists, and some have historically been subject to commercial fishing pressure in the Southern Ocean, which is noted here only as a conservation consideration; fisheries in the region are managed under international arrangements such as the Convention on the Conservation of Antarctic Marine Living Resources (CCAMLR). Concerns about Southern Ocean wildlife, protected species, or fishing activity should be directed to the relevant authorities. Climate-related changes in sea temperature and ice are considered by scientists to be a potential concern for cold-adapted species such as these.
        </p>
      }
      faqs={[
        {
          question: "Why do icefish have white or colourless blood?",
          answer:
            "Crocodile icefishes lack haemoglobin, the protein that makes blood red and carries oxygen in most vertebrates. Their blood is nearly colourless, and they instead rely on cold, oxygen-rich seawater, high blood volume, and large hearts to move oxygen through their bodies.",
        },
        {
          question: "Is \"icefish\" a single species?",
          answer:
            "No. \"Icefish\" here refers to the family Channichthyidae, the crocodile icefishes, which includes roughly two dozen species across several genera. Because it is a group, details such as size, depth, exact range, and conservation status vary from one species to another.",
        },
        {
          question: "Where do icefish live?",
          answer:
            "They are marine fishes of the Southern Ocean around Antarctica and the Scotia Sea, including waters over the Antarctic shelf and around some subantarctic islands. They live in the sea rather than on land, and different species occupy different depths and sectors.",
        },
        {
          question: "What is the conservation status of icefish?",
          answer:
            "Because icefish are a family of many species, there is no single conservation category for the group; status varies by species as assessed by bodies such as the IUCN Red List. Historic fishing pressure and climate change are noted as concerns, and statuses can change over time.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Family Channichthyidae (crocodile icefishes)" },
        { label: "Animal group", value: "Fish (ray-finned, white-blooded notothenioids)" },
        { label: "Family/suborder", value: "Channichthyidae; suborder Notothenioidei" },
        { label: "Size", value: "Varies by species; many roughly tens of cm, some near 0.5 m" },
        { label: "Diet", value: "Krill, small crustaceans, and small fishes" },
        { label: "Habitat", value: "Cold marine shelf and slope waters of the Southern Ocean" },
        { label: "Range", value: "Southern Ocean around Antarctica and the Scotia Sea" },
        { label: "Conservation status", value: "Varies by species (e.g. per the IUCN Red List); no single category" },
      ]}
      relatedLinks={[
        { label: "Antarctic Toothfish", href: "/animals/antarctic-toothfish", description: "Another Antarctic fish" },
        { label: "Shark", href: "/animals/shark", description: "Another fish" },
        { label: "Antarctic Krill", href: "/animals/antarctic-krill", description: "A Southern Ocean food-web species" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
