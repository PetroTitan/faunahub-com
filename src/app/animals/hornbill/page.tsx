import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hornbill";
const TITLE = "Hornbill — Profile, Habitat, Diet & Casque";
const DESC =
  "Explore hornbills (family Bucerotidae): large tropical birds of Africa and Asia known for their big down-curved bills, casques, and remarkable sealed-nest breeding.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("hornbill"),
});

export default function HornbillPage() {
  return (
    <AnimalProfileLayout
      commonName="Hornbill"
      scientificName="family Bucerotidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Tropical", "Frugivore"]}
      image={getAnimalImage("hornbill") ?? undefined}
      galleryImages={getAnimalGalleryImages("hornbill")}
      sources={ANIMAL_SOURCES.hornbill}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Hornbills are large, charismatic birds of the family Bucerotidae, found
            across tropical Africa and Asia. They are best known for their big,
            down-curved bills, many topped by a hollow structure called a casque. The
            animal shown here is the great hornbill (<em>Buceros bicornis</em>), one
            of the largest Asian species.
          </p>
          <p>
            Hornbills are important seed dispersers in tropical forests and are famous
            for an extraordinary nesting habit, in which the female seals herself
            inside a tree cavity while raising the young.
          </p>
          <p>
            <strong>Conservation note:</strong> while some hornbills are widespread,
            several forest species are of conservation concern due to habitat loss and
            hunting. Verify a particular species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Hornbills occupy a range of habitats across sub-Saharan Africa and South
          and Southeast Asia, from dense tropical rainforest to open savanna and
          woodland, depending on the species. Forest hornbills in particular depend on
          large old trees with cavities for nesting and on fruiting trees for food.
        </p>
      }
      diet={
        <p>
          Most hornbills are omnivores, with many forest species eating large amounts
          of fruit, supplemented by insects and small animals; some savanna hornbills
          are more carnivorous, taking insects, small reptiles, and other prey. By
          swallowing and moving fruit through the forest, hornbills act as key seed
          dispersers.
        </p>
      }
      behavior={
        <p>
          Hornbills are well known for their unusual breeding behaviour: in many
          species the female enters a tree cavity and the entrance is sealed almost
          shut with mud and droppings, leaving only a narrow slit through which the
          male passes food while she incubates and the chicks grow. This protects the
          nest from predators. Hornbills are often noisy and conspicuous, with heavy,
          whooshing wingbeats in the larger species.
        </p>
      }
      humanInteraction={
        <p>
          Hornbills hold cultural significance in many regions and are valued for
          their role in keeping forests healthy through seed dispersal. The main
          threats to forest species are loss of large nesting trees and hunting. For
          current, species-specific status, consult authoritative sources such as the
          IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "What is the casque on a hornbill's bill?",
          answer:
            "The casque is the helmet-like structure on top of many hornbills' bills. In most species it is hollow and lightweight, and it is thought to play roles in display, recognition, and amplifying calls. (A few hornbills have a solid casque, which has unfortunately made them targets of illegal trade.)",
        },
        {
          question: "Do female hornbills really seal themselves into the nest?",
          answer:
            "Yes, in many species. The female enters a tree cavity and the entrance is sealed nearly shut with mud and droppings, leaving a narrow slit. The male feeds her and the chicks through this gap during incubation and early growth, which helps protect the nest from predators.",
        },
        {
          question: "What do hornbills eat?",
          answer:
            "It varies by species. Many forest hornbills eat large amounts of fruit along with insects and small animals, making them important seed dispersers, while some savanna species are more carnivorous, taking insects, small reptiles, and other prey.",
        },
        {
          question: "Are hornbills related to toucans?",
          answer:
            "No. Hornbills (an Old World family) and toucans (a New World family) both have large bills but are not closely related — a case of similar features evolving separately. Their resemblance is superficial.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Bucerotidae" },
        { label: "Reference species", value: "Buceros bicornis (great hornbill)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Omnivore (many are fruit-heavy)" },
        { label: "Notable feature", value: "Casque on the bill; sealed-nest breeding" },
        { label: "Ecological role", value: "Important seed disperser" },
        { label: "Range", value: "Tropical Africa & Asia" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Toucan Profile", href: "/animals/toucan", description: "A big-billed New World bird (unrelated)" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "Another large tropical bird" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "A related order of birds" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African and Asian fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
