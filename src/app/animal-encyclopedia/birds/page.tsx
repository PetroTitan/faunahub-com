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
  { href: "/animals/ostrich", label: "Ostrich", desc: "Struthio camelus — the world's largest living bird." },
  { href: "/animals/emu", label: "Emu", desc: "Dromaius novaehollandiae — Australia's largest bird." },
  { href: "/animals/cassowary", label: "Cassowary", desc: "Genus Casuarius — powerful flightless rainforest birds." },
  { href: "/animals/kiwi", label: "Kiwi", desc: "Genus Apteryx — small, nocturnal flightless birds of New Zealand." },
  { href: "/animals/magpie", label: "Magpie", desc: "Pica pica — bold, intelligent black-and-white corvid." },
  { href: "/animals/cardinal", label: "Cardinal", desc: "Cardinalis cardinalis — vivid red North American songbird." },
  { href: "/animals/heron", label: "Heron", desc: "Family Ardeidae — tall wading birds; grey heron as a reference." },
  { href: "/animals/kingfisher", label: "Kingfisher", desc: "Family Alcedinidae — vivid waterside birds; common kingfisher as a reference." },
  { href: "/animals/kookaburra", label: "Kookaburra", desc: "Genus Dacelo — large Australasian kingfishers with a laughing call." },
  { href: "/animals/hornbill", label: "Hornbill", desc: "Family Bucerotidae — big-billed tropical birds; great hornbill as a reference." },
  { href: "/animals/bee-eater", label: "Bee-eater", desc: "Family Meropidae — vivid birds that catch insects in flight." },
  { href: "/animals/albatross", label: "Albatross", desc: "Family Diomedeidae — ocean wanderers with the largest wingspans." },
  { href: "/animals/seagull", label: "Seagull (Gull)", desc: "Family Laridae — adaptable, intelligent coastal birds." },
  { href: "/animals/roadrunner", label: "Roadrunner", desc: "Geococcyx californianus — a fast-running desert cuckoo." },
  { href: "/animals/quetzal", label: "Resplendent Quetzal", desc: "Pharomachrus mocinno — dazzling cloud-forest bird of Central America." },
  { href: "/animals/hoopoe", label: "Hoopoe", desc: "Upupa epops — unmistakable crested bird with a long curved bill." },
  { href: "/animals/sunbird", label: "Sunbird", desc: "Family Nectariniidae — iridescent Old World nectar-feeders." },
  { href: "/animals/swift", label: "Swift", desc: "Family Apodidae — supremely aerial birds that can stay airborne for months." },
  { href: "/animals/secretary-bird", label: "Secretarybird", desc: "Sagittarius serpentarius — a raptor that hunts snakes on foot." },
  { href: "/animals/weaver", label: "Weaver", desc: "Family Ploceidae — Old World birds that weave elaborate knotted nests." },
  { href: "/animals/oxpecker", label: "Oxpecker", desc: "Genus Buphagus — African birds that ride on large mammals." },
  { href: "/animals/nightjar", label: "Nightjar", desc: "Family Caprimulgidae — camouflaged nocturnal insect-catchers." },
  { href: "/animals/lyrebird", label: "Lyrebird", desc: "Menura novaehollandiae — an Australian master of vocal mimicry." },
  { href: "/animals/turaco", label: "Turaco", desc: "Family Musophagidae — colourful African birds with unique pigments." },
  { href: "/animals/shoebill", label: "Shoebill", desc: "Balaeniceps rex — a tall African swamp bird with a huge shoe-shaped bill." },
  { href: "/animals/frogmouth", label: "Frogmouth", desc: "Family Podargidae — nocturnal birds that mimic broken branches." },
  { href: "/animals/potoo", label: "Potoo", desc: "Family Nyctibiidae — neotropical 'tree-stump' camouflage masters." },
  { href: "/animals/hoatzin", label: "Hoatzin", desc: "Opisthocomus hoazin — the leaf-fermenting Amazonian 'stinkbird'." },
  { href: "/animals/jacana", label: "Jacana", desc: "Family Jacanidae — long-toed 'lily-trotters' with role-reversed parenting." },
  { href: "/animals/jabiru", label: "Jabiru", desc: "Jabiru mycteria — a giant stork of Neotropical wetlands." },
  { href: "/animals/sunbittern", label: "Sunbittern", desc: "Eurypyga helias — flashes 'sunburst' eyespots on its wings." },
  { href: "/animals/kagu", label: "Kagu", desc: "Rhynochetos jubatus — New Caledonia's near-flightless 'ghost' bird." },
  { href: "/animals/motmot", label: "Motmot", desc: "Family Momotidae — colourful birds with racket-tipped tails." },
  { href: "/animals/tropicbird", label: "Tropicbird", desc: "Family Phaethontidae — ocean seabirds with long tail streamers." },
  { href: "/animals/frigatebird", label: "Frigatebird", desc: "Family Fregatidae — soaring sea pirates with an inflatable red pouch." },
  { href: "/animals/hamerkop", label: "Hamerkop", desc: "Scopus umbretta — an African bird that builds giant domed nests." },
  { href: "/animals/cock-of-the-rock", label: "Cock-of-the-Rock", desc: "Genus Rupicola — brilliant South American birds that display at leks." },
  { href: "/animals/bowerbird", label: "Bowerbird", desc: "Family Ptilonorhynchidae — males build & decorate elaborate bowers." },
  { href: "/animals/umbrellabird", label: "Umbrellabird", desc: "Genus Cephalopterus — black cotingas with a crest and throat wattle." },
  { href: "/animals/hornero", label: "Hornero", desc: "Genus Furnarius — South American birds that build domed mud 'oven' nests." },
  { href: "/animals/seriema", label: "Seriema", desc: "Family Cariamidae — snake-hunting grassland birds; kin of the 'terror birds'." },
  { href: "/animals/screamer", label: "Screamer", desc: "Family Anhimidae — loud South American wetland relatives of waterfowl." },
  { href: "/animals/trumpeter", label: "Trumpeter", desc: "Genus Psophia — social Amazon ground birds with cooperative breeding." },
  { href: "/animals/guan", label: "Guan", desc: "Family Cracidae — large arboreal Neotropical fruit-eating game birds." },
  { href: "/animals/curassow", label: "Curassow", desc: "Family Cracidae — big crested forest birds; the great curassow as a reference." },
  { href: "/animals/chachalaca", label: "Chachalaca", desc: "Genus Ortalis — noisy, adaptable smallest cracids." },
  { href: "/animals/tinamou", label: "Tinamou", desc: "Family Tinamidae — ancient ground birds, flying kin of the ratites." },
  { href: "/animals/limpkin", label: "Limpkin", desc: "Aramus guarauna — a snail-eating wader with an eerie wail." },
  { href: "/animals/sungrebe", label: "Sungrebe", desc: "Heliornis fulica — a finfoot whose male carries chicks under his wings." },
  { href: "/animals/kakapo", label: "Kakapo", desc: "Strigops habroptilus — the world's heaviest, flightless, critically endangered parrot." },
  { href: "/animals/kea", label: "Kea", desc: "Nestor notabilis — the world's only alpine parrot, famously clever and mischievous." },
  { href: "/animals/cotinga", label: "Cotinga", desc: "Family Cotingidae — dazzlingly coloured Neotropical birds with bizarre displays." },
  { href: "/animals/manakin", label: "Manakin", desc: "Family Pipridae — tiny tropical birds whose males 'dance' to court females." },
  { href: "/animals/bird-of-paradise", label: "Bird-of-Paradise", desc: "Family Paradisaeidae — New Guinea's ornately plumed courtship dancers." },
  { href: "/animals/fairy-wren", label: "Fairy-wren", desc: "Genus Malurus — tiny Australian songbirds with brilliant blue males and cooperative families." },
  { href: "/animals/bellbird", label: "Bellbird", desc: "Genus Procnias — wattled cotinga relatives with some of the loudest calls on Earth." },
  { href: "/animals/boat-billed-heron", label: "Boat-billed Heron", desc: "Cochlearius cochlearius — a big-eyed night heron with a broad, scoop-like bill." },
  { href: "/animals/antpitta", label: "Antpitta", desc: "Family Grallariidae — round, long-legged forest-floor birds, more often heard than seen." },
  { href: "/animals/roller", label: "Roller", desc: "Family Coraciidae — jewel-coloured birds named for the males' tumbling courtship flight." },
  { href: "/animals/trogon", label: "Trogon", desc: "Family Trogonidae — iridescent forest birds (quetzals among them) with unique feet." },
  { href: "/animals/jacamar", label: "Jacamar", desc: "Family Galbulidae — glittering Neotropical birds that hawk butterflies on the wing." },
  { href: "/animals/broadbill", label: "Broadbill", desc: "Family Eurylaimidae — plump, bright Old World forest birds with wide bills and hanging nests." },
  { href: "/animals/pitta", label: "Pitta", desc: "Family Pittidae — dazzling 'jewel-thrushes' that hop, shy and elusive, on the forest floor." },
  { href: "/animals/honeyguide", label: "Honeyguide", desc: "Family Indicatoridae — African birds that lead people to bees' nests; brood parasites too." },
  { href: "/animals/tody", label: "Tody", desc: "Family Todidae — tiny emerald-and-red Caribbean jewel-birds that dig nest tunnels in banks." },
  { href: "/animals/puffbird", label: "Puffbird", desc: "Family Bucconidae — stocky, big-headed Neotropical sit-and-wait hunters; relatives of jacamars." },
  { href: "/animals/barbet", label: "Barbet", desc: "Chunky, colourful bristle-faced birds — relatives of toucans that chisel nest holes." },
  { href: "/animals/drongo", label: "Drongo", desc: "Family Dicruridae — bold black fork-tailed birds; clever mimics that fake alarm calls to steal food." },
  { href: "/animals/bustard", label: "Bustard", desc: "Family Otididae — stately ground birds of open plains; among the heaviest flying birds, with grand male displays." },
  { href: "/animals/thick-knee", label: "Thick-knee (Stone-curlew)", desc: "Family Burhinidae — big-eyed, cryptic, mostly nocturnal ground birds with eerie wailing calls." },
  { href: "/animals/sandgrouse", label: "Sandgrouse", desc: "Family Pteroclidae — desert birds whose males carry water to their chicks in special belly feathers." },
  { href: "/animals/mousebird", label: "Mousebird", desc: "Order Coliiformes — crested African birds that clamber mouse-like and huddle to sunbathe; Africa's only endemic bird order." },
  { href: "/animals/courser", label: "Courser", desc: "Family Glareolidae — long-legged dryland birds that run swiftly across open ground instead of wading." },
  { href: "/animals/go-away-bird", label: "Go-away-bird", desc: "Genus Corythaixoides — grey crested African turacos named for the loud 'g'way' alarm call that warns other animals." },
  { href: "/animals/coucal", label: "Coucal", desc: "Genus Centropus — large ground cuckoos that, unlike many cuckoos, build their own nests and raise their own young." },
  { href: "/animals/pratincole", label: "Pratincole", desc: "Genus Glareola — waders that hawk insects on the wing like giant swallows; relatives of the running coursers." },
  { href: "/animals/button-quail", label: "Button-quail", desc: "Genus Turnix — quail-like ground birds (not true quails) with reversed sex roles; females court and males incubate." },
  { href: "/animals/painted-snipe", label: "Greater Painted-snipe", desc: "Rostratula benghalensis — a wetland wader where the brighter female courts the males that raise the brood." },
  { href: "/animals/marabou-stork", label: "Marabou Stork", desc: "Leptoptilos crumenifer — a huge bare-headed African scavenging stork of wetlands and savannas." },
  { href: "/animals/african-grey-parrot", label: "African Grey Parrot", desc: "Psittacus erithacus — a highly intelligent African forest parrot; Endangered, pressured by the pet trade." },
  { href: "/animals/sarus-crane", label: "Sarus Crane", desc: "Antigone antigone — the tallest flying bird, a red-headed crane of Asian wetlands; Vulnerable." },
  { href: "/animals/mandarin-duck", label: "Mandarin Duck", desc: "Aix galericulata — an ornately coloured East Asian perching duck that nests in tree cavities." },
  { href: "/animals/white-stork", label: "White Stork", desc: "Ciconia ciconia — a long-billed wading bird that nests on European rooftops and migrates to Africa." },
  { href: "/animals/barn-owl", label: "Barn Owl", desc: "Tyto alba — a pale, heart-faced owl of farmland; one of the most widespread birds in the world." },
  { href: "/animals/golden-eagle", label: "Golden Eagle", desc: "Aquila chrysaetos — a large bird of prey of mountains and open upland country." },
  { href: "/animals/capercaillie", label: "Western Capercaillie", desc: "Tetrao urogallus — the largest grouse; males display dramatically at spring leks in old conifer forest." },
  { href: "/animals/bald-eagle", label: "Bald Eagle", desc: "Haliaeetus leucocephalus — a white-headed sea eagle and US national bird; a famous DDT-era recovery." },
  { href: "/animals/wild-turkey", label: "Wild Turkey", desc: "Meleagris gallopavo — a large woodland bird and the wild ancestor of the domestic turkey." },
  { href: "/animals/whooping-crane", label: "Whooping Crane", desc: "Grus americana — the tallest bird in North America; Endangered and intensively managed." },
  { href: "/animals/sandhill-crane", label: "Sandhill Crane", desc: "Antigone canadensis — a grey crane famous for large migratory gatherings and bugling calls." },
  { href: "/animals/california-condor", label: "California Condor", desc: "Gymnogyps californianus — a giant New World vulture; Critically Endangered, restored by captive breeding." },
  { href: "/animals/snowy-owl", label: "Snowy Owl", desc: "Bubo scandiacus — a large white Arctic owl that hunts by day; Vulnerable." },
  { href: "/animals/common-loon", label: "Common Loon", desc: "Gavia immer — a diving waterbird of northern lakes with haunting calls and striking plumage." },
  { href: "/animals/harpy-eagle", label: "Harpy Eagle", desc: "Harpia harpyja — one of the most powerful eagles, a hunter of the Neotropical rainforest canopy. Vulnerable." },
  { href: "/animals/andean-condor", label: "Andean Condor", desc: "Vultur gryphus — one of the largest flying birds, a New World vulture of the Andes. Vulnerable." },
  { href: "/animals/macaw", label: "Macaw", desc: "Ara and relatives — large, vividly coloured Neotropical parrots; status varies, several threatened by trade." },
  { href: "/animals/rhea", label: "Rhea", desc: "Rhea americana and relatives — large flightless ratite birds of South American grasslands and pampas." },
  { href: "/animals/king-vulture", label: "King Vulture", desc: "Sarcoramphus papa — a striking New World vulture with a colourful bare head, of Neotropical forests." },
  { href: "/animals/scarlet-ibis", label: "Scarlet Ibis", desc: "Eudocimus ruber — a vivid scarlet wading bird of northern South American wetlands and mangroves." },
  { href: "/animals/galah", label: "Galah", desc: "Eolophus roseicapilla — a common pink-and-grey cockatoo of open country across much of Australia." },
  { href: "/animals/black-swan", label: "Black Swan", desc: "Cygnus atratus — a mostly black, red-billed waterbird native to wetlands of parts of Australia." },
  { href: "/animals/wedge-tailed-eagle", label: "Wedge-tailed Eagle", desc: "Aquila audax — Australia's largest bird of prey, with a long, wedge-shaped tail." },
  { href: "/animals/takahe", label: "Takahe", desc: "Porphyrio hochstetteri — a flightless blue-green rail endemic to New Zealand; Endangered, once thought extinct." },
  { href: "/animals/emperor-penguin", label: "Emperor Penguin", desc: "Aptenodytes forsteri — the largest living penguin, which breeds through the Antarctic winter on sea ice." },
  { href: "/animals/adelie-penguin", label: "Adelie Penguin", desc: "Pygoscelis adeliae — a small penguin of Antarctic coasts and islands; one of the most southerly breeding birds." },
  { href: "/animals/snow-petrel", label: "Snow Petrel", desc: "Pagodroma nivea — a pure-white Southern Ocean seabird strongly tied to Antarctic sea ice." },
  { href: "/animals/wandering-albatross", label: "Wandering Albatross", desc: "Diomedea exulans — a huge seabird of the Southern Ocean that breeds on subantarctic islands; Vulnerable." },
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
