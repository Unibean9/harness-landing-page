export const principle10Toc = [
  { id: "p10-intro", label: "Hiểu đơn giản" },
  { id: "p10-diagram", label: "Bộ lọc context" },
  { id: "p10-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p10-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p10-why-matters", label: "Tại sao quan trọng" },
  { id: "p10-practice", label: "Thực hành" },
  { id: "p10-antipatterns", label: "Anti-pattern" },
  { id: "p10-references", label: "Tham khảo" },
  { id: "p10-context-types", label: "Các loại context" },
  { id: "p10-builder", label: "Context builder" },
  { id: "p10-package", label: "Context package" },
  { id: "p10-signs", label: "Dấu hiệu nhận biết" },
  { id: "p10-summary", label: "Tóm tắt" },
] as const;

export const principle10NoiseSources = [
  "Toàn bộ repo",
  "Lịch sử commit",
  "Slack threads",
  "Docs nội bộ",
  "Wiki cũ",
  "Email threads",
  "Meeting notes",
  "Config files",
  "Unrelated APIs",
  "Legacy modules",
] as const;

export const principle10TaskLabel = "Nhiệm vụ: sửa lỗi backend" as const;

export const principle10FilteredOut = [
  "Slack threads",
  "Wiki cũ",
  "Legacy modules",
  "Unrelated APIs",
] as const;

export const principle10CuratedContext = [
  "Mô tả lỗi",
  "API liên quan",
  "Service liên quan",
  "Test liên quan",
  "Quy tắc kiến trúc",
] as const;

export const principle10DiagramOutcomes = [
  "Chính xác hơn",
  "Ít token hơn",
  "Dễ kiểm soát",
] as const;

export const principle10OverflowEffects = [
  { label: "Chi phí token", hint: "Tăng khi context phình to" },
  { label: "Thời gian xử lý", hint: "Agent phải lọc thêm nhiễu" },
  { label: "Bỏ sót thông tin", hint: "Signal chìm trong noise" },
  { label: "Suy luận kém", hint: "Chất lượng giảm dù model mạnh" },
] as const;

export const principle10HarnessDecisions = [
  { label: "Cung cấp", hint: "Thông tin nào được đưa vào context" },
  { label: "Loại bỏ", hint: "Thông tin nào bị cắt bỏ" },
  { label: "Cập nhật", hint: "Thời điểm refresh context" },
  { label: "Cấu trúc", hint: "Cách sắp xếp và định dạng" },
] as const;

export const principle10OutcomeCompare = [
  {
    variant: "weak" as const,
    model: "Model mạnh",
    context: "Context kém",
    outcome: "Kết quả thường tệ — Agent bị nhiễu và bỏ sót signal",
  },
  {
    variant: "strong" as const,
    model: "Model trung bình",
    context: "Context được chuẩn bị tốt",
    outcome: "Kết quả ổn định hơn — Agent tập trung đúng phạm vi",
  },
] as const;

export const principle10Benefits = [
  {
    title: "Tăng độ chính xác",
    body: "Agent tập trung vào thông tin liên quan thay vì phải lọc bỏ nhiễu.",
  },
  {
    title: "Giảm chi phí",
    body: "Ít token hơn đồng nghĩa với ít chi phí hơn.",
  },
  {
    title: "Tăng khả năng kiểm soát",
    body: "Đội ngũ xác định chính xác Agent được phép nhìn thấy gì.",
  },
  {
    title: "Dễ debug",
    body: "Kiểm tra trực tiếp context đã cung cấp khi quyết định sai.",
  },
] as const;

export const principle10TaskNeeds = [
  "Mô tả lỗi",
  "API liên quan",
  "Service liên quan",
  "Test liên quan",
  "Quy tắc kiến trúc liên quan",
] as const;

export const principle10TaskExcludes = [
  "Toàn bộ repository",
  "Toàn bộ lịch sử dự án",
  "Toàn bộ tài liệu nội bộ",
] as const;

export const principle10AntiPatterns = [
  {
    title: "Repository Dumping",
    body: "Toàn bộ repository được đưa vào context với hy vọng Agent sẽ tự tìm ra thứ cần thiết.",
  },
  {
    title: "Context As Storage",
    body: "Context bị dùng như nơi lưu trữ mọi thông tin thay vì chỉ chứa dữ liệu phục vụ nhiệm vụ hiện tại.",
  },
  {
    title: "Agent-Led Discovery",
    body: "Agent phải tự khám phá hệ thống từ đầu mỗi lần thực thi — tăng chi phí và giảm ổn định.",
  },
  {
    title: "Static Context",
    body: "Mọi nhiệm vụ nhận cùng một bộ context bất kể mục tiêu khác nhau — nhiễu tích lũy theo thời gian.",
  },
] as const;

