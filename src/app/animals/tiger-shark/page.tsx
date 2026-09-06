import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tiger-shark";
const TITLE = "Tiger Shark — Profile, Stripes, Diet & Tropical Range";
const DESC =
  "Explore the tiger shark (Galeocerdo cuvier): a large tropical shark named for its flank bars, with serrated teeth and an exceptionally broad diet.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("tiger-shark"),
});

export default function TigerSharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Tiger Shark"
      scientificName="Galeocerdo cuvier"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Shark","Predator","Tropical"]}
      image={getAnimalImage("tiger-shark") ?? undefined}
      galleryImages={getAnimalGalleryImages("tiger-shark")}
      sources={ANIMAL_SOURCES["tiger-shark"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The tiger shark (<em>Galeocerdo cuvier</em>) is a large shark of tropical and warm-temperate seas, named for the dark vertical bars along its flanks. Those bars are strongest in young sharks and fade as the animal matures.
        </p>
        <p>
          It has a broad, blunt snout and distinctive teeth: heavily serrated and strongly notched, with the same shape in both jaws. This tooth design cuts through hard material such as turtle shell, which is unusual among sharks.
        </p>
        <p>
          The tiger shark is known for an exceptionally <strong>broad diet</strong> — one of the widest of any shark — which has earned it a reputation as an indiscriminate feeder. It is a large predator, and this profile is educational only; it offers no guidance on encountering, provoking or handling sharks.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Tiger sharks live in tropical and warm-temperate waters around the world, in coastal seas, around islands and reefs, in river mouths and lagoons, and out into the open ocean. They move readily between shallow and deep water and can undertake long migrations, with some individuals shifting seasonally between tropical and cooler waters.
        </p>
        </>
      }
      diet={
        <>
        <p>
          The tiger shark&apos;s diet is remarkably broad: fish, rays, sea turtles, seabirds, marine mammals, squid, crustaceans, sea snakes and carrion, along with the remains of other sharks. Their serrated, notched teeth allow them to take hard-shelled prey such as turtles that most sharks cannot. Indigestible human refuse is sometimes found in their stomachs, which is the origin of their scavenging reputation.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Tiger sharks are generally solitary and most active at night and in low light, often moving into shallower water after dark. They are strong, wide-ranging swimmers and use both smell and electroreception to detect prey. Females give birth to live young after a long gestation, producing large litters compared with many sharks.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Tiger sharks are among the shark species most often involved in incidents with people, though such incidents remain rare relative to the amount of time humans spend in the sea. They are also caught in commercial and recreational fisheries and taken for fins, meat and liver oil, and they have been the target of culling programmes whose effectiveness is debated. This profile provides no safety, deterrence, fishing or handling guidance; follow local authorities and posted advice. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why is it called a tiger shark?",
          answer:
            "Because of the dark vertical bars along its flanks, which resemble a tiger's stripes. The markings are boldest in juveniles and fade progressively as the shark matures, so large adults can appear almost uniformly grey.",
        },
        {
          question: "What do tiger sharks eat?",
          answer:
            "Almost anything available. Their diet includes fish, rays, sea turtles, seabirds, marine mammals, squid, crustaceans, sea snakes and carrion. Their heavily serrated, notched teeth let them cut through hard material such as turtle shell, which most sharks cannot manage.",
        },
        {
          question: "Are tiger sharks dangerous?",
          answer:
            "Tiger sharks are large predators and are among the species most often recorded in incidents with people, although such incidents are rare relative to how much time humans spend in the sea. This profile is educational and gives no safety, deterrence or handling advice; follow local authorities and posted guidance where sharks are present.",
        },
        {
          question: "Where do tiger sharks live?",
          answer:
            "In tropical and warm-temperate seas worldwide. They use coastal waters, reefs, island shelves, lagoons and river mouths as well as the open ocean, and individuals can travel long distances, with some moving seasonally between tropical and cooler waters.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Galeocerdo cuvier" },
        { label: "Family", value: "Carcharhinidae" },
        { label: "Class", value: "Chondrichthyes" },
        { label: "Markings", value: "Vertical bars; fade with age" },
        { label: "Teeth", value: "Serrated and notched; same in both jaws" },
        { label: "Diet", value: "Exceptionally broad" },
        { label: "Range", value: "Tropical and warm-temperate worldwide" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Bull Shark Profile", href: "/animals/bull-shark" },
        { label: "Great White Shark Profile", href: "/animals/great-white-shark" },
        { label: "Hammerhead Shark Profile", href: "/animals/hammerhead-shark" },
        { label: "Shark Profile", href: "/animals/shark", description: "Group-level overview" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
