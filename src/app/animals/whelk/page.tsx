import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/whelk";
const TITLE = "Whelk: Predatory Sea Snail (Buccinum undatum) Facts";
const DESC =
  "Learn about whelks, marine gastropod sea snails like the common whelk (Buccinum undatum): their spiral shells, predatory feeding, habitat, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("whelk"),
});

export default function WhelkPage() {
  return (
    <AnimalProfileLayout
      commonName="Whelk"
      scientificName="marine gastropods (e.g. Buccinum)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Gastropod","Sea snail"]}
      image={getAnimalImage("whelk") ?? undefined}
      galleryImages={getAnimalGalleryImages("whelk")}
      sources={ANIMAL_SOURCES["whelk"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Whelks are marine gastropod molluscs — sea snails — recognised by their spiral shells. The common whelk, <em>Buccinum undatum</em>, has a sturdy, ridged shell and a tubular siphon, and is one of the better-known members of this group. &quot;Whelk&quot; is a common name applied to a variety of sea snails, mostly in the family Buccinidae and related families, so it covers more than a single species.
          </p>
          <p>
            Many whelks are active predators and scavengers. They feed on worms, other molluscs, and carrion, and some species drill into bivalve shells to reach the animal inside. They are typically found on sandy and muddy seabeds and on rocky shores in cool and temperate seas.
          </p>
          <p>
            Because &quot;whelk&quot; spans several species, specific details of size, behaviour, range, and conservation can vary by species and region and should be checked against authoritative sources such as the World Register of Marine Species, Animal Diversity Web, and NOAA. The common whelk is widely fished and eaten in some regions; this page is educational and does not provide medical, food-safety, harvesting, or treatment advice.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Whelks are gastropods, the largest class of molluscs, which also includes other sea snails, land snails, and slugs. Within the gastropods, most animals called whelks belong to the family Buccinidae and several related families, with the common whelk, <em>Buccinum undatum</em>, as a familiar example. The name \&quot;whelk\&quot; is a broad common label rather than a strict scientific grouping, so it is applied to a number of unrelated predatory and scavenging sea snails. For precise classification of any particular species, authoritative taxonomic references such as the World Register of Marine Species are the best guide.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A whelk has a coiled, spiral shell that protects its soft body, and it can withdraw inside when disturbed. In the common whelk, <em>Buccinum undatum</em>, the shell is sturdy and ridged, with a pointed spire and a wide opening, and the animal extends a tubular siphon used in respiration and sensing the surrounding water. Shell colour and texture vary between species and individuals, and the overall size and proportions differ across the many sea snails called whelks. Like other gastropods, a whelk moves on a muscular foot and can seal its shell opening with a horny plate called an operculum.
          </p>
        </>
      }
      habitat={
        <p>
          Whelks live on the seabed and shoreline of cool and temperate seas, commonly on sandy and muddy bottoms and on rocky shores. The common whelk is found in these marine environments, where it moves over and through soft sediments in search of food. Different species occupy different depths and substrate types, so habitat preferences vary by species and region. Reported ranges and habitats are best confirmed against authoritative sources rather than assumed for the group as a whole.
        </p>
      }
      diet={
        <p>
          Many whelks are predators and scavengers, and this dual role makes them important members of seabed communities. They feed on worms, other molluscs, and carrion, helping to recycle dead animal material on the seafloor. Some species drill into the shells of bivalves such as clams to reach the soft tissue inside, while others are drawn to wounded or dead prey. As both hunters and cleaners of the seabed, whelks contribute to the broader marine food web.
        </p>
      }
      behavior={
        <p>
          Whelks use their siphon and sense of smell to detect food at a distance, then move across the seabed on a muscular foot to reach it. They are generally slow-moving and may bury into soft sediment. Many marine snails, including the common whelk, lay eggs in protective capsules, and details of reproduction and life cycle differ from species to species. Because behaviour and life history vary across the many animals called whelks, species-specific accounts are the most reliable source of detail.
        </p>
      }
      humanInteraction={
        <p>
          The common whelk, <em>Buccinum undatum</em>, is widely fished and eaten by people in some regions, and whelk shells are a familiar sight on cool-temperate shores. This page is educational and is not a food, cooking, or fishing guide. Shellfish harvesting rules vary by location and authority, and harvesting or regulatory questions should be directed to local authorities. For any food-safety, allergy, or health concerns related to shellfish, contact a qualified medical professional or local health authority. It is best to avoid handling wild individuals and to observe them in place.
        </p>
      }
      faqs={[
        {
          question: "What is a whelk?",
          answer:
            "A whelk is a marine gastropod mollusc — a sea snail — with a coiled, spiral shell. The common whelk, Buccinum undatum, has a sturdy, ridged shell and a tubular siphon. \"Whelk\" is a common name applied to various sea snails, mostly in the family Buccinidae and related families.",
        },
        {
          question: "What do whelks eat?",
          answer:
            "Many whelks are predators and scavengers that feed on worms, other molluscs, and carrion. Some species drill into bivalve shells to reach the animal inside. As both hunters and cleaners of the seabed, they play a role in recycling material in marine food webs.",
        },
        {
          question: "Where do whelks live?",
          answer:
            "Whelks are found on sandy and muddy seabeds and on rocky shores in cool and temperate seas. Different species occupy different depths and substrate types, so habitat varies by species and region. Reported ranges are best checked against authoritative sources.",
        },
        {
          question: "Are whelks eaten by people?",
          answer:
            "The common whelk is widely fished and eaten in some regions, and that is noted here only as a general fact. This page is educational and does not provide cooking, harvesting, or food-safety advice. For food-safety or health concerns, contact a qualified medical professional or local health authority, and direct harvesting questions to local authorities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sea snails (marine gastropods)" },
        { label: "Higher classification", value: "Mollusca; Gastropoda; mostly family Buccinidae and relatives" },
        { label: "Diet", value: "Predatory and scavenging; worms, other molluscs, and carrion" },
        { label: "Notable trait", value: "Sturdy spiral shell and tubular siphon; some drill into bivalve shells" },
        { label: "Habitat", value: "Sandy and muddy seabeds and rocky shores in cool and temperate seas" },
        { label: "Distribution", value: "Cool and temperate seas; varies by species and region" },
        { label: "Human interaction", value: "The common whelk is fished and eaten in some regions; avoid handling wild individuals" },
        { label: "Conservation status", value: "Varies by species; check authoritative sources" },
      ]}
      relatedLinks={[
        { label: "Cone Snail Profile", href: "/animals/cone-snail", description: "A predatory sea snail" },
        { label: "Cowrie Profile", href: "/animals/cowrie", description: "A glossy-shelled sea snail" },
        { label: "Limpet Profile", href: "/animals/limpet", description: "A rock-clinging gastropod" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Invertebrates (taxonomy)", href: "/animal-taxonomy/invertebrates", description: "How invertebrate groups fit together" },
      ]}
    />
  );
}
