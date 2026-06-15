import {
  sdd05AiAfter,
  sdd05AiBefore,
  sdd05AiBottleneck,
  sdd05AirplaneChain,
  sdd05ContinuousShift,
  sdd05CostCurve,
  sdd05FactoryBad,
  sdd05FactoryGood,
  sdd05GatePipeline,
  sdd05HarnessFormula,
  sdd05HarnessImmature,
  sdd05HarnessMature,
  sdd05HouseStages,
  sdd05LateWorkflow,
  sdd05MissedQuestions,
  sdd05PrinciplesChain,
  sdd05RequirementTimeline,
  sdd05ReworkLoop,
  sdd05SpecBad,
  sdd05SpecGood,
  sdd05TestingVsValidation,
  sdd05TraditionalShift,
  sdd05ValidationStages,
  sdd05VagueRequirement,
} from "@/lib/sdd/sdd-05-content";
import {
  ComparePanels,
  DiagramGroup,
  DiagramPanel,
  DiagramSplit,
  DiagramStack,
  FlowChain,
  FlowConnector,
  FlowNode,
  FlowPipeline,
} from "./sdd-01-diagram-parts";

export function Sdd05IntroDiagram() {
  const buildStages = sdd05HouseStages.slice(0, -1);
  const inspectStage = sdd05HouseStages[sdd05HouseStages.length - 1];

  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-intro-caption">
      <DiagramStack>
        <p className="sdd01-section-label">Xây nhà</p>
        <FlowPipeline steps={buildStages} variant="default" />
        <FlowConnector />
        <FlowNode label={inspectStage} variant="danger" className="sdd01-node--center sdd02-node-compact" />
        <p className="sdd05-diagram-note">
          Hoàn thành móng, khung, điện, nước, mái — rồi mới gọi người kiểm tra.
        </p>
      </DiagramStack>

      <figcaption id="sdd05-intro-caption" className="p1-diagram-caption">
        Nghe điên rồ — nhưng đó chính xác là cách nhiều đội phần mềm đang làm việc.
      </figcaption>
    </figure>
  );
}

export function Sdd05WorkflowDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-workflow-caption">
      <DiagramStack>
        <FlowChain steps={sdd05LateWorkflow} accentFirst={false} />
        <p className="sdd01-section-label">validation ở cuối</p>
        <FlowNode label="Validation" variant="danger" className="sdd01-node--center sdd02-node-compact" />
        <FlowConnector />
        <p className="sdd01-section-label">nếu có vấn đề</p>
        <div className="sdd02-chip-row sdd05-rework-row">
          {sdd05ReworkLoop.map((item) => (
            <span key={item} className="sdd02-chip-row-item">
              {item}
            </span>
          ))}
        </div>
      </DiagramStack>

      <figcaption id="sdd05-workflow-caption" className="p1-diagram-caption">
        Workflow phổ biến: build xong mới validate — chi phí sửa tăng rất nhanh khi phải quay lại.
      </figcaption>
    </figure>
  );
}

export function Sdd05ProblemDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-problem-caption">
      <ComparePanels
        badLabel="Final check"
        goodLabel="Continuous process"
        badResult="Giả định: chúng ta có thể phát hiện lỗi sau."
        goodResult="Lỗi được bắt ngay khi xuất hiện — không chờ đến cuối."
        bad={<FlowNode label="Validate một lần ở cuối" variant="danger" className="sdd01-node--center" />}
        good={
          <div className="sdd02-chip-row sdd05-continuous-chips">
            {["Validate", "Build", "Validate", "Build", "Validate"].map((step, index) => (
              <span key={`${step}-${index}`} className="sdd02-chip-row-item">
                {step}
              </span>
            ))}
          </div>
        }
      />

      <figcaption id="sdd05-problem-caption" className="p1-diagram-caption">
        Phần lớn đội vô tình xem validation là bước cuối — không phải hoạt động liên tục.
      </figcaption>
    </figure>
  );
}

