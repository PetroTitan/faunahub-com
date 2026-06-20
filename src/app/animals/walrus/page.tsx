import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/walrus";
const TITLE = "Walrus — Profile, Tusks, Diet & Arctic Life";
const DESC =
  "Explore the walrus (Odobenus rosmarus): a huge, tusked Arctic marine mammal that hauls out in great herds, dives for clams, and depends on sea ice and shallow seas.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("walrus"),
});

export default function WalrusPage() {
  return (
    <AnimalProfileLayout
      commonName="Walrus"
      scientificName="Odobenus rosmarus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammal", "Pinniped", "Arctic"]}
      image={getAnimalImage("walrus") ?? undefined}
      galleryImages={getAnimalGalleryImages("walrus")}
      sources={ANIMAL_SOURCES.walrus}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The walrus (<em>Odobenus rosmarus</em>) is a massive, instantly recognisable
            marine mammal of the Arctic, famous for its long ivory tusks, bristly
            whiskers, and great bulk. It is a pinniped — related to seals and sea lions —
            and the only living species in its family. Both males and females grow tusks,
            which are enlarged canine teeth.
          </p>
          <p>
            Walruses gather in large herds on ice and coastlines, dive to the seabed to
            feed, and are closely tied to the cold, shallow seas and sea ice of the far
            north.
          </p>
          <p>
            <strong>Conservation note:</strong> walruses depend on sea ice and productive
            shallow seas, which makes them sensitive to a changing Arctic; status and
            subspecies differ. Verify current status at the IUCN Red List and NOAA.
          </p>
        </>
      }
      habitat={
        <p>
          Walruses live in the Arctic and subarctic, around the coasts and continental
          shelves of the Arctic Ocean and adjoining seas. They favour shallow waters
          where they can reach the seabed to feed, and they use sea ice and shorelines to
          rest, give birth, and gather in herds.
        </p>
      }
      diet={
        <p>
          Walruses feed mainly on bottom-living invertebrates, especially clams and other
          molluscs, along with worms and other seabed animals. They root along the bottom
          with their sensitive whiskers (vibrissae) and are thought to use strong suction
          to extract soft prey from shells.
        </p>
      }
      behavior={
        <p>
          Walruses are highly social and famously haul out in dense herds, sometimes
          numbering thousands, packed together on ice or beaches. The tusks are used in
          social display and dominance, to help haul the heavy body onto ice, and to
          maintain breathing holes. A thick layer of blubber insulates them against the
          cold, and they can dive repeatedly to forage.
        </p>
      }
      humanInteraction={
        <p>
          Walruses are culturally and nutritionally important to many Arctic Indigenous
          peoples, who have hunted them sustainably for generations. The main modern
          concerns are the loss of sea ice they rely on, disturbance at crowded haul-outs,
          and other pressures of a warming Arctic. For current status, consult
          authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "What do walruses use their tusks for?",
          answer:
            "Both male and female walruses have tusks (long canine teeth), used for several purposes: displaying dominance and fighting for status, helping haul the heavy body up onto ice (which inspired the old name \"tooth-walking sea-horse\"), and keeping breathing holes open in ice. They are not the main tool for feeding.",
        },
        {
          question: "What do walruses eat?",
          answer:
            "Mostly seabed invertebrates — especially clams and other molluscs, plus worms and similar animals. Walruses search the bottom with their sensitive whiskers and are believed to use powerful suction to pull soft parts from shells.",
        },
        {
          question: "Why do walruses gather in such big groups?",
          answer:
            "Walruses are very social and haul out together in large herds — on sea ice or, increasingly, on beaches — to rest and stay warm in numbers. Dense haul-outs can be vulnerable to disturbance, which can trigger dangerous stampedes, so they are sensitive to interference.",
        },
        {
          question: "Are walruses related to seals?",
          answer:
            "Yes. The walrus is a pinniped, the same broad group as true seals and sea lions, but it is the only living member of its own family. It shares the flippered, blubber-insulated, marine lifestyle of other pinnipeds.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Odobenus rosmarus" },
        { label: "Class", value: "Mammalia (pinniped)" },
        { label: "Relatives", value: "Seals & sea lions" },
        { label: "Tusks", value: "Enlarged canines (both sexes)" },
        { label: "Diet", value: "Seabed invertebrates (clams etc.)" },
        { label: "Behaviour", value: "Hauls out in large herds" },
        { label: "Range", value: "Arctic & subarctic seas" },
        { label: "IUCN Status", value: "Verify (sea-ice dependent)" },
      ]}
      relatedLinks={[
        { label: "Seal Profile", href: "/animals/seal", description: "A close pinniped relative" },
        { label: "Polar regions — Ocean fauna", href: "/fauna/ocean", description: "Cold-sea habitats in context" },
        { label: "Whale Profile", href: "/animals/whale", description: "Another Arctic-using marine mammal" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
