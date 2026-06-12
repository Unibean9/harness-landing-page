export const principle09Toc = [
  { id: "p9-diagram", label: "Super Agent vs focused" },
  { id: "p9-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p9-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p9-why-matters", label: "Tại sao quan trọng" },
  { id: "p9-practice", label: "Thực hành" },
  { id: "p9-antipatterns", label: "Anti-pattern" },
] as const;

export const principle09SuperAgentProblems = [
  "Prompt phức tạp",
  "Context khổng lồ",
  "Hành vi khó dự đoán",
] as const;

export const principle09SuperAgentRoles = [
  "Research",
  "Planning",
  "Coding",
  "Review",
  "Deploy",
  "Debug",
  "Test",
  "Docs",
] as const;

export const principle09AgentQualities = [
  { label: "Hiểu", hint: "Mục tiêu và phạm vi rõ ràng" },
  { label: "Test", hint: "Kiểm thử độc lập từng Agent" },
  { label: "Bảo trì", hint: "Sửa một phần không ảnh hưởng toàn bộ" },
  { label: "Thay thế", hint: "Đổi model hoặc prompt từng khối" },
] as const;

export const principle09FocusedAgents = [
  { label: "Research Agent", hint: "Thu thập và tổng hợp thông tin" },
  { label: "Planning Agent", hint: "Chia nhỏ mục tiêu và lập kế hoạch" },
  { label: "Coding Agent", hint: "Viết và chỉnh sửa mã nguồn" },
  { label: "Review Agent", hint: "Đánh giá chất lượng và tuân thủ spec" },
] as const;

export const principle09Benefits = [
  {
    title: "Dễ kiểm soát context",
    body: "Mỗi Agent chỉ cần một phần nhỏ thông tin.",
  },
  {
    title: "Dễ đo lường",
    body: "Hiệu suất từng Agent có thể được đánh giá riêng.",
  },
  {
    title: "Dễ nâng cấp",
    body: "Có thể thay đổi một Agent mà không ảnh hưởng toàn hệ thống.",
  },
  {
    title: "Dễ tái sử dụng",
    body: "Agent có thể được dùng trong nhiều workflow khác nhau.",
  },
] as const;

export const principle09AntiPatterns = [
  {
    title: "Super Agent",
    body: "Một Agent chịu mọi trách nhiệm — từ research đến deploy.",
  },
  {
    title: "Context Explosion",
    body: "Prompt và context ngày càng lớn theo thời gian.",
  },
  {
    title: "Mixed Responsibilities",
    body: "Một Agent thực hiện quá nhiều vai trò khác nhau.",
  },
  {
    title: "Monolithic Agent",
    body: "Không thể tách rời hoặc tái sử dụng trong workflow khác.",
  },
] as const;
