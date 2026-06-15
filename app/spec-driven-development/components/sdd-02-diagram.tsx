import {
  sdd02AgentAfter,
  sdd02AgentBefore,
  sdd02AgentChaosShort,
  sdd02ChaosOutcomes,
  sdd02ConstitutionPillars,
  sdd02DecisionBefore,
  sdd02DivergentHead,
  sdd02GateRejections,
  sdd02GovStack,
  sdd02GuardrailSpectrum,
  sdd02HarnessFormula,
  sdd02HarnessInputs,
  sdd02NationAnalogy,
  sdd02Priorities,
  sdd02TeamAChaos,
  sdd02TeamBRules,
  sdd02TribalRules,
} from "@/lib/sdd/sdd-02-content";
import {
  BranchLayout,
  ComparePanels,
  DiagramGroup,
  DiagramPanel,
  DiagramSplit,
  DiagramStack,
  FlowChain,
  FlowConnector,
  FlowNode,
  ForkEntry,
} from "./sdd-01-diagram-parts";

export function Sdd02DivergentDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-divergent-caption">
      <DiagramStack>
        <ForkEntry>
          <FlowNode label={sdd02DivergentHead} variant="accent" className="sdd01-node--center" />
          <BranchLayout columns={4} entryStem joined className="sdd02-priority-branch">
            {sdd02Priorities.map((priority) => (
              <FlowNode key={priority.label} label={priority.label} hint={priority.hint} variant="muted" />
            ))}
          </BranchLayout>
        </ForkEntry>

        <FlowConnector />

        <p className="sdd01-section-label">không có nguyên tắc chung</p>

        <FlowConnector />

        <DiagramGroup label="phân mảnh dần" tone="muted" bodyClassName="sdd02-group-chips">
          {sdd02ChaosOutcomes.map((item) => (
            <span key={item} className="sdd02-chaos-chip">
              {item}
            </span>
          ))}
        </DiagramGroup>

        <FlowConnector />

        <FlowNode label="Hỗn loạn repository" variant="danger" className="sdd01-node--center" />
      </DiagramStack>

      <figcaption id="sdd02-divergent-caption" className="p1-diagram-caption">
        Mọi mục tiêu đều hợp lý — nhưng không có constitution, chúng cạnh tranh và phân mảnh hệ thống.
      </figcaption>
    </figure>
  );
}

export function Sdd02TribalDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-tribal-caption">
      <div className="sdd02-tribal-stack">
        {sdd02TribalRules.map((rule) => (
          <div key={rule.surface} className="sdd02-tribal-card">
            <DiagramStack>
              <FlowNode label={rule.surface} variant="accent" className="sdd01-node--center" />
              <FlowConnector />
              <DiagramGroup label="mọi người đều biết — nhưng không ai biết rõ" tone="muted" bodyClassName="sdd02-group-chips">
                {rule.gaps.map((gap) => (
                  <span key={gap} className="sdd02-gap-chip">
                    {gap}
                  </span>
                ))}
              </DiagramGroup>
            </DiagramStack>
          </div>
        ))}
      </div>

      <p className="sdd02-tribal-punchline">Tribal knowledge — tồn tại trong đầu, không trong hệ thống.</p>

      <figcaption id="sdd02-tribal-caption" className="p1-diagram-caption">
        Quy tắc ngầm nghe có vẻ rõ ràng cho đến khi bạn hỏi chi tiết cụ thể.
      </figcaption>
    </figure>
  );
}

export function Sdd02ShiftDiagram() {
  return (
    <ComparePanels
      badLabel="Người nhớ luật"
      goodLabel="Hệ thống thực thi luật"
      badResult="Nguyên tắc là lời khuyên — dễ bỏ qua khi deadline gấp."
      goodResult="Nguyên tắc là ràng buộc — hệ thống từ chối khi vi phạm."
      bad={
        <div className="sdd01-compare-flow">
          <FlowNode label="Lời khuyên" variant="muted" />
          <FlowConnector />
          <p className="sdd02-soft-outcome">tùy chọn · có thể thương lượng · dễ quên</p>
        </div>
      }
      good={
        <div className="sdd01-compare-flow">
          <FlowNode label="Ràng buộc" variant="accent" />
          <FlowConnector />
          <p className="sdd02-hard-outcome">bắt buộc · có phiên bản · được kiểm tra</p>
        </div>
      }
    />
  );
}

