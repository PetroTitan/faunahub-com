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
      <div className="bg-[#EFF4E0] border border-[#CFE0A8] rounded-xl p-4">
        <h3 className="text-sm font-semibold text-[#0F5A3A] uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <span aria-hidden="true">✓</span> {prosLabel}
        </h3>
        <ul className="space-y-2">
          {pros.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#2C3A2F]">
              <span className="text-[#063F2A] flex-shrink-0 mt-0.5" aria-hidden="true">
                ●
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#fef9f0] border border-[#f8d99a] rounded-xl p-4">
        <h3 className="text-sm font-semibold text-[#5E4A0F] uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <span aria-hidden="true">✗</span> {consLabel}
        </h3>
        <ul className="space-y-2">
          {cons.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#2C3A2F]">
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
