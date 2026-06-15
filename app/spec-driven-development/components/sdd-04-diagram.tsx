import {
  sdd04AiCurrent,
  sdd04AiOutdated,
  sdd04BuildPipeline,
  sdd04DriftTimeline,
  sdd04Fallbacks,
  sdd04FileVsSystem,
  sdd04GardenLiving,
  sdd04GardenOutcomes,
  sdd04GardenTraditional,
  sdd04HarnessKnowledge,
  sdd04LibraryCompare,
  sdd04OpenApiChain,
  sdd04OutputChain,
  sdd04Reasons,
  sdd04TerraformChain,
  sdd04TraceChain,
  sdd04TraditionalModel,
} from "@/lib/sdd/sdd-04-content";
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

export function Sdd04DriftDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-drift-caption">
      <DiagramStack>
        {sdd04DriftTimeline.map((item, index) => (
          <div key={item.time} className="sdd04-drift-step">
            <p className="sdd04-drift-time">{item.time}</p>
            <FlowNode
              label={item.state}
              variant={item.tone === "good" ? "accent" : item.tone === "warn" ? "default" : "danger"}
              className="sdd01-node--center sdd02-node-compact"
            />
            {index < sdd04DriftTimeline.length - 1 ? <FlowConnector /> : null}
          </div>
        ))}
      </DiagramStack>

      <p className="sdd04-diagram-note">Cuối cùng mọi người ngừng đọc documentation.</p>

      <figcaption id="sdd04-drift-caption" className="p1-diagram-caption">
        Documentation bắt đầu trùng thực tế — rồi trở thành di tích lịch sử, không còn là nguồn sự thật.
      </figcaption>
    </figure>
  );
}

export function Sdd04FallbackDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-fallback-caption">
      <DiagramStack>
        <FlowNode label="Documentation" variant="danger" className="sdd01-node--center sdd02-node-compact" />
        <FlowConnector />
        <p className="sdd01-section-label">thay vào đó, mọi người</p>
        <div className="sdd02-chip-row sdd04-fallback-row">
          {sdd04Fallbacks.map((item) => (
            <span key={item} className="sdd02-chip-row-item">
              {item}
            </span>
          ))}
        </div>
      </DiagramStack>

      <figcaption id="sdd04-fallback-caption" className="p1-diagram-caption">
        Khi docs không còn đáng tin, tri thức chảy qua kênh không chính thức.
      </figcaption>
    </figure>
  );
}

export function Sdd04OutputDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-output-caption">
      <DiagramStack>
        <FlowChain steps={sdd04OutputChain} accentFirst={false} />
        <p className="sdd04-diagram-note">
          Documentation là bước cuối — việc cần hoàn thành trước deadline. Hệ thống thì tiếp tục thay đổi.
        </p>
      </DiagramStack>

      <figcaption id="sdd04-output-caption" className="p1-diagram-caption">
        Phần lớn documentation được xem là output, không phải một phần của hệ thống đang sống.
      </figcaption>
    </figure>
  );
}

export function Sdd04ShiftDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-shift-caption">
      <ComparePanels
        badLabel="Mô tả hệ thống"
        goodLabel="Tiến hóa cùng hệ thống"
        badResult="Ảnh chụp một thời điểm — lỗi thời khi code đã đi xa."
        goodResult="Một phần của hệ thống — cập nhật khi implementation thay đổi."
        bad={
          <div className="sdd04-shift-quote sdd04-shift-quote--muted">
            Documentation describes the system
          </div>
        }
        good={
          <div className="sdd04-shift-quote sdd04-shift-quote--accent">
            Documentation evolves with the system
          </div>
        }
      />

      <figcaption id="sdd04-shift-caption" className="p1-diagram-caption">
        Living Documentation không chụp ảnh quá khứ — nó đồng bộ với hiện tại.
      </figcaption>
    </figure>
  );
}

export function Sdd04GardenDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-garden-caption">
      <DiagramSplit>
        <DiagramPanel label="Documentation truyền thống" tone="muted" result={sdd04GardenOutcomes.traditional.join(" · ")}>
          <FlowChain steps={sdd04GardenTraditional} accentFirst={false} />
        </DiagramPanel>

        <DiagramPanel label="Living Documentation" tone="accent" result={sdd04GardenOutcomes.living.join(" · ")}>
          <FlowChain steps={sdd04GardenLiving} />
        </DiagramPanel>
      </DiagramSplit>

      <figcaption id="sdd04-garden-caption" className="p1-diagram-caption">
        Khu vườn cần chăm sóc liên tục — documentation cũng vậy.
      </figcaption>
    </figure>
  );
}

