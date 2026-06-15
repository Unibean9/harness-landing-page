export const sdd03Toc = [
  { id: "sdd03-intro", label: "Chi phí ẩn của dịch" },
  { id: "sdd03-telephone", label: "Trò chơi truyền tin" },
  { id: "sdd03-problem", label: "Vấn đề cốt lõi" },
  { id: "sdd03-shift", label: "Thay đổi cốt lõi" },
  { id: "sdd03-pipeline", label: "Tài liệu → Pipeline" },
  { id: "sdd03-factory", label: "Ẩn dụ nhà máy" },
  { id: "sdd03-ai", label: "Vì sao AI khả thi" },
  { id: "sdd03-speckit", label: "SpecKit pipeline" },
  { id: "sdd03-example", label: "Ví dụ CRM" },
  { id: "sdd03-context-loss", label: "Mất context" },
  { id: "sdd03-not-generation", label: "Không phải generation" },
  { id: "sdd03-structure", label: "Cần cấu trúc" },
  { id: "sdd03-harness", label: "Harness Engineering" },
  { id: "sdd03-factory-model", label: "Mô hình nhà máy" },
  { id: "sdd03-summary", label: "Tóm tắt" },
] as const;

export const sdd03Intro = {
  simple:
    "Hầu hết dự án phần mềm không thực sự được xây dựng — chúng được dịch đi dịch lại qua từng loại artifact.",
  note: "Ở mỗi bước, ai đó đọc output bước trước và viết lại định dạng mới. Đây là nơi thông tin bị thất thoát.",
} as const;

export const sdd03IdeaSeed = "We need a student admission workflow." as const;

export const sdd03TranslationChain = [
  "Business Requirement",
  "Product Requirement",
  "Technical Design",
  "Development Tasks",
  "Implementation",
  "Test Cases",
] as const;

export const sdd03TelephoneSteps = [
  { speaker: "Người 1", message: "Students move through admission stages" },
  { speaker: "Người 2", message: "Create workflow functionality" },
  { speaker: "Người 3", message: "Build Kanban board" },
  { speaker: "Người 4", message: "Drag and drop cards" },
] as const;

export const sdd03ArtifactChain = [
  "Specification",
  "Plan",
  "Tasks",
  "Code",
  "Tests",
  "Documentation",
] as const;

export const sdd03TraditionalTransform = ["Artifact A", "Human", "Artifact B"] as const;

export const sdd03AutomatedTransform = ["Artifact A", "Transformation", "Artifact B"] as const;

export const sdd03FactoryChain = ["Raw Material", "Assembly Line", "Finished Product"] as const;

export const sdd03KnowledgeChain = ["Specification", "Planning", "Tasks", "Implementation"] as const;

export const sdd03AiFlow = [
  "Human Intent",
  "Structured Artifact",
  "AI Transformation",
  "New Artifact",
] as const;

export const sdd03SpeckitPipeline = [
  "Specification",
  "Clarification",
  "Plan",
  "Tasks",
  "Implementation",
] as const;

export const sdd03TraditionalVertical = [
  "Spec",
  "Human viết Plan",
  "Plan",
  "Human viết Tasks",
  "Tasks",
  "Human viết Code",
] as const;

export const sdd03TransformWorkflow = [
  "Spec",
  "Generate Plan",
  "Generate Tasks",
  "Generate Implementation Context",
] as const;

export const sdd03CrmSpec = [
  "Applicants move through stages",
  "Stage changes must be recorded",
  "Staff can view transition history",
] as const;

export const sdd03CrmTransforms = {
  plan: ["Applicant Workflow Module", "Stage History Service", "Workflow Interface"],
  tasks: [
    "Create stage entity",
    "Create transition entity",
    "Build workflow API",
    "Build history API",
    "Build workflow UI",
  ],
  validation: ["Verify stage transition", "Verify history tracking", "Verify permissions"],
} as const;

export const sdd03ContextLoss = {
  spec: "Every applicant transition must be auditable.",
  task: "Create history table.",
  lost: "Auditability → Database Task",
} as const;

export const sdd03NotGeneration = {
  wrong: "Create random output",
  right: "Create downstream artifacts from upstream artifacts",
} as const;

export const sdd03VagueSpec = "Build a better CRM." as const;

export const sdd03StructuredSpec = [
  "Admissions staff must move applicants between stages.",
  "Every stage transition must be recorded.",
  "History must be accessible.",
] as const;

export const sdd03HarnessPipeline = [
  { step: "Artifact A", action: "Transform" },
  { step: "Artifact B", action: "Validate" },
  { step: "Artifact C", action: "Transform" },
  { step: "Artifact D", action: null },
] as const;

export const sdd03FactoryModel = [
  { label: "Specification", role: "nguyên liệu thô" },
  { label: "Plan", role: "sản phẩm trung gian" },
  { label: "Tasks", role: "hướng dẫn lắp ráp" },
  { label: "Implementation", role: "thành phẩm" },
] as const;

export const sdd03Summary = {
  headline: "Không phải tự động hóa việc viết code — mà tự động hóa dòng chảy tri thức.",
  points: [
    "Traditional: Write → Rewrite → Rewrite → Rewrite → Build.",
    "Transformation: Specify → Transform → Transform → Transform → Validate.",
    "Dự án hiện đại nên là dây chuyền chuyển đổi tri thức, không phải tập hợp tài liệu rời rạc.",
  ],
} as const;
