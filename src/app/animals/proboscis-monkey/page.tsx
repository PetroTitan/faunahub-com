import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/proboscis-monkey";
const TITLE = "Proboscis Monkey — Profile, Big Nose, Diet & Conservation";
const DESC =
  "Explore the proboscis monkey (Nasalis larvatus): a big-nosed, pot-bellied monkey of Borneo's riverside forests that is a strong swimmer and leaf specialist. Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("proboscis-monkey"),
});

export default function ProboscisMonkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Proboscis Monkey"
      scientificName="Nasalis larvatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Borneo"]}
      image={getAnimalImage("proboscis-monkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("proboscis-monkey")}
      sources={ANIMAL_SOURCES["proboscis-monkey"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The proboscis monkey (<em>Nasalis larvatus</em>) is an unmistakable primate
            found only on the island of Borneo, famous for the male&apos;s huge, drooping
            nose and conspicuous pot belly. Reddish-brown above and paler below, these are
            large, heavily built leaf-eating monkeys (colobines) that live in the
            mangrove, swamp, and riverside forests of the island.
          </p>
          <p>
            They are also among the most aquatic of all monkeys — strong swimmers with
            partly webbed feet that readily cross rivers and even dive to escape danger.
          </p>
          <p>
            <strong>Conservation note:</strong> the proboscis monkey is Endangered,
            threatened by the loss of its specialised riverine and mangrove forests.
            Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Proboscis monkeys are endemic to Borneo, where they keep close to water in
          coastal mangroves, peat swamp forest, and riverine forest. They rarely stray far
          from rivers and tend to gather in riverside trees to sleep, which makes them
          dependent on these particular, increasingly threatened habitats.
        </p>
      }
      diet={
        <p>
          Proboscis monkeys are mainly folivores (leaf-eaters), also taking unripe fruit,
          seeds, flowers, and shoots. Like other colobine monkeys they have a large,
          chambered stomach with microbes that ferment tough leaves — which is part of why
          they look pot-bellied. They tend to avoid sweet ripe fruit, which can ferment
          dangerously in their specialised gut.
        </p>
      }
      behavior={
        <p>
          Proboscis monkeys live in groups, typically a dominant male with several females
          and young, plus separate bachelor groups. The male&apos;s oversized nose is
          thought to amplify his calls and to signal quality to females, growing larger
          with status. These monkeys are excellent swimmers: they cross rivers by swimming
          (sometimes after a running belly-flop leap from a branch) and can swim
          underwater, an unusual skill among primates that helps them evade predators such
          as crocodiles.
        </p>
      }
      humanInteraction={
        <p>
          Proboscis monkeys are a flagship species for Borneo&apos;s wildlife and a draw
          for ecotourism, but they are declining because the riverside and mangrove forests
          they depend on are being cleared for timber, oil-palm plantations, and
          settlement, and they are sometimes hunted. Protecting connected riverine forest
          is essential. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the male proboscis monkey have such a big nose?",
          answer:
            "The male's large, pendulous nose is thought to serve as a signal and a sound amplifier. A bigger nose can make his calls louder and deeper, advertising his size and status to females and rivals, and nose size is linked to dominance — so it likely evolved through female preference and male competition.",
        },
        {
          question: "Can proboscis monkeys really swim?",
          answer:
            "Yes — they are among the most aquatic of all monkeys. With partially webbed feet, proboscis monkeys swim well, cross rivers regularly, and can even swim underwater, sometimes leaping from branches into the water. This helps them move around their riverine habitat and escape predators.",
        },
        {
          question: "Why do proboscis monkeys look pot-bellied?",
          answer:
            "Their large, rounded bellies house a big, chambered stomach full of microbes that ferment the tough leaves they eat, much like a cow's. This specialised digestive system lets them extract nutrients from foliage but gives them their distinctive pot-bellied appearance.",
        },
        {
          question: "Are proboscis monkeys endangered?",
          answer:
            "Yes — they are assessed as Endangered. The main threat is the destruction of their specialised mangrove and riverside forests for logging, oil-palm plantations, and development, along with hunting in places. Because they depend so closely on these habitats, protecting them is crucial; current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Nasalis larvatus" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Endemic to", value: "Borneo" },
        { label: "Diet", value: "Folivore (leaves; also fruit/seeds)" },
        { label: "Signature traits", value: "Male's big nose; pot belly" },
        { label: "Special skill", value: "Strong swimmer (partly webbed feet)" },
        { label: "Society", value: "Harem groups + bachelor groups" },
        { label: "IUCN Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Langur Profile", href: "/animals/langur", description: "A related leaf-eating monkey" },
        { label: "Orangutan Profile", href: "/animals/orangutan", description: "Another Bornean primate" },
        { label: "Mandrill Profile", href: "/animals/mandrill", description: "The world's largest monkey" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
