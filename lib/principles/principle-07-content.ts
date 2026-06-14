export const principle07Toc = [
  { id: "p7-intro", label: "Hiểu đơn giản" },
  { id: "p7-diagram", label: "Human control point" },
  { id: "p7-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p7-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p7-why-matters", label: "Tại sao quan trọng" },
  { id: "p7-practice", label: "Thực hành" },
  { id: "p7-antipatterns", label: "Anti-pattern" },
  { id: "p7-triggers", label: "Khi nào cần review" },
  { id: "p7-review-scope", label: "Review kiểm tra gì" },
  { id: "p7-ladder", label: "Các mức review" },
  { id: "p7-signs", label: "Dấu hiệu nhận biết" },
  { id: "p7-summary", label: "Tóm tắt" },
] as const;

export const principle07HumanOnlyTasks = [
  "Đánh giá rủi ro",
  "Hiểu ngữ cảnh kinh doanh",
  "Ra quyết định chiến lược",
  "Chịu trách nhiệm cuối cùng",
] as const;

export const principle07PauseConditions = [
  { label: "Thiếu dữ liệu", hint: "Không đủ context để quyết định" },
  { label: "Rủi ro cao", hint: "Hậu quả nghiêm trọng nếu sai" },
  { label: "Độ tin cậy thấp", hint: "Model không chắc chắn" },
  { label: "Tác động lớn", hint: "Ảnh hưởng rộng đến hệ thống" },
] as const;

export const principle07Benefits = [
  {
    title: "Giảm rủi ro",
    body: "Các quyết định quan trọng được kiểm tra thêm một lần.",
  },
  {
    title: "Tăng độ tin cậy",
    body: "Người dùng biết hệ thống không hoàn toàn tự động.",
  },
  {
    title: "Hỗ trợ quản trị",
    body: "Doanh nghiệp xác định ai chịu trách nhiệm cho từng quyết định.",
  },
  {
    title: "Dễ mở rộng",
    body: "Con người chỉ tham gia khi thực sự cần thiết.",
  },
] as const;

export const principle07PracticeExamples = [
  {
    title: "Deploy production",
    body: "Agent chuẩn bị diff và checklist — người phê duyệt trước khi merge.",
  },
  {
    title: "Chỉnh sửa dữ liệu khách hàng",
    body: "Agent đề xuất thay đổi — người xác nhận trước khi ghi.",
  },
  {
    title: "Gửi email hàng loạt",
    body: "Agent soạn nội dung — người review trước khi gửi.",
  },
  {
    title: "Phê duyệt giao dịch",
    body: "Agent phân tích — người quyết định cuối cùng.",
  },
] as const;

export const principle07AntiPatterns = [
  {
    title: "Full automation",
    body: "Cho Agent toàn quyền quyết định.",
  },
  {
    title: "Human everywhere",
    body: "Mọi bước đều cần xác nhận.",
  },
  {
    title: "Invisible escalation",
    body: "Không rõ khi nào Agent cần con người hỗ trợ.",
  },
  {
    title: "Undefined ownership",
    body: "Không ai chịu trách nhiệm cuối cùng.",
  },
] as const;

// 8 trigger scenarios — when human review is needed
export const principle07TriggerScenarios = [
  { situation: "Confidence thấp", reason: "Agent không đủ chắc để quyết định" },
  { situation: "Thiếu dữ liệu", reason: "Không đủ căn cứ để quyết định" },
  { situation: "Có xung đột tín hiệu", reason: "Nhiều kết luận có thể đúng" },
  { situation: "Output ảnh hưởng lớn", reason: "Sai lầm có hậu quả cao" },
  { situation: "Side effect khó rollback", reason: "Không nên cho Agent tự làm" },
  { situation: "Rule mơ hồ", reason: "Cần judgement của người" },
  { situation: "Lỗi lặp lại", reason: "Cần cải tiến Harness" },
  { situation: "Người dùng yêu cầu rõ", reason: "Cần xác nhận trực tiếp" },
] as const;

// 5-level review ladder
export const principle07ReviewLadder = [
  { level: "01", label: "No review", hint: "Agent tự xử lý hoàn toàn" },
  { level: "02", label: "Lightweight review", hint: "Human xem qua nhanh" },
  { level: "03", label: "Mandatory approval", hint: "Bắt buộc phải duyệt" },
  { level: "04", label: "Expert review", hint: "Người chuyên môn sâu kiểm tra" },
  { level: "05", label: "Governance review", hint: "Ảnh hưởng chính sách, cần hội đồng" },
] as const;

// What human review should cover
export const principle07ReviewScope = [
  "Agent có hiểu đúng nhiệm vụ không",
  "Evidence có đủ không",
  "Output có hợp lý không",
  "Hành động có nên được execute không",
  "Có cần sửa spec/rule không",
  "Có cần tạo test mới không",
  "Có cần rollback không",
] as const;

// Signs correct/wrong
export const principle07SignsCorrect = [
  "Điểm human review rõ trong workflow",
  "Tiêu chí rõ khi nào cần hỏi người",
  "Trạng thái 'pending review' rõ ràng",
  "Trace ghi lại quyết định của người",
  "Phân quyền ai được duyệt",
  "Agent không tự vượt qua điểm rủi ro",
  "Feedback từ human cải tiến spec/test/sensor",
] as const;

export const principle07SignsWrong = [
  "Agent tự quyết mọi thứ",
  "Human chỉ can thiệp khi đã xảy ra lỗi",
  "Không lưu lý do human override",
  "Không có tiêu chí khi nào cần review",
  "Agent vẫn tạo side effect dù chưa được duyệt",
  "Feedback của human không quay lại cải tiến Harness",
] as const;

export const principle07Intro = {
  simple:
    "Human as control point nghĩa là: con người không đứng ngoài hệ thống agent, mà là một điểm kiểm soát chính thức trong workflow.",
  note: "Không phải lúc nào agent cũng nên tự quyết. Khi rủi ro cao hoặc không chắc chắn, agent phải biết dừng lại để người kiểm tra. Human review không phải là 'chữa cháy thủ công' — mà là một phần được thiết kế sẵn trong harness.",
} as const;

export const principle07Summary = {
  headline: "Human as control point = con người là điểm kiểm soát chính thức trong workflow.",
  points: [
    "Agent xử lý tự động khi an toàn.",
    "Con người can thiệp khi cần judgement, trách nhiệm hoặc kiểm soát rủi ro.",
  ],
} as const;
