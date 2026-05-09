import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "FaunaHub affiliate disclosure. How affiliate links work on this site, what it means for you, and our commitment to editorial independence.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Affiliate Disclosure", url: "https://faunahub.com/affiliate-disclosure" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Affiliate Disclosure</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">Affiliate Disclosure</h1>
            <p className="text-base text-[#2C3A2F]">Effective date: May 7, 2025</p>
          </div>
        </header>

        <div className="container-prose py-10 prose-content">
          <h2>Our Affiliate Relationship Disclosure</h2>
          <p>
            FaunaHub is an independent educational platform. To support the ongoing development and
            maintenance of this Site, some pages may contain affiliate links — links to third-party
            products or services where FaunaHub may receive a commission if you click through and
            make a qualifying purchase or take another qualifying action.
          </p>

          <h2>How Affiliate Links Work</h2>
          <p>
            When you click an affiliate link and purchase a product or service through that link,
            the retailer or service provider may pay FaunaHub a small commission. This commission
            comes at <strong>no additional cost to you</strong> — you pay the same price you would
            pay without the affiliate link.
          </p>

          <h2>Our Editorial Independence Commitment</h2>
          <p>
            Affiliate relationships do not influence the editorial content published on FaunaHub.
            We do not:
          </p>
          <ul>
            <li>Write positive content in exchange for commissions</li>
            <li>Recommend products we do not believe to be appropriate for our readers</li>
            <li>Hide commercial relationships from our readers</li>
            <li>Allow affiliate partnerships to override our factual or editorial standards</li>
          </ul>
          <p>
            Our <Link href="/editorial-policy">Editorial Policy</Link> governs all content published
            on this Site, regardless of whether affiliate links are present.
          </p>

          <h2>FTC and Regulatory Compliance</h2>
          <p>
            In accordance with the United States Federal Trade Commission (FTC) guidelines and
            equivalent regulations in other jurisdictions, we disclose our affiliate relationships
            clearly. Where affiliate links are present on specific pages, those pages may include
            an additional inline disclosure.
          </p>

          <h2>Current Status</h2>
          <p>
            FaunaHub may include affiliate links in content as the platform develops. Not all links
            on this Site are affiliate links. When in doubt, this disclosure applies to any link
            that may result in compensation to FaunaHub.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about affiliate relationships on this Site, contact us at{" "}
            <a href="mailto:info@helperg.com">info@helperg.com</a>.
          </p>

          <div className="mt-8">
            <LastUpdated date="2025-05-07" />
          </div>
        </div>
      </main>
    </>
  );
}
