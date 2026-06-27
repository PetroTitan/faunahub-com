import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sarus-crane";
const TITLE = "Sarus Crane: The World's Tallest Flying Bird";
const DESC =
  "Learn about the sarus crane (Antigone antigone), the tallest flying bird, a large grey wetland crane of South and Southeast Asia, and its Vulnerable status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("sarus-crane"),
});

export default function SarusCranePage() {
  return (
    <AnimalProfileLayout
      commonName="Sarus Crane"
      scientificName="Antigone antigone"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Crane","Wetland"]}
      image={getAnimalImage("sarus-crane") ?? undefined}
      galleryImages={getAnimalGalleryImages("sarus-crane")}
      sources={ANIMAL_SOURCES["sarus-crane"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The sarus crane (<em>Antigone antigone</em>) is a very large grey crane best known as the tallest flying bird in the world. Standing on long legs with a distinctive bare red head and upper neck, it is an unmistakable bird of open wetlands and watery farmland. It is found in parts of the Indian subcontinent, Southeast Asia, and a separate population in northern Australia.
          </p>
          <p>
            Famous for forming lifelong pair bonds, the sarus crane performs elaborate unison calling and dancing displays, behaviour that has earned it a place in the folklore and reverence of several cultures within its range. It is a generalist feeder, taking plant matter, invertebrates, and small animals from shallow water and field margins.
          </p>
          <p>
            The sarus crane is listed as Vulnerable by the IUCN, with wetland loss and agricultural change among the recognised pressures. Distribution details, population figures, and conservation status can change over time and vary by region, so readers should confirm specifics against authoritative sources such as the IUCN Red List.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The sarus crane is a member of the crane family, Gruidae, a group of tall, long-legged, long-necked wading birds. Its scientific name is <em>Antigone antigone</em>; it was formerly placed in the genus <em>Grus</em> as <em>Grus antigone</em>, and that older name still appears in many references. Cranes are distinct from herons and storks, which they superficially resemble, and are noted for their resonant calls and coordinated displays. Several subspecies of the sarus crane are recognised across its broad range.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The sarus crane is a strikingly large bird with predominantly pale to medium grey plumage. Its most conspicuous feature is the bare, reddish skin covering the head and upper neck, which contrasts sharply with the grey body. It has long legs and a long neck typical of cranes, and in flight it extends its neck straight out. As the tallest of the flying birds, a standing adult can reach a considerable height, and the sexes look broadly similar, though males tend to be somewhat larger. Juveniles are duller, with more buff or brownish tones and a feathered rather than fully bare head.
          </p>
        </>
      }
      habitat={
        <p>
          The sarus crane is associated with open wetlands, marshes, shallow lakes, and cultivated areas with standing water across parts of its range. In Asia it occurs across parts of the Indian subcontinent and Southeast Asia, where it frequents both natural wetlands and flooded or irrigated farmland such as rice fields. A geographically separate population is found in northern Australia. The species depends on shallow water and open ground, and it has historically adapted to landscapes shaped by agriculture, though it remains vulnerable to the loss and drainage of wetlands. Regional range details vary and should be checked against authoritative sources.
        </p>
      }
      diet={
        <p>
          The sarus crane is an omnivore with a varied diet. It feeds on plant matter including roots, tubers, shoots, grains, and aquatic vegetation, and supplements this with invertebrates such as insects and aquatic creatures, as well as small animals it encounters in shallow water and at field edges. It typically forages by walking slowly through wetlands and cultivated ground, probing and gleaning food from the water, mud, and soil.
        </p>
      }
      behavior={
        <>
          <p>
            The sarus crane is best known for its strong, often lifelong pair bonds. Pairs maintain their bond through elaborate unison calling, in which the two birds vocalise together in a coordinated duet, and through dancing displays that involve bowing, leaping, and wing-spreading. These displays play a role in courtship and in reinforcing the bond between mates. Pairs and families are frequently seen together, and the species can be relatively conspicuous in open habitats. Its loud, trumpeting calls carry over long distances across wetlands and fields.
          </p>
          <p>
            As a large wetland bird, the sarus crane is part of the ecology of marshes, shallow lakes, and watery farmland across parts of South and Southeast Asia, with a separate presence in northern Australia. Through its foraging on plants, invertebrates, and small animals it is one of many species that depend on healthy wetland systems, and its presence is often associated with well-watered, relatively open landscapes. Because it relies on these habitats, the sarus crane is considered sensitive to changes in water management, land use, and the condition of wetlands.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The sarus crane has a long cultural relationship with people across parts of its Asian range, where it is revered in some traditions and admired for its lifelong pair bonds and dancing displays. Its frequent use of farmland brings it into close proximity with human activity. The species is listed as Vulnerable by the IUCN, and recognised pressures include the loss and degradation of wetlands and changes in agriculture. Conservation of this bird is closely tied to the protection and sustainable management of wetlands. Concerns about wildlife on farmland or in local areas are best directed to local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Why is the sarus crane considered special among cranes?",
          answer:
            "The sarus crane is widely regarded as the tallest flying bird in the world. It is also well known for its lifelong pair bonds and its elaborate unison calling and dancing displays, which have made it a culturally significant bird in parts of its range.",
        },
        {
          question: "Where is the sarus crane found?",
          answer:
            "It is found in parts of the Indian subcontinent and Southeast Asia, with a separate population in northern Australia. It favours open wetlands, marshes, and cultivated areas with water. Regional range details vary and should be checked against authoritative sources such as the IUCN Red List.",
        },
        {
          question: "What does the sarus crane eat?",
          answer:
            "The sarus crane is an omnivore. It feeds on plant matter such as roots, tubers, shoots, and grains, along with invertebrates and small animals it finds in shallow water and at the edges of fields.",
        },
        {
          question: "What is the conservation status of the sarus crane?",
          answer:
            "The sarus crane is listed as Vulnerable by the IUCN. Wetland loss and agricultural change are among the recognised pressures. For the most current assessment, consult authoritative sources such as the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Birds (cranes, family Gruidae)" },
        { label: "Higher classification", value: "Genus Antigone (formerly Grus)" },
        { label: "Diet", value: "Omnivorous; plants, invertebrates, small animals" },
        { label: "Notable trait", value: "Tallest flying bird; lifelong pair bonds and dancing" },
        { label: "Habitat", value: "Open wetlands, marshes, and watery farmland" },
        { label: "Asia distribution", value: "Parts of the Indian subcontinent and Southeast Asia (also northern Australia)" },
        { label: "Human interaction", value: "Revered in some cultures; often uses farmland" },
        { label: "Conservation status", value: "Vulnerable (IUCN)" },
      ]}
      relatedLinks={[
        { label: "Stork Profile", href: "/animals/stork", description: "Another tall wetland bird" },
        { label: "Heron Profile", href: "/animals/heron", description: "A wetland wading bird" },
        { label: "Flamingo Profile", href: "/animals/flamingo", description: "A wetland bird" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
