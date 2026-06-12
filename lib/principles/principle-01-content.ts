export const principle01Toc = [
  { id: "p1-diagram", label: "Agent = Model + Harness" },
  { id: "p1-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p1-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p1-why-matters", label: "Tại sao quan trọng" },
  { id: "p1-practice", label: "Thực hành" },
  { id: "p1-antipatterns", label: "Anti-pattern" },
] as const;

export const principle01HarnessLayers = [
  { label: "Specifications", hint: "Đặc tả & DoD" },
  { label: "Context", hint: "Ngữ cảnh đúng việc" },
  { label: "Tools", hint: "Công cụ thực thi" },
  { label: "State", hint: "Trạng thái & bộ nhớ" },
  { label: "Validation", hint: "Kiểm tra tự động" },
  { label: "Observability", hint: "Trace & log" },
  { label: "Human review", hint: "Điểm kiểm soát người" },
] as const;

export const principle01CommonReactions = [
  "Đổi model",
  "Tăng context window",
  "Viết prompt dài hơn",
  "Dùng model đắt tiền hơn",
] as const;

export const principle01RootCauses = [
  "Thiếu context phù hợp",
  "Thiếu công cụ cần thiết",
  "Thiếu cơ chế kiểm tra",
  "Thiếu khả năng truy vết",
  "Thiếu quy trình kiểm soát",
] as const;

export const principle01Benefits = [
  {
    title: "Tăng chất lượng đầu ra",
    body: "Agent nhận được nhiều hỗ trợ hơn để hoàn thành nhiệm vụ.",
  },
  {
    title: "Giảm chi phí",
    body: "Không cần liên tục nâng cấp sang các model đắt tiền hơn.",
  },
  {
    title: "Dễ vận hành hơn",
    body: "Hành vi của Agent trở nên ổn định và dễ dự đoán hơn.",
  },
  {
    title: "Tăng khả năng mở rộng",
    body: "Cải tiến ở Harness thường có tác động đến toàn bộ hệ thống.",
  },
] as const;

export const principle01PracticeChecks = [
  "Agent đã có đầy đủ context chưa?",
  "Agent có tool phù hợp chưa?",
  "Có test hoặc validation chưa?",
  "Có lưu trace không?",
  "Có cơ chế review không?",
] as const;

export const principle01AntiPatterns = [
  {
    title: "Model shopping",
    body: "Liên tục chuyển đổi giữa các model với hy vọng kết quả sẽ tốt hơn.",
  },
  {
    title: "Prompt obsession",
    body: "Dồn toàn bộ nỗ lực vào việc chỉnh sửa prompt.",
  },
  {
    title: "Validation-free agent",
    body: "Agent tạo kết quả nhưng không có cơ chế xác minh.",
  },
  {
    title: "Tool neglect",
    body: "Agent cần tool nhưng không được cấp quyền truy cập.",
  },
] as const;
