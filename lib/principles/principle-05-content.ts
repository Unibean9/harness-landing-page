export const principle05Toc = [
  { id: "p5-diagram", label: "Guide & Sensor" },
  { id: "p5-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p5-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p5-why-matters", label: "Tại sao quan trọng" },
  { id: "p5-practice", label: "Thực hành" },
  { id: "p5-antipatterns", label: "Anti-pattern" },
] as const;

export const principle05WithoutGuideSensor = [
  "Hiểu sai yêu cầu",
  "Tạo kết quả không hợp lệ",
  "Tự tin trả lời sai",
  "Không có cách phát hiện",
] as const;

export const principle05PromptOnlyProblems = [
  "Chỉ tập trung vào prompt",
  "Bỏ qua cơ chế kiểm tra",
  "Không có vòng phản hồi",
] as const;

export const principle05GuideItems = [
  { label: "Mục tiêu", hint: "Agent biết phải đạt gì" },
  { label: "Quy tắc", hint: "Ranh giới & policy" },
  { label: "Context", hint: "Dữ liệu đúng việc" },
  { label: "Workflow", hint: "Luồng bước rõ ràng" },
] as const;

export const principle05SensorChecks = [
  { label: "Kết quả hợp lệ?", hint: "Schema & format" },
  { label: "Đạt yêu cầu?", hint: "DoD & acceptance" },
  { label: "Vi phạm quy tắc?", hint: "Policy & guardrails" },
] as const;

export const principle05Benefits = [
  {
    title: "Tăng khả năng thành công",
    body: "Guide giảm sự mơ hồ.",
  },
  {
    title: "Phát hiện lỗi",
    body: "Sensor phát hiện sai lệch.",
  },
  {
    title: "Tăng độ tin cậy",
    body: "Agent không còn là hộp đen.",
  },
  {
    title: "Hỗ trợ tự sửa lỗi",
    body: "Agent có thể nhận phản hồi và thử lại.",
  },
] as const;

export const principle05GuidePractice = [
  "Specs",
  "AGENTS.md",
  "Context builder",
] as const;

export const principle05SensorPractice = [
  "Tests",
  "Validators",
  "Human review",
  "Policy checks",
] as const;

export const principle05AntiPatterns = [
  {
    title: "Prompt-only agent",
    body: "Chỉ dựa vào prompt.",
  },
  {
    title: "Validation-free execution",
    body: "Không kiểm tra kết quả.",
  },
  {
    title: "Human-as-the-only-sensor",
    body: "Mọi thứ đều phải do con người xác nhận.",
  },
  {
    title: "AI without feedback",
    body: "Agent không nhận phản hồi về chất lượng kết quả.",
  },
] as const;
