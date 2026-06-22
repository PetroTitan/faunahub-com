import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Reptiles & Amphibians Encyclopedia — Species Profiles & Ecology",
  description:
    "Educational profiles of reptiles and amphibians — crocodilians, lizards, snakes, turtles, frogs, toads, newts, and salamanders. Habitat, diet, behaviour, and ecology.",
  path: "/animal-encyclopedia/reptiles",
});

const reptiles = [
  { href: "/animals/crocodile", label: "Crocodile", desc: "Family Crocodylidae — large aquatic predators of the tropics." },
  { href: "/animals/alligator", label: "Alligator", desc: "Family Alligatoridae — American and Chinese alligators." },
  { href: "/animals/caiman", label: "Caiman", desc: "American crocodilians; spectacled caiman as a reference." },
  { href: "/animals/snake", label: "Snake", desc: "Suborder Serpentes — limbless reptiles, a group-level overview." },
  { href: "/animals/anaconda", label: "Anaconda", desc: "Green anaconda — a giant, non-venomous constrictor." },
  { href: "/animals/turtle", label: "Turtle", desc: "Order Testudines — shelled reptiles of land and water." },
  { href: "/animals/sea-turtle", label: "Sea Turtle", desc: "Ocean-going reptiles (also in Marine Animals)." },
  { href: "/animals/chameleon", label: "Chameleon", desc: "Colour-changing lizards; panther chameleon as a reference." },
  { href: "/animals/iguana", label: "Iguana", desc: "Large lizards; green iguana as a reference." },
  { href: "/animals/gecko", label: "Gecko", desc: "Climbing lizards; leopard gecko as a reference." },
  { href: "/animals/monitor-lizard", label: "Monitor Lizard", desc: "Genus Varanus; Nile monitor as a reference." },
  { href: "/animals/komodo-dragon", label: "Komodo Dragon", desc: "The largest living lizard, native to Indonesia." },
  { href: "/animals/tortoise", label: "Tortoise", desc: "Family Testudinidae — land-dwelling, long-lived shelled reptiles." },
  { href: "/animals/cobra", label: "Cobra", desc: "Genus Naja and relatives — venomous, hood-spreading snakes." },
  { href: "/animals/python", label: "Python", desc: "Family Pythonidae — non-venomous constrictors of the Old World." },
  { href: "/animals/rattlesnake", label: "Rattlesnake", desc: "Crotalus & Sistrurus — venomous New World pit vipers with a rattle." },
  { href: "/animals/gila-monster", label: "Gila Monster", desc: "Heloderma suspectum — a venomous desert lizard." },
  { href: "/animals/tuatara", label: "Tuatara", desc: "Sphenodon punctatus — sole survivor of an ancient reptile order." },
  { href: "/animals/boa", label: "Boa Constrictor", desc: "Boa constrictor — large non-venomous constrictor of the Americas." },
  { href: "/animals/gharial", label: "Gharial", desc: "Gavialis gangeticus — critically endangered, thin-snouted fish-eating crocodilian." },
  { href: "/animals/mamba", label: "Mamba", desc: "Genus Dendroaspis — fast, alert African snakes; black mamba as a reference." },
  { href: "/animals/skink", label: "Skink", desc: "Family Scincidae — smooth-scaled lizards; blue-tongued skink as a reference." },
  { href: "/animals/viper", label: "Viper", desc: "Family Viperidae — venomous snakes with long hinged fangs; Gaboon viper as a reference." },
  { href: "/animals/tegu", label: "Tegu", desc: "Large South American lizards; the partly warm-bodied Argentine tegu." },
  { href: "/animals/anole", label: "Anole", desc: "Genus Anolis — small American lizards with a colourful throat dewlap." },
  { href: "/animals/basilisk", label: "Basilisk", desc: "Genus Basiliscus — the 'Jesus lizard' that runs across water." },
  { href: "/animals/chuckwalla", label: "Chuckwalla", desc: "Genus Sauromalus — desert lizards that wedge into rocks and inflate." },
  { href: "/animals/frilled-lizard", label: "Frilled Lizard", desc: "Chlamydosaurus kingii — flares a huge neck frill and runs on two legs." },
  { href: "/animals/krait", label: "Krait", desc: "Genus Bungarus — highly venomous, mostly nocturnal Asian snakes." },
  { href: "/animals/tokay-gecko", label: "Tokay Gecko", desc: "Gekko gecko — a large, loud gecko with sticky toe pads and a firm bite." },
  { href: "/animals/sea-snake", label: "Sea Snake", desc: "Venomous marine snakes with paddle tails; the banded sea krait as a reference." },
  { href: "/animals/thorny-devil", label: "Thorny Devil", desc: "Moloch horridus — a spiky, ant-eating Australian desert lizard." },
  { href: "/animals/flying-snake", label: "Flying Snake", desc: "Genus Chrysopelea — Asian tree snakes that glide between trees." },
  { href: "/animals/caiman-lizard", label: "Caiman Lizard", desc: "Dracaena guianensis — a semi-aquatic Amazon lizard that crushes snails." },
  { href: "/animals/agama", label: "Agama", desc: "Genus Agama — African rock lizards whose dominant males flush red-and-blue." },
  { href: "/animals/horned-lizard", label: "Horned Lizard", desc: "Genus Phrynosoma — spiny desert 'horned toads'; some squirt blood from their eyes." },
  { href: "/animals/glass-lizard", label: "Glass Lizard", desc: "Legless lizards that look like snakes but blink and shed a brittle tail." },
  { href: "/animals/worm-lizard", label: "Worm Lizard", desc: "Amphisbaenia — ringed, burrowing reptiles that resemble earthworms (not worms or snakes)." },
  { href: "/animals/girdled-lizard", label: "Girdled Lizard", desc: "Family Cordylidae — armoured African lizards; the armadillo species bites its tail into a ring." },
  { href: "/animals/alligator-lizard", label: "Alligator Lizard", desc: "Genus Elgaria — armoured North American lizards with a soft expandable fold along each side." },
  { href: "/animals/wall-lizard", label: "Wall Lizard", desc: "Genus Podarcis — agile, sun-loving European lizards of walls, rocks, and ruins." },
];

