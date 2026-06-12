import type { Metadata } from "next";
import { getAllDocs } from "@/lib/docs";
import { DocViewer } from "@/components/doc-viewer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tài nguyên - Learn Harness Engineering",
  description: "Bộ thư viện tài nguyên, tệp cấu hình mẫu và tài liệu tham khảo thiết lập Harness.",
  path: "/tai-nguyen",
});

interface TaiNguyenPageProps {
  searchParams: Promise<{ tab?: string; item?: string }>;
}

export default async function TaiNguyenPage({ searchParams }: TaiNguyenPageProps) {
  const { tab, item } = await searchParams;
  const docs = getAllDocs().filter((subject) => subject.id === "library");

  return (
    <DocViewer
      initialTabs={docs}
      defaultTabId="library"
      initialTabId={tab}
      initialItemId={item}
    />
  );
}
