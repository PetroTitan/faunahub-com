import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy — FaunaHub",
  description:
    "FaunaHub cookie policy. What cookies may be used on this site, why, and how to manage them.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Cookie Policy", url: "https://faunahub.com/cookie-policy" },
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
              <span className="text-[#1C2B3A] font-medium" aria-current="page">Cookie Policy</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-3">Cookie Policy</h1>
            <p className="text-base text-[#3E4F60]">Effective date: May 7, 2025</p>
          </div>
        </header>

        <div className="container-prose py-10 prose-content">
          <p>
            This Cookie Policy explains how FaunaHub may use cookies and similar tracking technologies
            on faunahub.com (the &quot;Site&quot;).
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They are widely
            used to make websites work efficiently and to provide information to site owners.
          </p>

          <h2>2. What Cookies Does FaunaHub Use?</h2>

          <h3>Essential Technical Cookies</h3>
          <p>
            At this time, FaunaHub may use only essential technical cookies that are strictly necessary
            for the operation of the website. These may include cookies set by hosting or CDN
            infrastructure for load balancing or security purposes. These cookies do not track users
            for advertising or analytics purposes.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We do not currently operate active analytics cookie tracking. If analytics is implemented
            in the future, this policy will be updated and, where required by applicable law, we will
            seek your consent before setting analytics or marketing cookies.
          </p>

          <h3>Marketing and Advertising Cookies</h3>
          <p>
            We do not currently use marketing or advertising cookies. If such cookies are introduced
            in the future, we will update this policy and obtain appropriate consent where required.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            Some content or functionality embedded from third-party services (such as embedded video
            or maps, if used) may set their own cookies. FaunaHub does not control third-party cookies.
            You should review the privacy and cookie policies of those third parties separately.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul>
            <li>View cookies currently stored on your device</li>
            <li>Block or delete cookies from specific websites</li>
            <li>Block all third-party cookies</li>
            <li>Set preferences for each website individually</li>
          </ul>
          <p>
            Note that disabling cookies may affect the functionality of some websites, including
            this one, if session or preference cookies are in use.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            This Cookie Policy may be updated as the Site evolves and new technologies or services
            are added. The effective date at the top of this page will reflect the date of the most
            recent update.
          </p>

          <h2>6. Contact</h2>
          <p>
            Questions about this Cookie Policy can be sent to:{" "}
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
