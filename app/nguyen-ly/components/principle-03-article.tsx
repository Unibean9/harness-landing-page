import {
  principle03AdapterShouldDo,
  principle03AdapterShouldNot,
  principle03AntiPatterns,
  principle03Benefits,
  principle03ChannelSpecificLogic,
  principle03EventSchema,
  principle03HarnessDuties,
  principle03Intro,
  principle03SignsCorrect,
  principle03SignsWrong,
  principle03Summary,
} from "@/lib/principles/principle-03-content";
import { Principle03Diagram } from "./principle-03-diagram";
import { Principle03FlowCompare } from "./principle-03-flow-compare";
import { PrincipleIntro } from "./principle-intro";
import { PrincipleSummary } from "./principle-summary";

export function Principle03Article() {
  return (
    <article className="p1-article" aria-labelledby="p3-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 03</p>
        <h1 id="p3-title" className="principles-doc-title">
          Event / Channel agnostic
        </h1>
        <p className="principles-section-quote">
          Control layer phải độc lập với kênh kích hoạt — mọi luồng đi qua cùng một Harness.
        </p>
      </header>

      <section id="p3-intro" className="p1-section scroll-mt-28">
        <PrincipleIntro
          principleNumber={3}
          variant="definition"
          term="Event/channel agnostic"
          simple={principle03Intro.simple}
          note={principle03Intro.note}
        />
      </section>

      <section id="p3-diagram" className="p1-section scroll-mt-28">
        <Principle03Diagram />
      </section>

      <section id="p3-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>
        <p className="p1-section-lead">
          Một lỗi phổ biến là xây dựng logic riêng cho từng kênh. Theo thời gian, các hành vi bắt
          đầu khác nhau và rất khó bảo trì.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Ví dụ lỗi phổ biến</p>
            <ul className="p1-compare-list">
              {principle03ChannelSpecificLogic.map((item) => (
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
              <li>Hành vi Agent khác nhau theo kênh</li>
              <li>Validation trùng lặp, khó đồng bộ</li>
              <li>Trace và audit không nhất quán</li>
              <li>Mỗi kênh mới = viết lại logic kiểm soát</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="p3-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>
        <blockquote className="p1-principle-box">
          <p>
            <span>Control layer</span> phải độc lập với kênh kích hoạt.
          </p>
        </blockquote>

        <p className="p1-section-lead">Dù yêu cầu đến từ đâu, Harness vẫn phải:</p>

        <ul className="p2-trait-grid">
          {principle03HarnessDuties.map((duty, index) => (
            <li key={duty.label} className="p2-trait-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p2-trait-label">{duty.label}</p>
              <p className="p2-trait-hint">{duty.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p3-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>

        <ul className="p1-benefit-grid">
          {principle03Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p3-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">
          Mọi entry point — dù là chat, API hay cron — phải được normalize thành cùng một request
          shape trước khi vào Harness.
        </p>

        <Principle03FlowCompare />
      </section>

      <section id="p3-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p1-antipattern-grid">
          {principle03AntiPatterns.map((item) => (
            <li key={item.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">{item.title}</p>
              <p className="p1-antipattern-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p3-adapter" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Channel adapter làm gì?</h2>
        <p className="p1-section-lead">
          Channel adapter là lớp chuyển đổi giữa channel và harness. Nó chỉ nên làm những việc cần
          thiết để chuẩn hóa tín hiệu — không hơn.
        </p>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--root">
            <p className="p1-compare-label">Nên làm</p>
            <ul className="p1-compare-list">
              {principle03AdapterShouldDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p1-compare-divider p1-compare-divider--versus" aria-hidden="true">
            <span>vs</span>
          </div>

          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Không nên làm</p>
            <ul className="p1-compare-list">
              {principle03AdapterShouldNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p3-event-schema" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Event schema chung</h2>
        <p className="p1-section-lead">
          Ở mức nâng cao, mọi yêu cầu đến Agent đều là một event có schema chuẩn:
        </p>

        <div className="p12-persist-log">
          <div className="p12-persist-header">
            <span className="p12-persist-title">event_schema.ts</span>
            <span className="p12-persist-status">normalized</span>
          </div>
          <ul className="p12-persist-lines">
            {principle03EventSchema.map((item) => (
              <li key={item.field} className="p12-persist-line">
                <span className="p12-persist-key">{item.field}</span>
                <span className="p12-persist-value">
                  {item.type} — {item.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="p3-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu nhận biết</h2>

        <div className="p1-compare">
          <div className="p1-compare-col p1-compare-col--reactive">
            <p className="p1-compare-label">Áp dụng sai</p>
            <ul className="p1-compare-list">
              {principle03SignsWrong.map((item) => (
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
              {principle03SignsCorrect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="p3-summary" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tóm tắt</h2>
        <PrincipleSummary
          principleNumber={3}
          headline={principle03Summary.headline}
          points={principle03Summary.points}
        />
      </section>
    </article>
  );
}
