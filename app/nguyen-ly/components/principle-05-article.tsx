import {
  principle05AntiPatterns,
  principle05Benefits,
  principle05GuideItems,
  principle05GuidePractice,
  principle05PromptOnlyProblems,
  principle05SensorChecks,
  principle05SensorPractice,
  principle05WithoutGuideSensor,
} from "@/lib/principles/principle-05-content";
import { Principle05Diagram } from "./principle-05-diagram";

export function Principle05Article() {
  return (
    <article className="p1-article" aria-labelledby="p5-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 05</p>
        <h1 id="p5-title" className="principles-doc-title">
          Guide &amp; Sensor
        </h1>
        <p className="principles-section-quote">
          Mọi Agent cần được hướng dẫn trước khi hành động và được đánh giá sau khi hành động.
        </p>
      </header>

      <section id="p5-diagram" className="p1-section scroll-mt-28">
        <Principle05Diagram />
      </section>

      <section id="p5-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Nhiều hệ thống chỉ tập trung vào prompt và bỏ qua cơ chế kiểm tra.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Thiếu sót phổ biến</p>
            <ul className="p1-compare-list">
              {principle05PromptOnlyProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider" aria-hidden="true">
            <span>→</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Hệ quả</p>
            <ul className="p1-compare-list">
              {principle05WithoutGuideSensor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p5-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>

        <div className="p5-dual-principle">
          <div className="p5-dual-panel p5-dual-panel--guide">
            <p className="p5-dual-label">Guide</p>
            <p className="p5-dual-lead">Giúp Agent hiểu trước khi chạy:</p>
            <ul className="p2-trait-grid p5-dual-grid">
              {principle05GuideItems.map((item, index) => (
                <li key={item.label} className="p2-trait-card">
                  <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="p2-trait-label">{item.label}</p>
                  <p className="p2-trait-hint">{item.hint}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p5-dual-panel p5-dual-panel--sensor">
            <p className="p5-dual-label">Sensor</p>
            <p className="p5-dual-lead">Giúp hệ thống đánh giá sau khi chạy:</p>
            <ul className="p2-trait-grid p5-dual-grid">
              {principle05SensorChecks.map((item, index) => (
                <li key={item.label} className="p2-trait-card">
                  <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="p2-trait-label">{item.label}</p>
                  <p className="p2-trait-hint">{item.hint}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p5-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p1-benefit-grid">
          {principle05Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p5-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>

        <div className="p5-practice-split">
          <div className="p5-practice-panel">
            <p className="p5-practice-label">Guide có thể là</p>
            <ul className="p1-checklist">
              {principle05GuidePractice.map((item) => (
                <li key={item} className="p1-checklist-item">
                  <span className="p1-checklist-mark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p5-practice-panel">
            <p className="p5-practice-label">Sensor có thể là</p>
            <ul className="p1-checklist">
              {principle05SensorPractice.map((item) => (
                <li key={item} className="p1-checklist-item">
                  <span className="p1-checklist-mark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p5-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle05AntiPatterns.map((item) => (
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
