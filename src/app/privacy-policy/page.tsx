import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "FaunaHub privacy policy. What data we collect, how it is used, and your rights as a user.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Privacy Policy", url: "https://faunahub.com/privacy-policy" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Privacy Policy</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">Privacy Policy</h1>
            <p className="text-base text-[#2C3A2F]">Effective date: May 7, 2025</p>
          </div>
        </header>

        <div className="container-prose py-10 prose-content">
          <p>
            This Privacy Policy describes how FaunaHub (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
            handles information in connection with your use of the website located at faunahub.com
            (the &quot;Site&quot;).
          </p>

          <h2>1. Information We May Collect</h2>
          <h3>Server Logs</h3>
          <p>
            Like most websites, our hosting infrastructure may automatically record standard server log
            information when you visit the Site. This may include your IP address, browser type,
            referring URL, pages visited, and date/time of access. This information is used for
            operational purposes such as diagnosing technical issues and understanding general traffic
            patterns. It is not used to identify individual users.
          </p>

          <h3>Contact Form Data</h3>
          <p>
            If a contact form is made available on the Site, any information you voluntarily submit
            through that form (such as your name and email address) will be used only to respond to
            your inquiry. We do not sell or share this information with third parties for marketing
            purposes.
          </p>

          <h3>Cookies and Tracking Technologies</h3>
          <p>
            See our <Link href="/cookie-policy">Cookie Policy</Link> for details on how cookies
            may be used on this Site.
          </p>

          <h3>Analytics — WebmasterID</h3>
          <p>
            FaunaHub uses <strong>WebmasterID</strong>, a third-party analytics service, to understand
            how visitors use the Site. WebmasterID may collect:
          </p>
          <ul>
            <li>Page views and the URLs of pages visited on FaunaHub</li>
            <li>The referring URL that brought you to the Site</li>
            <li>General browser and device information (browser family, operating system, screen size)</li>
            <li>Anonymous interaction events such as link clicks or page-level actions</li>
            <li>Approximate, non-precise geographic information derived from your IP address</li>
          </ul>
          <p>
            WebmasterID may use cookies, local storage, or similar technologies to recognise a returning
            visitor in an aggregated way. The collected information is used solely to measure traffic
            patterns and improve the Site, and is not used by FaunaHub for advertising or sold to
            third parties.
          </p>
          <p>
            We do <strong>not</strong> currently operate Google Analytics, advertising trackers, or
            marketing/retargeting pixels. If those are added in the future, this policy will be
            updated and, where required by applicable law, your consent will be requested before
            non-essential trackers are loaded.
          </p>

          <h2>2. How We Use Information</h2>
          <p>Any information collected is used to:</p>
          <ul>
            <li>Operate and maintain the Site</li>
            <li>Respond to user inquiries submitted through contact forms</li>
            <li>Monitor and improve Site performance and security</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell personal information. We do not use personal information for targeted
            advertising at this time.
          </p>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell, rent, or trade personal information to third parties. We may share
            information with service providers (such as hosting infrastructure) who process data
            on our behalf under appropriate agreements. We may disclose information if required by
            law or to protect the security or integrity of the Site.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            Server logs are retained for a limited period as required for operational purposes.
            Contact form submissions are retained only as long as necessary to respond to inquiries.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data, including
            the right to access, correct, or request deletion of data we hold about you. To exercise
            these rights, contact us at{" "}
            <a href="mailto:info@helperg.com">info@helperg.com</a>.
          </p>
          <p>
            If you are located in the European Economic Area (EEA), United Kingdom, or California,
            additional rights may apply under applicable data protection laws (including GDPR and CCPA).
            Please contact us for more information.
          </p>

          <h2>6. Children&apos;s Privacy</h2>
          <p>
            This Site is not directed to children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you believe a child has provided us with
            personal information, please contact us so we can delete it.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not responsible for the
            privacy practices of those websites and encourage you to review their privacy policies.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top of
            this page will be updated when changes are made. Continued use of the Site after changes
            constitutes acceptance of the revised policy.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions about this Privacy Policy can be directed to:{" "}
            <a href="mailto:info@helperg.com">info@helperg.com</a>
          </p>

          <div className="mt-8">
            <LastUpdated date="2025-05-07" />
          </div>
        </div>
      </main>
    </>
  );
}
