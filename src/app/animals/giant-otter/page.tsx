import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/giant-otter";
const TITLE = "Giant Otter: Largest Otter of South America";
const DESC =
  "The giant otter (Pteronura brasiliensis) is the largest otter, a social, fish-eating mammal of South American rivers and wetlands. IUCN Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("giant-otter"),
});

export default function GiantOtterPage() {
  return (
    <AnimalProfileLayout
      commonName="Giant Otter"
      scientificName="Pteronura brasiliensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Mustelid","Amazon"]}
      image={getAnimalImage("giant-otter") ?? undefined}
      galleryImages={getAnimalGalleryImages("giant-otter")}
      sources={ANIMAL_SOURCES["giant-otter"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The giant otter (<em>Pteronura brasiliensis</em>) is the largest member of the otter family and one of the most distinctive freshwater mammals of South America. Highly social and active by day, it lives in close-knit family groups along rivers, lakes and seasonally flooded wetlands, where it feeds mainly on fish. Its size, expressive vocal calls and cooperative habits have earned it the local nickname &quot;river wolf&quot; in parts of its range.
          </p>
          <p>
            Giant otters are noticeably larger and more gregarious than the smaller, more solitary otters many people picture. They are strong swimmers adapted to life in slow-moving and standing waters, and a single family commonly shares a stretch of shoreline, marking it and patrolling it together. The species is closely tied to healthy, fish-rich aquatic systems such as those of the Amazon basin and the Pantanal.
          </p>
          <p>
            The IUCN Red List currently classifies the giant otter as Endangered. As with all such assessments, this status reflects current understanding of pressures on the species and may be revised as conditions and research change. This profile is educational and focuses on the animal&#39;s biology, ecology and place in South American freshwater environments.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The giant otter, <em>Pteronura brasiliensis</em>, is a carnivoran mammal (order Carnivora) in the weasel family, Mustelidae, which also includes other otters, weasels and badgers. It is the only living species in the genus <em>Pteronura</em>, distinguishing it from the smaller otters in genera such as <em>Lontra</em> that share parts of its range. Within the family it belongs to the otter subfamily (Lutrinae), a group of semi-aquatic mustelids adapted to feeding in water. As a mammal, the giant otter is warm-blooded, breathes air and nurses its young.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The giant otter is recognised first by its size: it is the longest otter, with a streamlined, muscular body, a broad flattened tail used for propulsion, and prominent webbed feet. Its fur is short, dense and typically dark brown, appearing almost black when wet, and it has a wide, whiskered muzzle and small ears set on a rounded head. A characteristic feature is the pale, cream-coloured patch on the throat and chest, whose shape and pattern differ between individuals and can help researchers tell animals apart. Its eyes are relatively large, suiting a species that hunts by sight in clear and tannin-stained waters alike.
          </p>
        </>
      }
      habitat={
        <p>
          The giant otter is associated with freshwater systems in parts of South America, including river channels, oxbow lakes, creeks and seasonally flooded wetlands. It is strongly linked to lowland river basins such as the Amazon and to wetland regions like the Pantanal, where slow-moving or standing waters support abundant fish. The species favours areas with gently sloping banks suitable for resting sites, dens and communal latrines, and it depends on relatively undisturbed, well-vegetated shorelines. Its distribution occurs in parts of tropical and subtropical South America rather than across the entire continent, and it has become scarce or absent in many areas where it once occurred.
        </p>
      }
      diet={
        <p>
          Giant otters are primarily fish-eaters, and their diet is dominated by a range of freshwater fish that they catch in shallow and open water. They often hunt cooperatively as a family, using sharp eyesight and rapid underwater pursuit, and typically bring prey to the surface or a bank to eat, holding it in their forepaws. When fish are less available they may take other aquatic prey such as crustaceans, small caimans or other reptiles. As active, warm-blooded predators with high energy needs, giant otters feed frequently throughout the day.
        </p>
      }
      behavior={
        <>
          <p>
            The giant otter is unusually social for an otter, living in cohesive family groups that commonly centre on a breeding pair and their offspring of different ages. Group members hunt, rest, travel and defend territory together, communicating through a varied repertoire of calls including snorts, whistles and screams. Families maintain shared resting areas and latrine sites along the banks, and they cooperate in raising young, which are born in dens and remain dependent on the group for an extended period before becoming independent. Activity is concentrated during daylight hours, and older siblings often help care for younger pups.
          </p>
          <p>
            As a top aquatic predator in many of the systems it occupies, the giant otter helps shape fish communities and is often regarded as an indicator of healthy freshwater habitat. Its presence reflects waters that are productive, relatively clean and rich in prey, so changes in giant otter populations can signal wider shifts in the ecosystem. By consuming fish and other aquatic animals, it participates in nutrient cycling within river and wetland food webs. The species also shares its habitat with caimans, large fish and other predators, forming part of the complex predator community of South American freshwaters.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The giant otter is listed as Endangered on the IUCN Red List, a status that reflects pressures such as habitat loss, disturbance of waterways and degradation of the freshwater systems it depends on. It is best appreciated as a wild animal observed from a respectful distance; it is not a pet and should not be handled, fed or kept. Although giant otters are powerful predators and may react defensively if a family or its young feel threatened, the appropriate response to any wildlife concern or conflict is to contact local wildlife authorities rather than to approach the animals. Conservation of this species is closely linked to protecting the rivers, lakes and wetlands of its range.
        </p>
      }
      faqs={[
        {
          question: "Why is the giant otter called the \"river wolf\"?",
          answer:
            "The nickname reflects its life in social family groups and its role as a cooperative, fish-hunting predator in South American rivers and wetlands. It is a descriptive local name rather than a sign of any relation to actual wolves.",
        },
        {
          question: "How is the giant otter different from other otters?",
          answer:
            "It is the largest otter and far more social than the smaller, often solitary otters in genera such as Lontra. It is also the only living species in its genus, Pteronura, and is recognised by its size and pale throat patch.",
        },
        {
          question: "What is the conservation status of the giant otter?",
          answer:
            "The IUCN Red List currently classifies the giant otter as Endangered. This is a current assessment based on the pressures facing the species and may change as conditions and research evolve.",
        },
        {
          question: "Where do giant otters live?",
          answer:
            "They occur in freshwater systems in parts of South America, including river basins such as the Amazon and wetlands like the Pantanal. They are found in parts of the continent rather than across all of it, and need relatively undisturbed, fish-rich waters.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pteronura brasiliensis" },
        { label: "Animal group", value: "Mammal (otter)" },
        { label: "Family/order", value: "Mustelidae; Carnivora" },
        { label: "Size", value: "Largest of all otter species" },
        { label: "Diet", value: "Mainly fish; some other aquatic prey" },
        { label: "Habitat", value: "Rivers, lakes and wetlands" },
        { label: "Range", value: "Parts of South America" },
        { label: "Conservation status", value: "Endangered (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Otter", href: "/animals/otter", description: "Otters more broadly" },
        { label: "Pink River Dolphin", href: "/animals/pink-river-dolphin", description: "Another Amazon river mammal" },
        { label: "Capybara", href: "/animals/capybara", description: "A wetland neighbour" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
