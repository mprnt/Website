import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const description =
  "QR-based smart printing for individuals, and flexible business models - from existing-printer integration to complete MPRNT Stations.";
const title = "MPRNT - Print from your phone. Earn from your printer.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: {
    default: title,
    template: "%s | MPRNT",
  },
  description,
  keywords: ["MPRNT", "MPRNT printing", "smart printing", "QR printing", "print from phone", "self-service printing", "printer revenue share", "MPRNT Station"],
  authors: [{ name: SITE.operator }],
  creator: SITE.operator,
  publisher: SITE.operator,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: { telephone: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={sans.variable}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
