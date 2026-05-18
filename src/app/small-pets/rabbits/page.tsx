import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Rabbit Care Guides — Planning & Resources",
  description:
    "Practical resources for prospective and current rabbit owners — cost framework, age tools, and vet-care planning. Educational only; consult a rabbit-savvy veterinarian for clinical decisions.",
  path: "/small-pets/rabbits",
});

export default function RabbitsHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Small Pets", url: "https://faunahub.com/small-pets" },
    { name: "Rabbits", url: "https://faunahub.com/small-pets/rabbits" },
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
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-[#8A958E] mb-4 flex gap-2"
            >
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/small-pets"
                className="hover:text-[#063F2A] hover:no-underline"
              >
                Small Pets
              </Link>
              <span aria-hidden="true">/</span>
              <span
                className="text-[#17211B] font-medium"
                aria-current="page"
              >
                Rabbits
              </span>
            </nav>
            <span className="tag mb-3 inline-block">Small Pets</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Rabbit Care Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Rabbits are social, long-lived companion animals that need more
              space, daily attention, and specialist veterinary care than many
              first-time owners expect. The resources below pair with the
              broader small-pet, vet-care, and pet-cost guides on FaunaHub.
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-10">
          <RelatedLinks
            title="Rabbit planning and care resources"
            links={[
              {
                label: "How much does a rabbit cost?",
                href: "/small-pets/rabbits/how-much-does-a-rabbit-cost",
                description: "Setup, recurring, and hidden-cost framework",
              },
              {
                label: "Rabbit Age Calculator",
                href: "/tools/rabbit-age-calculator",
                description: "Approximate human-age equivalent",
              },
              {
                label: "Pet Cost Calculator",
                href: "/tools/pet-cost-calculator",
                description: "Run monthly, annual, and first-year scenarios",
              },
              {
                label: "Vet care hub",
                href: "/vet-care",
                description: "Routine and emergency vet-care planning",
              },
              {
                label: "When to call an emergency vet",
                href: "/vet-care/when-to-call-an-emergency-vet",
                description: "Warning signs and what to say on the phone",
              },
              {
                label: "Best pets for beginners",
                href: "/guides/best-pets-for-beginners",
                description: "Honest pet-choice guide including rabbits",
              },
              {
                label: "Small pets hub",
                href: "/small-pets",
                description: "Other small companion-animal guides",
              },
            ]}
          />

          <p className="text-sm text-[#5E6B63]">
            Detailed rabbit care, housing, and diet guides are in development.
            For clinical questions about a specific rabbit, consult a
            rabbit-savvy veterinarian directly.
          </p>
        </div>
      </main>
    </>
  );
}
