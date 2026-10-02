import type { Metadata } from "next";
import { OrderProvider } from "@/context/OrderContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

export const metadata: Metadata = {
  title: "MPRNT - Print from your phone. Earn from your printer.",
  description: "QR-based smart printing for individuals, and flexible business models - from existing-printer integration to complete MPRNT Stations.",
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
          <OrderProvider>
            {children}
          </OrderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
