import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/ribbon-worm";
const TITLE = "Ribbon Worm — Profile, the Soft Worm That Shoots Out a Hunting Proboscis";
const DESC =
  "Explore ribbon worms (phylum Nemertea): soft, unsegmented marine worms that catch prey by everting a long sticky (sometimes venomous) proboscis — and include perhaps the longest animal on Earth.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("ribbon-worm"),
});

export default function RibbonWormPage() {
  return (
    <AnimalProfileLayout
      commonName="Ribbon Worm"
      scientificName="phylum Nemertea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate", "Marine", "Predator"]}
      image={getAnimalImage("ribbon-worm") ?? undefined}
      galleryImages={getAnimalGalleryImages("ribbon-worm")}
      sources={ANIMAL_SOURCES["ribbon-worm"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Ribbon worms (phylum Nemertea) are soft, slender, unsegmented worms found mostly in the sea,
            sometimes brightly coloured, that look simple but hide a remarkable hunting tool. Coiled inside the
            body is a long, muscular proboscis that the worm can shoot out explosively — turning it inside out
            in an instant — to ensnare or stab prey. In some ribbon worms this proboscis is sticky and lassoes
            the victim; in others it is armed with a sharp stylet and venom.
          </p>
          <p>
            The group also holds an astonishing record: the bootlace worm (<em>Lineus longissimus</em>), a
            European ribbon worm, is among the longest animals ever recorded — washed-up specimens have been
            measured at extraordinary lengths, with one famous account exceeding many metres, far longer than
            a blue whale, though such worms are extremely thin and easily stretched.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;ribbon worm&rdquo; covers a whole phylum (mostly marine, a few in
            fresh water or on land); details here describe the group broadly. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Ribbon worms live mainly in the sea, all over the world — among rocks, seaweed, sediment, and
          sand, on the shore and seabed from the intertidal zone to the deep ocean. They often hide under
          stones, in crevices, or burrowed in mud and sand. A smaller number of nemerteans live in fresh water
          or in damp habitats on land.
        </p>
      }
      diet={
        <p>
          Most ribbon worms are active carnivores and scavengers, preying on other invertebrates such as
          small crustaceans, worms (including other ribbon worms), and molluscs, and feeding on carrion. The
          eversible proboscis is the key hunting weapon: it shoots out to wrap prey in sticky mucus or to
          jab it with a venom-tipped stylet, subduing the victim, which the worm then swallows or sucks dry.
        </p>
      }
      behavior={
        <p>
          Ribbon worms glide along on a layer of slippery mucus and can stretch and contract their soft
          bodies dramatically, which is why measuring their &ldquo;length&rdquo; is tricky — a relaxed worm
          may be many times longer than a contracted one. The proboscis sits in a fluid-filled cavity and is
          fired out by pressure, a strikingly fast and effective mechanism for such a simple-looking animal.
          Many ribbon worms are fragile and can fragment if handled, and some can regenerate from pieces.
          They are generally secretive, hiding by day and active in cover, and they range from tiny species to
          the immense, hair-thin bootlace worm.
        </p>
      }
      humanInteraction={
        <p>
          Ribbon worms are little known to most people but are common and ecologically important predators
          and scavengers of the seabed and shore, and they are of scientific interest both for their
          record-breaking lengths and for the potent compounds (toxins) some produce, which researchers
          study. They are harmless to people in normal circumstances. As marine animals they reflect the
          health of coastal and seabed habitats. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "How does a ribbon worm catch its prey?",
          answer:
            "With an eversible proboscis — a long tube coiled inside its body that the worm shoots out explosively, turning it inside out in an instant. In some ribbon worms the proboscis is sticky and lassoes the prey in mucus; in others it bears a sharp stylet and venom to stab and subdue the victim. Either way, it's a surprisingly powerful hunting weapon for such a soft, simple-looking animal.",
        },
        {
          question: "Is a ribbon worm really the longest animal on Earth?",
          answer:
            "It's a strong contender. The bootlace worm (Lineus longissimus), a European ribbon worm, is among the longest animals ever recorded — some washed-up specimens have been reported at extraordinary lengths, with one famous account far exceeding the length of a blue whale. The catch is that these worms are extremely thin and elastic, so their 'length' depends heavily on how much they're stretched.",
        },
        {
          question: "Are ribbon worms the same as earthworms?",
          answer:
            "No. Ribbon worms belong to their own phylum (Nemertea) and are unsegmented, unlike the segmented earthworms (which are annelids). Most ribbon worms are marine predators armed with an eversible proboscis, whereas earthworms are soil-dwelling detritivores. They're quite different groups of 'worms.'",
        },
        {
          question: "Are ribbon worms dangerous to people?",
          answer:
            "Not in normal circumstances. Although some ribbon worms produce potent toxins (used on their prey and studied by scientists), they are not a threat to humans going about ordinary activities. They're soft, mostly secretive animals; the sensible advice, as with any wildlife, is simply not to handle or eat them.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Phylum Nemertea (ribbon worms)" },
        { label: "Body", value: "Soft, slender, unsegmented (mostly marine)" },
        { label: "Signature trait", value: "Eversible proboscis (sticky or venom-tipped)" },
        { label: "Diet", value: "Carnivore & scavenger (invertebrates, carrion)" },
        { label: "Record", value: "Bootlace worm among the longest animals ever" },
        { label: "Note", value: "Very stretchy; fragile; some regenerate" },
        { label: "Not a", value: "Segmented earthworm (different phylum)" },
        { label: "To humans", value: "Harmless in normal circumstances" },
      ]}
      relatedLinks={[
        { label: "Earthworm Profile", href: "/animals/earthworm", description: "A segmented worm (different phylum)" },
        { label: "Velvet Worm Profile", href: "/animals/velvet-worm", description: "Another slime-shooting 'worm'" },
        { label: "Sea Squirt Profile", href: "/animals/sea-squirt", description: "Another soft-bodied seabed animal" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Seabed & shore habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
