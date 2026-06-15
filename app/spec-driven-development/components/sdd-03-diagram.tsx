import {
  sdd03AiFlow,
  sdd03ArtifactChain,
  sdd03AutomatedTransform,
  sdd03ContextLoss,
  sdd03CrmSpec,
  sdd03CrmTransforms,
  sdd03FactoryChain,
  sdd03FactoryModel,
  sdd03IdeaSeed,
  sdd03KnowledgeChain,
  sdd03SpeckitPipeline,
  sdd03StructuredSpec,
  sdd03TelephoneSteps,
  sdd03TraditionalTransform,
  sdd03TraditionalVertical,
  sdd03TransformWorkflow,
  sdd03TranslationChain,
  sdd03VagueSpec,
} from "@/lib/sdd/sdd-03-content";
import { cn } from "@/lib/utils/cn";
import {
  ComparePanels,
  DiagramPanel,
  DiagramSplit,
  DiagramStack,
  FlowChain,
  FlowConnector,
  FlowNode,
  MismatchRow,
} from "./sdd-01-diagram-parts";

function isWorkflowAction(step: string, mode: "human" | "transform") {
  return mode === "human" ? step.startsWith("Human") : step.startsWith("Generate");
}

function WorkflowStack({
  steps,
  mode,
}: {
  steps: readonly string[];
  mode: "human" | "transform";
}) {
  return (
    <div className="sdd01-compare-flow sdd03-workflow-stack">
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="sdd03-workflow-beat">
          <FlowNode
            label={step}
            variant={
              isWorkflowAction(step, mode)
                ? mode === "transform"
                  ? "accent"
                  : "dashed"
                : "muted"
            }
            className="sdd02-node-compact"
          />
          {index < steps.length - 1 ? <FlowConnector /> : null}
        </div>
      ))}
    </div>
  );
}

export function Sdd03TranslationDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-translation-caption">
      <DiagramStack>
        <FlowNode label={sdd03IdeaSeed} variant="accent" className="sdd01-node--center sdd02-node-compact" />

        <FlowConnector />

        <p className="sdd01-section-label">hành trình dịch quen thuộc</p>

        <FlowChain steps={sdd03TranslationChain} leakContext accentFirst={false} />

        <p className="sdd03-leak-note">mỗi bước: đọc → viết lại → mất một phần context</p>
      </DiagramStack>

      <figcaption id="sdd03-translation-caption" className="p1-diagram-caption">
        Ý tưởng ban đầu đi qua nhiều lớp dịch — nghe bình thường, nhưng đây là nơi thông tin thất thoát.
      </figcaption>
    </figure>
  );
}

export function Sdd03TelephoneDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-telephone-caption">
      <DiagramStack>
        {sdd03TelephoneSteps.map((step, index) => (
          <div key={step.speaker} className="sdd03-telephone-step">
            <p className="sdd03-telephone-speaker">{step.speaker}</p>
            <FlowNode label={step.message} variant={index === 0 ? "accent" : "muted"} className="sdd02-node-compact" />
            {index < sdd03TelephoneSteps.length - 1 ? (
              <div className="sdd03-telephone-link">
                <FlowConnector />
                <span className="sdd01-leak-tag">−context</span>
              </div>
            ) : null}
          </div>
        ))}

        <FlowConnector />

        <MismatchRow left="Original Intent" right="Final Result" />
      </DiagramStack>

      <figcaption id="sdd03-telephone-caption" className="p1-diagram-caption">
        Không ai cố làm sai — thông tin mất dần qua từng lần dịch, giống trò chơi truyền tin.
      </figcaption>
    </figure>
  );
}

export function Sdd03ProblemDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-problem-caption">
      <DiagramStack>
        <FlowChain steps={sdd03ArtifactChain} leakContext />

        <p className="sdd03-leak-note">hầu hết bước không tạo tri thức mới — chỉ đổi định dạng</p>
      </DiagramStack>

      <figcaption id="sdd03-problem-caption" className="p1-diagram-caption">
        Phần lớn thời gian dành cho chuyển đổi artifact, không phải tạo giá trị mới.
      </figcaption>
    </figure>
  );
}

