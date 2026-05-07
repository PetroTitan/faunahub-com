import Link from "next/link";

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  href: string;
  category?: string;
  date?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  href,
  category,
  date,
}: ArticleCardProps) {
  return (
    <article className="card p-5 flex flex-col gap-2 hover:shadow-md hover:border-[#c6e8d4] transition-all duration-150 group">
      {category && <span className="tag self-start">{category}</span>}
      <h3 className="text-base font-semibold text-[#1C2B3A] leading-snug">
        <Link
          href={href}
          className="hover:text-[#2A7A4B] hover:no-underline transition-colors"
        >
          {title}
        </Link>
      </h3>
      <p className="text-sm text-[#6B7684] leading-relaxed flex-1">{excerpt}</p>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EEF1F4]">
        {date && <span className="text-xs text-[#9CA5AF]">{date}</span>}
        <Link
          href={href}
          className="text-xs font-medium text-[#2A7A4B] hover:text-[#1E5C38] hover:no-underline ml-auto"
          aria-label={`Read article: ${title}`}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
