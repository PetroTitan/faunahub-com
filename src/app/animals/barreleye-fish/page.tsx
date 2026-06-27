import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/barreleye-fish";
const TITLE = "Barreleye Fish: The Deep-Sea Fish With a See-Through Head";
const DESC =
  "Meet the barreleye fish (Macropinna microstoma), a small deep-sea fish with tubular green eyes inside a transparent, fluid-filled dome over its head.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("barreleye-fish"),
});

export default function BarreleyeFishPage() {
  return (
    <AnimalProfileLayout
      commonName="Barreleye Fish"
      scientificName="family Opisthoproctidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Marine fish","Deep sea","Tubular eyes"]}
      image={getAnimalImage("barreleye-fish") ?? undefined}
      galleryImages={getAnimalGalleryImages("barreleye-fish")}
      sources={ANIMAL_SOURCES["barreleye-fish"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Barreleyes are small deep-sea fish in the family Opisthoproctidae, best known for their tubular, upward-pointing eyes. The most famous member, <em>Macropinna microstoma</em>, carries these features inside a remarkable transparent, fluid-filled dome that caps the front of the head. Through this clear shield the two green tubular eyes are visible, and they can rotate to look straight up or swing forward, giving the fish an unusual and flexible field of view in the dim deep ocean.
          </p>
          <p>
            These fish live in the twilight, or mesopelagic, layers of the open ocean and into the darker waters below. The upward-facing eyes are thought to detect the faint silhouettes of small drifting prey against the dim downwelling light from far above. Because barreleyes are small and live where sunlight barely reaches, they are encountered only rarely, mostly through expedition footage and specimens rather than everyday observation.
          </p>
          <p>
            Note: Much about barreleyes remains uncertain, and what we know comes mainly from a small number of live observations, notably by the research institute MBARI, together with preserved specimens. Details such as exact behaviour, range, and life history are still being studied, and any specific figures should be checked against authoritative marine sources such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, or WoRMS.
          </p>
        </>
      }
      habitat={
        <p>
          Barreleyes are representative of the open-ocean deep, commonly associated with the twilight (mesopelagic) zone and extending into the upper darker layers below it. This is a world of fading light, cold water, and increasing pressure, far from the seafloor and far below the sunlit surface. Depth zones such as these are educational frameworks rather than rigid boundaries, and the layers a given barreleye occupies can vary by species, life stage, region, and the source reporting it, so its habitat is best described in broad, qualitative terms rather than as a single fixed band.
        </p>
      }
      diet={
        <p>
          The barreleye has a small mouth and feeds on small drifting animals in the water column. In <em>Macropinna microstoma</em>, observations suggest it may also take prey associated with siphonophores, the long gelatinous drifting colonies of the open ocean. The ability to rotate its eyes forward is thought to help the fish line up and target food directly in front of its mouth when feeding, rather than only scanning upward.
        </p>
      }
      behavior={
        <>
          <p>
            From the limited footage available, barreleyes appear to hang quietly in the water, using their sensitive upward-pointing eyes to watch for the silhouettes of prey against the faint light from above. The rotating eyes are a notable behavioural feature: the fish can shift its gaze from looking up to looking forward, which is unusual among fishes and likely linked to spotting and then capturing prey. Because so few individuals have been observed alive, much of its day-to-day behaviour remains poorly known and is inferred from a handful of encounters.
          </p>
          <p>
            Barreleyes are adapted to a dim, cold, food-limited environment where sunlight is scarce. Their tubular eyes are highly sensitive and oriented to gather what little light filters down, helping them detect prey by silhouette. In <em>Macropinna microstoma</em>, the transparent, fluid-filled dome over the head is a striking adaptation that protects and houses the eyes while still letting light through, and the eyes&#39; ability to rotate adds flexibility in a habitat where food may pass by from different directions. Together these features reflect the broader challenge of deep-sea life: making the most of faint light and limited resources under steady pressure and cold.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People very rarely encounter barreleyes directly, since they live in deep water far offshore and are usually seen only through research submersibles, remotely operated vehicles, and net-caught specimens. They are not aquarium animals, and their fragile, transparent structures are difficult to observe intact outside their natural habitat. As with many deep-sea fish, their conservation status is not well assessed, and population trends are largely unknown; honest uncertainty is the most accurate position. Continued deep-sea exploration by institutions such as MBARI and NOAA remains the main way scientists learn more about how these fish live.
        </p>
      }
      faqs={[
        {
          question: "Why does the barreleye fish have a transparent head?",
          answer:
            "In Macropinna microstoma, the front of the head is capped by a clear, fluid-filled dome that lets light through to the eyes inside it. Researchers think this transparent shield protects the sensitive tubular eyes while still allowing the fish to see, including the faint light coming from above. Much about how the dome functions is still being studied.",
        },
        {
          question: "Can the barreleye fish really move its eyes?",
          answer:
            "Yes. The green tubular eyes of Macropinna microstoma can rotate within the transparent dome, shifting from pointing straight up to facing forward. This is thought to help the fish first spot prey silhouettes overhead and then line them up directly when feeding.",
        },
        {
          question: "How deep does the barreleye fish live?",
          answer:
            "Barreleyes are commonly associated with the twilight (mesopelagic) zone of the open ocean and extend into the darker waters below, well beneath the sunlit surface. Exact depths vary by species, region, and life stage, so their range is best described qualitatively rather than as a single fixed band.",
        },
        {
          question: "Is the barreleye fish endangered?",
          answer:
            "Its conservation status is not well assessed, which is common for deep-sea fish that are rarely observed. Population numbers and trends are largely unknown, so any specific claims should be treated cautiously and checked against authoritative marine sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Deep-sea fish (barreleyes)" },
        { label: "Higher classification", value: "Family Opisthoproctidae, including Macropinna microstoma" },
        { label: "Diet", value: "Small drifting animals; possibly prey associated with siphonophores" },
        { label: "Notable trait", value: "Tubular, upward-pointing eyes; in Macropinna microstoma, a transparent fluid-filled dome over the head" },
        { label: "Adaptation", value: "Highly sensitive rotating eyes suited to faint light and food-limited deep water" },
        { label: "Habitat", value: "Open-ocean water column, far from the seafloor" },
        { label: "Depth association", value: "Deep sea; commonly mesopelagic into upper darker layers" },
        { label: "Conservation status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "A deep-sea predator" },
        { label: "Hatchetfish Profile", href: "/animals/hatchetfish", description: "A silvery twilight-zone fish" },
        { label: "Lanternfish Profile", href: "/animals/lanternfish", description: "A glowing deep-sea fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
