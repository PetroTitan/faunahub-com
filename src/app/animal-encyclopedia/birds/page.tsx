import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Birds Encyclopedia — Wild Bird Species Profiles & Ecology",
  description:
    "Wild bird species profiles covering eagles, owls, penguins, and falcons — habitat, diet, behavior, and conservation context.",
  path: "/animal-encyclopedia/birds",
});

const birds = [
  {
    href: "/animals/eagle",
    label: "Eagle",
    desc: "Diurnal raptors of family Accipitridae — booted, fish, snake, and forest eagles.",
  },
  {
    href: "/animals/owl",
    label: "Owl",
    desc: "Nocturnal raptors (Strigiformes) with silent flight and acute hearing.",
  },
  {
    href: "/animals/penguin",
    label: "Penguin",
    desc: "Flightless seabirds of family Spheniscidae adapted for wing-propelled swimming.",
  },
  {
    href: "/animals/duck",
    label: "Duck",
    desc: "Waterfowl of family Anatidae — a group-level overview using the mallard as a reference.",
  },
  {
    href: "/animals/goose",
    label: "Goose",
    desc: "Large grazing waterfowl (Anatidae) known for flocking and long migrations.",
  },
  { href: "/animals/robin", label: "Robin", desc: "Small garden songbird (European robin as reference)." },
  { href: "/animals/sparrow", label: "Sparrow", desc: "Small social seed-eaters; house sparrow as reference." },
  { href: "/animals/crow", label: "Crow", desc: "Intelligent corvids in the genus Corvus." },
  { href: "/animals/raven", label: "Raven", desc: "Corvus corax — the large corvid relative of the crow." },
  { href: "/animals/pigeon", label: "Pigeon", desc: "Rock dove (Columba livia), wild and domestic forms." },
  { href: "/animals/swan", label: "Swan", desc: "Large long-necked waterfowl; mute swan as reference." },
  { href: "/animals/flamingo", label: "Flamingo", desc: "Pink filter-feeding wading birds (Phoenicopteridae)." },
  { href: "/animals/peacock", label: "Peacock", desc: "Male Indian peafowl, famous for its display train." },
  { href: "/animals/toucan", label: "Toucan", desc: "Tropical birds with huge bills (Ramphastidae)." },
  { href: "/animals/hummingbird", label: "Hummingbird", desc: "Tiny hovering nectar specialists (Trochilidae)." },
  { href: "/animals/woodpecker", label: "Woodpecker", desc: "Tree-climbing, drumming birds (Picidae)." },
  { href: "/animals/hawk", label: "Hawk", desc: "Birds of prey; red-tailed hawk as reference." },
  { href: "/animals/vulture", label: "Vulture", desc: "Scavenging birds; New World and Old World groups." },
  { href: "/animals/pelican", label: "Pelican", desc: "Large waterbirds with a fish-catching throat pouch." },
  { href: "/animals/stork", label: "Stork", desc: "Tall wading birds (Ciconiidae); white stork as reference." },
];

export default function EncyclopediaBirdsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Birds", url: "https://faunahub.com/animal-encyclopedia/birds" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Birds</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Wild Birds
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Birds are the only living descendants of theropod dinosaurs, and with over 10,000
              known species they are the most diverse group of terrestrial vertebrates on Earth.
              They occupy every continent and most ocean habitats, from Arctic tundra to tropical
              rainforests and open ocean.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Wild bird profiles on FaunaHub cover species taxonomy, geographic range and migratory
              behavior, diet and foraging strategy, nesting and breeding ecology, and conservation
              status from the IUCN Red List. Profiles distinguish between wild bird ecology and
              the domesticated or captive-bred bird species covered in the pet birds section.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {birds.map((b) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {b.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{b.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10" aria-labelledby="related-heading">
            <h2 id="related-heading" className="section-title">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/compare/falcon-vs-eagle"
                className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
              >
                <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                  Falcon vs Eagle
                </h3>
                <span className="text-xs font-medium text-[#063F2A] mt-2 block">
                  Compare →
                </span>
              </Link>
            </div>
          </section>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/birdwatching"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Birdwatching Hub
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Ethical observation, identification, feeding, and nesting-season guidance.
              </p>
            </Link>
            <Link
              href="/bird-care"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Bird Care Basics
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Cautious pet-bird care planning and when to call an avian vet.
              </p>
            </Link>
            <Link
              href="/birds"
              className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
            >
              <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                Pet Bird Care Guides
              </h3>
              <p className="text-xs text-[#5E6B63]">
                Guides for owners of pet birds including parrots, canaries, and cockatiels.
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
                Browse all animal categories including mammals, reptiles, marine animals, and insects.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
