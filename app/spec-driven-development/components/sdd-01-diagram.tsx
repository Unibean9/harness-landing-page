import { Fragment } from "react";
import {
  sdd01BadHarnessFlow,
  sdd01CascadeSteps,
  sdd01CrmArtifacts,
  sdd01CrmColumns,
  sdd01CrmSpec,
  sdd01DriftFlow,
  sdd01EngineFlow,
  sdd01GpsActions,
  sdd01PipelineSteps,
  sdd01StructuredSpec,
  sdd01TraditionalFlow,
  sdd01VagueSpec,
  sdd01IacBefore,
  sdd01IacAfter,
} from "@/lib/sdd/sdd-01-content";
import {
  BranchLayout,
  BranchStackLink,
  ComparePanels,
  DiagramPanel,
  DiagramSplit,
  DiagramStack,
  FlowChain,
  FlowConnector,
  FlowNode,
  FlowPipeline,
  ForkEntry,
  MismatchRow,
} from "./sdd-01-diagram-parts";

export { Sdd01DeathDiagram } from "./sdd-01-death-diagram";

const sdd01EngineColumns = (outputs: readonly string[]) =>
  [
    [outputs[0], outputs[2]],
    [outputs[1], outputs[3]],
  ] as const;

export function Sdd01ProblemDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-problem-caption">
      <DiagramStack>
        <p className="sdd01-pipeline-label">Mô hình truyền điện thoại</p>
        <FlowChain steps={sdd01TraditionalFlow} leakContext />
        <FlowConnector />
        <MismatchRow left="Ý định ban đầu" right="Triển khai cuối" />
      </DiagramStack>
      <p className="sdd01-diagram-note">
        Mỗi lần thông tin truyền từ người này sang người khác, một phần context bị mất đi.
      </p>
      <figcaption id="sdd01-problem-caption" className="p1-diagram-caption">
        Phần lớn tài liệu phần mềm được thiết kế để đọc, không được thiết kế để sử dụng.
      </figcaption>
    </figure>
  );
}

export function Sdd01ShiftDiagram() {
  return (
    <ComparePanels
      badLabel="Trước đây: Đọc"
      goodLabel="Executable: Thực thi"
      badResult="Specification là tài liệu tham khảo."
      goodResult="Specification trở thành động cơ của workflow."
      bad={
        <div className="sdd01-compare-flow">
          <FlowNode label="Specification" variant="muted" />
          <FlowConnector />
          <div className="sdd01-read-stop">
            <span className="sdd01-read-eye" aria-hidden="true" />
            <p>Đọc</p>
          </div>
          <FlowConnector />
          <p className="sdd01-dead-end">Ngõ cụt</p>
        </div>
      }
      good={
        <div className="sdd01-compare-flow">
          <FlowNode label="Specification" variant="accent" />
          <FlowConnector />
          <ForkEntry>
            <FlowNode label="Thực thi" variant="accent" />
            <BranchLayout columns={3} entryStem joined className="sdd01-shift-spoke-branch">
              <span className="sdd01-spoke-pill">Kế hoạch</span>
              <span className="sdd01-spoke-pill">Nhiệm vụ</span>
              <span className="sdd01-spoke-pill">Kiểm tra</span>
            </BranchLayout>
          </ForkEntry>
          <FlowConnector />
          <p className="sdd01-spoke-caption">động cơ workflow</p>
        </div>
      }
    />
  );
}

export function Sdd01WorldsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-worlds-caption">
      <DiagramSplit>
        <DiagramPanel label="Thế giới 1: Tài liệu" tone="muted">
          <DiagramStack>
            <div className="sdd01-doc-icon" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <FlowNode label="Tài liệu tham khảo" className="sdd01-node--center" />
            <FlowConnector />
            <p className="sdd01-muted-caption">không hành động</p>
          </DiagramStack>
        </DiagramPanel>

        <DiagramPanel label="Thế giới 2: Động cơ" tone="accent">
          <div className="sdd01-engine-hub">
            <ForkEntry>
              <FlowNode label="Specification" variant="accent" className="sdd01-node--center" />
              <BranchLayout columns={2} entryStem joined className="sdd01-engine-branch">
              {sdd01EngineColumns(sdd01EngineFlow.slice(1)).map((stack) => (
                <div key={stack[0]} className="sdd01-branch-stack">
                  {stack.map((output, index) => (
                    <Fragment key={output}>
                      {index > 0 ? <BranchStackLink /> : null}
                      <FlowNode label={output} />
                    </Fragment>
                  ))}
                </div>
              ))}
            </BranchLayout>
            </ForkEntry>
          </div>
        </DiagramPanel>
      </DiagramSplit>

      <blockquote className="sdd01-quote-block">
        <p>Specification tốt không phải tài liệu. Specification tốt là động cơ.</p>
      </blockquote>

      <figcaption id="sdd01-worlds-caption" className="p1-diagram-caption">
        Hai cách nhìn hoàn toàn khác nhau về specification: tài liệu tĩnh hoặc động cơ thực thi.
      </figcaption>
    </figure>
  );
}

