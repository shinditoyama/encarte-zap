import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/shop/Footer";
import { Header } from "@/components/shop/Header";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Supermercado",
  description:
    "Landing page interativa para supermercado com foco em ofertas semanais e encarte digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", montserrat.variable)}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="grow bg-secondary">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
