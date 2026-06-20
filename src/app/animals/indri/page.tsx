import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/indri";
const TITLE = "Indri — Profile, the Singing Giant Lemur & Conservation";
const DESC =
  "Explore the indri (Indri indri): the largest living lemur, a tail-less leaping primate of Madagascar famous for its haunting whale-like songs. Critically Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("indri"),
});

export default function IndriPage() {
  return (
    <AnimalProfileLayout
      commonName="Indri"
      scientificName="Indri indri"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Madagascar"]}
      image={getAnimalImage("indri") ?? undefined}
      galleryImages={getAnimalGalleryImages("indri")}
      sources={ANIMAL_SOURCES.indri}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The indri (<em>Indri indri</em>) is the largest living lemur — a striking
            black-and-white primate of Madagascar&apos;s eastern rainforests, with a
            teddy-bear face, large ears, long powerful legs, and almost no tail (unusual
            among lemurs). Indris are vertical clingers and leapers, bounding between tree
            trunks, and they live in small family groups.
          </p>
          <p>
            They are most famous for their voices: indri families sing loud, eerie,
            far-carrying songs that ring through the forest canopy, used to space out groups
            and reinforce family bonds.
          </p>
          <p>
            <strong>Conservation note:</strong> the indri is Critically Endangered,
            threatened by deforestation and hunting, and does not survive in captivity.
            Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          The indri lives only in the lowland and montane rainforests of eastern
          Madagascar. It depends on relatively intact forest with tall trees for feeding,
          leaping, and singing, and its range has contracted as those forests have been
          cleared and fragmented.
        </p>
      }
      diet={
        <p>
          Indris are herbivores, feeding mainly on leaves (especially young leaves), along
          with fruit, flowers, and seeds. As leaf specialists they have digestion suited to
          processing foliage, and they help disperse the seeds of forest plants. Their diet
          ties them closely to a diverse, healthy rainforest.
        </p>
      }
      behavior={
        <p>
          Indris are diurnal and live in small, usually monogamous family groups that
          occupy and defend a territory. Their celebrated songs — wailing, sliding notes
          that some compare to whale song — can carry for long distances and help neighbouring
          families keep their distance. Indris move by powerful vertical leaps between trunks
          and, like sifakas, are awkward on the ground. They are central to Malagasy culture
          and feature in local legend.
        </p>
      }
      humanInteraction={
        <p>
          The indri is revered in many Malagasy traditions, which historically helped
          protect it, but it is now Critically Endangered due to rainforest loss from
          logging and slash-and-burn agriculture, plus hunting in some areas. Crucially, the
          indri has never been successfully kept in captivity, so its survival depends
          entirely on protecting wild forest. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "How big is the indri?",
          answer:
            "The indri is the largest living lemur, roughly the size of a young child when sitting upright, and noticeably bigger than most other lemurs. It also stands out for having almost no tail, unlike the long-tailed lemurs many people picture.",
        },
        {
          question: "Why does the indri 'sing'?",
          answer:
            "Indri families produce loud, haunting songs — wailing, sliding notes that carry far through the forest. These songs help space out neighbouring family groups (a kind of long-distance territory announcement) and strengthen bonds within a group. The eerie sound is one of the most distinctive in any rainforest.",
        },
        {
          question: "Can indris be kept in zoos?",
          answer:
            "No. The indri has never been successfully maintained in captivity — it has specialised dietary and habitat needs that have not been met outside the wild. This makes protecting its natural rainforest the only viable way to conserve the species, which is Critically Endangered.",
        },
        {
          question: "What do indris eat?",
          answer:
            "Indris are herbivores that feed mainly on leaves, especially young ones, plus fruit, flowers, and seeds. As leaf-eaters they rely on a diverse, healthy forest and help disperse seeds of the plants they consume.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Indri indri" },
        { label: "Class", value: "Mammalia (primate / lemur)" },
        { label: "Claim to fame", value: "Largest living lemur; near tail-less" },
        { label: "Diet", value: "Herbivore (mainly young leaves)" },
        { label: "Signature trait", value: "Loud, far-carrying songs" },
        { label: "Movement", value: "Vertical clinger & leaper" },
        { label: "Range", value: "Eastern Madagascar rainforest" },
        { label: "IUCN Status", value: "Critically Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Sifaka Profile", href: "/animals/sifaka", description: "A related leaping lemur" },
        { label: "Aye-Aye Profile", href: "/animals/aye-aye", description: "Another remarkable Madagascan lemur" },
        { label: "Lemur Profile", href: "/animals/lemur", description: "The wider lemur group" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
