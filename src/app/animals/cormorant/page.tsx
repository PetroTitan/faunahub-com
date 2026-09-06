import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cormorant";
const TITLE = "Cormorant — Profile, Wing-Spreading, Diving & Habitat";
const DESC =
  "Explore cormorants (Phalacrocoracidae): pursuit-diving fish eaters whose wettable plumage explains the familiar posture of wings spread wide to dry.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("cormorant"),
});

export default function CormorantPage() {
  return (
    <AnimalProfileLayout
      commonName="Cormorant"
      scientificName="family Phalacrocoracidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Diving","Fish-Eater"]}
      image={getAnimalImage("cormorant") ?? undefined}
      galleryImages={getAnimalGalleryImages("cormorant")}
      sources={ANIMAL_SOURCES.cormorant}
      factsHeaderNote="“Cormorant” covers around forty species in the family Phalacrocoracidae, including the birds called shags. The reference species used here is the great cormorant (Phalacrocorax carbo)."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Cormorants are medium to large waterbirds with long bodies, long necks, hooked bills and, in most species, dark plumage. They are pursuit divers: rather than plunging from the air, they swim down from the surface and chase fish underwater using powerful webbed feet.
        </p>
        <p>
          Their best-known habit is standing with <strong>wings held open</strong> after a dive. Unlike most waterbirds, cormorant plumage is only partly water-repellent and becomes wet during diving. The usual explanation is that a wettable plumage reduces buoyancy and makes underwater pursuit easier, at the cost of having to dry out afterwards.
        </p>
        <p>
          The great cormorant (<em>Phalacrocorax carbo</em>) is used here as a familiar reference species; the family includes around forty species worldwide, among them the birds called shags.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Cormorants occur on coasts, estuaries, lakes, rivers and reservoirs across most of the world, missing only from the most extreme environments. They need water clear enough to hunt in by sight and safe places to roost and nest — cliffs, trees, islands and artificial structures. Colonies are often large and conspicuous, and the guano beneath them can kill the vegetation they nest in.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Cormorants are almost entirely fish-eaters, taking whatever species are locally abundant, along with some crustaceans, eels and amphibians. Prey is caught in underwater pursuit and usually brought to the surface to be manoeuvred and swallowed head first. All four toes are joined by webbing, giving powerful propulsion.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Cormorants dive from the surface, often with a small forward leap, and swim underwater with the feet. Between dives they return to a perch and adopt the characteristic spread-wing posture. They are colonial nesters and often roost communally. Many species are strong fliers that commute considerable distances between roosts and feeding areas, flying low over water in lines or loose V formations.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Cormorants have a long and contested relationship with fisheries: they are efficient fish-eaters, and conflicts with anglers and aquaculture recur wherever their populations are healthy, sometimes leading to control programmes. In parts of East Asia, cormorants have traditionally been used by people to catch fish — a practice now largely maintained for heritage and tourism. Some island and coastal species are highly restricted and threatened. This profile offers no wildlife-control guidance; status varies sharply by species, so verify at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why do cormorants spread their wings?",
          answer:
            "Because their plumage gets wet. Cormorant feathers are only partly water-repellent, so after diving the bird stands with its wings open to dry. The wettable plumage is generally seen as a trade-off: it reduces buoyancy and helps the bird pursue fish underwater, at the cost of needing to dry off afterwards.",
        },
        {
          question: "What is the difference between a cormorant and a shag?",
          answer:
            "There is no consistent biological distinction — both are members of the family Phalacrocoracidae, and 'shag' is simply the traditional name used for some species. In Britain, for example, the great cormorant is a 'cormorant' and the European shag is a 'shag', but both are cormorants in the scientific sense.",
        },
        {
          question: "What do cormorants eat?",
          answer:
            "Almost entirely fish, taken by pursuit diving, plus some crustaceans, eels and amphibians. They take whatever species are locally abundant rather than specialising, and usually bring larger prey to the surface to be turned and swallowed head first.",
        },
        {
          question: "How do cormorants catch fish?",
          answer:
            "They dive from the surface and chase prey underwater, propelled by powerful feet in which all four toes are joined by webbing. This makes them pursuit divers, in contrast to birds like gannets that plunge into the water from the air.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Phalacrocoracidae — about 40 species" },
        { label: "Reference species", value: "Great cormorant (Phalacrocorax carbo)" },
        { label: "Class", value: "Aves" },
        { label: "Feeding", value: "Pursuit diving from the surface" },
        { label: "Plumage", value: "Partly wettable — hence wing-spreading" },
        { label: "Feet", value: "All four toes webbed" },
        { label: "Diet", value: "Almost entirely fish" },
        { label: "Status", value: "Varies by species — verify" },
      ]}
      relatedLinks={[
        { label: "Pelican Profile", href: "/animals/pelican" },
        { label: "Frigatebird Profile", href: "/animals/frigatebird" },
        { label: "Penguin Profile", href: "/animals/penguin", description: "Another underwater pursuer" },
        { label: "Common Loon Profile", href: "/animals/common-loon" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
