import { SectionShell } from "@/app/(home)/components/section-shell";
import { PrinciplesChromeMotion } from "@/app/nguyen-ly/components/principles-chrome-motion";
import { PrinciplesToc, type PrinciplesTocItem } from "@/app/nguyen-ly/components/principles-toc";
import type { SddPagerLink } from "@/lib/sdd-data";
import { SddMobileBar } from "./sdd-mobile-bar";
import { SddNav } from "./sdd-nav";
import { SddPager } from "./sdd-pager";

interface SddDocShellProps {
  activeSlug: string;
  tocItems?: PrinciplesTocItem[];
  pager?: {
    prev?: SddPagerLink;
    next?: SddPagerLink;
  };
  children: React.ReactNode;
}

export function SddDocShell({ activeSlug, tocItems, pager, children }: SddDocShellProps) {
  const showPager = pager && (pager.prev || pager.next);

  return (
    <>
      <SddMobileBar activeSlug={activeSlug} tocItems={tocItems} />

      <SectionShell
        id="spec-driven-development"
        tone="default"
        className="border-t border-border/60 py-8 md:py-16 lg:py-20"
        innerClassName="max-w-[90rem]"
      >
        <div className="principles-doc-layout">
          <aside className="principles-sidebar-slot principles-sidebar-slot--nav hidden lg:block">
            <SddNav activeSlug={activeSlug} />
          </aside>

          <PrinciplesChromeMotion>
            <div
              className={
                showPager ? "principles-doc-main principles-doc-main--docked" : "principles-doc-main"
              }
            >
              <div className="principles-doc-content">{children}</div>
              {showPager ? <SddPager prev={pager.prev} next={pager.next} /> : null}
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
