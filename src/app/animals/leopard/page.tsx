import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-18";

const title = "Leopard — Profile, Habitat, Diet & Behavior";
const description =
  "Panthera pardus: the most widely distributed big cat. Habitat adaptability, solitary lifestyle, ambush hunting, and the conservation pressures across its range.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/leopard",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function LeopardPage() {
  return (
    <AnimalProfileLayout
      commonName="Leopard"
      scientificName="Panthera pardus"
      pageTitle={title}
      description={description}
      path="/animals/leopard"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Big Cat", "Apex Predator"]}
      overview={
        <>
          <p>
            The leopard (<em>Panthera pardus</em>) is the most widely distributed of the
            big cats, with a range extending across large parts of sub-Saharan Africa and
            into Asia. Leopards are highly adaptable, solitary, and well known for the
            distinctive rosette pattern on their coat, which provides camouflage in dappled
            habitats from rainforest to rocky outcrops.
          </p>
          <p>
            <strong>Conservation note:</strong> The leopard is currently classified as{" "}
            <strong>Vulnerable</strong> on the IUCN Red List (verify current status at
            iucnredlist.org before publication). Several regional subspecies — for example
            the Amur leopard and Arabian leopard — are considered Critically Endangered.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Leopards occupy a wider range of habitats than any other big cat: savanna,
            woodland, rainforest, arid mountain terrain, and even peri-urban areas in parts
            of South Asia. They are accomplished climbers and frequently cache kills in trees
            to avoid scavengers such as hyenas and lions.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Leopards are opportunistic predators that take an unusually broad spectrum of
            prey, from small rodents and birds to medium-sized antelopes and primates. They
            hunt primarily by stalking and ambush, relying on cover and a powerful final
            charge rather than long pursuit. Their ability to switch between prey types is a
            key part of their ecological success.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Leopards are solitary and territorial. Adults maintain individual home ranges and
            communicate through scent marks, scrapes, and vocalisations. They are largely
            crepuscular and nocturnal, particularly in areas with significant human activity.
          </p>
          <p>
            Females raise cubs alone, and cubs typically remain with the mother for around
            one to two years before dispersing. Adult interaction outside of breeding and
            mother-offspring care is generally minimal.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Major threats include habitat loss and fragmentation, prey depletion, retaliatory
            killing in response to livestock predation, and illegal trade in skins. Some
            leopard populations have proved unusually resilient near human settlement —
            documented even in parts of Indian cities — but this coexistence carries
            significant conflict and welfare implications and is not generalisable across
            populations.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Leopards have a slim, long-bodied build with a comparatively small, rounded
                head and a long tail roughly half their body length. The base coat ranges
                from pale yellow on open-country individuals to a deeper gold or russet in
                forest-living populations, and is broken up by clusters of small dark
                <strong> rosettes</strong>. In adult leopards these rosettes are typically
                <em> plain</em> inside (with no central spot) — the single most reliable
                visual cue for distinguishing a leopard from a jaguar.
              </p>
              <p>
                A well-documented <strong>melanistic morph</strong> — popularly called a
                &quot;black panther&quot; — occurs in some leopard populations, particularly
                in dense forest in parts of Asia. The rosette pattern is still present and
                can be seen at close range under good light. Coat colour and rosette spacing
                vary with subspecies and individual; size, build and tail proportions are
                steadier identification cues. In the field, prey items cached in the fork of
                a tree are an indirect indicator of leopard presence.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Leopards are easily confused with jaguars (<em>P. onca</em>) and cheetahs (
          <em>Acinonyx jubatus</em>) by casual observers. They are members of the same genus{" "}
          <em>Panthera</em> as lions and tigers and are capable of roaring.
        </p>
      }
      comparisonCallouts={[
        { href: "/compare/leopard-vs-jaguar", label: "Leopard vs Jaguar" },
        { href: "/compare/cheetah-vs-leopard", label: "Cheetah vs Leopard" },
      ]}
      faqs={[
        {
          question: "How do you tell a leopard from a jaguar?",
          answer:
            "Leopards and jaguars look superficially similar but differ in build and rosette pattern. Jaguars are stockier, with broader heads and proportionally shorter legs; their rosettes commonly contain one or more small dark spots inside, while leopards' rosettes typically do not. Range is another reliable marker: leopards occur in Africa and Asia, jaguars in the Americas.",
        },
        {
          question: "What is a black panther?",
          answer:
            "'Black panther' is not a separate species. It refers to melanistic individuals of either the leopard (in Africa and Asia) or the jaguar (in the Americas). Their rosettes are still present and can be seen under appropriate lighting; only the overall coat pigmentation differs.",
        },
        {
          question: "Are leopards dangerous to humans?",
          answer:
            "Wild leopards are generally wary of humans and avoid contact. Attacks do occur in some contexts — for example where leopards have lost natural prey, where individuals are injured or aged, or in areas with very dense overlap between leopards and people. Cautious behaviour around leopard habitat is appropriate.",
        },
        {
          question: "Can leopards swim?",
          answer:
            "Yes. Leopards are capable swimmers, though water-based hunting is not as prominent a feature of their behaviour as it is for tigers or jaguars.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Panthera pardus" },
        { label: "Family", value: "Felidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Social structure", value: "Solitary (territorial)" },
        { label: "Primary habitat", value: "Forest, savanna, mountain, scrub" },
        { label: "Range", value: "Sub-Saharan Africa and parts of Asia" },
        { label: "Diet", value: "Wide range — small mammals to medium antelope" },
        { label: "IUCN Status", value: "Vulnerable (verify before publication)" },
      ]}
      relatedLinks={[
        { label: "Jaguar Profile", href: "/animals/jaguar", description: "Panthera onca — South & Central American big cat" },
        { label: "Cheetah Profile", href: "/animals/cheetah", description: "Fastest land animal" },
        { label: "Tiger Profile", href: "/animals/tiger", description: "Panthera tigris — largest cat species" },
        { label: "Leopard vs Jaguar", href: "/compare/leopard-vs-jaguar" },
        { label: "Cheetah vs Leopard", href: "/compare/cheetah-vs-leopard" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
