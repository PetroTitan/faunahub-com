import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByCategory } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/vulnerable";

export const metadata: Metadata = buildMetadata({
  title: "Vulnerable Animals — IUCN Red List (VU) Species",
  description:
    "Source-reviewed list of Vulnerable (VU) animals across mammals, birds, reptiles, amphibians, fish, and invertebrates, with verified references and clear data limitations.",
  path: PATH,
});

export default function VulnerablePage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Vulnerable"
      kicker="Risk category · VU"
      h1="Vulnerable animals"
      path={PATH}
      records={getByCategory("VU")}
      methodologyExtra="Vulnerable is the entry point to the threatened categories. A Vulnerable listing is a warning sign, not a crisis — but it can shift in either direction."
      intro={
        <>
          <p>
            <strong>Vulnerable (VU)</strong> species face a high risk of
            extinction in the wild under IUCN criteria. This is the first of the
            three threatened categories and includes widely recognised animals
            such as the snow leopard, giant panda, and great white shark.
          </p>
          <p>
            A Vulnerable listing means a species needs attention, not that it is
            already disappearing. Confirm the current category on the official
            IUCN Red List.
          </p>
        </>
      }
      faq={[
        {
          question: "What does Vulnerable mean?",
          answer:
            "Vulnerable (VU) is the IUCN category for species facing a high risk of extinction in the wild. It is the least severe of the three threatened categories, below Endangered and Critically Endangered.",
        },
        {
          question: "Why is the giant panda only Vulnerable?",
          answer:
            "The giant panda was reclassified from Endangered to Vulnerable in 2016 after decades of habitat protection increased its numbers. It is a frequently cited example of conservation status improving — though the species still depends on continued protection.",
        },
        {
          question: "Does Vulnerable mean a species is not at risk?",
          answer:
            "No. Vulnerable still indicates a high extinction risk. It simply sits below Endangered and Critically Endangered on the IUCN scale.",
        },
      ]}
      related={[
        {
          title: "Other risk levels",
          links: [
            {
              label: "Critically Endangered",
              href: "/endangered-animals/critically-endangered",
            },
            { label: "Endangered", href: "/endangered-animals/endangered" },
          ],
        },
        {
          title: "Understand the data",
          links: [
            {
              label: "Red List categories explained",
              href: "/endangered-animals/red-list-explained",
            },
            {
              label: "Data methodology",
              href: "/endangered-animals/red-list-data-methodology",
            },
            { label: "Endangered animals hub", href: "/endangered-animals" },
          ],
        },
      ]}
    />
  );
}
