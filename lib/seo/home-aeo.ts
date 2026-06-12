export const HARNESS_ENGINEERING_DEFINITION =
  "Harness Engineering là kỷ luật thiết kế môi trường có cấu trúc xung quanh các mô hình AI — bao gồm công cụ, guardrails, quản lý trạng thái và vòng phản hồi — giúp AI vận hành đáng tin cậy, an toàn và lặp lại được.";

export const HOME_FAQ_ITEMS = [
  {
    question: "Harness Engineering là gì?",
    answer: HARNESS_ENGINEERING_DEFINITION,
  },
  {
    question: "Harness Engineering khác Prompt Engineering thế nào?",
    answer:
      "Prompt Engineering tập trung vào cách viết câu lệnh để AI hiểu yêu cầu. Harness Engineering rộng hơn: prompt chỉ là đầu vào, còn có kiểm tra, công cụ thực thi, guardrails và phản hồi để AI vận hành trong hệ thống đáng tin cậy.",
  },
  {
    question: "Harness Engineering khác Context Engineering thế nào?",
    answer:
      "Context Engineering giúp AI có đủ dữ liệu và ngữ cảnh để trả lời. Harness Engineering bao trùm context nhưng thêm lớp vận hành: ràng buộc, xác minh, quản lý trạng thái và phê duyệt con người để kết quả không chỉ đúng lúc trả lời mà còn đúng khi thực thi.",
  },
  {
    question: "Vì sao cần Harness Engineering?",
    answer:
      "Model AI mạnh vẫn có thể hiểu sai mục tiêu, thiếu công cụ kiểm chứng, dễ ảo giác và tích tụ lỗi khi chạy dài. Harness Engineering xây pipeline có kiểm soát để agent coding và workflow automation hoạt động ổn định, không phụ thuộc may rủi.",
  },
] as const;
