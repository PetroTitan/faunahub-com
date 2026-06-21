import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tokay-gecko";
const TITLE = "Tokay Gecko — Profile, Loud Call, Sticky Toes & Behavior";
const DESC =
  "Explore the tokay gecko (Gekko gecko): a large, boldly spotted Asian gecko famous for its loud 'to-kay' call, powerful bite, and amazing toe pads that let it cling to almost anything.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("tokay-gecko"),
});

export default function TokayGeckoPage() {
  return (
    <AnimalProfileLayout
      commonName="Tokay Gecko"
      scientificName="Gekko gecko"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Asia"]}
      image={getAnimalImage("tokay-gecko") ?? undefined}
      galleryImages={getAnimalGalleryImages("tokay-gecko")}
      sources={ANIMAL_SOURCES["tokay-gecko"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The tokay gecko (<em>Gekko gecko</em>) is one of the largest and most striking
            geckos, a robust, big-headed lizard of South and Southeast Asia with bluish-grey
            skin spotted in orange and red and large, lidless, vertically slit eyes. It is
            named after its loud, distinctive call — a repeated &ldquo;to-kay&rdquo; or
            &ldquo;gecko&rdquo; sound that males give, especially at night, and which gives
            the whole gecko family its name.
          </p>
          <p>
            Like other geckos, it has remarkable toe pads that let it run up smooth walls and
            across ceilings, but the tokay is also famous for being bold, vocal, and quick to
            deliver a strong, tenacious bite when handled.
          </p>
          <p>
            <strong>Note:</strong> details here cover the tokay gecko as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tokay geckos are native to rainforests and rocky areas of South and Southeast Asia,
          but they adapt readily to human buildings and are often found on the walls and
          ceilings of houses, where they hunt insects drawn to lights. They shelter in tree
          hollows, rock crevices, and cracks in walls by day and emerge to hunt at night.
        </p>
      }
      diet={
        <p>
          Tokay geckos are carnivores that eat mainly insects and other invertebrates — such
          as crickets, moths, cockroaches, and spiders — and large individuals can take small
          vertebrates, including other lizards, small snakes, frogs, and even small rodents.
          They are ambush and active hunters that snap up prey with a quick lunge.
        </p>
      }
      behavior={
        <p>
          The tokay&apos;s toe pads are covered in millions of microscopic hairs (setae) that
          use tiny molecular forces to grip surfaces, letting the gecko cling to glass and
          run upside down — an ability that has inspired research into adhesives. Tokays are
          mostly nocturnal, territorial, and vocal, with males calling loudly to advertise
          their presence and warn off rivals. When threatened, a tokay opens its mouth wide,
          may lunge, and can deliver a firm, lasting bite. Like many geckos, it can shed its
          tail to escape and later regrow it.
        </p>
      }
      humanInteraction={
        <p>
          Tokay geckos often live alongside people and help control household insects, and
          they are kept as pets (where legal). Unfortunately, huge numbers have been taken
          from the wild for the pet trade and especially for use in traditional medicine —
          based on unproven claims — which has put pressure on wild populations in parts of
          their range. They are otherwise harmless to people apart from a firm bite if
          handled. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a tokay gecko?",
          answer:
            "It's named after its call. Male tokay geckos give a loud, repeated 'to-kay' (or 'gecko') sound, especially at night, to advertise territory and attract mates. This distinctive call is the origin of both the tokay's name and, more broadly, the word 'gecko' for the whole family.",
        },
        {
          question: "How do geckos stick to walls and ceilings?",
          answer:
            "Their toe pads are covered with millions of microscopic hairs called setae, which split into even finer tips. These use tiny molecular (van der Waals) forces that, multiplied across so many contacts, let the gecko grip smooth surfaces — even glass — and run upside down. This remarkable adhesion has inspired the design of new sticky materials.",
        },
        {
          question: "Do tokay geckos bite?",
          answer:
            "Yes — tokays are bold and can deliver a strong, tenacious bite if cornered or handled, sometimes holding on firmly. They are not venomous and the bite isn't dangerous, but it can be painful. In the wild they prefer to flee or threaten with a wide-open mouth before resorting to biting.",
        },
        {
          question: "What do tokay geckos eat?",
          answer:
            "Mostly insects and other invertebrates such as crickets, moths, cockroaches, and spiders, which is why they're useful around homes. Large tokays can also take small vertebrates — other lizards, small snakes, frogs, and even small rodents — caught with a quick lunge at night.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Gekko gecko" },
        { label: "Class", value: "Reptilia (gecko)" },
        { label: "Signature trait", value: "Loud 'to-kay' call; sticky toe pads" },
        { label: "Diet", value: "Carnivore (insects; large ones take small vertebrates)" },
        { label: "Activity", value: "Nocturnal; territorial & vocal" },
        { label: "Habitat", value: "Asian forests & buildings" },
        { label: "Note", value: "Harmless but bites firmly; heavily traded" },
        { label: "Status", value: "Verify (wild-trade pressure)" },
      ]}
      relatedLinks={[
        { label: "Gecko Profile", href: "/animals/gecko", description: "The wider gecko group" },
        { label: "Anole Profile", href: "/animals/anole", description: "Another small, agile lizard" },
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "A very different specialised lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
