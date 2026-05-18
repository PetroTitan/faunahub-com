import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import PetCostCalculatorClient from "./PetCostCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Pet Cost Calculator — Monthly, Annual & First-Year Estimates",
  description:
    "Free pet cost calculator. Estimate monthly, annual, and first-year pet ownership costs across food, vet, grooming, insurance, supplies, boarding, and emergency funds. Planning only.",
  path: "/tools/pet-cost-calculator",
});

export default function PetCostCalculatorPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    {
      name: "Pet Cost Calculator",
      url: "https://faunahub.com/tools/pet-cost-calculator",
    },
  ]);

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FaunaHub Pet Cost Calculator",
    url: "https://faunahub.com/tools/pet-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description:
      "Educational pet ownership cost calculator that sums user-entered monthly, annual, and one-time setup costs.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, softwareApplication]),
        }}
      />
      <main id="main-content">
        <div className="container-content py-8">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools" },
              { label: "Pet Cost Calculator" },
            ]}
          />
          <PetCostCalculatorClient />
        </div>
      </main>
    </>
  );
}
