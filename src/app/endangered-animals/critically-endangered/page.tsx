import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByCategory } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/critically-endangered";

export const metadata: Metadata = buildMetadata({
  title: "Critically Endangered Animals — IUCN Red List (CR) Species",
  description:
    "Source-reviewed list of Critically Endangered (CR) animals across mammals, birds, reptiles, amphibians, fish, and invertebrates, with verified references and clear data limitations.",
  path: PATH,
});

export default function CriticallyEndangeredPage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Critically Endangered"
      kicker="Risk category · CR"
      h1="Critically Endangered animals"
      path={PATH}
      records={getByCategory("CR")}
      methodologyExtra="Critically Endangered is the highest risk category before extinction in the wild. Several entries below are well-known recovery cases — proof that a category is a snapshot, not a verdict."
      intro={
        <>
          <p>
            <strong>Critically Endangered (CR)</strong> species face an
            extremely high risk of extinction in the wild under IUCN criteria.
            This list spans every major animal group, from great apes and rhinos
            to corals and freshwater fish.
          </p>
          <p>
            Each record links to authoritative sources. Confirm the current
            status on the official IUCN Red List before relying on it — some of
            these species are the focus of intensive recovery programmes.
          </p>
        </>
      }
      faq={[
        {
          question: "What does Critically Endangered mean?",
          answer:
            "Critically Endangered (CR) is the IUCN category for species facing an extremely high risk of extinction in the wild, based on criteria such as severe population decline, very small population size, or a very restricted range.",
        },
        {
          question: "Can a Critically Endangered species recover?",
          answer:
            "Yes. Intensive conservation has pulled species back from the brink before. Recovery is difficult and not guaranteed, but the category can change as populations respond — which is why FaunaHub treats status as a dated snapshot.",
        },
        {
          question: "Is this every Critically Endangered animal?",
          answer:
            "No. This is a curated educational selection, not the complete IUCN list. For the full, current list, use the official IUCN Red List.",
        },
      ]}
      related={[
        {
          title: "Other risk levels",
          links: [
            { label: "Endangered", href: "/endangered-animals/endangered" },
            { label: "Vulnerable", href: "/endangered-animals/vulnerable" },
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
