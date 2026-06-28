import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/adelie-penguin";
const TITLE = "Adelie Penguin: Facts, Habitat & Diet";
const DESC =
  "Learn about the Adelie penguin, a small Antarctic seabird that breeds on ice-free coasts, feeds on krill at sea, and is listed as Least Concern.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("adelie-penguin"),
});

export default function AdeliePenguinPage() {
  return (
    <AnimalProfileLayout
      commonName="Adelie Penguin"
      scientificName="Pygoscelis adeliae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Penguin","Antarctic"]}
      image={getAnimalImage("adelie-penguin") ?? undefined}
      galleryImages={getAnimalGalleryImages("adelie-penguin")}
      sources={ANIMAL_SOURCES["adelie-penguin"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Adelie penguin (<em>Pygoscelis adeliae</em>) is a small-to-medium penguin and one of the most southerly breeding birds in the world. It is recognized by its compact build, a fully black head, and a distinctive white ring around each eye that gives it an alert, slightly curious expression. As a true seabird, it spends much of its life at sea and comes ashore mainly to breed during the southern summer.
          </p>
          <p>
            Adelie penguins nest in colonies on ice-free rocky coasts of the Antarctic continent and on nearby islands, returning to land when conditions allow access to bare ground for nest sites. They are marine, coastal animals rather than creatures of the continental interior, and their lives are closely tied to the sea ice, open water, and shoreline of the far south.
          </p>
          <p>
            The species is currently listed as Least Concern on the IUCN Red List. This profile is educational and encyclopedic; it describes the Adelie penguin&#39;s biology, habitat, and ecological role, and is not a guide to approaching, handling, or interacting with wild penguins or any other Southern Ocean wildlife.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Adelie penguin, <em>Pygoscelis adeliae</em>, belongs to the penguin family Spheniscidae within the order Sphenisciformes, a group of flightless seabirds adapted for swimming. It is one of three species in the genus <em>Pygoscelis</em>, often called the brush-tailed penguins, which also includes the gentoo (<em>Pygoscelis papua</em>) and chinstrap (<em>Pygoscelis antarcticus</em>) penguins. Like all penguins, it is a bird, and its wings have evolved into stiff flippers used for propulsion underwater rather than for flight.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult Adelie penguins have the classic countershaded penguin pattern, with a black back, head, and throat contrasting against a white front. The most recognizable feature is the narrow white eye-ring set against the black head, which helps distinguish the species from related penguins. The bill is relatively short and partly covered by feathers, and the tail is somewhat long and stiff, frequently held off the ground. Both sexes look broadly similar, and chicks are covered in soft grey or brownish down before molting into adult-like plumage.
          </p>
        </>
      }
      habitat={
        <p>
          The Adelie penguin is a marine and coastal species associated with Antarctic coasts and the surrounding seas. It breeds on ice-free rocky shores of the Antarctic continent and on nearby islands during the southern summer, choosing exposed ground where it can build simple nests. Outside the breeding season, it ranges over the surrounding ocean and pack-ice zone, where access to open water is important for feeding. Its distribution is tied to the coastal fringe and adjacent waters of the far south rather than to the continental interior, and it should not be described as occupying all of Antarctica.
        </p>
      }
      diet={
        <p>
          Adelie penguins feed at sea, foraging by diving from the surface and pursuing prey underwater with their flippers. Their diet consists mainly of Antarctic krill, with fish and other small marine animals also taken depending on what is locally available. The species&#39; reliance on krill links its feeding ecology closely to the seasonal productivity of the Southern Ocean. This page provides no fishing, harvesting, or food guidance of any kind and describes diet only to explain the animal&#39;s natural feeding ecology.
        </p>
      }
      behavior={
        <>
          <p>
            Adelie penguins are highly social during the breeding season, gathering in dense colonies on suitable coastal ground. They typically build nests from small stones, and pairs cooperate to incubate eggs and raise chicks through the short southern summer. Adults make repeated trips between the colony and the sea to forage and return with food for their young. On land they move with an upright walk and can toboggan across snow on their bellies, while at sea they are agile, fast swimmers. As the season ends, adults and fledged young disperse to spend the colder months associated with the surrounding ocean and ice.
          </p>
          <p>
            As an abundant krill-eating seabird, the Adelie penguin is an important part of the Southern Ocean food web. It transfers energy from small prey such as krill and fish to higher levels of the ecosystem, and its breeding colonies concentrate marine nutrients on coastal land. Adelie penguins are themselves prey for marine predators, including leopard seals at sea, and their eggs and chicks can be taken by other birds. Because the species depends on krill and on suitable sea-ice conditions, scientists often study Adelie penguin colonies as indicators of change in the surrounding marine environment.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Adelie penguin is listed as Least Concern on the IUCN Red List, though conservation status can change as conditions are reassessed. Scientists report that shifts in sea ice and in the availability of krill are considered concerns for some Antarctic wildlife, and Adelie penguin colonies are frequently monitored as part of broader Southern Ocean research. As with all wild marine wildlife, this profile offers no guidance on approaching, handling, or interacting with penguins, and any questions about protected species or activities in the region should be directed to the relevant authorities. The page also provides no fishing, harvesting, or food guidance.
        </p>
      }
      faqs={[
        {
          question: "Where do Adelie penguins live?",
          answer:
            "Adelie penguins are marine, coastal birds associated with Antarctic coasts and the surrounding seas. They breed on ice-free rocky shores of the Antarctic continent and nearby islands in summer and range over the surrounding ocean and pack ice at other times.",
        },
        {
          question: "What do Adelie penguins eat?",
          answer:
            "They feed at sea, mainly on Antarctic krill, with fish and other small marine animals also taken depending on local availability. Their diet links them closely to the seasonal productivity of the Southern Ocean.",
        },
        {
          question: "Are Adelie penguins endangered?",
          answer:
            "The Adelie penguin is currently listed as Least Concern on the IUCN Red List. This status can change over time, and scientists continue to monitor colonies because shifts in sea ice and krill are considered concerns for Antarctic wildlife.",
        },
        {
          question: "How do you recognize an Adelie penguin?",
          answer:
            "Adelie penguins are small-to-medium penguins with a black back and head, a white front, and a distinctive narrow white ring around each eye. This eye-ring helps distinguish them from related penguin species.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pygoscelis adeliae" },
        { label: "Animal group", value: "Bird (flightless seabird)" },
        { label: "Family/order", value: "Spheniscidae / Sphenisciformes" },
        { label: "Size", value: "Small-to-medium penguin" },
        { label: "Diet", value: "Mainly Antarctic krill, plus some fish" },
        { label: "Habitat", value: "Ice-free rocky coasts and surrounding seas" },
        { label: "Range", value: "Antarctic coasts and nearby islands" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Penguin", href: "/animals/penguin", description: "Penguins more broadly" },
        { label: "Emperor Penguin", href: "/animals/emperor-penguin", description: "The largest penguin" },
        { label: "Snow Petrel", href: "/animals/snow-petrel", description: "An Antarctic seabird" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
