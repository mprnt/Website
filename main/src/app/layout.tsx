import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

const description =
  "QR-based smart printing for individuals, and flexible business models - from existing-printer integration to complete MPRNT Stations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "MPRNT - Print from your phone. Earn from your printer.",
    template: "%s | MPRNT",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "MPRNT - Print from your phone. Earn from your printer.",
    description,
    url: "/",
  },
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
    <html lang="en" className={sans.variable}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
