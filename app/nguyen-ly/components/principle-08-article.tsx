import {
  principle08AntiPatterns,
  principle08BadPractice,
  principle08Benefits,
  principle08ControlVerbs,
  principle08GoodStack,
  principle08LlmTraits,
} from "@/lib/principles/principle-08-content";
import { Principle08Diagram } from "./principle-08-diagram";

export function Principle08Article() {
  return (
    <article className="p1-article" aria-labelledby="p8-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 08</p>
        <h1 id="p8-title" className="principles-doc-title">
          Application-owned control flow
        </h1>
        <p className="principles-section-quote">
          Harness làm chủ luồng chạy — LLM không tự quyết mọi branch, retry và side effect.
        </p>
      </header>

      <section id="p8-diagram" className="p1-section scroll-mt-28">
        <Principle08Diagram />
      </section>

      <section id="p8-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>

        <ul className="p2-trait-grid">
          {principle08LlmTraits.map((trait, index) => (
            <li key={trait.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{trait.label}</p>
              <p className="p2-trait-hint">{trait.hint}</p>
            </li>
          ))}
        </ul>

        <p className="p1-section-note">
          Nếu Agent tự quyết định toàn bộ luồng chạy, hành vi của hệ thống sẽ khó dự đoán và khó
          kiểm soát.
        </p>
      </section>

      <section id="p8-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Harness hoặc Application phải kiểm soát luồng chạy. <span>Agent chỉ chịu trách nhiệm</span>{" "}
            hoàn thành từng bước.
          </p>
        </blockquote>

        <ul className="p8-control-row p8-control-row--inline">
          {principle08ControlVerbs.map((verb) => (
            <li key={verb.label} className="p8-control-pill">
              <span className="p8-control-label">{verb.label}</span>
              <span className="p8-control-hint">{verb.hint}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p8-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p1-benefit-grid">
          {principle08Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p8-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>

        <div className="p3-flow-compare">
          <div className="p3-flow-panel p3-flow-panel--bad">
            <p className="p3-flow-panel-label">Tránh</p>
            <ul className="p3-flow-list">
              <li className="p3-flow-item">
                <span className="p3-flow-node p3-flow-node--agent">{principle08BadPractice}</span>
              </li>
            </ul>
          </div>

          <div className="p3-flow-panel p3-flow-panel--good">
            <p className="p3-flow-panel-label">Thiết kế đúng</p>
            <ul className="p3-flow-list">
              <li className="p3-flow-item">
                {principle08GoodStack.map((layer, index) => (
                  <span key={layer.label}>
                    <span
                      className={
                        layer.label === "Harness"
                          ? "p3-flow-node p3-flow-node--harness"
                          : layer.label === "Agent"
                            ? "p3-flow-node p3-flow-node--agent"
                            : "p3-flow-node"
                      }
                    >
                      {layer.label}
                    </span>
                    {index < principle08GoodStack.length - 1 ? (
                      <span className="p3-flow-arrow" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="p8-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle08AntiPatterns.map((item) => (
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
