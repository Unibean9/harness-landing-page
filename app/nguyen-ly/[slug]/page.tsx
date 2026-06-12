import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPrincipleBySlug, getPrinciplePager, principles } from "@/lib/principles-data";
import { PrinciplesDocShell } from "../components/principles-doc-shell";
import { PrinciplesArticle } from "../components/principles-article";
import { Principle01Article } from "../components/principle-01-article";
import { Principle02Article } from "../components/principle-02-article";
import { Principle03Article } from "../components/principle-03-article";
import { Principle04Article } from "../components/principle-04-article";
import { Principle05Article } from "../components/principle-05-article";
import { Principle06Article } from "../components/principle-06-article";
import { Principle07Article } from "../components/principle-07-article";
import { Principle08Article } from "../components/principle-08-article";
import { Principle09Article } from "../components/principle-09-article";
import { Principle10Article } from "../components/principle-10-article";
import { Principle11Article } from "../components/principle-11-article";
import { Principle12Article } from "../components/principle-12-article";
import { Principle13Article } from "../components/principle-13-article";
import type { PrinciplesTocItem } from "../components/principles-toc";
import { principle01Toc } from "@/lib/principles/principle-01-content";
import { principle02Toc } from "@/lib/principles/principle-02-content";
import { principle03Toc } from "@/lib/principles/principle-03-content";
import { principle04Toc } from "@/lib/principles/principle-04-content";
import { principle05Toc } from "@/lib/principles/principle-05-content";
import { principle06Toc } from "@/lib/principles/principle-06-content";
import { principle07Toc } from "@/lib/principles/principle-07-content";
import { principle08Toc } from "@/lib/principles/principle-08-content";
import { principle09Toc } from "@/lib/principles/principle-09-content";
import { principle10Toc } from "@/lib/principles/principle-10-content";
import { principle11Toc } from "@/lib/principles/principle-11-content";
import { principle12Toc } from "@/lib/principles/principle-12-content";
import { principle13Toc } from "@/lib/principles/principle-13-content";

interface PrincipleSlugPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return principles.map((principle) => ({ slug: principle.slug }));
}

function buildPrincipleToc(slug: string): PrinciplesTocItem[] {
  if (slug === "harness-first") {
    return principle01Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "harnessability") {
    return principle02Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "event-channel-agnostic") {
    return principle03Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "production-controllability") {
    return principle04Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "guide-and-sensor") {
    return principle05Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "spec-as-source") {
    return principle06Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "human-as-control-point") {
    return principle07Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "application-owned-control-flow") {
    return principle08Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "small-focused-agents") {
    return principle09Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "context-ownership") {
    return principle10Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "structured-output-first") {
    return principle11Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "traceable-state") {
    return principle12Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  if (slug === "error-as-feedback") {
    return principle13Toc.map((item) => ({ id: item.id, label: item.label }));
  }

  const principle = getPrincipleBySlug(slug);
  if (!principle) return [];

  const items: PrinciplesTocItem[] = [
    { id: "principle-title", label: "Tiêu đề" },
    { id: "principle-quote", label: "Trích dẫn" },
    { id: "principle-body", label: "Nội dung" },
  ];

  if (principle.callout) {
    items.push({ id: "principle-callout", label: principle.callout.title });
  }

  return items;
}

export async function generateMetadata({ params }: PrincipleSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const principle = getPrincipleBySlug(slug);
  if (!principle) {
    return buildPageMetadata({
      title: "Không tìm thấy",
      path: `/nguyen-ly/${slug}`,
      noindex: true,
    });
  }

  return buildPageMetadata({
    title: `${String(principle.id).padStart(2, "0")}. ${principle.title}`,
    description: principle.quote,
    path: `/nguyen-ly/${slug}`,
  });
}

export default async function PrincipleSlugPage({ params }: PrincipleSlugPageProps) {
  const { slug } = await params;

  const principle = getPrincipleBySlug(slug);
  if (!principle) notFound();

  const article =
    slug === "harness-first" ? (
      <Principle01Article />
    ) : slug === "harnessability" ? (
      <Principle02Article />
    ) : slug === "event-channel-agnostic" ? (
      <Principle03Article />
    ) : slug === "production-controllability" ? (
      <Principle04Article />
    ) : slug === "guide-and-sensor" ? (
      <Principle05Article />
    ) : slug === "spec-as-source" ? (
      <Principle06Article />
    ) : slug === "human-as-control-point" ? (
      <Principle07Article />
    ) : slug === "application-owned-control-flow" ? (
      <Principle08Article />
    ) : slug === "small-focused-agents" ? (
      <Principle09Article />
    ) : slug === "context-ownership" ? (
      <Principle10Article />
    ) : slug === "structured-output-first" ? (
      <Principle11Article />
    ) : slug === "traceable-state" ? (
      <Principle12Article />
    ) : slug === "error-as-feedback" ? (
      <Principle13Article />
    ) : (
      <PrinciplesArticle principle={principle} />
    );

  return (
    <PrinciplesDocShell
      activeSlug={slug}
      tocItems={buildPrincipleToc(slug)}
      pager={getPrinciplePager(slug)}
    >
      {article}
    </PrinciplesDocShell>
  );
}
