import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/flying-snake";
const TITLE = "Flying Snake — Profile, the Gliding Snake & How It Works";
const DESC =
  "Explore flying snakes (genus Chrysopelea): Asian tree snakes that launch from branches and glide through the air by flattening their bodies into a ribbon — true gliders, not fliers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("flying-snake"),
});

export default function FlyingSnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Flying Snake"
      scientificName="Chrysopelea ornata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Glider"]}
      image={getAnimalImage("flying-snake") ?? undefined}
      galleryImages={getAnimalGalleryImages("flying-snake")}
      sources={ANIMAL_SOURCES["flying-snake"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Flying snakes (genus <em>Chrysopelea</em>) are slender, agile tree snakes of
            South and Southeast Asia with an astonishing ability: they can launch themselves
            from a high branch and glide through the air to another tree or to the ground.
            The golden tree snake (<em>Chrysopelea ornata</em>), shown here, is one of the
            best-known species, a graceful greenish snake patterned in black and gold.
          </p>
          <p>
            Of course, a snake has no wings — so &ldquo;flying&rdquo; really means gliding.
            By flattening its body into a wide ribbon and making swimming-like motions in the
            air, a flying snake can travel surprising distances and even steer as it falls.
          </p>
          <p>
            <strong>Note:</strong> flying snakes are mildly venomous (rear-fanged) but are
            considered harmless to humans; details here use the golden tree snake as a
            reference. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Flying snakes live in tropical forests, woodland, and gardens across South and
          Southeast Asia, from India and Sri Lanka through China and into the islands of the
          region. They are highly arboreal, excellent climbers that spend most of their time
          in trees, which is exactly where their gliding ability is most useful.
        </p>
      }
      diet={
        <p>
          Flying snakes are carnivores that hunt in the trees and on the ground for lizards
          (especially geckos), frogs, small birds, bats, and rodents. They are active,
          fast-moving daytime hunters, using mild venom delivered by rear fangs to help
          subdue prey, which they then swallow whole.
        </p>
      }
      behavior={
        <p>
          To glide, a flying snake slithers to the end of a high branch, dangles in a
          J-shape, and then launches itself, instantly sucking in its belly and splaying its
          ribs to flatten its whole body into a concave, wing-like ribbon. As it falls it
          undulates from side to side — almost &ldquo;swimming&rdquo; through the air — which
          generates lift and lets it glide a long way and even change direction, often
          landing softly some distance from where it started. This remarkable form of
          controlled gliding helps the snake travel between trees, escape predators, and save
          energy, and it has fascinated scientists studying animal flight.
        </p>
      }
      humanInteraction={
        <p>
          Flying snakes are harmless to people — although mildly venomous to their small prey,
          their venom is weak and delivered by rear fangs, posing no real danger to humans.
          They are sometimes encountered in gardens and around buildings, where they help
          control lizards and rodents. Their gliding has inspired research and even robotics.
          Most species are reasonably common. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Can snakes really fly?",
          answer:
            "Not in the sense of powered flight — flying snakes glide rather than fly. They launch from a high branch and flatten their bodies into a wide, concave ribbon, then undulate through the air to generate lift and travel to another tree or the ground. So 'flying snake' really means a snake that's a very good glider.",
        },
        {
          question: "How does a flying snake glide without wings?",
          answer:
            "It turns its whole body into a wing. After launching, the snake sucks in its belly and splays its ribs to flatten itself into a concave ribbon shape, then makes side-to-side 'swimming' motions in the air. This shape and motion generate enough lift to let it glide a surprising distance and even steer as it descends.",
        },
        {
          question: "Are flying snakes dangerous to humans?",
          answer:
            "No. Flying snakes are mildly venomous, but their venom is weak and delivered by small rear fangs, which makes them effectively harmless to people. They use the venom on small prey like lizards and frogs. Around humans they are shy and pose no real threat.",
        },
        {
          question: "What do flying snakes eat?",
          answer:
            "They are carnivores that hunt mainly in trees, taking lizards (especially geckos), frogs, small birds, bats, and rodents. As fast, agile daytime hunters, they use mild venom to help subdue prey before swallowing it whole.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Chrysopelea (flying snakes)" },
        { label: "Reference species", value: "Chrysopelea ornata (golden tree snake)" },
        { label: "Class", value: "Reptilia (snake)" },
        { label: "Signature trait", value: "Glides by flattening into a ribbon" },
        { label: "Diet", value: "Carnivore (lizards, frogs, small prey)" },
        { label: "Venom", value: "Mild, rear-fanged — harmless to people" },
        { label: "Lifestyle", value: "Arboreal; day-active" },
        { label: "Range", value: "South & Southeast Asia" },
      ]}
      relatedLinks={[
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a group" },
        { label: "Python Profile", href: "/animals/python", description: "A large non-venomous Asian snake" },
        { label: "Cobra Profile", href: "/animals/cobra", description: "A venomous Asian snake" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
