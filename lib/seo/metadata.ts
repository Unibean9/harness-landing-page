import type { Metadata } from "next";
import { SITE, getSiteUrl } from "@/lib/seo/site";

interface BuildPageMetadataOptions {
  title: string;
  description?: string;
  path: string;
  noindex?: boolean;
}

function withBrandSuffix(title: string) {
  return title.includes(SITE.shortName) ? title : `${title} | ${SITE.shortName}`;
}

export function buildPageMetadata({
  title,
  description = SITE.defaultDescription,
  path,
  noindex = false,
}: BuildPageMetadataOptions): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${getSiteUrl()}${normalizedPath === "/" ? "" : normalizedPath}`;
  const socialTitle = withBrandSuffix(title);

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
