import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leech";
const TITLE = "Leech: Segmented Worms and the Medicinal Leech";
const DESC =
  "Learn about leeches (subclass Hirudinea), segmented worms related to earthworms, including the well-known medicinal leech, with calm, factual notes.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("leech"),
});

export default function LeechPage() {
  return (
    <AnimalProfileLayout
      commonName="Leech"
      scientificName="subclass Hirudinea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Annelid","Segmented worm","Invertebrate"]}
      image={getAnimalImage("leech") ?? undefined}
      galleryImages={getAnimalGalleryImages("leech")}
      sources={ANIMAL_SOURCES.leech}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Leeches are segmented worms (annelids) that make up the subclass Hirudinea, placing them among the relatives of earthworms. They have a soft, muscular, often flattened body with a sucker at each end, which they use to grip surfaces and to move. Most leeches live in fresh water, although some species are terrestrial or marine.
          </p>
          <p>
            Feeding habits vary across the group: many leeches feed on the blood of other animals, while others are active predators of small invertebrates. Blood-feeding species attach with their suckers and produce substances in their saliva, including anticoagulants such as hirudin, that keep blood flowing while they feed. The European medicinal leech (<em>Hirudo medicinalis</em>) is the best-known species and has a long history of use in medicine, with continued interest in modern medical research.
          </p>
          <p>
            Details such as diet, habitat, and conservation status vary by species and region, and figures should be checked against authoritative sources. This page is educational and does not provide medical or first-aid advice; for bites, reactions, or related concerns, contact a qualified medical professional or local health authority.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Leeches form the subclass Hirudinea within the annelids, the phylum of segmented worms that also includes earthworms and marine bristle worms. As annelids, their bodies are divided into segments, and they share the ringed, soft-bodied build characteristic of the group. The European medicinal leech, <em>Hirudo medicinalis</em>, serves as the familiar reference species, though Hirudinea contains many described species with differing biology. Classification and the number of recognized species can change as research continues, so taxonomic details are best confirmed against authoritative references.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A leech has a soft, muscular body that is often flattened and tapers toward each end, with a sucker at both the front and rear. The body is segmented, like that of other annelids, and many species show patterning along the back. The medicinal leech (<em>Hirudo medicinalis</em>) is a commonly illustrated example, displaying a segmented, patterned body. Coloration, size, and surface markings vary considerably by species.
          </p>
        </>
      }
      habitat={
        <p>
          Most leeches are associated with fresh water, such as ponds, lakes, streams, and wetlands, where they live among vegetation, debris, or along the bottom. Some species are terrestrial, occurring in damp habitats, while others are marine. The range of any individual species varies, and habitat and distribution differ considerably across the group. Specific habitat, distribution, and conservation details vary by species and region and should be checked against authoritative sources.
        </p>
      }
      diet={
        <p>
          Feeding within the group varies. Many leeches are blood-feeders that attach to a host with their suckers, while others are predators that consume small invertebrates such as worms, snails, and insect larvae. Blood-feeding species produce anticoagulants in their saliva, including hirudin in the medicinal leech, which keeps blood flowing during a feeding. In their habitats, leeches form part of the food web both as consumers and as prey for fish, birds, and other animals.
        </p>
      }
      behavior={
        <p>
          Leeches move in two characteristic ways: by looping along a surface using their two suckers in turn, and by swimming with graceful, undulating motions of the body. Many species are most active in warm, moist conditions and shelter when conditions are unfavorable. Like other annelids in this group, leeches are typically hermaphroditic, with individuals carrying both male and female reproductive structures. Life-cycle details, including reproduction and longevity, vary by species.
        </p>
      }
      humanInteraction={
        <p>
          The medicinal leech (<em>Hirudo medicinalis</em>) is the leech most familiar to people, owing to its long historical use in medicine and its continued interest in modern medical research. Some leeches can bite, and reactions vary by species and region. It is best to avoid handling wild individuals. For bites, reactions, or related concerns, contact a qualified medical professional or local health authority. This page is educational and does not provide medical or first-aid advice.
        </p>
      }
      faqs={[
        {
          question: "Are leeches insects?",
          answer:
            "No. Leeches are not insects; they are segmented worms (annelids) in the subclass Hirudinea, making them relatives of earthworms. They have a soft, ringed body with a sucker at each end rather than the jointed legs and exoskeleton of insects.",
        },
        {
          question: "Do all leeches feed on blood?",
          answer:
            "No. Many leeches are blood-feeders, but others are predators that eat small invertebrates such as worms and snails. Feeding habits vary by species, so it is not accurate to assume all leeches behave the same way.",
        },
        {
          question: "What is the medicinal leech?",
          answer:
            "The medicinal leech (Hirudo medicinalis) is the best-known leech species, with a long history of use in medicine and continued interest in modern medical research. It is of conservation concern in parts of its range. If you have a health-related question, contact a qualified medical professional.",
        },
        {
          question: "Where do leeches live?",
          answer:
            "Most leeches live in fresh water such as ponds, streams, and wetlands, while some species are terrestrial in damp habitats or marine. The specific habitat and distribution depend on the species and region, and details are best checked against authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Leeches (segmented worms, subclass Hirudinea)" },
        { label: "Higher classification", value: "Annelida (segmented worms); relatives of earthworms" },
        { label: "Diet", value: "Varies by species; many feed on blood, others prey on small invertebrates" },
        { label: "Notable trait", value: "A sucker at each end; blood-feeders produce anticoagulants such as hirudin" },
        { label: "Habitat", value: "Mostly fresh water; some terrestrial or marine (varies by species)" },
        { label: "Distribution", value: "Widespread; varies by species and region" },
        { label: "Human interaction", value: "Some leeches can bite; risk varies by species and region — seek a medical professional for concerns" },
        { label: "Conservation status", value: "Varies by species; the medicinal leech is of conservation concern in parts of its range" },
      ]}
      relatedLinks={[
        { label: "Earthworm Profile", href: "/animals/earthworm", description: "A fellow segmented worm (annelid)" },
        { label: "Snail Profile", href: "/animals/snail", description: "A soft-bodied freshwater & land invertebrate" },
        { label: "Slug Profile", href: "/animals/slug", description: "Another soft-bodied invertebrate" },
        { label: "Invertebrates (taxonomy)", href: "/animal-taxonomy/invertebrates", description: "How invertebrate groups fit together" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
    />
  );
}
