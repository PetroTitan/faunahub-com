import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/limpet";
const TITLE = "Limpet: Cone-Shelled Marine Gastropods of Rocky Shores";
const DESC =
  "Limpets are marine gastropod molluscs with simple cone-shaped shells that cling to wave-battered rocks, graze algae, and live on rocky shores worldwide.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("limpet"),
});

export default function LimpetPage() {
  return (
    <AnimalProfileLayout
      commonName="Limpet"
      scientificName="marine gastropods (e.g. Patella, Lottia)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Gastropod","Rocky shore"]}
      image={getAnimalImage("limpet") ?? undefined}
      galleryImages={getAnimalGalleryImages("limpet")}
      sources={ANIMAL_SOURCES["limpet"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Limpets are marine gastropod molluscs known for their simple, cone-shaped shells, often likened to a &quot;Chinese hat,&quot; and a strong muscular foot. The familiar true limpets, including members of <em>Patella</em> and <em>Lottia</em>, are common sights on rocky shores, where they cling extremely tightly to the rock and resist being pulled off or swept away by waves.
          </p>
          <p>
            Many limpets graze microscopic algae from the rock surface using a file-like ribbon of teeth called a radula. Some, such as the owl limpet, maintain and defend a &quot;garden&quot; patch of algae and return to a fixed home scar on the rock between feeding trips. The name covers several rocky-shore lifestyles rather than one tidy lineage.
          </p>
          <p>
            &quot;Limpet&quot; is a shape-based common name applied to several different gastropod groups, so details of biology, range, and classification vary from species to species. The notes here are a general introduction, and specifics for any particular species should be checked against authoritative sources such as the Animal Diversity Web, Smithsonian Ocean, WoRMS, or Britannica.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Limpets are gastropods, the large mollusc group that also includes snails and sea slugs. The word \&quot;limpet\&quot; is a description of body and shell shape rather than the name of a single evolutionary lineage, so several distinct gastropod groups are casually called limpets. The familiar true limpets include genera such as <em>Patella</em> and <em>Lottia</em>. Because the term spans more than one group, the precise higher classification depends on which species is being discussed.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A limpet&#39;s most recognisable feature is its simple, conical shell, broad at the base and rising to a low peak, frequently compared to a Chinese hat. Beneath the shell sits a single large, muscular foot that grips the rock, along with the head and gills. The low, smooth profile helps the animal shed the force of breaking waves, and the wide foot creates the strong, suction-like hold that makes limpets so difficult to dislodge. Colour and shell sculpture vary by species and habitat.
          </p>
        </>
      }
      habitat={
        <p>
          Limpets live on rocky shores and seabeds around the world. True limpets are especially associated with wave-battered intertidal rock, where they cling firmly and can seal themselves down against the rock to reduce water loss when exposed at low tide. Exact range, preferred shore zone, and habitat differ by species and region, so specific distribution claims for any one limpet should be confirmed against authoritative sources rather than assumed from the group as a whole.
        </p>
      }
      diet={
        <p>
          Many limpets are grazers that feed on microscopic algae growing on the rock, scraping it free with a tough, file-like radula. By steadily mowing these algal films, grazing limpets can shape the appearance and community of a rocky shore, influencing how much algae builds up and which other organisms can settle. Some species, such as the owl limpet, tend and defend a patch of algae, behaving almost like small-scale farmers of their food supply.
        </p>
      }
      behavior={
        <p>
          Despite appearing stationary, limpets move to feed, often making grazing excursions and then returning to a precise \&quot;home scar,\&quot; a spot on the rock worn to fit their own shell, which improves their seal and grip. The owl limpet is noted for actively defending its algal garden against intruders. Reproductive and life-cycle details, including how and when they spawn, vary among the different groups called limpets and are best checked against species-level sources.
        </p>
      }
      humanInteraction={
        <p>
          People have long encountered limpets while exploring rocky shores, and some species are eaten by people in various coastal cultures as a traditional food. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice. Shellfish harvesting rules vary by location and authority, and questions about collecting, regulations, or any food-safety concern should be directed to local authorities or a qualified professional. It is best to observe limpets in place and avoid disturbing or prying wild individuals from the rock.
        </p>
      }
      faqs={[
        {
          question: "Why are limpets so hard to pull off rocks?",
          answer:
            "Limpets grip with a broad, muscular foot that forms a strong, suction-like hold against the rock surface. Many true limpets also return to a \"home scar,\" a worn spot shaped to fit their own shell, which tightens the seal. This combination lets them resist breaking waves and being pulled off.",
        },
        {
          question: "What do limpets eat?",
          answer:
            "Many limpets are grazers that scrape microscopic algae from rock surfaces using a file-like radula. Some species, such as the owl limpet, tend and defend a small patch of algae. By grazing, they help shape which organisms can grow on a rocky shore.",
        },
        {
          question: "Is \"limpet\" a single species?",
          answer:
            "No. \"Limpet\" is a shape-based common name applied to several different gastropod groups rather than one species or tidy lineage. Familiar true limpets include members of Patella and Lottia, but biology and classification vary by species.",
        },
        {
          question: "Do people eat limpets?",
          answer:
            "Some limpet species are eaten by people as a traditional food in various coastal regions. This page is educational and does not give food-safety or harvesting guidance. Harvesting rules vary by location and authority, so direct any collecting or food-safety questions to local authorities or a qualified professional.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Marine gastropod molluscs (true limpets and other cone-shelled gastropods)" },
        { label: "Higher classification", value: "Gastropoda; true limpets include Patella and Lottia" },
        { label: "Diet", value: "Many graze microscopic algae from rock using a file-like radula" },
        { label: "Notable trait", value: "Cling tightly to rocks; some return to a fixed home scar" },
        { label: "Habitat", value: "Rocky shores and seabeds, often wave-battered intertidal rock" },
        { label: "Distribution", value: "Worldwide; exact range varies by species and region" },
        { label: "Human interaction", value: "Observed on shores; some species eaten by people. Avoid prying wild individuals from rock" },
        { label: "Conservation status", value: "Varies by species and region; not assessed as one group" },
      ]}
      relatedLinks={[
        { label: "Chiton Profile", href: "/animals/chiton", description: "Another rock-clinging mollusc" },
        { label: "Whelk Profile", href: "/animals/whelk", description: "A predatory sea snail" },
        { label: "Abalone Profile", href: "/animals/abalone", description: "A large grazing sea snail" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How marine life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