export function Sdd04ReasonsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-reasons-caption">
      <div className="sdd04-reasons-panel">
        {sdd04Reasons.map((reason, index) => (
          <div key={reason.title} className="sdd04-reason-row">
            <p className="sdd04-reason-title">
              <span className="sdd04-reason-index">{index + 1}</span>
              {reason.title}
            </p>

            {reason.kind === "split" ? (
              <div className="sdd04-reason-split">
                <span className="sdd04-reason-node sdd04-reason-node--accent">{reason.left}</span>
                <span className="sdd04-reason-break" aria-hidden="true">
                  <span className="sdd04-reason-break-line" />
                  <span className="sdd04-reason-break-mark">≠</span>
                  <span className="sdd04-reason-break-line" />
                </span>
                <span className="sdd04-reason-node">{reason.right}</span>
              </div>
            ) : null}

            {reason.kind === "quote" ? (
              <p className="sdd04-reason-quote">{reason.quote}</p>
            ) : null}

            {reason.kind === "reward" ? (
              <div className="sdd04-reason-reward">
                <span className="sdd04-reason-reward-item sdd04-reason-reward-item--yes">
                  Viết code · {reason.code}
                </span>
                <span className="sdd04-reason-reward-item sdd04-reason-reward-item--no">
                  Viết docs · {reason.docs}
                </span>
              </div>
            ) : null}

            {reason.kind === "split" ? <p className="sdd04-reason-hint">{reason.hint}</p> : null}
          </div>
        ))}
      </div>

      <figcaption id="sdd04-reasons-caption" className="p1-diagram-caption">
        Ba lý do khiến documentation chết dần — không phải vì team lười, mà vì quy trình và động lực.
      </figcaption>
    </figure>
  );
}

export function Sdd04ModelsDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-models-caption">
      <DiagramSplit>
        <DiagramPanel label="Mô hình truyền thống" tone="muted" result="Documentation nằm cuối pipeline — một lần rồi thôi.">
          <FlowChain steps={sdd04TraditionalModel} accentFirst={false} />
        </DiagramPanel>

        <DiagramPanel label="Living Documentation" tone="accent" result="Documentation là một phần của pipeline — đồng bộ liên tục.">
          <DiagramStack className="sdd04-living-loop">
            <FlowChain steps={sdd04TraditionalModel} />
            <p className="sdd04-sync-loop" aria-hidden="true">
              <span className="sdd04-sync-arrow">↑</span>
              <span>continuous sync</span>
            </p>
          </DiagramStack>
        </DiagramPanel>
      </DiagramSplit>

      <figcaption id="sdd04-models-caption" className="p1-diagram-caption">
        Living Documentation không nằm cuối đường — nó quay lại đồng bộ với specification và implementation.
      </figcaption>
    </figure>
  );
}

export function Sdd04SystemDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-system-caption">
      <ComparePanels
        badLabel={sdd04FileVsSystem.traditional.label}
        goodLabel={sdd04FileVsSystem.living.label}
        badResult="Một file tĩnh — khó biết khi nào lỗi thời."
        goodResult="Có inputs, outputs, updates và validation."
        bad={<FlowNode label={sdd04FileVsSystem.traditional.value} variant="muted" className="sdd01-node--center" />}
        good={
          <div className="sdd02-chip-row sdd04-system-parts">
            {sdd04FileVsSystem.systemParts.map((part) => (
              <span key={part} className="sdd02-chip-row-item">
                {part}
              </span>
            ))}
          </div>
        }
      />

      <figcaption id="sdd04-system-caption" className="p1-diagram-caption">
        Living Documentation là hệ thống — không chỉ là tập hợp file.
      </figcaption>
    </figure>
  );
}

export function Sdd04ExamplesDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-examples-caption">
      <DiagramSplit>
        <DiagramPanel label="OpenAPI" tone="accent" result="Một nguồn sự thật — API đổi thì docs đổi theo.">
          <FlowChain steps={sdd04OpenApiChain} />
        </DiagramPanel>

        <DiagramPanel label="Infrastructure as Code" tone="accent" result="Definition và infrastructure là cùng một artifact.">
          <FlowChain steps={sdd04TerraformChain} />
        </DiagramPanel>
      </DiagramSplit>

      <p className="sdd04-diagram-note">Không tồn tại hai nguồn sự thật — chỉ một specification sinh ra phần còn lại.</p>

      <figcaption id="sdd04-examples-caption" className="p1-diagram-caption">
        OpenAPI và Terraform là hai ví dụ documentation sống thành công nhất trong thực tế.
      </figcaption>
    </figure>
  );
}

