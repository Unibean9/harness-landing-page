import {
  sdd01Intro,
  sdd01Summary,
  sdd01WarningSigns,
} from "@/lib/sdd/sdd-01-content";
import { PrincipleIntro } from "@/app/nguyen-ly/components/principle-intro";
import { PrincipleSummary } from "@/app/nguyen-ly/components/principle-summary";
import {
  Sdd01AiDiagram,
  Sdd01CrmDiagram,
  Sdd01DeathDiagram,
  Sdd01DriftDiagram,
  Sdd01GpsDiagram,
  Sdd01HarnessDiagram,
  Sdd01IacDiagram,
  Sdd01PipelineDiagram,
  Sdd01ProblemDiagram,
  Sdd01ShiftDiagram,
  Sdd01WorldsDiagram,
} from "./sdd-01-diagram";

export function Sdd01Article() {
  return (
    <article className="p1-article" aria-labelledby="sdd01-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 01</p>
        <h1 id="sdd01-title" className="principles-doc-title">
          Executable Specifications
        </h1>
        <p className="principles-section-quote">
          Đặc tả không chỉ để đọc. Chúng phải có thể chạy, kiểm tra và làm cơ sở cho mọi biến đổi.
        </p>
      </header>

      <section id="sdd01-intro" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Most Specifications Die</h2>
        <PrincipleIntro
          principleNumber={1}
          variant="prose"
          simple={sdd01Intro.simple}
          note={sdd01Intro.note}
        />
        <Sdd01DeathDiagram />
      </section>

      <section id="sdd01-problem" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">The Core Problem</h2>
        <p className="p1-section-lead">
          Phần lớn tài liệu phần mềm được thiết kế để đọc, không được thiết kế để sử dụng.
        </p>
        <Sdd01ProblemDiagram />
      </section>

      <section id="sdd01-shift" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">The Shift</h2>
        <p className="p1-section-lead">
          Executable Specifications đề xuất một thay đổi rất nhỏ nhưng có tác động rất lớn.
        </p>
        <Sdd01ShiftDiagram />
        <p className="p1-section-note">
          Specification không còn là tài liệu. Specification trở thành động cơ của workflow.
        </p>
      </section>

      <section id="sdd01-worlds" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Documents vs Engines</h2>
        <p className="p1-section-lead">
          Có hai cách nhìn hoàn toàn khác nhau về specification.
        </p>
        <Sdd01WorldsDiagram />
      </section>

      <section id="sdd01-gps" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">The GPS Analogy</h2>
        <p className="p1-section-lead">
          Hãy tưởng tượng bạn mở Google Maps và nhập điểm đến. Hệ thống không dừng ở việc ghi nhận
          yêu cầu.
        </p>
        <Sdd01GpsDiagram />
      </section>

      <section id="sdd01-drift" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Why Traditional Documentation Fails</h2>
        <p className="p1-section-lead">
          Documentation thất bại không phải vì mọi người ghét viết tài liệu. Nó thất bại vì tài
          liệu không tham gia vào workflow.
        </p>
        <Sdd01DriftDiagram />
      </section>

      <section id="sdd01-ai" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">The AI Era Changes Everything</h2>
        <p className="p1-section-lead">
          Con người rất giỏi xử lý sự mơ hồ. AI chỉ nhìn thấy context được cung cấp.
        </p>
        <Sdd01AiDiagram />
      </section>

      <section id="sdd01-pipeline" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">The Spec-Driven Pipeline</h2>
        <p className="p1-section-lead">
          Đây là cách SpecKit nhìn nhận một dự án: mỗi artifact sinh ra từ artifact trước đó.
        </p>
        <Sdd01PipelineDiagram />
      </section>

      <section id="sdd01-example" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Real Example</h2>
        <p className="p1-section-lead">
          Giả sử bạn đang xây dựng CRM tuyển sinh. Từ specification có thể tạo ra plan, tasks và
          validation mà không cần dịch thủ công.
        </p>
        <Sdd01CrmDiagram />
      </section>

      <section id="sdd01-harness" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Executable Specifications and Harness Engineering</h2>
        <p className="p1-section-lead">
          Đây là nơi nguyên lý này giao với Harness Engineering: specification định hướng, harness
          chuẩn bị context, agent thực thi.
        </p>
        <Sdd01HarnessDiagram />
      </section>

      <section id="sdd01-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Signs Your Specifications Are Not Executable</h2>
        <p className="p1-section-lead">
          Nếu dự án có các dấu hiệu sau, khả năng cao specification chưa thực sự executable.
        </p>
        <ul className="p1-antipattern-grid">
          {sdd01WarningSigns.map((sign, index) => (
            <li key={sign.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">Dấu hiệu {index + 1}</p>
              <p className="p1-benefit-title">{sign.title}</p>
              <p className="p1-antipattern-body">{sign.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="sdd01-iac" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">From Documentation to Infrastructure</h2>
        <p className="p1-section-lead">
          Infrastructure as Code đã thay đổi cách chúng ta quản lý hạ tầng. Executable Specifications
          muốn mang cùng tư tưởng đó tới phát triển phần mềm.
        </p>
        <Sdd01IacDiagram />
      </section>

      <section id="sdd01-summary" className="p1-section p1-section--takeaway scroll-mt-28">
        <h2 className="p1-section-title">The Mental Model</h2>
        <blockquote className="p1-principle-box">
          <p>
            <span>Traditional Thinking:</span> Specification describes work.
          </p>
          <p className="mt-3">
            <span>Executable Thinking:</span> Specification produces work.
          </p>
        </blockquote>
        <PrincipleSummary
          principleNumber={1}
          headline={sdd01Summary.headline}
          points={sdd01Summary.points}
        />
      </section>
    </article>
  );
}
