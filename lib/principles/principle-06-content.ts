export const principle06Toc = [
  { id: "p6-intro", label: "Hiểu đơn giản" },
  { id: "p6-diagram", label: "Spec là nguồn sự thật" },
  { id: "p6-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p6-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p6-why-matters", label: "Tại sao quan trọng" },
  { id: "p6-practice", label: "Thực hành" },
  { id: "p6-antipatterns", label: "Anti-pattern" },
  { id: "p6-comparison", label: "Spec vs tài liệu" },
  { id: "p6-properties", label: "Tính chất của spec" },
  { id: "p6-usages", label: "Spec dùng để làm gì" },
  { id: "p6-signs", label: "Dấu hiệu nhận biết" },
  { id: "p6-summary", label: "Tóm tắt" },
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

// Comparison: regular docs vs spec-as-source
export const principle06Comparison = [
  { aspect: "Mục đích", docSide: "Mô tả hệ thống", specSide: "Điều khiển hệ thống" },
  { aspect: "Phiên bản", docSide: "Có thể lỗi thời", specSide: "Có version" },
  { aspect: "Người dùng", docSide: "Người đọc là chính", specSide: "Người và máy cùng dùng" },
  { aspect: "Test được", docSide: "Không nhất thiết", specSide: "Phải test được" },
  { aspect: "Runtime", docSide: "Không gắn với runtime", specSide: "Có thể gắn với execution trace" },
  { aspect: "Nhất quán", docSide: "Dễ lệch với code", specSide: "Là source of truth" },
] as const;

// 6 properties a good spec should have
export const principle06SpecProperties = [
  {
    label: "Versioned",
    hint: "Spec phải có version. Spec v1.0 khác Spec v1.1 — khi hành vi Agent thay đổi, ta biết đang chạy theo version nào.",
  },
  {
    label: "Reviewable",
    hint: "Spec phải được review khi thay đổi, vì thay đổi spec có thể thay đổi hành vi toàn hệ thống.",
  },
  {
    label: "Testable",
    hint: "Spec phải đủ rõ để tạo test. Nếu một spec không thể test, có thể nó đang quá mơ hồ.",
  },
  {
    label: "Machine-readable",
    hint: "Có phần hệ thống đọc được: JSON, YAML, schema, decision table, rule table, checklist có cấu trúc.",
  },
  {
    label: "Human-readable",
    hint: "Vẫn cần dễ đọc để con người review và hiểu được. Spec tốt vừa cho người đọc, vừa cho máy dùng.",
  },
  {
    label: "Runtime-linked",
    hint: "Khi Agent chạy, trace nên ghi lại spec version đã dùng.",
  },
] as const;

// What a good spec can drive
export const principle06SpecUsages = [
  "Sinh prompt",
  "Chọn context",
  "Validate output",
  "Tạo test case",
  "Tạo checklist review",
  "Điều khiển workflow",
  "Giải thích quyết định",
  "Audit execution",
  "Tạo regression case khi lỗi",
] as const;

// Signs correct/wrong
export const principle06SignsCorrect = [
  "Spec có version",
  "Spec được review",
  "Spec có thể test",
  "Spec được dùng trong runtime",
  "Spec có thể sinh prompt/validation/test",
  "Trace ghi spec version",
  "Rule không hardcode rải rác",
  "Human và Agent cùng tham chiếu một nguồn",
] as const;

export const principle06SignsWrong = [
  "Spec chỉ nằm trong prompt",
  "Rule nằm nhiều nơi không đồng bộ",
  "Không biết version nào đang chạy",
  "Tài liệu đổi nhưng hệ thống không đổi",
  "Không có test theo spec",
  "Không audit được vì sao output được tạo ra",
] as const;

export const principle06Intro = {
  simple:
    "Spec-as-source nghĩa là: spec không chỉ là tài liệu đọc cho biết, mà phải là nguồn sự thật chính thức của hệ thống.",
  note: "Spec không phải tài liệu phụ. Spec là nguồn gốc để agent, app, test và human cùng dựa vào.",
} as const;

export const principle06IntroQuestions = {
  wrong: "Spec chỉ là tài liệu đọc cho biết?",
  right: "Spec có phải nguồn sự thật chính thức của hệ thống không?",
  wrongLabel: "Spec phụ",
  rightLabel: "Spec-as-source",
} as const;

export const principle06Summary = {
  headline:
    "Spec-as-source = spec là nguồn sự thật có version, có review, có test và được dùng trong runtime.",
  points: [
    "Spec không chỉ mô tả hệ thống.",
    "Spec tham gia điều khiển hệ thống.",
  ],
} as const;
