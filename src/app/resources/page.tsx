import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Animal & Pet Care Resources — Authoritative Sources",
  description:
    "Recommended external resources for pet health, wildlife information, and animal welfare — curated by FaunaHub editorial.",
  path: "/resources",
});

const externalResources = [
  {
    name: "American Veterinary Medical Association (AVMA)",
    domain: "avma.org",
    description:
      "The professional body representing licensed veterinarians in the United States. Provides consumer resources on pet health, vaccination guidelines, and animal welfare policy.",
  },
  {
    name: "ASPCA — American Society for the Prevention of Cruelty to Animals",
    domain: "aspca.org",
    description:
      "Major animal welfare organization offering resources on adoption, animal abuse prevention, and the ASPCA Animal Poison Control Center for toxic substance emergencies.",
  },
  {
    name: "Merck Veterinary Manual",
    domain: "merckvetmanual.com",
    description:
      "A comprehensive clinical veterinary reference covering diseases, treatments, and diagnostics across species. Written for veterinary professionals but accessible to informed pet owners.",
  },
  {
    name: "Cornell University College of Veterinary Medicine",
    domain: "vet.cornell.edu",
    description:
      "One of the leading veterinary research and education institutions in North America. Publishes pet health content and operates specialist referral services.",
  },
  {
    name: "IUCN Red List of Threatened Species",
    domain: "iucnredlist.org",
    description:
      "The global authority on the conservation status of wild species. Used by FaunaHub as the primary source for conservation status data in animal profiles.",
  },
  {
    name: "Animal Diversity Web — University of Michigan",
    domain: "animaldiversity.org",
    description:
      "A comprehensive online database of animal natural history, distribution, classification, and conservation information, maintained by the University of Michigan Museum of Zoology.",
  },
  {
    name: "World Wildlife Fund (WWF)",
    domain: "worldwildlife.org",
    description:
      "An international conservation organization working to protect wildlife and natural habitats. Publishes accessible species and habitat information for the public.",
  },
];

export default function ResourcesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Resources", url: "https://faunahub.com/resources" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Resources</span>
            </nav>
            <span className="tag mb-3 inline-block">References</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Resources
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              This page links to authoritative external organizations whose published research,
              guidelines, and databases inform responsible pet ownership and wildlife education.
              These are the primary sources FaunaHub editorial refers to when verifying facts and
              health information.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="resources-heading">
            <h2 id="resources-heading" className="section-title">Authoritative External Sources</h2>
            <p className="section-subtitle max-w-2xl">
              Each organization below is independently established and widely recognized in its
              field. FaunaHub is not affiliated with any of these organizations.
            </p>

            <ul className="mt-8 space-y-5 max-w-3xl" role="list">
              {externalResources.map((resource) => (
                <li
                  key={resource.domain}
                  className="card p-5"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] mb-1">{resource.name}</h3>
                  <p className="text-xs text-[#063F2A] mb-2">{resource.domain}</p>
                  <p className="text-sm text-[#2C3A2F] leading-relaxed">{resource.description}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-[#5E6B63] max-w-2xl">
              FaunaHub is not affiliated with any of these organizations. External links are
              provided for informational purposes only. Always verify information directly with the
              source organization.
            </p>
          </section>

          <section className="prose-content mt-10 max-w-3xl" aria-label="Additional guidance">
            <h2>When to Contact a Veterinarian</h2>
            <p>
              No website, including FaunaHub, can replace professional veterinary diagnosis or
              treatment. If your pet is experiencing an emergency — including collapse, seizures,
              suspected poisoning, severe respiratory distress, or uncontrolled bleeding — contact
              an emergency veterinary clinic immediately. Use the ASPCA Poison Control hotline for
              suspected toxic ingestions.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
