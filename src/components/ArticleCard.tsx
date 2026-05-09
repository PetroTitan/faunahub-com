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
    <article className="card p-5 flex flex-col gap-2 hover:shadow-md hover:border-[#CFE0A8] transition-all duration-150 group">
      {category && <span className="tag self-start">{category}</span>}
      <h3 className="text-base font-semibold text-[#17211B] leading-snug">
        <Link
          href={href}
          className="hover:text-[#063F2A] hover:no-underline transition-colors"
        >
          {title}
        </Link>
      </h3>
      <p className="text-sm text-[#5E6B63] leading-relaxed flex-1">{excerpt}</p>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EAF0EA]">
        {date && <span className="text-xs text-[#8A958E]">{date}</span>}
        <Link
          href={href}
          className="text-xs font-medium text-[#063F2A] hover:text-[#0F5A3A] hover:no-underline ml-auto"
          aria-label={`Read article: ${title}`}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
