"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Layers3, Sun, Moon, Menu, X } from "lucide-react";
import { navItems } from "@/lib/navigation";


interface HeaderProps {
  currentPath?: string;
  showSidebarToggle?: boolean;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

export function Header({ showSidebarToggle, isSidebarOpen, onToggleSidebar }: HeaderProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between rounded-[20px] border border-border bg-brand-surface/92 px-4 shadow-[0_18px_60px_rgb(31_20_16/0.08)] backdrop-blur md:px-6">
        
        {/* Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {showSidebarToggle && (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-brand-primary/70 hover:text-brand-primary transition rounded-md hover:bg-brand-neutral/40"
              aria-label="Toggle sidebar"
            >
              {isSidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          )}

          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-[10px] bg-brand-primary text-brand-surface">
              <Layers3 className="size-4" strokeWidth={1.8} />
            </span>
            <span className="font-display text-2xl leading-none tracking-[-0.02em] font-bold text-brand-primary hidden sm:inline-block">
              Harness
            </span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md transition ${
                    isActive
                      ? "text-primary bg-brand-neutral/40"
                      : "text-brand-primary/70 hover:text-brand-primary hover:bg-brand-neutral/20"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Actions - Dark Mode only */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-brand-primary/70 hover:text-brand-primary transition rounded-md hover:bg-brand-neutral/40"
              title="Đổi giao diện"
            >
              {theme === "dark" ? <Sun className="size-5 text-amber-400" /> : <Moon className="size-5" />}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
