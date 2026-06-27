import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Fish Encyclopedia — Freshwater, Aquarium & Ocean Fish Profiles",
  description:
    "Educational fish profiles covering aquarium and freshwater fish — bettas, goldfish, guppies, tetras — and ocean fish such as clownfish, salmon, tuna, seahorses, and rays.",
  path: "/animal-encyclopedia/fish",
});

const freshwater = [
  { href: "/animals/betta-fish", label: "Betta Fish", desc: "Betta splendens — the labyrinth-breathing Siamese fighting fish." },
  { href: "/animals/goldfish", label: "Goldfish", desc: "Carassius auratus — a long-lived domesticated carp-family fish." },
  { href: "/animals/guppy", label: "Guppy", desc: "Poecilia reticulata — a small, colourful livebearer." },
  { href: "/animals/angelfish", label: "Angelfish", desc: "Pterophyllum scalare — a tall-finned South American cichlid." },
  { href: "/animals/tetra", label: "Tetra", desc: "Small schooling characins, using the neon tetra as a reference." },
  { href: "/animals/koi", label: "Koi", desc: "Ornamental varieties of the common carp, kept in ponds." },
  { href: "/animals/carp", label: "Carp", desc: "Cyprinus carpio — a widespread, often introduced freshwater fish." },
  { href: "/animals/catfish", label: "Catfish", desc: "Order Siluriformes — barbel-bearing fish, using the channel catfish." },
  { href: "/animals/piranha", label: "Piranha", desc: "Sharp-toothed South American fish, far less ferocious than its reputation." },
  { href: "/animals/sturgeon", label: "Sturgeon", desc: "Family Acipenseridae — armored 'living fossil' fish; many are threatened." },
  { href: "/animals/electric-eel", label: "Electric Eel", desc: "Electrophorus electricus — an Amazon knifefish that shocks its prey." },
  { href: "/animals/archerfish", label: "Archerfish", desc: "Family Toxotidae — shoots down insects with precise jets of water." },
  { href: "/animals/lungfish", label: "Lungfish", desc: "Subclass Dipnoi — air-breathing 'living fossil' fish; some survive drought in mud." },
  { href: "/animals/gar", label: "Gar", desc: "Family Lepisosteidae — armor-scaled 'living fossil' predators; the giant alligator gar." },
  { href: "/animals/paddlefish", label: "Paddlefish", desc: "Polyodon spathula — a plankton-filtering river fish with a sensory paddle snout." },
  { href: "/animals/snakehead", label: "Snakehead", desc: "Family Channidae — air-breathing predators; prized food, but invasive abroad." },
  { href: "/animals/bichir", label: "Bichir", desc: "Genus Polypterus — ancient African fish with dorsal finlets and true air-breathing lungs." },
  { href: "/animals/nile-perch", label: "Nile Perch", desc: "Lates niloticus — a huge African freshwater predator; introduced and invasive in Lake Victoria." },
  { href: "/animals/tilapia", label: "Tilapia", desc: "Cichlids such as Oreochromis niloticus — African freshwater fish, widely farmed and mouthbrooding." },
];

