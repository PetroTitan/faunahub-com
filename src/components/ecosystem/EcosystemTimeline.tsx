/**
 * EcosystemTimeline — the horizontal "product journey" shown in the banner.
 *
 * Server component: every node is a real, crawlable link (or the current
 * product marked with `aria-current`). No JavaScript is required for it to
 * work, and it degrades gracefully when the directory panel is unavailable.
 */
import {
  getTimelineProducts,
  primaryWebPlatform,
  type EcosystemProduct,
} from "@/lib/ecosystem/products";

function TimelineNode({
  product,
  isCurrent,
  connector,
  className,
}: {
  product: EcosystemProduct;
  isCurrent: boolean;
  connector: boolean;
  className?: string;
}) {
  const label = product.shortName ?? product.name;

  const dot = (
    <span
      aria-hidden="true"
      className={
        isCurrent
          ? "h-[9px] w-[9px] shrink-0 rounded-full bg-[#0F5A3A] ring-2 ring-[#0F5A3A]/25"
          : "h-[7px] w-[7px] shrink-0 rounded-full border-[1.5px] border-[#8AA07E] bg-[#EEF1EA]"
      }
    />
  );

  const inner = isCurrent ? (
    <span
      aria-current="page"
      className="inline-flex items-center gap-1.5 whitespace-nowrap"
    >
      {dot}
      <span className="text-[13px] font-semibold text-[#063F2A]">{label}</span>
      <span className="rounded-full bg-[#0F5A3A]/10 px-1.5 py-[1px] text-[10px] font-semibold uppercase tracking-wide text-[#0F5A3A]">
        Current
      </span>
      <span className="sr-only">— current product</span>
    </span>
  ) : (
    <a
      href={primaryWebPlatform(product)?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-1 py-1 text-[13px] font-medium text-[#2C3A2F] no-underline transition-colors hover:bg-[#E2E9DE] hover:text-[#063F2A] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-1 focus-visible:ring-offset-[#EEF1EA]"
    >
      {dot}
      <span>{label}</span>
      <span className="sr-only"> — visit {product.name} (opens in a new tab)</span>
    </a>
  );

  return (
    <li className={`flex items-center ${className ?? ""}`}>
      {connector && (
        <span
          aria-hidden="true"
          className="mx-1 h-px w-4 shrink-0 bg-[#C6D3C4] lg:w-6"
        />
      )}
      {inner}
    </li>
  );
}

export default function EcosystemTimeline({
  currentProductId,
}: {
  currentProductId: string;
}) {
  const products = getTimelineProducts(currentProductId);

  // Progressive disclosure: keep the current product visible at every width;
  // reveal additional non-current nodes only on larger screens.
  let nonCurrentSeen = 0;

  return (
    <ol className="flex items-center">
      {products.map((product, index) => {
        const isCurrent = product.id === currentProductId;
        // First non-current node has no leading connector.
        const connector = index > 0;

        let visibility = "flex";
        if (!isCurrent) {
          // Show the first 2 non-current nodes from `md`, the rest from `lg`.
          visibility = nonCurrentSeen < 2 ? "flex" : "hidden lg:flex";
          nonCurrentSeen += 1;
        }

        return (
          <TimelineNode
            key={product.id}
            product={product}
            isCurrent={isCurrent}
            connector={connector}
            className={visibility}
          />
        );
      })}
    </ol>
  );
}
