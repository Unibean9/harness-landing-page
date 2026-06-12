import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PrinciplesChromeRoot } from "./components/principles-chrome-root";
import { PrinciplesMotion } from "./components/principles-motion";

export default function NguyenLyLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrinciplesChromeRoot>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header currentPath="/nguyen-ly" />
        <main id="main-content" className="flex-1 w-full max-w-full">
          <PrinciplesMotion />
          {children}
        </main>
        <Footer />
      </div>
    </PrinciplesChromeRoot>
  );
}
