import {
  principle11AntiPatterns,
  principle11Benefits,
  principle11Equation,
  principle11FreeTextPainPoints,
  principle11Intro,
  principle11OutputComponents,
  principle11OutputFormats,
  principle11OutputGate,
  principle11PipelineSteps,
  principle11PracticeProse,
  principle11SignsCorrect,
  principle11SignsWrong,
  principle11Summary,
} from "@/lib/principles/principle-11-content";
import { Principle11Diagram } from "./principle-11-diagram";
import { Principle11JsonBlock } from "./principle-11-json-block";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle11Article() {
  return (
    <article className="p1-article" aria-labelledby="p11-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 11</p>
        <h1 id="p11-title" className="principles-doc-title">
          Structured-output-first
        </h1>
        <p className="principles-section-quote">
          Đầu ra có cấu trúc để sensor tính toán kiểm tra tự động trước khi execute.
        </p>
      </header>

      <section id="p11-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={11}
          variant="definition"
          term="Structured-output-first"
          simple={principle11Intro.simple}
          note={principle11Intro.note}
          equation={principle11Equation}
        />
      </section>

      <section id="p11-diagram" className="p1-section scroll-mt-28">
        <Principle11Diagram />
      </section>

      <section id="p11-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">Text tự do rất khó:</p>

        <ul className="p11-friction-grid">
          {principle11FreeTextPainPoints.map((point, index) => (
            <li key={point.label} className="p11-friction-card">
              <span className="p11-friction-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p11-friction-label">{point.label}</p>
              <p className="p11-friction-hint">{point.hint}</p>
            </li>
          ))}
        </ul>

        <p className="p1-section-note">
          Một thay đổi nhỏ trong cách diễn đạt có thể làm hỏng toàn bộ workflow downstream.
        </p>
      </section>

      <section id="p11-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Agent nên trả về dữ liệu theo <span>schema xác định trước</span> — không phải prose để
            hệ thống đoán sau.
          </p>
        </blockquote>

        <ul className="p11-format-strip">
          {principle11OutputFormats.map((format) => (
            <li key={format.label} className="p11-format-chip">
              <span className="p11-format-label">{format.label}</span>
              <span className="p11-format-hint">{format.hint}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p11-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ol className="p11-pipeline">
          {principle11PipelineSteps.map((step, index) => (
            <li key={step.label} className="p11-pipeline-step">
              <span className="p11-pipeline-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="p11-pipeline-label">{step.label}</p>
                <p className="p11-pipeline-hint">{step.hint}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="p1-benefit-grid">
          {principle11Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p11-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">Thay vì prose khó tự động hóa — trả về object có schema:</p>

        <div className="p11-practice-stack">
          <div className="p11-practice-card p11-practice-card--before">
            <p className="p11-practice-label">Thay vì</p>
            <div className="p11-practice-body">
              <div className="p11-chat-bubble">
                <p>{principle11PracticeProse}</p>
              </div>
            </div>
          </div>

          <p className="p11-practice-divider" aria-hidden="true">
            ↓
          </p>

          <div className="p11-practice-card p11-practice-card--after">
            <p className="p11-practice-label">Trả về</p>
            <div className="p11-practice-body">
              <Principle11JsonBlock />
            </div>
          </div>
        </div>
      </section>

      <section id="p11-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle11AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p11-output-components" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thành phần của structured output</h2>
        <p className="p1-section-lead">
          Một structured output đầy đủ nên có đủ mười thành phần. Không phải task nào cũng cần tất
          cả, nhưng biết sẵn để chọn đúng:
        </p>

        <ul className="p5-types-grid">
          {principle11OutputComponents.map((item) => (
            <li key={item.field} className="p5-type-row">
              <span className="p5-type-label">{item.field}</span>
              <span className="p5-type-role">{item.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p11-output-gate" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Output gate</h2>
        <p className="p1-section-lead">
          Structured output trở thành cổng kiểm soát. Không có structured output thì không có gate
          — không có gate thì agent tự do execute:
        </p>

        <ol className="p13-playbook">
          {principle11OutputGate.map((item) => (
            <li key={item.step} className="p13-playbook-step">
              <span className="p13-playbook-index">{item.step}</span>
              <div className="p13-playbook-body">
                <p className="p13-playbook-label">{item.label}</p>
                <p className="p13-playbook-hint">{item.hint}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="p11-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle11SignsWrong.map((item) => (
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
              {principle11SignsCorrect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p11-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={11}
          headline={principle11Summary.headline}
          points={principle11Summary.points}
        />
      </section>
    </article>
  );
}
