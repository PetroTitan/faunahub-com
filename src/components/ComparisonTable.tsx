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
    <div className="overflow-x-auto rounded-xl border border-[#DDE6DD] shadow-sm">
      <table className="w-full text-sm">
        {caption && (
          <caption className="text-xs text-[#8A958E] text-left px-4 pt-3 pb-1">
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            <th
              scope="col"
              className="w-1/3 bg-[#EFF1EB] text-[#17211B] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#DDE6DD]"
            >
              Attribute
            </th>
            <th
              scope="col"
              className="w-1/3 bg-[#EFF4E0] text-[#063F2A] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#DDE6DD]"
            >
              {labelA}
            </th>
            <th
              scope="col"
              className="w-1/3 bg-[#E6F0FA] text-[#075FA8] text-xs uppercase tracking-wider font-semibold px-4 py-3 border-b border-[#DDE6DD]"
            >
              {labelB}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8F3]"}
            >
              <td className="px-4 py-3 font-medium text-[#17211B] border-r border-[#EAF0EA]">
                {row.attribute}
              </td>
              <td className="px-4 py-3 text-[#2C3A2F] border-r border-[#EAF0EA]">
                {row.a}
              </td>
              <td className="px-4 py-3 text-[#2C3A2F]">{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
