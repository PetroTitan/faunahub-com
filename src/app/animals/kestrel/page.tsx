import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kestrel";
const TITLE = "Kestrel — Profile, Hovering, Hunting & Habitat";
const DESC =
  "Explore the common kestrel (Falco tinnunculus): a small falcon that hovers over open ground and can see the ultraviolet traces left by voles.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("kestrel"),
});

export default function KestrelPage() {
  return (
    <AnimalProfileLayout
      commonName="Kestrel"
      scientificName="Falco tinnunculus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Raptor","Falcon"]}
      image={getAnimalImage("kestrel") ?? undefined}
      galleryImages={getAnimalGalleryImages("kestrel")}
      sources={ANIMAL_SOURCES.kestrel}
      factsHeaderNote="Several falcons are called kestrels. The species described here is the common kestrel (Falco tinnunculus) of Europe, Asia and Africa; the American kestrel (Falco sparverius) is a different species."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The common kestrel (<em>Falco tinnunculus</em>) is a small falcon of open country across Europe, Asia and Africa, and one of the most familiar birds of prey in its range because of where it hunts: roadside verges, field margins and rough grassland.
        </p>
        <p>
          Its signature is <strong>hovering</strong>. A kestrel will hang almost motionless in the air, wings beating and tail fanned, with its head held remarkably still while it scans the ground below — then drop onto prey in a controlled stoop.
        </p>
        <p>
          Males and females differ: males have a blue-grey head and tail with a chestnut back, while females are more uniformly barred brown. Both show the pointed wings and long tail typical of falcons.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Kestrels occupy open and semi-open habitats — farmland, grassland, heath, moorland, marsh edges, road verges and city margins — across Europe, Asia and much of Africa. They avoid dense forest and need open ground to hunt over, along with a raised perch or airspace to hunt from. They readily use buildings, quarry ledges and nest boxes, and old crow nests, rather than building nests of their own.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Kestrels feed mainly on small mammals, above all voles, supplemented by mice, shrews, small birds, lizards, and large insects such as beetles and grasshoppers. The balance shifts with season and habitat: insects and lizards feature more in warmer regions and in summer, small mammals dominate elsewhere.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Beyond hovering, kestrels hunt from perches, dropping onto prey below. One of the most striking findings about them is that kestrels can see into the <strong>ultraviolet</strong>, and vole scent-marking trails reflect UV — meaning a hovering kestrel may be reading traces of vole activity across a field rather than only watching for movement. They are usually solitary or in pairs, and are vocal around the nest with a sharp repeated call.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Kestrels adapt well to farmland and even urban settings, nesting on buildings and readily taking to nest boxes, which has made them a common subject of local conservation schemes. Populations in parts of Europe have declined, generally linked to agricultural intensification reducing rough grassland and vole numbers, and to secondary poisoning from rodenticides. This profile offers no guidance on keeping or handling raptors, which is regulated in most countries. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why do kestrels hover?",
          answer:
            "Hovering lets a kestrel search a patch of ground carefully from directly above without needing a perch. It holds its head almost perfectly still while its wings beat, scanning for prey movement — and for ultraviolet traces of vole activity — before dropping onto anything it finds.",
        },
        {
          question: "Can kestrels really see ultraviolet?",
          answer:
            "Yes. Kestrels have vision extending into the ultraviolet, and the urine and scent marks voles leave along their runways reflect UV light. This means a hovering kestrel can pick out where voles have been active, not just where one happens to be moving at that moment.",
        },
        {
          question: "What do kestrels eat?",
          answer:
            "Mainly small mammals, particularly voles, along with mice, shrews, small birds, lizards and large insects. The mix varies by region and season — insects and reptiles matter more in warmer areas and in summer, while voles dominate across much of the European range.",
        },
        {
          question: "Do kestrels build nests?",
          answer:
            "No. Kestrels do not construct their own nests. They lay in existing cavities and ledges — holes in trees or cliffs, ledges on buildings and quarries, old nests built by crows and other birds — and they take readily to purpose-built nest boxes.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Falco tinnunculus" },
        { label: "Family", value: "Falconidae" },
        { label: "Class", value: "Aves" },
        { label: "Signature behaviour", value: "Hovering with a still head" },
        { label: "Vision", value: "Extends into the ultraviolet" },
        { label: "Diet", value: "Voles and other small mammals, insects" },
        { label: "Nesting", value: "Uses cavities, ledges and old nests" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Falcon Profile", href: "/animals/falcon", description: "Group-level overview" },
        { label: "Hawk Profile", href: "/animals/hawk" },
        { label: "Barn Owl Profile", href: "/animals/barn-owl", description: "Another vole specialist" },
        { label: "Osprey Profile", href: "/animals/osprey" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
