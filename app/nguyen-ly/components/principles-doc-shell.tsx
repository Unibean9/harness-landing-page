import { SectionShell } from "@/app/(home)/components/section-shell";
import { PrinciplesChromeMotion } from "./principles-chrome-motion";
import { PrinciplesMobileBar } from "./principles-mobile-bar";
import { PrinciplesNav } from "./principles-nav";
import { PrinciplesToc, type PrinciplesTocItem } from "./principles-toc";
import { PrinciplesPager } from "./principles-pager";
import type { PrinciplePagerLink } from "@/lib/principles-data";

interface PrinciplesDocShellProps {
  activeSlug: string;
  tocItems?: PrinciplesTocItem[];
  pager?: {
    prev?: PrinciplePagerLink;
    next?: PrinciplePagerLink;
  };
  children: React.ReactNode;
}

export function PrinciplesDocShell({
  activeSlug,
  tocItems,
  pager,
  children,
}: PrinciplesDocShellProps) {
  const showPager = pager && (pager.prev || pager.next);

  return (
    <>
      <PrinciplesMobileBar activeSlug={activeSlug} tocItems={tocItems} />

      <SectionShell
        id="nguyen-ly"
        tone="default"
        className="border-t border-border/60 py-8 md:py-16 lg:py-20"
        innerClassName="max-w-[90rem]"
      >
        <div className="principles-doc-layout">
          <aside className="principles-sidebar-slot principles-sidebar-slot--nav hidden lg:block">
            <PrinciplesNav activeSlug={activeSlug} />
          </aside>

          <PrinciplesChromeMotion>
            <div
              className={
                showPager ? "principles-doc-main principles-doc-main--docked" : "principles-doc-main"
              }
            >
              <div className="principles-doc-content">{children}</div>
              {showPager ? <PrinciplesPager prev={pager.prev} next={pager.next} /> : null}
            </div>
          </PrinciplesChromeMotion>

          {tocItems && tocItems.length > 0 ? (
            <aside className="principles-sidebar-slot principles-sidebar-slot--toc hidden xl:block">
              <PrinciplesToc items={tocItems} />
            </aside>
          ) : null}
        </div>
      </SectionShell>
    </>
  );
}
