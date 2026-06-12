export const principle06Toc = [
  { id: "p6-diagram", label: "Spec là nguồn sự thật" },
  { id: "p6-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p6-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p6-why-matters", label: "Tại sao quan trọng" },
  { id: "p6-practice", label: "Thực hành" },
  { id: "p6-antipatterns", label: "Anti-pattern" },
] as const;

export const principle06TribalSources = [
  "Tin nhắn Slack",
  "Cuộc họp",
  "Email",
  "Kinh nghiệm cá nhân",
] as const;

export const principle06SpecRequirements = [
  { label: "Có version", hint: "Theo dõi thay đổi" },
  { label: "Có review", hint: "Được phê duyệt" },
  { label: "Có thể tham chiếu", hint: "Agent đọc được" },
  { label: "Có thể kiểm tra", hint: "Validate được" },
  { label: "Có thể cập nhật", hint: "Sống cùng hệ thống" },
] as const;

export const principle06Benefits = [
  {
    title: "Giảm sự mơ hồ",
    body: "Agent luôn có cùng nguồn tham chiếu.",
  },
  {
    title: "Tăng tính nhất quán",
    body: "Các Agent khác nhau vẫn tuân theo cùng một tiêu chuẩn.",
  },
  {
    title: "Dễ bảo trì",
    body: "Thay đổi quy tắc chỉ cần cập nhật spec.",
  },
  {
    title: "Hỗ trợ tự động hóa",
    body: "Spec có thể sinh test, validation hoặc workflow.",
  },
] as const;

export const principle06PracticeExamples = [
  "Product Requirement Document",
  "API Contract",
  "Architecture Rules",
  "Coding Standards",
  "Definition of Done",
] as const;

export const principle06AntiPatterns = [
  {
    title: "Tribal knowledge",
    body: "Kiến thức chỉ nằm trong đầu một vài người.",
  },
  {
    title: "Slack-driven development",
    body: "Quy tắc nằm rải rác trong các cuộc hội thoại.",
  },
  {
    title: "Outdated documentation",
    body: "Tài liệu không phản ánh hệ thống thực tế.",
  },
  {
    title: "Spec drift",
    body: "Spec và implementation ngày càng khác nhau.",
  },
] as const;
