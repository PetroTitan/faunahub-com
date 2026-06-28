import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leopard-seal";
const TITLE = "Leopard Seal: Antarctic Marine Predator";
const DESC =
  "Learn about the leopard seal, a large Southern Ocean predator of Antarctic pack ice that takes penguins, seals, fish, and krill. IUCN Least Concern.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("leopard-seal"),
});

export default function LeopardSealPage() {
  return (
    <AnimalProfileLayout
      commonName="Leopard Seal"
      scientificName="Hydrurga leptonyx"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Seal","Predator"]}
      image={getAnimalImage("leopard-seal") ?? undefined}
      galleryImages={getAnimalGalleryImages("leopard-seal")}
      sources={ANIMAL_SOURCES["leopard-seal"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The leopard seal (<em>Hydrurga leptonyx</em>) is a large, slender seal associated with Antarctic and subantarctic pack ice and the surrounding waters of the Southern Ocean. Recognized by its long body, reptile-like head, and powerful jaws, it is one of the principal predators of the region&#39;s marine food web. It is a wild marine and coastal animal, not a land animal, and spends most of its life in cold water and on floating sea ice rather than on the Antarctic continent itself.
          </p>
          <p>
            As a top predator, the leopard seal takes a wide range of prey, including penguins, other seals, fish, squid, and krill, and its feeding ecology connects several levels of the Southern Ocean ecosystem. The species is currently listed as Least Concern on the IUCN Red List, a status that authorities can reassess as new information becomes available. This page presents the leopard seal calmly and factually as part of FaunaHub&#39;s educational encyclopedia.
          </p>
          <p>
            Because the leopard seal is a wild marine predator, this profile offers no guidance on approaching, handling, or interacting with seals in the wild. Anyone with a concern about a leopard seal or other protected Antarctic wildlife should contact the relevant authorities rather than acting independently.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The leopard seal is a marine mammal in the order Carnivora and the family Phocidae, the so-called true or earless seals. Its scientific name is <em>Hydrurga leptonyx</em>, and it is the only living member of the genus <em>Hydrurga</em>. Within Phocidae it belongs to the tribe Lobodontini, a group of Antarctic-region seals that also includes the crabeater seal, the Weddell seal, and the Ross seal. Like other true seals, it lacks external ear flaps and moves on land or ice by undulating its body rather than rotating its hind flippers forward, which makes it far more agile in water than out of it.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The leopard seal is among the more distinctive of the Antarctic seals, with a long, muscular, somewhat serpentine body and a notably large head and gape that have often been described as reptile-like. Its jaws are powerful and house both prominent canine teeth and specialized, multi-cusped cheek teeth that interlock, a combination that suits both gripping larger prey and straining smaller items from the water. The coat is dark grey or silvery on the back and paler beneath, marked by the spotted patterning that gives the species its common name. Adults are large seals, with females generally larger than males, and the long fore flippers help give the animal its characteristic streamlined, sinuous profile in the water.
          </p>
        </>
      }
      habitat={
        <p>
          The leopard seal is a marine and coastal species tied to the cold waters of the Southern Ocean and to the pack ice that surrounds the Antarctic continent. It is most often associated with Antarctic and subantarctic pack ice and the surrounding open water, where individuals haul out on floating ice floes between bouts of hunting. Younger or wandering animals are sometimes recorded farther north, reaching subantarctic islands and occasionally the coasts of southern landmasses such as South America, southern Australia, and New Zealand, but the species is centred on Antarctic and Southern Ocean waters rather than on the Antarctic mainland as a terrestrial habitat. It is a Southern Hemisphere animal and is not found in the Arctic; its distribution is broadly circumpolar around Antarctica, concentrated where suitable pack ice and prey occur.
        </p>
      }
      diet={
        <p>
          The leopard seal is one of the main predators in the Southern Ocean food web and has an unusually broad diet for a seal. It takes penguins and other seabirds, the pups of other seal species, fish, and squid, and it also feeds heavily on Antarctic krill, which it strains from the water using its specialized, multi-cusped cheek teeth. This flexibility allows individual leopard seals to shift between hunting large, active prey near ice edges and sieving large numbers of small crustaceans, depending on what is available. The balance of prey can vary between individuals, seasons, and locations, and feeding studies continue to refine understanding of how much each prey type contributes to the species&#39; overall diet.
        </p>
      }
      behavior={
        <>
          <p>
            Leopard seals are generally solitary outside the breeding period, with individuals spending much of their time alone on ice floes or hunting in the water. They are powerful, agile swimmers, and much of their activity is tied to the edges of the pack ice where prey concentrates. Breeding follows the polar seasons: females are reported to give birth to a single pup on the ice, where the pup is nursed for a period before becoming independent, and males and females come together only briefly around the time of mating. Vocalizations are an important part of their behaviour, and underwater calls have been recorded during the breeding season, when calling activity is especially pronounced. Many details of their life cycle remain difficult to study because of the remote, ice-bound habitat in which the species lives.
          </p>
          <p>
            As a top predator of the Southern Ocean, the leopard seal plays an important role in the Antarctic marine food web. By preying on penguins, other seals, fish, squid, and krill, it links several levels of the ecosystem and can influence the populations and behaviour of the animals it hunts. Its heavy use of Antarctic krill ties it directly to one of the most important food resources of the Southern Ocean, the same krill that support whales, seals, fish, and seabirds across the region. Leopard seals are in turn part of a wider system in which killer whales (orcas) are the main animal known to prey on them, so the species occupies a position near, but not strictly at, the very top of the food web.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The leopard seal is currently listed as Least Concern on the IUCN Red List, though conservation status is reassessed over time as new data emerge, and scientists report that changes to Antarctic sea ice are considered a broader concern for ice-associated species. It is a large wild marine predator, and this page deliberately offers no advice on approaching, handling, feeding, or otherwise interacting with leopard seals or any other wild marine animal. Antarctic wildlife is protected under international agreements, and any concern about a leopard seal, an injured or stranded animal, or another protected species should be directed to the relevant authorities rather than handled independently. FaunaHub presents this species for educational purposes only.
        </p>
      }
      faqs={[
        {
          question: "Where do leopard seals live?",
          answer:
            "Leopard seals are marine and coastal animals associated with Antarctic and subantarctic pack ice and the surrounding waters of the Southern Ocean. They haul out on floating ice rather than living on the Antarctic mainland, and wandering individuals are sometimes recorded as far north as subantarctic islands and southern coasts. They are Southern Hemisphere animals and are not found in the Arctic.",
        },
        {
          question: "What do leopard seals eat?",
          answer:
            "Leopard seals have a broad diet and are among the main predators of the Southern Ocean. They take penguins and other seabirds, the pups of other seals, fish, and squid, and they also feed heavily on Antarctic krill, which they strain from the water using specialized, multi-cusped cheek teeth. The mix of prey varies between individuals, seasons, and locations.",
        },
        {
          question: "Are leopard seals dangerous to people?",
          answer:
            "Leopard seals are large, powerful wild predators. This page does not offer any guidance on approaching, handling, or interacting with them. Anyone with a concern about a leopard seal, or who encounters one, should contact the relevant wildlife or Antarctic authorities rather than acting on their own.",
        },
        {
          question: "Are leopard seals endangered?",
          answer:
            "The leopard seal is currently listed as Least Concern on the IUCN Red List. Conservation status can change as new information becomes available, and scientists report that changes to Antarctic sea ice are considered a concern for ice-associated species more generally, which is one reason populations continue to be monitored.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Hydrurga leptonyx" },
        { label: "Animal group", value: "Mammal (marine, true seal)" },
        { label: "Family / order", value: "Phocidae / Carnivora (tribe Lobodontini)" },
        { label: "Size", value: "Large seal; females generally larger than males" },
        { label: "Diet", value: "Penguins, other seals, fish, squid, and krill" },
        { label: "Habitat", value: "Antarctic and subantarctic pack ice and surrounding waters" },
        { label: "Range", value: "Southern Ocean, broadly circumpolar around Antarctica" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; can change)" },
      ]}
      relatedLinks={[
        { label: "Seal", href: "/animals/seal", description: "Seals more broadly" },
        { label: "Weddell Seal", href: "/animals/weddell-seal", description: "Another Antarctic seal" },
        { label: "Crabeater Seal", href: "/animals/crabeater-seal", description: "Another Antarctic seal" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
