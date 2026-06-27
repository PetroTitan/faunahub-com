import type { Metadata } from "next";
import Link from "next/link";
import TaxonomyGroupLayout from "@/components/taxonomy/TaxonomyGroupLayout";
import { buildMetadata } from "@/lib/metadata";
import { getMarineGroups } from "@/lib/taxonomy/helpers";

const PATH = "/animal-taxonomy/marine-animal-groups";

export const metadata: Metadata = buildMetadata({
  title: "Marine Animal Groups — Reef, Deep-Sea, Open-Ocean & Seafloor Life",
  description:
    "Cross-cutting marine groupings on FaunaHub: reef animals, deep-sea life, open-ocean species, seafloor animals, and plankton — with coverage status and links to the ocean depth layer.",
  path: PATH,
});

export default function MarineAnimalGroupsPage() {
  return (
    <TaxonomyGroupLayout
      breadcrumbLabel="Marine animal groups"
      kicker="Cross-cutting · Marine"
      h1="Marine animal groups"
      path={PATH}
      groups={getMarineGroups()}
      intro={
        <>
          <p>
            Marine life can be grouped by where animals live in the sea — on
            reefs, in the open water column, on the seafloor, or in the deep.
            These are cross-cutting groupings that overlap with the vertebrate and
            invertebrate categories.
          </p>
          <p>
            They pair with FaunaHub&apos;s{" "}
            <Link
              href="/fauna/ocean"
              className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
            >
              ocean fauna by depth
            </Link>{" "}
            layer. Deep-sea groups are described from authoritative sources, and
            FaunaHub now publishes a substantial set of dedicated deep-sea
            profiles — from anglerfish and vampire squid to giant tube worms,
            yeti crabs, and glass sponges.
          </p>
        </>
      }
      faq={[
        {
          question: "Does FaunaHub profile deep-sea specialists?",
          answer:
            "Yes. FaunaHub now publishes dedicated, source-backed profiles for deep-sea specialists — including anglerfish, gulper eel, barreleye, hatchetfish, black dragonfish, snailfish, yeti crab, hydrothermal-vent tube worm, glass sponge, and deep-sea coral. The ocean depth pages link these profiles and place each cautiously in the zone(s) it is documented to occur in.",
        },
        {
          question: "Do these groups overlap?",
          answer:
            "Yes. A single animal can belong to several groupings — for example a shark is a vertebrate, a fish, and an open-ocean animal. These categories are lenses for discovery, not exclusive boxes.",
        },
      ]}
      related={[
        {
          title: "Related",
          links: [
            { label: "Ocean fauna by depth", href: "/fauna/ocean" },
            { label: "Vertebrates", href: "/animal-taxonomy/vertebrates" },
            { label: "Invertebrates", href: "/animal-taxonomy/invertebrates" },
            { label: "Marine animals encyclopedia", href: "/animal-encyclopedia/marine-animals" },
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
