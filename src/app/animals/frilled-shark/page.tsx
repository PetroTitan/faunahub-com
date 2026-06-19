import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/frilled-shark";
const TITLE = "Frilled Shark — Profile, Deep-Sea Life & the “Living Fossil” Shark";
const DESC =
  "Explore the frilled shark (Chlamydoselachus anguineus): a rare, eel-like deep-sea shark with frilly gills and trident-shaped teeth, often called a living fossil.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("frilled-shark"),
});

export default function FrilledSharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Frilled Shark"
      scientificName="Chlamydoselachus anguineus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine fish", "Shark", "Deep sea", "Living fossil"]}
      image={getAnimalImage("frilled-shark") ?? undefined}
      galleryImages={getAnimalGalleryImages("frilled-shark")}
      sources={ANIMAL_SOURCES["frilled-shark"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The frilled shark (<em>Chlamydoselachus anguineus</em>) is a rare, deep-sea
            shark with a long, slender, eel-like body that looks quite unlike a typical
            shark. It is named for the frilly appearance of its six pairs of gill
            slits, the first of which stretches across the throat. With a primitive
            body plan and ancient lineage, it is frequently described as a
            &ldquo;living fossil.&rdquo;
          </p>
          <p>
            Inside its mouth are rows of distinctive backward-pointing, three-pronged
            (trident-shaped) teeth, well suited to gripping soft, slippery prey such
            as squid.
          </p>
          <p>
            <strong>Note:</strong> the frilled shark is seldom seen alive, and much is
            known from specimens and occasional deep encounters, so details should be
            treated as general and verified against authoritative marine sources.
          </p>
        </>
      }
      habitat={
        <p>
          Frilled sharks live in deep waters along ocean slopes in scattered locations
          around the world, generally well below the surface. They are uncommon and
          patchily distributed, and most records come from deep fishing gear or
          research rather than direct observation.
        </p>
      }
      diet={
        <p>
          Frilled sharks are carnivores that feed mainly on cephalopods such as squid,
          along with fish and other sharks. Their many needle-sharp, trident-shaped
          teeth are thought to snag and hold soft-bodied, slippery prey, which the
          flexible body and jaws can then swallow.
        </p>
      }
      behavior={
        <p>
          With a long, flexible body, the frilled shark may hunt by lunging at prey
          like a striking eel or snake, using its rearward-set fins for a quick
          forward burst. Like some other deep-water sharks it gives birth to live
          young, and it is believed to have a very long gestation. Its slow, deep-sea
          lifestyle remains poorly understood.
        </p>
      }
      humanInteraction={
        <p>
          Frilled sharks pose no real threat to people and are rarely encountered;
          most come to light through deep-sea fishing bycatch or scientific study. As a
          rare, deep-dwelling species, it is potentially sensitive to deep fishing
          pressure. For current status, consult authoritative sources such as the IUCN
          Red List.
        </p>
      }
      faqs={[
        {
          question: "Why is the frilled shark called a living fossil?",
          answer:
            "The frilled shark belongs to an ancient shark lineage and keeps a number of primitive features — including its eel-like body, gill arrangement, and tooth shape — that resemble those of long-extinct relatives. For that reason it is popularly called a \"living fossil,\" although it is a fully modern, living animal.",
        },
        {
          question: "What do frilled sharks eat?",
          answer:
            "Mainly cephalopods such as squid, plus fish and even other sharks. Their many backward-pointing, trident-shaped teeth are well suited to gripping soft, slippery prey, which the flexible jaws and body help swallow.",
        },
        {
          question: "Is the frilled shark dangerous to humans?",
          answer:
            "No. The frilled shark lives in the deep sea and is very rarely encountered by people; it is not considered a danger to humans. Most records come from deep fishing gear or scientific study rather than direct contact.",
        },
        {
          question: "Where does the frilled shark live?",
          answer:
            "In deep waters along ocean slopes at scattered sites around the world, generally well below the surface. It is uncommon and patchily distributed, so precise depth ranges should be checked against current marine references.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Chlamydoselachus anguineus" },
        { label: "Class", value: "Chondrichthyes (cartilaginous fish)" },
        { label: "Type", value: "Deep-sea shark; “living fossil”" },
        { label: "Diet", value: "Mainly squid; also fish & sharks" },
        { label: "Teeth", value: "Trident-shaped, backward-pointing" },
        { label: "Reproduction", value: "Live birth; long gestation" },
        { label: "Habitat", value: "Deep ocean slopes" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark", description: "Sharks as a whole" },
        { label: "Great White Shark Profile", href: "/animals/great-white-shark", description: "A very different shark" },
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "Another deep-sea predator" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
