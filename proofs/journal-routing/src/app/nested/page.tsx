import Diagnostics from "../diagnostics";
import Nav from "../nav";

export default function Nested() {
  return (
    <main>
      <p className="tag">Nested proof route</p>
      <h1>Nested route reached</h1>
      <Nav to="/" label="Client-navigate back to the proof hub" />
      <Diagnostics expected="/__journal-proof/nested" />
    </main>
  );
}
