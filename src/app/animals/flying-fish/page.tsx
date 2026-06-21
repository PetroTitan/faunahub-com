import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/flying-fish";
const TITLE = "Flying Fish — Profile, Gliding Over the Waves & Behavior";
const DESC =
  "Explore flying fish (family Exocoetidae): ocean fish that escape predators by launching out of the water and gliding on enlarged wing-like fins, sometimes for hundreds of metres.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("flying-fish"),
});

export default function FlyingFishPage() {
  return (
    <AnimalProfileLayout
      commonName="Flying Fish"
      scientificName="family Exocoetidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Open ocean", "Glider"]}
      image={getAnimalImage("flying-fish") ?? undefined}
      galleryImages={getAnimalGalleryImages("flying-fish")}
      sources={ANIMAL_SOURCES["flying-fish"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Flying fish (family Exocoetidae) are sleek, open-ocean fish famous for their
            ability to leap from the sea and glide through the air on greatly enlarged,
            wing-like pectoral fins. They don&apos;t truly fly by flapping — they glide — but
            the effect is spectacular: a startled flying fish can burst from the water and
            soar above the waves to escape predators below. There are many species, including
            &ldquo;four-winged&rdquo; kinds that also have enlarged pelvic fins for extra lift.
            The glider flying fish (<em>Cheilopogon atrisignis</em>) is shown here.
          </p>
          <p>
            Gliding lets flying fish leave the water entirely to escape fast hunters like tuna,
            dolphinfish, and squid that pursue them from beneath.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;flying fish&rdquo; covers many species; details here
            cover them broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Flying fish live in the warm surface waters of tropical and subtropical oceans
          around the world, mostly in the open sea near the surface. They are creatures of the
          sunlit upper layer, where they feed and where their gliding escapes are most useful,
          and large schools are a familiar sight to ocean voyagers.
        </p>
      }
      diet={
        <p>
          Flying fish are mainly planktivores, feeding on tiny drifting animals (zooplankton)
          and small organisms near the surface, with some also taking small crustaceans and
          other tiny prey. In turn they are an important food for many larger ocean predators,
          making them a key link in open-ocean food webs.
        </p>
      }
      behavior={
        <p>
          To take off, a flying fish swims rapidly toward the surface, breaks through, and
          beats its still-submerged tail extremely fast to gain speed before spreading its
          wing-like fins and lifting clear of the water. A single glide can cover a long
          distance, and by dipping the tail back in to thrash again, the fish can chain
          several glides together, staying airborne for impressive stretches. They are
          attracted to lights at night and sometimes land on the decks of boats. Gliding is
          almost entirely an escape tactic, helping them flee predators that can&apos;t follow
          them into the air.
        </p>
      }
      humanInteraction={
        <p>
          Flying fish are caught for food in many parts of the world and are culturally
          important in some regions (they even feature as a national symbol of Barbados).
          They are generally abundant and a vital part of ocean food webs, supporting
          fisheries and feeding countless predators and seabirds. Consult authoritative
          sources for species-specific details.
        </p>
      }
      faqs={[
        {
          question: "Do flying fish actually fly?",
          answer:
            "Not by flapping — they glide. A flying fish builds up speed underwater, bursts through the surface, and rapidly beats its still-submerged tail to accelerate before spreading its enlarged, wing-like fins and gliding above the waves. It's true gliding flight, used mainly to escape predators, rather than powered flight like a bird's.",
        },
        {
          question: "How far can a flying fish glide?",
          answer:
            "Surprisingly far. A single glide can cover a long distance over the water, and by dipping its tail back in and thrashing again, a flying fish can link several glides together, sometimes staying airborne for hundreds of metres in total. This lets it travel well clear of underwater predators.",
        },
        {
          question: "Why do flying fish leap out of the water?",
          answer:
            "Mainly to escape. Predators such as tuna, dolphinfish, and squid chase flying fish from below, so leaping out and gliding through the air lets them flee where those hunters can't follow. Gliding is essentially a high-speed escape strategy rather than a way of feeding or travelling for its own sake.",
        },
        {
          question: "What do flying fish eat?",
          answer:
            "They feed mostly on plankton — tiny drifting animals near the ocean surface — along with small crustaceans and other little prey. As abundant surface fish, they're also a major food source for larger ocean predators and seabirds, making them an important link in open-ocean food webs.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Exocoetidae" },
        { label: "Reference species", value: "Cheilopogon atrisignis (glider flying fish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Signature trait", value: "Glides on wing-like fins" },
        { label: "Diet", value: "Mainly plankton" },
        { label: "Why it glides", value: "To escape underwater predators" },
        { label: "Habitat", value: "Warm open-ocean surface waters" },
        { label: "Range", value: "Tropical & subtropical oceans worldwide" },
      ]}
      relatedLinks={[
        { label: "Tuna Profile", href: "/animals/tuna", description: "A predator that chases flying fish" },
        { label: "Mackerel Profile", href: "/animals/mackerel", description: "Another fast open-ocean fish" },
        { label: "Tropicbird Profile", href: "/animals/tropicbird", description: "A seabird that hunts flying fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
