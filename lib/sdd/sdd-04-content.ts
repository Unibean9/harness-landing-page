export const sdd04Toc = [
  { id: "sdd04-reputation", label: "Danh tiếng tài liệu" },
  { id: "sdd04-fallback", label: "Khi docs chết" },
  { id: "sdd04-output", label: "Docs như output" },
  { id: "sdd04-shift", label: "Thay đổi cốt lõi" },
  { id: "sdd04-garden", label: "Ẩn dụ khu vườn" },
  { id: "sdd04-reasons", label: "Ba lý do docs chết" },
  { id: "sdd04-models", label: "Mô hình Living Docs" },
  { id: "sdd04-system", label: "Docs như hệ thống" },
  { id: "sdd04-examples", label: "Ví dụ thực tế" },
  { id: "sdd04-ai", label: "AI và context" },
  { id: "sdd04-harness", label: "Harness Engineering" },
  { id: "sdd04-trace", label: "Truy vết" },
  { id: "sdd04-signs", label: "Dấu hiệu docs chết" },
  { id: "sdd04-building", label: "Xây Living Docs" },
  { id: "sdd04-library", label: "Sách hay Wikipedia" },
  { id: "sdd04-summary", label: "Tóm tắt" },
] as const;

export const sdd04Intro = {
  simple:
    "Hỏi developer bất kỳ: documentation còn đúng không? — thường chỉ nhận được nụ cười đầy nghi ngờ.",
  note: "Không phải vì documentation vô dụng. Mà vì nó có tuổi thọ rất ngắn so với hệ thống.",
} as const;

export const sdd04DriftTimeline = [
  { time: "Ngày đầu", state: "Documentation = Reality", tone: "good" as const },
  { time: "Ba tháng", state: "Documentation ≠ Reality", tone: "warn" as const },
  { time: "Sáu tháng", state: "Không ai biết", tone: "bad" as const },
] as const;

export const sdd04Fallbacks = [
  "đọc source code",
  "hỏi đồng nghiệp",
  "tìm trong Slack",
  "xem commit history",
] as const;

export const sdd04OutputChain = ["Build System", "Write Documentation"] as const;

export const sdd04GardenTraditional = ["Gieo một lần", "Bỏ mặc mãi"] as const;

export const sdd04GardenLiving = ["Gieo", "Chăm sóc", "Phát triển", "Thích nghi"] as const;

export const sdd04GardenOutcomes = {
  traditional: ["Rậm rạp", "Lỗi thời", "Khó hiểu"],
  living: ["Được duy trì", "Phản ánh hiện tại", "Dễ điều hướng"],
} as const;

export const sdd04Reasons = [
  {
    title: "Workflow tách rời",
    kind: "split",
    left: "GitHub",
    right: "Confluence",
    hint: "code nhanh · docs chậm",
  },
  {
    title: "Không ai sở hữu",
    kind: "quote",
    quote: "Ai đó sẽ cập nhật sau",
  },
  {
    title: "Không có phần thưởng tức thì",
    kind: "reward",
    code: "Feature giao được",
    docs: "Không thấy kết quả",
  },
] as const;

export const sdd04TraditionalModel = ["Specification", "Implementation", "Documentation"] as const;

export const sdd04LivingModel = ["Specification", "Implementation", "Documentation"] as const;

export const sdd04FileVsSystem = {
  traditional: { label: "Tài liệu truyền thống", value: "File" },
  living: { label: "Living Documentation", value: "System" },
  systemParts: ["Inputs", "Outputs", "Updates", "Validation"],
} as const;

export const sdd04OpenApiChain = ["API Specification", "Generate Documentation"] as const;

export const sdd04TerraformChain = ["Infrastructure Definition", "Infrastructure"] as const;

export const sdd04AiOutdated = ["Outdated Context", "Bad Decisions"] as const;

export const sdd04AiCurrent = ["Current Context", "Better Decisions"] as const;

export const sdd04HarnessKnowledge = [
  "code",
  "prompts",
  "workflows",
  "knowledge",
] as const;

export const sdd04TraceChain = [
  "Requirement",
  "Plan",
  "Task",
  "Code",
  "Documentation",
] as const;

export const sdd04WarningSigns = [
  {
    title: "Tin code hơn docs",
    body: "Developer mặc định đọc source thay vì documentation.",
  },
  {
    title: "Lỗi thời sau vài sprint",
    body: "Docs không theo kịp thay đổi hệ thống.",
  },
  {
    title: "Onboarding cần hỏi nhiều người",
    body: "Tri thức nằm trong đầu người, không trong tài liệu.",
  },
  {
    title: "AI không tin docs",
    body: "Agent không thể dùng documentation làm context đáng tin.",
  },
  {
    title: "Không rõ ai cập nhật",
    body: "Không ai chịu trách nhiệm duy trì documentation.",
  },
] as const;

export const sdd04BuildPipeline = [
  { source: "OpenAPI", output: "API Docs" },
  { source: "Specification", output: "Plans" },
  { source: "Plans", output: "Tasks" },
] as const;

export const sdd04LibraryCompare = {
  book: {
    label: "Cuốn sách",
    traits: ["Xuất bản xong", "Nội dung cố định", "Lỗi thời theo thời gian"],
  },
  wiki: {
    label: "Wikipedia",
    traits: ["Không bao giờ hoàn thành", "Liên tục cập nhật", "Phản ánh hiện tại"],
  },
} as const;

export const sdd04Summary = {
  headline: "Documentation phải già đi cùng tốc độ với hệ thống.",
  points: [
    "Docs chết mô tả quá khứ. Living Documentation mô tả hiện tại.",
    "Một nguồn sự thật — sinh mọi artifact còn lại, không viết lại bằng tay.",
    "Trong SpecKit: Executable Specs tạo việc, Governance giữ ranh giới, Automation di chuyển tri thức — Living Docs giữ tri thức không lỗi thời.",
  ],
} as const;
