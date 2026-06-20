import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bowerbird";
const TITLE = "Bowerbird — Profile, the Bird That Builds & Decorates";
const DESC =
  "Explore bowerbirds (family Ptilonorhynchidae): Australasian birds whose males build and decorate elaborate 'bowers' to court females — one of the animal kingdom's great displays of art.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("bowerbird"),
});

export default function BowerbirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Bowerbird"
      scientificName="Ptilonorhynchus violaceus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Australasia", "Builder"]}
      image={getAnimalImage("bowerbird") ?? undefined}
      galleryImages={getAnimalGalleryImages("bowerbird")}
      sources={ANIMAL_SOURCES.bowerbird}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Bowerbirds (family Ptilonorhynchidae) are birds of Australia and New Guinea
            renowned for one of the most extraordinary courtship behaviours in nature: the
            males build and decorate elaborate structures called <em>bowers</em> to win
            mates. The satin bowerbird (<em>Ptilonorhynchus violaceus</em>), shown here, is
            a famous example — the glossy blue-black male builds an avenue of sticks and
            adorns it with collected objects, often favouring blue items.
          </p>
          <p>
            Crucially, the bower is not a nest. It is a display arena, built purely to
            impress visiting females, and the effort and artistry a male puts into it can
            decide whether he breeds.
          </p>
          <p>
            <strong>Note:</strong> bower styles and decoration vary by species; details here
            use the satin bowerbird as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Bowerbirds live in the forests, woodlands, and scrub of Australia and New Guinea,
          with different species in rainforest, eucalypt forest, and drier habitats. The
          satin bowerbird occupies forests and woodland edges of eastern Australia, often
          venturing into gardens and clearings where it gathers decorations.
        </p>
      }
      diet={
        <p>
          Most bowerbirds are omnivores, eating fruit, leaves, seeds, nectar, and insects,
          with fruit especially important for many species. The satin bowerbird feeds
          largely on fruit through much of the year, switching to more insects and leaves at
          times, and forages both in trees and on the ground.
        </p>
      }
      behavior={
        <p>
          The male bowerbird&apos;s building and decorating is the family&apos;s signature.
          A satin bowerbird male clears a court and builds two parallel walls of sticks (an
          &ldquo;avenue&rdquo;), then decorates it with chosen objects — famously blue ones,
          from flowers and feathers to bits of plastic — and may even &ldquo;paint&rdquo; the
          walls with chewed plant matter. Some species arrange objects to create visual
          illusions of size. Females tour several bowers, judge the construction and display,
          and choose a mate; the female alone then builds a separate nest and raises the
          young. This behaviour is often cited as a striking example of animal aesthetics.
        </p>
      }
      humanInteraction={
        <p>
          Bowerbirds are beloved for their building artistry and are popular with
          birdwatchers and researchers studying animal behaviour and mate choice. The satin
          bowerbird is common and even visits gardens, though some New Guinea species depend
          on intact forest. Their habit of collecting bright human-made objects is famous —
          and a reminder to keep litter out of their habitat. Consult authoritative sources
          for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a bower the same as a nest?",
          answer:
            "No — this is a common misconception. A bower is a display structure that the male builds and decorates purely to court females; eggs are never laid there. After mating, the female builds a separate, ordinary nest elsewhere and raises the chicks on her own. The bower is about attraction, not raising young.",
        },
        {
          question: "Why do satin bowerbirds collect blue objects?",
          answer:
            "Male satin bowerbirds strongly favour blue decorations — flowers, feathers, berries, and even blue plastic — to adorn their bowers, probably because blue is rare in their environment and contrasts with the male's own glossy blue-black plumage and violet eyes. Females appear to prefer well-decorated bowers, so good collecting helps a male breed.",
        },
        {
          question: "How do bowerbirds use 'illusions' in their displays?",
          answer:
            "Some bowerbirds arrange decorations by size to create forced-perspective illusions that can make the display — or the male — appear different in scale to a watching female. This sophisticated visual trickery is one reason bowerbirds are studied as an example of animal aesthetics and cognition.",
        },
        {
          question: "What do bowerbirds eat?",
          answer:
            "Most are omnivores, eating fruit, leaves, seeds, nectar, and insects. Fruit is especially important to many species, including the satin bowerbird, which forages in trees and on the ground and shifts its diet with the seasons.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Ptilonorhynchidae" },
        { label: "Reference species", value: "Ptilonorhynchus violaceus (satin bowerbird)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Omnivore (fruit-leaning; also insects)" },
        { label: "Signature trait", value: "Males build & decorate bowers" },
        { label: "Bower", value: "A display arena, not a nest" },
        { label: "Range", value: "Australia & New Guinea" },
        { label: "Status", value: "Many common (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Lyrebird Profile", href: "/animals/lyrebird", description: "Another Australian display virtuoso" },
        { label: "Cock-of-the-Rock Profile", href: "/animals/cock-of-the-rock", description: "Another bird with elaborate courtship" },
        { label: "Magpie Profile", href: "/animals/magpie", description: "Another clever bird drawn to objects" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
