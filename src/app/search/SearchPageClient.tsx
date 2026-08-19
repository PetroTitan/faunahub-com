"use client";

/**
 * The client half of /search.
 *
 * Note what this deliberately does NOT do: it never puts the reader's query
 * into the URL, and it never reads one out of it.
 *
 * An earlier version supported `?q=` so a search could be linked and shared. It
 * was removed after measurement, not on principle. The WebmasterID tracker that
 * `src/app/layout.tsx` mounts site-wide patches `history.pushState` and
 * `history.replaceState` and sends `window.location.href` with every resulting
 * page_view. Keeping the query in the URL therefore shipped the reader's typed
 * text to a third-party endpoint — once per keystroke while typing, and once
 * more on any shared link — which is exactly the thing
 * `@/lib/search/analytics` exists to prevent, arriving through a different
 * door. FaunaHub's privacy policy lists what it collects, that list has no
 * user-supplied free-text category, and the site has no consent banner.
 *
 * The cost is real and is accepted: a FaunaHub search cannot be deep-linked or
 * shared. Restoring it needs a consent mechanism gating the tracker and an
 * amendment to the privacy policy's collection list — see
 * docs/search-architecture.md.
 */
import { useEffect, useState } from "react";
import SearchPanel from "@/components/search/SearchPanel";

export default function SearchPageClient() {
  const [ready, setReady] = useState(false);

  // Mount-gated: the page is a static shell and the search state is purely
  // client-side, so nothing here is ever prerendered.
  useEffect(() => setReady(true), []);

  if (!ready) {
    return (
      <div className="rounded-2xl border border-[#DDE6DD] bg-white p-6 text-sm text-[#5E6B63]">
        Loading search…
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#DDE6DD] bg-white">
      {/* A DEFINITE height, not just a max. SearchPanel is `h-full`, and against
          a parent with only max-height that resolves to `auto`: the panel grew
          past the box, the inner scroller never became scrollable, and every
          result below the fold was clipped away with no scrollbar and no way to
          reach it. */}
      <div className="h-[min(70vh,640px)] min-h-[420px]">
        <SearchPanel placement="page" autoFocus />
      </div>
    </div>
  );
}
