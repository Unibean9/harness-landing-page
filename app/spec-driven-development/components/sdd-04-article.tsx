import { PrincipleIntro } from "@/app/nguyen-ly/components/principle-intro";
import { PrincipleSummary } from "@/app/nguyen-ly/components/principle-summary";
import { sdd04Intro, sdd04Summary, sdd04WarningSigns } from "@/lib/sdd/sdd-04-content";
import {
  Sdd04AiDiagram,
  Sdd04BuildingDiagram,
  Sdd04DriftDiagram,
  Sdd04ExamplesDiagram,
  Sdd04FallbackDiagram,
  Sdd04GardenDiagram,
  Sdd04HarnessDiagram,
  Sdd04LibraryDiagram,
  Sdd04ModelsDiagram,
  Sdd04OutputDiagram,
  Sdd04ReasonsDiagram,
  Sdd04ShiftDiagram,
  Sdd04SystemDiagram,
  Sdd04TraceDiagram,
} from "./sdd-04-diagram";

export function Sdd04Article() {
  return (
    <article className="p1-article" aria-labelledby="sdd04-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 04</p>
        <h1 id="sdd04-title" className="principles-doc-title">
          Living Documentation
        </h1>
        <p className="principles-section-quote">
          Tài liệu phải sinh ra từ hệ thống thực tế và cập nhật theo mọi thay đổi — không bao giờ lỗi thời.
        </p>
      </header>

      <section id="sdd04-reputation" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Documentation có vấn đề danh tiếng</h2>
        <PrincipleIntro
          principleNumber={4}
          variant="prose"
          simple={sdd04Intro.simple}
          note={sdd04Intro.note}
        />
        <Sdd04DriftDiagram />
      </section>

      <section id="sdd04-fallback" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Khi documentation chết</h2>
        <p className="p1-section-lead">
          Mọi người ngừng đọc docs — tri thức chảy qua kênh không chính thức.
        </p>
        <Sdd04FallbackDiagram />
      </section>

      <section id="sdd04-output" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Documentation như output</h2>
        <p className="p1-section-lead">
          Quy trình quen thuộc: build xong rồi mới viết docs — một việc cần hoàn thành trước deadline.
        </p>
        <Sdd04OutputDiagram />
      </section>

      <section id="sdd04-shift" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thay đổi cốt lõi</h2>
        <p className="p1-section-lead">
          Từ mô tả hệ thống sang tiến hóa cùng hệ thống — documentation trở thành một phần của nó.
        </p>
        <Sdd04ShiftDiagram />
      </section>

      <section id="sdd04-garden" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ẩn dụ khu vườn</h2>
        <p className="p1-section-lead">
          Documentation truyền thống: gieo một lần, bỏ mặc. Living Documentation: chăm sóc liên tục.
        </p>
        <Sdd04GardenDiagram />
      </section>

      <section id="sdd04-reasons" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ba lý do documentation chết</h2>
        <p className="p1-section-lead">
          Workflow tách rời, không ai sở hữu, và không có phần thưởng tức thì khi cập nhật docs.
        </p>
        <Sdd04ReasonsDiagram />
      </section>

      <section id="sdd04-models" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Mô hình Living Documentation</h2>
        <p className="p1-section-lead">
          Documentation không nằm cuối pipeline — nó đồng bộ liên tục với specification và implementation.
        </p>
        <Sdd04ModelsDiagram />
      </section>

      <section id="sdd04-system" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Documentation như hệ thống</h2>
        <p className="p1-section-lead">
          Từ file tĩnh sang hệ thống có inputs, outputs, updates và validation.
        </p>
        <Sdd04SystemDiagram />
      </section>

      <section id="sdd04-examples" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ví dụ thực tế</h2>
        <p className="p1-section-lead">
          OpenAPI và Infrastructure as Code — documentation và implementation là cùng một artifact.
        </p>
        <Sdd04ExamplesDiagram />
      </section>

      <section id="sdd04-ai" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Living Documentation trong hệ thống AI</h2>
        <p className="p1-section-lead">
          AI agents cần context — documentation lỗi thời kéo chất lượng quyết định xuống.
        </p>
        <Sdd04AiDiagram />
      </section>

      <section id="sdd04-harness" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Góc nhìn Harness Engineering</h2>
        <p className="p1-section-lead">
          Harness quản lý knowledge — documentation là context layer, không phải tài sản phụ.
        </p>
        <Sdd04HarnessDiagram />
      </section>

      <section id="sdd04-trace" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Living Documentation và truy vết</h2>
        <p className="p1-section-lead">
          Mọi thay đổi có thể lần ngược từ documentation về requirement.
        </p>
        <Sdd04TraceDiagram />
      </section>

      <section id="sdd04-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu documentation đã chết</h2>
        <p className="p1-section-lead">
          Nếu nhận ra các dấu hiệu sau, documentation đang mô tả quá khứ — không phải hiện tại.
        </p>
        <ul className="p1-antipattern-grid">
          {sdd04WarningSigns.map((sign, index) => (
            <li key={sign.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">Dấu hiệu {index + 1}</p>
              <p className="p1-benefit-title">{sign.title}</p>
              <p className="p1-antipattern-body">{sign.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="sdd04-building" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Xây Living Documentation</h2>
        <p className="p1-section-lead">
          Bắt đầu bằng giảm số nơi chứa sự thật — một nguồn, sinh mọi artifact còn lại.
        </p>
        <Sdd04BuildingDiagram />
      </section>

      <section id="sdd04-library" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Cuốn sách hay Wikipedia</h2>
        <p className="p1-section-lead">
          Documentation truyền thống giống sách đã xuất bản. Living Documentation giống Wikipedia — luôn được cập nhật.
        </p>
        <Sdd04LibraryDiagram />
      </section>

      <section id="sdd04-summary" className="p1-section p1-section--takeaway scroll-mt-28">
        <h2 className="p1-section-title">Mô hình tư duy</h2>
        <blockquote className="p1-principle-box">
          <p>
            <span>Documentation chết:</span> mô tả quá khứ.
          </p>
          <p className="mt-3">
            <span>Living Documentation:</span> mô tả hiện tại — già đi cùng tốc độ với hệ thống.
          </p>
        </blockquote>
        <PrincipleSummary
          principleNumber={4}
          headline={sdd04Summary.headline}
          points={sdd04Summary.points}
        />
      </section>
    </article>
  );
}
