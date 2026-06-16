import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByGroup } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/invertebrates";

export const metadata: Metadata = buildMetadata({
  title: "Endangered Invertebrates — IUCN Red List Threatened Species",
  description:
    "Source-reviewed list of threatened invertebrates — corals, bumble bees, beetles, butterflies, and snails — with IUCN categories, verified references, and clear data limitations.",
  path: PATH,
});

export default function EndangeredInvertebratesPage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Invertebrates"
      kicker="Animal group · Invertebrates"
      h1="Endangered invertebrates"
      path={PATH}
      records={getByGroup("invertebrates")}
      hideGroup
      methodologyExtra="Invertebrates are vastly under-assessed relative to their diversity. The records below are well-documented examples, including reef-building corals and pollinators."
      intro={
        <>
          <p>
            Invertebrates make up most of animal life but are far less assessed
            than vertebrates. This selection highlights well-documented examples:
            reef-building corals, pollinating bumble bees, the migratory monarch,
            and a tree snail now Extinct in the Wild.
          </p>
          <p>
            Each record shows its IUCN category and links to authoritative
            sources such as NOAA Fisheries and the U.S. Fish &amp; Wildlife
            Service.
          </p>
        </>
      }
      faq={[
        {
          question: "Why do corals appear on an endangered-animals list?",
          answer:
            "Corals are colonial animals, not plants. Reef-building species such as staghorn and elkhorn coral are assessed as Critically Endangered due to warming seas, disease, and acidification.",
        },
        {
          question: "Is the monarch butterfly endangered?",
          answer:
            "The migratory monarch subspecies was listed as Endangered by the IUCN in 2022. The broader species has been assessed separately, so check which entry applies on the official IUCN Red List.",
        },
        {
          question: "Why are so few invertebrates listed?",
          answer:
            "Most invertebrate species have never been formally assessed for extinction risk. FaunaHub includes well-documented examples rather than guessing at unassessed species.",
        },
      ]}
      related={[
        {
          title: "Other groups",
          links: [
            { label: "Mammals", href: "/endangered-animals/mammals" },
            { label: "Birds", href: "/endangered-animals/birds" },
            {
              label: "Reptiles & Amphibians",
              href: "/endangered-animals/reptiles-amphibians",
            },
            { label: "Fish", href: "/endangered-animals/fish" },
          ],
        },
        {
          title: "Related encyclopedia",
          links: [
            {
              label: "Insects & invertebrates",
              href: "/animal-encyclopedia/insects",
            },
            { label: "Wildlife & biodiversity", href: "/wildlife" },
            { label: "Endangered animals hub", href: "/endangered-animals" },
          ],
        },
      ]}
    />
  );
}
