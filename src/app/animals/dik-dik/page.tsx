import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dik-dik";
const TITLE = "Dik-dik — Profile of Africa's Tiny Antelope";
const DESC =
  "Meet the dik-dik (Madoqua): a tiny African antelope with huge eyes and a flexible cooling snout, named for its alarm call and famous for living in monogamous pairs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("dik-dik"),
});

export default function DikDikPage() {
  return (
    <AnimalProfileLayout
      commonName="Dik-dik"
      scientificName="Madoqua spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Antelope", "Africa"]}
      image={getAnimalImage("dik-dik") ?? undefined}
      galleryImages={getAnimalGalleryImages("dik-dik")}
      sources={ANIMAL_SOURCES["dik-dik"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Dik-diks (genus <em>Madoqua</em>) are tiny antelopes of eastern and southwestern Africa,
            standing only about 30–40 cm at the shoulder and weighing roughly 3–6 kilograms. They have
            large dark eyes, slender legs, and a soft greyish-brown coat, and only the males carry small,
            spike-like horns.
          </p>
          <p>
            Their most distinctive feature is an elongated, flexible snout. Air drawn over its rich blood
            supply helps the animal lose heat without sweating away precious water — a valuable trick in
            hot, dry country. The name &ldquo;dik-dik&rdquo; comes from the sharp alarm whistle the animals
            make as they bolt for cover.
          </p>
          <p>
            <strong>Note:</strong> there are several dik-dik species; details here describe the group
            broadly, with Kirk&apos;s dik-dik (<em>Madoqua kirkii</em>) as a familiar example.
          </p>
        </>
      }
      habitat={
        <p>
          Dik-diks live in dry bush, scrub, and thicket across parts of eastern Africa (such as Kenya,
          Tanzania, Somalia, and Ethiopia) and southwestern Africa (Namibia and Angola). They favour areas
          with plenty of low cover for hiding and browsing, and they avoid tall open grassland. Well adapted
          to arid conditions, they can meet most of their water needs from their food.
        </p>
      }
      diet={
        <p>
          Dik-diks are selective browsers, nibbling leaves, shoots, buds, fruit, and flowers rather than
          grazing on grass. Their small size lets them pick out the most nutritious plant parts, and the
          moisture in this food allows them to survive with little or no drinking water.
        </p>
      }
      behavior={
        <p>
          Dik-diks typically live in faithful monogamous pairs that share and defend a territory. They mark
          their patch with dung middens and with a sticky secretion from large preorbital (in-front-of-the-
          eye) glands, dabbing it onto twigs. When alarmed they freeze, then dash off in a zig-zag, giving
          the whistling &ldquo;dik-dik&rdquo; call that alerts a mate and other animals to danger. They rely
          on hiding and quick escapes rather than outrunning predators over long distances.
        </p>
      }
      humanInteraction={
        <p>
          Dik-diks are widespread and generally common, though they are hunted in places for meat and
          their skins and can be affected by habitat loss. Most species are not considered globally
          threatened, but status varies between species — consult the IUCN Red List for details on a
          particular dik-dik.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a dik-dik?",
          answer:
            "The name imitates the shrill 'dik-dik' or 'zik-zik' whistle the animal gives when it is startled and runs for cover. The call warns its mate and other nearby animals that a predator is about.",
        },
        {
          question: "What is the dik-dik's long snout for?",
          answer:
            "The elongated, flexible nose helps the dik-dik keep cool. Air passing over the blood-rich lining of the snout carries away body heat, so the animal can cool down without sweating and losing scarce water — handy in its hot, dry habitat.",
        },
        {
          question: "Do dik-diks really mate for life?",
          answer:
            "Dik-diks usually live in long-term monogamous pairs that share a territory, which is unusual among antelopes. The pair marks and defends its area together using dung middens and scent from glands in front of the eyes.",
        },
        {
          question: "How do dik-diks survive without much water?",
          answer:
            "They are selective browsers that get most of their moisture from the leaves, shoots, and fruit they eat, and their cooling snout reduces water loss. As a result, dik-diks can live in dry country with little or no free water to drink.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Madoqua (several species)" },
        { label: "Class", value: "Mammalia" },
        { label: "Size", value: "~30–40 cm tall; ~3–6 kg" },
        { label: "Range", value: "Eastern & southwestern Africa" },
        { label: "Snout", value: "Flexible nose aids cooling, saves water" },
        { label: "Social", value: "Monogamous, territorial pairs" },
        { label: "Name from", value: "Whistling 'dik-dik' alarm call" },
        { label: "Horns", value: "Small spikes, in males only" },
      ]}
      relatedLinks={[
        { label: "Gerenuk Profile", href: "/animals/gerenuk", description: "A long-necked antelope of dry Africa" },
        { label: "Saiga Profile", href: "/animals/saiga", description: "Another antelope with an unusual nose" },
        { label: "Pronghorn Profile", href: "/animals/pronghorn", description: "A small, fast hoofed mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African mammals in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
