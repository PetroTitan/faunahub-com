import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wedge-tailed-eagle";
const TITLE = "Wedge-tailed Eagle (Aquila audax)";
const DESC =
  "Learn about the wedge-tailed eagle, Australia's largest bird of prey: its appearance, habitat across mainland Australia and Tasmania, diet and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("wedge-tailed-eagle"),
});

export default function WedgeTailedEaglePage() {
  return (
    <AnimalProfileLayout
      commonName="Wedge-tailed Eagle"
      scientificName="Aquila audax"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Bird of prey","Australia"]}
      image={getAnimalImage("wedge-tailed-eagle") ?? undefined}
      galleryImages={getAnimalGalleryImages("wedge-tailed-eagle")}
      sources={ANIMAL_SOURCES["wedge-tailed-eagle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The wedge-tailed eagle (<em>Aquila audax</em>) is Australia&#39;s largest bird of prey and one of the largest eagles in the world by wingspan. It is a large, dark raptor instantly recognisable in flight by its long, distinctively wedge-shaped tail, which the species is named for. Adults are generally dark brown to near-black, with paler markings on the nape and upperwing, while younger birds tend to be more mottled and lighter, darkening as they mature over several years.
          </p>
          <p>
            Found across much of mainland Australia, the island of Tasmania, and extending into parts of southern New Guinea, the wedge-tailed eagle occupies a wide variety of open and wooded landscapes. It is a powerful soaring bird, often seen circling at great height on broad wings, and it both hunts live prey and scavenges. As an apex aerial predator across many of its environments, it plays an important ecological role.
          </p>
          <p>
            The IUCN Red List currently assesses the species overall as Least Concern, reflecting its broad distribution. Conservation attention is more focused at the regional level, where one Tasmanian subspecies (<em>Aquila audax fleayi</em>) is recognised as being of higher conservation concern. Like all assessments, these classifications are based on available evidence and can be revised as new information emerges.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The wedge-tailed eagle is a bird in the family Accipitridae, the group that includes eagles, hawks, kites and Old World vultures, within the order Accipitriformes. Its scientific name is <em>Aquila audax</em>, placing it in the genus <em>Aquila</em>, the so-called &quot;true&quot; or &quot;booted&quot; eagles, which also includes well-known species such as the golden eagle (<em>Aquila chrysaetos</em>) of the Northern Hemisphere. Several subspecies are recognised across its range, including a distinct population on Tasmania (<em>Aquila audax fleayi</em>) that is treated separately for conservation purposes.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a very large eagle, with a wingspan that can exceed two metres in the biggest individuals, and females are typically larger than males, as is common among birds of prey. The most reliable identifying feature is the long, diamond or wedge-shaped tail, which is clearly visible when the bird soars overhead. Adults are predominantly dark brown to blackish, often with a reddish-brown or golden tone on the nape, while immature birds are generally browner and more variegated before acquiring the darker adult plumage. The legs are fully feathered down to the toes, and the bill, feet and overall robust build reflect a powerful predatory and scavenging lifestyle.
          </p>
        </>
      }
      habitat={
        <p>
          The wedge-tailed eagle is found across much of mainland Australia, on the island of Tasmania, and into parts of southern New Guinea; it is not distributed across all of Oceania, and it should be associated specifically with these regions rather than the wider Pacific. Within this range it is highly adaptable, occupying habitats from arid and semi-arid interior plains to open woodland, forest edges, grasslands and mountainous country. It tends to favour open or lightly timbered country that provides both soaring conditions and access to prey, and it often ranges widely in search of food. Birds may be seen over remote inland areas as well as near the coast in parts of their distribution.
        </p>
      }
      diet={
        <p>
          As both a hunter and a scavenger, the wedge-tailed eagle takes a varied diet dominated by mammals, alongside birds, reptiles and carrion. It hunts living prey such as rabbits and various native and introduced mammals, and it will also feed readily on animal remains, including roadside carcasses. The relative importance of hunting versus scavenging shifts with local conditions and prey availability, allowing the species to persist across very different landscapes. Eagles may forage alone, in pairs, or gather in loose groups at a large food source such as a carcass.
        </p>
      }
      behavior={
        <>
          <p>
            Wedge-tailed eagles are often seen soaring for long periods on broad, upswept wings, using thermals and rising air to gain height with minimal effort. They typically form long-term pair bonds and build large stick nests, frequently in tall trees or on elevated sites, which an established pair may reuse and add to over successive years. Breeding pairs hold and defend territories, and they raise a small number of young per season, with the chicks dependent on the parents for an extended period before becoming independent. Outside of breeding, the birds may be more wide-ranging, particularly younger individuals seeking territories of their own.
          </p>
          <p>
            As a large apex aerial predator and an effective scavenger, the wedge-tailed eagle helps shape the ecosystems it inhabits by influencing populations of the animals it hunts and by removing carrion from the landscape. Its scavenging contributes to nutrient cycling and the cleanup of animal remains, while its predation can affect the behaviour and numbers of prey species. As a wide-ranging bird occupying many habitat types, it serves as one indicator of the broader health of the open-country and woodland environments across its range.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The wedge-tailed eagle has long held cultural significance in Australia and remains a familiar sight across much of the country, where it is protected as native wildlife. While the species overall is assessed as Least Concern by the IUCN Red List, regional populations can face pressures such as habitat change, disturbance at nest sites, and collisions or other hazards, and one Tasmanian subspecies (<em>Aquila audax fleayi</em>) in particular is recognised as being of higher conservation concern. It is a wild bird and not a pet; people who find an injured eagle, a disturbed nest, or who have concerns about wildlife on their property should contact local wildlife authorities or licensed wildlife carers rather than handling the bird themselves.
        </p>
      }
      faqs={[
        {
          question: "How large is the wedge-tailed eagle?",
          answer:
            "It is Australia's largest bird of prey, with a wingspan that can exceed two metres in the biggest individuals. Females are generally larger than males.",
        },
        {
          question: "Where is the wedge-tailed eagle found?",
          answer:
            "It occurs across much of mainland Australia, on the island of Tasmania, and into parts of southern New Guinea. It is associated with these regions rather than the wider Pacific or all of Oceania.",
        },
        {
          question: "Is the wedge-tailed eagle endangered?",
          answer:
            "The IUCN Red List assesses the species overall as Least Concern, reflecting its broad range. However, one Tasmanian subspecies (Aquila audax fleayi) is recognised as being of higher conservation concern, and assessments can change as new evidence emerges.",
        },
        {
          question: "What does the wedge-tailed eagle eat?",
          answer:
            "It both hunts and scavenges, feeding mainly on mammals such as rabbits and other native and introduced animals, along with birds, reptiles and carrion. The balance between hunting and scavenging varies with local conditions.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Aquila audax" },
        { label: "Animal group", value: "Bird (eagle, bird of prey)" },
        { label: "Family/order", value: "Accipitridae; Accipitriformes" },
        { label: "Size", value: "Wingspan can exceed 2 metres; females larger than males" },
        { label: "Diet", value: "Carnivorous; hunts and scavenges mammals, birds, reptiles, carrion" },
        { label: "Habitat", value: "Open and wooded country, from arid plains to forest edges" },
        { label: "Range", value: "Much of mainland Australia, Tasmania, parts of southern New Guinea" },
        { label: "Conservation status", value: "Least Concern (IUCN); Tasmanian subspecies Aquila audax fleayi of higher concern" },
      ]}
      relatedLinks={[
        { label: "Eagle", href: "/animals/eagle", description: "Eagles more broadly" },
        { label: "Hawk", href: "/animals/hawk", description: "Another bird of prey" },
        { label: "Vulture", href: "/animals/vulture", description: "Another large raptor" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
