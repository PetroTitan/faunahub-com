import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leafy-seadragon";
const TITLE = "Leafy Seadragon: Australia's Camouflaged Fish";
const DESC =
  "The leafy seadragon (Phycodurus eques) is a small marine fish of southern and western Australian waters, famous for its leaf-like camouflage.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("leafy-seadragon"),
});

export default function LeafySeadragonPage() {
  return (
    <AnimalProfileLayout
      commonName="Leafy Seadragon"
      scientificName="Phycodurus eques"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Seadragon","Australia"]}
      image={getAnimalImage("leafy-seadragon") ?? undefined}
      galleryImages={getAnimalGalleryImages("leafy-seadragon")}
      sources={ANIMAL_SOURCES["leafy-seadragon"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The leafy seadragon (<em>Phycodurus eques</em>) is a small, slow-moving marine fish closely related to seahorses and pipefishes. It is best known for the elaborate leaf-shaped appendages that grow from its body, which give it a striking resemblance to drifting seaweed and help it remain hidden among marine vegetation. Despite its ornate appearance, it is a true bony fish rather than a plant or invertebrate.
          </p>
          <p>
            This species is associated only with parts of the southern and western coasts of Australia, where it lives in temperate coastal waters among seaweed beds and seagrass. Its limited geographic range, combined with its slow movement and specialised habitat, makes it a distinctive part of Australia&#39;s southern marine fauna. The leafy seadragon is the only member of its genus.
          </p>
          <p>
            On the IUCN Red List, the leafy seadragon is currently assessed as Least Concern, though this is an attributed, changeable evaluation that can be revised as new information becomes available. It also receives legal protection within Australia. Its appeal as a subject of marine education and photography reflects its unusual form and its role within nearshore Australian ecosystems.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The leafy seadragon, <em>Phycodurus eques</em>, is a ray-finned fish in the family Syngnathidae, the group that also includes seahorses, pipefishes and the related weedy seadragon. It is the sole species placed in the genus <em>Phycodurus</em>, making it taxonomically distinctive within its family. Like other syngnathids, it has a long, tube-like snout and a body encased in bony plates rather than scales, traits that distinguish this group from most other fishes.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This fish is immediately recognisable for the numerous leaf-like and frond-like appendages that project from its head, body and tail, mimicking the fronds of seaweed. Its colouration typically ranges through greens, browns and yellows, helping it blend with the surrounding vegetation. The body is elongated, with a slender snout and a small mouth, and the actual fins used for swimming are nearly transparent and easy to overlook. The leafy appendages are primarily for camouflage rather than propulsion, and the fish moves slowly and deliberately, appearing to drift like a piece of detached seaweed.
          </p>
        </>
      }
      habitat={
        <p>
          The leafy seadragon is found only along parts of the southern and western coasts of Australia, in temperate coastal waters. It is associated with seaweed-covered reefs, seagrass meadows and sandy areas near rocky outcrops, generally in relatively shallow, sheltered waters where marine vegetation is abundant. Its distribution is naturally restricted to these southern and western Australian coastal regions, and it should not be described as occurring across Oceania more broadly. The presence of suitable seaweed and seagrass habitat strongly shapes where individuals are found.
        </p>
      }
      diet={
        <p>
          The leafy seadragon feeds on tiny crustaceans, particularly small shrimp-like animals such as mysids, along with other minute planktonic and bottom-associated invertebrates. It has no teeth and instead draws prey into its long, tubular snout using a rapid suction action, feeding on items individually as it drifts slowly through the vegetation. Its camouflage assists not only in avoiding predators but also in approaching small prey without being detected.
        </p>
      }
      behavior={
        <>
          <p>
            This is a slow-moving, generally solitary fish that relies on stillness and camouflage rather than speed for survival, often swaying gently with the water to enhance its resemblance to drifting seaweed. As in other members of its family, the male carries the developing eggs, which are attached to a specialised brood area on the underside of his tail rather than in an enclosed pouch. The male broods the eggs until the young hatch and disperse, after which the small offspring are independent and must fend for themselves among the vegetation.
          </p>
          <p>
            Within its southern and western Australian coastal habitats, the leafy seadragon is part of the community of small predators that feed on tiny crustaceans and planktonic invertebrates, helping to link these minute animals into the wider food web. Its dependence on seaweed and seagrass beds ties its presence closely to the health of these vegetated habitats. As a specialised, range-restricted species, it can serve as an indicator of the condition of the nearshore temperate ecosystems it inhabits.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The leafy seadragon is harmless to people and is valued mainly as a subject of marine education, photography and appreciation of Australia&#39;s coastal biodiversity. It is assessed by the IUCN Red List as Least Concern, an attributed evaluation that can change over time, and it also receives legal protection within Australia given its limited range and specialised habitat. Pressures on its vegetated coastal habitats and water quality are the kinds of concerns most relevant to its long-term conservation. Questions about local marine wildlife or habitat protection are best directed to local wildlife authorities, and this species is not suited to private keeping.
        </p>
      }
      faqs={[
        {
          question: "Is the leafy seadragon a real fish or a type of plant?",
          answer:
            "It is a genuine bony fish in the same family as seahorses and pipefishes. Its leaf-like appendages only make it resemble seaweed; they are used for camouflage, not for photosynthesis.",
        },
        {
          question: "Where is the leafy seadragon found?",
          answer:
            "It occurs only along parts of the southern and western coasts of Australia, in temperate coastal waters with seaweed and seagrass. It is not found across Oceania more broadly.",
        },
        {
          question: "What does the leafy seadragon eat?",
          answer:
            "It feeds on tiny crustaceans, such as small shrimp-like mysids, and other minute invertebrates. It has no teeth and draws prey into its long, tubular snout using suction.",
        },
        {
          question: "Is the leafy seadragon endangered?",
          answer:
            "The IUCN Red List currently assesses it as Least Concern, an attributed status that can be revised over time. It also has legal protection within Australia owing to its limited range and specialised habitat.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Phycodurus eques" },
        { label: "Animal group", value: "Marine bony fish (seahorse relative)" },
        { label: "Family/order", value: "Family Syngnathidae" },
        { label: "Size", value: "A small fish, up to roughly 35 cm long" },
        { label: "Diet", value: "Tiny crustaceans and minute invertebrates" },
        { label: "Habitat", value: "Temperate seaweed and seagrass coastal waters" },
        { label: "Range", value: "Parts of southern and western Australian coasts" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; attributed and changeable; legally protected in Australia)" },
      ]}
      relatedLinks={[
        { label: "Seahorse", href: "/animals/seahorse", description: "A close relative" },
        { label: "Clownfish", href: "/animals/clownfish", description: "Another reef fish" },
        { label: "Reef Manta Ray", href: "/animals/reef-manta-ray", description: "Another Australian marine fish" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
