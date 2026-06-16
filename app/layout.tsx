import type { Metadata } from "next";
import { Inter, Libre_Caslon_Display } from "next/font/google";
import { SkipToContent } from "@/components/layout/skip-to-content";
import Providers from "@/lib/providers";
import { buildOgImageMetadata } from "@/lib/seo/og-image";
import { RootJsonLd } from "@/lib/seo/root-json-ld";
import { SITE, getSiteUrl } from "@/lib/seo/site";
import "./globals.css";

const libreCaslon = Libre_Caslon_Display({
  variable: "--font-libre-caslon",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  adjustFontFallback: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  adjustFontFallback: true,
});

const ogImage = buildOgImageMetadata();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.defaultDescription,
  keywords: [
    "Harness Engineering",
    "AI Coding Agent",
    "prompt engineering",
    "context engineering",
    "guardrails",
    "harness",
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.defaultDescription,
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: getSiteUrl(),
    images: ogImage.openGraph?.images,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.defaultDescription,
    images: ogImage.twitter?.images,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${libreCaslon.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip">
        <Providers>
          <SkipToContent />
          {children}
          <RootJsonLd />
        </Providers>
      </body>
    </html>
  );
}
