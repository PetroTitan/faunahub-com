import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cockroach";
const TITLE = "Cockroach — Profile, Resilience, Diet & Ecology";
const DESC =
  "Explore cockroaches (order Blattodea): ancient, tough, fast insects — only a few are household pests, while most live in the wild as important recyclers of decaying matter.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("cockroach"),
});

export default function CockroachPage() {
  return (
    <AnimalProfileLayout
      commonName="Cockroach"
      scientificName="order Blattodea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Recycler"]}
      image={getAnimalImage("cockroach") ?? undefined}
      galleryImages={getAnimalGalleryImages("cockroach")}
      sources={ANIMAL_SOURCES.cockroach}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Cockroaches (order Blattodea) are among the most ancient and successful insects on
            Earth, with flattened, oval bodies, long antennae, and spiny legs built for speed.
            There are thousands of species, but the public mostly knows the handful that invade
            buildings; the great majority are wild insects living in forests, soil, and leaf
            litter, where they quietly recycle dead plant and animal matter. The Madagascar
            hissing cockroach (<em>Gromphadorhina portentosa</em>), shown here, is a large,
            wingless species famous for the hissing sound it makes by forcing air through
            breathing holes.
          </p>
          <p>
            Cockroaches have a reputation for being almost indestructible, and while that is
            exaggerated, they are genuinely hardy, adaptable, and remarkably resilient.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;cockroach&rdquo; covers a huge, varied group;
            details here cover them broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Cockroaches live almost worldwide, most diversely in warm, humid tropical regions,
          in habitats from rainforest floors and rotting logs to caves, deserts, and — for a
          few species — human homes and buildings. Most are nocturnal and prefer dark,
          sheltered, moist places, hiding in crevices by day and emerging at night to feed.
        </p>
      }
      diet={
        <p>
          Most cockroaches are omnivores and scavengers that eat almost anything organic:
          decaying plants, dead animals, fungi, droppings, and detritus, as well as — for the
          pest species — human food and scraps. By breaking down dead and decaying material,
          wild cockroaches play a useful role in recycling nutrients, and some forest species
          help break down rotting wood much as their close relatives the termites do.
        </p>
      }
      behavior={
        <p>
          Cockroaches are fast, agile, and famously good at squeezing through tiny gaps,
          flattening their bodies to slip into narrow cracks. They can survive a remarkable
          range of conditions and go without food for long periods. Many are social to some
          degree, sheltering in groups, and the Madagascar hissing cockroach hisses to startle
          predators and in social and courtship interactions. Females of many species carry
          their eggs in a protective case (an ootheca). Cockroaches are notably resistant to
          radiation compared with mammals, which fuels their tough reputation — though they are
          not truly indestructible.
        </p>
      }
      humanInteraction={
        <p>
          Only a small number of cockroach species are household pests, but these are
          significant: they can contaminate food and trigger allergies and asthma in some
          people, so they are widely controlled. The vast majority of cockroaches, however,
          are harmless wild insects and valuable decomposers, and some (like the hissing
          cockroach) are even kept as pets or used in education. Consult authoritative sources
          for details.
        </p>
      }
      faqs={[
        {
          question: "Are all cockroaches pests?",
          answer:
            "No — far from it. Of the thousands of cockroach species, only a small handful invade homes and become pests. The vast majority live in the wild, especially in tropical forests, where they're harmless and act as useful recyclers of dead and decaying matter. The pest species are just the most visible to people.",
        },
        {
          question: "Can cockroaches really survive almost anything?",
          answer:
            "Their toughness is real but exaggerated. Cockroaches are hardy, adaptable, can go a long time without food, and tolerate more radiation than mammals — which feeds the 'indestructible' myth. But they are not invincible: they still need food and water, and they can be killed and controlled like other insects. The legend overstates a genuinely resilient animal.",
        },
        {
          question: "Why does the Madagascar cockroach hiss?",
          answer:
            "It forces air out through its breathing holes (spiracles) to make a hissing sound. The Madagascar hissing cockroach uses this hiss to startle predators and in social interactions — including courtship and contests between males. It's one of the few insects that make sound this way, which is part of why it's such a popular species.",
        },
        {
          question: "Do cockroaches do anything useful?",
          answer:
            "Yes. Wild cockroaches are important decomposers, breaking down dead plants, animals, fungi, and droppings and recycling those nutrients back into the ecosystem; some help rot wood like their termite relatives. They're also food for many other animals. So beyond the few pest species, cockroaches are ecologically valuable.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Blattodea (includes termites)" },
        { label: "Reference species", value: "Gromphadorhina portentosa (hissing cockroach)" },
        { label: "Diet", value: "Omnivore & scavenger" },
        { label: "Role", value: "Mostly wild recyclers; a few are pests" },
        { label: "Traits", value: "Fast, flat, hardy; squeezes into cracks" },
        { label: "Hissing species", value: "Forces air through breathing holes" },
        { label: "Range", value: "Worldwide (most diverse in tropics)" },
        { label: "Reputation", value: "Resilient (but not indestructible)" },
      ]}
      relatedLinks={[
        { label: "Termite Profile", href: "/animals/termite", description: "A close relative within the cockroach group" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "The most diverse insect group" },
        { label: "Cricket Profile", href: "/animals/cricket", description: "Another familiar insect" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Insect fauna in context" },
      ]}
    />
  );
}
