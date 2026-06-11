import type { MetadataRoute } from "next";
import { getPublicSubjectsForSeo } from "@/lib/seo/fetch-subjects-public";
import { getSiteUrl } from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const subjects = await getPublicSubjectsForSeo();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/login`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = subjects.flatMap((subject) => [
    {
      url: `${siteUrl}/luyen-de/${subject.slug}`,
      lastModified: subject.updatedAt || now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/luyen-de/${subject.slug}/thi-thu`,
      lastModified: subject.updatedAt || now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ]);

  return [...staticRoutes, ...dynamicRoutes];
}
