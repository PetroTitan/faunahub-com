import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/common-loon";
const TITLE = "Common Loon: Diving Bird of Northern Lakes";
const DESC =
  "Learn about the Common Loon (Gavia immer), a diving waterbird of clear northern lakes known for its black-and-white plumage and haunting calls.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("common-loon"),
});

export default function CommonLoonPage() {
  return (
    <AnimalProfileLayout
      commonName="Common Loon"
      scientificName="Gavia immer"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Diving waterbird","Lakes"]}
      image={getAnimalImage("common-loon") ?? undefined}
      galleryImages={getAnimalGalleryImages("common-loon")}
      sources={ANIMAL_SOURCES["common-loon"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Common Loon (<em>Gavia immer</em>) is a large diving waterbird associated with clear, deep lakes across parts of northern North America, along with parts of Iceland and Greenland. It is best known for its striking breeding plumage of glossy black and crisp white, its deep red eyes, and the haunting yodels and wails that carry across quiet northern waters. These calls have become a familiar emblem of remote lake country.
          </p>
          <p>
            Loons are highly specialized for life in the water. Their legs are set far back on the body, which makes them powerful underwater swimmers but awkward and ungainly on land. As pursuit divers, they chase prey beneath the surface and can stay submerged for extended periods. They spend much of the year on or near water, coming ashore mainly to nest.
          </p>
          <p>
            The IUCN Red List currently assesses the Common Loon as Least Concern. The species also holds cultural significance: it is the provincial bird of Ontario and appears on the Canadian one-dollar coin, which is widely nicknamed the loonie.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Common Loon&#39;s scientific name is <em>Gavia immer</em>. It belongs to the family Gaviidae and the order Gaviiformes, a group made up entirely of loons (known in some regions as divers). This order is distinct from ducks, grebes, and other waterbirds, and loons are not closely related to them despite some superficial resemblance. <em>Gavia immer</em> is one of several loon species, and is among the larger members of the group.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            In breeding plumage, the Common Loon is unmistakable: a black head with a greenish sheen, deep red eyes, a heavy pointed black bill, a black-and-white checkered back, and a white underside, often with a banded necklace pattern across the throat. In non-breeding plumage it is much plainer, showing grayish upperparts and a paler throat and breast. The body is large and streamlined, the neck is thick, and the legs are positioned far back toward the tail, an adaptation for underwater propulsion that gives the bird its characteristically labored movement on land.
          </p>
        </>
      }
      habitat={
        <p>
          The Common Loon is associated with clear, relatively deep freshwater lakes during the breeding season, occurring across parts of northern North America and in parts of Iceland and Greenland. It favors waters that are clear enough to support successful underwater hunting and large enough for its running takeoff across the surface. Outside the breeding season, many loons move to coastal marine waters and larger ice-free lakes. It is a migratory species in much of its range, and its distribution should be understood as occurring in parts of these northern regions rather than across any entire continent.
        </p>
      }
      diet={
        <p>
          The Common Loon feeds mainly on fish, which it pursues underwater as an expert diving hunter, using its strong feet for propulsion and its sharp bill to seize prey. It locates food largely by sight, which is part of why clear water is so important to it. Beyond fish, loons may also take crustaceans, aquatic insects, amphibians, and other small aquatic animals when available. Prey is often swallowed underwater or brought to the surface before being eaten.
        </p>
      }
      behavior={
        <>
          <p>
            Loons are well known for their vocalizations, including yodels, wails, tremolos, and hoots that serve in communication and territory defense across northern lakes. During the breeding season, pairs typically nest close to the water&#39;s edge, since their rearward-set legs make moving on land difficult. Young chicks can swim soon after hatching and are sometimes carried on a parent&#39;s back in their early days. To become airborne, loons usually need a long stretch of open water for a running takeoff, and they are strong, direct fliers once aloft.
          </p>
          <p>
            As a fish-eating diving predator, the Common Loon occupies a role near the top of the food web in many northern lake ecosystems, and its presence is often associated with clear, well-oxygenated waters. Because it depends on healthy aquatic habitats and good water clarity for hunting, the species is frequently regarded as an indicator of lake water quality. Its eggs and young can in turn be vulnerable to a range of natural predators, linking it into the broader web of life in these freshwater systems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Common Loon is admired across its range and is closely tied to cultural identity in parts of Canada, where it is the provincial bird of Ontario and lends its name to the loonie coin. The IUCN Red List currently classifies it as Least Concern, though this is an assessment that can change over time as conditions are monitored. Like many lake-dependent birds, loons can be affected by factors such as water quality, shoreline disturbance, and habitat change. People who encounter loons are encouraged to observe from a distance and to direct any concerns about distressed or injured wildlife to local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Why is the Common Loon so awkward on land?",
          answer:
            "Its legs are set far back on the body, which is excellent for underwater swimming but makes walking on land difficult. For this reason loons spend most of their time on water and usually nest close to the shoreline.",
        },
        {
          question: "What does the Common Loon eat?",
          answer:
            "It feeds mainly on fish, which it hunts underwater as a pursuit diver, locating prey largely by sight. It may also take crustaceans, aquatic insects, amphibians, and other small aquatic animals.",
        },
        {
          question: "Is the Common Loon endangered?",
          answer:
            "The IUCN Red List currently assesses the Common Loon as Least Concern. As with all conservation assessments, this status reflects current information and can change over time.",
        },
        {
          question: "Why is it linked to the Canadian dollar coin?",
          answer:
            "The Common Loon appears on the Canadian one-dollar coin, which is widely nicknamed the loonie because of the bird's image. The loon is also the provincial bird of Ontario.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Gavia immer" },
        { label: "Animal group", value: "Bird (diving waterbird)" },
        { label: "Family or order", value: "Gaviidae; order Gaviiformes" },
        { label: "Size", value: "Large waterbird with a thick neck and heavy bill" },
        { label: "Diet", value: "Mainly fish; also crustaceans and other small aquatic animals" },
        { label: "Habitat", value: "Clear northern lakes; coastal and larger waters off-season" },
        { label: "Range", value: "Parts of northern North America, Iceland, and Greenland" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; can change over time)" },
      ]}
      relatedLinks={[
        { label: "Duck Profile", href: "/animals/duck", description: "Another waterbird" },
        { label: "Pelican", href: "/animals/pelican", description: "Another fishing waterbird" },
        { label: "Swan Profile", href: "/animals/swan", description: "Another large waterbird" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
