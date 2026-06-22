import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hawkfish";
const TITLE = "Hawkfish — Profile, the Reef Fish That Perches and Pounces Like a Hawk";
const DESC =
  "Explore hawkfish (family Cirrhitidae): small reef predators that perch on coral with thickened fins and dart out to seize prey — including the lattice-patterned longnose hawkfish.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("hawkfish"),
});

export default function HawkfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Hawkfish"
      scientificName="family Cirrhitidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coral reef", "Marine"]}
      image={getAnimalImage("hawkfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("hawkfish")}
      sources={ANIMAL_SOURCES.hawkfish}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Hawkfish (family Cirrhitidae) are small, often colourful reef fish named for their
            hawk-like hunting style: they perch motionless on coral heads, rocks, or sponges, watching
            the water around them, then dart out to pounce on passing prey — much as a hawk waits on a
            lookout before swooping. The striking longnose hawkfish (<em>Oxycirrhites typus</em>),
            shown here, wears a delicate red-and-white lattice pattern and a long snout for picking prey
            from crevices.
          </p>
          <p>
            Hawkfish are well suited to their perching life: they lack a swim bladder (the gas-filled
            organ many fish use for buoyancy), so they tend to rest on the bottom rather than hover, and
            their lower fins are thickened to prop them up on the coral.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;hawkfish&rdquo; covers a family of species; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Hawkfish live on tropical and subtropical reefs, mostly in the Indo-Pacific (with a few in the
          Atlantic and eastern Pacific), on coral and rocky reefs from the shallows to deeper drop-offs.
          They favour spots with good perches — branching corals, sponges, gorgonians, and rocky ledges —
          from which they can survey the surrounding water and reef.
        </p>
      }
      diet={
        <p>
          Hawkfish are carnivores that feed on small fish, shrimp, crabs, and other small invertebrates.
          From a perch they watch and wait, then dash out to seize prey with a quick lunge, returning to
          their lookout to swallow it. The longnose hawkfish uses its slender snout to pluck tiny
          crustaceans and other prey from narrow crevices in the coral.
        </p>
      }
      behavior={
        <p>
          The perch-and-pounce lifestyle defines hawkfish. Lacking a swim bladder, they rest on coral and
          rock rather than hovering, propped up by the stiffened lower rays of their pectoral fins, and
          they tend to make short, darting movements rather than swimming continuously. Many bear tiny
          tufts (cirri) at the tips of their dorsal-fin spines, a family trademark. Hawkfish are typically
          territorial, and some live in small groups led by a single male with several females; in these,
          a notable quirk is that a female can change sex into a male if the dominant male is lost — a form
          of sex change found in various reef fish. They blend their colours with their chosen perch, the
          longnose hawkfish&apos;s red lattice matching the gorgonian and black-coral branches it favours.
        </p>
      }
      humanInteraction={
        <p>
          Hawkfish are popular with divers and in the marine-aquarium trade, prized for their bold
          behaviour and, in the longnose hawkfish, their beautiful pattern. They are harmless to people.
          As reef fish they depend on healthy coral and rocky reefs, so reef degradation is the main
          concern, while most species remain reasonably common. Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a hawkfish?",
          answer:
            "Because of how it hunts. A hawkfish perches motionless on a coral head, rock, or sponge and watches the surrounding water, then darts out to pounce on passing prey before returning to its lookout — much like a hawk waiting on a perch before swooping. That sit-and-watch, ambush-from-a-perch style gives the family its name.",
        },
        {
          question: "Why do hawkfish rest on the coral instead of swimming?",
          answer:
            "Because they lack a swim bladder, the gas-filled organ many fish use to stay buoyant. Without it, hawkfish naturally sink and so prop themselves on the bottom, resting on coral and rock using the thickened lower rays of their pectoral fins. This perching suits their wait-and-pounce hunting perfectly.",
        },
        {
          question: "Can hawkfish change sex?",
          answer:
            "Yes, some do. In species that live in small groups of one male and several females, a female can change into a male if the dominant male disappears — a form of sex change seen in various reef fishes. This flexibility helps keep a breeding male present in the group.",
        },
        {
          question: "What does the longnose hawkfish use its long snout for?",
          answer:
            "For precision feeding. The longnose hawkfish's slender, elongated snout lets it reach into narrow crevices among coral and gorgonian branches to pluck out tiny crustaceans and other small prey that blunter-mouthed fish can't get at. Its red-and-white lattice pattern also helps it blend in among the branches where it perches.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Cirrhitidae (hawkfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Hunting", value: "Perches on coral, then pounces (hawk-like)" },
        { label: "Adaptation", value: "No swim bladder; props on thickened fins" },
        { label: "Diet", value: "Carnivore (small fish, shrimp, crabs)" },
        { label: "Quirk", value: "Females can change into males" },
        { label: "Notable species", value: "Longnose hawkfish (red lattice pattern)" },
        { label: "Habitat", value: "Indo-Pacific coral & rocky reefs" },
      ]}
      relatedLinks={[
        { label: "Goby Profile", href: "/animals/goby", description: "Another small perching reef fish" },
        { label: "Blenny Profile", href: "/animals/blenny", description: "Another characterful reef-bottom fish" },
        { label: "Lionfish Profile", href: "/animals/lionfish", description: "Another ambush-style reef predator" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