const amphibians = [
  { href: "/animals/frog", label: "Frog", desc: "Order Anura — tailless amphibians, a group-level overview." },
  { href: "/animals/toad", label: "Toad", desc: "Warty-skinned frogs; common toad as a reference." },
  { href: "/animals/salamander", label: "Salamander", desc: "Tailed amphibians; fire salamander as a reference." },
  { href: "/animals/newt", label: "Newt", desc: "Semi-aquatic salamanders; smooth newt as a reference." },
  { href: "/animals/tree-frog", label: "Tree Frog", desc: "Climbing frogs with sticky toe pads; red-eyed tree frog as a reference." },
  { href: "/animals/poison-dart-frog", label: "Poison Dart Frog", desc: "Family Dendrobatidae — vivid, toxic rainforest frogs." },
  { href: "/animals/fire-salamander", label: "Fire Salamander", desc: "Salamandra salamandra — striking black-and-yellow European amphibian." },
  { href: "/animals/axolotl", label: "Axolotl", desc: "Ambystoma mexicanum — neotenic salamander famous for regeneration." },
  { href: "/animals/bullfrog", label: "American Bullfrog", desc: "Lithobates catesbeianus — large, deep-voiced frog; invasive where introduced." },
  { href: "/animals/hellbender", label: "Hellbender", desc: "Cryptobranchus alleganiensis — North America's largest salamander." },
  { href: "/animals/glass-frog", label: "Glass Frog", desc: "Family Centrolenidae — tree frogs with see-through undersides." },
  { href: "/animals/tiger-salamander", label: "Tiger Salamander", desc: "Ambystoma tigrinum — a large burrowing salamander; axolotl relative." },
  { href: "/animals/olm", label: "Olm", desc: "Proteus anguinus — a blind, long-lived European cave salamander." },
  { href: "/animals/mudpuppy", label: "Mudpuppy", desc: "Necturus maculosus — an aquatic salamander with bushy red gills." },
  { href: "/animals/goliath-frog", label: "Goliath Frog", desc: "Conraua goliath — the world's largest frog, which builds its own nest pools." },
  { href: "/animals/surinam-toad", label: "Surinam Toad", desc: "Pipa pipa — a flat aquatic frog whose young develop in pockets on its back." },
  { href: "/animals/clawed-frog", label: "African Clawed Frog", desc: "Xenopus laevis — a famous lab frog, and invasive where released." },
  { href: "/animals/mantella", label: "Mantella", desc: "Genus Mantella — tiny, brilliantly coloured toxic frogs of Madagascar." },
  { href: "/animals/midwife-toad", label: "Midwife Toad", desc: "Genus Alytes — the male carries the eggs wrapped around his legs." },
  { href: "/animals/spadefoot-toad", label: "Spadefoot Toad", desc: "Burrowing toads that dig with spade-like feet and wait out droughts." },
  { href: "/animals/tomato-frog", label: "Tomato Frog", desc: "Dyscophus antongilii — a vivid red Madagascan frog with a sticky defence." },
  { href: "/animals/marbled-newt", label: "Marbled Newt", desc: "Triturus marmoratus — a striking green-and-black European newt." },
  { href: "/animals/reed-frog", label: "Reed Frog", desc: "Genus Hyperolius — small, brilliantly coloured African frogs of the reeds." },
  { href: "/animals/fire-bellied-toad", label: "Fire-Bellied Toad", desc: "Genus Bombina — flashes a warning red-and-black belly when threatened." },
  { href: "/animals/spring-peeper", label: "Spring Peeper", desc: "Pseudacris crucifer — a tiny North American tree frog whose chorus heralds spring." },
  { href: "/animals/painted-frog", label: "Painted Frog", desc: "Genus Discoglossus — mottled Mediterranean frogs of an ancient, disc-tongued lineage." },
  { href: "/animals/wood-frog", label: "Wood Frog", desc: "Lithobates sylvaticus — a masked frog that freezes solid each winter and thaws back to life." },
  { href: "/animals/red-backed-salamander", label: "Red-backed Salamander", desc: "Plethodon cinereus — an abundant lungless salamander that breathes through its skin." },
];

