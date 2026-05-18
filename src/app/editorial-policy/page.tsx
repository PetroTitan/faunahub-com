import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "Editorial Policy — How We Create and Review Content",
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
        <header className="bg-white border-b border-[#DDE6DD] py-12">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span>/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Editorial Policy</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">Editorial Policy</h1>
            <p className="text-base text-[#2C3A2F]">How FaunaHub creates, reviews, and updates content.</p>
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

          <h2>Sensitive Topics — Sources We Use</h2>
          <p>
            For sensitive editorial topics — veterinary health, pet food
            safety, pet insurance, vet-care cost planning, and pet ownership
            cost planning — FaunaHub aims to use authoritative sources rather
            than secondary blog content. Specifically:
          </p>
          <ul>
            <li>
              <strong>Veterinary and health content:</strong> AVMA, AAHA,
              Merck Veterinary Manual, ASPCA Animal Poison Control (where
              relevant), Cornell University College of Veterinary Medicine,
              and other recognised veterinary universities and government
              animal-health resources.
            </li>
            <li>
              <strong>Pet food safety content:</strong> ASPCA Animal Poison
              Control&apos;s people-foods guidance, the Merck Veterinary
              Manual&apos;s food-hazards reference, and AVMA pet-care
              resources. FaunaHub
              avoids publishing exact toxicity thresholds, does not give
              dosage advice, and does not tell readers to skip veterinary
              care. Known-unsafe foods (such as chocolate and grapes for
              dogs) are framed as veterinary questions rather than
              quantified by amount.
            </li>
            <li>
              <strong>Insurance content:</strong> official insurance
              regulators (such as the NAIC in the United States), government
              consumer-protection agencies, national insurance associations
              where appropriate, and current policy documents from actual
              insurers — only to explain generic policy mechanics, never as
              endorsement.
            </li>
            <li>
              <strong>Cost and budgeting content:</strong> recognised
              consumer-protection and government sources where available,
              alongside the veterinary sources above for clinical context.
              FaunaHub does not publish country-specific price claims or
              unsupported &quot;average cost&quot; figures. Cost content is
              framed as a planning checklist, not financial advice.
            </li>
          </ul>
          <p>
            FaunaHub does not recommend, rank, or endorse specific insurance
            providers. We avoid fake citations, unsupported provider
            recommendations, and provider pages used as endorsement evidence.
            Pet health content does not replace a veterinarian. Insurance and
            cost content does not replace policy documents, regulators, or
            qualified financial or legal advice.
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
            <LastUpdated date="2026-05-18" />
          </div>
        </div>
      </main>
    </>
  );
}
