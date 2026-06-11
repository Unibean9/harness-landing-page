import type { Metadata } from "next";
import { Inter, Libre_Caslon_Display } from "next/font/google";
import Providers from "@/lib/providers";
import { RootJsonLd } from "@/lib/seo/root-json-ld";
import { SITE, getSiteUrl } from "@/lib/seo/site";
import "./globals.css";

const libreCaslon = Libre_Caslon_Display({
  variable: "--font-libre-caslon",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.defaultDescription,
  keywords: ["harness", "kiến thức harness", "documentation", "học harness", "an toàn"],
  openGraph: {
    title: SITE.name,
    description: SITE.defaultDescription,
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: getSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.defaultDescription,
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
      className={`${libreCaslon.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <RootJsonLd />
        </Providers>
      </body>
    </html>
  );
}
