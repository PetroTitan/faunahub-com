import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://faunahub.com"),
  title: {
    default: "FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence",
    template: "%s | FaunaHub",
  },
  description:
    "Practical pet care guides, animal facts, wildlife explainers, and simple decision tools for responsible pet owners and curious readers.",
  keywords: [
    "pet care",
    "animal facts",
    "wildlife",
    "dog breeds",
    "cat breeds",
    "animal encyclopedia",
    "pet health",
  ],
  authors: [{ name: "FaunaHub Editorial Team", url: "https://faunahub.com" }],
  creator: "FaunaHub",
  publisher: "FaunaHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faunahub.com",
    siteName: "FaunaHub",
    title: "FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence",
    description:
      "Practical pet care guides, animal facts, wildlife explainers, and simple decision tools for responsible pet owners and curious readers.",
    images: [
      {
        url: "https://faunahub.com/og-default.svg",
        width: 1200,
        height: 630,
        alt: "FaunaHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence",
    description:
      "Practical pet care guides, animal facts, wildlife explainers, and simple decision tools.",
    images: ["https://faunahub.com/og-default.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
