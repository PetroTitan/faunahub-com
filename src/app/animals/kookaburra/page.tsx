import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kookaburra";
const TITLE = "Kookaburra — Profile, Habitat, Diet & Call";
const DESC =
  "Explore the kookaburra (genus Dacelo): large Australasian kingfishers famous for their loud, laughing call, with the laughing kookaburra as the best-known species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("kookaburra"),
});

export default function KookaburraPage() {
  return (
    <AnimalProfileLayout
      commonName="Kookaburra"
      scientificName="genus Dacelo"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Kingfisher", "Carnivore"]}
      image={getAnimalImage("kookaburra") ?? undefined}
      galleryImages={getAnimalGalleryImages("kookaburra")}
      sources={ANIMAL_SOURCES.kookaburra}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Kookaburras are large, stocky kingfishers of the genus <em>Dacelo</em>,
            native to Australia and New Guinea. They are best known for their loud,
            cackling call that sounds remarkably like human laughter. The animal
            shown here is the laughing kookaburra (<em>Dacelo novaeguineae</em>),
            the largest and most familiar species.
          </p>
          <p>
            Unlike the fishing kingfishers, kookaburras are woodland birds that hunt
            on land, taking insects, reptiles, and other small animals. They are an
            iconic part of the Australian soundscape.
          </p>
          <p>
            <strong>Conservation note:</strong> the laughing kookaburra is
            widespread and common across its range and is not of conservation
            concern; other kookaburra species vary. Verify specifics at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Laughing kookaburras live in open woodland, dry forest, parks, and
          gardens across eastern and southwestern Australia, and have been
          introduced to some other areas. They favour habitats with trees for
          perching and nesting and open ground for hunting.
        </p>
      }
      diet={
        <p>
          Kookaburras are carnivores that hunt from a perch, dropping onto prey on
          the ground. They eat insects, worms, lizards, snakes, frogs, rodents, and
          other small animals, often striking prey against a branch before
          swallowing it. They are famed for tackling sizeable prey for their size.
        </p>
      }
      behavior={
        <p>
          Kookaburras are social and often live in family groups that defend a
          territory together, with older offspring helping to raise new young. Their
          territorial &ldquo;laughing&rdquo; chorus, given especially at dawn and
          dusk, advertises the group&apos;s presence. They are sedentary, staying in
          the same area year-round.
        </p>
      }
      humanInteraction={
        <p>
          Kookaburras are familiar around Australian towns and gardens and are a
          cultural icon. Feeding them human food is discouraged because it is poor
          for their health and alters natural behaviour. The laughing kookaburra
          remains widespread; for current status, consult authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Is a kookaburra a kingfisher?",
          answer:
            "Yes. Kookaburras are large members of the kingfisher family (Alcedinidae). Unlike the famous fishing kingfishers, however, they are woodland birds that hunt prey on land rather than diving for fish.",
        },
        {
          question: "Why do kookaburras laugh?",
          answer:
            "The famous laughing call is mainly territorial. Family groups use the loud, cackling chorus — often at dawn and dusk — to advertise and defend their territory to neighbouring groups, rather than out of any kind of amusement.",
        },
        {
          question: "What do kookaburras eat?",
          answer:
            "Kookaburras are carnivores that eat insects, worms, lizards, snakes, frogs, and small mammals. They hunt from a perch, swoop down onto prey, and often beat larger prey against a branch before eating it.",
        },
        {
          question: "Do kookaburras live in family groups?",
          answer:
            "Yes. Laughing kookaburras are often cooperative breeders, living in family groups in which older offspring help defend the territory and care for younger chicks.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Dacelo" },
        { label: "Reference species", value: "Dacelo novaeguineae" },
        { label: "Class", value: "Aves" },
        { label: "Family", value: "Alcedinidae (kingfishers)" },
        { label: "Diet", value: "Carnivore (land prey)" },
        { label: "Famous for", value: "Loud “laughing” call" },
        { label: "Habitat", value: "Open woodland, forest, gardens" },
        { label: "Range", value: "Australia & New Guinea" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "The wider kingfisher family" },
        { label: "Emu Profile", href: "/animals/emu", description: "Another iconic Australian bird" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "A powerful Australasian bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
