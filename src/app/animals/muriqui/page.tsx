import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/muriqui";
const TITLE = "Muriqui — Profile, the Peaceful 'Hippie Monkey' & Conservation";
const DESC =
  "Explore muriquis (genus Brachyteles): the largest monkeys in the Americas — gentle, egalitarian 'woolly spider monkeys' of Brazil's Atlantic Forest. Critically Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("muriqui"),
});

export default function MuriquiPage() {
  return (
    <AnimalProfileLayout
      commonName="Muriqui"
      scientificName="Brachyteles arachnoides"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Atlantic Forest"]}
      image={getAnimalImage("muriqui") ?? undefined}
      galleryImages={getAnimalGalleryImages("muriqui")}
      sources={ANIMAL_SOURCES.muriqui}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The muriqui (genus <em>Brachyteles</em>) is the largest monkey in the Americas —
            a big, woolly-coated primate of Brazil&apos;s Atlantic Forest, sometimes called
            the &ldquo;woolly spider monkey&rdquo; because it combines the dense fur of a
            woolly monkey with the long limbs and prehensile tail of a spider monkey. The
            southern muriqui (<em>Brachyteles arachnoides</em>) is shown here. Muriquis hang
            and swing through the canopy on long arms and a powerful gripping tail.
          </p>
          <p>
            Muriquis are famous for their unusually peaceful, egalitarian society — they show
            very little aggression and resolve tensions through tolerance and embracing
            rather than fighting, which has earned them the nickname &ldquo;hippie
            monkeys.&rdquo;
          </p>
          <p>
            <strong>Conservation note:</strong> muriquis are among the most endangered
            primates on Earth — both species are Critically Endangered, reduced to small
            populations in fragments of Atlantic Forest. Verify current status at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Muriquis live only in the Atlantic Forest of southeastern Brazil — one of the
          world&apos;s most heavily cleared and fragmented biomes. They depend on patches of
          relatively intact forest with tall trees for feeding and travel, and surviving
          populations are scattered across isolated reserves and forest remnants.
        </p>
      }
      diet={
        <p>
          Muriquis are folivore–frugivores, eating large amounts of leaves along with fruit,
          flowers, seeds, and other plant parts; the balance shifts with the seasons. As big
          plant-eaters ranging through the canopy, they disperse seeds and help shape their
          forest. They sometimes eat particular plants thought to have medicinal or other
          effects, a topic of ongoing study.
        </p>
      }
      behavior={
        <p>
          Muriqui society stands out for its peacefulness. Groups are notably tolerant and
          egalitarian, with little of the dominance fighting seen in many primates; males do
          not battle aggressively over mates, and tense moments are often defused by
          embracing one another. They move through the canopy by climbing and by swinging on
          long arms and a prehensile tail. This gentle, cooperative social style makes them
          remarkable among monkeys and a favourite example of non-aggressive primate life.
        </p>
      }
      humanInteraction={
        <p>
          The muriqui is a flagship for the conservation of the Atlantic Forest, one of the
          most threatened ecosystems anywhere. Centuries of forest clearance and hunting have
          left both species Critically Endangered, surviving only in fragments. Intensive
          conservation — protected reserves, monitoring, habitat restoration and connection,
          and careful management of tiny populations — is working to save them. Consult the
          IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the muriqui called a 'woolly spider monkey'?",
          answer:
            "Because it blends features of two relatives: the thick, woolly fur of woolly monkeys and the long limbs and strong prehensile tail of spider monkeys. This mix gives the muriqui both a dense coat and an acrobatic, canopy-swinging body, and inspired the name 'woolly spider monkey.'",
        },
        {
          question: "Why are muriquis called 'hippie monkeys'?",
          answer:
            "Because of their famously peaceful, egalitarian society. Muriquis show very little aggression, males don't fight fiercely over mates, and they often defuse tension by embracing rather than threatening one another. This gentle, cooperative behaviour led to the affectionate nickname 'hippie monkeys.'",
        },
        {
          question: "How endangered are muriquis?",
          answer:
            "Critically — both muriqui species are among the most endangered primates in the world, reduced to small, scattered populations in the heavily destroyed Atlantic Forest of Brazil. Forest clearance and hunting drove the decline, and they now depend on intensive conservation. Current status should be checked against the IUCN Red List.",
        },
        {
          question: "What do muriquis eat?",
          answer:
            "Muriquis eat a mix of leaves and fruit, along with flowers, seeds, and other plant parts, with the balance changing through the seasons. As large canopy plant-eaters, they help disperse seeds, and they are studied for eating certain plants that may have medicinal effects.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Brachyteles arachnoides (southern muriqui)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Claim to fame", value: "Largest monkey in the Americas" },
        { label: "Nickname", value: "'Woolly spider monkey' / 'hippie monkey'" },
        { label: "Society", value: "Peaceful & egalitarian (low aggression)" },
        { label: "Diet", value: "Leaves & fruit (folivore–frugivore)" },
        { label: "Range", value: "Atlantic Forest, SE Brazil" },
        { label: "IUCN Status", value: "Critically Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Woolly Monkey Profile", href: "/animals/woolly-monkey", description: "A close woolly relative" },
        { label: "Spider Monkey Profile", href: "/animals/spider-monkey", description: "Its other namesake relative" },
        { label: "Tamarin Profile", href: "/animals/tamarin", description: "Another Atlantic Forest primate" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
