import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Vulture — Profile, Habitat, Diet & Behavior";
const description =
  "Vultures are scavenging birds vital to ecosystems. A group-level overview using the turkey vulture as a reference, distinguishing New World and Old World vultures.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/vulture",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("vulture"),
});

export default function VulturePage() {
  return (
    <AnimalProfileLayout
      commonName="Vulture"
      pageTitle={title}
      description={description}
      path="/animals/vulture"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Scavenger", "Wild"]}
      image={getAnimalImage("vulture") ?? undefined}
      galleryImages={getAnimalGalleryImages("vulture")}
      factsHeaderNote="“Vulture” covers two unrelated groups: New World vultures (the Americas, such as the turkey vulture shown here) and Old World vultures (Europe, Asia, Africa). They look similar through convergent evolution but are not closely related."
      overview={
        <>
          <p>
            Vultures are large scavenging birds that feed mainly on carrion.
            Confusingly, two unrelated groups are both called &quot;vulture&quot;:
            the New World vultures of the Americas (such as the turkey vulture,
            <em> Cathartes aura</em>, used here as a reference) and the Old World
            vultures of Europe, Asia, and Africa. They resemble each other
            through convergent evolution — adapting to similar scavenging
            lifestyles — but are not close relatives.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Vultures occur across much of the world in open and semi-open
            country — grasslands, deserts, mountains, and farmland — where they
            can find carcasses and ride rising air to search wide areas. The
            turkey vulture ranges widely across the Americas. Old World vultures
            occupy Africa, southern Europe, and Asia. Habitat and range vary by
            species and group.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Vultures are specialist scavengers, feeding largely on the carcasses
            of dead animals. By rapidly consuming carrion, they help recycle
            nutrients and limit the spread of disease — an ecological service of
            real importance. Some New World vultures, including the turkey
            vulture, locate food partly by an unusually good sense of smell.
            Diet is overwhelmingly carrion across the group.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Vultures are superb soaring birds, using thermals to cover large
            distances with little effort while searching for food. Many gather at
            carcasses and roost communally. Their bald or sparsely feathered
            heads are an adaptation linked to feeding on carcasses. New and Old
            World vultures differ in some behaviours, including how they find
            food. Behaviour varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Vultures are wild birds, not pets, and provide a vital clean-up
            service in ecosystems. Several vulture species — particularly in Asia
            and Africa — have suffered dramatic declines, in some cases linked to
            poisoning and certain veterinary drugs in carcasses, and are now
            seriously threatened, while others remain more common. Because status
            varies sharply by species and is actively monitored, it should be
            verified against current IUCN Red List and conservation sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Vultures are large, broad-winged birds, usually dark, with bare or
                lightly feathered heads. The turkey vulture is blackish-brown with
                a small red head and, in flight, holds its wings in a shallow V
                and rocks from side to side. Old World vultures include some very
                large, heavy-billed species. The bald head, soaring flight, and
                scavenging habits identify vultures, though the two groups differ
                in detail.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Old World vultures are members of the family Accipitridae, related to
          the hawks and eagles covered on FaunaHub. New World vultures are a
          separate group whose exact relationships have been debated. Despite the
          shared name and look, the two vulture groups are an example of
          convergent evolution rather than close kinship.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "Are all vultures related?",
          answer:
            "No. \"Vulture\" covers two separate groups — New World vultures (the Americas) and Old World vultures (Europe, Asia, Africa). They look and behave similarly because of convergent evolution toward a scavenging lifestyle, not because they are close relatives.",
        },
        {
          question: "Why are vultures important?",
          answer:
            "Vultures rapidly consume carcasses, recycling nutrients and helping to limit the spread of disease from dead animals. This clean-up role makes them ecologically valuable, which is part of why declines in some vulture populations are a serious concern.",
        },
        {
          question: "Are vultures endangered?",
          answer:
            "Some are. Several vulture species, especially in Asia and Africa, have declined dramatically and are seriously threatened, in some cases linked to poisoning, while others remain more common. Status varies by species and should be checked against current IUCN sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Vultures (New World and Old World groups)" },
        { label: "Reference species", value: "Turkey vulture (Cathartes aura)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Scavenger (mainly carrion)" },
        { label: "Ecological role", value: "Carcass clean-up; disease control" },
        { label: "Conservation", value: "Several threatened — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Hawk Profile", href: "/animals/hawk", description: "A related bird of prey" },
        { label: "Eagle Profile", href: "/animals/eagle" },
        { label: "Stork Profile", href: "/animals/stork" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.vulture}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
