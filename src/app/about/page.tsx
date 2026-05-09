import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "About — Independent Animal Knowledge Platform",
  description:
    "FaunaHub is an independent educational platform covering pet care, wildlife profiles, animal facts, comparisons, and tools for pet owners and curious readers.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "About", url: "https://faunahub.com/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-12 sm:py-16">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span>/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">About</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4">About FaunaHub</h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                An independent animal knowledge platform built for responsible pet owners and curious readers.
              </p>
            </div>
          </div>
        </header>

        <div className="container-prose py-10 prose-content">
          <h2>What is FaunaHub?</h2>
          <p>
            FaunaHub is an independent educational platform that covers pet care, domestic animals,
            wildlife, animal facts, breed guides, animal comparisons, and practical tools for
            responsible pet owners and curious readers.
          </p>
          <p>
            Our goal is to provide structured, trustworthy, and practical animal information — from
            day-to-day dog care to in-depth wildlife profiles. We take a calm, educational approach
            that prioritizes accuracy over volume.
          </p>

          <h2>What FaunaHub Is Not</h2>
          <p>FaunaHub is:</p>
          <ul>
            <li><strong>Not a veterinary clinic</strong> — we do not provide diagnoses, prescriptions, or clinical advice.</li>
            <li><strong>Not a government agency</strong> — we do not issue wildlife permits or conservation rulings.</li>
            <li><strong>Not a conservation authority</strong> — we reference IUCN Red List and other authoritative sources, but we are not an official conservation body.</li>
            <li><strong>Not a substitute for professional care</strong> — all pet health content is for general educational purposes only. Always consult a licensed veterinarian for your pet&apos;s health.</li>
          </ul>

          <h2>Our Editorial Approach</h2>
          <p>
            We do not invent facts. We do not create fake statistics or fabricate citations. Where information
            is uncertain or pending authoritative verification, we say so clearly.
          </p>
          <p>
            Content on FaunaHub is reviewed and updated over time. We prioritize information from recognized
            authorities including the AVMA, ASPCA, IUCN Red List, Merck Veterinary Manual, AKC, Cornell
            University College of Veterinary Medicine, Smithsonian, and equivalent institutions.
          </p>
          <p>
            For a full description of our editorial standards, see our{" "}
            <Link href="/editorial-policy">Editorial Policy</Link>.
          </p>

          <h2>Contact</h2>
          <p>
            For inquiries, corrections, or feedback, contact us at{" "}
            <a href="mailto:info@helperg.com">info@helperg.com</a>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/editorial-policy" className="btn-secondary text-sm">Editorial Policy</Link>
            <Link href="/contact" className="btn-secondary text-sm">Contact</Link>
            <Link href="/privacy-policy" className="btn-secondary text-sm">Privacy Policy</Link>
          </div>

          <div className="mt-8">
            <LastUpdated date="2025-05-07" />
          </div>
        </div>
      </main>
    </>
  );
}
