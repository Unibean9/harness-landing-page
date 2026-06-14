import {
  principle12AntiPatterns,
  principle12Benefits,
  principle12Comparison,
  principle12DebugQuestions,
  principle12FullTraceSchema,
  principle12Intro,
  principle12IntroQuestions,
  principle12PersistItems,
  principle12SignsCorrect,
  principle12SignsWrong,
  principle12StateLayers,
  principle12Summary,
  principle12TraceUsages,
} from "@/lib/principles/principle-12-content";
import { Principle12Diagram } from "./principle-12-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

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

      <section id="p12-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={12}
          variant="question"
          simple={principle12Intro.simple}
          note={principle12Intro.note}
          questions={principle12IntroQuestions}
        />
      </section>

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

      <section id="p12-comparison" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Traceable state khác logging thường ở đâu?</h2>
        <p className="p1-section-lead">
          Logging ghi sự kiện rời rạc. Traceable state ghi lại toàn bộ đường đi của execution.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Logging thường</p>
            <ul className="p1-compare-list">
              {principle12Comparison.map((item) => (
                <li key={item.aspect}>
                  <span className="font-mono text-[0.65rem] text-brand-primary/40">
                    {item.aspect}:{" "}
                  </span>
                  {item.logSide}
                </li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider" aria-hidden="true">
            <span>vs</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Traceable state</p>
            <ul className="p1-compare-list">
              {principle12Comparison.map((item) => (
                <li key={item.aspect}>
                  <span className="font-mono text-[0.65rem] text-brand-primary/40">
                    {item.aspect}:{" "}
                  </span>
                  {item.traceSide}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p12-full-schema" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Trace schema đầy đủ</h2>
        <p className="p1-section-lead">
          Không phải hệ thống nào cũng cần tất cả ngay từ đầu. Nhưng khi production, trace càng
          đầy đủ thì accountability càng cao:
        </p>

        <div className="p12-persist-log">
          <div className="p12-persist-header">
            <span className="p12-persist-title">trace_schema.ts</span>
            <span className="p12-persist-status">append-only</span>
          </div>
          <ul className="p12-persist-lines">
            {principle12FullTraceSchema.map((item) => (
              <li key={item.field} className="p12-persist-line">
                <span className="p12-persist-key">{item.field}</span>
                <span className="p12-persist-value">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="p12-trace-usages" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Trace dùng để làm gì?</h2>
        <p className="p1-section-lead">
          Ở mức nâng cao, trace không chỉ để debug, mà là dữ liệu học tập cho Harness:
        </p>

        <ul className="p1-benefit-grid">
          {principle12TraceUsages.map((item, index) => (
            <li key={item.label} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{item.label}</p>
              <p className="p1-benefit-body">{item.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p12-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle12SignsWrong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider" aria-hidden="true">
            <span>vs</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Áp dụng đúng</p>
            <ul className="p1-compare-list">
              {principle12SignsCorrect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p12-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={12}
          headline={principle12Summary.headline}
          points={principle12Summary.points}
        />
      </section>
    </article>
  );
}
