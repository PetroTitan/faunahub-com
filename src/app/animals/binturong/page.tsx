import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/binturong";
const TITLE = "Binturong (Bearcat) — Profile, Prehensile Tail & Diet";
const DESC =
  "Explore the binturong (Arctictis binturong): a shaggy Southeast Asian viverrid with a prehensile tail that smells of popcorn — neither bear nor cat, and Vulnerable in the wild.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("binturong"),
});

export default function BinturongPage() {
  return (
    <AnimalProfileLayout
      commonName="Binturong"
      scientificName="Arctictis binturong"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Viverridae", "Arboreal"]}
      image={getAnimalImage("binturong") ?? undefined}
      galleryImages={getAnimalGalleryImages("binturong")}
      sources={ANIMAL_SOURCES.binturong}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The binturong (<em>Arctictis binturong</em>), sometimes called the bearcat, is
            a large, shaggy mammal of Southeast Asian rainforests — and despite the
            nickname, it is neither a bear nor a cat. It belongs to the family Viverridae,
            alongside civets and genets. With coarse black fur, tufted ears, and a long,
            muscular prehensile tail, the binturong is well suited to a life spent up in
            the trees.
          </p>
          <p>
            One of its most famous features is its scent: binturongs give off a smell
            widely compared to warm popcorn, produced by a compound in their scent
            marking.
          </p>
          <p>
            <strong>Conservation note:</strong> the binturong is assessed as Vulnerable,
            threatened by habitat loss and hunting. Verify current status at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Binturongs live in the forests of South and Southeast Asia — from parts of India
          and Bangladesh through Indochina to the Malay Peninsula, Borneo, Sumatra, Java,
          and the Philippines. They favour tall, dense tropical rainforest with a good
          canopy, where they spend much of their time among the branches.
        </p>
      }
      diet={
        <p>
          Binturongs are omnivores with a strong preference for fruit, especially figs,
          along with leaves, shoots, eggs, small animals, insects, and carrion. As major
          fruit-eaters that travel through the canopy, they are valuable seed dispersers —
          notably, they are among the few animals able to help certain strangler fig seeds
          germinate, making them important to forest ecology.
        </p>
      }
      behavior={
        <p>
          Binturongs are mainly arboreal and active by day and night, moving slowly and
          deliberately through the trees. The prehensile tail acts almost like a fifth
          limb, gripping branches for balance and support. They are among the few
          carnivorans with such a tail. Binturongs scent-mark their range with the
          popcorn-smelling secretion, and they can rotate their hind legs to climb down
          trunks head-first.
        </p>
      }
      humanInteraction={
        <p>
          Binturongs are charismatic and popular in zoos, where their popcorn scent and
          gentle manner are well known. In the wild they are declining, mainly from
          deforestation and fragmentation of their rainforest home, plus hunting and the
          wildlife trade. Protecting intact forest is key to their future. Consult the
          IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a binturong a bear or a cat?",
          answer:
            "Neither, despite the nickname \"bearcat.\" The binturong belongs to the family Viverridae, the same group as civets and genets. Its bear-like shaggy coat and somewhat cat-like face are just a coincidence of appearance, not a sign of close relationship to bears or cats.",
        },
        {
          question: "Why does a binturong smell like popcorn?",
          answer:
            "Binturongs produce a scent widely described as smelling like warm popcorn. It comes from a compound (the same one that gives popcorn its aroma) present in their scent marking, which they use to communicate with other binturongs as they move through their territory.",
        },
        {
          question: "What does a binturong use its tail for?",
          answer:
            "Its long, muscular tail is prehensile — it can grip branches like an extra limb. This helps the binturong balance and hold on while climbing and feeding high in the rainforest canopy. Such a fully prehensile tail is rare among carnivorans.",
        },
        {
          question: "Are binturongs endangered?",
          answer:
            "They are assessed as Vulnerable. Binturong numbers are declining, mainly because of rainforest loss and fragmentation, along with hunting and the wildlife trade. Their dependence on healthy forest makes habitat protection central to their conservation. Current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Arctictis binturong" },
        { label: "Also called", value: "Bearcat (but neither bear nor cat)" },
        { label: "Family", value: "Viverridae (with civets/genets)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Omnivore (fruit-leaning; loves figs)" },
        { label: "Signature traits", value: "Prehensile tail; popcorn scent" },
        { label: "Habitat", value: "SE Asian rainforest canopy" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Civet Profile", href: "/animals/civet", description: "A close viverrid relative" },
        { label: "Genet Profile", href: "/animals/genet", description: "Another viverrid relative" },
        { label: "Sloth Profile", href: "/animals/sloth", description: "Another slow-moving tree-dweller" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
