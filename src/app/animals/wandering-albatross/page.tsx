import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wandering-albatross";
const TITLE = "Wandering Albatross: Southern Ocean Glider";
const DESC =
  "Learn about the wandering albatross (Diomedea exulans), a vast Southern Ocean seabird with an enormous wingspan that breeds on subantarctic islands.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("wandering-albatross"),
});

export default function WanderingAlbatrossPage() {
  return (
    <AnimalProfileLayout
      commonName="Wandering Albatross"
      scientificName="Diomedea exulans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Seabird","Subantarctic"]}
      image={getAnimalImage("wandering-albatross") ?? undefined}
      galleryImages={getAnimalGalleryImages("wandering-albatross")}
      sources={ANIMAL_SOURCES["wandering-albatross"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The wandering albatross (<em>Diomedea exulans</em>) is one of the largest flying seabirds in the world, recognized for having one of the longest wingspans of any living bird. It ranges widely over the open Southern Ocean, where it spends most of its life on the wing, gliding for long distances with remarkably little effort. It is a true ocean wanderer, often travelling vast distances between feeding areas and the islands where it raises its young.
          </p>
          <p>
            Unlike the marine mammals and ice-dependent species sometimes associated with the far south, the wandering albatross is a long-lived seabird that comes to land only to breed. It nests on remote subantarctic islands scattered across the Southern Ocean rather than on the Antarctic mainland, and it returns to these breeding sites every year or two to raise a single chick. The rest of its life is spent at sea.
          </p>
          <p>
            The species is currently listed as Vulnerable on the IUCN Red List. Conservation status can change over time as populations are reassessed, and assessments of closely related forms within the great albatross complex can differ. One of the most discussed concerns for this and related albatrosses is incidental capture in longline fisheries, often referred to as bycatch, which is addressed below as a conservation issue rather than as any form of fishing guidance.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The wandering albatross, <em>Diomedea exulans</em>, is a seabird in the family Diomedeidae, the albatrosses, within the order Procellariiformes, the group commonly called tubenoses that also includes petrels and shearwaters. It belongs to the genus <em>Diomedea</em>, which contains the great albatrosses. Albatrosses are characterized by their long, narrow wings and tubular nostrils on the bill, which are tied to their highly oceanic way of life. The classification of the great albatrosses has been revised over time, and several closely related forms within this complex are sometimes treated as separate species or subspecies by different authorities, so naming and conservation assessments can vary across sources.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a very large seabird, most notable for its exceptionally long, slender wings, which give it one of the greatest wingspans of any bird. Adults are predominantly white over the body, with darker markings on the upper wings; older birds tend to become whiter with age, and plumage changes gradually over many years. The bill is large, pale, and hooked at the tip, with the tubular nostrils typical of its order. In flight the long wings are held mostly straight and stiff, allowing the bird to glide and bank close to the sea surface. Younger birds are generally browner and become progressively paler as they mature, which makes age and plumage useful but not always definitive identification clues.
          </p>
        </>
      }
      habitat={
        <p>
          The wandering albatross is a bird of the open Southern Ocean, where it forages over wide stretches of cold, windy seas in the southern hemisphere. It is not an Antarctic land bird and does not breed on the Antarctic continent; instead it nests on remote subantarctic islands, returning to these scattered breeding sites to raise its young. Outside the breeding season it ranges far and wide across the Southern Ocean, and individuals may travel great distances over the water. Its distribution is best described as tied to subantarctic island breeding grounds combined with extensive foraging over the surrounding open ocean, rather than to any single fixed location or to the Antarctic mainland.
        </p>
      }
      diet={
        <p>
          The wandering albatross feeds mainly on squid and fish taken at or near the surface of the open ocean, and it will also take other marine prey it encounters while foraging. It is well suited to covering large areas of sea in search of patchy, widely scattered food, using its efficient gliding flight to travel between feeding areas with little energy cost. Birds typically forage by sitting on the water and seizing prey at the surface, and they may also be attracted to organic material floating at sea. Because food in the open ocean is unevenly distributed, the ability to range over enormous distances is central to how this species finds enough to eat.
        </p>
      }
      behavior={
        <>
          <p>
            Wandering albatrosses are long-lived birds with a slow breeding cycle. They form strong, long-term pair bonds and perform elaborate courtship displays at their breeding colonies, where pairs raise only a single chick at a time. Because rearing that chick takes a long time, successful pairs generally breed only every year or two rather than annually, returning to the same subantarctic island sites to nest. The single chick is cared for over an extended period before it becomes independent and takes to the sea, and young birds may spend years at sea before they first return to breed. For most of the year, away from the colony, these albatrosses lead a largely solitary, oceanic life, gliding over the waves and coming ashore only to nest.
          </p>
          <p>
            As a wide-ranging surface predator and scavenger, the wandering albatross is part of the upper levels of the Southern Ocean food web, feeding on squid and fish across vast areas of open water. By foraging over enormous distances, it links productive feeding zones that are far apart, and its presence is one of many indicators of the health of these oceanic systems. Like other seabirds, it both consumes marine prey and contributes nutrients back into the environment, and its breeding islands support concentrated seabird life. Because it depends on healthy, productive seas, changes in the distribution and abundance of its prey can be reflected in how these albatrosses fare.
          </p>
        </>
      }
      humanInteraction={
        <p>
          This page is educational only and offers no fishing, harvesting, or food guidance of any kind, and no advice on approaching, handling, or interacting with wild seabirds. The wandering albatross is listed as Vulnerable on the IUCN Red List, a status that can change as populations are reassessed over time. A widely reported conservation concern is incidental capture in longline fisheries, known as bycatch, in which seabirds are accidentally caught during fishing operations; this is noted here only as a threat to the species. Scientists also consider broader changes in the marine environment, including shifts that researchers link to a changing climate, as factors worth monitoring. Anyone encountering an albatross in distress, or with questions about protected seabirds and their breeding sites, should contact the relevant wildlife or conservation authorities rather than intervening.
        </p>
      }
      faqs={[
        {
          question: "Where does the wandering albatross live?",
          answer:
            "It is a seabird of the open Southern Ocean. It breeds on remote subantarctic islands, not on the Antarctic mainland, and spends most of its life foraging far out over the surrounding seas.",
        },
        {
          question: "How large is the wandering albatross?",
          answer:
            "It is a very large seabird with one of the longest wingspans of any living bird, with long, narrow wings adapted for efficient gliding flight over the ocean. It is not a land bird of Antarctica.",
        },
        {
          question: "What does the wandering albatross eat?",
          answer:
            "It feeds mainly on squid and fish taken at or near the sea surface, along with other marine prey it encounters, ranging over wide areas of open ocean to find food.",
        },
        {
          question: "Is the wandering albatross endangered?",
          answer:
            "It is listed as Vulnerable on the IUCN Red List, a status that can change over time. Incidental capture in longline fisheries, or bycatch, is reported as a major conservation concern.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Diomedea exulans" },
        { label: "Animal group", value: "Bird (seabird)" },
        { label: "Family/order", value: "Diomedeidae / Procellariiformes" },
        { label: "Size", value: "Very large; one of the longest wingspans of any bird" },
        { label: "Diet", value: "Mainly squid and fish taken at the sea surface" },
        { label: "Habitat", value: "Open Southern Ocean; breeds on subantarctic islands" },
        { label: "Range", value: "Wide-ranging across the Southern Ocean" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List; can change over time)" },
      ]}
      relatedLinks={[
        { label: "Albatross", href: "/animals/albatross", description: "Albatrosses more broadly" },
        { label: "Snow Petrel", href: "/animals/snow-petrel", description: "Another Southern Ocean seabird" },
        { label: "Penguin", href: "/animals/penguin", description: "An Antarctic seabird" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
