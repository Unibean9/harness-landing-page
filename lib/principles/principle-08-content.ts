export const principle08Toc = [
  { id: "p8-diagram", label: "Luồng điều khiển" },
  { id: "p8-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p8-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p8-why-matters", label: "Tại sao quan trọng" },
  { id: "p8-practice", label: "Thực hành" },
  { id: "p8-antipatterns", label: "Anti-pattern" },
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
