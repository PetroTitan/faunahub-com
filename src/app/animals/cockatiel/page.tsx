import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cockatiel";
const TITLE = "Cockatiel — Profile, Crest, Wild Flocks & Australian Range";
const DESC =
  "Explore the cockatiel (Nymphicus hollandicus): the smallest cockatoo, an Australian parrot with an expressive mobile crest that lives in dry country.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("cockatiel"),
});

export default function CockatielPage() {
  return (
    <AnimalProfileLayout
      commonName="Cockatiel"
      scientificName="Nymphicus hollandicus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Parrot","Australia"]}
      image={getAnimalImage("cockatiel") ?? undefined}
      galleryImages={getAnimalGalleryImages("cockatiel")}
      sources={ANIMAL_SOURCES.cockatiel}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The cockatiel (<em>Nymphicus hollandicus</em>) is a slim, long-tailed Australian parrot and — despite its small size and slender build — a genuine <strong>cockatoo</strong>. It is the smallest member of the cockatoo family and the only species in its genus.
        </p>
        <p>
          Its most distinctive feature is a tall, mobile crest that the bird raises and lowers, which is characteristic of cockatoos. Wild cockatiels are grey with a white wing panel, an orange cheek patch and, in males, a yellow face; females are duller with barred underparts on the tail.
        </p>
        <p>
          Like the budgerigar, the cockatiel is both a widespread wild Australian bird and a very common companion parrot. <strong>This profile describes the wild species and is not a pet-care guide — it gives no husbandry, feeding or veterinary advice.</strong>
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Cockatiels range across the interior of Australia, in open woodland, scrub, savanna, grassland and farmland, generally near water. They avoid dense forest and the wettest coastal areas, and are most abundant in the dry inland where scattered trees provide nest hollows and open ground provides seed.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Cockatiels feed mainly on seed taken from the ground — grasses, cereal crops and the seeds of shrubs and trees — along with some fruit and plant material. They typically feed in flocks and must drink regularly, so waterholes and stock troughs are important gathering points.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Cockatiels are gregarious and, like budgerigars, largely nomadic, moving in response to rainfall and food availability. They fly fast and directly, often in tight flocks. The crest is genuinely informative: raised sharply when the bird is alarmed or alert, held high when curious, and flattened when threatened or agitated. Nesting is in tree hollows, usually near water, and both parents incubate — males typically by day and females by night.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The cockatiel is one of the most widely kept parrots in the world, second only to the budgerigar among companion parrots. In the wild it remains common and widespread in Australia, where it is protected and export prohibited. This profile covers the wild bird only and offers no guidance on keeping, feeding, breeding, taming or the health of pet cockatiels — those belong with an avian veterinarian and specialist sources. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a cockatiel a cockatoo?",
          answer:
            "Yes. Despite being much smaller and slimmer than the birds most people picture as cockatoos, the cockatiel is a true member of the cockatoo family — the smallest one — and it shows the family's defining feature in its tall, mobile crest.",
        },
        {
          question: "What does the cockatiel's crest mean?",
          answer:
            "It reflects the bird's state. A sharply raised crest generally signals alarm or alertness, a high crest curiosity or excitement, and a flattened crest agitation or a defensive mood. Because the crest is genuinely mobile it acts as a visible signal to other birds.",
        },
        {
          question: "What do wild cockatiels eat?",
          answer:
            "Mostly seed taken from the ground — grasses, cereal crops and the seeds of shrubs and trees — plus some fruit and other plant material. They feed in flocks and need to drink regularly, so waterholes are important gathering points in dry country.",
        },
        {
          question: "Where do wild cockatiels live?",
          answer:
            "Across the interior of Australia, in open woodland, scrub, savanna, grassland and farmland, generally within reach of water. They avoid dense forest and the wettest coastal regions, and like budgerigars they move nomadically in response to rainfall.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Nymphicus hollandicus" },
        { label: "Family", value: "Cacatuidae (cockatoos)" },
        { label: "Class", value: "Aves" },
        { label: "Claim to fame", value: "The smallest cockatoo" },
        { label: "Crest", value: "Tall and mobile; signals state" },
        { label: "Range", value: "Interior Australia" },
        { label: "Movement", value: "Nomadic, following rainfall" },
        { label: "Note", value: "Wild species profile — not a care guide" },
      ]}
      relatedLinks={[
        { label: "Budgerigar Profile", href: "/animals/budgerigar", description: "Another Australian grass parrot" },
        { label: "Galah Profile", href: "/animals/galah", description: "A cockatoo relative" },
        { label: "Parrot Profile", href: "/animals/parrot", description: "Group-level overview" },
        { label: "Bird Care Guides", href: "/bird-care", description: "Pet bird care hub" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
