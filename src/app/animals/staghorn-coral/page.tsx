import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/staghorn-coral";
const TITLE = "Staghorn Coral — Profile, Fast Growth & Conservation";
const DESC =
  "Explore staghorn coral (Acropora cervicornis): a fast-growing, branching reef coral that builds thickets of habitat — and a Caribbean species now critically endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("staghorn-coral"),
});

export default function StaghornCoralPage() {
  return (
    <AnimalProfileLayout
      commonName="Staghorn Coral"
      scientificName="Acropora cervicornis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cnidarian", "Stony coral", "Conservation priority"]}
      image={getAnimalImage("staghorn-coral") ?? undefined}
      galleryImages={getAnimalGalleryImages("staghorn-coral")}
      sources={ANIMAL_SOURCES["staghorn-coral"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Staghorn coral (<em>Acropora cervicornis</em>) is a branching stony coral
            named for its antler-like growth, with slender cylindrical branches that
            form dense thickets. It is one of the fastest-growing of all reef corals,
            and historically it was a major builder of Caribbean reefs, creating
            complex habitat for fish and other reef life.
          </p>
          <p>
            Like other reef corals, each colony is built of countless tiny polyps that
            share a hard skeleton and rely heavily on symbiotic algae for energy. Its
            quick growth lets staghorn coral build reef structure rapidly — but also
            makes it fragile.
          </p>
          <p>
            <strong>Conservation note:</strong> staghorn coral has declined
            dramatically and is widely recognised as critically endangered, hit hard by
            disease, bleaching from warming seas, storms, and other pressures. It is a
            major focus of reef restoration. Verify current status at authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Staghorn coral grows in warm, clear, shallow waters of the Caribbean and
          western Atlantic, typically on fore-reef and back-reef areas with good light
          and water movement. Its thickets once dominated many shallow Caribbean reefs.
        </p>
      }
      diet={
        <p>
          Staghorn coral feeds by capturing plankton with the stinging tentacles of its
          polyps and, crucially, by drawing energy from the photosynthetic algae living
          in its tissues. This algal partnership supports the coral&apos;s rapid growth
          in sunlit shallow water.
        </p>
      }
      behavior={
        <p>
          Staghorn coral grows quickly for a coral, extending its branches and
          spreading. It can reproduce both by spawning (releasing eggs and sperm) and
          by fragmentation — broken branches can reattach and grow into new colonies,
          a trait now used in coral nurseries and restoration projects to regrow lost
          reef.
        </p>
      }
      humanInteraction={
        <p>
          Once a cornerstone of Caribbean reefs, staghorn coral&apos;s steep decline has
          made it a flagship for coral conservation. Restoration programmes grow
          fragments in underwater nurseries and replant them on degraded reefs.
          Reducing the underlying threats — especially warming seas and disease — is
          essential. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is staghorn coral important?",
          answer:
            "It is one of the fastest-growing reef corals and historically built much of the structure of shallow Caribbean reefs. Its branching thickets create shelter and habitat for many fish and other animals, so its loss affects the whole reef community.",
        },
        {
          question: "Why is staghorn coral endangered?",
          answer:
            "Staghorn coral has declined dramatically due to disease (such as white-band disease), bleaching driven by warming seas, storm damage, and other pressures. It is widely recognised as critically endangered, and its fragile branching form makes it especially vulnerable.",
        },
        {
          question: "Can staghorn coral be regrown?",
          answer:
            "Yes — and this is central to its conservation. Because broken fragments can reattach and keep growing, restoration projects grow staghorn pieces in underwater nurseries and transplant them onto damaged reefs. Tackling the root threats remains essential for long-term success.",
        },
        {
          question: "Is staghorn coral one animal?",
          answer:
            "No — it's a colony. Each staghorn coral is made of many tiny animals called polyps that share a single branching skeleton, growing together to form the antler-like structure.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Acropora cervicornis" },
        { label: "Type", value: "Branching stony coral" },
        { label: "Class", value: "Anthozoa (cnidarians)" },
        { label: "Notable for", value: "Fast growth; reef-building" },
        { label: "Reproduction", value: "Spawning + fragmentation" },
        { label: "Range", value: "Caribbean & western Atlantic" },
        { label: "Conservation", value: "Critically endangered (verify)" },
        { label: "Main threats", value: "Disease, bleaching, storms" },
      ]}
      relatedLinks={[
        { label: "Elkhorn Coral Profile", href: "/animals/elkhorn-coral", description: "A related branching Caribbean coral" },
        { label: "Coral Profile", href: "/animals/coral", description: "Corals as a whole" },
        { label: "Brain Coral Profile", href: "/animals/brain-coral", description: "A boulder-shaped reef coral" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
