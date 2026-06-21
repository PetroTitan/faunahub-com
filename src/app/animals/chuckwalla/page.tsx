import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chuckwalla";
const TITLE = "Chuckwalla — Profile, Desert Lizard & Rock-Wedging Defense";
const DESC =
  "Explore chuckwallas (genus Sauromalus): chunky, plant-eating desert lizards of North America that wedge into rock crevices and puff up to avoid being pulled out by predators.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("chuckwalla"),
});

export default function ChuckwallaPage() {
  return (
    <AnimalProfileLayout
      commonName="Chuckwalla"
      scientificName="Sauromalus ater"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Desert"]}
      image={getAnimalImage("chuckwalla") ?? undefined}
      galleryImages={getAnimalGalleryImages("chuckwalla")}
      sources={ANIMAL_SOURCES.chuckwalla}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Chuckwallas (genus <em>Sauromalus</em>) are stout, flat-bodied lizards of the
            deserts of the southwestern United States and northern Mexico. The common
            chuckwalla (<em>Sauromalus ater</em>), shown here, is a large, plump lizard with
            loose folds of baggy skin around the neck and sides. Unlike many desert reptiles,
            chuckwallas are primarily plant-eaters, basking on sun-baked rocks and grazing on
            desert vegetation.
          </p>
          <p>
            Their most famous trick is a clever defence: when threatened, a chuckwalla bolts
            into a rock crevice and gulps air to inflate its body, wedging itself in so
            firmly that a predator cannot pull it out.
          </p>
          <p>
            <strong>Note:</strong> there are several chuckwalla species; details here use the
            common chuckwalla as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Chuckwallas live in rocky desert and scrub of the American Southwest and
          northwestern Mexico, including parts of California, Arizona, Nevada, Utah, and Baja
          California. They are closely tied to rocky outcrops and lava flows, which provide
          basking sites, food nearby, and the all-important crevices they use for shelter
          and defence.
        </p>
      }
      diet={
        <p>
          Chuckwallas are mainly herbivores, feeding on leaves, flowers, fruit, and buds of
          desert plants, with the occasional insect. They are especially fond of yellow
          flowers such as those of brittlebush and other desert blooms. By eating and
          dispersing seeds, they play a role in their arid ecosystems, and they get much of
          their water from their plant diet.
        </p>
      }
      behavior={
        <p>
          Chuckwallas are diurnal and rely on the desert sun: they bask to warm up before
          becoming active, retreat to crevices during the hottest part of the day, and
          hibernate (brumate) through the cold months. Their signature defence is wedging:
          darting into a tight rock crack and inflating the body with air so they are nearly
          impossible to extract. Males are territorial and use head-bobs and push-up displays
          to defend basking sites and signal to rivals and mates.
        </p>
      }
      humanInteraction={
        <p>
          Chuckwallas are harmless, charismatic desert lizards and a favourite sighting for
          hikers in the American Southwest; they were also traditionally eaten by some
          Indigenous peoples. Common chuckwallas remain widespread, while some island
          species are restricted and of greater concern. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How does a chuckwalla protect itself?",
          answer:
            "By wedging and inflating. When threatened, a chuckwalla rushes into a crack between rocks and then gulps air to puff up its body, jamming itself so tightly into the crevice that a predator can't drag it out. Its loose, baggy skin makes this inflation especially effective.",
        },
        {
          question: "What do chuckwallas eat?",
          answer:
            "Chuckwallas are mainly herbivores, eating leaves, flowers, fruit, and buds of desert plants (they're particularly fond of yellow desert flowers), plus the odd insect. They get much of the water they need from this plant diet, which suits their dry, rocky desert home.",
        },
        {
          question: "Are chuckwallas dangerous?",
          answer:
            "Not at all — chuckwallas are harmless to people. They are shy, plant-eating lizards whose main response to danger is to flee into a rock crevice and wedge themselves in. They have no venom and pose no threat to humans.",
        },
        {
          question: "Where do chuckwallas live?",
          answer:
            "In rocky deserts and scrub of the southwestern United States and northwestern Mexico, including California, Arizona, Nevada, Utah, and Baja California. They depend on rocky outcrops and lava flows for basking and, crucially, for the crevices they use as shelter and defence.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Sauromalus ater (common chuckwalla)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Diet", value: "Mainly herbivore (desert plants)" },
        { label: "Signature defence", value: "Wedges into rocks & inflates" },
        { label: "Behaviour", value: "Day-active basker; brumates in cold" },
        { label: "Habitat", value: "Rocky North American desert" },
        { label: "Harmless", value: "Yes (no venom)" },
        { label: "Status", value: "Common; some island species rarer" },
      ]}
      relatedLinks={[
        { label: "Iguana Profile", href: "/animals/iguana", description: "A larger plant-eating lizard relative" },
        { label: "Gila Monster Profile", href: "/animals/gila-monster", description: "Another desert lizard (venomous)" },
        { label: "Anole Profile", href: "/animals/anole", description: "A small American lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American desert fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
