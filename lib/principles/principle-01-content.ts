export const principle01Toc = [
  { id: "p1-intro", label: "Hiểu đơn giản" },
  { id: "p1-diagram", label: "Agent = Model + Harness" },
  { id: "p1-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p1-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p1-why-matters", label: "Tại sao quan trọng" },
  { id: "p1-practice", label: "Thực hành" },
  { id: "p1-antipatterns", label: "Anti-pattern" },
  { id: "p1-components", label: "Thành phần Harness" },
  { id: "p1-lifecycle", label: "Vòng đời thực thi" },
  { id: "p1-summary", label: "Tóm tắt" },
] as const;

export const principle01HarnessLayers = [
  { label: "Specifications", hint: "Đặc tả & DoD" },
  { label: "Context", hint: "Ngữ cảnh đúng việc" },
  { label: "Tools", hint: "Công cụ thực thi" },
  { label: "State", hint: "Trạng thái & bộ nhớ" },
  { label: "Validation", hint: "Kiểm tra tự động" },
  { label: "Observability", hint: "Trace & log" },
  { label: "Human review", hint: "Điểm kiểm soát người" },
] as const;

export const principle01CommonReactions = [
  "Đổi model",
  "Tăng context window",
  "Viết prompt dài hơn",
  "Dùng model đắt tiền hơn",
] as const;

export const principle01RootCauses = [
  "Thiếu context phù hợp",
  "Thiếu công cụ cần thiết",
  "Thiếu cơ chế kiểm tra",
  "Thiếu khả năng truy vết",
  "Thiếu quy trình kiểm soát",
] as const;

export const principle01Benefits = [
  {
    title: "Tăng chất lượng đầu ra",
    body: "Agent nhận được nhiều hỗ trợ hơn để hoàn thành nhiệm vụ.",
  },
  {
    title: "Giảm chi phí",
    body: "Không cần liên tục nâng cấp sang các model đắt tiền hơn.",
  },
  {
    title: "Dễ vận hành hơn",
    body: "Hành vi của Agent trở nên ổn định và dễ dự đoán hơn.",
  },
  {
    title: "Tăng khả năng mở rộng",
    body: "Cải tiến ở Harness thường có tác động đến toàn bộ hệ thống.",
  },
] as const;

export const principle01PracticeChecks = [
  "Agent đã có đầy đủ context chưa?",
  "Agent có tool phù hợp chưa?",
  "Có test hoặc validation chưa?",
  "Có lưu trace không?",
  "Có cơ chế review không?",
] as const;

export const principle01AntiPatterns = [
  {
    title: "Model shopping",
    body: "Liên tục chuyển đổi giữa các model với hy vọng kết quả sẽ tốt hơn.",
  },
  {
    title: "Prompt obsession",
    body: "Dồn toàn bộ nỗ lực vào việc chỉnh sửa prompt.",
  },
  {
    title: "Validation-free agent",
    body: "Agent tạo kết quả nhưng không có cơ chế xác minh.",
  },
  {
    title: "Tool neglect",
    body: "Agent cần tool nhưng không được cấp quyền truy cập.",
  },
] as const;

// 10-component harness table
export const principle01HarnessComponents = [
  { label: "Prompt / Instruction", role: "Hướng dẫn model làm gì" },
  { label: "Spec", role: "Mô tả rule, constraint, mục tiêu" },
  { label: "Context builder", role: "Chọn dữ liệu cần đưa cho model" },
  { label: "Tool control", role: "Kiểm soát tool model được phép dùng" },
  { label: "Output schema", role: "Ép output có cấu trúc" },
  { label: "Validation", role: "Kiểm tra output đúng/sai" },
  { label: "State", role: "Lưu trạng thái quá trình chạy" },
  { label: "Trace / Log", role: "Ghi lại hành vi của agent" },
  { label: "Retry / Fallback", role: "Xử lý khi lỗi" },
  { label: "Human review", role: "Cho người can thiệp khi cần" },
] as const;

// Lifecycle flow (10 steps)
export const principle01LifecycleSteps = [
  "Task received",
  "Context selected",
  "Model called",
  "Tool used",
  "Output generated",
  "Output validated",
  "State updated",
  "Trace recorded",
  "Error handled",
  "Human reviewed if needed",
] as const;

// 6 layers of the 13 principles system
export const principle01SixLayers = [
  { layer: "Tầng 1", title: "Tư duy nền tảng", items: "Harness-first · Harnessability" },
  { layer: "Tầng 2", title: "Kiến trúc vận hành", items: "Event/channel agnostic · Production controllability" },
  { layer: "Tầng 3", title: "Cơ chế kiểm soát", items: "Guide & Sensor · Spec-as-source" },
  { layer: "Tầng 4", title: "Governance", items: "Human as control point · Application-owned control flow" },
  { layer: "Tầng 5", title: "Thiết kế agent", items: "Small focused agents · Context ownership · Structured-output-first" },
  { layer: "Tầng 6", title: "Quan sát & cải tiến", items: "Traceable state · Error as feedback" },
] as const;

export const principle01Intro = {
  simple:
    "Harness-first nghĩa là: trước khi cố làm model thông minh hơn, hãy thiết kế hệ thống bao quanh model để model làm việc đúng hơn, an toàn hơn và dễ kiểm soát hơn.",
  note: 'Đừng chỉ hỏi: "Dùng model nào tốt nhất?" — Hãy hỏi trước: "Hệ thống quanh model đã kiểm soát được model chưa?"',
} as const;

export const principle01IntroQuestions = {
  wrong: "Dùng model nào tốt nhất?",
  right: "Hệ thống quanh model đã kiểm soát được model chưa?",
} as const;

export const principle01Equation = [
  { term: "Model", def: "năng lực suy luận" },
  { term: "Harness", def: "hệ thống kiểm soát năng lực đó" },
] as const;

export const principle01Summary = {
  headline: "Harness-first = kiểm soát hệ thống quanh model trước, tối ưu model sau.",
  points: [
    "Model tạo ra năng lực.",
    "Harness biến năng lực đó thành hành vi có thể kiểm soát.",
  ],
} as const;
