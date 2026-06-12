export function Principle02Diagram() {
  return (
    <figure className="p1-diagram p2-diagram" aria-labelledby="p2-diagram-caption">
      <div className="p2-diagram-split">
        <div className="p2-diagram-panel p2-diagram-panel--low">
          <p className="p2-diagram-panel-label">Harnessability thấp</p>
          <svg
            className="p2-diagram-svg"
            viewBox="0 0 220 160"
            role="img"
            aria-hidden="true"
          >
            <rect x="18" y="24" width="72" height="40" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="4 3" transform="rotate(-6 54 44)" />
            <rect x="98" y="18" width="88" height="36" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="4 3" transform="rotate(4 142 36)" />
            <rect x="32" y="78" width="96" height="44" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 3" transform="rotate(3 80 100)" />
            <rect x="120" y="88" width="72" height="48" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.2" strokeDasharray="4 3" transform="rotate(-5 156 112)" />
            <path d="M54 64 L142 54 M80 100 L156 88 M110 44 L80 100" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
            <text x="110" y="148" textAnchor="middle" className="p1-diagram-svg-sublabel">
              phụ thuộc ẩn · module mờ
            </text>
          </svg>
          <p className="p2-diagram-panel-result">Agent phải suy đoán</p>
        </div>

        <div className="p2-diagram-panel p2-diagram-panel--high">
          <p className="p2-diagram-panel-label">Harnessability cao</p>
          <svg
            className="p2-diagram-svg"
            viewBox="0 0 220 160"
            role="img"
            aria-hidden="true"
          >
            <rect x="16" y="28" width="56" height="36" rx="6" fill="rgb(180 83 9 / 0.08)" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" />
            <text x="44" y="50" textAnchor="middle" className="p1-diagram-svg-sublabel">Mod A</text>
            <rect x="82" y="28" width="56" height="36" rx="6" fill="rgb(180 83 9 / 0.08)" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" />
            <text x="110" y="50" textAnchor="middle" className="p1-diagram-svg-sublabel">Mod B</text>
            <rect x="148" y="28" width="56" height="36" rx="6" fill="rgb(180 83 9 / 0.08)" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" />
            <text x="176" y="50" textAnchor="middle" className="p1-diagram-svg-sublabel">Mod C</text>

            <rect x="24" y="82" width="172" height="28" rx="6" fill="rgb(180 83 9 / 0.12)" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
            <text x="110" y="100" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--model">
              Harness
            </text>

            <rect x="72" y="122" width="76" height="24" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
            <text x="110" y="138" textAnchor="middle" className="p1-diagram-svg-sublabel">Agent</text>

            <line x1="44" y1="64" x2="110" y2="82" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="110" y1="64" x2="110" y2="82" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="176" y1="64" x2="110" y2="82" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="110" y1="110" x2="110" y2="122" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          </svg>
          <p className="p2-diagram-panel-result">Harness kiểm soát được</p>
        </div>
      </div>

      <figcaption id="p2-diagram-caption" className="p1-diagram-caption">
        Harnessability đo mức độ một hệ thống có thể được Harness hiểu, định hướng và kiểm soát — không
        chỉ mức độ con người có thể đọc code.
      </figcaption>
    </figure>
  );
}
