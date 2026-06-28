import type { Metadata } from "next";
import Link from "next/link";
import SourcePageLayout, { Section, FaqBlock } from "@/components/research/SourcePageLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-research-sources/image-licensing-for-animal-content";
const MODIFIED = "2026-06-28";
const TITLE = "Image Licensing for Animal Content: FaunaHub's Policy";
const DESC =
  "Which image licenses FaunaHub accepts (Public Domain, CC0, CC BY, CC BY-SA) and which it rejects, why derivative rights matter for WebP, and how attribution and captive-context disclosure work.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
  {
    question: "Which image licenses does FaunaHub use?",
    answer:
      "Only licenses that allow commercial use and modification: Public Domain, CC0, CC BY, and CC BY-SA. These let FaunaHub convert an image to an optimised WebP copy and display it, while preserving the required attribution.",
  },
  {
    question: "Why are non-commercial (NC) or no-derivatives (ND) images not used?",
    answer:
      "FaunaHub is a commercial-capable website that resizes and converts images to WebP. A no-derivatives (ND) license forbids the conversion, and a non-commercial (NC) license is incompatible with the site, so those images are not used even when they are otherwise excellent.",
  },
  {
    question: "How are captive or specimen photos handled?",
    answer:
      "Honestly. If an image shows an animal in a zoo, aquarium, museum, garden, reserve, or as a specimen, the caption and risk notes say so, and a 'wild' context is never claimed unless the source supports it.",
  },
];

const ALLOWED = ["Public Domain", "CC0", "CC BY", "CC BY-SA"];
const DISALLOWED = [
  "CC BY-NC (non-commercial)",
  "CC BY-ND (no derivatives)",
  "GFDL-only",
  "All rights reserved",
  "Unclear or missing license",
  "Unknown author",
  "Watermarked images",
  "Social media, Pinterest, or Google Images results",
];

export default function ImageLicensingPage() {
  return (
    <SourcePageLayout
      crumbs={[
        { name: "Animal Research Sources", href: "/animal-research-sources" },
        { name: "Image licensing for animal content", href: PATH },
      ]}
      kicker="Image licensing"
      h1="Image licensing for animal content"
      modified={MODIFIED}
      intro={
        <p>
          A photo is only usable if its license allows it. FaunaHub stores local, optimised copies of
          animal images only when the license permits commercial use and modification, preserves the
          original author and license, and discloses captive or staged contexts. This page explains
          those rules.
        </p>
      }
      related={[
        { label: "Animal Research Sources", href: "/animal-research-sources" },
        { label: "How FaunaHub uses sources", href: "/animal-research-sources/how-faunahub-uses-sources" },
        { label: "Image Credits", href: "/image-credits" },
        { label: "Editorial Policy", href: "/editorial-policy" },
      ]}
      faq={FAQ}
    >
      <Section id="allowed" title="Licenses FaunaHub accepts">
        <p>
          FaunaHub uses images released under licenses that allow both commercial use and modification:
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 list-none p-0 m-0 not-prose">
          {ALLOWED.map((l) => (
            <li key={l} className="card p-3 text-center text-sm font-medium text-[#17211B]">{l}</li>
          ))}
        </ul>
        <p>
          Most come from{" "}
          <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>,
          which records a license and author for each file, alongside compatible images from government
          and science agencies. The license terms themselves are defined by{" "}
          <a href="https://creativecommons.org/" target="_blank" rel="noopener noreferrer">Creative Commons</a>.
        </p>
      </Section>

      <Section id="disallowed" title="Licenses and sources FaunaHub rejects">
        <ul className="list-disc list-outside pl-5 space-y-1.5">
          {DISALLOWED.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Section>

      <Section id="derivatives" title="Why derivative rights matter for WebP">
        <p>
          FaunaHub does not hotlink originals. It downloads a permitted image, resizes it, and encodes
          an optimised WebP copy for fast, reliable loading. Creating that copy is a modification, so
          the license must allow derivatives — which is why no-derivatives (ND) images cannot be used,
          however good they are.
        </p>
      </Section>

      <Section id="attribution" title="Attribution and honest captions">
        <p>
          For licenses that require it (such as CC BY and CC BY-SA), FaunaHub stores and displays the
          author and license, gathered on the{" "}
          <Link href="/image-credits">image credits</Link> page and in each image&apos;s record.
          Captions are written from the resolved image metadata, and captive, specimen, museum, garden,
          reserve, research, or historical contexts are disclosed rather than dressed up as wild,
          in-situ photographs.
        </p>
      </Section>

      <Section id="no-scraping" title="No scraping or republishing">
        <p>
          FaunaHub does not scrape source websites or republish their text or datasets. It links to
          sources, summarises in its own words, and reuses only images whose licenses clearly permit
          it — with attribution intact.
        </p>
      </Section>

      <FaqBlock faq={FAQ} />
    </SourcePageLayout>
  );
}
