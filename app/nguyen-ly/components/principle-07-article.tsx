import {
  principle07AntiPatterns,
  principle07Benefits,
  principle07HumanOnlyTasks,
  principle07Intro,
  principle07PauseConditions,
  principle07PracticeExamples,
  principle07ReviewLadder,
  principle07ReviewScope,
  principle07SignsCorrect,
  principle07SignsWrong,
  principle07Summary,
  principle07TriggerScenarios,
} from "@/lib/principles/principle-07-content";
import { Principle07Diagram } from "./principle-07-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle07Article() {
  return (
    <article className="p1-article" aria-labelledby="p7-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 07</p>
        <h1 id="p7-title" className="principles-doc-title">
          Human as control point
        </h1>
        <p className="principles-section-quote">
          Con người là control point chính thức trong workflow — tham gia đúng lúc, không phải mọi lúc.
        </p>
      </header>

      <section id="p7-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={7}
          variant="definition"
          term="Human as control point"
          simple={principle07Intro.simple}
          note={principle07Intro.note}
        />
      </section>

      <section id="p7-diagram" className="p1-section scroll-mt-28">
        <Principle07Diagram />
      </section>

      <section id="p7-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Không phải mọi quyết định đều có thể được tự động hóa. Một số tình huống luôn đòi hỏi:
        </p>

        <ul className="p1-checklist">
          {principle07HumanOnlyTasks.map((item) => (
            <li key={item} className="p1-checklist-item">
              <span className="p1-checklist-mark" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="p1-section-note">Đây là những việc Agent chưa thể thay thế hoàn toàn.</p>
      </section>

      <section id="p7-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Con người là một <span>control point</span> chính thức trong workflow. Agent nên dừng lại
            và yêu cầu xác nhận khi:
          </p>
        </blockquote>

        <ul className="p2-trait-grid">
          {principle07PauseConditions.map((condition, index) => (
            <li key={condition.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{condition.label}</p>
              <p className="p2-trait-hint">{condition.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p7-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p1-benefit-grid">
          {principle07Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p7-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">
          Agent có thể chuẩn bị đề xuất. Con người đưa ra quyết định cuối cùng:
        </p>

        <ul className="p7-practice-grid">
          {principle07PracticeExamples.map((example, index) => (
            <li key={example.title} className="p7-practice-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p7-practice-title">{example.title}</p>
              <p className="p7-practice-body">{example.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p7-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle07AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p7-triggers" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Khi nào cần human review?</h2>
        <p className="p1-section-lead">
          Human nên trở thành control point khi một trong các tình huống sau xuất hiện:
        </p>

        <ul className="p7-trigger-row">
          {principle07TriggerScenarios.map((scenario) => (
            <li key={scenario.situation} className="p7-trigger-pill">
              <span className="p7-trigger-label">{scenario.situation}</span>
              <span className="p7-trigger-hint">{scenario.reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p7-review-scope" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Human review nên kiểm tra gì?</h2>
        <p className="p1-section-lead">
          Con người không phải làm lại toàn bộ tác vụ. Human control point chỉ cần kiểm tra:
        </p>

        <ul className="p1-checklist">
          {principle07ReviewScope.map((item) => (
            <li key={item} className="p1-checklist-item">
              <span className="p1-checklist-mark" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p7-ladder" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Các mức review</h2>
        <p className="p1-section-lead">
          Không phải mọi task đều cần cùng mức review. Harness tốt phân loại theo rủi ro:
        </p>

        <ul className="p13-maturity-ladder">
          {principle07ReviewLadder.map((step) => (
            <li key={step.level} className="p13-maturity-step">
              <span className="p13-maturity-index">{step.level}</span>
              <div>
                <p className="p13-maturity-title">{step.label}</p>
                <p className="p13-maturity-body">{step.hint}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="p7-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle07SignsWrong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider p1-compare-divider--versus" aria-hidden="true">
            <span>vs</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Áp dụng đúng</p>
            <ul className="p1-compare-list">
              {principle07SignsCorrect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p7-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={7}
          headline={principle07Summary.headline}
          points={principle07Summary.points}
        />
      </section>
    </article>
  );
}
