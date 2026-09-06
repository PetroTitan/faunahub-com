import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/reindeer";
const TITLE = "Reindeer (Caribou) — Profile, Antlers, Migration & Habitat";
const DESC =
  "Explore the reindeer or caribou (Rangifer tarandus): the only deer in which both sexes grow antlers, plus its Arctic migrations and lichen winter diet.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("reindeer"),
});

export default function ReindeerPage() {
  return (
    <AnimalProfileLayout
      commonName="Reindeer"
      scientificName="Rangifer tarandus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Arctic","Deer"]}
      image={getAnimalImage("reindeer") ?? undefined}
      galleryImages={getAnimalGalleryImages("reindeer")}
      sources={ANIMAL_SOURCES.reindeer}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The reindeer (<em>Rangifer tarandus</em>) — called caribou in North America — is a deer of the Arctic and subarctic. It is the only deer species in which <strong>both males and females normally grow antlers</strong>, and one of very few large mammals that thrives year-round in the far north.
        </p>
        <p>
          Reindeer are built for cold: a dense two-layer coat, a compact body, and broad, splayed hooves that work as snowshoes on soft ground and as paddles when swimming. The hooves also change with the seasons, becoming harder in winter for digging through snow.
        </p>
        <p>
          <strong>Conservation note:</strong> reindeer and caribou are a single species split into several subspecies and populations, and those populations differ widely in trend and status. Verify current assessments at the IUCN Red List rather than treating the species as a single case.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Reindeer occupy Arctic tundra, boreal forest and mountain habitats across northern Europe, Siberia, Alaska, Canada and Greenland. Some populations undertake long seasonal migrations between calving grounds and wintering areas; others, particularly forest and island populations, are far more sedentary.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Reindeer are herbivores. In summer they eat a broad mix of grasses, sedges, herbs, and the leaves of willow and birch. In winter they depend heavily on lichens — especially the mat-forming &apos;reindeer lichen&apos; — which they reach by digging through snow with their hooves, a behaviour known as cratering.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Reindeer are gregarious and often form large herds, which in migratory populations can be enormous. Antlers are grown and shed annually, and the timing differs by sex: males typically shed after the autumn rut, while females often keep theirs through winter — an advantage when competing for feeding craters in the snow. Reindeer are strong swimmers and readily cross rivers and lake narrows on migration.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Reindeer have one of the longest relationships with people of any northern mammal. They are herded and semi-domesticated across Fennoscandia and Siberia — by Sámi, Nenets and other peoples — for meat, hides, milk and transport, while wild caribou remain central to subsistence in North America. Pressures include habitat fragmentation from roads and industry, changing snow and icing conditions, and disturbance on calving grounds. Status varies sharply by population; consult the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Are reindeer and caribou the same animal?",
          answer:
            "Yes. They are the same species, Rangifer tarandus. 'Reindeer' is the usual term in Europe and for herded, semi-domesticated animals; 'caribou' is used in North America for wild populations. Different subspecies and populations vary considerably in size, appearance and migratory behaviour.",
        },
        {
          question: "Do female reindeer have antlers?",
          answer:
            "Yes — and that makes reindeer unusual. It is the only deer species in which both sexes normally grow antlers. Males generally shed theirs after the autumn rut, while females often retain antlers through the winter, which helps them defend feeding craters dug in the snow.",
        },
        {
          question: "What do reindeer eat in winter?",
          answer:
            "Mostly lichens. Reindeer dig through snow with their hooves to reach mat-forming lichens, supplemented by whatever dried vegetation, mosses and shrub twigs are available. In summer the diet broadens to grasses, sedges, herbs and the leaves of willow and birch.",
        },
        {
          question: "Why do reindeer hooves click?",
          answer:
            "Reindeer have a tendon that slips over a bone in the foot as they walk, producing an audible click. It is a normal feature of the species and is thought to help animals keep contact with the herd, particularly in poor visibility or blowing snow.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Rangifer tarandus" },
        { label: "Family", value: "Cervidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Antlers", value: "Both sexes — unique among deer" },
        { label: "Winter diet", value: "Largely lichens, reached by digging" },
        { label: "Hooves", value: "Broad and splayed; harden in winter" },
        { label: "Range", value: "Arctic and subarctic, circumpolar" },
        { label: "Status", value: "Varies by population — verify" },
      ]}
      relatedLinks={[
        { label: "Moose Profile", href: "/animals/moose", description: "The largest living deer" },
        { label: "Elk Profile", href: "/animals/elk", description: "Another large northern deer" },
        { label: "Muskox Profile", href: "/animals/muskox", description: "A fellow Arctic tundra grazer" },
        { label: "Red Deer Profile", href: "/animals/red-deer" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
