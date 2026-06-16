import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByGroup } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/fish";

export const metadata: Metadata = buildMetadata({
  title: "Endangered Fish — IUCN Red List Threatened Species",
  description:
    "Source-reviewed list of threatened fish — sharks, rays, sawfish, sturgeon, and reef fish — with IUCN categories, verified references, and clear data limitations.",
  path: PATH,
});

export default function EndangeredFishPage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Fish"
      kicker="Animal group · Fish"
      h1="Endangered fish"
      path={PATH}
      records={getByGroup("fish")}
      hideGroup
      methodologyExtra="Many threatened fish are sharks and rays affected by fishing pressure. NOAA Fisheries is a primary source for the marine species below."
      intro={
        <>
          <p>
            Threatened fish in this selection are dominated by sharks, rays, and
            sawfish, alongside sturgeon, eels, and reef species. Several are
            slow-growing and late-maturing, which makes them especially
            sensitive to fishing pressure.
          </p>
          <p>
            Each record shows its IUCN category and links to authoritative
            sources, with NOAA Fisheries used for many marine species.
          </p>
        </>
      }
      faq={[
        {
          question: "Why are so many sharks threatened?",
          answer:
            "Sharks grow slowly, mature late, and produce few young, so populations recover slowly from overfishing and bycatch. Several hammerheads and the oceanic whitetip are assessed as Critically Endangered.",
        },
        {
          question: "Is the great white shark endangered?",
          answer:
            "The great white shark is globally assessed as Vulnerable. It is protected in many countries, but global population trends remain a concern. Always check the current IUCN assessment for the latest category.",
        },
        {
          question: "Is this every endangered fish?",
          answer:
            "No. This is a curated educational selection. The complete, current list is maintained on the official IUCN Red List.",
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
            {
              label: "Invertebrates",
              href: "/endangered-animals/invertebrates",
            },
          ],
        },
        {
          title: "Related encyclopedia",
          links: [
            { label: "Fish encyclopedia", href: "/animal-encyclopedia/fish" },
            {
              label: "Marine animals",
              href: "/animal-encyclopedia/marine-animals",
            },
            { label: "Endangered animals hub", href: "/endangered-animals" },
          ],
        },
      ]}
    />
  );
}
