export interface PrincipleCallout {
  title: string;
  paragraphs: string[];
  variant: "evidence" | "practice" | "story" | "warning";
}

export interface Principle {
  id: number;
  slug: string;
  title: string;
  shortLabel: string;
  quote: string;
  body: string[];
  callout?: PrincipleCallout;
}

export function getPrincipleHref(slug: string) {
  return `/nguyen-ly/${slug}`;
}

export function getPrincipleBySlug(slug: string) {
  return principles.find((principle) => principle.slug === slug);
}

export interface PrincipleNavItem {
  slug: string;
  title: string;
  href: string;
}

export function getPrinciplesNavItems(): PrincipleNavItem[] {
  return principles.map((principle) => ({
    slug: principle.slug,
    title: principle.title,
    href: getPrincipleHref(principle.slug),
  }));
}

export interface PrinciplePagerLink {
  label: string;
  href: string;
}

export function getPrinciplePager(slug: string): {
  prev?: PrinciplePagerLink;
  next?: PrinciplePagerLink;
} {
  const items = getPrinciplesNavItems();
  const index = items.findIndex((item) => item.slug === slug);
  if (index === -1) return {};

  return {
    prev:
      index > 0
        ? { label: items[index - 1].title, href: items[index - 1].href }
        : undefined,
    next:
      index < items.length - 1
        ? { label: items[index + 1].title, href: items[index + 1].href }
        : undefined,
  };
}

