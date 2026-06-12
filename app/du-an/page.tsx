import type { Metadata } from "next";
import { getAllDocs } from "@/lib/docs";
import { DocViewer } from "@/components/doc-viewer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Dự án thực hành - Learn Harness Engineering",
  description: "Các dự án thực hành Harness Engineering từ cơ bản đến nâng cao.",
  path: "/du-an",
});

interface DuAnPageProps {
  searchParams: Promise<{ tab?: string; item?: string }>;
}

export default async function DuAnPage({ searchParams }: DuAnPageProps) {
  const { tab, item } = await searchParams;
  const docs = getAllDocs().filter((subject) => subject.id === "projects");

  return (
    <DocViewer
      initialTabs={docs}
      defaultTabId="projects"
      initialTabId={tab}
      initialItemId={item}
    />
  );
}
