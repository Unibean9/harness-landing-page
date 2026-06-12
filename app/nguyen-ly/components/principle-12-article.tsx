import {
  principle12AntiPatterns,
  principle12Benefits,
  principle12DebugQuestions,
  principle12PersistItems,
  principle12StateLayers,
} from "@/lib/principles/principle-12-content";
import { Principle12Diagram } from "./principle-12-diagram";

export function Principle12Article() {
  return (
    <article className="p1-article" aria-labelledby="p12-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 12</p>
        <h1 id="p12-title" className="principles-doc-title">
          Traceable state
        </h1>
        <p className="principles-section-quote">
          State phải lưu input, context, output, action, error và business result.
        </p>
      </header>

      <section id="p12-diagram" className="p1-section scroll-mt-28">
        <Principle12Diagram />
      </section>

      <section id="p12-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">Khi Agent mắc lỗi, đội ngũ thường muốn biết:</p>

        <ul className="p12-question-row">
          {principle12DebugQuestions.map((question) => (
            <li key={question} className="p12-question-chip">
              <span className="p12-question-mark" aria-hidden="true">
                ?
              </span>
              <span>{question}</span>
            </li>
          ))}
        </ul>

        <p className="p1-section-note">Nếu không có state, những câu hỏi này không thể trả lời.</p>
      </section>

      <section id="p12-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            State phải lưu được mọi lớp thông tin <span>quan trọng</span> — không chỉ output cuối
            cùng.
          </p>
        </blockquote>

        <div className="p12-state-record">
          <p className="p12-state-record-label">State record</p>
          <ul className="p12-state-stack">
            {principle12StateLayers.map((layer, index) => (
              <li key={layer.label} className="p12-state-layer">
                <span className="p12-state-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="p12-state-body">
                  <p className="p12-state-label">{layer.label}</p>
                  <p className="p12-state-hint">{layer.hint}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="p12-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p12-benefit-strip">
          {principle12Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p12-benefit-item">
              <span className="p12-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p12-benefit-title">{benefit.title}</p>
              <p className="p12-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p12-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">Harness nên persist các lớp sau trong mỗi phiên chạy:</p>

        <div className="p12-persist-log">
          <div className="p12-persist-header">
            <span className="p12-persist-title">state_store.log</span>
            <span className="p12-persist-status">append-only</span>
          </div>
          <ul className="p12-persist-lines">
            {principle12PersistItems.map((item) => (
              <li key={item.key} className="p12-persist-line">
                <span className="p12-persist-key">{item.label}</span>
                <span className="p12-persist-value">{item.log}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="p12-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p12-gap-list">
          {principle12AntiPatterns.map((item) => (
            <li key={item.title} className="p12-gap-item">
              <div className="p12-gap-visual" aria-hidden="true">
                <span className="p12-gap-segment" />
                <span className="p12-gap-break">{item.gap}</span>
                <span className="p12-gap-segment p12-gap-segment--after" />
              </div>
              <div>
                <p className="p12-gap-title">{item.title}</p>
                <p className="p12-gap-body">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
