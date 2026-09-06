import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/manatee";
const TITLE = "Manatee — Profile, Sea Cow Biology, Seagrass Diet & Habitat";
const DESC =
  "Explore manatees (Trichechus): slow, plant-eating aquatic mammals of warm rivers and coasts, with endlessly replaced teeth and a need for warm water.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("manatee"),
});

export default function ManateePage() {
  return (
    <AnimalProfileLayout
      commonName="Manatee"
      scientificName="genus Trichechus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal","Sirenian","Herbivore"]}
      image={getAnimalImage("manatee") ?? undefined}
      galleryImages={getAnimalGalleryImages("manatee")}
      sources={ANIMAL_SOURCES.manatee}
      factsHeaderNote="“Manatee” covers three species in the genus Trichechus — West Indian, African and Amazonian. The reference species used here is the West Indian manatee (Trichechus manatus)."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Manatees are large, slow-moving, fully aquatic herbivorous mammals — the &apos;sea cows&apos; of warm coastal waters and rivers. There are three species in the genus <em>Trichechus</em>: the West Indian, African and Amazonian manatees.
        </p>
        <p>
          Manatees belong to the order <strong>Sirenia</strong>, whose only other living member is the dugong. Despite a superficial resemblance to seals or whales, their closest land relatives are elephants — a relationship visible in their nails, tooth replacement and general anatomy.
        </p>
        <p>
          A manatee has a rounded paddle-shaped tail (the dugong&apos;s is fluked), a bristly flexible upper lip used to gather vegetation, and a remarkable dental arrangement: teeth are continuously replaced from the back as worn teeth fall out at the front.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Manatees live in shallow, slow-moving warm water — coastal bays, estuaries, lagoons, canals and rivers. The West Indian manatee occurs from the southeastern United States through the Caribbean to northern South America, the African manatee along West African coasts and rivers, and the Amazonian manatee entirely in fresh water in the Amazon basin. They tolerate a range of salinities but not cold: sustained cool water is dangerous to them.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Manatees are herbivores that consume large quantities of aquatic and marginal vegetation — seagrasses, freshwater plants, algae and overhanging leaves. They use the flexible, bristled upper lip to grasp and pull plants into the mouth, and the constant abrasion from gritty vegetation is why their teeth are replaced throughout life.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Manatees are generally slow and solitary or in loose groups, though they aggregate where conditions favour it — most famously at warm-water springs and industrial outflows in Florida during cold snaps. They surface regularly to breathe, rest for long periods, and communicate with squeaks and chirps, with strong bonds between mothers and calves. They have no natural predators of consequence across most of their range.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The greatest human-related risks to manatees are watercraft strikes, entanglement, habitat loss and the decline of the seagrass beds they depend on; cold-stress events are a further pressure at the northern edge of the range. Historic hunting reduced populations across all three species. Manatees are legally protected in many countries. This profile provides no guidance on approaching, feeding or handling manatees — all are discouraged or illegal in much of their range. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Are manatees related to elephants?",
          answer:
            "Yes — more closely than to any marine mammal. Manatees belong to the order Sirenia, whose nearest living relatives are elephants and hyraxes. The kinship shows in features such as their nails and their unusual pattern of continuous tooth replacement.",
        },
        {
          question: "What is the difference between a manatee and a dugong?",
          answer:
            "The clearest difference is the tail: a manatee's is rounded like a paddle, a dugong's is fluked like a whale's. They are also separated geographically — dugongs live in the Indo-Pacific, manatees in the Atlantic, Caribbean, Amazon and West Africa — and they belong to different families within Sirenia.",
        },
        {
          question: "What do manatees eat?",
          answer:
            "Aquatic plants, in large quantities. Seagrasses, freshwater vegetation, algae and overhanging leaves make up the diet. They gather food with a flexible, bristly upper lip, and because the vegetation is abrasive their teeth are replaced continuously through life.",
        },
        {
          question: "Why do manatees need warm water?",
          answer:
            "Manatees cope poorly with sustained cold despite their bulk, and prolonged exposure to cool water causes serious harm. This is why they congregate at warm-water springs and outflows during cold periods, and why cold-stress events are a recognised threat at the northern edge of their range.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "West Indian manatee (Trichechus manatus)" },
        { label: "Genus", value: "Trichechus — three species" },
        { label: "Order", value: "Sirenia (with the dugong)" },
        { label: "Class", value: "Mammalia" },
        { label: "Nearest land relatives", value: "Elephants and hyraxes" },
        { label: "Tail", value: "Rounded paddle (dugong's is fluked)" },
        { label: "Diet", value: "Herbivore — seagrass and aquatic plants" },
        { label: "Teeth", value: "Continuously replaced through life" },
      ]}
      relatedLinks={[
        { label: "Dugong Profile", href: "/animals/dugong", description: "The only other living sirenian" },
        { label: "Sea Otter Profile", href: "/animals/sea-otter" },
        { label: "Green Sea Turtle Profile", href: "/animals/green-sea-turtle", description: "Another seagrass grazer" },
        { label: "Endangered Animals", href: "/endangered-animals" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
