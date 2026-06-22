import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fiddler-crab";
const TITLE = "Fiddler Crab — Profile, the Waving Crab with One Giant Claw";
const DESC =
  "Explore fiddler crabs (genus Uca and allies): small mudflat and mangrove crabs whose males wield one enormous claw, waved in courtship displays — and tireless recyclers of coastal mud.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("fiddler-crab"),
});

export default function FiddlerCrabPage() {
  return (
    <AnimalProfileLayout
      commonName="Fiddler Crab"
      scientificName="genus Uca and allies"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Crustacean", "Intertidal", "Mangrove"]}
      image={getAnimalImage("fiddler-crab") ?? undefined}
      galleryImages={getAnimalGalleryImages("fiddler-crab")}
      sources={ANIMAL_SOURCES["fiddler-crab"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Fiddler crabs (genus <em>Uca</em> and related genera) are small, lively crabs of
            tropical and temperate mudflats, beaches, and mangroves, famous for the males&apos;
            spectacular mismatched claws. A male fiddler crab has one ordinary small claw and one
            massively enlarged claw — sometimes nearly as big as the rest of his body — which he
            waves about to court females and warn off rivals. The pose, with the big claw held up
            and the small one moving to the mouth, looks a little like playing a fiddle, giving
            the crab its name.
          </p>
          <p>
            Females, by contrast, have two small claws and use both to feed. Where they are
            abundant, fiddler crabs swarm over the mud at low tide in their thousands, dotting it
            with their burrows.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;fiddler crab&rdquo; covers many species; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Fiddler crabs live along sheltered tropical and warm-temperate coasts around the world,
          on intertidal mudflats and sandflats, salt marshes, lagoons, and mangrove forests. They
          dig burrows in the soft sediment, where they retreat at high tide and to escape danger,
          emerging at low tide to feed and display on the exposed flats.
        </p>
      }
      diet={
        <p>
          Fiddler crabs are deposit feeders that sift through mud and sand for food. Using their
          small claw (or both claws, in females), they scoop sediment to the mouth, where special
          mouthparts separate out tiny edible bits — algae, bacteria, decaying matter, and
          microbes — and discard the cleaned grains as little balls of sediment left scattered
          around their burrows. Because the male&apos;s one giant claw is useless for feeding, he
          must feed with only his single small claw, so he eats more slowly than the female.
        </p>
      }
      behavior={
        <p>
          The waving of the great claw is the heart of fiddler-crab life: males signal with
          species-specific waving patterns to attract females and to challenge rival males,
          sometimes grappling claw-to-claw over burrows and mates. If a male loses his big claw,
          he can regrow one — and the regrown claw may differ from the original. Fiddler crabs are
          tightly tuned to the tides, active on the exposed mud at low tide and sealing themselves
          into their burrows as the water returns, and they are alert and quick to dash
          underground at any threat. By constantly turning over and aerating the sediment as they
          feed and burrow, fiddler crabs play an important role in keeping coastal mud and
          mangrove ecosystems healthy.
        </p>
      }
      humanInteraction={
        <p>
          Fiddler crabs are harmless, fascinating little animals, popular with naturalists and
          photographers and sometimes kept in brackish aquariums. Ecologically they are important
          for aerating and recycling coastal sediments and as food for many shorebirds and fish.
          They depend on healthy mudflats and mangroves, so coastal development, pollution, and
          habitat loss are the main threats; many species remain common. Consult authoritative
          sources for status.
        </p>
      }
      faqs={[
        {
          question: "Why does a male fiddler crab have one giant claw?",
          answer:
            "The oversized claw is mainly a signalling and fighting tool. A male waves it in species-specific patterns to court females and to warn off or battle rival males over burrows and mates. Because it's far too big to use for eating, the male must feed with only his single small claw — a real trade-off for the advantage the big claw gives him in courtship and combat.",
        },
        {
          question: "Why is it called a 'fiddler' crab?",
          answer:
            "The name comes from the male's feeding and display posture. With the huge claw held up and the small claw moving repeatedly to the mouth, the crab looks a bit like someone holding a fiddle (the big claw) and drawing a bow (the small claw). That musical impression gave these crabs their charming name.",
        },
        {
          question: "What do fiddler crabs eat?",
          answer:
            "They're deposit feeders that sift mud and sand. Using the small claw (females use both), they bring sediment to the mouth, where mouthparts separate out algae, bacteria, and decaying matter, and they spit out the cleaned grains as little sediment balls around their burrows. This feeding helps recycle nutrients in coastal mud.",
        },
        {
          question: "Can a fiddler crab regrow its big claw?",
          answer:
            "Yes. If a male loses his enlarged claw, he can regrow a large claw over successive moults — though the new one may not be identical to the original. In some cases the smaller claw enlarges and the lost side regrows as the small claw. This ability to regenerate limbs is common among crabs and other crustaceans.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Uca & allies (fiddler crabs)" },
        { label: "Type", value: "Crustacean (true crab)" },
        { label: "Signature trait", value: "Male's one giant waving claw" },
        { label: "Females", value: "Two small feeding claws" },
        { label: "Diet", value: "Deposit feeder (sifts mud for microbes)" },
        { label: "Habitat", value: "Mudflats, salt marsh & mangroves" },
        { label: "Lifestyle", value: "Burrowing; tide-tuned" },
        { label: "Role", value: "Aerates & recycles coastal sediment" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "True crabs as a group" },
        { label: "Hermit Crab Profile", href: "/animals/hermit-crab", description: "Another shore crab" },
        { label: "Coconut Crab Profile", href: "/animals/coconut-crab", description: "A giant land crab relative" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Coastal habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
