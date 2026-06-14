import {
  principle09AgentQualities,
  principle09AntiPatterns,
  principle09Benefits,
  principle09BigAgentFlow,
  principle09DecomposedFlow,
  principle09FocusedAgents,
  principle09Intro,
  principle09IntroQuestions,
  principle09ModuleComponents,
  principle09ModuleTypes,
  principle09SignsCorrect,
  principle09SignsWrong,
  principle09Summary,
  principle09SuperAgentProblems,
} from "@/lib/principles/principle-09-content";
import { Principle09Diagram } from "./principle-09-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle09Article() {
  return (
    <article className="p1-article" aria-labelledby="p9-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 09</p>
        <h1 id="p9-title" className="principles-doc-title">
          Small focused agents
        </h1>
        <p className="principles-section-quote">
          Chia mục tiêu lớn thành khối xây dựng nhỏ — thiết kế, lập trình, đánh giá, kiểm thử.
        </p>
      </header>

      <section id="p9-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={9}
          variant="question"
          simple={principle09Intro.simple}
          note={principle09Intro.note}
          questions={principle09IntroQuestions}
          includeNote
        />
      </section>

      <section id="p9-diagram" className="p1-section scroll-mt-28">
        <Principle09Diagram />
      </section>

      <section id="p9-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Nhiều hệ thống cố gắng xây dựng một &ldquo;Super Agent&rdquo; có thể làm mọi thứ. Kết quả
          thường là:
        </p>

        <ul className="p1-checklist">
          {principle09SuperAgentProblems.map((item) => (
            <li key={item} className="p1-checklist-item">
              <span className="p1-checklist-mark" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p9-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Mỗi Agent nên có <span>một mục tiêu chính</span>. Agent nhỏ dễ kiểm soát hơn Agent lớn.
          </p>
        </blockquote>

        <ul className="p2-trait-grid">
          {principle09AgentQualities.map((quality, index) => (
            <li key={quality.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{quality.label}</p>
              <p className="p2-trait-hint">{quality.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p9-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p1-benefit-grid">
          {principle09Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p9-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">Thay vì một Agent làm tất cả, hãy tách thành:</p>

        <ul className="p9-practice-grid">
          {principle09FocusedAgents.map((agent, index) => (
            <li key={agent.label} className="p9-practice-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p9-practice-title">{agent.label}</p>
              <p className="p9-practice-body">{agent.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p9-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle09AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p9-module-components" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Một module/agent focused nên có gì?</h2>
        <p className="p1-section-lead">
          Mỗi module nhỏ trong hệ thống nên có đủ tám thành phần sau để đảm bảo khả năng kiểm soát:
        </p>

        <ul className="p2-trait-grid">
          {principle09ModuleComponents.map((component, index) => (
            <li key={component.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{component.label}</p>
              <p className="p2-trait-hint">{component.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p9-decomposed-flow" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ví dụ: Big agent vs Decomposed agents</h2>
        <p className="p1-section-lead">
          Thay vì một big agent làm tất cả, hãy chia thành nhiều module nhỏ có trách nhiệm rõ ràng:
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Không nên: One Big Agent</p>
            <ul className="p1-compare-list">
              {principle09BigAgentFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider p1-compare-divider--versus" aria-hidden="true">
            <span>→</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Nên: Decomposed modules</p>
            <ul className="p1-compare-list">
              {principle09DecomposedFlow.map((module) => (
                <li key={module.label}>{module.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p9-module-types" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Không phải mọi module đều là LLM</h2>
        <p className="p1-section-lead">
          Harness tốt kết hợp nhiều loại module khác nhau — chỉ dùng LLM ở nơi thực sự cần suy luận:
        </p>

        <ul className="p3-channel-row">
          {principle09ModuleTypes.map((moduleType) => (
            <li key={moduleType.label} className="p3-channel-pill">
              <span className="p3-channel-label">{moduleType.label}</span>
              <span className="p3-channel-hint">{moduleType.hint}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p9-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle09SignsWrong.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider p1-compare-divider--versus" aria-hidden="true">
            <span>vs</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Áp dụng đúng</p>
            <ul className="p1-compare-list">
              {principle09SignsCorrect.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="p9-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={9}
          headline={principle09Summary.headline}
          points={principle09Summary.points}
        />
      </section>
    </article>
  );
}
