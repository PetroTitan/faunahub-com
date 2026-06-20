import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bilby";
const TITLE = "Bilby — Profile, Big-Eared Burrowing Marsupial & Diet";
const DESC =
  "Explore the greater bilby (Macrotis lagotis): a long-eared, burrowing desert marsupial of Australia — a vital ecosystem engineer, Vulnerable in the wild and an Easter icon.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("bilby"),
});

export default function BilbyPage() {
  return (
    <AnimalProfileLayout
      commonName="Bilby"
      scientificName="Macrotis lagotis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Burrower"]}
      image={getAnimalImage("bilby") ?? undefined}
      galleryImages={getAnimalGalleryImages("bilby")}
      sources={ANIMAL_SOURCES.bilby}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The greater bilby (<em>Macrotis lagotis</em>) is a striking burrowing marsupial
            of arid Australia, easily recognised by its very long, rabbit-like ears, soft
            blue-grey fur, a pointed snout, and a long black-and-white tail. A type of
            bandicoot, the bilby is superbly adapted to desert life: it digs deep spiral
            burrows for shelter from heat and predators and is active at night.
          </p>
          <p>
            By constantly digging for food and shelter, bilbies turn over and aerate the
            soil, making them important &ldquo;ecosystem engineers&rdquo; whose burrows also
            benefit many other animals.
          </p>
          <p>
            <strong>Conservation note:</strong> the greater bilby is Vulnerable and has
            disappeared from much of its former range; a second species, the lesser bilby,
            is extinct. Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          The greater bilby lives in arid and semi-arid Australia — deserts, dry shrublands,
          and grasslands — where it digs burrows in a range of soils. It once ranged across
          much of the continent but is now restricted to scattered areas, with fenced
          reserves and reintroduction sites helping to protect surviving populations.
        </p>
      }
      diet={
        <p>
          Bilbies are omnivores with a varied desert diet: insects and their larvae, seeds,
          bulbs, fruit, fungi, and small animals. They find much of their food underground,
          digging it up with strong claws, and they get most of the moisture they need from
          their food — an important adaptation to dry country where free water is scarce.
        </p>
      }
      behavior={
        <p>
          Bilbies are nocturnal and largely solitary, sheltering by day in deep burrows
          that can spiral down well below the surface, keeping them cool and safe. They dig
          almost constantly while foraging, and a single bilby may use several burrows.
          Females have a backward-opening pouch — practical for a digging animal, as it
          keeps soil out. This near-constant digging is what makes bilbies such valuable
          turners of desert soil.
        </p>
      }
      humanInteraction={
        <p>
          The bilby is a much-loved Australian icon, even promoted as a native alternative
          to the Easter bunny to raise conservation awareness. It declined severely after
          European settlement due to introduced predators (foxes and cats), competition and
          habitat change from rabbits and livestock, and altered fire regimes. Recovery
          efforts include predator-proof reserves, reintroductions, and Indigenous-led land
          management. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a bilby a type of rabbit?",
          answer:
            "No. Despite its long, rabbit-like ears, the bilby is a marsupial — specifically a kind of bandicoot — not a rabbit or any other placental mammal. The big ears are an adaptation to desert life (helping with heat loss and keen hearing), not a sign of kinship with rabbits.",
        },
        {
          question: "Why are bilbies important to their ecosystem?",
          answer:
            "Bilbies dig almost constantly for food and shelter, turning over and aerating large amounts of soil. This improves water infiltration and seed germination, and their abandoned burrows provide refuge for many other desert animals — which is why bilbies are described as ecosystem engineers.",
        },
        {
          question: "What do bilbies eat?",
          answer:
            "They are omnivores with a broad desert diet: insects and larvae, seeds, bulbs, fruit, fungi, and small animals, much of it dug from underground. Bilbies get most of their water from this food, an important adaptation to the dry regions where they live.",
        },
        {
          question: "Are bilbies endangered?",
          answer:
            "The greater bilby is assessed as Vulnerable and has vanished from much of its former range, while the lesser bilby is already extinct. Introduced predators, habitat change, and altered fire patterns drove the decline. Conservation programs are working to recover it; current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Macrotis lagotis (greater bilby)" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Group", value: "A bandicoot (not a rabbit)" },
        { label: "Diet", value: "Omnivore (insects, seeds, bulbs, etc.)" },
        { label: "Signature trait", value: "Long ears; deep spiral burrows" },
        { label: "Pouch", value: "Backward-opening (keeps soil out)" },
        { label: "Role", value: "Ecosystem engineer (soil turner)" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Quoll Profile", href: "/animals/quoll", description: "Another threatened Australian marsupial" },
        { label: "Numbat Profile", href: "/animals/numbat", description: "An endangered marsupial specialist" },
        { label: "Wombat Profile", href: "/animals/wombat", description: "Another burrowing marsupial" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
