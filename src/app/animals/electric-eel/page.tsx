import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/electric-eel";
const TITLE = "Electric Eel — Profile, Powerful Shocks, Diet & Biology";
const DESC =
  "Explore the electric eel (Electrophorus electricus): an Amazonian knifefish — not a true eel — that generates powerful electric shocks to stun prey, navigate, and defend itself.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("electric-eel"),
});

export default function ElectricEelPage() {
  return (
    <AnimalProfileLayout
      commonName="Electric Eel"
      scientificName="Electrophorus electricus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Electric"]}
      image={getAnimalImage("electric-eel") ?? undefined}
      galleryImages={getAnimalGalleryImages("electric-eel")}
      sources={ANIMAL_SOURCES["electric-eel"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The electric eel (<em>Electrophorus electricus</em>) is a famous fish of South
            American rivers, capable of producing powerful electric shocks. Despite the name,
            it is not a true eel at all — it is a kind of knifefish, more closely related to
            catfish and carp, with a long, rounded, eel-like body. Most of that body is taken
            up by special organs packed with thousands of modified muscle cells (electrocytes)
            that work like tiny batteries wired in series.
          </p>
          <p>
            Electric eels use electricity in remarkable ways: strong jolts to stun prey and
            deter threats, and weaker pulses to sense their surroundings and communicate in
            murky water.
          </p>
          <p>
            <strong>Note:</strong> a few electric eel species are now recognised; details here
            use Electrophorus electricus broadly. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Electric eels live in the fresh waters of northern South America, especially the
          Amazon and Orinoco basins — in slow rivers, streams, swamps, floodplains, and
          murky, oxygen-poor pools. They are air-breathers, gulping air at the surface, which
          lets them survive in the still, low-oxygen waters they favour.
        </p>
      }
      diet={
        <p>
          Electric eels are carnivores that prey on fish, along with invertebrates, amphibians,
          and small animals. They hunt largely by electricity: a hunting eel emits
          high-voltage pulses that can trigger the muscles of nearby prey — making hidden fish
          twitch and reveal themselves, or briefly paralysing them — before the eel swallows
          the stunned victim. Young eels start on small invertebrates.
        </p>
      }
      behavior={
        <p>
          The electric eel&apos;s electric organs run most of its body length. Weak, constant
          pulses act like a radar system (electrolocation) and as signals to other eels in
          dark water, while strong discharges — which can reach several hundred volts — are
          used to stun prey and in defence. Remarkably, hunting eels can curl their bodies to
          concentrate the shock, and some have been observed leaping partly out of the water
          to deliver a shock directly to a threat. They breathe air and are surprisingly
          attentive parents in some respects, with males guarding nests of eggs.
        </p>
      }
      humanInteraction={
        <p>
          Electric eels have fascinated scientists for centuries and even helped inspire early
          research into electricity and the design of batteries. Their shocks are rarely
          fatal to a healthy adult human but are genuinely dangerous — repeated jolts can
          cause injury, and the real risk is being stunned and drowning in water. They should
          never be handled. Most populations are not currently of major conservation concern.
          Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Is the electric eel really an eel?",
          answer:
            "No. Despite its name and long, eel-like shape, the electric eel is not a true eel — it is a knifefish, more closely related to catfish and carp. Its body plan converged on an eel-like form, but it belongs to a completely different group of fish.",
        },
        {
          question: "How does an electric eel make electricity?",
          answer:
            "Most of its body is filled with special electric organs containing thousands of modified muscle cells called electrocytes, stacked like tiny batteries wired in series. When the eel discharges them together, the small voltages add up into a powerful shock — strong jolts of several hundred volts for hunting and defence, plus weaker pulses for sensing and communication.",
        },
        {
          question: "Why does an electric eel shock its prey?",
          answer:
            "To find and subdue it. High-voltage pulses can make a hidden fish's muscles twitch, revealing its location, and can briefly stun or paralyse prey so the eel can swallow it. Eels may curl their bodies to concentrate the shock, making the jolt more effective at close range in murky water.",
        },
        {
          question: "Are electric eels dangerous to humans?",
          answer:
            "They can be. A shock is rarely directly fatal to a healthy adult, but the jolts are genuinely dangerous — repeated discharges can injure you, and being stunned in water carries a real risk of drowning. Electric eels should never be handled, and people should keep clear of them in the wild.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Electrophorus electricus" },
        { label: "Class", value: "Actinopterygii (a knifefish, not a true eel)" },
        { label: "Power source", value: "Electric organs (electrocytes)" },
        { label: "Shock", value: "Up to several hundred volts" },
        { label: "Uses of electricity", value: "Stun prey, sense, communicate, defend" },
        { label: "Breathing", value: "Air-breather (gulps at surface)" },
        { label: "Habitat", value: "South American fresh water" },
        { label: "To humans", value: "Dangerous shocks — never handle" },
      ]}
      relatedLinks={[
        { label: "Eel Profile", href: "/animals/eel", description: "The true eels it's named after" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "A closer relative of the electric eel" },
        { label: "Piranha Profile", href: "/animals/piranha", description: "Another famous Amazon fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
      ]}
    />
  );
}
