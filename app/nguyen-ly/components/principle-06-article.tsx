import {
  principle06AntiPatterns,
  principle06Benefits,
  principle06Comparison,
  principle06Intro,
  principle06IntroQuestions,
  principle06PracticeExamples,
  principle06SignsCorrect,
  principle06SignsWrong,
  principle06SpecProperties,
  principle06SpecRequirements,
  principle06SpecUsages,
  principle06Summary,
  principle06TribalSources,
} from "@/lib/principles/principle-06-content";
import { Principle06Diagram } from "./principle-06-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle06Article() {
  return (
    <article className="p1-article" aria-labelledby="p6-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 06</p>
        <h1 id="p6-title" className="principles-doc-title">
          Spec-as-source
        </h1>
        <p className="principles-section-quote">
          Specification phải trở thành nguồn sự thật chính thức — không chỉ tài liệu tham khảo.
        </p>
      </header>

      <section id="p6-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={6}
          variant="question"
          simple={principle06Intro.simple}
          note={principle06Intro.note}
          questions={principle06IntroQuestions}
          includeNote
        />
      </section>

      <section id="p6-diagram" className="p1-section scroll-mt-28">
        <Principle06Diagram />
      </section>

      <section id="p6-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Trong nhiều tổ chức, phần lớn kiến thức quan trọng không nằm trong repo — Agent không thể
          truy cập.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Kiến thức tồn tại ở</p>
            <ul className="p1-compare-list">
              {principle06TribalSources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider" aria-hidden="true">
            <span>→</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Hệ quả với Agent</p>
            <ul className="p1-compare-list">
              <li>Phải tự diễn giải yêu cầu</li>
              <li>Kết quả không nhất quán</li>
              <li>Không thể kiểm tra tự động</li>
              <li>Spec drift theo thời gian</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="p6-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Spec không phải ghi chú. <span>Spec là nguồn sự thật.</span>
          </p>
        </blockquote>

        <p className="p1-section-lead">Specification phải được xem như artifact chính thức. Spec cần:</p>

        <ul className="p2-trait-grid">
          {principle06SpecRequirements.map((req, index) => (
            <li key={req.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{req.label}</p>
              <p className="p2-trait-hint">{req.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p6-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p1-benefit-grid">
          {principle06Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p6-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">
          Tất cả nên được quản lý như một phần của hệ thống:
        </p>

        <ul className="p1-checklist">
          {principle06PracticeExamples.map((item) => (
            <li key={item} className="p1-checklist-item">
              <span className="p1-checklist-mark" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p6-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle06AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p6-comparison" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Spec-as-source khác tài liệu thường ở đâu?</h2>
        <p className="p1-section-lead">
          Tài liệu thường chỉ để đọc. Spec-as-source được dùng để vận hành.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Tài liệu thường</p>
            <ul className="p1-compare-list">
              {principle06Comparison.map((item) => (
                <li key={item.aspect}>
                  <span className="font-mono text-[0.6875rem] text-brand-primary/48">{item.aspect}: </span>
                  {item.docSide}
                </li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider" aria-hidden="true">
            <span>→</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Spec-as-source</p>
            <ul className="p1-compare-list">
              {principle06Comparison.map((item) => (
                <li key={item.aspect}>
                  <span className="font-mono text-[0.6875rem] text-brand-primary/48">{item.aspect}: </span>
                  {item.specSide}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p6-properties" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Một spec tốt cần có</h2>
        <p className="p1-section-lead">
          Không phải mọi document đều là spec. Một spec tốt phải có đủ sáu tính chất sau:
        </p>

        <ul className="p1-benefit-grid">
          {principle06SpecProperties.map((item, index) => (
            <li key={item.label} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{item.label}</p>
              <p className="p1-benefit-body">{item.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p6-usages" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Spec có thể dùng để làm gì?</h2>
        <p className="p1-section-lead">
          Khi spec được xây dựng đúng, nó có thể trở thành nguồn tạo ra nhiều artifact khác nhau:
        </p>

        <div className="p9-super-tags">
          {principle06SpecUsages.map((item) => (
            <span key={item} className="p9-super-tag">{item}</span>
          ))}
        </div>
      </section>

      <section id="p6-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle06SignsWrong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider" aria-hidden="true">
            <span>→</span>
          </div>

          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Áp dụng đúng</p>
            <ul className="p1-compare-list">
              {principle06SignsCorrect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p6-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={6}
          headline={principle06Summary.headline}
          points={principle06Summary.points}
        />
      </section>
    </article>
  );
}
