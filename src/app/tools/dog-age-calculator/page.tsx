import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import DogAgeCalculatorClient from "./DogAgeCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Dog Age Calculator — Convert Your Dog's Age to Human Years",
  description:
    "Free dog age calculator. Enter your dog's age and size to get an approximate human-age equivalent. Based on a general size-adjusted model.",
  path: "/tools/dog-age-calculator",
});

export default function DogAgeCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    { name: "Dog Age Calculator", url: "https://faunahub.com/tools/dog-age-calculator" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DogAgeCalculatorClient />
    </>
  );
}
