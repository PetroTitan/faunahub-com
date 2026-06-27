import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/snow-leopard";
const TITLE = "Snow Leopard: High-Mountain Cat of Central Asia";
const DESC =
  "Learn about the snow leopard (Panthera uncia), a Vulnerable big cat of the high mountains of Central and South Asia, its adaptations, diet, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("snow-leopard"),
});

export default function SnowLeopardPage() {
  return (
    <AnimalProfileLayout
      commonName="Snow Leopard"
      scientificName="Panthera uncia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Big cat","Mountain"]}
      image={getAnimalImage("snow-leopard") ?? undefined}
      galleryImages={getAnimalGalleryImages("snow-leopard")}
      sources={ANIMAL_SOURCES["snow-leopard"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The snow leopard (<em>Panthera uncia</em>) is a large cat associated with the high mountains of Central and South Asia, including ranges such as the Himalayas, the Tibetan Plateau, and the Altai. It is one of the most striking and elusive of the world&#39;s big cats, superbly built for life among cold, rugged, high-elevation terrain.
          </p>
          <p>
            Its smoky-grey coat marked with dark rosettes provides camouflage among rock and snow, while a very long, thick tail, large paws, and an enlarged nasal cavity reflect adaptation to a harsh mountain environment. Solitary and rarely seen, it preys mainly on wild mountain ungulates such as blue sheep and ibex.
          </p>
          <p>
            Range and conservation details for the snow leopard vary by region and can change as new surveys are completed, so the specifics here should be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, and museum or university zoology references. Concerns about livestock conflict in snow leopard country are best directed to local wildlife authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The snow leopard is a member of the cat family and belongs to the genus <em>Panthera</em>, which also includes the lion, tiger, jaguar, and leopard. It is classified as a big cat, though unlike most of its close relatives it cannot roar; its vocal anatomy differs from the roaring <em>Panthera</em> species. Within scientific literature it is usually treated as <em>Panthera uncia</em>, a distinct species of the high mountains rather than a high-altitude form of the common leopard.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The snow leopard has a pale, smoky-grey to whitish coat patterned with dark rosettes and spots, which helps it blend into rocky, snow-dusted slopes. Its fur is thick and dense, suited to cold conditions. Among its most distinctive features is a very long, thick tail that aids balance on steep ground and can be wrapped around the body for warmth. Large, well-furred paws help distribute weight on snow, and an enlarged nasal cavity is thought to assist with breathing cold, thin mountain air.
          </p>
        </>
      }
      habitat={
        <p>
          The snow leopard is found in parts of the high mountains of Central and South Asia, in ranges including the Himalayas, the Tibetan Plateau, and the Altai. It is a true mountain specialist, typically associated with cold, rugged, high-elevation terrain of cliffs, rocky outcrops, and alpine and subalpine zones above the tree line. Its distribution is patchy and tied to suitable mountain habitat and prey, rather than being continent-wide; precise range limits are best confirmed against authoritative range maps.
        </p>
      }
      diet={
        <p>
          The snow leopard is a carnivore that preys mainly on wild mountain ungulates such as blue sheep and ibex. As an opportunistic mountain hunter it may also take smaller mammals and birds when available. In some areas it may prey on domestic livestock, which can bring it into conflict with herders. Its hunting reflects the relatively sparse prey base of high-mountain ecosystems.
        </p>
      }
      behavior={
        <>
          <p>
            Snow leopards are solitary and elusive, and are rarely observed in the wild. They tend to use large home ranges across rugged terrain and rely on stealth and the cover of rocky ground to approach prey. Unlike the roaring big cats, the snow leopard cannot roar, and it communicates through other vocalizations and scent marking. Its powerful build and long tail make it remarkably agile on steep, broken slopes.
          </p>
          <p>
            As a top predator of high-mountain ecosystems in parts of Central and South Asia, the snow leopard helps shape the populations of the wild ungulates it hunts and is often regarded as an indicator of the health of these alpine environments. Because it depends on intact mountain habitat and healthy prey, its presence reflects broader ecological conditions across the high ranges it occupies.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The snow leopard is listed as Vulnerable by the IUCN. Documented threats include poaching, retaliatory killing over livestock losses, and pressures on its mountain habitat and prey. Conservation efforts in snow leopard range often focus on reducing human-wildlife conflict and protecting habitat. People who encounter livestock conflict or wildlife concerns in snow leopard country should contact local wildlife authorities rather than acting on their own, and the animal should be regarded as a wild species, not a pet.
        </p>
      }
      faqs={[
        {
          question: "Where is the snow leopard found?",
          answer:
            "The snow leopard is found in parts of the high mountains of Central and South Asia, including ranges such as the Himalayas, the Tibetan Plateau, and the Altai. Its distribution is patchy and tied to suitable mountain habitat, and precise range details are best checked against authoritative sources.",
        },
        {
          question: "Can a snow leopard roar?",
          answer:
            "No. Unlike most other big cats in the genus Panthera, the snow leopard cannot roar. Its vocal anatomy differs from that of the roaring cats, and it communicates using other vocalizations and scent marking.",
        },
        {
          question: "What does the snow leopard eat?",
          answer:
            "It preys mainly on wild mountain ungulates such as blue sheep and ibex, and may take smaller mammals and birds. In some areas it can prey on domestic livestock, which sometimes leads to conflict with herders.",
        },
        {
          question: "Why is the snow leopard considered Vulnerable?",
          answer:
            "The IUCN lists the snow leopard as Vulnerable. Documented threats include poaching, retaliatory killing over livestock, and pressures on its mountain habitat and prey. Conservation status can change with new surveys, so it should be verified against current authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Big cat (mammal)" },
        { label: "Higher classification", value: "Genus Panthera, family Felidae" },
        { label: "Diet", value: "Carnivore; mainly wild mountain ungulates such as blue sheep and ibex" },
        { label: "Notable trait", value: "Very long thick tail; large paws; cannot roar" },
        { label: "Habitat", value: "Cold, rugged high-mountain terrain above the tree line" },
        { label: "Asia distribution", value: "Parts of the high mountains of Central and South Asia" },
        { label: "Human interaction", value: "Elusive and rarely seen; livestock conflict and concerns go to local wildlife authorities" },
        { label: "Conservation status", value: "Vulnerable (IUCN)" },
      ]}
      relatedLinks={[
        { label: "Leopard Profile", href: "/animals/leopard", description: "A close Panthera relative" },
        { label: "Clouded Leopard Profile", href: "/animals/clouded-leopard", description: "Another Asian forest cat" },
        { label: "Tiger Profile", href: "/animals/tiger", description: "Asia's largest cat" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
