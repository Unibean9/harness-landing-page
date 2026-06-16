export const sdd01Toc = [
  { id: "sdd01-intro", label: "Specification chết dần" },
  { id: "sdd01-problem", label: "Vấn đề cốt lõi" },
  { id: "sdd01-shift", label: "Đọc → Thực thi" },
  { id: "sdd01-worlds", label: "Tài liệu vs động cơ" },
  { id: "sdd01-gps", label: "Ẩn dụ GPS" },
  { id: "sdd01-drift", label: "Documentation lệch pha" },
  { id: "sdd01-ai", label: "Kỷ nguyên AI" },
  { id: "sdd01-pipeline", label: "Pipeline spec-driven" },
  { id: "sdd01-example", label: "Ví dụ CRM" },
  { id: "sdd01-harness", label: "Harness Engineering" },
  { id: "sdd01-signs", label: "Dấu hiệu cảnh báo" },
  { id: "sdd01-iac", label: "Specification như infrastructure" },
  { id: "sdd01-summary", label: "Tóm tắt" },
] as const;

export const sdd01Intro = {
  simple:
    "Hầu hết specification trong ngành phần mềm đều có chung một số phận: được viết với nhiều kỳ vọng, review kỹ lưỡng, mọi người thống nhất hướng đi, rồi dần biến mất khỏi quy trình phát triển.",
  note: "Specification không còn là trung tâm. Nó chỉ còn là bản ghi lịch sử.",
} as const;

export const sdd01StorageTools = ["Notion", "Confluence", "Google Docs"] as const;

export const sdd01DeathReviewSteps = ["Rà soát", "Thống nhất", "Phê duyệt"] as const;

export const sdd01HubRoles = ["Lập trình viên", "QA", "Kiến trúc sư", "PM"] as const;

/** Role → tool fragmentation (spec no longer referenced) */
export const sdd01ScatteredWork = [
  { role: "Lập trình viên", tool: "Jira" },
  { role: "QA", tool: "Bộ test case" },
  { role: "Kiến trúc sư", tool: "Sơ đồ" },
  { role: "Product Manager", tool: "Biên bản họp" },
] as const;

export const sdd01DeathLabels = {
  sourceOfTruth: "Nguồn sự thật duy nhất",
  writtenOnce: "Chỉ viết một lần",
  scatterCaption: "Không ai còn tham chiếu spec",
  punchline: "Specification = bản ghi lịch sử",
  breakAria: "Specification biến mất khỏi workflow",
  breakLabel: "Biến mất khỏi workflow",
  noReturn: "Không còn đường quay lại",
} as const;

export const sdd01TraditionalFlow = [
  "Specification",
  "Con người đọc",
  "Con người lập kế hoạch",
  "Con người tạo nhiệm vụ",
  "Con người build phần mềm",
] as const;

export const sdd01ReadFlow = ["Specification", "Đọc"] as const;

export const sdd01ExecuteFlow = ["Specification", "Thực thi"] as const;

export const sdd01EngineFlow = [
  "Specification",
  "Kế hoạch",
  "Nhiệm vụ",
  "Triển khai",
  "Kiểm tra",
] as const;

export const sdd01GpsActions = [
  "Tạo route",
  "Tính thời gian",
  "Tính khoảng cách",
  "Đề xuất đường thay thế",
  "Tự động điều chỉnh khi có thay đổi",
] as const;

export const sdd01DriftFlow = [
  "Specification được tạo",
  "Code thay đổi",
  "Kiến trúc thay đổi",
  "Requirement tiến hóa",
  "Specification giữ nguyên",
] as const;

export const sdd01VagueSpec = `Xây tính năng quản lý sinh viên.`;

export const sdd01StructuredSpec = {
  goal: "Theo dõi hồ sơ ứng viên",
  constraints: "Yêu cầu phân quyền theo vai trò",
  acceptance: "Nhân viên tuyển sinh có thể chuyển ứng viên giữa các giai đoạn",
  examples: "Đã nộp → Phỏng vấn → Trúng tuyển",
} as const;

export const sdd01PipelineSteps = [
  "Specification",
  "Làm rõ",
  "Kế hoạch",
  "Nhiệm vụ",
  "Triển khai",
  "Kiểm tra",
] as const;

export const sdd01CascadeSteps = [
  "Specification cập nhật",
  "Kế hoạch cập nhật",
  "Nhiệm vụ cập nhật",
  "Kiểm tra cập nhật",
] as const;

export const sdd01CrmSpec = [
  "Nhân viên tuyển sinh phải theo dõi ứng viên qua nhiều giai đoạn.",
  "Mỗi lần chuyển giai đoạn phải được ghi lại.",
  "Lịch sử chuyển đổi phải hiển thị được.",
] as const;

export const sdd01CrmArtifacts = {
  plan: [
    "Module workflow ứng viên",
    "Service lịch sử chuyển trạng thái",
    "Giao diện workflow",
  ],
  tasks: [
    "Tạo model giai đoạn ứng viên",
    "Tạo bảng lịch sử chuyển đổi",
    "Build API workflow",
    "Build giao diện workflow",
  ],
  validation: [
    "Kiểm tra chuyển giai đoạn",
    "Kiểm tra lịch sử audit",
    "Kiểm tra quy tắc phân quyền",
  ],
} as const;

export const sdd01CrmColumns = [
  { key: "plan" as const, label: "Kế hoạch" },
  { key: "tasks" as const, label: "Nhiệm vụ" },
  { key: "validation" as const, label: "Kiểm tra" },
] as const;

export const sdd01HarnessFlow = [
  "Specification",
  "Harness",
  "Agent",
  "Output",
] as const;

export const sdd01BadHarnessFlow = ["Repository", "Agent", "Code"] as const;

export const sdd01WarningSigns = [
  {
    title: "Specification và Jira tách biệt",
    body: "Hai hệ thống không liên kết. Tasks không sinh ra từ spec.",
  },
  {
    title: "Tasks viết lại thủ công",
    body: "Mỗi sprint, team dịch lại specification sang Jira từ đầu.",
  },
  {
    title: "Không có tiêu chí chấp nhận",
    body: "Không có tiêu chí kiểm thử rõ ràng gắn với spec.",
  },
  {
    title: "Agent không dùng được spec",
    body: "AI phải tự đoán context thay vì đọc artifact có cấu trúc.",
  },
  {
    title: "Documentation lỗi thời",
    body: "Sau vài sprint, không ai còn tin tài liệu ban đầu.",
  },
] as const;

export const sdd01IacBefore = ["Tài liệu hạ tầng", "Con người dựng server"] as const;

export const sdd01IacAfter = ["Terraform", "Hạ tầng"] as const;

export const sdd01Summary = {
  headline: "Specification tạo ra công việc — không chỉ mô tả công việc.",
  points: [
    "Truyền thống: specification mô tả công việc.",
    "Executable: specification tạo ra công việc.",
    "Nếu spec không tạo được kế hoạch, nhiệm vụ, test và deployment, Spec-Driven Development không thể hoạt động.",
  ],
} as const;