export function Sdd05RequirementDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-requirement-caption">
      <div className="sdd05-requirement-panel">
        <DiagramStack>
          <FlowNode
            label={sdd05VagueRequirement}
            variant="muted"
            className="sdd01-node--center sdd05-vague-req"
          />
          <p className="sdd01-section-label">không ai hỏi</p>
          <div className="sdd02-chip-row sdd05-questions-row">
            {sdd05MissedQuestions.map((q) => (
              <span key={q} className="sdd02-chip-row-item sdd05-question-chip">
                {q}
              </span>
            ))}
          </div>
          <FlowConnector />
          <div className="sdd05-timeline">
            {sdd05RequirementTimeline.map((item, index) => (
              <div key={item.stage} className="sdd05-timeline-step">
                <FlowNode
                  label={item.stage}
                  variant={item.tone === "danger" ? "danger" : "default"}
                  className="sdd01-node--center sdd02-node-compact"
                />
                {index < sdd05RequirementTimeline.length - 1 ? (
                  <span className="sdd05-timeline-gap" aria-hidden="true">
                    ···
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </DiagramStack>
        <p className="sdd05-diagram-note">Hai tháng sau — toàn bộ công sức phải làm lại.</p>
      </div>

      <figcaption id="sdd05-requirement-caption" className="p1-diagram-caption">
        Một lỗi ở requirement có thể tồn tại hàng tuần trước khi được phát hiện.
      </figcaption>
    </figure>
  );
}

export function Sdd05ShiftDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-shift-caption">
      <ComparePanels
        badLabel="Truyền thống"
        goodLabel="Continuous Validation"
        badResult="Build xong mới kiểm tra."
        goodResult="Validate trước, trong và sau mỗi bước build."
        bad={<FlowChain steps={sdd05TraditionalShift} accentFirst={false} />}
        good={
          <div className="sdd02-chip-row sdd05-shift-chips">
            {sdd05ContinuousShift.map((step, index) => (
              <span
                key={`${step}-${index}`}
                className={
                  step === "Validate"
                    ? "sdd02-chip-row-item sdd05-shift-chip--validate"
                    : "sdd02-chip-row-item"
                }
              >
                {step}
              </span>
            ))}
          </div>
        }
      />

      <figcaption id="sdd05-shift-caption" className="p1-diagram-caption">
        Validation không phải giai đoạn — mà là hoạt động lặp lại xuyên suốt pipeline.
      </figcaption>
    </figure>
  );
}

export function Sdd05CostDiagram() {
  const maxMultiplier = 100;

  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-cost-caption">
      <div className="sdd05-cost-chart">
        {sdd05CostCurve.map((item) => {
          const value = parseInt(item.multiplier, 10);
          const height = Math.max(12, (value / maxMultiplier) * 100);

          return (
            <div key={item.stage} className="sdd05-cost-bar-wrap">
              <p className="sdd05-cost-multiplier">{item.multiplier}</p>
              <div
                className="sdd05-cost-bar"
                style={{ height: `${height}%` }}
                aria-hidden="true"
              />
              <p className="sdd05-cost-stage">{item.stage}</p>
            </div>
          );
        })}
      </div>
      <p className="sdd05-diagram-note">Lỗi requirement phát hiện càng muộn — chi phí sửa càng cao.</p>

      <figcaption id="sdd05-cost-caption" className="p1-diagram-caption">
        Đội hiện đại cố gắng đưa validation về phía trước vì đường cong chi phí leo thang nhanh.
      </figcaption>
    </figure>
  );
}

export function Sdd05NotTestingDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-not-testing-caption">
      <DiagramStack>
        <DiagramSplit>
          <DiagramPanel label={sdd05TestingVsValidation.testing.label} tone="muted">
            <FlowNode
              label={sdd05TestingVsValidation.testing.question}
              variant="default"
              className="sdd01-node--center"
            />
          </DiagramPanel>
          <DiagramPanel label={sdd05TestingVsValidation.validation.label} tone="accent">
            <FlowNode
              label={sdd05TestingVsValidation.validation.question}
              variant="accent"
              className="sdd01-node--center"
            />
          </DiagramPanel>
        </DiagramSplit>
        <FlowConnector />
        <FlowNode
          label={sdd05TestingVsValidation.outcome}
          variant="danger"
          className="sdd01-node--center"
        />
      </DiagramStack>

      <figcaption id="sdd05-not-testing-caption" className="p1-diagram-caption">
        Hệ thống chạy hoàn hảo, mọi test pass — nhưng requirement sai. Testing không cứu được điều đó.
      </figcaption>
    </figure>
  );
}

