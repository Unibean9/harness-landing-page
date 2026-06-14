import {
  principle02AgentConsequences,
  principle02AntiPatterns,
  principle02Benefits,
  principle02BuildingBlocks,
  principle02Intro,
  principle02PracticeChecks,
  principle02SignRows,
  principle02Summary,
  principle02SystemProblems,
  principle02Traits,
} from "@/lib/principles/principle-02-content";
import { Principle02Diagram } from "./principle-02-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle02Article() {
  return (
    <article className="p1-article" aria-labelledby="p2-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 02</p>
        <h1 id="p2-title" className="principles-doc-title">
          Harnessability
        </h1>
        <p className="principles-section-quote">
          Hệ thống phải được thiết kế để Agent có thể hiểu và được Harness kiểm soát.
        </p>
      </header>

      <section id="p2-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={2}
          variant="definition"
          term="Harnessability"
          simple={principle02Intro.simple}
          note={principle02Intro.note}
        />
      </section>

      <section id="p2-diagram" className="p1-section scroll-mt-28">
        <Principle02Diagram />
      </section>

      <section id="p2-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Nhiều tổ chức cố gắng đưa AI Agent vào những hệ thống vốn được xây dựng hoàn toàn cho con
          người — không phải cho Agent hay Harness.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Trong các hệ thống đó</p>
            <ul className="p1-compare-list">
              {principle02SystemProblems.map((item) => (
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
              {principle02AgentConsequences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="p1-section-note">
          Kết quả là Agent phải dành phần lớn thời gian để suy đoán thay vì thực hiện công việc.
        </p>
      </section>

      <section id="p2-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            Hệ thống phải được thiết kế để Agent có thể hiểu và được <span>Harness</span> kiểm soát.
          </p>
        </blockquote>

        <p className="p1-section-lead">Một hệ thống có Harnessability cao thường có:</p>

        <ul className="p2-trait-grid">
          {principle02Traits.map((trait, index) => (
            <li key={trait.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{trait.label}</p>
              <p className="p2-trait-hint">{trait.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p2-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>
        <p className="p1-section-lead">
          Harnessability ảnh hưởng trực tiếp đến hiệu suất của Agent:
        </p>

        <ul className="p1-benefit-grid">
          {principle02Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p2-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">Khi thiết kế hệ thống:</p>

        <ul className="p1-checklist">
          {principle02PracticeChecks.map((item) => (
            <li key={item} className="p1-checklist-item">
              <span className="p1-checklist-mark" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p2-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle02AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p2-building-blocks" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Sáu thành phần tạo nên Harnessability</h2>
        <p className="p1-section-lead">
          Một hệ thống có Harnessability cao phải có đủ sáu yếu tố sau:
        </p>

        <ul className="p2-block-stack">
          {principle02BuildingBlocks.map((item) => (
            <li key={item.index} className="p2-block-item">
              <span className="p2-block-index">{item.index}</span>
              <div>
                <p className="p2-block-label">{item.label}</p>
                <p className="p2-block-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="p2-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>
        <p className="p1-section-lead">
          Mỗi hàng là một chiều kiểm tra — bên trái là triệu chứng thấp, bên phải là tín hiệu tốt
          tương ứng.
        </p>

        <div className="p2-signs-matrix">
          <div className="p2-signs-matrix-head" aria-hidden="true">
            <span className="p2-signs-matrix-head-index" />
            <span>Harnessability thấp</span>
            <span className="p2-signs-matrix-head-bridge" />
            <span>Harnessability cao</span>
          </div>

          <ul className="p2-signs-matrix-body">
            {principle02SignRows.map((row, index) => (
              <li key={row.high} className="p2-signs-matrix-row">
                <span className="p2-signs-matrix-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="p2-signs-matrix-pair">
                  <p
                    className={`p2-signs-matrix-cell p2-signs-matrix-cell--low${row.low ? "" : " p2-signs-matrix-cell--empty"}`}
                  >
                    <span className="p2-signs-matrix-mobile-label">Thấp</span>
                    <span>{row.low ?? "—"}</span>
                  </p>

                  <span className="p2-signs-matrix-bridge" aria-hidden="true">
                    →
                  </span>

                  <p className="p2-signs-matrix-cell p2-signs-matrix-cell--high">
                    <span className="p2-signs-matrix-mobile-label">Cao</span>
                    <span>{row.high}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="p2-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={2}
          headline={principle02Summary.headline}
          points={principle02Summary.points}
        />
      </section>
    </article>
  );
}
