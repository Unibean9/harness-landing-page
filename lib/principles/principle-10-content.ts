export const principle10Toc = [
  { id: "p10-diagram", label: "Bộ lọc context" },
  { id: "p10-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p10-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p10-why-matters", label: "Tại sao quan trọng" },
  { id: "p10-practice", label: "Thực hành" },
  { id: "p10-antipatterns", label: "Anti-pattern" },
  { id: "p10-references", label: "Tham khảo" },
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
