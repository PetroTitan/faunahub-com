import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/quetzal";
const TITLE = "Resplendent Quetzal — Profile, Plumage & Cloud Forests";
const DESC =
  "Explore the resplendent quetzal (Pharomachrus mocinno): a dazzling green-and-red bird of Central American cloud forests, with long tail streamers and deep cultural significance.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("quetzal"),
});

export default function QuetzalPage() {
  return (
    <AnimalProfileLayout
      commonName="Resplendent Quetzal"
      scientificName="Pharomachrus mocinno"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Cloud forest", "Cultural icon"]}
      image={getAnimalImage("quetzal") ?? undefined}
      galleryImages={getAnimalGalleryImages("quetzal")}
      sources={ANIMAL_SOURCES.quetzal}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The resplendent quetzal (<em>Pharomachrus mocinno</em>) is one of the most
            spectacular birds in the Americas — a trogon of Central American cloud forests
            with glittering emerald-green plumage, a crimson breast, and, in breeding
            males, extraordinarily long tail streamers that can trail far beyond the body.
            The shimmering colours come from the microscopic structure of the feathers,
            not pigment.
          </p>
          <p>
            Long revered in Mesoamerican cultures, the quetzal remains a powerful symbol;
            it is the national bird of Guatemala and even lends its name to that
            country&apos;s currency.
          </p>
          <p>
            <strong>Conservation note:</strong> the resplendent quetzal depends on intact
            cloud forest and is threatened by habitat loss; it is generally assessed as
            Near Threatened. Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Resplendent quetzals live in the montane cloud forests of Central America, from
          southern Mexico through Guatemala and Costa Rica to Panama, typically at cool,
          humid, high elevations. They depend on mature forest with the right trees for
          food and with dead trunks soft enough to excavate nest holes.
        </p>
      }
      diet={
        <p>
          Quetzals are mainly fruit-eaters, with a special fondness for wild avocados and
          other fruits of the laurel family, which they often pluck in flight and swallow
          whole, later regurgitating the large seeds — making them important seed
          dispersers. They also take insects, small frogs, lizards, and snails, especially
          when feeding young.
        </p>
      }
      behavior={
        <p>
          Quetzals nest in holes in decaying trees, often enlarging old woodpecker cavities.
          Both parents incubate the eggs and care for the chicks; the male&apos;s long tail
          streamers may bend out of the nest entrance. Their fruit-following habits can
          lead to seasonal movements up and down the mountains as different trees fruit.
          Males display their brilliant plumage and tail in courtship.
        </p>
      }
      humanInteraction={
        <p>
          The quetzal held sacred status in Aztec and Maya cultures, where its tail
          feathers were highly prized (and, by tradition, gathered without killing the
          bird). Today it is a national emblem of Guatemala and a star attraction for
          ecotourists. Its main threat is the loss and fragmentation of cloud forest, so
          protecting that habitat is central to its future. Consult the IUCN Red List for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the quetzal so famous?",
          answer:
            "Its dazzling iridescent green-and-red plumage and the male's long, flowing tail streamers make it one of the most beautiful birds in the world. It also carries deep cultural meaning in Central America — it was sacred to the Maya and Aztecs and is Guatemala's national bird, even giving its name to the local currency.",
        },
        {
          question: "What do resplendent quetzals eat?",
          answer:
            "They are mainly fruit-eaters, especially fond of wild avocados and other laurel-family fruits, which they swallow whole and later regurgitate the seeds — helping disperse forest trees. They also eat insects, small frogs, lizards, and snails, particularly when feeding chicks.",
        },
        {
          question: "Where do quetzals live?",
          answer:
            "In the cool, humid montane cloud forests of Central America, from southern Mexico down to Panama. They need mature forest with fruiting trees and soft, decaying trunks in which to excavate their nest holes, which is why intact cloud forest is so important to them.",
        },
        {
          question: "Are quetzals endangered?",
          answer:
            "The resplendent quetzal is generally assessed as Near Threatened, mainly because of cloud-forest loss and fragmentation. It is not as imperilled as some species, but its dependence on a specific, shrinking habitat is a real concern. Current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pharomachrus mocinno" },
        { label: "Class", value: "Aves" },
        { label: "Family", value: "Trogonidae (trogons)" },
        { label: "Diet", value: "Mainly fruit (esp. wild avocado); some animals" },
        { label: "Signature trait", value: "Iridescent plumage; long tail streamers" },
        { label: "Habitat", value: "Central American cloud forest" },
        { label: "Cultural role", value: "National bird of Guatemala" },
        { label: "IUCN Status", value: "Near Threatened (verify)" },
      ]}
      relatedLinks={[
        { label: "Toucan Profile", href: "/animals/toucan", description: "Another vivid neotropical forest bird" },
        { label: "Hummingbird Profile", href: "/animals/hummingbird", description: "More dazzling American birds" },
        { label: "Hornbill Profile", href: "/animals/hornbill", description: "An Old World tree-cavity nester" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
