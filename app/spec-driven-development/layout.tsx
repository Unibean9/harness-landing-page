import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PrinciplesChromeRoot } from "@/app/nguyen-ly/components/principles-chrome-root";
import { PrinciplesMotion } from "@/app/nguyen-ly/components/principles-motion";

export default function SpecDrivenDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrinciplesChromeRoot>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header currentPath="/spec-driven-development" />
        <main id="main-content" className="flex-1 w-full max-w-full">
          <PrinciplesMotion />
          {children}
        </main>
        <Footer />
      </div>
    </PrinciplesChromeRoot>
  );
}
