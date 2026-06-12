import {
  principle05GuideItems,
  principle05SensorChecks,
} from "@/lib/principles/principle-05-content";

export function Principle05Diagram() {
  return (
    <figure className="p1-diagram p5-diagram" aria-labelledby="p5-diagram-caption">
      <div className="p5-pipeline">
        <div className="p5-pipeline-stage p5-pipeline-stage--guide">
          <p className="p5-pipeline-label">Guide</p>
          <p className="p5-pipeline-sublabel">Trước khi hành động</p>
          <ul className="p5-pipeline-list">
            {principle05GuideItems.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        </div>

        <div className="p5-pipeline-arrow" aria-hidden="true">
          <span>→</span>
        </div>

        <div className="p5-pipeline-stage p5-pipeline-stage--agent">
          <p className="p5-pipeline-label">Agent</p>
          <p className="p5-pipeline-sublabel">Thực thi</p>
        </div>

        <div className="p5-pipeline-arrow" aria-hidden="true">
          <span>→</span>
        </div>

        <div className="p5-pipeline-stage p5-pipeline-stage--sensor">
          <p className="p5-pipeline-label">Sensor</p>
          <p className="p5-pipeline-sublabel">Sau khi hành động</p>
          <ul className="p5-pipeline-list">
            {principle05SensorChecks.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption id="p5-diagram-caption" className="p1-diagram-caption">
        Guide định hướng trước khi chạy (feedforward). Sensor đánh giá sau khi chạy (feedback). Cả hai
        cùng biến Agent từ hộp đen thành hệ thống có thể kiểm soát.
      </figcaption>
    </figure>
  );
}
