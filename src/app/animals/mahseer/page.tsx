import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mahseer";
const TITLE = "Mahseer: Large River Carp of South and Southeast Asia";
const DESC =
  "Learn about the mahseer, large freshwater carp of the genus Tor found in fast-flowing rivers across parts of South and Southeast Asia, and its conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("mahseer"),
});

export default function MahseerPage() {
  return (
    <AnimalProfileLayout
      commonName="Mahseer"
      scientificName="genus Tor and relatives"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Freshwater","River carp"]}
      image={getAnimalImage("mahseer") ?? undefined}
      galleryImages={getAnimalGalleryImages("mahseer")}
      sources={ANIMAL_SOURCES["mahseer"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The mahseer is a large freshwater fish of the carp family, belonging to the genus <em>Tor</em> and several related groups. These powerful, large-scaled fish are associated with fast-flowing rivers and streams across parts of South and Southeast Asia, including Himalayan and peninsular Indian river systems. They are among the most recognizable river fish of the region and have long held cultural and ecological significance.
          </p>
          <p>
            Mahseer are strong swimmers adapted to swift, well-oxygenated water. They feed on a varied diet of plants, insects, crustaceans, and small fish, and some species can reach considerable size. Several mahseer are iconic river fish, and a number are of conservation concern as dams, pollution, and overfishing alter the rivers they depend on.
          </p>
          <p>
            Range and conservation status differ from species to species within this group, and some details remain uncertain or under revision. Readers should treat this profile as a general educational overview and check authoritative sources such as the IUCN Red List, Animal Diversity Web, and regional zoological references for species-level specifics.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Mahseer are members of the carp family (Cyprinidae), the same broad family that includes carps, barbs, and minnows. The name &quot;mahseer&quot; is applied to several large-bodied species, most prominently those in the genus <em>Tor</em>, along with closely related genera. Because the group spans multiple species across a wide region, its classification has been revised over time, and not every population has been fully resolved taxonomically. They are true bony fish, not related to the catfishes or other large river fish with which they sometimes share habitat.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Mahseer are notable for their large, prominent scales, which give the body a distinctly armored appearance, and for their streamlined, muscular form built for life in moving water. They typically have a broad head, fleshy lips, and barbels near the mouth, features common to many carp-family fishes. Coloration varies among species and populations, often ranging through golden, bronze, silvery, and darker tones. Some mahseer grow to a large size, which has contributed to their reputation as iconic river fish.
          </p>
        </>
      }
      habitat={
        <p>
          Mahseer are associated with fast-flowing rivers and streams across parts of South and Southeast Asia. Their range includes Himalayan river systems and peninsular Indian rivers, among other flowing freshwater habitats in the region, rather than the continent as a whole. They favor clear, well-oxygenated, swiftly moving water, and different species occupy different river systems. Because individual species have distinct and sometimes restricted distributions, range claims are best confirmed at the species level against authoritative sources.
        </p>
      }
      diet={
        <p>
          Mahseer are omnivorous feeders. Their diet includes plant material, insects, crustaceans, and small fish, allowing them to exploit a range of food sources within river ecosystems. This varied feeding reflects their adaptability to the changing conditions of flowing-water habitats, where available food can shift with season and water flow.
        </p>
      }
      behavior={
        <>
          <p>
            As powerful swimmers, mahseer are well suited to navigating swift currents and turbulent stretches of river. Many are known to move within river systems over the course of the year, and some undertake movements associated with breeding and seasonal changes in flow. Their strength and size in moving water are central to their identity as river fish.
          </p>
          <p>
            Within the rivers of parts of South and Southeast Asia, mahseer occupy an important place in freshwater food webs as sizable omnivores that both consume and are consumed within the ecosystem. Their dependence on clear, fast-flowing, well-oxygenated water makes them sensitive to changes in river condition, so their presence is often regarded as an indicator of healthy river systems. Disruptions such as dam construction, pollution, and altered flow can affect their habitat and movement.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Mahseer have long been culturally significant river fish in the regions where they occur, and several are now of conservation concern. The status varies by species, with some assessed as Endangered, and pressures including dams, pollution, and overfishing have contributed to declines in certain populations. Conservation efforts in parts of the range focus on protecting river habitats and the fish that depend on them. This profile is educational and offers no fishing, angling, harvesting, or food guidance; those interested in mahseer conservation can look to regional fisheries authorities and recognized conservation organizations.
        </p>
      }
      faqs={[
        {
          question: "What is a mahseer?",
          answer:
            "A mahseer is a large freshwater fish of the carp family, chiefly in the genus Tor and related groups. The name covers several species found in fast-flowing rivers and streams across parts of South and Southeast Asia.",
        },
        {
          question: "Where are mahseer found?",
          answer:
            "Mahseer are associated with fast-flowing rivers and streams in parts of South and Southeast Asia, including Himalayan and peninsular Indian river systems. Individual species have distinct distributions, so range is best checked at the species level.",
        },
        {
          question: "What do mahseer eat?",
          answer:
            "Mahseer are omnivorous, feeding on plants, insects, crustaceans, and small fish. This varied diet helps them adapt to the changing conditions of flowing-water river habitats.",
        },
        {
          question: "Are mahseer endangered?",
          answer:
            "Conservation status varies by species; some mahseer are assessed as Endangered, while others are less clear. Dams, pollution, and overfishing are among the pressures. Consult the IUCN Red List for species-level status.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Freshwater fish (carp family)" },
        { label: "Higher classification", value: "Family Cyprinidae; genus Tor and relatives" },
        { label: "Diet", value: "Omnivorous: plants, insects, crustaceans, small fish" },
        { label: "Notable trait", value: "Large scales and powerful swimming in fast water" },
        { label: "Habitat", value: "Fast-flowing rivers and streams" },
        { label: "Asia distribution", value: "Parts of South and Southeast Asia, including Himalayan and peninsular Indian rivers" },
        { label: "Human interaction", value: "Culturally significant river fish; some of conservation concern" },
        { label: "Conservation status", value: "Varies by species; some Endangered" },
      ]}
      relatedLinks={[
        { label: "Carp Profile", href: "/animals/carp", description: "A close carp-family relative" },
        { label: "Mekong Giant Catfish", href: "/animals/mekong-giant-catfish", description: "Another large Asian river fish" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "A freshwater fish" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
