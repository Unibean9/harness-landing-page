import Link from "next/link";

export function PrinciplesConclusionPage() {
  return (
    <article aria-labelledby="principles-conclusion-title" data-principles-item>
      <header className="principles-doc-header">
        <h1 id="principles-conclusion-title" className="principles-doc-title">
          Kết luận
        </h1>
      </header>

      <div id="principles-conclusion-body" className="principles-prose">
        <p>
          Harness Engineering đòi hỏi sự dịch chuyển vai trò của lập trình viên: từ việc gõ code sang
          việc thiết kế môi trường, vòng lặp phản hồi và hệ thống điều khiển.
        </p>
        <p>
          Hãy bắt đầu với nguyên lý số 6 ngay hôm nay: tạo tệp{" "}
          <code className="code-inline">AGENTS.md</code> đầu tiên cho dự án của bạn.
        </p>
      </div>

      <div className="principles-doc-actions">
        <Link href="/nguyen-ly/spec-as-source" className="btn-primary w-full sm:w-auto">
          Xem nguyên lý 06 — Spec-as-source
        </Link>
        <Link href="/tai-nguyen" className="btn-ghost w-full sm:w-auto">
          Xem tài nguyên
        </Link>
      </div>
    </article>
  );
}