const marine = [
  { href: "/animals/clownfish", label: "Clownfish", desc: "Anemonefish (Amphiprion) famous for their anemone partnership." },
  { href: "/animals/salmon", label: "Salmon", desc: "Migratory fish that return to fresh water to spawn." },
  { href: "/animals/tuna", label: "Tuna", desc: "Fast, powerful open-ocean fish of the mackerel family." },
  { href: "/animals/seahorse", label: "Seahorse", desc: "Upright reef fish where the male carries the young." },
  { href: "/animals/ray", label: "Ray", desc: "Flattened cartilaginous fish related to sharks." },
  { href: "/animals/eel", label: "Eel", desc: "Elongated true eels (Anguilliformes), using the moray eel." },
  { href: "/animals/pufferfish", label: "Pufferfish", desc: "Tetraodontidae — inflating fish, many of them highly toxic." },
  { href: "/animals/barracuda", label: "Barracuda", desc: "Sphyraena — fast, streamlined ambush predators with sharp teeth." },
  { href: "/animals/grouper", label: "Grouper", desc: "Serranidae — large suction-feeding reef ambush predators." },
  { href: "/animals/moray-eel", label: "Moray Eel", desc: "Muraenidae — reef eels with a hidden second set of jaws." },
  { href: "/animals/lionfish", label: "Lionfish", desc: "Pterois — venomous-spined reef fish; invasive in the Atlantic." },
  { href: "/animals/cod", label: "Cod", desc: "Gadus morhua — a cold-water bottom fish of huge fishery importance." },
  { href: "/animals/mackerel", label: "Mackerel", desc: "Scombridae — fast, streamlined schooling fish related to tuna." },
  { href: "/animals/parrotfish", label: "Parrotfish", desc: "Scaridae — beaked reef grazers that help produce white sand." },
  { href: "/animals/seadragon", label: "Leafy Seadragon", desc: "Phycodurus eques — a seahorse relative disguised as drifting seaweed." },
  { href: "/animals/mudskipper", label: "Mudskipper", desc: "Amphibious gobies that walk on their fins and breathe air." },
  { href: "/animals/mola", label: "Ocean Sunfish (Mola)", desc: "Mola mola — the heaviest bony fish, a disc-shaped surface basker." },
  { href: "/animals/wrasse", label: "Wrasse", desc: "Family Labridae — colourful reef fish; cleaners and the giant humphead wrasse." },
  { href: "/animals/triggerfish", label: "Triggerfish", desc: "Family Balistidae — bold reef fish with a locking dorsal spine." },
  { href: "/animals/flounder", label: "Flounder", desc: "Flatfish that lie on the seabed with both eyes on one side." },
  { href: "/animals/stonefish", label: "Stonefish", desc: "Genus Synanceia — camouflaged reef fish; the most venomous fish in the world." },
  { href: "/animals/lamprey", label: "Lamprey", desc: "Ancient jawless fish with a round, toothed sucker mouth; some parasitic." },
  { href: "/animals/remora", label: "Remora", desc: "'Sharksuckers' that hitch rides on sharks, rays, turtles, and whales." },
  { href: "/animals/oarfish", label: "Oarfish", desc: "Regalecus glesne — the longest bony fish; a likely source of sea-serpent tales." },
  { href: "/animals/hagfish", label: "Hagfish", desc: "Jawless deep-sea fish famous for producing huge amounts of defensive slime." },
  { href: "/animals/flying-fish", label: "Flying Fish", desc: "Family Exocoetidae — ocean fish that glide above the waves to escape predators." },
  { href: "/animals/butterflyfish", label: "Butterflyfish", desc: "Family Chaetodontidae — vivid, disc-shaped reef fish; many feed on living coral." },
  { href: "/animals/frogfish", label: "Frogfish", desc: "Family Antennariidae — camouflaged anglerfish that 'walk' and fish with a built-in lure." },
  { href: "/animals/goby", label: "Goby", desc: "Family Gobiidae — tiny bottom fish with a suction-disc fin; famous for the goby–shrimp partnership." },
  { href: "/animals/damselfish", label: "Damselfish", desc: "Family Pomacentridae — bold little reef fish (clownfish among them); some farm algae." },
  { href: "/animals/boxfish", label: "Boxfish", desc: "Family Ostraciidae — rigid, armoured box-shaped reef fish that can release a toxin when stressed." },
  { href: "/animals/blenny", label: "Blenny", desc: "Family Blenniidae — big-eyed little reef fish; one species mimics the cleaner wrasse to steal bites." },
  { href: "/animals/batfish", label: "Batfish (Spadefish)", desc: "Genus Platax — tall, disc-shaped reef fish whose juveniles mimic drifting leaves." },
  { href: "/animals/hawkfish", label: "Hawkfish", desc: "Family Cirrhitidae — reef fish that perch on coral and pounce on prey like a hawk." },
  { href: "/animals/wolffish", label: "Wolffish", desc: "Genus Anarhichas — fanged, shellfish-crushing cold-water fish with natural antifreeze in their blood." },
  { href: "/animals/dragonet", label: "Dragonet", desc: "Family Callionymidae — small seabed reef fish; includes the dazzling, true-blue mandarinfish." },
  { href: "/animals/weeverfish", label: "Weeverfish", desc: "Family Trachinidae — sand-burying coastal fish with venomous spines; among the most venomous fish in European seas." },
  { href: "/animals/lanternfish", label: "Lanternfish", desc: "Family Myctophidae — glowing deep-sea fish that may be among the most abundant vertebrates on Earth." },
  // Deep-Sea Species Expansion (2026-06-27)
  { href: "/animals/gulper-eel", label: "Gulper Eel", desc: "Eurypharynx pelecanoides — a deep-sea 'pelican eel' with an enormous, expandable mouth." },
  { href: "/animals/barreleye-fish", label: "Barreleye Fish", desc: "Family Opisthoproctidae — deep-sea fish with tubular upward eyes; some have a transparent head." },
  { href: "/animals/hatchetfish", label: "Hatchetfish", desc: "Family Sternoptychidae — silvery twilight-zone fish that hide their silhouette with belly photophores." },
  { href: "/animals/black-dragonfish", label: "Black Dragonfish", desc: "Genus Idiacanthus — slender deep-sea predators with light organs and extreme male–female differences." },
  { href: "/animals/snailfish", label: "Snailfish", desc: "Family Liparidae — soft, scaleless fish from tide pools to hadal trenches; some are the deepest-living fish known." },
];

