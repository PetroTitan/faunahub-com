import { headers } from "next/headers";

/**
 * The instrument for blocking question #1.
 *
 * If Vercel's microfrontends routing passes the mounted prefix through, the app
 * sees /__journal-proof/nested. If it strips it, the app sees /nested. Next
 * does not hand a server component the raw URL, but Vercel sets routing headers
 * that reveal it — x-matched-path is the resolved route, x-forwarded-* carry the
 * public host. Whatever is present is printed verbatim; nothing is inferred.
 */
const INTERESTING = [
  "x-matched-path", "x-invoke-path", "x-forwarded-host", "x-forwarded-proto",
  "x-vercel-id", "x-vercel-deployment-url", "x-vercel-forwarded-for",
  "host", "referer",
];

export default async function Diagnostics({ expected }: { expected: string }) {
  const h = await headers();
  const rows = INTERESTING.map((k) => [k, h.get(k)] as const).filter(([, v]) => v !== null);
  return (
    <>
      <table>
        <tbody>
          <tr><th>expected public path</th><td><code>{expected}</code></td></tr>
          {rows.map(([k, v]) => (
            <tr key={k}><th>{k}</th><td><code>{v}</code></td></tr>
          ))}
        </tbody>
      </table>
      <p className="tag" style={{ marginTop: 12 }}>
        PROOF-APP-MARKER: faunahub-journal-proof
      </p>
    </>
  );
}
