import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { buildArticleMetadata } from "@/lib/metadata";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildArticleMetadata({
  title: "Eagle — Overview of Eagle Species, Habitat & Behavior",
  description:
    "An overview of eagle species worldwide, using the Golden Eagle (Aquila chrysaetos) as the reference species for habitat, diet, flight, and conservation context.",
  path: "/animals/eagle",
  publishedTime: "2025-05-07",
  modifiedTime: "2026-05-18",
});

const faqItems = [
  {
    question: "How many eagle species are there?",
    answer:
      "There is no single universally agreed figure, as taxonomic boundaries evolve with ongoing ornithological research. Broadly, more than 60 species are commonly referred to as eagles, distributed across the hawk family Accipitridae. They are grouped into several informal categories including booted eagles, fish eagles, snake eagles, and forest eagles, among others.",
  },
  {
    question: "How strong is an eagle's grip?",
    answer:
      "Eagles have powerful talons used to seize and restrain prey. The grip strength of eagle species varies, and precise measurements for wild individuals are difficult to obtain. Golden Eagles are known to exert considerable force with their talons — sufficient to kill prey up to the size of a rabbit, hare, or young ungulate with a single grip.",
  },
  {
    question: "What do eagles eat?",
    answer:
      "Diet varies by species. The Golden Eagle primarily hunts medium-sized mammals such as rabbits, hares, and ground squirrels, as well as birds and reptiles. Fish eagles (such as the Bald Eagle) specialise in fish. Snake eagles target reptiles. Harpy Eagles in South America hunt large arboreal mammals including sloths and monkeys.",
  },
  {
    question: "Can eagles carry large prey?",
    answer:
      "Eagles can carry prey, but the weight they can lift is limited by their own body mass and wing loading. The Golden Eagle typically carries items substantially lighter than itself. Very large prey may be consumed on the ground rather than carried. Claims of eagles carrying many kilograms over long distances should be treated sceptically unless supported by documented evidence.",
  },
];

