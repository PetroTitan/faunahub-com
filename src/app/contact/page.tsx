import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with FaunaHub. For content corrections, editorial inquiries, or general questions about the platform.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Contact", url: "https://faunahub.com/contact" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Contact</span>
            </nav>
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">Contact Us</h1>
              <p className="text-base text-[#2C3A2F]">
                Questions, corrections, or general inquiries about FaunaHub.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
            {/* Primary contact */}
            <div>
              <h2 className="text-xl font-bold text-[#17211B] mb-4">Get in Touch</h2>
              <p className="text-[#2C3A2F] text-base leading-relaxed mb-5">
                The best way to reach us is by email. We aim to respond within a reasonable
                timeframe, though response times may vary.
              </p>

              <div className="card p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A958E] mb-1">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:info@helperg.com"
                    className="text-base font-medium text-[#063F2A] hover:text-[#0F5A3A] hover:no-underline"
                  >
                    info@helperg.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A958E] mb-1">
                    Content Corrections
                  </p>
                  <p className="text-sm text-[#2C3A2F]">
                    If you notice a factual error, outdated information, or a broken link, please
                    email us with the page URL and the correction. We take content accuracy seriously.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A958E] mb-1">
                    Editorial Inquiries
                  </p>
                  <p className="text-sm text-[#2C3A2F]">
                    For questions about our editorial standards or content approach, see our{" "}
                    <Link href="/editorial-policy">Editorial Policy</Link>.
                  </p>
                </div>
              </div>

              {/* No form note */}
              <p className="text-xs text-[#8A958E] mt-4">
                A contact form may be added in a future update. For now, please use the email
                address above.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h2 className="text-xl font-bold text-[#17211B] mb-4">Useful Links</h2>
              <div className="space-y-3">
                {[
                  { label: "About FaunaHub", href: "/about", desc: "What we are and what we cover" },
                  { label: "Editorial Policy", href: "/editorial-policy", desc: "Our content standards" },
                  { label: "Privacy Policy", href: "/privacy-policy", desc: "How we handle data" },
                  { label: "Cookie Policy", href: "/cookie-policy", desc: "Cookie usage on this site" },
                  { label: "Affiliate Disclosure", href: "/affiliate-disclosure", desc: "Our commercial relationships" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-start gap-3 p-3 rounded-lg border border-[#DDE6DD] bg-white hover:border-[#CFE0A8] hover:bg-[#FAFCF2] transition-colors hover:no-underline group"
                  >
                    <span className="text-[#063F2A] mt-0.5" aria-hidden="true">→</span>
                    <span>
                      <span className="block text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">
                        {link.label}
                      </span>
                      <span className="block text-xs text-[#8A958E]">{link.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
