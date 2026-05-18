import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-18";

const title = "Owl — Overview of Owl Species, Habitat & Behavior";
const description =
  "Owls (order Strigiformes): silent-flight nocturnal raptors. Diversity, habitats, hunting behaviour, hearing-based prey detection, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/owl",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function OwlPage() {
  return (
    <AnimalProfileLayout
      commonName="Owl"
      pageTitle={title}
      description={description}
      path="/animals/owl"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Raptor", "Nocturnal"]}
      factsHeaderNote="Owls are a diverse order. Specific traits below are typical of many owl species but not universal."
      overview={
        <>
          <p>
            Owls are predatory birds of the order Strigiformes. They are distributed across
            every continent except Antarctica and include species adapted to forest, tundra,
            grassland, desert, and urban habitats. Owls are characterised by a forward-facing
            facial disc that channels sound to the ears, large light-sensitive eyes, soft
            flight feathers that enable near-silent flight, and reversible outer toes that
            help in seizing prey.
          </p>
          <p>
            Two main families are usually recognised: the typical owls (Strigidae) and the
            barn owls (Tytonidae). Together they include more than 200 living species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Owl habitats are extremely diverse. Snowy owls inhabit Arctic tundra. Great horned
            owls and tawny owls are widely distributed in temperate forests. Burrowing owls
            inhabit grasslands and shrub-steppe and nest underground. Barn owls are commonly
            associated with farmland and human-built structures. The diversity of habitats
            reflects the wide ecological range of the order.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Owls are predominantly nocturnal predators feeding on small mammals (rodents,
            shrews), birds, reptiles, amphibians, and large insects. Larger species can take
            prey up to the size of hares or other medium-sized mammals. Owls swallow prey
            whole or in large pieces and later regurgitate indigestible parts — bones, fur and
            feathers — as compact pellets, which are an important source of dietary
            information for researchers.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Owls are mostly nocturnal or crepuscular, though some species — including snowy
            owls and burrowing owls — are routinely active in daylight. They typically hunt
            from perches, scanning and listening for prey, or by quartering flight low over
            open ground.
          </p>
          <p>
            Hearing in owls is highly developed. In many species the ear openings are
            asymmetrically placed on the skull, providing directional information used to
            locate prey under leaf litter or snow. The facial disc functions as a sound
            collector.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Owl conservation status varies markedly by species. Some — for example certain
            barn owl and tawny owl populations — remain widespread, while others are listed
            as threatened or endangered, often due to habitat loss, pesticide use, secondary
            poisoning from rodenticides, and collisions with vehicles or fences. Owls feature
            prominently in human culture and folklore, with strong symbolism varying widely
            between regions.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Owls share a compact, large-headed silhouette and a number of immediately
                recognisable features: large <strong>forward-facing eyes</strong> set within
                a feathered <strong>facial disc</strong> that channels sound toward the
                ears, a short hooked beak that is often partly hidden by surrounding
                feathers, and densely feathered legs ending in strong taloned feet. Plumage
                is typically cryptic — mottled in earth, bark, or snow tones — providing
                excellent camouflage at daytime roosts.
              </p>
              <p>
                Body size, head shape, and markings vary enormously between species. Some
                species (great horned owl, long-eared owl, eagle owls) carry conspicuous
                tufts of feathers known as &quot;ear tufts&quot; or &quot;plumicorns&quot;,
                which are <em>not</em> ears at all. The barn owl is recognisable by a clear
                heart-shaped white facial disc, while the snowy owl is largely white with
                varying dark barring. Field identification typically combines size,
                silhouette, facial-disc shape, ear-tuft presence or absence, plumage
                pattern, habitat, and call — colour alone is rarely sufficient because
                cryptic plumage looks different in different lighting.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Owls are part of the broader group of birds of prey, but they belong to a separate
          order from diurnal raptors such as eagles, falcons and hawks. The grouping is now
          understood as a result of convergent evolution rather than close common ancestry.
        </p>
      }
      faqs={[
        {
          question: "How do owls fly so quietly?",
          answer:
            "Owls have specialised feather structures — serrated leading edges, a soft fringe on the trailing edges, and a fine downy surface on the upper feathers — that disrupt the airflow over the wings and reduce flight noise. This adaptation supports prey detection (the owl can still hear faint sounds while flying) and stealth approach.",
        },
        {
          question: "Can owls turn their heads all the way around?",
          answer:
            "Owls cannot rotate their heads a full 360 degrees, but they can rotate them through a large arc — commonly cited as up to about 270 degrees — to compensate for fixed eyes that cannot move in their sockets. Specialised neck vasculature helps maintain blood supply during the rotation.",
        },
        {
          question: "Are all owls nocturnal?",
          answer:
            "No. Most owl species are nocturnal or crepuscular, but several — including the snowy owl, short-eared owl and burrowing owl — are regularly active in daylight.",
        },
        {
          question: "Do owls eat cats or small dogs?",
          answer:
            "Predation of small companion animals by large owls is documented but uncommon. Larger species such as great horned owls are capable of taking prey of comparable mass; risks are highest for very small pets left outside unsupervised at night in areas where large owls are present.",
        },
      ]}
      quickFacts={[
        { label: "Order", value: "Strigiformes" },
        { label: "Families", value: "Strigidae and Tytonidae" },
        { label: "Class", value: "Aves" },
        { label: "Species count", value: "200+ (approximate; taxonomy evolves)" },
        { label: "Diet", value: "Small mammals, birds, insects, reptiles" },
        { label: "Activity", value: "Mostly nocturnal/crepuscular" },
        { label: "Range", value: "All continents except Antarctica" },
        { label: "IUCN Status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle", description: "Diurnal raptors" },
        { label: "Penguin Profile", href: "/animals/penguin", description: "Flightless seabirds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
