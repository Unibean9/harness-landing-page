export const principle03Toc = [
  { id: "p3-intro", label: "Hiểu đơn giản" },
  { id: "p3-diagram", label: "Một Harness, mọi kênh" },
  { id: "p3-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p3-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p3-why-matters", label: "Tại sao quan trọng" },
  { id: "p3-practice", label: "Thực hành" },
  { id: "p3-antipatterns", label: "Anti-pattern" },
  { id: "p3-adapter", label: "Channel adapter" },
  { id: "p3-event-schema", label: "Event schema" },
  { id: "p3-signs", label: "Dấu hiệu nhận biết" },
  { id: "p3-summary", label: "Tóm tắt" },
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

// What a channel adapter SHOULD do
export const principle03AdapterShouldDo = [
  "Nhận dữ liệu từ channel",
  "Chuyển dữ liệu về format chuẩn",
  "Gắn metadata cần thiết",
  "Kiểm tra input tối thiểu",
  "Gửi event vào harness",
] as const;

// What a channel adapter should NOT do
export const principle03AdapterShouldNot = [
  "Chứa business logic chính",
  "Chứa prompt chính",
  "Chứa policy chính",
  "Chứa validation chính",
  "Chứa decision logic chính",
  "Chứa tool control chính",
] as const;

// Event schema fields
export const principle03EventSchema = [
  { field: "event_id", type: "string", note: "ID duy nhất" },
  { field: "event_type", type: "string", note: "Loại sự kiện" },
  { field: "source_channel", type: "string", note: "Chat · API · Webhook..." },
  { field: "actor", type: "string", note: "Ai tạo ra" },
  { field: "timestamp", type: "datetime", note: "Thời điểm phát sinh" },
  { field: "payload", type: "object", note: "Dữ liệu chính" },
  { field: "metadata", type: "object", note: "Thông tin bổ sung" },
  { field: "priority", type: "string", note: "Độ ưu tiên" },
  { field: "correlation_id", type: "string", note: "Liên kết với flow" },
] as const;

// Signs of correct application
export const principle03SignsCorrect = [
  "Event schema chung",
  "Adapter riêng cho từng channel",
  "Harness chung",
  "Validation chung",
  "Trace format chung",
  "Policy chung",
  "Có thể replay event độc lập với channel ban đầu",
] as const;

// Signs of wrong application
export const principle03SignsWrong = [
  "Mỗi webhook có prompt riêng",
  "Mỗi API có logic riêng",
  "Mỗi UI action gọi model theo cách khác nhau",
  "Không có event schema chung",
  "Thêm channel mới phải copy logic cũ",
  "Lỗi ở channel nào chỉ debug được channel đó",
] as const;

export const principle03Intro = {
  simple:
    "Event/channel agnostic nghĩa là: agent có thể được gọi từ nhiều nơi khác nhau, nhưng tất cả phải đi qua cùng một lớp kiểm soát chung.",
  note: "Nhiều kênh vào, một harness xử lý. Kênh chỉ là nơi phát sinh yêu cầu — logic chính không nên nằm trong từng kênh riêng lẻ.",
} as const;

export const principle03Summary = {
  headline: "Event/channel agnostic = nhiều nguồn kích hoạt, một lớp kiểm soát chung.",
  points: ["Channel tạo tín hiệu.", "Harness kiểm soát hành vi."],
} as const;
