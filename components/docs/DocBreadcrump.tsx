import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface DocBreadcrumpProps {
  items: { label: string; href?: string }[];
}

export default function DocBreadcrump({ items }: DocBreadcrumpProps) {
  return (
    <nav className="flex items-center text-sm mb-8" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-semibold">{item.label}</span>
          )}
          {idx < items.length - 1 && (
            <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
          )}
        </span>
      ))}
    </nav>
  );
}
