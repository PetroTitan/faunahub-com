import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hawksbill-turtle";
const TITLE = "Hawksbill Turtle — Profile, Sponge Diet & Reef Role";
const DESC =
  "Explore the hawksbill turtle (Eretmochelys imbricata): a reef turtle with a narrow beak for extracting sponges and overlapping, patterned shell scutes.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("hawksbill-turtle"),
});

export default function HawksbillTurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Hawksbill Turtle"
      scientificName="Eretmochelys imbricata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Sea Turtle","Coral Reef"]}
      image={getAnimalImage("hawksbill-turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("hawksbill-turtle")}
      sources={ANIMAL_SOURCES["hawksbill-turtle"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The hawksbill sea turtle (<em>Eretmochelys imbricata</em>) is a medium-sized marine turtle of tropical coral reefs worldwide. Two features identify it: a narrow, sharply pointed <strong>beak</strong> like a bird of prey&apos;s, and shell scutes that <strong>overlap</strong> like roof tiles, which is what <em>imbricata</em> means.
        </p>
        <p>
          The beak is a specialised tool. Hawksbills are among the very few animals that make a living eating <strong>sponges</strong>, reaching into crevices in the reef to extract prey that most animals cannot handle because of the glass-like spicules and toxins sponges contain.
        </p>
        <p>
          <strong>Conservation note:</strong> the hawksbill has been heavily exploited for its beautifully patterned shell, sold as &apos;tortoiseshell&apos;, and remains one of the most threatened sea turtles. Verify current status at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Hawksbills occur throughout tropical and some subtropical seas — the Atlantic, Indian and Pacific Oceans — with a strong association with coral reefs, rocky areas, lagoons, mangrove estuaries and seagrass beds. Females return to sandy beaches to nest, often on small, isolated beaches, and hatchlings spend their early years in the open ocean before recruiting to reefs.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Sponges dominate the diet of adult hawksbills in many regions — an unusual specialisation, since sponges are defended by silica spicules and chemical toxins. They also eat sea anemones, jellyfish, molluscs, crustaceans, algae and other reef organisms. By removing sponges that compete with corals for space, hawksbills influence reef structure.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Hawksbills forage on reefs, using the narrow beak to probe crevices and prise prey off the substrate. They are typically solitary outside nesting. Like other sea turtles, they show strong nest-site fidelity, with females returning to nest on or near the beaches where they hatched, and their sex is determined by the temperature at which the eggs incubate rather than genetically.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The hawksbill&apos;s shell is the source of true tortoiseshell, and centuries of trade for jewellery and ornament drove severe declines; international commercial trade is now prohibited under CITES, though illegal trade persists. Other pressures include coral reef degradation, coastal development on nesting beaches, entanglement and bycatch, egg collection and marine debris. This profile gives no guidance on approaching, handling or collecting turtles or their products — all are restricted or illegal in most jurisdictions. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why is it called a hawksbill?",
          answer:
            "Because of its beak. The hawksbill has a narrow, sharply pointed, hooked upper jaw resembling a bird of prey's bill. That shape is functional: it lets the turtle reach into narrow reef crevices to extract sponges and other prey.",
        },
        {
          question: "What do hawksbill turtles eat?",
          answer:
            "Mainly sponges, which is remarkable because sponges are defended by glass-like silica spicules and chemical toxins that deter almost everything else. Hawksbills also take sea anemones, jellyfish, molluscs, crustaceans and algae.",
        },
        {
          question: "What is tortoiseshell?",
          answer:
            "It is the shell of the hawksbill turtle, historically worked into jewellery, combs and ornaments. Demand for it drove severe declines in the species, and international commercial trade is now banned under CITES — though illegal trade continues to be a problem.",
        },
        {
          question: "How is the sex of a hawksbill hatchling determined?",
          answer:
            "By temperature, not chromosomes. The temperature at which eggs incubate in the sand determines whether hatchlings are male or female — a mechanism shared with other sea turtles, and one reason that changes in beach temperature are a conservation concern.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Eretmochelys imbricata" },
        { label: "Family", value: "Cheloniidae" },
        { label: "Class", value: "Reptilia" },
        { label: "Beak", value: "Narrow and hooked — for reef crevices" },
        { label: "Scutes", value: "Overlapping, like roof tiles" },
        { label: "Diet", value: "Largely sponges" },
        { label: "Threat history", value: "Exploited for tortoiseshell" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Loggerhead Turtle Profile", href: "/animals/loggerhead-turtle" },
        { label: "Green Sea Turtle Profile", href: "/animals/green-sea-turtle" },
        { label: "Leatherback Sea Turtle Profile", href: "/animals/leatherback-sea-turtle" },
        { label: "Sea Turtle Profile", href: "/animals/sea-turtle", description: "Group-level overview" },
        { label: "Endangered Animals", href: "/endangered-animals" },
      ]}
    />
  );
}
