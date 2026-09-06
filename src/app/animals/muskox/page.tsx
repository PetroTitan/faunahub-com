import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/muskox";
const TITLE = "Muskox — Profile, Qiviut, Defensive Circle & Arctic Habitat";
const DESC =
  "Explore the muskox (Ovibos moschatus): an Arctic tundra grazer with qiviut underwool, a horn-boss helmet, and a defensive circle against wolves.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("muskox"),
});

export default function MuskoxPage() {
  return (
    <AnimalProfileLayout
      commonName="Muskox"
      scientificName="Ovibos moschatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Arctic","Bovid"]}
      image={getAnimalImage("muskox") ?? undefined}
      galleryImages={getAnimalGalleryImages("muskox")}
      sources={ANIMAL_SOURCES.muskox}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The muskox (<em>Ovibos moschatus</em>) is a heavy, long-haired bovid of the Arctic tundra. Despite the name it is neither a musk deer nor an ox: it belongs to the same family as sheep and goats, and its closest relatives are the goat-antelopes rather than cattle.
        </p>
        <p>
          Muskoxen are built around insulation. Beneath a long shaggy outer coat that hangs almost to the ground lies <strong>qiviut</strong>, an exceptionally fine and warm underwool that is shed in sheets each spring. Both sexes carry horns that meet across the forehead in a heavy boss in mature males.
        </p>
        <p>
          The species survived the end of the Pleistocene across the Arctic and now occupies a much reduced natural range in Greenland and Arctic Canada, with reintroduced and introduced herds in Alaska, Russia and Fennoscandia.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Muskoxen live on Arctic tundra in Greenland, the Canadian Arctic and Alaska, with introduced populations in Russia, Norway and elsewhere. They favour areas where wind keeps snow shallow in winter — river valleys, ridges and slopes — because deep or crusted snow makes feeding far harder.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Muskoxen are grazers and browsers, taking grasses, sedges, willow and birch twigs, forbs, mosses and lichens depending on the season. In winter they use their hooves and heads to break through snow to reach vegetation, and they conserve energy by moving as little as possible.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Muskoxen are herd animals, living in mixed groups that are larger in winter. Their best-known behaviour is the defensive formation: when threatened by wolves, the herd bunches into a line or circle with the adults facing outward and the calves protected behind, rather than scattering. Bulls compete in the rut with head-on charges that meet at the horn bosses. The &apos;musk&apos; of the name refers to the strong odour rutting bulls produce.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Muskoxen were hunted to local extinction in parts of their range and have since been reintroduced to several regions. They support subsistence hunting and small-scale qiviut production, and the wool is highly valued for its warmth and fineness. Modern pressures include icing events that seal vegetation under crust, disturbance, and changing predator and disease patterns. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a muskox a type of ox?",
          answer:
            "No. Despite the name, the muskox is not closely related to cattle. It is a bovid whose nearest relatives are the goat-antelopes — the group containing takin, serow and chamois — so it sits closer to sheep and goats than to oxen.",
        },
        {
          question: "What is qiviut?",
          answer:
            "Qiviut is the muskox's underwool: an extremely fine, light and warm fibre that grows beneath the long outer coat and is shed in sheets each spring. It is highly valued for knitwear and is one of the warmest natural fibres, which is what allows muskoxen to live on open Arctic tundra.",
        },
        {
          question: "Why do muskoxen form a circle?",
          answer:
            "It is a defence against wolves, their main natural predator. Instead of scattering — which would expose calves to a coursing predator — the herd bunches with adults facing outward, horns presented, and calves sheltered behind. The formation works well against wolves, though it offers little protection from armed hunters.",
        },
        {
          question: "What do muskoxen eat in winter?",
          answer:
            "Whatever they can reach beneath the snow: grasses, sedges, willow and birch twigs, mosses and lichens. They use their hooves and heads to break through snow, and prefer windswept ridges and slopes where the snow layer stays shallow. Ice crusts that seal off vegetation are a serious problem for them.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ovibos moschatus" },
        { label: "Family", value: "Bovidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Nearest relatives", value: "Goat-antelopes, not oxen" },
        { label: "Underwool", value: "Qiviut — exceptionally fine and warm" },
        { label: "Horns", value: "Both sexes; heavy boss in mature males" },
        { label: "Defence", value: "Outward-facing herd formation" },
        { label: "Range", value: "Greenland, Arctic Canada, Alaska (+ introduced)" },
      ]}
      relatedLinks={[
        { label: "Reindeer Profile", href: "/animals/reindeer", description: "A fellow Arctic tundra grazer" },
        { label: "Bison Profile", href: "/animals/bison", description: "Another large northern bovid" },
        { label: "Takin Profile", href: "/animals/takin", description: "A goat-antelope relative" },
        { label: "Alpine Ibex Profile", href: "/animals/alpine-ibex" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
