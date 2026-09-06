import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pike";
const TITLE = "Northern Pike — Profile, Ambush Hunting & Freshwater Habitat";
const DESC =
  "Explore the northern pike (Esox lucius): a camouflaged freshwater ambush predator with a duck-billed snout and explosive acceleration from cover.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("pike"),
});

export default function PikePage() {
  return (
    <AnimalProfileLayout
      commonName="Northern Pike"
      scientificName="Esox lucius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Freshwater","Ambush Predator"]}
      image={getAnimalImage("pike") ?? undefined}
      galleryImages={getAnimalGalleryImages("pike")}
      sources={ANIMAL_SOURCES.pike}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The northern pike (<em>Esox lucius</em>) is a long-bodied freshwater predator found across the northern hemisphere — North America, Europe and northern Asia. It is olive to green with pale bean-shaped spots and bars along the flanks, a pattern that breaks up its outline among weed.
        </p>
        <p>
          Its body plan is built entirely around the <strong>ambush</strong>. The dorsal and anal fins are set far back near the tail, which puts the propulsive surfaces where they generate maximum thrust for a single explosive lunge from a standing start.
        </p>
        <p>
          The head is flattened and duck-billed, and the mouth carries many sharp, backward-curving teeth. Prey seized sideways is turned and swallowed head first.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Northern pike occupy cool, weedy fresh water across the northern hemisphere: lakes, slow rivers, backwaters, reservoirs and brackish coastal waters such as the Baltic. They depend on aquatic vegetation and structure for cover, since their hunting strategy requires somewhere to wait unseen. Larger individuals often hold territory in productive spots.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Pike are carnivores that eat mainly fish, including other pike — cannibalism is common — along with amphibians, crayfish, small mammals and waterfowl chicks when the opportunity arises. They take prey remarkably large relative to their own size, and their teeth and jaw structure are adapted to hold struggling fish securely.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Pike hunt by lying motionless among weed or beside structure, relying on camouflage, then accelerating in a single burst to seize prey. Vision and the lateral line both contribute to detecting prey. Spawning occurs in spring in shallow, vegetated margins and floodplain areas, with eggs scattered over vegetation and no parental care. Females grow considerably larger than males.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Pike are among the most sought-after freshwater sport fish in the northern hemisphere and are also eaten in many countries. Where they have been introduced outside their native range, they can significantly affect native fish populations. They depend on shallow, vegetated spawning habitat, so drainage, bank engineering and loss of floodplain connection reduce their recruitment. This profile is educational and offers no fishing, handling or gear guidance. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "How does a pike catch its prey?",
          answer:
            "By ambush. It holds still among weed or beside structure, camouflaged by its barred green pattern, and then accelerates in one explosive burst to seize the prey sideways in its jaws before turning it and swallowing head first.",
        },
        {
          question: "Why are a pike's fins so far back?",
          answer:
            "Because its hunting depends on acceleration rather than cruising. Placing the dorsal and anal fins close to the tail concentrates the propulsive surfaces at the rear, which is what allows a pike to launch from a standstill in a single powerful lunge.",
        },
        {
          question: "What do northern pike eat?",
          answer:
            "Mainly other fish — including smaller pike, since cannibalism is common — along with amphibians, crayfish, and occasionally small mammals or waterfowl chicks. They routinely take prey that is large relative to their own body size.",
        },
        {
          question: "Where do pike live?",
          answer:
            "In cool, weedy fresh water across the northern hemisphere: lakes, slow rivers, backwaters and reservoirs, and also brackish water such as the Baltic Sea. They need vegetation and structure to ambush from, so weedy margins are typical pike habitat.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Esox lucius" },
        { label: "Family", value: "Esocidae" },
        { label: "Class", value: "Actinopterygii" },
        { label: "Hunting style", value: "Ambush; explosive acceleration" },
        { label: "Fin placement", value: "Dorsal and anal set far back" },
        { label: "Teeth", value: "Numerous, sharp, backward-curving" },
        { label: "Diet", value: "Fish, including other pike" },
        { label: "Range", value: "Northern hemisphere, circumpolar" },
      ]}
      relatedLinks={[
        { label: "Catfish Profile", href: "/animals/catfish" },
        { label: "Rainbow Trout Profile", href: "/animals/rainbow-trout" },
        { label: "Nile Perch Profile", href: "/animals/nile-perch" },
        { label: "Snakehead Profile", href: "/animals/snakehead", description: "Another freshwater ambush predator" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
