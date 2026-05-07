import CategoryCard, { CategoryCardProps } from "./CategoryCard";

interface HubGridProps {
  title?: string;
  subtitle?: string;
  items: CategoryCardProps[];
  columns?: 2 | 3 | 4;
}

export default function HubGrid({
  title,
  subtitle,
  items,
  columns = 3,
}: HubGridProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="py-8">
      {title && (
        <div className="mb-6">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className={`grid grid-cols-1 ${colClass} gap-4`}>
        {items.map((item) => (
          <CategoryCard key={item.href} {...item} />
        ))}
      </div>
    </section>
  );
}
