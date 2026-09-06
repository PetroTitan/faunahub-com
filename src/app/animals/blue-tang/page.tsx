import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/blue-tang";
const TITLE = "Blue Tang — Profile, Scalpel Spine, Reef Habitat & Diet";
const DESC =
  "Explore the blue tang (Paracanthurus hepatus): a vivid Indo-Pacific surgeonfish with a blade-like tail spine and an algae-grazing role on coral reefs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("blue-tang"),
});

export default function BlueTangPage() {
  return (
    <AnimalProfileLayout
      commonName="Blue Tang"
      scientificName="Paracanthurus hepatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Reef Fish","Indo-Pacific"]}
      image={getAnimalImage("blue-tang") ?? undefined}
      galleryImages={getAnimalGalleryImages("blue-tang")}
      sources={ANIMAL_SOURCES["blue-tang"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The blue tang (<em>Paracanthurus hepatus</em>) is a vivid royal-blue reef fish of the Indo-Pacific, marked with a bold black &apos;painter&apos;s palette&apos; pattern along the body and a bright yellow tail. It is the only species in its genus.
        </p>
        <p>
          It is a <strong>surgeonfish</strong>, and the name is literal: near the base of the tail sits a sharp, blade-like spine on each side, hinged so it can be folded flat or flicked out. It is a defensive weapon, and it can cut.
        </p>
        <p>
          Blue tangs are algae grazers, part of the community of herbivorous reef fish whose feeding limits algal growth and helps keep space available for corals. Confusingly, several unrelated fish are also called &apos;blue tang&apos;, including a Caribbean species.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Blue tangs live on coral reefs across the Indo-Pacific, from East Africa through Indonesia and the Philippines to the Great Barrier Reef and Pacific islands. They favour clear, current-swept outer reef slopes with plentiful branching coral, which juveniles in particular use as shelter, darting into the branches when threatened.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Blue tangs are primarily herbivores, grazing algae from reef surfaces, and they also take plankton, especially as juveniles. Their grazing is part of the wider herbivore pressure that keeps fast-growing algae from overwhelming coral — a function that matters increasingly on reefs under stress.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Adults may be seen singly, in pairs or in loose aggregations, sometimes joining mixed shoals of other grazing fish. Juveniles shelter in branching corals. When threatened, a blue tang may lie on its side and play dead, or wedge itself into a crevice and erect its spines to become difficult to extract. The tail spine is erected defensively and handled fish can inflict a cut.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The blue tang became one of the most recognisable reef fish in the world after appearing as a central character in animated film, which drove a marked increase in demand for the species in the aquarium trade. Unlike clownfish, blue tangs have been much harder to breed in captivity, so trade animals have largely been wild-caught — a pressure on reef populations alongside habitat loss and coral decline. This profile is educational and offers no aquarium husbandry or handling guidance; the tail spine can injure. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why are they called surgeonfish?",
          answer:
            "Because of a blade. Surgeonfish carry a sharp, scalpel-like spine on each side of the body near the base of the tail, which folds into a groove and can be flicked outward. It is used in defence and in disputes with other fish, and it is sharp enough to cut a careless hand.",
        },
        {
          question: "What do blue tangs eat?",
          answer:
            "Mainly algae grazed from reef surfaces, plus plankton — especially when they are young. This grazing matters ecologically: herbivorous fish limit fast-growing algae and help keep space available for corals to grow.",
        },
        {
          question: "Is the blue tang the fish from Finding Nemo?",
          answer:
            "The character Dory is a blue tang, and the film's popularity drove a sharp rise in demand for the species in the aquarium trade. That created a real conservation concern, because blue tangs have proved much harder to breed in captivity than clownfish, so trade animals have largely been taken from the wild.",
        },
        {
          question: "Where do blue tangs live?",
          answer:
            "On coral reefs across the Indo-Pacific, from East Africa through Indonesia and the Philippines to the Great Barrier Reef and Pacific islands. They prefer clear, current-swept outer reef slopes with branching coral, which juveniles use as shelter.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Paracanthurus hepatus" },
        { label: "Family", value: "Acanthuridae (surgeonfish)" },
        { label: "Class", value: "Actinopterygii" },
        { label: "Defence", value: "Hinged blade-like spine near the tail" },
        { label: "Diet", value: "Algae grazer; plankton when young" },
        { label: "Ecological role", value: "Herbivore limiting reef algae" },
        { label: "Range", value: "Indo-Pacific coral reefs" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Clownfish Profile", href: "/animals/clownfish" },
        { label: "Moorish Idol Profile", href: "/animals/moorish-idol" },
        { label: "Parrotfish Profile", href: "/animals/parrotfish", description: "Another reef grazer" },
        { label: "Butterflyfish Profile", href: "/animals/butterflyfish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
