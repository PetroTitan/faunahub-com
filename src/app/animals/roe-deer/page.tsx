import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/roe-deer";
const TITLE = "Roe Deer: Europe's Small Woodland-Edge Deer";
const DESC =
  "Learn about the roe deer (Capreolus capreolus), a small European deer of woodland edges and farmland, known for its delayed embryonic implantation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("roe-deer"),
});

export default function RoeDeerPage() {
  return (
    <AnimalProfileLayout
      commonName="Roe Deer"
      scientificName="Capreolus capreolus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Deer","Woodland"]}
      image={getAnimalImage("roe-deer") ?? undefined}
      galleryImages={getAnimalGalleryImages("roe-deer")}
      sources={ANIMAL_SOURCES["roe-deer"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The roe deer (<em>Capreolus capreolus</em>) is a small, slender deer associated with woodland edges, farmland, and mixed countryside across parts of Europe. It is one of the most familiar wild deer in the region, often seen at the boundary where forest meets open ground, especially in the quieter hours around dawn and dusk. Despite its wide occurrence, it tends to be unobtrusive, slipping into cover when disturbed.
          </p>
          <p>
            Roe deer are notable for a reproductive trait called delayed implantation, or embryonic diapause, in which the fertilised egg pauses its development for several months before continuing. This is unusual among European deer and has long interested biologists studying mammal reproduction. The species is also distinct from the larger red deer and from the general &quot;deer&quot; group, with its own ecology, build, and behaviour.
          </p>
          <p>
            According to the IUCN Red List, the roe deer is currently assessed as Least Concern. This is a present assessment that reflects its broad distribution and adaptability rather than a permanent guarantee, and conservation status can change over time as conditions and data are reviewed.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The roe deer is a mammal in the deer family, Cervidae, within the order Artiodactyla (even-toed ungulates). Its scientific name is <em>Capreolus capreolus</em>, and it belongs to the genus <em>Capreolus</em>, which also includes the closely related Siberian roe deer (<em>Capreolus pygargus</em>) found further east. Within the deer family it is one of the smaller members, and it should not be confused with the much larger red deer (<em>Cervus elaphus</em>) or treated as interchangeable with the general &quot;deer&quot; group, which spans many genera and body plans. As a true deer, the male grows and sheds antlers each year rather than carrying permanent horns.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The roe deer is a compact, lightly built deer that stands at roughly knee-to-thigh height to an adult human at the shoulder, with a short body and slim legs. Its coat changes seasonally, typically a warm reddish-brown in summer and a greyer or duller brown in winter, with a pale patch on the rump that can appear conspicuous when the animal flees. It has a short, almost inconspicuous tail, large rounded ears, and a dark muzzle with light markings. Males (bucks) carry short antlers that usually bear up to three tines, or points, and are often roughened at the base; females (does) lack antlers. The relatively small size, the rump patch, and the modest three-tined antlers help distinguish it from the larger red deer.
          </p>
        </>
      }
      habitat={
        <p>
          The roe deer is found in parts of Europe, where it occurs across a range of wooded and semi-open landscapes. It is strongly associated with woodland edges, forest clearings, scrub, hedgerows, and farmland mosaics, favouring places where cover sits close to feeding areas. It also occurs in parts of upland and lowland country and has adapted to landscapes shaped by agriculture and forestry. Its distribution within Europe is patchy and shaped by habitat, land use, and local management rather than uniform across the continent, and it should not be described as occupying every region. In some areas populations reflect natural spread, while in others they have been influenced by reintroduction or local management.
        </p>
      }
      diet={
        <p>
          The roe deer is a selective herbivore and a browser rather than a bulk grazer. It feeds on a varied plant diet that includes the shoots, leaves, and buds of shrubs and trees, along with herbs, brambles, ferns, grasses, and seasonal items such as fruits, acorns, and fungi where available. It tends to pick out the more nutritious and easily digested parts of plants, which is consistent with its relatively small body size and its preference for habitat edges rich in low-growing vegetation. Its feeding is most active around dawn and dusk, with the diet shifting through the year as different plants become available.
        </p>
      }
      behavior={
        <>
          <p>
            Roe deer are often seen alone or in small, loose groups, and they are generally most active at dawn and dusk. Bucks become territorial in the warmer months, and the species has a breeding season in summer; this is followed by the embryonic diapause that delays the development of the embryo, so that young are typically born the following spring or early summer. Does usually give birth to one or two fawns, which have spotted coats and lie hidden in vegetation during their first weeks while the mother forages nearby. When alarmed, roe deer may give a sharp barking call and bound away, often flashing the pale rump patch. Antlers are grown and cast on an annual cycle in the bucks.
          </p>
          <p>
            As a browsing herbivore, the roe deer plays a part in shaping vegetation at woodland edges and in clearings, influencing the growth of young shrubs, tree seedlings, and ground plants. Its feeding and movement can affect plant communities and the structure of the habitats it uses, and it forms part of the prey base for larger predators where those occur within its range. Through its dispersal of seeds in fur and droppings and its grazing pressure, it interacts with the wider ecosystem in ways typical of small deer. In landscapes where natural predators are scarce, deer numbers and their effects on vegetation are often a focus of local ecological management.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The roe deer is widely encountered by people across parts of Europe and is a familiar sight in farmland and at the edges of woods. It is a wild animal, not a pet, and it is best observed quietly from a distance without approaching, feeding, or attempting to handle it. The species is assessed as Least Concern on the IUCN Red List, an assessment that can change over time, and in many areas its numbers are subject to local wildlife management. Concerns about roe deer in gardens, on farmland, or near roads, as well as situations involving an injured or distressed animal, are best directed to local wildlife authorities, who can advise on appropriate and lawful action.
        </p>
      }
      faqs={[
        {
          question: "What is delayed implantation in roe deer?",
          answer:
            "Delayed implantation, or embryonic diapause, is a pause in the development of the fertilised egg after mating. In roe deer this delay spans several months, so although breeding occurs in summer, the embryo only resumes development later and fawns are usually born the following spring or early summer.",
        },
        {
          question: "How is a roe deer different from a red deer?",
          answer:
            "The roe deer is much smaller and more lightly built than the red deer, and roe bucks carry short antlers with usually up to three points rather than the larger, branched antlers of red deer. They are separate species with different ecology, and the roe deer also differs from the general \"deer\" group, which covers many kinds of deer.",
        },
        {
          question: "Are roe deer dangerous to people?",
          answer:
            "Roe deer are shy wild herbivores that typically flee from people rather than approach them, and they are not predatory. As with any wild animal they should not be approached or handled, and any concerns, such as an animal near a road or in distress, are best reported to local wildlife authorities.",
        },
        {
          question: "What is the conservation status of the roe deer?",
          answer:
            "The roe deer is currently assessed as Least Concern on the IUCN Red List, reflecting its broad distribution and adaptability. This is a present assessment that can change over time as populations and habitats are monitored.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Capreolus capreolus" },
        { label: "Animal group", value: "Mammal (true deer)" },
        { label: "Family / order", value: "Cervidae / Artiodactyla" },
        { label: "Size", value: "Small deer; slender build, short body" },
        { label: "Diet", value: "Herbivore (selective browser)" },
        { label: "Habitat", value: "Woodland edges, clearings, scrub, farmland" },
        { label: "Range", value: "Found in parts of Europe" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Red Deer Profile", href: "/animals/red-deer", description: "A larger European deer" },
        { label: "Deer Profile", href: "/animals/deer", description: "Deer more broadly" },
        { label: "European Hare", href: "/animals/european-hare", description: "Another farmland mammal" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
