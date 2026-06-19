import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dumbo-octopus";
const TITLE = "Dumbo Octopus — Profile, Deep-Sea Life & Behavior";
const DESC =
  "Explore the dumbo octopus (Grimpoteuthis): the deepest-living octopuses, named for the ear-like fins they flap to swim through the cold, dark ocean depths.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("dumbo-octopus"),
});

export default function DumboOctopusPage() {
  return (
    <AnimalProfileLayout
      commonName="Dumbo Octopus"
      scientificName="genus Grimpoteuthis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cephalopod", "Deep sea"]}
      image={getAnimalImage("dumbo-octopus") ?? undefined}
      galleryImages={getAnimalGalleryImages("dumbo-octopus")}
      sources={ANIMAL_SOURCES["dumbo-octopus"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Dumbo octopuses (genus <em>Grimpoteuthis</em>) are small, soft-bodied deep-sea
            octopuses named after the Disney elephant Dumbo, because of the pair of
            ear-like fins on top of the body that they flap to swim. They are among
            the deepest-living of all octopuses, found in the cold, dark waters far
            below the surface.
          </p>
          <p>
            Unlike shallow-water octopuses, dumbo octopuses lack an ink sac — there is
            little use for an ink screen in the lightless deep — and they move with a
            gentle, hovering style of swimming.
          </p>
          <p>
            <strong>Note:</strong> dumbo octopuses are rarely seen and mostly known
            from deep-sea expedition footage and specimens, so many details of their
            biology remain uncertain. Treat figures as general and verify against
            authoritative marine sources.
          </p>
        </>
      }
      habitat={
        <p>
          Dumbo octopuses live on or just above the deep ocean floor, among the
          deepest-dwelling of any octopus, in cold waters worldwide. They are
          typically found in the dark zones far below where sunlight reaches.
        </p>
      }
      diet={
        <p>
          They feed on small seafloor animals such as crustaceans, worms, and other
          invertebrates. Unusually for octopuses, dumbo octopuses tend to swallow
          prey whole rather than tearing it apart, an adaptation to feeding in the
          food-poor deep sea.
        </p>
      }
      behavior={
        <p>
          Dumbo octopuses swim by flapping their ear-like fins and steering with their
          webbed arms, hovering and drifting near the bottom. Living where food and
          mates are scarce, females are thought to be able to carry eggs at various
          stages and lay them when conditions allow. Their soft, gelatinous bodies
          suit the high-pressure deep-sea environment.
        </p>
      }
      humanInteraction={
        <p>
          People almost never encounter dumbo octopuses except through deep-sea
          research vehicles and expeditions, which have produced most of what we know
          about them. As with other deep-sea life, the main long-term concerns relate
          to growing human impacts on deep-ocean habitats. Consult authoritative
          marine sources for current information.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a dumbo octopus?",
          answer:
            "The name comes from the pair of fins on top of the body that look like big ears and recall the Disney elephant Dumbo. The octopus flaps these fins to swim, which adds to the resemblance.",
        },
        {
          question: "How deep do dumbo octopuses live?",
          answer:
            "They are among the deepest-living octopuses, found in cold, dark waters far below the sunlit surface. Exact depths vary and are still being documented through deep-sea expeditions, so specific figures should be checked against current marine references.",
        },
        {
          question: "Do dumbo octopuses squirt ink?",
          answer:
            "No. Unlike shallow-water octopuses, dumbo octopuses lack an ink sac. In the lightless deep sea an ink cloud would offer little protection, so this defence has been lost in these animals.",
        },
        {
          question: "What do dumbo octopuses eat?",
          answer:
            "They feed on small bottom-living invertebrates such as crustaceans and worms, and unusually they tend to swallow prey whole — a useful strategy where food is scarce and must not be wasted.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Grimpoteuthis" },
        { label: "Class", value: "Cephalopoda (molluscs)" },
        { label: "Named for", value: "Ear-like swimming fins" },
        { label: "Diet", value: "Small seafloor invertebrates" },
        { label: "Notable for", value: "Among deepest-living octopuses; no ink sac" },
        { label: "Habitat", value: "Deep ocean floor" },
        { label: "Range", value: "Cold deep waters worldwide" },
        { label: "Status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Octopus Profile", href: "/animals/octopus", description: "Octopuses more broadly" },
        { label: "Giant Squid Profile", href: "/animals/giant-squid", description: "Another deep-sea cephalopod" },
        { label: "Giant Isopod Profile", href: "/animals/giant-isopod", description: "A deep-sea crustacean" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
