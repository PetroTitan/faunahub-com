import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/narwhal";
const TITLE = "Narwhal — Profile, Tusk, Arctic Habitat & Diet";
const DESC =
  "Explore the narwhal (Monodon monoceros): the Arctic whale whose spiralled tusk is an overgrown tooth, plus its deep dives and sea-ice dependence.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("narwhal"),
});

export default function NarwhalPage() {
  return (
    <AnimalProfileLayout
      commonName="Narwhal"
      scientificName="Monodon monoceros"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Arctic","Toothed Whale"]}
      image={getAnimalImage("narwhal") ?? undefined}
      galleryImages={getAnimalGalleryImages("narwhal")}
      sources={ANIMAL_SOURCES.narwhal}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The narwhal (<em>Monodon monoceros</em>) is a medium-sized toothed whale of Arctic waters, instantly recognisable from the long, straight, spiralled tusk carried by most males. That tusk is not a horn: it is an enormously elongated left canine tooth that grows forward through the upper lip. Narwhals otherwise have essentially no functional teeth.
        </p>
        <p>
          Narwhals are mottled grey and white, lack a dorsal fin — an advantage for moving under sea ice — and spend their lives in the cold waters of the Atlantic Arctic, particularly around Greenland, Arctic Canada and Svalbard.
        </p>
        <p>
          <strong>Conservation note:</strong> narwhals are closely tied to sea ice and to a small number of wintering areas, which makes them sensitive to ice loss, shipping noise and industrial activity. Verify current status with the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Narwhals live in the Atlantic sector of the Arctic — the waters around Greenland, the Canadian Arctic Archipelago, Svalbard and the Russian Arctic. They move seasonally between coastal summer areas and deep offshore wintering grounds covered by dense pack ice, where they breathe at cracks and leads in the ice.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Narwhals feed heavily in winter on Greenland halibut, along with Arctic cod, squid and shrimp. Feeding is concentrated in the cold months, and prey is taken on deep dives; narwhals are among the deepest-diving of all whales, routinely descending far below the surface and staying down for extended periods.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Narwhals are social and typically travel in groups, sometimes aggregating into much larger herds during migration. Males often spar with their tusks at the surface, a behaviour called &apos;tusking&apos;. The tusk is richly innervated and is now understood to have a sensory role as well as a social one; females usually lack a tusk entirely, and a small number of narwhals grow two.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Narwhals have long been hunted by Inuit communities, and subsistence hunting continues under management in Greenland and Canada. The medieval European trade in &apos;unicorn horn&apos; was in fact narwhal tusk. Today the main pressures are climate-driven sea-ice change, increased shipping and underwater noise in a species that relies on sound. Current status should be checked against the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a narwhal's tusk a horn?",
          answer:
            "No. It is a tooth — an extremely elongated left canine that grows forward through the upper lip, usually in males. It is spiralled, can reach several metres, and is richly supplied with nerves, which is why it is now thought to have a sensory function alongside its role in male-to-male display and sparring.",
        },
        {
          question: "Where do narwhals live?",
          answer:
            "Narwhals are restricted to the Atlantic sector of the Arctic — chiefly the waters around Greenland, the Canadian Arctic Archipelago, Svalbard and the Russian Arctic. They summer in coastal bays and fjords and winter offshore under dense pack ice, breathing at cracks and leads.",
        },
        {
          question: "What do narwhals eat?",
          answer:
            "Mainly fish and squid. Greenland halibut is a major winter prey item, along with Arctic cod, squid and shrimp. Narwhals feed on deep dives and take most of their food during the colder months rather than in summer.",
        },
        {
          question: "Do female narwhals have tusks?",
          answer:
            "Usually not. The tusk is overwhelmingly a male feature; most females never grow one, though a minority do. A small number of narwhals — again mostly males — grow two tusks.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Monodon monoceros" },
        { label: "Family", value: "Monodontidae" },
        { label: "Class", value: "Mammalia" },
        { label: "The tusk", value: "An elongated left canine tooth" },
        { label: "Dorsal fin", value: "Absent — an adaptation to sea ice" },
        { label: "Diet", value: "Fish (esp. Greenland halibut), squid" },
        { label: "Range", value: "Atlantic Arctic: Greenland, Canada, Svalbard" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Beluga Whale Profile", href: "/animals/beluga-whale", description: "The narwhal's closest living relative" },
        { label: "Orca Profile", href: "/animals/orca", description: "A major predator of Arctic whales" },
        { label: "Polar Bear Profile", href: "/animals/polar-bear", description: "Another ice-dependent Arctic predator" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
      ]}
    />
  );
}
