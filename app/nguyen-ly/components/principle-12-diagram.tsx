import { principle12TraceEvents } from "@/lib/principles/principle-12-content";

export function Principle12Diagram() {
  return (
    <figure className="p1-diagram p12-diagram" aria-labelledby="p12-diagram-caption">
      <div className="p12-trace-panel">
        <div className="p12-trace-header">
          <span className="p12-trace-title">execution trace</span>
          <span className="p12-trace-meta">run_id: 9f2a · persisted</span>
        </div>

        <ol className="p12-trace-timeline">
          {principle12TraceEvents.map((event, index) => (
            <li
              key={event.step}
              className={`p12-trace-event p12-trace-event--${event.kind}`}
            >
              <div className="p12-trace-rail" aria-hidden="true">
                <span className="p12-trace-dot" />
                {index < principle12TraceEvents.length - 1 ? (
                  <span className="p12-trace-line" />
                ) : null}
              </div>

              <div className="p12-trace-content">
                <div className="p12-trace-meta-row">
                  <span className="p12-trace-step">{event.step}</span>
                  <span className="p12-trace-time">{event.time}</span>
                  <span className="p12-trace-kind">{event.label}</span>
                </div>
                <p className="p12-trace-detail">{event.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <figcaption id="p12-diagram-caption" className="p1-diagram-caption">
        Mọi bước quan trọng được ghi lại theo thời gian — khi lỗi xảy ra, đội ngũ có thể truy ngược
        từ business result về input và context.
      </figcaption>
    </figure>
  );
}
