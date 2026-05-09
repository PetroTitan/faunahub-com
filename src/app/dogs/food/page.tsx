import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Dog Food & Nutrition Guides — What to Feed Your Dog",
  description:
    "Dog food guides covering dietary requirements by life stage, common ingredients, what foods are toxic to dogs, and how to read pet food labels.",
  path: "/dogs/food",
});

export default function DogFoodPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Dogs", url: "https://faunahub.com/dogs" },
    { name: "Food & Nutrition", url: "https://faunahub.com/dogs/food" },
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
              <Link href="/dogs" className="hover:text-[#063F2A] hover:no-underline">Dogs</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Food &amp; Nutrition</span>
            </nav>
            <span className="tag mb-3 inline-block">Dogs</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Dog Food &amp; Nutrition
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Dogs are omnivores with nutritional needs that change across life stages — puppies,
              adults, and senior dogs have different caloric, protein, and micronutrient
              requirements. Understanding what goes into commercial dog food, which human foods are
              dangerous to dogs, and how to read AAFCO nutritional adequacy statements helps owners
              make informed decisions.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section className="prose-content max-w-3xl" aria-labelledby="about-heading">
            <h2 id="about-heading">About This Section</h2>
            <p>
              Nutrition guides on FaunaHub cover the macronutrient and micronutrient needs of dogs
              at each life stage, how to interpret pet food ingredient lists and guaranteed
              analysis panels, common dietary questions around raw diets and grain-free formulas,
              and a comprehensive list of foods that are toxic or harmful to dogs — including
              grapes, raisins, xylitol, onions, garlic, macadamia nuts, and chocolate.
            </p>
            <p>
              Caloric needs vary significantly by breed, size, activity level, and reproductive
              status. A working Border Collie has very different energy requirements than a sedentary
              adult Basset Hound. Feeding guides provide general starting points, but portion
              adjustments should be made based on your dog&apos;s body condition score and in
              consultation with a veterinarian.
            </p>
          </section>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Specific feeding guides and product recommendations are in development. For dietary
            changes — including switching food types or addressing a medical condition — consult a
            licensed veterinarian.
          </p>

          <div className="mt-8">
            <Link
              href="/dogs"
              className="text-sm font-medium text-[#063F2A] hover:underline"
            >
              &larr; Back to Dog Care Guides
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
