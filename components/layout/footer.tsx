import Link from "next/link";
import { Route } from "lucide-react";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="px-4 pb-8 mt-auto pt-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[20px] bg-brand-surface p-5 text-sm text-brand-primary/70 md:flex-row md:items-center md:justify-between border border-border">
        <div className="flex items-center gap-3">
          <Route className="size-4 text-brand-tertiary" strokeWidth={1.8} />
          <span className="font-medium">Learn Harness Engineering, tài liệu tiếng Việt về kỹ thuật AI agent.</span>
        </div>
        <div className="flex flex-wrap gap-4 font-semibold">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-primary transition">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
