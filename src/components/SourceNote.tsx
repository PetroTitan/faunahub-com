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
        className="border border-[#E4E8ED] rounded-xl p-4 bg-[#f4f4f1] text-sm text-[#6B7684]"
      >
        <p className="font-medium text-[#3E4F60] mb-1">Sources</p>
        <p>{PENDING_NOTE}</p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Sources"
      className="border border-[#E4E8ED] rounded-xl p-4 bg-[#f4f4f1] text-sm text-[#6B7684]"
    >
      <p className="font-medium text-[#3E4F60] mb-2">Sources</p>
      <ul className="space-y-1 list-none">
        {sources.map((source, i) => (
          <li key={i} className="text-sm text-[#6B7684]">
            {source}
          </li>
        ))}
      </ul>
    </aside>
  );
}
