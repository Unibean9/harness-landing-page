export const principle03Toc = [
  { id: "p3-diagram", label: "Một Harness, mọi kênh" },
  { id: "p3-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p3-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p3-why-matters", label: "Tại sao quan trọng" },
  { id: "p3-practice", label: "Thực hành" },
  { id: "p3-antipatterns", label: "Anti-pattern" },
] as const;

export const principle03Channels = [
  { label: "Chat", hint: "Giao diện hội thoại" },
  { label: "API", hint: "REST / RPC" },
  { label: "Webhook", hint: "Sự kiện bên ngoài" },
  { label: "Cron", hint: "Lịch định kỳ" },
  { label: "UI", hint: "Nút bấm trong app" },
] as const;

export const principle03ChannelSpecificLogic = [
  "Chat có validation riêng",
  "API có validation riêng",
  "Cron có validation riêng",
] as const;

export const principle03HarnessDuties = [
  { label: "Xây dựng context", hint: "Context builder thống nhất" },
  { label: "Kiểm tra quyền truy cập", hint: "AuthZ cho mọi kênh" },
  { label: "Áp dụng guardrails", hint: "Ranh giới & policy" },
  { label: "Ghi trace", hint: "Observability nhất quán" },
  { label: "Thực hiện validation", hint: "Một lớp kiểm tra" },
] as const;

export const principle03Benefits = [
  {
    title: "Hành vi nhất quán",
    body: "Agent hoạt động giống nhau ở mọi kênh.",
  },
  {
    title: "Dễ bảo trì",
    body: "Chỉ cần duy trì một cơ chế kiểm soát.",
  },
  {
    title: "Dễ mở rộng",
    body: "Bổ sung kênh mới mà không viết lại logic.",
  },
  {
    title: "Dễ quan sát",
    body: "Toàn bộ hoạt động được theo dõi theo cùng một cách.",
  },
] as const;

export const principle03BadFlows = [
  "Chat → Agent",
  "API → Agent",
  "Cron → Agent",
] as const;

export const principle03GoodFlows = [
  "Chat → Harness → Agent",
  "API → Harness → Agent",
  "Cron → Harness → Agent",
] as const;

export const principle03AntiPatterns = [
  {
    title: "Channel-specific logic",
    body: "Mỗi kênh có quy tắc riêng.",
  },
  {
    title: "Duplicate validation",
    body: "Validation bị sao chép nhiều nơi.",
  },
  {
    title: "Inconsistent behavior",
    body: "Agent phản hồi khác nhau tùy kênh.",
  },
  {
    title: "Multiple control layers",
    body: "Mỗi kênh tự xây cơ chế kiểm soát riêng.",
  },
] as const;
