export const SITE = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Harness Knowledge",
  shortName: "Harness",
  defaultDescription:
    "Website kiến thức tiếng Việt về Harness Engineering: thiết lập môi trường, quản lý context, state và tự động xác minh cho AI Coding Agent.",
  locale: "vi_VN",
  ogImage: {
    path: "/metadata.png",
    width: 1731,
    height: 909,
    alt: "Harness Engineering — Môi trường vận hành đáng tin cậy cho AI Agent",
  },
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173").replace(/\/$/, "");
}
