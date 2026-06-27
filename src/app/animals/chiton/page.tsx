import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chiton";
const TITLE = "Chiton: The Marine Mollusk With Eight Shell Plates";
const DESC =
  "Chitons are marine mollusks of the class Polyplacophora, recognized by their eight overlapping shell plates. Learn their anatomy, habitat, diet, and behavior.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("chiton"),
});

export default function ChitonPage() {
  return (
    <AnimalProfileLayout
      commonName="Chiton"
      scientificName="class Polyplacophora"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Polyplacophoran","Rocky shore"]}
      image={getAnimalImage("chiton") ?? undefined}
      galleryImages={getAnimalGalleryImages("chiton")}
      sources={ANIMAL_SOURCES["chiton"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Chitons are marine mollusks that form their own class, <em>Polyplacophora</em>. Their most recognizable feature is a shell made of eight overlapping plates, called valves, set into a tough muscular band known as the girdle. This segmented arrangement lets the flattened, oval body flex and curl, so a chiton can press itself tightly against curved and uneven rock surfaces.
          </p>
          <p>
            Most chitons live on hard surfaces in the intertidal zone and shallow coastal seas, where they cling with a broad muscular foot and graze algae and other growth using a radula, a ribbon-like feeding structure whose teeth are hardened with magnetite, an iron mineral. Many are active at night and return to a familiar resting spot, and some can roll up like a pill bug if they are dislodged.
          </p>
          <p>
            Details of size, coloration, range, and behavior vary considerably from one chiton species to another and from region to region. The descriptions here are general, and specific claims should be checked against authoritative sources such as the Animal Diversity Web, the Smithsonian Ocean portal, WoRMS, and Britannica.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Chitons make up the class <em>Polyplacophora</em>, one of the major living classes of mollusks, alongside the gastropods (snails and slugs), bivalves (clams, oysters, and relatives), and cephalopods (octopuses and squid). They are sometimes informally called &quot;coat-of-mail shells&quot; because the eight overlapping plates resemble segmented armor. Despite this segmented look, a chiton is a single mollusk, not a colony or a segmented worm; the eight valves are part of one continuous animal held together by the surrounding girdle.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A chiton has a flattened, oval body protected on top by eight overlapping shell plates, or valves, arranged in a row from front to back. These plates are bordered and partly held in place by the girdle, a tough, often leathery muscular band that can be smooth, scaly, hairy, or spiny depending on the species. The plates can flex against one another, giving the body its characteristic ability to bend and conform to curved rock. Underneath, the animal has a large, broad, muscular foot used for clinging and slow movement, with a groove around its edge that houses the gills. Sizes, colors, and surface textures differ widely among the many chiton species.
          </p>
        </>
      }
      habitat={
        <p>
          Most chitons live on hard substrates such as rocks, boulders, and shells in the intertidal zone and in shallow coastal seas, where they can grip surfaces that are regularly washed by waves. Some species are found in deeper water. Their flattened shape and strong, suction-like foot help them resist being swept away by surf and currents. The specific depth range and shoreline conditions a given chiton prefers vary by species and region, so local and authoritative sources are the best guide to where a particular species occurs.
        </p>
      }
      diet={
        <p>
          Chitons are mainly grazers. Using the radula, a tongue-like ribbon set with rows of small teeth, they scrape algae, diatoms, and other thin growth from the surfaces of rocks. The teeth are reinforced with magnetite, an iron-bearing mineral that makes them unusually hard and helps them wear against stone without quickly breaking down. A few chiton species are reported to be more carnivorous, trapping small animals, but most are best known as algal grazers. In this role they form part of the grazing community that shapes which organisms grow on intertidal and shallow-water rock.
        </p>
      }
      behavior={
        <p>
          Chitons move slowly across rock on their muscular foot, and many are most active at night, grazing under cover of darkness and returning to a familiar home spot during the day. When a chiton is dislodged from its surface, some species can roll up into a ball, much like a pill bug, protecting the softer underside with the curled ring of armored plates. Reproduction in most chitons involves the release of eggs and sperm into the water, where fertilization occurs and the young develop through a free-swimming larval stage before settling onto a surface. The fine details of life cycle and breeding timing differ among species.
        </p>
      }
      humanInteraction={
        <p>
          Chitons are mostly of interest to tide-pool observers, naturalists, and biologists, who value them as a distinctive and ancient mollusk group. They are not venomous, and they are not a focus of this page as a food animal. In some coastal cultures certain chiton species are gathered and eaten locally, but this page does not provide any food-safety, harvesting, or preparation guidance; harvesting rules vary by location and authority, and questions of that kind should go to local authorities. When observing chitons in the wild, it is best to avoid prying or removing them from rocks, since this can injure the animal. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice.
        </p>
      }
      faqs={[
        {
          question: "Why does a chiton have eight shell plates?",
          answer:
            "A chiton's shell is divided into eight overlapping plates, called valves, set into a muscular girdle. This segmented design lets the body flex and curl so the animal can grip curved and uneven rock surfaces tightly. The eight-plate arrangement is the defining feature of the class Polyplacophora.",
        },
        {
          question: "Is a chiton a type of snail?",
          answer:
            "No. Chitons belong to their own class of mollusks, Polyplacophora, separate from gastropods such as snails and slugs. They share the broad muscular foot and rasping radula seen in many mollusks, but their eight-plate shell sets them apart. They are sometimes called coat-of-mail shells because of that armored appearance.",
        },
        {
          question: "What do chitons eat?",
          answer:
            "Most chitons graze algae and other thin growth from rocks using a radula, a ribbon of small teeth hardened with the iron mineral magnetite. A few species are reported to be more carnivorous, but algal grazing is the typical feeding mode. Through this grazing they help shape the community of organisms living on intertidal rock.",
        },
        {
          question: "Can a chiton really roll up like a pill bug?",
          answer:
            "Yes, some chiton species can curl into a ball if they are knocked off their surface. Rolling up tucks away the soft underside and protects it with the ring of armored plates. This behavior varies by species, and not every chiton does it.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Chitons (coat-of-mail shells)" },
        { label: "Higher classification", value: "Class Polyplacophora (Mollusca)" },
        { label: "Diet", value: "Mainly grazers on algae; a few species more carnivorous" },
        { label: "Notable trait", value: "Shell of eight overlapping plates; radula teeth hardened with magnetite" },
        { label: "Habitat", value: "Hard surfaces in the intertidal zone and shallow seas; some deeper" },
        { label: "Distribution", value: "Marine, in coastal waters worldwide; specifics vary by species" },
        { label: "Human interaction", value: "Observed in tide pools; eaten locally in some regions; not venomous" },
        { label: "Conservation status", value: "Varies by species; many not individually assessed" },
      ]}
      relatedLinks={[
        { label: "Limpet Profile", href: "/animals/limpet", description: "Another rock-clinging mollusc" },
        { label: "Whelk Profile", href: "/animals/whelk", description: "A predatory sea snail" },
        { label: "Abalone Profile", href: "/animals/abalone", description: "A large grazing sea snail" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How marine life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
