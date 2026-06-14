import {
  principle08AntiPatterns,
  principle08AppControls,
  principle08BadPractice,
  principle08Benefits,
  principle08ControlVerbs,
  principle08Equation,
  principle08GoodStack,
  principle08Intro,
  principle08LlmTraits,
  principle08SignsCorrect,
  principle08SignsWrong,
  principle08StateMachine,
  principle08Summary,
} from "@/lib/principles/principle-08-content";
import { Principle08Diagram } from "./principle-08-diagram";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

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

      <section id="p8-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={8}
          variant="definition"
          term="App-owned control flow"
          simple={principle08Intro.simple}
          note={principle08Intro.note}
          equation={principle08Equation}
        />
      </section>

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

      <section id="p8-app-controls" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Application kiểm soát gì?</h2>
        <p className="p1-section-lead">
          Application/Harness nên giữ quyền kiểm soát những thành phần sau. LLM chỉ cung cấp
          reasoning để application quyết định:
        </p>

        <ul className="p4-capability-row">
          {principle08AppControls.map((control) => (
            <li key={control.label} className="p4-capability-pill">
              <span className="p4-capability-label">{control.label}</span>
              <span className="p4-capability-hint">{control.reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="p8-state-machine" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">State machine rõ ràng</h2>
        <p className="p1-section-lead">
          Ở mức nâng cao, control flow được mô hình hóa như một state machine với các trạng thái
          và điều kiện chuyển tiếp rõ ràng:
        </p>

        <ol className="p13-playbook">
          {principle08StateMachine.map((step, index) => (
            <li key={step.state} className="p13-playbook-step">
              <span className="p13-playbook-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="p13-playbook-body">
                <p className="p13-playbook-label">{step.state}</p>
                <p className="p13-playbook-hint">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="p8-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle08SignsWrong.map((item) => (
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
              {principle08SignsCorrect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="p8-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={8}
          headline={principle08Summary.headline}
          points={principle08Summary.points}
        />
      </section>
    </article>
  );
}
