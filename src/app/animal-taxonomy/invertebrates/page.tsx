import type { Metadata } from "next";
import TaxonomyGroupLayout from "@/components/taxonomy/TaxonomyGroupLayout";
import { buildMetadata } from "@/lib/metadata";
import { getInvertebrateGroups } from "@/lib/taxonomy/helpers";

const PATH = "/animal-taxonomy/invertebrates";

export const metadata: Metadata = buildMetadata({
  title: "Invertebrates — Insects, Mollusks, Corals & More on FaunaHub",
  description:
    "How FaunaHub covers invertebrates — animals without a backbone, the great majority of animal diversity. Coverage status by group, plus the priority gaps we plan to fill.",
  path: PATH,
});

export default function InvertebratesPage() {
  return (
    <TaxonomyGroupLayout
      breadcrumbLabel="Invertebrates"
      kicker="Major group · Invertebrates"
      h1="Invertebrates on FaunaHub"
      path={PATH}
      groups={getInvertebrateGroups()}
      intro={
        <>
          <p>
            Invertebrates — animals without a backbone — make up the great
            majority of described animal species, from insects to corals and
            worms. This is the part of FaunaHub with the most room to grow.
          </p>
          <p>
            Below, each group shows its coverage status. Several groups are still
            marked &ldquo;planned&rdquo; — they have no profiles yet and are
            queued for verified expansion batches rather than thin pages.
          </p>
        </>
      }
      faq={[
        {
          question: "Why are invertebrates less covered?",
          answer:
            "Invertebrates are vastly diverse and unevenly documented, and good licensed images can be harder to source. FaunaHub is expanding here through dedicated batches (insects, mollusks, and more) with quality gates on sources and images.",
        },
        {
          question: "Are there really that many invertebrate species?",
          answer:
            "Invertebrates account for the overwhelming majority of described animal species, though exact totals vary by source and new species are described constantly. We avoid stating a single fixed number.",
        },
      ]}
      related={[
        {
          title: "Related",
          links: [
            { label: "Vertebrates", href: "/animal-taxonomy/vertebrates" },
            { label: "Marine animal groups", href: "/animal-taxonomy/marine-animal-groups" },
            { label: "Insects & invertebrates encyclopedia", href: "/animal-encyclopedia/insects" },
            { label: "Ocean fauna by depth", href: "/fauna/ocean" },
          ],
        },
        {
          title: "Coverage",
          links: [
            { label: "Missing animals", href: "/animal-taxonomy/missing-animals" },
            { label: "Coverage roadmap", href: "/animal-taxonomy/coverage-roadmap" },
          ],
        },
      ]}
    />
  );
}
