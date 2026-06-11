import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllDocs } from "@/lib/docs";
import { DocViewer } from "@/components/doc-viewer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tài nguyên - Learn Harness Engineering",
  description: "Bộ thư viện tài nguyên, tệp cấu hình mẫu và tài liệu tham khảo thiết lập Harness.",
  path: "/tai-nguyen",
});

export default function TaiNguyenPage() {
  const docs = getAllDocs().filter(tab => tab.id === "library");
  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-foreground flex items-center justify-center">Đang tải tài liệu...</div>}>
      <DocViewer initialTabs={docs} defaultTabId="library" />
    </Suspense>
  );
}
