import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/button-quail";
const TITLE = "Button-quail — Profile of the 'False Quail' With Reversed Sex Roles";
const DESC =
  "Meet the button-quail (Turnix): a small, secretive ground bird that looks like a quail but is not one — and in which the larger, bolder females court the males and leave them to raise the chicks.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("button-quail"),
});

export default function ButtonQuailPage() {
  return (
    <AnimalProfileLayout
      commonName="Button-quail"
      scientificName="Turnix spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Ground bird", "Old World"]}
      image={getAnimalImage("button-quail") ?? undefined}
      galleryImages={getAnimalGalleryImages("button-quail")}
      sources={ANIMAL_SOURCES["button-quail"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Button-quails (genus <em>Turnix</em>, family Turnicidae) are small, plump, secretive ground
            birds of the Old World&apos;s grasslands and scrub. They look remarkably like true quails — hence
            the name — but they are not true quails at all, and are not closely related to them.
          </p>
          <p>
            True quails belong to the gamebird order (Galliformes), whereas button-quails sit in the
            shorebird order (Charadriiformes). Among their oddities, button-quails lack a hind toe (giving
            them only three forward-pointing toes) and they show a reversal of the usual sex roles.
          </p>
          <p>
            <strong>Note:</strong> there are many button-quail species; details here describe the group
            broadly, with the barred buttonquail (<em>Turnix suscitator</em>) as a familiar example.
          </p>
        </>
      }
      habitat={
        <p>
          Button-quails live in grassland, scrub, crops, and other low, dense ground cover across warmer
          parts of Africa, southern Asia, and Australia. They keep to thick vegetation, where their cryptic,
          streaky plumage hides them well, and they are far more often heard than seen.
        </p>
      }
      diet={
        <p>
          Button-quails are omnivores, feeding on seeds, green shoots, and small invertebrates such as
          insects. They forage on the ground, scratching and pecking through litter and low vegetation,
          and a foraging bird often turns in tight circles as it feeds.
        </p>
      }
      behavior={
        <p>
          Button-quails are best known for their reversed sex roles. The female is larger and more boldly
          marked than the male, and she gives a deep, far-carrying booming or purring call to attract mates
          and defend a territory. After laying, she typically leaves the eggs to the male, which incubates
          them and tends the chicks — and she may go on to pair with additional males. Button-quails are
          reluctant fliers, preferring to run and hide and bursting into short, low flight only when nearly
          stepped on.
        </p>
      }
      humanInteraction={
        <p>
          Button-quails are widespread but inconspicuous, and many species are common in grassland and
          farmland. Some are affected by intensive agriculture and habitat loss, and a few are localised or
          of conservation concern. Consult the IUCN Red List for the status of a particular species.
        </p>
      }
      faqs={[
        {
          question: "Is a button-quail a real quail?",
          answer:
            "No. Despite the close resemblance and the name, button-quails are not true quails. True quails are gamebirds (order Galliformes), while button-quails belong to the shorebird order (Charadriiformes). The likeness is superficial.",
        },
        {
          question: "Why are female button-quails the showy ones?",
          answer:
            "Button-quails have reversed sex roles. The female is larger and more brightly marked, she does the calling and courting, and she defends the territory — while the smaller, plainer male incubates the eggs and raises the chicks.",
        },
        {
          question: "What is unusual about a button-quail's feet?",
          answer:
            "Button-quails lack a hind toe, so they have only three forward-facing toes. This is one of several features that separate them from the true quails they resemble.",
        },
        {
          question: "Why are button-quails so hard to see?",
          answer:
            "They are small, cryptically patterned, and live in dense low cover, preferring to crouch, run, and hide rather than fly. They usually flush only at the last moment, flying a short distance before dropping back into vegetation.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Turnix (family Turnicidae)" },
        { label: "Class", value: "Aves" },
        { label: "Order", value: "Charadriiformes (not a true quail)" },
        { label: "Range", value: "Africa, southern Asia, Australia" },
        { label: "Habitat", value: "Grassland, scrub, crops, dense cover" },
        { label: "Sex roles", value: "Reversed; female courts, male incubates" },
        { label: "Feet", value: "No hind toe (three toes)" },
        { label: "Behaviour", value: "Secretive; reluctant flier" },
      ]}
      relatedLinks={[
        { label: "Painted-snipe Profile", href: "/animals/painted-snipe", description: "Another bird with reversed sex roles" },
        { label: "Tinamou Profile", href: "/animals/tinamou", description: "Another rounded ground-dwelling bird" },
        { label: "Sandgrouse Profile", href: "/animals/sandgrouse", description: "A ground bird of dry open country" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Old World birds in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
