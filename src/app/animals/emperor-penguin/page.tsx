import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/emperor-penguin";
const TITLE = "Emperor Penguin: Antarctica's Largest Penguin";
const DESC =
  "Learn about the emperor penguin, the largest living penguin: its sea-ice breeding, diet, biology, ecology and its IUCN conservation status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("emperor-penguin"),
});

export default function EmperorPenguinPage() {
  return (
    <AnimalProfileLayout
      commonName="Emperor Penguin"
      scientificName="Aptenodytes forsteri"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Penguin","Antarctic"]}
      image={getAnimalImage("emperor-penguin") ?? undefined}
      galleryImages={getAnimalGalleryImages("emperor-penguin")}
      sources={ANIMAL_SOURCES["emperor-penguin"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The emperor penguin (<em>Aptenodytes forsteri</em>) is the largest of all living penguins and a flightless seabird closely associated with Antarctica and its surrounding sea ice. Adapted to one of the coldest environments on Earth, it is best known for breeding through the harsh Antarctic winter, an unusual strategy among birds. Like all penguins, it cannot fly but is a highly capable swimmer and diver, using its wings as flippers to pursue prey beneath the sea surface.
          </p>
          <p>
            Emperor penguins are marine animals that depend on the ocean for food and on stable sea ice for breeding and resting. They are not creatures of the Antarctic interior; instead they are tied to Antarctic coasts and to the pack and fast (land-fast) ice that forms around the continent. Their life cycle is shaped by the seasonal cycle of sea ice, which makes long-term changes in that ice a central concern for the species.
          </p>
          <p>
            The emperor penguin is assessed on the IUCN Red List, and according to the framing used for this profile the species is treated as Near Threatened. Researchers have identified the loss of sea ice in a warming climate as a key long-term concern, because emperor penguins rely on suitable ice to breed. Conservation assessments are reviewed and can change over time as new monitoring and information become available, so readers should consult the IUCN Red List for the current, official listing.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The emperor penguin belongs to the order Sphenisciformes and the family Spheniscidae, the group that contains all penguins. Its scientific name is <em>Aptenodytes forsteri</em>, placing it in the genus <em>Aptenodytes</em>, which it shares with the king penguin (<em>Aptenodytes patagonicus</em>); together these two are often called the &quot;great penguins&quot; because of their large size. Penguins are birds, but flightless ones whose wings have evolved into stiff flippers suited to swimming rather than flight. The species was named in honor of the naturalist Johann Reinhold Forster, who took part in early voyages to the Southern Ocean.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The emperor penguin is the tallest and heaviest living penguin, with adults standing roughly a meter or more in height. Its plumage is sharply patterned: a black head, back and flippers contrast with a white belly, while a soft yellow-to-orange wash colors the upper chest and bright yellow or yellow-orange patches sit on the sides of the neck and behind the ears. The bill is long and slightly down-curved, with a colored stripe along the lower mandible. A streamlined body, dense waterproof feathers, and a thick layer of fat help the bird conserve heat and move efficiently underwater. Chicks are quite different in appearance, covered in soft gray down with distinctive black-and-white facial markings before they molt into adult-like plumage.
          </p>
        </>
      }
      habitat={
        <p>
          The emperor penguin is a marine and coastal species associated with Antarctica and the Southern Ocean rather than a land animal of the continental interior. Breeding colonies are typically found on fast (land-fast) sea ice attached to the Antarctic coastline, while at other times the birds range over the surrounding pack ice and feed in the open and ice-covered waters of the Southern Ocean. Colonies are distributed at a number of locations around the coasts and adjacent sea ice of Antarctica, and the precise sites can shift as ice conditions vary. Because the species depends on suitable sea ice for breeding and on productive waters for feeding, its distribution should be understood as tied to Antarctic coasts and the surrounding ice rather than spread evenly across the whole continent, and it differs from subantarctic-island seabirds that breed away from the mainland.
        </p>
      }
      diet={
        <p>
          Emperor penguins feed at sea, where they hunt fish, krill and squid, with the balance of prey varying by location and season. They are deep, capable divers and can remain submerged for extended periods while searching for food in cold, dark waters, sometimes well beneath the surface. Prey is caught underwater and swallowed whole, and adults returning from foraging trips carry food back to feed their growing chick. Feeding success is closely linked to the productivity of the surrounding Southern Ocean and to access to open water near the colony, which can be influenced by the extent and condition of sea ice. The krill and other Southern Ocean prey on which emperor penguins depend are themselves the focus of conservation and ecosystem-management attention.
        </p>
      }
      behavior={
        <>
          <p>
            The emperor penguin is famous for its winter breeding cycle. Adults gather at colonies on the sea ice, and after a female lays a single egg, she transfers it to the male, who incubates it on his feet beneath a fold of warm skin called the brood pouch while she returns to sea to feed. During the coldest part of the year the incubating males fast for weeks and huddle together in large groups, taking turns at the sheltered center, a behavior that helps the colony conserve heat in extreme conditions. When the female returns, the parents take turns foraging and caring for the chick. Emperor penguins are social during breeding and at sea, and they communicate with distinctive calls that allow mates and chicks to recognize one another within a crowded colony.
          </p>
          <p>
            As a mid-to-upper predator of the Southern Ocean, the emperor penguin is part of an Antarctic food web that links small organisms such as krill to larger animals. By feeding on fish, krill and squid, it helps connect lower levels of the food web to higher predators, and emperor penguins themselves are prey for marine predators such as leopard seals and orcas, mainly in the water. Their dependence on sea ice and on productive waters also makes them a species that scientists watch as an indicator of conditions in the Antarctic marine environment, where changes in ice and prey availability can ripple through the broader ecosystem.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Direct human interaction with emperor penguins is limited because they live in remote Antarctic environments, and they are protected wildlife that should not be approached, handled or disturbed. On the IUCN Red List the species is treated here as Near Threatened, and researchers report that the long-term loss of sea ice in a warming climate is considered a central concern, since the birds rely on stable ice to breed; such assessments are periodically reviewed and may change as monitoring continues, so the IUCN Red List should be checked for the current listing. This page is educational only and offers no guidance on hunting, fishing, harvesting, keeping, approaching or otherwise interacting with wildlife. Anyone encountering injured, stranded or protected wildlife, or with questions about Antarctic species, should contact the relevant authorities and conservation organizations rather than intervening.
        </p>
      }
      faqs={[
        {
          question: "Where do emperor penguins live?",
          answer:
            "Emperor penguins are marine and coastal birds associated with Antarctica and the Southern Ocean. They breed on fast (land-fast) sea ice along Antarctic coasts and feed in the surrounding waters, rather than living across the continental interior or on distant subantarctic islands.",
        },
        {
          question: "Why do emperor penguins breed in winter?",
          answer:
            "Their winter breeding cycle times chick-rearing so that young birds become more independent as conditions improve toward the Antarctic summer. During the cold winter, males incubate the single egg on their feet and huddle together to conserve heat.",
        },
        {
          question: "What do emperor penguins eat?",
          answer:
            "They feed at sea on fish, krill and squid, with the mix varying by location and season. Emperor penguins are deep, capable divers that catch prey underwater and carry food back to feed their chick.",
        },
        {
          question: "Are emperor penguins endangered?",
          answer:
            "The emperor penguin is assessed on the IUCN Red List and is treated here as Near Threatened, with long-term sea-ice loss in a warming climate identified as a key concern because the species depends on suitable ice to breed. These assessments are reviewed over time, so check the IUCN Red List for the current listing.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Aptenodytes forsteri" },
        { label: "Animal group", value: "Bird (flightless seabird)" },
        { label: "Family/order", value: "Spheniscidae / Sphenisciformes" },
        { label: "Size", value: "Largest living penguin; adults about a meter or more tall" },
        { label: "Diet", value: "Fish, krill and squid caught at sea" },
        { label: "Habitat", value: "Antarctic coasts, fast (land-fast) and pack sea ice, Southern Ocean waters" },
        { label: "Range", value: "Associated with the coasts and surrounding sea ice of Antarctica" },
        { label: "Conservation status", value: "IUCN Red List; treated here as Near Threatened (subject to review/change)" },
      ]}
      relatedLinks={[
        { label: "Penguin", href: "/animals/penguin", description: "Penguins more broadly" },
        { label: "Adelie Penguin", href: "/animals/adelie-penguin", description: "Another Antarctic penguin" },
        { label: "Snow Petrel", href: "/animals/snow-petrel", description: "An Antarctic seabird" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