export default function FishEncyclopediaPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Fish", url: "https://faunahub.com/animal-encyclopedia/fish" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/animal-encyclopedia" className="hover:text-[#063F2A] hover:no-underline">
                Animal Encyclopedia
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Fish</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Fish
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Fish are the most diverse group of vertebrates, with tens of thousands of species
              living in fresh water and the sea. These profiles cover popular aquarium and
              freshwater fish alongside ocean fish, with a consistent reminder that aquarium fish
              are living animals with real needs — not effortless decorations — and that wild fish
              are wildlife, not pets.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          {/* Aquarium-care callout */}
          <aside
            aria-label="Aquarium care hub"
            className="card p-5 sm:p-6 mb-10 border-l-4 border-l-[#7BAA35] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <span className="tag mb-2 inline-block">Care Hub</span>
              <h2 className="text-lg sm:text-xl font-semibold text-[#17211B] mb-1">
                Thinking about keeping fish?
              </h2>
              <p className="text-sm text-[#5E6B63] leading-relaxed max-w-2xl">
                The Aquarium Care hub covers responsible setup, water quality, feeding, and when to
                seek qualified help — educational planning, not veterinary advice.
              </p>
            </div>
            <Link href="/aquarium-care" className="btn-primary text-sm shrink-0">
              Open Aquarium Care →
            </Link>
          </aside>

          <section aria-labelledby="freshwater-heading">
            <h2 id="freshwater-heading" className="section-title">Freshwater &amp; Aquarium Fish</h2>
            <p className="section-subtitle max-w-2xl">
              Popular aquarium and pond fish. Each profile distinguishes responsible aquarium
              keeping from wild fish and links to the relevant care basics.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {freshwater.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {f.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{f.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="marine-heading" className="mt-12">
            <h2 id="marine-heading" className="section-title">Marine &amp; Ocean Fish</h2>
            <p className="section-subtitle max-w-2xl">
              Ocean fish covered as wildlife, with cautious conservation notes and clear distinction
              from aquarium pets. Several of these are group-level overviews.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {marine.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {f.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{f.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="prose-content mt-12 max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About Fish Profiles</h2>
            <p>
              Fish profiles on FaunaHub cover classification, appearance, habitat, diet, and
              behaviour, with cautious, source-reviewed wording. Where a common name spans many
              species — such as &quot;tetra&quot;, &quot;catfish&quot;, &quot;ray&quot;, or
              &quot;pufferfish&quot; — the page is a group-level overview rather than a single-species
              account, and a representative reference species is named. Conservation status varies by
              species and should be checked against current authoritative sources.
            </p>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link
              href="/animal-encyclopedia/marine-animals"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Marine Animals
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Whales, dolphins, sharks, and invertebrates of the ocean.
              </p>
            </Link>
            <Link
              href="/animal-encyclopedia"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Animal Encyclopedia
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Browse all animal categories including mammals, birds, reptiles, and insects.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
