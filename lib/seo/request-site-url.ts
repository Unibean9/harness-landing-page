import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/seo/site";

export async function getSiteUrlFromRequest() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") || "https";

  if (!host) return getSiteUrl();

  return `${protocol}://${host}`;
}