export function Sdd01GpsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-gps-caption">
      <div className="sdd01-gps-flow">
        <p className="sdd01-section-label">nhập điểm đến</p>
        <div className="sdd01-gps-input">
          <span className="sdd01-gps-dot" aria-hidden="true" />
          <p>Đi Đà Nẵng</p>
        </div>

        <FlowConnector />

        <ul className="sdd01-gps-actions">
          {sdd01GpsActions.map((action) => (
            <li key={action}>
              <FlowNode label={action} />
            </li>
          ))}
        </ul>

        <FlowConnector />

        <div className="sdd01-gps-compare">
          <FlowNode label="Tài liệu điểm đến" variant="dashed" />
          <FlowConnector direction="right" />
          <FlowNode label="Hệ thống điều hướng" variant="accent" />
        </div>
      </div>

      <figcaption id="sdd01-gps-caption" className="p1-diagram-caption">
        Specification nên hoạt động như hệ thống điều hướng: nhận đầu vào, sinh hành động, tự điều
        chỉnh khi thay đổi.
      </figcaption>
    </figure>
  );
}

export function Sdd01DriftDiagram() {
  const realitySteps = sdd01DriftFlow.slice(1, 4);
  const frozenStep = sdd01DriftFlow[0];

  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-drift-caption">
      <DiagramStack>
        <FlowPipeline steps={realitySteps} label="thực tế" variant="default" />

        <FlowConnector />

        <div className="sdd01-drift-frozen">
          <p className="sdd01-pipeline-label">documentation</p>
          <FlowNode label={frozenStep} variant="accent" className="sdd01-node--center" />
          <p className="sdd01-frozen-note">đứng yên trong khi thực tế thay đổi</p>
        </div>

        <FlowConnector />

        <MismatchRow left="Thực tế" right="Documentation" />
        <p className="sdd01-drift-badge">Documentation lệch pha</p>
      </DiagramStack>

      <figcaption id="sdd01-drift-caption" className="p1-diagram-caption">
        Tài liệu thất bại vì không tham gia vào workflow. Khi reality đi trước, team ngừng tin
        documentation.
      </figcaption>
    </figure>
  );
}

export function Sdd01AiDiagram() {
  return (
    <ComparePanels
      badLabel="Specification mơ hồ"
      goodLabel="Specification có cấu trúc"
      badResult="AI phải tự đoán mọi thứ còn thiếu."
      goodResult="Agent có đủ context để thực thi."
      bad={
        <div className="sdd01-vague-spec">
          <ForkEntry>
            <pre>{sdd01VagueSpec}</pre>
            <BranchLayout columns={4} entryStem joined className="sdd01-vague-branch">
              <span className="sdd01-vague-chip">tính năng?</span>
              <span className="sdd01-vague-chip">workflow?</span>
              <span className="sdd01-vague-chip">quyền?</span>
              <span className="sdd01-vague-chip">kiểm tra?</span>
            </BranchLayout>
          </ForkEntry>
        </div>
      }
      good={
        <dl className="sdd01-structured-spec">
          <div>
            <dt>Mục tiêu</dt>
            <dd>{sdd01StructuredSpec.goal}</dd>
          </div>
          <div>
            <dt>Ràng buộc</dt>
            <dd>{sdd01StructuredSpec.constraints}</dd>
          </div>
          <div>
            <dt>Tiêu chí chấp nhận</dt>
            <dd>{sdd01StructuredSpec.acceptance}</dd>
          </div>
          <div>
            <dt>Ví dụ</dt>
            <dd>{sdd01StructuredSpec.examples}</dd>
          </div>
        </dl>
      }
    />
  );
}

