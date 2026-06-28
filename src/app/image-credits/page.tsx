import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LastUpdated from "@/components/LastUpdated";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { ANIMAL_IMAGES, ANIMAL_IMAGE_TODOS } from "@/lib/images/animal-images";
import { BREED_IMAGES } from "@/lib/images/breed-images";
import { ENDANGERED_ANIMAL_IMAGES } from "@/lib/images/endangered-animal-images";

type CreditEntry = {
  id: string;
  localPath: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  pagePath: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceName: string;
  sourceUrl: string;
  verifiedAt: string;
  roleLabel:
    | "Hero"
    | "Gallery"
    | "Dog breed"
    | "Cat breed"
    | "Endangered species";
};

const ALL_CREDITS: CreditEntry[] = [
  ...ANIMAL_IMAGES.map((img) => ({
    id: img.id,
    localPath: img.localPath,
    alt: img.alt,
    caption: img.caption,
    width: img.width,
    height: img.height,
    pagePath: img.pagePath,
    author: img.author,
    license: img.license,
    licenseUrl: img.licenseUrl,
    sourceName: img.sourceName,
    sourceUrl: img.sourceUrl,
    verifiedAt: img.verifiedAt,
    roleLabel: (img.role === "hero" ? "Hero" : "Gallery") as
      | "Hero"
      | "Gallery",
  })),
  ...BREED_IMAGES.map((img) => ({
    id: img.id,
    localPath: img.localPath,
    alt: img.alt,
    caption: img.caption,
    width: img.width,
    height: img.height,
    pagePath: img.pagePath,
    author: img.author,
    license: img.license,
    licenseUrl: img.licenseUrl,
    sourceName: img.sourceName,
    sourceUrl: img.sourceUrl,
    verifiedAt: img.verifiedAt,
    roleLabel: (img.species === "dog" ? "Dog breed" : "Cat breed") as
      | "Dog breed"
      | "Cat breed",
  })),
  ...ENDANGERED_ANIMAL_IMAGES.map((img) => ({
    id: img.id,
    localPath: img.localPath,
    alt: img.alt,
    caption: img.caption,
    width: img.width,
    height: img.height,
    pagePath: img.pagePath,
    author: img.author,
    license: img.license,
    licenseUrl: img.licenseUrl,
    sourceName: img.sourceName,
    sourceUrl: img.sourceUrl,
    verifiedAt: img.verifiedAt,
    roleLabel: "Endangered species" as const,
  })),
];

const IMAGE_CREDITS_FAQ = [
  {
    question: "Where do FaunaHub animal images come from?",
    answer:
      "Every photograph on FaunaHub is sourced from a legally reusable archive — primarily Wikimedia Commons, U.S. federal public-domain photo libraries (NASA, NOAA, USFWS, NPS), and Creative Commons-licensed collections. Each image's author, source URL, and license are recorded in our internal metadata and displayed on this page.",
  },
  {
    question: "Can I reuse these images on my own site?",
    answer:
      "FaunaHub does not own these photographs and cannot grant you a license. Each photo is governed by its own original license shown on this page — typically Public Domain, CC0, CC BY, or CC BY-SA. If you want to reuse an image, follow the terms of its original license, which usually requires attribution to the named author and a link to the license deed. For CC BY-SA, derivative works must be released under the same or a compatible licence.",
  },
  {
    question: "What licenses does FaunaHub accept?",
    answer:
      "Only Public Domain, CC0, CC BY, and CC BY-SA. FaunaHub never publishes images with CC BY-NC, CC BY-NC-SA, CC BY-ND, GFDL-only, all-rights-reserved, AI-generated, or unclear-license status. The image-licensing guide explains why derivative rights matter for WebP conversion and how captive or specimen contexts are disclosed.",
  },
  {
    question: "How do I request an attribution correction?",
    answer:
      "If you are the author of an image used here and believe the attribution, license treatment, or species identification is incorrect, email info@helperg.com and we will review the entry promptly.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Image Credits — Sources, Authors and Licenses",
  description:
    "Attribution and license details for every photo used on FaunaHub animal pages. Sources include Wikimedia Commons, NASA, and U.S. Fish and Wildlife Service.",
  path: "/image-credits",
});

const PAGE_UPDATED = "2026-06-16";

