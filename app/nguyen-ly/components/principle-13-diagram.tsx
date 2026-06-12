import { principle13Conversions } from "@/lib/principles/principle-13-content";

const artifactVariants = ["test", "rule", "sensor", "spec"] as const;

export function Principle13Diagram() {
  return (
    <figure className="p1-diagram p13-diagram" aria-labelledby="p13-diagram-caption">
      <div className="p13-loop-flow">
        <div className="p13-error-panel">
          <div className="p13-error-header">
            <span className="p13-error-status">
              <span className="p13-error-dot" aria-hidden="true" />
              failed
            </span>
            <span className="p13-error-meta">run_id: 9f2a · agent_output</span>
          </div>
          <p className="p13-error-title">Error signal</p>
          <p className="p13-error-detail">schema drift · missing field</p>
        </div>

        <p className="p13-flow-arrow" aria-hidden="true">
          ↓
        </p>

        <div className="p13-forge-panel">
          <p className="p13-forge-label">Harness học từ lỗi</p>
          <p className="p13-forge-hint">Agent thất bại → chuyển thành artifact bảo vệ mới</p>
        </div>

        <p className="p13-flow-arrow" aria-hidden="true">
          ↓
        </p>

        <ul className="p13-artifact-grid">
          {principle13Conversions.map((item, index) => (
            <li
              key={item.label}
              className={`p13-artifact-card p13-artifact-card--${artifactVariants[index]}`}
            >
              <span className="p13-artifact-badge" aria-hidden="true">
                {item.icon}
              </span>
              <div className="p13-artifact-body">
                <p className="p13-artifact-label">{item.label}</p>
                <p className="p13-artifact-hint">{item.hint}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="p13-loop-strip">
          <span className="p13-loop-arrow" aria-hidden="true">
            ↻
          </span>
          <p className="p13-loop-caption">Mục tiêu: ngăn lỗi lặp lại — không chỉ sửa triệu chứng</p>
        </div>
      </div>

      <figcaption id="p13-diagram-caption" className="p1-diagram-caption">
        Mỗi lỗi là feedback cho Harness — chuyển thành test, rule, sensor hoặc spec để hệ thống mạnh
        hơn sau mỗi lần thất bại.
      </figcaption>
    </figure>
  );
}
