import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PrinciplesTocItem } from "@/app/nguyen-ly/components/principles-toc";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  getSddBySlug,
  getSddPager,
  sddPrinciples,
} from "@/lib/sdd-data";
import { Sdd01Article } from "../components/sdd-01-article";
import { Sdd02Article } from "../components/sdd-02-article";
import { Sdd03Article } from "../components/sdd-03-article";
import { Sdd04Article } from "../components/sdd-04-article";
import { Sdd05Article } from "../components/sdd-05-article";
import { SddArticle } from "../components/sdd-article";
import { SddDocShell } from "../components/sdd-doc-shell";
import { sdd01Toc } from "@/lib/sdd/sdd-01-content";
import { sdd02Toc } from "@/lib/sdd/sdd-02-content";
import { sdd03Toc } from "@/lib/sdd/sdd-03-content";
import { sdd04Toc } from "@/lib/sdd/sdd-04-content";
import { sdd05Toc } from "@/lib/sdd/sdd-05-content";

interface SddSlugPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sddPrinciples.map((principle) => ({ slug: principle.slug }));
}

function buildSddToc(slug: string): PrinciplesTocItem[] {
  if (slug === "executable-specifications") {
    return sdd01Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "constitutional-governance") {
    return sdd02Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "transformation-automation") {
    return sdd03Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "living-documentation") {
    return sdd04Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "continuous-validation") {
    return sdd05Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  const principle = getSddBySlug(slug);
  if (!principle) return [];

  return [
    { id: "sdd-title", label: "Tiêu đề" },
    { id: "sdd-quote", label: "Trích dẫn" },
    { id: "sdd-body", label: "Nội dung" },
  ];
}

export async function generateMetadata({ params }: SddSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const principle = getSddBySlug(slug);
  if (!principle) {
    return buildPageMetadata({
      title: "Không tìm thấy",
      path: `/spec-driven-development/${slug}`,
      noindex: true,
    });
  }

  return buildPageMetadata({
    title: `${String(principle.id).padStart(2, "0")}. ${principle.title}`,
    description: principle.quote,
    path: `/spec-driven-development/${slug}`,
  });
}

export default async function SddSlugPage({ params }: SddSlugPageProps) {
  const { slug } = await params;

  const principle = getSddBySlug(slug);
  if (!principle) notFound();

  const article =
    slug === "executable-specifications" ? (
      <Sdd01Article />
    ) : slug === "constitutional-governance" ? (
      <Sdd02Article />
    ) : slug === "transformation-automation" ? (
      <Sdd03Article />
    ) : slug === "living-documentation" ? (
      <Sdd04Article />
    ) : slug === "continuous-validation" ? (
      <Sdd05Article />
    ) : (
      <SddArticle principle={principle} />
    );

  return (
    <SddDocShell
      activeSlug={slug}
      tocItems={buildSddToc(slug)}
      pager={getSddPager(slug)}
    >
      {article}
    </SddDocShell>
  );
}
