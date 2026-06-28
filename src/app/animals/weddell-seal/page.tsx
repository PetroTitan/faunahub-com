import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/weddell-seal";
const TITLE = "Weddell Seal: Deep-Diving Antarctic Ice Seal";
const DESC =
  "The Weddell Seal lives on Antarctic fast ice, diving deep under the ice to hunt fish and squid. Learn about its biology, habitat, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("weddell-seal"),
});

export default function WeddellSealPage() {
  return (
    <AnimalProfileLayout
      commonName="Weddell Seal"
      scientificName="Leptonychotes weddellii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Seal","Antarctic"]}
      image={getAnimalImage("weddell-seal") ?? undefined}
      galleryImages={getAnimalGalleryImages("weddell-seal")}
      sources={ANIMAL_SOURCES["weddell-seal"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Weddell Seal (<em>Leptonychotes weddellii</em>) is a true seal closely associated with the band of land-fast sea ice that fringes the Antarctic coast. It is one of the most southerly breeding mammals in the world, raising its pups directly on the ice not far from the continent. Despite its remote, ice-bound life, it is among the better-studied of the Antarctic seals because individuals tend to stay near reliable cracks and breathing holes where researchers can observe them.
          </p>
          <p>
            This species is best known for its diving ability. Weddell Seals make deep, long dives beneath the ice to pursue fish and squid, surfacing at breathing holes that they help keep open by working the ice with their teeth. This behavior lets them exploit waters that many other air-breathing predators cannot reach during the long, ice-covered winter.
          </p>
          <p>
            The Weddell Seal is listed as Least Concern on the IUCN Red List. As with all conservation assessments, this status reflects current knowledge and can change as new information and environmental conditions are evaluated over time.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Weddell Seal, <em>Leptonychotes weddellii</em>, is a marine mammal in the family Phocidae, the true or earless seals, within the order Carnivora. It is the only living member of the genus <em>Leptonychotes</em>. True seals lack external ear flaps and move on land or ice by hunching their bodies, since their hind flippers cannot rotate forward beneath them as they do in fur seals and sea lions. Among the Antarctic seals, the Weddell Seal is grouped with relatives such as the crabeater, leopard, and Ross seals, all of which are adapted to life in and around Southern Ocean ice.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult Weddell Seals are large, rounded-bodied seals with a relatively small head and a short, almost cat-like face that gives them a gentle appearance. Their coat is typically dark grey to bluish-black above and paler below, often marked with lighter blotches, streaks, and silvery patches that fade and vary between individuals and seasons. The mouth is set with forward-projecting upper teeth that are used to ream and maintain holes in the ice, and older animals frequently show wear or damage to these teeth as a result. Females are reported to be about the same length as males or sometimes slightly larger, in contrast to the more strongly male-biased size difference seen in some other seals.
          </p>
        </>
      }
      habitat={
        <p>
          The Weddell Seal is a marine and coastal species tied to the land-fast sea ice that forms a stable platform along the Antarctic coast and around nearby coastal islands. It is generally found in the high latitudes of the Southern Ocean near the continent rather than across the open sea, and it is among the southernmost of all breeding mammals, with colonies recorded close to the Antarctic landmass. It is not a land animal of the continental interior, and its distribution is best understood as circumpolar around Antarctic coastal ice rather than spread evenly throughout the continent. Individuals rely on cracks, tide cracks, and breathing holes in the fast ice for access between water and air.
        </p>
      }
      diet={
        <p>
          Weddell Seals feed mainly on fish, along with squid and other invertebrates taken in the cold waters beneath the ice. They are capable of deep and prolonged dives, allowing them to forage in the water column and near the sea floor where prey concentrate. Hunting under a ceiling of ice requires them to navigate in low light and to return reliably to breathing holes, and their large eyes and sensitive whiskers are thought to help them detect prey in these dim conditions. Diet can vary with location, season, and the prey available in a given area.
        </p>
      }
      behavior={
        <>
          <p>
            Weddell Seals are comparatively sedentary and tolerant of one another, often hauling out near shared breathing holes and cracks in the ice. Much of their life is spent diving and resting rather than traveling long distances. Females give birth to a single pup on the fast ice during the southern spring, nursing it on rich milk for several weeks before it is weaned and must learn to dive and forage. Maintaining access to air is a constant task, and individuals use their teeth to keep holes open through the ice, an effort that contributes to tooth wear over a lifetime. Vocalizations, including trills and calls that carry through the water, are part of their underwater social and territorial behavior.
          </p>
          <p>
            As a deep-diving predator of fish and squid, the Weddell Seal occupies an important position in the coastal Southern Ocean food web, linking under-ice prey to higher levels of the ecosystem. By keeping breathing holes open in the fast ice, it influences how air-breathing animals use these coastal waters during the ice-bound months. Its presence and breeding success can also reflect conditions in the surrounding sea-ice environment, which is one reason researchers study it as a window into the broader Antarctic marine system. Like other Antarctic predators, it depends on a productive food web ultimately supported by Southern Ocean primary production and krill-based pathways.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Weddell Seals live in remote Antarctic environments and have limited direct contact with people, though they are studied by scientists working from research stations on the ice. They are wild marine mammals, and this page offers no guidance on approaching, handling, or interacting with them; any encounters or concerns involving wildlife should be directed to relevant authorities and managed under Antarctic protection frameworks. The species is currently listed as Least Concern by the IUCN Red List, but changes in sea ice are widely reported as a concern for ice-dependent animals, and such assessments may be revised as conditions and knowledge evolve. This profile is educational only and does not provide any hunting, fishing, harvesting, or food advice.
        </p>
      }
      faqs={[
        {
          question: "Where do Weddell Seals live?",
          answer:
            "They are tied to the land-fast sea ice along the Antarctic coast and nearby coastal islands in the high-latitude Southern Ocean. They are a marine and coastal species, not land animals of the continental interior, and their range is best described as circumpolar around Antarctic coastal ice.",
        },
        {
          question: "How do Weddell Seals breathe under the ice?",
          answer:
            "They surface at cracks and breathing holes in the fast ice, and they help keep these holes open by working the ice with their teeth. This lets them dive for long periods and still return to air, even during the ice-covered winter.",
        },
        {
          question: "What do Weddell Seals eat?",
          answer:
            "Their diet is mainly fish, along with squid and other invertebrates caught in cold waters beneath the ice. They make deep, long dives to forage in the water column and near the sea floor, and their diet can vary with location and season.",
        },
        {
          question: "Are Weddell Seals endangered?",
          answer:
            "The Weddell Seal is currently listed as Least Concern on the IUCN Red List. Conservation status can change over time, and changes in sea ice are reported as a concern for ice-dependent species, so assessments may be revised as new information emerges.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Leptonychotes weddellii" },
        { label: "Animal group", value: "Marine mammal (true seal)" },
        { label: "Family/order", value: "Phocidae / Carnivora" },
        { label: "Size", value: "Large seal, roughly 2.5 to 3.5 m long" },
        { label: "Diet", value: "Carnivore: mainly fish and squid" },
        { label: "Habitat", value: "Land-fast sea ice and coastal waters" },
        { label: "Range", value: "Circumpolar around Antarctic coastal ice" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Seal", href: "/animals/seal", description: "Seals more broadly" },
        { label: "Leopard Seal", href: "/animals/leopard-seal", description: "An Antarctic predator seal" },
        { label: "Crabeater Seal", href: "/animals/crabeater-seal", description: "Another Antarctic seal" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
