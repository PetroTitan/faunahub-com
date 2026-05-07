interface LastUpdatedProps {
  date: string;
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <p className="text-xs text-[#9CA5AF] flex items-center gap-1.5">
      <span aria-hidden="true">🗓</span>
      <span>
        Last updated:{" "}
        <time dateTime={date}>{date}</time>
      </span>
    </p>
  );
}