export default function EaglePage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Birds", url: "https://faunahub.com/animal-encyclopedia/birds" },
      { name: "Eagle", url: "https://faunahub.com/animals/eagle" },
    ]),
    articleSchema({
      title: "Eagle — Overview of Eagle Species, Habitat & Behavior",
      description:
        "An overview of eagle species worldwide, using the Golden Eagle (Aquila chrysaetos) as the reference species for habitat, diet, flight, and conservation context.",
      path: "/animals/eagle",
      datePublished: "2025-05-07",
      dateModified: "2026-05-18",
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <div className="container-content py-10">
          <Breadcrumbs
            items={[
              { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
              { label: "Birds", href: "/animal-encyclopedia/birds" },
              { label: "Eagle" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Eagle — Overview of Eagle Species
              </h1>
              <p className="mb-2">
                <span className="tag">Bird</span>{" "}
                <span className="tag ml-1">Raptor</span>{" "}
                <span className="tag ml-1">Apex Predator</span>
              </p>
              <p className="text-sm text-[#8A958E] mb-8">
                Reference species for specific details:{" "}
                <strong className="text-[#2C3A2F]">Golden Eagle</strong>{" "}
                (<em>Aquila chrysaetos</em>). This page provides a general overview and should not
                be read as a comprehensive profile of all eagle species equally.
              </p>

              <h2>Overview</h2>
              <p>
                &quot;Eagle&quot; is a common name applied to a large and diverse group of predatory birds
                within the family Accipitridae. Eagles are characterised by their large size relative
                to other raptors, powerful build, heavy hooked bills, and strong taloned feet adapted
                for seizing prey. They occupy an extraordinary range of ecosystems across every
                continent except Antarctica.
              </p>
              <p>
                It is important to note that &quot;eagle&quot; is not a precise taxonomic category. Species as
                ecologically different as the Harpy Eagle of Amazonian rainforest, the Bald Eagle of
                North American waterways, and the Martial Eagle of African savanna are all called
                eagles, yet they belong to distinct evolutionary lineages with different hunting
                strategies, diets, and habitats.
              </p>
              <p>
                This page uses the <strong>Golden Eagle (<em>Aquila chrysaetos</em>)</strong> as its
                primary reference species for specific biological details, as it is one of the most
                widely studied eagles with one of the broadest geographic distributions of any eagle.
              </p>

              <h2>About Eagle Species</h2>
              <p>Eagles are loosely grouped into several ecological categories:</p>
              <ul>
                <li>
                  <strong>Booted eagles</strong> (tribe Aquilini) — include the Golden Eagle,
                  Booted Eagle, and Wedge-tailed Eagle. Named for feathering that extends to the
                  base of the toes.
                </li>
                <li>
                  <strong>Fish eagles</strong> — include the Bald Eagle (<em>Haliaeetus leucocephalus</em>)
                  and African Fish Eagle (<em>H. vocifer</em>). Specialised for hunting fish from
                  water surfaces.
                </li>
                <li>
                  <strong>Snake eagles</strong> — several <em>Circaetus</em> species. Specialise in
                  hunting reptiles, particularly snakes.
                </li>
                <li>
                  <strong>Harpy and forest eagles</strong> — include the Harpy Eagle (
                  <em>Harpia harpyja</em>) and Philippine Eagle (<em>Pithecophaga jefferyi</em>).
                  Large forest eagles that hunt arboreal mammals.
                </li>
              </ul>

              <h2>Golden Eagle Profile</h2>
              <p>
                The Golden Eagle (<em>Aquila chrysaetos</em>) is found across large parts of the
                Northern Hemisphere, including North America, Europe, Asia, and parts of North
                Africa. Adults are primarily dark brown with variable golden-buff colouring on the
                back of the head and neck.
              </p>
              <p>
                <strong>Conservation note:</strong> The Golden Eagle is currently listed as{" "}
                <strong>Least Concern</strong> on the IUCN Red List (verify current status at
                iucnredlist.org before publication). Regional populations face varying levels of
                pressure from poisoning, illegal shooting, and disturbance at nest sites.
              </p>

              <h2>Habitat & Range</h2>
              <p>
                Golden Eagles occupy open and semi-open habitats at elevation or in areas with
                open terrain for hunting and rocky outcrops or tall trees for nesting. Mountain
                ranges, high plateaus, moorlands, tundra, and steppe are typical habitats. They
                generally avoid dense continuous forest and intensively farmed lowland areas.
              </p>
              <p>
                Different eagle species occupy vastly different habitats. The Harpy Eagle is
                confined to lowland primary tropical rainforest. The Bald Eagle is found near large
                open water bodies. The Martial Eagle inhabits savanna and open woodland across
                sub-Saharan Africa.
              </p>

              <h2>Diet & Hunting</h2>
              <p>
                Golden Eagles are versatile predators. Rabbits, hares, ground squirrels, and
                marmots form the primary prey across much of their range. They also take birds and
                reptiles, and supplement with carrion in winter.
              </p>
              <p>
                Golden Eagles hunt by quartering open terrain at low altitude or stooping from
                height onto spotted prey. Cooperative hunting between paired birds has been
                documented, where one bird flushes prey toward the other.
              </p>

              <h2>Appearance & Recognition</h2>
              <p>
                &quot;Eagle&quot; covers a wide range of body sizes and plumage patterns, so
                identification is strongly species-specific. Across the group, shared
                features include a <strong>heavy hooked bill</strong>, strong feet with
                large curved talons, broad wings with deeply &quot;slotted&quot; primary
                feathers, and a soaring flight profile that is distinctive even from a
                distance. Many species show pronounced sexual dimorphism, with females
                typically larger than males.
              </p>
              <p>
                Plumage and silhouette vary enormously between species. The Golden Eagle is
                dark brown overall with a paler golden wash on the back of the head and
                neck in adults. The adult Bald Eagle is unmistakable with its white head
                and tail set against a dark body — though juveniles are mottled brown for
                several years and are routinely misidentified as Golden Eagles or large
                hawks. The Harpy Eagle is pale below with a broad dark chest band and a
                tall grey crest. Field identification typically combines size, silhouette,
                wing shape, tail shape, plumage stage, flight behaviour and geographic
                range; for many juveniles, age (and therefore plumage) is itself a critical
                clue.
              </p>

              <h2>Flight & Physical Adaptations</h2>
              <p>
                Eagles have large wingspans relative to body mass, allowing efficient soaring on
                thermal updrafts with minimal energy expenditure. Broad, slotted primary feathers
                improve lift and manoeuvrability at low speeds.
              </p>
              <p>
                Raptor vision is highly acute — high photoreceptor density in the retina enables
                detection of small prey at distances far exceeding human visual acuity. Talons are
                curved, pointed, and kept sharp through use. The bill is used for tearing flesh
                rather than capturing prey.
              </p>

              <h2>Human Interaction & Conservation</h2>
              <p>
                Eagles have held significant cultural and symbolic importance across many human
                societies. The Golden Eagle has been used in falconry for centuries across Central
                Asia and parts of Europe. The Bald Eagle is the national bird of the United States.
              </p>
              <p>
                Conservation pressures include habitat loss, secondary poisoning from lead
                ammunition or rodenticides, persecution, disturbance at nest sites, electrocution
                on power lines, and collision with wind turbines. Several eagle species are of
                significant conservation concern — the Philippine Eagle and Martial Eagle in
                particular. Status varies markedly by species and should be verified on the IUCN
                Red List for each individual species.
              </p>

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Eagles" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.eagle}
                  intro="Authoritative wildlife references used for general educational context. Conservation status varies by species and should be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Eagle profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <div className="px-5 py-2.5 bg-amber-50 border-b border-[#DDE6DD]">
                  <p className="text-xs text-amber-700">
                    Facts below refer to the Golden Eagle (<em>Aquila chrysaetos</em>) as the
                    reference species unless otherwise noted.
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Reference species", "Golden Eagle (Aquila chrysaetos)"],
                    ["Family", "Accipitridae"],
                    ["Class", "Aves"],
                    ["Order", "Accipitriformes"],
                    ["Primary habitat", "Mountain, moorland, tundra, steppe"],
                    ["Range", "N. America, Europe, Asia, N. Africa"],
                    ["Diet", "Rabbits, hares, small mammals, birds, carrion"],
                    ["Nesting", "Cliff ledges, tall trees; reuses eyrie for years"],
                    ["IUCN Status", "Least Concern (verify before publication)"],
                    ["Eagle species count", "60+ species (approximate; taxonomy evolving)"],
                  ].map(([label, value]) => (
                    <div key={label} className="px-5 py-3 flex flex-col gap-0.5">
                      <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                        {label}
                      </dt>
                      <dd className="text-[#17211B] font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <RelatedLinks
                title="Related Pages"
                links={[
                  { label: "Owl Profile", href: "/animals/owl", description: "Nocturnal raptors" },
                  { label: "Penguin Profile", href: "/animals/penguin", description: "Flightless seabirds" },
                  { label: "Falcon vs Eagle", href: "/compare/falcon-vs-eagle", description: "Compare raptor groups" },
                  { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
                  { label: "Animal Comparisons", href: "/compare" },
                ]}
              />
              <aside
                role="note"
                aria-label="Sources reference"
                className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
              >
                <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
                <p>
                  Verified wildlife references are listed at the bottom of
                  this page under &quot;Sources and further reading&quot;.
                </p>
              </aside>
              <LastUpdated date="2026-05-18" />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