export const principles: Principle[] = [
  {
    id: 1,
    slug: "harness-first",
    title: "Harness-first",
    shortLabel: "Harness-first",
    quote: "Khi Agent hoạt động không hiệu quả, hãy tối ưu Harness trước khi tối ưu Model.",
    body: [
      "Năng lực của mô hình và độ tin cậy khi thực thi là hai yếu tố hoàn toàn khác nhau. Công thức chuẩn trong ngành hiện nay là: Agent = Model + Harness. Harness bao gồm toàn bộ cơ sở hạ tầng kỹ thuật nằm bên ngoài trọng số (weights) của mô hình AI.",
      "Nguyên tắc tối thượng: khi sự cố xảy ra, đừng vội đổi mô hình trước — hãy kiểm tra hệ thống harness. Đổi API đắt tiền hơn là lựa chọn tốn kém nhất và thường không giải quyết được gốc rễ vấn đề.",
    ],
    callout: {
      variant: "evidence",
      title: "Dẫn chứng thí nghiệm Anthropic (Opus 4.5)",
      paragraphs: [
        "Cùng một mô hình Opus 4.5: không có harness thì hỏng game trong khoảng 20 phút; có harness đầy đủ thì hoàn thành game phức tạp trong khoảng 6 giờ (200 lần thử).",
        "Model mạnh không tự cứu production — harness mới là biến số quyết định kết quả thực thi.",
      ],
    },
  },
  {
    id: 2,
    slug: "harnessability",
    title: "Harnessability",
    shortLabel: "Harnessability",
    quote: "Hệ thống phải được thiết kế để Agent có thể hiểu và được Harness kiểm soát.",
    body: [
      "Không phải dự án nào cũng dễ dàng cho AI làm việc. Harnessability đòi hỏi dự án có các điểm tựa môi trường (ambient affordances) rõ ràng giúp AI đọc hiểu và điều hướng.",
      "Dự án dùng ngôn ngữ định kiểu mạnh, ranh giới module rõ ràng, hoặc framework chuẩn mực (như Spring) giúp AI tránh vô số lỗi. Greenfield có thể thiết kế tính năng này từ ngày đầu; legacy chắp vá sẽ rất khó để AI tự chủ thực thi.",
    ],
  },
  {
    id: 3,
    slug: "event-channel-agnostic",
    title: "Event/channel agnostic",
    shortLabel: "Event agnostic",
    quote: "Control layer phải độc lập với kênh kích hoạt — mọi luồng đi qua cùng một Harness.",
    body: [
      "Mọi hành vi của Coding Agent, dù kích hoạt từ chat, webhook, API, cron hay UI, đều cần bao bọc bởi outer harness chuyên biệt cho hệ thống đó.",
      "Harness đóng vai trò control system tập trung, đảm bảo mọi luồng lệnh đi qua các lớp đánh giá và kiểm thử đồng nhất thay vì để AI tự do thực thi trực tiếp.",
    ],
  },
  {
    id: 4,
    slug: "production-controllability",
    title: "Production controllability",
    shortLabel: "Production control",
    quote: "Mọi hành vi của Agent phải có thể quan sát, giải thích và khôi phục khi cần thiết.",
    body: [
      "Để Agent sẵn sàng cho môi trường thực tế, hệ thống cần vòng lặp chẩn đoán (Diagnostic Loop). Khi có sự cố, hệ thống không sụp đổ mà quy lỗi vào một trong năm lớp phòng thủ: đặc tả tác vụ, cung cấp ngữ cảnh, môi trường thực thi, phản hồi xác minh, hoặc quản lý trạng thái.",
      "Khả năng truy vết lỗi và sửa chữa từng lớp là cốt lõi duy trì tính ổn định của hệ thống.",
    ],
  },
  {
    id: 5,
    slug: "guide-and-sensor",
    title: "Guide & Sensor",
    shortLabel: "Guide & Sensor",
    quote: "Mọi Agent cần được hướng dẫn trước khi hành động và được đánh giá sau khi hành động.",
    body: [
      "Guides (feedforward): hướng dẫn dự đoán và điều hướng AI trước khi hành động — prompt, tài liệu cấu trúc, spec — giúp tăng xác suất làm đúng ngay lần đầu.",
      "Sensors (feedback): giám sát sau khi AI hành động — linter, test tự động — giúp AI tự phát hiện lỗi và sửa chữa.",
    ],
    callout: {
      variant: "practice",
      title: "Hai phương thức cảm biến",
      paragraphs: [
        "Computational (tính toán): chạy bằng CPU, rẻ, nhanh, tất định — linter, unit test, schema check.",
        "Inferential (suy luận): dùng chính AI làm giám khảo ngữ nghĩa, chậm hơn, mang tính xác suất — phù hợp khi luật cứng không đủ.",
      ],
    },
  },
  {
    id: 6,
    slug: "spec-as-source",
    title: "Spec-as-source",
    shortLabel: "Spec-as-source",
    quote: "Specification phải trở thành nguồn sự thật chính thức — không chỉ tài liệu tham khảo.",
    body: [
      "Quy tắc kiến trúc không nên chỉ nằm trong đầu kỹ sư hoặc tin nhắn chat cũ. Mọi đặc tả phải được số hóa thành tệp trong hệ thống.",
      "Mỗi tác vụ phải có Definition of Done có thể máy móc xác minh (test xanh, linter sạch). Nếu không, AI sẽ tự bịa ra định nghĩa hoàn thành của riêng nó.",
    ],
    callout: {
      variant: "practice",
      title: "Thực hành tốt nhất: tệp AGENTS.md",
      paragraphs: [
        "Đặt AGENTS.md ở gốc repo: tech stack, quy ước đội ngũ, lệnh xác minh cụ thể.",
        "Đây thường là bước ROI cao nhất để bắt đầu harness — chi phí thấp, tác động lớn lên mọi phiên agent sau đó.",
      ],
    },
  },
  {
    id: 7,
    slug: "human-as-control-point",
    title: "Human as control point",
    shortLabel: "Human control",
    quote: "Con người là control point chính thức — tham gia đúng lúc khi rủi ro cao, không phải mọi lúc.",
    body: [
      "Một bộ harness tốt không nhằm loại bỏ con người. AI không có trách nhiệm xã hội, không cảm giác ghê tởm trước file 300 dòng, cũng không hiểu món nợ kỹ thuật nào công ty chấp nhận.",
      "Lập trình viên vận hành vòng lặp điều hướng (steering loop): ra quyết định, thiết kế môi trường, và pause khi thiếu thông tin hoặc rủi ro cao.",
    ],
  },
  {
    id: 8,
    slug: "application-owned-control-flow",
    title: "Application-owned control flow",
    shortLabel: "App-owned flow",
    quote: "Harness làm chủ luồng chạy — LLM không tự quyết mọi branch, retry và side effect.",
    body: [
      "Sự linh hoạt vô hạn (mọi ngôn ngữ, mọi cấu trúc) là kẻ thù của bảo trì ở quy mô lớn. Để AI tạo code đáng tin ở scale lớn, phải giới hạn không gian giải pháp.",
      "Harness ép AI tuân thủ ranh giới module, mẫu kiến trúc và cấu trúc dữ liệu chuẩn hóa. LLM không được tự quyết mọi luồng chạy theo ý thích.",
    ],
  },
  {
    id: 9,
    slug: "small-focused-agents",
    title: "Small focused agents",
    shortLabel: "Small agents",
    quote: "Chia mục tiêu lớn thành khối xây dựng nhỏ — thiết kế, lập trình, đánh giá, kiểm thử.",
    body: [
      "Giới hạn ranh giới hành động giúp quản lý agent dễ hơn. Agent/module nhỏ, trách nhiệm rõ, dễ test, dễ thay thế, dễ kiểm soát context và prompt riêng.",
      "Các khối nhỏ trở thành LEGO để lắp ráp nhiệm vụ phức tạp thay vì một agent khổng lồ làm mọi thứ.",
    ],
    callout: {
      variant: "story",
      title: "OpenAI: 1 triệu dòng mã trong 5 tháng",
      paragraphs: [
        "Ba kỹ sư không tự viết code — họ thiết kế môi trường và chia mục tiêu lớn thành khối xây dựng nhỏ để AI tự lắp ráp.",
        "Bí quyết không nằm ở model lớn hơn, mà ở decomposition và harness cho từng khối.",
      ],
    },
  },
  {
    id: 10,
    slug: "context-ownership",
    title: "Context ownership",
    shortLabel: "Context ownership",
    quote: "Context window là tài nguyên đắt — chỉ đưa vào dữ liệu cần thiết.",
    body: [
      "Nếu không kiểm soát, agent đốt token vào xung đột môi trường (lỗi cài thư viện) thay vì tác vụ chính. Hệ thống cần context engineering để chọn lọc và đưa đúng dữ liệu.",
      "Context builder rõ ràng, tránh noise, và chủ động quản lý cửa sổ ngữ cảnh là nền tảng của nguyên lý này.",
    ],
    callout: {
      variant: "warning",
      title: "Cảnh báo: hội chứng lo lắng ngữ cảnh (context anxiety)",
      paragraphs: [
        "Khi agent cảm nhận context sắp cạn, nó vội đưa ra giải pháp kém tối ưu và tuyên bố hoàn thành sớm — bỏ qua kiểm thử.",
        "Output trông xong nhưng chất lượng sụt mạnh. Harness phải phát hiện và can thiệp trước khi agent rush.",
      ],
    },
  },
  {
    id: 11,
    slug: "structured-output-first",
    title: "Structured-output-first",
    shortLabel: "Structured output",
    quote: "Đầu ra có cấu trúc để sensor tính toán kiểm tra tự động trước khi execute.",
    body: [
      "Để Sensors computational kiểm tra sản phẩm AI tự động, output bắt buộc có cấu trúc tiêu chuẩn. Các đội thường yêu cầu AI phân tích theo data shapes chuẩn tại ranh giới module.",
      "Khi AI trả về object hoặc tool calls chuẩn định dạng, harness chạy structural tests trước khi áp dụng mã nguồn.",
    ],
  },
  {
    id: 12,
    slug: "traceable-state",
    title: "Traceable state",
    shortLabel: "Traceable state",
    quote: "State phải lưu input, context, output, action, error và business result.",
    body: [
      "Với tác vụ dài hơn 30 phút, tỷ lệ thất bại tăng vọt nếu không có bộ nhớ trạng thái. Phiên mới không được mất phát hiện trước đó.",
      "State management là một trong năm lớp phòng thủ bắt buộc — lưu kết quả, bối cảnh và lỗi để tiếp tục công việc trơn tru.",
    ],
  },
  {
    id: 13,
    slug: "error-as-feedback",
    title: "Error as feedback",
    shortLabel: "Error as feedback",
    quote: "Lỗi là tín hiệu — harness thiếu tool, guardrail hoặc tài liệu.",
    body: [
      "Khi AI làm sai, đó không phải lỗi của model ngốc nghếch. Mỗi lỗi là signal chỉ ra hệ thống thiếu công cụ, guardrails hoặc tài liệu hướng dẫn.",
      "Kỹ sư thu thập lỗi, viết rule/test/spec mới để vá harness — đảm bảo lỗi tương tự không lặp lại. Lỗi được compact để retry; lỗi lặp thành regression test.",
    ],
  },
];
