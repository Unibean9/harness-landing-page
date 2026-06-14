export const principle11Toc = [
  { id: "p11-intro", label: "Hiểu đơn giản" },
  { id: "p11-diagram", label: "Schema gate" },
  { id: "p11-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p11-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p11-why-matters", label: "Tại sao quan trọng" },
  { id: "p11-practice", label: "Thực hành" },
  { id: "p11-antipatterns", label: "Anti-pattern" },
  { id: "p11-output-components", label: "Thành phần output" },
  { id: "p11-output-gate", label: "Output gate" },
  { id: "p11-signs", label: "Dấu hiệu nhận biết" },
  { id: "p11-summary", label: "Tóm tắt" },
] as const;

export const principle11FreeTextPainPoints = [
  { label: "Validate", hint: "Không có schema để kiểm tra" },
  { label: "Parse", hint: "Phụ thuộc regex và heuristic" },
  { label: "Test", hint: "Output khó so sánh giữa các lần chạy" },
  { label: "Automate", hint: "Một thay đổi diễn đạt có thể làm hỏng workflow" },
] as const;

export const principle11OutputFormats = [
  { label: "JSON", hint: "Object có schema xác định" },
  { label: "XML", hint: "Cấu trúc phân cấp, dễ validate" },
  { label: "Tool Call", hint: "Tham số typed cho từng hành động" },
  { label: "Structured Response", hint: "Field cố định, không prose tự do" },
] as const;

export const principle11PipelineSteps = [
  { label: "Output", hint: "Agent trả về theo schema" },
  { label: "Validate", hint: "Sensor kiểm tra trước khi dùng" },
  { label: "Integrate", hint: "Hệ thống khác xử lý trực tiếp" },
  { label: "Test", hint: "So sánh và đánh giá tự động" },
] as const;

export const principle11Benefits = [
  {
    title: "Dễ validate",
    body: "Kiểm tra tính hợp lệ trước khi sử dụng — không đoán từ văn bản.",
  },
  {
    title: "Dễ tích hợp",
    body: "API, database và workflow nhận dữ liệu typed trực tiếp.",
  },
  {
    title: "Dễ test",
    body: "Output có cấu trúc dễ so sánh giữa các phiên chạy.",
  },
  {
    title: "Dễ mở rộng",
    body: "Workflow ít phụ thuộc vào cách diễn đạt của Agent.",
  },
] as const;

export const principle11SchemaFields = [
  { name: "interest", type: "string", required: true },
  { name: "confidence", type: "number", required: true },
] as const;

export const principle11DiagramRejectSignals = [
  "Không có field cố định",
  "Regex / heuristic parse",
  "Output thay đổi mỗi lần chạy",
] as const;

export const principle11PracticeProse =
  "Khách hàng có vẻ quan tâm tới ngành CNTT." as const;

export const principle11OutputComponents = [
  { field: "result", role: "Kết quả chính" },
  { field: "confidence", role: "Mức chắc chắn" },
  { field: "evidence", role: "Bằng chứng" },
  { field: "reasoning_summary", role: "Tóm tắt lý do" },
  { field: "errors", role: "Lỗi nếu có" },
  { field: "warnings", role: "Cảnh báo" },
  { field: "next_action", role: "Đề xuất bước tiếp" },
  { field: "requires_human_review", role: "Có cần người duyệt không" },
  { field: "metadata", role: "Thông tin phụ" },
  { field: "version", role: "Version schema/spec" },
] as const;

export const principle11OutputGate = [
  { step: "01", label: "Model output", hint: "LLM trả về structured object" },
  { step: "02", label: "Schema validation", hint: "Kiểm tra field và type" },
  { step: "03", label: "Business validation", hint: "Kiểm tra logic nghiệp vụ" },
  { step: "04", label: "Safety validation", hint: "Kiểm tra rủi ro" },
  { step: "05", label: "Execute / Reject", hint: "Cho phép hoặc từ chối" },
] as const;

export const principle11SignsCorrect = [
  "Output schema rõ",
  "Required fields rõ",
  "Enum được giới hạn",
  "Validation trước khi execute",
  "Error state có cấu trúc",
  "Confidence/evidence khi cần",
  "Text explanation tách khỏi machine output",
  "Version schema/spec được ghi nhận",
  "Output có thể được test",
] as const;

export const principle11SignsWrong = [
  "Agent chỉ trả văn bản tự do",
  "Hệ thống phải parse text bằng regex mỏng manh",
  "Output mỗi lần một kiểu",
  "Thiếu field nhưng vẫn execute",
  "Không phân biệt result và explanation",
  "Không có error format",
  "Không validate trước khi gọi action",
  "Model tự nói 'đã xong' nhưng hệ thống không kiểm tra được",
] as const;

export const principle11AntiPatterns = [
  {
    title: "Regex Parsing",
    body: "Dùng regex để trích xuất dữ liệu từ văn bản tự do — fragile và khó bảo trì.",
  },
  {
    title: "Free-Form Output",
    body: "Cho Agent trả lời tùy ý rồi hy vọng hệ thống hiểu đúng.",
  },
  {
    title: "Schema Drift",
    body: "Không kiểm tra output theo schema — field mới hoặc thiếu field không bị phát hiện.",
  },
  {
    title: "Hidden Format Rules",
    body: "Format chỉ tồn tại trong prompt, không có validator ở Harness.",
  },
] as const;

export const principle11Intro = {
  simple:
    "Structured-output-first nghĩa là: agent nên trả kết quả có cấu trúc trước, rồi mới giải thích bằng ngôn ngữ tự nhiên nếu cần.",
  note: "Text tự nhiên để người đọc. Output có cấu trúc để hệ thống kiểm tra và thực thi.",
} as const;

export const principle11Equation = [
  { term: "Text tự nhiên", def: "để người đọc và hiểu" },
  { term: "Structured output", def: "để hệ thống validate và execute" },
] as const;

export const principle11Summary = {
  headline: "Structured-output-first = output có cấu trúc trước, giải thích tự nhiên sau.",
  points: [
    "Agent có thể nói bằng văn bản.",
    "Nhưng hệ thống cần object có thể validate.",
  ],
} as const;
