import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/abalone";
const TITLE = "Abalone: Ear-Shaped Sea Snails of Genus Haliotis";
const DESC =
  "Abalone are large marine gastropods (genus Haliotis) with iridescent, ear-shaped shells. Learn about their algae diet, rocky habitat, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("abalone"),
});

export default function AbalonePage() {
  return (
    <AnimalProfileLayout
      commonName="Abalone"
      scientificName="genus Haliotis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Gastropod","Sea snail"]}
      image={getAnimalImage("abalone") ?? undefined}
      galleryImages={getAnimalGalleryImages("abalone")}
      sources={ANIMAL_SOURCES["abalone"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Abalone are large marine gastropod molluscs of the genus <em>Haliotis</em> (family Haliotidae). They are easily recognised by a single, ear-shaped shell that is a low, flattened spiral lined on the inside with iridescent mother-of-pearl, or nacre. A distinctive row of small holes along one edge of the shell serves as respiratory pores, releasing water and waste drawn across the gills.
          </p>
          <p>
            These sea snails cling tightly to rocks and reef surfaces with a large, muscular foot and graze on algae, especially kelp. They are found on rocky coasts and reefs across many temperate and tropical seas, where they form part of the grazing community that helps shape algal growth on hard substrates.
          </p>
          <p>
            Details such as size, exact range, and status differ from one abalone species to another and from region to region, so specifics should always be checked against authoritative sources such as the IUCN, NOAA, the Smithsonian, and Animal Diversity Web. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice; for any food-safety or harvesting question, contact a qualified professional or local authority.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Abalone belong to the genus <em>Haliotis</em>, the only genus in the family Haliotidae. They are gastropods, the same broad class of molluscs that includes land snails, periwinkles, and sea slugs, but their shell has become a low, ear-like spiral rather than the tall coiled form many people picture for a snail. As marine gastropods they breathe with gills and move on a single muscular foot, traits shared across the wider snail lineage even though the abalone shell looks unusual.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The abalone shell is broad, low, and ear-shaped, formed from a flattened spiral that exposes much of the body&#39;s upper surface. Its outer surface is often rough or encrusted, while the interior is lined with iridescent nacre that shifts through blues, greens, and pinks. Along one margin runs a line of small holes, the respiratory pores, through which water and waste pass; older pores toward the rear are typically sealed over as the animal grows and new ones open. Beneath the shell, the large muscular foot dominates the underside and grips the rock firmly.
          </p>
        </>
      }
      habitat={
        <p>
          Abalone live on rocky coasts and reefs, clinging to hard surfaces in many temperate and tropical seas. They favour areas with abundant algae, particularly kelp, often sheltering in crevices and on the undersides of rocks during the day. The precise depth, exposure, and water conditions an abalone prefers vary by species and region, so habitat details for any particular kind are best confirmed against authoritative regional sources.
        </p>
      }
      diet={
        <p>
          Abalone are grazing herbivores that feed mainly on algae, especially kelp. Younger individuals often scrape microscopic algae and diatoms from rock surfaces, while larger abalone commonly capture and consume drifting pieces of kelp that wash within reach, holding the food with the foot. As grazers on hard substrates they play a role in the reef and kelp-forest community, influencing how algae grow and contributing to the wider food web alongside other invertebrate grazers.
        </p>
      }
      behavior={
        <p>
          Abalone are slow-moving and typically sedentary, spending much of their time fixed to rock by the strong suction of the foot, which makes them difficult to dislodge and offers protection against predators and wave action. They are most active in feeding when conditions allow, and many species are reported to be more active at night. Like many marine gastropods, abalone generally reproduce by releasing eggs and sperm into the water, where fertilisation occurs externally; the resulting larvae drift before settling onto suitable rocky surfaces to grow.
        </p>
      }
      humanInteraction={
        <p>
          Abalone have a long history of interest to people, and they are widely harvested and farmed, with the iridescent nacre also valued in ornament and decoration. Several abalone species have declined, and some are of conservation concern, with over-harvesting and disease noted among the pressures, though status varies by species and region. They are widely eaten by people, but this is an educational profile and not a food or harvesting guide: it gives no preparation, safety, or harvesting steps. Shellfish harvesting rules vary by location and authority, and for any food-safety, allergy, or harvesting question you should contact a qualified professional or the relevant local authority. Avoid handling wild individuals.
        </p>
      }
      faqs={[
        {
          question: "What is an abalone?",
          answer:
            "An abalone is a large marine sea snail of the genus Haliotis, a gastropod mollusc. It has a single, ear-shaped shell lined with iridescent mother-of-pearl and a row of small respiratory holes along one edge. Abalone cling to rocks with a muscular foot and graze on algae.",
        },
        {
          question: "Why does an abalone shell have a row of holes?",
          answer:
            "The small holes along one edge of the shell are respiratory pores. Water that has passed over the gills, along with waste, is expelled through them. As the animal grows, older pores toward the back are usually sealed and new ones open near the front.",
        },
        {
          question: "What do abalone eat?",
          answer:
            "Abalone are herbivores that feed mainly on algae, especially kelp. Smaller individuals often scrape microscopic algae from rock surfaces, while larger abalone commonly catch and eat drifting fragments of kelp. They are part of the grazing community on rocky reefs and in kelp forests.",
        },
        {
          question: "Are abalone endangered?",
          answer:
            "Several abalone species have declined and some are of conservation concern, with over-harvesting and disease among the noted pressures, but the situation varies by species and region. Some species have been formally assessed while others have not. For accurate, current status, consult authoritative sources such as the IUCN and regional fisheries agencies.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sea snails (marine gastropods), genus Haliotis" },
        { label: "Higher classification", value: "Family Haliotidae, class Gastropoda, phylum Mollusca" },
        { label: "Diet", value: "Herbivorous grazer; algae, especially kelp" },
        { label: "Notable trait", value: "Ear-shaped shell with nacre lining and a row of respiratory pores" },
        { label: "Habitat", value: "Rocky coasts and reefs; varies by species and region" },
        { label: "Distribution", value: "Many temperate and tropical seas" },
        { label: "Human interaction", value: "Widely harvested, farmed, and eaten; avoid handling wild individuals" },
        { label: "Conservation status", value: "Varies by species and region; some declined or of concern" },
      ]}
      relatedLinks={[
        { label: "Limpet Profile", href: "/animals/limpet", description: "Another rock-clinging gastropod" },
        { label: "Whelk Profile", href: "/animals/whelk", description: "A predatory sea snail" },
        { label: "Cowrie Profile", href: "/animals/cowrie", description: "A glossy-shelled sea snail" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How marine life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
