import {
  principle01AntiPatterns,
  principle01Benefits,
  principle01CommonReactions,
  principle01Equation,
  principle01HarnessComponents,
  principle01Intro,
  principle01IntroQuestions,
  principle01LifecycleSteps,
  principle01PracticeChecks,
  principle01RootCauses,
  principle01Summary,
} from "@/lib/principles/principle-01-content";
import { Principle01Diagram } from "./principle-01-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle01Article() {
  return (
    <article className="p1-article" aria-labelledby="p1-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 01</p>
        <h1 id="p1-title" className="principles-doc-title">
          Harness-first
        </h1>
        <p className="principles-section-quote">
          Khi Agent hoạt động không hiệu quả, hãy tối ưu Harness trước khi tối ưu Model.
        </p>
      </header>

      <section id="p1-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={1}
          variant="question"
          simple={principle01Intro.simple}
          note={principle01Intro.note}
          questions={principle01IntroQuestions}
          equation={principle01Equation}
        />
      </section>

      <section id="p1-diagram" className="p1-section scroll-mt-28">
        <Principle01Diagram />
      </section>

      <section id="p1-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Trong những năm đầu của AI Agent, nhiều đội ngũ xem mô hình là trung tâm của mọi vấn đề.
          Khi Agent thất bại, họ thường tập trung vào model — trong khi nguyên nhân nằm ở Harness.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Phản ứng phổ biến</p>
            <ul className="p1-compare-list">
              {principle01CommonReactions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider p1-compare-divider--versus" aria-hidden="true">
            <span>vs</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Nguyên nhân thực sự</p>
            <ul className="p1-compare-list">
              {principle01RootCauses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="p1-section-note">
          Những vấn đề này không thể được giải quyết chỉ bằng cách nâng cấp mô hình.
        </p>
      </section>

      <section id="p1-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Khi Agent hoạt động không hiệu quả, hãy tối ưu <span>Harness</span> trước khi tối ưu{" "}
            <span>Model</span>.
          </p>
        </blockquote>
        <div className="principles-prose">
          <p>
            Harness bao gồm mọi thành phần giúp Agent hoạt động: specifications, context, tools,
            state, validation, observability và human review.
          </p>
          <p>Model chỉ là một phần của hệ thống. Harness mới là nơi quyết định phạm vi và kiểm soát.</p>
        </div>
      </section>

      <section id="p1-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>
        <p className="p1-section-lead">
          Harness là thành phần có thể kiểm soát được. Model thường là thành phần khó kiểm soát nhất.
          Khi tập trung cải thiện Harness, đội ngũ có thể:
        </p>

        <ul className="p1-benefit-grid">
          {principle01Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p1-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">Trước khi thay đổi model, hãy đánh giá:</p>

        <ul className="p1-checklist">
          {principle01PracticeChecks.map((item) => (
            <li key={item} className="p1-checklist-item">
              <span className="p1-checklist-mark" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="p1-section-note">
          Nhiều vấn đề có thể được giải quyết ngay tại lớp Harness mà không cần thay đổi mô hình.
        </p>
      </section>

      <section id="p1-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle01AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p1-components" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thành phần của Harness</h2>
        <p className="p1-section-lead">
          Một Harness đầy đủ thường có mười thành phần. Mỗi thành phần giải quyết một khía cạnh vận hành khác nhau.
        </p>

        <ul className="p1-component-grid">
          {principle01HarnessComponents.map((item, index) => (
            <li key={item.label} className="p1-component-row">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="p1-component-label">{item.label}</span>
              <span className="p1-component-role">{item.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p1-lifecycle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vòng đời thực thi</h2>
        <p className="p1-section-lead">
          Khi Harness-first được áp dụng đúng, mỗi lần Agent chạy trở thành một controlled execution có vòng đời rõ ràng:
        </p>

        <ul className="p1-lifecycle-strip">
          {principle01LifecycleSteps.map((step, index) => (
            <li key={step} className="p1-lifecycle-step">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <p className="p1-section-note">
          Chất lượng Agent không còn được đánh giá bằng một câu trả lời riêng lẻ, mà bằng toàn bộ khả năng vận hành của hệ thống.
        </p>
      </section>

      <section id="p1-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={1}
          headline={principle01Summary.headline}
          points={principle01Summary.points}
        />
      </section>
    </article>
  );
}
