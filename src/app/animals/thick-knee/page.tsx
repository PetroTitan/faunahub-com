import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/thick-knee";
const TITLE = "Thick-knee (Stone-curlew) — Profile, the Big-Eyed Night Birds of Open Ground";
const DESC =
  "Explore thick-knees or stone-curlews (family Burhinidae): cryptic, large-eyed, mostly nocturnal ground birds named for their knobbly leg joints — masters of camouflage and eerie night calls.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("thick-knee"),
});

export default function ThickKneePage() {
  return (
    <AnimalProfileLayout
      commonName="Thick-knee (Stone-curlew)"
      scientificName="family Burhinidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Nocturnal", "Camouflage"]}
      image={getAnimalImage("thick-knee") ?? undefined}
      galleryImages={getAnimalGalleryImages("thick-knee")}
      sources={ANIMAL_SOURCES["thick-knee"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Thick-knees (family Burhinidae), several of which are called stone-curlews, are medium-sized,
            cryptically coloured ground birds of open and semi-open country across warmer parts of the world.
            Their most arresting feature is a pair of large, staring yellow eyes — an adaptation for a
            largely nocturnal life — set in a streaky brown-and-buff plumage that makes them almost vanish
            against bare ground and stones. The odd name comes from the prominent, knobbly-looking joints in
            their legs.
          </p>
          <p>
            Thick-knees are masters of camouflage and stillness by day, and they come alive at dusk and
            night, when their wild, wailing, curlew-like calls ring across the darkness — giving the
            stone-curlews their name despite not being true curlews.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;thick-knee&rdquo; covers a family of species; details here describe
            the group broadly. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Thick-knees live in open, often dry habitats across Africa, Europe, Asia, Australia, and the
          Americas — grassland, semi-desert, scrub, stony ground, riverbanks and shingle, and increasingly
          farmland — generally favouring bare or sparsely vegetated ground where their camouflage works best.
          Some species are tied to rivers and beaches, others to dry plains.
        </p>
      }
      diet={
        <p>
          Thick-knees are carnivores that feed mainly on invertebrates — insects, worms, snails, crustaceans,
          and the like — and also take small vertebrates such as lizards, rodents, and frogs. They forage
          mostly at night, walking deliberately and watching with their big eyes, then darting forward to seize
          prey, much in the manner of a plover.
        </p>
      }
      behavior={
        <p>
          By day, thick-knees rely on camouflage and stillness: they crouch or stand motionless on open
          ground, their streaky plumage and habit of freezing making them remarkably hard to spot, and they
          may flatten themselves or sneak away rather than flush. Their large eyes equip them for foraging in
          low light, and they are most active at dusk and through the night, when pairs and groups give loud,
          eerie, wailing calls. They nest on the ground in a simple scrape, and the well-camouflaged eggs and
          chicks are guarded by attentive parents that may use distraction displays against intruders. The
          knobbly leg joints that give them their name are actually the ankle (the &ldquo;heel&rdquo;), not a
          true knee.
        </p>
      }
      humanInteraction={
        <p>
          Thick-knees are intriguing, harmless birds appreciated by birdwatchers for their cryptic looks and
          haunting night calls, and some live close to people on farmland and even in towns. As ground-nesters
          of open habitats, they can be vulnerable to habitat loss, disturbance, predation by introduced
          animals, and farming practices, and certain species are of conservation concern while others remain
          common. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called 'thick-knees'?",
          answer:
            "Because of the prominent, knobbly-looking joints in their legs. Confusingly, the obvious joint isn't really the knee but the ankle (the bird's 'heel'), which appears thickened — but the name 'thick-knee' stuck. Several species are also called 'stone-curlews' for their stony-ground habitat and curlew-like calls.",
        },
        {
          question: "Why do thick-knees have such big eyes?",
          answer:
            "Because they're largely nocturnal. The large, staring yellow eyes gather light for foraging and moving about at dusk and through the night, when thick-knees are most active. By day they rely instead on camouflage and stillness, so the big eyes are a clear sign of their night-time lifestyle.",
        },
        {
          question: "Are stone-curlews actually curlews?",
          answer:
            "No. Despite the name, stone-curlews (thick-knees) aren't true curlews — they belong to their own family, Burhinidae. They earned the 'curlew' part of the name from their wild, wailing, curlew-like calls and their preference for open, stony ground. True curlews are long-billed wading shorebirds in a different family.",
        },
        {
          question: "How do thick-knees avoid being seen?",
          answer:
            "Through camouflage and behaviour. Their streaky brown-and-buff plumage blends superbly with bare ground, stones, and dry vegetation, and by day they often freeze, crouch, or flatten themselves rather than fly, sometimes sneaking quietly away. This makes them extremely easy to overlook until they move or call at night.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Burhinidae (thick-knees / stone-curlews)" },
        { label: "Reference genus", value: "Burhinus" },
        { label: "Class", value: "Aves" },
        { label: "Signature traits", value: "Large eyes; cryptic plumage; knobbly leg joints" },
        { label: "Activity", value: "Mainly nocturnal; eerie wailing calls" },
        { label: "Diet", value: "Invertebrates & small vertebrates" },
        { label: "Nest", value: "Ground scrape; camouflaged eggs" },
        { label: "Not a", value: "True curlew (own family)" },
      ]}
      relatedLinks={[
        { label: "Courser Profile", href: "/animals/courser", description: "Another open-country ground bird" },
        { label: "Sandgrouse Profile", href: "/animals/sandgrouse", description: "Another cryptic dryland bird" },
        { label: "Owl Profile", href: "/animals/owl", description: "Another big-eyed night bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Open-country fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
