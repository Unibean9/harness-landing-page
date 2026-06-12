import { principle06TribalSources } from "@/lib/principles/principle-06-content";

export function Principle06Diagram() {
  return (
    <figure className="p1-diagram p6-diagram" aria-labelledby="p6-diagram-caption">
      <div className="p2-diagram-split">
        <div className="p2-diagram-panel p2-diagram-panel--low">
          <p className="p2-diagram-panel-label">Kiến thức phân tán</p>
          <ul className="p6-source-list">
            {principle06TribalSources.map((source) => (
              <li key={source} className="p6-source-item">
                {source}
              </li>
            ))}
          </ul>
          <p className="p2-diagram-panel-result">Con người nhớ được · Agent không</p>
        </div>

        <div className="p2-diagram-panel p2-diagram-panel--high">
          <p className="p2-diagram-panel-label">Spec-as-source</p>
          <svg
            className="p6-spec-svg"
            viewBox="0 0 220 140"
            role="img"
            aria-hidden="true"
          >
            <rect
              x="40"
              y="20"
              width="140"
              height="72"
              rx="10"
              fill="rgb(180 83 9 / 0.1)"
              stroke="currentColor"
              strokeOpacity="0.38"
              strokeWidth="1.5"
            />
            <text x="110" y="48" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--model">
              Specification
            </text>
            <text x="110" y="68" textAnchor="middle" className="p1-diagram-svg-sublabel">
              version · review · validate
            </text>
            <text x="110" y="84" textAnchor="middle" className="p1-diagram-svg-sublabel">
              nguồn sự thật chính thức
            </text>

            <line x1="110" y1="92" x2="110" y2="108" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
            <polygon points="110,108 104,98 116,98" fill="currentColor" fillOpacity="0.35" />

            <rect x="72" y="112" width="76" height="22" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
            <text
              x="110"
              y="123"
              textAnchor="middle"
              dominantBaseline="middle"
              className="p1-diagram-svg-sublabel p6-spec-agent-label"
            >
              Agent + Harness
            </text>
          </svg>
          <p className="p2-diagram-panel-result">Cùng nguồn tham chiếu · kết quả nhất quán</p>
        </div>
      </div>

      <figcaption id="p6-diagram-caption" className="p1-diagram-caption">
        Specification phải là artifact chính thức trong hệ thống — không phải ghi chú hay kiến thức
        nằm rải rác trong Slack và email.
      </figcaption>
    </figure>
  );
}
