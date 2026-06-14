export const principle08Toc = [
  { id: "p8-intro", label: "Hiểu đơn giản" },
  { id: "p8-diagram", label: "Luồng điều khiển" },
  { id: "p8-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p8-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p8-why-matters", label: "Tại sao quan trọng" },
  { id: "p8-practice", label: "Thực hành" },
  { id: "p8-antipatterns", label: "Anti-pattern" },
  { id: "p8-app-controls", label: "Application kiểm soát gì" },
  { id: "p8-state-machine", label: "State machine" },
  { id: "p8-signs", label: "Dấu hiệu nhận biết" },
  { id: "p8-summary", label: "Tóm tắt" },
] as const;

export const principle08LlmTraits = [
  { label: "LLM rất giỏi suy luận", hint: "Phân tích, tổng hợp, đề xuất bước tiếp theo" },
  { label: "LLM không phải workflow engine", hint: "Không nên tự quản lý branch, retry và side effect" },
] as const;

export const principle08ControlVerbs = [
  { label: "Start", hint: "Khởi chạy bước theo luồng đã định" },
  { label: "Stop", hint: "Dừng khi điều kiện không an toàn" },
  { label: "Retry", hint: "Thử lại có giới hạn và có log" },
  { label: "Escalate", hint: "Chuyển lên human gate khi cần" },
  { label: "Approve", hint: "Chờ phê duyệt trước hành động rủi ro" },
  { label: "Execute", hint: "Giao từng bước cho Agent thực hiện" },
] as const;

export const principle08Benefits = [
  {
    title: "Tăng khả năng dự đoán",
    body: "Workflow luôn nhất quán — cùng input cho cùng luồng chạy.",
  },
  {
    title: "Giảm rủi ro",
    body: "Agent không thể tự ý thực hiện hành động nguy hiểm.",
  },
  {
    title: "Dễ debug",
    body: "Luồng chạy được xác định rõ ràng, có trace từng bước.",
  },
  {
    title: "Dễ bảo trì",
    body: "Business logic không bị nhúng vào prompt.",
  },
] as const;

export const principle08BadPractice = "Agent quyết định mọi thứ" as const;

export const principle08GoodStack = [
  { label: "Application", hint: "Định nghĩa business workflow" },
  { label: "Harness", hint: "Điều phối, kiểm soát và giám sát" },
  { label: "Agent", hint: "Hoàn thành từng bước được giao" },
] as const;

export const principle08AntiPatterns = [
  {
    title: "Agent-Decides-All",
    body: "Agent tự kiểm soát workflow — branch và retry nằm trong suy luận.",
  },
  {
    title: "Prompt-As-Workflow",
    body: "Toàn bộ luồng chạy được mô tả bằng prompt thay vì code.",
  },
  {
    title: "Hidden Business Logic",
    body: "Logic quan trọng nằm trong prompt, không version được.",
  },
  {
    title: "Unbounded Retry",
    body: "Agent tự retry vô hạn khi lỗi — không có stop condition.",
  },
] as const;

// 10 things the application should control
export const principle08AppControls = [
  { label: "Routing", reason: "Đảm bảo task đi đúng workflow" },
  { label: "Branching", reason: "Không để model tự rẽ nhánh tùy tiện" },
  { label: "Retry", reason: "Tránh retry vô hạn hoặc sai cách" },
  { label: "Stop condition", reason: "Biết khi nào phải dừng" },
  { label: "Tool permission", reason: "Giới hạn quyền hành động" },
  { label: "Validation", reason: "Chỉ chấp nhận output hợp lệ" },
  { label: "Side effect", reason: "Không ghi/gửi/cập nhật nếu chưa được phép" },
  { label: "Human review", reason: "Chuyển đúng case cho người" },
  { label: "State update", reason: "Đảm bảo trạng thái nhất quán" },
  { label: "Error handling", reason: "Xử lý lỗi theo policy chung" },
] as const;

// State machine steps (good pattern)
export const principle08StateMachine = [
  { state: "Received", note: "Task được tiếp nhận" },
  { state: "ContextPrepared", note: "Harness chọn context" },
  { state: "ModelGenerated", note: "LLM tạo structured output" },
  { state: "Validated", note: "Application validate" },
  { state: "Approved", note: "Application quyết định" },
  { state: "Executed", note: "Tool/action được gọi" },
  { state: "Completed", note: "State và trace cập nhật" },
] as const;

// Bad flow steps
export const principle08BadFlow = [
  "User input",
  "LLM tự quyết toàn bộ",
  "LLM gọi tool",
  "LLM ghi kết quả",
  "Done",
] as const;

// Good flow steps
export const principle08GoodFlow = [
  "User input",
  "Application tạo task",
  "Harness chọn context",
  "LLM tạo structured output",
  "Application validate",
  "Application quyết định bước tiếp",
  "Tool/action được gọi có kiểm soát",
  "State/trace được cập nhật",
] as const;

// Signs correct/wrong
export const principle08SignsCorrect = [
  "Workflow/state machine rõ",
  "Output của LLM được validate trước khi dùng",
  "Tool call có permission",
  "Side effect cần điều kiện rõ",
  "Retry có giới hạn",
  "Stop condition rõ",
  "Human review là một branch chính thức",
  "Application có thể reject output của model",
  "Trace ghi lại decision point",
] as const;

export const principle08SignsWrong = [
  "LLM tự quyết gọi tool nào",
  "LLM tự ghi dữ liệu sau khi suy luận",
  "Không có validation trước khi execute",
  "Không có stop condition",
  "Retry bằng cách hỏi lại model không giới hạn",
  "Branch logic nằm trong prompt dài",
  "Application chỉ là lớp chuyển tiếp input-output",
] as const;

export const principle08Intro = {
  simple:
    "Application-owned control flow nghĩa là: application hoặc harness phải kiểm soát luồng chạy, không để LLM tự quyết toàn bộ.",
  note: "LLM có thể đề xuất. Application mới là nơi quyết định. Model không nên tự quyết định toàn bộ branch, retry, stop, tool call, side effect hoặc ghi dữ liệu.",
} as const;

export const principle08Equation = [
  { term: "LLM", def: "phân tích và đề xuất" },
  { term: "Application", def: "validate, quyết định, execute" },
] as const;

export const principle08Summary = {
  headline:
    "Application-owned control flow = application/harness sở hữu luồng chạy, LLM chỉ là thành phần suy luận.",
  points: [
    "LLM phân tích. Harness validate. Application quyết định. System execute.",
  ],
} as const;
