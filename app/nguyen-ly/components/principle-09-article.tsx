import {
  principle09AgentQualities,
  principle09AntiPatterns,
  principle09Benefits,
  principle09FocusedAgents,
  principle09SuperAgentProblems,
} from "@/lib/principles/principle-09-content";
import { Principle09Diagram } from "./principle-09-diagram";

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
    </article>
  );
}
