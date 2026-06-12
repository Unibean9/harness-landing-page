import { principle01HarnessLayers } from "@/lib/principles/principle-01-content";

export function Principle01Diagram() {
  return (
    <figure className="p1-diagram" aria-labelledby="p1-diagram-caption">
      <div className="p1-diagram-equation" aria-hidden="true">
        <span className="p1-diagram-agent">Agent</span>
        <span className="p1-diagram-equals">=</span>
        <span className="p1-diagram-model">Model</span>
        <span className="p1-diagram-plus">+</span>
        <span className="p1-diagram-harness">Harness</span>
      </div>

      <svg
        className="p1-diagram-svg"
        viewBox="0 0 520 220"
        role="img"
        aria-label="Sơ đồ: Model là lõi, Harness bao quanh với bảy thành phần vận hành"
      >
        <defs>
          <linearGradient id="p1-model-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(180 83 9 / 0.14)" />
            <stop offset="100%" stopColor="rgb(180 83 9 / 0.06)" />
          </linearGradient>
        </defs>

        <rect
          x="24"
          y="28"
          width="472"
          height="164"
          rx="14"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.14"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <text x="260" y="52" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--outer">
          Harness — hệ thống vận hành
        </text>

        <rect x="188" y="78" width="144" height="72" rx="10" fill="url(#p1-model-fill)" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" />
        <text x="260" y="110" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--model">
          Model
        </text>
        <text x="260" y="132" textAnchor="middle" className="p1-diagram-svg-sublabel">
          lõi suy luận
        </text>

        <line x1="188" y1="114" x2="72" y2="114" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="332" y1="114" x2="448" y2="114" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="72" cy="114" r="3" fill="currentColor" fillOpacity="0.35" />
        <circle cx="448" cy="114" r="3" fill="currentColor" fillOpacity="0.35" />
      </svg>

      <ul className="p1-diagram-layers">
        {principle01HarnessLayers.map((layer) => (
          <li key={layer.label} className="p1-diagram-layer">
            <span className="p1-diagram-layer-label">{layer.label}</span>
            <span className="p1-diagram-layer-hint">{layer.hint}</span>
          </li>
        ))}
      </ul>

      <figcaption id="p1-diagram-caption" className="p1-diagram-caption">
        Model chỉ là một phần. Harness quyết định Agent được phép làm gì và được kiểm soát như thế nào.
      </figcaption>
    </figure>
  );
}
