import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Otter — Overview of Otter Species, Habitat & Behavior";
const description =
  "Otters of the subfamily Lutrinae — semi-aquatic mustelids from rivers and coasts. Diversity, diet, social behaviour, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/otter",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("otter"),
});

export default function OtterPage() {
  return (
    <AnimalProfileLayout
      commonName="Otter"
      pageTitle={title}
      description={description}
      path="/animals/otter"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Mustelid", "Semi-aquatic"]}
      image={getAnimalImage("otter") ?? undefined}
      galleryImages={getAnimalGalleryImages("otter")}
      factsHeaderNote="Otters are a subfamily (Lutrinae) of mustelids that includes more than a dozen species across rivers and coasts worldwide. Specific traits vary widely between species."
      overview={
        <>
          <p>
            Otters are semi-aquatic to fully aquatic mustelids of the
            subfamily Lutrinae. The group includes the Eurasian otter
            (<em>Lutra lutra</em>), the North American river otter
            (<em>Lontra canadensis</em>), the giant otter
            (<em>Pteronura brasiliensis</em>) of South America, and the
            sea otter (<em>Enhydra lutris</em>) of the North Pacific. Body
            plans vary from sleek riverine forms to the heavier,
            sea-adapted body of the sea otter.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Otter habitats range from cold marine kelp forests (sea otter)
            to tropical rivers (giant otter) and temperate rivers, lakes,
            and coasts (Eurasian and river otters). Most species are
            highly dependent on clean water with abundant prey. Pollution,
            water-quality decline, and habitat loss are recurring
            conservation pressures across the group.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most otters are carnivorous, with fish, crustaceans, and
            molluscs forming the bulk of the diet. The sea otter is a
            specialist on sea urchins, abalone, and other invertebrates and
            is well-known for using stones as tools to open prey. Diet
            varies substantially by species and habitat.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Some otter species are largely solitary, others are highly
            social. Giant otters live in close-knit family groups. Sea
            otters form &quot;rafts&quot; of resting individuals at sea.
            Otters are agile swimmers and often exhibit visible play
            behaviour with conspecifics and with objects.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Conservation status varies widely. The sea otter, giant otter,
            and several Asian otter species are particularly threatened by
            historical hunting, illegal trade, habitat loss, and pollution.
            The Eurasian otter has recovered in several European
            populations after substantial 20th-century declines. Otters are
            wildlife, not pets; private keeping is restricted or banned in
            most jurisdictions. Confirm species-specific status and law
            with the IUCN Red List and local wildlife agencies.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other mustelids include weasels, ferrets, badgers, wolverines,
          and martens. The sea otter is sometimes confused at distance
          with the unrelated marine mammals, but its dense fur and
          floating posture are characteristic.
        </p>
      }
      faqs={[
        {
          question: "How are sea otters different from river otters?",
          answer:
            "Sea otters (Enhydra lutris) are larger, denser-furred, and almost entirely marine, often living their whole lives in nearshore ocean kelp habitats. River otters and the various Old World otters are smaller, more sleekly built, and primarily inhabit fresh or brackish waterways. They are different species in different genera.",
        },
        {
          question: "Why do sea otters use rocks?",
          answer:
            "Sea otters are documented tool users, employing stones to break open hard-shelled prey such as urchins and bivalves. This is one of the best-known examples of mammalian tool use outside the great apes.",
        },
        {
          question: "Can otters be kept as pets?",
          answer:
            "Most jurisdictions restrict or prohibit private keeping of otters. They are highly active, highly social, and require specialised aquatic housing far beyond what private owners can typically provide. Many otter species are also protected under CITES or domestic law.",
        },
        {
          question: "Are otters endangered?",
          answer:
            "Conservation status varies sharply by species. The giant otter and sea otter are particularly threatened by historical hunting and continuing habitat pressures, while the Eurasian otter has recovered in several European populations. Verify per species on the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Subfamily", value: "Lutrinae (within family Mustelidae)" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Carnivora" },
        { label: "Diet", value: "Carnivore (fish, invertebrates, varies by species)" },
        { label: "Habitat", value: "Rivers, lakes, coasts; sea otters are fully marine" },
        { label: "Social structure", value: "Varies — solitary in some species, highly social in others" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Seal Profile", href: "/animals/seal" },
        { label: "Dolphin Profile", href: "/animals/dolphin" },
        { label: "Marine Animals Hub", href: "/animal-encyclopedia/marine-animals" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
      sources={ANIMAL_SOURCES.otter}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
