export const sdd02Toc = [
  { id: "sdd02-intro", label: "Đội giỏi, hệ thống tệ" },
  { id: "sdd02-tribal", label: "Tribal knowledge" },
  { id: "sdd02-shift", label: "Người → Hệ thống" },
  { id: "sdd02-constitution", label: "Vì sao Constitution" },
  { id: "sdd02-teams", label: "Hai đội CRM" },
  { id: "sdd02-agents", label: "Ranh giới quyết định" },
  { id: "sdd02-scope", label: "Nội dung Constitution" },
  { id: "sdd02-gate", label: "Quality gate" },
  { id: "sdd02-harness", label: "Harness Engineering" },
  { id: "sdd02-guardrails", label: "Lan can" },
  { id: "sdd02-signs", label: "Dấu hiệu" },
  { id: "sdd02-summary", label: "Tóm tắt" },
] as const;

export const sdd02Intro = {
  simple:
    "Developer giỏi vẫn có thể tạo hệ thống tệ — không vì thiếu kỹ năng, mà vì mỗi người quyết định theo nguyên tắc khác nhau.",
  note: "Không có bộ nguyên tắc chung, hệ thống trở thành tập hợp hàng trăm quyết định rời rạc.",
} as const;

export const sdd02DivergentHead = "Mỗi developer quyết định" as const;

export const sdd02Priorities = [
  { label: "Tốc độ", hint: "ship nhanh" },
  { label: "Clean Architecture", hint: "layer rõ ràng" },
  { label: "Hiệu năng", hint: "tối ưu sớm" },
  { label: "Đơn giản", hint: "ít abstraction" },
] as const;

export const sdd02ChaosOutcomes = [
  "3 kiểu API",
  "4 quy ước đặt tên",
  "2 framework state",
  "5 phong cách test",
] as const;

export const sdd02TribalRules = [
  {
    surface: "Chúng ta luôn viết tests",
    gaps: ["Bao nhiêu?", "Loại nào?", "Coverage đủ là bao nhiêu?"],
  },
  {
    surface: "Chúng ta theo Clean Architecture",
    gaps: ["Clean tới mức nào?", "Layer nào phụ thuộc layer nào?", "Có ngoại lệ không?"],
  },
] as const;

export const sdd02GovStack = [
  "Specification",
  "Constitution",
  "Plans",
  "Tasks",
  "Implementation",
] as const;

export const sdd02NationAnalogy = ["Công dân", "Luật", "Quyết định chính phủ"] as const;

export const sdd02TeamAChaos = [
  "3 kiểu API",
  "4 quy ước đặt tên file",
  "2 framework state",
  "5 phong cách test",
  "Nhiều kiến trúc lẫn lộn",
] as const;

export const sdd02TeamBRules = [
  "Mọi API phải có version",
  "Mọi endpoint cần OpenAPI",
  "Unit coverage ≥ 80%",
  "UI không truy cập DB trực tiếp",
] as const;

export const sdd02AgentBefore = {
  actors: "1 Developer",
  decisions: "20 quyết định / ngày",
} as const;

export const sdd02AgentAfter = {
  actors: "10 AI Agents",
  decisions: "500 quyết định / ngày",
} as const;

export const sdd02AgentChaos = [
  "Cấu trúc khác nhau",
  "Naming khác nhau",
  "Pattern khác nhau",
] as const;

export const sdd02AgentChaosShort = ["Cấu trúc", "Naming", "Pattern"] as const;

export const sdd02DecisionBefore = ["Developer", "Quyết định"] as const;

export const sdd02ConstitutionPillars = [
  {
    title: "Kiến trúc",
    examples: ["API-first", "Không logic trong controller", "Adapter cho tích hợp ngoài"],
  },
  {
    title: "Chất lượng",
    examples: ["Coverage ≥ 80%", "Không vi phạm lint nghiêm trọng", "PR phải qua validation"],
  },
  {
    title: "Bảo mật",
    examples: ["Không secret trong source", "Audit log cho hành động nhạy cảm", "JWT cho auth"],
  },
  {
    title: "Tài liệu",
    examples: ["Bắt buộc OpenAPI", "ADR cho thay đổi kiến trúc", "Ví dụ cho public API"],
  },
] as const;

export const sdd02GateRejections = [
  {
    attempt: "Frontend truy cập DB trực tiếp",
    rule: "Frontend không được truy cập database",
    outcome: "Plan bị từ chối",
  },
  {
    attempt: "PR với coverage = 35%",
    rule: "Coverage phải ≥ 80%",
    outcome: "PR bị chặn",
  },
] as const;

export const sdd02HarnessInputs = ["Task", "Context", "Constitution"] as const;

export const sdd02HarnessFormula = ["Context", "Constraints", "Validation"] as const;

export const sdd02GuardrailSpectrum = [
  { label: "Không có lan can", freedom: "Tối đa", risk: "Tối đa" },
  { label: "Lan can quá dày", freedom: "Tối thiểu", risk: "Tối thiểu" },
  { label: "Constitutional governance", freedom: "Cao", risk: "Kiểm soát" },
] as const;

export const sdd02WarningSigns = [
  {
    title: "Mỗi developer một phong cách",
    body: "Code review trở thành tranh luận về gu cá nhân thay vì kiểm tra quy tắc.",
  },
  {
    title: "Tranh luận kỹ thuật lặp lại",
    body: "Cùng một chủ đề được bàn lại mỗi sprint vì không có quyết định đã mã hóa.",
  },
  {
    title: "AI output thiếu nhất quán",
    body: "Mỗi agent sinh ra cấu trúc, naming và pattern khác nhau.",
  },
  {
    title: "Technical debt tăng khi scale",
    body: "Team lớn hơn không làm hệ thống tốt hơn — chỉ làm nó phức tạp hơn.",
  },
  {
    title: "Onboarding kéo dài",
    body: "Quy tắc ngầm chỉ tồn tại trong đầu senior, không trong hệ thống.",
  },
] as const;

export const sdd02Summary = {
  headline: "Không có constitution, mọi quyết định trở thành tranh luận.",
  points: [
    "Không có constitution — mọi quyết định trở thành tranh luận.",
    "Có constitution — quyết định trở thành validation.",
    "Đội giỏi dựa vào con người. Hệ thống vững dựa vào nguyên tắc.",
  ],
} as const;
