export const principle07Toc = [
  { id: "p7-diagram", label: "Human control point" },
  { id: "p7-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p7-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p7-why-matters", label: "Tại sao quan trọng" },
  { id: "p7-practice", label: "Thực hành" },
  { id: "p7-antipatterns", label: "Anti-pattern" },
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
