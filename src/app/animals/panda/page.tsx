import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-20";

const title = "Giant Panda — Profile, Habitat, Diet & Behavior";
const description =
  "Ailuropoda melanoleuca: the giant panda. Bamboo-based diet, montane forest habitat in central China, solitary lifestyle, and decades of conservation work.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/panda",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("panda"),
});

export default function PandaPage() {
  return (
    <AnimalProfileLayout
      commonName="Giant Panda"
      scientificName="Ailuropoda melanoleuca"
      pageTitle={title}
      description={description}
      path="/animals/panda"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Bear", "Endemic to China"]}
      image={getAnimalImage("panda") ?? undefined}
      overview={
        <>
          <p>
            The giant panda (<em>Ailuropoda melanoleuca</em>) is a bear endemic to mountainous
            bamboo forests of central China. Despite belonging to the order Carnivora, the
            giant panda&apos;s diet consists almost entirely of bamboo. Its distinctive
            black-and-white coat, slow reproductive rate, and dependence on bamboo make it
            one of the most studied — and most symbolic — animals in modern conservation.
          </p>
          <p>
            <strong>Conservation note:</strong> The giant panda was reclassified by the IUCN
            from Endangered to <strong>Vulnerable</strong> as of the most recent assessments
            (verify current status at iucnredlist.org before publication). Long-running
            conservation programmes are credited with this improvement, but the species
            remains habitat-dependent and not out of risk.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild giant pandas occupy temperate broadleaf and mixed forests with a strong
            understorey of bamboo, primarily in the Sichuan, Shaanxi, and Gansu provinces of
            China. Suitable habitat is restricted to particular elevational bands where the
            bamboo species the pandas depend on flourish.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Although classified as a carnivore by ancestry, the giant panda is a specialised
            bamboo-feeder. Pandas spend a very large proportion of each day feeding to extract
            sufficient nutrition from this low-energy food. Their digestive system retains
            features typical of carnivores, which is one reason they must consume bamboo in
            such quantity. They will occasionally feed on other plant material and very rarely
            on animal matter, but bamboo is overwhelmingly dominant.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Giant pandas are largely solitary outside of mating and the rearing of cubs.
            They are quiet, slow-moving animals that spend much of their waking time feeding.
            Adults mark territories with scent and avoid direct contact with one another for
            most of the year. Reproduction is notoriously slow — females are receptive for a
            very short window each year, and cubs are very small at birth and dependent on
            the mother for an extended period.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Conservation of the giant panda has involved habitat protection, reserve
            networks, anti-poaching enforcement, and extensive captive-breeding and research
            programmes. The species&apos; status improvement is generally cited as a
            conservation success, with the important caveat that the wild population remains
            small and fragmented and that bamboo forests are themselves sensitive to climate
            and land-use change.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The giant panda&apos;s appearance is one of the most recognisable of any
                wild animal. The body is bear-like — stocky, round-faced, with a short tail
                and a thick double-layered coat — but the colour pattern is unmistakable:
                a <strong>white or cream base coat</strong> set against{" "}
                <strong>black eye-patches</strong>, black ears, black limbs, and a black
                band that runs across the shoulders and forelimbs. Individuals differ
                slightly in the exact shape of the eye-patches and the extent of black on
                the legs, but the overall pattern is consistent enough to function as a
                species cue at first glance.
              </p>
              <p>
                A closer look at the forepaw reveals a distinctive &quot;pseudothumb&quot;
                — an enlarged radial sesamoid bone that helps the panda grip bamboo stems
                while feeding. While the coat pattern alone is highly indicative, the
                molecular evidence that places the giant panda firmly within family Ursidae
                is more authoritative than appearance, and the unrelated red panda
                (<em>Ailurus fulgens</em>) — despite the shared common name — is a much
                smaller, reddish-brown animal in a separate family.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Giant pandas are true bears (Ursidae), most closely related to other extant bear
          species. The red panda (<em>Ailurus fulgens</em>) is named similarly but belongs to
          a separate family and is not closely related.
        </p>
      }
      faqs={[
        {
          question: "Is the giant panda really a bear?",
          answer:
            "Yes. Genetic studies have firmly placed the giant panda within the bear family Ursidae. Its specialised diet and morphology made its classification historically contested, but the molecular evidence is now consistent.",
        },
        {
          question: "Why do pandas eat so much bamboo?",
          answer:
            "Bamboo is the dominant available understorey plant in their habitat, and giant pandas have specialised behaviourally and anatomically — including a 'pseudo-thumb' from a modified wrist bone — to exploit it. Because bamboo is relatively low in nutrients, pandas must consume large amounts each day.",
        },
        {
          question: "Are giant pandas still endangered?",
          answer:
            "Recent IUCN assessments classify the giant panda as Vulnerable rather than Endangered, reflecting population increases from sustained conservation. Status can change, and 'Vulnerable' still indicates significant risk; current status should be checked on the IUCN Red List before quoting.",
        },
        {
          question: "How many giant pandas remain in the wild?",
          answer:
            "Wild population estimates from Chinese government surveys and other monitoring exist but vary by methodology and year. Population estimates are best taken directly from the most recent published surveys rather than older approximate figures.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ailuropoda melanoleuca" },
        { label: "Family", value: "Ursidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Almost exclusively bamboo" },
        { label: "Social structure", value: "Solitary (territorial)" },
        { label: "Primary habitat", value: "Bamboo-rich mountain forests" },
        { label: "Range", value: "Central China (Sichuan, Shaanxi, Gansu)" },
        { label: "IUCN Status", value: "Vulnerable (verify before publication)" },
      ]}
      relatedLinks={[
        { label: "Bear Overview", href: "/animals/bear", description: "Family Ursidae" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
        { label: "Animal Comparisons", href: "/compare" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
