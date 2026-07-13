import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HSF ERP | Human Safety Foundation",
    template: "%s | HSF ERP",
  },
  description:
    "Human Safety Foundation's integrated management platform for accountable operations and sustainable impact.",
  icons: {
    icon: "/branding/hsf-mark.png",
    apple: "/branding/hsf-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#087a43",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
