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

const HERO = getAnimalImage("mongoose");
const GALLERY = getAnimalGalleryImages("mongoose");

export const metadata: Metadata = buildArticleMetadata({
  title: "Mongoose — Profile, Types, Habitat, Diet & Behavior",
  description:
    "Explore mongooses (family Herpestidae): small, agile carnivores of Africa and Asia, from solitary species to highly social groups like the banded mongoose and meerkat.",
  path: "/animals/mongoose",
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("mongoose"),
});

const faqItems = [
  {
    question: "What is a mongoose?",
    answer:
      "A mongoose is a small, agile carnivorous mammal in the family Herpestidae. There are many species across Africa and southern Asia, ranging from solitary hunters to highly social group-living species. The meerkat is one well-known member of this family.",
  },
  {
    question: "Do mongooses really fight snakes?",
    answer:
      "Some mongoose species are known for taking on venomous snakes, helped by speed, agility, a thick coat, and a degree of resistance to certain snake venoms. However, snakes are only part of a broad diet, and not all mongooses specialise in hunting them. Such encounters are risky and far from guaranteed.",
  },
  {
    question: "What do mongooses eat?",
    answer:
      "Mongooses are mostly carnivorous and opportunistic, eating insects and other invertebrates, small vertebrates such as rodents, reptiles, and birds, plus eggs and some fruit. The exact diet varies by species and habitat.",
  },
  {
    question: "Are mongooses ever a problem outside their native range?",
    answer:
      "Yes. Mongooses introduced to some islands and other regions outside their native range have harmed native wildlife and are treated as invasive there. Because of this, introductions are tightly restricted in many places. Within their native ranges, most species are simply part of the local fauna.",
  },
];

export default function MongoosePage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
      { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
      { name: "Mongoose", url: "https://faunahub.com/animals/mongoose" },
    ]),
    articleSchema({
      title: "Mongoose — Profile, Types, Habitat, Diet & Behavior",
      description:
        "Explore mongooses (family Herpestidae): small, agile carnivores of Africa and Asia, from solitary species to highly social groups like the banded mongoose and meerkat.",
      path: "/animals/mongoose",
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
              { label: "Mongoose" },
            ]}
          />
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-2 leading-tight">
                Mongoose <span className="italic font-normal text-[#5E6B63]">(family Herpestidae)</span>
              </h1>
              <p className="mb-8">
                <span className="tag">Mammal</span>{" "}
                <span className="tag ml-1">Carnivore</span>{" "}
                <span className="tag ml-1">Africa &amp; Asia</span>
              </p>

              {HERO && <AnimalHeroImage image={HERO} priority />}

              <h2>Overview</h2>
              <p>
                Mongooses are small, quick, and agile carnivores of the family Herpestidae,
                found across Africa and southern Asia. The family is diverse, including
                solitary species and famously social ones such as the banded mongoose and
                the meerkat. The animal shown here is the banded mongoose
                (<em>Mungos mungo</em>).
              </p>
              <p>
                Mongooses are alert, energetic animals, often seen foraging busily on the
                ground. Some species have a well-known reputation for tackling snakes,
                though they are generalist hunters rather than snake specialists.
              </p>
              <p>
                <strong>Conservation note:</strong> the mongoose family contains many
                widespread species, though a few have restricted ranges or face particular
                pressures, and introduced mongooses are invasive in some regions. Verify any
                specific species&apos; status at iucnredlist.org.
              </p>

              <h2>Classification</h2>
              <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] mb-6">
                <table>
                  <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
                    Taxonomic classification — banded mongoose as a reference species
                  </caption>
                  <tbody>
                    {[
                      ["Kingdom", "Animalia"],
                      ["Phylum", "Chordata"],
                      ["Class", "Mammalia"],
                      ["Order", "Carnivora"],
                      ["Family", "Herpestidae"],
                      ["Genus", "Mungos"],
                      ["Species", "M. mungo"],
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
                Mongooses make up the family Herpestidae, which includes many genera and
                species. The meerkat (<em>Suricata suricatta</em>) is one of the most
                familiar members; FaunaHub also has a dedicated meerkat profile.
              </p>

              <h2>Habitat &amp; Range</h2>
              <p>
                Mongooses occupy a wide range of habitats across Africa and parts of
                southern Asia, from savanna and scrub to forest and semi-desert. Different
                species are adapted to different environments, which is part of why the
                family is so widespread.
              </p>

              <h2>Diet &amp; Feeding</h2>
              <p>
                Mongooses are largely carnivorous and opportunistic, feeding on insects and
                other invertebrates, small vertebrates including rodents, reptiles, and
                birds, plus eggs and some plant material. Several species are skilled at
                dealing with hard-shelled prey and eggs.
              </p>

              <h2>Behavior &amp; Social Life</h2>
              <p>
                Social organisation varies widely across the family. Some mongooses are
                solitary, while others — like the banded mongoose and meerkat — live in
                cooperative groups with shared vigilance and care of young. Group-living
                species use a range of calls to coordinate foraging and warn of danger.
              </p>

              <h2>Appearance &amp; Recognition</h2>
              <p>
                Mongooses typically have a long, low-slung body, short legs, a pointed
                muzzle, small rounded ears, and a tapering tail. Coats are usually grey to
                brown, and the banded mongoose is marked with a series of dark bands across
                the back. Their quick, ground-hugging movement is characteristic.
              </p>

              <h2>Human Interaction &amp; Conservation</h2>
              <p>
                Within their native ranges, mongooses are a natural part of local
                ecosystems. Outside those ranges, introduced mongooses have damaged native
                wildlife on some islands and are managed as invasive species, which is why
                introductions are heavily restricted. For species-specific status, consult
                authoritative sources.
              </p>

              <AnimalGallery images={GALLERY} commonName="Mongoose" />

              <DisclaimerBlock type="general" />

              <div className="mt-10">
                <FAQBlock items={faqItems} title="Frequently Asked Questions — Mongoose" />
              </div>

              <div className="mt-10">
                <SourcesSection
                  sources={ANIMAL_SOURCES.mongoose}
                  intro="Authoritative wildlife references used for general educational context. Conservation status varies by species and should be verified against current IUCN Red List data. External links open in a new tab."
                />
              </div>
            </article>

            <aside aria-label="Mongoose profile sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    Quick Facts
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  {[
                    ["Family", "Herpestidae"],
                    ["Reference species", "Mungos mungo"],
                    ["Class", "Mammalia"],
                    ["Order", "Carnivora"],
                    ["Diet", "Mainly carnivore (insects, small prey)"],
                    ["Social structure", "Solitary to cooperative groups"],
                    ["Well-known member", "Meerkat"],
                    ["Range", "Africa & southern Asia"],
                    ["Note", "Invasive where introduced"],
                    ["IUCN Status", "Varies by species (verify)"],
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
                  { label: "Meerkat Profile", href: "/animals/meerkat", description: "A social mongoose of southern Africa" },
                  { label: "Otter Profile", href: "/animals/otter", description: "Another small agile carnivore" },
                  { label: "Snake Profile", href: "/animals/snake", description: "Prey that some mongooses tackle" },
                  { label: "Fauna by Continent", href: "/fauna/continents", description: "African and Asian fauna in context" },
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