export const principle10References = [
  {
    label: "Martin Fowler — Harness Engineering",
    href: "https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html",
  },
  {
    label: "Martin Fowler — Harness Engineering Memo",
    href: "https://martinfowler.com/articles/exploring-gen-ai/harness-engineering-memo.html",
  },
  {
    label: "Learn Harness Engineering — Why Capable Agents Still Fail",
    href: "https://learnharnessengineering.com/",
  },
] as const;

// 8 context types
export const principle10ContextTypes = [
  { label: "Task context", example: "Nhiệm vụ cần làm" },
  { label: "User context", example: "Thông tin liên quan đến người dùng" },
  { label: "Domain context", example: "Quy tắc/chuyên môn" },
  { label: "System context", example: "Trạng thái hệ thống" },
  { label: "Historical context", example: "Dữ liệu quá khứ" },
  { label: "Tool context", example: "Tool nào có thể dùng" },
  { label: "Policy context", example: "Điều gì được phép/không được phép" },
  { label: "Output context", example: "Format/schema cần trả về" },
] as const;

// Context builder responsibilities
export const principle10BuilderResponsibilities = [
  { label: "Lấy dữ liệu liên quan", hint: "Retrieve từ đúng nguồn" },
  { label: "Xếp hạng mức liên quan", hint: "Ranking & scoring" },
  { label: "Loại bỏ dữ liệu thừa", hint: "Noise filtering" },
  { label: "Nén nội dung dài", hint: "Summarization khi cần" },
  { label: "Giữ nguồn gốc thông tin", hint: "Source tracking" },
  { label: "Đánh dấu độ mới", hint: "Freshness marking" },
  { label: "Phát hiện conflict", hint: "Contradiction detection" },
  { label: "Tạo context package", hint: "Đóng gói cho model" },
] as const;

// Context package advanced schema
export const principle10ContextPackage = [
  { field: "task", note: "Nhiệm vụ cụ thể" },
  { field: "instructions", note: "Hướng dẫn thực hiện" },
  { field: "relevant_facts", note: "Dữ liệu liên quan đã chọn lọc" },
  { field: "evidence", note: "Bằng chứng hỗ trợ" },
  { field: "constraints", note: "Giới hạn và ràng buộc" },
  { field: "tools_available", note: "Tool được phép dùng" },
  { field: "known_conflicts", note: "Mâu thuẫn đã phát hiện" },
  { field: "freshness", note: "Độ mới của thông tin" },
  { field: "source_references", note: "Nguồn gốc thông tin" },
  { field: "output_schema", note: "Format cần trả về" },
] as const;

// Signs correct/wrong
export const principle10SignsCorrect = [
  "Context builder rõ ràng",
  "Không đưa toàn bộ dữ liệu vào prompt",
  "Context có nguồn gốc",
  "Context được giới hạn theo task",
  "Context có thứ tự ưu tiên",
  "Context cũ được đánh dấu",
  "Conflict được phát hiện",
  "Trace lưu context snapshot",
  "Output có thể liên kết lại với evidence",
] as const;

export const principle10SignsWrong = [
  "Prompt chứa quá nhiều dữ liệu thô",
  "Context bị copy-paste thủ công",
  "Không biết model đã thấy gì",
  "Dữ liệu mới/cũ trộn lẫn",
  "Thông tin quan trọng bị chìm trong noise",
  "Không có retrieval/ranking",
  "Khi output sai không biết do context nào",
] as const;

export const principle10Intro = {
  simple:
    "Context ownership nghĩa là: harness phải chủ động quyết định model được thấy thông tin gì.",
  note: "Đừng nhét mọi dữ liệu vào prompt. Hãy chọn đúng context cần thiết. Context nhiều không đồng nghĩa với context tốt.",
} as const;

export const principle10IntroQuestions = {
  wrong: "Nhét mọi dữ liệu vào prompt?",
  right: "Harness chọn đúng context model cần thấy?",
  wrongLabel: "Context dump",
  rightLabel: "Context ownership",
} as const;

export const principle10Equation = [
  { term: "Context nhiều", def: "≠ Context tốt" },
  { term: "Context đúng", def: "= Model suy luận đúng hơn" },
] as const;

export const principle10Summary = {
  headline:
    "Context ownership = harness chủ động chọn, nén, sắp xếp và kiểm soát context.",
  points: [
    "Context tốt giúp model suy luận đúng hơn.",
    "Context nhiễu làm agent khó kiểm soát hơn.",
  ],
} as const;
