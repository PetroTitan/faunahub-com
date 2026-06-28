import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/antarctic-toothfish";
const TITLE = "Antarctic Toothfish: Southern Ocean Predator";
const DESC =
  "The Antarctic toothfish is a large, slow-growing predatory fish of the Southern Ocean around Antarctica, with antifreeze proteins in its blood.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("antarctic-toothfish"),
});

export default function AntarcticToothfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Antarctic Toothfish"
      scientificName="Dissostichus mawsoni"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Southern Ocean","Antifreeze"]}
      image={getAnimalImage("antarctic-toothfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("antarctic-toothfish")}
      sources={ANIMAL_SOURCES["antarctic-toothfish"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Antarctic toothfish (<em>Dissostichus mawsoni</em>) is a large, slow-growing predatory fish found in the cold, high-latitude waters of the Southern Ocean around Antarctica. It is sometimes called the &quot;Antarctic cod,&quot; but this is a misleading common name: it is not a true cod and belongs to a different group of fishes entirely. The species can reach substantial sizes and lives for many years, which makes it a notable top-level predator in several Antarctic marine ecosystems, including the Ross Sea.
          </p>
          <p>
            One of the most remarkable features of this fish is its physiology. It produces antifreeze glycoproteins, special molecules that circulate in its blood and tissues and help prevent ice crystals from forming, allowing it to remain active in sub-zero seawater that would otherwise freeze the body fluids of most fishes. This adaptation is part of what allows the Antarctic toothfish to live in some of the coldest marine waters on Earth.
          </p>
          <p>
            The conservation picture for the Antarctic toothfish is not summarized by a single, simple global IUCN Red List category; formal global assessment has been limited, and information is incomplete. The species is the focus of a fishery managed by CCAMLR (the Commission for the Conservation of Antarctic Marine Living Resources) and of ongoing scientific and conservation attention. This profile is educational only and offers no fishing, harvesting, or food guidance of any kind; fishing pressure is mentioned solely as a conservation consideration.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Antarctic toothfish is a ray-finned fish, scientifically named <em>Dissostichus mawsoni</em>. It belongs to the family Nototheniidae, the so-called Antarctic cods or notothens, within the notothenioid fishes (suborder Notothenioidei, often placed in the order Perciformes). Despite the common name &quot;Antarctic cod,&quot; it is unrelated to the true cods of the family Gadidae; the resemblance is superficial. The genus <em>Dissostichus</em> contains a small number of closely related toothfishes adapted to cold southern waters. Notothenioid fishes as a group are well known to scientists for their cold-water adaptations, including antifreeze glycoproteins, and they make up much of the fish community of the Antarctic region. (Note that toothfishes, in the family Nototheniidae, are distinct from the icefishes of the family Channichthyidae, another notothenioid family group.)
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Antarctic toothfish is a robust, heavy-bodied fish that can grow large, with mature individuals reaching well over a metre in length. It has a broad head, a large mouth, and well-developed teeth suited to a predatory lifestyle, features that contribute to its common name. The body is generally elongated and tapering toward the tail, with coloration that tends toward dark grey, brownish, or mottled tones that can help it blend into the dim waters and seafloor it inhabits. Like other notothenioids, it lacks a swim bladder, and adaptations in its body composition help it manage buoyancy in deep, cold water. Its overall build reflects a slow-moving but capable predator.
          </p>
        </>
      }
      habitat={
        <p>
          This species is associated with the cold, high-latitude waters of the Southern Ocean around Antarctica, and it is especially well studied in the Ross Sea. It is a marine fish found across a wide range of depths, from waters near the continental shelf to deeper slope and offshore habitats; it is not a land animal and is not tied to the Antarctic land surface itself. Its distribution is best described cautiously as occurring in parts of the Southern Ocean around the Antarctic continent and near some coastal and offshore areas, rather than as a single uniform range across all of Antarctica. Because it tolerates sub-zero seawater through its antifreeze adaptations, it can occupy waters that exclude most other large fishes, making it a characteristic predator of these far-southern marine environments.
        </p>
      }
      diet={
        <p>
          The Antarctic toothfish is a predatory fish that feeds on other fishes and on a range of marine invertebrates such as squid and crustaceans, with the exact mix varying by location, depth, and the size of the individual. As a relatively large and long-lived predator, it occupies a high position in the food webs of the regions where it lives, and adults can take sizeable prey. Its slow growth and cold metabolism mean that it does not need to feed as rapidly as fishes in warmer waters. Scientists study its feeding ecology in part to understand how energy moves through Antarctic marine ecosystems and how this predator interacts with the prey species around it.
        </p>
      }
      behavior={
        <>
          <p>
            As a cold-adapted, slow-growing species, the Antarctic toothfish lives a comparatively long life and reaches reproductive maturity relatively late. These life-history traits, common among long-lived deep and cold-water fishes, mean that populations can recover only slowly from depletion, which is one reason the species attracts careful scientific and management attention. It moves through the water column and along the seafloor as it hunts, relying on its physiology rather than speed to persist in freezing conditions. Many details of its movements, spawning, and full life cycle remain incompletely known, and researchers continue to investigate these aspects to support cautious, evidence-based management.
          </p>
          <p>
            Within the Southern Ocean food web, the Antarctic toothfish functions as a notable top-level predator, particularly in ecosystems such as the Ross Sea, where it is one of the larger fish predators present. It both consumes smaller fishes and invertebrates and serves, in turn, as prey for larger animals, including some marine mammals and other predators that hunt in these waters. Because it sits high in the food web and is long-lived, scientists consider that changes in its abundance have the potential to affect connected parts of the ecosystem. This central role is a key reason the species is treated as ecologically important and is closely studied.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Human interest in the Antarctic toothfish centers on science, ecosystem monitoring, and a fishery managed by CCAMLR in the Southern Ocean. Its conservation status is not captured by a single definitive global IUCN Red List category, and assessments remain limited, so it is best discussed cautiously; fishing pressure and the species&#39; slow life history are noted by researchers as conservation considerations, and the framing here is informational rather than alarmist. This page is educational only and provides no fishing, harvesting, or food advice of any kind. Anyone with questions about protected Southern Ocean wildlife, marine management, or the regulated fishery should consult relevant authorities and bodies such as CCAMLR, which set and oversee the applicable rules.
        </p>
      }
      faqs={[
        {
          question: "Is the Antarctic toothfish really a cod?",
          answer:
            "No. Although it is sometimes called the \"Antarctic cod,\" it is not a true cod. It belongs to the family Nototheniidae and is unrelated to the true cods of the family Gadidae; the name reflects a superficial resemblance rather than a close relationship.",
        },
        {
          question: "How does the Antarctic toothfish survive in freezing water?",
          answer:
            "It produces antifreeze glycoproteins that circulate in its blood and tissues and help prevent ice crystals from forming. This adaptation allows it to stay active in sub-zero Southern Ocean water that would freeze the body fluids of most other fishes.",
        },
        {
          question: "What is the Antarctic toothfish's conservation status?",
          answer:
            "There is no single, simple global IUCN Red List category that cleanly describes the species, and formal assessment has been limited. It is managed as a CCAMLR fishery and receives scientific and conservation attention; fishing pressure is noted only as a conservation consideration, and any status framing should be treated as provisional and subject to change.",
        },
        {
          question: "Where does the Antarctic toothfish live?",
          answer:
            "It is a marine fish found in cold, high-latitude waters of the Southern Ocean around Antarctica, and it is especially well studied in the Ross Sea. It lives across a range of depths and is not a land animal of the Antarctic continent.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Dissostichus mawsoni" },
        { label: "Animal group", value: "Ray-finned fish (notothenioid)" },
        { label: "Family / order", value: "Nototheniidae; Perciformes" },
        { label: "Size", value: "Large; can exceed one metre in length" },
        { label: "Diet", value: "Predatory: fishes, squid, and crustaceans" },
        { label: "Habitat", value: "Cold Southern Ocean waters; various depths" },
        { label: "Range", value: "Southern Ocean around Antarctica (e.g. Ross Sea)" },
        { label: "Conservation status", value: "No single definitive global IUCN category; CCAMLR-managed, under scientific attention" },
      ]}
      relatedLinks={[
        { label: "Icefish", href: "/animals/icefish", description: "Another Antarctic fish" },
        { label: "Shark", href: "/animals/shark", description: "Another large fish" },
        { label: "Antarctic Krill", href: "/animals/antarctic-krill", description: "A Southern Ocean food-web species" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
