import {
  principle10AntiPatterns,
  principle10Benefits,
  principle10HarnessDecisions,
  principle10OutcomeCompare,
  principle10OverflowEffects,
  principle10References,
  principle10TaskExcludes,
  principle10TaskNeeds,
} from "@/lib/principles/principle-10-content";
import { Principle10Diagram } from "./principle-10-diagram";

export function Principle10Article() {
  return (
    <article className="p1-article" aria-labelledby="p10-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 10</p>
        <h1 id="p10-title" className="principles-doc-title">
          Context ownership
        </h1>
        <p className="principles-section-quote">
          Context window là tài nguyên đắt — chỉ đưa vào dữ liệu cần thiết vào đúng thời điểm.
        </p>
      </header>

      <section id="p10-diagram" className="p1-section scroll-mt-28">
        <Principle10Diagram />
      </section>

      <section id="p10-why-exists" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao nguyên lý này tồn tại</h2>

        <aside className="p10-misconception">
          <p className="p10-misconception-label">Giả định sai phổ biến</p>
          <blockquote>
            <p>Nếu cung cấp nhiều context hơn thì Agent sẽ làm việc tốt hơn.</p>
          </blockquote>
          <p className="p10-misconception-verdict">Điều này hiếm khi đúng.</p>
        </aside>

        <p className="p1-section-lead">
          Khi lượng thông tin tăng lên, Agent phải dành nhiều tài nguyên hơn để xác định điều gì
          thực sự liên quan. Hệ quả:
        </p>

        <ol className="p10-effect-chain">
          {principle10OverflowEffects.map((effect, index) => (
            <li key={effect.label} className="p10-effect-step">
              <span className="p10-effect-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="p10-effect-label">{effect.label}</p>
                <p className="p10-effect-hint">{effect.hint}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="p1-section-lead">
          Trong nhiều hệ thống, Agent được giao nhiệm vụ sửa một lỗi nhỏ nhưng lại phải đọc hàng trăm
          file hoặc hàng nghìn dòng tài liệu để tìm thông tin liên quan.
        </p>

        <p className="p1-section-note">
          Vấn đề không phải Agent thiếu khả năng suy luận — mà Harness đã chuyển trách nhiệm xây
          dựng context sang cho Agent.
        </p>
      </section>

      <section id="p10-the-principle" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Nguyên lý cốt lõi</h2>

        <div className="p10-ownership-split">
          <div className="p10-ownership-panel p10-ownership-panel--harness">
            <p className="p10-ownership-role">Harness sở hữu context</p>
            <ul className="p10-decision-list">
              {principle10HarnessDecisions.map((decision) => (
                <li key={decision.label} className="p10-decision-item">
                  <span className="p10-decision-label">{decision.label}</span>
                  <span className="p10-decision-hint">{decision.hint}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p10-ownership-divider" aria-hidden="true">
            <span>vs</span>
          </div>

          <div className="p10-ownership-panel p10-ownership-panel--agent">
            <p className="p10-ownership-role">Agent sở hữu suy luận</p>
            <p className="p10-ownership-body">
              Agent nhận một tập context đã được lựa chọn phù hợp với nhiệm vụ hiện tại — không cần
              khám phá toàn bộ hệ thống trước khi bắt đầu.
            </p>
            <p className="p10-ownership-emphasis">
              Harness cung cấp góc nhìn · Agent thực hiện suy luận
            </p>
          </div>
        </div>
      </section>

      <section id="p10-why-matters" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tại sao quan trọng</h2>
        <p className="p1-section-lead">
          Context ảnh hưởng trực tiếp đến chất lượng quyết định — đôi khi quan trọng hơn sức mạnh
          mô hình.
        </p>

        <ul className="p10-outcome-compare">
          {principle10OutcomeCompare.map((item) => (
            <li
              key={item.variant}
              className={
                item.variant === "strong"
                  ? "p10-outcome-card p10-outcome-card--strong"
                  : "p10-outcome-card p10-outcome-card--weak"
              }
            >
              <div className="p10-outcome-meta">
                <span className="p10-outcome-pill">{item.model}</span>
                <span className="p10-outcome-pill">{item.context}</span>
              </div>
              <p className="p10-outcome-result">{item.outcome}</p>
            </li>
          ))}
        </ul>

        <ul className="p1-benefit-grid">
          {principle10Benefits.map((benefit, index) => (
            <li key={benefit.title} className="p1-benefit-card">
              <span className="p1-benefit-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="p1-benefit-title">{benefit.title}</p>
              <p className="p1-benefit-body">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="p10-practice" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thực hành</h2>
        <p className="p1-section-lead">
          Ví dụ: Agent sửa lỗi backend — Harness xây context theo nhiệm vụ, không dump toàn bộ hệ
          thống.
        </p>

        <div className="p10-scope-matrix">
          <div className="p10-scope-panel p10-scope-panel--include">
            <p className="p10-scope-label">Cần cho task</p>
            <ul className="p10-scope-list">
              {principle10TaskNeeds.map((item) => (
                <li key={item} className="p10-scope-item p10-scope-item--include">
                  <span className="p10-scope-mark" aria-hidden="true">
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p10-scope-panel p10-scope-panel--exclude">
            <p className="p10-scope-label">Loại bỏ</p>
            <ul className="p10-scope-list">
              {principle10TaskExcludes.map((item) => (
                <li key={item} className="p10-scope-item p10-scope-item--exclude">
                  <span className="p10-scope-mark" aria-hidden="true">
                    −
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="p1-section-note">
          Loại bỏ thông tin không liên quan thường quan trọng không kém việc bổ sung thông tin cần
          thiết.
        </p>
      </section>

      <section id="p10-antipatterns" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Anti-pattern thường gặp</h2>

        <ul className="p10-antipattern-stack">
          {principle10AntiPatterns.map((item, index) => (
            <li key={item.title} className="p10-antipattern-item">
              <span className="p10-antipattern-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="p10-antipattern-title">{item.title}</p>
                <p className="p10-antipattern-body">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="p10-references" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tham khảo</h2>
        <ul className="p10-reference-list">
          {principle10References.map((ref) => (
            <li key={ref.href}>
              <a href={ref.href} target="_blank" rel="noopener noreferrer" className="p10-reference-link">
                {ref.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
