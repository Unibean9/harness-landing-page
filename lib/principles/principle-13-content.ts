export const principle13Toc = [
  { id: "p13-intro", label: "Hiểu đơn giản" },
  { id: "p13-diagram", label: "Learning loop" },
  { id: "p13-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p13-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p13-why-matters", label: "Tại sao quan trọng" },
  { id: "p13-practice", label: "Thực hành" },
  { id: "p13-antipatterns", label: "Anti-pattern" },
  { id: "p13-error-mapping", label: "Lỗi → Cải tiến" },
  { id: "p13-error-categories", label: "Phân loại lỗi" },
  { id: "p13-knowledge-base", label: "Error knowledge base" },
  { id: "p13-signs", label: "Dấu hiệu nhận biết" },
  { id: "p13-summary", label: "Tóm tắt" },
] as const;

export const principle13RepeatErrors = [
  { attempt: 1, label: "schema drift · missing field" },
  { attempt: 2, label: "schema drift · missing field" },
  { attempt: 3, label: "schema drift · missing field" },
] as const;

export const principle13Conversions = [
  { label: "Test mới", hint: "Regression test bắt lỗi tương tự", icon: "T" },
  { label: "Rule mới", hint: "Guardrail hoặc policy trong harness", icon: "R" },
  { label: "Sensor mới", hint: "Validator tự động trước execute", icon: "S" },
  { label: "Spec mới", hint: "Cập nhật nguồn sự thật chính thức", icon: "Σ" },
] as const;

export const principle13Benefits = [
  {
    title: "Hệ thống ngày càng tốt hơn",
    body: "Mỗi lỗi tạo ra một lớp bảo vệ mới trong harness.",
  },
  {
    title: "Giảm lỗi lặp lại",
    body: "Cùng một nguyên nhân không xuất hiện nhiều lần.",
  },
  {
    title: "Tăng chất lượng Harness",
    body: "Harness trưởng thành theo thời gian — không đứng yên.",
  },
  {
    title: "Hỗ trợ cải tiến liên tục",
    body: "Mọi thất bại đều trở thành dữ liệu học tập.",
  },
] as const;

export const principle13RecoverySteps = [
  { label: "Xác định nguyên nhân", hint: "Phân loại lỗi — spec, tool, sensor hay context" },
  { label: "Cập nhật spec", hint: "Ghi nhận expectation vào artifact chính thức" },
  { label: "Thêm test", hint: "Regression test cho case vừa fail" },
  { label: "Bổ sung sensor", hint: "Validator bắt sớm trước khi lỗi lan rộng" },
  { label: "Theo dõi kết quả", hint: "Đo xem lỗi có tái diễn trong các phiên sau" },
] as const;

export const principle13ErrorMapping = [
  { errorType: "Agent hiểu sai nhiệm vụ", improvement: "Cập nhật prompt/spec" },
  { errorType: "Context thiếu", improvement: "Cải tiến context builder" },
  { errorType: "Context nhiễu", improvement: "Thêm ranking/filtering" },
  { errorType: "Output sai format", improvement: "Thêm schema validation" },
  { errorType: "Tool call sai", improvement: "Siết tool permission" },
  { errorType: "Lỗi lặp lại", improvement: "Tạo regression test" },
  { errorType: "Confidence ảo", improvement: "Thêm confidence calibration" },
  { errorType: "Case rủi ro bị tự động xử lý", improvement: "Thêm human review gate" },
  { errorType: "Workflow sai nhánh", improvement: "Sửa control flow" },
  { errorType: "Không biết lỗi do đâu", improvement: "Cải tiến trace" },
] as const;

export const principle13ErrorCategories = [
  {
    index: "01",
    label: "Input error",
    description: "Input thiếu, sai, mơ hồ hoặc không hợp lệ.",
  },
  {
    index: "02",
    label: "Context error",
    description: "Context thiếu, nhiễu, cũ hoặc mâu thuẫn.",
  },
  {
    index: "03",
    label: "Instruction error",
    description: "Prompt/spec không rõ hoặc có nhiều cách hiểu.",
  },
  {
    index: "04",
    label: "Reasoning error",
    description: "Model suy luận sai dù input/context đúng.",
  },
  {
    index: "05",
    label: "Tool error",
    description: "Tool lỗi, trả dữ liệu sai, hoặc Agent gọi tool sai.",
  },
  {
    index: "06",
    label: "Output error",
    description: "Output sai schema, thiếu field hoặc không dùng được.",
  },
  {
    index: "07",
    label: "Control flow error",
    description: "Workflow đi sai nhánh, retry sai, dừng sai.",
  },
  {
    index: "08",
    label: "Governance error",
    description: "Thiếu human review, thiếu permission hoặc thiếu audit.",
  },
] as const;

export const principle13KnowledgeBaseFields = [
  { field: "error_id", note: "ID duy nhất" },
  { field: "error_type", note: "Loại lỗi (8 categories)" },
  { field: "task_type", note: "Loại task xảy ra lỗi" },
  { field: "root_cause", note: "Nguyên nhân gốc rễ" },
  { field: "failed_context", note: "Context đã dùng" },
  { field: "failed_output", note: "Output sai" },
  { field: "fix_applied", note: "Cách sửa đã áp dụng" },
  { field: "new_test_added", note: "Test mới được tạo" },
  { field: "spec_change", note: "Spec có thay đổi không" },
  { field: "sensor_change", note: "Sensor có thêm không" },
] as const;

export const principle13SignsCorrect = [
  "Lỗi được ghi lại có cấu trúc",
  "Lỗi được phân loại",
  "Có root cause analysis",
  "Lỗi lặp lại thành test",
  "Lỗi mơ hồ thành spec update",
  "Lỗi output thành validator",
  "Lỗi context thành context rule",
  "Lỗi rủi ro thành human review gate",
  "Có regression testing sau khi sửa",
] as const;

export const principle13SignsWrong = [
  "Lỗi chỉ được sửa thủ công",
  "Lỗi lặp lại nhiều lần",
  "Không phân loại lỗi",
  "Không biết root cause",
  "Chỉ đổi model khi lỗi xảy ra",
  "Không thêm test",
  "Không cập nhật spec",
  "Không dùng trace để học từ lỗi",
] as const;

export const principle13AntiPatterns = [
  {
    title: "Fix-and-Forget",
    body: "Sửa xong rồi bỏ qua — không thêm lớp phòng thủ nào.",
    loop: "open",
  },
  {
    title: "Manual Recovery Only",
    body: "Con người vá tay mỗi lần — harness không được cập nhật.",
    loop: "open",
  },
  {
    title: "Blame-The-Model",
    body: "Đổ lỗi hoàn toàn cho model — bỏ qua thiếu sót của hệ thống.",
    loop: "broken",
  },
  {
    title: "No Learning Loop",
    body: "Cùng một lỗi lặp đi lặp lại qua nhiều sprint.",
    loop: "repeat",
  },
] as const;

export const principle13Intro = {
  simple:
    "Error as feedback nghĩa là: lỗi không chỉ để sửa tạm thời, mà phải được dùng để cải tiến harness.",
  note: "Mỗi lỗi lặp lại nên trở thành một test, rule, sensor hoặc spec mới.",
} as const;

export const principle13Summary = {
  headline:
    "Error as feedback = biến lỗi thành cải tiến cho guide, sensor, spec, test, context hoặc workflow.",
  points: [
    "Lỗi không chỉ để sửa.",
    "Lỗi là dữ liệu để harness trưởng thành.",
  ],
} as const;
