import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/orca";
const TITLE = "Orca (Killer Whale) — Profile, Intelligence, Diet & Behavior";
const DESC =
  "Explore the orca (Orcinus orca): the ocean's top predator and the largest member of the dolphin family — a highly intelligent, deeply social animal with distinct cultures and dialects.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("orca"),
});

export default function OrcaPage() {
  return (
    <AnimalProfileLayout
      commonName="Orca (Killer Whale)"
      scientificName="Orcinus orca"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammal", "Dolphin family", "Highly intelligent", "Apex predator"]}
      image={getAnimalImage("orca") ?? undefined}
      galleryImages={getAnimalGalleryImages("orca")}
      sources={ANIMAL_SOURCES.orca}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The orca, or killer whale (<em>Orcinus orca</em>), is the ocean&apos;s
            top predator and — despite the name &ldquo;whale&rdquo; — the largest
            member of the dolphin family, Delphinidae. Powerful, fast, and
            unmistakable in its black-and-white markings, the orca is found in every
            ocean, from the tropics to the polar pack ice.
          </p>
          <p>
            Orcas are among the most intelligent and socially complex animals known.
            Different populations form distinct, stable societies with their own
            hunting techniques, diets, and vocal dialects — patterns that scientists
            describe as a form of culture passed down through generations.
          </p>
          <p>
            <strong>Conservation note:</strong> the orca is assessed at the species
            level with considerable uncertainty (it spans many distinct populations
            with different statuses); some local populations are seriously
            threatened. Verify current status at iucnredlist.org and NOAA Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Orcas are found throughout the world&apos;s oceans and are most abundant in
          cooler, productive waters, including the seas around both poles. Distinct
          ecotypes specialise in different habitats and prey, from coastal fish-eaters
          to open-ocean and ice-edge hunters.
        </p>
      }
      diet={
        <p>
          Orcas are apex predators with no natural predators of their own. Different
          populations specialise: some eat mainly fish (such as salmon), while others
          hunt marine mammals like seals, sea lions, and even other whales, and some
          take sharks, rays, or seabirds. Specialised populations can be remarkably
          selective about their preferred prey.
        </p>
      }
      behavior={
        <p>
          Orcas live in tightly bonded groups. In some populations, pods are
          matrilineal — built around related females and their offspring — and
          individuals may stay with their mothers for life. They coordinate complex
          group hunts, communicate with varied calls, and engage in play and social
          behaviour. Females are also notable for living long past their reproductive
          years, with older females often guiding the group.
        </p>
      }
      humanInteraction={
        <p>
          Wild orcas are not considered a danger to people, and human-related
          pressures — prey depletion, pollution, noise, and historically capture for
          display — are the main concerns. Keeping such wide-ranging, intelligent,
          socially complex animals in captivity is widely debated. Some populations,
          such as the southern residents of the northeastern Pacific, are of serious
          conservation concern. Consult NOAA Fisheries and the IUCN Red List for
          current status.
        </p>
      }
      extraSections={[
        {
          heading: "Intelligence & Social Complexity",
          body: (
            <>
              <p>
                Orcas have very large, highly developed brains and show some of the
                most sophisticated behaviour of any animal. Populations differ in
                <strong> diet, hunting methods, movement patterns, and vocal
                dialects</strong>, and these differences are learned and passed
                between generations — which researchers describe as cultural
                transmission, something documented in very few species.
              </p>
              <p>
                Their cooperative hunting can be strikingly coordinated: examples
                reported by scientists include groups working together to create
                waves that wash seals off ice, and carefully taught techniques shared
                with young. Combined with strong, lifelong family bonds, rich
                communication, and long-lived, knowledgeable older females, this puts
                orcas among the most cognitively and socially advanced animals known.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is an orca a whale or a dolphin?",
          answer:
            "Both, in a sense. The orca is commonly called the killer whale, but it is actually the largest member of the dolphin family (Delphinidae), which itself sits within the whale group (Cetacea). So an orca is a dolphin and, like all dolphins, a kind of toothed whale.",
        },
        {
          question: "Why are orcas considered so intelligent?",
          answer:
            "Orcas have large, complex brains and show learned, culturally transmitted behaviour: different populations have their own diets, hunting techniques, and vocal dialects that are passed down through generations. Coordinated group hunting, rich communication, play, and long-lived family knowledge all point to advanced cognition and social complexity.",
        },
        {
          question: "Are orcas dangerous to humans?",
          answer:
            "Wild orcas are not regarded as a danger to people; documented serious incidents in the wild are essentially absent. The concerns around orcas relate mostly to human impacts on them — prey loss, pollution, noise, and the ethics of keeping such intelligent, wide-ranging animals in captivity.",
        },
        {
          question: "What do orcas eat?",
          answer:
            "It depends on the population. Some orcas specialise in fish such as salmon, while others hunt marine mammals like seals, sea lions, and other whales, and some take sharks, rays, or seabirds. This specialisation is part of what distinguishes different orca cultures.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Orcinus orca" },
        { label: "Family", value: "Delphinidae (dolphins)" },
        { label: "Class", value: "Mammalia (Cetacea)" },
        { label: "Claim to fame", value: "Largest dolphin; ocean apex predator" },
        { label: "Diet", value: "Varies by population (fish to marine mammals)" },
        { label: "Social structure", value: "Stable pods; often matrilineal" },
        { label: "Cognition", value: "Highly intelligent; population cultures & dialects" },
        { label: "Range", value: "All oceans" },
        { label: "IUCN Status", value: "Uncertain at species level (verify by population)" },
      ]}
      relatedLinks={[
        { label: "Dolphin Profile", href: "/animals/dolphin", description: "The dolphin family overview" },
        { label: "Pilot Whale Profile", href: "/animals/pilot-whale", description: "Another large dolphin" },
        { label: "Whale Profile", href: "/animals/whale", description: "Cetaceans more broadly" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Marine habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
