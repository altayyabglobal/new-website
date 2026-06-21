import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/site.config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Al-Tayyab Consultants — MBBS in Bangladesh from Kashmir`,
  description: `Al-Tayyab guides Kashmiri students into BMDC/NMC-approved MBBS colleges in Bangladesh. 650+ students placed. Free consultation — you pay the college directly, never us.`,
  metadataBase: new URL(`https://www.${site.domain}`),
  alternates: {
    canonical: `https://www.${site.domain}`,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: `Al-Tayyab Consultants — MBBS in Bangladesh from Kashmir`,
    description: `Al-Tayyab guides Kashmiri students into BMDC/NMC-approved MBBS colleges in Bangladesh. 650+ students placed. Free consultation — you pay the college directly, never us.`,
    type: "website",
    url: `https://www.${site.domain}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Al-Tayyab Consultants — MBBS in Bangladesh from Kashmir`,
    description: `Al-Tayyab guides Kashmiri students into BMDC/NMC-approved MBBS colleges in Bangladesh. 650+ students placed. Free consultation — you pay the college directly, never us.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background text-foreground"
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
