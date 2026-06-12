import {
  principle13AntiPatterns,
  principle13Benefits,
  principle13Conversions,
  principle13RecoverySteps,
  principle13RepeatErrors,
} from "@/lib/principles/principle-13-content";
import { Principle13Diagram } from "./principle-13-diagram";

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
    </article>
  );
}
