import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/box-turtle";
const TITLE = "Box Turtle (Terrapene): Facts, Habitat & Behavior";
const DESC =
  "The box turtle (genus Terrapene) is a small North American turtle with a hinged shell that closes tight. Mostly land-dwelling; some populations declined.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("box-turtle"),
});

export default function BoxTurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Box Turtle"
      scientificName="Terrapene"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Turtle","Terrestrial"]}
      image={getAnimalImage("box-turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("box-turtle")}
      sources={ANIMAL_SOURCES["box-turtle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Box turtles are small North American turtles of the genus <em>Terrapene</em>, in the family Emydidae. They are best known for a hinged lower shell (plastron) that lets them draw in the head, limbs, and tail and effectively close, or &quot;box,&quot; themselves inside the shell. This hinge gives the group both its common name and one of its most distinctive defenses.
          </p>
          <p>
            Although they are true turtles, most box turtles are primarily terrestrial, foraging across forest floors, meadows, and damp lowlands rather than swimming in open water like many of their pond-dwelling relatives. They are generally slow-moving, long-lived, and closely tied to a relatively small home area through much of their lives.
          </p>
          <p>
            Several <em>Terrapene</em> species and local populations are recognized as having declined over time, with pressures commonly attributed to habitat loss, road mortality, and collection from the wild. Conservation status varies by species and region, so the current listing for any given box turtle should be confirmed against an authoritative source such as the IUCN Red List.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Box turtles belong to the genus <em>Terrapene</em>, within the family Emydidae (the pond and box turtles) of the order Testudines. They are reptiles, not amphibians. The genus includes several recognized species — among them the eastern box turtle (<em>Terrapene carolina</em>) and the ornate box turtle (<em>Terrapene ornata</em>) — along with various named subspecies whose boundaries have been revised as research continues. The term &quot;box turtle&quot; is also applied informally to some unrelated turtles elsewhere in the world, but on this page it refers specifically to the North American genus <em>Terrapene</em>. Box turtles are turtles in the broad sense, but they are not tortoises (family Testudinidae); the resemblance to small tortoises reflects a shared terrestrial lifestyle rather than close relationship.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Box turtles are small turtles with a high, domed carapace (upper shell) that helps distinguish them from flatter-shelled aquatic turtles. The defining feature is a transverse hinge across the plastron (lower shell), which allows the front and rear portions to fold upward and seal the openings, drawing the head, limbs, and tail inside. Shell coloration is typically dark brown to black, frequently overlaid with yellow, orange, or olive markings whose pattern and intensity vary widely among species, populations, and individuals. The skin of the head and limbs may carry similar coloration. Many populations show differences in eye color, with some males commonly described as having reddish eyes and females browner eyes, though this is a general tendency rather than an absolute rule. Adults are modest in size compared with many pond and sea turtles.
          </p>
        </>
      }
      habitat={
        <p>
          Box turtles are found in parts of North America, with different <em>Terrapene</em> species occupying different regions; this is a general description rather than a complete range map, and specific ranges vary by species and locality. Eastern box turtles are broadly associated with deciduous and mixed woodlands, forest edges, and nearby moist lowlands, while ornate box turtles are more characteristic of open prairie and grassland habitats. Across the genus, box turtles favor areas that offer ground cover, leaf litter, and access to moisture. They are largely terrestrial but will use shallow water, mud, and damp microhabitats to stay cool and hydrated, and they often shelter in loose soil, leaf litter, or shallow burrows. Many individuals remain faithful to a relatively small home range over long periods.
        </p>
      }
      diet={
        <p>
          Box turtles are omnivores with a varied, opportunistic diet that often changes with age, season, and what is locally available. Reported food items across the genus include insects, worms, snails, slugs, and other invertebrates, along with fungi, berries, fallen fruit, leaves, and other plant matter. Some individuals also take carrion. Young box turtles are frequently described as leaning more heavily toward animal prey, with the diet broadening to include more plant material as they mature, though feeding habits differ among species and populations. Their foraging on the forest or grassland floor makes them part of the local web of seed and spore dispersal as well as invertebrate predation.
        </p>
      }
      behavior={
        <>
          <p>
            Box turtles are generally slow-moving, ground-dwelling animals that are most active in mild, humid conditions and often less active during the heat of midday or in dry spells. When threatened, a box turtle&#39;s characteristic response is to withdraw and use its hinged plastron to close the shell, relying on this passive defense rather than fleeing quickly or behaving aggressively. In cooler parts of their range, box turtles spend the cold season in a dormant, low-activity state, sheltering in soil, leaf litter, or other protected spots. They tend to be solitary outside of breeding interactions. Box turtles are notably long-lived for their size, and many individuals show strong site fidelity, repeatedly using familiar areas across years.
          </p>
          <p>
            As omnivores moving across the forest floor and grasslands, box turtles contribute to several local ecological processes. By feeding on fruits and fungi and later depositing the seeds and spores elsewhere, they can play a role in plant and fungal dispersal, and their consumption of insects, snails, and other invertebrates links them into local food webs as predators. In turn, box turtles — especially eggs and small juveniles — serve as prey for a range of mammals, birds, and other animals. Because individuals often occupy small, stable home ranges and reproduce slowly, box turtle populations can be sensitive to disturbances that remove adults from the landscape, such as road mortality, which is one reason these turtles are frequently discussed in the context of habitat connectivity and landscape change.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Box turtles are harmless to people; they are not dangerous, not venomous, and not aggressive, relying on their closable shell rather than any active defense. They are sometimes encountered in yards, parks, and along roads and trails within their range, and they are also present in the pet trade — but they are wild animals, and this page does not offer any guidance on keeping, handling, collecting, relocating, or caring for them. People with questions about a box turtle they have found, about local wildlife rules, or about an injured animal should contact a local wildlife authority, a licensed wildlife rehabilitator, or another qualified professional. Observing box turtles calmly in their natural setting, without interfering, is the most appropriate way to appreciate them.
        </p>
      }
      extraSections={[
        {
          heading: "Defenses",
          body: (
            <p>
              Box turtles are not venomous and do not produce venom; they have no fangs or venom-delivery apparatus. They are also not regarded as poisonous to handle in the ordinary sense. One point sometimes raised in the scientific literature is that, because box turtles may consume certain fungi and other items, the safety of eating box turtle flesh has historically been questioned; this is a dietary and food-safety observation about consuming the animals, not a claim that box turtles are toxic to touch or that they pose a venom hazard. This page does not provide medical, first-aid, or food-safety guidance; any such concerns should be directed to qualified professionals or relevant authorities.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Conservation status varies among <em>Terrapene</em> species and regional populations, and assessments can change over time, so any specific listing should be treated as provisional and verified against an authoritative source. Several box turtle species and local populations have been documented as declining, with the pressures most commonly attributed in the literature being habitat loss and fragmentation, mortality on roads, and removal of individuals from the wild. Because box turtles are long-lived and slow to reproduce, the loss of adult animals can have an outsized effect on population stability. For the current assessment of a particular box turtle species, consult the IUCN Red List or comparable regional conservation authorities rather than relying on a fixed figure here.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is a box turtle a turtle or a tortoise?",
          answer:
            "Box turtles are true turtles in the genus Terrapene, family Emydidae. They are not tortoises (family Testudinidae), even though their high, domed shells and largely land-based lifestyle can make them look superficially tortoise-like. All tortoises are turtles in the broad sense, but not all turtles — including box turtles — are tortoises.",
        },
        {
          question: "Why is it called a box turtle?",
          answer:
            "The name comes from a hinge across the lower shell (plastron) that lets the turtle fold the shell shut, drawing in its head, limbs, and tail and closing itself up like a box. This hinged, closable plastron is the genus's most distinctive feature and serves as a passive defense.",
        },
        {
          question: "Are box turtles dangerous or venomous?",
          answer:
            "No. Box turtles are not venomous and are not dangerous to people. They are slow-moving and non-aggressive, and when threatened they simply withdraw and close their shell rather than attacking. They have no venom and no specialized weapons for harming humans.",
        },
        {
          question: "Are box turtles endangered?",
          answer:
            "It depends on the species and region. Several Terrapene species and populations have been documented as declining, often linked to habitat loss, road mortality, and collection, but conservation status varies and can change over time. For the current status of a specific box turtle, consult the IUCN Red List or a regional conservation authority.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Genus Terrapene (family Emydidae)" },
        { label: "Group", value: "Turtle (order Testudines), reptile" },
        { label: "Range", value: "Parts of North America; varies by species and region (not a complete range map)" },
        { label: "Habitat", value: "Mostly terrestrial — woodlands, forest edges, prairies, and damp lowlands, depending on species" },
        { label: "Diet", value: "Omnivorous: invertebrates, fungi, fruit, and plant matter" },
        { label: "Conservation", value: "Varies by species; several declines documented — confirm current listing via the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Turtle", href: "/animals/turtle", description: "Turtles as a group" },
        { label: "Snapping Turtle", href: "/animals/snapping-turtle", description: "A freshwater turtle" },
        { label: "Tortoise", href: "/animals/tortoise", description: "Land-dwelling turtles" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
