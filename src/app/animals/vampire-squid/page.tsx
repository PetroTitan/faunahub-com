import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/vampire-squid";
const TITLE = "Vampire Squid (Vampyroteuthis infernalis): Deep-Sea Profile";
const DESC =
  "Meet the vampire squid (Vampyroteuthis infernalis), a small, gentle deep-sea cephalopod that drifts in the oxygen-minimum zone and feeds on sinking marine snow.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("vampire-squid"),
});

export default function VampireSquidPage() {
  return (
    <AnimalProfileLayout
      commonName="Vampire Squid"
      scientificName="Vampyroteuthis infernalis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate","Cephalopod","Deep sea"]}
      image={getAnimalImage("vampire-squid") ?? undefined}
      galleryImages={getAnimalGalleryImages("vampire-squid")}
      sources={ANIMAL_SOURCES["vampire-squid"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The vampire squid (<em>Vampyroteuthis infernalis</em>) is a small, gelatinous deep-sea cephalopod with a misleadingly dramatic name. Despite &quot;squid&quot; in its common name, it is neither a true squid nor an octopus: it is the only living member of its own order, Vampyromorphida, and it carries a mix of features shared with both groups. Its scientific name translates roughly to &quot;vampire squid from hell,&quot; a reference to its dark colouring and the cloak-like webbing stretched between its arms, not to any danger it poses. In reality it is a gentle, slow-moving animal of the deep, open ocean.
          </p>
          <p>
            Far from being a fierce hunter, the vampire squid is a detritivore that mostly gathers &quot;marine snow&quot; — the slow rain of sinking organic particles, including dead plankton and faecal material — using a pair of long, sticky, retractile filaments. It lives in cold, low-oxygen water in temperate and tropical oceans, drifting rather than chasing prey. Its body is dotted with light organs (photophores), and it can produce displays of light; when disturbed it can release a cloud of glowing mucus instead of the ink used by shallow-water relatives.
          </p>
          <p>
            Note: Much about the vampire squid remains uncertain and is known mainly from preserved specimens, scattered observations, and deep-sea expedition footage. Depth zones are educational frameworks rather than rigid boundaries, and details can vary by life stage, region, and source. Readers should check specific figures against authoritative marine sources such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, and WoRMS.
          </p>
        </>
      }
      habitat={
        <p>
          The vampire squid is commonly associated with the deep, open waters of temperate and tropical oceans, well below the sunlit surface. It is often found in the oxygen-minimum zone — a band of cold, low-oxygen water typically reported from mesopelagic into the upper bathypelagic depths, that is, the ocean&#39;s \&quot;twilight\&quot; zone reaching into the upper \&quot;midnight\&quot; zone. Rather than belonging to a single rigid layer, it is representative of animals adapted to life in this dim, low-oxygen midwater, and its exact distribution can vary with region and life stage. It is a midwater drifter, not a seafloor animal, and is not associated with hydrothermal vents or cold seeps.
        </p>
      }
      diet={
        <p>
          The vampire squid is a gentle detritivore rather than a predator of large prey. It feeds mostly on \&quot;marine snow\&quot; — sinking organic particles that include dead plankton, fragments of gelatinous animals, and faecal matter. To collect this food it deploys one of its long, thread-like retractile filaments into the surrounding water; particles stick to the filament and to mucus, and the animal then gathers the food toward its mouth. This low-energy feeding strategy suits the food-scarce deep ocean, where actively hunting would be costly.
        </p>
      }
      behavior={
        <>
          <p>
            This is a slow, drifting animal that conserves energy rather than pursuing prey. When threatened, it can turn its webbed arms up and over its body, exposing the dark inner surface and the soft spine-like cirri in what is often called the \&quot;pineapple\&quot; or \&quot;cloak\&quot; posture — a defensive display rather than an attack. Instead of releasing ink like shallow-water squid and octopuses, it can eject a cloud of bioluminescent (glowing) mucus, which may confuse or distract potential predators in the darkness. Its photophores allow it to produce points and flashes of light, likely used in defence and in navigating its dim world.
          </p>
          <p>
            The vampire squid is well suited to a habitat defined by darkness, cold, and scarce food. Its gelatinous, low-density body and reduced muscular effort help it survive in low-oxygen water where vigorous swimming would be difficult, and it has a metabolism geared toward conserving energy. Large eyes and numerous light organs reflect a life spent in near-total darkness, where bioluminescence is a primary means of signalling and defence. The long, sticky retractile filaments are a specialised feeding adaptation that lets it harvest drifting marine snow, allowing it to thrive on the thin, sinking food supply of the deep midwater rather than relying on hunting.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People very rarely encounter vampire squid directly, since the animals live in deep, low-oxygen water that humans cannot reach without specialised equipment. Most of what is known comes from preserved specimens collected by deep-sea expeditions and from observations and footage gathered by remotely operated vehicles, such as the long-term work in waters like Monterey Bay. Because deep-sea species are difficult to study, the conservation status of the vampire squid is not well assessed, and population figures are uncertain. It is a wild deep-ocean animal, not an aquarium pet, and there is no basis for keeping, handling, or caring for one.
        </p>
      }
      faqs={[
        {
          question: "Is the vampire squid actually a squid?",
          answer:
            "No. Despite its common name, Vampyroteuthis infernalis is not a true squid or an octopus. It is the only living member of its own order, Vampyromorphida, and shares some features with both groups while belonging to neither.",
        },
        {
          question: "Is the vampire squid dangerous to humans?",
          answer:
            "No. It is a small, gelatinous, slow-moving deep-sea animal and is harmless to people. Its dramatic name refers to its dark colour and cloak-like webbing, not to any threat it poses, and humans essentially never come into contact with it in the wild.",
        },
        {
          question: "What does the vampire squid eat?",
          answer:
            "It is a gentle detritivore that mostly feeds on \"marine snow\" — sinking organic particles such as dead plankton and faecal matter. It collects this food using long, sticky retractile filaments rather than hunting larger prey.",
        },
        {
          question: "Does the vampire squid use ink like other cephalopods?",
          answer:
            "Not in the usual way. Instead of the dark ink used by many shallow-water squid and octopuses, it can release a cloud of glowing, bioluminescent mucus when disturbed. This is thought to help confuse or distract predators in the darkness of the deep sea.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Cephalopod (sole living vampire squid)" },
        { label: "Higher classification", value: "Order Vampyromorphida; Vampyroteuthis infernalis" },
        { label: "Diet", value: "Detritivore; mostly \"marine snow\"" },
        { label: "Notable trait", value: "Cloak-like arm webbing; releases glowing mucus, not ink" },
        { label: "Adaptation", value: "Sticky retractile feeding filaments; photophores for the dark" },
        { label: "Habitat", value: "Cold, low-oxygen open ocean (oxygen-minimum zone)" },
        { label: "Depth association", value: "Deep sea; commonly mesopelagic to upper bathypelagic" },
        { label: "Conservation status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Dumbo Octopus Profile", href: "/animals/dumbo-octopus", description: "Another deep-sea cephalopod" },
        { label: "Giant Squid Profile", href: "/animals/giant-squid", description: "A deep-ocean cephalopod" },
        { label: "Octopus Profile", href: "/animals/octopus", description: "Cephalopods more broadly" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