export function Sdd04AiDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-ai-caption">
      <DiagramSplit>
        <DiagramPanel label="Documentation lỗi thời" tone="muted" result="Agent quyết định sai vì context sai.">
          <FlowChain steps={sdd04AiOutdated} accentFirst={false} />
        </DiagramPanel>

        <DiagramPanel label="Documentation đồng bộ" tone="accent" result="Agent quyết định tốt hơn với context hiện tại.">
          <FlowChain steps={sdd04AiCurrent} />
        </DiagramPanel>
      </DiagramSplit>

      <MismatchRow left="Human resource" right="Machine resource" symbol="→" />

      <figcaption id="sdd04-ai-caption" className="p1-diagram-caption">
        AI agents là consumer của documentation — context lỗi thời kéo chất lượng agent xuống.
      </figcaption>
    </figure>
  );
}

export function Sdd04HarnessDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-harness-caption">
      <DiagramStack>
        <FlowNode label="Harness" variant="accent" className="sdd01-node--center" hint="điều phối toàn bộ" />

        <FlowConnector />

        <div className="sdd02-chip-row sdd04-harness-row">
          {sdd04HarnessKnowledge.map((item) => (
            <span key={item} className="sdd02-chip-row-item">
              {item}
            </span>
          ))}
        </div>

        <FlowConnector />

        <FlowNode
          label="Documentation = context layer"
          variant="accent"
          className="sdd01-node--center sdd02-node-compact"
        />
      </DiagramStack>

      <figcaption id="sdd04-harness-caption" className="p1-diagram-caption">
        Trong Harness Engineering, documentation là lớp tri thức — không phải tài sản phụ.
      </figcaption>
    </figure>
  );
}

export function Sdd04TraceDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-trace-caption">
      <FlowChain steps={sdd04TraceChain} />

      <p className="sdd04-diagram-note">Người đọc có thể lần ngược lại nguồn gốc của mọi thay đổi.</p>

      <figcaption id="sdd04-trace-caption" className="p1-diagram-caption">
        Living Documentation là một phần của graph tri thức — không còn là đoạn văn tách rời.
      </figcaption>
    </figure>
  );
}

export function Sdd04BuildingDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-building-caption">
      <DiagramStack>
        <FlowNode label="One Source of Truth" variant="accent" className="sdd01-node--center" />

        <FlowConnector />

        <p className="sdd01-section-label">generate everything else</p>

        <div className="sdd04-build-list">
          {sdd04BuildPipeline.map((row) => (
            <div key={row.source} className="sdd04-build-row">
              <span className="sdd04-build-source">{row.source}</span>
              <span className="sdd04-build-arrow" aria-hidden="true">
                →
              </span>
              <span className="sdd04-build-output">{row.output}</span>
            </div>
          ))}
        </div>
      </DiagramStack>

      <figcaption id="sdd04-building-caption" className="p1-diagram-caption">
        Bắt đầu bằng giảm số nơi chứa sự thật — càng ít viết lại bằng tay, docs càng sống lâu.
      </figcaption>
    </figure>
  );
}

export function Sdd04LibraryDiagram() {
  return (
    <figure className="p1-diagram sdd01-diagram sdd04-diagram" aria-labelledby="sdd04-library-caption">
      <DiagramSplit>
        <DiagramPanel label={sdd04LibraryCompare.book.label} tone="muted" result="Mô tả quá khứ.">
          <ul className="sdd02-team-list sdd02-team-list--flat sdd02-team-list--chaos">
            {sdd04LibraryCompare.book.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </DiagramPanel>

        <DiagramPanel label={sdd04LibraryCompare.wiki.label} tone="accent" result="Mô tả hiện tại.">
          <ul className="sdd02-team-list sdd02-team-list--flat sdd02-team-list--rules">
            {sdd04LibraryCompare.wiki.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </DiagramPanel>
      </DiagramSplit>

      <figcaption id="sdd04-library-caption" className="p1-diagram-caption">
        Living Documentation giống Wikipedia — không bao giờ thực sự hoàn thành, luôn phản ánh trạng thái hiện tại.
      </figcaption>
    </figure>
  );
}
