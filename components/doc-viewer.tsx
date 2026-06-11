"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Search,
  X,
  ChevronRight,
} from "lucide-react";
import { DocTab, DocItem } from "@/lib/docs";
import { markdownToHtml } from "@/lib/markdown";
import { Header } from "@/components/layout/header";

interface DocViewerProps {
  initialTabs: DocTab[];
  defaultTabId?: string;
}

export function DocViewer({ initialTabs, defaultTabId }: DocViewerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTabId = searchParams.get("tab") || defaultTabId || "lectures";
  const [activeItemIds, setActiveItemIds] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    initialTabs.forEach((tab) => {
      if (tab.items.length > 0) {
        initial[tab.id] = tab.items[0].id;
      }
    });
    return initial;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeHeading, setActiveHeading] = useState<string>("");


  const searchInputRef = useRef<HTMLInputElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Handle Ctrl+K shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus search input when open
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchOpen]);

  // Find active tab data
  const activeTab = useMemo(() => {
    return initialTabs.find((t) => t.id === activeTabId) || initialTabs[0];
  }, [initialTabs, activeTabId]);

  // Get active item id for active tab
  const activeItemId = searchParams.get("item") || activeItemIds[activeTabId] || activeTab.items[0]?.id;

  // Find active item data
  const activeItem = useMemo(() => {
    return activeTab.items.find((item) => item.id === activeItemId) || activeTab.items[0];
  }, [activeTab, activeItemId]);

  // Parse HTML content
  const htmlContent = useMemo(() => {
    if (!activeItem) return "";
    return markdownToHtml(activeItem.content);
  }, [activeItem]);

  // Dynamic headings parser for table of contents
  const headings = useMemo(() => {
    if (!activeItem) return [];
    const extracted: { id: string; text: string; depth: number }[] = [];
    const lines = activeItem.content.split("\n");
    
    const slugify = (text: string) => {
      return text.toLowerCase()
        .replace(/đ/g, "d")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
    };

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ") || trimmed.startsWith("### ")) {
        const depth = trimmed.startsWith("## ") ? 2 : 3;
        const rawText = trimmed.startsWith("## ") ? trimmed.slice(3) : trimmed.slice(4);
        const text = rawText.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
        const id = slugify(text);
        extracted.push({ id, text, depth });
      }
    });
    return extracted;
  }, [activeItem]);

  // Track active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!headings.length) return;
      const elements = headings.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
      
      let currentActive = "";
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          currentActive = el.id;
        } else {
          break;
        }
      }
      
      if (currentActive) {
        setActiveHeading(currentActive);
      } else if (headings.length > 0) {
        setActiveHeading(headings[0].id);
      }
    };

    const scrollContainer = window;
    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Group items by category for sidebar list (specifically for Library)
  const groupedSidebarItems = useMemo(() => {
    const groups: Record<string, DocItem[]> = {};
    const uncategorized: DocItem[] = [];

    activeTab.items.forEach((item) => {
      if (item.category) {
        if (!groups[item.category]) {
          groups[item.category] = [];
        }
        groups[item.category].push(item);
      } else {
        uncategorized.push(item);
      }
    });

    return { uncategorized, groups };
  }, [activeTab]);

  // Global search implementation
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const results: { tabId: string; tabLabel: string; item: DocItem; snippet: string }[] = [];
    const queryLower = searchQuery.toLowerCase();

    initialTabs.forEach((tab) => {
      tab.items.forEach((item) => {
        const titleMatch = item.title.toLowerCase().includes(queryLower);
        const contentMatch = item.content.toLowerCase().includes(queryLower);

        if (titleMatch || contentMatch) {
          // Extract a small snippet around the match
          let snippet = "";
          if (contentMatch) {
            const index = item.content.toLowerCase().indexOf(queryLower);
            const start = Math.max(0, index - 30);
            const end = Math.min(item.content.length, index + queryLower.length + 50);
            snippet = "..." + item.content.slice(start, end).replace(/\n/g, " ").trim() + "...";
          } else {
            snippet = item.content.slice(0, 80).replace(/\n/g, " ").trim() + "...";
          }

          results.push({
            tabId: tab.id,
            tabLabel: tab.label,
            item,
            snippet,
          });
        }
      });
    });

    return results.slice(0, 8); // limit to 8 results
  }, [initialTabs, searchQuery]);

  const selectItem = (tabId: string, itemId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    params.set("item", itemId);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    setActiveItemIds((prev) => ({ ...prev, [tabId]: itemId }));
    setIsMobileSidebarOpen(false);
    
    // Scroll content to top
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchSelect = (tabId: string, itemId: string) => {
    selectItem(tabId, itemId);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  // Scroll to heading smoothly
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveHeading(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Header
        showSidebarToggle={true}
        isSidebarOpen={isMobileSidebarOpen}
        onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      {/* 2. Main Page Layout (Sidebar + Content) - Shifted down to avoid overlapping floating header */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto flex pt-28 lg:pt-32">
        
        {/* Desktop Sidebar (Left) */}
        <aside className="w-64 border-r border-border shrink-0 hidden lg:block overflow-y-auto max-h-[calc(100vh-10rem)] sticky top-28 bg-background">
          <div className="p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-4">
              {activeTab.label}
            </h2>
            <SidebarContent
              grouped={groupedSidebarItems}
              activeItemId={activeItemId}
              onSelect={(itemId) => selectItem(activeTabId, itemId)}
            />
          </div>
        </aside>

        {/* Mobile Sidebar overlay */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden bg-background/80 backdrop-blur-sm">
            <div className="relative w-full max-w-xs bg-background border-r border-border p-6 shadow-xl flex flex-col h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-brand-secondary">
                  {activeTab.label}
                </h2>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-brand-neutral/20"
                >
                  <X className="size-5" />
                </button>
              </div>
              <SidebarContent
                grouped={groupedSidebarItems}
                activeItemId={activeItemId}
                onSelect={(itemId) => selectItem(activeTabId, itemId)}
              />
            </div>
            <div className="flex-1" onClick={() => setIsMobileSidebarOpen(false)} />
          </div>
        )}

        {/* Center Content & Right Sidebar */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-[1fr_240px] px-4 sm:px-6 lg:px-8 py-8 gap-8 min-w-0">
          
          {/* Main Markdown Article */}
          <article ref={mainContentRef} className="min-w-0 max-w-3xl pb-16">
            {activeItem ? (
              <>
                <div 
                  className="prose dark:prose-invert max-w-none text-foreground"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </>
            ) : (
              <div className="py-20 text-center text-muted-foreground">
                Không tìm thấy nội dung tài liệu.
              </div>
            )}
          </article>

          {/* Right Sidebar: Table of Contents */}
          <aside className="hidden xl:block overflow-y-auto max-h-[calc(100vh-8rem)] sticky top-24 shrink-0">
            {headings.length > 0 && (
              <div className="border-l border-border pl-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                  On this page
                </h3>
                <nav className="flex flex-col gap-2 text-xs">
                  {headings.map((heading) => {
                    const isSelected = activeHeading === heading.id;
                    return (
                      <button
                        key={heading.id}
                        onClick={() => scrollToHeading(heading.id)}
                        className={`text-left hover:text-foreground transition leading-relaxed block ${
                          heading.depth === 3 ? "pl-3 text-muted-foreground" : "font-medium"
                        } ${isSelected ? "text-primary font-bold" : "text-muted-foreground"}`}
                      >
                        {heading.text}
                      </button>
                    );
                  })}
                </nav>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* 3. Global Search Modal (Ctrl+K) */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-background/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg overflow-hidden rounded-[16px] border border-border bg-card shadow-2xl transition-all">
            {/* Search Input bar */}
            <div className="flex items-center gap-3 px-4 border-b border-border bg-brand-neutral/20">
              <Search className="size-5 text-brand-secondary shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Tìm kiếm tài liệu (ví dụ: ACI, memory...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 border-0 bg-transparent text-sm text-foreground focus:outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-brand-neutral/20 shrink-0"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Results output */}
            <div className="max-h-96 overflow-y-auto p-2">
              {searchQuery.trim() === "" ? (
                <div className="p-6 text-center text-xs text-muted-foreground">
                  Nhập từ khóa hoặc cụm từ để tìm kiếm trên tất cả bài giảng và tài nguyên.
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map(({ tabId, tabLabel, item, snippet }) => (
                    <button
                      key={`${tabId}-${item.id}`}
                      onClick={() => handleSearchSelect(tabId, item.id)}
                      className="w-full text-left p-3 rounded-md hover:bg-brand-neutral/40 transition flex flex-col gap-1 border border-transparent hover:border-border"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-foreground">{item.title}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-secondary bg-brand-neutral px-2 py-0.5 rounded-full">
                          {tabLabel}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">{snippet}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-sm text-muted-foreground">
                  Không tìm thấy kết quả nào trùng khớp cho &ldquo;{searchQuery}&rdquo;.
                </div>
              )}
            </div>

            {/* Footer tips */}
            <div className="flex items-center justify-between border-t border-border bg-brand-neutral/10 px-4 py-2 text-[10px] text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="bg-brand-neutral px-1.5 py-0.5 rounded border border-border">ESC</span>
                <span>để đóng</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="bg-brand-neutral px-1.5 py-0.5 rounded border border-border">⏎</span>
                <span>để chọn</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Sidebar render helper */
interface SidebarContentProps {
  grouped: {
    uncategorized: DocItem[];
    groups: Record<string, DocItem[]>;
  };
  activeItemId: string;
  onSelect: (itemId: string) => void;
}

function SidebarContent({ grouped, activeItemId, onSelect }: SidebarContentProps) {
  return (
    <div className="space-y-6">
      {/* Uncategorized items at the top (like Welcome) */}
      {grouped.uncategorized.length > 0 && (
        <ul className="space-y-1">
          {grouped.uncategorized.map((item) => {
            const isSelected = activeItemId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-[12px] transition duration-150 flex items-center justify-between ${
                    isSelected
                      ? "bg-brand-neutral/40 text-primary border-r-2 border-primary pl-3"
                      : "text-brand-primary/70 hover:text-brand-primary hover:bg-brand-neutral/20"
                  }`}
                >
                  <span className="truncate">{item.title}</span>
                  {isSelected && <ChevronRight className="size-3.5 shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* Categorized items */}
      {Object.entries(grouped.groups).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <h3 className="text-xs font-semibold text-brand-secondary/80 pl-3">
            {category}
          </h3>
          <ul className="space-y-1">
            {items.map((item) => {
              const isSelected = activeItemId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onSelect(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-medium rounded-[12px] transition duration-150 flex items-center justify-between ${
                      isSelected
                        ? "bg-brand-neutral/40 text-primary border-r-2 border-primary pl-3"
                        : "text-brand-primary/70 hover:text-brand-primary hover:bg-brand-neutral/20"
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    {isSelected && <ChevronRight className="size-3.5 shrink-0" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
