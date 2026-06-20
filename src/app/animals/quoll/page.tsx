import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/quoll";
const TITLE = "Quoll — Profile, Spotted Marsupial Carnivore & Diet";
const DESC =
  "Explore quolls (genus Dasyurus): spotted, cat-sized marsupial carnivores of Australia and New Guinea — using the spotted-tailed quoll. Several species are threatened.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("quoll"),
});

export default function QuollPage() {
  return (
    <AnimalProfileLayout
      commonName="Quoll"
      scientificName="Dasyurus maculatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Carnivore"]}
      image={getAnimalImage("quoll") ?? undefined}
      galleryImages={getAnimalGalleryImages("quoll")}
      sources={ANIMAL_SOURCES.quoll}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Quolls (genus <em>Dasyurus</em>) are spotted, cat-sized marsupial carnivores of
            Australia and New Guinea. They have pointed snouts, sharp teeth, and brown-to-black
            fur covered in distinctive white spots. The spotted-tailed quoll
            (<em>Dasyurus maculatus</em>), shown here, is the largest of the group and the
            only one whose spots extend onto the tail. Quolls are relatives of the
            Tasmanian devil within the same family of marsupial carnivores (Dasyuridae).
          </p>
          <p>
            Agile and largely nocturnal, quolls are important small predators in their
            ecosystems, but several species have declined and now need conservation help.
          </p>
          <p>
            <strong>Conservation note:</strong> quoll species vary in status, and some are
            threatened by habitat loss, introduced predators, and poisoning from invasive
            cane toads. Verify each species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Different quoll species occupy different habitats across Australia and New Guinea,
          including rainforest, eucalypt forest, woodland, heath, and rocky areas. The
          spotted-tailed quoll favours forests with plenty of cover and den sites such as
          hollow logs, rock crevices, and burrows. Quolls generally need reasonably intact
          habitat with enough prey.
        </p>
      }
      diet={
        <p>
          Quolls are carnivores. Smaller species feed largely on insects and other
          invertebrates plus small vertebrates, while the large spotted-tailed quoll takes
          sizeable prey such as birds, reptiles, and mammals up to the size of small
          wallabies and possums, and also scavenges carrion. They are capable, opportunistic
          hunters.
        </p>
      }
      behavior={
        <p>
          Quolls are mostly solitary and nocturnal, sheltering by day in dens and hunting
          on the ground and in trees at night; the spotted-tailed quoll is a particularly
          good climber. Like other marsupials, females raise their young in or attached to a
          pouch area. Quolls use shared latrine sites to communicate, and they can travel
          considerable distances within their home ranges.
        </p>
      }
      humanInteraction={
        <p>
          Quolls have suffered from European settlement of Australia, through habitat
          clearing, introduced predators (foxes and cats), persecution, and — for some —
          fatal poisoning when they bite invasive cane toads. Several species are now
          threatened and are the focus of conservation programs, including predator control
          and reintroductions. Consult the IUCN Red List and Australian authorities for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a quoll related to the Tasmanian devil?",
          answer:
            "Yes. Quolls and the Tasmanian devil belong to the same family of carnivorous marsupials, the Dasyuridae. Quolls are like smaller, spotted cousins of the devil, sharing a meat-eating lifestyle but generally taking smaller prey.",
        },
        {
          question: "What is special about the spotted-tailed quoll?",
          answer:
            "It is the largest quoll and the only one with spots that continue onto the tail (others have plain tails). It is also a strong climber and a capable predator, able to tackle relatively large prey such as possums, birds, and reptiles, as well as scavenging.",
        },
        {
          question: "Why are some quolls endangered?",
          answer:
            "Quolls have declined because of habitat loss, introduced predators like foxes and cats, persecution, and, for several species, deadly poisoning when they attack invasive cane toads. Status varies by species, so it should be checked against current IUCN Red List assessments.",
        },
        {
          question: "What do quolls eat?",
          answer:
            "Quolls are carnivores. Smaller species eat mostly insects and small animals, while the large spotted-tailed quoll hunts birds, reptiles, and mammals up to around the size of small wallabies and possums, and will also scavenge carrion.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Dasyurus (quolls)" },
        { label: "Reference species", value: "Dasyurus maculatus (spotted-tailed quoll)" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Family", value: "Dasyuridae (with Tasmanian devil)" },
        { label: "Diet", value: "Carnivore (insects to small mammals)" },
        { label: "Markings", value: "White spots; tail spotted in D. maculatus" },
        { label: "Range", value: "Australia & New Guinea" },
        { label: "Status", value: "Several threatened (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Tasmanian Devil Profile", href: "/animals/tasmanian-devil", description: "Its larger relative" },
        { label: "Numbat Profile", href: "/animals/numbat", description: "Another dasyurid-area marsupial" },
        { label: "Bilby Profile", href: "/animals/bilby", description: "Another threatened Australian marsupial" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
