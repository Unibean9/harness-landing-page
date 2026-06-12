import type { Metadata } from "next";
import { getAllDocs } from "@/lib/docs";
import { DocViewer } from "@/components/doc-viewer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tài liệu kỹ thuật - Learn Harness Engineering",
  description:
    "Tài liệu kỹ thuật, bài giảng và dự án thực hành chi tiết về Harness Engineering cho AI coding agent.",
  path: "/docs",
});

interface DocsPageProps {
  searchParams: Promise<{ tab?: string; item?: string }>;
}

export default async function DocsPage({ searchParams }: DocsPageProps) {
  const { tab, item } = await searchParams;
  const docs = getAllDocs();

  return <DocViewer initialTabs={docs} initialTabId={tab} initialItemId={item} />;
}
