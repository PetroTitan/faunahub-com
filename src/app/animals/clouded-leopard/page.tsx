import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/clouded-leopard";
const TITLE = "Clouded Leopard — Profile, the Tree-Climbing Cat with Giant Canines";
const DESC =
  "Explore the clouded leopard (Neofelis nebulosa): a secretive Asian forest cat with cloud-shaped coat blotches, the longest canines for its size of any cat, and extraordinary climbing skills.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("clouded-leopard"),
});

export default function CloudedLeopardPage() {
  return (
    <AnimalProfileLayout
      commonName="Clouded Leopard"
      scientificName="Neofelis nebulosa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Vulnerable"]}
      image={getAnimalImage("clouded-leopard") ?? undefined}
      galleryImages={getAnimalGalleryImages("clouded-leopard")}
      sources={ANIMAL_SOURCES["clouded-leopard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The clouded leopard (<em>Neofelis nebulosa</em>) is a medium-sized wild cat of the
            forests of South and Southeast Asia, named for the large, cloud-shaped dark blotches
            that beautifully marble its grey-to-tawny coat. Secretive and rarely seen, it sits
            between the small cats and the big cats, and despite its name it is not closely related
            to the true leopard. It is famous for two extraordinary features: superb climbing
            ability and remarkably long canine teeth.
          </p>
          <p>
            Relative to its body size, the clouded leopard has the longest canine teeth of any
            living cat — proportionally comparable to the extinct sabre-toothed cats — and it is
            among the most accomplished climbers in the cat family.
          </p>
          <p>
            <strong>Conservation note:</strong> the clouded leopard is classified as Vulnerable,
            threatened by deforestation and poaching. Verify current status at authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Clouded leopards live in the forests of South and Southeast Asia — from the Himalayan
          foothills through mainland Southeast Asia and into parts of China — favouring tropical
          and subtropical evergreen forest, though they also use other wooded habitats. They are
          strongly associated with forest cover and are excellent climbers, equally capable on the
          ground and in the trees. (A separate species, the Sunda clouded leopard, lives on Borneo
          and Sumatra.)
        </p>
      }
      diet={
        <p>
          The clouded leopard is a carnivore that preys on a variety of animals — monkeys, deer,
          wild pigs, birds, squirrels, and other mammals — hunting both in the trees and on the
          ground. It is thought to ambush prey, and its powerful build, long tail for balance, and
          climbing skill let it tackle prey in situations few other cats could. The long canines
          help it grip and dispatch its catches.
        </p>
      }
      behavior={
        <p>
          Clouded leopards are masters of climbing: they can scramble down trunks head-first, hang
          upside-down from branches, and even move along the undersides of horizontal limbs, helped
          by flexible ankle joints and a very long, thick tail that acts as a counterbalance. They
          are mostly solitary and largely active around dawn, dusk, and night, and they are so shy
          and elusive that much of their wild behaviour remains poorly known. Their stunning coat
          provides camouflage in the dappled light of the forest. Their oversized canines, set in
          wide-gaping jaws, are the most striking in any living cat for their relative length.
        </p>
      }
      humanInteraction={
        <p>
          The clouded leopard is classified as Vulnerable and is declining, driven mainly by
          deforestation and fragmentation of its forest habitat and by poaching for its
          beautifully marked skin, bones, teeth, and the illegal pet trade. Protecting large areas
          of connected forest and curbing poaching are central to its conservation. As a wild,
          specialised forest predator, it is not suited to life as a pet. Consult the IUCN Red List
          for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the clouded leopard a 'big cat'?",
          answer:
            "Not in the strict sense. The clouded leopard sits between the small cats and the true big cats (lions, tigers, leopards, jaguars), and it can't roar like them. Despite its name it isn't closely related to the leopard, either — it belongs to its own genus, Neofelis. It's often described as a kind of bridge between the small and great cats.",
        },
        {
          question: "Why does the clouded leopard have such long teeth?",
          answer:
            "Relative to its size, the clouded leopard has the longest canine teeth of any living cat — proportionally comparable to the extinct sabre-toothed cats — set in jaws that can open exceptionally wide. These impressive canines help it grip and subdue prey. Exactly why they evolved to be so long is still studied, but they're one of the cat's most remarkable features.",
        },
        {
          question: "How good a climber is the clouded leopard?",
          answer:
            "Exceptional. It can descend tree trunks head-first, hang upside-down from branches, and even move along the underside of horizontal limbs, aided by flexible ankles and a long, heavy tail for balance. Few cats rival its agility in the trees, which suits its life in dense Asian forests.",
        },
        {
          question: "Is the clouded leopard endangered?",
          answer:
            "It's classified as Vulnerable and declining. The main threats are deforestation and habitat fragmentation, along with poaching for its skin, bones, teeth, and the illegal pet trade. Conservation focuses on protecting large, connected forests and reducing poaching. Always check the IUCN Red List for the current status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Neofelis nebulosa" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Not a", value: "True leopard or big cat (own genus)" },
        { label: "Signature traits", value: "Cloud-shaped coat marks; very long canines" },
        { label: "Skill", value: "Superb climber (descends head-first)" },
        { label: "Diet", value: "Carnivore (monkeys, deer, pigs, birds)" },
        { label: "Range", value: "S & SE Asian forests" },
        { label: "Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Leopard Profile", href: "/animals/leopard", description: "The true leopard (not a close relative)" },
        { label: "Tiger Profile", href: "/animals/tiger", description: "A big cat of the same region" },
        { label: "Margay Profile", href: "/animals/margay", description: "Another head-first tree-climbing cat" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
