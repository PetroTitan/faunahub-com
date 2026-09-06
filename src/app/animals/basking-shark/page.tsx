import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/basking-shark";
const TITLE = "Basking Shark — Profile, Filter Feeding & Temperate Seas";
const DESC =
  "Explore the basking shark (Cetorhinus maximus): the second-largest fish, a harmless plankton feeder that cruises temperate seas with its mouth open.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("basking-shark"),
});

export default function BaskingSharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Basking Shark"
      scientificName="Cetorhinus maximus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Shark","Filter Feeder","Temperate Seas"]}
      image={getAnimalImage("basking-shark") ?? undefined}
      galleryImages={getAnimalGalleryImages("basking-shark")}
      sources={ANIMAL_SOURCES["basking-shark"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The basking shark (<em>Cetorhinus maximus</em>) is the second-largest living fish, after the whale shark, and one of only three sharks that live by filtering plankton. It gets its name from its habit of cruising slowly at the surface, apparently basking in the sun, with its enormous mouth held open.
        </p>
        <p>
          Where the whale shark is a tropical animal, the basking shark is a creature of <strong>temperate seas</strong>. It has a conical snout, huge gill slits that nearly encircle the head, and a cavernous mouth lined with bristle-like gill rakers that strain food from the water.
        </p>
        <p>
          Basking sharks are entirely harmless to people. Their teeth are tiny and non-functional for feeding, and they take nothing larger than plankton.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Basking sharks occur in temperate coastal and shelf waters of the Atlantic and Pacific, in both hemispheres. They are seen at the surface where plankton concentrates — along fronts, tide lines and headlands — and were long assumed to disappear in winter, but tracking has shown they move to deeper water and travel considerable distances rather than hibernating.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Basking sharks eat zooplankton, chiefly small copepods and other tiny crustaceans. Unlike the whale shark, which can actively suck water in, the basking shark filters passively: it swims forward with the mouth open, and water passes over gill rakers that trap the plankton before the water exits through the gill slits.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Basking sharks are slow-moving and often seen alone, but they aggregate where food is dense, sometimes forming groups that swim nose-to-tail in circles — behaviour linked to courtship. They shed and regrow their gill rakers, and they undertake long migrations and deep dives that were unknown until satellite tagging revealed them.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Basking sharks were heavily fished historically for their large, oil-rich livers, and their slow growth and late maturity made populations very slow to recover. They are now legally protected in many countries. Present-day risks include entanglement in fishing gear, boat strikes — they are vulnerable because they feed at the surface — and disturbance. This profile gives no guidance on approaching or handling basking sharks; follow local regulations. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Are basking sharks dangerous?",
          answer:
            "No. Basking sharks feed only on plankton, filtering it from the water as they swim, and their teeth are tiny and play no part in feeding. They pose no threat to people. The risk runs the other way: because they feed at the surface they are vulnerable to boat strikes.",
        },
        {
          question: "How is a basking shark different from a whale shark?",
          answer:
            "Both are giant filter-feeding sharks, but they differ in water and in method. Basking sharks live in temperate seas and filter passively, simply swimming forward with the mouth open; whale sharks live in tropical waters and can actively suck in water. They are also unrelated beyond both being sharks, and the whale shark is larger.",
        },
        {
          question: "Why are they called basking sharks?",
          answer:
            "Because of how they look when feeding: they cruise slowly along at the surface with the huge mouth open and the dorsal fin exposed, giving the impression of an animal basking in the sun. In fact they are filtering plankton rather than sunbathing.",
        },
        {
          question: "Where do basking sharks go in winter?",
          answer:
            "Not into hibernation, as was once assumed. Satellite tagging has shown they move into deeper water and can travel long distances, including across ocean basins, continuing to feed where plankton is available rather than becoming dormant.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cetorhinus maximus" },
        { label: "Family", value: "Cetorhinidae" },
        { label: "Class", value: "Chondrichthyes" },
        { label: "Claim to fame", value: "Second-largest living fish" },
        { label: "Feeding", value: "Passive filter feeding on zooplankton" },
        { label: "Teeth", value: "Tiny; not used in feeding" },
        { label: "Habitat", value: "Temperate coastal and shelf seas" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Whale Shark Profile", href: "/animals/whale-shark", description: "The largest filter-feeding shark" },
        { label: "Great White Shark Profile", href: "/animals/great-white-shark" },
        { label: "Krill Profile", href: "/animals/krill" },
        { label: "Shark Profile", href: "/animals/shark", description: "Group-level overview" },
        { label: "Endangered Animals", href: "/endangered-animals" },
      ]}
    />
  );
}
