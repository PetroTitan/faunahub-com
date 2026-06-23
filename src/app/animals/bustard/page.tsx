import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bustard";
const TITLE = "Bustard — Profile, the Heavyweight Ground Birds of Open Plains";
const DESC =
  "Explore bustards (family Otididae): large, stately ground birds of open grasslands — among the heaviest flying birds — whose males perform spectacular puffed-up courtship displays.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("bustard"),
});

export default function BustardPage() {
  return (
    <AnimalProfileLayout
      commonName="Bustard"
      scientificName="family Otididae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Grassland", "Record-holder"]}
      image={getAnimalImage("bustard") ?? undefined}
      galleryImages={getAnimalGalleryImages("bustard")}
      sources={ANIMAL_SOURCES.bustard}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Bustards (family Otididae) are large, long-legged, stately ground birds of open country in the Old
            World — Africa, Europe, Asia, and Australia. Built for walking rather than perching, they stride
            across grasslands, steppe, and semi-desert on sturdy legs, with cryptic brown, grey, and white
            plumage that blends into the landscape. The biggest species, such as the kori bustard
            (<em>Ardeotis kori</em>, shown here) and the great bustard, are among the heaviest flying birds in
            the world.
          </p>
          <p>
            Despite their bulk, bustards can fly strongly, but they spend most of their time on the ground.
            They are best known for the extravagant courtship displays of the males, which transform their
            appearance to win mates.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;bustard&rdquo; covers a family of species; details here use the kori
            bustard as a reference. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Bustards live in open habitats across Africa, southern Europe, Asia, and Australia — grasslands,
          savanna, steppe, farmland, and semi-desert. They favour wide, flat or gently rolling country with
          low vegetation and good visibility, where their camouflage and wariness help them avoid predators.
          Many are tied to natural grassland and have declined as those habitats are converted to intensive
          farming.
        </p>
      }
      diet={
        <p>
          Bustards are omnivores, eating a broad mix of plant material — seeds, leaves, shoots, flowers, and
          fruit — together with insects (such as locusts and beetles) and other small animals like lizards
          and rodents. They forage by walking steadily across open ground, picking up food as they go, and
          large bustards can take sizeable insect and small-vertebrate prey.
        </p>
      }
      behavior={
        <p>
          Bustards are ground-dwellers that walk and run rather than perch, taking to the air with powerful,
          deliberate wingbeats when needed. They are generally wary and well camouflaged. Their most famous
          behaviour is male courtship display: in the breeding season, males of many species inflate throat
          or neck pouches, raise and fan their feathers, and contort into puffed-up, often startlingly white
          shapes to attract females, sometimes gathering to display at communal sites. Females typically nest
          on the ground and raise the young alone. The largest bustards are heavy enough to be near the upper
          weight limit for flying birds.
        </p>
      }
      humanInteraction={
        <p>
          Many bustards are of conservation concern: as birds of open grassland and steppe, they have been
          hit hard by habitat loss to agriculture, hunting, collisions with power lines and fences, and
          disturbance, and several species — including the great bustard and various others — are threatened.
          Protecting grasslands and reducing hazards are central to their conservation, and some species are
          the focus of major recovery efforts. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are bustards really among the heaviest flying birds?",
          answer:
            "Yes. The largest bustards — such as the kori bustard and the great bustard — are among the heaviest birds still capable of flight, with big males reaching weights near the practical upper limit for flying birds. Despite this bulk they can fly strongly, though they spend most of their time walking on the ground.",
        },
        {
          question: "How do male bustards attract mates?",
          answer:
            "With dramatic courtship displays. In the breeding season, male bustards inflate throat or neck pouches, raise and fan their plumage, and transform into puffed-up, often strikingly white shapes to impress females; in some species males gather at communal display grounds. It's one of the most spectacular transformations in the bird world.",
        },
        {
          question: "Where do bustards live, and why are many threatened?",
          answer:
            "Bustards inhabit open country — grasslands, steppe, savanna, farmland, and semi-desert — across Africa, southern Europe, Asia, and Australia. Many are threatened because these open habitats have been widely converted to intensive agriculture, and the birds also suffer from hunting, disturbance, and collisions with power lines and fences. Several species are now a serious conservation focus.",
        },
        {
          question: "What do bustards eat?",
          answer:
            "They're omnivores with a varied diet: seeds, leaves, shoots, flowers, and fruit, plus insects like locusts and beetles and small animals such as lizards and rodents. Bustards forage by walking steadily across open ground and picking up whatever food they encounter, and the big species can handle sizeable prey.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Otididae (bustards)" },
        { label: "Reference species", value: "Ardeotis kori (kori bustard)" },
        { label: "Class", value: "Aves" },
        { label: "Claim to fame", value: "Among the heaviest flying birds" },
        { label: "Lifestyle", value: "Ground-dwelling walkers of open country" },
        { label: "Display", value: "Males puff up & fan plumage to court" },
        { label: "Diet", value: "Omnivore (plants, insects, small animals)" },
        { label: "Status", value: "Many of conservation concern (verify)" },
      ]}
      relatedLinks={[
        { label: "Ostrich Profile", href: "/animals/ostrich", description: "Another large open-country bird" },
        { label: "Secretary Bird Profile", href: "/animals/secretary-bird", description: "Another striding grassland bird" },
        { label: "Crane relatives — Stork Profile", href: "/animals/stork", description: "Another large long-legged bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Grassland fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
