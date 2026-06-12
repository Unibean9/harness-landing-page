import {
  principle04AntiPatterns,
  principle04Benefits,
  principle04Capabilities,
  principle04PracticeChecks,
  principle04RightFocus,
  principle04WrongFocus,
} from "@/lib/principles/principle-04-content";
import { Principle04Diagram } from "./principle-04-diagram";

export function Principle04Article() {
  return (
    <article className="p1-article" aria-labelledby="p4-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 04</p>
        <h1 id="p4-title" className="principles-doc-title">
          Production controllability
        </h1>
        <p className="principles-section-quote">
          Mọi hành vi của Agent phải có thể quan sát, giải thích và khôi phục khi cần thiết.
        </p>
      </header>

      <section id="p4-diagram" className="p1-section scroll-mt-28">
        <Principle04Diagram />
      </section>

      <section id="p4-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Agent sẽ luôn mắc lỗi. Điều quan trọng không phải là loại bỏ hoàn toàn lỗi — mà là đảm bảo
          hệ thống có thể phản ứng khi lỗi xảy ra.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Tư duy sai</p>
            <ul className="p1-compare-list">
              {principle04WrongFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider" aria-hidden="true">
            <span>→</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Tư duy đúng</p>
            <ul className="p1-compare-list">
              {principle04RightFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p4-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Một Agent production-ready cần có khả năng{" "}
            <span>Trace · Replay · Retry · Resume · Rollback</span>.
          </p>
        </blockquote>

        <p className="p1-section-note">
          Nếu không có những khả năng này, hệ thống rất khó vận hành ở quy mô lớn.
        </p>

        <ul className="p2-trait-grid">
          {principle04Capabilities.map((cap, index) => (
            <li key={cap.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{cap.label}</p>
              <p className="p2-trait-hint">{cap.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p4-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p1-benefit-grid">
          {principle04Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p4-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">Triển khai:</p>

        <ul className="p1-checklist">
          {principle04PracticeChecks.map((item) => (
            <li key={item} className="p1-checklist-item">
              <span className="p1-checklist-mark" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p4-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle04AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
