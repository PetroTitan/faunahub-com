import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/california-condor";
const TITLE = "California Condor: North America's Largest Bird";
const DESC =
  "Learn about the California Condor, a critically endangered New World vulture and one of North America's largest flying birds, restored by captive breeding.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("california-condor"),
});

export default function CaliforniaCondorPage() {
  return (
    <AnimalProfileLayout
      commonName="California Condor"
      scientificName="Gymnogyps californianus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Vulture","Critically Endangered"]}
      image={getAnimalImage("california-condor") ?? undefined}
      galleryImages={getAnimalGalleryImages("california-condor")}
      sources={ANIMAL_SOURCES["california-condor"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The California Condor (<em>Gymnogyps californianus</em>) is one of the largest flying land birds in North America and among the rarest birds in the world. A New World vulture, it is a soaring scavenger with an enormous wingspan, recognizable in flight by its long, broad wings and the pale patches beneath them. Adults have largely black plumage and a bare head whose coloring can shift with the bird&#39;s condition and mood.
          </p>
          <p>
            This species holds a notable place in modern conservation history. By the 1980s its numbers had fallen so low that the last remaining wild individuals were taken into captivity, and the species was considered Extinct in the Wild for a time. Through captive breeding and carefully managed release, condors have since been returned to parts of the south-western United States and Mexico, where small, intensively monitored populations now persist.
          </p>
          <p>
            The California Condor is assessed as Critically Endangered on the IUCN Red List. This profile is educational and ecological in focus; conservation assessments reflect current understanding and can change as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The California Condor is classified as <em>Gymnogyps californianus</em>, the only living member of its genus. It belongs to the family Cathartidae, the New World vultures, a group that includes the Andean condor, turkey vulture, and black vulture. Despite their vulture-like role as scavengers, New World vultures are a distinct lineage and are not closely related to the vultures of Africa and Eurasia, with which they share appearance and feeding habits largely through convergent evolution. As a bird, it falls within the class Aves.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a strikingly large bird, with a wingspan that ranks among the broadest of any flying land bird in North America. Adults are mostly black, with conspicuous pale or whitish patches on the underside of the wings that are visible as the bird soars overhead. The head and upper neck are largely bare of feathers, an adaptation common among scavenging birds, and the bare skin can appear in shades of pink, orange, or yellow. A ruff of dark feathers surrounds the base of the neck. Many wild-released individuals carry numbered wing tags and tracking equipment as part of monitoring programs, which can aid identification at a distance.
          </p>
        </>
      }
      habitat={
        <p>
          The California Condor is associated with open and mountainous country in parts of the south-western United States and parts of Mexico, including rugged terrain, canyons, foothills, and coastal ranges where rising air currents support extended soaring. Historically the species ranged more widely across parts of western North America, but its present distribution reflects the locations of managed reintroduction efforts rather than a continuous natural range. Birds rely on cliffs, large trees, and rock formations for nesting and roosting, and may travel considerable distances in a single day while foraging. Its occurrence today is closely tied to ongoing recovery programs in specific regions.
        </p>
      }
      diet={
        <p>
          As a scavenger, the California Condor feeds almost entirely on carrion, locating animal carcasses as it soars over open landscapes. It will feed on the remains of a wide range of animals, from large mammals to smaller carcasses, and uses its keen eyesight, sometimes following other scavengers, to find food. Lacking the powerful talons of birds of prey, it does not hunt or kill, instead relying on already-dead animals. Condors can consume substantial amounts at a single feeding and may then go for extended periods between meals, a pattern suited to the unpredictable availability of carrion.
        </p>
      }
      behavior={
        <>
          <p>
            California Condors are long-lived and slow to reproduce, traits that make population recovery gradual. Pairs typically raise a single chick at a time, nesting in caves, cliff crevices, or other sheltered sites, and both parents share in the lengthy care of the young, which depends on them well beyond fledging. The birds are highly social at feeding and roosting sites, where social structure and learned behavior play a role. Much of the day is spent soaring on thermals and updrafts, covering wide areas in search of food while expending relatively little energy.
          </p>
          <p>
            As large scavengers, California Condors contribute to their ecosystems by consuming animal carcasses, a process that helps recycle nutrients and can reduce the persistence of carrion in the landscape. This scavenging role connects them to broader food webs and to other carrion-feeding species with which they sometimes share carcasses. Because the species exists today only in small, managed populations within parts of its former range, its current ecological influence is limited compared with the historical past, and its recovery is closely studied as part of understanding how such scavengers function within their habitats.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The California Condor is a focus of intensive conservation work, having been brought back from the brink through captive breeding and managed release after being considered Extinct in the Wild. Lead poisoning, often from fragments ingested while feeding on carcasses, is widely reported as a major ongoing threat to the species&#39; recovery, alongside other hazards. Released populations are closely monitored, and many individuals are tracked and periodically health-checked by recovery programs. Members of the public who encounter a condor, including a tagged or apparently injured bird, should keep a respectful distance and direct any concerns to local wildlife authorities rather than approaching or attempting to interact with the animal.
        </p>
      }
      faqs={[
        {
          question: "Why was the California Condor once considered Extinct in the Wild?",
          answer:
            "By the 1980s the wild population had declined so severely that the remaining individuals were brought into captivity to protect them, leaving none in the wild for a period. Captive breeding and release programs later returned condors to parts of their former range.",
        },
        {
          question: "Is the California Condor a true vulture?",
          answer:
            "It is a New World vulture in the family Cathartidae, a scavenging group distinct from the vultures of Africa and Eurasia. The two groups resemble each other mainly through similar lifestyles rather than close relationship.",
        },
        {
          question: "What is the conservation status of the California Condor?",
          answer:
            "The IUCN Red List assesses it as Critically Endangered. Such assessments reflect current knowledge and can be revised as new information emerges.",
        },
        {
          question: "What should I do if I see a California Condor?",
          answer:
            "Observe it from a distance without approaching or disturbing it, as released birds are part of monitored recovery programs. Report an injured, tagged, or distressed bird to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Gymnogyps californianus" },
        { label: "Animal group", value: "Bird (New World vulture)" },
        { label: "Family", value: "Cathartidae" },
        { label: "Size", value: "Among the largest flying land birds in North America, with a very broad wingspan" },
        { label: "Diet", value: "Scavenger; feeds on carrion" },
        { label: "Habitat", value: "Open and mountainous country, canyons, and coastal ranges" },
        { label: "Range", value: "Parts of the south-western US and parts of Mexico (managed reintroduction)" },
        { label: "Conservation status", value: "Critically Endangered (IUCN Red List; assessment can change)" },
      ]}
      relatedLinks={[
        { label: "Vulture", href: "/animals/vulture", description: "Vultures more broadly" },
        { label: "Eagle Profile", href: "/animals/eagle", description: "Another large raptor" },
        { label: "Bald Eagle", href: "/animals/bald-eagle", description: "A North American bird of prey" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
