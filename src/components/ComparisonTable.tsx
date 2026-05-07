interface ComparisonRow {
  attribute: string;
  a: string;
  b: string;
}

interface ComparisonTableProps {
  labelA: string;
  labelB: string;
  rows: ComparisonRow[];
  caption?: string;
}

export default function ComparisonTable({
  labelA,
  labelB,
  rows,
  caption,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#E4E8ED] shadow-sm">
      <table className="w-full text-sm">
        {caption && (
          <caption className="text-xs text-[#9CA5AF] text-left px-4 pt-3 pb-1">
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            <th
              scope="col"
              className="w-1/3 bg-[#f4f4f1] text-[#1C2B3A] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#E4E8ED]"
            >
              Attribute
            </th>
            <th
              scope="col"
              className="w-1/3 bg-[#f0faf4] text-[#2A7A4B] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#E4E8ED]"
            >
              {labelA}
            </th>
            <th
              scope="col"
              className="w-1/3 bg-[#EEF4FB] text-[#3B72A8] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#E4E8ED]"
            >
              {labelB}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}
            >
              <td className="px-4 py-3 font-medium text-[#1C2B3A] border-r border-[#EEF1F4]">
                {row.attribute}
              </td>
              <td className="px-4 py-3 text-[#3E4F60] border-r border-[#EEF1F4]">
                {row.a}
              </td>
              <td className="px-4 py-3 text-[#3E4F60]">{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
