export const sdd01Toc = [
  { id: "sdd01-intro", label: "Specification chết dần" },
  { id: "sdd01-problem", label: "Vấn đề cốt lõi" },
  { id: "sdd01-shift", label: "Read → Execute" },
  { id: "sdd01-worlds", label: "Documents vs Engines" },
  { id: "sdd01-gps", label: "GPS analogy" },
  { id: "sdd01-drift", label: "Documentation drift" },
  { id: "sdd01-ai", label: "Kỷ nguyên AI" },
  { id: "sdd01-pipeline", label: "Spec-driven pipeline" },
  { id: "sdd01-example", label: "Ví dụ CRM" },
  { id: "sdd01-harness", label: "Harness Engineering" },
  { id: "sdd01-signs", label: "Dấu hiệu cảnh báo" },
  { id: "sdd01-iac", label: "Specification as Infrastructure" },
  { id: "sdd01-summary", label: "Tóm tắt" },
] as const;

export const sdd01Intro = {
  simple:
    "Hầu hết specification trong ngành phần mềm đều có chung một số phận: được viết với nhiều kỳ vọng, review kỹ lưỡng, mọi người thống nhất hướng đi, rồi dần biến mất khỏi quy trình phát triển.",
  note: "Specification không còn là trung tâm. Nó chỉ còn là bản ghi lịch sử.",
} as const;

export const sdd01StorageTools = ["Notion", "Confluence", "Google Docs"] as const;

export const sdd01DeathReviewSteps = ["Review", "Thống nhất", "Phê duyệt"] as const;

/** Role → tool fragmentation (spec no longer referenced) */
export const sdd01ScatteredWork = [
  { role: "Developer", tool: "Jira" },
  { role: "QA", tool: "Bộ test case" },
  { role: "Architect", tool: "Sơ đồ" },
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
  "Humans Read It",
  "Humans Create Plan",
  "Humans Create Tasks",
  "Humans Build Software",
] as const;

export const sdd01ReadFlow = ["Specification", "Read"] as const;

export const sdd01ExecuteFlow = ["Specification", "Execute"] as const;

export const sdd01EngineFlow = [
  "Specification",
  "Plan",
  "Tasks",
  "Implementation",
  "Validation",
] as const;

export const sdd01GpsActions = [
  "Tạo route",
  "Tính thời gian",
  "Tính khoảng cách",
  "Đề xuất đường thay thế",
  "Tự động điều chỉnh khi có thay đổi",
] as const;

export const sdd01DriftFlow = [
  "Specification Created",
  "Code Changes",
  "Architecture Changes",
  "Requirements Evolve",
  "Specification Stays The Same",
] as const;

export const sdd01VagueSpec = `Build a student management feature.`;

export const sdd01StructuredSpec = {
  goal: "Track student applications",
  constraints: "Role-based access required",
  acceptance: "Admissions staff can move applicants between stages",
  examples: "Submitted → Interview → Accepted",
} as const;

export const sdd01PipelineSteps = [
  "Specification",
  "Clarification",
  "Plan",
  "Tasks",
  "Implementation",
  "Validation",
] as const;

export const sdd01CascadeSteps = [
  "Specification Updated",
  "Plan Updated",
  "Tasks Updated",
  "Validation Updated",
] as const;

export const sdd01CrmSpec = [
  "Admissions staff must be able to track applicants through multiple stages.",
  "Each stage transition must be recorded.",
  "Historical transitions must be visible.",
] as const;

export const sdd01CrmArtifacts = {
  plan: [
    "Applicant Workflow Module",
    "Transition History Service",
    "Workflow UI",
  ],
  tasks: [
    "Create applicant stage model",
    "Create transition history table",
    "Build workflow API",
    "Build workflow interface",
  ],
  validation: [
    "Verify stage transitions",
    "Verify audit history",
    "Verify permission rules",
  ],
} as const;

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
    title: "Không có acceptance criteria",
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

export const sdd01IacBefore = ["Infrastructure Document", "Humans Build Servers"] as const;

export const sdd01IacAfter = ["Terraform", "Infrastructure"] as const;

export const sdd01Summary = {
  headline: "Specification produces work, không chỉ mô tả work.",
  points: [
    "Traditional: specification describes work.",
    "Executable: specification produces work.",
    "Nếu spec không tạo được plan, tasks, tests và deployment, Spec-Driven Development không thể hoạt động.",
  ],
} as const;
