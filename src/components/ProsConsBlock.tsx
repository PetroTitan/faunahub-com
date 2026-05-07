interface ProsConsBlockProps {
  pros: string[];
  cons: string[];
  prosLabel?: string;
  consLabel?: string;
}

export default function ProsConsBlock({
  pros,
  cons,
  prosLabel = "Pros",
  consLabel = "Cons",
}: ProsConsBlockProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-[#f0faf4] border border-[#c6e8d4] rounded-xl p-4">
        <h3 className="text-sm font-semibold text-[#1E5C38] uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <span aria-hidden="true">✓</span> {prosLabel}
        </h3>
        <ul className="space-y-2">
          {pros.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#3E4F60]">
              <span className="text-[#2A7A4B] flex-shrink-0 mt-0.5" aria-hidden="true">
                ●
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#fef9f0] border border-[#f8d99a] rounded-xl p-4">
        <h3 className="text-sm font-semibold text-[#92550a] uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <span aria-hidden="true">✗</span> {consLabel}
        </h3>
        <ul className="space-y-2">
          {cons.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#3E4F60]">
              <span className="text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                ●
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
