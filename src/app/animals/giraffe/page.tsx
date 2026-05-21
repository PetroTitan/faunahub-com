import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-21";

const title = "Giraffe — Profile, Habitat, Diet & Behavior";
const description =
  "Giraffa: the tallest extant land animal. Anatomy of the long neck, savanna habitat, herbivorous browsing, social structure, and current conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/giraffe",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("giraffe"),
});

export default function GiraffePage() {
  return (
    <AnimalProfileLayout
      commonName="Giraffe"
      pageTitle={title}
      description={description}
      path="/animals/giraffe"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Megafauna", "Herbivore"]}
      image={getAnimalImage("giraffe") ?? undefined}
      galleryImages={getAnimalGalleryImages("giraffe")}
      factsHeaderNote="Recent genetic work suggests multiple giraffe species rather than one; classifications differ between sources."
      overview={
        <>
          <p>
            Giraffes (genus <em>Giraffa</em>) are the tallest living land animals, native to
            sub-Saharan Africa. Their disproportionately long necks and legs, distinctive
            coat patterns, ossicones (horn-like skull protuberances), and specialised
            cardiovascular system are the most visually striking features of any large
            African mammal. Recent genetic studies have proposed splitting what was
            traditionally treated as a single species into multiple species; classifications
            differ between sources.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Giraffes are found in savanna, open woodland, and grassland with scattered trees
            across a range of African regions. They are non-migratory in the strict sense
            but use seasonal patterns of movement to track food and water availability.
            Populations are increasingly fragmented across their range due to land-use
            change.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Giraffes are browsers, feeding largely on the leaves and shoots of trees and
            shrubs — particularly Acacia species. Their long necks, prehensile tongues and
            tough lip and palate tissues allow them to feed on thorny vegetation that many
            other herbivores cannot easily access. A wild giraffe spends a large part of
            each day feeding.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Giraffes form loose social groups whose composition shifts over time
            (&quot;fission-fusion&quot; dynamics). Calves are sometimes left in nursery groups
            while adults feed at distance. Male giraffes engage in a behaviour called
            &quot;necking&quot;, in which they swing their long necks against one another to
            establish dominance during the breeding season.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Conservation pressures include habitat loss and fragmentation, civil conflict in
            parts of the range, illegal hunting for meat and skins, and the displacement of
            populations by infrastructure and agriculture. Several giraffe populations and
            recognised subspecies (or species, depending on classification) face significant
            risk. Up-to-date status by population is best taken from the IUCN Red List and
            current conservation organisations.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Giraffes are impossible to confuse with any other living animal. The
                silhouette alone — an exceptionally long neck and long legs, a narrow
                deep-chested body, and a sloping back — is diagnostic at any reasonable
                distance. The head carries one or more pairs of bony{" "}
                <strong>ossicones</strong> covered in skin and a small dark tuft of hair;
                ossicones are typically present in both sexes but tend to be larger,
                thicker, and balder on top in adult males that engage in &quot;necking&quot;
                contests.
              </p>
              <p>
                The coat is a tan-to-cream base broken by darker patches whose shape,
                outline, and spacing differ between species and subspecies. The reticulated
                giraffe shows large, clean-edged polygonal patches separated by sharp pale
                lines; the Masai giraffe carries irregular, jagged-edged blotches; the
                Rothschild&apos;s and southern giraffes show their own variants. Individual
                spot patterns are unique and are routinely used by researchers for
                identification. The tail is relatively short for the body, ending in a long
                dark tassel.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The okapi (<em>Okapia johnstoni</em>) is the giraffe&apos;s closest living relative
          — a forest-dwelling species of Central Africa with a much shorter neck and a
          strikingly different coat pattern. No other living animal closely resembles a
          giraffe in body plan.
        </p>
      }
      faqs={[
        {
          question: "Why do giraffes have such long necks?",
          answer:
            "The leading evolutionary hypotheses concern feeding (access to vegetation other browsers cannot reach) and intraspecific competition between males. Both pressures probably contributed. Despite their length, giraffe necks contain the same seven vertebrae found in other mammals — the individual bones are simply much longer.",
        },
        {
          question: "How tall is a giraffe?",
          answer:
            "Giraffes are the tallest living land animals. Heights vary by individual and population; precise figures should be taken from specific studies. Newborn calves are already large at birth, reflecting the long gestation typical of giraffe-sized mammals.",
        },
        {
          question: "How do giraffes drink water?",
          answer:
            "Because their forelegs are long and their necks, while long, do not reach the ground from a standing position, giraffes have to splay their forelegs and lower their head awkwardly to reach water — a posture in which they are momentarily vulnerable to ambush predators.",
        },
        {
          question: "Are there multiple giraffe species?",
          answer:
            "Traditionally, all giraffes were treated as a single species (Giraffa camelopardalis) with several subspecies. Recent genetic studies have proposed splitting them into multiple species. Classification is an active area of work and differs between sources.",
        },
      ]}
      quickFacts={[
        { label: "Genus", value: "Giraffa" },
        { label: "Family", value: "Giraffidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Browser (leaves and shoots of trees and shrubs)" },
        { label: "Social structure", value: "Loose, shifting groups (fission-fusion)" },
        { label: "Primary habitat", value: "Savanna and open woodland" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "IUCN Status", value: "Varies by population (verify current status)" },
      ]}
      relatedLinks={[
        { label: "Elephant Profile", href: "/animals/elephant", description: "Other African megafauna" },
        { label: "Zebra Profile", href: "/animals/zebra", description: "Equids of the African savanna" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
