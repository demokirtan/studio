
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type BreadcrumbProps = {
  items: {
    label: React.ReactNode;
    href?: string;
  }[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex items-center space-x-1.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-1.5">
            {index > 0 && (
              <ChevronRight className="h-4 w-4" />
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
