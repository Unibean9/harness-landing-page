export const principle13Toc = [
  { id: "p13-diagram", label: "Learning loop" },
  { id: "p13-why-exists", label: "Vì sao nguyên lý này tồn tại" },
  { id: "p13-the-principle", label: "Nguyên lý cốt lõi" },
  { id: "p13-why-matters", label: "Tại sao quan trọng" },
  { id: "p13-practice", label: "Thực hành" },
  { id: "p13-antipatterns", label: "Anti-pattern" },
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