export function Sdd05PipelineDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-pipeline-caption">
      <DiagramGroup
        label="Validate ở mọi artifact"
        tone="accent"
        className="sdd05-pipeline-group"
        bodyClassName="sdd05-pipeline-ladder"
      >
        {sdd05ValidationStages.map((stage, index) => (
          <div key={stage.artifact} className="sdd05-pipeline-step">
            {index > 0 ? (
              <div className="sdd05-gates-vlink" aria-hidden="true">
                <span className="sdd05-gates-vlink-stem" />
                <span className="sdd05-gates-vlink-head" />
              </div>
            ) : null}
            <div className="sdd05-pipeline-rung-card">
              <div className="sdd05-pipeline-flow">
                <div className="sdd05-pipeline-artifact">
                  <span className="sdd05-pipeline-index">{index + 1}</span>
                  <span className="sdd05-pipeline-node">{stage.artifact}</span>
                </div>
                <span className="sdd05-pipeline-arrow" aria-hidden="true">
                  →
                </span>
                <span className="sdd05-gate-chip">Validate</span>
              </div>
              <div className="sdd02-chip-row sdd05-checks-row">
                {stage.checks.map((check) => (
                  <span key={check} className="sdd02-chip-row-item">
                    {check}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </DiagramGroup>

      <figcaption id="sdd05-pipeline-caption" className="p1-diagram-caption">
        Trong Spec-Driven Development, validation xảy ra ở mọi artifact — không chỉ ở code.
      </figcaption>
    </figure>
  );
}

export function Sdd05SpecExampleDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-spec-example-caption">
      <ComparePanels
        badLabel="Không thể validate"
        goodLabel="Có thể validate"
        badResult="Mơ hồ — không ai biết pass hay fail."
        goodResult="Đo được — có ngưỡng rõ ràng."
        bad={<FlowNode label={sdd05SpecBad} variant="danger" className="sdd01-node--center" />}
        good={<FlowNode label={sdd05SpecGood} variant="accent" className="sdd01-node--center" />}
      />

      <figcaption id="sdd05-spec-example-caption" className="p1-diagram-caption">
        Specification phải đủ cụ thể để kiểm tra — không chỉ mô tả ý định chung chung.
      </figcaption>
    </figure>
  );
}

export function Sdd05FactoryDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-factory-caption">
      <ComparePanels
        badLabel="Nhà máy tệ"
        goodLabel="Nhà máy tốt"
        badResult="Nguyên liệu lỗi → toàn bộ sản phẩm bị ảnh hưởng."
        goodResult="Sai sót bị bắt ngay tại từng điểm kiểm tra."
        bad={<FlowChain steps={sdd05FactoryBad} accentFirst={false} />}
        good={<FlowChain steps={sdd05FactoryGood} />}
      />

      <figcaption id="sdd05-factory-caption" className="p1-diagram-caption">
        Continuous Validation hoạt động như dây chuyền sản xuất tốt — inspect ở mọi bước, không chỉ cuối.
      </figcaption>
    </figure>
  );
}

export function Sdd05AiDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-ai-caption">
      <DiagramStack>
        <DiagramSplit>
          <DiagramPanel label="Trước" tone="muted">
            <FlowNode label={sdd05AiBefore.actor} hint={sdd05AiBefore.rate} variant="default" className="sdd01-node--center" />
          </DiagramPanel>
          <DiagramPanel label="Với AI" tone="accent">
            <FlowNode label={sdd05AiAfter.actor} hint={sdd05AiAfter.rate} variant="accent" className="sdd01-node--center" />
          </DiagramPanel>
        </DiagramSplit>
        <FlowConnector />
        <div className="sdd05-bottleneck-equation">
          {sdd05AiBottleneck.map((part) => (
            <span
              key={part}
              className={
                part === "=" || part === "+"
                  ? "sdd05-bottleneck-op"
                  : part === "Bottleneck"
                    ? "sdd05-bottleneck-result"
                    : "sdd05-bottleneck-term"
              }
            >
              {part}
            </span>
          ))}
        </div>
      </DiagramStack>

      <figcaption id="sdd05-ai-caption" className="p1-diagram-caption">
        Tốc độ tạo artifact tăng mạnh — nếu validation vẫn chỉ ở cuối, hệ thống mất kiểm soát.
      </figcaption>
    </figure>
  );
}

