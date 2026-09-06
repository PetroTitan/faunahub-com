import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/canada-goose";
const TITLE = "Canada Goose — Profile, Migration, V Formation & Urban Spread";
const DESC =
  "Explore the Canada goose (Branta canadensis): a large North American goose with a white chinstrap, known for V-formation flight and for thriving in cities.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("canada-goose"),
});

export default function CanadaGoosePage() {
  return (
    <AnimalProfileLayout
      commonName="Canada Goose"
      scientificName="Branta canadensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Waterfowl","Migratory"]}
      image={getAnimalImage("canada-goose") ?? undefined}
      galleryImages={getAnimalGalleryImages("canada-goose")}
      sources={ANIMAL_SOURCES["canada-goose"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The Canada goose (<em>Branta canadensis</em>) is a large, long-necked goose native to North America, easily identified by its black head and neck cut by a broad white chinstrap, with a brown body and pale breast.
        </p>
        <p>
          It is the archetypal V-formation migrant. Flying in a V is generally understood as an aerodynamic strategy — birds behind gain lift from the vortices shed by the bird ahead — combined with the practical benefit of keeping the flock in visual contact.
        </p>
        <p>
          Canada geese have also become one of the great success stories of adaptation to human landscapes, thriving on the short grass of parks, golf courses, airfields and reservoirs, and in many places no longer migrating at all.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Canada geese breed across North America from the Arctic tundra south into the temperate United States, and have been introduced to Europe, New Zealand and elsewhere. They need open water for safety and short grassland or crops for grazing, which is exactly what parks, playing fields, reservoirs and farmland provide. Several subspecies differ substantially in size and in how far they migrate.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Canada geese are grazing herbivores, feeding on grasses, sedges, aquatic vegetation, grain, roots and berries. In agricultural landscapes they feed heavily on stubble and young crops, and in urban areas on managed short grass — a resource that has helped them expand.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Migratory populations travel in V or line formations, calling constantly in flight. Pairs are long-lasting, and both parents attend the goslings, which follow the adults and graze from an early age. Geese undergo a flightless moult in summer during which they stay close to water. They are strongly territorial around nests and young, and adults displaying at intruders — hissing with the neck lowered — are simply defending a brood.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The Canada goose is a case study in a native species becoming locally overabundant. Conservation efforts and adaptation to mown grass produced large resident, non-migratory populations in urban and suburban North America and Europe, which brings conflicts over grazing, droppings, water quality and aviation safety. Introduced populations in Europe are treated as invasive in some countries. This profile offers no wildlife-control, feeding or handling guidance — feeding wild geese is discouraged in many places. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why do geese fly in a V?",
          answer:
            "Mainly for aerodynamic efficiency. Each bird flies slightly behind and to the side of the one ahead, gaining lift from the vortices coming off its wingtips, which reduces the effort of flight. The formation also keeps the flock in visual contact and makes coordination easier over long distances.",
        },
        {
          question: "Do all Canada geese migrate?",
          answer:
            "No. Many populations are strongly migratory, breeding in the far north and wintering further south, but large resident populations have established in urban and suburban areas where mown grass and open water are available year-round. Those birds may migrate very little or not at all.",
        },
        {
          question: "What do Canada geese eat?",
          answer:
            "They are grazing herbivores: grasses, sedges, aquatic plants, grain, roots and berries. Short mown grass in parks, playing fields and golf courses is ideal for them, which is a large part of why they have done so well in human landscapes.",
        },
        {
          question: "Why are Canada geese aggressive near their nests?",
          answer:
            "They are defending eggs or goslings. A goose that lowers its neck, hisses and advances is giving a territorial warning display during the breeding season. Keeping a respectful distance from nests and broods, and not feeding the birds, avoids most conflict.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Branta canadensis" },
        { label: "Family", value: "Anatidae" },
        { label: "Class", value: "Aves" },
        { label: "Identification", value: "Black neck with white chinstrap" },
        { label: "Flight", value: "V and line formations" },
        { label: "Diet", value: "Grazing herbivore — grasses and grain" },
        { label: "Populations", value: "Migratory and resident, incl. urban" },
        { label: "Introduced", value: "Europe, New Zealand and elsewhere" },
      ]}
      relatedLinks={[
        { label: "Goose Profile", href: "/animals/goose", description: "Group-level overview" },
        { label: "Swan Profile", href: "/animals/swan" },
        { label: "Duck Profile", href: "/animals/duck" },
        { label: "Migration & Navigation", href: "/animal-senses-and-adaptations/migration-and-navigation" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
