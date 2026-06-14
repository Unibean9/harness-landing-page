export const principle04Toc = [
  { id: "p4-intro", label: "Hiểu đơn giản" },
  { id: "p4-diagram", label: "5 khả năng kiểm soát" },
  { id: "p4-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p4-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p4-why-matters", label: "Tại sao quan trọng" },
  { id: "p4-practice", label: "Thực hành" },
  { id: "p4-antipatterns", label: "Anti-pattern" },
  { id: "p4-execution-record", label: "Execution record" },
  { id: "p4-signs", label: "Dấu hiệu nhận biết" },
  { id: "p4-summary", label: "Tóm tắt" },
] as const;

export const principle04Capabilities = [
  { label: "Trace", hint: "Quan sát toàn bộ thực thi" },
  { label: "Replay", hint: "Tái hiện lỗi" },
  { label: "Retry", hint: "Thử lại có kiểm soát" },
  { label: "Resume", hint: "Tiếp tục từ state cũ" },
  { label: "Rollback", hint: "Hoàn tác hành động" },
] as const;

export const principle04CapabilitiesExtended = [
  {
    index: "01",
    label: "Observability",
    description: "Biết Agent đã làm gì: input, context, prompt version, tool call, output, validation result, error, state transition.",
  },
  {
    index: "02",
    label: "Retry",
    description: "Khi lỗi có thể phục hồi, hệ thống thử lại — nhưng retry phải có kiểm soát, không gọi lại model mù quáng.",
  },
  {
    index: "03",
    label: "Resume",
    description: "Với task nhiều bước, nếu lỗi ở bước giữa, hệ thống tiếp tục từ điểm hợp lý thay vì chạy lại từ đầu.",
  },
  {
    index: "04",
    label: "Fallback",
    description: "Nếu Agent không xử lý được: dùng rule đơn giản hơn, dùng model khác, trả output an toàn, chuyển sang human review, dừng workflow.",
  },
  {
    index: "05",
    label: "Rollback",
    description: "Nếu Agent tạo hành động sai, hệ thống có khả năng đảo ngược hoặc bù trừ.",
  },
  {
    index: "06",
    label: "Permission control",
    description: "Agent không có quyền vô hạn. Harness kiểm soát: tool nào được phép, action nào cần duyệt, dữ liệu nào được truy cập.",
  },
  {
    index: "07",
    label: "Failure attribution",
    description: "Không chỉ biết 'Agent sai', mà biết sai vì đâu: spec mơ hồ, context thiếu, tool lỗi, prompt sai, validation thiếu, model hiểu sai.",
  },
  {
    index: "08",
    label: "Human intervention",
    description: "Khi con người can thiệp, ghi lại: ai can thiệp, lúc nào, vì sao, đã thay đổi gì, kết quả sau can thiệp là gì.",
  },
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

// Execution record fields
export const principle04ExecutionRecord = [
  { key: "run_id", value: "Định danh duy nhất mỗi lần chạy" },
  { key: "input_snapshot", value: "Dữ liệu đầu vào tại thời điểm chạy" },
  { key: "context_snapshot", value: "Context model thực sự nhận được" },
  { key: "spec_version", value: "Phiên bản spec đang sử dụng" },
  { key: "model_version", value: "Model được gọi" },
  { key: "tool_calls", value: "Các tool đã được gọi" },
  { key: "intermediate_states", value: "Trạng thái trung gian" },
  { key: "validation_results", value: "Kết quả kiểm tra" },
  { key: "final_output", value: "Output cuối cùng" },
  { key: "errors", value: "Lỗi phát sinh nếu có" },
  { key: "human_interventions", value: "Lần can thiệp của người" },
  { key: "business_result", value: "Kết quả nghiệp vụ" },
] as const;

// Signs correct
export const principle04SignsCorrect = [
  "Trace đầy đủ",
  "State rõ",
  "Retry / fallback",
  "Rollback hoặc compensation",
  "Permission boundary",
  "Validation",
  "Monitoring",
  "Audit trail",
  "Human review point",
  "Error taxonomy",
] as const;

// Signs wrong
export const principle04SignsWrong = [
  "Chỉ có prompt và model",
  "Không lưu context",
  "Không ghi tool call",
  "Không validate output",
  "Không biết lỗi ở đâu",
  "Không retry/resume được",
  "Không rollback được",
  "Không giới hạn quyền Agent",
  "Không có audit trail",
] as const;

export const principle04Intro = {
  simple:
    "Production controllability nghĩa là: agent khi chạy thật phải được quan sát, kiểm soát, khôi phục và can thiệp.",
  note: "Agent chạy được trong demo chưa đủ. Agent chạy production phải kiểm soát được. Nếu agent làm sai mà không biết sai ở đâu, không dừng được, không rollback được — thì chưa production-ready.",
} as const;

export const principle04IntroQuestions = {
  wrong: "Agent chạy được trong demo là đủ?",
  right: "Khi agent sai, hệ thống có dừng, rollback và can thiệp được không?",
  wrongLabel: "Tư duy demo",
  rightLabel: "Tư duy production",
} as const;

export const principle04Summary = {
  headline:
    "Production controllability = agent phải được quan sát, giới hạn, phục hồi và can thiệp.",
  points: [
    "Agent không kiểm soát được thì chưa sẵn sàng production.",
    "Side effect xảy ra → cần trace, retry, rollback và human review.",
  ],
} as const;
