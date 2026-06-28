import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/funnel-web-spider";
const TITLE = "Funnel-web Spider: Australian Atracidae Facts";
const DESC =
  "Australian funnel-web spiders (family Atracidae) live in burrows in parts of eastern and southern Australia. Calm, factual overview with a safety note.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("funnel-web-spider"),
});

export default function FunnelWebSpiderPage() {
  return (
    <AnimalProfileLayout
      commonName="Funnel-web Spider"
      scientificName="Atracidae (e.g. Atrax robustus)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Spider","Australia"]}
      image={getAnimalImage("funnel-web-spider") ?? undefined}
      galleryImages={getAnimalGalleryImages("funnel-web-spider")}
      sources={ANIMAL_SOURCES["funnel-web-spider"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Australian funnel-web spiders are a group of ground- and burrow-dwelling spiders in the family Atracidae, found in parts of eastern and southern Australia. The name covers several species, including the well-known Sydney funnel-web, <em>Atrax robustus</em>. These spiders are recognised for their stout, glossy bodies and their habit of constructing silk-lined burrows or retreats from which trip-lines of silk may radiate.
          </p>
          <p>
            The common name &quot;funnel-web spider&quot; is shared with some unrelated, harmless &quot;funnel-weaver&quot; spiders found in other parts of the world; this profile concerns only the Australian Atracidae. Some species in this family have venom that is medically significant to people, so they are best observed at a distance and never handled.
          </p>
          <p>
            Because the group includes several species, it is not assessed by the IUCN Red List as a single unit. This profile presents what is generally understood about these spiders in calm, educational terms, with bite or reaction concerns directed to qualified medical professionals or local health authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Australian funnel-web spiders belong to the family Atracidae, a group of mygalomorph spiders (the infraorder that also includes tarantulas and trapdoor spiders, characterised by downward-striking, parallel fangs). The family contains several genera and species, with the Sydney funnel-web, <em>Atrax robustus</em>, being among the most frequently referenced. Because &quot;funnel-web spider&quot; is an umbrella name spanning multiple species rather than a single one, statements about size, range and venom can vary from species to species, and the group as a whole has not been evaluated by the IUCN Red List under one assessment.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Funnel-web spiders are generally robust, medium to large spiders with glossy, hairless carapaces and dark coloration ranging from deep brown to nearly black. They have a heavy-bodied build, fairly short and powerful legs, and forward-projecting fangs typical of mygalomorph spiders. Small visible spinnerets at the rear are often noted as a recognition feature. Size varies among the species in the family, and males and females can differ in body proportions, so identification of any individual spider in the wild is best left to specialists rather than attempted by close inspection.
          </p>
        </>
      }
      habitat={
        <p>
          These spiders are associated with parts of eastern and southern Australia, where they occupy sheltered, humid microhabitats such as soil burrows, crevices, and spaces beneath logs, rocks or leaf litter. They typically line a retreat with silk and may extend irregular silk trip-lines from the entrance. Distribution differs between species within the family, so the group should be understood as occurring across parts of Australia rather than throughout the continent or across Oceania as a whole. Damp, shaded ground and gardens within their range can provide suitable conditions, and individuals are most often encountered in cool, moist settings.
        </p>
      }
      diet={
        <p>
          Funnel-web spiders are ambush predators that feed mainly on invertebrates such as insects and other small arthropods, and larger individuals may occasionally take small vertebrates. Rather than spinning an aerial web to catch prey, they rely on their silk-lined burrow and surrounding trip-lines, detecting vibrations when prey moves nearby before emerging quickly to seize it with their fangs. Prey is subdued and then consumed at or near the retreat. This sit-and-wait strategy suits their largely sedentary, ground-dwelling lifestyle.
        </p>
      }
      behavior={
        <>
          <p>
            These spiders are largely nocturnal and spend much of their lives within or close to their burrows, emerging to ambush passing prey. Females tend to be long-lived and remain in established retreats, while mature males of some species wander, particularly in warmer and more humid conditions, in search of mates. After mating, females produce an egg sac and may guard developing young within the retreat. Spiderlings disperse to establish their own burrows, and individuals can take time to reach maturity. When disturbed, a funnel-web may adopt a defensive posture rather than flee, which is one reason these spiders should never be handled.
          </p>
          <p>
            As ground-dwelling predators, funnel-web spiders contribute to regulating populations of insects and other invertebrates within their habitats. Their burrows are part of the soil and leaf-litter ecosystem, and the spiders themselves serve as prey for various birds, reptiles and other animals, linking them into local food webs. By occupying the predatory niche of patient, burrow-based ambush hunters, they form one component of the wider invertebrate community in the moist habitats of parts of eastern and southern Australia.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Some Australian funnel-web species have venom that is medically significant to people, so these spiders are presented here with a calm, factual safety note: they should never be handled, captured or kept, and any bite or reaction should be treated as a matter for qualified medical professionals or local health authorities. They are not pets, and this profile offers no first-aid, treatment or handling guidance. Concerns about a funnel-web in or around a home are best directed to local wildlife or pest authorities. Although some species can be alarming when encountered, sensational framing is unhelpful; understanding their behaviour and giving them space is the most useful response. As a multi-species group, funnel-web spiders are not assessed by the IUCN Red List under a single conservation category.
        </p>
      }
      faqs={[
        {
          question: "Are all funnel-web spiders dangerous to people?",
          answer:
            "Funnel-web spider is a name covering several Australian species in the family Atracidae, and some have venom that is medically significant to people. Because risk varies between species, any bite or reaction should be assessed by qualified medical professionals or local health authorities.",
        },
        {
          question: "Where are Australian funnel-web spiders found?",
          answer:
            "They are associated with parts of eastern and southern Australia, living in soil burrows and other sheltered, humid spots. Their distribution varies by species, so they occur across parts of Australia rather than throughout the continent or across Oceania.",
        },
        {
          question: "Is the Australian funnel-web the same as a funnel-weaver spider?",
          answer:
            "No. Unrelated, harmless \"funnel-weaver\" spiders in other regions share a similar name but belong to different families. This profile concerns only the Australian Atracidae.",
        },
        {
          question: "What is the conservation status of funnel-web spiders?",
          answer:
            "Because \"funnel-web spider\" refers to several species rather than one, the group is not assessed by the IUCN Red List as a single unit, and any individual species would need its own evaluation.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Atracidae (e.g. Atrax robustus)" },
        { label: "Animal group", value: "Invertebrate (mygalomorph spider)" },
        { label: "Family/order", value: "Family Atracidae, order Araneae" },
        { label: "Size", value: "Medium to large; varies by species" },
        { label: "Diet", value: "Insects and other small invertebrates" },
        { label: "Habitat", value: "Burrows and sheltered, humid ground retreats" },
        { label: "Range", value: "Parts of eastern and southern Australia" },
        { label: "Conservation status", value: "Not assessed by the IUCN as a group" },
      ]}
      relatedLinks={[
        { label: "Spider", href: "/animals/spider", description: "Spiders more broadly" },
        { label: "Redback Spider", href: "/animals/redback-spider", description: "Another Australian spider" },
        { label: "Tarantula", href: "/animals/tarantula", description: "A large spider" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
