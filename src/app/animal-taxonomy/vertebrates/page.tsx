import type { Metadata } from "next";
import TaxonomyGroupLayout from "@/components/taxonomy/TaxonomyGroupLayout";
import { buildMetadata } from "@/lib/metadata";
import { getVertebrateClasses } from "@/lib/taxonomy/helpers";

const PATH = "/animal-taxonomy/vertebrates";

export const metadata: Metadata = buildMetadata({
  title: "Vertebrates — Mammals, Birds, Reptiles, Amphibians & Fish on FaunaHub",
  description:
    "How FaunaHub covers vertebrates — animals with a backbone. Mammals, birds, reptiles, amphibians, and fish, with coverage status and links to existing profiles. Representative, not complete.",
  path: PATH,
});

export default function VertebratesPage() {
  return (
    <TaxonomyGroupLayout
      breadcrumbLabel="Vertebrates"
      kicker="Major group · Vertebrates"
      h1="Vertebrates on FaunaHub"
      path={PATH}
      groups={getVertebrateClasses()}
      intro={
        <>
          <p>
            Vertebrates — animals with a backbone — are FaunaHub&apos;s strongest
            area of coverage. They include mammals, birds, reptiles, amphibians,
            and fish.
          </p>
          <p>
            Each group below shows its current coverage status and the profiles
            already published, plus well-known animals still on the roadmap. This
            is representative coverage, not a complete inventory.
          </p>
        </>
      }
      faq={[
        {
          question: "Is “fish” a single group?",
          answer:
            "Not in evolutionary terms. “Fish” is an informal grouping that spans several lineages (such as cartilaginous and bony fishes). We use it as a familiar category while noting it is not a single branch of the tree of life.",
        },
        {
          question: "Why are amphibians less covered than mammals?",
          answer:
            "FaunaHub started with widely recognised mammals and birds. Amphibians are a priority for upcoming batches, with profiles added only where sources and licensed images allow.",
        },
      ]}
      related={[
        {
          title: "Related",
          links: [
            { label: "Invertebrates", href: "/animal-taxonomy/invertebrates" },
            { label: "Marine animal groups", href: "/animal-taxonomy/marine-animal-groups" },
            { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
            { label: "Fauna by Continent", href: "/fauna/continents" },
            { label: "Endangered Animals", href: "/endangered-animals" },
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