export function Sdd03ShiftDiagram() {
  return (
    <ComparePanels
      badLabel="Human rewrite"
      goodLabel="Transformation"
      badResult="Con người đọc và viết lại — context mất ở mỗi lần dịch."
      goodResult="Hệ thống chuyển đổi artifact — con người tập trung ra quyết định."
      bad={
        <div className="sdd01-compare-flow">
          <FlowNode label="Specification" variant="muted" className="sdd02-node-compact" />
          <FlowConnector />
          <FlowNode label="Human Rewrite" variant="muted" className="sdd02-node-compact" />
          <FlowConnector />
          <FlowNode label="Plan" variant="muted" className="sdd02-node-compact" />
        </div>
      }
      good={
        <div className="sdd01-compare-flow">
          <FlowNode label="Specification" variant="accent" className="sdd02-node-compact" />
          <FlowConnector />
          <FlowNode label="Transformation" variant="accent" className="sdd02-node-compact" />
          <FlowConnector />
          <FlowNode label="Plan" variant="accent" className="sdd02-node-compact" />
        </div>
      }
    />
  );
}

export function Sdd03PipelineDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-pipeline-caption">
      <DiagramSplit>
        <DiagramPanel label="Collection of documents" tone="muted" result="Artifact → Human → Artifact B">
          <FlowChain steps={sdd03TraditionalTransform} accentFirst={false} />
        </DiagramPanel>

        <DiagramPanel label="Chain of transformations" tone="accent" result="Artifact → Transform → Artifact B">
          <FlowChain steps={sdd03AutomatedTransform} />
        </DiagramPanel>
      </DiagramSplit>

      <blockquote className="sdd01-quote-block">
        <p>Dự án không còn là tập hợp tài liệu — mà là chuỗi transformation nối tiếp nhau.</p>
      </blockquote>

      <figcaption id="sdd03-pipeline-caption" className="p1-diagram-caption">
        Tài liệu trở thành pipeline — mỗi artifact là đầu vào chuẩn hóa cho bước tiếp theo.
      </figcaption>
    </figure>
  );
}

export function Sdd03FactoryDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-factory-caption">
      <DiagramSplit>
        <DiagramPanel label="Ẩn dụ vật lý" tone="muted">
          <FlowChain steps={sdd03FactoryChain} accentFirst={false} />
        </DiagramPanel>

        <DiagramPanel label="Tri thức phần mềm" tone="accent">
          <FlowChain steps={sdd03KnowledgeChain} />
        </DiagramPanel>
      </DiagramSplit>

      <p className="sdd03-factory-note">
        Mỗi bước nhận đầu vào chuẩn hóa, tạo đầu ra chuẩn hóa — không bắt đầu lại từ đầu.
      </p>

      <figcaption id="sdd03-factory-caption" className="p1-diagram-caption">
        Transformation Automation áp dụng tư duy dây chuyền sản xuất cho dòng chảy tri thức.
      </figcaption>
    </figure>
  );
}

export function Sdd03AiDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-ai-caption">
      <DiagramStack>
        <p className="sdd01-section-label">lần đầu khả thi ở quy mô lớn</p>
        <FlowChain steps={sdd03AiFlow} />
      </DiagramStack>

      <figcaption id="sdd03-ai-caption" className="p1-diagram-caption">
        AI biến Human Intent → Structured Artifact → Transformation → New Artifact thành thực tế.
      </figcaption>
    </figure>
  );
}

