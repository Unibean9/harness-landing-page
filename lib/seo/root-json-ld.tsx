import { getSiteUrlFromRequest } from "@/lib/seo/request-site-url";
import { SITE } from "@/lib/seo/site";

export async function RootJsonLd() {
  const siteUrl = await getSiteUrlFromRequest();

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE.name,
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: SITE.name,
        url: siteUrl,
        description: SITE.defaultDescription,
        inLanguage: "vi",
      },
      {
        "@type": "ItemList",
        name: "Nội dung trang chủ",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Khái niệm", url: `${siteUrl}/#dinh-nghia` },
          { "@type": "ListItem", position: 2, name: "Vấn đề", url: `${siteUrl}/#van-de` },
          { "@type": "ListItem", position: 3, name: "Mức độ", url: `${siteUrl}/#muc-do` },
          { "@type": "ListItem", position: 4, name: "So sánh", url: `${siteUrl}/#so-sanh` },
          { "@type": "ListItem", position: 5, name: "Khám phá", url: `${siteUrl}/#kham-pha` },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
