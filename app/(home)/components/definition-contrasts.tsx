interface DefinitionContrast {
  topic: string;
  common: string;
  harness: string;
}

const contrasts: DefinitionContrast[] = [
  {
    topic: "Model",
    common: "Tạo hoặc fine-tune mô hình mới",
    harness: "Dùng mô hình sẵn có, xây môi trường quanh nó",
  },
  {
    topic: "Prompt",
    common: "Viết câu lệnh tốt hơn",
    harness: "Prompt chỉ là đầu vào — còn kiểm tra, công cụ, phản hồi",
  },
  {
    topic: "Automation",
    common: "Chạy quy trình cố định từ đầu đến cuối",
    harness: "Linh hoạt nhưng vẫn có ràng buộc và xác minh",
  },
];

export function DefinitionContrasts() {
  return (
    <div className="space-y-5" data-motion-item>
      <p className="text-pretty text-base leading-relaxed text-brand-primary/75 sm:text-lg">
        Harness Engineering thường bị gán nhầm với ba hướng quen thuộc — định nghĩa đúng là nhìn
        lại từng hướng.
      </p>

      <div className="divide-y divide-border rounded-xl border border-border bg-brand-surface/50">
        {contrasts.map((item) => (
          <article
            key={item.topic}
            className="space-y-2 px-5 py-4 sm:space-y-0 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1 sm:px-6 sm:py-4.5 xl:flex-nowrap"
          >
            <span className="code-inline w-fit shrink-0">{item.topic}</span>
            <span className="font-display italic text-brand-primary/50">{item.common}</span>
            <span className="hidden font-display font-bold text-primary sm:inline" aria-hidden="true">
              →
            </span>
            <span className="block font-medium text-brand-primary sm:inline">
              <span className="font-display font-bold text-primary sm:hidden" aria-hidden="true">
                →{" "}
              </span>
              {item.harness}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
