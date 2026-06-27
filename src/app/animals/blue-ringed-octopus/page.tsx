import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/blue-ringed-octopus";
const TITLE = "Blue-Ringed Octopus: Facts About Hapalochlaena";
const DESC =
  "Learn about blue-ringed octopuses (genus Hapalochlaena), small Indo-Pacific cephalopods famous for the iridescent blue rings they flash as a warning signal.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("blue-ringed-octopus"),
});

export default function BlueRingedOctopusPage() {
  return (
    <AnimalProfileLayout
      commonName="Blue-Ringed Octopus"
      scientificName="genus Hapalochlaena"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Cephalopod","Indo-Pacific"]}
      image={getAnimalImage("blue-ringed-octopus") ?? undefined}
      galleryImages={getAnimalGalleryImages("blue-ringed-octopus")}
      sources={ANIMAL_SOURCES["blue-ringed-octopus"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Blue-ringed octopuses are small octopuses of the genus <em>Hapalochlaena</em>, found in the shallow coastal waters of the Indo-Pacific. They are best known for the iridescent blue rings or lines that flash vividly across the body when the animal is alarmed, a striking display that serves as a warning signal to potential threats. Despite their fame, they are small, shy animals that spend much of their time tucked into crevices, empty shells, and tide pools.
          </p>
          <p>
            These octopuses are active hunters of small crustaceans such as crabs and shrimp. Their saliva contains tetrodotoxin, a potent natural toxin also found in some pufferfish, and they are widely regarded as among the more medically significant venomous marine animals. They are not aggressive, and bites are rare and almost always associated with handling.
          </p>
          <p>
            Details such as exact size, coloration, and distribution vary by species and region and should be checked against authoritative sources such as the Animal Diversity Web, Smithsonian Ocean, and the World Register of Marine Species. Some species are medically significant, and risk varies by species and region; avoid handling wild individuals. For any bite or envenomation concern, contact a qualified medical professional. This page is educational and does not provide medical or treatment advice.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Blue-ringed octopuses are cephalopod molluscs, placing them alongside other octopuses, squid, cuttlefish, and nautiluses within the phylum Mollusca. The group is the genus <em>Hapalochlaena</em>, which contains several small octopus species. As cephalopods, they share the hallmark traits of the class: a soft, muscular body, a beak-like mouth, well-developed eyes, and flexible arms lined with suckers. They are true octopuses, not a separate or unrelated lineage, distinguished within their relatives chiefly by their small size and the characteristic blue-ring warning display.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Blue-ringed octopuses are among the smaller octopuses, with a soft body and eight sucker-lined arms typical of the group. At rest their coloration is often muted, in tones of beige, yellow, or brown that help them blend into the seabed. When the animal is alarmed, iridescent blue rings or lines flash vividly across the body and arms, standing out sharply against the background color. This rapid, high-contrast display is the feature for which the genus is named, and it functions as a clear visual warning rather than camouflage.
          </p>
        </>
      }
      habitat={
        <p>
          These octopuses live in shallow waters of the Indo-Pacific, where they shelter in crevices, empty shells, and tide pools. Such habitats offer both concealment and access to the small prey they hunt. Because they favor shallow coastal and intertidal areas, they may occasionally be encountered by people exploring rocky shores or reef flats. The prudent approach is simply to observe and not to disturb or handle them; avoid handling wild individuals.
        </p>
      }
      diet={
        <p>
          Blue-ringed octopuses are predators of small crustaceans, feeding chiefly on crabs and shrimp. Like other octopuses, they use their arms and beak to capture and subdue prey, and their toxic saliva plays a role in immobilizing the small animals they hunt. As mid-level predators in shallow Indo-Pacific habitats, they help regulate populations of the small invertebrates they consume, fitting into the broader food web of tide pools and coastal reefs.
        </p>
      }
      behavior={
        <p>
          These octopuses are small, shy, and not aggressive, typically remaining hidden in shelter and emerging to hunt. Their most distinctive behavior is the flashing blue-ring display, which appears when the animal is alarmed and serves as a warning rather than an act of aggression. Like many octopuses, they have short lives, and females are known to guard their eggs, tending a clutch until the young hatch. Bites of humans are rare and almost always follow handling.
        </p>
      }
      humanInteraction={
        <p>
          Blue-ringed octopuses are encountered infrequently and are not aggressive toward people; bites are rare and almost always follow handling. Their saliva contains tetrodotoxin, a potent natural toxin, and they are widely regarded as among the more medically significant venomous marine animals, though this varies by species. The simplest and safest practice is to avoid handling wild individuals and to observe them from a distance. For any bite, sting, envenomation, or related health concern, contact a qualified medical professional or local health authority. This page is educational and does not provide medical, first-aid, or treatment advice.
        </p>
      }
      faqs={[
        {
          question: "Why do blue-ringed octopuses flash blue rings?",
          answer:
            "The iridescent blue rings or lines appear when the octopus is alarmed, flashing vividly across the body as a warning display. This signal is thought to advertise that the animal is not worth attacking. It is a defensive communication rather than a sign of aggression.",
        },
        {
          question: "How big are blue-ringed octopuses?",
          answer:
            "They are among the smaller octopuses, with a soft body and eight arms typical of cephalopods. Exact size varies by species and region, so it is best to consult authoritative sources such as the Animal Diversity Web or Smithsonian Ocean for figures on a specific species.",
        },
        {
          question: "What do blue-ringed octopuses eat?",
          answer:
            "They are predators of small crustaceans, feeding mainly on crabs and shrimp. Like other octopuses, they use their arms and beak to capture prey, and their toxic saliva helps immobilize the small animals they hunt.",
        },
        {
          question: "Are blue-ringed octopuses dangerous to people?",
          answer:
            "Their saliva contains tetrodotoxin, and they are widely regarded as among the more medically significant venomous marine animals, though this varies by species. They are shy and not aggressive, and bites are rare and almost always follow handling. Avoid handling wild individuals, and for any bite or envenomation concern contact a qualified medical professional or local health authority.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Octopuses (cephalopod molluscs)" },
        { label: "Higher classification", value: "Phylum Mollusca; genus Hapalochlaena" },
        { label: "Diet", value: "Small crustaceans such as crabs and shrimp" },
        { label: "Notable trait", value: "Iridescent blue rings flashed as a warning display" },
        { label: "Habitat", value: "Shallow waters; crevices, shells, and tide pools" },
        { label: "Distribution", value: "Indo-Pacific" },
        { label: "Human interaction", value: "Shy and not aggressive; medically significant, varies by species; avoid handling" },
        { label: "Conservation status", value: "Varies by species; consult authoritative sources" },
      ]}
      relatedLinks={[
        { label: "Octopus Profile", href: "/animals/octopus", description: "Octopuses more broadly" },
        { label: "Cuttlefish Profile", href: "/animals/cuttlefish", description: "Another cephalopod" },
        { label: "Squid Profile", href: "/animals/squid", description: "A fast-swimming cephalopod" },
        { label: "Nautilus Profile", href: "/animals/nautilus", description: "A shelled cephalopod" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
