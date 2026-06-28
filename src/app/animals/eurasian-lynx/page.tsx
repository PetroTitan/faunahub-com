import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/eurasian-lynx";
const TITLE = "Eurasian Lynx: Europe's Largest Wild Cat";
const DESC =
  "Learn about the Eurasian lynx (Lynx lynx), the largest lynx species: its forest habitat, solitary hunting, ecology, and conservation across Eurasia.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("eurasian-lynx"),
});

export default function EurasianLynxPage() {
  return (
    <AnimalProfileLayout
      commonName="Eurasian Lynx"
      scientificName="Lynx lynx"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Wild cat","Forest"]}
      image={getAnimalImage("eurasian-lynx") ?? undefined}
      galleryImages={getAnimalGalleryImages("eurasian-lynx")}
      sources={ANIMAL_SOURCES["eurasian-lynx"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Eurasian lynx (<em>Lynx lynx</em>) is the largest of the world&#39;s lynx species and one of the more elusive wild cats associated with forested regions of Eurasia. Recognized by its tufted ears, short tail, and spotted coat, it is a solitary predator adapted to cold climates and dense cover, where it hunts chiefly by stalking and ambush rather than long pursuit.
          </p>
          <p>
            Although the species is currently listed as Least Concern on the IUCN Red List at a global level, this assessment reflects its wide overall distribution rather than uniform abundance and can change over time as conditions are reassessed. Some populations in parts of Europe are small and fragmented, and several have been the focus of reintroduction efforts intended to restore the cat to areas where it had previously disappeared.
          </p>
          <p>
            This profile covers the Eurasian lynx specifically. It is a distinct species from the broader lynx genus discussed on the general lynx page, and it should not be confused with the Iberian lynx (<em>Lynx pardinus</em>), a separate and more narrowly distributed species.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Eurasian lynx is a mammal in the cat family, Felidae, within the order Carnivora. It belongs to the genus <em>Lynx</em>, which contains four recognized species: the Eurasian lynx (<em>Lynx lynx</em>), the Iberian lynx (<em>Lynx pardinus</em>), the Canada lynx (<em>Lynx canadensis</em>), and the bobcat (<em>Lynx rufus</em>). Among these, the Eurasian lynx is the largest. It is a true cat and a member of the medium-sized felid group, distinguished from the other lynxes primarily by its size, range, and ecology; as a species it is separate both from the general genus-level lynx profile and from the Iberian lynx, with which it is sometimes confused.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Eurasian lynx is a medium-sized cat with a comparatively long-legged build, large furred paws, and a short, black-tipped tail. Distinctive features include prominent black tufts on the ears and a ruff of longer fur framing the face, sometimes described as facial &quot;whiskers.&quot; Its coat varies seasonally and regionally, ranging from grayish to reddish-brown, often marked with darker spots that are more pronounced in some individuals than others; winter fur tends to be thicker and paler. The large paws act like snowshoes in deep snow, an adaptation suited to the cold forests it occupies.
          </p>
        </>
      }
      habitat={
        <p>
          The Eurasian lynx is associated with forested and mountainous landscapes across parts of Europe and northern Asia, including boreal and mixed woodland that provides dense cover for stalking prey. It occurs in parts of Scandinavia, the Carpathians, the Balkans, the Alps, and across wide areas of the forested zone of northern Asia, though its presence is uneven and many European populations are localized or fragmented. The cat is native to much of this range, while some European occurrences result from reintroduction rather than continuous historical presence. It generally favors areas with sufficient cover and ungulate prey, and it is not found uniformly across the whole of any continent.
        </p>
      }
      diet={
        <p>
          The Eurasian lynx is a carnivore and an ambush predator that feeds primarily on small to medium-sized ungulates, with roe deer being a frequent prey item across much of its range. Where deer are scarce, hares and other small mammals can form a larger share of its diet, and it may also take birds and other available prey. It typically hunts by stealth, approaching closely under cover before a short, decisive rush rather than running prey down over long distances. A lynx may cache a large kill and return to feed over several days.
        </p>
      }
      behavior={
        <>
          <p>
            Eurasian lynx are solitary and largely active around dawn and dusk, maintaining home ranges that can be extensive, particularly for males. Adults generally avoid one another outside the breeding season, communicating through scent marks and vocalizations. Mating typically occurs in late winter, after which the female raises a small litter of kittens on her own in a sheltered den. The young remain with their mother through their first year, gradually learning to hunt before dispersing to establish their own ranges, a period during which young animals face considerable natural risks.
          </p>
          <p>
            As a predator of roe deer, hares, and other prey, the Eurasian lynx influences the abundance and behavior of the animals it hunts and contributes to the structure of the forest communities it inhabits. By preying on ungulates, it can play a part in regulating herbivore numbers, which in turn affects vegetation and the broader ecosystem. As a wide-ranging carnivore requiring large areas of suitable habitat, it is often regarded as an indicator of relatively intact forest landscapes and connectivity between them.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Eurasian lynx is a wild animal and not a pet, and it is generally secretive and inclined to avoid people. It is listed as Least Concern on the IUCN Red List globally, but this is an assessment that can change over time, and some European populations remain small or fragmented and are supported by reintroduction and habitat-protection efforts. Historic threats have included habitat loss, reduced prey, and persecution, and conflict can arise where lynx are perceived to affect livestock. Concerns about a wild lynx or about wildlife conflict should be directed to local wildlife authorities rather than approached directly.
        </p>
      }
      faqs={[
        {
          question: "Is the Eurasian lynx the same as the Iberian lynx?",
          answer:
            "No. The Eurasian lynx (Lynx lynx) and the Iberian lynx (Lynx pardinus) are separate species. The Eurasian lynx is larger and far more widely distributed, while the Iberian lynx has a much smaller range.",
        },
        {
          question: "Is the Eurasian lynx endangered?",
          answer:
            "The species is currently listed as Least Concern on the IUCN Red List at a global level, reflecting its wide distribution. However, this is an assessment that can change, and some European populations are small or fragmented and the focus of reintroduction efforts.",
        },
        {
          question: "What does the Eurasian lynx eat?",
          answer:
            "It is a carnivore that hunts mainly small to medium-sized ungulates such as roe deer, along with hares and other small animals where larger prey is scarce. It typically hunts by stalking and ambush.",
        },
        {
          question: "Is the Eurasian lynx dangerous to people?",
          answer:
            "The Eurasian lynx is a secretive wild cat that generally avoids humans, and it is not kept as a pet. Any concerns about a wild lynx or about wildlife conflict should be reported to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lynx lynx" },
        { label: "Animal group", value: "Mammal (wild cat)" },
        { label: "Family", value: "Felidae (order Carnivora)" },
        { label: "Size", value: "Largest of the lynx species; medium-sized cat" },
        { label: "Diet", value: "Carnivore; chiefly small ungulates (e.g. roe deer) and hares" },
        { label: "Habitat", value: "Forested and mountainous areas with dense cover" },
        { label: "Range", value: "Parts of Europe and northern Asia" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Lynx Profile", href: "/animals/lynx", description: "Lynxes more broadly" },
        { label: "Wolf Profile", href: "/animals/wolf", description: "Another European carnivore" },
        { label: "Roe Deer Profile", href: "/animals/roe-deer", description: "A common lynx prey species" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
