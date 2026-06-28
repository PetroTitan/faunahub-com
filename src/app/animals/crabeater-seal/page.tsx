import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/crabeater-seal";
const TITLE = "Crabeater Seal: Antarctic Pack-Ice Mammal";
const DESC =
  "The crabeater seal is a slender Antarctic pack-ice mammal that filters krill, not crabs. Learn its biology, habitat, and Least Concern status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("crabeater-seal"),
});

export default function CrabeaterSealPage() {
  return (
    <AnimalProfileLayout
      commonName="Crabeater Seal"
      scientificName="Lobodon carcinophaga"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Seal","Pack ice"]}
      image={getAnimalImage("crabeater-seal") ?? undefined}
      galleryImages={getAnimalGalleryImages("crabeater-seal")}
      sources={ANIMAL_SOURCES["crabeater-seal"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The crabeater seal (<em>Lobodon carcinophaga</em>) is a slender, pale seal closely associated with the pack ice surrounding Antarctica. Despite its name, it does not eat crabs. It feeds mainly on Antarctic krill, which it filters from seawater using highly specialised, finely lobed teeth. The misleading common name is a quirk of history rather than a description of its diet, and it is worth correcting calmly when the species is introduced.
          </p>
          <p>
            It is often described as one of the most abundant large wild mammals on Earth, though estimates vary widely and exact numbers are difficult to confirm across the remote sea-ice habitat where it lives. The crabeater seal is a marine and coastal mammal of the Southern Ocean, not a land animal, and it spends much of its life on and around drifting pack ice rather than on the Antarctic mainland itself.
          </p>
          <p>
            The International Union for Conservation of Nature (IUCN) Red List currently assesses the crabeater seal as Least Concern. As with all conservation assessments, this status reflects present understanding and can change over time as new information becomes available, particularly given the species&#39; close ties to sea-ice conditions.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The crabeater seal is a marine mammal in the family Phocidae, the true or earless seals, within the order Carnivora. Its scientific name is <em>Lobodon carcinophaga</em>, and it is the only living member of the genus <em>Lobodon</em>. The genus name refers to its distinctive lobed teeth, while the species name unhelpfully echoes the crab-eating myth despite the animal being a krill specialist. It belongs to a group of Antarctic phocids that also includes the leopard seal, Weddell seal, and Ross seal, all of which are adapted to life in or near Southern Ocean ice.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Crabeater seals are relatively slender and streamlined for true seals, with a long, narrow snout. Coat colour is variable and changes through the year, ranging from silvery or pale fawn after the annual moult to a darker brownish tone that fades to near-white over the seasons. Many individuals carry long scars, often along the flanks, which are commonly attributed to encounters with leopard seals early in life. Their most distinctive feature is internal: the cheek teeth bear multiple fine cusps or lobes that interlock to form a sieve, allowing the seal to strain small prey from seawater. Adults typically reach roughly 2 to 2.6 metres in length.
          </p>
        </>
      }
      habitat={
        <p>
          The crabeater seal is tied to the pack ice that surrounds the Antarctic continent, and it is found across parts of the Southern Ocean rather than on the mainland interior. It hauls out and rests on drifting floes, moving with the ice as it forms and breaks up through the year. Individuals are most strongly associated with the seasonal pack-ice zone, and their distribution shifts with ice extent. Wandering or vagrant animals are occasionally recorded well outside this core range, including near subantarctic islands and, rarely, far to the north. This is a marine and coastal species; it is not a land mammal of Antarctica, which has no native terrestrial mammals.
        </p>
      }
      diet={
        <p>
          Antarctic krill form the overwhelming majority of the crabeater seal&#39;s diet, supplemented to a much smaller degree by other small crustaceans, fish, and squid. The seal feeds by taking in mouthfuls of krill-laden water and then expelling the water through the gaps between its intricately lobed cheek teeth, which act as a filter that retains the prey. This specialised feeding apparatus is unusual among seals and reflects close adaptation to a single, extremely abundant food source. Much of its foraging is thought to take place at night, when krill rise toward the surface.
        </p>
      }
      behavior={
        <>
          <p>
            Crabeater seals are often seen hauled out on ice floes, sometimes in loose aggregations, though they are not strongly colonial. Breeding occurs on the pack ice in the southern spring, when a female typically gives birth to a single pup and is attended by an adult male; this trio may be defended until the pup is weaned after a few weeks of rapid growth on rich milk. Young animals face heavy predation pressure during their early life, which is reflected in the scarring many adults carry. Outside the breeding period, crabeaters are generally seen alone or in small groups as they follow shifting ice and foraging opportunities.
          </p>
          <p>
            As an abundant krill specialist, the crabeater seal occupies a central position in the Southern Ocean food web, linking the vast krill stocks of Antarctic waters to higher predators. It is itself an important prey species, particularly for leopard seals, which take many young crabeaters, and for killer whales. Because the species depends so heavily on krill and on the pack ice it rests upon, its fortunes are closely connected to the health of the broader Antarctic marine ecosystem. Scientists consider changes in sea ice and in krill availability to be relevant to the long-term outlook for ice-dependent seals, though such links are complex and the subject of ongoing study.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Crabeater seals live in remote Antarctic waters and have limited direct contact with people. Like all wild marine wildlife, they should be observed only from a respectful distance and never approached, handled, or disturbed; concerns about injured, stranded, or protected animals should be directed to relevant national authorities and Antarctic management bodies. The species is currently listed as Least Concern by the IUCN Red List, but this assessment can change, and its strong dependence on sea ice and krill means it is monitored within the wider context of Southern Ocean conservation. This page is purely educational and offers no guidance on hunting, fishing, harvesting, food use, or interacting with the species or its prey.
        </p>
      }
      faqs={[
        {
          question: "Do crabeater seals actually eat crabs?",
          answer:
            "No. Despite the name, crabeater seals do not eat crabs. They feed mainly on Antarctic krill, which they filter from seawater using specialised, finely lobed teeth. The common name is misleading and does not reflect their real diet.",
        },
        {
          question: "Where do crabeater seals live?",
          answer:
            "Crabeater seals are tied to the pack ice surrounding Antarctica and are found across parts of the Southern Ocean. They rest on drifting ice floes rather than on the Antarctic mainland, and their range shifts with the seasonal extent of the ice.",
        },
        {
          question: "Are crabeater seals endangered?",
          answer:
            "The IUCN Red List currently lists the crabeater seal as Least Concern, and it is often described as one of the most abundant large wild mammals on Earth. Conservation status can change over time, and the species is monitored alongside broader Southern Ocean conditions.",
        },
        {
          question: "What eats crabeater seals?",
          answer:
            "Leopard seals are major predators, particularly of young crabeater seals, and killer whales also prey on them. Many adult crabeaters carry scars thought to come from leopard seal encounters during their early life.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lobodon carcinophaga" },
        { label: "Animal group", value: "Marine mammal (true seal)" },
        { label: "Family / order", value: "Phocidae / Carnivora" },
        { label: "Size", value: "About 2 to 2.6 metres long" },
        { label: "Diet", value: "Mainly Antarctic krill (filter feeder)" },
        { label: "Habitat", value: "Antarctic pack ice; marine and coastal" },
        { label: "Range", value: "Pack-ice zone around Antarctica, Southern Ocean" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; can change)" },
      ]}
      relatedLinks={[
        { label: "Seal", href: "/animals/seal", description: "Seals more broadly" },
        { label: "Leopard Seal", href: "/animals/leopard-seal", description: "An Antarctic predator seal" },
        { label: "Antarctic Krill", href: "/animals/antarctic-krill", description: "Its main food" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
