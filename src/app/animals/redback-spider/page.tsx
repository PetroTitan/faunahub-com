import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/redback-spider";
const TITLE = "Redback Spider: Identification & Facts";
const DESC =
  "The redback spider (Latrodectus hasselti) is a widespread Australian widow relative; the female has a red stripe and often lives near human structures.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("redback-spider"),
});

export default function RedbackSpiderPage() {
  return (
    <AnimalProfileLayout
      commonName="Redback Spider"
      scientificName="Latrodectus hasselti"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Spider","Australia"]}
      image={getAnimalImage("redback-spider") ?? undefined}
      galleryImages={getAnimalGalleryImages("redback-spider")}
      sources={ANIMAL_SOURCES["redback-spider"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The redback spider (<em>Latrodectus hasselti</em>) is a widespread Australian spider best known for the female&#39;s glossy black body marked with a distinctive red stripe. It belongs to the genus <em>Latrodectus</em>, the same group that includes the widow spiders, and is one of the more frequently encountered arachnids in settled parts of Australia.
          </p>
          <p>
            Redbacks are strongly associated with human structures and disturbed ground, where sheltered nooks, undersides of objects and quiet corners provide the dry, protected spaces this spider favours. This tendency to live near people means encounters are relatively common, and the bite of the female can be medically significant. The species has not been assessed by the IUCN Red List.
          </p>
          <p>
            This profile presents the redback in an educational context only. Any bite or reaction should be directed to qualified medical professionals or local health authorities, and concerns about spiders in and around the home are best raised with local pest or wildlife authorities rather than addressed by handling the animal.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The redback spider is classified as <em>Latrodectus hasselti</em>, placing it within the genus <em>Latrodectus</em> in the family Theridiidae, the comb-footed or cobweb spiders, within the order Araneae. The genus <em>Latrodectus</em> is the same group commonly known as widow spiders, so the redback is a close relative of species such as the black widows found on other continents. As an arachnid and a true spider, it is an invertebrate with eight legs and two main body regions, and it builds the irregular, tangled webs characteristic of theridiid spiders.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The mature female redback is the form most people recognise: a rounded, pea-sized black abdomen marked by a prominent red (sometimes orange) stripe along the upper surface, often with an additional red marking underneath. Females are considerably larger than males, which are small, lighter brown and frequently overlooked. Juveniles can appear paler and more patterned before darkening with maturity. The combination of a glossy black body and the red dorsal stripe is the key identification feature, though related species can look similar, so cautious observation rather than close handling is the appropriate approach.
          </p>
        </>
      }
      habitat={
        <p>
          The redback is found across many parts of Australia, where it occupies a wide range of climates and is especially common in and around human-modified environments. It favours dry, sheltered sites such as the undersides of objects, gaps in outdoor furniture, sheds, mailboxes and quiet corners of gardens and structures, building its tangled web in these protected spaces. While the species is closely tied to Australia, it has also been recorded beyond its core range through human movement of goods. Its distribution should be understood as parts of Australia and nearby areas rather than any continent-wide or uniform presence, and within Oceania more broadly it is one species among a diverse arachnid fauna.
        </p>
      }
      diet={
        <p>
          As a predatory spider, the redback feeds chiefly on insects and other small invertebrates that become trapped in its web. The web&#39;s structure includes sticky vertical lines anchored to the ground that can ensnare ground-moving prey, which the spider then hauls upward. Occasionally larger or unusual prey may be captured if it becomes entangled. Prey is subdued and consumed in the manner typical of web-building spiders, with the redback relying on its silk and ambush strategy rather than active pursuit to obtain food.
        </p>
      }
      behavior={
        <>
          <p>
            Redbacks are largely sedentary, spending much of their lives within or near a single web in a sheltered location. Females construct and maintain the web and produce rounded egg sacs from which numerous spiderlings emerge; young spiders may disperse on air currents using strands of silk. The species is well known for its mating behaviour, in which the much smaller male is frequently consumed by the female during or after mating, a striking example of sexual cannibalism studied in this genus. The spider is not aggressive toward people and tends to retreat when disturbed, with defensive responses typically occurring only when it is pressed against skin.
          </p>
          <p>
            Within its range the redback functions as a small predator that helps regulate populations of insects and other invertebrates, including in and around human settlements where it is most often found. Its egg sacs and spiderlings, in turn, provide food for parasitic wasps, other spiders and various predators, integrating the species into local food webs. As a member of the comb-footed spider family, it contributes to the broader ecological balance of invertebrate communities, and its prevalence in disturbed and built environments reflects how well it has adapted to living alongside people.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Because the redback so often lives around homes, sheds and outdoor objects, encounters with people are common, and the bite of the female can be medically significant. The appropriate response is calm and practical: avoid handling the spider, and direct any bite or reaction to qualified medical professionals or local health authorities. Concerns about redbacks in living or working spaces are best raised with local pest or wildlife authorities rather than managed by attempting to catch the animal. The redback is a wild native spider, not a pet, and this profile offers no handling, capture, keeping or treatment guidance. It has not been assessed by the IUCN Red List, and its conservation status is best regarded as undetermined at the global level.
        </p>
      }
      faqs={[
        {
          question: "How do you recognise a redback spider?",
          answer:
            "The mature female has a rounded glossy black body with a distinctive red (sometimes orange) stripe on the upper abdomen, and often a red marking underneath. Males are much smaller, lighter and far less conspicuous.",
        },
        {
          question: "Where are redback spiders found?",
          answer:
            "Redbacks are found across many parts of Australia, especially in dry, sheltered spots in and around human structures such as sheds, gardens and outdoor furniture. They have also been recorded beyond this range through human movement of goods.",
        },
        {
          question: "Is a redback spider bite dangerous?",
          answer:
            "The bite of the female redback can be medically significant. Any bite or reaction should be directed to qualified medical professionals or local health authorities; this profile gives no first-aid or treatment guidance.",
        },
        {
          question: "What is the conservation status of the redback spider?",
          answer:
            "The redback spider (Latrodectus hasselti) has not been assessed by the IUCN Red List, so it has no formal global conservation category. Its status is best regarded as undetermined.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Latrodectus hasselti" },
        { label: "Animal group", value: "Invertebrate (arachnid, spider)" },
        { label: "Family/order", value: "Theridiidae; Araneae" },
        { label: "Size", value: "Female body roughly pea-sized; males much smaller" },
        { label: "Diet", value: "Insects and other small invertebrates" },
        { label: "Habitat", value: "Dry, sheltered sites, often around human structures" },
        { label: "Range", value: "Parts of Australia and nearby areas" },
        { label: "Conservation status", value: "Not assessed by the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Spider", href: "/animals/spider", description: "Spiders more broadly" },
        { label: "Funnel-web Spider", href: "/animals/funnel-web-spider", description: "Another Australian spider" },
        { label: "Scorpion", href: "/animals/scorpion", description: "Another arachnid" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
