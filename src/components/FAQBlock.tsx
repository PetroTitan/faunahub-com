interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQBlock({
  items,
  title = "Frequently Asked Questions",
}: FAQBlockProps) {
  return (
    <section aria-labelledby="faq-heading" className="py-4">
      <h2 id="faq-heading" className="text-2xl font-bold text-[#17211B] mb-6">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="card group open:shadow-sm"
          >
            <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-base font-semibold text-[#17211B] hover:text-[#063F2A] transition-colors list-none select-none">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="ml-3 text-[#8A958E] group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
              >
                ▾
              </span>
            </summary>
            <div className="px-5 pb-4 pt-1 text-sm text-[#2C3A2F] leading-relaxed border-t border-[#EAF0EA] mt-0">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
