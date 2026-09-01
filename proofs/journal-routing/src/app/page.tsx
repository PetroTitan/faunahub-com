import Diagnostics from "./diagnostics";
import Nav from "./nav";

export default function ProofHome() {
  return (
    <main>
      <p className="tag">Disposable routing proof — not FaunaHub Journal</p>
      <h1>FaunaHub Journal Routing Proof</h1>
      <p>
        This app exists to measure how Vercel routes a mounted prefix to a second
        project. It contains no articles and no animal content.
      </p>
      <Nav to="/nested" label="Client-navigate to /nested" />
      <p>
        <a href="/api/proof">/api/proof</a> · <a href="/feed.xml">/feed.xml</a> ·{" "}
        <a href="/search-index.json">/search-index.json</a>
      </p>
      <Diagnostics expected="/__journal-proof" />
    </main>
  );
}
