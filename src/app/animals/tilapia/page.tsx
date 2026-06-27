import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tilapia";
const TITLE = "Tilapia: Africa's Mouthbrooding Freshwater Cichlids";
const DESC =
  "Learn about tilapia, the freshwater cichlid fishes including the Nile tilapia, their native African waters, algae-rich diet, and mouthbrooding behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("tilapia"),
});

export default function TilapiaPage() {
  return (
    <AnimalProfileLayout
      commonName="Tilapia"
      scientificName="Oreochromis niloticus (Nile tilapia)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Freshwater","Cichlid"]}
      image={getAnimalImage("tilapia") ?? undefined}
      galleryImages={getAnimalGalleryImages("tilapia")}
      sources={ANIMAL_SOURCES["tilapia"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            &quot;Tilapia&quot; is a common name applied to several groups of freshwater cichlid fishes, the best known of which is the Nile tilapia (<em>Oreochromis niloticus</em>). These fishes inhabit lakes, rivers, and ponds, where they feed largely on algae and plant matter. They are notable both as a natural part of African freshwater ecosystems and as one of the most widely farmed fishes in the world.
          </p>
          <p>
            Tilapia are native to parts of Africa and the Levant, but through aquaculture and deliberate introductions they now occur far beyond that original range. Many species are mouthbrooders, with a parent sheltering eggs and young inside its mouth. This combination of hardiness, plant-based feeding, and parental care has made tilapia both ecologically significant in their home waters and commercially important globally.
          </p>
          <p>
            Because &quot;tilapia&quot; covers multiple species and because native versus introduced ranges differ considerably, distribution and conservation details vary by species and region. Readers should check specific claims against authoritative sources such as the IUCN Red List, FishBase, and museum or university zoology references. This profile is educational and offers no aquaculture, fishing, cooking, or food-safety advice.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Tilapia are ray-finned fishes in the cichlid family, a large and diverse group of freshwater fishes. The name does not refer to a single species but spans several related genera, including <em>Oreochromis</em>, <em>Sarotherodon</em>, and <em>Tilapia</em> in the traditional sense. The Nile tilapia (<em>Oreochromis niloticus</em>) is the most familiar example. Cichlids as a group are well known for their varied feeding strategies and for forms of parental care, traits that are well represented among the tilapias.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Tilapia are typically deep-bodied, laterally compressed fishes with a single long dorsal fin that combines spiny and soft-rayed sections. Colouration varies by species, age, and condition, often ranging through silvery, greyish, and olive tones, sometimes with vertical banding or darker markings. The Nile tilapia is a moderately large cichlid, and like many of its relatives shows differences in colour and form between species and between breeding and non-breeding individuals.
          </p>
        </>
      }
      habitat={
        <p>
          Tilapia live in fresh and sometimes brackish waters such as lakes, rivers, and ponds. Their native range lies in parts of Africa and the Levant, with various species associated with particular African lake and river systems rather than the continent as a whole. The Nile tilapia, for example, is linked to certain river and lake basins within its natural African range. It is important to distinguish this native distribution from the much wider introduced and farmed range, where tilapia have been established on multiple continents and have sometimes become invasive outside their home waters.
        </p>
      }
      diet={
        <p>
          Most tilapia feed largely on algae and plant matter, and many graze on the fine plant growth and organic films found in their habitats. Some species also take plankton or detritus. This generally plant-based, low-on-the-food-chain diet is one reason tilapia are efficient feeders in productive freshwater environments and contributes to their success in a range of conditions.
        </p>
      }
      behavior={
        <>
          <p>
            A striking feature of many tilapia is mouthbrooding: a parent carries fertilised eggs and, after hatching, the young fish inside its mouth, sheltering them from predators during their most vulnerable stage. In several <em>Oreochromis</em> species this care is provided by the female. Tilapia often form social groupings, and breeding individuals may establish nesting sites. Their parental investment and adaptable feeding help explain their reproductive success across varied waters.
          </p>
          <p>
            In their native African waters, tilapia function as grazers and as a food source for larger fishes, birds, and other predators, linking abundant plant and algal growth to higher levels of the food web. Their ecological role shifts where they have been introduced: outside their natural range, established tilapia populations can compete with or alter communities of native species, and in some systems they are regarded as invasive. Understanding tilapia ecology therefore means separating their balanced role in African home waters from their effects in introduced settings.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Tilapia are among the most widely farmed fishes in the world, and they have been moved well beyond their native range through aquaculture and intentional stocking. While this has made them economically and nutritionally important in many regions, it has also led to introductions that can pressure native aquatic life, making such introductions a recognised conservation and management concern. Decisions about stocking, managing, or controlling tilapia populations are best left to local fisheries and wildlife authorities. This profile gives no aquaculture, fishing, harvesting, cooking, or food-safety guidance.
        </p>
      }
      faqs={[
        {
          question: "Is \"tilapia\" a single species of fish?",
          answer:
            "No. \"Tilapia\" is a common name covering several groups of freshwater cichlid fishes across more than one genus. The Nile tilapia (Oreochromis niloticus) is the best-known example, but the name applies to a number of related species.",
        },
        {
          question: "Where are tilapia originally from?",
          answer:
            "Tilapia are native to parts of Africa and the Levant, with individual species tied to particular lake and river systems rather than to the whole continent. Through farming and deliberate introductions, they now also occur in many other regions, where their range should be distinguished from the native one.",
        },
        {
          question: "What is mouthbrooding in tilapia?",
          answer:
            "Mouthbrooding is a form of parental care in which a parent fish carries the eggs and young inside its mouth to protect them from predators during early development. Many tilapia, including several Oreochromis species, are mouthbrooders.",
        },
        {
          question: "Why are tilapia sometimes considered invasive?",
          answer:
            "Where tilapia have been introduced beyond their native African range, established populations can compete with or affect native aquatic species, and in some systems they are regarded as invasive. Managing such populations is a matter for local fisheries and wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Freshwater cichlid fishes (e.g. Nile tilapia)" },
        { label: "Higher classification", value: "Cichlid family; ray-finned fishes" },
        { label: "Diet", value: "Mainly algae and plant matter; some plankton or detritus" },
        { label: "Notable trait", value: "Many are mouthbrooders, sheltering eggs and young in the mouth" },
        { label: "Habitat", value: "Lakes, rivers, and ponds; fresh and sometimes brackish water" },
        { label: "Africa distribution", value: "Native to parts of Africa and the Levant; varies by species and system" },
        { label: "Human interaction", value: "Among the most widely farmed fishes; widely introduced beyond native range" },
        { label: "Conservation status", value: "Varies by species; introductions are a recognised concern" },
      ]}
      relatedLinks={[
        { label: "Nile Perch Profile", href: "/animals/nile-perch", description: "A large African freshwater predator" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "A freshwater fish" },
        { label: "Carp Profile", href: "/animals/carp", description: "A widely farmed fish" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
