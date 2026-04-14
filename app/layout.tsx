import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Null Hub Entertainment — Scripts Premium",
  description: "A plataforma definitiva de scripts para entretenimento digital",
  keywords: ["scripts", "entretenimento", "nullhub", "premium", "api"],
  authors: [{ name: "Null Hub Entertainment" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans bg-darker text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
