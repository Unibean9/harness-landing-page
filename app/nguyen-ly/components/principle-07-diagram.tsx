import { principle07PauseConditions } from "@/lib/principles/principle-07-content";

export function Principle07Diagram() {
  return (
    <figure className="p1-diagram p7-diagram" aria-labelledby="p7-diagram-caption">
      <svg
        className="p7-checkpoint-svg"
        viewBox="0 0 480 200"
        role="img"
        aria-label="Workflow Agent với điểm kiểm soát con người khi thiếu dữ liệu, rủi ro cao, độ tin cậy thấp hoặc tác động lớn"
      >
        <rect x="24" y="80" width="80" height="40" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2" />
        <text x="64" y="104" textAnchor="middle" className="p1-diagram-svg-sublabel">Agent</text>

        <line x1="104" y1="100" x2="148" y2="100" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2" />
        <polygon points="148,100 140,94 140,106" fill="currentColor" fillOpacity="0.3" />

        <rect x="148" y="68" width="120" height="64" rx="10" fill="rgb(180 83 9 / 0.1)" stroke="currentColor" strokeOpacity="0.38" strokeWidth="1.5" />
        <text x="208" y="92" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--model">
          Human gate
        </text>
        <text x="208" y="112" textAnchor="middle" className="p1-diagram-svg-sublabel">
          pause &amp; escalate
        </text>

        <line x1="268" y1="100" x2="312" y2="100" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2" />
        <polygon points="312,100 304,94 304,106" fill="currentColor" fillOpacity="0.3" />

        <rect x="312" y="80" width="80" height="40" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2" />
        <text x="352" y="104" textAnchor="middle" className="p1-diagram-svg-sublabel">Tiếp tục</text>

        <line x1="392" y1="100" x2="436" y2="100" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2" />
        <polygon points="436,100 428,94 428,106" fill="currentColor" fillOpacity="0.3" />

        <rect x="436" y="88" width="28" height="24" rx="6" fill="rgb(180 83 9 / 0.15)" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
        <text x="450" y="104" textAnchor="middle" className="p1-diagram-svg-sublabel">✓</text>
      </svg>

      <ul className="p7-trigger-row">
        {principle07PauseConditions.map((condition) => (
          <li key={condition.label} className="p7-trigger-pill">
            <span className="p7-trigger-label">{condition.label}</span>
            <span className="p7-trigger-hint">{condition.hint}</span>
          </li>
        ))}
      </ul>

      <figcaption id="p7-diagram-caption" className="p1-diagram-caption">
        Con người là control point chính thức — Agent dừng lại và yêu cầu xác nhận khi gặp điều kiện
        rủi ro, không phải tham gia mọi bước.
      </figcaption>
    </figure>
  );
}
