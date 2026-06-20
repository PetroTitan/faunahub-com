import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/quokka";
const TITLE = "Quokka — Profile, the 'Happiest Animal' & Conservation";
const DESC =
  "Explore the quokka (Setonix brachyurus): a small, round-faced wallaby of Western Australia famed for its 'smile' — a herbivore best known from Rottnest Island, and Vulnerable in the wild.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("quokka"),
});

export default function QuokkaPage() {
  return (
    <AnimalProfileLayout
      commonName="Quokka"
      scientificName="Setonix brachyurus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Herbivore"]}
      image={getAnimalImage("quokka") ?? undefined}
      galleryImages={getAnimalGalleryImages("quokka")}
      sources={ANIMAL_SOURCES.quokka}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The quokka (<em>Setonix brachyurus</em>) is a small marsupial — a member of the
            kangaroo and wallaby family — about the size of a domestic cat, with rounded
            ears, a short tail, and a curved mouth that gives it a famously
            &ldquo;smiling&rdquo; expression. It has become an internet sensation as the
            &ldquo;world&apos;s happiest animal,&rdquo; especially through photos taken on
            Rottnest Island off Western Australia, where it is abundant and unusually
            approachable.
          </p>
          <p>
            That cheerful look is just the shape of its face, of course — but the quokka is
            a genuinely charming and important part of Western Australia&apos;s wildlife.
          </p>
          <p>
            <strong>Conservation note:</strong> despite being common on a few islands, the
            quokka is assessed as Vulnerable, with mainland populations much reduced.
            Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Quokkas live in southwestern Western Australia, with strongholds on offshore
          islands — especially Rottnest and Bald Islands — and smaller, scattered
          populations on the mainland. They favour dense vegetation, scrub, and swampy
          thickets that offer shelter, food, and cover from predators.
        </p>
      }
      diet={
        <p>
          Quokkas are herbivores that browse and graze on grasses, leaves, stems, and
          shrubs. They can survive long dry periods by drawing on moisture and reserves,
          and they sometimes climb low into shrubs to reach foliage. Like many marsupial
          herbivores, they may re-ingest food to extract more nutrients.
        </p>
      }
      behavior={
        <p>
          Quokkas are mainly nocturnal, resting by day in shady, sheltered spots and
          becoming active in the cooler hours. On Rottnest they are famously bold around
          people, but feeding or handling them is harmful and discouraged. Females carry a
          single joey in a forward-opening pouch. Quokkas can hop like other wallabies and
          move nimbly through dense low vegetation along well-used runways.
        </p>
      }
      humanInteraction={
        <p>
          The quokka&apos;s &ldquo;smile&rdquo; has made it a tourism icon, and
          &ldquo;quokka selfies&rdquo; are popular on Rottnest Island — though wildlife
          authorities stress that the animals should not be touched or fed (human food
          harms them, and it is against the rules). On the mainland, quokkas have declined
          due to habitat loss, altered fire regimes, and introduced predators such as
          foxes and cats. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the quokka look like it's smiling?",
          answer:
            "Its 'smile' is simply the natural shape of its face and mouth, combined with relaxed cheeks — not an expression of emotion. Because quokkas on Rottnest Island are bold and approachable, people capture lots of close-up photos that highlight this look, which is how the 'happiest animal' reputation took off.",
        },
        {
          question: "Where can you see quokkas?",
          answer:
            "The most famous place is Rottnest Island off Western Australia, where quokkas are abundant and used to people. They also live on Bald Island and in scattered mainland populations in the southwest, though they are far harder to spot on the mainland.",
        },
        {
          question: "Can I feed or touch a quokka?",
          answer:
            "No — and on Rottnest it's against the rules. Human food can make quokkas sick, and touching or chasing them causes stress and can spread disease. The recommended approach is to observe quietly and let any 'quokka selfie' happen on the animal's own terms, without contact or feeding.",
        },
        {
          question: "Are quokkas endangered?",
          answer:
            "They are assessed as Vulnerable. Although quokkas are common on a few predator-free islands, mainland populations have shrunk due to habitat loss, changed fire patterns, and introduced foxes and cats. Current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Setonix brachyurus" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Family", value: "Macropodidae (kangaroos/wallabies)" },
        { label: "Diet", value: "Herbivore (grasses, leaves, shrubs)" },
        { label: "Famous for", value: "Its 'smiling' face" },
        { label: "Stronghold", value: "Rottnest Island, W. Australia" },
        { label: "Activity", value: "Mainly nocturnal" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Kangaroo Profile", href: "/animals/kangaroo", description: "A large relative in the same family" },
        { label: "Bilby Profile", href: "/animals/bilby", description: "Another threatened Australian marsupial" },
        { label: "Koala Profile", href: "/animals/koala", description: "An iconic Australian marsupial" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
