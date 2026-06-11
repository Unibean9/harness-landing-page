import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllDocs } from "@/lib/docs";
import { DocViewer } from "@/components/doc-viewer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Khái niệm & Bài giảng - Learn Harness Engineering",
  description:
    "Tìm hiểu chi tiết các khái niệm cốt lõi và bài giảng chuyên sâu về Harness Engineering dành cho AI coding agent.",
  path: "/khai-niem",
});

export default function KhaiNiemPage() {
  const docs = getAllDocs()
    .filter(tab => tab.id === "lectures")
    .map(tab => ({
      ...tab,
      items: tab.items.filter(item => !item.id.startsWith("lecture-")),
    }));
  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-foreground flex items-center justify-center">Đang tải tài liệu...</div>}>
      <DocViewer initialTabs={docs} defaultTabId="lectures" />
    </Suspense>
  );
}

