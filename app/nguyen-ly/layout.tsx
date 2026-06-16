import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PrinciplesChromeRoot } from "./components/principles-chrome-root";
import { PrinciplesMotion } from "./components/principles-motion";

export default function NguyenLyLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrinciplesChromeRoot>
      <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background text-foreground">
        <Header currentPath="/nguyen-ly" />
        <main id="main-content" className="flex-1 w-full min-w-0 max-w-full overflow-x-clip">
          <PrinciplesMotion />
          {children}
        </main>
        <Footer />
      </div>
    </PrinciplesChromeRoot>
  );
}
