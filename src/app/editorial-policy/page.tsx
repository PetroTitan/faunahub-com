import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "Editorial Policy — How FaunaHub Creates and Reviews Content",
  description:
    "FaunaHub's editorial standards: no fake facts, no fabricated citations, no unsafe health advice. How we source, write, and update animal and pet care content.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Editorial Policy", url: "https://faunahub.com/editorial-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#E4E8ED] py-12">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#9CA5AF] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#2A7A4B] hover:no-underline">Home</Link>
              <span>/</span>
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Editorial Policy</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">Editorial Policy</h1>
            <p className="text-base text-[#3E4F60]">How FaunaHub creates, reviews, and updates content.</p>
          </div>
        </header>

        <div className="container-prose py-10 prose-content">
          <h2>Purpose</h2>
          <p>
            FaunaHub publishes educational content about animals, pet care, and wildlife. Our editorial
            policy governs how that content is created, what standards it must meet, and how it is
            maintained over time.
          </p>

          <h2>Content Standards</h2>
          <p>All content on FaunaHub must meet these minimum standards:</p>
          <ul>
            <li><strong>No invented facts.</strong> We do not fabricate scientific classifications, statistics, conservation status, or veterinary data.</li>
            <li><strong>No fake citations.</strong> We do not create fake URLs, invent source names, or attribute claims to non-existent studies.</li>
            <li><strong>No lorem ipsum or placeholder text</strong> in any user-facing content.</li>
            <li><strong>No fake reviews, ratings, or testimonials.</strong></li>
            <li><strong>No thin content</strong> published solely for search engine traffic without genuine informational value.</li>
          </ul>

          <h2>Pet Health and Veterinary Content</h2>
          <p>
            Pet health content on FaunaHub is for <strong>general educational purposes only</strong> and
            is not a substitute for professional veterinary advice.
          </p>
          <p>All health-adjacent pages must:</p>
          <ul>
            <li>Include a visible veterinary disclaimer</li>
            <li>Use cautious language appropriate to the uncertainty involved</li>
            <li>Not give diagnoses, medication dosages, or treatment protocols</li>
            <li>Not tell readers to avoid or delay veterinary care</li>
            <li>Mention emergency warning signs where relevant</li>
            <li>Recommend consulting a licensed veterinarian for any health concern</li>
          </ul>
          <p>
            If a pet shows severe symptoms, persistent discomfort, breathing problems, bleeding,
            poisoning signs, collapse, seizures, or sudden behavior changes, readers should contact
            a licensed veterinarian or emergency animal clinic immediately.
          </p>

          <h2>Wildlife and Conservation Content</h2>
          <p>
            Conservation status references are based on IUCN Red List designations where available.
            Pages explicitly note when conservation data is approximate or pending review. We do not
            claim exact population figures unless sourced from a cited authority.
          </p>

          <h2>Source Transparency</h2>
          <p>
            Authoritative sources we reference for pet and veterinary content include:
          </p>
          <ul>
            <li>American Veterinary Medical Association (AVMA)</li>
            <li>Merck Veterinary Manual</li>
            <li>ASPCA</li>
            <li>Cornell University College of Veterinary Medicine</li>
            <li>VCA Animal Hospitals</li>
            <li>American Kennel Club (AKC) for breed information</li>
          </ul>
          <p>
            For wildlife and encyclopedia content, we reference:
          </p>
          <ul>
            <li>IUCN Red List</li>
            <li>Smithsonian Institution</li>
            <li>National Geographic</li>
            <li>Animal Diversity Web (University of Michigan)</li>
            <li>World Wildlife Fund (WWF)</li>
            <li>Britannica</li>
            <li>Government wildlife agencies</li>
          </ul>
          <p>
            When a page&apos;s sources have not yet been fully verified, this is noted with a
            &quot;Source review pending&quot; notice.
          </p>

          <h2>Affiliate and Commercial Disclosure</h2>
          <p>
            FaunaHub may include affiliate links in some content. Commercial relationships do not
            influence editorial content. See our{" "}
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for details.
          </p>

          <h2>Content Updates</h2>
          <p>
            Content is reviewed and updated over time. Each page displays a &quot;Last updated&quot;
            date. Readers who identify errors or outdated information are encouraged to contact us
            at <a href="mailto:info@helperg.com">info@helperg.com</a>.
          </p>

          <div className="mt-8">
            <LastUpdated date="2025-05-07" />
          </div>
        </div>
      </main>
    </>
  );
}
