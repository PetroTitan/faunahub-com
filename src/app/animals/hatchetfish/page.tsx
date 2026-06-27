import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hatchetfish";
const TITLE = "Marine Hatchetfish: Silvery Twilight-Zone Deep-Sea Fish";
const DESC =
  "Marine hatchetfish (family Sternoptychidae) are small, silvery deep-sea fish with belly light organs that hide their silhouette through counterillumination.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("hatchetfish"),
});

export default function HatchetfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Hatchetfish"
      scientificName="family Sternoptychidae (marine hatchetfish)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Marine fish","Deep sea","Bioluminescent"]}
      image={getAnimalImage("hatchetfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("hatchetfish")}
      sources={ANIMAL_SOURCES["hatchetfish"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Marine hatchetfish make up the family Sternoptychidae, which includes genera such as <em>Argyropelecus</em> and <em>Sternoptyx</em>. They are small, silvery fish with a deeply flattened, blade-like body whose thin profile recalls the head of a hatchet, giving the group its common name. They are fish of the open ocean&#39;s twilight zone, the dimly lit middle layers of the sea, and are completely unrelated to the freshwater aquarium fish also called hatchetfish (family Gasteropelecidae). The two groups simply share a body shape and a name.
          </p>
          <p>
            A defining feature is a row of downward-pointing light organs, called photophores, along the belly. These produce a faint glow that matches the dim light filtering down from the surface, a camouflage strategy known as counterillumination that erases the fish&#39;s silhouette when a predator looks up from below. Many marine hatchetfish also have large, sometimes upward-looking eyes suited to gathering what little light reaches their depths. They are abundant and ecologically important as prey for larger animals.
          </p>
          <p>
            Note: Much about marine hatchetfish remains known mainly from net-caught specimens and deep-sea expedition footage, and details vary by species, region, and life stage. Depth zones are educational frameworks rather than rigid boundaries, and many figures are uncertain. Readers should check specific claims against authoritative marine sources such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, and WoRMS.
          </p>
        </>
      }
      habitat={
        <p>
          Marine hatchetfish are characteristic of the ocean&#39;s mesopelagic, or &quot;twilight,&quot; zone, the layer below the sunlit surface where light fades toward darkness. They are typically associated with the open water column of this twilight zone, extending into deeper, darker waters in some species and at some life stages. Rather than being tied to a single fixed depth, members of the family are reported across a range of mid-water depths that shift with species, region, time of day, and age. They are pelagic animals of the open sea rather than seafloor dwellers, and exact depth bands should be treated cautiously and checked against authoritative marine sources.
        </p>
      }
      diet={
        <p>
          Marine hatchetfish feed on small drifting animals, including plankton and other tiny prey carried in the water column. Many rise toward shallower water at night to feed where food is more concentrated, then sink again by day. Their large eyes help them detect the faint shapes of prey in dim light. As small mid-water predators that are themselves heavily preyed upon, they form an important link in the food web that moves energy between the surface and the deeper sea.
        </p>
      }
      behavior={
        <>
          <p>
            Many marine hatchetfish take part in the daily vertical migration, one of the largest movements of animals on Earth. They rise toward the surface at night to feed and descend into darker, deeper water during the day, likely a balance between finding food and avoiding predators. This rhythm is not identical across all species or individuals, and patterns can vary with region and conditions. Their counterillumination glow is thought to work alongside this behaviour, helping conceal them from predators watching for silhouettes against the lighter water above.
          </p>
          <p>
            Life in the twilight zone means coping with dim light, cold, and food that is often scarce and patchy. Marine hatchetfish are adapted to these conditions with highly silvered, mirror-like sides that scatter and blend with the surrounding light, large light-gathering eyes, and belly photophores that produce a controlled glow for counterillumination. Their thin, compressed bodies and reflective surfaces make them difficult to see from the side as well as from below. These are not fearsome traits but practical solutions evolved by a small fish to survive and avoid being seen in a vast, sparsely lit ocean.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People rarely encounter marine hatchetfish directly, since they live in the open mid-waters of the sea far from shore and surface. Most of what is known comes from specimens collected in research nets and from cameras carried on deep-sea expeditions. They are not aquarium animals, and their abundance is best understood through their role as prey that supports larger ocean predators. Conservation status for most species in the family is not well assessed, which is typical for deep-sea fish, and any specific claims about their numbers or trends should be checked against authoritative marine sources.
        </p>
      }
      faqs={[
        {
          question: "Are marine hatchetfish the same as the aquarium hatchetfish?",
          answer:
            "No. Marine hatchetfish belong to the family Sternoptychidae and live in the open ocean's twilight zone. The freshwater aquarium fish also called hatchetfish belong to a separate family, Gasteropelecidae, and are unrelated. The two groups only share a similar body shape and a common name.",
        },
        {
          question: "Why do marine hatchetfish glow on their bellies?",
          answer:
            "Rows of downward-pointing light organs called photophores produce a faint glow that matches the dim light coming from above. This is a camouflage strategy known as counterillumination. By matching the background light, the fish erases its own silhouette so predators looking up from below have a harder time spotting it.",
        },
        {
          question: "How deep do marine hatchetfish live?",
          answer:
            "They are typically associated with the mesopelagic, or twilight, zone and the deeper waters below it, but the exact range varies by species, region, and life stage. Many also migrate upward at night and downward by day. Depth zones are educational frameworks rather than strict boundaries, so specific figures should be checked against authoritative marine sources.",
        },
        {
          question: "Are marine hatchetfish dangerous to people?",
          answer:
            "No. They are small fish, only a few centimetres long in many species, that live far from where people swim or dive. Their adaptations are for camouflage and survival in a dim, food-scarce environment, not for threatening larger animals. Most people will only ever see them in expedition footage or as preserved specimens.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Marine hatchetfish (deep-sea fish)" },
        { label: "Higher classification", value: "Family Sternoptychidae (e.g. Argyropelecus, Sternoptyx)" },
        { label: "Diet", value: "Plankton and small drifting animals" },
        { label: "Notable trait", value: "Thin, silvery, blade-like body shaped like a hatchet head" },
        { label: "Adaptation", value: "Belly photophores producing counterillumination camouflage" },
        { label: "Habitat", value: "Open ocean mid-waters (twilight zone)" },
        { label: "Depth association", value: "Deep sea; commonly mesopelagic (twilight zone) and deeper" },
        { label: "Conservation status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Lanternfish Profile", href: "/animals/lanternfish", description: "Another glowing twilight-zone fish" },
        { label: "Black Dragonfish Profile", href: "/animals/black-dragonfish", description: "A deep-sea predator" },
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "A deep-sea predator" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
