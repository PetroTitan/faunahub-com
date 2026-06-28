import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/reef-manta-ray";
const TITLE = "Reef Manta Ray: Facts, Habitat & Conservation";
const DESC =
  "Learn about the reef manta ray (Mobula alfredi), a large filter-feeding ray of Indo-Pacific reefs, its plankton diet, biology and Vulnerable IUCN status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("reef-manta-ray"),
});

export default function ReefMantaRayPage() {
  return (
    <AnimalProfileLayout
      commonName="Reef Manta Ray"
      scientificName="Mobula alfredi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Ray","Reef"]}
      image={getAnimalImage("reef-manta-ray") ?? undefined}
      galleryImages={getAnimalGalleryImages("reef-manta-ray")}
      sources={ANIMAL_SOURCES["reef-manta-ray"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The reef manta ray (<em>Mobula alfredi</em>) is one of the largest rays in the world, a graceful filter-feeder recognised by its broad, triangular pectoral &quot;wings&quot; and the pair of paddle-like cephalic fins that frame its wide mouth. It is associated with the warm coastal and reef waters of parts of the Indo-Pacific, including parts of Australian waters, where it glides slowly through the water column straining tiny planktonic prey.
          </p>
          <p>
            Despite its size, the reef manta ray is harmless to people and feeds entirely on small drifting organisms. It belongs to a group of cartilaginous fishes and is closely related to the larger, more wide-ranging oceanic manta ray; the two are now generally treated as distinct species, with the reef manta ray recognised as separate from the oceanic manta in studies published around 2009.
          </p>
          <p>
            The reef manta ray is assessed as Vulnerable on the IUCN Red List. Like all such assessments, this is a changeable evaluation that reflects current understanding of the species and the pressures it faces, and it may be revised as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The reef manta ray is a cartilaginous fish, meaning its skeleton is made of cartilage rather than bone, placing it among the rays and their relatives rather than the bony fishes. Its scientific name is <em>Mobula alfredi</em>, and it sits within the family Mobulidae, the devil rays and manta rays, in the order Myliobatiformes. It was historically grouped with the oceanic manta ray and was for a time placed in the genus <em>Manta</em>, but the manta rays are now generally treated within the genus <em>Mobula</em> alongside the other devil rays, and the reef manta ray is recognised as a distinct species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The reef manta ray is most easily recognised by its flattened, diamond-shaped body and very broad pectoral fins that resemble wings, giving it a wingspan that can reach several metres across in large individuals. The head bears two flexible, paddle-like cephalic fins that can be unrolled to help funnel food toward a wide, forward-facing mouth. Its upper surface is typically dark, often black or grey, while the underside is paler with dark markings; the patterns of spots and shading on the belly are unique to each individual and are widely used by researchers to tell animals apart. A slender tail trails behind the body, and unlike many of their relatives, manta rays lack a functional stinging spine.
          </p>
        </>
      }
      habitat={
        <p>
          The reef manta ray is a marine species found in tropical and subtropical coastal and reef waters across parts of the Indo-Pacific, including parts of Australian waters. It tends to stay closer to coastlines, coral reefs, lagoons and seamounts than its more oceanic relative, often returning to particular cleaning stations and feeding areas. Its distribution is patchy rather than continuous, and it should be understood as associated with reef and coastal habitats in scattered parts of this broad region rather than evenly spread throughout it. The species is not confined to any single country, and references to Oceania should be read cautiously as parts of that region&#39;s coastal waters rather than the whole.
        </p>
      }
      diet={
        <p>
          The reef manta ray is a filter feeder that lives almost entirely on plankton, the drifting community of tiny animals and other small organisms suspended in the water. It feeds by swimming with its mouth open, using its cephalic fins to channel water inside, where specialised filtering structures along the gills trap the small prey while letting water pass through. Individuals often gather where currents, tides or upwelling concentrate plankton into dense patches, and they may feed alone or in loose groups, sometimes performing looping or chained swimming patterns that help them stay within a rich food layer.
        </p>
      }
      behavior={
        <>
          <p>
            Reef manta rays are generally slow-moving and curious, spending much of their time cruising over reefs, visiting cleaning stations where small fish remove parasites, and aggregating at predictable feeding sites. They are thought to be long-lived and slow to reproduce, with females giving birth to live young, usually a single pup after a long gestation, and only at intervals of one to several years. This low reproductive rate means populations tend to grow slowly and recover only gradually from losses. Many individuals show site fidelity, returning to the same areas over years, while others may travel considerable distances along coastlines.
          </p>
          <p>
            As a large filter feeder, the reef manta ray is part of the link between the smallest drifting life in the ocean and larger marine animals, helping move energy and nutrients through reef and coastal food webs. Its feeding draws on plankton blooms, and its movements can reflect the productivity and health of the waters it visits. The cleaning stations it frequents support relationships with smaller reef fish, and the species itself can serve as prey for large sharks and other big predators, particularly when young. In these ways the reef manta ray is woven into the broader functioning of the reef ecosystems with which it is associated.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The reef manta ray is harmless to people and feeds only on plankton, but it faces pressures from human activity, which is reflected in its Vulnerable listing on the IUCN Red List. Its slow reproduction makes it sensitive to disturbance, accidental capture in fishing gear, and habitat degradation, and protective measures in some areas aim to reduce these impacts. People watching manta rays should keep a respectful distance and avoid touching or crowding the animals, allowing them to feed and move freely. Concerns about an injured or entangled manta ray, or about wildlife conflict more generally, are best directed to local wildlife authorities, who can advise on appropriate action.
        </p>
      }
      faqs={[
        {
          question: "Is the reef manta ray dangerous to humans?",
          answer:
            "No. The reef manta ray is a gentle filter feeder that eats only plankton and poses no threat to people, and unlike some of its relatives it lacks a functional stinging spine.",
        },
        {
          question: "How big does a reef manta ray get?",
          answer:
            "It is one of the largest rays, with broad wing-like pectoral fins that can span several metres across in large adults, though exact size varies between individuals and populations.",
        },
        {
          question: "What does the reef manta ray eat?",
          answer:
            "It feeds almost entirely on plankton, straining tiny drifting organisms from the water using filtering structures on its gills as it swims with its mouth open.",
        },
        {
          question: "Why is the reef manta ray considered Vulnerable?",
          answer:
            "The IUCN Red List assesses it as Vulnerable because its slow reproduction and exposure to threats such as accidental capture and habitat loss make populations slow to recover; this assessment may change as new information emerges.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Mobula alfredi" },
        { label: "Animal group", value: "Cartilaginous fish (ray)" },
        { label: "Family/order", value: "Mobulidae; Myliobatiformes" },
        { label: "Size", value: "Wingspan up to several metres across" },
        { label: "Diet", value: "Filter feeder; plankton" },
        { label: "Habitat", value: "Tropical and subtropical coastal and reef waters" },
        { label: "Range", value: "Parts of the Indo-Pacific, including parts of Australian waters" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List; a changeable assessment)" },
      ]}
      relatedLinks={[
        { label: "Ray", href: "/animals/ray", description: "Rays more broadly" },
        { label: "Shark", href: "/animals/shark", description: "A cartilaginous relative" },
        { label: "Leafy Seadragon", href: "/animals/leafy-seadragon", description: "Another Australian marine fish" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
