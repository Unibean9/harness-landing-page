export const principle12Toc = [
  { id: "p12-intro", label: "Hiểu đơn giản" },
  { id: "p12-diagram", label: "Execution trace" },
  { id: "p12-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p12-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p12-why-matters", label: "Tại sao quan trọng" },
  { id: "p12-practice", label: "Thực hành" },
  { id: "p12-antipatterns", label: "Anti-pattern" },
  { id: "p12-comparison", label: "Trace vs Logging" },
  { id: "p12-full-schema", label: "Trace schema đầy đủ" },
  { id: "p12-trace-usages", label: "Trace dùng để làm gì" },
  { id: "p12-signs", label: "Dấu hiệu nhận biết" },
  { id: "p12-summary", label: "Tóm tắt" },
] as const;

export const principle12DebugQuestions = [
  "Agent nhận input gì?",
  "Agent nhìn thấy context gì?",
  "Agent đã làm những gì?",
] as const;

export const principle12TraceEvents = [
  {
    step: "01",
    kind: "input",
    label: "Input",
    detail: "ticket #847 · sửa lỗi API checkout",
    time: "09:14:02",
  },
  {
    step: "02",
    kind: "context",
    label: "Context",
    detail: "3 files · 2 tests · arch rules v2.1",
    time: "09:14:03",
  },
  {
    step: "03",
    kind: "action",
    label: "Actions",
    detail: "read_file → edit_file → run_tests",
    time: "09:14:18",
  },
  {
    step: "04",
    kind: "output",
    label: "Output",
    detail: "patch diff · 47 lines · schema valid",
    time: "09:15:41",
  },
  {
    step: "05",
    kind: "error",
    label: "Error",
    detail: "test_checkout_flow · assertion at line 112",
    time: "09:15:52",
  },
  {
    step: "06",
    kind: "result",
    label: "Business result",
    detail: "retry queued · human gate opened",
    time: "09:15:53",
  },
] as const;

export const principle12StateLayers = [
  { label: "Input", hint: "Dữ liệu vào từ user, ticket hoặc trigger" },
  { label: "Context", hint: "Những gì Agent được phép nhìn thấy" },
  { label: "Actions", hint: "Tool calls và quyết định trung gian" },
  { label: "Outputs", hint: "Patch, object hoặc response có cấu trúc" },
  { label: "Errors", hint: "Lỗi validation, test fail, exception" },
  { label: "Business results", hint: "Kết quả nghiệp vụ cuối cùng" },
] as const;

export const principle12Benefits = [
  {
    title: "Dễ debug",
    body: "Xem lại toàn bộ quá trình từ input đến output.",
  },
  {
    title: "Dễ audit",
    body: "Hiểu được tại sao Agent đưa ra quyết định.",
  },
  {
    title: "Dễ replay",
    body: "Tái hiện một lần thực thi với cùng state.",
  },
  {
    title: "Dễ cải tiến",
    body: "Có dữ liệu cụ thể để phân tích và vá harness.",
  },
] as const;

export const principle12PersistItems = [
  {
    key: "conversation",
    label: "Conversation history",
    log: "session:9f2a · 14 messages persisted",
  },
  {
    key: "tools",
    label: "Tool calls",
    log: "read_file(3) · edit_file(2) · run_tests(1)",
  },
  {
    key: "workflow",
    label: "Workflow state",
    log: "step=validate · branch=retry · attempt=2",
  },
  {
    key: "validation",
    label: "Validation results",
    log: "schema=pass · tests=fail · lint=pass",
  },
] as const;

export const principle12Comparison = [
  { aspect: "Phạm vi", logSide: "Ghi log từng dòng", traceSide: "Ghi toàn bộ episode" },
  { aspect: "Nội dung", logSide: "Tập trung vào lỗi kỹ thuật", traceSide: "Gồm cả input/context/output" },
  { aspect: "Replay", logSide: "Khó replay", traceSide: "Hỗ trợ replay" },
  { aspect: "Decision", logSide: "Không gắn với decision", traceSide: "Gắn với decision point" },
  { aspect: "Spec", logSide: "Ít liên kết với spec", traceSide: "Ghi spec/model/schema version" },
  { aspect: "Mục đích", logSide: "Chủ yếu để debug", traceSide: "Dùng cho debug, audit, eval, improvement" },
] as const;

