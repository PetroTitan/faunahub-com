import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/commersons-dolphin";
const TITLE = "Commerson's Dolphin — Profile, Intelligence & Behavior";
const DESC =
  "Explore Commerson's dolphin (Cephalorhynchus commersonii): a tiny, boldly black-and-white dolphin of cold southern waters — fast, playful, and highly social.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("commersons-dolphin"),
});

export default function CommersonsDolphinPage() {
  return (
    <AnimalProfileLayout
      commonName="Commerson's Dolphin"
      scientificName="Cephalorhynchus commersonii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammal", "Dolphin family", "Highly intelligent", "Cold water"]}
      image={getAnimalImage("commersons-dolphin") ?? undefined}
      galleryImages={getAnimalGalleryImages("commersons-dolphin")}
      sources={ANIMAL_SOURCES["commersons-dolphin"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Commerson&apos;s dolphin (<em>Cephalorhynchus commersonii</em>) is one of
            the smallest dolphins, instantly recognisable by its bold black-and-white
            pattern that has earned it the nickname &ldquo;panda dolphin.&rdquo; It
            lives in the cold, often turbulent inshore waters of southern South America
            and around some sub-Antarctic islands.
          </p>
          <p>
            Compact, fast, and acrobatic, Commerson&apos;s dolphin is a lively,
            highly social animal frequently seen riding waves and bow-riding boats.
          </p>
          <p>
            <strong>Conservation note:</strong> Commerson&apos;s dolphin is generally
            considered widespread within its limited southern range, but its inshore
            habits make some populations sensitive to fishing interactions. Verify
            current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Commerson&apos;s dolphins live in cold coastal waters — bays, harbours,
          river mouths, and kelp beds — off southern South America (including around
          the Strait of Magellan and the Falkland Islands), with a separate population
          near the Kerguelen Islands in the southern Indian Ocean.
        </p>
      }
      diet={
        <p>
          Commerson&apos;s dolphins feed on a varied diet of small fish, squid, and
          crustaceans, often foraging near the seabed and in shallow inshore waters.
          They are agile hunters well suited to their dynamic coastal environment.
        </p>
      }
      behavior={
        <p>
          These small dolphins are active and playful, known for fast swimming,
          surfing in waves and surf zones, and even swimming upside down at times.
          They typically travel in small groups and communicate with clicks and other
          sounds, using echolocation to find prey in murky, energetic coastal waters.
        </p>
      }
      humanInteraction={
        <p>
          Commerson&apos;s dolphins are popular to watch from shore and boats within
          their range. The main concern is accidental capture in coastal fishing gear
          for some populations. For current status and regional context, consult
          authoritative sources such as the IUCN Red List and NOAA Fisheries.
        </p>
      }
      extraSections={[
        {
          heading: "Intelligence & Social Complexity",
          body: (
            <p>
              Though small, Commerson&apos;s dolphin shows the intelligence and
              sociability characteristic of the dolphin family. It lives in
              coordinated groups, plays energetically, and relies on
              <strong> echolocation and varied calls</strong> to hunt and communicate
              in challenging coastal waters. As with all dolphins, this combination of
              social living, biosonar, and flexible behaviour reflects an advanced,
              well-studied form of animal cognition.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why is it called the panda dolphin?",
          answer:
            "Commerson's dolphin has a bold black-and-white pattern — a black head, dorsal fin, and tail with a white body — that some people compare to a panda's markings. The striking contrast makes it one of the most distinctive small dolphins.",
        },
        {
          question: "How small is Commerson's dolphin?",
          answer:
            "It is among the smallest dolphins in the world, far smaller than familiar species like the bottlenose. Its compact size suits the fast, turbulent inshore waters where it lives.",
        },
        {
          question: "Where does Commerson's dolphin live?",
          answer:
            "In cold coastal waters of southern South America — including around the Strait of Magellan and the Falkland Islands — with a separate population near the Kerguelen Islands in the southern Indian Ocean.",
        },
        {
          question: "Are Commerson's dolphins intelligent?",
          answer:
            "Yes. Like other dolphins, they are intelligent and social, using echolocation and a range of calls to hunt and stay in contact, and they are known for lively, playful behaviour such as surfing and swimming upside down.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cephalorhynchus commersonii" },
        { label: "Family", value: "Delphinidae (dolphins)" },
        { label: "Class", value: "Mammalia (Cetacea)" },
        { label: "Size", value: "One of the smallest dolphins" },
        { label: "Markings", value: "Bold black-and-white (“panda dolphin”)" },
        { label: "Diet", value: "Small fish, squid & crustaceans" },
        { label: "Range", value: "Southern South America; Kerguelen Is." },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Dolphin Profile", href: "/animals/dolphin", description: "The dolphin family overview" },
        { label: "Common Dolphin Profile", href: "/animals/common-dolphin", description: "A widespread open-ocean dolphin" },
        { label: "Orca Profile", href: "/animals/orca", description: "The largest dolphin" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
