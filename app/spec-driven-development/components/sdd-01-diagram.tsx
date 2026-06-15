import { Fragment } from "react";
import {
  sdd01BadHarnessFlow,
  sdd01CascadeSteps,
  sdd01CrmArtifacts,
  sdd01CrmSpec,
  sdd01DriftFlow,
  sdd01EngineFlow,
  sdd01GpsActions,
  sdd01PipelineSteps,
  sdd01StructuredSpec,
  sdd01TraditionalFlow,
  sdd01VagueSpec,
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
        <p className="sdd01-pipeline-label">telephone game model</p>
        <FlowChain steps={sdd01TraditionalFlow} leakContext />
        <FlowConnector />
        <MismatchRow left="Original Intent" right="Final Implementation" />
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
      badLabel="Trước đây: Read"
      goodLabel="Executable: Execute"
      badResult="Specification là tài liệu tham khảo."
      goodResult="Specification trở thành động cơ của workflow."
      bad={
        <div className="sdd01-compare-flow">
          <FlowNode label="Specification" variant="muted" />
          <FlowConnector />
          <div className="sdd01-read-stop">
            <span className="sdd01-read-eye" aria-hidden="true" />
            <p>Read</p>
          </div>
          <FlowConnector />
          <p className="sdd01-dead-end">dead end</p>
        </div>
      }
      good={
        <div className="sdd01-compare-flow">
          <FlowNode label="Specification" variant="accent" />
          <FlowConnector />
          <ForkEntry>
            <FlowNode label="Execute" variant="accent" />
            <BranchLayout columns={3} entryStem joined className="sdd01-shift-spoke-branch">
              <span className="sdd01-spoke-pill">Plan</span>
              <span className="sdd01-spoke-pill">Tasks</span>
              <span className="sdd01-spoke-pill">Validation</span>
            </BranchLayout>
          </ForkEntry>
          <FlowConnector />
          <p className="sdd01-spoke-caption">workflow engine</p>
        </div>
      }
    />
  );
}

export function Sdd01WorldsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram" aria-labelledby="sdd01-worlds-caption">
      <DiagramSplit>
        <DiagramPanel label="World 1: Documents" tone="muted">
          <DiagramStack>
            <div className="sdd01-doc-icon" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <FlowNode label="Reference Material" className="sdd01-node--center" />
            <FlowConnector />
            <p className="sdd01-muted-caption">no action</p>
          </DiagramStack>
        </DiagramPanel>

        <DiagramPanel label="World 2: Engines" tone="accent">
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
        <p>Good specifications are not documents. Good specifications are engines.</p>
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
        <p className="sdd01-section-label">destination input</p>
        <div className="sdd01-gps-input">
          <span className="sdd01-gps-dot" aria-hidden="true" />
          <p>Go to Da Nang</p>
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
          <FlowNode label="Destination Document" variant="dashed" />
          <FlowConnector direction="right" />
          <FlowNode label="Navigation System" variant="accent" />
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
        <FlowPipeline steps={realitySteps} label="reality track" variant="default" />

        <FlowConnector />

        <div className="sdd01-drift-frozen">
          <p className="sdd01-pipeline-label">documentation track</p>
          <FlowNode label={frozenStep} variant="accent" className="sdd01-node--center" />
          <p className="sdd01-frozen-note">stays frozen while reality moves</p>
        </div>

        <FlowConnector />

        <MismatchRow left="Reality" right="Documentation" />
        <p className="sdd01-drift-badge">Documentation Drift</p>
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
              <span className="sdd01-vague-chip">feature?</span>
              <span className="sdd01-vague-chip">workflow?</span>
              <span className="sdd01-vague-chip">permissions?</span>
              <span className="sdd01-vague-chip">validation?</span>
            </BranchLayout>
          </ForkEntry>
        </div>
      }
      good={
        <dl className="sdd01-structured-spec">
          <div>
            <dt>Goal</dt>
            <dd>{sdd01StructuredSpec.goal}</dd>
          </div>
          <div>
            <dt>Constraints</dt>
            <dd>{sdd01StructuredSpec.constraints}</dd>
          </div>
          <div>
            <dt>Acceptance Criteria</dt>
            <dd>{sdd01StructuredSpec.acceptance}</dd>
          </div>
          <div>
            <dt>Examples</dt>
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
        <FlowPipeline steps={sdd01PipelineSteps} label="speckit pipeline" variant="accent" />
        <FlowConnector />
        <FlowPipeline steps={sdd01CascadeSteps} label="when spec changes" variant="default" />
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
        <FlowNode label="Specification" hint="admissions CRM" variant="accent" className="sdd01-node--center" />

        <FlowConnector />

        <ForkEntry>
          <div className="sdd01-crm-spec-block">
            <p className="sdd01-section-label">requirements</p>
            <ul className="sdd01-spec-list sdd01-spec-list--compact">
              {sdd01CrmSpec.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <BranchLayout columns={3} entryStem joined className="sdd01-crm-branch" hideRailOnMobile>
          {(["Plan", "Tasks", "Validation"] as const).map((title) => {
            const items =
              title === "Plan"
                ? sdd01CrmArtifacts.plan
                : title === "Tasks"
                  ? sdd01CrmArtifacts.tasks
                  : sdd01CrmArtifacts.validation;

            return (
              <div key={title} className="sdd01-artifact-column-wrap">
                <div className="sdd01-crm-mobile-drop sm:hidden">
                  <FlowConnector />
                </div>
                <div className="sdd01-artifact-column">
                  <p className="sdd01-artifact-heading">{title}</p>
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
              <p className="sdd01-harness-shell-hint">context · tools · validate</p>
              <FlowNode label="Agent" />
            </div>
            <FlowConnector />
            <FlowNode label="Output" variant="accent" />
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
        badResult="Specification as Documentation"
        goodResult="Specification as Infrastructure"
        bad={<FlowChain steps={["Infrastructure Document", "Humans Build Servers"]} />}
        good={
          <div className="sdd01-compare-flow">
            <FlowNode label="Terraform" variant="accent" />
            <FlowConnector />
            <FlowNode label="Infrastructure" hint="auto-provisioned" variant="accent" />
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
