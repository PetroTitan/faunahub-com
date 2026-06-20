import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/slow-loris";
const TITLE = "Slow Loris — Profile, Venom, Diet & the Pet-Trade Threat";
const DESC =
  "Explore slow lorises (genus Nycticebus): slow-moving, big-eyed nocturnal primates of Asia — and rare venomous mammals — gravely threatened by the illegal pet trade.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("slow-loris"),
});

export default function SlowLorisPage() {
  return (
    <AnimalProfileLayout
      commonName="Slow Loris"
      scientificName="Nycticebus coucang"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Nocturnal"]}
      image={getAnimalImage("slow-loris") ?? undefined}
      galleryImages={getAnimalGalleryImages("slow-loris")}
      sources={ANIMAL_SOURCES["slow-loris"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Slow lorises (genus <em>Nycticebus</em>) are small, nocturnal primates of South
            and Southeast Asia, with round heads, large forward-facing eyes, and slow,
            deliberate movements. The Sunda slow loris (<em>Nycticebus coucang</em>), shown
            here, is a typical example. Slow lorises are also one of the very few venomous
            mammals: they produce a toxin that, combined with their saliva, can give a
            painful, even dangerous, bite.
          </p>
          <p>
            Their appealing looks have, sadly, made them targets of the illegal pet trade
            and online videos — a major reason these animals are now seriously threatened.
          </p>
          <p>
            <strong>Conservation note:</strong> slow lorises are threatened by habitat loss
            and especially the illegal wildlife trade; several species are Endangered or
            Critically Endangered. Verify each species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Slow lorises live in tropical forests and woodlands across South and Southeast
          Asia, including parts of India, southern China, and the islands and mainland of
          Southeast Asia. They are arboreal, spending their lives in trees, and depend on
          forest cover and connected canopy to move and forage.
        </p>
      }
      diet={
        <p>
          Slow lorises are omnivores that feed on tree gum and sap, nectar, fruit, and
          insects and other small animals. Tree exudates (gums) are an especially important
          food. They forage slowly and carefully at night, gripping branches firmly with
          strong hands and feet adapted for a secure, deliberate climbing style.
        </p>
      }
      behavior={
        <p>
          Slow lorises move with great deliberation and can stay still for long periods,
          relying on stealth rather than speed. Uniquely among primates, they are venomous:
          they secrete a toxin from a gland near the elbow, lick it up so it mixes with
          saliva, and can deliver a venomous bite used in defence and in disputes with
          other lorises. When threatened, a loris may raise its arms over its head to reach
          this gland. They are solitary or live in small family groups and communicate
          partly through scent.
        </p>
      }
      humanInteraction={
        <p>
          The slow loris faces an acute threat from the illegal pet trade: animals are
          taken from the wild, often have their teeth painfully cut to make them
          &ldquo;safe&rdquo; to handle, and suffer high mortality — and viral &ldquo;cute&rdquo;
          videos have fuelled demand. They are also hunted for traditional medicine and lose
          habitat to deforestation. Conservation groups urge people never to buy lorises or
          share such videos. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the slow loris really venomous?",
          answer:
            "Yes — it is one of the very few venomous mammals. A slow loris produces a toxin from a gland near its elbow and licks it so it mixes with saliva; a bite can then deliver venom that causes pain and swelling, and in rare cases serious reactions in people. The venom is used mainly in defence and in conflicts with other lorises.",
        },
        {
          question: "Why are slow lorises threatened by the pet trade?",
          answer:
            "Their appealing looks have made them popular in the illegal pet trade and in viral videos. Animals are taken from the wild, frequently have their teeth cut out (a painful, harmful procedure) to make handling safer, and many die in the process. This demand, along with habitat loss, has pushed several species toward extinction.",
        },
        {
          question: "Should I keep a slow loris as a pet or share loris videos?",
          answer:
            "No. Keeping slow lorises is harmful and often illegal, and many 'cute' loris videos actually show stressed, mistreated wild animals — sharing them fuels demand. Conservationists ask people not to buy lorises and not to spread such videos, supporting reputable sanctuaries and habitat protection instead.",
        },
        {
          question: "What do slow lorises eat?",
          answer:
            "They are omnivores, feeding on tree gums and sap, nectar, fruit, and insects and other small animals. Gum from trees is an especially important part of their diet, which they gather slowly and carefully during their nocturnal foraging.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Nycticebus coucang (Sunda slow loris)" },
        { label: "Class", value: "Mammalia (primate)" },
        { label: "Diet", value: "Omnivore (gum, nectar, fruit, insects)" },
        { label: "Rare trait", value: "Venomous (one of few venomous mammals)" },
        { label: "Movement", value: "Slow, deliberate; arboreal" },
        { label: "Activity", value: "Nocturnal" },
        { label: "Main threat", value: "Illegal pet trade; habitat loss" },
        { label: "IUCN Status", value: "Several Endangered+ (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Tarsier Profile", href: "/animals/tarsier", description: "Another nocturnal Asian primate" },
        { label: "Lemur Profile", href: "/animals/lemur", description: "A related group of primates" },
        { label: "Colugo Profile", href: "/animals/colugo", description: "Another Southeast Asian tree mammal" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
