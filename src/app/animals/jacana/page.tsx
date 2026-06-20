import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/jacana";
const TITLE = "Jacana — Profile, the 'Lily-Trotter' & Role-Reversed Parenting";
const DESC =
  "Explore jacanas (family Jacanidae): tropical wetland birds with enormous toes that let them walk on floating plants — and famous for sex-role-reversed breeding where males raise the young.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("jacana"),
});

export default function JacanaPage() {
  return (
    <AnimalProfileLayout
      commonName="Jacana"
      scientificName="Actophilornis africanus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wetland", "Tropical"]}
      image={getAnimalImage("jacana") ?? undefined}
      galleryImages={getAnimalGalleryImages("jacana")}
      sources={ANIMAL_SOURCES.jacana}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Jacanas (family Jacanidae) are tropical wetland birds famous for their
            spectacularly long toes and claws, which spread their weight so they can walk
            across floating leaves and lily pads — earning them the nickname
            &ldquo;lily-trotters&rdquo; or even &ldquo;Jesus birds&rdquo; for appearing to
            walk on water. The African jacana (<em>Actophilornis africanus</em>), shown
            here, is a richly coloured example with a chestnut body and a pale blue
            forehead shield.
          </p>
          <p>
            Jacanas are also striking for their breeding system: in most species the usual
            roles are reversed, with females competing for mates and males doing the
            incubating and chick-rearing.
          </p>
          <p>
            <strong>Note:</strong> there are several jacana species across the tropics;
            details here use the African jacana as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Jacanas live in freshwater wetlands across the tropics — lakes, ponds, marshes,
          and slow rivers with plenty of floating and emergent vegetation. The African
          jacana is widespread in suitable wetlands across sub-Saharan Africa, while other
          jacana species occupy similar habitats in the Americas, Asia, and Australia.
        </p>
      }
      diet={
        <p>
          Jacanas are mainly insectivores, feeding on insects and other invertebrates —
          and small aquatic animals — which they pick from floating plants and the water
          surface as they stride across the vegetation. They also take some seeds. Their
          long toes let them forage on lily pads that would not support most other birds.
        </p>
      }
      behavior={
        <p>
          The jacana&apos;s signature trait is walking on floating leaves, made possible by
          extremely long toes and claws that distribute its weight. Many jacanas show
          reversed sex roles: females are larger, hold territories, and may mate with
          several males (polyandry), while each male incubates a clutch and raises the
          chicks largely alone — even able to scoop young under his wings and carry them to
          safety. This makes jacanas a textbook example of polyandry and male parental care.
        </p>
      }
      humanInteraction={
        <p>
          Jacanas are conspicuous, often confiding wetland birds and a favourite of
          birdwatchers, valued partly for the way they showcase unusual breeding behaviour.
          They depend on healthy wetlands with floating vegetation, so wetland drainage and
          degradation are the main concerns; many species remain widespread. Consult
          authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How can jacanas walk on water?",
          answer:
            "They don't truly walk on water — they walk on floating plants. Jacanas have exceptionally long toes and claws that spread their weight over a large area, letting them step across lily pads and other floating vegetation without sinking. This 'lily-trotting' is how they earned nicknames like 'Jesus bird.'",
        },
        {
          question: "Why do male jacanas raise the chicks?",
          answer:
            "Most jacanas have reversed sex roles. Females are larger and compete for territories and mates, often pairing with several males (polyandry), while each male takes on incubation and chick-rearing. It's one of the best-known examples of male parental care and female-driven mating among birds.",
        },
        {
          question: "What do jacanas eat?",
          answer:
            "Mainly insects and other small invertebrates, plus some aquatic animals and seeds, picked from floating plants and the water's surface. Their long-toed feet let them forage out on lily pads and vegetation that wouldn't bear the weight of most birds.",
        },
        {
          question: "Can jacanas carry their chicks?",
          answer:
            "Yes. In several jacana species the caring male can tuck the chicks up under his wings and carry them — sometimes with little legs dangling out — to move them away from danger. It's a striking sight and part of the male's central role in raising the young.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Jacanidae" },
        { label: "Reference species", value: "Actophilornis africanus (African jacana)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly insects & invertebrates" },
        { label: "Signature trait", value: "Long toes; walks on floating plants" },
        { label: "Breeding", value: "Often polyandrous; males raise young" },
        { label: "Habitat", value: "Tropical freshwater wetlands" },
        { label: "Status", value: "Many widespread (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Heron Profile", href: "/animals/heron", description: "Another wetland wader" },
        { label: "Flamingo Profile", href: "/animals/flamingo", description: "A wetland bird with its own oddities" },
        { label: "Shoebill Profile", href: "/animals/shoebill", description: "A dramatic African swamp bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
