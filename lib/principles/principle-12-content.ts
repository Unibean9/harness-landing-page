export const principle12Toc = [
  { id: "p12-diagram", label: "Execution trace" },
  { id: "p12-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p12-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p12-why-matters", label: "Tại sao quan trọng" },
  { id: "p12-practice", label: "Thực hành" },
  { id: "p12-antipatterns", label: "Anti-pattern" },
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
