import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/jaguarundi";
const TITLE = "Jaguarundi — Profile, the Weasel-Shaped Wild Cat of the Americas";
const DESC =
  "Explore the jaguarundi (Herpailurus yagouaroundi): an unusual, weasel-like American wild cat with a long body, short legs, and a plain coat — active by day and surprisingly vocal.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("jaguarundi"),
});

export default function JaguarundiPage() {
  return (
    <AnimalProfileLayout
      commonName="Jaguarundi"
      scientificName="Herpailurus yagouaroundi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Americas"]}
      image={getAnimalImage("jaguarundi") ?? undefined}
      galleryImages={getAnimalGalleryImages("jaguarundi")}
      sources={ANIMAL_SOURCES.jaguarundi}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The jaguarundi (<em>Herpailurus yagouaroundi</em>) is one of the most unusual-looking wild
            cats in the Americas — so much so that it is often mistaken for something else entirely.
            With a long, slender body, short legs, a small flattened head, rounded ears, and a long
            tail, it looks more like a weasel, otter, or even a small mustelid than a typical cat. Its
            coat is plain and unmarked, ranging from grey to reddish-brown.
          </p>
          <p>
            Unlike most small cats, the jaguarundi is largely active by day, and it is unusually
            vocal, with a wide repertoire of calls — chirps, whistles, purrs, and chatters. Despite the
            name, it is not closely related to the jaguar; it is most closely allied to the puma.
          </p>
          <p>
            <strong>Note:</strong> details here cover the jaguarundi as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Jaguarundis range from the southern United States and Mexico through Central America and into
          much of South America, in a wide variety of habitats — lowland forest, scrub, grassland,
          thickets, wetlands, and forest edge — generally favouring areas with dense ground cover near
          water. They are adaptable and often use brushy, edge, and even disturbed habitats.
        </p>
      }
      diet={
        <p>
          The jaguarundi is a carnivore that hunts mostly small prey — rodents, birds, rabbits,
          reptiles, and invertebrates — and will take larger prey occasionally, as well as some fruit.
          It hunts largely on the ground by day, slipping through dense cover, though it climbs and
          swims well. Its low, elongated build suits pursuing prey through thick vegetation.
        </p>
      }
      behavior={
        <p>
          Jaguarundis are mainly solitary and, unusually for cats, predominantly diurnal — most active
          in daylight, especially morning. They are agile on the ground and capable climbers and
          swimmers, and they are notably talkative, using an exceptional variety of vocalisations to
          communicate. Their plain coat comes in two main colour phases — a dark grey form and a reddish
          (&ldquo;eyra&rdquo;) form — which can occur even within the same litter, and which once led
          people to think they were two species. They mark and patrol home ranges and den in dense
          thickets, hollow logs, or similar cover.
        </p>
      }
      humanInteraction={
        <p>
          Jaguarundis are widespread and, across their range as a whole, not currently considered
          globally threatened, although some populations — such as those at the northern edge in the
          United States and certain regional groups — are rare or endangered, mainly due to habitat
          loss and fragmentation. They are sometimes seen near farmland and may occasionally take
          poultry. As wild cats they are not suited to life as pets. Consult the IUCN Red List for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the jaguarundi look like a weasel instead of a cat?",
          answer:
            "Its body plan is unusual for a cat: a long, low, slender body, short legs, a small flattened head, and a long tail give it a weasel- or otter-like silhouette. Combined with its plain, unmarked coat, this often leads people to mistake it for a mustelid. It's still a true cat, just one shaped for slipping through dense ground cover.",
        },
        {
          question: "Is the jaguarundi related to the jaguar?",
          answer:
            "Despite the similar name, no — they're not close relatives. The jaguarundi's nearest big relative is actually the puma (cougar). The shared 'jagu-' in the names comes from indigenous languages and reflects regional naming rather than a close family link to the jaguar.",
        },
        {
          question: "Why do jaguarundis come in different colours?",
          answer:
            "Jaguarundis have two main colour phases — a dark grey form and a reddish form (sometimes called the 'eyra'). Both can even appear in the same litter. This variation once misled people into thinking they were two separate species, but they're a single species with two colour morphs.",
        },
        {
          question: "Are jaguarundis active at night like most cats?",
          answer:
            "Not mainly — and that's another of their quirks. Jaguarundis are largely diurnal, most active during the day (especially morning), unlike many small cats that hunt at night. They're also unusually vocal, using a wide range of chirps, whistles, purrs, and chatters to communicate.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Herpailurus yagouaroundi" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Closest big relative", value: "Puma (not the jaguar)" },
        { label: "Look", value: "Weasel-like: long body, short legs, plain coat" },
        { label: "Colour phases", value: "Grey & reddish ('eyra')" },
        { label: "Activity", value: "Mainly diurnal; very vocal; solitary" },
        { label: "Diet", value: "Carnivore (small prey); some fruit" },
        { label: "Range", value: "Southern US to South America" },
      ]}
      relatedLinks={[
        { label: "Ocelot Profile", href: "/animals/ocelot", description: "A spotted small cat of the same forests" },
        { label: "Margay Profile", href: "/animals/margay", description: "Another small American cat" },
        { label: "Jaguar Profile", href: "/animals/jaguar", description: "The big cat it's named after (not a close relative)" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
