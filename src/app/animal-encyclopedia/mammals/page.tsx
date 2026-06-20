import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import DomesticationBadge from "@/components/animals/DomesticationBadge";
import { getAnimalClassification, isDomestic } from "@/lib/animals/classification";

export const metadata: Metadata = buildMetadata({
  title: "Mammals Encyclopedia — Wildlife Profiles & Ecology",
  description:
    "Profiles of mammal species from lions and tigers to bears, primates, and marsupials — covering habitat, diet, behavior, and conservation context.",
  path: "/animal-encyclopedia/mammals",
});

const mammals = [
  { href: "/animals/lion", label: "Lion", desc: "Panthera leo — apex predator of African savannas." },
  { href: "/animals/tiger", label: "Tiger", desc: "Panthera tigris — largest living cat species." },
  { href: "/animals/leopard", label: "Leopard", desc: "Panthera pardus — most widely distributed big cat." },
  { href: "/animals/jaguar", label: "Jaguar", desc: "Panthera onca — apex predator of the Americas." },
  { href: "/animals/cheetah", label: "Cheetah", desc: "Acinonyx jubatus — fastest land animal." },
  { href: "/animals/wolf", label: "Wolf", desc: "Canis lupus — pack-hunting ancestor of domestic dogs." },
  { href: "/animals/fox", label: "Fox", desc: "Vulpes vulpes — adaptable opportunistic omnivore." },
  { href: "/animals/bear", label: "Bear", desc: "Family Ursidae — eight living species." },
  { href: "/animals/panda", label: "Giant Panda", desc: "Ailuropoda melanoleuca — bamboo-specialist bear." },
  { href: "/animals/elephant", label: "Elephant", desc: "Three species — the largest land mammals." },
  { href: "/animals/giraffe", label: "Giraffe", desc: "Genus Giraffa — tallest extant land animal." },
  { href: "/animals/zebra", label: "Zebra", desc: "Three African equid species." },
  { href: "/animals/gorilla", label: "Gorilla", desc: "Genus Gorilla — largest extant primate." },
  { href: "/animals/chimpanzee", label: "Chimpanzee", desc: "Pan troglodytes — one of humans' closest relatives." },
  { href: "/animals/kangaroo", label: "Kangaroo", desc: "Macropodidae — Australian marsupials." },
  { href: "/animals/koala", label: "Koala", desc: "Phascolarctos cinereus — arboreal marsupial." },
  { href: "/animals/moose", label: "Moose", desc: "Alces alces — the largest living deer." },
  { href: "/animals/lynx", label: "Lynx", desc: "Genus Lynx — tuft-eared forest wild cats." },
  { href: "/animals/badger", label: "Badger", desc: "Stocky burrowing mammals; mostly mustelids." },
  { href: "/animals/beaver", label: "Beaver", desc: "Castor — dam-building wetland engineers." },
  { href: "/animals/hedgehog", label: "Hedgehog", desc: "Subfamily Erinaceinae — small spiny insectivores." },
  { href: "/animals/bat", label: "Bat", desc: "Order Chiroptera — the only flying mammals." },
  { href: "/animals/cow", label: "Cow (Cattle)", desc: "Bos taurus — domesticated farm ruminant." },
  { href: "/animals/goat", label: "Goat", desc: "Capra hircus — agile domesticated browser." },
  { href: "/animals/sheep", label: "Sheep", desc: "Ovis aries — woolly domesticated grazer." },
  { href: "/animals/pig", label: "Pig", desc: "Sus domesticus — intelligent omnivorous livestock." },
  { href: "/animals/red-panda", label: "Red Panda", desc: "Ailurus fulgens — small bamboo-eating Himalayan mammal." },
  { href: "/animals/sloth", label: "Sloth", desc: "Slow-moving tree-dwelling mammals of the Americas." },
  { href: "/animals/armadillo", label: "Armadillo", desc: "Armoured digging mammals; nine-banded as a reference." },
  { href: "/animals/porcupine", label: "Porcupine", desc: "Quill-covered rodents (Old and New World groups)." },
  { href: "/animals/meerkat", label: "Meerkat", desc: "Suricata suricatta — social mongoose of southern Africa." },
  { href: "/animals/wombat", label: "Wombat", desc: "Stocky burrowing Australian marsupials." },
  { href: "/animals/platypus", label: "Platypus", desc: "Ornithorhynchus anatinus — egg-laying Australian monotreme." },
  { href: "/animals/lemur", label: "Lemur", desc: "Primates of Madagascar; ring-tailed lemur as a reference." },
  { href: "/animals/tapir", label: "Tapir", desc: "Browsing mammals with a short prehensile snout." },
  { href: "/animals/hyena", label: "Hyena", desc: "Social carnivores; spotted hyena as a reference." },
  { href: "/animals/hippopotamus", label: "Hippopotamus", desc: "Hippopotamus amphibius — semi-aquatic African megaherbivore." },
  { href: "/animals/rhinoceros", label: "Rhinoceros", desc: "Family Rhinocerotidae — five horned species across Africa and Asia." },
  { href: "/animals/orangutan", label: "Orangutan", desc: "Genus Pongo — arboreal great apes of Borneo and Sumatra." },
  { href: "/animals/bison", label: "Bison", desc: "Bison bison — North America's largest land mammal." },
  { href: "/animals/camel", label: "Camel", desc: "Genus Camelus — desert-adapted dromedary and Bactrian camels." },
  { href: "/animals/squirrel", label: "Squirrel", desc: "Family Sciuridae — tree, ground, and flying squirrels." },
  { href: "/animals/warthog", label: "Warthog", desc: "Phacochoerus africanus — wild pig of African savannas." },
  { href: "/animals/wildebeest", label: "Wildebeest", desc: "Genus Connochaetes — migratory African antelopes (gnus)." },
  { href: "/animals/capybara", label: "Capybara", desc: "Hydrochoerus hydrochaeris — the world's largest rodent." },
  { href: "/animals/gibbon", label: "Gibbon", desc: "Family Hylobatidae — small, agile apes of Asian forests." },
  { href: "/animals/pangolin", label: "Pangolin", desc: "Order Pholidota — scale-covered, ant-eating mammals." },
  { href: "/animals/pronghorn", label: "Pronghorn", desc: "Antilocapra americana — North America's fastest land mammal." },
  { href: "/animals/okapi", label: "Okapi", desc: "Okapia johnstoni — the giraffe's striped forest relative." },
  { href: "/animals/wild-boar", label: "Wild Boar", desc: "Sus scrofa — wild ancestor of the domestic pig." },
  { href: "/animals/elk", label: "Elk (Wapiti)", desc: "Cervus canadensis — one of the largest deer." },
  { href: "/animals/sun-bear", label: "Sun Bear", desc: "Helarctos malayanus — the world's smallest bear." },
  { href: "/animals/aardvark", label: "Aardvark", desc: "Orycteropus afer — nocturnal African ant-eater." },
  { href: "/animals/echidna", label: "Echidna", desc: "Tachyglossidae — spiny, egg-laying monotreme." },
  { href: "/animals/wolverine", label: "Wolverine", desc: "Gulo gulo — the largest land mustelid." },
  { href: "/animals/bobcat", label: "Bobcat", desc: "Lynx rufus — adaptable North American wild cat." },
  { href: "/animals/coyote", label: "Coyote", desc: "Canis latrans — highly adaptable North American canid." },
  { href: "/animals/mongoose", label: "Mongoose", desc: "Family Herpestidae — agile carnivores of Africa and Asia." },
  { href: "/animals/skunk", label: "Skunk", desc: "Family Mephitidae — known for its defensive spray." },
  { href: "/animals/weasel", label: "Weasel", desc: "Genus Mustela — small, slender carnivores." },
  { href: "/animals/pine-marten", label: "Pine Marten", desc: "Martes martes — agile, tree-climbing woodland mustelid." },
  { href: "/animals/mole", label: "Mole", desc: "Family Talpidae — burrowing insectivores with spade-like paws." },
  { href: "/animals/stoat", label: "Stoat (Ermine)", desc: "Mustela erminea — bold little mustelid that turns white in winter." },
  { href: "/animals/civet", label: "Civet", desc: "Family Viverridae — cat-like nocturnal omnivores of Africa and Asia." },
  { href: "/animals/genet", label: "Genet", desc: "Genus Genetta — slender, spotted viverrids; agile climbers." },
];

