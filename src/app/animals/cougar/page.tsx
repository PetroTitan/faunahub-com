import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cougar";
const TITLE = "Cougar (Puma concolor): Facts & Profile";
const DESC =
  "Learn about the cougar (Puma concolor), a large, solitary cat of the Americas also called puma and mountain lion: its range, diet, behavior, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("cougar"),
});

export default function CougarPage() {
  return (
    <AnimalProfileLayout
      commonName="Cougar"
      scientificName="Puma concolor"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Big cat","Wide-ranging"]}
      image={getAnimalImage("cougar") ?? undefined}
      galleryImages={getAnimalGalleryImages("cougar")}
      sources={ANIMAL_SOURCES["cougar"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The cougar (<em>Puma concolor</em>) is a large, tawny cat known by an unusual number of common names, including puma, mountain lion, panther, and catamount. All of these names refer to the same single species, which is why FaunaHub keeps a single profile for the animal rather than separate pages for each regional name. It is a solitary, ambush-hunting predator and one of the most adaptable wild cats in the Americas.
          </p>
          <p>
            Among land mammals of the New World, the cougar is notable for having one of the widest natural distributions, occurring across a great variety of environments in parts of North and South America. Despite its size and reputation, it is generally elusive and rarely seen by people, spending much of its life moving quietly through cover in search of prey.
          </p>
          <p>
            On the IUCN Red List, the cougar is currently assessed as Least Concern at the species level. This is a conservation assessment that can change over time, and it does not mean every population is secure: some regional populations, such as those in parts of the eastern United States, have been greatly reduced or extirpated.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The cougar&#39;s scientific name is <em>Puma concolor</em>, and it belongs to the cat family, Felidae. It is placed within the subfamily Felinae, the group often called the small cats, rather than with the big cats of the genus <em>Panthera</em>, even though it is large in body size. Because of this grouping, the cougar is more closely related to smaller felines than to lions or true leopards, and it does not roar in the way the great cats do. The many common names, puma, mountain lion, panther, and catamount, all describe this one species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The cougar is a powerfully built cat with a relatively small, rounded head, a long body, and a long, heavy tail that helps with balance. Its coat is typically a fairly uniform tawny to grayish-brown color, which is reflected in its scientific name <em>concolor</em>, meaning of one color, though the muzzle, chest, and underparts are often paler. Adults are among the larger cats found in the Americas, with males generally bigger than females, though exact sizes vary across the wide range. Cubs are spotted and have ringed tails when young, gradually losing these markings as they mature into the plainer adult coat.
          </p>
        </>
      }
      habitat={
        <p>
          The cougar is associated with an exceptionally broad range of habitats, from forests and mountains to deserts, grasslands, and brushy lowlands. It is found in parts of North and South America, and historically occupied a far larger portion of North America than it does today. In parts of the eastern United States, populations have been reduced or extirpated, so the species is now most consistently associated with western and some other regions of North America, as well as areas farther south. Distribution is uneven and shaped by prey availability, cover, and human land use, so the cougar should be understood as occurring in parts of the continent rather than throughout it.
        </p>
      }
      diet={
        <p>
          The cougar is an obligate carnivore and a specialized ambush predator. Across much of its range, deer form an important part of its diet, but it is an opportunistic hunter that also takes a variety of other prey, ranging from smaller mammals to occasionally larger animals depending on what is locally available. Rather than chasing prey over long distances, the cougar typically relies on stealth and cover, approaching closely before making a short, powerful rush. After a successful hunt, it often drags and caches a carcass, covering it and returning to feed over several days.
        </p>
      }
      behavior={
        <>
          <p>
            Cougars are generally solitary and maintain home ranges, with individuals tending to avoid one another outside of breeding and the period when a female is raising young. They are most active around dawn, dusk, and night, and they communicate through scent marking and a range of vocalizations rather than the roars of the big cats. Females give birth to litters of cubs and raise them alone, with the young staying with the mother for many months as they learn to hunt before dispersing to establish their own ranges. This dispersal of young animals is one reason cougars can sometimes appear in unexpected areas.
          </p>
          <p>
            As a large carnivore, the cougar plays an important ecological role as a top predator in many of the systems it inhabits. By preying on deer and other animals, it can influence the abundance, behavior, and distribution of prey species, which in turn can affect vegetation and other parts of the food web. Carcasses left by cougars also provide food for scavengers, linking the cat to a wider community of species. Where cougars have been lost from a region, the absence of this predator can contribute to ecological changes that ripple through the local environment.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The cougar is a wild predator and is not a pet, and this page does not offer any guidance on handling, capturing, or keeping the species. Encounters with people are uncommon because cougars are typically elusive, and the calm, sensible approach is to observe wildlife only from a safe distance and never to approach or feed it. Anyone with concerns about a cougar near homes, livestock, or recreation areas should contact their local wildlife authorities, who are equipped to advise on and manage such situations. In terms of conservation, the species is currently assessed as Least Concern on the IUCN Red List, but this assessment can change, and reduced or extirpated regional populations show that local declines can occur even when a species is widespread overall.
        </p>
      }
      faqs={[
        {
          question: "Are pumas, mountain lions, and cougars different animals?",
          answer:
            "No. Puma, mountain lion, cougar, panther, and catamount are all common names for the same single species, Puma concolor. The different names mostly reflect regional usage rather than different animals.",
        },
        {
          question: "Is the cougar a big cat?",
          answer:
            "Although it is large, the cougar is classified in the subfamily of small cats (Felinae) rather than with the big cats of the genus Panthera. As a result it is more closely related to smaller felines and does not roar like lions or leopards.",
        },
        {
          question: "Is the cougar endangered?",
          answer:
            "On the IUCN Red List, the cougar is currently assessed as Least Concern at the species level, an assessment that can change over time. However, some regional populations, such as those in parts of the eastern United States, have been reduced or extirpated.",
        },
        {
          question: "What should I do if I see a cougar near my home?",
          answer:
            "Keep your distance, do not approach or feed the animal, and treat it as the wild predator it is. For any concerns about a cougar near homes, livestock, or recreation areas, contact your local wildlife authorities, who can provide appropriate guidance.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Puma concolor" },
        { label: "Animal group", value: "Mammal (cat family, Felidae)" },
        { label: "Other names", value: "Puma, mountain lion, panther, catamount" },
        { label: "Size", value: "Large cat; males generally larger than females" },
        { label: "Diet", value: "Carnivore; deer and other prey" },
        { label: "Habitat", value: "Forests, mountains, deserts, grasslands, and brush" },
        { label: "Range", value: "Parts of North and South America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; can change)" },
      ]}
      relatedLinks={[
        { label: "Bobcat", href: "/animals/bobcat", description: "A smaller North American cat" },
        { label: "Lynx Profile", href: "/animals/lynx", description: "A related wild cat" },
        { label: "Jaguar", href: "/animals/jaguar", description: "Another big cat of the Americas" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
