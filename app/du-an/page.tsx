import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllDocs } from "@/lib/docs";
import { DocViewer } from "@/components/doc-viewer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Dự án thực hành - Learn Harness Engineering",
  description: "Các dự án thực hành Harness Engineering từ cơ bản đến nâng cao.",
  path: "/du-an",
});

export default function DuAnPage() {
  const docs = getAllDocs().filter(tab => tab.id === "projects");
  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-foreground flex items-center justify-center">Đang tải tài liệu...</div>}>
      <DocViewer initialTabs={docs} defaultTabId="projects" />
    </Suspense>
  );
}
