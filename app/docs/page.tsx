import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllDocs } from "@/lib/docs";
import { DocViewer } from "@/components/doc-viewer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tài liệu kỹ thuật - Learn Harness Engineering",
  description:
    "Tài liệu kỹ thuật, bài giảng và dự án thực hành chi tiết về Harness Engineering cho AI coding agent.",
  path: "/docs",
});

export default function DocsPage() {
  const docs = getAllDocs();
  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-foreground flex items-center justify-center">Đang tải tài liệu...</div>}>
      <DocViewer initialTabs={docs} />
    </Suspense>
  );
}
