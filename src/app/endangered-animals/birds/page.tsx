import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByGroup } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/birds";

export const metadata: Metadata = buildMetadata({
  title: "Endangered Birds — IUCN Red List Threatened Species",
  description:
    "Source-reviewed list of threatened birds — condors, eagles, parrots, cranes, vultures, and penguins — with IUCN categories, verified references, and clear data limitations.",
  path: PATH,
});

export default function EndangeredBirdsPage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Birds"
      kicker="Animal group · Birds"
      h1="Endangered birds"
      path={PATH}
      records={getByGroup("birds")}
      hideGroup
      methodologyExtra="Bird conservation status is reassessed frequently. At least one record below reflects a recent up-listing; always confirm the current category on IUCN."
      intro={
        <>
          <p>
            Threatened birds in this selection range from raptors and parrots to
            cranes, vultures, and penguins. Some — such as the California condor —
            are intensively managed recovery programmes.
          </p>
          <p>
            Each record shows its IUCN category and links to authoritative
            sources, including the Cornell Lab and national agencies where
            relevant.
          </p>
        </>
      }
      faq={[
        {
          question: "Which birds are Critically Endangered?",
          answer:
            "The selection includes the California condor, Philippine eagle, kākāpō, and several macaws and vultures among its Critically Endangered records, ordered highest-risk first.",
        },
        {
          question: "Why do bird categories change so often?",
          answer:
            "Bird populations are monitored closely by organisations such as BirdLife International, so new survey data regularly triggers reassessments. A category can move up or down between IUCN updates.",
        },
        {
          question: "Is this every endangered bird?",
          answer:
            "No. This is a curated educational selection, not the full IUCN list. Use the official IUCN Red List for the complete, current data.",
        },
      ]}
      related={[
        {
          title: "Other groups",
          links: [
            { label: "Mammals", href: "/endangered-animals/mammals" },
            {
              label: "Reptiles & Amphibians",
              href: "/endangered-animals/reptiles-amphibians",
            },
            { label: "Fish", href: "/endangered-animals/fish" },
            {
              label: "Invertebrates",
              href: "/endangered-animals/invertebrates",
            },
          ],
        },
        {
          title: "Related encyclopedia",
          links: [
            { label: "Birds encyclopedia", href: "/animal-encyclopedia/birds" },
            { label: "Birdwatching", href: "/birdwatching" },
            { label: "Endangered animals hub", href: "/endangered-animals" },
          ],
        },
      ]}
    />
  );
}
