import type { Metadata } from "next";
import CategoryPageLayout from "@/components/red-list/CategoryPageLayout";
import { buildMetadata } from "@/lib/metadata";
import { getByGroup } from "@/lib/red-list/helpers";

const PATH = "/endangered-animals/reptiles-amphibians";

export const metadata: Metadata = buildMetadata({
  title: "Endangered Reptiles & Amphibians — IUCN Red List Threatened Species",
  description:
    "Source-reviewed list of threatened reptiles and amphibians — sea turtles, crocodilians, tortoises, frogs, and salamanders — with IUCN categories and verified references.",
  path: PATH,
});

export default function EndangeredReptilesAmphibiansPage() {
  return (
    <CategoryPageLayout
      breadcrumbLabel="Reptiles & Amphibians"
      kicker="Animal group · Reptiles & Amphibians"
      h1="Endangered reptiles & amphibians"
      path={PATH}
      records={getByGroup("reptiles-amphibians")}
      hideGroup
      methodologyExtra="Amphibians are among the most threatened groups on Earth. This view includes one Extinct-in-the-Wild record, shown so the full range of outcomes is visible."
      intro={
        <>
          <p>
            This view groups threatened reptiles and amphibians together — sea
            turtles, crocodilians, and tortoises alongside frogs, salamanders,
            and the axolotl. Amphibians in particular face severe global
            declines linked to habitat loss and disease.
          </p>
          <p>
            Each record shows its IUCN category and links to authoritative
            sources such as NOAA Fisheries and Animal Diversity Web.
          </p>
        </>
      }
      faq={[
        {
          question: "Why are amphibians so threatened?",
          answer:
            "Amphibians are highly sensitive to habitat change, pollution, and disease — particularly the chytrid fungus, which has driven steep declines worldwide. Many are now assessed as Critically Endangered or worse.",
        },
        {
          question: "Are sea turtles reptiles?",
          answer:
            "Yes. Sea turtles are marine reptiles. Several species, such as the hawksbill and Kemp's ridley, are assessed as Critically Endangered, while others like the green turtle are Endangered.",
        },
        {
          question: "What does Extinct in the Wild mean here?",
          answer:
            "It means the species survives only in captivity or as an introduced population outside its natural range. The Kihansi spray toad is one such example, now the focus of a captive-breeding and reintroduction effort.",
        },
      ]}
      related={[
        {
          title: "Other groups",
          links: [
            { label: "Mammals", href: "/endangered-animals/mammals" },
            { label: "Birds", href: "/endangered-animals/birds" },
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
            {
              label: "Reptiles encyclopedia",
              href: "/animal-encyclopedia/reptiles",
            },
            { label: "Wildlife & biodiversity", href: "/wildlife" },
            { label: "Endangered animals hub", href: "/endangered-animals" },
          ],
        },
      ]}
    />
  );
}
