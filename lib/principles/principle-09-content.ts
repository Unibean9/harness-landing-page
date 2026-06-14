export const principle09Toc = [
  { id: "p9-intro", label: "Hiểu đơn giản" },
  { id: "p9-diagram", label: "Super Agent vs focused" },
  { id: "p9-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p9-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p9-why-matters", label: "Tại sao quan trọng" },
  { id: "p9-practice", label: "Thực hành" },
  { id: "p9-antipatterns", label: "Anti-pattern" },
  { id: "p9-module-components", label: "Module cần gì" },
  { id: "p9-decomposed-flow", label: "Big vs Decomposed" },
  { id: "p9-module-types", label: "Loại module" },
  { id: "p9-signs", label: "Dấu hiệu nhận biết" },
  { id: "p9-summary", label: "Tóm tắt" },
] as const;

export const principle09SuperAgentProblems = [
  "Prompt phức tạp",
  "Context khổng lồ",
  "Hành vi khó dự đoán",
] as const;

export const principle09SuperAgentRoles = [
  "Research",
  "Planning",
  "Coding",
  "Review",
  "Deploy",
  "Debug",
  "Test",
  "Docs",
] as const;

export const principle09AgentQualities = [
  { label: "Hiểu", hint: "Mục tiêu và phạm vi rõ ràng" },
  { label: "Test", hint: "Kiểm thử độc lập từng Agent" },
  { label: "Bảo trì", hint: "Sửa một phần không ảnh hưởng toàn bộ" },
  { label: "Thay thế", hint: "Đổi model hoặc prompt từng khối" },
] as const;

export const principle09FocusedAgents = [
  { label: "Research Agent", hint: "Thu thập và tổng hợp thông tin" },
  { label: "Planning Agent", hint: "Chia nhỏ mục tiêu và lập kế hoạch" },
  { label: "Coding Agent", hint: "Viết và chỉnh sửa mã nguồn" },
  { label: "Review Agent", hint: "Đánh giá chất lượng và tuân thủ spec" },
] as const;

export const principle09Benefits = [
  {
    title: "Dễ kiểm soát context",
    body: "Mỗi Agent chỉ cần một phần nhỏ thông tin.",
  },
  {
    title: "Dễ đo lường",
    body: "Hiệu suất từng Agent có thể được đánh giá riêng.",
  },
  {
    title: "Dễ nâng cấp",
    body: "Có thể thay đổi một Agent mà không ảnh hưởng toàn hệ thống.",
  },
  {
    title: "Dễ tái sử dụng",
    body: "Agent có thể được dùng trong nhiều workflow khác nhau.",
  },
] as const;

export const principle09AntiPatterns = [
  {
    title: "Super Agent",
    body: "Một Agent chịu mọi trách nhiệm — từ research đến deploy.",
  },
  {
    title: "Context Explosion",
    body: "Prompt và context ngày càng lớn theo thời gian.",
  },
  {
    title: "Mixed Responsibilities",
    body: "Một Agent thực hiện quá nhiều vai trò khác nhau.",
  },
  {
    title: "Monolithic Agent",
    body: "Không thể tách rời hoặc tái sử dụng trong workflow khác.",
  },
] as const;

// 8 components a focused agent/module should have
export const principle09ModuleComponents = [
  { label: "Single responsibility", hint: "Chỉ làm một nhóm việc rõ" },
  { label: "Input schema", hint: "Nhận dữ liệu có cấu trúc" },
  { label: "Output schema", hint: "Trả dữ liệu có cấu trúc" },
  { label: "Context boundary", hint: "Chỉ nhận context cần thiết" },
  { label: "Tool boundary", hint: "Chỉ dùng tool cần thiết" },
  { label: "Validation", hint: "Có kiểm tra output" },
  { label: "Trace", hint: "Có ghi quá trình chạy" },
  { label: "Eval/test", hint: "Có tiêu chí đánh giá riêng" },
] as const;

// Big agent bad flow
export const principle09BigAgentFlow = [
  "hiểu nhiệm vụ",
  "tìm dữ liệu",
  "phân tích",
  "gọi tool",
  "quyết định",
  "ghi kết quả",
  "tự kiểm tra",
] as const;

// Good decomposed flow
export const principle09DecomposedFlow = [
  { label: "Task Understanding Module", hint: "Hiểu nhiệm vụ" },
  { label: "Context Builder", hint: "Lấy đúng dữ liệu" },
  { label: "Reasoning Agent", hint: "Phân tích & quyết định" },
  { label: "Validation Module", hint: "Kiểm tra output" },
  { label: "Action Executor", hint: "Thực thi hành động" },
  { label: "Trace Recorder", hint: "Ghi lại quá trình" },
] as const;

// Advanced mixing: not all modules need to be LLM
export const principle09ModuleTypes = [
  { label: "LLM agent", hint: "Cần suy luận phức tạp" },
  { label: "Deterministic code", hint: "Logic có thể kiểm tra chắc chắn" },
  { label: "Rule engine", hint: "Rule-based decision" },
  { label: "Validator", hint: "Kiểm tra output" },
  { label: "Retriever", hint: "Lấy dữ liệu" },
  { label: "Human review", hint: "Điểm kiểm soát người" },
] as const;

// Signs correct/wrong
export const principle09SignsCorrect = [
  "Agent/module có tên rõ theo nhiệm vụ",
  "Mỗi agent có input/output schema",
  "Prompt ngắn và tập trung",
  "Context nhỏ và đúng mục tiêu",
  "Tool access giới hạn",
  "Test riêng cho từng agent",
  "Có thể thay một agent mà không phá toàn hệ thống",
  "Lỗi được khoanh vùng dễ dàng",
] as const;

export const principle09SignsWrong = [
  "Một agent làm quá nhiều thứ",
  "Prompt dài chứa nhiều nhiệm vụ không liên quan",
  "Context quá lớn",
  "Agent nào cũng có quyền gọi mọi tool",
  "Lỗi xảy ra không biết do phần nào",
  "Muốn sửa một hành vi phải sửa toàn bộ agent",
  "Không test riêng được từng phần",
] as const;

export const principle09Intro = {
  simple:
    "Small focused agents nghĩa là: nên chia agent thành các phần nhỏ, mỗi phần làm một việc rõ ràng.",
  note: "Đừng xây một agent khổng lồ làm tất cả. Hãy xây nhiều agent/module nhỏ, dễ kiểm tra hơn. Agent nhỏ → Boundary rõ → Context ít → Output dễ validate → Lỗi dễ tìm.",
} as const;

export const principle09IntroQuestions = {
  wrong: "Một agent lớn làm tất cả?",
  right: "Nhiều module nhỏ, mỗi cái một việc rõ ràng?",
  wrongLabel: "Agent khổng lồ",
  rightLabel: "Agent tập trung",
} as const;

export const principle09Summary = {
  headline:
    "Small focused agents = chia agent/module nhỏ, trách nhiệm rõ, dễ kiểm tra và thay thế.",
  points: [
    "Agent càng nhỏ và rõ, harness càng dễ kiểm soát.",
    "Chỉ dùng LLM ở nơi cần suy luận. Dùng code/rule ở nơi có thể kiểm tra chắc chắn.",
  ],
} as const;
