import type { ReactNode } from "react";
import DisclaimerBlock from "./DisclaimerBlock";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import LastUpdated from "./LastUpdated";

interface SimpleCalculatorLayoutProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  lastUpdated: string;
  children: ReactNode;
  disclaimer?: string;
}

export default function SimpleCalculatorLayout({
  title,
  description,
  breadcrumbs,
  lastUpdated,
  children,
  disclaimer,
}: SimpleCalculatorLayoutProps) {
  return (
    <main id="main-content">
      <div className="container-content py-6">
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-2xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
              {description}
            </p>
          </header>

          <div className="space-y-6">
            {children}
          </div>

          <div className="mt-8 space-y-4">
            <DisclaimerBlock type="tool" custom={disclaimer} />
            <LastUpdated date={lastUpdated} />
          </div>
        </div>
      </div>
    </main>
  );
}
