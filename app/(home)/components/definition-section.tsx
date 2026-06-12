import { SectionShell } from "./section-shell";
import { SectionHeader } from "./section-header";
import { Subheading } from "./subheading";
import { DefinitionContrasts } from "./definition-contrasts";
import { FormulaDiagram } from "./formula-diagram";
import { HarnessLayersStack } from "./harness-layers-stack";

export function DefinitionSection() {
  return (
    <SectionShell id="dinh-nghia" className="border-t border-border/60">
      <div className="space-y-12 lg:space-y-16" data-motion-section>
        <div data-motion-item>
          <SectionHeader
            sectionLabel="Phần 01"
            title={
              <>
                Harness <span className="text-primary">Engineering</span> là gì?
              </>
            }
            description="Kỷ luật thiết kế môi trường hoạt động có cấu trúc xung quanh các mô hình AI — giúp AI làm việc đáng tin cậy, an toàn và có thể lặp lại."
          />
        </div>

        <div className="space-y-6" data-motion-item>
          <Subheading>Cách hiểu phổ biến với Harness Engineering</Subheading>
          <DefinitionContrasts />
        </div>

        <div className="space-y-6" data-motion-item>
          <Subheading>Công thức cốt lõi</Subheading>
          <FormulaDiagram />
        </div>

        <div className="space-y-6" data-motion-item>
          <Subheading>Một harness hiện đại thường bao gồm</Subheading>
          <HarnessLayersStack />
        </div>
      </div>
    </SectionShell>
  );
}
