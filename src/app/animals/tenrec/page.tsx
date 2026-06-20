import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tenrec";
const TITLE = "Tenrec — Profile, Madagascar's Adaptable Mammals & Diet";
const DESC =
  "Explore tenrecs (family Tenrecidae): a diverse group of small Madagascan mammals that mimic hedgehogs, shrews, and otters — using the spiny lowland streaked tenrec as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("tenrec"),
});

export default function TenrecPage() {
  return (
    <AnimalProfileLayout
      commonName="Tenrec"
      scientificName="family Tenrecidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Madagascar", "Insectivore"]}
      image={getAnimalImage("tenrec") ?? undefined}
      galleryImages={getAnimalGalleryImages("tenrec")}
      sources={ANIMAL_SOURCES.tenrec}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Tenrecs (family Tenrecidae) are a remarkably varied group of small mammals,
            most of them found only on Madagascar. From a single ancestral group, tenrecs
            have evolved to resemble hedgehogs, shrews, mice, and even otters — a striking
            example of how one lineage can radiate to fill many different roles. The
            lowland streaked tenrec (<em>Hemicentetes semispinosus</em>), shown here, is a
            vivid black-and-yellow, spiny species of the rainforest.
          </p>
          <p>
            Tenrecs are often cited as one of the best mammalian examples of adaptive
            radiation, comparable in spirit to Darwin&apos;s finches but among mammals.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;tenrec&rdquo; covers many different species with
            very different appearances and habits; details here use the lowland streaked
            tenrec as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Most tenrecs live on Madagascar, occupying habitats from rainforest and
          spiny forest to wetlands and human-altered areas; a few related species (otter
          shrews) live in mainland Africa. The lowland streaked tenrec favours humid
          eastern rainforest, where it forages in leaf litter and shelters in burrows.
        </p>
      }
      diet={
        <p>
          Many tenrecs are insectivores or omnivores. The streaked tenrec specialises in
          earthworms and other soil invertebrates, while other tenrec species eat insects,
          invertebrates, small vertebrates, fruit, or a mix. Their teeth and snouts vary
          with diet across the family&apos;s many forms.
        </p>
      }
      behavior={
        <p>
          The lowland streaked tenrec is unusual among mammals in apparently using
          <em>stridulation</em> — rubbing specialised quills together to make
          high-pitched sounds — to communicate, especially between family members.
          Streaked tenrecs can be active by day and live in family groups, which is
          uncommon among tenrecs (many are solitary). Some other tenrecs can enter torpor
          or hibernation-like states to cope with lean seasons.
        </p>
      }
      humanInteraction={
        <p>
          Tenrecs are an important part of Madagascar&apos;s unique mammal fauna and a
          favourite example in studies of evolution. Some larger tenrecs are hunted for
          food locally. As with much of Madagascar&apos;s wildlife, habitat loss is the
          main concern for forest-dependent species, while others are more adaptable.
          Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a tenrec a hedgehog?",
          answer:
            "No, although some spiny tenrecs look very much like hedgehogs. Tenrecs are a separate family (Tenrecidae), mostly from Madagascar, and their hedgehog-like forms are a case of convergent evolution — similar lifestyles producing similar bodies — rather than close relationship.",
        },
        {
          question: "Why are tenrecs important to evolution studies?",
          answer:
            "Tenrecs are a classic example of adaptive radiation: from one ancestral group, they evolved into many forms resembling hedgehogs, shrews, mice, and otters, each suited to a different way of life. This makes them a mammalian parallel to famous examples like Darwin's finches.",
        },
        {
          question: "Do streaked tenrecs really make sounds with their spines?",
          answer:
            "Yes — uniquely among mammals, the lowland streaked tenrec is thought to communicate partly by stridulation, rubbing specialised quills on its back together to produce high-pitched sounds. This is more typical of insects than mammals, and helps family members keep in contact.",
        },
        {
          question: "Where do tenrecs live?",
          answer:
            "Almost all tenrecs are found on Madagascar, in habitats ranging from rainforest to spiny forest and wetlands; a few close relatives (otter shrews) live in mainland Africa. Their diversity on Madagascar is part of what makes the island's mammal fauna so distinctive.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Tenrecidae" },
        { label: "Reference species", value: "Hemicentetes semispinosus (streaked tenrec)" },
        { label: "Class", value: "Mammalia" },
        { label: "Famous for", value: "Adaptive radiation on Madagascar" },
        { label: "Diet", value: "Insectivore/omnivore (varies)" },
        { label: "Special trait", value: "Streaked tenrec stridulates with quills" },
        { label: "Range", value: "Mostly Madagascar" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Hedgehog Profile", href: "/animals/hedgehog", description: "A look-alike from another family" },
        { label: "Shrew Profile", href: "/animals/shrew", description: "Another small insectivore" },
        { label: "Fossa Profile", href: "/animals/fossa", description: "Madagascar's largest carnivore" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Madagascan fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