export function Sdd03SpeckitDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-speckit-caption">
      <DiagramStack>
        <p className="sdd01-section-label">speckit pipeline</p>

        <div className="sdd03-speckit-rail" aria-label="SpecKit pipeline">
          {sdd03SpeckitPipeline.map((step, index) => (
            <span key={step} className="sdd03-speckit-rail-item">
              {index > 0 ? <span className="sdd03-speckit-rail-arrow" aria-hidden="true">→</span> : null}
              <span>{step}</span>
            </span>
          ))}
        </div>

        <FlowConnector />

        <ComparePanels
          badLabel="Workflow truyền thống"
          goodLabel="Transformation workflow"
          badResult="Mỗi bước bắt đầu từ trang trắng — human đọc và viết lại."
          goodResult="Mỗi bước sinh từ artifact trước — không dịch thủ công."
          bad={<WorkflowStack steps={sdd03TraditionalVertical} mode="human" />}
          good={<WorkflowStack steps={sdd03TransformWorkflow} mode="transform" />}
        />
      </DiagramStack>

      <figcaption id="sdd03-speckit-caption" className="p1-diagram-caption">
        Mỗi bước không bắt đầu từ trang trắng — sinh ra từ bước trước.
      </figcaption>
    </figure>
  );
}

export function Sdd03CrmDiagram() {
  const stages = [
    { title: "Plan", transform: "Spec → Plan", items: sdd03CrmTransforms.plan },
    { title: "Tasks", transform: "Plan → Tasks", items: sdd03CrmTransforms.tasks },
    { title: "Validation", transform: "Tasks → Validation", items: sdd03CrmTransforms.validation },
  ] as const;

  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-crm-caption">
      <DiagramStack className="sdd03-crm-flow">
        <FlowNode label="Specification" hint="CRM tuyển sinh" variant="accent" className="sdd01-node--center sdd02-node-compact" />

        <FlowConnector />

        <ul className="sdd01-spec-list sdd01-spec-list--compact sdd03-crm-spec-list">
          {sdd03CrmSpec.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        {stages.map((stage, index) => (
          <div key={stage.title} className="sdd03-crm-stage-block">
            <FlowConnector />
            <p className="sdd01-section-label sdd03-crm-transform-label">{stage.transform}</p>
            <div
              className={cn(
                "sdd01-artifact-column sdd03-crm-artifact",
                index === stages.length - 1 && "sdd03-crm-artifact--accent"
              )}
            >
              <p className="sdd01-artifact-heading">{stage.title}</p>
              <ul>
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </DiagramStack>

      <p className="sdd03-no-rewrite">không ai viết lại cùng một thông tin</p>

      <figcaption id="sdd03-crm-caption" className="p1-diagram-caption">
        Mỗi transformation sinh artifact tiếp theo — không có bước dịch thủ công giữa các lớp.
      </figcaption>
    </figure>
  );
}

export function Sdd03ContextLossDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-context-caption">
      <DiagramStack className="sdd03-context-flow">
        <div className="sdd03-context-intent-block">
          <p className="sdd03-context-intent-label">specification</p>
          <p className="sdd03-context-intent-text">{sdd03ContextLoss.spec}</p>
        </div>

        <FlowConnector />

        <div className="sdd03-context-process">
          <div className="sdd02-chip-row sdd03-context-process-row">
            <span className="sdd02-chip-row-item">Read</span>
            <span className="sdd02-chip-row-item">Interpret</span>
            <span className="sdd02-chip-row-item">Rewrite</span>
          </div>
          <p className="sdd03-context-process-note">dịch thủ công — mỗi bước mất context</p>
        </div>

        <FlowConnector />

        <div className="sdd03-context-intent-block sdd03-context-intent-block--muted">
          <p className="sdd03-context-intent-label">task được tạo</p>
          <p className="sdd03-context-intent-text sdd03-context-intent-text--task">{sdd03ContextLoss.task}</p>
        </div>

        <FlowConnector />

        <MismatchRow left="Auditability" right="Database Task" symbol="→" />
      </DiagramStack>

      <figcaption id="sdd03-context-caption" className="p1-diagram-caption">
        Transformation Automation giữ nhiều context hơn — vì downstream artifact truy vết được upstream.
      </figcaption>
    </figure>
  );
}

export function Sdd03NotGenerationDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-generation-caption">
      <div className="sdd03-generation-compare">
        <div className="sdd03-generation-col sdd03-generation-col--wrong">
          <p className="sdd03-generation-heading">Hiểu nhầm</p>
          <div className="sdd03-generation-flow">
            <span className="sdd03-generation-node">upstream</span>
            <span className="sdd03-generation-arrow sdd03-generation-arrow--broken" aria-hidden="true">→ ?</span>
            <span className="sdd03-generation-node sdd03-generation-node--lost">output</span>
          </div>
          <p className="sdd03-generation-caption">Automation = tạo output ngẫu nhiên</p>
        </div>

        <div className="sdd03-generation-col sdd03-generation-col--right">
          <p className="sdd03-generation-heading">Đúng bản chất</p>
          <div className="sdd03-generation-flow">
            <span className="sdd03-generation-node sdd03-generation-node--accent">upstream</span>
            <span className="sdd03-generation-arrow" aria-hidden="true">→</span>
            <span className="sdd03-generation-node sdd03-generation-node--accent">downstream</span>
          </div>
          <p className="sdd03-generation-caption">Automation = downstream truy vết từ upstream</p>
        </div>
      </div>

      <figcaption id="sdd03-generation-caption" className="p1-diagram-caption">
        Transformation không phải generation — đầu ra phải liên kết với đầu vào.
      </figcaption>
    </figure>
  );
}

