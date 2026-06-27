import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/arowana";
const TITLE = "Asian Arowana: The Endangered \"Dragon Fish\" Explained";
const DESC =
  "Learn about the Asian arowana (Scleropages formosus), an Endangered, CITES Appendix I freshwater fish of Southeast Asia prized in the ornamental-fish trade.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("arowana"),
});

export default function ArowanaPage() {
  return (
    <AnimalProfileLayout
      commonName="Asian Arowana"
      scientificName="Scleropages formosus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Freshwater","CITES-protected"]}
      image={getAnimalImage("arowana") ?? undefined}
      galleryImages={getAnimalGalleryImages("arowana")}
      sources={ANIMAL_SOURCES["arowana"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Asian arowana (<em>Scleropages formosus</em>) is a large, elongated freshwater fish found in slow-moving rivers, swamps, and flooded forests in parts of Southeast Asia. With its long body, broad metallic scales, and a pair of barbels on the lower jaw, it is one of the most recognizable freshwater fishes of the region. It is a surface-oriented predator that patrols the upper water column and can leap clear of the water to seize prey.
          </p>
          <p>
            Among its most notable traits is its mode of reproduction: the Asian arowana is a mouthbrooder, with a parent carrying the eggs and developing young inside its mouth for protection. This parental care, combined with its striking appearance, has long made the species a subject of fascination. Certain colour forms, particularly the red and gold types, are highly valued in the ornamental-fish trade and are known in some cultures as the &quot;dragon fish.&quot;
          </p>
          <p>
            This demand, alongside habitat loss, has contributed to wild population declines. The Asian arowana is listed as Endangered and is included on CITES Appendix I, which restricts international trade. Range, colour-form, and conservation details vary by population and source, so specific claims should be checked against authoritative references such as the IUCN Red List, CITES, and museum or university zoology resources.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Asian arowana belongs to the bony-tongue fishes, an ancient lineage of freshwater fish known scientifically by the genus <em>Scleropages</em>. The species <em>Scleropages formosus</em> encompasses several recognized colour forms that differ in appearance across parts of its Southeast Asian range. As a bony-tongue, it is related to other large, primitive freshwater fishes found in tropical regions worldwide, though the Asian arowana is distinct in its restricted distribution and its prominence in the ornamental trade.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Asian arowana has a long, laterally compressed body covered in large, prominent metallic scales that can appear silver, gold, red, or green depending on the colour form. A pair of short barbels projects from the tip of the lower jaw, and the mouth is angled steeply upward, an adaptation suited to feeding at or near the water&#39;s surface. The dorsal and anal fins are set far back along the body toward the tail, giving the fish a streamlined, ribbon-like outline as it moves. Adults can reach a substantial size, and their reflective scales are a major reason for their appeal in the aquarium trade.
          </p>
        </>
      }
      habitat={
        <p>
          The Asian arowana occurs in parts of Southeast Asia, where it inhabits slow-moving rivers, blackwater swamps, and seasonally flooded forests. It favours calm, often vegetated waters where it can hunt near the surface. Because its distribution is tied to specific river systems and wetland habitats rather than the continent as a whole, range claims should be framed cautiously and checked against authoritative sources. Drainage of wetlands and degradation of these freshwater habitats have reduced the areas available to wild populations.
        </p>
      }
      diet={
        <p>
          As a surface-hunting predator, the Asian arowana feeds on a variety of small animals that it encounters in the upper water column and at the water&#39;s surface. Its diet in the wild typically includes insects, smaller fishes, and other small aquatic and surface-dwelling prey. The upward-facing mouth and the ability to leap from the water allow it to capture prey from the surface film and, at times, from low overhanging vegetation. As an opportunistic predator, it plays a role in regulating the populations of the smaller animals it consumes.
        </p>
      }
      behavior={
        <>
          <p>
            The Asian arowana is most active near the water&#39;s surface, where it patrols slowly in search of prey. It is capable of leaping clear of the water to seize prey, a behaviour that reflects its surface-oriented hunting strategy. One of its most distinctive behaviours is parental mouthbrooding: a parent fish carries the fertilized eggs and the developing young within its mouth, sheltering them through their early, vulnerable stages before they become independent. This investment in relatively few, well-protected offspring is characteristic of the species.
          </p>
          <p>
            Within its Southeast Asian freshwater habitats, the Asian arowana functions as a mid-to-upper-level predator, helping to shape the communities of smaller fishes and invertebrates on which it feeds. Its dependence on slow-moving rivers, swamps, and flooded forests makes it sensitive to changes in water quality, water flow, and wetland extent, so its presence can reflect the condition of these freshwater systems. As wetland habitats in parts of the region have been altered or lost, populations of the arowana and the broader communities it belongs to have come under pressure.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Asian arowana is one of the most sought-after fishes in the ornamental-fish trade, with red and gold forms especially prized and regarded in some cultures as auspicious \&quot;dragon fish.\&quot; This high demand, together with habitat loss, has driven declines in wild populations, and the species is listed as Endangered and on CITES Appendix I. International trade is therefore tightly restricted, and documented captive-bred fish account for much of the legal trade. On FaunaHub this trade is presented strictly as a conservation concern: it is not a keeping, harvesting, or acquisition recommendation. Questions about the legal status of the species or its trade should be directed to CITES authorities and relevant national wildlife agencies.
        </p>
      }
      faqs={[
        {
          question: "Why is the Asian arowana called the \"dragon fish\"?",
          answer:
            "Its long body, large reflective scales, and barbels give it an appearance that some cultures associate with traditional depictions of dragons. The red and gold colour forms in particular are valued for this reason, which has contributed to high demand in the ornamental-fish trade.",
        },
        {
          question: "Why is the Asian arowana endangered?",
          answer:
            "Wild declines have been linked to a combination of habitat loss, including the draining and degradation of wetlands, and pressure from the ornamental-fish trade. The species is listed as Endangered and on CITES Appendix I. For current details, consult the IUCN Red List and CITES.",
        },
        {
          question: "Is it legal to keep an Asian arowana?",
          answer:
            "Because the species is listed on CITES Appendix I, international trade is heavily restricted, and rules vary by country. FaunaHub does not provide keeping or acquisition guidance; questions about legality should be directed to CITES authorities and national wildlife agencies.",
        },
        {
          question: "How does the Asian arowana care for its young?",
          answer:
            "It is a mouthbrooder. A parent fish carries the fertilized eggs and developing young inside its mouth, protecting them through their early stages until they are able to live independently.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Fish (bony-tongue fish)" },
        { label: "Higher classification", value: "Genus Scleropages, family of bony-tongues" },
        { label: "Diet", value: "Carnivorous; insects, small fishes, and other small prey" },
        { label: "Notable trait", value: "Surface-hunting mouthbrooder that can leap from the water" },
        { label: "Habitat", value: "Slow-moving rivers, swamps, and flooded forests" },
        { label: "Asia distribution", value: "Found in parts of Southeast Asia, tied to specific freshwater systems" },
        { label: "Human interaction", value: "Highly valued in the ornamental-fish trade; trade tightly restricted" },
        { label: "Conservation status", value: "Endangered; CITES Appendix I" },
      ]}
      relatedLinks={[
        { label: "Mekong Giant Catfish", href: "/animals/mekong-giant-catfish", description: "Another threatened Asian fish" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "A freshwater fish" },
        { label: "Gar Profile", href: "/animals/gar", description: "An armoured freshwater fish" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
