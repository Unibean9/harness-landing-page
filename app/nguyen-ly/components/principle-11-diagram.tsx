import {
  principle11DiagramRejectSignals,
  principle11SchemaFields,
} from "@/lib/principles/principle-11-content";

export function Principle11Diagram() {
  return (
    <figure className="p1-diagram p11-diagram" aria-labelledby="p11-diagram-caption">
      <div className="p11-gate-flow">
        <div className="p11-flow-node">
          <p className="p11-flow-label">Agent output</p>
          <p className="p11-flow-hint">Prose hoặc structured — tùy cách thiết kế</p>
        </div>

        <p className="p11-flow-arrow" aria-hidden="true">
          ↓
        </p>

        <div className="p11-flow-node p11-flow-node--gate">
          <p className="p11-flow-label">Schema gate</p>
          <p className="p11-flow-hint">Harness Sensor · validate trước khi execute</p>
        </div>

        <p className="p11-flow-arrow" aria-hidden="true">
          ↓
        </p>

        <div className="p11-gate-results">
          <div className="p11-result-row p11-result-row--reject">
            <p className="p11-result-badge">✕</p>
            <div className="p11-result-body">
              <p className="p11-result-title">Free-form</p>
              <ul className="p11-result-list">
                {principle11DiagramRejectSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
              <p className="p11-result-verdict">Workflow dừng · không tự động hóa được</p>
            </div>
          </div>

          <div className="p11-result-row p11-result-row--pass">
            <p className="p11-result-badge">✓</p>
            <div className="p11-result-body">
              <p className="p11-result-title">Schema contract</p>
              <ul className="p11-schema-fields">
                {principle11SchemaFields.map((field) => (
                  <li key={field.name} className="p11-schema-field">
                    <span className="p11-schema-name">{field.name}</span>
                    <span className="p11-schema-type">{field.type}</span>
                    {field.required ? <span className="p11-schema-required">required</span> : null}
                  </li>
                ))}
              </ul>
              <p className="p11-result-verdict">Validate · integrate · automate</p>
            </div>
          </div>
        </div>
      </div>

      <figcaption id="p11-diagram-caption" className="p1-diagram-caption">
        Structured-Output-First đặt schema validator ở Harness — chỉ output khớp contract mới đi tiếp
        vào workflow tự động.
      </figcaption>
    </figure>
  );
}
