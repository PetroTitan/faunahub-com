import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/whooping-crane";
const TITLE = "Whooping Crane: North America's Tallest Bird";
const DESC =
  "The whooping crane is North America's tallest bird, an endangered wetland species and one of the world's most intensively managed conservation recoveries.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("whooping-crane"),
});

export default function WhoopingCranePage() {
  return (
    <AnimalProfileLayout
      commonName="Whooping Crane"
      scientificName="Grus americana"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Crane","Endangered"]}
      image={getAnimalImage("whooping-crane") ?? undefined}
      galleryImages={getAnimalGalleryImages("whooping-crane")}
      sources={ANIMAL_SOURCES["whooping-crane"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The whooping crane (<em>Grus americana</em>) is the tallest bird in North America and one of the most recognizable symbols of wildlife conservation on the continent. Standing tall on long legs, it is mostly white with black wingtips and a bare patch of red skin on the crown of its head. Its loud, far-carrying call gives the species its common name.
          </p>
          <p>
            Few birds have a conservation history as closely followed as that of the whooping crane. After the wild population fell to a very small number around the middle of the twentieth century, it became the focus of one of the most intensively managed recovery efforts in the world, involving wetland protection, captive breeding, and careful monitoring across international borders. Despite these long-running efforts, the species remains rare and is still considered at risk.
          </p>
          <p>
            This profile offers a calm, educational overview of the whooping crane&#39;s biology, habitat, and ecological role. It is not a guide to attracting, approaching, or interacting with wild cranes, which are protected and sensitive to disturbance.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The whooping crane is classified as <em>Grus americana</em>, a member of the crane family Gruidae within the order Gruiformes. Cranes are tall, long-legged, long-necked wading birds that are distinct from herons and storks, despite a superficial resemblance. The whooping crane is one of only two crane species found in North America, the other being the more widespread and abundant sandhill crane. Its scientific name reflects its association with the Americas.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            An adult whooping crane is a striking, mostly white bird with a long neck and long dark legs, recognized as the tallest bird in North America. The most distinctive markings are the black wingtips, visible especially in flight, and the patch of bare red skin on the top and sides of the head. The bill is long and pointed, and the eyes are pale. Young birds differ from adults, showing a mix of rusty or cinnamon coloring among the white as they mature. In flight, whooping cranes hold their necks and legs outstretched, a posture that helps distinguish them from herons, which fold their necks.
          </p>
        </>
      }
      habitat={
        <p>
          Whooping cranes are strongly associated with wetlands, including marshes, shallow wetlands, and coastal flats, where they feed and roost in or near water. A key wild population migrates between nesting grounds in parts of Canada, in the Wood Buffalo region, and wintering grounds along the Texas Gulf coast in the area of Aransas. Because the species is rare and managed across its range, its distribution is limited and patchy rather than continental, and additional birds occur in parts of North America through reintroduction and captive programs. The whooping crane should be understood as occurring in specific, protected wetland areas rather than across the entire continent.
        </p>
      }
      diet={
        <p>
          The whooping crane is omnivorous and feeds on a varied diet drawn from the wetlands and surrounding areas it inhabits. On the wintering grounds it commonly takes aquatic animals such as crabs, crayfish, clams, and other invertebrates, along with small aquatic creatures found in shallow water. Elsewhere and at other times of year it may also eat insects, small vertebrates, seeds, roots, grains, and plant material. Foraging typically takes place by walking slowly through shallow water or wet ground and probing or gleaning food from the substrate.
        </p>
      }
      behavior={
        <>
          <p>
            Whooping cranes are long-lived birds that typically form lasting pair bonds and are well known for their elaborate dancing displays, which include bowing, leaping, and wing flapping. Pairs defend nesting territories in wetland areas and generally raise a small number of young, with parental care extending well beyond hatching as the family migrates together. Migration is a defining feature of the main wild population, which travels a long route between Canadian nesting grounds and the Texas coast each year. Young birds learn migration routes by following experienced adults, which makes the survival and guidance of breeding birds important to the population.
          </p>
          <p>
            As a large wetland bird, the whooping crane is part of the food web of the marshes and coastal flats it occupies, where it acts as a predator of invertebrates and small aquatic animals and also consumes plant material. Its dependence on healthy wetlands makes it an indicator of the condition of those habitats, since the cranes require clean, productive, and relatively undisturbed areas to feed and nest. The whooping crane has also become a flagship species for wetland conservation, drawing attention and protection that can benefit many other animals and plants that share its range.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The whooping crane is listed as Endangered on the IUCN Red List, an assessment that reflects its small, recovering population and that may change as monitoring continues. It is one of the most intensively managed conservation recoveries in the world, brought back from a very small wild population through habitat protection, captive breeding, and reintroduction, yet it remains rare and at risk. Whooping cranes are protected wildlife that are sensitive to disturbance, so observers should keep a respectful distance and avoid approaching, feeding, or following them. Any concerns about injured cranes or wildlife conflict should be directed to local wildlife authorities, who are best placed to respond.
        </p>
      }
      faqs={[
        {
          question: "Why is the whooping crane so rare?",
          answer:
            "The wild population fell to a very small number around the middle of the twentieth century, and although intensive conservation efforts have helped it recover, the species remains rare and is still considered at risk. It is listed as Endangered on the IUCN Red List.",
        },
        {
          question: "Where do whooping cranes live?",
          answer:
            "They are associated with wetlands, including marshes and coastal flats. A key wild population nests in parts of Canada in the Wood Buffalo region and winters along the Texas Gulf coast near Aransas, with additional birds in parts of North America through reintroduction and captive programs.",
        },
        {
          question: "How tall is a whooping crane?",
          answer:
            "The whooping crane is recognized as the tallest bird in North America, standing high on long legs with a long neck. Its height, white plumage, and red crown make it one of the most distinctive birds on the continent.",
        },
        {
          question: "What do whooping cranes eat?",
          answer:
            "They are omnivores that feed on aquatic animals such as crabs, crayfish, and clams, as well as insects, small vertebrates, seeds, and plant material. They forage by walking slowly through shallow water and wet ground.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Grus americana" },
        { label: "Animal group", value: "Bird (crane)" },
        { label: "Family or order", value: "Gruidae; order Gruiformes" },
        { label: "Size", value: "Tallest bird in North America" },
        { label: "Diet", value: "Omnivorous; invertebrates, small animals, plant material" },
        { label: "Habitat", value: "Wetlands, marshes, and coastal flats" },
        { label: "Range", value: "Parts of North America; Wood Buffalo (Canada) to Texas Gulf coast" },
        { label: "Conservation status", value: "Endangered (IUCN Red List; assessment can change)" },
      ]}
      relatedLinks={[
        { label: "Sandhill Crane", href: "/animals/sandhill-crane", description: "A commoner North American crane" },
        { label: "Stork Profile", href: "/animals/stork", description: "Another tall wading bird" },
        { label: "Flamingo", href: "/animals/flamingo", description: "Another tall waterbird" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
