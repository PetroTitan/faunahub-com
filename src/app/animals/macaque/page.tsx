import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/macaque";
const TITLE = "Macaque — Profile, Adaptable Monkeys, Diet & Behavior";
const DESC =
  "Explore macaques (genus Macaca): among the most adaptable and widespread monkeys — using the Japanese macaque (snow monkey), famous for bathing in hot springs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("macaque"),
});

export default function MacaquePage() {
  return (
    <AnimalProfileLayout
      commonName="Macaque"
      scientificName="Macaca fuscata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Highly adaptable"]}
      image={getAnimalImage("macaque") ?? undefined}
      galleryImages={getAnimalGalleryImages("macaque")}
      sources={ANIMAL_SOURCES.macaque}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Macaques (genus <em>Macaca</em>) are among the most successful and widespread of
            all monkeys, with many species ranging across Asia and into North Africa. They
            are sturdy, intelligent, highly social Old World monkeys that thrive in an
            enormous variety of habitats — including close alongside humans. The Japanese
            macaque (<em>Macaca fuscata</em>), shown here, is the famous &ldquo;snow
            monkey,&rdquo; living further north than any other non-human primate and
            celebrated for bathing in hot springs.
          </p>
          <p>
            Macaques are known for their behavioural flexibility and learning, including
            cultural traditions that spread within groups.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;macaque&rdquo; covers many species with varied
            habits; details here use the Japanese macaque as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Macaques occupy a huge range of habitats across Asia (and, in the case of the
          Barbary macaque, North Africa and Gibraltar): tropical forests, mountains,
          grasslands, mangroves, temples, and cities. The Japanese macaque endures cold,
          snowy winters in the mountains and forests of Japan, an unusual feat for a primate
          and the reason for its &ldquo;snow monkey&rdquo; nickname.
        </p>
      }
      diet={
        <p>
          Macaques are opportunistic omnivores with broad, flexible diets: fruit, seeds,
          leaves, flowers, roots, insects, small animals, and, around people, human food and
          crops. This dietary flexibility is a major reason for their success across so many
          environments, but it can also bring them into conflict with farmers and city
          dwellers.
        </p>
      }
      behavior={
        <p>
          Macaques live in complex social groups structured by dominance and kinship, with
          rich social behaviour including grooming, alliances, and learning. Japanese
          macaques are famous for cultural traditions: in one well-studied group, individuals
          learned to wash sweet potatoes in water, and the habit spread and persisted across
          generations, while in cold regions some macaques famously soak in hot springs to
          keep warm. Such socially transmitted behaviours make macaques important subjects in
          studies of animal intelligence and culture.
        </p>
      }
      humanInteraction={
        <p>
          Macaques live closer to people than almost any other monkey, which makes them
          both familiar and frequently in conflict with humans over food and crops; some are
          also used in biomedical research. Many macaque species are common and adaptable,
          but a number of forest-restricted species are threatened by habitat loss. Feeding
          wild macaques is discouraged, as it worsens conflict and can spread disease.
          Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are Japanese macaques called 'snow monkeys'?",
          answer:
            "Because they live in cold, snowy regions of Japan — further north than any other non-human primate. They are well adapted to harsh winters with thick fur, and some groups famously soak in natural hot springs to stay warm, a behaviour that made the 'snow monkey' image world-famous.",
        },
        {
          question: "Do macaques have 'culture'?",
          answer:
            "In a sense, yes. Japanese macaques are a classic example: individuals invented behaviours like washing food in water, and these habits spread through the group by social learning and were passed to later generations. Such socially transmitted traditions are often described as a simple form of animal culture.",
        },
        {
          question: "What do macaques eat?",
          answer:
            "Macaques are opportunistic omnivores, eating fruit, seeds, leaves, flowers, roots, insects, and small animals, plus human food and crops where they live near people. This very flexible diet is a big part of why macaques are so widespread and successful.",
        },
        {
          question: "Is it okay to feed wild macaques?",
          answer:
            "No — feeding wild macaques is strongly discouraged. It makes them bolder and more dependent on people, increases conflict (including aggressive begging or raiding), and can spread disease between monkeys and humans. Observing them without feeding or close contact is best for both people and monkeys.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Macaca fuscata (Japanese macaque)" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Claim to fame", value: "Among the most widespread monkeys" },
        { label: "Diet", value: "Opportunistic omnivore" },
        { label: "Behaviour", value: "Highly social; cultural traditions" },
        { label: "Snow monkey", value: "Lives in snowy Japan; uses hot springs" },
        { label: "Range", value: "Asia & North Africa (by species)" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Mandrill Profile", href: "/animals/mandrill", description: "Another robust Old World monkey" },
        { label: "Langur Profile", href: "/animals/langur", description: "An Asian leaf monkey" },
        { label: "Chimpanzee Profile", href: "/animals/chimpanzee", description: "A great ape known for culture" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