export default function MammalsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Animal Encyclopedia", url: "https://faunahub.com/animal-encyclopedia" },
    { name: "Mammals", url: "https://faunahub.com/animal-encyclopedia/mammals" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Mammals</span>
            </nav>
            <span className="tag mb-3 inline-block">Animal Encyclopedia</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Mammals
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Mammals are warm-blooded vertebrates that nurse their young with milk and, with a few
              exceptions, give birth to live offspring. The class Mammalia spans over 5,500 known
              species — from the 1.5-gram Bumblebee bat to the 180-tonne Blue whale — occupying
              virtually every habitat on Earth.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Mammal profiles on FaunaHub cover species classification, geographic range and
              preferred habitat, diet and foraging behavior, social structure, reproduction, and
              conservation status based on IUCN Red List data. Profiles aim to be factually
              accurate and clearly distinguish between well-established science and areas where
              research is ongoing or contested.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {mammals.map((m) => {
                const slug = m.href.replace("/animals/", "");
                return (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                        {m.label}
                      </h3>
                      {isDomestic(slug) && (
                        <DomesticationBadge classification={getAnimalClassification(slug)} />
                      )}
                    </div>
                    <p className="text-xs text-[#5E6B63]">{m.desc}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mt-10" aria-labelledby="related-heading">
            <h2 id="related-heading" className="section-title">Related Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/compare/lion-vs-tiger", label: "Lion vs Tiger" },
                { href: "/compare/leopard-vs-jaguar", label: "Leopard vs Jaguar" },
                { href: "/compare/cheetah-vs-leopard", label: "Cheetah vs Leopard" },
                { href: "/compare/wolf-vs-dog", label: "Wolf vs Dog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-4 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                    {link.label}
                  </h3>
                  <span className="text-xs font-medium text-[#063F2A] mt-2 block">
                    Compare →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
