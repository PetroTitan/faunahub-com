import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/snow-petrel";
const TITLE = "Snow Petrel: White Seabird of the Antarctic";
const DESC =
  "The snow petrel is a small, pure-white seabird of the Southern Ocean, breeding on Antarctic and subantarctic rock and strongly tied to sea ice.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("snow-petrel"),
});

export default function SnowPetrelPage() {
  return (
    <AnimalProfileLayout
      commonName="Snow Petrel"
      scientificName="Pagodroma nivea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Seabird","Antarctic"]}
      image={getAnimalImage("snow-petrel") ?? undefined}
      galleryImages={getAnimalGalleryImages("snow-petrel")}
      sources={ANIMAL_SOURCES["snow-petrel"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The snow petrel (<em>Pagodroma nivea</em>) is a small, strikingly pure-white seabird of the far Southern Hemisphere. It is one of only a handful of birds known to breed on the Antarctic continent itself, and it is closely associated with sea ice for much of its life. Its bright plumage, dark eyes, and small black bill make it one of the most recognizable seabirds of Antarctic and Southern Ocean waters.
          </p>
          <p>
            Rather than being a land animal in the usual sense, the snow petrel is a marine and coastal species that comes ashore mainly to nest. It forages at sea, often near the edge of pack ice, and returns to bare rock outcrops to lay its single egg. Some colonies are found surprisingly far inland on exposed rock known as nunataks that protrude through the ice, in places hundreds of kilometres from open water.
          </p>
          <p>
            Because it depends on ice-associated waters and remote nesting sites, the snow petrel is often discussed as a possible indicator of conditions in the Southern Ocean. The IUCN Red List currently classifies it as Least Concern, though conservation assessments can change as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The snow petrel is a seabird in the petrel and shearwater family Procellariidae, within the order Procellariiformes, the so-called tubenoses. Its scientific name is <em>Pagodroma nivea</em>, and it is generally treated as the only species in the genus <em>Pagodroma</em>. Researchers commonly recognise two size-based subspecies, a larger and a smaller form (often called the greater and lesser snow petrel), although the precise taxonomy remains debated. Like other tubenoses, it has external tube-shaped nostrils on its bill, a feature linked to its sense of smell and to processing salt from seawater. It is related to other Southern Ocean petrels but is distinctive in being almost entirely white.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The snow petrel is a small seabird with entirely white plumage, which sets it apart from nearly all other birds in its range. Against this white body, its dark eyes, small black bill, and bluish-grey feet stand out clearly. In flight it appears compact and buoyant, with relatively broad wings and a fluttering, agile style well suited to manoeuvring around ice and rocky cliffs. Reported body length is roughly 30-40 cm with a wingspan of about 0.75-0.95 m, and individuals can differ noticeably in size between populations. Its pure-white coloration is often suggested to help it blend in against snow and ice, though the species is conspicuous against open water and dark rock.
          </p>
        </>
      }
      habitat={
        <p>
          The snow petrel is strongly associated with Antarctic and Southern Ocean ice. It breeds on the Antarctic continent and on subantarctic islands such as South Georgia and the South Sandwich Islands, nesting on bare rock, cliffs, and crevices. It also occupies exposed inland rock outcrops called nunataks, sometimes hundreds of kilometres from the coast near ice. Outside the breeding season it ranges over cold Southern Ocean waters and is typically found near pack ice, the edges of fast ice, and icebergs. Its distribution is best described as tied to ice-associated Antarctic and Southern Ocean areas rather than spread uniformly across the whole continent; it concentrates where suitable nesting rock and productive icy waters occur. As with all Antarctic wildlife, exact local ranges depend on ice conditions and available habitat.
        </p>
      }
      diet={
        <p>
          At sea the snow petrel feeds mainly on small fish, krill, and squid, along with other marine invertebrates and carrion such as seal and whale remains. It forages largely along the edges of pack ice and in openings in the ice, where prey is concentrated, often taking food from at or near the water surface rather than diving deeply. Its diet ties it closely to the productivity of ice-associated waters, and shifts in sea ice can influence where and how successfully it finds food. This page describes the snow petrel&#39;s natural feeding ecology only and offers no fishing, harvesting, or food guidance of any kind.
        </p>
      }
      behavior={
        <>
          <p>
            Snow petrels are colonial nesters that return to traditional rock sites to breed during the southern summer. A pair typically lays a single egg in a sheltered rock crevice or under an overhang that provides some protection from weather and predators, and both parents share incubation and the feeding of the chick. Like other tubenoses, they are long-lived and slow-breeding, investing heavily in a small number of offspring over many years. They are strong, agile fliers capable of moving across vast stretches of icy ocean, and when disturbed at the nest they may eject stomach oil as a defence, a behaviour shared with many petrels. Birds may travel long distances between foraging grounds and remote inland colonies.
          </p>
          <p>
            As a predator of fish, krill, and squid, the snow petrel is part of the Southern Ocean food web that ultimately depends on krill and other small prey supported by sea-ice ecosystems. Its strong link to pack ice means that its distribution, breeding success, and diet reflect conditions in the surrounding marine environment, which is one reason it is sometimes discussed as a possible indicator of change in Antarctic waters. Its remote inland and coastal nesting sites can also contribute nutrients to otherwise sparse rock habitats. By relying on ice-associated prey, the snow petrel connects the productivity of the Southern Ocean to the few ice-free nesting areas of the Antarctic region.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Direct human contact with snow petrels is limited because they live in remote Antarctic and Southern Ocean areas, and they are protected under instruments that govern Antarctic wildlife. The IUCN Red List currently lists the species as Least Concern, but this status is attributed to that assessment and can change with ongoing monitoring. Researchers note that long-term changes in sea ice are considered a concern for ice-dependent Southern Ocean species, and disturbance at breeding sites and changing prey availability are also discussed as possible pressures. This page is educational only and provides no guidance on approaching, handling, or interacting with wild snow petrels, and no fishing or harvesting advice; questions about protected Antarctic species or wildlife concerns should be directed to the relevant authorities.
        </p>
      }
      faqs={[
        {
          question: "Where does the snow petrel live?",
          answer:
            "It is a marine and coastal seabird tied to ice in Antarctic and Southern Ocean areas. It breeds on the Antarctic continent and on subantarctic islands such as South Georgia, sometimes on exposed inland rock called nunataks, and forages over cold waters near pack ice.",
        },
        {
          question: "Why is the snow petrel pure white?",
          answer:
            "Its entirely white plumage is often suggested to help it blend in against snow and ice, though it stands out against open water and dark rock. Combined with its dark eyes and small black bill, this coloration makes it one of the most easily recognised Antarctic seabirds.",
        },
        {
          question: "What does the snow petrel eat?",
          answer:
            "It feeds at sea mainly on small fish, krill, and squid, plus some carrion, often along the edges of pack ice where prey gathers. This page describes its natural feeding ecology only and gives no fishing, harvesting, or food advice.",
        },
        {
          question: "Is the snow petrel endangered?",
          answer:
            "The IUCN Red List currently classifies the snow petrel as Least Concern. This status is attributed to that assessment and can change over time, and researchers note that long-term changes in sea ice are considered a concern for ice-dependent Southern Ocean species.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pagodroma nivea" },
        { label: "Animal group", value: "Bird (seabird, tubenose)" },
        { label: "Family/order", value: "Procellariidae; Procellariiformes" },
        { label: "Size", value: "Pigeon-sized; wingspan about 0.75-0.95 m" },
        { label: "Diet", value: "Fish, krill, squid, and carrion" },
        { label: "Habitat", value: "Ice-associated Antarctic and Southern Ocean waters; rock nesting sites" },
        { label: "Range", value: "Antarctic continent and subantarctic islands; ice-associated Southern Ocean areas" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; attributed, changeable)" },
      ]}
      relatedLinks={[
        { label: "Albatross", href: "/animals/albatross", description: "Another seabird" },
        { label: "Wandering Albatross", href: "/animals/wandering-albatross", description: "A Southern Ocean seabird" },
        { label: "Penguin", href: "/animals/penguin", description: "An Antarctic seabird" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
