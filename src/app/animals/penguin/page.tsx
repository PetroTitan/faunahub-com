import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Penguin — Overview of Penguin Species, Habitat & Behavior";
const description =
  "Spheniscidae: flightless aquatic seabirds of the Southern Hemisphere. Wing-propelled swimming, diet, breeding colonies, and current conservation pressures.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/penguin",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function PenguinPage() {
  return (
    <AnimalProfileLayout
      commonName="Penguin"
      pageTitle={title}
      description={description}
      path="/animals/penguin"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Seabird", "Flightless"]}
      factsHeaderNote="Approximately 18 living penguin species are recognised across multiple genera within family Spheniscidae."
      overview={
        <>
          <p>
            Penguins are flightless seabirds of the family Spheniscidae, distinguished by
            wings modified into powerful flippers used for underwater &quot;flight&quot;.
            They are found almost exclusively in the Southern Hemisphere, with the
            Galápagos penguin (<em>Spheniscus mendiculus</em>) being a notable exception
            living near the equator. Approximately 18 living species are currently
            recognised, ranging from the very small little penguin to the much larger
            emperor and king penguins.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Penguin habitats vary considerably by species. Emperor and Adélie penguins are
            associated with Antarctic sea ice and coastal regions. Several species — gentoo,
            chinstrap, king, macaroni — occupy sub-Antarctic islands. Other species are
            found on temperate coastlines of New Zealand, southern South America, southern
            Africa, and southern Australia. The Galápagos penguin lives at the equator,
            associated with cold ocean currents.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Penguins are marine foragers, with diets dominated by fish, krill and other
            crustaceans, and cephalopods. Diet composition varies by species and region —
            krill is particularly important to several Antarctic species. Foraging dives
            can be deep and prolonged in species such as the emperor penguin.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Penguins are highly social outside the water, with most species breeding in
            large colonies. Breeding behaviours include elaborate courtship displays, pair
            bonding, and (in many species) shared parental care. The emperor penguin&apos;s
            winter breeding cycle, in which males incubate the egg on their feet through the
            Antarctic winter, is among the most extreme parental behaviours in any bird.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Penguin populations face a wide range of pressures including climate change and
            shifts in sea-ice extent, prey availability changes, fisheries bycatch, oil
            pollution, introduced predators on breeding islands, and disturbance at breeding
            sites. Several species are listed as Endangered or Vulnerable on the IUCN Red
            List; status varies markedly by species.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Penguins are not closely related to the flightless birds of the Northern Hemisphere
          (auks, puffins, murres), although they fill broadly similar ecological roles
          through convergent evolution. Within birds they share the broader seabird
          ecological grouping with families such as petrels, albatrosses and shearwaters.
        </p>
      }
      faqs={[
        {
          question: "Are penguins birds?",
          answer:
            "Yes. Penguins are birds. They have feathers, lay eggs, and share the basic body plan of birds, but their wings are modified into flippers used for underwater locomotion rather than flight.",
        },
        {
          question: "Do penguins live only in Antarctica?",
          answer:
            "No. Several penguin species do live in Antarctic and sub-Antarctic regions, but penguins also occur on coasts of New Zealand, southern Australia, southern Africa, and South America. The Galápagos penguin lives near the equator, associated with cold ocean currents.",
        },
        {
          question: "How deep can penguins dive?",
          answer:
            "Diving depth varies by species. Some species, such as the emperor penguin, are capable of very deep dives. Reliable maximum-depth and duration figures should be taken from peer-reviewed studies on specific species rather than generalised across all penguins.",
        },
        {
          question: "Are penguins endangered?",
          answer:
            "Conservation status varies by species. Several penguins are classified as Endangered or Vulnerable on the IUCN Red List, while others are more stable. Climate change is consistently identified as a long-term pressure across many species.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Spheniscidae" },
        { label: "Class", value: "Aves" },
        { label: "Living species", value: "~18 (taxonomy evolving)" },
        { label: "Flight ability", value: "Flightless; wings modified to flippers" },
        { label: "Diet", value: "Fish, krill, squid (varies by species)" },
        { label: "Social structure", value: "Colonial breeding" },
        { label: "Primary habitat", value: "Marine and coastal in the Southern Hemisphere (one equatorial species)" },
        { label: "IUCN Status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle", description: "Diurnal raptors" },
        { label: "Owl Profile", href: "/animals/owl", description: "Nocturnal raptors" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