export default function ImageCreditsPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Image Credits", url: "https://faunahub.com/image-credits" },
    ]),
    faqSchema(IMAGE_CREDITS_FAQ),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-12">
          <div className="container-content">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-[#8A958E] mb-4 flex gap-2"
            >
              <Link
                href="/"
                className="hover:text-[#063F2A] hover:no-underline"
              >
                Home
              </Link>
              <span>/</span>
              <span
                className="text-[#17211B] font-medium"
                aria-current="page"
              >
                Image Credits
              </span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Image Credits
            </h1>
            <p className="text-base text-[#2C3A2F] max-w-2xl">
              Every photo used in FaunaHub animal profiles is sourced from a
              legally reusable archive — primarily Wikimedia Commons, NASA, and
              the U.S. Fish and Wildlife Service. This page lists each image,
              the author, the license, and a link to the original source.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="image-list-heading">
            <h2
              id="image-list-heading"
              className="text-xl font-semibold text-[#17211B] mb-6"
            >
              Photographs used on FaunaHub
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_CREDITS.map((img) => (
                <li
                  key={img.id}
                  className="border border-[#DDE6DD] rounded-xl bg-white overflow-hidden flex flex-col"
                >
                  <div
                    className="relative w-full bg-[#EFF1EB]"
                    style={{
                      aspectRatio: `${img.width} / ${img.height}`,
                    }}
                  >
                    <Image
                      src={img.localPath}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-2 right-2 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                        img.roleLabel === "Hero"
                          ? "bg-[#063F2A] text-white"
                          : img.roleLabel === "Gallery"
                            ? "bg-white/95 text-[#2C3A2F] border border-[#DDE6DD]"
                            : "bg-[#7BAA35] text-white"
                      }`}
                    >
                      {img.roleLabel}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#8A958E]">
                        Used on
                      </p>
                      <Link
                        href={img.pagePath}
                        className="text-sm font-medium text-[#063F2A] hover:underline"
                      >
                        {img.pagePath}
                      </Link>
                    </div>
                    <dl className="text-xs text-[#2C3A2F] grid gap-1.5 mt-1">
                      <div>
                        <dt className="text-[#8A958E] uppercase tracking-wider text-[10px]">
                          Author
                        </dt>
                        <dd>{img.author}</dd>
                      </div>
                      <div>
                        <dt className="text-[#8A958E] uppercase tracking-wider text-[10px]">
                          License
                        </dt>
                        <dd>
                          {img.licenseUrl ? (
                            <a
                              href={img.licenseUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
                            >
                              {img.license}
                            </a>
                          ) : (
                            img.license
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#8A958E] uppercase tracking-wider text-[10px]">
                          Source
                        </dt>
                        <dd>
                          <a
                            href={img.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A] break-words"
                          >
                            {img.sourceName}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#8A958E] uppercase tracking-wider text-[10px]">
                          Verified
                        </dt>
                        <dd>{img.verifiedAt}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {ANIMAL_IMAGE_TODOS.length > 0 && (
            <section
              aria-labelledby="image-todos-heading"
              className="mt-12 border border-[#DDE6DD] rounded-xl bg-[#F7F8F3] p-6"
            >
              <h2
                id="image-todos-heading"
                className="text-base font-semibold text-[#17211B] mb-2"
              >
                Pending image sourcing
              </h2>
              <p className="text-sm text-[#2C3A2F] mb-3">
                These animal profiles do not yet have a verified image.
                FaunaHub will only add an image once its source, author, and
                license have been confirmed against the editorial standards
                on this page.
              </p>
              <ul className="flex flex-wrap gap-2">
                {ANIMAL_IMAGE_TODOS.map((slug) => (
                  <li
                    key={slug}
                    className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#DDE6DD] text-[#2C3A2F]"
                  >
                    {slug}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section
            aria-labelledby="image-policy-heading"
            className="mt-12 prose-content"
          >
            <h2 id="image-policy-heading">FaunaHub Image Use Policy</h2>
            <p>
              FaunaHub publishes photographs of animals to support educational
              content. Every image must satisfy the following before being
              added to the site:
            </p>
            <ul>
              <li>
                Sourced from a legally reusable archive — Wikimedia Commons,
                public-domain government archives (e.g. NOAA, USFWS, NPS),
                Creative Commons-licensed collections, or other educational
                sources where reuse is clearly permitted.
              </li>
              <li>
                License must be Public Domain, CC0, CC BY, or CC BY-SA. FaunaHub
                does not use CC BY-NC, CC BY-NC-SA, CC BY-ND, unknown-license,
                or all-rights-reserved photography.
              </li>
              <li>
                Author, source URL, license name, and license URL are recorded
                in our metadata system and displayed on this credits page.
                Compact attribution is also shown directly beneath each image.
              </li>
              <li>
                FaunaHub does not use AI-generated &quot;photos&quot; of
                animals, social-media screenshots, breeder sales images,
                stock-photo previews, or images whose species identity is
                doubtful.
              </li>
            </ul>
            <p>
              If you are the author of an image used on FaunaHub and believe
              the attribution or license treatment is incorrect, please
              contact us at{" "}
              <a href="mailto:info@helperg.com">info@helperg.com</a> and we
              will review the entry promptly.
            </p>
          </section>

          <section
            aria-labelledby="image-credits-faq-heading"
            className="mt-12 prose-content"
          >
            <h2 id="image-credits-faq-heading">
              Image credits — frequently asked questions
            </h2>
            <dl className="not-prose mt-4 grid gap-5">
              {IMAGE_CREDITS_FAQ.map((item) => (
                <div
                  key={item.question}
                  className="border border-[#DDE6DD] rounded-xl bg-white p-5"
                >
                  <dt className="font-semibold text-[#17211B] mb-2">
                    {item.question}
                  </dt>
                  <dd className="text-sm text-[#2C3A2F] leading-relaxed">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-8">
            <LastUpdated date={PAGE_UPDATED} />
          </div>
        </div>
      </main>
    </>
  );
}
