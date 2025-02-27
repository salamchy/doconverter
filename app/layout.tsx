import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocConverter - Convert Documents Easily",
  description:
    "Free online document converter. Convert PDF to Word, Word to PDF, PDF to JPG, and more.",
  keywords:
    "document converter, pdf to word, word to pdf, pdf to jpg, jpg to pdf, pdf to excel, excel to pdf, pdf to ppt, ppt to pdf",
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
  openGraph: {
    title: "DocConverter - Convert Documents Easily",
    description:
      "Free online document converter. Convert PDF to Word, Word to PDF, PDF to JPG, and more.",
    url: "https://yourwebsite.com",
    siteName: "DocConverter",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "DocConverter - Convert Documents Easily",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocConverter - Convert Documents Easily",
    description:
      "Free online document converter. Convert PDF to Word, Word to PDF, PDF to JPG, and more.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster position="bottom-right" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
