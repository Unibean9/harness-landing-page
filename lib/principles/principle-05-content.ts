export const principle05Toc = [
  { id: "p5-intro", label: "Hiểu đơn giản" },
  { id: "p5-diagram", label: "Guide & Sensor" },
  { id: "p5-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p5-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p5-why-matters", label: "Tại sao quan trọng" },
  { id: "p5-practice", label: "Thực hành" },
  { id: "p5-antipatterns", label: "Anti-pattern" },
  { id: "p5-guide-types", label: "Các loại Guide" },
  { id: "p5-sensor-types", label: "Các loại Sensor" },
  { id: "p5-feedback-loop", label: "Vòng phản hồi" },
  { id: "p5-summary", label: "Tóm tắt" },
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

// Full 10-type Guide table
export const principle05GuideTypes = [
  { label: "Prompt", role: "Chỉ dẫn trực tiếp" },
  { label: "Spec", role: "Mô tả rule và constraint" },
  { label: "Context", role: "Dữ liệu được chọn lọc" },
  { label: "Tool schema", role: "Mô tả công cụ được dùng" },
  { label: "Example", role: "Ví dụ đúng/sai" },
  { label: "Policy", role: "Quy định được phép/không được phép" },
  { label: "Workflow", role: "Thứ tự các bước" },
  { label: "Memory", role: "Thông tin cần nhớ" },
  { label: "Style guide", role: "Chuẩn trình bày" },
  { label: "Domain rule", role: "Quy tắc chuyên môn" },
] as const;

// Full 10-type Sensor table
export const principle05SensorTypes = [
  { label: "Schema validation", role: "Kiểm tra output đúng cấu trúc" },
  { label: "Test", role: "Kiểm tra hành vi" },
  { label: "Type checker", role: "Kiểm tra kiểu dữ liệu" },
  { label: "Linter", role: "Kiểm tra quy chuẩn" },
  { label: "Runtime check", role: "Kiểm tra khi chạy" },
  { label: "Log", role: "Ghi lại hành vi" },
  { label: "Trace", role: "Theo dõi execution" },
  { label: "Eval", role: "Đánh giá chất lượng" },
  { label: "Human review", role: "Người kiểm tra" },
  { label: "Consistency check", role: "Kiểm tra mâu thuẫn" },
] as const;

// Feedback loop steps
export const principle05FeedbackLoop = [
  { step: "01", action: "Guide đưa chỉ dẫn" },
  { step: "02", action: "Agent thực hiện" },
  { step: "03", action: "Sensor kiểm tra" },
  { step: "04", action: "Phát hiện lỗi" },
  { step: "05", action: "Cập nhật guide/spec/test" },
  { step: "06", action: "Agent lần sau làm tốt hơn" },
] as const;

// Computational vs Inferential
export const principle05ComputationalGuide = ["Schema", "Test", "Linter", "Type checker", "Deterministic rule", "Runtime validator"] as const;
export const principle05ComputationalSensor = ["Schema", "Test", "Linter", "Type checker", "Deterministic rule", "Runtime validator"] as const;
export const principle05InferentialGuide = ["Natural language spec", "Example-based guidance", "Domain rule"] as const;
export const principle05InferentialSensor = ["Semantic evaluator", "AI judge", "Human review", "Expert review"] as const;

export const principle05Intro = {
  simple:
    "Guide & Sensor nghĩa là: agent cần được hướng dẫn trước khi làm và được kiểm tra sau khi làm.",
  note: "Guide giúp agent đi đúng hướng. Sensor kiểm tra agent có đi đúng không. Một hệ thống chỉ có prompt mà không có kiểm tra thì chưa đủ mạnh.",
} as const;

export const principle05Equation = [
  { term: "Guide", def: "hướng dẫn trước hành động" },
  { term: "Sensor", def: "kiểm tra sau hành động" },
] as const;

export const principle05Summary = {
  headline: "Guide = định hướng. Sensor = kiểm chứng. Feedback = cải tiến.",
  points: [
    "Harness tốt không chỉ nói cho agent biết phải làm gì.",
    "Harness còn kiểm tra agent có thật sự làm đúng không.",
  ],
} as const;
