export const principle02Toc = [
  { id: "p2-diagram", label: "Harnessability là gì" },
  { id: "p2-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p2-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p2-why-matters", label: "Tại sao quan trọng" },
  { id: "p2-practice", label: "Thực hành" },
  { id: "p2-antipatterns", label: "Anti-pattern" },
] as const;

export const principle02SystemProblems = [
  "Module không rõ ràng",
  "Quy tắc nằm trong đầu lập trình viên",
  "Tài liệu không đầy đủ",
  "Cấu trúc không nhất quán",
] as const;

export const principle02AgentConsequences = [
  "Phải suy đoán thay vì thực thi",
  "Đốt context vào việc đọc hiểu",
  "Tỷ lệ lỗi tăng cao",
  "Harness khó định hướng Agent",
] as const;

export const principle02Traits = [
  { label: "Boundary rõ ràng", hint: "Ranh giới module" },
  { label: "Naming nhất quán", hint: "Quy ước đặt tên" },
  { label: "Type rõ ràng", hint: "Kiểu dữ liệu mạnh" },
  { label: "Test đầy đủ", hint: "Coverage & regression" },
  { label: "Documentation phù hợp", hint: "Spec trong repo" },
] as const;

export const principle02Benefits = [
  {
    title: "Giảm chi phí context",
    body: "Agent cần ít thông tin hơn để hiểu hệ thống.",
  },
  {
    title: "Tăng độ chính xác",
    body: "Ít suy đoán hơn đồng nghĩa với ít lỗi hơn.",
  },
  {
    title: "Dễ kiểm soát hơn",
    body: "Harness có thể định hướng Agent hiệu quả hơn.",
  },
  {
    title: "Dễ mở rộng hơn",
    body: "Agent mới có thể bổ sung mà không cần hiểu toàn bộ hệ thống.",
  },
] as const;

export const principle02PracticeChecks = [
  "Chuẩn hóa naming convention",
  "Chia module rõ ràng",
  "Viết tài liệu kiến trúc",
  "Duy trì test coverage",
  "Hạn chế logic ẩn",
] as const;

export const principle02AntiPatterns = [
  {
    title: "God module",
    body: "Một module chịu trách nhiệm cho quá nhiều việc.",
  },
  {
    title: "Hidden knowledge",
    body: "Quy tắc chỉ tồn tại trong đầu đội ngũ phát triển.",
  },
  {
    title: "Inconsistent naming",
    body: "Các thành phần tương tự nhưng được đặt tên khác nhau.",
  },
  {
    title: "Architecture drift",
    body: "Kiến trúc thực tế khác xa tài liệu.",
  },
] as const;