export const principle12FullTraceSchema = [
  { field: "run_id", note: "ID duy nhất mỗi lần chạy" },
  { field: "task_id", note: "ID của task" },
  { field: "timestamp", note: "Thời điểm bắt đầu" },
  { field: "input_snapshot", note: "Dữ liệu đầu vào đầy đủ" },
  { field: "context_snapshot", note: "Context model nhận được" },
  { field: "spec_version", note: "Phiên bản spec đang dùng" },
  { field: "schema_version", note: "Phiên bản schema" },
  { field: "model_name", note: "Model được gọi" },
  { field: "tool_calls", note: "Danh sách tool calls" },
  { field: "intermediate_outputs", note: "Output trung gian" },
  { field: "validation_results", note: "Kết quả validation" },
  { field: "state_transitions", note: "Các trạng thái đã đi qua" },
  { field: "errors", note: "Lỗi phát sinh" },
  { field: "retry_count", note: "Số lần retry" },
  { field: "human_interventions", note: "Can thiệp của người" },
] as const;

export const principle12TraceUsages = [
  { label: "Debug lỗi", hint: "Phân tích lỗi lặp lại" },
  { label: "Tạo regression test", hint: "Từ case lỗi thực tế" },
  { label: "So sánh model version", hint: "A/B test model" },
  { label: "Đánh giá prompt/spec", hint: "Xem version nào hiệu quả" },
  { label: "Audit quyết định", hint: "Giải thích cho compliance" },
  { label: "Replay case cũ", hint: "Tái hiện lần chạy bất kỳ" },
  { label: "Cải tiến Guide & Sensor", hint: "Dùng trace làm dữ liệu học" },
] as const;

export const principle12SignsCorrect = [
  "Mỗi execution có run_id",
  "Lưu input/context/output",
  "Lưu tool call",
  "Lưu validation result",
  "Lưu state transition",
  "Lưu error",
  "Lưu retry/fallback",
  "Lưu human intervention",
  "Biết spec/model/schema version",
  "Có thể replay hoặc audit",
] as const;

export const principle12SignsWrong = [
  "Chỉ lưu final output",
  "Không biết context đã dùng",
  "Không biết model/tool nào đã chạy",
  "Không biết validation pass/fail",
  "Không biết lỗi ở bước nào",
  "Không thể replay execution",
  "Không giải thích được kết quả",
] as const;

export const principle12AntiPatterns = [
  {
    title: "Stateless Agent",
    body: "Không lưu trạng thái — mỗi lần chạy như phiên mới hoàn toàn.",
    gap: "no snapshot",
  },
  {
    title: "Missing Context History",
    body: "Không biết Agent đã nhìn thấy gì khi quyết định.",
    gap: "context lost",
  },
  {
    title: "Lost Execution Data",
    body: "Mất dữ liệu sau khi hoàn thành — không replay được.",
    gap: "trace truncated",
  },
  {
    title: "No Audit Trail",
    body: "Không thể giải thích quyết định cho đội ngũ hoặc compliance.",
    gap: "audit gap",
  },
] as const;

export const principle12Intro = {
  simple:
    "Traceable state nghĩa là: mỗi lần agent chạy phải để lại dấu vết đủ rõ để biết chuyện gì đã xảy ra.",
  note: "Không chỉ lưu kết quả cuối. Phải lưu quá trình tạo ra kết quả đó.",
} as const;

export const principle12IntroQuestions = {
  wrong: "Chỉ lưu kết quả cuối cùng?",
  right: "Có trace đủ để biết quá trình tạo ra kết quả?",
  wrongLabel: "Chỉ output",
  rightLabel: "Traceable state",
} as const;

export const principle12Summary = {
  headline:
    "Traceable state = lưu đủ input, context, output, action, error và kết quả để debug/audit/replay.",
  points: [
    "Không có trace thì không có accountability.",
    "Không có accountability thì khó vận hành agent nghiêm túc.",
  ],
} as const;
