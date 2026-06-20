import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/jabiru";
const TITLE = "Jabiru — Profile, the Americas' Tallest Flying Bird & Diet";
const DESC =
  "Explore the jabiru (Jabiru mycteria): a huge stork of Central and South American wetlands with a black neck and red band — among the tallest flying birds in the Americas.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("jabiru"),
});

export default function JabiruPage() {
  return (
    <AnimalProfileLayout
      commonName="Jabiru"
      scientificName="Jabiru mycteria"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Stork", "Wetland"]}
      image={getAnimalImage("jabiru") ?? undefined}
      galleryImages={getAnimalGalleryImages("jabiru")}
      sources={ANIMAL_SOURCES.jabiru}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The jabiru (<em>Jabiru mycteria</em>) is a massive stork of the wetlands of
            Central and South America, and one of the tallest flying birds in the Americas —
            standing well over a metre high with a wingspan among the widest of any
            American land bird. It is unmistakable: a white body, a bare black head and
            neck, and a broad red band of skin at the base of the neck that can flush
            brighter, topped by a long, heavy, slightly upturned black bill.
          </p>
          <p>
            Jabirus are birds of open marshes and riverbanks, especially abundant in great
            wetlands such as the Pantanal, where they are a flagship species.
          </p>
          <p>
            <strong>Note:</strong> the American jabiru should not be confused with the
            unrelated &ldquo;black-necked stork&rdquo; sometimes called jabiru in Australia;
            details here cover Jabiru mycteria. Treat statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          The jabiru lives in freshwater wetlands, marshes, savannas, and river edges from
          Mexico through Central America and across much of South America east of the Andes,
          with strongholds in major wetlands like the Pantanal and Llanos. It needs
          shallow, productive water for feeding and tall trees for its huge nests.
        </p>
      }
      diet={
        <p>
          Jabirus are carnivores that wade through shallow water hunting fish, amphibians,
          reptiles (including small caimans and snakes), molluscs, large insects, and other
          aquatic animals; they also take carrion. They often forage by feel, sweeping the
          partly open bill through water and snapping shut on contact, which lets them feed
          even in murky conditions.
        </p>
      }
      behavior={
        <p>
          Jabirus are powerful fliers despite their size, soaring on broad wings, and they
          are often seen alone or in loose groups at rich feeding sites, especially as
          wetlands shrink in the dry season and concentrate prey. Pairs build an enormous
          stick nest high in a tall tree, reusing and adding to it over years, and both
          parents raise the young. Like other storks they are largely silent, communicating
          mostly with bill-clattering at the nest.
        </p>
      }
      humanInteraction={
        <p>
          The jabiru is an iconic bird of Neotropical wetlands and a favourite of wildlife
          watchers, particularly in the Pantanal. It is widespread overall, but it depends
          on extensive healthy wetlands, so drainage, habitat loss, and disturbance are the
          main concerns, and it has declined in parts of its range. Consult authoritative
          sources for current status.
        </p>
      }
      faqs={[
        {
          question: "How big is a jabiru?",
          answer:
            "It is enormous — one of the tallest flying birds in the Americas, standing well over a metre high, with one of the largest wingspans of any American land bird. Its great size, white body, black head and neck, and red neck band make it impossible to mistake at a wetland.",
        },
        {
          question: "What does a jabiru eat?",
          answer:
            "Jabirus are carnivores that wade in shallow water for fish, amphibians, reptiles (including small caimans and snakes), molluscs, large insects, and other prey, plus carrion. They often hunt by feel, sweeping the open bill through water and snapping it shut on contact.",
        },
        {
          question: "Is the jabiru the same as the Australian 'jabiru'?",
          answer:
            "No. The true jabiru (Jabiru mycteria) is an American stork. In Australia, the name 'jabiru' is informally used for a different species, the black-necked stork. They are separate birds; this profile covers the American jabiru.",
        },
        {
          question: "Where is the best place to see jabirus?",
          answer:
            "Large Neotropical wetlands are ideal, and the Pantanal of South America is especially famous for jabirus, where they are a flagship species. They favour shallow, productive marshes and river edges with tall trees nearby for their massive nests.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Jabiru mycteria" },
        { label: "Class", value: "Aves (a stork)" },
        { label: "Claim to fame", value: "Among the tallest flying birds in the Americas" },
        { label: "Diet", value: "Carnivore (fish, amphibians, reptiles, etc.)" },
        { label: "Nest", value: "Huge stick nest reused over years" },
        { label: "Habitat", value: "Neotropical wetlands (e.g. Pantanal)" },
        { label: "Range", value: "Mexico to South America" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Stork Profile", href: "/animals/stork", description: "Its wider family" },
        { label: "Shoebill Profile", href: "/animals/shoebill", description: "Another giant wetland bird" },
        { label: "Heron Profile", href: "/animals/heron", description: "Another tall wetland wader" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
