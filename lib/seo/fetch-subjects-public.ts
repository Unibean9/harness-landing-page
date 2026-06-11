import { cache } from "react";

export interface SeoSubject {
  slug: string;
  updatedAt?: string;
}

export const getPublicSubjectsForSeo = cache(async (): Promise<SeoSubject[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/";
  const endpoint = `${apiUrl.replace(/\/$/, "")}/api/v1/subjects/public`;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 600 },
    });

    if (!response.ok) return [];

    const payload = (await response.json()) as {
      data?: Array<{ slug?: string; updatedAt?: string }>;
    };

    return (payload.data || [])
      .filter((subject) => typeof subject.slug === "string")
      .map((subject) => ({
        slug: subject.slug as string,
        updatedAt: subject.updatedAt,
      }));
  } catch {
    return [];
  }
});

export async function getSubjectSeoBySlug(slug: string) {
  const subjects = await getPublicSubjectsForSeo();
  return subjects.find((subject) => subject.slug === slug) || null;
}