export function Sdd03StructureDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-structure-caption">
      <ComparePanels
        badLabel="Spec mơ hồ"
        goodLabel="Spec có cấu trúc"
        badResult="Không thể transform đáng tin cậy."
        goodResult="Có thể sinh plan, tasks, tests nhất quán."
        bad={<p className="sdd03-structure-vague">{sdd03VagueSpec}</p>}
        good={
          <ul className="sdd02-team-list sdd02-team-list--flat sdd02-team-list--rules">
            {sdd03StructuredSpec.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        }
      />

      <figcaption id="sdd03-structure-caption" className="p1-diagram-caption">
        Pipeline chỉ hoạt động khi specification đủ chất lượng để transform.
      </figcaption>
    </figure>
  );
}

export function Sdd03HarnessDiagram() {
  const harnessSteps = [
    "Artifact A",
    "Transform → Artifact B",
    "Validate → Artifact C",
    "Transform → Artifact D",
  ] as const;

  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-harness-caption">
      <DiagramStack>
        <p className="sdd01-section-label">transformation pipeline là trung tâm — không phải agent</p>

        <FlowChain steps={harnessSteps} />

        <FlowConnector />

        <div className="sdd02-chip-row">
          <span className="sdd02-chip-row-item">đúng context</span>
          <span className="sdd02-chip-row-item">đúng input</span>
          <span className="sdd02-chip-row-item">đúng validation</span>
          <span className="sdd02-chip-row-item">đúng transform</span>
        </div>
      </DiagramStack>

      <figcaption id="sdd03-harness-caption" className="p1-diagram-caption">
        Harness điều phối pipeline — Agent chỉ là một thành phần trong chuỗi transformation.
      </figcaption>
    </figure>
  );
}

export function Sdd03FactoryModelDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd03-diagram" aria-labelledby="sdd03-factory-model-caption">
      <div className="sdd03-factory-grid">
        {sdd03FactoryModel.map((item, index) => (
          <div key={item.label} className="sdd03-factory-card">
            <span className="sdd03-factory-index">{String(index + 1).padStart(2, "0")}</span>
            <p className="sdd03-factory-label">{item.label}</p>
            <p className="sdd03-factory-role">{item.role}</p>
          </div>
        ))}
      </div>

      <figcaption id="sdd03-factory-model-caption" className="p1-diagram-caption">
        Specification là nguyên liệu — Implementation là thành phẩm. Ở giữa là dây chuyền transformation.
      </figcaption>
    </figure>
  );
}
