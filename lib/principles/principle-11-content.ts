export const principle11Toc = [
  { id: "p11-diagram", label: "Schema gate" },
  { id: "p11-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p11-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p11-why-matters", label: "Tại sao quan trọng" },
  { id: "p11-practice", label: "Thực hành" },
  { id: "p11-antipatterns", label: "Anti-pattern" },
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
