import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/alligator-gar";
const TITLE = "Alligator Gar: Giant Ancient Freshwater Fish";
const DESC =
  "Discover the alligator gar, a large ancient freshwater fish of the southern United States and parts of Mexico, including its biology, habitat and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("alligator-gar"),
});

export default function AlligatorGarPage() {
  return (
    <AnimalProfileLayout
      commonName="Alligator Gar"
      scientificName="Atractosteus spatula"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Ancient lineage","Freshwater"]}
      image={getAnimalImage("alligator-gar") ?? undefined}
      galleryImages={getAnimalGalleryImages("alligator-gar")}
      sources={ANIMAL_SOURCES["alligator-gar"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The alligator gar (<em>Atractosteus spatula</em>) is the largest member of the gar family and one of the largest freshwater fish found in North America. It is named for its broad, alligator-like snout, and it carries an elongate, torpedo-shaped body protected by hard, interlocking scales. Although its appearance can seem imposing, this is fundamentally a quiet ambush predator of slow waters rather than a threat to people.
          </p>
          <p>
            Gars belong to an ancient lineage, and the alligator gar is often described as a &quot;living fossil&quot; because its body plan has changed relatively little over a very long span of evolutionary history. Its distinctive ganoid scales, diamond-shaped and enamel-coated, are a feature shared with few other living fishes and help set gars apart from most modern fish groups.
          </p>
          <p>
            This profile is educational and ecological in focus. It does not offer fishing, angling, harvesting, caviar, cooking, or food guidance of any kind, and instead aims to explain how the species lives and the role it plays in its native waters.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The alligator gar is classified as <em>Atractosteus spatula</em>, placed in the family Lepisosteidae, the gars, within the order Lepisosteiformes. It is a ray-finned fish (class Actinopterygii) and represents one of the few surviving members of an ancient group whose relatives are known mainly from the fossil record. Within the gars, it is distinguished as the largest species and is grouped with the other <em>Atractosteus</em> gars, separate from the <em>Lepisosteus</em> gars. Its retained traits, including the ganoid scales and a vascularized swim bladder that lets it gulp air, contribute to its frequent description as a relict or &quot;living fossil&quot; lineage.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            An alligator gar is recognized by its long, cylindrical body and its short, broad snout, which together give the head an alligator-like profile. Unlike most gars, it has two rows of large, sharp teeth in the upper jaw, a distinguishing feature of the species. The body is sheathed in hard, interlocking ganoid scales arranged in a diamond pattern, forming a tough, armor-like covering. Coloration is typically dark olive to brownish above, fading to a paler, often yellowish or whitish underside, which helps it blend into murky water. The dorsal and anal fins are set far back near the broad tail, an arrangement suited to short bursts of acceleration. It is among the largest freshwater fishes of North America, and mature individuals can reach considerable size and weight.
          </p>
        </>
      }
      habitat={
        <p>
          The alligator gar is associated with large, slow-moving rivers, oxbow lakes, reservoirs, swamps, bayous, and brackish coastal waters in parts of the southern United States and parts of Mexico, with a center of distribution around the lower Mississippi River basin and Gulf Coast drainages. It tends to favor warm, sluggish waters with abundant cover and tolerates a range of conditions, including low-oxygen environments, partly because it can gulp air at the surface using its swim bladder. It also moves into brackish estuaries and is occasionally reported in nearby coastal waters. The descriptions here are general; local occurrence varies, and the species is not found uniformly across the whole region.
        </p>
      }
      diet={
        <p>
          The alligator gar is a carnivorous ambush predator that feeds chiefly on other fish, hanging nearly motionless in the water before lunging at prey with a sideways snap of its toothed jaws. Its diet can also include crabs, waterfowl, small turtles, and other animals it encounters, reflecting an opportunistic approach within its habitat. Rather than actively chasing prey over long distances, it relies on patience, camouflage, and a sudden burst of speed. As a large predator, it generally targets common, abundant prey species in the waters it occupies.
        </p>
      }
      behavior={
        <>
          <p>
            Alligator gars are generally slow-moving and solitary for much of the year, often resting near the surface or among submerged vegetation and structure. They are long-lived and slow to mature, which means populations can take many years to recover from disturbance. Spawning is tied to seasonal flooding, when adults move into shallow, vegetated floodplains and backwaters; the eggs are deposited on plants and submerged surfaces, and the young remain in these protected nursery areas early in life. The eggs of gars are notable for being toxic to many would-be predators, which is thought to offer the developing eggs some protection.
          </p>
          <p>
            As a large apex-level predator in its native systems, the alligator gar helps shape the structure of fish communities and can influence the abundance of the prey species it feeds on. Its presence is generally considered a sign of large, relatively intact river and floodplain habitats, since the species depends on seasonal flooding for successful spawning. By feeding on abundant prey and being preyed upon in its early life stages, it forms part of the broader food web of southern North American waters. Healthy gar populations are often associated with functioning connections between rivers and their floodplains.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The alligator gar has historically been the subject of myths that exaggerate its threat to people; in reality it is not considered dangerous to humans, and there are no confirmed fatal attacks attributed to the species. It is best understood as a wild predator that generally avoids people, and it should be observed at a respectful distance rather than handled or disturbed. On the IUCN Red List the alligator gar has been assessed as Least Concern, though such assessments reflect current information and can change over time as conditions and data are updated; concerns about habitat loss and river alteration remain relevant in parts of its range. Any questions about local wildlife or encounters should be directed to local wildlife authorities, and any concern about an injury should be directed to qualified medical professionals or local health authorities. This page provides no fishing, angling, harvesting, or food guidance of any kind.
        </p>
      }
      faqs={[
        {
          question: "Is the alligator gar dangerous to people?",
          answer:
            "The alligator gar is not considered a danger to people, and there are no confirmed fatal attacks attributed to the species. It is a wild fish that generally avoids humans and is best observed from a respectful distance.",
        },
        {
          question: "Why is the alligator gar called a \"living fossil\"?",
          answer:
            "It belongs to an ancient lineage of fishes whose body plan has changed relatively little over a long span of evolutionary history. Features such as its hard, enamel-coated ganoid scales are shared with very few living fishes today.",
        },
        {
          question: "Where is the alligator gar found?",
          answer:
            "It is associated with large rivers, reservoirs, swamps, and brackish waters in parts of the southern United States and parts of Mexico, centered on the lower Mississippi basin and Gulf Coast drainages. Local occurrence varies, and it is not found uniformly across the whole region.",
        },
        {
          question: "What is the conservation status of the alligator gar?",
          answer:
            "The IUCN Red List has assessed the alligator gar as Least Concern. Such assessments reflect current information and can change over time, and habitat loss and river alteration remain relevant concerns in parts of its range.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Atractosteus spatula" },
        { label: "Animal group", value: "Ray-finned fish (gar)" },
        { label: "Family", value: "Lepisosteidae" },
        { label: "Size", value: "Among the largest freshwater fish in North America" },
        { label: "Diet", value: "Carnivorous; mainly fish, also crabs, waterfowl and small turtles" },
        { label: "Habitat", value: "Large rivers, reservoirs, swamps and brackish waters" },
        { label: "Range", value: "Parts of the southern US and parts of Mexico" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List assessment; can change over time)" },
      ]}
      relatedLinks={[
        { label: "Gar Profile", href: "/animals/gar", description: "Gars more broadly" },
        { label: "Lake Sturgeon", href: "/animals/lake-sturgeon", description: "Another ancient North American fish" },
        { label: "Alligator Profile", href: "/animals/alligator", description: "The reptile it is named after" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
