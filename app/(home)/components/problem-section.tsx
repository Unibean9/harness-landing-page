import { SectionShell } from "./section-shell";
import { SectionHeader } from "./section-header";
import { Subheading } from "./subheading";
import { WarningCards } from "./warning-cards";
import { FlowSteps } from "./flow-steps";

const symptoms = [
  {
    title: "AI hiểu sai mục tiêu",
    description: "Lệch yêu cầu ngay từ đầu vì thiếu định hướng rõ ràng",
  },
  {
    title: "Kết quả không được kiểm chứng",
    description: "Output nghe hợp lý nhưng không qua quy trình đánh giá",
  },
  {
    title: "Lỗi nhỏ tích tụ lớn",
    description: "Sai lệch cộng dồn qua nhiều bước mà không có phản hồi",
  },
];

const cascade = [
  {
    index: "01",
    title: "Thiếu định hướng",
    description: "AI hiểu sai mục tiêu hoặc đi lệch yêu cầu",
    fix: "Mục tiêu và ranh giới được ghi rõ trong harness",
  },
  {
    index: "02",
    title: "Thiếu công cụ",
    description: "Không có môi trường để thực hiện công việc thực tế",
    fix: "Công cụ, API và test được cấp sẵn cho agent",
  },
  {
    index: "03",
    title: "Thiếu kiểm chứng",
    description: "Kết quả không qua quy trình đánh giá",
    fix: "Quy trình xác minh tự động chạy sau mỗi bước",
  },
  {
    index: "04",
    title: "Dễ ảo giác",
    description: "Thông tin sai nhưng nghe có vẻ hợp lý",
    fix: "Guardrails và checklist bắt buộc trước khi hoàn thành",
  },
  {
    index: "05",
    title: "Dễ tích tụ lỗi",
    description: "Lỗi nhỏ cộng dồn thành sai lệch lớn",
    fix: "Phản hồi lỗi quay lại hệ thống — agent không lặp lại",
    highlight: true,
  },
];

export function ProblemSection() {
  return (
    <SectionShell id="van-de" tone="wash" className="border-t border-border/60">
      <div className="space-y-12 lg:space-y-16" data-motion-section>
        <div data-motion-item>
          <SectionHeader
            sectionLabel="Phần 02"
            title={
              <>
                Vì sao cần <span className="text-primary">Harness Engineering</span>?
              </>
            }
            description="Các mô hình AI hiện nay rất mạnh, nhưng nếu để chúng hoạt động độc lập mà không có môi trường quản lý thì giống như thả một sinh viên xuất sắc vào một tổ chức hỗn loạn."
          />
        </div>

        <div className="space-y-6" data-motion-item>
          <Subheading>Triệu chứng khi thiếu harness</Subheading>
          <WarningCards items={symptoms} />
        </div>

        <div className="space-y-6" data-motion-item>
          <Subheading>Chuỗi suy thoái — và cách harness can thiệp</Subheading>
          <FlowSteps steps={cascade} />
        </div>

        <div className="callout-accent rounded-r-2xl p-6 sm:p-8" data-motion-item>
          <p className="font-display text-lg font-semibold leading-snug text-brand-primary">
            <span className="text-primary">Giải pháp:</span> AI không còn hoạt động trong môi
            trường hỗn loạn, mà vận hành trong pipeline có kiểm soát và có thể lặp lại.
          </p>
          <p className="mt-3 font-mono text-xs text-primary">
            Model mạnh + Harness = Thực thi đáng tin cậy
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
