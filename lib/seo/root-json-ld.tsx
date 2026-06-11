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
        name: SITE.name,
        url: siteUrl,
        description: SITE.defaultDescription,
      },
      {
        "@type": "ItemList",
        name: "Core Setup Phases",
        itemListElement: [
          { "@type": "ListItem", position: 1, url: `${siteUrl}/#phase-1` },
          { "@type": "ListItem", position: 2, url: `${siteUrl}/#phase-2` },
          { "@type": "ListItem", position: 3, url: `${siteUrl}/#phase-3` },
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
