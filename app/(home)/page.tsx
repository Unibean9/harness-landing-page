import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HarnessMotion } from "@/components/harness-motion";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { HomeJsonLd } from "@/lib/seo/home-json-ld";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { DefinitionSection } from "./components/definition-section";
import { LevelsSection } from "./components/levels-section";
import { ComparisonSection } from "./components/comparison-section";
import { FinalCtaSection } from "./components/final-cta-section";

export const metadata: Metadata = buildPageMetadata({
  title: "Learn Harness Engineering - Làm chủ AI Coding Agent",
  description:
    "Thư viện kiến thức tiếng Việt về Harness Engineering: Thiết lập môi trường, quản lý context, state và tự động xác minh cho các AI Coding Agent.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background text-foreground">
      <HomeJsonLd />
      <Header currentPath="/" />
      <HarnessMotion />

      <main id="main-content" className="min-w-0 w-full max-w-full flex-1 overflow-x-clip">
        <HeroSection />
        <DefinitionSection />
        <ProblemSection />
        <LevelsSection />
        <ComparisonSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
