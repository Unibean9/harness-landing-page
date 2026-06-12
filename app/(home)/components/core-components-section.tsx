import { SectionShell } from "./section-shell";
import { ImagePlaceholder } from "./image-placeholder";

const components = [
  {
    title: "Ràng buộc & Ranh giới",
    description:
      "Thiết lập giới hạn, quy tắc và phạm vi hành động để AI không hoạt động tự do ngoài tầm kiểm soát.",
  },
  {
    title: "Xác minh & Rào bảo vệ",
    description:
      "Kết hợp các công cụ kiểm tra cố định như test, linter với đánh giá bằng AI để kiểm tra tính hợp lệ của kết quả.",
  },
  {
    title: "Vòng lặp phản hồi",
    description:
      "Theo dõi lỗi sai, phân tích điểm thất bại và đưa phương án sửa lỗi trở lại vào hệ thống để AI không lặp lại lỗi cũ.",
  },
  {
    title: "Công cụ thực thi",
    description:
      "Cho phép AI sử dụng các công cụ cần thiết như API, hệ thống kiểm thử, môi trường chạy thử hoặc hệ thống quản lý tiến độ.",
  },
  {
    title: "Quản lý trạng thái",
    description:
      "Giúp AI ghi nhớ tiến độ, quyết định, lỗi đã gặp và trạng thái hiện tại của công việc.",
  },
  {
    title: "Phê duyệt của con người",
    description:
      "Đưa con người vào các bước quan trọng để đảm bảo kết quả cuối cùng an toàn và phù hợp.",
  },
];

export function CoreComponentsSection() {
  return (
    <SectionShell id="thanh-phan">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4" data-reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.02em] font-bold text-brand-primary">
            Thành phần chính của một Harness hiện đại
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div
            className="grid grid-flow-dense gap-4 sm:grid-cols-2"
            data-reveal
          >
            {components.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[16px] border border-border bg-brand-surface p-6 shadow-sm transition hover:shadow-md ${
                  index === 0 || index === 5 ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="text-base font-bold text-brand-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div data-scale-fade>
            <ImagePlaceholder
              label="Hệ sinh thái: AI ở giữa, xung quanh Constraints, Guardrails, Feedback, Tools, State, Human Approval"
              aspect="square"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
