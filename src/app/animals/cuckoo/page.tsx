import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cuckoo";
const TITLE = "Cuckoo — Profile, Brood Parasitism, Egg Mimicry & Migration";
const DESC =
  "Explore the common cuckoo (Cuculus canorus): the brood parasite that lays in other birds' nests, with host-matched eggs and a chick that evicts rivals.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("cuckoo"),
});

export default function CuckooPage() {
  return (
    <AnimalProfileLayout
      commonName="Cuckoo"
      scientificName="Cuculus canorus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Brood Parasite","Migratory"]}
      image={getAnimalImage("cuckoo") ?? undefined}
      galleryImages={getAnimalGalleryImages("cuckoo")}
      sources={ANIMAL_SOURCES.cuckoo}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The common cuckoo (<em>Cuculus canorus</em>) is a slim, long-tailed migratory bird of Europe and Asia, grey above with barred underparts. In flight and posture it looks strikingly like a small hawk — a resemblance thought to help it approach nests, because host birds react to it as a predator.
        </p>
        <p>
          The cuckoo is the classic <strong>brood parasite</strong>. Females lay their eggs in the nests of other bird species and provide no parental care at all. The host raises the cuckoo chick as its own.
        </p>
        <p>
          The two-note call that gives the bird — and the clock — its name is made by the male. It is one of the most recognisable sounds in the northern spring.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Common cuckoos breed across Europe and northern Asia in woodland, scrub, heath, reedbed, moorland and farmland — wherever suitable host species are common. They are long-distance migrants, wintering in sub-Saharan Africa, and satellite tracking has revealed that individuals depart the breeding grounds remarkably early, often by midsummer.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Cuckoos eat insects, and are notable for taking <strong>hairy caterpillars</strong> that most birds avoid because the irritant hairs make them unpalatable. Cuckoos deal with these by periodically shedding the stomach lining. They also take other insects and invertebrates.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          A female cuckoo watches host nests, then lays quickly — often in a matter of seconds — usually removing one host egg as she does so. Females belong to lineages called gentes, each specialising on a particular host species and laying eggs that closely mimic that host&apos;s eggs in colour and markings. The cuckoo chick hatches early and, while still blind and naked, pushes the host&apos;s eggs or chicks out of the nest, monopolising all the food its foster parents bring. Hosts and cuckoos are locked in an evolutionary arms race: hosts get better at spotting foreign eggs, and cuckoos get better at matching them.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The cuckoo&apos;s call is deeply embedded in European culture, from the cuckoo clock to folklore about the arrival of spring, and &apos;cuckoo in the nest&apos; has passed into ordinary language. Populations have declined markedly in parts of Europe, with causes thought to include reductions in host species and in large insect prey, and conditions along the migration route and in African wintering areas. Satellite tagging programmes have transformed understanding of where individual cuckoos go. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Do cuckoos really lay eggs in other birds' nests?",
          answer:
            "Yes. The common cuckoo is a brood parasite: the female lays in the nests of other species, usually removing one host egg as she does so, and gives no parental care at all. The host bird incubates the egg and raises the chick.",
        },
        {
          question: "How do cuckoo eggs match the host's eggs?",
          answer:
            "Female cuckoos belong to lineages called gentes, each specialising on one host species and laying eggs that mimic that host's in colour and markings. The match is the product of an arms race — hosts improve at detecting foreign eggs, and cuckoos improve at imitating them.",
        },
        {
          question: "What happens to the host's own chicks?",
          answer:
            "The cuckoo chick usually destroys them. Shortly after hatching, while still blind and naked, it manoeuvres the host's eggs or chicks onto its back and pushes them out of the nest, so that all the food the foster parents bring goes to it alone.",
        },
        {
          question: "Why do cuckoos look like hawks?",
          answer:
            "Adult common cuckoos resemble small hawks in plumage and flight, and host birds often respond to them as if they were predators. The resemblance is generally interpreted as helping the female approach nests, since a bird that flees a suspected hawk is not defending its nest against a parasite.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cuculus canorus" },
        { label: "Family", value: "Cuculidae" },
        { label: "Class", value: "Aves" },
        { label: "Breeding strategy", value: "Brood parasitism — no parental care" },
        { label: "Egg mimicry", value: "Host-specific lineages (gentes)" },
        { label: "Chick behaviour", value: "Evicts host eggs and chicks" },
        { label: "Diet", value: "Insects, including hairy caterpillars" },
        { label: "Migration", value: "Europe and Asia to sub-Saharan Africa" },
      ]}
      relatedLinks={[
        { label: "Roadrunner Profile", href: "/animals/roadrunner", description: "A ground-dwelling cuckoo relative" },
        { label: "Coucal Profile", href: "/animals/coucal", description: "A cuckoo that raises its own young" },
        { label: "Honeyguide Profile", href: "/animals/honeyguide", description: "Another brood parasite" },
        { label: "Robin Profile", href: "/animals/robin", description: "A cuckoo host species" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