export function Sdd02ConstitutionDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-constitution-caption">
      <DiagramSplit>
        <DiagramPanel label="Ẩn dụ quốc gia" tone="muted">
          <FlowChain steps={sdd02NationAnalogy} accentFirst={false} />
        </DiagramPanel>

        <DiagramPanel label="SpecKit stack" tone="accent">
          <FlowChain steps={sdd02GovStack} />
        </DiagramPanel>
      </DiagramSplit>

      <blockquote className="sdd01-quote-block">
        <p>Mọi quyết định phải được kiểm tra dựa trên constitution — không ai được tự ý bỏ qua.</p>
      </blockquote>

      <figcaption id="sdd02-constitution-caption" className="p1-diagram-caption">
        Constitution đặt giới hạn cho mọi plan, task và implementation phía dưới.
      </figcaption>
    </figure>
  );
}

export function Sdd02TeamsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-teams-caption">
      <ComparePanels
        badLabel="Đội A — không có constitution"
        goodLabel="Đội B — có constitution"
        badResult="Hệ thống chạy được — nhưng độ nhất quán giảm dần."
        goodResult="Phát triển nhanh — mọi người chơi cùng một bộ luật."
        bad={
          <ul className="sdd02-team-list sdd02-team-list--flat sdd02-team-list--chaos">
            {sdd02TeamAChaos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        }
        good={
          <ul className="sdd02-team-list sdd02-team-list--flat sdd02-team-list--rules">
            {sdd02TeamBRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        }
      />

      <figcaption id="sdd02-teams-caption" className="p1-diagram-caption">
        Hai đội cùng xây CRM — một đội tự quyết, một đội có constitution mã hóa.
      </figcaption>
    </figure>
  );
}

export function Sdd02AgentsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-agents-caption">
      <DiagramStack>
        <DiagramSplit>
          <DiagramPanel label="Truyền thống" tone="muted" result={sdd02AgentBefore.decisions}>
            <FlowNode label={sdd02AgentBefore.actors} variant="muted" className="sdd01-node--center" />
          </DiagramPanel>

          <DiagramPanel label="Kỷ nguyên AI" tone="accent" result={sdd02AgentAfter.decisions}>
            <FlowNode label={sdd02AgentAfter.actors} variant="accent" className="sdd01-node--center" />
          </DiagramPanel>
        </DiagramSplit>

        <p className="sdd01-section-label">không có ranh giới quyết định</p>

        <FlowConnector />

        <div className="sdd02-chip-row">
          {sdd02AgentChaosShort.map((item) => (
            <span key={item} className="sdd02-chip-row-item">
              {item}
            </span>
          ))}
        </div>

        <FlowConnector />

        <FlowNode label="Hỗn loạn repository" variant="danger" className="sdd01-node--center" />
      </DiagramStack>

      <figcaption id="sdd02-agents-caption" className="p1-diagram-caption">
        Tốc độ ra quyết định tăng mạnh — nếu không có governance, sai lệch tăng theo cấp số nhân.
      </figcaption>
    </figure>
  );
}

export function Sdd02ScopeDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-scope-caption">
      <p className="sdd01-section-label">chỉ quy định nguyên tắc quan trọng nhất</p>

      <div className="sdd02-pillar-grid">
        {sdd02ConstitutionPillars.map((pillar, index) => (
          <div key={pillar.title} className="sdd02-pillar-card">
            <span className="sdd02-pillar-index">{String(index + 1).padStart(2, "0")}</span>
            <p className="sdd02-pillar-title">{pillar.title}</p>
            <ul className="sdd02-pillar-examples">
              {pillar.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <figcaption id="sdd02-scope-caption" className="p1-diagram-caption">
        Constitution tốt không cố quy định mọi thứ — chỉ những ranh giới không được phép vi phạm.
      </figcaption>
    </figure>
  );
}

export function Sdd02GateDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-gate-caption">
      <DiagramStack className="sdd02-gate-stack">
        {sdd02GateRejections.map((caseItem) => (
          <div key={caseItem.attempt} className="sdd02-gate-row">
            <FlowNode label={caseItem.attempt} variant="muted" className="sdd02-gate-attempt" />

            <FlowConnector direction="right" className="sdd02-gate-arrow-h" />
            <FlowConnector className="sdd02-gate-arrow-v" />

            <DiagramGroup label="constitution check" tone="accent" className="sdd02-gate-group">
              <p className="sdd02-gate-rule">{caseItem.rule}</p>
              <FlowConnector />
              <FlowNode label={caseItem.outcome} variant="danger" className="sdd02-gate-outcome" />
            </DiagramGroup>
          </div>
        ))}
      </DiagramStack>

      <p className="sdd02-gate-label">Constitution là quality gate — không chỉ là tài liệu.</p>

      <figcaption id="sdd02-gate-caption" className="p1-diagram-caption">
        Plan và code bị từ chối tự động khi vi phạm constitution — không cần tranh luận.
      </figcaption>
    </figure>
  );
}

