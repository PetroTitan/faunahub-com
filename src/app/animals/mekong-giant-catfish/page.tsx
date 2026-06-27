import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mekong-giant-catfish";
const TITLE = "Mekong Giant Catfish: A Critically Endangered River Giant";
const DESC =
  "The Mekong giant catfish (Pangasianodon gigas) is one of the world's largest freshwater fish and a Critically Endangered species of the Mekong basin.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("mekong-giant-catfish"),
});

export default function MekongGiantCatfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Mekong Giant Catfish"
      scientificName="Pangasianodon gigas"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Freshwater","Critically Endangered"]}
      image={getAnimalImage("mekong-giant-catfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("mekong-giant-catfish")}
      sources={ANIMAL_SOURCES["mekong-giant-catfish"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Mekong giant catfish (<em>Pangasianodon gigas</em>) is one of the world&#39;s largest freshwater fish, a massive, scaleless catfish associated with the Mekong River basin in Southeast Asia. Adults can reach very large sizes for a freshwater species and are notable for being nearly toothless as they mature, feeding largely on algae and plant matter rather than hunting prey.
          </p>
          <p>
            Much of the species&#39; biology is tied to the river itself. These fish are known to undertake long migrations along the Mekong, and their life cycle depends on the connectivity and seasonal rhythms of a free-flowing river system. As one of the basin&#39;s signature animals, the Mekong giant catfish has become a symbol of the wider health of the river and the freshwater life it supports.
          </p>
          <p>
            This profile is educational and not a fishing or food guide. The Mekong giant catfish is classified as Critically Endangered, and the details of its range, behavior, and status are still studied; readers should treat specifics here as a general overview and check authoritative sources such as the IUCN Red List for the most current assessment.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Mekong giant catfish, <em>Pangasianodon gigas</em>, is a member of the shark catfish family (Pangasiidae), a group of large freshwater catfishes found in South and Southeast Asia. Like other catfishes, it lacks scales and has a smooth, heavy body, but it stands apart within its family for its extreme size and its largely herbivorous, nearly toothless adult form. It is the only species in its genus, underscoring how distinctive it is among the river&#39;s many fish.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a large, robust, scaleless catfish with a broad head and a tapering body. Adults are notable for being nearly toothless, and the prominent barbels typical of many catfishes are reduced compared with related species. The overall coloration tends toward grey to dark tones, and the sheer bulk of a mature fish is its most striking feature, ranking it among the largest freshwater fish known. The specimens most people encounter are kept in aquariums, where the species&#39; size is especially apparent.
          </p>
        </>
      }
      habitat={
        <p>
          The Mekong giant catfish is native to the Mekong River basin, a major river system flowing through parts of mainland Southeast Asia. It is a freshwater species tied specifically to this basin rather than to Asia broadly, and its life cycle depends on the river&#39;s main channel and connected waters that allow for its long migrations. Because the species relies on an unobstructed, seasonally flowing river, changes to the basin&#39;s hydrology directly affect where and how it can live.
        </p>
      }
      diet={
        <p>
          Unlike many catfishes that are active predators, the Mekong giant catfish is largely herbivorous as an adult, feeding on algae and plant matter drawn from the river. Its nearly toothless mouth reflects this grazing diet rather than a hunting one. This reliance on plant material and the productivity of the river ties the fish closely to the overall condition of the Mekong&#39;s aquatic plant communities.
        </p>
      }
      behavior={
        <>
          <p>
            A defining behavior of the Mekong giant catfish is migration: individuals are known to travel long distances along the river, movements thought to be linked to feeding and reproduction. This migratory habit means the species needs a connected, free-flowing river to complete its life cycle. Much about its detailed behavior in the wild remains difficult to study, in part because the species has become so rare.
          </p>
          <p>
            As one of the largest animals in the Mekong, this catfish is a flagship for the river&#39;s freshwater biodiversity, and its presence reflects the health of the wider system. Its dependence on long migrations and seasonal river flows makes it especially sensitive to changes in the basin. Within the context of Asian freshwater fauna, the Mekong giant catfish illustrates how a single great river can support unusually large and specialized fish, and how the fate of such species is bound to the river&#39;s continued connectivity.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Mekong giant catfish is Critically Endangered. Dams that block its migration routes, broader habitat change across the basin, and overfishing have driven severe declines in the species. Its rarity and size have also made it a target of fishing pressure, which is best understood here as a conservation concern rather than an activity to pursue. Protecting the fish is closely linked to maintaining a connected, healthy Mekong River. This page does not offer fishing or food advice; questions about the species&#39; conservation are best directed to recognized wildlife and fisheries authorities working in the region.
        </p>
      }
      faqs={[
        {
          question: "How big does the Mekong giant catfish get?",
          answer:
            "It is recognized as one of the world's largest freshwater fish, reaching very large sizes for a river species. Precise figures vary between sources, so it is best to consult authoritative references for documented measurements.",
        },
        {
          question: "What does the Mekong giant catfish eat?",
          answer:
            "Adults are largely herbivorous, feeding on algae and plant matter in the river. They are nearly toothless, which suits this grazing diet rather than active predation.",
        },
        {
          question: "Why is the Mekong giant catfish endangered?",
          answer:
            "It is classified as Critically Endangered. Dams that interrupt its migrations, habitat change across the Mekong basin, and overfishing have all contributed to severe declines in the species.",
        },
        {
          question: "Where is the Mekong giant catfish found?",
          answer:
            "It is native to the Mekong River basin in Southeast Asia. The species is tied specifically to this river system rather than to Asia as a whole, and its survival depends on a connected, free-flowing river.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Fish (shark catfish family, Pangasiidae)" },
        { label: "Higher classification", value: "Genus Pangasianodon; catfish order Siluriformes" },
        { label: "Diet", value: "Largely herbivorous; algae and plant matter" },
        { label: "Notable trait", value: "Among the largest freshwater fish; nearly toothless adults" },
        { label: "Habitat", value: "Freshwater; main channel of a large river system" },
        { label: "Asia distribution", value: "Native to the Mekong River basin in Southeast Asia" },
        { label: "Human interaction", value: "Subject of conservation concern; affected by fishing and dams" },
        { label: "Conservation status", value: "Critically Endangered (IUCN)" },
      ]}
      relatedLinks={[
        { label: "Catfish Profile", href: "/animals/catfish", description: "Catfish more broadly" },
        { label: "Asian Arowana", href: "/animals/arowana", description: "Another threatened Asian fish" },
        { label: "Sturgeon Profile", href: "/animals/sturgeon", description: "Another huge threatened fish" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
