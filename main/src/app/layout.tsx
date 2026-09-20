import type { Metadata } from "next";
import { OrderProvider } from "@/context/OrderContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "MPrnt - Quick, Easy Printing",
  description: "Self-service digital printing kiosk. Print documents instantly at your convenience.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
