import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Koala — Profile, Habitat, Diet & Behavior";
const description =
  "Phascolarctos cinereus: Australia's eucalyptus-specialist marsupial. Tree-dwelling lifestyle, slow metabolism, conservation pressures including disease and fire.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/koala",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function KoalaPage() {
  return (
    <AnimalProfileLayout
      commonName="Koala"
      scientificName="Phascolarctos cinereus"
      pageTitle={title}
      description={description}
      path="/animals/koala"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Folivore"]}
      overview={
        <>
          <p>
            The koala (<em>Phascolarctos cinereus</em>) is an arboreal marsupial endemic to
            Australia. Despite the common nickname &quot;koala bear&quot;, koalas are not
            bears at all — they are marsupials, more closely related to wombats than to any
            bear. Koalas are notable for a highly specialised diet consisting almost
            entirely of eucalyptus leaves and for a low-energy lifestyle marked by long
            periods of rest in trees.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Koalas inhabit eucalypt forests, woodlands, and coastal mallee habitats across
            parts of eastern and southeastern Australia. Habitat distribution depends on the
            presence of specific preferred eucalyptus species, which varies regionally. Some
            local populations have been the subject of significant range contraction over
            recent decades.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Koalas are eucalyptus-leaf specialists. Their digestive system is adapted to
            process the relatively low-nutrient, toxic-compound-rich leaves of various
            <em> Eucalyptus</em> species. Koalas typically eat large daily amounts of leaves
            and obtain most of their water from the leaves themselves, though they will
            also drink free water when necessary, particularly during drought.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Koalas are almost entirely arboreal, descending to the ground primarily to move
            between trees. They spend a very large fraction of each day resting and feeding.
            Adult koalas are largely solitary and maintain overlapping home ranges. Mothers
            carry their developing joey in the pouch and then on the back after the joey is
            too large for the pouch.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Koala populations face significant pressures from habitat loss and
            fragmentation, vehicle strikes, dog attacks, chlamydial and other disease
            outbreaks, and large-scale fires — including the 2019–2020 Australian bushfires,
            which had severe impacts on populations in eastern Australia. Some populations
            are now listed under stronger protective categories than they were previously.
            Verify current status at iucnredlist.org and Australian conservation sources
            before publication.
          </p>
        </>
      }
      similarAnimals={
        <p>
          The koala&apos;s closest living relatives are wombats, also marsupials. Together
          they form the order Diprotodontia, which also includes kangaroos, possums, and a
          number of other Australian and surrounding-region species.
        </p>
      }
      faqs={[
        {
          question: "Are koalas bears?",
          answer:
            "No. Koalas are marsupials, not bears. The traditional nickname 'koala bear' is misleading. Their closest living relatives are wombats; they are not part of the family Ursidae.",
        },
        {
          question: "Why do koalas sleep so much?",
          answer:
            "Koalas have a low-energy lifestyle driven by their diet. Eucalyptus leaves are tough, low in available nutrients, and contain compounds that the koala must detoxify. Long rest periods help reduce energy demand and support digestion.",
        },
        {
          question: "Are koalas endangered?",
          answer:
            "Conservation status varies by population. Several Australian state and federal listings now classify some koala populations under stronger protective categories than previously, reflecting bushfire impacts, habitat loss, and disease. Always verify current designations on the IUCN Red List and Australian conservation sources before quoting.",
        },
        {
          question: "Can koalas eat anything other than eucalyptus?",
          answer:
            "Koalas are eucalyptus specialists. They may occasionally consume small amounts of leaves from a few other plant species, but their digestive physiology is built around eucalyptus and they cannot survive on most other foliage.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Phascolarctos cinereus" },
        { label: "Family", value: "Phascolarctidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Infraclass", value: "Marsupialia" },
        { label: "Diet", value: "Eucalyptus leaves (specialist)" },
        { label: "Lifestyle", value: "Arboreal, mostly solitary" },
        { label: "Primary habitat", value: "Eucalypt forest and woodland" },
        { label: "Range", value: "Eastern and southeastern Australia" },
        { label: "IUCN Status", value: "Varies by population (verify current status)" },
      ]}
      relatedLinks={[
        { label: "Kangaroo Profile", href: "/animals/kangaroo", description: "Iconic Australian marsupial" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
        { label: "Animal Comparisons", href: "/compare" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
