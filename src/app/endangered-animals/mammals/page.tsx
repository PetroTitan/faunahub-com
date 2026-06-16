import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByGroup } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/mammals";

export const metadata: Metadata = buildMetadata({
  title: "Endangered Mammals — IUCN Red List Threatened Species",
  description:
    "Source-reviewed list of threatened mammals — great apes, big cats, rhinos, elephants, and marine mammals — with IUCN categories, verified references, and clear data limitations.",
  path: PATH,
});

export default function EndangeredMammalsPage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Mammals"
      kicker="Animal group · Mammals"
      h1="Endangered mammals"
      path={PATH}
      records={getByGroup("mammals")}
      hideGroup
      methodologyExtra="Mammal records here range from Critically Endangered to Vulnerable. Several link to existing FaunaHub animal profiles for full natural history."
      intro={
        <>
          <p>
            Threatened mammals include some of the world&apos;s most recognised
            wildlife — great apes, big cats, rhinos, elephants, and marine
            mammals such as the vaquita. They are sorted below by risk level,
            highest first.
          </p>
          <p>
            Each record shows its IUCN category and links to authoritative
            sources. Confirm the current status on the official IUCN Red List.
          </p>
        </>
      }
      faq={[
        {
          question: "Which mammals are most at risk?",
          answer:
            "Among the highest-risk mammals are the vaquita, Javan and Sumatran rhinoceros, and several great apes — all assessed as Critically Endangered. The records above are ordered with the highest-risk categories first.",
        },
        {
          question: "Why are some big cats only Vulnerable?",
          answer:
            "Wide-ranging species such as the leopard and snow leopard are assessed as Vulnerable at the global level, even though particular subspecies or regional populations can be at much higher risk.",
        },
        {
          question: "Are these all endangered mammals?",
          answer:
            "No. This is a curated educational selection. The complete, current list is maintained on the official IUCN Red List.",
        },
      ]}
      related={[
        {
          title: "Other groups",
          links: [
            { label: "Birds", href: "/endangered-animals/birds" },
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
            { label: "Mammals encyclopedia", href: "/animal-encyclopedia/mammals" },
            { label: "Wildlife & biodiversity", href: "/wildlife" },
            { label: "Endangered animals hub", href: "/endangered-animals" },
          ],
        },
      ]}
    />
  );
}
