import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Cat Food & Nutrition Guides — Feeding Your Cat Correctly",
  description:
    "Cat dietary requirements, life stage feeding guidance, common toxic foods, and how to understand cat food labels.",
  path: "/cats/food",
});

export default function CatFoodPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cats", url: "https://faunahub.com/cats" },
    { name: "Food & Nutrition", url: "https://faunahub.com/cats/food" },
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
              <Link href="/cats" className="hover:text-[#063F2A] hover:no-underline">Cats</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Food &amp; Nutrition</span>
            </nav>
            <span className="tag mb-3 inline-block">Cats</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Cat Food &amp; Nutrition
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Cats are strict obligate carnivores — unlike dogs, they cannot synthesize certain
              essential nutrients such as taurine and arachidonic acid from plant sources and must
              obtain them from animal-based proteins. Feeding a diet that meets these biological
              requirements at each life stage is fundamental to feline health.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Cat nutrition guides on FaunaHub cover the macronutrient requirements of cats
              at kitten, adult, and senior life stages, the debate around wet versus dry food and
              its impact on hydration and urinary health, understanding AAFCO nutritional adequacy
              statements on pet food labels, and a list of foods that are dangerous or toxic to
              cats — including onions, garlic, grapes, raisins, xylitol, alcohol, raw dough,
              and many common household plants.
            </p>
            <p>
              Taurine deficiency in cats causes dilated cardiomyopathy and retinal degeneration —
              conditions that were historically common before the dietary requirement was
              established. All commercially prepared cat foods sold in regulated markets must now
              meet minimum taurine standards, but homemade diets require careful formulation to
              meet this and other critical requirements.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Detailed feeding guides and life-stage nutrition breakdowns are in development. For
            dietary changes or concerns about your cat&apos;s weight or digestion, consult a
            licensed veterinarian.
          </p>

          <div className="mt-8">
            <Link
              href="/cats"
              className="text-sm font-medium text-[#063F2A] hover:underline"
            >
              &larr; Back to Cat Care Guides
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
