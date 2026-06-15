import { PrincipleIntro } from "@/app/nguyen-ly/components/principle-intro";
import { PrincipleSummary } from "@/app/nguyen-ly/components/principle-summary";
import { sdd03Intro, sdd03Summary } from "@/lib/sdd/sdd-03-content";
import {
  Sdd03AiDiagram,
  Sdd03ContextLossDiagram,
  Sdd03CrmDiagram,
  Sdd03FactoryDiagram,
  Sdd03FactoryModelDiagram,
  Sdd03HarnessDiagram,
  Sdd03NotGenerationDiagram,
  Sdd03PipelineDiagram,
  Sdd03ProblemDiagram,
  Sdd03ShiftDiagram,
  Sdd03SpeckitDiagram,
  Sdd03StructureDiagram,
  Sdd03TelephoneDiagram,
  Sdd03TranslationDiagram,
} from "./sdd-03-diagram";

export function Sdd03Article() {
  return (
    <article className="p1-article" aria-labelledby="sdd03-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 03</p>
        <h1 id="sdd03-title" className="principles-doc-title">
          Transformation Automation
        </h1>
        <p className="principles-section-quote">
          Từ đặc tả đến mã nguồn phải đi qua pipeline tự động, có thể lặp lại và có thể kiểm chứng.
        </p>
      </header>

      <section id="sdd03-intro" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Chi phí ẩn của việc dịch</h2>
        <PrincipleIntro
          principleNumber={3}
          variant="prose"
          simple={sdd03Intro.simple}
          note={sdd03Intro.note}
        />
        <Sdd03TranslationDiagram />
      </section>

      <section id="sdd03-telephone" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Trò chơi truyền tin</h2>
        <p className="p1-section-lead">
          Mỗi người nghe và viết lại — thông điệp thay đổi dần cho đến khi không còn giống ý định ban đầu.
        </p>
        <Sdd03TelephoneDiagram />
      </section>

      <section id="sdd03-problem" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vấn đề cốt lõi</h2>
        <p className="p1-section-lead">
          Phần lớn thời gian dành cho chuyển đổi giữa các loại artifact — không tạo tri thức mới.
        </p>
        <Sdd03ProblemDiagram />
      </section>

      <section id="sdd03-shift" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thay đổi cốt lõi</h2>
        <p className="p1-section-lead">
          Nếu chỉ là chuyển đổi thông tin, tại sao con người phải làm thủ công?
        </p>
        <Sdd03ShiftDiagram />
      </section>

      <section id="sdd03-pipeline" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Tài liệu trở thành pipeline</h2>
        <p className="p1-section-lead">
          Từ collection of documents sang chain of transformations.
        </p>
        <Sdd03PipelineDiagram />
      </section>

      <section id="sdd03-factory" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ẩn dụ nhà máy</h2>
        <p className="p1-section-lead">
          Mỗi bước nhận đầu vào chuẩn hóa và tạo đầu ra chuẩn hóa — không bắt đầu lại từ đầu.
        </p>
        <Sdd03FactoryDiagram />
      </section>

      <section id="sdd03-ai" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao AI làm điều này khả thi</h2>
        <p className="p1-section-lead">
          Lần đầu tiên Human Intent có thể đi qua transformation tự động ở quy mô lớn.
        </p>
        <Sdd03AiDiagram />
      </section>

      <section id="sdd03-speckit" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">SpecKit pipeline</h2>
        <p className="p1-section-lead">
          Transformation Automation là nền tảng cho workflow của SpecKit.
        </p>
        <Sdd03SpeckitDiagram />
      </section>

      <section id="sdd03-example" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ví dụ thực tế</h2>
        <p className="p1-section-lead">
          Từ specification CRM tuyển sinh — qua ba lần transform, không ai viết lại cùng thông tin.
        </p>
        <Sdd03CrmDiagram />
      </section>

      <section id="sdd03-context-loss" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vấn đề mất context</h2>
        <p className="p1-section-lead">
          Mỗi lần dịch thủ công: Read → Interpret → Rewrite — business intent biến mất.
        </p>
        <Sdd03ContextLossDiagram />
      </section>

      <section id="sdd03-not-generation" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Transformation không phải generation</h2>
        <p className="p1-section-lead">
          Đầu ra phải truy vết được tới đầu vào — không phải tạo ngẫu nhiên.
        </p>
        <Sdd03NotGenerationDiagram />
      </section>

      <section id="sdd03-structure" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Transformation cần cấu trúc</h2>
        <p className="p1-section-lead">
          Pipeline chỉ hoạt động khi specification đủ chất lượng.
        </p>
        <Sdd03StructureDiagram />
      </section>

      <section id="sdd03-harness" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Transformation Automation trong Harness Engineering</h2>
        <p className="p1-section-lead">
          Harness điều phối pipeline — Agent chỉ là một thành phần.
        </p>
        <Sdd03HarnessDiagram />
      </section>

      <section id="sdd03-factory-model" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Mô hình nhà máy</h2>
        <p className="p1-section-lead">
          Specification là nguyên liệu. Implementation là thành phẩm.
        </p>
        <Sdd03FactoryModelDiagram />
      </section>

      <section id="sdd03-summary" className="p1-section p1-section--takeaway scroll-mt-28">
        <h2 className="p1-section-title">Mô hình tư duy</h2>
        <blockquote className="p1-principle-box">
          <p>
            <span>Traditional:</span> Write → Rewrite → Rewrite → Rewrite → Build.
          </p>
          <p className="mt-3">
            <span>Transformation:</span> Specify → Transform → Transform → Transform → Validate.
          </p>
        </blockquote>
        <PrincipleSummary
          principleNumber={3}
          headline={sdd03Summary.headline}
          points={sdd03Summary.points}
        />
      </section>
    </article>
  );
}
