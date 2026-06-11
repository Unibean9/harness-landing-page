export const SITE = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Harness Knowledge",
  shortName: "Harness",
  defaultDescription:
    "Website kiến thức tiếng Việt về harness, từ khái niệm nền tảng đến nguyên lý, dự án thực hành và tài nguyên học tập.",
  locale: "vi_VN",
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173").replace(/\/$/, "");
}
