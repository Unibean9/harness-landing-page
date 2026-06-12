import { principle03Channels } from "@/lib/principles/principle-03-content";

export function Principle03Diagram() {
  return (
    <figure className="p1-diagram p3-diagram" aria-labelledby="p3-diagram-caption">
      <ul className="p3-channel-row">
        {principle03Channels.map((channel) => (
          <li key={channel.label} className="p3-channel-pill">
            <span className="p3-channel-label">{channel.label}</span>
            <span className="p3-channel-hint">{channel.hint}</span>
          </li>
        ))}
      </ul>

      <svg
        className="p3-converge-svg"
        viewBox="0 0 480 200"
        role="img"
        aria-label="Năm kênh kích hoạt hội tụ vào một Harness duy nhất, sau đó đến Agent"
      >
        <line x1="48" y1="24" x2="240" y2="108" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2" />
        <line x1="120" y1="24" x2="240" y2="108" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2" />
        <line x1="240" y1="24" x2="240" y2="108" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2" />
        <line x1="360" y1="24" x2="240" y2="108" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2" />
        <line x1="432" y1="24" x2="240" y2="108" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2" />

        {[48, 120, 240, 360, 432].map((x) => (
          <circle key={x} cx={x} cy="24" r="4" fill="currentColor" fillOpacity="0.28" />
        ))}

        <rect
          x="128"
          y="108"
          width="224"
          height="44"
          rx="10"
          fill="rgb(180 83 9 / 0.12)"
          stroke="currentColor"
          strokeOpacity="0.38"
          strokeWidth="1.5"
        />
        <text x="240" y="136" textAnchor="middle" className="p1-diagram-svg-label p1-diagram-svg-label--model">
          Harness — control layer
        </text>

        <line x1="240" y1="152" x2="240" y2="168" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" />
        <polygon points="240,168 234,158 246,158" fill="currentColor" fillOpacity="0.35" />

        <rect
          x="184"
          y="172"
          width="112"
          height="24"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
        <text x="240" y="188" textAnchor="middle" className="p1-diagram-svg-sublabel">
          Agent
        </text>
      </svg>

      <figcaption id="p3-diagram-caption" className="p1-diagram-caption">
        Kênh kích hoạt có thể đa dạng — nhưng mọi luồng thực thi phải đi qua cùng một Harness trước khi
        chạm Agent.
      </figcaption>
    </figure>
  );
}
