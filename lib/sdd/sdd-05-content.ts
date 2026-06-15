export const sdd05Toc = [
  { id: "sdd05-intro", label: "Validate quá muộn" },
  { id: "sdd05-workflow", label: "Workflow cuối pipeline" },
  { id: "sdd05-problem", label: "Vấn đề cốt lõi" },
  { id: "sdd05-requirement", label: "Requirement sai" },
  { id: "sdd05-shift", label: "Thay đổi cốt lõi" },
  { id: "sdd05-cost", label: "Đường cong chi phí" },
  { id: "sdd05-not-testing", label: "Không phải testing" },
  { id: "sdd05-pipeline", label: "Pipeline validation" },
  { id: "sdd05-spec-example", label: "Spec có thể validate" },
  { id: "sdd05-factory", label: "Ẩn dụ nhà máy" },
  { id: "sdd05-ai", label: "AI và tốc độ" },
  { id: "sdd05-gates", label: "Validation gates" },
  { id: "sdd05-harness", label: "Harness Engineering" },
  { id: "sdd05-airplane", label: "Ẩn dụ máy bay" },
  { id: "sdd05-signs", label: "Dấu hiệu" },
  { id: "sdd05-principles", label: "Kết nối SpecKit" },
  { id: "sdd05-summary", label: "Tóm tắt" },
] as const;

export const sdd05Intro = {
  simple:
    "Rất nhiều đội xây xong toàn bộ hệ thống rồi mới kiểm tra — giống hoàn thành ngôi nhà rồi mới gọi người đến inspect.",
  note: "Validation xuất hiện ở cuối. Nếu có vấn đề, chi phí sửa tăng rất nhanh.",
} as const;

export const sdd05HouseStages = [
  "Móng",
  "Khung",
  "Điện",
  "Nước",
  "Mái",
  "Kiểm tra",
] as const;

export const sdd05LateWorkflow = [
  "Requirements",
  "Planning",
  "Development",
  "Testing",
  "Release",
] as const;

export const sdd05ReworkLoop = ["Phát hiện lỗi", "Quay lại", "Làm lại", "Test lại"] as const;

export const sdd05VagueRequirement = "Applicants can change status." as const;

export const sdd05MissedQuestions = [
  "Ai được đổi?",
  "Từ trạng thái nào?",
  "Có audit log?",
  "Có rollback?",
] as const;

export const sdd05RequirementTimeline = [
  { stage: "Dev triển khai", tone: "default" as const },
  { stage: "QA test", tone: "default" as const },
  { stage: "Product review", tone: "default" as const },
  { stage: "Requirement was wrong", tone: "danger" as const },
] as const;

export const sdd05TraditionalShift = ["Build", "Validate"] as const;

export const sdd05ContinuousShift = ["Validate", "Build", "Validate", "Build", "Validate"] as const;

export const sdd05CostCurve = [
  { stage: "Requirements", multiplier: "1×" },
  { stage: "Development", multiplier: "10×" },
  { stage: "After release", multiplier: "100×" },
] as const;

export const sdd05TestingVsValidation = {
  testing: { label: "Testing", question: "Hệ thống có chạy không?" },
  validation: { label: "Validation", question: "Chúng ta có build đúng thứ không?" },
  outcome: "Correctly built · wrong product",
} as const;

export const sdd05ValidationStages = [
  { artifact: "Specification", checks: ["Rõ ràng?", "Mâu thuẫn?", "Có thể test?"] },
  { artifact: "Plan", checks: ["Đủ requirement?", "Bỏ sót?", "Vi phạm architecture?"] },
  { artifact: "Tasks", checks: ["Đầy đủ?", "Dư thừa?", "Thiếu dependency?"] },
  { artifact: "Code", checks: ["Unit tests", "Integration", "Lint", "Security"] },
  { artifact: "Deployment", checks: ["Smoke tests", "Health checks", "Monitoring"] },
] as const;

export const sdd05SpecBad = "System should be fast." as const;

export const sdd05SpecGood = "95% requests complete within 500ms." as const;

export const sdd05FactoryBad = ["Nguyên liệu", "Lắp ráp toàn bộ", "Kiểm tra một lần"] as const;

export const sdd05FactoryGood = ["Nguyên liệu", "Kiểm tra", "Lắp ráp", "Kiểm tra", "Đóng gói", "Kiểm tra"] as const;

export const sdd05AiBefore = { actor: "Developer", rate: "10 quyết định / ngày" } as const;

export const sdd05AiAfter = { actor: "Multiple agents", rate: "Hàng trăm quyết định / ngày" } as const;

export const sdd05AiBottleneck = ["AI speed", "+", "Human validation cuối", "=", "Bottleneck"] as const;

export const sdd05GatePipeline = ["Specification", "Plan", "Tasks", "Code"] as const;

export const sdd05HarnessFormula = ["Context", "Constraints", "Validation"] as const;

export const sdd05HarnessImmature = ["Agent", "Output", "Production"] as const;

export const sdd05HarnessMature = ["Agent", "Output", "Validation", "Approval", "Next stage"] as const;

export const sdd05AirplaneChain = ["Sensors", "Monitoring", "Alerts", "Validation"] as const;

export const sdd05WarningSigns = [
  { title: "QA phát hiện requirement sai", body: "Lỗi requirement chỉ lộ ra ở giai đoạn test." },
  { title: "Architecture review sau code", body: "Kiến trúc chỉ được xem xét khi implementation xong." },
  { title: "AI không có quality gates", body: "Agent tạo output nhưng không qua validation." },
  { title: "Bug gần release", body: "Phần lớn lỗi phát hiện sát deadline phát hành." },
  { title: "Rework chiếm đa số thời gian", body: "Làm lại nhiều hơn là tiến về phía trước." },
] as const;

export const sdd05PrinciplesChain = [
  { principle: "Executable Specs", role: "Tạo artifact" },
  { principle: "Constitutional Governance", role: "Định nghĩa luật" },
  { principle: "Transformation Automation", role: "Di chuyển tri thức" },
  { principle: "Living Documentation", role: "Giữ đồng bộ" },
  { principle: "Continuous Validation", role: "Kiểm tra mọi bước" },
] as const;

export const sdd05Summary = {
  headline: "Validation không phải giai đoạn — mà là thuộc tính của hệ thống.",
  points: [
    "Đội kém validate ở cuối. Đội tốt validate xuyên suốt.",
    "Lỗi phát hiện muộn = chi phí sửa nhân lên theo cấp số.",
    "Kết hợp năm nguyên lý SpecKit — Continuous Validation là lớp bảo vệ cuối cùng.",
  ],
} as const;
