import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sperm-whale";
const TITLE = "Sperm Whale — Profile, Deep Diving, Squid Diet & Echolocation";
const DESC =
  "Explore the sperm whale (Physeter macrocephalus): the largest toothed whale, an extreme deep diver that hunts squid using the most powerful sonar known.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("sperm-whale"),
});

export default function SpermWhalePage() {
  return (
    <AnimalProfileLayout
      commonName="Sperm Whale"
      scientificName="Physeter macrocephalus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal","Toothed Whale","Deep Diver"]}
      image={getAnimalImage("sperm-whale") ?? undefined}
      galleryImages={getAnimalGalleryImages("sperm-whale")}
      sources={ANIMAL_SOURCES["sperm-whale"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The sperm whale (<em>Physeter macrocephalus</em>) is the largest toothed whale and the largest predator with teeth on Earth. Its enormous squared head, low bushy blow angled forward and to the left, and wrinkled skin make it unmistakable.
        </p>
        <p>
          Most of that head is not brain but the <strong>spermaceti organ</strong>, a mass of waxy oil-filled tissue involved in producing and focusing sound. Sperm whales generate the most powerful biological sonar known, which they use to locate prey in complete darkness.
        </p>
        <p>
          They are among the deepest and longest divers of any air-breathing animal, descending far into the deep sea to hunt squid, and they have the largest brain of any animal that has ever lived.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Sperm whales are found in deep water throughout the world&apos;s oceans, from the tropics to the edges of the polar ice. They prefer waters over deep canyons and continental slopes where squid are abundant. Distribution is strongly divided by sex and age: females and young remain in warmer waters year-round, while mature males range far into cold high latitudes and return to breed.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Sperm whales feed mainly on squid, including very large deep-sea species, along with octopus and deep-water fish such as rays and sharks. Prey is located and pursued on long, deep foraging dives, and sucker scars on the heads of many whales record encounters with large squid.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Females and immature animals live in long-lasting social units and cooperate in caring for calves, while mature males are largely solitary. Sperm whales communicate with patterned bursts of clicks called codas, and different social groups use different coda repertoires — a difference researchers describe in terms of cultural variation. Dives are long and deep, separated by extended periods of recovery breathing at the surface.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Sperm whales were the central target of historical whaling for spermaceti and oil, the industry behind <em>Moby-Dick</em>, and were hunted again heavily in the twentieth century. Today the main pressures are entanglement in fishing gear, ship strikes, underwater noise that interferes with sound-based foraging, and ingestion of marine debris. Verify current status at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why is the sperm whale's head so large?",
          answer:
            "Most of the head is occupied by the spermaceti organ, a mass of waxy, oil-filled tissue involved in producing and focusing sound rather than in thinking. It is central to the whale's echolocation, which it uses to find squid in complete darkness far below the surface.",
        },
        {
          question: "How deep can sperm whales dive?",
          answer:
            "Very deep, and for a long time — they are among the most extreme divers of any air-breathing animal, routinely foraging far down in the deep sea and staying under for extended periods. Reported maximum depths vary between studies, so it is safer to describe the ability than to quote a single figure.",
        },
        {
          question: "What do sperm whales eat?",
          answer:
            "Mainly squid, including large deep-sea species, plus octopus and deep-water fish such as rays and sharks. They hunt on long, deep dives, locating prey by echolocation in water where no light penetrates.",
        },
        {
          question: "Do sperm whales have the largest brain?",
          answer:
            "Yes — the sperm whale has the largest brain of any animal known, living or extinct. Brain size alone is not a straightforward measure of intelligence, but sperm whales do show complex, long-lasting social structure and group-specific patterns of vocalisation.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Physeter macrocephalus" },
        { label: "Family", value: "Physeteridae" },
        { label: "Class", value: "Mammalia" },
        { label: "Claim to fame", value: "Largest toothed whale; largest brain" },
        { label: "Head", value: "Contains the spermaceti organ" },
        { label: "Diet", value: "Squid, octopus, deep-water fish" },
        { label: "Diving", value: "Among the deepest of air-breathers" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Blue Whale Profile", href: "/animals/blue-whale", description: "The largest animal" },
        { label: "Giant Squid Profile", href: "/animals/giant-squid", description: "Famous sperm whale prey" },
        { label: "Orca Profile", href: "/animals/orca" },
        { label: "Pilot Whale Profile", href: "/animals/pilot-whale" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
