interface SourceNoteProps {
  sources?: string[];
  pending?: boolean;
}

const PENDING_NOTE =
  "Source review pending. This page is intended as an educational draft and should be verified against authoritative references before final publication.";

export default function SourceNote({ sources, pending = false }: SourceNoteProps) {
  if (pending || !sources?.length) {
    return (
      <aside
        role="note"
        aria-label="Source status"
        className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
      >
        <p className="font-medium text-[#2C3A2F] mb-1">Sources</p>
        <p>{PENDING_NOTE}</p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Sources"
      className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#5E6B63]"
    >
      <p className="font-medium text-[#2C3A2F] mb-2">Sources</p>
      <ul className="space-y-1 list-none">
        {sources.map((source, i) => (
          <li key={i} className="text-sm text-[#5E6B63]">
            {source}
          </li>
        ))}
      </ul>
    </aside>
  );
}
