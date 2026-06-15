export interface SddPrinciple {
  id: number;
  slug: string;
  title: string;
  shortLabel: string;
  quote: string;
  body: string[];
}

export function getSddHref(slug: string) {
  return `/spec-driven-development/${slug}`;
}

export function getSddBySlug(slug: string) {
  return sddPrinciples.find((principle) => principle.slug === slug);
}

export interface SddNavItem {
  slug: string;
  title: string;
  href: string;
}

export function getSddNavItems(): SddNavItem[] {
  return sddPrinciples.map((principle) => ({
    slug: principle.slug,
    title: principle.title,
    href: getSddHref(principle.slug),
  }));
}

export interface SddPagerLink {
  label: string;
  href: string;
}

export function getSddPager(slug: string): {
  prev?: SddPagerLink;
  next?: SddPagerLink;
} {
  const items = getSddNavItems();
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

export const sddPrinciples: SddPrinciple[] = [
  {
    id: 1,
    slug: "executable-specifications",
    title: "Executable Specifications",
    shortLabel: "Executable Specs",
    quote: "Đặc tả không chỉ để đọc. Chúng phải có thể chạy, kiểm tra và làm cơ sở cho mọi biến đổi.",
    body: [
      "Specification phải trở thành động cơ của workflow: sinh plan, tasks, implementation và validation từ cùng một nguồn.",
    ],
  },
  {
    id: 2,
    slug: "constitutional-governance",
    title: "Constitutional Governance",
    shortLabel: "Governance",
    quote: "Quy tắc hệ thống phải được mã hóa, phiên bản hóa và thực thi nhất quán trên mọi luồng phát triển.",
    body: [
      "Nguyên tắc không còn là lời khuyên — chúng trở thành ràng buộc mà hệ thống thực thi trên mọi luồng phát triển.",
    ],
  },
  {
    id: 3,
    slug: "transformation-automation",
    title: "Transformation Automation",
    shortLabel: "Automation",
    quote: "Từ đặc tả đến mã nguồn phải đi qua pipeline tự động, có thể lặp lại và có thể kiểm chứng.",
    body: [
      "Không phải tự động hóa việc viết code — mà tự động hóa dòng chảy tri thức từ ý tưởng tới hệ thống.",
    ],
  },
  {
    id: 4,
    slug: "living-documentation",
    title: "Living Documentation",
    shortLabel: "Living Docs",
    quote: "Tài liệu phải sinh ra từ hệ thống thực tế và cập nhật theo mọi thay đổi, không bao giờ lỗi thời.",
    body: [
      "Tài liệu phải sinh ra từ hệ thống thực tế và cập nhật theo mọi thay đổi — không bao giờ lỗi thời.",
    ],
  },
  {
    id: 5,
    slug: "continuous-validation",
    title: "Continuous Validation",
    shortLabel: "Validation",
    quote: "Mọi thay đổi phải được xác minh liên tục trước khi được coi là hoàn thành.",
    body: [
      "Hầu hết đội validate quá muộn — giống xây xong ngôi nhà rồi mới gọi người kiểm tra.",
      "Continuous Validation đưa kiểm tra về phía trước: validate ở specification, plan, tasks, code và deployment.",
      "Validation không phải testing — nó hỏi chúng ta có đang build đúng thứ không, không chỉ hệ thống có chạy không.",
      "Trong Harness Engineering, validation trở thành infrastructure: context + constraints + validation gates.",
    ],
  },
];
