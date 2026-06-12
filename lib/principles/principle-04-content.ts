export const principle04Toc = [
  { id: "p4-diagram", label: "5 khả năng kiểm soát" },
  { id: "p4-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p4-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p4-why-matters", label: "Tại sao quan trọng" },
  { id: "p4-practice", label: "Thực hành" },
  { id: "p4-antipatterns", label: "Anti-pattern" },
] as const;

export const principle04Capabilities = [
  { label: "Trace", hint: "Quan sát toàn bộ thực thi" },
  { label: "Replay", hint: "Tái hiện lỗi" },
  { label: "Retry", hint: "Thử lại có kiểm soát" },
  { label: "Resume", hint: "Tiếp tục từ state cũ" },
  { label: "Rollback", hint: "Hoàn tác hành động" },
] as const;

export const principle04WrongFocus = [
  "Cố loại bỏ hoàn toàn mọi lỗi",
  "Tin rằng model tốt hơn = không lỗi",
  "Không thiết kế cơ chế phản ứng",
] as const;

export const principle04RightFocus = [
  "Chấp nhận Agent sẽ mắc lỗi",
  "Thiết kế quan sát & phục hồi",
  "Giảm tác động khi lỗi xảy ra",
  "Giữ hệ thống vận hành được ở scale",
] as const;

export const principle04Benefits = [
  {
    title: "Dễ điều tra sự cố",
    body: "Có thể xem lại toàn bộ quá trình thực thi.",
  },
  {
    title: "Dễ phục hồi",
    body: "Có thể tiếp tục từ trạng thái trước đó.",
  },
  {
    title: "Giảm rủi ro",
    body: "Hạn chế tác động của lỗi.",
  },
  {
    title: "Tăng niềm tin",
    body: "Đội ngũ có thể kiểm soát Agent trong production.",
  },
] as const;

export const principle04PracticeChecks = [
  "Execution logs",
  "Distributed tracing",
  "State persistence",
  "Retry workflow",
  "Audit history",
] as const;

export const principle04AntiPatterns = [
  {
    title: "Black box agent",
    body: "Không biết Agent đã làm gì.",
  },
  {
    title: "No replay",
    body: "Không thể tái hiện lỗi.",
  },
  {
    title: "No state persistence",
    body: "Mất toàn bộ tiến trình khi xảy ra lỗi.",
  },
  {
    title: "No rollback",
    body: "Không thể phục hồi hành động đã thực hiện.",
  },
] as const;
