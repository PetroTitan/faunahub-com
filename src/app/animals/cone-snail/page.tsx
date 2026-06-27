import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cone-snail";
const TITLE = "Cone Snail: Predatory Sea Snails of Family Conidae";
const DESC =
  "Learn about cone snails (Conus), predatory tropical sea snails with patterned cone shells that hunt prey using a venomous harpoon-like tooth.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("cone-snail"),
});

export default function ConeSnailPage() {
  return (
    <AnimalProfileLayout
      commonName="Cone Snail"
      scientificName="family Conidae (Conus)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Marine gastropod","Predatory"]}
      image={getAnimalImage("cone-snail") ?? undefined}
      galleryImages={getAnimalGalleryImages("cone-snail")}
      sources={ANIMAL_SOURCES["cone-snail"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Cone snails are predatory marine gastropods of the family Conidae, most placed in the genus <em>Conus</em>. They are named for their smooth, often beautifully patterned cone-shaped shells, which have long made them favorites among shell collectors. There are many hundreds of species living in warm seas around the world.
          </p>
          <p>
            What sets cone snails apart from most other sea snails is how they feed. Rather than grazing, they are active hunters that deploy a hollow, harpoon-like modified tooth to inject venom and capture prey such as marine worms, other snails, or small fish, depending on the species. Their venom is a complex mixture of peptides known as conotoxins, which scientists study closely for medical research, including new approaches to pain treatment.
          </p>
          <p>
            Details of biology, behavior, and risk vary considerably by species and region, so specifics should always be checked against authoritative sources such as Animal Diversity Web, Smithsonian Ocean, and WoRMS. Some fish-hunting species, such as the geographic and textile cones, have venom that can be medically significant to people; risk varies by species. Avoid handling live cone snails. For any bite, sting, or envenomation concern, contact a qualified medical professional or local health authority. This page is educational and does not provide medical or treatment advice.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Cone snails are mollusks in the class Gastropoda, the group that contains snails and slugs. They belong to the family Conidae, with most species traditionally placed in the genus <em>Conus</em>, though modern classifications recognize additional genera within the broader cone-snail radiation. As marine gastropods they share the basic snail body plan, including a single coiled shell and a muscular foot, but they are specialized predators rather than grazers or scavengers.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The most recognizable feature of a cone snail is its shell, which is typically smooth and tapers to the characteristic cone shape that gives the group its name. Shells are frequently marked with intricate patterns, including the tent-like or net-like markings seen in species such as the textile cone (<em>Conus textile</em>) and the marbled cone (<em>Conus marmoreus</em>). Colors and patterns range widely across species, and size varies from small to several inches in length. The living animal extends a soft foot and a tubular siphon, and it carries the specialized harpoon-like tooth used in feeding.
          </p>
        </>
      }
      habitat={
        <p>
          Cone snails live mainly in warm, shallow tropical and subtropical seas. They are commonly associated with coral reefs and sandy bottoms, where many species shelter under rocks, in sand, or among reef structures. Distribution and preferred microhabitat vary by species, so range details should be confirmed against authoritative sources rather than generalized across the whole group. Because some species can be hazardous to handle, living cone snails are best observed without picking them up.
        </p>
      }
      diet={
        <p>
          Cone snails are carnivores, and the family as a whole is divided by diet: some species hunt marine worms, some prey on other snails, and others capture small fish. Prey is subdued using venom delivered through the hollow, harpoon-like tooth, which allows even slow-moving snails to immobilize comparatively fast prey such as fish. As predators of invertebrates and small fish, cone snails are part of the food web on reefs and sandy seafloors, where they help regulate populations of their prey.
        </p>
      }
      behavior={
        <p>
          Many cone snails are most active at night, emerging to hunt and spending daylight hours concealed in sand or beneath cover. Hunting relies on the venom-injecting tooth, which is used to strike and hold prey; the precise strategy differs among worm-, snail-, and fish-hunting species. Like other marine gastropods, cone snails reproduce by laying eggs, and their life cycle commonly includes a larval stage before the young settle and develop their shells. Specific behavioral and life-cycle details vary by species and region.
        </p>
      }
      humanInteraction={
        <p>
          People have long valued cone snail shells for their beauty, and their venom has become important to science, where conotoxins are studied for medical research including pain treatment. Some fish-hunting species, such as the geographic and textile cones, have venom that can be medically significant to people; risk varies by species and region. The simplest precaution is to avoid handling live cone snails. For any bite, sting, or envenomation concern, contact a qualified medical professional or local health authority. This page is educational and does not provide medical, first-aid, or treatment advice.
        </p>
      }
      faqs={[
        {
          question: "What is a cone snail?",
          answer:
            "A cone snail is a predatory marine gastropod in the family Conidae, with most species placed in the genus Conus. They are named for their smooth, cone-shaped shells, which are often strikingly patterned. Unlike grazing snails, they actively hunt prey such as worms, other snails, or fish.",
        },
        {
          question: "How do cone snails catch their prey?",
          answer:
            "Cone snails hunt using a hollow, harpoon-like modified tooth that injects venom into prey. This venom, a complex mix of peptides called conotoxins, allows them to immobilize prey including fast-moving fish in some species. What they eat depends on the species, which may specialize in worms, snails, or fish.",
        },
        {
          question: "Are cone snails dangerous to people?",
          answer:
            "Risk varies by species and region. Some fish-hunting species, such as the geographic and textile cones, have venom that can be medically significant to people, while many others are far less concerning. The sensible precaution is to avoid handling live cone snails, and for any bite, sting, or envenomation concern, contact a qualified medical professional or local health authority.",
        },
        {
          question: "Why are cone snails important to scientists?",
          answer:
            "Cone snail venom contains conotoxins, a diverse group of peptides that act on the nervous system in precise ways. Researchers study these compounds for medical applications, including new approaches to pain treatment. This makes cone snails a notable example of how marine biodiversity contributes to scientific research.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Cone snails (predatory sea snails)" },
        { label: "Higher classification", value: "Family Conidae, genus Conus (Gastropoda)" },
        { label: "Diet", value: "Carnivorous; worms, other snails, or fish depending on species" },
        { label: "Notable trait", value: "Hunts with a venom-injecting, harpoon-like tooth" },
        { label: "Habitat", value: "Warm shallow seas; reefs and sandy bottoms" },
        { label: "Distribution", value: "Tropical and subtropical seas worldwide" },
        { label: "Human interaction", value: "Shells collected; venom studied; avoid handling live animals" },
        { label: "Conservation status", value: "Varies by species; some assessed" },
      ]}
      relatedLinks={[
        { label: "Cowrie Profile", href: "/animals/cowrie", description: "Another glossy sea snail" },
        { label: "Whelk Profile", href: "/animals/whelk", description: "A predatory/scavenging sea snail" },
        { label: "Sea Slug Profile", href: "/animals/sea-slug", description: "Shell-less marine gastropods" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Invertebrates (taxonomy)", href: "/animal-taxonomy/invertebrates", description: "How invertebrate groups fit together" },
      ]}
    />
  );
}
