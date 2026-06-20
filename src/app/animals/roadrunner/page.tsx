import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/roadrunner";
const TITLE = "Roadrunner — Profile, Speed, Diet & Desert Life";
const DESC =
  "Explore the greater roadrunner (Geococcyx californianus): a fast-running, ground-dwelling cuckoo of North American deserts that sprints after lizards, snakes, and insects.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("roadrunner"),
});

export default function RoadrunnerPage() {
  return (
    <AnimalProfileLayout
      commonName="Roadrunner"
      scientificName="Geococcyx californianus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Cuckoo family", "Desert"]}
      image={getAnimalImage("roadrunner") ?? undefined}
      galleryImages={getAnimalGalleryImages("roadrunner")}
      sources={ANIMAL_SOURCES.roadrunner}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The greater roadrunner (<em>Geococcyx californianus</em>) is a distinctive
            ground-dwelling bird of the deserts and scrublands of the southwestern United
            States and Mexico. A member of the cuckoo family, it is built for life on the
            ground: a streaked brown body, a shaggy crest, a long tail, and strong legs
            that let it sprint after prey. Roadrunners can fly, but they spend most of
            their time running.
          </p>
          <p>
            Famous in cartoons, the real roadrunner is an agile desert predator, fast
            enough to run down lizards and even snakes.
          </p>
          <p>
            <strong>Conservation note:</strong> the greater roadrunner is widespread and
            generally not of conservation concern, though it depends on suitable
            scrub-desert habitat. Verify current status at authoritative bird sources.
          </p>
        </>
      }
      habitat={
        <p>
          Roadrunners live in open, arid, and semi-arid country — deserts, scrubland,
          grassland with brush, and the edges of developed areas — across the southwestern
          United States and much of Mexico. They favour habitats with open ground for
          running and scattered cover for shelter and nesting.
        </p>
      }
      diet={
        <p>
          Roadrunners are carnivores that eat a wide range of prey: insects, scorpions,
          spiders, lizards, small snakes, rodents, and small birds, plus some fruit and
          seeds at times. They run down or ambush prey and are known for tackling
          dangerous animals, including venomous ones, with quick, well-aimed strikes.
        </p>
      }
      behavior={
        <p>
          Roadrunners are superb runners, capable of fast sprints across open ground, and
          they rely far more on running than flying. To cope with cold desert nights and
          conserve energy, they can lower their body temperature and then warm up in the
          morning sun, often exposing dark skin on the back to absorb heat. They are
          mostly seen alone or in pairs and are agile, alert hunters.
        </p>
      }
      humanInteraction={
        <p>
          The roadrunner is a cultural icon of the American Southwest, celebrated in
          folklore and popular media, and is the state bird of New Mexico. It is
          widespread and adaptable, sometimes seen near homes and roadsides. For current
          status, consult authoritative bird sources.
        </p>
      }
      faqs={[
        {
          question: "Can roadrunners fly?",
          answer:
            "Yes, but they rarely do for long. Roadrunners can fly short distances — for example to reach a perch or escape danger — but they are built for running and spend most of their time on the ground, where they are fast and agile.",
        },
        {
          question: "How fast is a roadrunner?",
          answer:
            "Roadrunners are among the fastest running birds that can also fly, capable of quick sprints across open desert. While not the cartoon blur, their real running speed is impressive and lets them chase down lizards and other quick prey.",
        },
        {
          question: "What do roadrunners eat?",
          answer:
            "They are carnivores with a varied diet: insects, scorpions, spiders, lizards, small snakes, rodents, and small birds, plus occasional fruit and seeds. Roadrunners are known for taking on dangerous prey, including venomous animals, with fast, accurate strikes.",
        },
        {
          question: "How do roadrunners survive cold desert nights?",
          answer:
            "To save energy on cold nights, a roadrunner can let its body temperature drop into a torpor-like state, then warm back up in the morning sun — often fluffing up and exposing patches of dark skin on its back to absorb solar heat efficiently.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Geococcyx californianus" },
        { label: "Class", value: "Aves" },
        { label: "Family", value: "Cuculidae (cuckoos)" },
        { label: "Diet", value: "Carnivore (insects to small snakes)" },
        { label: "Signature trait", value: "Fast runner; rarely flies" },
        { label: "Adaptation", value: "Sun-basks; can lower body temp at night" },
        { label: "Habitat", value: "Deserts & scrub of SW North America" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Cuckoo relatives — Birds", href: "/animal-encyclopedia/birds", description: "Browse the bird encyclopedia" },
        { label: "Pronghorn Profile", href: "/animals/pronghorn", description: "A fellow fast desert/grassland animal" },
        { label: "Rattlesnake Profile", href: "/animals/rattlesnake", description: "Both desert dwellers; occasional prey" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American desert fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
