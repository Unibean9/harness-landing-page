import type { Metadata } from "next";
import { SITE } from "@/lib/seo/site";

export function buildOgImageMetadata(): Pick<Metadata, "openGraph" | "twitter"> {
  const image = {
    url: SITE.ogImage.path,
    width: SITE.ogImage.width,
    height: SITE.ogImage.height,
    alt: SITE.ogImage.alt,
  };

  return {
    openGraph: {
      images: [image],
    },
    twitter: {
      images: [SITE.ogImage.path],
    },
  };
}
