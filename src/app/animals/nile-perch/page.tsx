import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/nile-perch";
const TITLE = "Nile Perch (Lates niloticus): Africa's Giant Freshwater Fish";
const DESC =
  "Learn about the Nile perch (Lates niloticus), a large African freshwater predator native to the Nile and other systems, and a notorious invader in Lake Victoria.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("nile-perch"),
});

export default function NilePerchPage() {
  return (
    <AnimalProfileLayout
      commonName="Nile Perch"
      scientificName="Lates niloticus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Freshwater","Invasive in Lake Victoria"]}
      image={getAnimalImage("nile-perch") ?? undefined}
      galleryImages={getAnimalGalleryImages("nile-perch")}
      sources={ANIMAL_SOURCES["nile-perch"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Nile perch (<em>Lates niloticus</em>) is one of Africa&#39;s largest freshwater fishes, a powerful predator found in several river and lake systems across parts of the continent. As a piscivore, it hunts and consumes other fish, and large individuals can reach considerable size, making the species a significant presence in the waters it inhabits.
          </p>
          <p>
            The Nile perch is especially well known in ecological study because of its history as an introduced species. While it is native to certain African waters, it was deliberately introduced into Lake Victoria in the mid-20th century, where it became established and is associated with dramatic ecological change, including the decline and extinction of many native cichlid species. This makes it a frequently cited case study in invasion ecology, and a clear example of why native range and introduced range must be carefully distinguished.
          </p>
          <p>
            Details of the Nile perch&#39;s natural distribution, introduced range, and conservation context vary by region and continue to be studied. Readers are encouraged to check authoritative sources such as the IUCN Red List, the Animal Diversity Web, and museum or university zoology resources for current information. This profile is educational and provides no fishing, harvesting, cooking, or food-safety guidance.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Nile perch, <em>Lates niloticus</em>, is a ray-finned fish and a member of the family Latidae, a group of large predatory fishes sometimes referred to as lates perches. Despite the common name &quot;perch,&quot; it belongs to a distinct lineage rather than the true perches of the family Percidae. The genus <em>Lates</em> includes several large freshwater and brackish-water species found in Africa and parts of Asia and Australasia.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Nile perch is a large, robust fish with an elongated, deep body, a relatively large mouth, and a protruding lower jaw typical of an active predator. Its coloration is generally silvery with darker tones on the back, grading to a paler underside, and it has prominent fins suited to a powerful swimming predator. Mature individuals can grow to a substantial size, which is one reason the species is so ecologically and commercially notable. The hero image on this page shows a Nile perch (<em>Lates niloticus</em>) in or near water.
          </p>
        </>
      }
      habitat={
        <p>
          The Nile perch is native to parts of Africa, where it occurs in certain river and lake systems including the Nile and Congo basins and other associated waters. It is a freshwater fish that inhabits rivers, lakes, and connected water bodies. It is important to distinguish this native range from its introduced range: in Lake Victoria, the Nile perch is not native but was introduced by people in the mid-20th century. Because distribution within Africa varies by water system and is shaped by both natural and human-mediated movement, specific range claims should be checked against authoritative sources rather than assumed to apply continent-wide.
        </p>
      }
      diet={
        <p>
          The Nile perch is a piscivore, meaning its diet is centered on other fish. As a powerful predator it preys on smaller fishes within its habitat, and large individuals can take sizeable prey. Its feeding behavior is central to its ecological impact: in Lake Victoria, predation by introduced Nile perch is associated with steep declines in populations of native cichlid fishes. Diet can vary with the age and size of the fish and with the prey available in a given water system.
        </p>
      }
      behavior={
        <>
          <p>
            As an active predatory fish, the Nile perch occupies a hunting role within its aquatic communities, with larger individuals generally taking larger prey. Like many large freshwater fishes, it reproduces in its aquatic environment, and growth over time allows individuals to reach considerable size. Detailed aspects of its life cycle, movement, and reproduction vary by water system and population, and are best understood through dedicated scientific and museum resources rather than generalized assumptions.
          </p>
          <p>
            Ecologically, the Nile perch functions as a large apex-level predator within freshwater systems. In its native African waters it is part of long-established communities. In Lake Victoria, however, the introduced Nile perch is a textbook example of an invasive species: its establishment is linked to the dramatic decline and extinction of numerous native cichlid species, reshaping the lake&#39;s biodiversity. This contrast between native presence and harmful introduction makes the species a key case study in how moving animals beyond their natural range can disrupt ecosystems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Nile perch is important to people in parts of Africa, where it supports large fisheries, and it is widely studied for its role in invasion ecology following its introduction into Lake Victoria. That introduction is a cautionary conservation story, illustrating how a fish valued in one context can cause serious ecological harm to native species in another. This profile does not provide fishing, harvesting, cooking, or food-safety advice; questions about fisheries management or aquatic conservation in a specific region should be directed to local wildlife and fisheries authorities or qualified specialists. The gallery image on this page is a historical scientific illustration of the Nile perch (<em>Lates niloticus</em>).
        </p>
      }
      faqs={[
        {
          question: "Is the Nile perch native to Africa?",
          answer:
            "Yes, the Nile perch (Lates niloticus) is native to certain African waters, including the Nile and Congo systems and other associated river and lake systems. However, it has also been introduced into waters where it does not naturally occur, so native and introduced ranges should be distinguished.",
        },
        {
          question: "Why is the Nile perch considered invasive in Lake Victoria?",
          answer:
            "The Nile perch is not native to Lake Victoria; it was deliberately introduced there in the mid-20th century. As a large predator, it became established and is associated with steep declines and extinctions among native cichlid species, making it a well-known case study in invasion ecology.",
        },
        {
          question: "How big does the Nile perch get?",
          answer:
            "The Nile perch is one of Africa's largest freshwater fishes, and mature individuals can reach a considerable size. Exact figures vary by population and water system, so specific size details are best confirmed through authoritative scientific or museum sources.",
        },
        {
          question: "What does the Nile perch eat?",
          answer:
            "The Nile perch is a piscivore, feeding mainly on other fish. Larger individuals can take larger prey, and its predation is a major factor in its ecological impact, particularly the decline of native cichlids in Lake Victoria.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Fish (ray-finned, family Latidae)" },
        { label: "Higher classification", value: "Genus Lates; species Lates niloticus" },
        { label: "Diet", value: "Piscivore; feeds mainly on other fish" },
        { label: "Notable trait", value: "One of Africa's largest freshwater predators; notorious invader of Lake Victoria" },
        { label: "Habitat", value: "Freshwater rivers, lakes, and connected water bodies" },
        { label: "Africa distribution", value: "Native to parts of Africa (e.g. Nile, Congo systems); introduced elsewhere, varies by region" },
        { label: "Human interaction", value: "Supports large fisheries; studied as a case in invasion ecology" },
        { label: "Conservation status", value: "Varies / not well assessed; check authoritative sources" },
      ]}
      relatedLinks={[
        { label: "Tilapia Profile", href: "/animals/tilapia", description: "Another African freshwater fish" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "A freshwater fish" },
        { label: "Electric Eel Profile", href: "/animals/electric-eel", description: "A freshwater predator" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
