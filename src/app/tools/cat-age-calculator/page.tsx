import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import CatAgeCalculatorClient from "./CatAgeCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Cat Age Calculator — Convert Your Cat's Age to Human Years",
  description:
    "Free cat age calculator. Enter your cat's age to get a general approximation of the equivalent human age. No registration required.",
  path: "/tools/cat-age-calculator",
});

export default function CatAgeCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    { name: "Cat Age Calculator", url: "https://faunahub.com/tools/cat-age-calculator" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CatAgeCalculatorClient />
    </>
  );
}
