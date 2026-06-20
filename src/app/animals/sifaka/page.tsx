import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sifaka";
const TITLE = "Sifaka — Profile, the 'Dancing' Lemur & Conservation";
const DESC =
  "Explore sifakas (genus Propithecus): large leaping lemurs of Madagascar that 'dance' sideways across open ground — using Verreaux's sifaka as a reference. Many are threatened.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("sifaka"),
});

export default function SifakaPage() {
  return (
    <AnimalProfileLayout
      commonName="Sifaka"
      scientificName="Propithecus verreauxi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Madagascar"]}
      image={getAnimalImage("sifaka") ?? undefined}
      galleryImages={getAnimalGalleryImages("sifaka")}
      sources={ANIMAL_SOURCES.sifaka}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Sifakas (genus <em>Propithecus</em>) are large, striking lemurs of Madagascar,
            known for their powerful leaping and their unforgettable way of crossing open
            ground. Verreaux&apos;s sifaka (<em>Propithecus verreauxi</em>), shown here, has
            soft white fur with dark markings and the long, muscular hind legs typical of
            the group. Like all lemurs, sifakas are primates found nowhere else on Earth.
          </p>
          <p>
            Because their legs are built for vertical clinging and leaping between tree
            trunks, sifakas move awkwardly on the ground — so they cross gaps by bounding
            sideways on two legs with arms raised, a hopping &ldquo;dance&rdquo; that has
            made them famous.
          </p>
          <p>
            <strong>Conservation note:</strong> sifakas are among the world&apos;s most
            threatened primates, with many species Endangered or Critically Endangered due
            to habitat loss. Verify each species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Different sifaka species occupy different Madagascan forests — from the dry,
          spiny forests and deciduous woodland of the south and west (Verreaux&apos;s
          sifaka) to eastern rainforest (other species). All depend on forest with suitable
          trees for leaping, feeding, and sleeping, and their ranges are shrinking as those
          forests are cleared.
        </p>
      }
      diet={
        <p>
          Sifakas are herbivores, feeding on leaves, flowers, fruit, seeds, and bark
          depending on the species and season. As leaf-eaters they have specialised
          digestion to extract nutrients from tough foliage, and they play a part in
          dispersing the seeds of the plants they eat.
        </p>
      }
      behavior={
        <p>
          Sifakas are diurnal (day-active) and live in social groups that defend a
          territory. They are spectacular vertical clingers and leapers, able to spring
          many times their body length between trunks. On the ground, their distinctive
          two-legged sideways &ldquo;dancing&rdquo; hop is a direct result of legs adapted
          for leaping rather than walking. They sunbathe in the morning and communicate
          with calls — the name &ldquo;sifaka&rdquo; comes from a characteristic
          &ldquo;shi-fak&rdquo; alarm call.
        </p>
      }
      humanInteraction={
        <p>
          Sifakas are a beloved symbol of Madagascar and a favourite of ecotourists, but
          they are in serious trouble: deforestation, slash-and-burn agriculture, logging,
          and hunting have pushed many species toward extinction. They generally do poorly
          in captivity, so protecting wild forest is essential. Consult the IUCN Red List
          for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why do sifakas 'dance' across the ground?",
          answer:
            "Their legs are specialised for vertical clinging and leaping between tree trunks, which makes ordinary walking awkward. So when a sifaka has to cross open ground, it bounds sideways on its two hind legs with its arms held out for balance — a hopping motion that looks like dancing and has made sifakas internet-famous.",
        },
        {
          question: "Is a sifaka a lemur?",
          answer:
            "Yes. Sifakas are a type of lemur — primates found only on Madagascar — in the genus Propithecus. They are among the larger lemurs and are especially noted for their leaping ability and their sideways ground-hopping.",
        },
        {
          question: "What do sifakas eat?",
          answer:
            "Sifakas are herbivores, eating leaves, flowers, fruit, seeds, and bark, with the mix varying by species and season. As dedicated leaf-eaters they have specialised digestion for processing tough foliage and help disperse seeds of the plants they feed on.",
        },
        {
          question: "Are sifakas endangered?",
          answer:
            "Many are — sifakas are among the most threatened primates on Earth, with numerous species classed as Endangered or Critically Endangered, chiefly because of deforestation and hunting in Madagascar. They also fare poorly in captivity, so wild habitat protection is key. Current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Propithecus verreauxi (Verreaux's sifaka)" },
        { label: "Class", value: "Mammalia (primate / lemur)" },
        { label: "Diet", value: "Herbivore (leaves, fruit, flowers)" },
        { label: "Signature trait", value: "Leaping; sideways 'dancing' on ground" },
        { label: "Activity", value: "Diurnal; lives in social groups" },
        { label: "Name origin", value: "Its 'shi-fak' alarm call" },
        { label: "Range", value: "Madagascar only" },
        { label: "IUCN Status", value: "Many threatened (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Lemur Profile", href: "/animals/lemur", description: "The wider lemur group" },
        { label: "Aye-Aye Profile", href: "/animals/aye-aye", description: "Another remarkable Madagascan lemur" },
        { label: "Gibbon Profile", href: "/animals/gibbon", description: "Another agile, leaping primate" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
