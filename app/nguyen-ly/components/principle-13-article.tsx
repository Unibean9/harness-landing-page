import {
  principle13AntiPatterns,
  principle13Benefits,
  principle13Conversions,
  principle13ErrorCategories,
  principle13ErrorMapping,
  principle13Intro,
  principle13KnowledgeBaseFields,
  principle13RecoverySteps,
  principle13RepeatErrors,
  principle13SignsCorrect,
  principle13SignsWrong,
  principle13Summary,
} from "@/lib/principles/principle-13-content";
import { Principle13Diagram } from "./principle-13-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle13Article() {
  return (
    <article className="p1-article" aria-labelledby="p13-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 13</p>
        <h1 id="p13-title" className="principles-doc-title">
          Error as feedback
        </h1>
        <p className="principles-section-quote">
          Lỗi là tín hiệu — harness thiếu tool, guardrail hoặc tài liệu.
        </p>
      </header>

      <section id="p13-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={13}
          variant="definition"
          term="Error as feedback"
          simple={principle13Intro.simple}
          note={principle13Intro.note}
        />
      </section>

      <section id="p13-diagram" className="p1-section scroll-mt-28">
        <Principle13Diagram />
      </section>

      <section id="p13-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Nhiều đội ngũ sửa từng lỗi riêng lẻ — nhưng cùng một loại lỗi lại tiếp tục xuất hiện:
        </p>

        <ul className="p13-repeat-stack">
          {principle13RepeatErrors.map((error) => (
            <li key={error.attempt} className="p13-repeat-item">
              <span className="p13-repeat-badge">Lần {error.attempt}</span>
              <span className="p13-repeat-label">{error.label}</span>
            </li>
          ))}
        </ul>

        <p className="p1-section-note">
          Nguyên nhân là hệ thống không học được từ những lỗi trước đó.
        </p>
      </section>

      <section id="p13-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Mỗi lỗi nên được chuyển thành <span>artifact bảo vệ mới</span> — mục tiêu là ngăn lỗi
            lặp lại.
          </p>
        </blockquote>

        <ul className="p13-shield-grid">
          {principle13Conversions.map((item) => (
            <li key={item.label} className="p13-shield-card">
              <span className="p13-shield-icon" aria-hidden="true">
                {item.icon}
              </span>
              <p className="p13-shield-label">{item.label}</p>
              <p className="p13-shield-hint">{item.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p13-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p13-maturity-ladder">
          {principle13Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p13-maturity-step">
              <span className="p13-maturity-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="p13-maturity-title">{benefit.title}</p>
                <p className="p13-maturity-body">{benefit.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="p13-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">Khi Agent thất bại — playbook cho harness:</p>

        <ol className="p13-playbook">
          {principle13RecoverySteps.map((step, index) => (
            <li key={step.label} className="p13-playbook-step">
              <span className="p13-playbook-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="p13-playbook-body">
                <p className="p13-playbook-label">{step.label}</p>
                <p className="p13-playbook-hint">{step.hint}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="p13-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p13-loop-fail-grid">
          {principle13AntiPatterns.map((item) => (
            <li key={item.title} className="p13-loop-fail-card">
              <div className={`p13-loop-icon p13-loop-icon--${item.loop}`} aria-hidden="true">
                {item.loop === "repeat" ? "↻↻" : item.loop === "broken" ? "↯" : "○"}
              </div>
              <p className="p13-loop-fail-title">{item.title}</p>
              <p className="p13-loop-fail-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p13-error-mapping" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Lỗi → Cải tiến Harness</h2>
        <p className="p1-section-lead">
          Mỗi loại lỗi nên dẫn đến một cải tiến cụ thể trong Harness. Đây là bản đồ chuyển đổi:
        </p>

        <ul className="p13-mapping-table">
          {principle13ErrorMapping.map((item) => (
            <li key={item.errorType} className="p13-mapping-row">
              <span className="p13-mapping-error">{item.errorType}</span>
              <span className="p13-mapping-arrow" aria-hidden="true">
                →
              </span>
              <span className="p13-mapping-fix">{item.improvement}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p13-error-categories" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Phân loại lỗi</h2>
        <p className="p1-section-lead">
          Để áp dụng Error as feedback hiệu quả, cần biết lỗi thuộc loại nào. Có tám nhóm lỗi
          chính:
        </p>

        <ul className="p1-benefit-grid">
          {principle13ErrorCategories.map((item) => (
            <li key={item.label} className="p1-benefit-card">
              <span className="p1-benefit-index">{item.index}</span>
              <p className="p1-benefit-title">{item.label}</p>
              <p className="p1-benefit-body">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p13-knowledge-base" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Error knowledge base</h2>
        <p className="p1-section-lead">
          Ở mức nâng cao, lỗi trở thành dữ liệu vận hành của Harness. Mỗi lỗi được ghi vào
          knowledge base:
        </p>

        <div className="p12-persist-log">
          <div className="p12-persist-header">
            <span className="p12-persist-title">error_kb.log</span>
            <span className="p12-persist-status">growing</span>
          </div>
          <ul className="p12-persist-lines">
            {principle13KnowledgeBaseFields.map((item) => (
              <li key={item.field} className="p12-persist-line">
                <span className="p12-persist-key">{item.field}</span>
                <span className="p12-persist-value">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="p13-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle13SignsWrong.map((item) => (
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
              {principle13SignsCorrect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p13-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={13}
          headline={principle13Summary.headline}
          points={principle13Summary.points}
        />
      </section>
    </article>
  );
}
