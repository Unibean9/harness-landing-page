import { getSiteUrlFromRequest } from "@/lib/seo/request-site-url";
import { SITE } from "@/lib/seo/site";
import { HARNESS_ENGINEERING_DEFINITION, HOME_FAQ_ITEMS } from "@/lib/seo/home-aeo";

export async function HomeJsonLd() {
  const siteUrl = await getSiteUrlFromRequest();
  const pageUrl = siteUrl;
  const imageUrl = `${siteUrl}${SITE.ogImage.path}`;

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: "Learn Harness Engineering - Làm chủ AI Coding Agent",
        description: SITE.defaultDescription,
        inLanguage: "vi",
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: SITE.ogImage.width,
          height: SITE.ogImage.height,
        },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${pageUrl}/#harness-engineering`,
        name: "Harness Engineering",
        description: HARNESS_ENGINEERING_DEFINITION,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Harness Engineering Glossary",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: HOME_FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
