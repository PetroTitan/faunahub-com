import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/viper";
const TITLE = "Viper — Profile, Fangs, Venom, Ambush & Behavior";
const DESC =
  "Explore vipers (family Viperidae): heavy-bodied venomous snakes with long hinged fangs and superb camouflage — using the Gaboon viper. An educational profile, not first-aid advice.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("viper"),
});

export default function ViperPage() {
  return (
    <AnimalProfileLayout
      commonName="Viper"
      scientificName="Bitis gabonica"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Venomous"]}
      image={getAnimalImage("viper") ?? undefined}
      galleryImages={getAnimalGalleryImages("viper")}
      sources={ANIMAL_SOURCES.viper}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Vipers (family Viperidae) are a large group of venomous snakes found across much
            of the world, typically heavy-bodied with a broad, triangular head and a
            sophisticated venom-injecting system. Their hallmark is a pair of long, hollow
            fangs that fold back against the roof of the mouth when not in use and swing
            forward to strike — the most advanced fangs of any snakes. The Gaboon viper
            (<em>Bitis gabonica</em>), shown here, is a spectacular African example with the
            longest fangs of any snake and an intricate, leaf-litter camouflage pattern.
          </p>
          <p>
            Most vipers are ambush hunters, relying on camouflage and a fast, accurate
            strike rather than pursuit.
          </p>
          <p>
            <strong>Safety note:</strong> this is a general educational profile, not
            first-aid or medical guidance. Vipers are venomous and should never be handled or
            approached; for any snakebite, seek professional medical care immediately.
          </p>
        </>
      }
      habitat={
        <p>
          Vipers live on most continents (they are absent from Australia, Madagascar, and a
          few other regions), in habitats ranging from rainforest and savanna to deserts and
          mountains, depending on the species. The Gaboon viper inhabits rainforest and
          nearby woodland in central and West Africa, where it lies hidden among leaf litter
          on the forest floor.
        </p>
      }
      diet={
        <p>
          Vipers are carnivores that prey mainly on small mammals (such as rodents), along
          with birds, lizards, frogs, and other small animals depending on the species. Most
          are ambush predators: they wait, camouflaged and still, then strike rapidly,
          inject venom, release the prey, and track it down once the venom takes effect
          before swallowing it whole.
        </p>
      }
      behavior={
        <p>
          Vipers are generally slow-moving and rely on camouflage and patience rather than
          speed. Many possess heat-sensing abilities (the pit vipers, a major subgroup, have
          special facial pits to detect warm prey in the dark). The Gaboon viper is famously
          placid and reluctant to bite, lying motionless and well hidden, but it can deliver
          an enormous strike with its long fangs if stepped on or threatened. Vipers play an
          important role in controlling rodent populations.
        </p>
      }
      humanInteraction={
        <p>
          Vipers are widely feared, and their venom can be medically serious, so the key
          message is simple: keep your distance and never try to handle, catch, or kill them,
          which is when most bites happen. Where snakes and people overlap, awareness,
          appropriate footwear, and professional snake removal reduce risk. Ecologically,
          vipers help control rodents and pests. Consult authoritative sources and local
          health services for guidance.
        </p>
      }
      faqs={[
        {
          question: "What makes a viper's fangs special?",
          answer:
            "Vipers have the most advanced fangs of any snakes: long, hollow, and hinged so they fold back against the roof of the mouth when closed and swing forward to strike. This lets vipers have very long fangs for their size — the Gaboon viper's are the longest of any snake — to inject venom deep into prey.",
        },
        {
          question: "How do vipers hunt?",
          answer:
            "Most vipers are ambush predators. They stay still and camouflaged, often for long periods, then strike rapidly when prey comes close, inject venom, and usually release the animal. They then follow it using scent (and, in pit vipers, heat sensing) and swallow it once the venom has taken effect.",
        },
        {
          question: "Is the Gaboon viper aggressive?",
          answer:
            "Not really — it is known for being remarkably calm and reluctant to bite, relying on its superb camouflage to stay hidden rather than attacking. The danger comes mainly if it is stepped on or handled, when it can deliver a powerful bite with its very long fangs. As with all vipers, the safest approach is to leave it well alone.",
        },
        {
          question: "What should I do about a viper?",
          answer:
            "Stay well back and never attempt to handle, catch, or kill it — that is when most bites occur. Vipers are venomous, so any encounter should be treated with caution and, where needed, handled by professional snake removers. This profile is educational only; for any bite, seek immediate professional medical care.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Viperidae" },
        { label: "Reference species", value: "Bitis gabonica (Gaboon viper)" },
        { label: "Class", value: "Reptilia (snake)" },
        { label: "Fangs", value: "Long, hollow, hinged (most advanced)" },
        { label: "Diet", value: "Carnivore (rodents, birds, etc.)" },
        { label: "Hunting style", value: "Camouflaged ambush" },
        { label: "Range", value: "Most continents (varies by species)" },
        { label: "Venom", value: "Venomous — do not approach" },
      ]}
      relatedLinks={[
        { label: "Rattlesnake Profile", href: "/animals/rattlesnake", description: "A New World pit viper" },
        { label: "Cobra Profile", href: "/animals/cobra", description: "A venomous elapid (different family)" },
        { label: "Mamba Profile", href: "/animals/mamba", description: "Another venomous African snake" },
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a group" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
