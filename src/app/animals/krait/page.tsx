import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/krait";
const TITLE = "Krait — Profile, Venom, Night Behavior & Safety";
const DESC =
  "Explore kraits (genus Bungarus): highly venomous, mostly nocturnal Asian snakes — using the banded krait. An educational profile that is not first-aid or medical advice.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("krait"),
});

export default function KraitPage() {
  return (
    <AnimalProfileLayout
      commonName="Krait"
      scientificName="Bungarus fasciatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Venomous"]}
      image={getAnimalImage("krait") ?? undefined}
      galleryImages={getAnimalGalleryImages("krait")}
      sources={ANIMAL_SOURCES.krait}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Kraits (genus <em>Bungarus</em>) are highly venomous snakes of South and
            Southeast Asia, members of the cobra family (Elapidae). The banded krait
            (<em>Bungarus fasciatus</em>), shown here, is a striking species ringed with
            bold black-and-yellow bands and with a distinctive triangular cross-section to
            its body (a raised ridge along the spine). Kraits are slender, smooth-scaled,
            and mostly active at night.
          </p>
          <p>
            Kraits are generally shy and placid by day — often reluctant even to bite when
            disturbed in daylight — but they are alert and dangerous at night, and their
            venom is potent.
          </p>
          <p>
            <strong>Safety note:</strong> this is a general educational profile, not
            first-aid or medical guidance. Kraits are highly venomous and should never be
            handled or approached; for any snakebite, seek professional medical care
            immediately.
          </p>
        </>
      }
      habitat={
        <p>
          Kraits live across much of South and Southeast Asia, from India and Sri Lanka
          through China and into the Indonesian and Indochinese region, depending on the
          species. They favour lowland habitats including forests, fields, scrub, and areas
          near water and human settlements, often sheltering in burrows, termite mounds, or
          debris by day.
        </p>
      }
      diet={
        <p>
          Kraits are carnivores that prey heavily on other snakes — including other kraits —
          as well as on lizards, frogs, and small rodents. The banded krait is a notable
          snake-eater. Kraits hunt mainly at night, using their potent venom to quickly
          subdue prey before swallowing it.
        </p>
      }
      behavior={
        <p>
          Kraits are mostly nocturnal and show a marked change in temperament between day and
          night: by day they are typically sluggish and very reluctant to bite, often
          hiding the head under coils, but after dark they become active and far more
          defensive. Their venom is a powerful neurotoxin. A particular danger arises when
          kraits enter dwellings at night and bite sleeping people, sometimes with little
          pain at first — which is one reason krait bites are taken extremely seriously in
          their range. Kraits otherwise avoid confrontation when they can.
        </p>
      }
      humanInteraction={
        <p>
          Kraits are among the medically most important venomous snakes in Asia, so the key
          message is simple: never handle, corner, or attempt to kill them, and take care at
          night in areas where they occur (for example, sleeping under a properly tucked bed
          net off the floor is widely advised). Where snakes and people overlap, awareness
          and professional snake removal reduce risk; ecologically, kraits help control other
          snakes and rodents. Consult authoritative sources and local health services for
          guidance.
        </p>
      }
      faqs={[
        {
          question: "Are kraits dangerous?",
          answer:
            "Yes — kraits are highly venomous, with a potent neurotoxic venom, and are among the most medically important snakes in Asia. That said, they are generally shy and, by day, often very reluctant to bite. The greatest danger comes at night, when they are active and may bite people who disturb them, sometimes while sleeping. They should never be handled.",
        },
        {
          question: "Why are kraits more dangerous at night?",
          answer:
            "Kraits are mostly nocturnal. By day they tend to be sluggish and avoid biting, but at night they become active and more defensive. A particular concern is that kraits can enter homes after dark and bite sleeping people — sometimes with little initial pain — which is why krait bites are treated very seriously in their range.",
        },
        {
          question: "What do kraits eat?",
          answer:
            "Kraits are carnivores that often specialise in eating other snakes (including other kraits), along with lizards, frogs, and small rodents. The banded krait in particular is a well-known snake-eater. They hunt mostly at night, using venom to subdue prey.",
        },
        {
          question: "What should I do about a krait?",
          answer:
            "Keep well away and never try to handle, corner, or kill it — that is when bites happen. In areas where kraits live, take precautions at night, such as sleeping off the floor under a properly secured bed net. This profile is educational only; for any snakebite, seek immediate professional medical care.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Bungarus (kraits)" },
        { label: "Reference species", value: "Bungarus fasciatus (banded krait)" },
        { label: "Family", value: "Elapidae (with cobras)" },
        { label: "Class", value: "Reptilia (snake)" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Diet", value: "Carnivore (often other snakes)" },
        { label: "Venom", value: "Potent neurotoxin — do not approach" },
        { label: "Range", value: "South & Southeast Asia" },
      ]}
      relatedLinks={[
        { label: "Cobra Profile", href: "/animals/cobra", description: "A close relative in the same family" },
        { label: "Mamba Profile", href: "/animals/mamba", description: "Another fast, venomous elapid" },
        { label: "Viper Profile", href: "/animals/viper", description: "A venomous snake of a different family" },
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a group" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