export function Sdd01PipelineDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-pipeline-caption">
      <div className="sdd01-pipeline-stack">
        <FlowPipeline steps={sdd01PipelineSteps} label="Pipeline SpecKit" variant="accent" />
        <FlowConnector />
        <FlowPipeline steps={sdd01CascadeSteps} label="Khi spec thay đổi" variant="default" />
      </div>
      <figcaption id="sdd01-pipeline-caption" className="p1-diagram-caption">
        Mỗi artifact sinh ra từ artifact trước. Khi specification thay đổi, toàn bộ hệ thống cập
        nhật theo.
      </figcaption>
    </figure>
  );
}

export function Sdd01CrmDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-crm-caption">
      <div className="sdd01-crm-flow">
        <FlowNode label="Specification" hint="CRM tuyển sinh" variant="accent" className="sdd01-node--center" />

        <FlowConnector />

        <ForkEntry>
          <div className="sdd01-crm-spec-block">
            <p className="sdd01-section-label">yêu cầu</p>
            <ul className="sdd01-spec-list sdd01-spec-list--compact">
              {sdd01CrmSpec.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <BranchLayout columns={3} entryStem joined className="sdd01-crm-branch" hideRailOnMobile>
          {sdd01CrmColumns.map((column) => {
            const items = sdd01CrmArtifacts[column.key];

            return (
              <div key={column.key} className="sdd01-artifact-column-wrap">
                <div className="sdd01-crm-mobile-drop sm:hidden">
                  <FlowConnector />
                </div>
                <div className="sdd01-artifact-column">
                  <p className="sdd01-artifact-heading">{column.label}</p>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </BranchLayout>
        </ForkEntry>
      </div>

      <figcaption id="sdd01-crm-caption" className="p1-diagram-caption">
        Mọi thứ xuất phát từ specification. Không có bước dịch thủ công giữa các artifact.
      </figcaption>
    </figure>
  );
}

export function Sdd01HarnessDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-harness-caption">
      <ComparePanels
        badLabel="Sai lầm phổ biến"
        goodLabel="Harness Engineering"
        bad={
          <div className="sdd01-compare-flow">
            <FlowChain steps={sdd01BadHarnessFlow} accentFirst={false} />
            <FlowConnector />
            <p className="sdd01-leak-note">Agent phải explore toàn bộ repository</p>
          </div>
        }
        good={
          <div className="sdd01-compare-flow">
            <FlowNode label="Specification" variant="accent" />
            <FlowConnector />
            <div className="sdd01-harness-shell">
              <p className="sdd01-harness-shell-title">Harness</p>
              <p className="sdd01-harness-shell-hint">context · công cụ · kiểm tra</p>
              <FlowNode label="Agent" />
            </div>
            <FlowConnector />
            <FlowNode label="Kết quả" variant="accent" />
          </div>
        }
      />

      <div className="sdd01-harness-roles">
        <p>
          <span className="sdd01-role-term">Harness</span> là bộ máy thực thi.{" "}
          <span className="sdd01-role-term">Specification</span> là chương trình điều khiển.
        </p>
      </div>

      <figcaption id="sdd01-harness-caption" className="p1-diagram-caption">
        Specification định hướng hành động. Harness chuẩn bị context. Agent thực hiện công việc.
      </figcaption>
    </figure>
  );
}

export function Sdd01IacDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-iac-caption">
      <ComparePanels
        badLabel="Trước đây"
        goodLabel="Infrastructure as Code"
        badResult="Specification như documentation"
        goodResult="Specification như infrastructure"
        bad={<FlowChain steps={sdd01IacBefore} />}
        good={
          <div className="sdd01-compare-flow">
            <FlowNode label="Terraform" variant="accent" />
            <FlowConnector />
            <FlowNode label="Hạ tầng" hint="tự động dựng" variant="accent" />
          </div>
        }
      />

      <figcaption id="sdd01-iac-caption" className="p1-diagram-caption">
        Tài liệu đã trở thành hành động trong quản lý hạ tầng. Executable Specifications mang cùng
        tư tưởng đó tới phát triển phần mềm.
      </figcaption>
    </figure>
  );
}
