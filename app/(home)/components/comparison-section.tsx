import { SectionShell } from "./section-shell";
import { SectionHeader } from "./section-header";
import { ComparisonMatrix } from "./comparison-matrix";

export function ComparisonSection() {
  return (
    <SectionShell id="so-sanh" tone="sage" className="border-t border-border/60">
      <div className="space-y-10 lg:space-y-12" data-motion-section>
        <div data-motion-item>
          <SectionHeader
            sectionLabel="Phần 04"
            title={
              <>
                <span className="text-primary">Harness Engineering</span> khác gì Prompt
                Engineering và Context Engineering?
              </>
            }
            description="So sánh ba cách tiếp cận — mỗi cách giải quyết một lớp vấn đề khác nhau."
          />
        </div>

        <ComparisonMatrix />

        <div className="callout-accent rounded-r-2xl px-6 py-5 sm:px-7 sm:py-6" data-motion-item>
          <p className="font-sans text-base leading-relaxed text-brand-primary/80 lg:text-[1.05rem] lg:whitespace-nowrap">
            <span className="font-semibold text-brand-primary">Prompt</span> giúp AI hiểu yêu cầu.
            <span className="mx-1.5 text-brand-secondary" aria-hidden="true">
              ·
            </span>
            <span className="font-semibold text-brand-primary">Context</span> giúp AI có dữ liệu.
            <span className="mx-1.5 text-brand-secondary" aria-hidden="true">
              ·
            </span>
            <span className="font-semibold text-primary">Harness</span> giúp AI vận hành trong một
            hệ thống đáng tin cậy.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
