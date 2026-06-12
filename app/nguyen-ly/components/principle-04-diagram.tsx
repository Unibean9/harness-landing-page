import { principle04Capabilities } from "@/lib/principles/principle-04-content";

export function Principle04Diagram() {
  return (
    <figure className="p1-diagram p4-diagram" aria-labelledby="p4-diagram-caption">
      <ul className="p4-capability-row">
        {principle04Capabilities.map((cap, index) => (
          <li key={cap.label} className="p4-capability-pill">
            <span className="p4-capability-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="p4-capability-label">{cap.label}</span>
            <span className="p4-capability-hint">{cap.hint}</span>
          </li>
        ))}
      </ul>

      <svg
        className="p4-loop-svg"
        viewBox="0 0 480 120"
        role="img"
        aria-label="Vòng lặp kiểm soát production: quan sát, tái hiện, thử lại, tiếp tục và hoàn tác"
      >
        <rect
          x="24"
          y="36"
          width="432"
          height="56"
          rx="28"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.14"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />

        <circle cx="72" cy="64" r="6" fill="currentColor" fillOpacity="0.3" />
        <circle cx="168" cy="64" r="6" fill="currentColor" fillOpacity="0.3" />
        <circle cx="264" cy="64" r="6" fill="currentColor" fillOpacity="0.3" />
        <circle cx="360" cy="64" r="6" fill="currentColor" fillOpacity="0.3" />
        <circle cx="432" cy="64" r="6" fill="currentColor" fillOpacity="0.35" />

        <path
          d="M78 64 H162 M174 64 H258 M270 64 H354 M366 64 H426"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.2"
          fill="none"
        />

        <text x="72" y="28" textAnchor="middle" className="p1-diagram-svg-sublabel">
          Trace
        </text>
        <text x="168" y="28" textAnchor="middle" className="p1-diagram-svg-sublabel">
          Replay
        </text>
        <text x="264" y="28" textAnchor="middle" className="p1-diagram-svg-sublabel">
          Retry
        </text>
        <text x="360" y="28" textAnchor="middle" className="p1-diagram-svg-sublabel">
          Resume
        </text>
        <text x="432" y="28" textAnchor="middle" className="p1-diagram-svg-sublabel">
          Rollback
        </text>

        <text x="240" y="108" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--outer">
          production control loop
        </text>
      </svg>

      <figcaption id="p4-diagram-caption" className="p1-diagram-caption">
        Agent production không cần hoàn hảo — nhưng phải quan sát được, giải thích được và phục hồi
        được khi lỗi xảy ra.
      </figcaption>
    </figure>
  );
}
