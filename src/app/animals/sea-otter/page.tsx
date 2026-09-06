import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-otter";
const TITLE = "Sea Otter — Profile, Densest Fur, Tool Use & Kelp Forests";
const DESC =
  "Explore the sea otter (Enhydra lutris): a marine mustelid with the densest fur of any animal, a habit of using stone tools, and a kelp-forest role.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("sea-otter"),
});

export default function SeaOtterPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Otter"
      scientificName="Enhydra lutris"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal","Mustelid","Kelp Forest"]}
      image={getAnimalImage("sea-otter") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-otter")}
      sources={ANIMAL_SOURCES["sea-otter"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The sea otter (<em>Enhydra lutris</em>) is the smallest marine mammal and the most fully aquatic member of the weasel family. It lives along the northern Pacific rim, spending almost its entire life at sea — feeding, resting, grooming and even giving birth in the water.
        </p>
        <p>
          Sea otters have no blubber. Instead they rely on <strong>the densest fur of any animal</strong>, which traps a layer of air against the skin. That fur only works if it is meticulously maintained, so grooming occupies a large part of every day, and oil contamination is catastrophic for them.
        </p>
        <p>
          To fuel a high metabolism in cold water, a sea otter must eat a very large share of its body weight daily — which is what makes it such a powerful force in the ecosystems it inhabits.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Sea otters live in shallow coastal waters along the North Pacific — from northern Japan and the Russian Far East through the Aleutians and Alaska to British Columbia and California. They favour rocky nearshore habitat with kelp forests, where they can forage on the seabed and anchor themselves in kelp fronds while resting.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Sea otters eat marine invertebrates: sea urchins, crabs, clams, mussels, abalone, snails, and some fish and octopus depending on region. Individual otters often specialise on particular prey and techniques. Because they burn energy fast in cold water, they consume a very large proportion of their body weight each day.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Sea otters are among the best-known tool users outside primates and birds: an otter will carry a suitable stone and use it to crack hard-shelled prey against its chest while floating on its back, sometimes storing the stone in a loose skin pouch under the foreleg. They rest at the surface in single-sex groups called rafts and wrap themselves in kelp to avoid drifting. Grooming is constant, and pups are cared for intensively by the mother.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Sea otters were hunted almost to extinction in the maritime fur trade for their exceptional pelts, and surviving remnant populations have since expanded under protection. They are widely cited as a keystone species: by eating sea urchins they limit urchin grazing on kelp, helping kelp forests persist — an effect with consequences for many other species. Modern threats include oil spills, entanglement, disease, predation and conflict with shellfish fisheries. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why do sea otters have such thick fur?",
          answer:
            "Because they have no blubber to insulate them. Sea otters rely entirely on fur, which is the densest of any animal and traps a layer of air next to the skin. That also means the fur must be kept immaculately clean to work, which is why otters groom so much and why oil spills are so damaging to them.",
        },
        {
          question: "Do sea otters really use tools?",
          answer:
            "Yes. A sea otter will select a stone and use it to break open hard-shelled prey such as clams, mussels and urchins, typically while floating on its back with the stone on its chest. Otters often keep a favoured stone, carrying it in a loose fold of skin beneath the foreleg.",
        },
        {
          question: "Why are sea otters important to kelp forests?",
          answer:
            "They eat sea urchins, which graze on kelp. Where sea otters are present, urchin numbers stay lower and kelp forests can persist; where otters are removed, urchins can expand and strip the kelp. This makes the sea otter one of the standard examples of a keystone species.",
        },
        {
          question: "Why do sea otters hold hands?",
          answer:
            "Resting otters gather in groups called rafts and may hold onto one another or wrap themselves in kelp fronds. The function is practical — it keeps animals from drifting apart or being carried off by currents while they sleep at the surface.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Enhydra lutris" },
        { label: "Family", value: "Mustelidae (weasel family)" },
        { label: "Class", value: "Mammalia" },
        { label: "Insulation", value: "Fur only — no blubber" },
        { label: "Fur", value: "Densest of any animal" },
        { label: "Tool use", value: "Stones used to crack shelled prey" },
        { label: "Diet", value: "Urchins, crabs, clams, molluscs" },
        { label: "Ecological role", value: "Keystone species of kelp forests" },
      ]}
      relatedLinks={[
        { label: "Otter Profile", href: "/animals/otter", description: "The wider otter group" },
        { label: "Giant Otter Profile", href: "/animals/giant-otter" },
        { label: "Sea Urchin Profile", href: "/animals/sea-urchin", description: "A principal sea otter prey" },
        { label: "Walrus Profile", href: "/animals/walrus" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
