import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import SourcesSection from "@/components/educational/SourcesSection";
import AnimalHeroImage from "@/components/AnimalHeroImage";
import AnimalGallery from "@/components/AnimalGallery";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

const HERO = getAnimalImage("wildebeest");
const GALLERY = getAnimalGalleryImages("wildebeest");

export const metadata: Metadata = buildArticleMetadata({
  title: "Wildebeest — Profile, Migration, Habitat & Diet",
  description:
    "Explore the wildebeest (genus Connochaetes): large African antelopes known for vast migrating herds, grassland grazing, and their central role in savanna ecosystems.",
  path: "/animals/wildebeest",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("wildebeest"),
});

const faqItems = [
  {
    question: "Is a wildebeest an antelope?",
    answer:
      "Yes. Wildebeest (also called gnus) are large antelopes in the family Bovidae. Two species are recognised: the blue wildebeest (Connochaetes taurinus) and the black wildebeest (Connochaetes gnou). Despite a cattle-like, heavy-headed appearance, they belong to the antelope group.",
  },
  {
    question: "Why are wildebeest famous for migration?",
    answer:
      "Blue wildebeest in parts of East Africa take part in large seasonal movements following rainfall and fresh grazing, forming some of the largest herds of any land mammal. These migrations, often alongside zebras and gazelles, are a defining feature of certain savanna ecosystems.",
  },
  {
    question: "What do wildebeest eat?",
    answer:
      "Wildebeest are grazers that feed mainly on short grasses. Their movements are closely tied to grass growth and water, which is one reason migratory populations travel so far in search of suitable grazing through the year.",
  },
  {
    question: "What is the difference between blue and black wildebeest?",
    answer:
      "The blue wildebeest is larger, grey-brown with darker vertical stripes, and includes the famous migratory populations of East Africa. The black wildebeest is smaller, dark-bodied with a distinctive forward-curving horn shape and an upright pale tail, and is native to southern Africa. This profile uses the blue wildebeest as the reference.",
  },
];

export default function WildebeestPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Wildebeest", url: "https://faunahub.com/animals/wildebeest" },
    ]),
    articleSchema({
      title: "Wildebeest — Profile, Migration, Habitat & Diet",
      description:
        "Explore the wildebeest (genus Connochaetes): large African antelopes known for vast migrating herds, grassland grazing, and their central role in savanna ecosystems.",
      path: "/animals/wildebeest",
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
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
              { label: "Mammals", href: "/animal-encyclopedia/mammals" },
              { label: "Wildebeest" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Wildebeest <span className="italic font-normal text-[#5E6B63]">(genus Connochaetes)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Antelope</span>{" "}
                <span className="tag ml-1">Migratory grazer</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Wildebeest, also called gnus, are large African antelopes of the genus
                <em> Connochaetes</em>. With a heavy head, sloping back, and shaggy mane,
                they look almost cattle-like, but they belong firmly to the antelope group.
                The animal shown here is the blue wildebeest
                (<em>Connochaetes taurinus</em>).
              </p>
              <p>
                Wildebeest are best known for forming enormous herds, and in some regions
                for long seasonal migrations that move with the rains. As abundant grazers
                and prey, they are a keystone presence in the savanna food web.
              </p>
              <p>
                <strong>Conservation note:</strong> wildebeest are widespread, but
                individual populations depend on intact, connected grasslands and migration
                routes. Verify current species and population status at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — blue wildebeest as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Artiodactyla"],
                      ["Family", "Bovidae"],
                      ["Genus", "Connochaetes"],
                      ["Species", "C. taurinus"],
                    ].map(([rank, taxon], i) => (
                      <tr key={rank} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8F3]"}>
                        <td className="font-medium text-[#17211B] w-1/3">{rank}</td>
                        <td className="italic">{taxon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Wildebeest are bovids, the same family as cattle, buffalo, sheep, goats,
                and other antelopes. The two species are the blue wildebeest and the
                black wildebeest (<em>Connochaetes gnou</em>).
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Blue wildebeest inhabit open grassland and savanna across eastern and
                southern Africa, favouring short-grass plains and lightly wooded country
                near water. Black wildebeest are associated with open grassland and
                shrubland in southern Africa.
              </p>

              <h2>Migration &amp; Movement</h2>
              <p>
                In some ecosystems, blue wildebeest undertake large-scale seasonal
                movements, tracking rainfall and the flush of new grass and crossing rivers
                where predators and other hazards await. These migrations involve very large
                numbers of animals and are among the most striking wildlife spectacles on
                land. Not all wildebeest populations migrate; some are more sedentary.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Wildebeest are specialised grazers of short grasses. Because their grazing
                depends on grass condition and water, herd movements and migrations are
                closely tied to seasonal patterns of rainfall and plant growth.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Wildebeest are highly social and gregarious, gathering in herds that can be
                immense during migrations. Calving is often synchronised, with many young
                born in a short window — a strategy thought to improve calf survival by
                overwhelming predators. Males may hold temporary territories during the
                breeding season.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                The blue wildebeest is grey-brown with faint darker vertical stripes on the
                forequarters, a dark mane and beard, and curved horns in both sexes. The
                large head set low on a robust body and the sloping back give it a
                characteristic silhouette, especially when seen in the long lines of a
                moving herd.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Wildebeest are central to tourism and to the ecology of famous protected
                areas, but migratory populations are sensitive to fences, land conversion,
                and barriers that cut migration routes. Conservation focuses on keeping
                large landscapes connected. Consult authoritative sources for current
                status.
              </p>

              <AnimalGallery images={GALLERY} commonName="Wildebeest" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Wildebeest" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.wildebeest}
                  intro="Authoritative wildlife references used for general educational context. Conservation status should always be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Wildebeest profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Genus", "Connochaetes"],
                    ["Reference species", "Connochaetes taurinus"],
                    ["Family", "Bovidae"],
                    ["Class", "Mammalia"],
                    ["Species", "Blue & black wildebeest"],
                    ["Diet", "Grazer (short grasses)"],
                    ["Social structure", "Large herds"],
                    ["Notable for", "Mass seasonal migrations"],
                    ["Range", "Eastern & southern Africa"],
                    ["IUCN Status", "Verify before publication"],
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
                  { label: "Zebra Profile", href: "/animals/zebra", description: "Migrates alongside wildebeest" },
                  { label: "Lion Profile", href: "/animals/lion", description: "A key predator of wildebeest" },
                  { label: "Warthog Profile", href: "/animals/warthog", description: "Another savanna grazer" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "African savanna fauna in context" },
                  { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
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
              <LastUpdated date="2026-06-19" />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
