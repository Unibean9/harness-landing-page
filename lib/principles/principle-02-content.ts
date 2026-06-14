export const principle02Toc = [
  { id: "p2-intro", label: "Hiểu đơn giản" },
  { id: "p2-diagram", label: "Harnessability là gì" },
  { id: "p2-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p2-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p2-why-matters", label: "Tại sao quan trọng" },
  { id: "p2-practice", label: "Thực hành" },
  { id: "p2-antipatterns", label: "Anti-pattern" },
  { id: "p2-building-blocks", label: "Sáu thành phần" },
  { id: "p2-signs", label: "Dấu hiệu nhận biết" },
  { id: "p2-summary", label: "Tóm tắt" },
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

// 6 Building blocks of Harnessability
export const principle02BuildingBlocks = [
  {
    index: "01",
    label: "Boundary rõ ràng",
    description: "Phân biệt rõ: Input → Processing → Decision → Action → Validation → Output. Các phần không được trộn lẫn.",
  },
  {
    index: "02",
    label: "Contract rõ ràng",
    description: "Mỗi bước có contract: nhận dữ liệu gì, trả về gì, field nào bắt buộc, lỗi nào có thể xảy ra, điều kiện thành công/thất bại.",
  },
  {
    index: "03",
    label: "Convention ổn định",
    description: "Quy ước rõ về: đặt tên, tổ chức file, mô tả schema, ghi log, định nghĩa lỗi, lưu state, version spec.",
  },
  {
    index: "04",
    label: "Testability",
    description: "Nếu hệ thống không test được thì Harness khó biết Agent làm đúng hay sai. Test là một dạng sensor quan trọng.",
  },
  {
    index: "05",
    label: "Observability",
    description: "Hệ thống để lại dấu vết: Agent nhận input gì, dùng context nào, gọi tool nào, tạo output gì, lỗi ở đâu, validation pass/fail.",
  },
  {
    index: "06",
    label: "Recoverability",
    description: "Agent có thể lỗi — hệ thống cần: retry, resume, fallback, rollback, human review.",
  },
] as const;

// Paired signs — low vs high Harnessability on the same dimension
export const principle02SignRows = [
  { low: "Rule nằm rải rác", high: "Cấu trúc rõ" },
  { low: "Logic không có boundary", high: "Workflow rõ" },
  { low: "Output tự do, không schema", high: "Schema rõ" },
  { low: "Không có test", high: "Test rõ" },
  { low: "Không có trace", high: "Logging rõ" },
  { low: "Không biết trạng thái hiện tại", high: "State rõ" },
  { low: "Không biết Agent được phép làm gì", high: "Quyền hạn rõ" },
  { low: "Lỗi chỉ được xử lý thủ công", high: "Error rõ" },
  { low: "Khó debug khi Agent sai", high: "Spec rõ" },
  { low: null, high: "Có thể replay một lần chạy" },
] as const;

export const principle02Intro = {
  simple:
    "Harnessability nghĩa là: hệ thống phải được thiết kế sao cho agent dễ hiểu, dễ làm đúng và dễ bị kiểm tra.",
  note: "Muốn agent làm đúng, môi trường quanh agent phải rõ ràng. Nếu hệ thống quá mơ hồ, agent sẽ phải đoán. Càng đoán nhiều, càng dễ sai.",
} as const;

export const principle02Summary = {
  headline:
    "Harnessability = thiết kế hệ thống sao cho agent dễ được hướng dẫn, kiểm tra và kiểm soát.",
  points: [
    "Hệ thống càng rõ ràng, agent càng ít phải đoán.",
    "Agent càng ít phải đoán, harness càng dễ kiểm soát.",
  ],
} as const;