export default function EncyclopediaReptilesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Reptiles & Amphibians", url: "https://faunahub.com/animal-encyclopedia/reptiles" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Reptiles &amp; Amphibians</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Reptiles &amp; Amphibians
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Reptiles and amphibians are two distinct groups of ectothermic vertebrates. Reptiles —
              lizards, snakes, crocodilians, and turtles — have dry, scaly skin and (mostly) lay
              shelled eggs on land. Amphibians — frogs, toads, newts, and salamanders — have moist,
              permeable skin and usually depend on water to breed. These profiles are educational,
              not care guides, and wild reptiles and amphibians should be observed without handling.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="reptiles-heading">
            <h2 id="reptiles-heading" className="section-title">Reptiles</h2>
            <p className="section-subtitle max-w-2xl">
              Scaly, mostly land-egg-laying vertebrates — crocodilians, lizards, snakes, and turtles.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {reptiles.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {r.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{r.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="amphibians-heading" className="mt-12">
            <h2 id="amphibians-heading" className="section-title">Amphibians</h2>
            <p className="section-subtitle max-w-2xl">
              Moist-skinned vertebrates that usually breed in water — frogs, toads, newts, and
              salamanders. Wild amphibians have sensitive skin and should not be handled.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {amphibians.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {a.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{a.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="prose-content mt-12 max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Profiles cover classification, geographic range, habitat, diet, behaviour, and
              conservation context, with conservation status drawn from sources such as the IUCN Red
              List where available. The distinction between wild ecology and any captive context is
              clearly noted, and these pages do not provide care, handling, or veterinary advice.
              Amphibians worldwide face serious declines, so conservation status should always be
              checked against current sources.
            </p>
          </section>

          <section className="mt-10" aria-labelledby="related-heading">
            <h2 id="related-heading" className="section-title">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/compare/alligator-vs-crocodile"
                className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                  Alligator vs Crocodile
                </h3>
                <span className="text-xs font-medium text-[#063F2A] mt-2 block">Compare →</span>
              </Link>
            </div>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link
              href="/reptiles"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Pet Reptile Care Guides
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Habitat, feeding, and health guides for pet reptiles — separate from these wild profiles.
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
                Browse all animal categories including mammals, birds, marine animals, and insects.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
