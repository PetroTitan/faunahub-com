import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByCategory } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/endangered";

export const metadata: Metadata = buildMetadata({
  title: "Endangered Animals — IUCN Red List (EN) Species",
  description:
    "Source-reviewed list of Endangered (EN) animals across mammals, birds, reptiles, amphibians, fish, and invertebrates, with verified references and clear data limitations.",
  path: PATH,
});

export default function EndangeredPage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Endangered"
      kicker="Risk category · EN"
      h1="Endangered animals"
      path={PATH}
      records={getByCategory("EN")}
      methodologyExtra="Endangered sits one step below Critically Endangered. Some species here are linked to existing FaunaHub animal profiles for their full natural history."
      intro={
        <>
          <p>
            <strong>Endangered (EN)</strong> species face a very high risk of
            extinction in the wild under IUCN criteria. Many are familiar
            animals — tigers, chimpanzees, and the Asian elephant among them.
          </p>
          <p>
            Where FaunaHub already publishes a detailed animal profile, the
            record links straight to it. Always confirm the current category on
            the official IUCN Red List.
          </p>
        </>
      }
      faq={[
        {
          question: "What does Endangered mean?",
          answer:
            "Endangered (EN) is the IUCN category for species facing a very high risk of extinction in the wild — a step below Critically Endangered and a step above Vulnerable.",
        },
        {
          question: "Why is the tiger listed as Endangered?",
          answer:
            "The tiger (Panthera tigris) is assessed as Endangered at the species level. Some tiger subspecies are at even higher risk. FaunaHub links the record to its full tiger profile and to the IUCN entry so you can check the latest assessment.",
        },
        {
          question: "Is this the complete list of Endangered animals?",
          answer:
            "No. It is a curated educational selection. The full, current list lives on the official IUCN Red List.",
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
              label: "How conservation status works",
              href: "/endangered-animals/how-conservation-status-works",
            },
            { label: "Endangered animals hub", href: "/endangered-animals" },
          ],
        },
      ]}
    />
  );
}