export function Sdd02HarnessDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-harness-caption">
      <ComparePanels
        badLabel="Chỉ có prompt"
        goodLabel="Harness đầy đủ"
        badResult="&ldquo;Build this feature&rdquo; — agent phải đoán mọi thứ."
        goodResult="Task + context + constitution — agent quyết định trong phạm vi."
        bad={
          <FlowNode label="Build this feature" variant="dashed" className="sdd01-node--center" />
        }
        good={
          <div className="sdd01-compare-flow">
            <div className="sdd02-chip-row" aria-label="đầu vào harness">
              {sdd02HarnessInputs.map((input) => (
                <span key={input} className="sdd02-chip-row-item">
                  {input}
                </span>
              ))}
            </div>
            <FlowConnector />
            <FlowNode label="Agent" className="sdd01-node--center sdd02-node-compact" />
          </div>
        }
      />

      <div className="sdd02-formula-bar">
        {sdd02HarnessFormula.map((term, index) => (
          <span key={term} className="sdd02-formula-term">
            {index > 0 ? <span className="sdd02-formula-plus" aria-hidden="true">+</span> : null}
            {term}
          </span>
        ))}
        <span className="sdd02-formula-gt" aria-hidden="true">&gt;</span>
        <span className="sdd02-formula-prompt">Chỉ prompt</span>
      </div>

      <figcaption id="sdd02-harness-caption" className="p1-diagram-caption">
        Harness tốt cung cấp context, constraints và validation — không chỉ thêm prompt dài hơn.
      </figcaption>
    </figure>
  );
}

export function Sdd02GuardrailsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-guardrails-caption">
      <div className="sdd02-spectrum-track" role="img" aria-label="Phổ tự do và rủi ro">
        <span className="sdd02-spectrum-axis sdd02-spectrum-axis--freedom">Tự do</span>
        <span className="sdd02-spectrum-axis sdd02-spectrum-axis--risk">Rủi ro</span>

        <div className="sdd02-spectrum-markers">
          {sdd02GuardrailSpectrum.map((point, index) => (
            <div
              key={point.label}
              className={`sdd02-spectrum-point${index === 2 ? " sdd02-spectrum-point--sweet" : ""}`}
            >
              <span className="sdd02-spectrum-dot" aria-hidden="true" />
              <p className="sdd02-spectrum-label">{point.label}</p>
              <p className="sdd02-spectrum-meta">
                {point.freedom} tự do · {point.risk} rủi ro
              </p>
            </div>
          ))}
        </div>
      </div>

      <blockquote className="sdd01-quote-block">
        <p>Tự do cao + rủi ro kiểm soát — sáng tạo trong phạm vi cho phép.</p>
      </blockquote>

      <figcaption id="sdd02-guardrails-caption" className="p1-diagram-caption">
        Constitutional governance tìm điểm cân bằng giữa tự do và an toàn — như lan can trên đường núi.
      </figcaption>
    </figure>
  );
}

export function Sdd02DecisionFlowDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd02-diagram" aria-labelledby="sdd02-decision-caption">
      <DiagramStack>
        <div className="sdd02-pipeline-centered">
          <p className="sdd01-section-label">trước đây</p>
          <div className="sdd02-inline-pipeline">
            <FlowNode label={sdd02DecisionBefore[0]} variant="muted" className="sdd02-node-compact" />
            <FlowConnector direction="right" />
            <FlowNode label={sdd02DecisionBefore[1]} variant="muted" className="sdd02-node-compact" />
          </div>
        </div>

        <FlowConnector />

        <FlowNode label="10 AI Agents" variant="accent" className="sdd01-node--center sdd02-node-compact" />

        <FlowConnector />

        <p className="sdd01-section-label">không có ranh giới</p>

        <div className="sdd02-chip-row">
          {sdd02AgentChaosShort.map((item) => (
            <span key={item} className="sdd02-chip-row-item">
              {item}
            </span>
          ))}
        </div>

        <FlowConnector />

        <FlowNode
          label="Ranh giới quyết định"
          hint="từ constitution"
          variant="accent"
          className="sdd01-node--center sdd02-node-compact"
        />
      </DiagramStack>

      <figcaption id="sdd02-decision-caption" className="p1-diagram-caption">
        Constitution tạo ranh giới quyết định — AI vẫn sáng tạo, nhưng trong phạm vi cho phép.
      </figcaption>
    </figure>
  );
}
