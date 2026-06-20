import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tasmanian-devil";
const TITLE = "Tasmanian Devil — Profile, Diet, Behavior & Conservation";
const DESC =
  "Explore the Tasmanian devil (Sarcophilus harrisii): the world's largest carnivorous marsupial — a powerful scavenger of Tasmania threatened by a contagious facial cancer.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("tasmanian-devil"),
});

export default function TasmanianDevilPage() {
  return (
    <AnimalProfileLayout
      commonName="Tasmanian Devil"
      scientificName="Sarcophilus harrisii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Carnivore"]}
      image={getAnimalImage("tasmanian-devil") ?? undefined}
      galleryImages={getAnimalGalleryImages("tasmanian-devil")}
      sources={ANIMAL_SOURCES["tasmanian-devil"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The Tasmanian devil (<em>Sarcophilus harrisii</em>) is the world&apos;s largest
            living carnivorous marsupial — a stocky, muscular animal about the size of a
            small dog, with black fur, often a white band across the chest, and
            disproportionately powerful jaws. Now found only on the Australian island of
            Tasmania, it is famous for its loud screeches, its strong bite, and its role
            as the island&apos;s top mammalian scavenger.
          </p>
          <p>
            Despite a fierce reputation (and a famous cartoon namesake), the devil is
            mainly a scavenger, and its dramatic gaping and screaming are largely bluff and
            stress signals rather than true aggression.
          </p>
          <p>
            <strong>Conservation note:</strong> the Tasmanian devil is Endangered, hit hard
            by Devil Facial Tumour Disease (DFTD), a rare contagious cancer. Verify current
            status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Tasmanian devils are found across the island state of Tasmania, in a variety of
          habitats including forests, woodlands, coastal scrub, and agricultural areas.
          They shelter by day in dens — hollow logs, burrows, caves, or dense vegetation —
          and range widely at night in search of food. They once lived on mainland
          Australia but disappeared there long ago.
        </p>
      }
      diet={
        <p>
          Devils are carnivores and, above all, scavengers, feeding heavily on carrion
          such as dead wallabies, wombats, livestock, and roadkill. They also hunt small
          prey. With exceptionally strong jaws and teeth, they consume almost the entire
          carcass — flesh, fur, and bone — and so play an important role in cleaning up the
          landscape and limiting the spread of disease from carcasses.
        </p>
      }
      behavior={
        <p>
          Tasmanian devils are mostly solitary and nocturnal, though many may gather
          noisily at a large carcass, where screeching, gaping, and posturing sort out who
          eats — much of it ritualised display rather than serious fighting. The wide,
          open-mouthed gape that looks so threatening is often a sign of fear or stress.
          Females raise their young (called joeys) in a backward-opening pouch, typical of
          this group of marsupials.
        </p>
      }
      humanInteraction={
        <p>
          The Tasmanian devil is an icon of Tasmania, but it faces a serious threat from
          Devil Facial Tumour Disease, a transmissible cancer spread through biting that
          has sharply reduced populations since the 1990s. Conservation efforts include
          disease research, insurance populations, and carefully managed reintroductions.
          Road deaths are an additional pressure. Consult the IUCN Red List and Tasmanian
          wildlife authorities for current status.
        </p>
      }
      faqs={[
        {
          question: "Are Tasmanian devils as fierce as their reputation?",
          answer:
            "Less than you might think. Devils are powerful and can be noisy and dramatic, but they are mainly scavengers, and much of their screeching and wide gaping is bluff or a sign of stress rather than real aggression. The famous cartoon \"Taz\" greatly exaggerates their behaviour.",
        },
        {
          question: "Why do Tasmanian devils open their mouths so wide?",
          answer:
            "That alarming wide-open gape usually signals fear, uncertainty, or stress, not an intent to attack. Devils use a range of vocal and visual displays — especially around shared carcasses — to avoid actual fighting, so the dramatic mouth-opening is largely communication.",
        },
        {
          question: "What is Devil Facial Tumour Disease?",
          answer:
            "It is a rare contagious cancer, spread when devils bite one another, that causes tumours around the face and mouth and has killed a large share of the wild population since the 1990s. It is one of the main reasons the species is Endangered, and a major focus of conservation and research.",
        },
        {
          question: "What do Tasmanian devils eat?",
          answer:
            "They are carnivores and dedicated scavengers, eating carrion such as dead wallabies, wombats, livestock, and roadkill, plus some live small prey. Their immensely strong jaws let them consume nearly the whole carcass — including bone — which helps clean up the environment.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Sarcophilus harrisii" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Claim to fame", value: "Largest carnivorous marsupial" },
        { label: "Diet", value: "Carnivore/scavenger (eats bone too)" },
        { label: "Range", value: "Tasmania, Australia" },
        { label: "Activity", value: "Mostly nocturnal & solitary" },
        { label: "Key threat", value: "Devil Facial Tumour Disease" },
        { label: "IUCN Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Quoll Profile", href: "/animals/quoll", description: "A smaller marsupial carnivore relative" },
        { label: "Numbat Profile", href: "/animals/numbat", description: "Another Australian marsupial" },
        { label: "Koala Profile", href: "/animals/koala", description: "An iconic Australian marsupial" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
