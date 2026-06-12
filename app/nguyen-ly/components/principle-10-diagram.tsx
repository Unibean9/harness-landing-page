import {
  principle10CuratedContext,
  principle10DiagramOutcomes,
  principle10FilteredOut,
  principle10NoiseSources,
  principle10TaskLabel,
} from "@/lib/principles/principle-10-content";

export function Principle10Diagram() {
  return (
    <figure className="p1-diagram p10-diagram" aria-labelledby="p10-diagram-caption">
      <p className="p10-task-chip">{principle10TaskLabel}</p>

      <div className="p10-funnel">
        <div className="p10-funnel-stage p10-funnel-stage--noise">
          <p className="p10-funnel-label">Nguồn thông tin hệ thống</p>
          <ul className="p10-noise-cloud">
            {principle10NoiseSources.map((source) => (
              <li key={source} className="p10-noise-tag">
                {source}
              </li>
            ))}
          </ul>
        </div>

        <div className="p10-funnel-neck">
          <svg
            className="p10-funnel-svg"
            viewBox="0 0 320 88"
            role="img"
            aria-label="Harness lọc nhiễu và xây dựng context theo nhiệm vụ"
          >
            <path
              d="M16 8 H304 L248 72 H72 Z"
              fill="rgb(180 83 9 / 0.1)"
              stroke="currentColor"
              strokeOpacity="0.32"
              strokeWidth="1.5"
            />
            <text x="160" y="36" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--model">
              Harness — context builder
            </text>
            <text x="160" y="56" textAnchor="middle" className="p1-diagram-svg-sublabel">
              cung cấp · loại bỏ · cập nhật · cấu trúc
            </text>
          </svg>
        </div>

        <ul className="p10-filtered-out" aria-label="Thông tin bị loại bỏ">
          {principle10FilteredOut.map((item) => (
            <li key={item} className="p10-filtered-tag">
              {item}
            </li>
          ))}
        </ul>

        <div className="p10-funnel-stage p10-funnel-stage--curated">
          <p className="p10-funnel-label">Context đã chọn cho nhiệm vụ</p>
          <ul className="p10-curated-row">
            {principle10CuratedContext.map((item) => (
              <li key={item} className="p10-curated-tag">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p10-funnel-agent">
          <span className="p10-funnel-arrow" aria-hidden="true">
            ↓
          </span>
          <div className="p10-agent-receiver">
            <p className="p10-agent-label">Agent</p>
            <p className="p10-agent-hint">Suy luận trên góc nhìn đã được lọc</p>
          </div>
        </div>

        <ul className="p10-outcome-row" aria-label="Kết quả khi Harness sở hữu context">
          {principle10DiagramOutcomes.map((outcome) => (
            <li key={outcome} className="p10-outcome-chip">
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <figcaption id="p10-diagram-caption" className="p1-diagram-caption">
        Harness chủ động lọc nhiễu và xây dựng context phù hợp — Agent không phải tự khám phá toàn bộ
        hệ thống trước khi làm việc.
      </figcaption>
    </figure>
  );
}
