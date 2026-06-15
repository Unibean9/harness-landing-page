import { PrincipleIntro } from "@/app/nguyen-ly/components/principle-intro";
import { PrincipleSummary } from "@/app/nguyen-ly/components/principle-summary";
import {
  sdd02Intro,
  sdd02Summary,
  sdd02WarningSigns,
} from "@/lib/sdd/sdd-02-content";
import {
  Sdd02AgentsDiagram,
  Sdd02ConstitutionDiagram,
  Sdd02DecisionFlowDiagram,
  Sdd02DivergentDiagram,
  Sdd02GateDiagram,
  Sdd02GuardrailsDiagram,
  Sdd02HarnessDiagram,
  Sdd02ScopeDiagram,
  Sdd02ShiftDiagram,
  Sdd02TeamsDiagram,
  Sdd02TribalDiagram,
} from "./sdd-02-diagram";

export function Sdd02Article() {
  return (
    <article className="p1-article" aria-labelledby="sdd02-title" data-principles-item>
      <header className="principles-doc-header">
        <p className="p1-eyebrow">Nguyên lý 02</p>
        <h1 id="sdd02-title" className="principles-doc-title">
          Constitutional Governance
        </h1>
        <p className="principles-section-quote">
          Quy tắc hệ thống phải được mã hóa, phiên bản hóa và thực thi nhất quán trên mọi luồng phát
          triển.
        </p>
      </header>

      <section id="sdd02-intro" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao đội giỏi vẫn xây hệ thống tệ</h2>
        <PrincipleIntro
          principleNumber={2}
          variant="prose"
          simple={sdd02Intro.simple}
          note={sdd02Intro.note}
        />
        <Sdd02DivergentDiagram />
      </section>

      <section id="sdd02-tribal" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vấn đề tribal knowledge</h2>
        <p className="p1-section-lead">
          Quy tắc tồn tại dưới dạng &ldquo;mọi người đều biết&rdquo; — nhưng chi tiết thì không ai
          chắc.
        </p>
        <Sdd02TribalDiagram />
      </section>

      <section id="sdd02-shift" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Thay đổi cốt lõi</h2>
        <p className="p1-section-lead">
          Từ &ldquo;người nhớ luật&rdquo; sang &ldquo;hệ thống thực thi luật&rdquo;.
        </p>
        <Sdd02ShiftDiagram />
      </section>

      <section id="sdd02-constitution" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Vì sao gọi là Constitution</h2>
        <p className="p1-section-lead">
          Mọi quyết định phải nằm trong khuôn khổ đã được xác định — không ai được tự ý bỏ qua.
        </p>
        <Sdd02ConstitutionDiagram />
      </section>

      <section id="sdd02-teams" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Hai đội, hai kết quả</h2>
        <p className="p1-section-lead">
          Hai đội cùng xây CRM — một không có constitution, một có.
        </p>
        <Sdd02TeamsDiagram />
      </section>

      <section id="sdd02-agents" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Quyết định cần ranh giới</h2>
        <p className="p1-section-lead">
          AI agents làm vấn đề này nghiêm trọng hơn — hàng trăm quyết định mỗi ngày thay vì hàng chục.
        </p>
        <Sdd02AgentsDiagram />
        <Sdd02DecisionFlowDiagram />
      </section>

      <section id="sdd02-scope" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Constitution nên chứa gì?</h2>
        <p className="p1-section-lead">
          Không quy định mọi thứ — chỉ những nguyên tắc quan trọng nhất.
        </p>
        <Sdd02ScopeDiagram />
      </section>

      <section id="sdd02-gate" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Constitution là quality gate</h2>
        <p className="p1-section-lead">
          Constitution không chỉ là tài liệu — nó từ chối plan và code khi vi phạm.
        </p>
        <Sdd02GateDiagram />
      </section>

      <section id="sdd02-harness" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Constitutional Governance trong Harness Engineering</h2>
        <p className="p1-section-lead">
          Harness tốt cung cấp context, constraints và validation — không chỉ prompt.
        </p>
        <Sdd02HarnessDiagram />
      </section>

      <section id="sdd02-guardrails" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Ẩn dụ lan can</h2>
        <p className="p1-section-lead">
          Tự do di chuyển — nhưng vẫn cần lan can bảo vệ.
        </p>
        <Sdd02GuardrailsDiagram />
      </section>

      <section id="sdd02-signs" className="p1-section scroll-mt-28">
        <h2 className="p1-section-title">Dấu hiệu team cần Constitution</h2>
        <p className="p1-section-lead">
          Nếu nhận ra các dấu hiệu sau, team đang vận hành bằng tribal knowledge.
        </p>
        <ul className="p1-antipattern-grid">
          {sdd02WarningSigns.map((sign, index) => (
            <li key={sign.title} className="p1-antipattern-card">
              <p className="p1-antipattern-title">Dấu hiệu {index + 1}</p>
              <p className="p1-benefit-title">{sign.title}</p>
              <p className="p1-antipattern-body">{sign.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="sdd02-summary" className="p1-section p1-section--takeaway scroll-mt-28">
        <h2 className="p1-section-title">Mô hình tư duy</h2>
        <blockquote className="p1-principle-box">
          <p>
            <span>Không có constitution:</span> mọi quyết định trở thành tranh luận.
          </p>
          <p className="mt-3">
            <span>Có constitution:</span> quyết định trở thành validation.
          </p>
        </blockquote>
        <PrincipleSummary
          principleNumber={2}
          headline={sdd02Summary.headline}
          points={sdd02Summary.points}
        />
      </section>
    </article>
  );
}
