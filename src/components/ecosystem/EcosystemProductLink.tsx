/**
 * EcosystemProductLink — one product card in the full directory.
 *
 * Renders the product name, a one-line description, its category, a status
 * chip (only when it adds information), and a button per REAL platform. A
 * product with no linkable platform shows plain, non-clickable "Link coming
 * soon" text — never a disabled control that looks clickable.
 *
 * Used only inside the client directory panel, so click handlers fire the
 * consent-safe ecosystem analytics events.
 */
import {
  categoryLabel,
  statusLabel,
  type EcosystemProduct,
  type ProductPlatform,
} from "@/lib/ecosystem/products";
import {
  CURRENT_PRODUCT_ID,
  trackEcosystemEvent,
} from "@/lib/ecosystem/config";
import {
  AppleIcon,
  ExternalLinkIcon,
  GlobeIcon,
  GooglePlayIcon,
} from "./icons";

function platformIcon(type: ProductPlatform["type"]) {
  switch (type) {
    case "ios":
      return <AppleIcon size={15} />;
    case "android":
      return <GooglePlayIcon size={15} />;
    default:
      return <GlobeIcon size={14} />;
  }
}

function PlatformButton({
  product,
  platform,
}: {
  product: EcosystemProduct;
  platform: ProductPlatform;
}) {
  const isWeb = platform.type === "website" || platform.type === "web-app";
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEcosystemEvent(
          isWeb ? "ecosystem_product_click" : "ecosystem_platform_click",
          {
            sourceProduct: CURRENT_PRODUCT_ID,
            targetProduct: product.id,
            platform: platform.type,
            placement: "directory",
            currentPath:
              typeof window !== "undefined" ? window.location.pathname : undefined,
          },
        )
      }
      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#CBD6C9] bg-white px-3 py-1.5 text-xs font-semibold text-[#063F2A] no-underline transition-colors hover:border-[#063F2A] hover:bg-[#EFF4E0] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-1"
    >
      <span className="text-[#0F5A3A]">{platformIcon(platform.type)}</span>
      <span>{platform.label}</span>
      {isWeb && (
        <span className="text-[#5E6B63]">
          <ExternalLinkIcon size={12} />
        </span>
      )}
      <span className="sr-only">
        — {product.name} on {platform.label} (opens in a new tab)
      </span>
    </a>
  );
}

export default function EcosystemProductLink({
  product,
}: {
  product: EcosystemProduct;
}) {
  const isCurrent = product.id === CURRENT_PRODUCT_ID;
  // "Available" (live) is the default and adds no information; only surface a
  // status chip when it genuinely tells the user something (beta / coming-soon).
  const showStatus = product.status !== "live";

  return (
    <li
      className={`flex h-full flex-col rounded-xl border p-3.5 transition-colors ${
        isCurrent
          ? "border-[#0F5A3A]/40 bg-[#F3F7EE]"
          : "border-[#E2E9DE] bg-white hover:border-[#CBD6C9]"
      }`}
    >
      <div className="mb-1 flex items-center gap-2">
        <h3 className="text-sm font-semibold text-[#17211B]">{product.name}</h3>
        {isCurrent && (
          <span
            className="rounded-full bg-[#0F5A3A]/10 px-1.5 py-[1px] text-[10px] font-semibold uppercase tracking-wide text-[#0F5A3A]"
            aria-current="page"
          >
            Current
          </span>
        )}
        {showStatus && (
          <span className="rounded-full bg-[#EFF1EB] px-1.5 py-[1px] text-[10px] font-medium text-[#5E6B63]">
            {statusLabel(product.status)}
          </span>
        )}
      </div>

      <p className="mb-2.5 text-xs leading-relaxed text-[#5E6B63]">
        {product.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-1.5">
        <span className="mr-0.5 text-[11px] font-medium uppercase tracking-wide text-[#5E6B63]">
          {categoryLabel(product.category)}
        </span>
        {product.platforms.length > 0 ? (
          product.platforms.map((platform) => (
            <PlatformButton
              key={platform.type + platform.url}
              product={product}
              platform={platform}
            />
          ))
        ) : (
          <span className="text-[11px] italic text-[#5E6B63]">
            Link coming soon
          </span>
        )}
      </div>
    </li>
  );
}
