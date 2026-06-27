import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/shipworm";
const TITLE = "Shipworm: The Wood-Boring Bivalve That Isn't a Worm";
const DESC =
  "Learn about the shipworm, a wood-boring bivalve mollusc of the family Teredinidae, including its anatomy, tunneling behavior, ecology, and history at sea.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("shipworm"),
});

export default function ShipwormPage() {
  return (
    <AnimalProfileLayout
      commonName="Shipworm"
      scientificName="bivalve molluscs, family Teredinidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Bivalve","Wood-borer"]}
      image={getAnimalImage("shipworm") ?? undefined}
      galleryImages={getAnimalGalleryImages("shipworm")}
      sources={ANIMAL_SOURCES["shipworm"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The shipworm is one of the ocean&#39;s great biological surprises: despite its name and its long, soft, worm-like body, it is not a worm at all. It is a highly modified bivalve mollusc belonging to the family Teredinidae, of which <em>Teredo navalis</em> is a well-known example. Rather than living inside a closed pair of shells like a clam or mussel, the shipworm has reduced its two shells to a small pair of ridged plates at the front of its body, which it uses like a rasp to bore tunnels into submerged wood.
          </p>
          <p>
            These animals are famous in human history for the damage they cause to wooden ships, piers, and pilings, and that reputation drove some of the earliest research into protecting timber in the sea. Ecologically, however, they play an important role in breaking down driftwood and other woody material that reaches marine waters. They occur in marine waters worldwide wherever submerged wood is available.
          </p>
          <p>
            Details of biology, range, and behavior vary among the many species in the family Teredinidae and from region to region, so specific claims should be checked against authoritative sources such as the Animal Diversity Web, Smithsonian Ocean, NOAA, WoRMS, and Britannica. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The most important point about shipworm taxonomy is that a shipworm is a bivalve mollusc, not a worm. The family Teredinidae sits among the bivalves, the same broad group that includes clams, mussels, oysters, and scallops, all of which characteristically have two shells (valves). In the shipworm those two valves are dramatically reduced and reshaped into small ridged boring plates at the head end, while the body has become elongated and worm-like to fit inside the tunnels it excavates. The worm-like appearance is a result of this specialized burrowing lifestyle, not a sign of any relationship to true worms.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A shipworm has a long, slender, soft body that can appear strikingly worm-like, which is the source of its common name. At the front end sit the two small shells, reduced to a pair of ridged plates that the animal rocks against the wood to rasp out its tunnel. As it bores, the shipworm lines the tunnel with a calcareous, or chalky, layer that forms a smooth tube around its body. At the rear end are paddle-shaped structures called pallets, which the animal can use to seal the opening of its tunnel; the pallets and the calcareous tube are often the most readily preserved and recognizable parts in specimens.
          </p>
        </>
      }
      habitat={
        <p>
          Shipworms live in marine waters worldwide, wherever submerged wood is present. Suitable habitat includes natural materials such as driftwood, fallen trees, and mangrove timber, as well as human-made wooden structures like piers, pilings, and the hulls of wooden vessels. Because they depend on wood as both home and food, their distribution is closely tied to the availability of that material in the sea. The specific conditions favored by different species, including salinity and temperature ranges, vary by species and region and are best confirmed through authoritative references.
        </p>
      }
      diet={
        <p>
          Shipworms feed largely on the wood they tunnel through, an unusual diet for an animal. They are helped by symbiotic bacteria housed in their bodies that can digest cellulose, the tough structural material of wood, releasing nutrients the shipworm can use. In addition to consuming wood, many shipworms also filter plankton and other suspended particles from the surrounding seawater, a feeding mode shared with other bivalves. Through this wood-consuming lifestyle, shipworms act as natural recyclers, helping to break down woody debris that enters marine environments.
        </p>
      }
      behavior={
        <p>
          The defining behavior of a shipworm is its tunneling: using its ridged shell plates as a rasp, it bores progressively deeper into submerged wood, enlarging and lining the tunnel as it grows. The animal generally keeps its body within the protective calcareous tube, extending siphons toward the tunnel opening to draw in water for respiration and filter feeding, and it can withdraw and seal the opening with its pallets. Like other bivalves, shipworms reproduce by releasing or brooding larvae that disperse in the water before settling onto suitable wood. Specific details of life cycle and reproduction vary by species and are best confirmed through authoritative sources.
        </p>
      }
      humanInteraction={
        <p>
          Shipworms are best known to people through history, where they earned the nickname &quot;termites of the sea&quot; for the damage they caused to wooden ships, docks, piers, and pilings. That long-standing problem spurred some of the earliest efforts to protect submerged timber and remains of interest to engineers and marine biologists today. Shipworms are not regarded as a danger to people, and this page does not give any control, removal, or treatment instructions. For questions about protecting wooden structures or about marine wood-borers in a specific location, consult relevant local experts or authorities. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice.
        </p>
      }
      faqs={[
        {
          question: "Is a shipworm really a worm?",
          answer:
            "No. Despite its name and its long, worm-like body, a shipworm is a bivalve mollusc in the family Teredinidae, related to clams and mussels. Its two shells are reduced to small ridged plates at the head end that it uses to bore into wood. The worm-like shape is an adaptation to its tunneling lifestyle.",
        },
        {
          question: "How do shipworms eat wood?",
          answer:
            "Shipworms rasp tunnels into submerged wood using their small ridged shell plates and feed on the wood they excavate. Symbiotic bacteria living in their bodies help digest cellulose, the structural material of wood, releasing usable nutrients. Many species also filter plankton from the surrounding seawater.",
        },
        {
          question: "Where do shipworms live?",
          answer:
            "Shipworms occur in marine waters worldwide wherever submerged wood is available. This includes natural materials like driftwood and fallen trees as well as human-made structures such as piers, pilings, and wooden ship hulls. Specific habitat preferences vary by species and region.",
        },
        {
          question: "Why are shipworms important in history?",
          answer:
            "Shipworms are famous for damaging wooden ships, piers, and pilings, which made them a serious concern for seafaring and coastal construction. That damage drove some of the earliest research into protecting timber in the sea. Ecologically, they also help break down woody debris that enters marine waters.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Wood-boring bivalve mollusc (not a worm)" },
        { label: "Higher classification", value: "Family Teredinidae (e.g. Teredo navalis)" },
        { label: "Diet", value: "Wood (aided by cellulose-digesting symbiotic bacteria); also filters plankton" },
        { label: "Notable trait", value: "Bores tunnels into submerged wood and lines them with a chalky calcareous tube" },
        { label: "Habitat", value: "Marine waters wherever submerged wood occurs" },
        { label: "Distribution", value: "Worldwide in marine waters" },
        { label: "Human interaction", value: "Historically damaged wooden ships, piers, and pilings; not a danger to people" },
        { label: "Conservation status", value: "Varies by species; not generally assessed as a conservation concern" },
      ]}
      relatedLinks={[
        { label: "Clam Profile", href: "/animals/clam", description: "A fellow bivalve mollusc" },
        { label: "Oyster Profile", href: "/animals/oyster", description: "A reef-building bivalve" },
        { label: "Mussel Profile", href: "/animals/mussel", description: "An attached bivalve" },
        { label: "Scallop Profile", href: "/animals/scallop", description: "A swimming bivalve" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
