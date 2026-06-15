import { PrincipleIntro } from "@/app/nguyen-ly/components/principle-intro";
import { PrincipleSummary } from "@/app/nguyen-ly/components/principle-summary";
import { sdd05Intro, sdd05Summary, sdd05WarningSigns } from "@/lib/sdd/sdd-05-content";
import {
  Sdd05AiDiagram,
  Sdd05AirplaneDiagram,
  Sdd05CostDiagram,
  Sdd05FactoryDiagram,
  Sdd05GatesDiagram,
  Sdd05HarnessDiagram,
  Sdd05IntroDiagram,
  Sdd05NotTestingDiagram,
  Sdd05PipelineDiagram,
  Sdd05PrinciplesDiagram,
  Sdd05ProblemDiagram,
  Sdd05RequirementDiagram,
  Sdd05ShiftDiagram,
  Sdd05SpecExampleDiagram,
  Sdd05WorkflowDiagram,
} from "./sdd-05-diagram";

export function Sdd05Article() {
  return (
    <article className="p1-article" aria-labelledby="sdd05-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 05</p>
        <h1 id="sdd05-title" className="principles-doc-title">
          Continuous Validation
        </h1>
        <p className="principles-section-quote">
          Mọi thay đổi phải được xác minh liên tục trước khi được coi là hoàn thành.
        </p>
      </header>

      <section id="sdd05-intro" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Hầu hết đội validate quá muộn</h2>
        <PrincipleIntro
          principleNumber={5}
          variant="prose"
          simple={sdd05Intro.simple}
          note={sdd05Intro.note}
        />
        <Sdd05IntroDiagram />
      </section>

      <section id="sdd05-workflow" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Workflow cuối pipeline</h2>
        <p className="p1-section-lead">
          Requirements → Planning → Development → Testing → Release — validation chỉ xuất hiện khi mọi thứ đã xong.
        </p>
        <Sdd05WorkflowDiagram />
      </section>

      <section id="sdd05-problem" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vấn đề cốt lõi</h2>
        <p className="p1-section-lead">
          Validation bị xem là final check thay vì continuous process — tạo ra giả định nguy hiểm rằng lỗi có thể phát hiện sau.
        </p>
        <Sdd05ProblemDiagram />
      </section>

      <section id="sdd05-requirement" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Requirement sai, phát hiện muộn</h2>
        <p className="p1-section-lead">
          Một câu requirement mơ hồ có thể tồn tại hàng tuần — đến khi phát hiện, toàn bộ implementation phải làm lại.
        </p>
        <Sdd05RequirementDiagram />
      </section>

      <section id="sdd05-shift" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thay đổi cốt lõi</h2>
        <p className="p1-section-lead">
          Từ build rồi validate — sang validate, build, validate, build, validate. Validation là hoạt động lặp lại, không phải giai đoạn.
        </p>
        <Sdd05ShiftDiagram />
      </section>

      <section id="sdd05-cost" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Đường cong chi phí</h2>
        <p className="p1-section-lead">
          Lỗi requirement sửa ở giai đoạn requirements = 1×. Trong development = 10×. Sau release = 100×.
        </p>
        <Sdd05CostDiagram />
      </section>

      <section id="sdd05-not-testing" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Validation không phải testing</h2>
        <p className="p1-section-lead">
          Testing hỏi hệ thống có chạy không. Validation hỏi chúng ta có đang build đúng thứ không.
        </p>
        <Sdd05NotTestingDiagram />
      </section>

      <section id="sdd05-pipeline" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Pipeline validation liên tục</h2>
        <p className="p1-section-lead">
          Trong Spec-Driven Development, validation xảy ra ở specification, plan, tasks, code và deployment — không kết thúc khi merge.
        </p>
        <Sdd05PipelineDiagram />
      </section>

      <section id="sdd05-spec-example" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Spec có thể validate được</h2>
        <p className="p1-section-lead">
          &ldquo;System should be fast&rdquo; không thể kiểm tra. &ldquo;95% requests complete within 500ms&rdquo; thì có thể.
        </p>
        <Sdd05SpecExampleDiagram />
      </section>

      <section id="sdd05-factory" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ẩn dụ nhà máy</h2>
        <p className="p1-section-lead">
          Nhà máy tốt inspect ở mọi bước — nguyên liệu, lắp ráp, đóng gói. Sai sót bị bắt ngay, không chờ sản phẩm hoàn thành.
        </p>
        <Sdd05FactoryDiagram />
      </section>

      <section id="sdd05-ai" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">AI thay đổi mọi thứ</h2>
        <p className="p1-section-lead">
          Từ 10 quyết định mỗi ngày sang hàng trăm quyết định từ multiple agents — nếu validation vẫn chỉ ở cuối, tốc độ AI trở thành bottleneck.
        </p>
        <Sdd05AiDiagram />
      </section>

      <section id="sdd05-gates" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Validation gates</h2>
        <p className="p1-section-lead">
          Validation trở thành infrastructure — mỗi artifact phải vượt qua gate trước khi tiến lên stage tiếp theo.
        </p>
        <Sdd05GatesDiagram />
      </section>

      <section id="sdd05-harness" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Continuous Validation trong Harness</h2>
        <p className="p1-section-lead">
          Harness tốt không chỉ cung cấp context — nó phải validate output trước khi cho phép tiến stage.
        </p>
        <Sdd05HarnessDiagram />
      </section>

      <section id="sdd05-airplane" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ẩn dụ máy bay</h2>
        <p className="p1-section-lead">
          Máy bay không chỉ được kiểm tra trước cất cánh — sensors, monitoring và alerts hoạt động suốt chuyến bay.
        </p>
        <Sdd05AirplaneDiagram />
      </section>

      <section id="sdd05-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu thiếu continuous validation</h2>
        <p className="p1-section-lead">
          Nếu nhận ra các dấu hiệu sau, đội đang validate quá muộn — hoặc không validate đủ ở các artifact đầu pipeline.
        </p>
        <ul className="p1-antipattern-grid">
          {sdd05WarningSigns.map((sign, index) => (
            <li key={sign.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">Dấu hiệu {index + 1}</p>
              <p className="p1-benefit-title">{sign.title}</p>
              <p className="p1-antipattern-body">{sign.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="sdd05-principles" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Kết nối năm nguyên lý SpecKit</h2>
        <p className="p1-section-lead">
          Continuous Validation xuất hiện cuối cùng vì nó kết nối bốn nguyên lý trước — kiểm tra toàn bộ hệ thống ở mọi bước.
        </p>
        <Sdd05PrinciplesDiagram />
      </section>

      <section id="sdd05-summary" className="p1-section p1-section--takeaway scroll-mt-28">
        <h2 className="p1-section-title">Mô hình tư duy</h2>
        <blockquote className="p1-principle-box">
          <p>
            <span>Đội kém:</span> validate ở cuối.
          </p>
          <p className="mt-3">
            <span>Đội tốt:</span> validate xuyên suốt.
          </p>
        </blockquote>
        <PrincipleSummary
          principleNumber={5}
          headline={sdd05Summary.headline}
          points={sdd05Summary.points}
        />
      </section>
    </article>
  );
}
