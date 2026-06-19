import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/elkhorn-coral";
const TITLE = "Elkhorn Coral — Profile, Reef Role & Conservation";
const DESC =
  "Explore elkhorn coral (Acropora palmata): a large, flattened branching coral that once built Caribbean reef crests and now ranks among the most threatened corals.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("elkhorn-coral"),
});

export default function ElkhornCoralPage() {
  return (
    <AnimalProfileLayout
      commonName="Elkhorn Coral"
      scientificName="Acropora palmata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cnidarian", "Stony coral", "Conservation priority"]}
      image={getAnimalImage("elkhorn-coral") ?? undefined}
      galleryImages={getAnimalGalleryImages("elkhorn-coral")}
      sources={ANIMAL_SOURCES["elkhorn-coral"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Elkhorn coral (<em>Acropora palmata</em>) is a large branching stony coral
            with broad, flattened branches that spread like the antlers of an elk. It
            was once one of the most important reef-building corals of the Caribbean,
            forming dense stands in shallow, high-energy water and creating the reef
            crest that shelters coastlines and marine life behind it.
          </p>
          <p>
            As with other reef corals, each colony is a community of tiny polyps sharing
            a hard skeleton and partnering with symbiotic algae for energy. Its sturdy,
            flattened branches are adapted to withstand strong waves.
          </p>
          <p>
            <strong>Conservation note:</strong> elkhorn coral has suffered severe
            declines and is widely recognised as critically endangered, affected by
            disease, bleaching from warming seas, storms, and other pressures. It is a
            priority for reef restoration. Verify current status at authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Elkhorn coral grows in warm, clear, shallow Caribbean and western Atlantic
          waters, typically in the wave-swept zone near the reef crest. Its strong,
          flattened branches are well suited to these high-energy shallows, where it
          historically built extensive reef framework.
        </p>
      }
      diet={
        <p>
          Like other reef-building corals, elkhorn coral captures plankton with its
          polyps&apos; stinging tentacles and obtains much of its energy from the
          symbiotic algae living in its tissues, which photosynthesise in the bright,
          shallow water it favours.
        </p>
      }
      behavior={
        <p>
          Elkhorn coral grows relatively quickly for a coral and, like its staghorn
          relative, can reproduce both by spawning and by fragmentation — broken pieces
          can reattach and grow. This makes it suitable for coral nursery and
          restoration efforts, which aim to rebuild the reef crests it once dominated.
        </p>
      }
      humanInteraction={
        <p>
          Beyond its ecological role, elkhorn coral helps protect shorelines by
          absorbing wave energy at the reef crest, so its loss has consequences for
          coastal communities as well as marine life. Restoration projects grow and
          replant it, while reducing warming and disease pressures remains essential.
          Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "How is elkhorn coral different from staghorn coral?",
          answer:
            "Both are branching Caribbean Acropora corals, but elkhorn coral has broad, flattened branches (like an elk's antlers) and tends to grow in shallow, wave-swept reef crests, while staghorn coral has slender, cylindrical branches. Both are fast-growing reef builders and both are critically endangered.",
        },
        {
          question: "Why does elkhorn coral matter for coastlines?",
          answer:
            "Elkhorn coral builds the shallow reef crest that absorbs wave energy before it reaches shore. Healthy stands therefore help protect coastlines from erosion and storm damage, so losing them affects people as well as reef wildlife.",
        },
        {
          question: "Why is elkhorn coral endangered?",
          answer:
            "It has declined steeply due to disease, bleaching driven by warming seas, storm damage, and other pressures, and is widely recognised as critically endangered. Its shallow, exposed habitat and branching form add to its vulnerability.",
        },
        {
          question: "Can elkhorn coral be restored?",
          answer:
            "Yes, in part. Because fragments can reattach and grow, restoration programmes cultivate elkhorn coral in nurseries and transplant it onto reefs. Long-term recovery still depends on reducing the underlying threats, especially ocean warming and disease.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Acropora palmata" },
        { label: "Type", value: "Branching stony coral" },
        { label: "Class", value: "Anthozoa (cnidarians)" },
        { label: "Branches", value: "Broad, flattened (elk-antler-like)" },
        { label: "Role", value: "Builds wave-resistant reef crest" },
        { label: "Range", value: "Caribbean & western Atlantic" },
        { label: "Conservation", value: "Critically endangered (verify)" },
        { label: "Main threats", value: "Disease, bleaching, storms" },
      ]}
      relatedLinks={[
        { label: "Staghorn Coral Profile", href: "/animals/staghorn-coral", description: "A slender-branched Caribbean relative" },
        { label: "Coral Profile", href: "/animals/coral", description: "Corals as a whole" },
        { label: "Brain Coral Profile", href: "/animals/brain-coral", description: "A boulder-shaped reef coral" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
