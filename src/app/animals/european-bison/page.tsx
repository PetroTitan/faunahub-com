import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-bison";
const TITLE = "European Bison (Wisent): Facts & Recovery";
const DESC =
  "The European bison, or wisent (Bison bonasus), is Europe's largest wild land mammal. Explore its forest habitat, herbivorous diet, and remarkable recovery.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-bison"),
});

export default function EuropeanBisonPage() {
  return (
    <AnimalProfileLayout
      commonName="European Bison"
      scientificName="Bison bonasus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Bovid","Reintroduced"]}
      image={getAnimalImage("european-bison") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-bison")}
      sources={ANIMAL_SOURCES["european-bison"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European bison (<em>Bison bonasus</em>), also widely known as the wisent, is the heaviest and largest living wild land animal in Europe. A massive herbivore of forests and forest-edge landscapes, it belongs to the same genus as the American bison but is recognized as a distinct species adapted to European woodland mosaics. Adults are heavily built, with a high-shouldered profile and a coat that thickens through the colder months.
          </p>
          <p>
            The species is notable not only for its size but for its conservation history. The European bison became extinct in the wild during the early 20th century, surviving only as a small number of animals held in captivity. Through carefully managed captive breeding and reintroduction programmes, beginning most famously in the Białowieża region on the border of present-day Poland and Belarus, free-ranging herds were gradually re-established. This recovery is one of the most cited examples of a large mammal being restored from near-total loss.
          </p>
          <p>
            On the IUCN Red List, the European bison was reassessed as Near Threatened in 2020, an improvement from its earlier Vulnerable listing. Such assessments reflect conditions at the time of evaluation and can change as populations and threats shift. The species remains dependent on continued management, and its profile combines genuine recovery with ongoing conservation attention.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European bison is a large hoofed mammal in the family Bovidae, the group that also includes cattle, buffalo, antelope, sheep, and goats. Its scientific name is <em>Bison bonasus</em>, placing it in the genus <em>Bison</em> alongside the American bison (<em>Bison bison</em>); the two are related but treated as separate species, and the European form is often distinguished by its taller, more forest-adapted build. As a member of the order Artiodactyla, the even-toed ungulates, it is a true ruminant, digesting fibrous plant material in a multi-chambered stomach. The common name wisent is used interchangeably with European bison.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The European bison is a large, powerfully built bovid with a pronounced shoulder hump, a relatively high head carriage, and a broad chest tapering to comparatively slender hindquarters. The coat is brown to dark brown, often denser and longer around the head, neck, and forequarters, with a shorter beard and a mane that becomes more conspicuous in winter. Both sexes carry curved horns, with bulls typically more massive overall than cows. Compared with the American bison, the wisent generally appears taller at the shoulder and somewhat less shaggy along the body, an outline suited to moving through woodland rather than open plains.
          </p>
        </>
      }
      habitat={
        <p>
          The European bison is associated with forest and forest-edge habitats interspersed with grassland, occurring today in scattered herds across parts of Europe, including areas of east-central and eastern Europe where reintroduction has taken place. It favors mixed landscapes that combine woodland cover with open clearings, meadows, and river valleys, where browse and grazing are both available. Present-day populations are largely the result of reintroduction and managed release rather than continuous historical range, so distribution is patchy and tied to specific protected areas and managed sites rather than spread evenly across the continent. Some herds are free-ranging while others remain under close management.
        </p>
      }
      diet={
        <p>
          The European bison is a herbivore that both grazes and browses, feeding on a wide range of grasses, herbaceous plants, sedges, leaves, shoots, bark, and twigs depending on the season. In warmer months it relies more heavily on grasses and other ground vegetation in clearings and meadows, while in winter it turns more to woody browse, bark, and any available forage, and may use supplementary feeding where this is provided as part of management. As a ruminant, it processes large quantities of fibrous material, and its mixed feeding strategy allows it to exploit the varied vegetation of forest-and-grassland mosaics.
        </p>
      }
      behavior={
        <>
          <p>
            European bison are social animals that typically form mixed groups of cows, calves, and younger animals, while older bulls are often more solitary or join herds mainly during the breeding season. Group size and composition can shift through the year with food availability and the rutting period, which generally falls in late summer to early autumn. After a gestation of several months a cow usually gives birth to a single calf, which can stand and follow the herd within a short time and is nursed for an extended period. Although generally not aggressive, these are large, strong wild animals capable of moving quickly when disturbed.
          </p>
          <p>
            As a large grazing and browsing herbivore, the European bison influences the structure of the vegetation around it, helping to maintain open clearings, affecting the regeneration of trees and shrubs, and creating a mosaic of grazed and ungrazed patches that benefits other species. Its movements disperse seeds and its feeding and trampling shape microhabitats used by smaller animals, insects, and plants. In this sense it functions as an ecosystem engineer within forest-and-grassland landscapes, and its reintroduction has been viewed in part as a way to restore these large-herbivore processes to areas where they had been lost.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European bison is closely tied to human conservation effort: having been lost from the wild, it survives today because of captive breeding, careful genetic management, and ongoing reintroduction and monitoring, and many herds still depend on active stewardship. As a Near Threatened species on the IUCN Red List, it remains a focus of conservation programmes, and that status is an assessment that may be revised as circumstances change. Because the wisent is a very large and powerful wild animal, observers should keep a respectful distance and never approach, feed, or crowd it; any concerns about an animal&#39;s behavior, or conflicts between bison and people or livestock, should be directed to local wildlife authorities. It is a wild species, not a domestic or kept animal.
        </p>
      }
      faqs={[
        {
          question: "Is the European bison the same as the American bison?",
          answer:
            "No. The European bison (Bison bonasus), or wisent, and the American bison (Bison bison) are related species in the same genus but are distinct, with the European form generally taller and more adapted to forest landscapes.",
        },
        {
          question: "Why did the European bison nearly disappear?",
          answer:
            "The species became extinct in the wild during the early 20th century and survived only in captivity. Free-ranging herds exist today because of captive breeding and reintroduction programmes, notably beginning in the Białowieża region.",
        },
        {
          question: "What is the conservation status of the European bison?",
          answer:
            "The IUCN Red List reassessed it as Near Threatened in 2020, an improvement from its previous Vulnerable listing. This is an assessment that can change, and the species still relies on continued conservation management.",
        },
        {
          question: "Is the European bison dangerous to people?",
          answer:
            "It is generally not aggressive but is a very large, powerful wild animal, so people should keep their distance and never approach or feed it. Any concerns about its behavior or conflicts should be reported to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Bison bonasus" },
        { label: "Animal group", value: "Mammal (ruminant ungulate)" },
        { label: "Family / order", value: "Bovidae / Artiodactyla" },
        { label: "Size", value: "Europe's largest wild land mammal; heavily built with a shoulder hump" },
        { label: "Diet", value: "Herbivore (grazer and browser)" },
        { label: "Habitat", value: "Forest and forest-edge mosaics with grassland" },
        { label: "Range", value: "Parts of Europe, largely via reintroduction" },
        { label: "Conservation status", value: "Near Threatened (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Bison Profile", href: "/animals/bison", description: "The American bison, a close relative" },
        { label: "Wild Boar Profile", href: "/animals/wild-boar", description: "Another large European mammal" },
        { label: "Red Deer Profile", href: "/animals/red-deer", description: "A large European herbivore" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