export function Sdd05GatesDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-gates-caption">
      <DiagramStack>
        <DiagramGroup
          label="Mỗi artifact phải vượt gate"
          tone="accent"
          className="sdd05-gates-group"
          bodyClassName="sdd05-gates-ladder"
        >
          {sdd05GatePipeline.map((artifact, index) => (
            <div key={artifact} className="sdd05-gates-step">
              {index > 0 ? (
                <div className="sdd05-gates-vlink" aria-hidden="true">
                  <span className="sdd05-gates-vlink-stem" />
                  <span className="sdd05-gates-vlink-head" />
                </div>
              ) : null}
              <div className="sdd05-gates-rung-card">
                <div className="sdd05-gates-pass">
                  <span className="sdd05-gates-node">{artifact}</span>
                  <span className="sdd05-gates-pass-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="sdd05-gate-chip">Gate</span>
                </div>
              </div>
            </div>
          ))}
        </DiagramGroup>
        <p className="sdd05-diagram-note">
          Không artifact nào được phép tiến lên nếu chưa vượt qua validation gate.
        </p>
      </DiagramStack>

      <figcaption id="sdd05-gates-caption" className="p1-diagram-caption">
        Validation trở thành infrastructure — không còn là hoạt động thủ công cuối pipeline.
      </figcaption>
    </figure>
  );
}

export function Sdd05HarnessDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-harness-caption">
      <DiagramStack>
        <p className="sdd01-section-label">Harness tốt =</p>
        <div className="sdd02-chip-row sdd05-harness-formula">
          {sdd05HarnessFormula.map((item) => (
            <span key={item} className="sdd02-chip-row-item">
              {item}
            </span>
          ))}
        </div>
        <FlowConnector />
        <ComparePanels
          badLabel="Thiếu validation"
          goodLabel="Harness trưởng thành"
          bad={<FlowChain steps={sdd05HarnessImmature} accentFirst={false} />}
          good={<FlowChain steps={sdd05HarnessMature} />}
        />
      </DiagramStack>

      <figcaption id="sdd05-harness-caption" className="p1-diagram-caption">
        Harness không chỉ cung cấp context — nó phải validate output trước khi cho phép tiến stage.
      </figcaption>
    </figure>
  );
}

export function Sdd05AirplaneDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-airplane-caption">
      <DiagramStack>
        <FlowNode label="Máy bay thương mại" variant="accent" className="sdd01-node--center" />
        <FlowConnector />
        <p className="sdd01-section-label">không chỉ kiểm tra trước cất cánh</p>
        <FlowChain steps={sdd05AirplaneChain} />
        <p className="sdd05-diagram-note">Trong suốt chuyến bay — liên tục theo dõi và validate.</p>
      </DiagramStack>

      <figcaption id="sdd05-airplane-caption" className="p1-diagram-caption">
        Phần mềm hiện đại cũng vậy — validation phải liên tục, không chỉ một lần trước release.
      </figcaption>
    </figure>
  );
}

export function Sdd05PrinciplesDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd05-diagram" aria-labelledby="sdd05-principles-caption">
      <DiagramGroup
        label="Năm nguyên lý SpecKit"
        tone="muted"
        className="sdd05-principles-group"
        bodyClassName="sdd05-principles-ladder"
      >
        {sdd05PrinciplesChain.map((item, index) => (
          <div key={item.principle} className="sdd05-principle-row">
            <span className="sdd05-principle-index">{index + 1}</span>
            <div className="sdd05-principle-body">
              <p className="sdd05-principle-name">{item.principle}</p>
              <p className="sdd05-principle-role">{item.role}</p>
            </div>
            {index < sdd05PrinciplesChain.length - 1 ? (
              <div className="sdd05-gates-vlink" aria-hidden="true">
                <span className="sdd05-gates-vlink-stem" />
                <span className="sdd05-gates-vlink-head" />
              </div>
            ) : null}
          </div>
        ))}
      </DiagramGroup>

      <figcaption id="sdd05-principles-caption" className="p1-diagram-caption">
        Continuous Validation kết nối bốn nguyên lý trước — kiểm tra toàn bộ hệ thống ở mọi bước.
      </figcaption>
    </figure>
  );
}
